// ═══════════════════════════════════════════════════════════════════════
// FUTDRAFT MULTIPLAYER — local (mesmo dispositivo) e online (Firebase)
// ═══════════════════════════════════════════════════════════════════════
//
// Este arquivo é autocontido: reaproveita as funções "puras" já existentes
// em game.js / data.js (getFormationSlots, getTeamPoolFor, weightedAvg,
// teamAtk/teamDef/teamOverall, poissonSample, simulateMatch, pickScorers,
// distributeMinutes, FORMATIONS, POS_LABELS, POS_ROLE, playSound, settings,
// speedMul) sem modificar o estado global `state` do modo solo.
//
// Estado próprio do multiplayer fica todo dentro de MP (não conflita com
// `state`, que continua exclusivo do modo solo/campanha individual).

// ═══════════════════════════════════════════
// HELPERS GENÉRICOS — pool de times e sorteio elegível por mode/squad
// arbitrários (versões generalizadas de getTeamPool()/pickEligibleTeam()
// do game.js, que só conhecem `state` do modo solo)
// ═══════════════════════════════════════════
function getTeamPoolFor(mode) {
  if (mode === "brasil") return BRAZIL_TEAMS;
  if (mode === "copadomundo") return WORLD_CUP_TEAMS;
  if (mode === "libertadores") {
    const brFiltered = BRAZIL_TEAMS.filter(t => LIBERTADORES_BR_IDS.has(t.id));
    return LIBERTADORES_TEAMS.concat(brFiltered);
  }
  return TEAMS;
}

function pickEligibleTeamFromPool(pool, formation, squad) {
  const slots = getFormationSlots(formation);
  const usedNames = new Set(squad.map(s => s.name));
  const slotsRemaining = {};
  slots.forEach(s => { slotsRemaining[s.pos] = (slotsRemaining[s.pos] || 0) + 1; });
  squad.forEach(s => { if (slotsRemaining[s.pos] != null) slotsRemaining[s.pos]--; });

  const hasEligiblePlayer = (team) => team.players.some(p => {
    const pos = POS_LABELS[p.pos] || p.pos;
    return !usedNames.has(p.name) && (slotsRemaining[pos] || 0) > 0;
  });

  const candidates = pool.filter(hasEligiblePlayer);
  const finalPool = candidates.length ? candidates : pool;
  return finalPool[Math.floor(Math.random() * finalPool.length)];
}

// ═══════════════════════════════════════════
// NAVEGAÇÃO — voltar entre as telas do hub de multiplayer
// ═══════════════════════════════════════════
function mpBackFromModeSelect() {
  showPage(MP.kind === "online" ? "pageMpOnlineLobby" : "pageMpHub");
}
function mpBackFromResultType() {
  showPage("pageMpModeSelect");
}
function mpBackFromFormation() {
  showPage("pageMpResultType");
}

// ═══════════════════════════════════════════
// FIREBASE
// ═══════════════════════════════════════════
const FIREBASE_DB_URL = "https://multiplayer-test-ff8b2-default-rtdb.firebaseio.com";
let _fbApp = null, _fbDb = null;

function ensureFirebase() {
  if (_fbDb) return _fbDb;
  if (typeof firebase === "undefined") {
    throw new Error("Firebase SDK não carregado");
  }
  if (!firebase.apps || !firebase.apps.length) {
    _fbApp = firebase.initializeApp({ databaseURL: FIREBASE_DB_URL });
  } else {
    _fbApp = firebase.app();
  }
  _fbDb = firebase.database();
  return _fbDb;
}

// ═══════════════════════════════════════════
// ESTADO DO MULTIPLAYER
// ═══════════════════════════════════════════
const MP = {
  kind: null,          // "local" | "online"
  resultType: null,    // "direto" | "longe"
  mode: "champions",   // competição usada como pool de times
  formation: "4-3-3",

  // ── LOCAL ──
  local: {
    activeSide: "A",   // "A" | "B" — de quem é a vez de montar
    teams: {
      A: { name: "TIME A", squad: [], currentTeam: null, pickCount: 0 },
      B: { name: "TIME B", squad: [], currentTeam: null, pickCount: 0 },
    },
  },

  // ── ONLINE ──
  online: {
    roomCode: null,
    myKey: null,       // "p1" | "p2"
    oppKey: null,
    isHost: false,
    unsub: null,        // referência do listener pra poder desligar
    turnTimerInterval: null,
    lastTurnToken: null, // evita re-disparar autopick pro mesmo turno
    myName: "",
    oppName: "",
  },
};

const ONLINE_TURN_SECONDS = 30;

// ═══════════════════════════════════════════
// ENTRADA — abrir a escolha de tipo de partida
// (chamado a partir do botão na landing)
// ═══════════════════════════════════════════
function openMultiplayerHub() {
  showPage("pageMpHub");
}

function backToLandingFromMp() {
  cleanupOnlineRoom();
  showPage("pageLanding");
}

// ═══════════════════════════════════════════
// HUB: SOLO / LOCAL / ONLINE
// ═══════════════════════════════════════════
function mpChooseKind(kind) {
  MP.kind = kind;
  if (kind === "local") {
    showPage("pageMpModeSelect");
  } else if (kind === "online") {
    onlineShowCreateForm();
    showPage("pageMpOnlineEntry");
  }
}

// ═══════════════════════════════════════════
// SELEÇÃO DE MODO (competição) — multiplayer local
// ═══════════════════════════════════════════
function mpSelectMode(mode) {
  MP.mode = mode;
  showPage("pageMpResultType");
}

function mpSelectResultType(type) {
  MP.resultType = type;
  if (MP.kind === "local") {
    showPage("pageMpFormation");
    renderMpFormationGrid();
  } else if (MP.kind === "online") {
    // Host já está numa sala; envia config e segue pra escolha de formação
    onlineHostPublishConfig();
    showPage("pageMpFormation");
    renderMpFormationGrid();
  }
}

// ═══════════════════════════════════════════
// FORMAÇÃO — multiplayer local (escolhida 1x, vale pros dois times)
// ═══════════════════════════════════════════
function renderMpFormationGrid() {
  const grid = document.getElementById("mpFpGrid");
  if (!grid) return;
  grid.innerHTML = Object.entries(FORMATIONS).map(([name, fm]) => {
    const counts = { def: 0, mid: 0, atk: 0 };
    fm.rows.forEach(row => row.forEach(pos => {
      const role = POS_ROLE[pos];
      if (role === "def") counts.def++;
      else if (role === "mid") counts.mid++;
      else if (role === "atk") counts.atk++;
    }));
    const rowsHtml = fm.rows.map(row => `
      <div class="fpm-row">${row.map(pos => {
        const role = POS_ROLE[pos] || "mid";
        return `<div class="fpm-dot role-${role}">${pos}</div>`;
      }).join("")}</div>`).join("");
    return `<div class="fp-card" onclick="mpChooseFormation('${name}')">
      <div class="fp-name">${name}</div>
      <div class="fp-pitch-mini">${rowsHtml}</div>
      <div class="fp-balance">
        <span class="b-def" style="flex:${counts.def}"></span>
        <span class="b-mid" style="flex:${counts.mid}"></span>
        <span class="b-atk" style="flex:${counts.atk}"></span>
      </div>
      <div class="fp-tags">${fm.tags.map(t => `<span>${t}</span>`).join("")}</div>
    </div>`;
  }).join("");
}

function mpChooseFormation(fm) {
  MP.formation = fm;
  if (MP.kind === "local") {
    MP.local.activeSide = "A";
    MP.local.teams.A = { name: "TIME A", squad: [], currentTeam: null, pickCount: 0 };
    MP.local.teams.B = { name: "TIME B", squad: [], currentTeam: null, pickCount: 0 };
    showPage("pageMpLocalNames");
  } else if (MP.kind === "online") {
    onlineHostPublishFormation(fm);
  }
}

// ═══════════════════════════════════════════
// NOMES DOS TIMES — multiplayer local
// ═══════════════════════════════════════════
function mpStartLocalDraft() {
  const nameA = (document.getElementById("mpNameA").value || "").trim();
  const nameB = (document.getElementById("mpNameB").value || "").trim();
  MP.local.teams.A.name = nameA || "TIME A";
  MP.local.teams.B.name = nameB || "TIME B";
  MP.local.activeSide = "A";
  showPage("pageMpLocalDraft");
  buildMpHandoffScreen();
}

