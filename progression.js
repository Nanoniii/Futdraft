// ═══════════════════════════════════════════════════════════════
// PROGRESSÃO — histórico do jogador + 50 conquistas
// Não é chamado no Modo Livre (isProgressionDisabled() em game.js).
// ═══════════════════════════════════════════════════════════════

const HISTORY_KEY = "futdraft_history_v1";
const ACHIEVEMENTS_KEY = "futdraft_achievements_v1";

const HISTORY_DEFAULTS = () => ({
  played: 0, wins: 0, draws: 0, losses: 0,
  goalsFor: 0, goalsAgainst: 0,
  streak: 0, bestStreak: 0,
  titles: 0,
  titlesByMode: { champions: 0, libertadores: 0, brasil: 0, copadomundo: 0, eurocopa: 0 },
  playedByMode: { champions: 0, libertadores: 0, brasil: 0, copadomundo: 0, eurocopa: 0 },
  eliminatedAtGroup: 0, eliminatedAtFinal: 0,
  cleanSheetTitles: 0,
  hardcorePlayed: 0, hardcoreTitles: 0, themeTitles: 0,
  fullRerollCount: 0,
  scorers: {},              // nome -> gols acumulados
  formationsUsed: [],        // formações já usadas ao menos 1x
  playersUsed: [],           // nomes de jogadores já escalados
  biggestWin: null,          // { margin, myGoals, theirGoals, opponent, mode, date }
  bestSquad: null,           // { overall, mode, formation, date }
  legendUsed: false,         // já escalou jogador com overall >= 95
  matches: [],               // últimas partidas (cap 30)
});

function loadHistory() {
  try {
    const saved = JSON.parse(localStorage.getItem(HISTORY_KEY));
    return { ...HISTORY_DEFAULTS(), ...(saved || {}) };
  } catch (e) { return HISTORY_DEFAULTS(); }
}
function saveHistory(h) {
  try { localStorage.setItem(HISTORY_KEY, JSON.stringify(h)); } catch (e) {}
}
function loadAchState() {
  try {
    const saved = JSON.parse(localStorage.getItem(ACHIEVEMENTS_KEY));
    return saved && saved.unlocked ? saved : { unlocked: {} };
  } catch (e) { return { unlocked: {} }; }
}
function saveAchState(s) {
  try { localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(s)); } catch (e) {}
}

