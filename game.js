// ═══════════════════════════════════════════
// RNG SEEDÁVEL — usado só pelo Desafio Diário, pra todo mundo jogar
// com os mesmos sorteios base no mesmo dia. Fora do desafio diário,
// rng() cai pra Math.random() normalmente.
// ═══════════════════════════════════════════
let _rngState = null;
function _mulberry32(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function rng() { return _rngState ? _rngState() : Math.random(); }
function seedRngFromString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  _rngState = _mulberry32(h);
}
function clearRngSeed() { _rngState = null; }

// ═══════════════════════════════════════════
// CONFIGURAÇÕES (velocidade, avanço entre partidas, sons)
// ═══════════════════════════════════════════
const SETTINGS_KEY = "futdraft_settings_v1";
const SETTINGS_DEFAULTS = {
  autoAdvance: true,     // true = vai pro próximo jogo direto · false = precisa clicar
  speed: "normal",       // "slow" | "normal" | "fast"
  soundsEnabled: true,
  soundGol: true,
  soundApito: true,
  soundAmbiente: true,
  goalEffects: true,     // confete/efeitos visuais em gol e título
  hardcoreMode: false,   // esconde os overalls e desativa o re-sorteio
  themeRestriction: false, // restringe o sorteio a times de um mesmo país/confederação
};

// ── Hardcore: esconde os overalls e impede re-sorteio ──
function hc() { return !!settings.hardcoreMode; }
function maskOvr(n) { return hc() ? "?" : n; }

function loadSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem(SETTINGS_KEY));
    return { ...SETTINGS_DEFAULTS, ...(saved || {}) };
  } catch (e) {
    return { ...SETTINGS_DEFAULTS };
  }
}
function saveSettings() {
  try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)); } catch (e) {}
}
let settings = loadSettings();

// Multiplicador de duração aplicado aos tempos da simulação. >1 = mais lento, <1 = mais rápido.
const SPEED_MULTIPLIERS = { slow: 2, normal: 1, fast: 0.5 };
function speedMul() { return SPEED_MULTIPLIERS[settings.speed] || 1; }

// ── Modal de configurações ──
function openSettings() {
  syncSettingsUI();
  document.getElementById("settingsOverlay").classList.add("open");
}
function closeSettings() {
  document.getElementById("settingsOverlay").classList.remove("open");
}
function syncSettingsUI() {
  document.querySelectorAll("#speedOptions .settings-opt").forEach(b => {
    b.classList.toggle("active", b.dataset.value === settings.speed);
  });
  document.querySelectorAll("#advanceOptions .settings-opt").forEach(b => {
    b.classList.toggle("active", (b.dataset.value === "auto") === settings.autoAdvance);
  });
  const master = document.getElementById("chkSoundsMaster");
  const gol = document.getElementById("chkSoundGol");
  const apito = document.getElementById("chkSoundApito");
  const ambiente = document.getElementById("chkSoundAmbiente");
  if (master) master.checked = settings.soundsEnabled;
  if (gol) gol.checked = settings.soundGol;
  if (apito) apito.checked = settings.soundApito;
  if (ambiente) ambiente.checked = settings.soundAmbiente;
  const hardcore = document.getElementById("chkHardcore");
  if (hardcore) hardcore.checked = settings.hardcoreMode;
  const theme = document.getElementById("chkThemeRestriction");
  if (theme) theme.checked = settings.themeRestriction;
  syncModeToggles();
  const sub = document.getElementById("soundSubOptions");
  if (sub) {
    sub.classList.toggle("disabled", !settings.soundsEnabled);
    sub.querySelectorAll("input").forEach(i => { i.disabled = !settings.soundsEnabled; });
  }
}
function setSpeed(v) { settings.speed = v; saveSettings(); syncSettingsUI(); }
function setAutoAdvance(v) { settings.autoAdvance = v; saveSettings(); syncSettingsUI(); }
function toggleSoundsMaster(v) {
  settings.soundsEnabled = v;
  if (!v) stopAmbiente();
  saveSettings();
  syncSettingsUI();
}
function toggleHardcore(v) { settings.hardcoreMode = v; saveSettings(); syncSettingsUI(); }
function toggleThemeRestriction(v) { settings.themeRestriction = v; saveSettings(); syncSettingsUI(); }

// Toggles de Hardcore/Restrição Temática vivem tanto na tela de configurações
// quanto na tela de escolha de modo (pra ficarem visíveis ANTES do torneio
// começar). As duas leem/escrevem o mesmo `settings`, então essa função só
// mantém os checkboxes da tela de modo espelhados ao estado atual.
function syncModeToggles() {
  const h = document.getElementById("msChkHardcore");
  if (h) h.checked = settings.hardcoreMode;
  const t = document.getElementById("msChkThemeRestriction");
  if (t) t.checked = settings.themeRestriction;
}
function toggleSoundCategory(key, v) {
  settings[key] = v;
  if (key === "soundAmbiente" && !v) stopAmbiente();
  saveSettings();
}

// ═══════════════════════════════════════════
// SONS
// ═══════════════════════════════════════════
const SOUND_FILES = {
  golTorcida: "sounds/gol-torcida.mp3",
  apitoInicio: "sounds/apito-inicio.mp3",
  apitoFim: "sounds/apito-fim.mp3",
  ambienteTorcida: "sounds/ambiente-torcida.mp3",
};
const _audioCache = {};
function getAudio(key) {
  if (!_audioCache[key]) {
    const a = new Audio(SOUND_FILES[key]);
    if (key === "ambienteTorcida") { a.loop = true; a.volume = 0.32; }
    else if (key === "golTorcida") { a.volume = 0.85; }
    else { a.volume = 0.9; }
    _audioCache[key] = a;
  }
  return _audioCache[key];
}
// category: "gol" | "apito" | "ambiente" — cada uma tem seu próprio toggle nas configurações
function playSound(key, category) {
  if (!settings.soundsEnabled) return;
  if (category === "gol" && !settings.soundGol) return;
  if (category === "apito" && !settings.soundApito) return;
  if (category === "ambiente" && !settings.soundAmbiente) return;
  const base = getAudio(key);
  try {
    if (category === "ambiente") {
      base.currentTime = 0;
      base.play().catch(() => {});
    } else {
      // clona pra permitir sons sobrepostos (ex: gols em sequência rápida)
      const clone = base.cloneNode();
      clone.volume = base.volume;
      clone.play().catch(() => {});
    }
  } catch (e) {}
}
function stopAmbiente() {
  const a = _audioCache["ambienteTorcida"];
  if (a) { try { a.pause(); } catch (e) {} }
}

// ═══════════════════════════════════════════
// GAME STATE
// ═══════════════════════════════════════════
let state = {
  currentTeam: null,
  rerollsLeft: 3,
  formation: null,   // escolhida na landing
  squad: [],
  phase: "landing",
  pickCount: 0,
  mode: "champions",  // "champions" | "brasil" | "libertadores" | "copadomundo" | "eurocopa" | "livre"
  freeModeTeams: [],  // pool de times escolhido manualmente no Modo Livre
};

// Modo Livre não gera conquistas nem entra no histórico do jogador — é só lazer.
function isProgressionDisabled() { return state.mode === "livre"; }

// IDs dos times brasileiros que participam do modo Libertadores (conforme lista oficial)
const LIBERTADORES_BR_IDS = new Set([
  "br_santos_1962",
  "br_cruzeiro_lib_1976",
  "br_flamengo_1981",
  "br_gremio_lib_1983",
  "br_saopaulo_lib_1974",
  "br_saopaulo_lib_1992",
  "br_saopaulo_lib_2004",
  "br_palmeiras_lib_1999",
  "br_vasco_lib_2000",
  "br_internacional_lib_2006",
  "br_internacional_lib_2010",
  "br_corinthians_2012",
  "br_atletico_lib_2013",
  "br_gremio_lib_2017",
  "br_gremio_lib_1995",
  "br_flamengo_lib_2019",
  "br_flamengo_lib_2022",
  "br_palmeiras_lib_2020",
  "br_saocaetano_lib_2002",
  "br_athletico_lib_2005",
  "br_athletico_lib_2022",
  "br_fluminense_lib_2008",
  "br_fluminense_lib_2023",
  "br_gremio_lib_2007",
  "br_atletico_2021",
  "br_cruzeiro_lib_2009",
  "br_botafogo_2024",
  "br_santos_lib_2011",
  "br_cruzeiro_lib_1997",
  "br_internacional_lib_1980",
]);

// Todos os times do jogo, de todas as competições — usado no "Todos" do
// Modo Livre e como pool de adversários do Modo Livre (ver getOpponentPool).
function allTeamsList() {
  return [...TEAMS, ...BRAZIL_TEAMS, ...LIBERTADORES_TEAMS, ...WORLD_CUP_TEAMS, ...EUROCOPA_TEAMS];
}

// Retorna o pool de times do modo atualmente selecionado
function getTeamPool() {
  if (state.mode === "brasil") return BRAZIL_TEAMS;
  if (state.mode === "copadomundo") return WORLD_CUP_TEAMS;
  if (state.mode === "eurocopa") return EUROCOPA_TEAMS;
  if (state.mode === "livre") return state.freeModeTeams || [];
  if (state.mode === "libertadores") {
    const brFiltered = BRAZIL_TEAMS.filter(t => LIBERTADORES_BR_IDS.has(t.id));
    return LIBERTADORES_TEAMS.concat(brFiltered);
  }
  return TEAMS;
}

// Pool de ADVERSÁRIOS do torneio. Igual ao pool de sorteio (getTeamPool) em
// todo modo, EXCETO no Modo Livre: lá o sorteio dos SEUS jogadores continua
// restrito aos times que você escolheu, mas os adversários do torneio vêm de
// qualquer time do jogo — senão você só enfrentaria os mesmos times que
// escolheu pra si mesmo, o que tira a graça de encarar o inesperado.
function getOpponentPool() {
  if (state.mode === "livre") return allTeamsList();
  return getTeamPool();
}

// Mesma ideia de getRestrictedTeamPool(), mas para o pool de adversários.
function getRestrictedOpponentPool() {
  const base = getOpponentPool();
  if (!settings.themeRestriction || !state.themeCountry) return base;
  const filtered = base.filter(t => t.country === state.themeCountry);
  return filtered.length >= THEME_RESTRICTION_MIN_TEAMS ? filtered : base;
}