// Tela de "passa o celular" entre os dois lados, pra ficar claro de quem é a vez
function buildMpHandoffScreen() {
  const side = MP.local.activeSide;
  const team = MP.local.teams[side];
  const container = document.getElementById("pageMpLocalDraft");
  container.innerHTML = `
    <div class="mp-handoff">
      <div class="mp-handoff-badge side-${side.toLowerCase()}">${side === "A" ? "🔵" : "🔴"}</div>
      <div class="mp-handoff-title">VEZ DE ${team.name.toUpperCase()}</div>
      <p class="mp-handoff-desc">Passa o aparelho pro responsável por esse time.<br>Vocês vão montar os 11 jogadores, um time por vez.</p>
      <button class="btn-primary" onclick="mpBeginSideDraft()">ESTOU PRONTO →</button>
    </div>`;
}

function mpBeginSideDraft() {
  renderMpDraftLayout();
  mpDraftShowRoll();
}

// Monta o layout de draft (reaproveita estrutura visual do solo)
function renderMpDraftLayout() {
  const side = MP.local.activeSide;
  const team = MP.local.teams[side];
  const container = document.getElementById("pageMpLocalDraft");
  container.innerHTML = `
    <div class="game-layout">
      <div class="panel-left">
        <div class="mp-draft-header side-${side.toLowerCase()}">
          <span class="mp-draft-team-tag">${side === "A" ? "🔵" : "🔴"} ${team.name}</span>
          <span class="mp-draft-progress">${team.pickCount}/11</span>
        </div>
        <div id="mpStepRoll" class="panel-section active">
          <div class="rolled-team" id="mpRolledTeamDisplay" style="display:none">
            <div class="rolled-label">SAIU</div>
            <div class="rolled-flag" id="mpRolledFlag"></div>
            <div class="rolled-name" id="mpRolledName"></div>
            <div class="rolled-season" id="mpRolledSeason"></div>
            <div class="pick-label">ESCOLHA UM JOGADOR</div>
            <div class="player-list" id="mpPlayerList"></div>
          </div>
          <div class="roll-cta" id="mpRollCta">
            <p class="roll-desc" id="mpRollDesc">Role para sortear um time histórico</p>
            <button class="btn-roll" onclick="mpRollDice()">ROLAR <span class="dice-icon">⚄</span></button>
          </div>
        </div>
        <div id="mpStepFill" class="panel-section" style="display:none"></div>
      </div>
      <div class="panel-center">
        <div class="pitch-container">
          <div class="pitch" id="mpPitch"></div>
        </div>
      </div>
      <div class="panel-right">
        <div class="box-score-header">BOX SCORE · <span id="mpScoreCount">${team.pickCount}/11</span></div>
        <div class="score-bar">
          <span class="score-bar-atk">■ ATAQUE</span>
          <span class="score-bar-def">■ DEFESA</span>
        </div>
        <div class="score-list" id="mpScoreList"></div>
        <div class="overall-badge" id="mpOverallBadge" style="display:none">
          <div class="ob-score" id="mpObScore"></div>
          <div class="ob-breakdown" id="mpObBreakdown"></div>
        </div>
      </div>
    </div>`;
  mpBuildScoreList();
  mpRenderPitch();
}

function mpDraftShowRoll() {
  const side = MP.local.activeSide;
  const team = MP.local.teams[side];
  document.getElementById("mpStepRoll").style.display = "block";
  document.getElementById("mpStepRoll").classList.add("active");
  document.getElementById("mpStepFill").style.display = "none";
  const desc = document.getElementById("mpRollDesc");
  if (desc) desc.textContent = team.pickCount === 0
    ? `Role para sortear o primeiro time de ${team.name}`
    : `Jogador ${team.pickCount + 1}/11 — role para sortear um novo time`;
  document.getElementById("mpRollCta").style.display = "flex";
  document.getElementById("mpRolledTeamDisplay").style.display = "none";
}

function mpRollDice() {
  const side = MP.local.activeSide;
  const team = MP.local.teams[side];
  const pool = getTeamPoolFor(MP.mode);
  // Multiplayer local permite jogador repetido ENTRE os dois times (cada
  // time é uma "carreira" separada), mas dentro do mesmo time o sorteio
  // ainda evita cair num time sem ninguém aproveitável.
  const t = pickEligibleTeamFromPool(pool, MP.formation, team.squad);
  team.currentTeam = t;
  mpDisplayRolledTeam(t);
}

function mpDisplayRolledTeam(team) {
  document.getElementById("mpRollCta").style.display = "none";
  document.getElementById("mpRolledTeamDisplay").style.display = "block";
  document.getElementById("mpRolledFlag").textContent = team.flag;
  document.getElementById("mpRolledName").textContent = team.name;
  document.getElementById("mpRolledSeason").textContent = team.season;
  mpRenderPlayerList(team);
}

function mpRenderPlayerList(team) {
  const side = MP.local.activeSide;
  const squad = MP.local.teams[side].squad;
  const list = document.getElementById("mpPlayerList");
  const usedNames = new Set(squad.map(s => s.name));
  const slots = getFormationSlots(MP.formation);
  const sorted = [...team.players].sort((a, b) => b.overall - a.overall);

  list.innerHTML = sorted.map((p) => {
    const pos = POS_LABELS[p.pos] || p.pos;
    const elite = p.overall >= 90 ? "elite" : "";
    const used = usedNames.has(p.name);
    const slotsForPos = slots.filter(s => s.pos === pos).length;
    const takenForPos = squad.filter(s => s.pos === pos).length;
    const slotFull = takenForPos >= slotsForPos;
    const noSlot = slotsForPos === 0;
    const blocked = used || slotFull || noSlot;
    const tag = noSlot ? "sem slot" : slotFull ? "slot cheio" : used ? "já no time" : "";
    const originalIdx = team.players.indexOf(p);

    return `<div class="player-row${blocked ? " blocked" : ""}"
      ${blocked ? "" : `onclick="mpPickPlayer(${originalIdx})"`}>
      <span class="pr-pos">${pos}</span>
      <span class="pr-name">${p.name}</span>
      <span class="pr-ovr ${elite}">${p.overall}</span>
      ${tag ? `<span class="pr-tag">${tag}</span>` : ""}
    </div>`;
  }).join("");
}

function mpPickPlayer(idx) {
  const side = MP.local.activeSide;
  const team = MP.local.teams[side];
  const p = team.currentTeam.players[idx];
  const pos = POS_LABELS[p.pos] || p.pos;
  const slots = getFormationSlots(MP.formation);
  const takenSlots = new Set(team.squad.map(s => s.slotId));

  let slotId = null;
  for (const slot of slots) {
    if (slot.pos === pos && !takenSlots.has(slot.id)) { slotId = slot.id; break; }
  }
  if (slotId === null) return;

  team.squad.push({
    ...p,
    pos,
    rawPos: p.pos,
    slotId,
    team: team.currentTeam.name,
    season: team.currentTeam.season,
  });
  team.pickCount++;

  mpBuildScoreList();
  mpRenderPitch();
  const progEl = document.querySelector(".mp-draft-progress");
  if (progEl) progEl.textContent = `${team.pickCount}/11`;
  const scEl = document.getElementById("mpScoreCount");
  if (scEl) scEl.textContent = `${team.pickCount}/11`;

  setTimeout(() => {
    if (team.pickCount >= 11) mpShowCompletePanel();
    else mpDraftShowRoll();
  }, 450);
}

function mpShowCompletePanel() {
  const side = MP.local.activeSide;
  const team = MP.local.teams[side];
  document.getElementById("mpStepRoll").style.display = "none";
  const panel = document.getElementById("mpStepFill");
  panel.style.display = "block";
  const atk = Math.round(weightedAvg(team.squad, ATTACK_WEIGHTS, "rawPos", 70));
  const def = Math.round(weightedAvg(team.squad, DEFENSE_WEIGHTS, "rawPos", 70));
  const ovr = Math.round(weightedAvg(team.squad, OVERALL_WEIGHTS, "rawPos", 75));
  const isLastSide = side === "B";
  panel.innerHTML = `
    <div class="fill-squad-label">ESCALAÇÃO COMPLETA · ${team.name}<br>
      <span class="fill-count">11/11</span>
    </div>
    <div class="overall-inline">
      <span class="oi-score">${ovr}</span>
      <span class="oi-detail">${atk} atq · ${def} def</span>
    </div>
    <button class="btn-primary simulate-btn" onclick="mpAdvanceAfterSide()">
      ${isLastSide ? "VER RESULTADO →" : "PRÓXIMO TIME →"}
    </button>
  `;
}