// ═══════════════════════════════════════════
// 50 CONQUISTAS
// Cada uma tem: id, name, desc, icon, check(m, h) -> bool
// m = resumo da partida que acabou de terminar · h = histórico JÁ atualizado
// ═══════════════════════════════════════════
const ACHIEVEMENTS = [
  // ── Partidas jogadas ──
  { id:"played_1",   name:"Estreante",        desc:"Jogue sua primeira partida.",                icon:"🎽", check:(m,h)=>h.played>=1 },
  { id:"played_10",  name:"Veterano",         desc:"Jogue 10 partidas.",                          icon:"🎽", check:(m,h)=>h.played>=10 },
  { id:"played_25",  name:"Viciado em Fut",   desc:"Jogue 25 partidas.",                          icon:"🎽", check:(m,h)=>h.played>=25 },
  { id:"played_50",  name:"Old Money",        desc:"Jogue 50 partidas.",                          icon:"🎽", check:(m,h)=>h.played>=50 },
  { id:"played_100", name:"Lenda do FutDraft",desc:"Jogue 100 partidas.",                          icon:"🎽", check:(m,h)=>h.played>=100 },

  // ── Vitórias ──
  { id:"wins_1",   name:"Primeira Vitória", desc:"Vença sua primeira partida.",       icon:"⚽", check:(m,h)=>h.wins>=1 },
  { id:"wins_10",  name:"Máquina de Vencer",desc:"Chegue a 10 vitórias.",              icon:"⚽", check:(m,h)=>h.wins>=10 },
  { id:"wins_25",  name:"Dominante",        desc:"Chegue a 25 vitórias.",              icon:"⚽", check:(m,h)=>h.wins>=25 },
  { id:"wins_50",  name:"Implacável",       desc:"Chegue a 50 vitórias.",              icon:"⚽", check:(m,h)=>h.wins>=50 },

  // ── Sequência de vitórias ──
  { id:"streak_3",  name:"Embalado",        desc:"Vença 3 partidas seguidas (título).",  icon:"🔥", check:(m,h)=>h.bestStreak>=3 },
  { id:"streak_5",  name:"Em Chamas",       desc:"Vença 5 partidas seguidas (título).",  icon:"🔥", check:(m,h)=>h.bestStreak>=5 },
  { id:"streak_10", name:"Imparável",       desc:"Vença 10 partidas seguidas (título).", icon:"🔥", check:(m,h)=>h.bestStreak>=10 },

  // ── Títulos ──
  { id:"title_1",  name:"Primeiro Título",   desc:"Seja campeão em qualquer competição.",       icon:"🏆", check:(m,h)=>h.titles>=1 },
  { id:"title_5",  name:"Multicampeão",      desc:"Seja campeão 5 vezes.",                       icon:"🏆", check:(m,h)=>h.titles>=5 },
  { id:"title_10", name:"Dinastia",          desc:"Seja campeão 10 vezes.",                      icon:"🏆", check:(m,h)=>h.titles>=10 },
  { id:"title_25", name:"Hall da Fama",      desc:"Seja campeão 25 vezes.",                      icon:"🏆", check:(m,h)=>h.titles>=25 },
  { id:"title_champions",    name:"Rei da Europa",       desc:"Seja campeão da Champions League.",  icon:"🏆", check:(m,h)=>h.titlesByMode.champions>=1 },
  { id:"title_libertadores", name:"Rei da América",      desc:"Seja campeão da Libertadores.",       icon:"🏆", check:(m,h)=>h.titlesByMode.libertadores>=1 },
  { id:"title_brasil",       name:"Campeão Nacional",    desc:"Seja campeão da Copa do Brasil.",     icon:"🏆", check:(m,h)=>h.titlesByMode.brasil>=1 },
  { id:"title_copadomundo",  name:"Campeão Mundial",     desc:"Seja campeão da Copa do Mundo.",      icon:"🏆", check:(m,h)=>h.titlesByMode.copadomundo>=1 },
  { id:"title_eurocopa",     name:"Campeão Europeu",     desc:"Seja campeão da Eurocopa.",           icon:"🏆", check:(m,h)=>h.titlesByMode.eurocopa>=1 },
  { id:"title_grandslam",    name:"Grand Slam",          desc:"Seja campeão em todas as 5 competições.", icon:"👑",
    check:(m,h)=>Object.values(h.titlesByMode).every(v=>v>=1) },
  { id:"title_clean",  name:"Muralha", desc:"Seja campeão sem perder nenhuma partida na campanha.", icon:"🧱", check:(m,h)=>h.cleanSheetTitles>=1 },

  // ── Eliminação ──
  { id:"elim_final_1", name:"Quase Lá",             desc:"Perca uma final.",                          icon:"🥈", check:(m,h)=>h.eliminatedAtFinal>=1 },
  { id:"elim_final_3", name:"Sempre o Segundo",      desc:"Perca 3 finais.",                           icon:"🥈", check:(m,h)=>h.eliminatedAtFinal>=3 },

  // ── Artilharia / gols ──
  { id:"goals_10",  name:"Pé Quente",       desc:"Marque 10 gols no total (somando todas as partidas).", icon:"🥅", check:(m,h)=>totalScored(h)>=10 },
  { id:"goals_50",  name:"Artilheiro",      desc:"Marque 50 gols no total.",                              icon:"🥅", check:(m,h)=>totalScored(h)>=50 },
  { id:"goals_150", name:"Máquina de Gols", desc:"Marque 150 gols no total.",                             icon:"🥅", check:(m,h)=>totalScored(h)>=150 },
  { id:"scorer_15", name:"Artilheiro Nato", desc:"Um jogador do seu elenco chegue a 15 gols no acumulado.", icon:"⭐", check:(m,h)=>Object.values(h.scorers).some(g=>g>=15) },
  { id:"scorer_30", name:"Rei do Ataque",   desc:"Um jogador do seu elenco chegue a 30 gols no acumulado.", icon:"⭐", check:(m,h)=>Object.values(h.scorers).some(g=>g>=30) },

  // ── Goleadas ──
  { id:"rout_4", name:"Goleada",          desc:"Vença uma partida por 4 gols de diferença ou mais.", icon:"💥", check:(m)=>m && m.marginWin>=4 },
  { id:"rout_6", name:"Show de Bola",     desc:"Vença uma partida por 6 gols de diferença ou mais.", icon:"💥", check:(m)=>m && m.marginWin>=6 },
  { id:"rout_8", name:"Humilhação",       desc:"Vença uma partida por 8 gols de diferença ou mais.", icon:"💥", check:(m)=>m && m.marginWin>=8 },

  // ── Overall do elenco ──
  { id:"ovr_85", name:"Time de Respeito", desc:"Monte um elenco com overall geral 85+.", icon:"📈", check:(m,h)=>(h.bestSquad?.overall||0)>=85 },
  { id:"ovr_90", name:"Time dos Sonhos",  desc:"Monte um elenco com overall geral 90+.", icon:"📈", check:(m,h)=>(h.bestSquad?.overall||0)>=90 },
  { id:"ovr_95", name:"Onze Ideal",       desc:"Monte um elenco com overall geral 95+.", icon:"📈", check:(m,h)=>(h.bestSquad?.overall||0)>=95 },
  { id:"legend_used", name:"Craque Histórico", desc:"Escale um jogador com overall 95 ou mais.", icon:"🌟", check:(m,h)=>h.legendUsed },

  // ── Diversidade ──
  { id:"formations_5",  name:"Versátil",       desc:"Jogue com 5 formações diferentes.",  icon:"🧩", check:(m,h)=>h.formationsUsed.length>=5 },
  { id:"formations_all",name:"Estrategista",   desc:"Jogue com todas as formações disponíveis.", icon:"🧩", check:(m,h)=>h.formationsUsed.length>=10 },
  { id:"players_50",  name:"Colecionador",     desc:"Escale 50 jogadores diferentes ao longo da carreira.", icon:"📚", check:(m,h)=>h.playersUsed.length>=50 },
  { id:"players_150", name:"Enciclopédia Viva",desc:"Escale 150 jogadores diferentes ao longo da carreira.", icon:"📚", check:(m,h)=>h.playersUsed.length>=150 },
  { id:"all_modes", name:"Turista do Futebol", desc:"Jogue ao menos uma partida em cada uma das 5 competições.", icon:"🗺️",
    check:(m,h)=>Object.values(h.playedByMode).every(v=>v>=1) },

  // ── Hardcore / restrição temática ──
  { id:"hardcore_play_1",  name:"Sem Rede",        desc:"Jogue uma partida no Modo Hardcore.",           icon:"🕶️", check:(m,h)=>h.hardcorePlayed>=1 },
  { id:"hardcore_play_10", name:"Puro Instinto",   desc:"Jogue 10 partidas no Modo Hardcore.",           icon:"🕶️", check:(m,h)=>h.hardcorePlayed>=10 },
  { id:"hardcore_title",   name:"Cego, Mas Certeiro", desc:"Seja campeão no Modo Hardcore.",             icon:"🕶️", check:(m,h)=>h.hardcoreTitles>=1 },
  { id:"theme_title",      name:"Fiel à Camisa",   desc:"Seja campeão com a Restrição Temática ativa.",  icon:"🎯", check:(m,h)=>h.themeTitles>=1 },

  // ── Rerolls ──
  { id:"full_reroll_1",  name:"Indeciso",       desc:"Use os 3 re-sorteios em uma única partida.", icon:"🎲", check:(m)=>m && m.usedAllRerolls },
  { id:"full_reroll_10", name:"Nunca Satisfeito",desc:"Use os 3 re-sorteios em 10 partidas diferentes.", icon:"🎲", check:(m,h)=>h.fullRerollCount>=10 },

  // ── Marcos gerais ──
  { id:"losses_10",  name:"Resiliente",       desc:"Perca 10 partidas — e continue jogando.", icon:"💪", check:(m,h)=>h.losses>=10 },
  { id:"first_title_final", name:"Estreia de Gala", desc:"Seja campeão logo na primeira partida jogada.", icon:"🎉", check:(m,h)=>h.played===1 && h.titles>=1 },
];