// Tamanho mínimo de pool pra restrição temática valer a pena (senão o
// sorteio fica repetitivo demais). Se o país sorteado não tiver times
// suficientes, a restrição é ignorada silenciosamente nessa partida.
const THEME_RESTRICTION_MIN_TEAMS = 8;

// Sorteia um país/confederação com times suficientes no pool atual e devolve
// seu código (ex: "BR", "ES"), ou null se a restrição não puder ser aplicada.
function pickThemeCountry(pool) {
  const counts = {};
  pool.forEach(t => { counts[t.country] = (counts[t.country] || 0) + 1; });
  const eligible = Object.keys(counts).filter(c => counts[c] >= THEME_RESTRICTION_MIN_TEAMS);
  if (!eligible.length) return null;
  return eligible[Math.floor(Math.random() * eligible.length)];
}

// Pool de times já considerando a restrição temática ativa (se houver).
function getRestrictedTeamPool() {
  const base = getTeamPool();
  if (!settings.themeRestriction || !state.themeCountry) return base;
  const filtered = base.filter(t => t.country === state.themeCountry);
  return filtered.length >= THEME_RESTRICTION_MIN_TEAMS ? filtered : base;
}

// Metadados de exibição por modo — nome do título, emblema, textos, etc.
// Centraliza tudo que antes era espalhado em vários ternários pelo arquivo.
const MODE_META = {
  champions:    { title: "CHAMPIONS LEAGUE", short: "A CHAMPIONS",     logo: "🏆", waiting: "A Champions começa em breve...",      seasonPrefix: "Copa " },
  libertadores: { title: "COPA LIBERTADORES", short: "A LIBERTADORES", logo: "🌎", waiting: "A Libertadores começa em breve...",   seasonPrefix: "" },
  brasil:       { title: "COPA DO BRASIL",    short: "A COPA DO BRASIL", logo: "🇧🇷", waiting: "A Copa do Brasil começa em breve...", seasonPrefix: "" },
  copadomundo:  { title: "COPA DO MUNDO",     short: "A COPA DO MUNDO", logo: "🌍", waiting: "A Copa do Mundo começa em breve...", seasonPrefix: "Copa do Mundo " },
  eurocopa:     { title: "EUROCOPA",          short: "A EUROCOPA",     logo: "⭐", waiting: "A Eurocopa começa em breve...",       seasonPrefix: "Eurocopa " },
  livre:        { title: "MODO LIVRE",        short: "A SIMULAÇÃO",    logo: "🎮", waiting: "A simulação começa em breve...",      seasonPrefix: "" },
};
function modeMeta() { return MODE_META[state.mode] || MODE_META.champions; }

// Posições reais no data.js: GK RB LB CB CM AM RM LM RW LW ST CF RWB LWB
// Mapeadas via POS_LABELS para: GOL LD LE ZAG MC MEI MD ME PD PE CA CA LD LE
// Formações usam APENAS posições que existem no mapeamento

// Cada formação guarda as linhas (defesa -> ataque, goleiro por último por
// convenção de renderização) e algumas tags estéticas/de estilo de jogo.
// IMPORTANTE: a orientação é a do próprio time olhando de trás do goleiro
// para o ataque (perspectiva padrão de jogos de futebol). Isso significa que
// a ESQUERDA do array (= esquerda da tela, já que .pitch-row é flex normal,
// sem row-reverse) deve conter as posições "E" (esquerda) e a DIREITA do
// array deve conter as posições "D" (direita). Ex: ["LE", "ZAG", "ZAG", "LD"]
// e nunca o contrário.
const FORMATIONS = {
  "4-3-3": {
    rows: [["PE", "CA", "PD"], ["MC", "MC", "MC"], ["LE", "ZAG", "ZAG", "LD"], ["GOL"]],
    tags: ["Ofensivo", "3 pontas"],
  },
  "4-4-2": {
    rows: [["CA", "CA"], ["PE", "MC", "MC", "PD"], ["LE", "ZAG", "ZAG", "LD"], ["GOL"]],
    tags: ["Clássico", "2 atacantes"],
  },
  "4-2-3-1": {
    rows: [["CA"], ["PE", "MEI", "PD"], ["MC", "MC"], ["LE", "ZAG", "ZAG", "LD"], ["GOL"]],
    tags: ["Moderno", "Meia-enganche"],
  },
  "3-5-2": {
    rows: [["CA", "CA"], ["PE", "MC", "MC", "MC", "PD"], ["ZAG", "ZAG", "ZAG"], ["GOL"]],
    tags: ["Domínio do meio", "3 zagueiros"],
  },
  "4-1-4-1": {
    rows: [["CA"], ["ME", "MC", "MC", "MD"], ["MC"], ["LE", "ZAG", "ZAG", "LD"], ["GOL"]],
    tags: ["Defensivo", "Equilíbrio"],
  },
  "3-4-3": {
    rows: [["PE", "CA", "PD"], ["LE", "MC", "MC", "LD"], ["ZAG", "ZAG", "ZAG"], ["GOL"]],
    tags: ["Ultra-ofensivo", "Pressão alta"],
  },
  "4-3-1-2": {
    rows: [["CA", "CA"], ["MEI"], ["MC", "MC", "MC"], ["LE", "ZAG", "ZAG", "LD"], ["GOL"]],
    tags: ["Criativo", "Losango"],
  },
  "5-3-2": {
    rows: [["CA", "CA"], ["MC", "MC", "MC"], ["LE", "ZAG", "ZAG", "ZAG", "LD"], ["GOL"]],
    tags: ["Catenaccio", "Solidez"],
  },
  "4-1-2-1-2": {
    rows: [["CA", "CA"], ["MEI"], ["ME", "MD"], ["MC"], ["LE", "ZAG", "ZAG", "LD"], ["GOL"]],
    tags: ["Italiano clássico", "Losango"],
  },
  "4-2-4": {
    rows: [["PE", "CA", "CA", "PD"], ["MC", "MC"], ["LE", "ZAG", "ZAG", "LD"], ["GOL"]],
    tags: ["Retrô", "All-out attack"],
  },
};

// Grupo (role) de cada posição mapeada, usado para cor e para o cálculo de balanço visual
const POS_ROLE = {
  GOL: "gk",
  ZAG: "def", LD: "def", LE: "def",
  MC: "mid", MEI: "mid", MD: "mid", ME: "mid",
  PD: "atk", PE: "atk", CA: "atk",
};

// ─── Pesos por posição REAL (raw, como vem em data.js) para cálculo de
// ataque/defesa do time. Quanto maior o peso, mais aquele jogador pesa
// naquele quesito. Isso vale tanto para o seu elenco quanto para os
// adversários sorteados.
const ATTACK_WEIGHTS = {
  ST: 1.6, CF: 1.6, RW: 1.25, LW: 1.25, AM: 1.15,
  RM: 0.85, LM: 0.85, CM: 0.35,
  RWB: 0.2, LWB: 0.2, RB: 0.15, LB: 0.15, CB: 0.05, GK: 0.02,
};
const DEFENSE_WEIGHTS = {
  GK: 1.7, CB: 1.45, RWB: 1.15, LWB: 1.15, RB: 1.05, LB: 1.05,
  CM: 0.55, AM: 0.15, RM: 0.25, LM: 0.25,
  RW: 0.05, LW: 0.05, ST: 0.02, CF: 0.02,
};
// Peso "geral" usado para a nota geral do time: soma da relevância
// ofensiva + defensiva de cada posição (jogadores decisivos nas duas
// pontas da bola pesam mais na nota final, como GK e atacantes de área).
const OVERALL_WEIGHTS = {};
for (const k of new Set([...Object.keys(ATTACK_WEIGHTS), ...Object.keys(DEFENSE_WEIGHTS)])) {
  OVERALL_WEIGHTS[k] = (ATTACK_WEIGHTS[k] || 0) + (DEFENSE_WEIGHTS[k] || 0) + 0.25;
}

// ═══════════════════════════════════════════
// LANDING — escolher formação antes de tudo
// ═══════════════════════════════════════════
function startGame() {
  showPage("pageModeSelect");
  syncModeToggles();
}

// ═══════════════════════════════════════════
// MODO LIVRE — escolha manual dos times do sorteio
// ═══════════════════════════════════════════
const FREE_MODE_SOURCES = [
  { id: "todos", label: "Todos", teams: () => allTeamsList() },
  { id: "champions", label: "Champions", teams: () => TEAMS },
  { id: "brasil", label: "Brasil", teams: () => BRAZIL_TEAMS },
  { id: "libertadores", label: "Libertadores", teams: () => LIBERTADORES_TEAMS },
  { id: "copadomundo", label: "Copa do Mundo", teams: () => WORLD_CUP_TEAMS },
  { id: "eurocopa", label: "Eurocopa", teams: () => EUROCOPA_TEAMS },
];
const FREE_MODE_MIN_TEAMS = 8;
let freeModeSelected = new Set();  // guarda os ids dos times marcados
let freeModeActiveTab = "todos";

function openFreeModeSetup() {
  showPage("pageFreeModeSetup");
  const tabs = document.getElementById("freeModeSourceTabs");
  if (tabs && !tabs.dataset.built) {
    tabs.dataset.built = "1";
    tabs.innerHTML = FREE_MODE_SOURCES.map(s =>
      `<button class="${s.id === freeModeActiveTab ? "active" : ""}" onclick="setFreeModeTab('${s.id}')">${s.label}</button>`
    ).join("");
  }
  renderFreeModeList();
}

function setFreeModeTab(id) {
  freeModeActiveTab = id;
  document.querySelectorAll("#freeModeSourceTabs button").forEach((b, i) => {
    b.classList.toggle("active", FREE_MODE_SOURCES[i].id === id);
  });
  renderFreeModeList();
}

function renderFreeModeList() {
  const source = FREE_MODE_SOURCES.find(s => s.id === freeModeActiveTab) || FREE_MODE_SOURCES[0];
  const query = (document.getElementById("freeModeSearch")?.value || "").trim().toLowerCase();
  let teams = source.teams();
  if (query) teams = teams.filter(t => t.name.toLowerCase().includes(query) || String(t.season).toLowerCase().includes(query));

  const list = document.getElementById("freeModeList");
  list.innerHTML = teams.map(t => {
    const checked = freeModeSelected.has(t.id);
    return `<div class="free-mode-item${checked ? " checked" : ""}" onclick="toggleFreeModeTeam('${t.id}')">
      <input type="checkbox" ${checked ? "checked" : ""}>
      <span class="fmi-flag">${t.flag}</span>
      <span class="fmi-name">${t.name}</span>
      <span class="fmi-season">${t.season}</span>
    </div>`;
  }).join("") || `<p class="fp-desc">Nenhum time encontrado.</p>`;

  updateFreeModeCount();
}

