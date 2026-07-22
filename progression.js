// ═══════════════════════════════════════════════════════════════
// PROGRESSÃO — histórico do jogador + 51 conquistas
// Não é chamado no Modo Livre (isProgressionDisabled() em game.js).
// ═══════════════════════════════════════════════════════════════

const HISTORY_KEY = "futdraft_history_v1";
const ACHIEVEMENTS_KEY = "futdraft_achievements_v1";

const HISTORY_DEFAULTS = () => ({
  played: 0, wins: 0, draws: 0, losses: 0,
  goalsFor: 0, goalsAgainst: 0,
  streak: 0, bestStreak: 0,
  titles: 0,
  titlesByMode: { champions: 0, libertadores: 0, brasil: 0, copadomundo: 0, eurocopa: 0, copaamerica: 0, mundial: 0 },
  playedByMode: { champions: 0, libertadores: 0, brasil: 0, copadomundo: 0, eurocopa: 0, copaamerica: 0, mundial: 0 },
  eliminatedAtGroup: 0, eliminatedAtFinal: 0,
  cleanSheetTitles: 0,
  hardcorePlayed: 0, hardcoreTitles: 0, themeTitles: 0,
  fullRerollCount: 0,
  perfectTitles: 0,        // títulos sem NENHUMA derrota E sem NENHUM empate na campanha
  zeroConcededTitles: 0,   // títulos sem sofrer nenhum gol na campanha inteira
  perfectGroupStages: 0,   // fases de grupo com aproveitamento 100% (só vitórias)
  scorers: {},              // nome -> gols acumulados
  assists: {},              // nome -> assistências acumuladas
  // Todo título conquistado na carreira (não só o melhor elenco) — usado
  // no Hall da Fama pra mostrar TODOS os times campeões do jogador.
  titlesWon: [],
  formationsUsed: [],        // formações já usadas ao menos 1x
  playersUsed: [],           // nomes de jogadores já escalados
  // Snapshot completo de cada jogador diferente já escalado (posição, time,
  // temporada, overall) — usado pro "Time dos Sonhos" no menu Histórico.
  // Guardado independente da vitrine atual, então mesmo jogadores removidos
  // do sorteio continuam aparecendo aqui.
  playersUsedFull: [],
  biggestWin: null,          // { margin, myGoals, theirGoals, opponent, mode, date }
  bestSquad: null,           // { overall, mode, formation, date, players: [...] }
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
// 151 CONQUISTAS
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
  { id:"title_copaamerica",  name:"Campeão Sul-Americano", desc:"Seja campeão da Copa América.",     icon:"🏆", check:(m,h)=>h.titlesByMode.copaamerica>=1 },
  { id:"title_mundial",      name:"Rei do Mundo",        desc:"Seja campeão do Mundial de Clubes.",  icon:"🏆", check:(m,h)=>h.titlesByMode.mundial>=1 },
  { id:"title_grandslam",    name:"Grand Slam",          desc:"Seja campeão em todas as 7 competições.", icon:"👑",
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

  // ── Assistências ──
  { id:"assist_15", name:"Garçom",       desc:"Um jogador do seu elenco chegue a 15 assistências no acumulado.", icon:"🎯", check:(m,h)=>Object.values(h.assists||{}).some(a=>a>=15) },
  { id:"assist_30", name:"Rei do Passe", desc:"Um jogador do seu elenco chegue a 30 assistências no acumulado.", icon:"🎯", check:(m,h)=>Object.values(h.assists||{}).some(a=>a>=30) },

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
  { id:"formations_all",name:"Estrategista",   desc:"Jogue com todas as formações disponíveis.", icon:"🧩", check:(m,h)=>h.formationsUsed.length>=Object.keys(FORMATIONS).length },
  { id:"players_50",  name:"Colecionador",     desc:"Escale 50 jogadores diferentes ao longo da carreira.", icon:"📚", check:(m,h)=>h.playersUsed.length>=50 },
  { id:"players_150", name:"Enciclopédia Viva",desc:"Escale 150 jogadores diferentes ao longo da carreira.", icon:"📚", check:(m,h)=>h.playersUsed.length>=150 },
  { id:"all_modes", name:"Turista do Futebol", desc:"Jogue ao menos uma partida em cada uma das 7 competições.", icon:"🗺️",
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

  // ═══════════════════════════════════════════
  // +100 CONQUISTAS EXTRAS
  // ═══════════════════════════════════════════

  // ── Partidas jogadas (marcos avançados) ──
  { id:"played_150", name:"Carreira Longa",   desc:"Jogue 150 partidas.", icon:"🎽", check:(m,h)=>h.played>=150 },
  { id:"played_200", name:"Maratonista",      desc:"Jogue 200 partidas.", icon:"🎽", check:(m,h)=>h.played>=200 },
  { id:"played_300", name:"Incansável",       desc:"Jogue 300 partidas.", icon:"🎽", check:(m,h)=>h.played>=300 },
  { id:"played_500", name:"Um com o Jogo",    desc:"Jogue 500 partidas.", icon:"🎽", check:(m,h)=>h.played>=500 },

  // ── Vitórias (marcos avançados) ──
  { id:"wins_75",  name:"Sequência de Sucesso", desc:"Chegue a 75 vitórias.",  icon:"⚽", check:(m,h)=>h.wins>=75 },
  { id:"wins_100", name:"Centenário",           desc:"Chegue a 100 vitórias.", icon:"⚽", check:(m,h)=>h.wins>=100 },
  { id:"wins_150", name:"Especialista em Vencer",desc:"Chegue a 150 vitórias.", icon:"⚽", check:(m,h)=>h.wins>=150 },
  { id:"wins_200", name:"Insaciável",           desc:"Chegue a 200 vitórias.", icon:"⚽", check:(m,h)=>h.wins>=200 },
  { id:"wins_300", name:"Fábrica de Vitórias",  desc:"Chegue a 300 vitórias.", icon:"⚽", check:(m,h)=>h.wins>=300 },
  { id:"wins_500", name:"Sem Rival",            desc:"Chegue a 500 vitórias.", icon:"⚽", check:(m,h)=>h.wins>=500 },

  // ── Empates ──
  { id:"draws_5",  name:"Ponto Somado",   desc:"Empate 5 partidas.",  icon:"🤝", check:(m,h)=>h.draws>=5 },
  { id:"draws_15", name:"Equilibrista",   desc:"Empate 15 partidas.", icon:"🤝", check:(m,h)=>h.draws>=15 },
  { id:"draws_30", name:"Zero a Zero e Tal", desc:"Empate 30 partidas.", icon:"🤝", check:(m,h)=>h.draws>=30 },
  { id:"draws_50", name:"Mestre do Empate", desc:"Empate 50 partidas.", icon:"🤝", check:(m,h)=>h.draws>=50 },

  // ── Derrotas (marcos avançados) ──
  { id:"losses_25",  name:"Casca Grossa",  desc:"Perca 25 partidas — e continue jogando.",  icon:"💪", check:(m,h)=>h.losses>=25 },
  { id:"losses_50",  name:"Pele de Aço",   desc:"Perca 50 partidas — e continue jogando.",  icon:"💪", check:(m,h)=>h.losses>=50 },
  { id:"losses_100", name:"Nunca Desiste", desc:"Perca 100 partidas — e continue jogando.", icon:"💪", check:(m,h)=>h.losses>=100 },

  // ── Sequência de vitórias (marcos avançados) ──
  { id:"streak_15", name:"Avassalador",     desc:"Vença 15 partidas seguidas (título).", icon:"🔥", check:(m,h)=>h.bestStreak>=15 },
  { id:"streak_20", name:"Reinado Absoluto",desc:"Vença 20 partidas seguidas (título).", icon:"🔥", check:(m,h)=>h.bestStreak>=20 },
  { id:"streak_25", name:"Século de Ouro",  desc:"Vença 25 partidas seguidas (título).", icon:"🔥", check:(m,h)=>h.bestStreak>=25 },
  { id:"streak_30", name:"Imortal",         desc:"Vença 30 partidas seguidas (título).", icon:"🔥", check:(m,h)=>h.bestStreak>=30 },

  // ── Títulos (marcos avançados) ──
  { id:"title_15",  name:"Colecionador de Taças", desc:"Seja campeão 15 vezes.",  icon:"🏆", check:(m,h)=>h.titles>=15 },
  { id:"title_20",  name:"Era de Ouro",           desc:"Seja campeão 20 vezes.",  icon:"🏆", check:(m,h)=>h.titles>=20 },
  { id:"title_30",  name:"Império",               desc:"Seja campeão 30 vezes.",  icon:"🏆", check:(m,h)=>h.titles>=30 },
  { id:"title_50",  name:"Lenda Viva",            desc:"Seja campeão 50 vezes.",  icon:"🏆", check:(m,h)=>h.titles>=50 },
  { id:"title_75",  name:"Mito",                  desc:"Seja campeão 75 vezes.",  icon:"🏆", check:(m,h)=>h.titles>=75 },
  { id:"title_100", name:"G.O.A.T.",               desc:"Seja campeão 100 vezes.", icon:"🏆", check:(m,h)=>h.titles>=100 },

  // ── Títulos por competição (3x e 5x) ──
  { id:"title_champions_3",    name:"Tricampeão da Europa",       desc:"Seja campeão da Champions League 3 vezes.",       icon:"🏆", check:(m,h)=>h.titlesByMode.champions>=3 },
  { id:"title_champions_5",    name:"Dono da Orelhuda",           desc:"Seja campeão da Champions League 5 vezes.",       icon:"🏆", check:(m,h)=>h.titlesByMode.champions>=5 },
  { id:"title_libertadores_3", name:"Tricampeão da América",      desc:"Seja campeão da Libertadores 3 vezes.",           icon:"🏆", check:(m,h)=>h.titlesByMode.libertadores>=3 },
  { id:"title_libertadores_5", name:"Dono do Continente",         desc:"Seja campeão da Libertadores 5 vezes.",           icon:"🏆", check:(m,h)=>h.titlesByMode.libertadores>=5 },
  { id:"title_brasil_3",       name:"Tricampeão Nacional",        desc:"Seja campeão da Copa do Brasil 3 vezes.",         icon:"🏆", check:(m,h)=>h.titlesByMode.brasil>=3 },
  { id:"title_brasil_5",       name:"Dono do Brasileirão",        desc:"Seja campeão da Copa do Brasil 5 vezes.",         icon:"🏆", check:(m,h)=>h.titlesByMode.brasil>=5 },
  { id:"title_copadomundo_3",  name:"Tricampeão Mundial",         desc:"Seja campeão da Copa do Mundo 3 vezes.",          icon:"🏆", check:(m,h)=>h.titlesByMode.copadomundo>=3 },
  { id:"title_copadomundo_5",  name:"Dono da Taça Jules Rimet",   desc:"Seja campeão da Copa do Mundo 5 vezes.",          icon:"🏆", check:(m,h)=>h.titlesByMode.copadomundo>=5 },
  { id:"title_eurocopa_3",     name:"Tricampeão Europeu",         desc:"Seja campeão da Eurocopa 3 vezes.",               icon:"🏆", check:(m,h)=>h.titlesByMode.eurocopa>=3 },
  { id:"title_eurocopa_5",     name:"Dono da Eurocopa",           desc:"Seja campeão da Eurocopa 5 vezes.",               icon:"🏆", check:(m,h)=>h.titlesByMode.eurocopa>=5 },
  { id:"title_copaamerica_3",  name:"Tricampeão Sul-Americano",   desc:"Seja campeão da Copa América 3 vezes.",           icon:"🏆", check:(m,h)=>h.titlesByMode.copaamerica>=3 },
  { id:"title_copaamerica_5",  name:"Dono da América do Sul",     desc:"Seja campeão da Copa América 5 vezes.",           icon:"🏆", check:(m,h)=>h.titlesByMode.copaamerica>=5 },
  { id:"title_mundial_3",      name:"Tricampeão do Mundo",        desc:"Seja campeão do Mundial de Clubes 3 vezes.",      icon:"🏆", check:(m,h)=>h.titlesByMode.mundial>=3 },
  { id:"title_mundial_5",      name:"Dono do Planeta",            desc:"Seja campeão do Mundial de Clubes 5 vezes.",      icon:"🏆", check:(m,h)=>h.titlesByMode.mundial>=5 },

  // ── Diversidade de títulos ──
  { id:"title_distinct_3", name:"Poliglota das Taças", desc:"Seja campeão em 3 competições diferentes.", icon:"👑", check:(m,h)=>Object.values(h.titlesByMode).filter(v=>v>=1).length>=3 },
  { id:"title_distinct_5", name:"Colecionador Global",  desc:"Seja campeão em 5 competições diferentes.", icon:"👑", check:(m,h)=>Object.values(h.titlesByMode).filter(v=>v>=1).length>=5 },

  // ── Partidas jogadas por competição ──
  { id:"played_champions_10",    name:"Frequentador da Champions",   desc:"Jogue 10 partidas na Champions League.", icon:"🗺️", check:(m,h)=>h.playedByMode.champions>=10 },
  { id:"played_libertadores_10", name:"Frequentador da Libertadores",desc:"Jogue 10 partidas na Libertadores.",     icon:"🗺️", check:(m,h)=>h.playedByMode.libertadores>=10 },
  { id:"played_brasil_10",       name:"Frequentador da Copa do Brasil",desc:"Jogue 10 partidas na Copa do Brasil.", icon:"🗺️", check:(m,h)=>h.playedByMode.brasil>=10 },
  { id:"played_copadomundo_10",  name:"Frequentador da Copa do Mundo",desc:"Jogue 10 partidas na Copa do Mundo.",   icon:"🗺️", check:(m,h)=>h.playedByMode.copadomundo>=10 },
  { id:"played_eurocopa_10",     name:"Frequentador da Eurocopa",    desc:"Jogue 10 partidas na Eurocopa.",         icon:"🗺️", check:(m,h)=>h.playedByMode.eurocopa>=10 },
  { id:"played_copaamerica_10",  name:"Frequentador da Copa América",desc:"Jogue 10 partidas na Copa América.",     icon:"🗺️", check:(m,h)=>h.playedByMode.copaamerica>=10 },
  { id:"played_mundial_10",      name:"Frequentador do Mundial",     desc:"Jogue 10 partidas no Mundial de Clubes.", icon:"🗺️", check:(m,h)=>h.playedByMode.mundial>=10 },

  // ── Eliminação (marcos avançados) ──
  { id:"elim_final_5",  name:"Coração Partido",   desc:"Perca 5 finais.",                          icon:"🥈", check:(m,h)=>h.eliminatedAtFinal>=5 },
  { id:"elim_group_10", name:"Fase de Grupos Difícil", desc:"Seja eliminado na fase de grupos 10 vezes.", icon:"😬", check:(m,h)=>h.eliminatedAtGroup>=10 },
  { id:"elim_group_25", name:"Estrangeiro na Fase de Grupos", desc:"Seja eliminado na fase de grupos 25 vezes.", icon:"😬", check:(m,h)=>h.eliminatedAtGroup>=25 },

  // ── Gols (marcos avançados) ──
  { id:"goals_300",  name:"Chuva de Gols",    desc:"Marque 300 gols no total.",  icon:"🥅", check:(m,h)=>totalScored(h)>=300 },
  { id:"goals_500",  name:"Fábrica de Gols",  desc:"Marque 500 gols no total.",  icon:"🥅", check:(m,h)=>totalScored(h)>=500 },
  { id:"goals_1000", name:"Mil Gols",         desc:"Marque 1000 gols no total.", icon:"🥅", check:(m,h)=>totalScored(h)>=1000 },

  // ── Artilheiro (marcos avançados) ──
  { id:"scorer_50",  name:"Camisa 9 de Respeito", desc:"Um jogador do seu elenco chegue a 50 gols no acumulado.",  icon:"⭐", check:(m,h)=>Object.values(h.scorers).some(g=>g>=50) },
  { id:"scorer_75",  name:"Ídolo da Torcida",     desc:"Um jogador do seu elenco chegue a 75 gols no acumulado.",  icon:"⭐", check:(m,h)=>Object.values(h.scorers).some(g=>g>=75) },
  { id:"scorer_100", name:"Máquina de Fazer Gol", desc:"Um jogador do seu elenco chegue a 100 gols no acumulado.", icon:"⭐", check:(m,h)=>Object.values(h.scorers).some(g=>g>=100) },

  // ── Diversidade de artilheiros ──
  { id:"scorers_distinct_10", name:"Time de Estrelas",    desc:"Tenha 10 jogadores diferentes que já marcaram gol pela sua carreira.", icon:"📚", check:(m,h)=>Object.keys(h.scorers).length>=10 },
  { id:"scorers_distinct_25", name:"Ataque em Camadas",   desc:"Tenha 25 jogadores diferentes que já marcaram gol pela sua carreira.", icon:"📚", check:(m,h)=>Object.keys(h.scorers).length>=25 },
  { id:"scorers_distinct_50", name:"Todo Mundo Marca",    desc:"Tenha 50 jogadores diferentes que já marcaram gol pela sua carreira.", icon:"📚", check:(m,h)=>Object.keys(h.scorers).length>=50 },

  // ── Goleadas (marcos avançados) ──
  { id:"rout_10", name:"Vexame Histórico", desc:"Vença uma partida por 10 gols de diferença ou mais.", icon:"💥", check:(m)=>m && m.marginWin>=10 },
  { id:"rout_12", name:"Não Teve Jogo",    desc:"Vença uma partida por 12 gols de diferença ou mais.", icon:"💥", check:(m)=>m && m.marginWin>=12 },

  // ── Goleadas em competições específicas ──
  { id:"rout_champions",    name:"Atropelo na Europa",       desc:"Vença por 4 gols de diferença ou mais numa campanha da Champions League.", icon:"💥", check:(m)=>m && m.mode==="champions" && m.marginWin>=4 },
  { id:"rout_libertadores", name:"Atropelo na América",      desc:"Vença por 4 gols de diferença ou mais numa campanha da Libertadores.",      icon:"💥", check:(m)=>m && m.mode==="libertadores" && m.marginWin>=4 },
  { id:"rout_copadomundo",  name:"Atropelo Mundial",         desc:"Vença por 4 gols de diferença ou mais numa campanha da Copa do Mundo.",      icon:"💥", check:(m)=>m && m.mode==="copadomundo" && m.marginWin>=4 },
  { id:"rout_mundial",      name:"Atropelo de Clubes",       desc:"Vença por 4 gols de diferença ou mais numa campanha do Mundial de Clubes.",   icon:"💥", check:(m)=>m && m.mode==="mundial" && m.marginWin>=4 },

  // ── Overall do elenco (marcos avançados) ──
  { id:"ovr_97", name:"Quase Perfeito",     desc:"Monte um elenco com overall geral 97+.", icon:"📈", check:(m,h)=>(h.bestSquad?.overall||0)>=97 },
  { id:"ovr_98", name:"Onze Absoluto",      desc:"Monte um elenco com overall geral 98 — o teto máximo do jogo.", icon:"📈", check:(m,h)=>(h.bestSquad?.overall||0)>=98 },

  // ── Diversidade (marcos avançados) ──
  { id:"formations_8", name:"Camaleão Tático", desc:"Jogue com 8 formações diferentes.", icon:"🧩", check:(m,h)=>h.formationsUsed.length>=8 },
  { id:"players_250",  name:"Base de Dados Viva", desc:"Escale 250 jogadores diferentes ao longo da carreira.", icon:"📚", check:(m,h)=>h.playersUsed.length>=250 },
  { id:"players_300",  name:"Sabe de Todo Mundo", desc:"Escale 300 jogadores diferentes ao longo da carreira.", icon:"📚", check:(m,h)=>h.playersUsed.length>=300 },
  { id:"players_500",  name:"Almanaque do Futebol", desc:"Escale 500 jogadores diferentes ao longo da carreira.", icon:"📚", check:(m,h)=>h.playersUsed.length>=500 },

  // ── Hardcore (marcos avançados) ──
  { id:"hardcore_play_25",  name:"Vivendo no Limite",  desc:"Jogue 25 partidas no Modo Hardcore.",            icon:"🕶️", check:(m,h)=>h.hardcorePlayed>=25 },
  { id:"hardcore_play_50",  name:"Sem Medo de Errar",  desc:"Jogue 50 partidas no Modo Hardcore.",            icon:"🕶️", check:(m,h)=>h.hardcorePlayed>=50 },
  { id:"hardcore_title_5",  name:"Instinto Afiado",    desc:"Seja campeão no Modo Hardcore 5 vezes.",         icon:"🕶️", check:(m,h)=>h.hardcoreTitles>=5 },
  { id:"hardcore_title_10", name:"Visão de Águia",     desc:"Seja campeão no Modo Hardcore 10 vezes.",        icon:"🕶️", check:(m,h)=>h.hardcoreTitles>=10 },
  { id:"hardcore_theme_title", name:"Duplo Desafio",   desc:"Seja campeão com o Modo Hardcore e a Restrição Temática ativos ao mesmo tempo.", icon:"🎯", check:(m)=>m && m.champion && m.hardcore && m.themeRestriction },

  // ── Restrição temática (marcos avançados) ──
  { id:"theme_title_5",  name:"Torcedor de Carteirinha", desc:"Seja campeão com a Restrição Temática ativa 5 vezes.",  icon:"🎯", check:(m,h)=>h.themeTitles>=5 },
  { id:"theme_title_10", name:"Sangue na Camisa",        desc:"Seja campeão com a Restrição Temática ativa 10 vezes.", icon:"🎯", check:(m,h)=>h.themeTitles>=10 },

  // ── Rerolls (marcos avançados) ──
  { id:"full_reroll_25", name:"Perfeccionista",    desc:"Use os 3 re-sorteios em 25 partidas diferentes.", icon:"🎲", check:(m,h)=>h.fullRerollCount>=25 },
  { id:"full_reroll_50", name:"Nunca Está Bom",    desc:"Use os 3 re-sorteios em 50 partidas diferentes.", icon:"🎲", check:(m,h)=>h.fullRerollCount>=50 },
  { id:"no_reroll_title", name:"Time da Primeira", desc:"Seja campeão sem usar nenhum re-sorteio.",        icon:"🎲", check:(m)=>m && m.champion && m.usedNoRerolls },

  // ── Saldo de gols acumulado na carreira ──
  { id:"saldo_100", name:"Saldo Positivo",  desc:"Tenha saldo de gols acumulado de +100 na carreira.", icon:"📊", check:(m,h)=>(h.goalsFor-h.goalsAgainst)>=100 },
  { id:"saldo_250", name:"Contas no Azul",  desc:"Tenha saldo de gols acumulado de +250 na carreira.", icon:"📊", check:(m,h)=>(h.goalsFor-h.goalsAgainst)>=250 },
  { id:"saldo_500", name:"Domínio Total",   desc:"Tenha saldo de gols acumulado de +500 na carreira.", icon:"📊", check:(m,h)=>(h.goalsFor-h.goalsAgainst)>=500 },

  // ── Muralha (marcos avançados) ──
  { id:"title_clean_5",  name:"Fortaleza",       desc:"Seja campeão sem perder nenhuma partida na campanha, 5 vezes.",  icon:"🧱", check:(m,h)=>h.cleanSheetTitles>=5 },
  { id:"title_clean_10", name:"Inexpugnável",    desc:"Seja campeão sem perder nenhuma partida na campanha, 10 vezes.", icon:"🧱", check:(m,h)=>h.cleanSheetTitles>=10 },

  // ── Campanhas perfeitas / defesa impecável ──
  { id:"perfect_title_1",  name:"Campanha Perfeita",   desc:"Seja campeão vencendo todas as partidas da campanha (sem empatar nem perder).",   icon:"💎", check:(m,h)=>h.perfectTitles>=1 },
  { id:"perfect_title_5",  name:"Perfeição em Série",  desc:"Tenha 5 campanhas perfeitas (só vitórias) que terminaram em título.",              icon:"💎", check:(m,h)=>h.perfectTitles>=5 },
  { id:"perfect_title_10", name:"Padrão Inatingível",  desc:"Tenha 10 campanhas perfeitas (só vitórias) que terminaram em título.",             icon:"💎", check:(m,h)=>h.perfectTitles>=10 },
  { id:"zero_conceded_title_1", name:"Gol? Nunca Ouvi Falar", desc:"Seja campeão sem sofrer nenhum gol na campanha inteira.",           icon:"🧱", check:(m,h)=>h.zeroConcededTitles>=1 },
  { id:"zero_conceded_title_5", name:"Zagueiro Não Erra",     desc:"Seja campeão sem sofrer nenhum gol na campanha inteira, 5 vezes.",  icon:"🧱", check:(m,h)=>h.zeroConcededTitles>=5 },
  { id:"perfect_group_1",  name:"Grupo na Mão",   desc:"Vença todos os jogos da fase de grupos numa mesma campanha.",           icon:"🎯", check:(m)=>m && m.perfectGroup },
  { id:"perfect_group_10", name:"Fase de Grupos é Fácil", desc:"Vença todos os jogos da fase de grupos em 10 campanhas diferentes.", icon:"🎯", check:(m,h)=>h.perfectGroupStages>=10 },

  // ── Resiliência ──
  { id:"big_loss_survivor", name:"Levou Sufoco e Seguiu",  desc:"Perca uma partida por 5 gols de diferença ou mais e continue jogando a campanha.", icon:"🩹", check:(m)=>m && m.marginLoss>=5 },
  { id:"first_loss",  name:"Batismo de Fogo",  desc:"Sofra sua primeira derrota.", icon:"💧", check:(m,h)=>h.losses===1 },
  { id:"first_draw",  name:"Ponto Dividido",   desc:"Empate pela primeira vez.",   icon:"🤝", check:(m,h)=>h.draws===1 },
  { id:"redemption",  name:"Redenção",         desc:"Seja campeão depois de já ter perdido uma final antes.", icon:"🔄", check:(m,h)=>h.titles>=1 && h.eliminatedAtFinal>=1 },
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
    if (summary.losses === 0 && summary.draws === 0) h.perfectTitles++;
    if (summary.goalsAgainst === 0) h.zeroConcededTitles++;
    if (summary.hardcore) h.hardcoreTitles++;
    if (summary.themeRestriction) h.themeTitles++;

    // Hall da Fama: guarda um snapshot desse time campeão (mais recentes
    // primeiro), independente de ser ou não o melhor elenco da carreira.
    h.titlesWon = h.titlesWon || [];
    h.titlesWon.unshift({
      mode: summary.mode, formation: summary.formation, overall: summary.overall, date: Date.now(),
      hardcore: !!summary.hardcore, cleanSheet: summary.losses === 0,
      players: summary.squad.map(p => ({ name: p.name, pos: p.pos, rawPos: p.rawPos, overall: p.overall, team: p.team, season: p.season })),
    });
    if (h.titlesWon.length > 200) h.titlesWon.length = 200;
  } else {
    h.streak = 0;
    if (summary.eliminatedAtGroup) h.eliminatedAtGroup++;
    if (summary.eliminatedAtFinal) h.eliminatedAtFinal++;
  }

  if (summary.hardcore) h.hardcorePlayed++;
  if (summary.usedAllRerolls) h.fullRerollCount++;
  if (summary.perfectGroup) h.perfectGroupStages++;

  // Artilheiros acumulados
  Object.entries(summary.scorersThisMatch || {}).forEach(([name, goals]) => {
    h.scorers[name] = (h.scorers[name] || 0) + goals;
  });

  // Assistências acumuladas
  Object.entries(summary.assistsThisMatch || {}).forEach(([name, n]) => {
    h.assists[name] = (h.assists[name] || 0) + n;
  });

  // Formações e jogadores usados (histórico de carreira)
  if (!h.formationsUsed.includes(summary.formation)) h.formationsUsed.push(summary.formation);
  summary.squad.forEach(p => { if (!h.playersUsed.includes(p.name)) h.playersUsed.push(p.name); });
  if (summary.squad.some(p => p.overall >= 95)) h.legendUsed = true;

  // Snapshot completo de cada jogador diferente escalado (posição, time,
  // temporada, overall) — usado pro "Time dos Sonhos" no Histórico. Guarda
  // sempre a versão de MAIOR overall de cada jogador (mesmo nome pode
  // aparecer em times/temporadas diferentes, ex.: um craque em dois clubes).
  h.playersUsedFull = h.playersUsedFull || [];
  summary.squad.forEach(p => {
    if (!p || !p.pos) return; // segurança pra dados antigos/incompletos
    const key = `${p.name}|${p.team}|${p.season}`;
    const existingIdx = h.playersUsedFull.findIndex(e => e.key === key);
    const snap = { key, name: p.name, pos: p.pos, rawPos: p.rawPos, overall: p.overall, team: p.team, season: p.season };
    if (existingIdx === -1) h.playersUsedFull.push(snap);
    else if (p.overall > h.playersUsedFull[existingIdx].overall) h.playersUsedFull[existingIdx] = snap;
  });
  // Trava um teto generoso pra não deixar o localStorage crescer sem limite
  if (h.playersUsedFull.length > 600) h.playersUsedFull.length = 600;

  // Maior goleada
  if (summary.marginWin > 0 && (!h.biggestWin || summary.marginWin > h.biggestWin.margin)) {
    h.biggestWin = {
      margin: summary.marginWin, myGoals: summary.biggestWinGoals?.mine, theirGoals: summary.biggestWinGoals?.theirs,
      opponent: summary.biggestWinGoals?.opponent, mode: summary.mode, date: Date.now(),
    };
  }

  // Melhor elenco de todos — guarda a escalação completa (não só o número)
  // pra dar pra mostrar o time de verdade, sem misturar jogadores de times
  // diferentes, no Histórico.
  if (!h.bestSquad || summary.overall > h.bestSquad.overall) {
    h.bestSquad = {
      overall: summary.overall, mode: summary.mode, formation: summary.formation, date: Date.now(),
      players: summary.squad.map(p => ({ name: p.name, pos: p.pos, rawPos: p.rawPos, overall: p.overall, team: p.team, season: p.season, slotId: p.slotId })),
    };
  }

  // Últimas partidas (mantém as 30 mais recentes). Cada entrada guarda um
  // `id` próprio (não o índice do array, que muda conforme campanhas novas
  // entram no topo) e o detalhe jogo a jogo (`games`), pra dar pra reabrir
  // "todos os jogos do campeonato" ao clicar na linha no Histórico — ver
  // renderHistoryMatches(). Campanhas registradas ANTES dessa atualização
  // não têm `games` (fica undefined) — a renderização trata isso à parte.
  h.matches.unshift({
    id: `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    date: Date.now(), mode: summary.mode, formation: summary.formation,
    result: summary.champion ? "campeão" : (summary.reachedFinal ? "vice" : summary.stageReached),
    goalsFor: summary.goalsFor, goalsAgainst: summary.goalsAgainst, overall: summary.overall,
    games: summary.games || null,
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

// Toast simples pra avisar quanto de Pontos de Draft a campanha rendeu —
// aparece junto do stack de conquistas, com um pequeno atraso pra não
// competir visualmente com o primeiro toast de conquista (se houver).
function showDraftPointsToast(amount) {
  const stack = document.getElementById("achToastStack");
  if (!stack || !amount) return;
  setTimeout(() => {
    const el = document.createElement("div");
    el.className = "ach-toast dp-toast";
    el.innerHTML = `<span class="ach-toast-icon">💎</span>
      <div class="ach-toast-text"><div class="ach-toast-title">PONTOS DE DRAFT</div>
      <div class="ach-toast-name">+${amount} pontos ganhos</div></div>`;
    stack.appendChild(el);
    requestAnimationFrame(() => el.classList.add("show"));
    setTimeout(() => {
      el.classList.remove("show");
      setTimeout(() => el.remove(), 400);
    }, 4200);
  }, 300);
}

// ═══════════════════════════════════════════
// UI — PÁGINA HISTÓRICO / CONQUISTAS
// (era um pop-up pequeno, agora é uma tela cheia própria do jogo)
// ═══════════════════════════════════════════
function openHistory() {
  renderHistoryStats();
  renderHistoryHall();
  renderHistoryAchievements();
  renderHistoryMatches();
  renderHistoryTeams();
  document.getElementById("historyOverlay").classList.add("open");
  setHistoryTab("stats");
}
function closeHistory() {
  document.getElementById("historyOverlay").classList.remove("open");
}
function setHistoryTab(tab) {
  ["stats","hall","achievements","matches","teams"].forEach(t => {
    const el = document.getElementById(`historyPanel${t[0].toUpperCase()+t.slice(1)}`);
    if (el) el.style.display = (t===tab) ? "block" : "none";
  });
  document.querySelectorAll(".history-tab").forEach(b => b.classList.toggle("active", b.dataset.tab===tab));
  const content = document.querySelector(".history-page-content");
  if (content) content.scrollTop = 0;
}

const MODE_LABELS_PT = { champions:"Champions", libertadores:"Libertadores", brasil:"Copa do Brasil", copadomundo:"Copa do Mundo", eurocopa:"Eurocopa", copaamerica:"Copa América", mundial:"Mundial de Clubes" };
const MODE_ICONS_PT = { champions:"🏆", libertadores:"🌎", brasil:"🇧🇷", copadomundo:"🌍", eurocopa:"⭐", copaamerica:"🥇", mundial:"🌐" };

function renderHistoryStats() {
  const h = loadHistory();
  const el = document.getElementById("historyPanelStats");
  if (!el) return;
  el.innerHTML = `
    <div class="hist-grid">
      <div class="hist-card"><span class="hist-num">${h.played}</span><span class="hist-label">Campanhas jogadas</span></div>
      <div class="hist-card"><span class="hist-num">${h.titles}</span><span class="hist-label">Títulos</span></div>
      <div class="hist-card"><span class="hist-num">${h.wins}</span><span class="hist-label">Vitórias</span></div>
      <div class="hist-card"><span class="hist-num">${h.draws}</span><span class="hist-label">Empates</span></div>
      <div class="hist-card"><span class="hist-num">${h.losses}</span><span class="hist-label">Derrotas</span></div>
      <div class="hist-card"><span class="hist-num">${h.bestStreak}</span><span class="hist-label">Melhor sequência de títulos</span></div>
    </div>
    <div class="hist-highlights">
      <div class="hist-hl"><div class="hist-hl-label">💥 Maior goleada</div>
        <div class="hist-hl-value">${h.biggestWin ? `${h.biggestWin.myGoals}–${h.biggestWin.theirGoals} vs ${h.biggestWin.opponent} (${MODE_LABELS_PT[h.biggestWin.mode]||h.biggestWin.mode})` : "—"}</div></div>
      <div class="hist-hl"><div class="hist-hl-label">📈 Melhor time de todos</div>
        <div class="hist-hl-value">${h.bestSquad ? `Overall ${h.bestSquad.overall} · ${h.bestSquad.formation} · ${MODE_LABELS_PT[h.bestSquad.mode]||h.bestSquad.mode}` : "—"}</div></div>
      <div class="hist-hl"><div class="hist-hl-label">🏆 Times campeões e ranking de artilheiros/assistentes</div>
        <div class="hist-hl-value"><a href="#" onclick="setHistoryTab('hall');return false;" style="color:var(--gold);">Ver no Hall da Fama →</a></div></div>
    </div>
  `;
}

// ═══════════════════════════════════════════
// ABA "HALL DA FAMA" — pódio (top 3) de artilheiros e assistentes da
// carreira inteira, + a lista de TODOS os times que já foram campeões
// (não só o melhor elenco — cada título vira um card aqui).
// ═══════════════════════════════════════════
function topRanking(obj, n) {
  return Object.entries(obj || {}).sort((a, b) => b[1] - a[1]).slice(0, n);
}
function renderPodiumBlock(label, ranking, unitSingular, unitPlural) {
  const medals = ["🥇", "🥈", "🥉"];
  if (!ranking.length) {
    return `<div class="hall-podium-block">
      <div class="hall-podium-label">${label}</div>
      <div class="hall-podium-empty">Ainda não há registros. Jogue algumas campanhas pra aparecer aqui.</div>
    </div>`;
  }
  return `<div class="hall-podium-block">
    <div class="hall-podium-label">${label}</div>
    ${ranking.map(([name, count], i) => `
      <div class="hall-podium-row">
        <span class="hall-podium-medal">${medals[i]}</span>
        <span class="hall-podium-name">${name}</span>
        <span class="hall-podium-value">${count} ${count === 1 ? unitSingular : unitPlural}</span>
      </div>`).join("")}
  </div>`;
}

function renderHistoryHall() {
  const h = loadHistory();
  const el = document.getElementById("historyPanelHall");
  if (!el) return;

  const topScorers = topRanking(h.scorers, 3);
  const topAssists = topRanking(h.assists, 3);
  const titles = h.titlesWon || [];

  // Resumo de quantos títulos em cada competição, pra dar uma visão rápida
  // antes de listar cada time campeão individualmente.
  const countsByMode = {};
  titles.forEach(t => { countsByMode[t.mode] = (countsByMode[t.mode] || 0) + 1; });
  const modeChips = Object.entries(countsByMode)
    .sort((a, b) => b[1] - a[1])
    .map(([mode, count]) => `<span class="hall-mode-chip">${MODE_ICONS_PT[mode] || "🏆"} ${MODE_LABELS_PT[mode] || mode}: <span class="hmc-count">${count}</span></span>`)
    .join("");

  const trophyGrid = titles.length
    ? `<div class="hall-trophy-grid">
        ${titles.map(t => {
          const d = new Date(t.date);
          const best = (t.players || []).slice().sort((a, b) => b.overall - a.overall)[0];
          return `<div class="hall-trophy-card">
            <div class="hall-trophy-top">
              <span class="hall-trophy-icon">${MODE_ICONS_PT[t.mode] || "🏆"}</span>
              <span class="hall-trophy-mode">${MODE_LABELS_PT[t.mode] || t.mode}</span>
            </div>
            <div class="hall-trophy-meta">
              Overall ${t.overall} · ${t.formation}${t.hardcore ? " · 🕶️ Hardcore" : ""}${t.cleanSheet ? " · 🧱 Sem derrotas" : ""}<br>
              ${best ? `Destaque: ${best.name} (${(typeof POS_LABELS !== "undefined" && POS_LABELS[best.pos]) || best.pos}, ${best.overall})<br>` : ""}
              ${d.toLocaleDateString("pt-BR")}
            </div>
          </div>`;
        }).join("")}
      </div>`
    : `<p class="hall-empty">Você ainda não foi campeão em nenhuma campanha. Vença um torneio inteiro pra ele entrar pro Hall da Fama.</p>`;

  el.innerHTML = `
    <div class="hall-section-title">⭐ Pódio da carreira</div>
    <p class="hall-section-sub">Os 3 jogadores que mais marcaram gols e os 3 que mais deram assistências, somando todo o seu histórico de campanhas.</p>
    <div class="hall-podiums">
      ${renderPodiumBlock("🥅 Maiores artilheiros", topScorers, "gol", "gols")}
      ${renderPodiumBlock("🎯 Maiores assistentes", topAssists, "assistência", "assistências")}
    </div>

    <div class="hall-section-title">🏆 Times campeões</div>
    <p class="hall-section-sub">Todos os times que você já levantou uma taça, um card por título — não só o de maior overall.</p>
    ${modeChips ? `<div class="hall-mode-summary">${modeChips}</div>` : ""}
    ${trophyGrid}
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

function matchResultBadge(mt) {
  if (mt.result === "campeão") return { cls: "champ", text: "🏆 CAMPEÃO" };
  if (mt.result === "vice") return { cls: "vice", text: "🥈 VICE-CAMPEÃO" };
  return { cls: "elim", text: `Eliminado: ${mt.result}` };
}

// Detalhe jogo a jogo de uma campanha do Histórico (aba "Últimas partidas"),
// no painel que abre em accordion ao clicar na linha — ver renderHistoryMatches()
// e toggleHistoryMatch(). Reaproveita o visual dos fc-match-row (mesmo estilo
// da tela de resultado final) pra manter consistência.
function renderHistoryMatchGames(mt) {
  if (!mt.games || !mt.games.length) {
    return `<p class="hist-games-empty">Detalhe partida a partida não disponível — essa campanha foi registrada antes dessa função existir.</p>`;
  }
  const outcomeIcon = { win: "✅", draw: "➖", lose: "❌" };
  const rows = mt.games.map(g => {
    const scoreText = g.penalties
      ? `${g.myGoals}–${g.theirGoals} <small>(${g.penalties.mine}-${g.penalties.theirs} pên)</small>`
      : `${g.myGoals}–${g.theirGoals}`;
    return `
      <div class="fc-match-row fc-match-${g.outcome}">
        <span class="fc-match-round">${g.round}</span>
        <span class="fc-match-opp">${g.opponent.flag || ""} ${g.opponent.name} <small>${g.opponent.season || ""}</small></span>
        <span class="fc-match-score">${scoreText}</span>
        <span class="fc-match-icon">${outcomeIcon[g.outcome] || ""}</span>
      </div>`;
  }).join("");
  return `<div class="hist-games-list">${rows}</div>`;
}

function toggleHistoryMatch(id) {
  const block = document.getElementById(`histBlock-${id}`);
  if (!block) return;
  block.classList.toggle("expanded");
}

function renderHistoryMatches() {
  const h = loadHistory();
  const el = document.getElementById("historyPanelMatches");
  if (!el) return;
  if (!h.matches.length) { el.innerHTML = `<p class="fp-desc">Nenhuma campanha registrada ainda.</p>`; return; }
  const rows = h.matches.map(mt => {
    const d = new Date(mt.date);
    const badge = matchResultBadge(mt);
    // Campanhas antigas (antes do id existir) caem de volta pra data+random
    // só pra ter uma chave única de DOM — não afeta os dados salvos.
    const rowId = mt.id || `${mt.date}_${Math.random().toString(36).slice(2, 8)}`;
    return `<div class="hist-match-block ${mt.result==='campeão'?'is-champ':''} ${mt.result==='vice'?'is-vice':''}" id="histBlock-${rowId}">
      <div class="hist-match-row" onclick="toggleHistoryMatch('${rowId}')" role="button" tabindex="0">
        <span class="hmr-mode-wrap">${MODE_ICONS_PT[mt.mode] || "🏆"} ${MODE_LABELS_PT[mt.mode] || mt.mode}</span>
        <span class="hmr-result-badge ${badge.cls}">${badge.text}</span>
        <span class="hmr-score">${mt.goalsFor}–${mt.goalsAgainst}<span class="hmr-score-sub">gols pró–contra na campanha</span></span>
        <span class="hmr-ovr">OVR ${mt.overall}</span>
        <span class="hmr-date">${d.toLocaleDateString("pt-BR")}</span>
        <span class="hmr-chevron">▾</span>
      </div>
      <div class="hist-match-games-wrap">
        <div class="hist-match-games-inner">
          <div class="hist-match-games">
            ${renderHistoryMatchGames(mt)}
          </div>
        </div>
      </div>
    </div>`;
  }).join("");
  el.innerHTML = `
    <p class="hist-matches-note">Cada linha é uma campanha (torneio) completa, do sorteio até a eliminação ou o título — não uma partida isolada. O placar mostra o total de gols marcados e sofridos somando todos os jogos daquela campanha. Clique numa linha pra ver jogo a jogo.</p>
    <div class="hist-match-header">
      <span>Competição</span><span>Resultado</span><span>Gols (campanha)</span><span>Overall</span><span style="text-align:right">Data</span><span></span>
    </div>
    <div class="hist-match-list">${rows}</div>`;
}

// ═══════════════════════════════════════════
// ABA "TIMES" — Time dos Sonhos (all-star de toda a carreira, um jogador
// por posição, o melhor overall já visto naquela posição) e o Melhor
// Elenco Real (o elenco de verdade — sem misturar jogadores de times
// diferentes — com maior overall que o jogador já construiu). Ambos usam
// os snapshots salvos em h.playersUsedFull / h.bestSquad, então continuam
// aparecendo mesmo se o jogador tiver saído da vitrine atual.
// ═══════════════════════════════════════════
const DREAM_TEAM_FORMATION = "4-3-3";

function buildDreamTeam(h) {
  if (typeof getFormationSlots !== "function") return null; // game.js ainda não carregou
  const slots = getFormationSlots(DREAM_TEAM_FORMATION);
  const byPos = {};
  (h.playersUsedFull || []).forEach(p => {
    if (!p || !p.pos) return;
    (byPos[p.pos] = byPos[p.pos] || []).push(p);
  });
  Object.values(byPos).forEach(list => list.sort((a, b) => b.overall - a.overall));

  const usedNames = new Set();
  const players = [];
  slots.forEach(slot => {
    const pool = byPos[slot.pos] || [];
    const pick = pool.find(p => !usedNames.has(p.name));
    if (pick) { usedNames.add(pick.name); players.push({ ...pick, slotId: slot.id }); }
  });
  return { formation: DREAM_TEAM_FORMATION, players };
}

// Desenha um campinho estático (não-interativo) num container qualquer,
// reaproveitando FORMATIONS/POS_ROLE de game.js. squadArr = [{pos, name,
// overall, slotId}]. Slots sem jogador ficam vazios (mostrando a posição).
function renderStaticPitch(containerId, formationKey, squadArr) {
  const pitch = document.getElementById(containerId);
  if (!pitch) return;
  const fm = (typeof FORMATIONS !== "undefined") ? (FORMATIONS[formationKey] || FORMATIONS["4-3-3"]) : null;
  if (!fm) { pitch.innerHTML = `<p class="fp-desc">Formação indisponível.</p>`; return; }
  pitch.innerHTML = "";
  let slotId = 0;
  for (const row of fm.rows) {
    const rowEl = document.createElement("div");
    rowEl.className = "pitch-row";
    for (const pos of row) {
      const role = (typeof POS_ROLE !== "undefined" && POS_ROLE[pos]) || "mid";
      const inSquad = squadArr.find(s => s.slotId === slotId);
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

function renderHistoryTeams() {
  const h = loadHistory();
  const el = document.getElementById("historyPanelTeams");
  if (!el) return;

  const hasAny = (h.playersUsedFull && h.playersUsedFull.length) || (h.bestSquad && h.bestSquad.players && h.bestSquad.players.length);
  if (!hasAny) {
    el.innerHTML = `<p class="fp-desc">Jogue algumas partidas pra desbloquear seus times históricos.</p>`;
    return;
  }

  const dream = buildDreamTeam(h);
  const dreamOverall = dream && dream.players.length
    ? Math.round(dream.players.reduce((s, p) => s + p.overall, 0) / dream.players.length)
    : null;
  const bestHasLineup = h.bestSquad && Array.isArray(h.bestSquad.players) && h.bestSquad.players.length > 0;

  el.innerHTML = `
    <div class="hist-team-block">
      <div class="hist-team-title">🌟 Time dos Sonhos</div>
      <p class="hist-team-sub">O melhor jogador que você já escalou em cada posição, juntando todos os elencos da sua carreira (mesmo os que já saíram da vitrine).</p>
      ${dream && dream.players.length ? `
        <div class="hist-team-meta">Overall médio ${dreamOverall} · ${dream.formation}</div>
        <div class="hist-mini-pitch" id="histDreamPitch"></div>
        <div class="hist-team-list">${dream.players.slice().sort((a, b) => b.overall - a.overall).map(p => `
          <div class="hist-team-list-row"><span class="htlr-pos">${p.pos}</span><span class="htlr-name">${p.name}</span><span class="htlr-club">${p.team} · ${p.season}</span><span class="htlr-ovr">${p.overall}</span></div>
        `).join("")}</div>
      ` : `<p class="fp-desc">Ainda não há jogadores suficientes registrados.</p>`}
    </div>

    <div class="hist-team-block">
      <div class="hist-team-title">🏆 Melhor Elenco Real</div>
      <p class="hist-team-sub">O elenco completo — sem misturar jogadores de times diferentes — com o maior overall que você já construiu.</p>
      ${bestHasLineup ? `
        <div class="hist-team-meta">Overall ${h.bestSquad.overall} · ${h.bestSquad.formation} · ${MODE_LABELS_PT[h.bestSquad.mode] || h.bestSquad.mode}</div>
        <div class="hist-mini-pitch" id="histBestPitch"></div>
        <div class="hist-team-list">${h.bestSquad.players.slice().sort((a, b) => b.overall - a.overall).map(p => `
          <div class="hist-team-list-row"><span class="htlr-pos">${p.pos}</span><span class="htlr-name">${p.name}</span><span class="htlr-club">${p.team} · ${p.season}</span><span class="htlr-ovr">${p.overall}</span></div>
        `).join("")}</div>
      ` : `<p class="fp-desc">Ainda não há uma escalação completa registrada pra esse elenco — jogue mais uma partida completa pra atualizar.</p>`}
    </div>
  `;

  if (dream && dream.players.length) renderStaticPitch("histDreamPitch", dream.formation, dream.players);
  if (bestHasLineup) renderStaticPitch("histBestPitch", h.bestSquad.formation, h.bestSquad.players);
}