function totalScored(h) { return h.goalsFor || 0; }

// ═══════════════════════════════════════════
// Registra o resultado de uma partida e verifica novas conquistas.
// Chamado em game.js ao fim de runSimulation(), só fora do Modo Livre.
// ═══════════════════════════════════════════
function recordMatchAndCheckAchievements(summary) {
  const h = loadHistory();

  h.played++;
  h.wins += summary.wins; h.draws += summary.draws; h.losses += summary.losses;
  h.goalsFor += summary.goalsFor; h.goalsAgainst += summary.goalsAgainst;
  h.playedByMode[summary.mode] = (h.playedByMode[summary.mode] || 0) + 1;

  if (summary.champion) {
    h.streak++;
    h.bestStreak = Math.max(h.bestStreak, h.streak);
    h.titles++;
    h.titlesByMode[summary.mode] = (h.titlesByMode[summary.mode] || 0) + 1;
    if (summary.losses === 0) h.cleanSheetTitles++;
    if (summary.hardcore) h.hardcoreTitles++;
    if (summary.themeRestriction) h.themeTitles++;
  } else {
    h.streak = 0;
    if (summary.eliminatedAtGroup) h.eliminatedAtGroup++;
    if (summary.eliminatedAtFinal) h.eliminatedAtFinal++;
  }

  if (summary.hardcore) h.hardcorePlayed++;
  if (summary.usedAllRerolls) h.fullRerollCount++;

  // Artilheiros acumulados
  Object.entries(summary.scorersThisMatch || {}).forEach(([name, goals]) => {
    h.scorers[name] = (h.scorers[name] || 0) + goals;
  });

  // Formações e jogadores usados (histórico de carreira)
  if (!h.formationsUsed.includes(summary.formation)) h.formationsUsed.push(summary.formation);
  summary.squad.forEach(p => { if (!h.playersUsed.includes(p.name)) h.playersUsed.push(p.name); });
  if (summary.squad.some(p => p.overall >= 95)) h.legendUsed = true;

  // Maior goleada
  if (summary.marginWin > 0 && (!h.biggestWin || summary.marginWin > h.biggestWin.margin)) {
    h.biggestWin = {
      margin: summary.marginWin, myGoals: summary.biggestWinGoals?.mine, theirGoals: summary.biggestWinGoals?.theirs,
      opponent: summary.biggestWinGoals?.opponent, mode: summary.mode, date: Date.now(),
    };
  }

  // Melhor elenco de todos
  if (!h.bestSquad || summary.overall > h.bestSquad.overall) {
    h.bestSquad = { overall: summary.overall, mode: summary.mode, formation: summary.formation, date: Date.now() };
  }

  // Últimas partidas (mantém as 30 mais recentes)
  h.matches.unshift({
    date: Date.now(), mode: summary.mode, formation: summary.formation,
    result: summary.champion ? "campeão" : (summary.reachedFinal ? "vice" : summary.stageReached),
    goalsFor: summary.goalsFor, goalsAgainst: summary.goalsAgainst, overall: summary.overall,
  });
  if (h.matches.length > 30) h.matches.length = 30;

  saveHistory(h);

  // Verifica conquistas ainda não desbloqueadas
  const achState = loadAchState();
  const newlyUnlocked = [];
  ACHIEVEMENTS.forEach(a => {
    if (achState.unlocked[a.id]) return;
    let ok = false;
    try { ok = !!a.check(summary, h); } catch (e) { ok = false; }
    if (ok) { achState.unlocked[a.id] = Date.now(); newlyUnlocked.push(a); }
  });
  if (newlyUnlocked.length) saveAchState(achState);

  return newlyUnlocked;
}