function mpAdvanceAfterSide() {
  if (MP.local.activeSide === "A") {
    MP.local.activeSide = "B";
    buildMpHandoffScreen();
  } else {
    mpRunLocalResult();
  }
}

// ═══════════════════════════════════════════
// PITCH / SCORE LIST — versão multiplayer (idêntica visualmente ao solo)
// ═══════════════════════════════════════════
function mpRenderPitch() {
  const side = MP.local.activeSide;
  const squad = MP.local.teams[side].squad;
  const pitch = document.getElementById("mpPitch");
  if (!pitch) return;
  const rows = (FORMATIONS[MP.formation] || FORMATIONS["4-3-3"]).rows;
  pitch.innerHTML = "";
  let slotId = 0;
  for (const row of rows) {
    const rowEl = document.createElement("div");
    rowEl.className = "pitch-row";
    for (const pos of row) {
      const role = POS_ROLE[pos] || "mid";
      const inSquad = squad.find(s => s.slotId === slotId);
      const dot = document.createElement("div");
      dot.className = "player-dot";
      const circle = document.createElement("div");
      const nameEl = document.createElement("div");
      nameEl.className = "pd-name";
      if (inSquad) {
        circle.className = `pd-circle filled role-${role}`;
        circle.textContent = inSquad.overall;
        nameEl.textContent = inSquad.name.split(" ").pop();
      } else {
        circle.className = `pd-circle empty role-${role}`;
        circle.textContent = pos;
        nameEl.textContent = "—";
      }
      dot.appendChild(circle);
      dot.appendChild(nameEl);
      rowEl.appendChild(dot);
      slotId++;
    }
    pitch.appendChild(rowEl);
  }
}

function mpBuildScoreList() {
  const side = MP.local.activeSide;
  const squad = MP.local.teams[side].squad;
  const list = document.getElementById("mpScoreList");
  if (!list) return;
  const slots = getFormationSlots(MP.formation || "4-3-3");
  list.innerHTML = slots.map(slot => {
    const p = squad.find(s => s.slotId === slot.id);
    const cls = p ? (p.overall >= 90 ? "elite" : "filled") : "";
    const role = POS_ROLE[slot.pos] || "mid";
    return `<div class="score-row">
      <span class="sr-pos role-${role}">${slot.pos}</span>
      <span class="sr-name${p ? "" : " empty"}">${p ? p.name : "—"}</span>
      <span class="sr-ovr${cls ? " "+cls : ""}">${p ? p.overall : "—"}</span>
    </div>`;
  }).join("");
  mpUpdateOverallBadge(squad);
}

// Versão multiplayer do badge de overall (idêntico visualmente ao solo,
// mas usando os ids prefixados "mp" do layout de draft local)
function mpUpdateOverallBadge(squad) {
  const badge = document.getElementById("mpOverallBadge");
  if (!badge) return;
  if (!squad.length) { badge.style.display = "none"; return; }
  const atk = Math.round(weightedAvg(squad, ATTACK_WEIGHTS, "rawPos", 70));
  const def = Math.round(weightedAvg(squad, DEFENSE_WEIGHTS, "rawPos", 70));
  const ovr = Math.round(weightedAvg(squad, OVERALL_WEIGHTS, "rawPos", 75));
  badge.style.display = "block";
  const scoreEl = document.getElementById("mpObScore");
  const breakdownEl = document.getElementById("mpObBreakdown");
  if (scoreEl) scoreEl.textContent = ovr;
  if (breakdownEl) breakdownEl.textContent = `OVERALL · ${squad.length}/11 escalados`;
  let extra = badge.querySelector(".ob-extra");
  if (!extra) {
    extra = document.createElement("div");
    extra.className = "ob-extra";
    badge.appendChild(extra);
  }
  const maxBar = Math.max(atk, def, 1);
  extra.innerHTML = `
    <div class="ob-stats-row">
      <div class="ob-stat"><div class="ob-stat-num atk">${atk}</div><div class="ob-stat-label">Ataque</div></div>
      <div class="ob-stat"><div class="ob-stat-num def">${def}</div><div class="ob-stat-label">Defesa</div></div>
    </div>
    <div class="ob-bar-track"><div class="ob-bar-fill atk" style="width:${(atk/maxBar*100)}%;height:6px"></div></div>
    <div class="ob-bar-track" style="margin-top:4px"><div class="ob-bar-fill def" style="width:${(def/maxBar*100)}%;height:6px"></div></div>
  `;
}

// ═══════════════════════════════════════════════════════════════════════
// MOTOR DE RESULTADO — confronto direto (ida+volta+pênaltis) e quem
// chega mais longe (cada time roda sua própria copa contra bots)
// ═══════════════════════════════════════════════════════════════════════

// Recebe um squad (array de jogadores com rawPos) e devolve {atk,def,ovr}
function squadStats(squad) {
  return {
    atk: weightedAvg(squad, ATTACK_WEIGHTS, "rawPos", 70),
    def: weightedAvg(squad, DEFENSE_WEIGHTS, "rawPos", 70),
    ovr: weightedAvg(squad, OVERALL_WEIGHTS, "rawPos", 75),
  };
}

// ── CONFRONTO DIRETO: ida e volta, decide nos pênaltis se empatar no
// agregado (soma de gols das duas partidas) ──
function simulateHeadToHead(squadA, squadB) {
  const a = squadStats(squadA), b = squadStats(squadB);

  // Jogo 1 (A em casa, isPlayer simétrico — nenhum dos dois ganha o bônus
  // de "protagonista" porque os dois são jogadores humanos)
  const leg1 = simulateMatch(a.atk, a.def, b.atk, b.def);
  // Jogo 2 (B em casa — inverte quem ataca/defende primeiro nos parâmetros)
  const leg2 = simulateMatch(b.atk, b.def, a.atk, a.def);

  const aGoals = leg1.myGoals + leg2.theirGoals;
  const bGoals = leg1.theirGoals + leg2.myGoals;

  let penalties = null, winner = null;
  if (aGoals > bGoals) winner = "A";
  else if (bGoals > aGoals) winner = "B";
  else {
    // Empate no agregado → pênaltis, levemente influenciado pelo overall
    const myPkChance = Math.max(0.3, Math.min(0.7, 0.5 + (a.ovr - b.ovr) * 0.01));
    const aWinsPK = Math.random() < myPkChance;
    penalties = aWinsPK
      ? { a: 5 + Math.floor(Math.random()*2), b: 3 + Math.floor(Math.random()*2) }
      : { a: 3 + Math.floor(Math.random()*2), b: 5 + Math.floor(Math.random()*2) };
    winner = aWinsPK ? "A" : "B";
  }

  return {
    leg1: { homeGoals: leg1.myGoals, awayGoals: leg1.theirGoals },
    leg2: { homeGoals: leg2.myGoals, awayGoals: leg2.theirGoals },
    aggA: aGoals, aggB: bGoals,
    penalties, winner,
    statsA: a, statsB: b,
  };
}

// ── QUEM CHEGA MAIS LONGE: roda uma copa inteira pra cada squad (mesma
// engine do solo: grupos + mata-mata, ou só mata-mata na Copa do Brasil),
// usando adversários de IA sorteados do pool. Compara a fase final
// alcançada; em caso de empate na mesma fase, desempata por overall do
// squad e depois saldo de gols acumulado. ──
const STAGE_ORDER = ["GRUPOS", "16-AVOS", "OITAVAS", "QUARTAS", "SEMI", "FINAL", "CAMPEÃO"];