function toggleFreeModeTeam(id) {
  if (freeModeSelected.has(id)) freeModeSelected.delete(id);
  else freeModeSelected.add(id);
  renderFreeModeList();
}

function freeModeSelectAll(shouldSelect) {
  const source = FREE_MODE_SOURCES.find(s => s.id === freeModeActiveTab) || FREE_MODE_SOURCES[0];
  const query = (document.getElementById("freeModeSearch")?.value || "").trim().toLowerCase();
  let teams = source.teams();
  if (query) teams = teams.filter(t => t.name.toLowerCase().includes(query) || String(t.season).toLowerCase().includes(query));
  teams.forEach(t => { if (shouldSelect) freeModeSelected.add(t.id); else freeModeSelected.delete(t.id); });
  renderFreeModeList();
}

function updateFreeModeCount() {
  const countEl = document.getElementById("freeModeCount");
  if (countEl) countEl.textContent = freeModeSelected.size;
  const btn = document.getElementById("btnFreeModeConfirm");
  if (btn) btn.disabled = freeModeSelected.size < FREE_MODE_MIN_TEAMS;
}

function confirmFreeModeTeams() {
  if (freeModeSelected.size < FREE_MODE_MIN_TEAMS) return;
  const all = allTeamsList();
  state.freeModeTeams = all.filter(t => freeModeSelected.has(t.id));
  selectMode("livre");
}

function selectMode(mode) {
  state.mode = mode;
  // Reset the formation grid so it rebuilds when re-entering
  const grid = document.getElementById("fpGrid");
  if (grid) { grid.innerHTML = ""; delete grid.dataset.built; }
  renderFormationGrid();
  showPage("pageFormation");
}