function showAchievementToasts(list) {
  const stack = document.getElementById("achToastStack");
  if (!stack || !list || !list.length) return;
  list.forEach((a, i) => {
    setTimeout(() => {
      const el = document.createElement("div");
      el.className = "ach-toast";
      el.innerHTML = `<span class="ach-toast-icon">${a.icon}</span>
        <div class="ach-toast-text"><div class="ach-toast-title">CONQUISTA DESBLOQUEADA</div>
        <div class="ach-toast-name">${a.name}</div></div>`;
      stack.appendChild(el);
      requestAnimationFrame(() => el.classList.add("show"));
      setTimeout(() => {
        el.classList.remove("show");
        setTimeout(() => el.remove(), 400);
      }, 4200);
    }, i * 700);
  });
}

// ═══════════════════════════════════════════
// UI — MODAL HISTÓRICO / CONQUISTAS
// ═══════════════════════════════════════════
function openHistory() {
  renderHistoryStats();
  renderHistoryAchievements();
  renderHistoryMatches();
  document.getElementById("historyOverlay").classList.add("open");
}
function closeHistory() {
  document.getElementById("historyOverlay").classList.remove("open");
}
function setHistoryTab(tab) {
  ["stats","achievements","matches"].forEach(t => {
    document.getElementById(`historyPanel${t[0].toUpperCase()+t.slice(1)}`).style.display = (t===tab) ? "block" : "none";
  });
  document.querySelectorAll(".history-tab").forEach(b => b.classList.toggle("active", b.dataset.tab===tab));
}