function runSoloCampaignFor(squad, mode) {
  const { atk: myAtk, def: myDef, ovr: overall } = squadStats(squad);
  const isBrasil = mode === "brasil";
  const isWorldCup = mode === "copadomundo";
  const hasGroups = !isBrasil;
  const pool = getTeamPoolFor(mode);
  const allOpponents = [...pool].sort(() => Math.random() - 0.5);

  let groupOpponents = [], knockoutOpponents, stages;
  if (isBrasil) {
    knockoutOpponents = allOpponents.slice(0, 4).sort((a,b) => teamOverall(a.players) - teamOverall(b.players));
    stages = ["OITAVAS","QUARTAS","SEMI","FINAL"];
  } else if (isWorldCup) {
    groupOpponents = allOpponents.slice(0, 3);
    knockoutOpponents = allOpponents.slice(3, 8).sort((a,b) => teamOverall(a.players) - teamOverall(b.players));
    stages = ["16-AVOS","OITAVAS","QUARTAS","SEMI","FINAL"];
  } else {
    groupOpponents = allOpponents.slice(0, 3);
    knockoutOpponents = allOpponents.slice(3, 7).sort((a,b) => teamOverall(a.players) - teamOverall(b.players));
    stages = ["OITAVAS","QUARTAS","SEMI","FINAL"];
  }

  let goalsFor = 0, goalsAgainst = 0, eliminated = false, champion = false;
  let lastStage = "GRUPOS";

  if (hasGroups) {
    const groupTeams = [
      { id:"me", isMe:true, pts:0, gf:0, ga:0 },
      ...groupOpponents.map(t => ({ id:t.id, isMe:false, pts:0, gf:0, ga:0 })),
    ];
    function getAtkDef(team) {
      if (team.isMe) return { atk: myAtk, def: myDef };
      const t = groupOpponents.find(g => g.id === team.id);
      return { atk: teamAtk(t.players), def: teamDef(t.players) };
    }
    function applyResult(A, B, gA, gB) {
      A.gf += gA; A.ga += gB; B.gf += gB; B.ga += gA;
      if (gA > gB) A.pts += 3; else if (gB > gA) B.pts += 3; else { A.pts += 1; B.pts += 1; }
    }
    const matches = [];
    for (let i = 0; i < groupTeams.length; i++) {
      for (let j = i+1; j < groupTeams.length; j++) {
        matches.push([groupTeams[i], groupTeams[j]]);
        if (!isWorldCup) matches.push([groupTeams[j], groupTeams[i]]);
      }
    }
    matches.sort(() => Math.random() - 0.5);
    for (const [A, B] of matches) {
      const ai = getAtkDef(A), bi = getAtkDef(B);
      const { myGoals, theirGoals } = simulateMatch(ai.atk, ai.def, bi.atk, bi.def);
      applyResult(A, B, myGoals, theirGoals);
      if (A.isMe || B.isMe) {
        const meIsA = A.isMe;
        goalsFor += meIsA ? myGoals : theirGoals;
        goalsAgainst += meIsA ? theirGoals : myGoals;
      }
    }
    groupTeams.sort((x,y) => (y.pts-x.pts) || ((y.gf-y.ga)-(x.gf-x.ga)) || (y.gf-x.gf));
    const myPos = groupTeams.findIndex(t => t.isMe);
    if (myPos >= 2) eliminated = true;
  }

  if (!eliminated) {
    for (let i = 0; i < knockoutOpponents.length; i++) {
      const opp = knockoutOpponents[i];
      const oppAtk = teamAtk(opp.players), oppDef = teamDef(opp.players);
      let { myGoals, theirGoals, outcome } = simulateMatch(myAtk, myDef, oppAtk, oppDef);
      if (outcome === "draw") {
        const myStrength = (myAtk+myDef)/2, oppStrength = (oppAtk+oppDef)/2;
        const myPkChance = Math.max(0.3, Math.min(0.7, 0.5 + (myStrength-oppStrength)*0.01));
        outcome = Math.random() < myPkChance ? "win" : "lose";
      }
      goalsFor += myGoals; goalsAgainst += theirGoals;
      lastStage = stages[i];
      if (outcome === "lose") { eliminated = true; break; }
      if (i === knockoutOpponents.length - 1) champion = true;
    }
  } else if (hasGroups) {
    lastStage = "GRUPOS";
  }

  return {
    overall: Math.round(overall),
    goalsFor, goalsAgainst, saldo: goalsFor - goalsAgainst,
    eliminated, champion,
    finalStage: champion ? "CAMPEÃO" : lastStage,
    stageRank: STAGE_ORDER.indexOf(champion ? "CAMPEÃO" : lastStage),
  };
}

// Compara dois resultados de campanha: quem foi mais longe ganha; empate
// de fase desempata por overall do squad, depois saldo de gols.
function compareCampaigns(resA, resB) {
  if (resA.stageRank !== resB.stageRank) return resA.stageRank > resB.stageRank ? "A" : "B";
  if (resA.overall !== resB.overall) return resA.overall > resB.overall ? "A" : "B";
  if (resA.saldo !== resB.saldo) return resA.saldo > resB.saldo ? "A" : "B";
  return "draw";
}

// ═══════════════════════════════════════════
// EXECUÇÃO DO RESULTADO — LOCAL
// ═══════════════════════════════════════════
function mpRunLocalResult() {
  showPage("pageMpResult");
  const teamA = MP.local.teams.A, teamB = MP.local.teams.B;
  if (MP.resultType === "direto") {
    renderMpHeadToHeadResult(teamA, teamB);
  } else {
    renderMpLongestRunResult(teamA, teamB);
  }
}

function stageLabel(stage) {
  const labels = { "GRUPOS":"FASE DE GRUPOS", "16-AVOS":"16-AVOS DE FINAL", "OITAVAS":"OITAVAS DE FINAL",
    "QUARTAS":"QUARTAS DE FINAL", "SEMI":"SEMIFINAL", "FINAL":"FINAL", "CAMPEÃO":"CAMPEÃO 🏆" };
  return labels[stage] || stage;
}

// ── CONFRONTO DIRETO (ida e volta) — timelapse simplificado dos 2 jogos ──
function renderMpHeadToHeadResult(teamA, teamB) {
  const container = document.getElementById("pageMpResult");
  const r = simulateHeadToHead(teamA.squad, teamB.squad);
  container.innerHTML = `
    <div class="mp-result-layout">
      <div class="sim-header">
        <div class="sim-title">CONFRONTO DIRETO</div>
        <div class="sim-logo">⚔️</div>
      </div>
      <div id="mpH2hLegs" class="tl-match-list"></div>
      <div id="mpH2hCurrentMatch" class="tl-current-match"></div>
      <div id="mpH2hFinalCard" class="final-card" style="display:none"></div>
    </div>`;
  playH2hLegSequence(teamA, teamB, r, 0);
}

function playH2hLegSequence(teamA, teamB, r, legIdx) {
  const legs = [
    { home: teamA, away: teamB, score: r.leg1, label: `IDA · ${teamA.name} (casa)` },
    { home: teamB, away: teamA, score: r.leg2, label: `VOLTA · ${teamB.name} (casa)` },
  ];
  if (legIdx >= legs.length) {
    setTimeout(() => renderH2hFinalCard(teamA, teamB, r), Math.round(500 * speedMul()));
    return;
  }
  const leg = legs[legIdx];
  runMpMatchTimelapse(leg, () => {
    addH2hLegToList(leg, legIdx);
    setTimeout(() => playH2hLegSequence(teamA, teamB, r, legIdx + 1), Math.round(900 * speedMul()));
  });
}

function addH2hLegToList(leg, idx) {
  const list = document.getElementById("mpH2hLegs");
  const div = document.createElement("div");
  div.className = "tl-match-entry win";
  div.innerHTML = `
    <div class="tl-entry-left">
      <span class="tl-round">${leg.label}</span>
      <span class="tl-opp">${leg.home.name} vs ${leg.away.name}</span>
    </div>
    <span class="tl-score-pill">${leg.score.homeGoals}–${leg.score.awayGoals}</span>`;
  list.appendChild(div);
}

