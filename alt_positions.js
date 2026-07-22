// ═══════════════════════════════════════════════════════════════════════
// POSIÇÕES ALTERNATIVAS — jogadores versáteis que jogam em mais de uma
// posição na vida real (ex: Messi joga de CA, PD, MEI e PE). Isso permite
// que, ao sortear um desses jogadores, ele possa preencher QUALQUER slot
// compatível com uma das posições dele — não só a posição cadastrada no
// elenco daquele time específico em data.js.
//
// Chave de busca: primeiro tenta "Nome|posOriginal" (pra separar jogadores
// homônimos que jogam em posições bem diferentes — ex: o "Ronaldo" ponta
// (Cristiano) vs o "Ramos" centroavante (Gonçalo Ramos, PSG) que não tem
// nada a ver com o "Ramos" zagueiro (Sergio Ramos)). Se não achar a chave
// composta, cai pro nome puro.
//
// Valores = lista de posições RAW extras, no MESMO vocabulário usado no
// data.js: GK RB LB CB CM AM RM LM RW LW ST CF RWB LWB
// ═══════════════════════════════════════════════════════════════════════
const ALT_POSITIONS = {
  // — Cristiano Ronaldo (cadastrado só como "Ronaldo" nos times europeus) —
  "Ronaldo|LW": ["ST", "CF", "RW"],
  "Ronaldo|RW": ["ST", "CF", "LW"],

  // — Sergio Ramos (cadastrado só como "Ramos" na maioria dos times;
  // não mexe no "Ramos" centroavante do PSG 25-26, que é outro jogador) —
  "Ramos|CB": ["RB", "CM"],
  "Ramos|RB": ["CB", "CM"],

  "Messi": ["RW", "CF", "AM", "LW"],
  "Neymar": ["LW", "RW", "AM", "CF"],
  "Mbappé": ["ST", "RW", "LW", "CF"],
  "Griezmann": ["ST", "AM", "CF", "RW"],
  "Di María": ["RW", "CM", "AM", "LW"],
  "Bellingham": ["AM", "CM"],
  "Kimmich": ["CM", "RB", "RM", "CB"],
  "Bernardo Silva": ["CM", "RW", "AM", "RM"],
  "Coutinho": ["AM", "LW", "CM"],
  "James Rodríguez": ["AM", "CM", "RW"],
  "Cuadrado": ["RW", "RM", "RB"],
  "Robertson": ["LB", "LM", "LWB"],
  "Alexander-Arnold": ["RB", "RM", "RWB"],
  "Alaba": ["CB", "LB", "CM"],
  "Davies": ["LB", "LWB", "LM"],
  "Alphonso Davies": ["LB", "LWB", "LM"],
  "Rodrygo": ["RW", "LW", "ST"],
  "Firmino": ["ST", "AM", "CF"],
  "Casemiro": ["CM", "CB"],
  "Kroos": ["CM", "AM"],
  "Modric": ["CM", "AM"],
  "Rodri": ["CM", "CB"],
  "De Bruyne": ["CM", "AM", "RW"],
  "Sergio Ramos": ["CB", "RB", "CM"],
  "Fabinho": ["CM", "CB"],
  "Marcelo": ["LB", "LWB", "LM"],
  "Saka": ["RW", "LW", "AM"],
  "Foden": ["RW", "LW", "AM", "CM"],
  "Salah": ["RW", "ST", "AM"],
  "Son": ["RW", "LW", "ST"],
  "Pedri": ["CM", "AM"],
  "Tchouaméni": ["CM", "CB"],
  "Militao": ["CB", "RB"],
  "Éder Militão": ["CB", "RB"],
  "Frenkie de Jong": ["CM", "CB"],
  "Grealish": ["LW", "AM", "CM"],

  // — Expansão (verificados contra as posições REALMENTE cadastradas de
  // cada um no data.js atual, pra não inventar posição que o jogador nunca
  // teve registrada em nenhuma season/time) —
  "Xavi": ["AM"],
  "Iniesta": ["AM", "CM", "LW"],
  "Zidane": ["AM", "CM", "LW"],
  "Totti": ["AM", "CF"],
  "Figo": ["RW", "LW", "RM"],
  "Robben": ["RW", "LW", "ST"],
  "Ribéry": ["LW", "RW", "AM"],
  "Kaká": ["AM", "CM", "RW"],
  "Ronaldinho": ["LW", "RW", "AM", "CF"],
  "Pirlo": ["CM", "AM"],
  "Gündoğan": ["CM", "AM"],
  "Sané": ["LW", "RW"],
  "Coman": ["LW", "RW"],
  "Havertz": ["ST", "CF", "AM"],
  "Hazard": ["LW", "RW", "AM"],
  "Dembélé": ["RW", "LW"],
  "Sancho": ["RW", "LW", "AM"],
  "Reus": ["LW", "AM", "ST"],
  "Isco": ["AM", "CM", "RW"],
  "Müller": ["AM", "ST", "RW", "CF"],
  "Stones": ["CB", "RB", "CM"],
  "Rice": ["CM", "CB"],
  "Marquinhos": ["CB", "RB", "CM"],
  "Vázquez": ["RW", "RB", "RM"],
  "Cafu": ["RB", "RWB"],
  "Maldini": ["CB", "LB", "LWB"],
  "Beckham": ["RM", "RW", "CM"],
  "Hakimi": ["RB", "RWB", "RM"],
  // Danilo fica de fora de propósito: no elenco atual esse nome cobre tanto
  // um lateral quanto um goleiro homônimo (GK), e sem separar por time/season
  // não dá pra saber qual é qual — melhor não aplicar alt-position do que
  // arriscar dar posição de linha pro goleiro.
};

// Devolve as posições RAW extras de um jogador, considerando a posição
// cadastrada `p.pos` no elenco daquele time (pra desambiguar homônimos).
function getAltPositions(p) {
  return ALT_POSITIONS[`${p.name}|${p.pos}`] || ALT_POSITIONS[p.name] || [];
}

// Devolve TODAS as posições RAW possíveis de um jogador (a cadastrada +
// alternativas), sem repetição, sempre com a cadastrada em primeiro lugar.
function getAllRawPositions(p) {
  const extra = getAltPositions(p);
  if (!extra.length) return [p.pos];
  const set = [p.pos];
  extra.forEach(r => { if (!set.includes(r)) set.push(r); });
  return set;
}

// Mesma coisa, mas já convertida pros LABELS usados nos slots/exibição
// (ex: "CA", "PD"), sem repetir label (ST e CF viram os dois "CA").
function getAllPosLabels(p) {
  const raws = getAllRawPositions(p);
  const labels = [];
  raws.forEach(r => { const l = POS_LABELS[r] || r; if (!labels.includes(l)) labels.push(l); });
  return labels;
}

// Dado um LABEL de slot (ex: "PD"), devolve o código RAW representativo
// dessa posição (ex: "RW") — usado pra saber que peso de ataque/defesa
// aplicar quando um jogador multi-posicional preenche um slot que não é
// a posição originalmente cadastrada pra ele.
function rawForLabel(label) {
  return Object.keys(POS_LABELS).find(r => POS_LABELS[r] === label) || label;
}