function renderFormationGrid() {
  const grid = document.getElementById("fpGrid");
  if (!grid || grid.dataset.built) return; // monta uma única vez
  grid.dataset.built = "1";
  grid.innerHTML = Object.entries(FORMATIONS).map(([name, fm]) => {
    const counts = { def: 0, mid: 0, atk: 0 };
    fm.rows.forEach(row => row.forEach(pos => {
      const role = POS_ROLE[pos];
      if (role === "def") counts.def++;
      else if (role === "mid") counts.mid++;
      else if (role === "atk") counts.atk++;
    }));
    const total = counts.def + counts.mid + counts.atk;
    const rowsHtml = fm.rows.map(row => `
      <div class="fpm-row">${row.map(pos => {
        const role = POS_ROLE[pos] || "mid";
        return `<div class="fpm-dot role-${role}">${pos}</div>`;
      }).join("")}</div>`).join("");
    return `<div class="fp-card" onclick="chooseFormation('${name}')">
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

function chooseFormation(fm) {
  state.formation = fm;
  state.squad = [];
  state.pickCount = 0;
  state.rerollsLeft = hc() ? 0 : 3;
  state.rerollsUsed = 0;
  state.currentTeam = null;
  state.phase = "roll";
  state.themeCountry = settings.themeRestriction ? pickThemeCountry(getTeamPool()) : null;
  state.themeFlag = null;
  if (state.themeCountry) {
    const rep = getTeamPool().find(t => t.country === state.themeCountry);
    state.themeFlag = rep ? rep.flag : "";
  }
  showPage("pageGame");
  buildScoreList();
  renderPitch();
  showRollStep();
}

function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function showPanel(id) {
  document.querySelectorAll(".panel-section").forEach(s => {
    s.style.display = "none";
    s.classList.remove("active");
  });
  const el = document.getElementById(id);
  if (el) { el.style.display = "block"; el.classList.add("active"); }
}

// ═══════════════════════════════════════════
// ROLL
// ═══════════════════════════════════════════
function showRollStep() {
  showPanel("stepRoll");
  const turn = state.pickCount + 1;
  const rollDesc = document.getElementById("rollDesc");
  const theme = state.themeCountry ? ` · restrição temática: só times ${state.themeFlag || ""} ${state.themeCountry}` : "";
  if (rollDesc) rollDesc.textContent = (turn === 1
    ? "Role para sortear seu primeiro time histórico"
    : `Jogador ${turn}/11 — role para sortear um novo time`) + theme;
  document.getElementById("rollCta").style.display = "flex";
  document.getElementById("rolledTeamDisplay").style.display = "none";
  const reel = document.getElementById("rollReel");
  if (reel) reel.style.display = "none";
  // rerollsLeft NÃO é resetado aqui — são 3 tentativas pra PARTIDA INTEIRA,
  // não por jogador (exceto no hardcore, onde não existe re-sorteio).
  // O valor é setado uma única vez em chooseFormation().
  const rerollBtn = document.getElementById("btnReroll");
  const rerollBox = document.getElementById("rerollCount")?.closest(".reroll-box") || rerollBtn;
  if (hc()) {
    if (rerollBtn) { rerollBtn.style.display = "none"; rerollBtn.disabled = true; }
  } else {
    if (rerollBtn) rerollBtn.style.display = "";
    document.getElementById("rerollCount").textContent = state.rerollsLeft;
    if (rerollBtn) rerollBtn.disabled = state.rerollsLeft === 0;
  }
}

// Sorteia um time que tenha pelo menos um jogador elegível pra algum slot
// vazio da formação (não usado, com vaga livre na posição). Se o time sorteado
// não tiver ninguém aproveitável, sorteia outro automaticamente até achar um
// que sirva — assim o jogador nunca cai numa tela sem ninguém pra escolher.
function pickEligibleTeam() {
  const slots = getFormationSlots(state.formation);
  const usedNames = new Set(state.squad.map(s => s.name));
  const slotsRemaining = {};
  slots.forEach(s => { slotsRemaining[s.pos] = (slotsRemaining[s.pos]||0) + 1; });
  state.squad.forEach(s => { if (slotsRemaining[s.pos] != null) slotsRemaining[s.pos]--; });

  const hasEligiblePlayer = (team) => team.players.some(p => {
    const pos = POS_LABELS[p.pos] || p.pos;
    return !usedNames.has(p.name) && (slotsRemaining[pos] || 0) > 0;
  });

  const teamPool = getRestrictedTeamPool();
  const candidates = teamPool.filter(hasEligiblePlayer);
  const pool = candidates.length ? candidates : teamPool; // fallback de segurança
  return pool[Math.floor(Math.random() * pool.length)];
}

function rollDice() {
  const team = pickEligibleTeam();
  state.currentTeam = team;
  playRollAnimation(team);
}

function rerollTeam() {
  if (state.rerollsLeft <= 0) return;
  state.rerollsLeft--;
  state.rerollsUsed = (state.rerollsUsed || 0) + 1;
  document.getElementById("rerollCount").textContent = state.rerollsLeft;
  document.getElementById("btnReroll").disabled = state.rerollsLeft === 0;
  rollDice();
}

// Animação de sorteio: mostra uma sequência rápida de times passando (efeito
// caça-níquel) antes de revelar o time realmente sorteado. Desabilita os
// botões durante a animação pra evitar cliques duplicados.
function playRollAnimation(finalTeam) {
  const cta = document.getElementById("rollCta");
  const display = document.getElementById("rolledTeamDisplay");
  cta.style.display = "none";
  display.style.display = "none";

  let reel = document.getElementById("rollReel");
  if (!reel) {
    reel = document.createElement("div");
    reel.id = "rollReel";
    reel.className = "roll-reel";
    cta.parentNode.insertBefore(reel, display);
  }
  reel.style.display = "flex";
  reel.innerHTML = `
    <div class="roll-reel-label">SORTEANDO...</div>
    <div class="roll-reel-card" id="rollReelCard">
      <span class="rrc-flag" id="rrcFlag">⚽</span>
      <span class="rrc-name" id="rrcName">—</span>
      <span class="rrc-season" id="rrcSeason">—</span>
    </div>`;

  const flagEl = document.getElementById("rrcFlag");
  const nameEl = document.getElementById("rrcName");
  const seasonEl = document.getElementById("rrcSeason");
  const cardEl = document.getElementById("rollReelCard");

  // Sequência de times aleatórios "passando" antes de parar no sorteado de
  // verdade. Desacelera progressivamente, como uma roleta perdendo embalo.
  const spins = 14;
  const delays = [];
  let total = 0;
  for (let i = 0; i < spins; i++) {
    const t = 55 + Math.pow(i / spins, 2.2) * 230; // acelera->desacelera
    total += t;
    delays.push(total);
  }

  for (let i = 0; i < spins; i++) {
    setTimeout(() => {
      const t = i === spins - 1 ? finalTeam : (() => { const p = getRestrictedTeamPool(); return p[Math.floor(Math.random() * p.length)]; })();
      flagEl.textContent = t.flag;
      nameEl.textContent = t.name;
      seasonEl.textContent = t.season;
      cardEl.classList.remove("rrc-tick");
      void cardEl.offsetWidth;
      cardEl.classList.add("rrc-tick");
      if (i === spins - 1) {
        cardEl.classList.add("rrc-stop");
        setTimeout(() => {
          reel.style.display = "none";
          cardEl.classList.remove("rrc-stop");
          displayRolledTeam(finalTeam);
        }, 360);
      }
    }, delays[i]);
  }
}

function displayRolledTeam(team) {
  document.getElementById("rollCta").style.display = "none";
  document.getElementById("rolledTeamDisplay").style.display = "block";
  document.getElementById("rolledFlag").textContent = team.flag;
  document.getElementById("rolledName").textContent = team.name;
  document.getElementById("rolledSeason").textContent = modeMeta().seasonPrefix + team.season;
  document.getElementById("rerollCount").textContent = state.rerollsLeft;
  document.getElementById("btnReroll").disabled = state.rerollsLeft === 0;
  renderPlayerList(team);
}

function renderPlayerList(team) {
  const list = document.getElementById("playerList");
  const usedNames = new Set(state.squad.map(s => s.name));
  const slots = getFormationSlots(state.formation);
  const sorted = [...team.players].sort((a, b) => b.overall - a.overall);

  list.innerHTML = sorted.map((p) => {
    const pos = POS_LABELS[p.pos] || p.pos;
    const elite = p.overall >= 90 ? "elite" : "";
    const used = usedNames.has(p.name);
    const slotsForPos = slots.filter(s => s.pos === pos).length;
    const takenForPos = state.squad.filter(s => s.pos === pos).length;
    const slotFull = takenForPos >= slotsForPos;
    const noSlot = slotsForPos === 0; // posição não existe nessa formação
    const blocked = used || slotFull || noSlot;
    const tag = noSlot ? "sem slot" : slotFull ? "slot cheio" : used ? "já no time" : "";
    const originalIdx = team.players.indexOf(p);

    return `<div class="player-row${blocked ? " blocked" : ""}"
      ${blocked ? "" : `onclick="pickPlayer(${originalIdx})"`}>
      <span class="pr-pos">${pos}</span>
      <span class="pr-name">${p.name}</span>
      <span class="pr-ovr ${elite}">${maskOvr(p.overall)}</span>
      ${tag ? `<span class="pr-tag">${tag}</span>` : ""}
    </div>`;
  }).join("");
}

function pickPlayer(idx) {
  const p = state.currentTeam.players[idx];
  const pos = POS_LABELS[p.pos] || p.pos;
  const slots = getFormationSlots(state.formation);
  const takenSlots = new Set(state.squad.map(s => s.slotId));

  let slotId = null;
  for (const slot of slots) {
    if (slot.pos === pos && !takenSlots.has(slot.id)) { slotId = slot.id; break; }
  }
  if (slotId === null) return;

  state.squad.push({
    ...p,
    pos,                 // label mapeado (ex: "CA") usado no slot/exibição
    rawPos: p.pos,        // posição real original (ex: "ST") usada nos cálculos
    slotId,
    team: state.currentTeam.name,
    season: state.currentTeam.season,
    isHighlight: state.pickCount === 0,
  });
  state.pickCount++;

  // flash
  const rows = document.querySelectorAll(".player-row");
  const si = [...state.currentTeam.players].sort((a,b)=>b.overall-a.overall).findIndex(sp=>sp.name===p.name);
  rows.forEach((r,i) => r.classList.toggle("selected", i===si));

  buildScoreList();
  renderPitch();
  updateFillCount();

  setTimeout(() => {
    if (state.pickCount >= 11) showCompletePanel();
    else showRollStep();
  }, 500);
}

// ═══════════════════════════════════════════
// ELENCO COMPLETO
// ═══════════════════════════════════════════
function showCompletePanel() {
  showPanel("stepFill");
  const panel = document.getElementById("stepFill");
  const atk = calcAtk(), def = calcDef();
  const ovr = calcOverall();
  panel.innerHTML = `
    <div class="fill-squad-label">ESCALAÇÃO COMPLETA<br>
      <span class="fill-count">11/11</span>
    </div>
    <div class="overall-inline">
      <span class="oi-score">${maskOvr(ovr)}</span>
      <span class="oi-detail">${atk} atq · ${def} def</span>
    </div>
    <button class="btn-primary simulate-btn" onclick="startSimulation()">
      SIMULAR ${modeMeta().short} →
    </button>
  `;
  document.getElementById("overallBadge").style.display = "none";
}

// ═══════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════
function getFormationSlots(fm) {
  const def = FORMATIONS[fm] || FORMATIONS["4-3-3"];
  let slots = [], id = 0;
  for (const row of def.rows) for (const pos of row) slots.push({ id: id++, pos });
  return slots;
}

function updateFillCount() {
  const n = state.squad.length;
  const sc = document.getElementById("scoreCount");
  if (sc) sc.textContent = `${n}/11`;
}

// ═══════════════════════════════════════════
// MÉDIAS DO TIME — ataque, defesa e overall
// ═══════════════════════════════════════════
// Calcula uma média ponderada por posição: cada jogador pesa de acordo com
// sua relevância real pra aquele quesito (ex: atacante pesa muito no ataque
// e quase nada na defesa, goleiro é o inverso, etc). Funciona tanto pro seu
// elenco (campo rawPos) quanto pros times adversários (campo pos).
function weightedAvg(players, weightMap, posField, fallback) {
  if (!players || !players.length) return fallback;
  let totalW = 0, totalS = 0;
  for (const p of players) {
    const w = weightMap[p[posField]] != null ? weightMap[p[posField]] : 0.3;
    totalW += w;
    totalS += w * p.overall;
  }
  return totalW ? totalS / totalW : fallback;
}

function calcAtk() {
  return Math.round(weightedAvg(state.squad, ATTACK_WEIGHTS, "rawPos", 70));
}
function calcDef() {
  return Math.round(weightedAvg(state.squad, DEFENSE_WEIGHTS, "rawPos", 70));
}
function calcOverall() {
  if (!state.squad.length) return 75;
  return Math.round(weightedAvg(state.squad, OVERALL_WEIGHTS, "rawPos", 75));
}

// Mesmas contas, mas pra qualquer time (usado pros adversários sorteados,
// cujos jogadores guardam a posição real direto em `pos`)
function teamAtk(players) { return weightedAvg(players, ATTACK_WEIGHTS, "pos", 75); }
function teamDef(players) { return weightedAvg(players, DEFENSE_WEIGHTS, "pos", 75); }
function teamOverall(players) { return weightedAvg(players, OVERALL_WEIGHTS, "pos", 75); }

// ═══════════════════════════════════════════
// PITCH
// ═══════════════════════════════════════════
function renderPitch() {
  const pitch = document.getElementById("pitch");
  const rows = (FORMATIONS[state.formation] || FORMATIONS["4-3-3"]).rows;
  pitch.innerHTML = "";
  let slotId = 0;
  for (const row of rows) {
    const rowEl = document.createElement("div");
    rowEl.className = "pitch-row";
    for (const pos of row) {
      const role = POS_ROLE[pos] || "mid";
      const inSquad = state.squad.find(s => s.slotId === slotId);
      const dot = document.createElement("div");
      dot.className = "player-dot";
      const circle = document.createElement("div");
      const nameEl = document.createElement("div");
      nameEl.className = "pd-name";
      if (inSquad) {
        circle.className = `pd-circle filled role-${role}${inSquad.isHighlight ? " highlight" : ""}`;
        circle.textContent = maskOvr(inSquad.overall);
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

function buildScoreList() {
  const list = document.getElementById("scoreList");
  const slots = getFormationSlots(state.formation || "4-3-3");
  list.innerHTML = slots.map(slot => {
    const p = state.squad.find(s => s.slotId === slot.id);
    const cls = p ? (p.overall >= 90 ? "elite" : "filled") : "";
    const role = POS_ROLE[slot.pos] || "mid";
    return `<div class="score-row">
      <span class="sr-pos role-${role}">${slot.pos}</span>
      <span class="sr-name${p ? "" : " empty"}">${p ? p.name : "—"}</span>
      <span class="sr-ovr${cls ? " "+cls : ""}">${p ? maskOvr(p.overall) : "—"}</span>
    </div>`;
  }).join("");
  updateOverallBadge();
}

function updateOverallBadge() {
  const badge = document.getElementById("overallBadge");
  if (!badge) return;
  if (!state.squad.length) { badge.style.display = "none"; return; }
  const atk = calcAtk(), def = calcDef(), ovr = calcOverall();
  badge.style.display = "block";
  document.getElementById("obScore").textContent = maskOvr(ovr);
  document.getElementById("obBreakdown").textContent = `OVERALL · ${state.squad.length}/11 escalados`;
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

// ═══════════════════════════════════════════
// SIMULATION
// ═══════════════════════════════════════════
function startSimulation() {
  showPage("pageSimulation");
  runSimulation();
}

// Amostra de uma distribuição de Poisson — é assim que se modela gols em
// futebol de verdade (eventos raros e independentes ao longo de 90 min)
function poissonSample(lambda) {
  const L = Math.exp(-lambda);
  let k = 0, p = 1;
  do { k++; p *= Math.random(); } while (p > L);
  return k - 1;
}

const BASE_XG = 1.3;     // média de gols de um time "normal" contra outro "normal"
const QUALITY_EXP = 2.0; // o quanto a diferença de nível pesa no resultado
const PROTAGONIST_BONUS = 1.08; // pequena vantagem de ser o "seu" time

// Gols esperados (xG) de um time, dado o próprio ataque e a defesa adversária
function expectedGoals(atk, def, isPlayer) {
  const ratio = atk / Math.max(def, 1);
  let xg = BASE_XG * Math.pow(ratio, QUALITY_EXP);
  if (isPlayer) xg *= PROTAGONIST_BONUS;
  return Math.max(0.18, Math.min(xg, 4.5));
}

function simulateMatch(myAtk, myDef, oppAtk, oppDef) {
  const myXG = expectedGoals(myAtk, oppDef, true);
  const oppXG = expectedGoals(oppAtk, myDef, false);
  const myG = poissonSample(myXG);
  const thG = poissonSample(oppXG);
  return { myGoals: myG, theirGoals: thG, outcome: myG > thG ? "win" : myG < thG ? "lose" : "draw" };
}

function pickScorers(players, count) {
  if (!count) return [];
  // Peso por overall — melhores jogadores marcam mais
  const atk = players.filter(p => ["CA","PD","PE","ME","MD","MEI","AM","ST","RW","LW","CF"].includes(POS_LABELS[p.pos]||p.pos||p.pos));
  const pool = atk.length ? atk : players;
  // Sorteio ponderado por overall
  const totalW = pool.reduce((s,p)=>s+(p.overall||75),0);
  return Array.from({length:count}, () => {
    let r = Math.random() * totalW, cum = 0;
    for (const p of pool) { cum += p.overall||75; if (r<=cum) return p.name; }
    return pool[0].name;
  });
}

// ═══════════════════════════════════════════
// EVENTOS EXTRAS DA PARTIDA (cartões, pênalti perdido, gol anulado)
// Puramente narrativo/cosmético — não mudam o placar. Servem pra simulação
// parecer mais viva, tipo os comentários automáticos do Desafio Diário do
// Football Manager: cada partida ganha uns 0-5 eventos assim, sorteados,
// além dos gols em si.
// ═══════════════════════════════════════════
const ATTACKISH_RAW_POS = new Set(["ST","CF","RW","LW","AM"]);

const YELLOW_PHRASES = [
  "entra duro e recebe cartão amarelo.",
  "é advertido pelo árbitro após reclamação.",
  "comete falta tática e leva amarelo.",
  "atrasa o jogo e é advertido.",
];
const RED_PHRASES = [
  "vê o cartão vermelho direto após entrada perigosa!",
  "recebe o segundo amarelo e é expulso!",
  "empurra o adversário e é expulso de campo!",
];
const MISSED_PEN_PHRASES = [
  "manda a cobrança pra fora!",
  "bate no meio do gol e o goleiro defende!",
  "acerta a trave e desperdiça a chance!",
  "amassa a bola e chuta bem por cima do gol!",
];
const DISALLOWED_PHRASES = [
  "impedimento milimétrico anula o gol.",
  "o VAR encontra falta no início do lance.",
  "toque de mão anula a comemoração.",
  "árbitro anula após checar o lance no monitor.",
];

function randomPick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

// Pega um jogador aleatório de um elenco. `rawField` indica onde está a
// posição real do jogador: "rawPos" pro seu elenco (state.squad), "pos" pros
// adversários sorteados (players do data.js).
function randomPlayerName(players, rawField, onlyAttackers) {
  if (!players || !players.length) return "um jogador";
  let pool = players;
  if (onlyAttackers) {
    const atk = players.filter(p => ATTACKISH_RAW_POS.has(p[rawField]));
    if (atk.length) pool = atk;
  }
  return randomPick(pool).name;
}

// Gera os eventos extras de UMA partida. mySquad = state.squad (rawPos),
// oppPlayers = opp.players (pos = posição real já no formato do data.js).
function buildFlavorEvents(mySquad, oppPlayers) {
  const events = [];

  // Cartões amarelos: 0 a ~3 no total da partida, distribuídos entre os dois lados
  const yellowCount = Math.min(3, poissonSample(1.6));
  for (let i = 0; i < yellowCount; i++) {
    const mine = Math.random() < 0.5;
    const player = randomPlayerName(mine ? mySquad : oppPlayers, mine ? "rawPos" : "pos", false);
    events.push({
      minute: 3 + Math.floor(Math.random() * 87),
      type: "yellow", mine, player,
      phrase: randomPick(YELLOW_PHRASES),
    });
  }

  // Cartão vermelho: raro, no máximo 1 por partida
  if (Math.random() < 0.07) {
    const mine = Math.random() < 0.5;
    const player = randomPlayerName(mine ? mySquad : oppPlayers, mine ? "rawPos" : "pos", false);
    events.push({
      minute: 15 + Math.floor(Math.random() * 75),
      type: "red", mine, player,
      phrase: randomPick(RED_PHRASES),
    });
  }

  // Pênalti perdido: raro, no máximo 1 por partida
  if (Math.random() < 0.13) {
    const mine = Math.random() < 0.5;
    const player = randomPlayerName(mine ? mySquad : oppPlayers, mine ? "rawPos" : "pos", true);
    events.push({
      minute: 1 + Math.floor(Math.random() * 90),
      type: "missedPen", mine, player,
      phrase: randomPick(MISSED_PEN_PHRASES),
    });
  }

  // Gol anulado: raro, no máximo 1 por partida
  if (Math.random() < 0.11) {
    const mine = Math.random() < 0.5;
    const player = randomPlayerName(mine ? mySquad : oppPlayers, mine ? "rawPos" : "pos", true);
    events.push({
      minute: 1 + Math.floor(Math.random() * 90),
      type: "disallowed", mine, player,
      phrase: randomPick(DISALLOWED_PHRASES),
    });
  }

  return events;
}

function distributeMinutes(count) {
  const used = new Set();
  return Array.from({length:count}, () => {
    let m, t=0;
    do { m = 1+Math.floor(Math.random()*93); t++; } while(used.has(m) && t<60);
    // Mais gols nos finais de tempo (70-90') e acréscimos
    if (Math.random() < 0.25) m = 70 + Math.floor(Math.random()*23);
    used.add(m); return Math.min(m, 90);
  }).sort((a,b)=>a-b);
}

function runSimulation() {
  const myAtk = calcAtk(), myDef = calcDef();
  const overall = calcOverall();
  const isBrasil = state.mode === "brasil";
  const isLibertadores = state.mode === "libertadores";
  const isWorldCup = state.mode === "copadomundo";
  const isEurocopa = state.mode === "eurocopa";
  const isFreeMode = state.mode === "livre";
  const hasGroups = !isBrasil; // Champions, Libertadores, Copa do Mundo, Eurocopa e Livre têm fase de grupos
  const allOpponents = [...getRestrictedOpponentPool()].sort(()=>Math.random()-0.5);
  // turno único (sem jogo de volta) na fase de grupos — vale pra seleções
  const isSingleRoundGroup = isWorldCup || isEurocopa;

  let groupOpponents = [];
  let knockoutOpponents;
  let stages;
  if (isBrasil) {
    // Copa do Brasil: sem fase de grupos, direto pro mata-mata (4 adversários)
    knockoutOpponents = allOpponents.slice(0, 4)
      .sort((a, b) => teamOverall(a.players) - teamOverall(b.players));
    stages = ["OITAVAS","QUARTAS","SEMI","FINAL"];
  } else if (isWorldCup || isEurocopa) {
    // Copa do Mundo / Eurocopa: 3 adversários de grupo (turno único, sem volta) + 5 do
    // mata-mata (dezesseis-avos -> oitavas -> quartas -> semi -> final)
    groupOpponents = allOpponents.slice(0, 3);
    knockoutOpponents = allOpponents.slice(3, 8)
      .sort((a, b) => teamOverall(a.players) - teamOverall(b.players));
    stages = ["16-AVOS","OITAVAS","QUARTAS","SEMI","FINAL"];
  } else {
    // Champions / Libertadores / Modo Livre: 3 adversários de grupo (ida e volta) + 4 do mata-mata
    groupOpponents = allOpponents.slice(0, 3);
    knockoutOpponents = allOpponents.slice(3, 7)
      .sort((a, b) => teamOverall(a.players) - teamOverall(b.players));
    stages = ["OITAVAS","QUARTAS","SEMI","FINAL"];
  }
  const results = [];
  let wins=0, draws=0, losses=0, goalsFor=0, goalsAgainst=0, eliminated=false;
  let groupTable = null, myGroupPos = -1;

  // ===== FASE DE GRUPOS (todos contra todos, ida e volta, 4 times) =====
  // Existe no modo Champions e Libertadores. Copa do Brasil é só mata-mata.
  if (hasGroups) {
    const groupTeams = [
      { id:"me", name:"Seu Time", flag:"⭐", isMe:true, pts:0, gf:0, ga:0, w:0, d:0, l:0 },
      ...groupOpponents.map(t => ({ id:t.id, name:t.name, flag:t.flag, season:t.season, isMe:false, pts:0, gf:0, ga:0, w:0, d:0, l:0 }))
    ];

    function getAtkDef(team) {
      if (team.isMe) return { atk: myAtk, def: myDef };
      const t = groupOpponents.find(g => g.id === team.id) || knockoutOpponents.find(g=>g.id===team.id);
      return { atk: teamAtk(t.players), def: teamDef(t.players) };
    }

    function applyResult(teamA, teamB, gA, gB) {
      teamA.gf += gA; teamA.ga += gB;
      teamB.gf += gB; teamB.ga += gA;
      if (gA > gB) { teamA.pts += 3; teamA.w++; teamB.l++; }
      else if (gA < gB) { teamB.pts += 3; teamB.w++; teamA.l++; }
      else { teamA.pts += 1; teamB.pts += 1; teamA.d++; teamB.d++; }
    }

    // Gera todos os confrontos do grupo em turno E returno (ida e volta),
    // cada time joga 2x contra cada um dos outros 3 do grupo (6 jogos no total).
    const groupMatches = [];
    for (let i = 0; i < groupTeams.length; i++) {
      for (let j = i+1; j < groupTeams.length; j++) {
        groupMatches.push([groupTeams[i], groupTeams[j]]); // ida
        // Copa do Mundo: turno único (3 jogos por time). Champions/Libertadores
        // mantêm ida e volta (6 jogos por time).
        if (!isSingleRoundGroup) groupMatches.push([groupTeams[j], groupTeams[i]]); // volta
      }
    }
    groupMatches.sort(() => Math.random() - 0.5);

    for (const [teamA, teamB] of groupMatches) {
      const aInfo = getAtkDef(teamA), bInfo = getAtkDef(teamB);
      const { myGoals: gA, theirGoals: gB, outcome } = simulateMatch(aInfo.atk, aInfo.def, bInfo.atk, bInfo.def);
      applyResult(teamA, teamB, gA, gB);

      // Se o jogador estiver envolvido, registra como partida exibivel no timelapse
      if (teamA.isMe || teamB.isMe) {
        const meIsA = teamA.isMe;
        const myG = meIsA ? gA : gB;
        const oppG = meIsA ? gB : gA;
        const oppTeamRef = meIsA
          ? (groupOpponents.find(t=>t.id===teamB.id))
          : (groupOpponents.find(t=>t.id===teamA.id));
        const myOutcome = myG>oppG?"win":myG<oppG?"lose":"draw";
        goalsFor += myG; goalsAgainst += oppG;
        if (myOutcome==="win") wins++; else if (myOutcome==="draw") draws++; else losses++;
        results.push({
          round: "GRUPOS", opponent: oppTeamRef, myGoals: myG, theirGoals: oppG, outcome: myOutcome,
          scorers: pickScorers(state.squad, myG),
          conceded: pickScorers(oppTeamRef.players, oppG),
          myMinutes: distributeMinutes(myG),
          theirMinutes: distributeMinutes(oppG),
          flavorEvents: buildFlavorEvents(state.squad, oppTeamRef.players),
        });
      }
    }

    // Ordena tabela do grupo (pontos, depois saldo de gols)
    groupTeams.sort((a,b) => (b.pts - a.pts) || ((b.gf-b.ga) - (a.gf-a.ga)) || (b.gf - a.gf));
    myGroupPos = groupTeams.findIndex(t => t.isMe);
    groupTable = groupTeams; // guardado para exibir depois

    // Top 2 do grupo avancam (posicoes 0 e 1)
    if (myGroupPos >= 2) {
      eliminated = true;
    }
  }

  // ===== MATA-MATA (se nao eliminado nos grupos, ou direto se for Copa do Brasil) =====
  if (!eliminated) {
    for (let i = 0; i < knockoutOpponents.length; i++) {
      const opp = knockoutOpponents[i];
      const oppAtk = teamAtk(opp.players);
      const oppDef = teamDef(opp.players);
      let {myGoals, theirGoals, outcome} = simulateMatch(myAtk, myDef, oppAtk, oppDef);
      let penalties = null;
      if (outcome === "draw") {
        // Nos pênaltis a moeda é mais equilibrada, mas times mais fortes
        // ainda têm uma leve vantagem (frieza, qualidade do goleiro etc.)
        const myStrength = (myAtk + myDef) / 2;
        const oppStrength = (oppAtk + oppDef) / 2;
        const myPkChance = Math.max(0.3, Math.min(0.7, 0.5 + (myStrength - oppStrength) * 0.01));
        const myPK = Math.random() < myPkChance;
        penalties = myPK
          ? { mine: 5 + Math.floor(Math.random()*2), theirs: 3 + Math.floor(Math.random()*2) }
          : { mine: 3 + Math.floor(Math.random()*2), theirs: 5 + Math.floor(Math.random()*2) };
        outcome = myPK ? "win" : "lose";
      }
      goalsFor += myGoals; goalsAgainst += theirGoals;
      if (outcome==="win") wins++; else losses++;
      results.push({
        round: stages[i], opponent: opp, myGoals, theirGoals, outcome, penalties,
        scorers: pickScorers(state.squad, myGoals),
        conceded: pickScorers(opp.players, theirGoals),
        myMinutes: distributeMinutes(myGoals),
        theirMinutes: distributeMinutes(theirGoals),
        flavorEvents: buildFlavorEvents(state.squad, opp.players),
      });
      if (outcome === "lose") { eliminated = true; break; }
    }
  }

  if (!isProgressionDisabled()) {
    const lastResult = results[results.length - 1];
    const champion = !eliminated && lastResult && lastResult.round === "FINAL" && lastResult.outcome === "win";
    const reachedFinal = !!lastResult && lastResult.round === "FINAL";
    const eliminatedAtGroup = hasGroups && myGroupPos >= 2;
    const eliminatedAtFinal = reachedFinal && !champion;

    // Maior goleada dessa partida específica (maior margem numa vitória)
    let marginWin = 0, biggestWinGoals = null;
    results.forEach(r => {
      if (r.outcome === "win") {
        const margin = r.myGoals - r.theirGoals;
        if (margin > marginWin) {
          marginWin = margin;
          biggestWinGoals = { mine: r.myGoals, theirs: r.theirGoals, opponent: r.opponent.name };
        }
      }
    });

    // Gols marcados pelo MEU elenco nessa partida, agregados por nome
    const scorersThisMatch = {};
    results.forEach(r => (r.scorers || []).forEach(name => {
      scorersThisMatch[name] = (scorersThisMatch[name] || 0) + 1;
    }));

    const summary = {
      mode: state.mode, formation: state.formation, overall, goalsFor, goalsAgainst,
      wins, draws, losses, champion, reachedFinal, eliminatedAtGroup, eliminatedAtFinal,
      stageReached: lastResult ? lastResult.round : "—",
      marginWin, biggestWinGoals, scorersThisMatch,
      squad: state.squad.map(p => ({ name: p.name, overall: p.overall })),
      hardcore: hc(), themeRestriction: !!state.themeCountry,
      usedAllRerolls: !hc() && (state.rerollsUsed || 0) >= 3,
    };
    const newlyUnlocked = recordMatchAndCheckAchievements(summary);
    showAchievementToasts(newlyUnlocked);
  }

  // Guardado à parte da lógica de conquistas (que é pulada no Modo Livre),
  // porque compartilhar resultado deve funcionar em qualquer modo.
  const lastResult = results[results.length - 1];
  window._lastResults = results;
  window._lastSummary = {
    mode: state.mode,
    champion: !eliminated && !!lastResult && lastResult.round === "FINAL" && lastResult.outcome === "win",
    eliminated,
    stageReached: lastResult ? lastResult.round : "—",
    wins, draws, losses, goalsFor, goalsAgainst, overall,
  };

  renderTimelapse(results, eliminated, goalsFor, goalsAgainst, wins, draws, losses, overall, groupTable, myGroupPos);
}

// ═══════════════════════════════════════════
// TIMELAPSE
// ═══════════════════════════════════════════
function renderTimelapse(results, eliminated, goalsFor, goalsAgainst, wins, draws, losses, overall, groupTable, myGroupPos) {
  const container = document.getElementById("pageSimulation");
  const isBrasil = state.mode === "brasil";
  const isLibertadores = state.mode === "libertadores";
  const isWorldCup = state.mode === "copadomundo";
  const isEurocopa = state.mode === "eurocopa";
  const isFreeMode = state.mode === "livre";
  const simTitle = modeMeta().title;
  const simLogo = modeMeta().logo;
  const simWaiting = modeMeta().waiting;
  container.innerHTML = `
    <div class="timelapse-layout">
      <div class="timelapse-left">
        <div class="sim-header">
          <div class="sim-title">${simTitle}</div>
          <div class="sim-logo">${simLogo}</div>
        </div>
        <div id="tlMatchList" class="tl-match-list"></div>
        <div id="tlGroupTable" class="tl-group-table" style="display:none"></div>
      </div>
      <div class="timelapse-right">
        <div id="tlCurrentMatch" class="tl-current-match">
          <div class="tl-waiting">${simWaiting}</div>
        </div>
        <div id="tlFinalCard" class="final-card" style="display:none"></div>
        <div id="tlContinueBar" class="tl-continue-bar" style="display:none">
          <button class="btn-continue-next" id="tlContinueBtn" onclick="handleContinueClick()">PRÓXIMO JOGO →</button>
        </div>
      </div>
    </div>`;
  showMatchSequence(results, 0, eliminated, goalsFor, goalsAgainst, wins, draws, losses, overall, groupTable, myGroupPos);
}

// ── Avanço entre partidas (automático ou manual, conforme configurações) ──
function showContinueButton(callback, label) {
  const bar = document.getElementById("tlContinueBar");
  if (!bar) { callback(); return; }
  const btn = document.getElementById("tlContinueBtn");
  if (btn) btn.textContent = label || "PRÓXIMO JOGO →";
  bar.style.display = "flex";
  window._tlContinueCallback = callback;
}
function handleContinueClick() {
  const bar = document.getElementById("tlContinueBar");
  if (bar) bar.style.display = "none";
  const cb = window._tlContinueCallback;
  window._tlContinueCallback = null;
  if (cb) cb();
}
function waitThenContinue(callback, delayMs, label) {
  if (settings.autoAdvance) {
    setTimeout(callback, Math.round(delayMs * speedMul()));
  } else {
    showContinueButton(callback, label);
  }
}

function renderGroupTable(groupTable, myGroupPos) {
  const box = document.getElementById("tlGroupTable");
  if (!box) return;
  box.style.display = "block";
  box.innerHTML = `
    <div class="gt-title">TABELA DO GRUPO</div>
    <div class="gt-header-row">
      <span class="gt-col-team">TIME</span>
      <span class="gt-col-num">P</span>
      <span class="gt-col-num">V</span>
      <span class="gt-col-num">E</span>
      <span class="gt-col-num">D</span>
      <span class="gt-col-num">SG</span>
      <span class="gt-col-num">PTS</span>
    </div>
    ${groupTable.map((t, i) => `
      <div class="gt-row ${t.isMe ? "gt-me" : ""} ${i < 2 ? "gt-qualified" : "gt-eliminated"}">
        <span class="gt-col-team">${i < 2 ? "✓" : "✗"} ${t.flag||"⭐"} ${t.name}</span>
        <span class="gt-col-num">${t.w+t.d+t.l}</span>
        <span class="gt-col-num">${t.w}</span>
        <span class="gt-col-num">${t.d}</span>
        <span class="gt-col-num">${t.l}</span>
        <span class="gt-col-num">${t.gf-t.ga>=0?"+":""}${t.gf-t.ga}</span>
        <span class="gt-col-num gt-pts">${t.pts}</span>
      </div>
    `).join("")}
    <div class="gt-footnote">${myGroupPos < 2 ? "✓ Classificado para as oitavas!" : "✗ Eliminado na fase de grupos"}</div>
  `;
}

function showMatchSequence(results, idx, eliminated, goalsFor, goalsAgainst, wins, draws, losses, overall, groupTable, myGroupPos) {
  // Depois dos 3 jogos de grupo (se existirem), mostra a tabela antes de continuar
  const groupMatchesCount = results.filter(r => r.round === "GRUPOS").length;
  if (idx === groupMatchesCount && groupMatchesCount > 0 && groupTable) {
    renderGroupTable(groupTable, myGroupPos);
    waitThenContinue(() => showMatchSequence(results, idx, eliminated, goalsFor, goalsAgainst, wins, draws, losses, overall, null, myGroupPos), 2600, "VER MATA-MATA →");
    return;
  }

  if (idx >= results.length) {
    setTimeout(() => renderFinalCard(results, eliminated, goalsFor, goalsAgainst, wins, draws, losses, overall), Math.round(500 * speedMul()));
    return;
  }
  const r = results[idx];
  addMatchToList(r, idx);
  runMatchTimelapse(r, () => {
    updateMatchInList(r, idx);
    waitThenContinue(() => showMatchSequence(results, idx+1, eliminated, goalsFor, goalsAgainst, wins, draws, losses, overall, groupTable, myGroupPos), 1000, "PRÓXIMO JOGO →");
  });
}

function addMatchToList(r, idx) {
  const list = document.getElementById("tlMatchList");
  const div = document.createElement("div");
  div.className = "tl-match-entry pending";
  div.id = `match-entry-${idx}`;
  div.innerHTML = `
    <div class="tl-entry-left">
      <span class="tl-round">${r.round}</span>
      <span class="tl-opp">${r.opponent.flag} ${r.opponent.name} <span class="tl-season">${r.opponent.season}</span></span>
    </div>
    <span class="tl-score-pill" id="score-pill-${idx}">...</span>`;
  list.appendChild(div);
}

function updateMatchInList(r, idx) {
  const pill = document.getElementById(`score-pill-${idx}`);
  const entry = document.getElementById(`match-entry-${idx}`);
  const pkText = r.penalties ? ` <small>(${r.penalties.mine}-${r.penalties.theirs} pen)</small>` : "";
  if (pill) { pill.innerHTML=`${r.myGoals}–${r.theirGoals}${pkText}`; pill.className=`tl-score-pill ${r.outcome}`; }
  if (entry) entry.className=`tl-match-entry ${r.outcome}`;

  // Mostra gols e quem sofreu abaixo do placar
  const scorersLine = r.scorers.length ? `<span class="tl-entry-scorers">⚽ ${r.scorers.join(", ")}</span>` : "";
  const concededLine = r.conceded.length ? `<span class="tl-entry-conceded">· sofreu: ${r.conceded.join(", ")}</span>` : "";
  const flavorIcons = { yellow: "🟨", red: "🟥", missedPen: "❌", disallowed: "🚫" };
  const flavorLine = (r.flavorEvents || []).length
    ? `<span class="tl-entry-flavor">${r.flavorEvents.map(e => flavorIcons[e.type] || "").join(" ")}</span>`
    : "";
  if (scorersLine || concededLine || flavorLine) {
    const sub = document.createElement("div");
    sub.className = "tl-entry-sub";
    sub.innerHTML = scorersLine + concededLine + flavorLine;
    entry.appendChild(sub);
  }

  // Botão pra compartilhar só essa partida específica
  const shareBtn = document.createElement("button");
  shareBtn.className = "tl-share-btn";
  shareBtn.title = "Compartilhar esse resultado";
  shareBtn.textContent = "📤";
  shareBtn.onclick = (ev) => { ev.stopPropagation(); shareMatchResult(idx); };
  entry.appendChild(shareBtn);
}

function runMatchTimelapse(r, onDone) {
  const box = document.getElementById("tlCurrentMatch");
  const events = [
    ...r.myMinutes.map((m,i)=>({minute:m, type:"goal", mine:true, scorer:r.scorers[i]||"?"})),
    ...r.theirMinutes.map((m,i)=>({minute:m, type:"concede", mine:false, scorer:r.conceded[i]||"?"})),
    ...(r.flavorEvents||[]).map(e=>({minute:e.minute, type:e.type, mine:e.mine, scorer:e.player, phrase:e.phrase})),
  ].sort((a,b)=>a.minute-b.minute);

  let myScore=0, theirScore=0, evtIdx=0, minute=0;
  box.innerHTML = `
    <div class="tl-match-header">
      <div class="tl-match-vs">
        <span class="tl-my-name">SEU TIME</span>
        <span class="tl-vs">vs</span>
        <span class="tl-opp-name">${r.opponent.flag} ${r.opponent.name}</span>
      </div>
      <div class="tl-stage">${r.round} · ${r.opponent.season}</div>
    </div>
    <div class="tl-scoreboard">
      <span class="tl-score-my" id="tlScoreMy">0</span>
      <div class="tl-score-center">
        <div class="tl-clock" id="tlClock">1'</div>
        <div class="tl-progress-bar"><div class="tl-progress-fill" id="tlProgressFill"></div></div>
      </div>
      <span class="tl-score-their" id="tlScoreTheir">0</span>
    </div>
    <div class="tl-events-list" id="tlEventsList"></div>
    <button class="btn-skip-match" onclick="skipMatch()">Pular ⏩</button>`;

  playSound("apitoInicio", "apito");
  playSound("ambienteTorcida", "ambiente");

  const tickMs = Math.max(12, Math.round(50 * speedMul()));
  window._currentMatchInterval = setInterval(() => {
    minute++;
    const clockEl = document.getElementById("tlClock");
    const fillEl  = document.getElementById("tlProgressFill");
    if (clockEl) clockEl.textContent = minute <= 90 ? minute+"'" : "FT";
    if (fillEl)  fillEl.style.width = (Math.min(minute,90)/90*100)+"%";

    while (evtIdx < events.length && events[evtIdx].minute <= minute) {
      const evt = events[evtIdx++];
      window._matchEvtIdx = evtIdx;
      if (evt.type==="goal") { myScore++; addTimelapseEvent(evt, r); bump("tlScoreMy",myScore); playSound("golTorcida","gol"); }
      else if (evt.type==="concede") { theirScore++; addTimelapseEvent(evt, r); bump("tlScoreTheir",theirScore); }
      else { addTimelapseEvent(evt, r); }
    }

    if (minute >= 90) {
      clearInterval(window._currentMatchInterval);
      window._matchDoneCallback = onDone;
      addTimelapseEvent({type:"whistle"}, r);
      stopAmbiente();
      playSound("apitoFim", "apito");
      setTimeout(onDone, Math.round(700 * speedMul()));
    }
  }, tickMs);

  window._matchDoneCallback = onDone;
  window._matchEvents = events;
  window._matchEvtIdx = 0;
  window._matchR = r;
}

function skipMatch() {
  if (window._currentMatchInterval) clearInterval(window._currentMatchInterval);
  stopAmbiente();
  playSound("apitoFim", "apito");
  // Processa só os eventos que o interval ainda não mostrou
  const events = window._matchEvents || [];
  const startIdx = window._matchEvtIdx || 0;
  const myEl = document.getElementById("tlScoreMy");
  const thEl = document.getElementById("tlScoreTheir");
  let myScore = parseInt(myEl?.textContent||0);
  let thScore = parseInt(thEl?.textContent||0);
  const r = window._matchR;
  for (let i = startIdx; i < events.length; i++) {
    const evt = events[i];
    if (evt.type==="goal") { myScore++; addTimelapseEvent(evt, r); }
    else if (evt.type==="concede") { thScore++; addTimelapseEvent(evt, r); }
    else { addTimelapseEvent(evt, r); }
  }
  if (myEl) myEl.textContent = myScore;
  if (thEl) thEl.textContent = thScore;
  const clockEl = document.getElementById("tlClock");
  if (clockEl) clockEl.textContent = "FT";
  const fillEl = document.getElementById("tlProgressFill");
  if (fillEl) fillEl.style.width = "100%";
  setTimeout(() => { if (window._matchDoneCallback) window._matchDoneCallback(); }, 400);
  window._matchEvents = [];
  window._matchEvtIdx = 0;
}

function bump(id, val) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = val;
  el.classList.remove("score-bump");
  void el.offsetWidth;
  el.classList.add("score-bump");
  setTimeout(()=>el.classList.remove("score-bump"),400);
}

// `evt` = {type, minute, scorer, mine, phrase}; `r` = objeto da partida atual
// (usado só pra saber o nome do adversário nos eventos que não são gol).
function addTimelapseEvent(evt, r) {
  const list = document.getElementById("tlEventsList");
  if (!list) return;
  const { type, scorer, minute, phrase } = evt;
  const oppName = (r && r.opponent && r.opponent.name) || "adversário";
  const div = document.createElement("div");
  div.className = `tl-event ${type}`;

  if (type === "goal") {
    div.innerHTML = `<span class="tl-evt-icon">⚽</span><strong>${minute}'</strong> ${scorer} <span class="tl-evt-label gol">GOL!</span>`;
  } else if (type === "concede") {
    div.innerHTML = `<span class="tl-evt-icon">🔴</span><strong>${minute}'</strong> ${scorer} <span class="tl-evt-label sof">Sofreu</span>`;
  } else if (type === "yellow") {
    const who = evt.mine ? scorer : `${scorer} (${oppName})`;
    div.innerHTML = `<span class="tl-evt-icon">🟨</span><strong>${minute}'</strong> ${who} ${phrase || "recebe cartão amarelo."} <span class="tl-evt-label card">Amarelo</span>`;
  } else if (type === "red") {
    const who = evt.mine ? scorer : `${scorer} (${oppName})`;
    div.innerHTML = `<span class="tl-evt-icon">🟥</span><strong>${minute}'</strong> ${who} ${phrase || "é expulso!"} <span class="tl-evt-label card-red">EXPULSO</span>`;
  } else if (type === "missedPen") {
    const who = evt.mine ? scorer : `${scorer} (${oppName})`;
    div.innerHTML = `<span class="tl-evt-icon">❌</span><strong>${minute}'</strong> Pênalti! ${who} ${phrase || "perde a cobrança!"} <span class="tl-evt-label miss">Perdeu!</span>`;
  } else if (type === "disallowed") {
    const who = evt.mine ? scorer : `${scorer} (${oppName})`;
    div.innerHTML = `<span class="tl-evt-icon">🚫</span><strong>${minute}'</strong> Gol anulado de ${who} — ${phrase || "o lance é anulado."} <span class="tl-evt-label voided">ANULADO</span>`;
  } else {
    div.innerHTML = `<span class="tl-evt-icon">🔔</span><strong>Apito Final</strong>`;
  }
  list.appendChild(div);
  list.scrollTop = list.scrollHeight;
}

// ═══════════════════════════════════════════
// COMPARTILHAR RESULTADOS (partida específica ou torneio inteiro)
// ═══════════════════════════════════════════
function buildMatchShareText(r) {
  const scoreLine = r.penalties
    ? `${r.myGoals}-${r.theirGoals} (${r.penalties.mine}-${r.penalties.theirs} pên.)`
    : `${r.myGoals}-${r.theirGoals}`;
  const resultWord = r.outcome === "win" ? "Vitória" : r.outcome === "lose" ? "Derrota" : "Empate";
  let text = `⚽ FutDraft — ${modeMeta().short}\n`;
  text += `${r.round}: ${resultWord} · Seu Time ${scoreLine} ${r.opponent.flag || ""} ${r.opponent.name} ${r.opponent.season}\n`;
  if (r.scorers && r.scorers.length) text += `Gols: ${r.scorers.join(", ")}\n`;
  const cards = (r.flavorEvents || []).filter(e => e.type === "yellow" || e.type === "red");
  if (cards.length) text += `Cartões: ${cards.map(c => c.type === "red" ? "🟥" : "🟨").join(" ")}\n`;
  text += `#FutDraft`;
  return text;
}

function buildTournamentShareText() {
  const s = window._lastSummary;
  if (!s) return "FutDraft";
  const modeShort = MODE_META[s.mode] ? MODE_META[s.mode].short : "FUTDRAFT";
  const headline = s.champion ? "🏆 CAMPEÃO!" : s.eliminated ? `Eliminado — ${s.stageReached}` : s.stageReached;
  let text = `⚽ FutDraft — ${modeShort}\n${headline}\n`;
  text += `${s.wins}V ${s.draws}E ${s.losses}D · ${s.goalsFor}-${s.goalsAgainst} gols\n`;
  text += `Overall do time: ${maskOvr(s.overall)}\n#FutDraft`;
  return text;
}

async function shareText(text) {
  if (navigator.share) {
    try { await navigator.share({ text }); return; }
    catch (e) { /* usuário cancelou o share nativo ou não é suportado — cai no fallback abaixo */ }
  }
  try {
    await navigator.clipboard.writeText(text);
    showShareToast("Resultado copiado! Cole onde quiser compartilhar.");
  } catch (e) {
    showShareToast("Não foi possível compartilhar automaticamente.");
  }
}

function shareMatchResult(idx) {
  const r = (window._lastResults || [])[idx];
  if (!r) return;
  shareText(buildMatchShareText(r));
}

function shareTournamentResult() {
  shareText(buildTournamentShareText());
}

function showShareToast(msg) {
  let el = document.getElementById("shareToast");
  if (!el) {
    el = document.createElement("div");
    el.id = "shareToast";
    el.className = "share-toast";
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.remove("show");
  void el.offsetWidth;
  el.classList.add("show");
  clearTimeout(el._hideTimer);
  el._hideTimer = setTimeout(() => el.classList.remove("show"), 2600);
}

// ═══════════════════════════════════════════
// FINAL CARD
// ═══════════════════════════════════════════
function renderFinalCard(results, eliminated, goalsFor, goalsAgainst, wins, draws, losses, overall) {
  const box = document.getElementById("tlCurrentMatch");
  if (box) box.style.display = "none";
  const card = document.getElementById("tlFinalCard");
  if (!card) return;
  card.style.display = "block";

  const last = results[results.length-1];
  const won = !eliminated && last.round === "FINAL" && last.outcome === "win";
  const saldo = goalsFor - goalsAgainst;
  const lastScoreText = last.penalties
    ? `${last.myGoals}–${last.theirGoals} <small>(${last.penalties.mine}-${last.penalties.theirs} pen)</small>`
    : `${last.myGoals}–${last.theirGoals}`;

  card.innerHTML = `
    <div class="fc-result">${won ? "🏆 CAMPEÃO!" : eliminated ? "ELIMINADO" : "FINALISTA"}</div>
    <div class="fc-score ${won?"win":"lose"}">${lastScoreText}</div>
    <div class="fc-stage-label">${last.round}</div>
    <div class="fc-stats">
      <div class="fc-stat"><span class="fc-stat-num">${wins}</span><span class="fc-stat-label">Vitórias</span></div>
      <div class="fc-stat"><span class="fc-stat-num">${draws}</span><span class="fc-stat-label">Empates</span></div>
      <div class="fc-stat"><span class="fc-stat-num">${losses}</span><span class="fc-stat-label">Derrotas</span></div>
      <div class="fc-stat"><span class="fc-stat-num">${saldo>=0?"+":""}${saldo}</span><span class="fc-stat-label">Saldo</span></div>
      <div class="fc-stat"><span class="fc-stat-num">${goalsFor}</span><span class="fc-stat-label">Gols pró</span></div>
      <div class="fc-stat"><span class="fc-stat-num">${goalsAgainst}</span><span class="fc-stat-label">Sofridos</span></div>
    </div>
    <div class="fc-squad-header">ELENCO · OVERALL ${maskOvr(overall)}</div>
    <div class="fc-squad">${state.squad.map(p=>`
      <div class="fc-player">
        <div class="fc-player-left">
          <span class="fc-player-pos">${p.pos}</span>
          <span class="fc-player-name">${p.name}</span>
        </div>
        <div class="fc-player-right">
          <span class="fc-player-team">${p.team} ${p.season}</span>
          <span class="fc-player-num">${maskOvr(p.overall)}</span>
        </div>
      </div>`).join("")}
    </div>
    <button class="btn-share-result" onclick="shareTournamentResult()">📤 COMPARTILHAR RESULTADO</button>
    <button class="btn-new-game" onclick="resetGame()">↺ NOVA PARTIDA</button>
    <div class="fc-site">FutDraft</div>`;
}

// ═══════════════════════════════════════════
// RESET
// ═══════════════════════════════════════════
function resetGame() {
  if (window._currentMatchInterval) clearInterval(window._currentMatchInterval);
  stopAmbiente();
  window._tlContinueCallback = null;
  state = { currentTeam:null, rerollsLeft:3, formation:null, squad:[], phase:"landing", pickCount:0, mode:"champions" };
  showPage("pageLanding");
}

// ═══════════════════════════════════════════
// CHANGELOG
// ═══════════════════════════════════════════
function openChangelog() {
  const ov = document.getElementById("changelogOverlay");
  if (ov) ov.classList.add("open");
}
function closeChangelog() {
  const ov = document.getElementById("changelogOverlay");
  if (ov) ov.classList.remove("open");
}

document.getElementById("headerRight").insertAdjacentHTML("afterbegin",
  `<span style="font-size:0.7rem;font-weight:700;letter-spacing:2px;color:rgba(255,255,255,0.5)">MONTE · SIMULE · FUTDRAFT</span>`);

// ═══════════════════════════════════════════
// CRÉDITOS
// ═══════════════════════════════════════════
function openCredits() {
  const ov = document.getElementById("creditsOverlay");
  if (ov) ov.classList.add("open");
}
function closeCredits() {
  const ov = document.getElementById("creditsOverlay");
  if (ov) ov.classList.remove("open");
}

// ═══════════════════════════════════════════
// VITRINE — todos os times do jogo, lendo direto
// dos arrays (TEAMS, BRAZIL_TEAMS, LIBERTADORES_TEAMS,
// WORLD_CUP_TEAMS), sem listar nenhum time na mão.
// ═══════════════════════════════════════════

// Cada filtro aponta pro mesmo array já usado em getTeamPool(),
// então times novos adicionados no data.js aparecem aqui sozinhos.
const VITRINE_FILTERS = [
  { key: "champions",    label: "🏆 Champions",       teams: () => TEAMS },
  { key: "libertadores", label: "🌎 Libertadores",    teams: () => LIBERTADORES_TEAMS.concat(BRAZIL_TEAMS.filter(t => LIBERTADORES_BR_IDS.has(t.id))) },
  { key: "brasil",       label: "🇧🇷 Copa do Brasil",  teams: () => BRAZIL_TEAMS },
  { key: "copadomundo",  label: "🌍 Copa do Mundo",   teams: () => WORLD_CUP_TEAMS },
];

let vitrineActiveFilter = "champions";

function openVitrine() {
  const ov = document.getElementById("vitrineOverlay");
  if (!ov) return;
  ov.classList.add("open");
  if (!ov.dataset.built) {
    ov.dataset.built = "1";
    renderVitrineFilters();
  }
  document.getElementById("vitrineSearch").value = "";
  renderVitrineGrid();
}
function closeVitrine() {
  const ov = document.getElementById("vitrineOverlay");
  if (ov) ov.classList.remove("open");
}

function renderVitrineFilters() {
  const wrap = document.getElementById("vitrineFilters");
  wrap.innerHTML = VITRINE_FILTERS.map(f =>
    `<button class="vf-btn ${f.key === vitrineActiveFilter ? "active" : ""}" data-key="${f.key}" onclick="setVitrineFilter('${f.key}')">${f.label}</button>`
  ).join("");
}

function setVitrineFilter(key) {
  vitrineActiveFilter = key;
  document.querySelectorAll(".vf-btn").forEach(b => b.classList.toggle("active", b.dataset.key === key));
  renderVitrineGrid();
}

// Como o data.js não guarda um texto de "por que esse time está aqui",
// a gente monta uma legenda curta automaticamente a partir do que já
// existe (nome + temporada + país), sem precisar escrever uma por uma.
function vitrineSubtitle(t) {
  if (t.season && t.country) return `${t.season} · ${t.country}`;
  if (t.season) return t.season;
  return t.country || "";
}

function renderVitrineGrid() {
  const filter = VITRINE_FILTERS.find(f => f.key === vitrineActiveFilter) || VITRINE_FILTERS[0];
  const query = (document.getElementById("vitrineSearch").value || "").trim().toLowerCase();
  let list = filter.teams();
  if (query) {
    list = list.filter(t =>
      t.name.toLowerCase().includes(query) ||
      (t.season || "").toLowerCase().includes(query) ||
      (t.country || "").toLowerCase().includes(query)
    );
  }
  document.getElementById("vitrineCount").textContent = `${list.length} TIME${list.length === 1 ? "" : "S"} ENCONTRADO${list.length === 1 ? "" : "S"}`;

  const body = document.getElementById("vitrineBody");
  if (!list.length) {
    body.innerHTML = `<div class="vt-empty">Nenhum time encontrado com esse filtro/busca.</div>`;
    return;
  }
  body.innerHTML = `<div class="vt-grid">${list.map(t => {
    const ovr = Math.round(teamOverall(t.players));
    return `<div class="vt-card" onclick="openVitrineDetail('${filter.key}','${t.id}')">
      <div class="vt-card-top">
        <span class="vt-flag">${t.flag || "⭐"}</span>
        <div>
          <div class="vt-name">${t.name}</div>
          <div class="vt-season">${vitrineSubtitle(t)}</div>
        </div>
      </div>
      <div class="vt-card-foot">
        <span class="vt-formation-tag">${t.formation || "—"}</span>
        <span><span class="vt-ovr-label">OVR</span><span class="vt-ovr">${ovr}</span></span>
      </div>
    </div>`;
  }).join("")}</div>`;
}

function openVitrineDetail(filterKey, teamId) {
  const filter = VITRINE_FILTERS.find(f => f.key === filterKey);
  const team = filter.teams().find(t => t.id === teamId);
  if (!team) return;

  const ovr = Math.round(teamOverall(team.players));
  const sortedPlayers = [...team.players].sort((a, b) => b.overall - a.overall);

  const body = document.getElementById("vitrineBody");
  body.innerHTML = `
    <button class="vt-detail-back" onclick="renderVitrineGrid()">← VOLTAR PRA LISTA</button>
    <div class="vt-detail-head">
      <span class="vt-detail-flag">${team.flag || "⭐"}</span>
      <div>
        <div class="vt-detail-name">${team.name}</div>
        <div class="vt-detail-meta">${vitrineSubtitle(team)} · Formação ${team.formation || "—"} · ${team.players.length} jogadores</div>
      </div>
      <div class="vt-detail-ovr">
        <div class="vt-detail-ovr-num">${ovr}</div>
        <div class="vt-detail-ovr-label">OVERALL</div>
      </div>
    </div>
    <div class="vt-squad-list">
      ${sortedPlayers.map(p => `
        <div class="vt-squad-row">
          <span class="vt-squad-pos role-${POS_ROLE[POS_LABELS[p.pos]] || "mid"}">${POS_LABELS[p.pos] || p.pos}</span>
          <span class="vt-squad-name">${p.name}</span>
          <span class="vt-squad-ovr">${maskOvr(p.overall)}</span>
        </div>`).join("")}
    </div>
  `;
}