// Timelapse minuto a minuto reaproveitando o ritmo visual do solo, mas
// para um confronto entre dois squads humanos (sem bônus de protagonista).
function runMpMatchTimelapse(leg, onDone) {
  const box = document.getElementById("mpH2hCurrentMatch");
  const homeScorers = pickScorers(leg.home.squad, leg.score.homeGoals);
  const awayScorers = pickScorers(leg.away.squad, leg.score.awayGoals);
  const homeMinutes = distributeMinutes(leg.score.homeGoals);
  const awayMinutes = distributeMinutes(leg.score.awayGoals);
  const events = [
    ...homeMinutes.map((m,i)=>({minute:m, side:"home", scorer:homeScorers[i]||"?"})),
    ...awayMinutes.map((m,i)=>({minute:m, side:"away", scorer:awayScorers[i]||"?"})),
  ].sort((a,b)=>a.minute-b.minute);

  let homeScore=0, awayScore=0, evtIdx=0, minute=0;
  box.innerHTML = `
    <div class="tl-match-header">
      <div class="tl-match-vs">
        <span class="tl-my-name">${leg.home.name}</span>
        <span class="tl-vs">vs</span>
        <span class="tl-opp-name">${leg.away.name}</span>
      </div>
      <div class="tl-stage">${leg.label}</div>
    </div>
    <div class="tl-scoreboard">
      <span class="tl-score-my" id="mpScoreHome">0</span>
      <div class="tl-score-center">
        <div class="tl-clock" id="mpClock">1'</div>
        <div class="tl-progress-bar"><div class="tl-progress-fill" id="mpProgressFill"></div></div>
      </div>
      <span class="tl-score-their" id="mpScoreAway">0</span>
    </div>
    <div class="tl-events-list" id="mpEventsList"></div>`;

  playSound("apitoInicio", "apito");
  playSound("ambienteTorcida", "ambiente");

  const tickMs = Math.max(12, Math.round(40 * speedMul()));
  const interval = setInterval(() => {
    minute++;
    const clockEl = document.getElementById("mpClock");
    const fillEl = document.getElementById("mpProgressFill");
    if (clockEl) clockEl.textContent = minute <= 90 ? minute+"'" : "FT";
    if (fillEl) fillEl.style.width = (Math.min(minute,90)/90*100)+"%";

    while (evtIdx < events.length && events[evtIdx].minute <= minute) {
      const evt = events[evtIdx++];
      if (evt.side === "home") { homeScore++; mpAddTlEvent(evt.scorer, evt.minute, "home"); bump("mpScoreHome", homeScore); playSound("golTorcida","gol"); }
      else { awayScore++; mpAddTlEvent(evt.scorer, evt.minute, "away"); bump("mpScoreAway", awayScore); playSound("golTorcida","gol"); }
    }
    if (minute >= 90) {
      clearInterval(interval);
      stopAmbiente();
      playSound("apitoFim", "apito");
      setTimeout(onDone, Math.round(500 * speedMul()));
    }
  }, tickMs);
}

function mpAddTlEvent(scorer, minute, side) {
  const list = document.getElementById("mpEventsList");
  if (!list) return;
  const div = document.createElement("div");
  div.className = `tl-event goal`;
  div.innerHTML = `<span class="tl-evt-icon">⚽</span><strong>${minute}'</strong> ${scorer} <span class="tl-evt-label gol">${side === "home" ? "GOL (casa)" : "GOL (visitante)"}</span>`;
  list.appendChild(div);
  list.scrollTop = list.scrollHeight;
}

function renderH2hFinalCard(teamA, teamB, r) {
  const box = document.getElementById("mpH2hCurrentMatch");
  if (box) box.style.display = "none";
  const card = document.getElementById("mpH2hFinalCard");
  card.style.display = "block";
  const winnerTeam = r.winner === "A" ? teamA : teamB;
  const pkText = r.penalties ? ` <small>(${r.penalties.a}-${r.penalties.b} pen)</small>` : "";
  card.innerHTML = `
    <div class="fc-result">🏆 ${winnerTeam.name} VENCEU!</div>
    <div class="fc-score win">${r.aggA}–${r.aggB}${pkText}</div>
    <div class="fc-stage-label">AGREGADO (IDA + VOLTA)</div>
    <div class="fc-stats">
      <div class="fc-stat"><span class="fc-stat-num">${Math.round(r.statsA.ovr)}</span><span class="fc-stat-label">${teamA.name} OVR</span></div>
      <div class="fc-stat"><span class="fc-stat-num">${Math.round(r.statsB.ovr)}</span><span class="fc-stat-label">${teamB.name} OVR</span></div>
    </div>
    <div class="fc-squad-header">${teamA.name}</div>
    ${mpSquadListHtml(teamA.squad)}
    <div class="fc-squad-header">${teamB.name}</div>
    ${mpSquadListHtml(teamB.squad)}
    <button class="btn-new-game" onclick="mpResetToHub()">↺ NOVA PARTIDA</button>
    <div class="fc-site">FutDraft</div>`;
}

function mpSquadListHtml(squad) {
  return `<div class="fc-squad">${squad.map(p=>`
      <div class="fc-player">
        <div class="fc-player-left">
          <span class="fc-player-pos">${p.pos}</span>
          <span class="fc-player-name">${p.name}</span>
        </div>
        <div class="fc-player-right">
          <span class="fc-player-team">${p.team} ${p.season}</span>
          <span class="fc-player-num">${p.overall}</span>
        </div>
      </div>`).join("")}
    </div>`;
}

// ── QUEM CHEGA MAIS LONGE — roda as duas campanhas e mostra comparativo ──
function renderMpLongestRunResult(teamA, teamB) {
  const container = document.getElementById("pageMpResult");
  container.innerHTML = `
    <div class="mp-result-layout">
      <div class="sim-header">
        <div class="sim-title">QUEM CHEGA MAIS LONGE</div>
        <div class="sim-logo">🏁</div>
      </div>
      <div class="tl-waiting">Simulando as campanhas de ${teamA.name} e ${teamB.name}...</div>
    </div>`;

  setTimeout(() => {
    const resA = runSoloCampaignFor(teamA.squad, MP.mode);
    const resB = runSoloCampaignFor(teamB.squad, MP.mode);
    const winner = compareCampaigns(resA, resB);
    renderLongestRunCard(teamA, teamB, resA, resB, winner);
  }, Math.round(900 * speedMul()));
}

function renderLongestRunCard(teamA, teamB, resA, resB, winner) {
  const container = document.getElementById("pageMpResult");
  const winnerName = winner === "draw" ? "EMPATE TOTAL" : (winner === "A" ? teamA.name : teamB.name) + " VENCEU!";
  container.innerHTML = `
    <div class="mp-result-layout">
      <div class="sim-header">
        <div class="sim-title">QUEM CHEGA MAIS LONGE</div>
        <div class="sim-logo">🏁</div>
      </div>
      <div class="final-card" style="display:block">
        <div class="fc-result">${winner === "draw" ? "🤝" : "🏆"} ${winnerName}</div>
        <div class="mp-compare-grid">
          <div class="mp-compare-col ${winner==='A'?'mp-winner':''}">
            <div class="mp-compare-name">${teamA.name}</div>
            <div class="mp-compare-stage">${stageLabel(resA.finalStage)}</div>
            <div class="mp-compare-stats">
              <span>OVR ${resA.overall}</span>
              <span>Saldo ${resA.saldo>=0?"+":""}${resA.saldo}</span>
              <span>${resA.goalsFor} gols pró</span>
            </div>
          </div>
          <div class="mp-compare-vs">VS</div>
          <div class="mp-compare-col ${winner==='B'?'mp-winner':''}">
            <div class="mp-compare-name">${teamB.name}</div>
            <div class="mp-compare-stage">${stageLabel(resB.finalStage)}</div>
            <div class="mp-compare-stats">
              <span>OVR ${resB.overall}</span>
              <span>Saldo ${resB.saldo>=0?"+":""}${resB.saldo}</span>
              <span>${resB.goalsFor} gols pró</span>
            </div>
          </div>
        </div>
        <div class="fc-squad-header">${teamA.name}</div>
        ${mpSquadListHtml(teamA.squad)}
        <div class="fc-squad-header">${teamB.name}</div>
        ${mpSquadListHtml(teamB.squad)}
        <button class="btn-new-game" onclick="mpResetToHub()">↺ NOVA PARTIDA</button>
        <div class="fc-site">FutDraft</div>
      </div>
    </div>`;
}