const MODE_LABELS_PT = { champions:"Champions", libertadores:"Libertadores", brasil:"Copa do Brasil", copadomundo:"Copa do Mundo", eurocopa:"Eurocopa" };

function renderHistoryStats() {
  const h = loadHistory();
  const el = document.getElementById("historyPanelStats");
  if (!el) return;
  const topScorerEntry = Object.entries(h.scorers).sort((a,b)=>b[1]-a[1])[0];
  el.innerHTML = `
    <div class="hist-grid">
      <div class="hist-card"><span class="hist-num">${h.played}</span><span class="hist-label">Partidas jogadas</span></div>
      <div class="hist-card"><span class="hist-num">${h.titles}</span><span class="hist-label">Títulos</span></div>
      <div class="hist-card"><span class="hist-num">${h.wins}</span><span class="hist-label">Vitórias</span></div>
      <div class="hist-card"><span class="hist-num">${h.draws}</span><span class="hist-label">Empates</span></div>
      <div class="hist-card"><span class="hist-num">${h.losses}</span><span class="hist-label">Derrotas</span></div>
      <div class="hist-card"><span class="hist-num">${h.bestStreak}</span><span class="hist-label">Melhor sequência de títulos</span></div>
    </div>
    <div class="hist-highlights">
      <div class="hist-hl"><div class="hist-hl-label">⭐ Artilheiro histórico</div>
        <div class="hist-hl-value">${topScorerEntry ? `${topScorerEntry[0]} — ${topScorerEntry[1]} gols` : "—"}</div></div>
      <div class="hist-hl"><div class="hist-hl-label">💥 Maior goleada</div>
        <div class="hist-hl-value">${h.biggestWin ? `${h.biggestWin.myGoals}–${h.biggestWin.theirGoals} vs ${h.biggestWin.opponent} (${MODE_LABELS_PT[h.biggestWin.mode]||h.biggestWin.mode})` : "—"}</div></div>
      <div class="hist-hl"><div class="hist-hl-label">📈 Melhor time de todos</div>
        <div class="hist-hl-value">${h.bestSquad ? `Overall ${h.bestSquad.overall} · ${h.bestSquad.formation} · ${MODE_LABELS_PT[h.bestSquad.mode]||h.bestSquad.mode}` : "—"}</div></div>
    </div>
  `;
}

function renderHistoryAchievements() {
  const state = loadAchState();
  const unlockedCount = Object.keys(state.unlocked).length;
  const badge = document.getElementById("achCountBadge");
  if (badge) badge.textContent = `${unlockedCount}/${ACHIEVEMENTS.length}`;
  const el = document.getElementById("historyPanelAchievements");
  if (!el) return;
  el.innerHTML = `<div class="ach-grid">` + ACHIEVEMENTS.map(a => {
    const unlocked = !!state.unlocked[a.id];
    return `<div class="ach-item${unlocked ? " unlocked" : ""}">
      <span class="ach-icon">${unlocked ? a.icon : "🔒"}</span>
      <div class="ach-text"><div class="ach-name">${a.name}</div><div class="ach-desc">${a.desc}</div></div>
    </div>`;
  }).join("") + `</div>`;
}

function renderHistoryMatches() {
  const h = loadHistory();
  const el = document.getElementById("historyPanelMatches");
  if (!el) return;
  if (!h.matches.length) { el.innerHTML = `<p class="fp-desc">Nenhuma partida registrada ainda.</p>`; return; }
  el.innerHTML = `<div class="hist-match-list">` + h.matches.map(mt => {
    const d = new Date(mt.date);
    return `<div class="hist-match-row">
      <span class="hmr-mode">${MODE_LABELS_PT[mt.mode] || mt.mode}</span>
      <span class="hmr-result ${mt.result==='campeão'?'champ':''}">${mt.result.toUpperCase()}</span>
      <span class="hmr-score">${mt.goalsFor}-${mt.goalsAgainst}</span>
      <span class="hmr-ovr">OVR ${mt.overall}</span>
      <span class="hmr-date">${d.toLocaleDateString("pt-BR")}</span>
    </div>`;
  }).join("") + `</div>`;
}