function mpResetToHub() {
  MP.kind = null;
  MP.resultType = null;
  MP.local.teams.A = { name: "TIME A", squad: [], currentTeam: null, pickCount: 0 };
  MP.local.teams.B = { name: "TIME B", squad: [], currentTeam: null, pickCount: 0 };
  cleanupOnlineRoom();
  showPage("pageLanding");
}

// ═══════════════════════════════════════════════════════════════════════
// MULTIPLAYER ONLINE — Firebase Realtime Database
// ═══════════════════════════════════════════════════════════════════════
//
// Estrutura da sala em /rooms/{code}:
// {
//   status: "lobby" | "drafting" | "result",
//   mode, resultType, formation,
//   p1: { name, squad:[...], pickCount, connected },
//   p2: { name, squad:[...], pickCount, connected },
//   turn: { side:"p1"|"p2", currentTeamId, deadline, token },
//   result: { ... } // preenchido pelo host quando o draft termina
// }

function genRoomCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 5; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}

function onlineRoomRef(path) {
  const db = ensureFirebase();
  const base = `rooms/${MP.online.roomCode}`;
  return db.ref(path ? `${base}/${path}` : base);
}

// ── TELA DE ENTRADA: criar sala ou entrar com código ──
function onlineShowCreateForm() {
  document.getElementById("mpOnlineCreatePanel").style.display = "block";
  document.getElementById("mpOnlineJoinPanel").style.display = "none";
  const tc = document.getElementById("mpEntryToggleCreate");
  const tj = document.getElementById("mpEntryToggleJoin");
  if (tc) tc.classList.add("active");
  if (tj) tj.classList.remove("active");
}
function onlineShowJoinForm() {
  document.getElementById("mpOnlineCreatePanel").style.display = "none";
  document.getElementById("mpOnlineJoinPanel").style.display = "block";
  const tc = document.getElementById("mpEntryToggleCreate");
  const tj = document.getElementById("mpEntryToggleJoin");
  if (tc) tc.classList.remove("active");
  if (tj) tj.classList.add("active");
}

async function onlineCreateRoom() {
  try {
    ensureFirebase();
  } catch (e) {
    alert("Não foi possível conectar ao servidor multiplayer. Verifique sua internet e tente novamente.");
    return;
  }
  const name = (document.getElementById("mpOnlineCreateName").value || "").trim() || "Jogador 1";
  const code = genRoomCode();
  MP.online.roomCode = code;
  MP.online.myKey = "p1";
  MP.online.oppKey = "p2";
  MP.online.isHost = true;
  MP.online.myName = name;

  try {
    await onlineRoomRef().set({
      status: "lobby",
      createdAt: Date.now(),
      mode: "champions",
      resultType: "direto",
      formation: "4-3-3",
      p1: { name, squad: [], pickCount: 0, connected: true, ready: false },
      p2: null,
    });
  } catch (e) {
    alert("Erro ao criar a sala. Tente de novo em alguns segundos.");
    return;
  }

  showPage("pageMpOnlineLobby");
  document.getElementById("mpRoomCodeDisplay").textContent = code;
  document.getElementById("mpLobbyHostControls").style.display = "block";
  document.getElementById("mpLobbyGuestWaiting").style.display = "none";
  listenToRoom();
}

async function onlineJoinRoom() {
  try {
    ensureFirebase();
  } catch (e) {
    alert("Não foi possível conectar ao servidor multiplayer. Verifique sua internet e tente novamente.");
    return;
  }
  const name = (document.getElementById("mpOnlineJoinName").value || "").trim() || "Jogador 2";
  const codeRaw = (document.getElementById("mpOnlineJoinCode").value || "").trim().toUpperCase();
  if (!codeRaw) { alert("Digita o código da sala."); return; }

  MP.online.roomCode = codeRaw;
  let snap;
  try {
    snap = await onlineRoomRef().get();
  } catch (e) {
    alert("Erro ao buscar a sala. Confira o código e tua conexão.");
    return;
  }
  const room = snap.val();
  if (!room) { alert("Sala não encontrada. Confira o código."); return; }
  if (room.p2 && room.p2.connected) { alert("Essa sala já está cheia."); return; }

  MP.online.myKey = "p2";
  MP.online.oppKey = "p1";
  MP.online.isHost = false;
  MP.online.myName = name;

  try {
    await onlineRoomRef("p2").set({ name, squad: [], pickCount: 0, connected: true, ready: false });
  } catch (e) {
    alert("Erro ao entrar na sala. Tente de novo.");
    return;
  }

  showPage("pageMpOnlineLobby");
  document.getElementById("mpRoomCodeDisplay").textContent = MP.online.roomCode;
  document.getElementById("mpLobbyHostControls").style.display = "none";
  document.getElementById("mpLobbyGuestWaiting").style.display = "block";
  listenToRoom();
}

// ── HOST: escolhe modo/formação no lobby e publica config ──
function onlineHostPublishConfig() {
  if (!MP.online.isHost) return;
  onlineRoomRef().update({ mode: MP.mode, resultType: MP.resultType });
}
function onlineHostPublishFormation(fm) {
  if (!MP.online.isHost) return;
  MP.formation = fm;
  onlineRoomRef().update({ formation: fm });
  onlineHostStartDraftIfReady();
}

async function onlineHostStartDraftIfReady() {
  const snap = await onlineRoomRef().get();
  const room = snap.val();
  if (!room || !room.p2) return;
  // Sorteia quem começa
  const firstSide = Math.random() < 0.5 ? "p1" : "p2";
  await onlineRoomRef().update({
    status: "drafting",
    turn: { side: firstSide, currentTeamId: null, deadline: 0, token: Date.now() },
  });
}

// ── LISTENER PRINCIPAL DA SALA ──
function listenToRoom() {
  const ref = onlineRoomRef();
  const cb = (snap) => {
    const room = snap.val();
    if (!room) return;
    onRoomUpdate(room);
  };
  ref.on("value", cb);
  MP.online.unsub = () => ref.off("value", cb);
}

function cleanupOnlineRoom() {
  if (MP.online.unsub) { try { MP.online.unsub(); } catch (e) {} MP.online.unsub = null; }
  if (MP.online.turnTimerInterval) { clearInterval(MP.online.turnTimerInterval); MP.online.turnTimerInterval = null; }
  if (MP.online.roomCode && MP.online.myKey) {
    try { onlineRoomRef(MP.online.myKey + "/connected").set(false); } catch (e) {}
  }
  MP.online.roomCode = null;
  MP.online.myKey = null;
  MP.online.oppKey = null;
  MP.online.isHost = false;
  MP.online.lastTurnToken = null;
  _onlineDraftBuilt = false;
  _onlineResultRendered = false;
}

function onRoomUpdate(room) {
  // Lobby: atualiza espera por segundo jogador
  if (room.status === "lobby") {
    const p2connected = !!(room.p2 && room.p2.connected);
    const waitEl = document.getElementById("mpLobbyWaitingText");
    if (waitEl) waitEl.textContent = p2connected ? `${room.p2.name} entrou! Escolha o modo abaixo.` : "Aguardando o segundo jogador entrar com o código...";
    const hostModePanel = document.getElementById("mpLobbyModePanel");
    if (hostModePanel) hostModePanel.style.display = (MP.online.isHost && p2connected) ? "block" : "none";
    return;
  }

  if (room.status === "drafting") {
    MP.mode = room.mode; MP.resultType = room.resultType; MP.formation = room.formation;
    if (document.getElementById("pageMpOnlineDraft") && !document.getElementById("pageMpOnlineDraft").classList.contains("active")) {
      showPage("pageMpOnlineDraft");
    }
    renderOnlineDraftFromRoom(room);
    return;
  }

  if (room.status === "result") {
    if (document.getElementById("pageMpResult") && !document.getElementById("pageMpResult").classList.contains("active")) {
      showPage("pageMpResult");
    }
    renderOnlineResultFromRoom(room);
  }
}

// ── DRAFT ONLINE: layout e turnos ──
let _onlineDraftBuilt = false;
function renderOnlineDraftFromRoom(room) {
  if (!_onlineDraftBuilt) {
    buildOnlineDraftLayout(room);
    _onlineDraftBuilt = true;
  }
  updateOnlineDraftUI(room);
}

function buildOnlineDraftLayout(room) {
  const container = document.getElementById("pageMpOnlineDraft");
  container.innerHTML = `
    <div class="game-layout">
      <div class="panel-left">
        <div class="mp-draft-header" id="onlineDraftHeader"></div>
        <div id="onlineStepRoll" class="panel-section active">
          <div class="rolled-team" id="onlineRolledTeamDisplay" style="display:none">
            <div class="rolled-label">SAIU</div>
            <div class="rolled-flag" id="onlineRolledFlag"></div>
            <div class="rolled-name" id="onlineRolledName"></div>
            <div class="rolled-season" id="onlineRolledSeason"></div>
            <div class="pick-label">ESCOLHA UM JOGADOR</div>
            <div class="player-list" id="onlinePlayerList"></div>
          </div>
          <div class="roll-cta" id="onlineRollCta">
            <p class="roll-desc" id="onlineRollDesc">Aguardando...</p>
            <button class="btn-roll" id="onlineRollBtn" onclick="onlineRollDice()">ROLAR <span class="dice-icon">⚄</span></button>
          </div>
          <div class="mp-online-timer" id="onlineTimerBox" style="display:none">
            <div class="mp-timer-label">TEMPO PRA ESCOLHER</div>
            <div class="mp-timer-num" id="onlineTimerNum">30</div>
          </div>
        </div>
      </div>
      <div class="panel-center">
        <div class="pitch-container">
          <div class="pitch" id="onlinePitch"></div>
        </div>
      </div>
      <div class="panel-right">
        <div class="box-score-header">BOX SCORE · <span id="onlineScoreCount">0/11</span></div>
        <div class="score-bar">
          <span class="score-bar-atk">■ ATAQUE</span>
          <span class="score-bar-def">■ DEFESA</span>
        </div>
        <div class="score-list" id="onlineScoreList"></div>
      </div>
    </div>`;
}

function isMyTurn(room) {
  return room.turn && room.turn.side === MP.online.myKey;
}

function updateOnlineDraftUI(room) {
  const myData = room[MP.online.myKey] || { squad: [], pickCount: 0, name: MP.online.myName };
  const oppData = room[MP.online.oppKey] || { squad: [], pickCount: 0, name: "" };
  const mine = isMyTurn(room);

  const header = document.getElementById("onlineDraftHeader");
  if (header) {
    header.innerHTML = `<span class="mp-draft-team-tag">${MP.online.myKey === "p1" ? "🔵" : "🔴"} ${myData.name}</span>
      <span class="mp-draft-progress">${myData.pickCount}/11</span>
      <span class="mp-draft-vs-opp">vs ${oppData.name} (${oppData.pickCount}/11)</span>`;
  }
  const scEl = document.getElementById("onlineScoreCount");
  if (scEl) scEl.textContent = `${myData.pickCount}/11`;

  // Renderiza meu próprio campo/box score (cada jogador só vê o time dele
  // de forma detalhada, igual ao solo)
  onlineRenderPitch(myData.squad || []);
  onlineRenderScoreList(myData.squad || []);

  const rollDesc = document.getElementById("onlineRollDesc");
  const rollBtn = document.getElementById("onlineRollBtn");
  const rollCta = document.getElementById("onlineRollCta");
  const rolledDisplay = document.getElementById("onlineRolledTeamDisplay");
  const timerBox = document.getElementById("onlineTimerBox");

  if (myData.pickCount >= 11) {
    if (rollCta) rollCta.style.display = "flex";
    if (rolledDisplay) rolledDisplay.style.display = "none";
    if (rollDesc) rollDesc.textContent = oppData.pickCount >= 11 ? "Time completo! Calculando resultado..." : "Seu time está completo! Aguardando o adversário terminar...";
    if (rollBtn) rollBtn.style.display = "none";
    if (timerBox) timerBox.style.display = "none";
    stopOnlineTurnTimer();
    if (oppData.pickCount >= 11 && MP.online.isHost) {
      onlineHostFinalizeIfDone(room);
    }
    return;
  }

  if (!mine) {
    if (rollCta) rollCta.style.display = "flex";
    if (rolledDisplay) rolledDisplay.style.display = "none";
    if (rollBtn) rollBtn.style.display = "none";
    if (rollDesc) rollDesc.textContent = `Vez de ${oppData.name}... aguarde.`;
    if (timerBox) timerBox.style.display = "none";
    stopOnlineTurnTimer();
    return;
  }

  // É minha vez
  if (!room.turn.currentTeamId) {
    // Ainda não rolei o time desta vez — sem timer aqui; o timer de 30s
    // vale pra escolha do JOGADOR depois que o time já saiu no sorteio.
    if (timerBox) timerBox.style.display = "none";
    stopOnlineTurnTimer();
    if (rollCta) rollCta.style.display = "flex";
    if (rolledDisplay) rolledDisplay.style.display = "none";
    if (rollBtn) { rollBtn.style.display = "inline-flex"; rollBtn.disabled = false; }
    if (rollDesc) rollDesc.textContent = `Sua vez! Jogador ${myData.pickCount + 1}/11 — role para sortear`;
  } else {
    const pool = getTeamPoolFor(room.mode);
    const team = pool.find(t => t.id === room.turn.currentTeamId);
    if (team) {
      if (timerBox) timerBox.style.display = "block";
      startOnlineTurnTimer(room.turn.deadline);
      if (rollCta) rollCta.style.display = "none";
      if (rolledDisplay) rolledDisplay.style.display = "block";
      document.getElementById("onlineRolledFlag").textContent = team.flag;
      document.getElementById("onlineRolledName").textContent = team.name;
      document.getElementById("onlineRolledSeason").textContent = team.season;
      onlineRenderPlayerList(team, myData.squad || []);
    }
  }
}

function onlineRenderPitch(squad) {
  const pitch = document.getElementById("onlinePitch");
  if (!pitch) return;
  const rows = (FORMATIONS[MP.formation] || FORMATIONS["4-3-3"]).rows;
  pitch.innerHTML = "";
  let slotId = 0;
  for (const row of rows) {
    const rowEl = document.createElement("div");
    rowEl.className = "pitch-row";
    for (const pos of row) {
      const role = POS_ROLE[pos] || "mid";
      const inSquad = squad.find(s => s.slotId === slotId);
      const dot = document.createElement("div");
      dot.className = "player-dot";
      const circle = document.createElement("div");
      const nameEl = document.createElement("div");
      nameEl.className = "pd-name";
      if (inSquad) {
        circle.className = `pd-circle filled role-${role}`;
        circle.textContent = inSquad.overall;
        nameEl.textContent = inSquad.name.split(" ").pop();
      } else {
        circle.className = `pd-circle empty role-${role}`;
        circle.textContent = pos;
        nameEl.textContent = "—";
      }
      dot.appendChild(circle);
      dot.appendChild(nameEl);
      rowEl.appendChild(dot);
      slotId++;
    }
    pitch.appendChild(rowEl);
  }
}

function onlineRenderScoreList(squad) {
  const list = document.getElementById("onlineScoreList");
  if (!list) return;
  const slots = getFormationSlots(MP.formation || "4-3-3");
  list.innerHTML = slots.map(slot => {
    const p = squad.find(s => s.slotId === slot.id);
    const cls = p ? (p.overall >= 90 ? "elite" : "filled") : "";
    const role = POS_ROLE[slot.pos] || "mid";
    return `<div class="score-row">
      <span class="sr-pos role-${role}">${slot.pos}</span>
      <span class="sr-name${p ? "" : " empty"}">${p ? p.name : "—"}</span>
      <span class="sr-ovr${cls ? " "+cls : ""}">${p ? p.overall : "—"}</span>
    </div>`;
  }).join("");
}

function onlineRenderPlayerList(team, mySquad) {
  const list = document.getElementById("onlinePlayerList");
  const usedNames = new Set(mySquad.map(s => s.name));
  const slots = getFormationSlots(MP.formation);
  const sorted = [...team.players].sort((a, b) => b.overall - a.overall);

  list.innerHTML = sorted.map((p) => {
    const pos = POS_LABELS[p.pos] || p.pos;
    const elite = p.overall >= 90 ? "elite" : "";
    const used = usedNames.has(p.name);
    const slotsForPos = slots.filter(s => s.pos === pos).length;
    const takenForPos = mySquad.filter(s => s.pos === pos).length;
    const slotFull = takenForPos >= slotsForPos;
    const noSlot = slotsForPos === 0;
    const blocked = used || slotFull || noSlot;
    const tag = noSlot ? "sem slot" : slotFull ? "slot cheio" : used ? "já no time" : "";
    const originalIdx = team.players.indexOf(p);

    return `<div class="player-row${blocked ? " blocked" : ""}"
      ${blocked ? "" : `onclick="onlinePickPlayer(${originalIdx})"`}>
      <span class="pr-pos">${pos}</span>
      <span class="pr-name">${p.name}</span>
      <span class="pr-ovr ${elite}">${p.overall}</span>
      ${tag ? `<span class="pr-tag">${tag}</span>` : ""}
    </div>`;
  }).join("");
}

// ── Timer visual de 30s (puramente local; o deadline real é validado
// pelo timestamp salvo no Firebase, então não há vantagem em adulterar
// o cliente — quem decide o auto-pick é sempre o próprio jogador da vez,
// e se ele sair, o oponente também pode forçar via deadline expirado) ──
function startOnlineTurnTimer(deadline) {
  stopOnlineTurnTimer();
  const numEl = document.getElementById("onlineTimerNum");
  function tick() {
    const remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
    if (numEl) numEl.textContent = remaining;
    if (remaining <= 0) {
      stopOnlineTurnTimer();
      onlineHandleTimeout();
    }
  }
  tick();
  MP.online.turnTimerInterval = setInterval(tick, 250);
}
function stopOnlineTurnTimer() {
  if (MP.online.turnTimerInterval) { clearInterval(MP.online.turnTimerInterval); MP.online.turnTimerInterval = null; }
}

async function onlineRollDice() {
  const snap = await onlineRoomRef().get();
  const room = snap.val();
  if (!room || !isMyTurn(room) || room.turn.currentTeamId) return;
  const myData = room[MP.online.myKey] || { squad: [] };
  const pool = getTeamPoolFor(room.mode);
  const team = pickEligibleTeamFromPool(pool, room.formation, myData.squad || []);
  const deadline = Date.now() + ONLINE_TURN_SECONDS * 1000;
  await onlineRoomRef("turn").update({ currentTeamId: team.id, deadline, token: Date.now() });
}

async function onlinePickPlayer(idx) {
  const snap = await onlineRoomRef().get();
  const room = snap.val();
  if (!room || !isMyTurn(room) || !room.turn.currentTeamId) return;
  const pool = getTeamPoolFor(room.mode);
  const team = pool.find(t => t.id === room.turn.currentTeamId);
  if (!team) return;
  await onlineCommitPick(room, team, idx);
}

async function onlineCommitPick(room, team, idx) {
  const p = team.players[idx];
  const pos = POS_LABELS[p.pos] || p.pos;
  const mySquad = (room[MP.online.myKey] && room[MP.online.myKey].squad) || [];
  const slots = getFormationSlots(room.formation);
  const takenSlots = new Set(mySquad.map(s => s.slotId));
  let slotId = null;
  for (const slot of slots) {
    if (slot.pos === pos && !takenSlots.has(slot.id)) { slotId = slot.id; break; }
  }
  if (slotId === null) return;

  const newSquad = [...mySquad, {
    ...p, pos, rawPos: p.pos, slotId, team: team.name, season: team.season,
  }];
  const nextSide = MP.online.myKey === "p1" ? "p2" : "p1";
  const updates = {};
  updates[`${MP.online.myKey}/squad`] = newSquad;
  updates[`${MP.online.myKey}/pickCount`] = newSquad.length;
  // Só passa a vez se o adversário ainda não completou o time; senão
  // continua nele mesmo (evita ficar esperando alguém que já terminou)
  const oppData = room[MP.online.oppKey] || { pickCount: 0 };
  const oppDone = oppData.pickCount >= 11;
  const meDone = newSquad.length >= 11;
  let turnSide = nextSide;
  if (meDone && oppDone) turnSide = room.turn.side;
  else if (oppDone) turnSide = MP.online.myKey;
  else if (meDone) turnSide = MP.online.oppKey;
  updates["turn"] = { side: turnSide, currentTeamId: null, deadline: 0, token: Date.now() };
  await onlineRoomRef().update(updates);
}

// Quando o tempo acaba, o PRÓPRIO jogador da vez decide aleatoriamente
// (conforme combinado) e comita a escolha — evita precisar de um backend
// autoritativo separado pra validar timeout de outro cliente.
async function onlineHandleTimeout() {
  const snap = await onlineRoomRef().get();
  const room = snap.val();
  if (!room || !isMyTurn(room)) return;
  const pool = getTeamPoolFor(room.mode);
  let team;
  if (room.turn.currentTeamId) {
    team = pool.find(t => t.id === room.turn.currentTeamId);
  } else {
    const myData = room[MP.online.myKey] || { squad: [] };
    team = pickEligibleTeamFromPool(pool, room.formation, myData.squad || []);
  }
  if (!team) return;
  const myData = room[MP.online.myKey] || { squad: [] };
  const slots = getFormationSlots(room.formation);
  const takenSlots = new Set((myData.squad||[]).map(s => s.slotId));
  const usedNames = new Set((myData.squad||[]).map(s => s.name));
  // Jogadores elegíveis (com slot livre e não usados ainda neste squad)
  const eligible = team.players.filter(p => {
    const pos = POS_LABELS[p.pos] || p.pos;
    if (usedNames.has(p.name)) return false;
    return slots.some(slot => slot.pos === pos && !takenSlots.has(slot.id));
  });
  const pickFrom = eligible.length ? eligible : team.players;
  const randomPlayer = pickFrom[Math.floor(Math.random() * pickFrom.length)];
  const idx = team.players.indexOf(randomPlayer);
  await onlineCommitPick(room, team, idx);
}

// ── HOST finaliza o draft quando os dois completaram os 11 ──
async function onlineHostFinalizeIfDone(room) {
  if (room.status !== "drafting") return;
  const p1Done = room.p1 && room.p1.pickCount >= 11;
  const p2Done = room.p2 && room.p2.pickCount >= 11;
  if (!p1Done || !p2Done) return;

  const teamA = { name: room.p1.name, squad: room.p1.squad };
  const teamB = { name: room.p2.name, squad: room.p2.squad };
  let result;
  if (room.resultType === "direto") {
    result = { type: "direto", h2h: simulateHeadToHead(teamA.squad, teamB.squad) };
  } else {
    const resA = runSoloCampaignFor(teamA.squad, room.mode);
    const resB = runSoloCampaignFor(teamB.squad, room.mode);
    const winner = compareCampaigns(resA, resB);
    result = { type: "longe", resA, resB, winner };
  }
  await onlineRoomRef().update({ status: "result", result, computedAt: Date.now() });
}

let _onlineResultRendered = false;
function renderOnlineResultFromRoom(room) {
  if (_onlineResultRendered) return;
  _onlineResultRendered = true;
  const teamA = { name: room.p1.name, squad: room.p1.squad };
  const teamB = { name: room.p2.name, squad: room.p2.squad };
  if (room.result.type === "direto") {
    const container = document.getElementById("pageMpResult");
    container.innerHTML = `
      <div class="mp-result-layout">
        <div class="sim-header"><div class="sim-title">CONFRONTO DIRETO</div><div class="sim-logo">⚔️</div></div>
        <div id="mpH2hLegs" class="tl-match-list"></div>
        <div id="mpH2hCurrentMatch" class="tl-current-match"></div>
        <div id="mpH2hFinalCard" class="final-card" style="display:none"></div>
      </div>`;
    playH2hLegSequence(teamA, teamB, room.result.h2h, 0);
  } else {
    renderLongestRunCard(teamA, teamB, room.result.resA, room.result.resB, room.result.winner);
  }
}

function onlineCopyRoomCode() {
  const code = MP.online.roomCode;
  if (!code) return;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(code).catch(() => {});
  }
  const btn = document.getElementById("mpCopyCodeBtn");
  if (btn) {
    const old = btn.textContent;
    btn.textContent = "COPIADO!";
    setTimeout(() => { btn.textContent = old; }, 1200);
  }
}
