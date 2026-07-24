// ═══════════════════════════════════════════════════════════════
// UEFA EUROPA LEAGUE (ex-UEFA Cup) — finalistas 1971-72 a 2025-26
// Arquivo único consolidado (partes 1-7 unidas)
// ═══════════════════════════════════════════════════════════════
const EUROPA_LEAGUE_TEAMS = [

// ───────── 1971-72 ─────────
  {
    id: "el_tottenham_7172", name: "Tottenham Hotspur", season: "1971-72", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "Pat Jennings", pos: "GK", overall: 89 },
      { name: "Joe Kinnear", pos: "RB", overall: 79 },
      { name: "Mike England", pos: "CB", overall: 83 },
      { name: "Phil Beal", pos: "CB", overall: 78 },
      { name: "Cyril Knowles", pos: "LB", overall: 81 },
      { name: "Steve Perryman", pos: "CM", overall: 82 },
      { name: "Alan Mullery", pos: "CM", overall: 82 },
      { name: "Martin Peters", pos: "AM", overall: 86 },
      { name: "Ralph Coates", pos: "RW", overall: 79 },
      { name: "Jimmy Pearce", pos: "LW", overall: 76 },
      { name: "Martin Chivers", pos: "ST", overall: 87 }
    ]
  },
  {
    id: "el_wolves_7172", name: "Wolves", season: "1971-72", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "Phil Parkes", pos: "GK", overall: 81 },
      { name: "Gerry Taylor", pos: "RB", overall: 76 },
      { name: "Frank Munro", pos: "CB", overall: 80 },
      { name: "John McAlle", pos: "CB", overall: 77 },
      { name: "Derek Parkin", pos: "LB", overall: 79 },
      { name: "Mike Bailey", pos: "CM", overall: 81 },
      { name: "Jim McCalliog", pos: "CM", overall: 80 },
      { name: "Kenny Hibbitt", pos: "AM", overall: 79 },
      { name: "Danny Hegan", pos: "RW", overall: 77 },
      { name: "Dave Wagstaffe", pos: "LW", overall: 79 },
      { name: "Derek Dougan", pos: "ST", overall: 83 }
    ]
  },

  // ───────── 1972-73 ─────────
  {
    id: "el_liverpool_7273", name: "Liverpool", season: "1972-73", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "Ray Clemence", pos: "GK", overall: 88 },
      { name: "Chris Lawler", pos: "RB", overall: 81 },
      { name: "Larry Lloyd", pos: "CB", overall: 81 },
      { name: "Tommy Smith", pos: "CB", overall: 82 },
      { name: "Emlyn Hughes", pos: "LB", overall: 85 },
      { name: "Ian Callaghan", pos: "CM", overall: 81 },
      { name: "Brian Hall", pos: "CM", overall: 77 },
      { name: "Steve Heighway", pos: "AM", overall: 81 },
      { name: "Kevin Keegan", pos: "RW", overall: 91 },
      { name: "Peter Cormack", pos: "LW", overall: 79 },
      { name: "John Toshack", pos: "ST", overall: 82 }
    ]
  },
  {
    id: "el_gladbach_7273", name: "Borussia Monchengladbach", season: "1972-73", country: "DE", flag: "🇩🇪",
    formation: "4-3-3",
    players: [
      { name: "Wolfgang Kleff", pos: "GK", overall: 81 },
      { name: "Berti Vogts", pos: "RB", overall: 87 },
      { name: "Klaus-Dieter Sieloff", pos: "CB", overall: 81 },
      { name: "Hartwig Bleidick", pos: "CB", overall: 76 },
      { name: "Christian Kulik", pos: "LB", overall: 77 },
      { name: "Herbert Wimmer", pos: "CM", overall: 82 },
      { name: "Günter Netzer", pos: "CM", overall: 91 },
      { name: "Rainer Bonhof", pos: "AM", overall: 85 },
      { name: "Herbert Laumen", pos: "RW", overall: 79 },
      { name: "Ulrik le Fevre", pos: "LW", overall: 77 },
      { name: "Jupp Heynckes", pos: "ST", overall: 90 }
    ]
  },

  // ───────── 1973-74 ─────────
  {
    id: "el_feyenoord_7374", name: "Feyenoord", season: "1973-74", country: "NL", flag: "🇳🇱",
    formation: "4-3-3",
    players: [
      { name: "Eddy Treijtel", pos: "GK", overall: 81 },
      { name: "Theo Laseroms", pos: "RB", overall: 77 },
      { name: "Rinus Israël", pos: "CB", overall: 83 },
      { name: "Wim Rijsbergen", pos: "CB", overall: 79 },
      { name: "Sjaak Troost", pos: "LB", overall: 76 },
      { name: "Wim Jansen", pos: "CM", overall: 83 },
      { name: "Franz Hasil", pos: "CM", overall: 81 },
      { name: "Wim van Hanegem", pos: "AM", overall: 89 },
      { name: "Peter Ressel", pos: "RW", overall: 77 },
      { name: "Henk Wery", pos: "LW", overall: 77 },
      { name: "Ove Kindvall", pos: "ST", overall: 83 }
    ]
  },
  {
    id: "el_tottenham_7374", name: "Tottenham", season: "1973-74", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "Pat Jennings", pos: "GK", overall: 89 },
      { name: "Joe Kinnear", pos: "RB", overall: 79 },
      { name: "Mike England", pos: "CB", overall: 82 },
      { name: "Keith Osgood", pos: "CB", overall: 75 },
      { name: "Cyril Knowles", pos: "LB", overall: 80 },
      { name: "Steve Perryman", pos: "CM", overall: 83 },
      { name: "Martin Peters", pos: "CM", overall: 85 },
      { name: "Ralph Coates", pos: "AM", overall: 79 },
      { name: "John Pratt", pos: "RW", overall: 76 },
      { name: "Chris McGrath", pos: "LW", overall: 77 },
      { name: "Martin Chivers", pos: "ST", overall: 87 }
    ]
  },

  // ───────── 1974-75 ─────────
  {
    id: "el_gladbach_7475", name: "Borussia Monchengladbach", season: "1974-75", country: "DE", flag: "🇩🇪",
    formation: "4-3-3",
    players: [
      { name: "Wolfgang Kleff", pos: "GK", overall: 82 },
      { name: "Berti Vogts", pos: "RB", overall: 88 },
      { name: "Klaus-Dieter Sieloff", pos: "CB", overall: 81 },
      { name: "Hartwig Bleidick", pos: "CB", overall: 77 },
      { name: "Christian Kulik", pos: "LB", overall: 78 },
      { name: "Herbert Wimmer", pos: "CM", overall: 82 },
      { name: "Rainer Bonhof", pos: "CM", overall: 86 },
      { name: "Uli Stielike", pos: "AM", overall: 85 },
      { name: "Herbert Laumen", pos: "RW", overall: 79 },
      { name: "Horst Köppel", pos: "LW", overall: 78 },
      { name: "Jupp Heynckes", pos: "ST", overall: 91 }
    ]
  },
  {
    id: "el_twente_7475", name: "Twente", season: "1974-75", country: "NL", flag: "🇳🇱",
    formation: "4-3-3",
    players: [
      { name: "Piet Schrijvers", pos: "GK", overall: 82 },
      { name: "Theo Pahlplatz", pos: "RB", overall: 77 },
      { name: "Epi Drost", pos: "CB", overall: 79 },
      { name: "Joop Brands", pos: "CB", overall: 76 },
      { name: "Willy van de Kerkhof", pos: "LB", overall: 80 },
      { name: "Arnold Mühren", pos: "CM", overall: 85 },
      { name: "René Notten", pos: "CM", overall: 77 },
      { name: "Kick van der Vall", pos: "AM", overall: 77 },
      { name: "René van de Kerkhof", pos: "RW", overall: 81 },
      { name: "Frans van der Beek", pos: "LW", overall: 75 },
      { name: "Fanny Nuninga", pos: "ST", overall: 79 }
    ]
  },

  // ───────── 1975-76 ─────────
  {
    id: "el_liverpool_7576", name: "Liverpool", season: "1975-76", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "Ray Clemence", pos: "GK", overall: 89 },
      { name: "Phil Neal", pos: "RB", overall: 83 },
      { name: "Phil Thompson", pos: "CB", overall: 81 },
      { name: "Tommy Smith", pos: "CB", overall: 81 },
      { name: "Emlyn Hughes", pos: "LB", overall: 85 },
      { name: "Jimmy Case", pos: "CM", overall: 79 },
      { name: "Ray Kennedy", pos: "CM", overall: 82 },
      { name: "Terry McDermott", pos: "AM", overall: 81 },
      { name: "Kevin Keegan", pos: "RW", overall: 92 },
      { name: "Steve Heighway", pos: "LW", overall: 81 },
      { name: "John Toshack", pos: "ST", overall: 82 }
    ]
  },
  {
    id: "el_clubbrugge_7576", name: "Club Brugge", season: "1975-76", country: "BE", flag: "🇧🇪",
    formation: "4-3-3",
    players: [
      { name: "Birger Jensen", pos: "GK", overall: 81 },
      { name: "Fons Bastijns", pos: "RB", overall: 79 },
      { name: "Georges Leekens", pos: "CB", overall: 79 },
      { name: "Paul Courant", pos: "CB", overall: 77 },
      { name: "Luc Millecamps", pos: "LB", overall: 76 },
      { name: "René Vandereycken", pos: "CM", overall: 84 },
      { name: "Julien Cools", pos: "CM", overall: 81 },
      { name: "Jean Thissen", pos: "AM", overall: 78 },
      { name: "Roger van Gool", pos: "RW", overall: 81 },
      { name: "Robert Jacobs", pos: "LW", overall: 76 },
      { name: "Raoul Lambert", pos: "ST", overall: 85 }
    ]
  },

  // ───────── 1976-77 ─────────
  {
    id: "el_juventus_7677", name: "Juventus", season: "1976-77", country: "IT", flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Dino Zoff", pos: "GK", overall: 93 },
      { name: "Claudio Gentile", pos: "RB", overall: 87 },
      { name: "Gaetano Scirea", pos: "CB", overall: 90 },
      { name: "Francesco Morini", pos: "CB", overall: 81 },
      { name: "Antonio Cabrini", pos: "LB", overall: 83 },
      { name: "Marco Tardelli", pos: "CM", overall: 85 },
      { name: "Romeo Benetti", pos: "CM", overall: 83 },
      { name: "Franco Causio", pos: "AM", overall: 85 },
      { name: "Roberto Bettega", pos: "RW", overall: 87 },
      { name: "Pietro Anastasi", pos: "LW", overall: 82 },
      { name: "Roberto Boninsegna", pos: "ST", overall: 85 }
    ]
  },
  {
    id: "el_athleticbilbao_7677", name: "Athletic Bilbao", season: "1976-77", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "José Ángel Iribar", pos: "GK", overall: 90 },
      { name: "Txetxu Rojo", pos: "RB", overall: 79 },
      { name: "Sabino Ortega", pos: "CB", overall: 79 },
      { name: "Balbino Tarradas", pos: "CB", overall: 77 },
      { name: "Iñaki Sáez", pos: "LB", overall: 79 },
      { name: "José Ángel Zubiaga", pos: "CM", overall: 78 },
      { name: "Estanislao Argote", pos: "CM", overall: 78 },
      { name: "Dani", pos: "AM", overall: 79 },
      { name: "Carlos", pos: "RW", overall: 77 },
      { name: "José Rojo", pos: "LW", overall: 77 },
      { name: "José María Amorrortu", pos: "ST", overall: 79 }
    ]
  },

  // ───────── 1977-78 ─────────
  {
    id: "el_psv_7778", name: "PSV", season: "1977-78", country: "NL", flag: "🇳🇱",
    formation: "4-3-3",
    players: [
      { name: "Jan van Beveren", pos: "GK", overall: 87 },
      { name: "Jan Poortvliet", pos: "RB", overall: 81 },
      { name: "Ernie Brandts", pos: "CB", overall: 80 },
      { name: "Theo de Jong", pos: "CB", overall: 81 },
      { name: "Jos van Kempen", pos: "LB", overall: 77 },
      { name: "Gerrie Deijkers", pos: "CM", overall: 77 },
      { name: "Harry Lubse", pos: "CM", overall: 77 },
      { name: "Willy van der Kuijlen", pos: "AM", overall: 88 },
      { name: "René van de Kerkhof", pos: "RW", overall: 83 },
      { name: "Willy van de Kerkhof", pos: "LW", overall: 82 },
      { name: "Ruud Geels", pos: "ST", overall: 84 }
    ]
  },
  {
    id: "el_bastia_7778", name: "Bastia", season: "1977-78", country: "FR", flag: "🇫🇷",
    formation: "4-3-3",
    players: [
      { name: "Jacky Duguépéroux", pos: "GK", overall: 78 },
      { name: "Charles Orlanducci", pos: "RB", overall: 78 },
      { name: "Jean-Pierre Battesti", pos: "CB", overall: 77 },
      { name: "François Bonnetête", pos: "CB", overall: 76 },
      { name: "Jean-Louis Zanon", pos: "LB", overall: 76 },
      { name: "Claude Papi", pos: "CM", overall: 82 },
      { name: "Johnny Stef", pos: "CM", overall: 77 },
      { name: "Jacky Vergnes", pos: "AM", overall: 77 },
      { name: "Roger Milla", pos: "RW", overall: 81 },
      { name: "Charly Delto", pos: "LW", overall: 76 },
      { name: "Jean-Marc Nappi", pos: "ST", overall: 77 }
    ]
  },

  // ───────── 1978-79 ─────────
  {
    id: "el_gladbach_7879", name: "Borussia Monchengladbach", season: "1978-79", country: "DE", flag: "🇩🇪",
    formation: "4-3-3",
    players: [
      { name: "Wolfgang Kleff", pos: "GK", overall: 82 },
      { name: "Berti Vogts", pos: "RB", overall: 88 },
      { name: "Hans Klinkhammer", pos: "CB", overall: 78 },
      { name: "Winfried Schäfer", pos: "CB", overall: 77 },
      { name: "Christian Kulik", pos: "LB", overall: 79 },
      { name: "Rainer Bonhof", pos: "CM", overall: 87 },
      { name: "Uli Stielike", pos: "CM", overall: 86 },
      { name: "Wilfried Hannes", pos: "AM", overall: 80 },
      { name: "Kalle Del'Haye", pos: "RW", overall: 78 },
      { name: "Herbert Laumen", pos: "LW", overall: 79 },
      { name: "Allan Simonsen", pos: "ST", overall: 88 }
    ]
  },
  {
    id: "el_crvenazvezda_7879", name: "Crvena Zvezda", season: "1978-79", country: "RS", flag: "🇷🇸",
    formation: "4-3-3",
    players: [
      { name: "Ratko Svilar", pos: "GK", overall: 81 },
      { name: "Nenad Stojković", pos: "RB", overall: 77 },
      { name: "Ljubomir Ristovski", pos: "CB", overall: 77 },
      { name: "Miroslav Pavlović", pos: "CB", overall: 76 },
      { name: "Boško Đurovski", pos: "LB", overall: 76 },
      { name: "Slobodan Santrač", pos: "CM", overall: 81 },
      { name: "Vladimir Petrović", pos: "CM", overall: 83 },
      { name: "Miloš Šestić", pos: "AM", overall: 79 },
      { name: "Dragan Džajić", pos: "RW", overall: 88 },
      { name: "Nenad Manojlović", pos: "LW", overall: 76 },
      { name: "Zoran Filipović", pos: "ST", overall: 77 }
    ]
  },

  // ───────── 1979-80 ─────────
  {
    id: "el_eintrachtfrankfurt_7980", name: "Eintracht Frankfurt", season: "1979-80", country: "DE", flag: "🇩🇪",
    formation: "4-3-3",
    players: [
      { name: "Werner Kraus", pos: "GK", overall: 79 },
      { name: "Charly Körbel", pos: "RB", overall: 85 },
      { name: "Bruno Pezzey", pos: "CB", overall: 87 },
      { name: "Herman Nogly", pos: "CB", overall: 77 },
      { name: "Willi Neuberger", pos: "LB", overall: 76 },
      { name: "Ronald Borchers", pos: "CM", overall: 77 },
      { name: "Bernd Hölzenbein", pos: "CM", overall: 85 },
      { name: "Erich Beer", pos: "AM", overall: 81 },
      { name: "Bum-Kun Cha", pos: "RW", overall: 86 },
      { name: "Fred Schulz", pos: "LW", overall: 77 },
      { name: "Ronald Worm", pos: "ST", overall: 79 }
    ]
  },
  {
    id: "el_gladbach_7980", name: "Borussia M.", season: "1979-80", country: "DE", flag: "🇩🇪",
    formation: "4-3-3",
    players: [
      { name: "Wolfgang Kleff", pos: "GK", overall: 82 },
      { name: "Berti Vogts", pos: "RB", overall: 88 },
      { name: "Hans Klinkhammer", pos: "CB", overall: 78 },
      { name: "Winfried Schäfer", pos: "CB", overall: 78 },
      { name: "Christian Kulik", pos: "LB", overall: 79 },
      { name: "Rainer Bonhof", pos: "CM", overall: 87 },
      { name: "Horst Wohlers", pos: "CM", overall: 77 },
      { name: "Wilfried Hannes", pos: "AM", overall: 80 },
      { name: "Kalle Del'Haye", pos: "RW", overall: 79 },
      { name: "Herbert Laumen", pos: "LW", overall: 79 },
      { name: "Allan Simonsen", pos: "ST", overall: 88 }
    ]
  },

  // ───────── 1980-81 ─────────
  {
    id: "el_ipswichtown_8081", name: "Ipswich Town", season: "1980-81", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "Paul Cooper", pos: "GK", overall: 83 },
      { name: "Mick Mills", pos: "RB", overall: 85 },
      { name: "Terry Butcher", pos: "CB", overall: 86 },
      { name: "Russell Osman", pos: "CB", overall: 82 },
      { name: "Kevin Beattie", pos: "LB", overall: 81 },
      { name: "John Wark", pos: "CM", overall: 85 },
      { name: "George Burley", pos: "CM", overall: 81 },
      { name: "Arnold Mühren", pos: "AM", overall: 87 },
      { name: "Frans Thijssen", pos: "RW", overall: 86 },
      { name: "Eric Gates", pos: "LW", overall: 81 },
      { name: "Paul Mariner", pos: "ST", overall: 85 }
    ]
  },
  {
    id: "el_az_8081", name: "AZ", season: "1980-81", country: "NL", flag: "🇳🇱",
    formation: "4-3-3",
    players: [
      { name: "Eddy Treijtel", pos: "GK", overall: 82 },
      { name: "Ronald Spelbos", pos: "RB", overall: 81 },
      { name: "Hugo Hovenkamp", pos: "CB", overall: 81 },
      { name: "Peter Arntz", pos: "CB", overall: 78 },
      { name: "Dick Schneider", pos: "LB", overall: 77 },
      { name: "Johnny Metgod", pos: "CM", overall: 84 },
      { name: "Jan Peters", pos: "CM", overall: 79 },
      { name: "Kristen Nygaard", pos: "AM", overall: 79 },
      { name: "Nico Jansen", pos: "RW", overall: 76 },
      { name: "Aad de Mos", pos: "LW", overall: 76 },
      { name: "Kees Kist", pos: "ST", overall: 86 }
    ]
  },

// ───────── 1981-82 ─────────
  {
    id: "el_ifkgoteborg_8182", name: "IFK Goteborg", season: "1981-82", country: "SE", flag: "🇸🇪",
    formation: "4-3-3",
    players: [
      { name: "Severin Bengtsson", pos: "GK", overall: 79 },
      { name: "Konny Söderström", pos: "RB", overall: 76 },
      { name: "Glenn Hysén", pos: "CB", overall: 83 },
      { name: "Stig Fredriksson", pos: "CB", overall: 80 },
      { name: "Håkan Sandberg", pos: "LB", overall: 76 },
      { name: "Tord Holmgren", pos: "CM", overall: 78 },
      { name: "Jan Möller", pos: "CM", overall: 76 },
      { name: "Dan Corneliusson", pos: "AM", overall: 78 },
      { name: "Conny Karlsson", pos: "RW", overall: 76 },
      { name: "Ulf Eriksson", pos: "LW", overall: 76 },
      { name: "Torbjörn Nilsson", pos: "ST", overall: 86 }
    ]
  },
  {
    id: "el_hamburgosv_8182", name: "Hamburgo SV", season: "1981-82", country: "DE", flag: "🇩🇪",
    formation: "4-3-3",
    players: [
      { name: "Rudolf Kargus", pos: "GK", overall: 81 },
      { name: "Manfred Kaltz", pos: "RB", overall: 87 },
      { name: "Ditmar Jakobs", pos: "CB", overall: 82 },
      { name: "Holger Hieronymus", pos: "CB", overall: 79 },
      { name: "Peter Hidien", pos: "LB", overall: 76 },
      { name: "Felix Magath", pos: "CM", overall: 85 },
      { name: "Wolfgang Rolff", pos: "CM", overall: 80 },
      { name: "Jürgen Groh", pos: "AM", overall: 77 },
      { name: "Lars Bastrup", pos: "RW", overall: 79 },
      { name: "Thomas von Heesen", pos: "LW", overall: 76 },
      { name: "Horst Hrubesch", pos: "ST", overall: 88 }
    ]
  },

  // ───────── 1982-83 ─────────
  {
    id: "el_anderlecht_8283", name: "Anderlecht", season: "1982-83", country: "BE", flag: "🇧🇪",
    formation: "4-3-3",
    players: [
      { name: "Jacky Munaron", pos: "GK", overall: 81 },
      { name: "Nico Broeckaert", pos: "RB", overall: 76 },
      { name: "Morten Olsen", pos: "CB", overall: 87 },
      { name: "Hugo Broos", pos: "CB", overall: 81 },
      { name: "Walter Meeuws", pos: "LB", overall: 79 },
      { name: "Frankie Vercauteren", pos: "CM", overall: 83 },
      { name: "Juan Lozano", pos: "CM", overall: 79 },
      { name: "Ludo Coeck", pos: "AM", overall: 83 },
      { name: "Alex Czerniatynski", pos: "RW", overall: 79 },
      { name: "Kenneth Brylle", pos: "LW", overall: 79 },
      { name: "Erwin Vandenbergh", pos: "ST", overall: 85 }
    ]
  },
  {
    id: "el_benfica_8283", name: "Benfica", season: "1982-83", country: "PT", flag: "🇵🇹",
    formation: "4-3-3",
    players: [
      { name: "Manuel Bento", pos: "GK", overall: 87 },
      { name: "António Oliveira", pos: "RB", overall: 79 },
      { name: "Humberto Coelho", pos: "CB", overall: 85 },
      { name: "Veloso", pos: "CB", overall: 79 },
      { name: "Bastos Lopes", pos: "LB", overall: 76 },
      { name: "Sheu", pos: "CM", overall: 80 },
      { name: "Diamantino Miranda", pos: "CM", overall: 79 },
      { name: "António Chalana", pos: "AM", overall: 86 },
      { name: "Manuel Fernandes", pos: "RW", overall: 79 },
      { name: "José Luís", pos: "LW", overall: 76 },
      { name: "Nené", pos: "ST", overall: 85 }
    ]
  },

  // ───────── 1983-84 ─────────
  {
    id: "el_tottenham_8384", name: "Tottenham", season: "1983-84", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "Ray Clemence", pos: "GK", overall: 87 },
      { name: "Chris Hughton", pos: "RB", overall: 80 },
      { name: "Paul Miller", pos: "CB", overall: 79 },
      { name: "Graham Roberts", pos: "CB", overall: 82 },
      { name: "Paul Price", pos: "LB", overall: 77 },
      { name: "Steve Perryman", pos: "CM", overall: 83 },
      { name: "Ossie Ardiles", pos: "CM", overall: 85 },
      { name: "Glenn Hoddle", pos: "AM", overall: 90 },
      { name: "Tony Galvin", pos: "RW", overall: 79 },
      { name: "Garth Crooks", pos: "LW", overall: 80 },
      { name: "Steve Archibald", pos: "ST", overall: 83 }
    ]
  },
  {
    id: "el_anderlecht_8384", name: "Anderlecht", season: "1983-84", country: "BE", flag: "🇧🇪",
    formation: "4-3-3",
    players: [
      { name: "Jacky Munaron", pos: "GK", overall: 81 },
      { name: "Nico Broeckaert", pos: "RB", overall: 76 },
      { name: "Morten Olsen", pos: "CB", overall: 87 },
      { name: "Hugo Broos", pos: "CB", overall: 81 },
      { name: "Walter Meeuws", pos: "LB", overall: 79 },
      { name: "Frankie Vercauteren", pos: "CM", overall: 83 },
      { name: "Enzo Scifo", pos: "CM", overall: 81 },
      { name: "Ludo Coeck", pos: "AM", overall: 83 },
      { name: "Alex Czerniatynski", pos: "RW", overall: 79 },
      { name: "Kenneth Brylle", pos: "LW", overall: 79 },
      { name: "Erwin Vandenbergh", pos: "ST", overall: 86 }
    ]
  },

  // ───────── 1984-85 ─────────
  {
    id: "el_realmadrid_8485", name: "Real Madrid", season: "1984-85", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Agustín", pos: "GK", overall: 82 },
      { name: "Chendo", pos: "RB", overall: 79 },
      { name: "Manuel Sanchís", pos: "CB", overall: 81 },
      { name: "Uli Stielike", pos: "CB", overall: 86 },
      { name: "José Antonio Camacho", pos: "LB", overall: 86 },
      { name: "Ricardo Gallego", pos: "CM", overall: 81 },
      { name: "Míchel", pos: "CM", overall: 85 },
      { name: "Juanito", pos: "AM", overall: 87 },
      { name: "Isidro", pos: "RW", overall: 77 },
      { name: "Santillana", pos: "LW", overall: 86 },
      { name: "Jorge Valdano", pos: "ST", overall: 88 }
    ]
  },
  {
    id: "el_videoton_8485", name: "Videoton", season: "1984-85", country: "HU", flag: "🇭🇺",
    formation: "4-4-2",
    players: [
      { name: "Péter Disztl", pos: "GK", overall: 82 },
      { name: "István Borsányi", pos: "RB", overall: 76 },
      { name: "László Disztl", pos: "CB", overall: 77 },
      { name: "József Csuhay", pos: "CB", overall: 77 },
      { name: "Gábor Horváth", pos: "LB", overall: 76 },
      { name: "István Palkovics", pos: "CM", overall: 77 },
      { name: "Tibor Végh", pos: "CM", overall: 76 },
      { name: "Géza Wittmann", pos: "AM", overall: 78 },
      { name: "Imre Vadász", pos: "RW", overall: 77 },
      { name: "György Novath", pos: "LW", overall: 76 },
      { name: "Győző Burcsa", pos: "ST", overall: 79 }
    ]
  },

  // ───────── 1985-86 ─────────
  {
    id: "el_realmadrid_8586", name: "Real Madrid", season: "1985-86", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Agustín", pos: "GK", overall: 83 },
      { name: "Chendo", pos: "RB", overall: 80 },
      { name: "Manuel Sanchís", pos: "CB", overall: 82 },
      { name: "Uli Stielike", pos: "CB", overall: 86 },
      { name: "José Antonio Camacho", pos: "LB", overall: 86 },
      { name: "Ricardo Gallego", pos: "CM", overall: 82 },
      { name: "Míchel", pos: "CM", overall: 86 },
      { name: "Emilio Butragueño", pos: "AM", overall: 89 },
      { name: "Juanito", pos: "RW", overall: 87 },
      { name: "Santillana", pos: "LW", overall: 85 },
      { name: "Jorge Valdano", pos: "ST", overall: 88 }
    ]
  },
  {
    id: "el_koln_8586", name: "Koln", season: "1985-86", country: "DE", flag: "🇩🇪",
    formation: "4-3-3",
    players: [
      { name: "Toni Schumacher", pos: "GK", overall: 87 },
      { name: "Uwe Dorsch", pos: "RB", overall: 77 },
      { name: "Wolfgang Schwarz", pos: "CB", overall: 77 },
      { name: "Herbert Zimmermann", pos: "CB", overall: 77 },
      { name: "Bernhard Winkler", pos: "LB", overall: 76 },
      { name: "Falko Götz", pos: "CM", overall: 79 },
      { name: "Hans-Günter Bruns", pos: "CM", overall: 81 },
      { name: "Pierre Littbarski", pos: "AM", overall: 86 },
      { name: "Jürgen Milewski", pos: "RW", overall: 78 },
      { name: "Klaus Allofs", pos: "LW", overall: 85 },
      { name: "Roger Lutz", pos: "ST", overall: 76 }
    ]
  },

  // ───────── 1986-87 ─────────
  {
    id: "el_ifkgoteborg_8687", name: "IFK Goteborg", season: "1986-87", country: "SE", flag: "🇸🇪",
    formation: "4-3-3",
    players: [
      { name: "Thomas Wernersson", pos: "GK", overall: 81 },
      { name: "Roland Nilsson", pos: "RB", overall: 83 },
      { name: "Stig Fredriksson", pos: "CB", overall: 80 },
      { name: "Glenn Schiller", pos: "CB", overall: 77 },
      { name: "Peter Karlsson", pos: "LB", overall: 76 },
      { name: "Tommy Holmgren", pos: "CM", overall: 79 },
      { name: "Johnny Ekström", pos: "CM", overall: 79 },
      { name: "Jan Eriksson", pos: "AM", overall: 77 },
      { name: "Håkan Sandberg", pos: "RW", overall: 77 },
      { name: "Peter Larsson", pos: "LW", overall: 76 },
      { name: "Torbjörn Nilsson", pos: "ST", overall: 86 }
    ]
  },
  {
    id: "el_dundeeunited_8687", name: "Dundee United", season: "1986-87", country: "SC", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    formation: "4-3-3",
    players: [
      { name: "Billy Thomson", pos: "GK", overall: 79 },
      { name: "Maurice Malpas", pos: "RB", overall: 81 },
      { name: "Dave Narey", pos: "CB", overall: 82 },
      { name: "Paul Hegarty", pos: "CB", overall: 81 },
      { name: "David Beaumont", pos: "LB", overall: 76 },
      { name: "Ralph Milne", pos: "CM", overall: 77 },
      { name: "Jim McInally", pos: "CM", overall: 78 },
      { name: "Eamonn Bannon", pos: "AM", overall: 81 },
      { name: "Kevin Gallacher", pos: "RW", overall: 81 },
      { name: "Ian Redford", pos: "LW", overall: 77 },
      { name: "Paul Sturrock", pos: "ST", overall: 83 }
    ]
  },

  // ───────── 1987-88 ─────────
  {
    id: "el_bayerleverkusen_8788", name: "Bayer Leverkusen", season: "1987-88", country: "DE", flag: "🇩🇪",
    formation: "4-3-3",
    players: [
      { name: "Rüdiger Vollborn", pos: "GK", overall: 81 },
      { name: "Wolfgang Rolff", pos: "RB", overall: 81 },
      { name: "Ulrich Borowka", pos: "CB", overall: 79 },
      { name: "Peter Krieger", pos: "CB", overall: 77 },
      { name: "Andy Reinhold", pos: "LB", overall: 76 },
      { name: "Tita", pos: "CM", overall: 86 },
      { name: "Wolfram Wuttke", pos: "CM", overall: 81 },
      { name: "Falko Götz", pos: "AM", overall: 81 },
      { name: "Michael Lerby", pos: "RW", overall: 79 },
      { name: "Thomas Hörster", pos: "LW", overall: 77 },
      { name: "Herbert Waas", pos: "ST", overall: 82 }
    ]
  },
  {
    id: "el_espanyol_8788", name: "Espanyol", season: "1987-88", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Ubaldo Fillol", pos: "GK", overall: 86 },
      { name: "Miguel Solana", pos: "RB", overall: 77 },
      { name: "Ernesto Valverde", pos: "CB", overall: 81 },
      { name: "Jose Camanyo", pos: "CB", overall: 77 },
      { name: "Rabuñal", pos: "LB", overall: 76 },
      { name: "Francisco Javier Losada", pos: "CM", overall: 77 },
      { name: "Rebollo", pos: "CM", overall: 76 },
      { name: "Pichi Alonso", pos: "AM", overall: 82 },
      { name: "Marañón", pos: "RW", overall: 76 },
      { name: "Golobart", pos: "LW", overall: 76 },
      { name: "Toni", pos: "ST", overall: 77 }
    ]
  },

  // ───────── 1988-89 ─────────
  {
    id: "el_napoli_8889", name: "Napoli", season: "1988-89", country: "IT", flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Giuliano Giuliani", pos: "GK", overall: 82 },
      { name: "Ciro Ferrara", pos: "RB", overall: 87 },
      { name: "Alessandro Renica", pos: "CB", overall: 81 },
      { name: "Moreno Ferrario", pos: "CB", overall: 79 },
      { name: "Giovanni Francini", pos: "LB", overall: 77 },
      { name: "Fernando De Napoli", pos: "CM", overall: 84 },
      { name: "Salvatore Bagni", pos: "CM", overall: 82 },
      { name: "Diego Maradona", pos: "AM", overall: 99 },
      { name: "Massimo Mauro", pos: "RW", overall: 79 },
      { name: "Careca", pos: "LW", overall: 90 },
      { name: "Andrea Carnevale", pos: "ST", overall: 82 }
    ]
  },
  {
    id: "el_vfbstuttgart_8889", name: "VfB Stuttgart", season: "1988-89", country: "DE", flag: "🇩🇪",
    formation: "4-3-3",
    players: [
      { name: "Eike Immel", pos: "GK", overall: 83 },
      { name: "Bernd Förster", pos: "RB", overall: 80 },
      { name: "Karl-Heinz Förster", pos: "CB", overall: 88 },
      { name: "Guido Buchwald", pos: "CB", overall: 87 },
      { name: "Michael Frontzeck", pos: "LB", overall: 80 },
      { name: "Maurizio Gaudino", pos: "CM", overall: 82 },
      { name: "Fritz Walter", pos: "CM", overall: 81 },
      { name: "Günther Schäfer", pos: "AM", overall: 77 },
      { name: "Aleksandar Knavs", pos: "RW", overall: 76 },
      { name: "Uwe Kliemann", pos: "LW", overall: 76 },
      { name: "Jürgen Klinsmann", pos: "ST", overall: 93 }
    ]
  },

  // ───────── 1989-90 ─────────
  {
    id: "el_juventus_8990", name: "Juventus", season: "1989-90", country: "IT", flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Stefano Tacconi", pos: "GK", overall: 85 },
      { name: "Luigi De Agostini", pos: "RB", overall: 80 },
      { name: "Sergio Brio", pos: "CB", overall: 79 },
      { name: "Antonio Bosi", pos: "CB", overall: 76 },
      { name: "Roberto Galia", pos: "LB", overall: 78 },
      { name: "Massimo Bonini", pos: "CM", overall: 81 },
      { name: "Giancarlo Marocchi", pos: "CM", overall: 81 },
      { name: "Rui Barros", pos: "AM", overall: 83 },
      { name: "Salvatore Schillaci", pos: "RW", overall: 84 },
      { name: "Pietro Fanna", pos: "LW", overall: 77 },
      { name: "Pierluigi Casiraghi", pos: "ST", overall: 82 }
    ]
  },
  {
    id: "el_fiorentina_8990", name: "Fiorentina", season: "1989-90", country: "IT", flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Roberto Landucci", pos: "GK", overall: 79 },
      { name: "Celeste Pin", pos: "RB", overall: 79 },
      { name: "Stefano Pioli", pos: "CB", overall: 79 },
      { name: "Pietro Cirillo", pos: "CB", overall: 76 },
      { name: "Cristiano", pos: "LB", overall: 76 },
      { name: "Dunga", pos: "CM", overall: 86 },
      { name: "Stefano Carobbi", pos: "CM", overall: 79 },
      { name: "Roberto Baggio", pos: "AM", overall: 95 },
      { name: "Michele Buriani", pos: "RW", overall: 76 },
      { name: "Ramón Díaz", pos: "LW", overall: 81 },
      { name: "Stefano Borgonovo", pos: "ST", overall: 81 }
    ]
  },

  // ───────── 1990-91 ─────────
  {
    id: "el_internazionale_9091", name: "Internazionale", season: "1990-91", country: "IT", flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Walter Zenga", pos: "GK", overall: 90 },
      { name: "Giuseppe Bergomi", pos: "RB", overall: 88 },
      { name: "Giuseppe Baresi", pos: "CB", overall: 81 },
      { name: "Riccardo Ferri", pos: "CB", overall: 85 },
      { name: "Andreas Brehme", pos: "LB", overall: 89 },
      { name: "Lothar Matthäus", pos: "CM", overall: 93 },
      { name: "Nicola Berti", pos: "CM", overall: 84 },
      { name: "Jürgen Klinsmann", pos: "AM", overall: 92 },
      { name: "Andrea Mandorlini", pos: "RW", overall: 77 },
      { name: "Fausto Salsano", pos: "LW", overall: 77 },
      { name: "Aldo Serena", pos: "ST", overall: 85 }
    ]
  },
  {
    id: "el_roma_9091", name: "Roma", season: "1990-91", country: "IT", flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Franco Tancredi", pos: "GK", overall: 82 },
      { name: "Sebastiano Nela", pos: "RB", overall: 79 },
      { name: "Aldair", pos: "CB", overall: 85 },
      { name: "Thomas Berthold", pos: "CB", overall: 84 },
      { name: "Amedeo Carboni", pos: "LB", overall: 81 },
      { name: "Giuseppe Giannini", pos: "CM", overall: 88 },
      { name: "Stefano Desideri", pos: "CM", overall: 79 },
      { name: "Fabrizio Di Mauro", pos: "AM", overall: 76 },
      { name: "Ruggiero Rizzitelli", pos: "RW", overall: 81 },
      { name: "Fausto Pari", pos: "LW", overall: 76 },
      { name: "Rudi Völler", pos: "ST", overall: 90 }
    ]
  },

// ───────── 1991-92 ─────────
  {
    id: "el_ajax_9192", name: "Ajax", season: "1991-92", country: "NL", flag: "🇳🇱",
    formation: "4-3-3",
    players: [
      { name: "Stanley Menzo", pos: "GK", overall: 85 },
      { name: "Rob Alflen", pos: "RB", overall: 79 },
      { name: "Danny Blind", pos: "CB", overall: 87 },
      { name: "Frank de Boer", pos: "CB", overall: 86 },
      { name: "Sonny Silooy", pos: "LB", overall: 79 },
      { name: "Aron Winter", pos: "CM", overall: 85 },
      { name: "Wim Jonk", pos: "CM", overall: 84 },
      { name: "Dennis Bergkamp", pos: "AM", overall: 93 },
      { name: "John van 't Schip", pos: "RW", overall: 82 },
      { name: "Bryan Roy", pos: "LW", overall: 85 },
      { name: "Peter van Vossen", pos: "ST", overall: 81 }
    ]
  },
  {
    id: "el_torino_9192", name: "Torino", season: "1991-92", country: "IT", flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Luca Marchegiani", pos: "GK", overall: 85 },
      { name: "Luca Fusi", pos: "RB", overall: 79 },
      { name: "Roberto Cravero", pos: "CB", overall: 81 },
      { name: "Giorgio Bresciani", pos: "CB", overall: 77 },
      { name: "Sergio Battistini", pos: "LB", overall: 76 },
      { name: "Rafael Martín Vázquez", pos: "CM", overall: 85 },
      { name: "Giuseppe Cresci", pos: "CM", overall: 77 },
      { name: "Diego Fuser", pos: "AM", overall: 79 },
      { name: "Andrea Silenzi", pos: "RW", overall: 80 },
      { name: "Enzo Scifo", pos: "LW", overall: 83 },
      { name: "Walter Casagrande", pos: "ST", overall: 85 }
    ]
  },

  // ───────── 1992-93 ─────────
  {
    id: "el_juventus_9293", name: "Juventus", season: "1992-93", country: "IT", flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Angelo Peruzzi", pos: "GK", overall: 87 },
      { name: "Moreno Torricelli", pos: "RB", overall: 80 },
      { name: "Ciro Ferrara", pos: "CB", overall: 88 },
      { name: "Jürgen Kohler", pos: "CB", overall: 88 },
      { name: "Massimo Carrera", pos: "LB", overall: 79 },
      { name: "Dino Baggio", pos: "CM", overall: 85 },
      { name: "Antonio Conte", pos: "CM", overall: 81 },
      { name: "Roberto Baggio", pos: "AM", overall: 95 },
      { name: "Andreas Möller", pos: "RW", overall: 87 },
      { name: "Fabrizio Ravanelli", pos: "LW", overall: 85 },
      { name: "Gianluca Vialli", pos: "ST", overall: 89 }
    ]
  },
  {
    id: "el_dortmund_9293", name: "Borussia Dortmund", season: "1992-93", country: "DE", flag: "🇩🇪",
    formation: "4-3-3",
    players: [
      { name: "Teddy de Beer", pos: "GK", overall: 79 },
      { name: "Dieter Schlindwein", pos: "RB", overall: 77 },
      { name: "Thomas Helmer", pos: "CB", overall: 87 },
      { name: "Michael Schulz", pos: "CB", overall: 77 },
      { name: "Michael Lusch", pos: "LB", overall: 76 },
      { name: "Michael Zorc", pos: "CM", overall: 85 },
      { name: "Steffen Freund", pos: "CM", overall: 81 },
      { name: "Ned Zelic", pos: "AM", overall: 81 },
      { name: "Jürgen Wegmann", pos: "RW", overall: 79 },
      { name: "Flemming Povlsen", pos: "LW", overall: 82 },
      { name: "Stéphane Chapuisat", pos: "ST", overall: 86 }
    ]
  },

  // ───────── 1993-94 ─────────
  {
    id: "el_internazionale_9394", name: "Internazionale", season: "1993-94", country: "IT", flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Walter Zenga", pos: "GK", overall: 89 },
      { name: "Giuseppe Bergomi", pos: "RB", overall: 87 },
      { name: "Riccardo Ferri", pos: "CB", overall: 85 },
      { name: "Massimo Paganin", pos: "CB", overall: 79 },
      { name: "Fabio Galante", pos: "LB", overall: 77 },
      { name: "Lothar Matthäus", pos: "CM", overall: 92 },
      { name: "Nicola Berti", pos: "CM", overall: 85 },
      { name: "Wim Jonk", pos: "AM", overall: 82 },
      { name: "Rubén Sosa", pos: "RW", overall: 85 },
      { name: "Jonas Thern", pos: "LW", overall: 82 },
      { name: "Dennis Bergkamp", pos: "ST", overall: 93 }
    ]
  },
  {
    id: "el_salzburg_9394", name: "Austria Salzburg (atual RB Salzburg)", season: "1993-94", country: "AT", flag: "🇦🇹",
    formation: "4-3-3",
    players: [
      { name: "Otto Konrad", pos: "GK", overall: 81 },
      { name: "Ronald Brunmayr", pos: "RB", overall: 76 },
      { name: "Wolfgang Feiersinger", pos: "CB", overall: 81 },
      { name: "Thomas Winklhofer", pos: "CB", overall: 76 },
      { name: "Adi Hütter", pos: "LB", overall: 79 },
      { name: "Manfred Zsak", pos: "CM", overall: 79 },
      { name: "Thomas Flögel", pos: "CM", overall: 79 },
      { name: "Anton Pfeffer", pos: "AM", overall: 77 },
      { name: "Gilbert Prilasnig", pos: "RW", overall: 77 },
      { name: "Peter Stöger", pos: "LW", overall: 79 },
      { name: "Reinhold Hintermaier", pos: "ST", overall: 77 }
    ]
  },

  // ───────── 1994-95 ─────────
  {
    id: "el_parma_9495", name: "Parma", season: "1994-95", country: "IT", flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Luca Bucci", pos: "GK", overall: 82 },
      { name: "Antonio Benarrivo", pos: "RB", overall: 82 },
      { name: "Lorenzo Minotti", pos: "CB", overall: 81 },
      { name: "Luigi Apolloni", pos: "CB", overall: 81 },
      { name: "Alberto Di Chiara", pos: "LB", overall: 79 },
      { name: "Massimo Crippa", pos: "CM", overall: 81 },
      { name: "Dino Baggio", pos: "CM", overall: 85 },
      { name: "Gianfranco Zola", pos: "AM", overall: 91 },
      { name: "Faustino Asprilla", pos: "RW", overall: 87 },
      { name: "Tomas Brolin", pos: "LW", overall: 85 },
      { name: "Alessandro Melli", pos: "ST", overall: 79 }
    ]
  },
  {
    id: "el_juventus_9495", name: "Juventus", season: "1994-95", country: "IT", flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Angelo Peruzzi", pos: "GK", overall: 88 },
      { name: "Moreno Torricelli", pos: "RB", overall: 80 },
      { name: "Ciro Ferrara", pos: "CB", overall: 88 },
      { name: "Sergio Porrini", pos: "CB", overall: 79 },
      { name: "Massimo Carrera", pos: "LB", overall: 79 },
      { name: "Didier Deschamps", pos: "CM", overall: 88 },
      { name: "Paulo Sousa", pos: "CM", overall: 85 },
      { name: "Roberto Baggio", pos: "AM", overall: 95 },
      { name: "Vladimir Jugović", pos: "RW", overall: 81 },
      { name: "Fabrizio Ravanelli", pos: "LW", overall: 86 },
      { name: "Gianluca Vialli", pos: "ST", overall: 89 }
    ]
  },

  // ───────── 1995-96 ─────────
  {
    id: "el_bayern_9596", name: "Bayern Munchen", season: "1995-96", country: "DE", flag: "🇩🇪",
    formation: "4-3-3",
    players: [
      { name: "Oliver Kahn", pos: "GK", overall: 91 },
      { name: "Jorginho", pos: "RB", overall: 81 },
      { name: "Thomas Helmer", pos: "CB", overall: 86 },
      { name: "Samuel Kuffour", pos: "CB", overall: 81 },
      { name: "Christian Ziege", pos: "LB", overall: 85 },
      { name: "Thomas Strunz", pos: "CM", overall: 81 },
      { name: "Ciriaco Sforza", pos: "CM", overall: 82 },
      { name: "Mehmet Scholl", pos: "AM", overall: 87 },
      { name: "Alexander Zickler", pos: "RW", overall: 79 },
      { name: "Jean-Pierre Papin", pos: "LW", overall: 87 },
      { name: "Jürgen Klinsmann", pos: "ST", overall: 93 }
    ]
  },
  {
    id: "el_bordeaux_9596", name: "Bordeaux", season: "1995-96", country: "FR", flag: "🇫🇷",
    formation: "4-3-3",
    players: [
      { name: "Franck Lefèvre", pos: "GK", overall: 77 },
      { name: "Franck Silvestre", pos: "RB", overall: 77 },
      { name: "Alain Caveglia", pos: "CB", overall: 77 },
      { name: "Pierre Laigle", pos: "CB", overall: 77 },
      { name: "Bixente Lizarazu", pos: "LB", overall: 87 },
      { name: "Rémi Garde", pos: "CM", overall: 80 },
      { name: "Richard Witschge", pos: "CM", overall: 81 },
      { name: "Zinedine Zidane", pos: "AM", overall: 94 },
      { name: "Willy Sagnol", pos: "RW", overall: 77 },
      { name: "Stéphane Carnot", pos: "LW", overall: 76 },
      { name: "Christophe Dugarry", pos: "ST", overall: 86 }
    ]
  },

  // ───────── 1996-97 ─────────
  {
    id: "el_schalke_9697", name: "Schalke 04", season: "1996-97", country: "DE", flag: "🇩🇪",
    formation: "4-3-3",
    players: [
      { name: "Jens Lehmann", pos: "GK", overall: 87 },
      { name: "Youri Mulder", pos: "RB", overall: 81 },
      { name: "Thomas Linke", pos: "CB", overall: 82 },
      { name: "Radoslav Látal", pos: "CB", overall: 79 },
      { name: "Yves Eigenrauch", pos: "LB", overall: 77 },
      { name: "Olaf Thon", pos: "CM", overall: 85 },
      { name: "Mike Büskens", pos: "CM", overall: 80 },
      { name: "Jörg Böhme", pos: "AM", overall: 81 },
      { name: "Jiří Němec", pos: "RW", overall: 81 },
      { name: "Marc Wilmots", pos: "LW", overall: 85 },
      { name: "Martin Max", pos: "ST", overall: 83 }
    ]
  },
  {
    id: "el_internazionale_9697", name: "Internazionale", season: "1996-97", country: "IT", flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Gianluca Pagliuca", pos: "GK", overall: 88 },
      { name: "Javier Zanetti", pos: "RB", overall: 90 },
      { name: "Giuseppe Bergomi", pos: "CB", overall: 86 },
      { name: "Taribo West", pos: "CB", overall: 83 },
      { name: "Roberto Carlos", pos: "LB", overall: 91 },
      { name: "Youri Djorkaeff", pos: "CM", overall: 88 },
      { name: "Diego Simeone", pos: "CM", overall: 87 },
      { name: "Álvaro Recoba", pos: "AM", overall: 86 },
      { name: "Francesco Moriero", pos: "RW", overall: 81 },
      { name: "Maurizio Ganz", pos: "LW", overall: 79 },
      { name: "Iván Zamorano", pos: "ST", overall: 90 }
    ]
  },

  // ───────── 1997-98 ─────────
  {
    id: "el_internazionale_9798", name: "Internazionale", season: "1997-98", country: "IT", flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Gianluca Pagliuca", pos: "GK", overall: 88 },
      { name: "Javier Zanetti", pos: "RB", overall: 90 },
      { name: "Giuseppe Bergomi", pos: "CB", overall: 85 },
      { name: "Taribo West", pos: "CB", overall: 84 },
      { name: "Francesco Colonnese", pos: "LB", overall: 79 },
      { name: "Youri Djorkaeff", pos: "CM", overall: 88 },
      { name: "Diego Simeone", pos: "CM", overall: 87 },
      { name: "Álvaro Recoba", pos: "AM", overall: 87 },
      { name: "Francesco Moriero", pos: "RW", overall: 81 },
      { name: "Nicola Berti", pos: "LW", overall: 82 },
      { name: "Ronaldo", pos: "ST", overall: 99 }
    ]
  },
  {
    id: "el_lazio_9798", name: "Lazio", season: "1997-98", country: "IT", flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Luca Marchegiani", pos: "GK", overall: 85 },
      { name: "Giuseppe Favalli", pos: "RB", overall: 81 },
      { name: "Alessandro Nesta", pos: "CB", overall: 92 },
      { name: "Fernando Couto", pos: "CB", overall: 87 },
      { name: "Sinisa Mihajlović", pos: "LB", overall: 87 },
      { name: "Diego Fuser", pos: "CM", overall: 79 },
      { name: "Dejan Stanković", pos: "CM", overall: 85 },
      { name: "Pavel Nedvěd", pos: "AM", overall: 90 },
      { name: "Roberto Mancini", pos: "RW", overall: 87 },
      { name: "Giuseppe Signori", pos: "LW", overall: 87 },
      { name: "Alen Bokšić", pos: "ST", overall: 85 }
    ]
  },

  // ───────── 1998-99 ─────────
  {
    id: "el_parma_9899", name: "Parma", season: "1998-99", country: "IT", flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Gianluigi Buffon", pos: "GK", overall: 89 },
      { name: "Antonio Benarrivo", pos: "RB", overall: 81 },
      { name: "Lilian Thuram", pos: "CB", overall: 90 },
      { name: "Fabio Cannavaro", pos: "CB", overall: 90 },
      { name: "Alberto Di Chiara", pos: "LB", overall: 79 },
      { name: "Néstor Sensini", pos: "CM", overall: 81 },
      { name: "Juan Sebastián Verón", pos: "CM", overall: 91 },
      { name: "Diego Fuser", pos: "AM", overall: 79 },
      { name: "Faustino Asprilla", pos: "RW", overall: 86 },
      { name: "Enrico Chiesa", pos: "LW", overall: 85 },
      { name: "Hernán Crespo", pos: "ST", overall: 91 }
    ]
  },
  {
    id: "el_marseille_9899", name: "Olympique Marseille", season: "1998-99", country: "FR", flag: "🇫🇷",
    formation: "4-3-3",
    players: [
      { name: "Stéphane Porato", pos: "GK", overall: 80 },
      { name: "Christophe Deguerville", pos: "RB", overall: 76 },
      { name: "Laurent Blanc", pos: "CB", overall: 90 },
      { name: "William Prunier", pos: "CB", overall: 79 },
      { name: "Patrick Blondeau", pos: "LB", overall: 78 },
      { name: "Cyril Rool", pos: "CM", overall: 79 },
      { name: "Peter Luccin", pos: "CM", overall: 80 },
      { name: "Robert Pirès", pos: "AM", overall: 89 },
      { name: "Christophe Dugarry", pos: "RW", overall: 85 },
      { name: "Frank Durix", pos: "LW", overall: 76 },
      { name: "Florian Maurice", pos: "ST", overall: 81 }
    ]
  },

// ───────── 1999-2000 ─────────
  {
    id: "el_galatasaray_9900", name: "Galatasaray", season: "1999-2000", country: "TR", flag: "🇹🇷",
    formation: "4-3-3",
    players: [
      { name: "Cláudio Taffarel", pos: "GK", overall: 86 },
      { name: "Ergün Penbe", pos: "RB", overall: 77 },
      { name: "Bülent Korkmaz", pos: "CB", overall: 85 },
      { name: "Gheorghe Popescu", pos: "CB", overall: 85 },
      { name: "Hakan Ünsal", pos: "LB", overall: 79 },
      { name: "Ümit Davala", pos: "CM", overall: 80 },
      { name: "Okan Buruk", pos: "CM", overall: 80 },
      { name: "Gheorghe Hagi", pos: "AM", overall: 92 },
      { name: "Hakan Şükür", pos: "RW", overall: 87 },
      { name: "Suat Kaya", pos: "LW", overall: 77 },
      { name: "Kubilay Türkyılmaz", pos: "ST", overall: 82 }
    ]
  },
  {
    id: "el_arsenal_9900", name: "Arsenal", season: "1999-2000", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "David Seaman", pos: "GK", overall: 90 },
      { name: "Lee Dixon", pos: "RB", overall: 82 },
      { name: "Tony Adams", pos: "CB", overall: 89 },
      { name: "Martin Keown", pos: "CB", overall: 84 },
      { name: "Silvinho", pos: "LB", overall: 82 },
      { name: "Patrick Vieira", pos: "CM", overall: 91 },
      { name: "Emmanuel Petit", pos: "CM", overall: 88 },
      { name: "Fredrik Ljungberg", pos: "AM", overall: 85 },
      { name: "Marc Overmars", pos: "RW", overall: 89 },
      { name: "Nwankwo Kanu", pos: "LW", overall: 85 },
      { name: "Thierry Henry", pos: "ST", overall: 95 }
    ]
  },

  // ───────── 2000-01 ─────────
  {
    id: "el_liverpool_0001", name: "Liverpool", season: "2000-01", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "Sander Westerveld", pos: "GK", overall: 82 },
      { name: "Markus Babbel", pos: "RB", overall: 82 },
      { name: "Sami Hyypiä", pos: "CB", overall: 87 },
      { name: "Stéphane Henchoz", pos: "CB", overall: 82 },
      { name: "Jamie Carragher", pos: "LB", overall: 85 },
      { name: "Didi Hamann", pos: "CM", overall: 84 },
      { name: "Gary McAllister", pos: "CM", overall: 83 },
      { name: "Steven Gerrard", pos: "AM", overall: 91 },
      { name: "Vladimir Šmicer", pos: "RW", overall: 82 },
      { name: "Patrik Berger", pos: "LW", overall: 83 },
      { name: "Michael Owen", pos: "ST", overall: 90 }
    ]
  },
  {
    id: "el_alaves_0001", name: "Alavés", season: "2000-01", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Martín Herrera", pos: "GK", overall: 81 },
      { name: "Cosmin Contra", pos: "RB", overall: 81 },
      { name: "Antonio Karmona", pos: "CB", overall: 79 },
      { name: "Delfí Geli", pos: "CB", overall: 79 },
      { name: "Dan Eggen", pos: "LB", overall: 77 },
      { name: "Óscar Téllez", pos: "CM", overall: 77 },
      { name: "Ivan Tomic", pos: "CM", overall: 77 },
      { name: "Jordi Cruyff", pos: "AM", overall: 82 },
      { name: "Magno", pos: "RW", overall: 79 },
      { name: "Martín Astudillo", pos: "LW", overall: 76 },
      { name: "Javi Moreno", pos: "ST", overall: 83 }
    ]
  },

  // ───────── 2001-02 ─────────
  {
    id: "el_feyenoord_0102", name: "Feyenoord", season: "2001-02", country: "NL", flag: "🇳🇱",
    formation: "4-3-3",
    players: [
      { name: "Ronald Graafland", pos: "GK", overall: 81 },
      { name: "Patrick Paauwe", pos: "RB", overall: 79 },
      { name: "Kees van Wonderen", pos: "CB", overall: 81 },
      { name: "Ulrich van Gobbel", pos: "CB", overall: 79 },
      { name: "Brett Emerton", pos: "LB", overall: 80 },
      { name: "Paul Bosvelt", pos: "CM", overall: 82 },
      { name: "Pascal Bosschaart", pos: "CM", overall: 77 },
      { name: "Jon Dahl Tomasson", pos: "AM", overall: 85 },
      { name: "Youssouf Hersi", pos: "RW", overall: 79 },
      { name: "Mariano Bombarda", pos: "LW", overall: 76 },
      { name: "Pierre van Hooijdonk", pos: "ST", overall: 88 }
    ]
  },
  {
    id: "el_dortmund_0102", name: "Borussia Dortmund", season: "2001-02", country: "DE", flag: "🇩🇪",
    formation: "4-3-3",
    players: [
      { name: "Jens Lehmann", pos: "GK", overall: 89 },
      { name: "Sunday Oliseh", pos: "RB", overall: 79 },
      { name: "Christian Wörns", pos: "CB", overall: 83 },
      { name: "Christoph Metzelder", pos: "CB", overall: 84 },
      { name: "Dedê", pos: "LB", overall: 83 },
      { name: "Sebastian Kehl", pos: "CM", overall: 82 },
      { name: "Torsten Frings", pos: "CM", overall: 85 },
      { name: "Tomáš Rosický", pos: "AM", overall: 88 },
      { name: "Lars Ricken", pos: "RW", overall: 81 },
      { name: "Márcio Amoroso", pos: "LW", overall: 86 },
      { name: "Jan Koller", pos: "ST", overall: 87 }
    ]
  },

  // ───────── 2002-03 ─────────
  {
    id: "el_porto_0203", name: "FC Porto", season: "2002-03", country: "PT", flag: "🇵🇹",
    formation: "4-3-3",
    players: [
      { name: "Vítor Baía", pos: "GK", overall: 88 },
      { name: "Paulo Ferreira", pos: "RB", overall: 85 },
      { name: "Ricardo Carvalho", pos: "CB", overall: 88 },
      { name: "Jorge Costa", pos: "CB", overall: 85 },
      { name: "Nuno Valente", pos: "LB", overall: 81 },
      { name: "Costinha", pos: "CM", overall: 84 },
      { name: "Pedro Mendes", pos: "CM", overall: 82 },
      { name: "Deco", pos: "AM", overall: 91 },
      { name: "Dmitri Alenichev", pos: "RW", overall: 84 },
      { name: "Marco Ferreira", pos: "LW", overall: 79 },
      { name: "Benni McCarthy", pos: "ST", overall: 85 }
    ]
  },
  {
    id: "el_celtic_0203", name: "Celtic", season: "2002-03", country: "SC", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    formation: "4-3-3",
    players: [
      { name: "Rab Douglas", pos: "GK", overall: 81 },
      { name: "Jackie McNamara", pos: "RB", overall: 81 },
      { name: "Bobo Baldé", pos: "CB", overall: 82 },
      { name: "Joos Valgaeren", pos: "CB", overall: 81 },
      { name: "Ulrik Laursen", pos: "LB", overall: 77 },
      { name: "Neil Lennon", pos: "CM", overall: 84 },
      { name: "Stilian Petrov", pos: "CM", overall: 85 },
      { name: "Alan Thompson", pos: "AM", overall: 81 },
      { name: "Didier Agathe", pos: "RW", overall: 80 },
      { name: "Shaun Maloney", pos: "LW", overall: 77 },
      { name: "Henrik Larsson", pos: "ST", overall: 91 }
    ]
  },

  // ───────── 2003-04 ─────────
  {
    id: "el_valencia_0304", name: "Valencia", season: "2003-04", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Santiago Cañizares", pos: "GK", overall: 87 },
      { name: "Miguel", pos: "RB", overall: 79 },
      { name: "Roberto Ayala", pos: "CB", overall: 90 },
      { name: "Mauricio Pellegrino", pos: "CB", overall: 85 },
      { name: "Curro Torres", pos: "LB", overall: 79 },
      { name: "Rubén Baraja", pos: "CM", overall: 86 },
      { name: "David Albelda", pos: "CM", overall: 85 },
      { name: "Pablo Aimar", pos: "AM", overall: 90 },
      { name: "Vicente Rodríguez", pos: "RW", overall: 85 },
      { name: "Kily González", pos: "LW", overall: 82 },
      { name: "Mista", pos: "ST", overall: 84 }
    ]
  },
  {
    id: "el_marseille_0304", name: "Marseille", season: "2003-04", country: "FR", flag: "🇫🇷",
    formation: "4-3-3",
    players: [
      { name: "Fabien Barthez", pos: "GK", overall: 88 },
      { name: "Habib Beye", pos: "RB", overall: 82 },
      { name: "Daniel Van Buyten", pos: "CB", overall: 85 },
      { name: "Renato Civelli", pos: "CB", overall: 80 },
      { name: "Camel Meriem", pos: "LB", overall: 77 },
      { name: "Fernandão", pos: "CM", overall: 81 },
      { name: "Toifilou Maoulida", pos: "CM", overall: 78 },
      { name: "Steve Marlet", pos: "AM", overall: 82 },
      { name: "Bernard Mendy", pos: "RW", overall: 77 },
      { name: "Eric Chelle", pos: "LW", overall: 77 },
      { name: "Didier Drogba", pos: "ST", overall: 90 }
    ]
  },

  // ───────── 2004-05 ─────────
  {
    id: "el_cska_0405", name: "CSKA Moscou", season: "2004-05", country: "RU", flag: "🇷🇺",
    formation: "4-3-3",
    players: [
      { name: "Veniamin Mandrykin", pos: "GK", overall: 82 },
      { name: "Aleksei Berezutski", pos: "RB", overall: 81 },
      { name: "Sergei Ignashevich", pos: "CB", overall: 85 },
      { name: "Vasili Berezutski", pos: "CB", overall: 82 },
      { name: "Yuriy Zhirkov", pos: "LB", overall: 82 },
      { name: "Rolan Gusev", pos: "CM", overall: 79 },
      { name: "Evgeni Aldonin", pos: "CM", overall: 77 },
      { name: "Daniel Carvalho", pos: "AM", overall: 86 },
      { name: "Ivica Olić", pos: "RW", overall: 83 },
      { name: "Chidi Odiah", pos: "LW", overall: 77 },
      { name: "Vágner Love", pos: "ST", overall: 85 }
    ]
  },
  {
    id: "el_sporting_0405", name: "Sporting", season: "2004-05", country: "PT", flag: "🇵🇹",
    formation: "4-3-3",
    players: [
      { name: "Ricardo", pos: "GK", overall: 85 },
      { name: "Rogério", pos: "RB", overall: 79 },
      { name: "Beto", pos: "CB", overall: 81 },
      { name: "Anderson Polga", pos: "CB", overall: 81 },
      { name: "Marco Caneira", pos: "LB", overall: 77 },
      { name: "Custódio", pos: "CM", overall: 79 },
      { name: "Pedro Barbosa", pos: "CM", overall: 79 },
      { name: "Ricardo Quaresma", pos: "AM", overall: 87 },
      { name: "Yannick Djaló", pos: "RW", overall: 79 },
      { name: "Carlos Paredes", pos: "LW", overall: 76 },
      { name: "Liédson", pos: "ST", overall: 85 }
    ]
  },

  // ───────── 2005-06 ─────────
  {
    id: "el_sevilla_0506", name: "Sevilla", season: "2005-06", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Andrés Palop", pos: "GK", overall: 83 },
      { name: "Daniel Alves", pos: "RB", overall: 88 },
      { name: "Javi Navarro", pos: "CB", overall: 81 },
      { name: "Pablo Alfaro", pos: "CB", overall: 80 },
      { name: "Antonio Puerta", pos: "LB", overall: 81 },
      { name: "Marcos Senna", pos: "CM", overall: 85 },
      { name: "Enzo Maresca", pos: "CM", overall: 81 },
      { name: "Jesús Navas", pos: "AM", overall: 85 },
      { name: "Julio Baptista", pos: "RW", overall: 85 },
      { name: "Adriano Correia", pos: "LW", overall: 81 },
      { name: "Frédéric Kanouté", pos: "ST", overall: 87 }
    ]
  },
  {
    id: "el_middlesbrough_0506", name: "Middlesborough", season: "2005-06", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "Mark Schwarzer", pos: "GK", overall: 85 },
      { name: "Abel Xavier", pos: "RB", overall: 79 },
      { name: "Chris Riggott", pos: "CB", overall: 77 },
      { name: "Emanuel Pogatetz", pos: "CB", overall: 79 },
      { name: "Franck Queudrue", pos: "LB", overall: 79 },
      { name: "George Boateng", pos: "CM", overall: 81 },
      { name: "Fábio Rochemback", pos: "CM", overall: 80 },
      { name: "Stewart Downing", pos: "AM", overall: 82 },
      { name: "Bolo Zenden", pos: "RW", overall: 81 },
      { name: "Mark Viduka", pos: "LW", overall: 85 },
      { name: "Yakubu Aiyegbeni", pos: "ST", overall: 86 }
    ]
  },

  // ───────── 2006-07 ─────────
  {
    id: "el_sevilla_0607", name: "Sevilla", season: "2006-07", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Andrés Palop", pos: "GK", overall: 84 },
      { name: "Daniel Alves", pos: "RB", overall: 89 },
      { name: "Javi Navarro", pos: "CB", overall: 81 },
      { name: "Julien Escudé", pos: "CB", overall: 82 },
      { name: "Antonio Puerta", pos: "LB", overall: 82 },
      { name: "Marcos Senna", pos: "CM", overall: 85 },
      { name: "Renato Dirnei", pos: "CM", overall: 79 },
      { name: "Jesús Navas", pos: "AM", overall: 86 },
      { name: "Diego Capel", pos: "RW", overall: 79 },
      { name: "Adriano Correia", pos: "LW", overall: 81 },
      { name: "Frédéric Kanouté", pos: "ST", overall: 88 }
    ]
  },
  {
    id: "el_espanyol_0607", name: "Espanyol", season: "2006-07", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Carlos Kameni", pos: "GK", overall: 83 },
      { name: "David García", pos: "RB", overall: 78 },
      { name: "Daniel Jarque", pos: "CB", overall: 82 },
      { name: "Juanfran Torres", pos: "CB", overall: 78 },
      { name: "Moisés Hurtado", pos: "LB", overall: 77 },
      { name: "Iván de la Peña", pos: "CM", overall: 84 },
      { name: "Luis García", pos: "CM", overall: 81 },
      { name: "Albert Riera", pos: "AM", overall: 82 },
      { name: "Coro", pos: "RW", overall: 78 },
      { name: "Iván Alonso", pos: "LW", overall: 79 },
      { name: "Raúl Tamudo", pos: "ST", overall: 86 }
    ]
  },

// ───────── 2007-08 ─────────
  {
    id: "el_zenit_0708", name: "Zenit", season: "2007-08", country: "RU", flag: "🇷🇺",
    formation: "4-3-3",
    players: [
      { name: "Vyacheslav Malafeev", pos: "GK", overall: 85 },
      { name: "Aleksandr Anyukov", pos: "RB", overall: 81 },
      { name: "Nicolas Lombaerts", pos: "CB", overall: 82 },
      { name: "Ivica Křižanac", pos: "CB", overall: 79 },
      { name: "Fernando", pos: "LB", overall: 79 },
      { name: "Anatoliy Tymoshchuk", pos: "CM", overall: 85 },
      { name: "Igor Denisov", pos: "CM", overall: 82 },
      { name: "Andrei Arshavin", pos: "AM", overall: 90 },
      { name: "Konstantin Zyryanov", pos: "RW", overall: 81 },
      { name: "Fatih Tekke", pos: "LW", overall: 81 },
      { name: "Aleksandr Kerzhakov", pos: "ST", overall: 83 }
    ]
  },
  {
    id: "el_rangers_0708", name: "Rangers", season: "2007-08", country: "SC", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    formation: "4-3-3",
    players: [
      { name: "Neil Alexander", pos: "GK", overall: 81 },
      { name: "Alan Hutton", pos: "RB", overall: 81 },
      { name: "Carlos Cuéllar", pos: "CB", overall: 83 },
      { name: "David Weir", pos: "CB", overall: 81 },
      { name: "Sasa Papac", pos: "LB", overall: 78 },
      { name: "Kevin Thomson", pos: "CM", overall: 79 },
      { name: "Barry Ferguson", pos: "CM", overall: 82 },
      { name: "Steven Davis", pos: "AM", overall: 81 },
      { name: "Charlie Adam", pos: "RW", overall: 80 },
      { name: "Brahim Hemdani", pos: "LW", overall: 77 },
      { name: "Jean-Claude Darcheville", pos: "ST", overall: 81 }
    ]
  },

  // ───────── 2008-09 ─────────
  {
    id: "el_shakhtar_0809", name: "Shakhtar Donetsk", season: "2008-09", country: "UA", flag: "🇺🇦",
    formation: "4-3-3",
    players: [
      { name: "Andriy Pyatov", pos: "GK", overall: 83 },
      { name: "Dmytro Chygrynskiy", pos: "RB", overall: 82 },
      { name: "Oleksandr Kucher", pos: "CB", overall: 82 },
      { name: "Timerlan Huseynov", pos: "CB", overall: 77 },
      { name: "Razvan Raț", pos: "LB", overall: 81 },
      { name: "Tomáš Hübschman", pos: "CM", overall: 82 },
      { name: "Fernandinho", pos: "CM", overall: 87 },
      { name: "Jádson", pos: "AM", overall: 85 },
      { name: "Ilsinho", pos: "RW", overall: 81 },
      { name: "Willian", pos: "LW", overall: 87 },
      { name: "Luiz Adriano", pos: "ST", overall: 87 }
    ]
  },
  {
    id: "el_werderbremen_0809", name: "Werder Bremen", season: "2008-09", country: "DE", flag: "🇩🇪",
    formation: "4-3-3",
    players: [
      { name: "Tim Wiese", pos: "GK", overall: 83 },
      { name: "Clemens Fritz", pos: "RB", overall: 81 },
      { name: "Naldo", pos: "CB", overall: 85 },
      { name: "Per Mertesacker", pos: "CB", overall: 87 },
      { name: "Pierre Womé", pos: "LB", overall: 77 },
      { name: "Frank Baumann", pos: "CM", overall: 79 },
      { name: "Torsten Frings", pos: "CM", overall: 85 },
      { name: "Diego", pos: "AM", overall: 89 },
      { name: "Mesut Özil", pos: "RW", overall: 87 },
      { name: "Marko Marin", pos: "LW", overall: 81 },
      { name: "Claudio Pizarro", pos: "ST", overall: 87 }
    ]
  },

  // ───────── 2009-10 ─────────
  {
    id: "el_atleticomadrid_0910", name: "Atletico de Madrid", season: "2009-10", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "David de Gea", pos: "GK", overall: 81 },
      { name: "Antonio López", pos: "RB", overall: 79 },
      { name: "Tomáš Ujfaluši", pos: "CB", overall: 81 },
      { name: "Luis Amaranto Perea", pos: "CB", overall: 81 },
      { name: "Filipe Luís", pos: "LB", overall: 85 },
      { name: "Paulo Assunção", pos: "CM", overall: 80 },
      { name: "Tiago", pos: "CM", overall: 86 },
      { name: "Simão Sabrosa", pos: "AM", overall: 85 },
      { name: "Sergio Agüero", pos: "RW", overall: 90 },
      { name: "José Antonio Reyes", pos: "LW", overall: 83 },
      { name: "Diego Forlán", pos: "ST", overall: 91 }
    ]
  },
  {
    id: "el_fulham_0910", name: "Fulham", season: "2009-10", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "Mark Schwarzer", pos: "GK", overall: 85 },
      { name: "Stephen Kelly", pos: "RB", overall: 77 },
      { name: "Aaron Hughes", pos: "CB", overall: 79 },
      { name: "Brede Hangeland", pos: "CB", overall: 82 },
      { name: "Paul Konchesky", pos: "LB", overall: 78 },
      { name: "Danny Murphy", pos: "CM", overall: 81 },
      { name: "Dickson Etuhu", pos: "CM", overall: 77 },
      { name: "Zoltán Gera", pos: "AM", overall: 80 },
      { name: "Simon Davis", pos: "RW", overall: 77 },
      { name: "Damien Duff", pos: "LW", overall: 83 },
      { name: "Bobby Zamora", pos: "ST", overall: 82 }
    ]
  },

  // ───────── 2010-11 ─────────
  {
    id: "el_porto_1011", name: "Porto", season: "2010-11", country: "PT", flag: "🇵🇹",
    formation: "4-3-3",
    players: [
      { name: "Helton", pos: "GK", overall: 83 },
      { name: "João Pereira", pos: "RB", overall: 80 },
      { name: "Rolando", pos: "CB", overall: 82 },
      { name: "Nicolás Otamendi", pos: "CB", overall: 83 },
      { name: "Álvaro Pereira", pos: "LB", overall: 82 },
      { name: "Fernando", pos: "CM", overall: 83 },
      { name: "João Moutinho", pos: "CM", overall: 87 },
      { name: "Fredy Guarín", pos: "AM", overall: 84 },
      { name: "James Rodríguez", pos: "RW", overall: 85 },
      { name: "Silvestre Varela", pos: "LW", overall: 81 },
      { name: "Radamel Falcao", pos: "ST", overall: 92 }
    ]
  },
  {
    id: "el_braga_1011", name: "Braga", season: "2010-11", country: "PT", flag: "🇵🇹",
    formation: "4-3-3",
    players: [
      { name: "Felipe", pos: "GK", overall: 81 },
      { name: "André Pinto", pos: "RB", overall: 77 },
      { name: "Jorge Fellipe", pos: "CB", overall: 79 },
      { name: "Adriano", pos: "CB", overall: 79 },
      { name: "Aderllan Santos", pos: "LB", overall: 78 },
      { name: "Vandinho", pos: "CM", overall: 79 },
      { name: "Custódio", pos: "CM", overall: 81 },
      { name: "Hugo Viana", pos: "AM", overall: 82 },
      { name: "Alan", pos: "RW", overall: 81 },
      { name: "Lima", pos: "LW", overall: 82 },
      { name: "Éder", pos: "ST", overall: 81 }
    ]
  },

  // ───────── 2011-12 ─────────
  {
    id: "el_atleticomadrid_1112", name: "Atletico Madrid", season: "2011-12", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Thibaut Courtois", pos: "GK", overall: 87 },
      { name: "Juanfran", pos: "RB", overall: 82 },
      { name: "Diego Godín", pos: "CB", overall: 87 },
      { name: "Miranda", pos: "CB", overall: 85 },
      { name: "Filipe Luís", pos: "LB", overall: 86 },
      { name: "Gabi", pos: "CM", overall: 84 },
      { name: "Mario Suárez", pos: "CM", overall: 82 },
      { name: "Arda Turan", pos: "AM", overall: 85 },
      { name: "Adrián López", pos: "RW", overall: 81 },
      { name: "Diego", pos: "LW", overall: 87 },
      { name: "Radamel Falcao", pos: "ST", overall: 93 }
    ]
  },
  {
    id: "el_athleticbilbao_1112", name: "Athletic Bilbao", season: "2011-12", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Gorka Iraizoz", pos: "GK", overall: 81 },
      { name: "Iraola", pos: "RB", overall: 82 },
      { name: "Fernando Amorebieta", pos: "CB", overall: 81 },
      { name: "Javi Martínez", pos: "CB", overall: 88 },
      { name: "Jon Aurtenetxe", pos: "LB", overall: 79 },
      { name: "Ander Iturraspe", pos: "CM", overall: 81 },
      { name: "Ander Herrera", pos: "CM", overall: 83 },
      { name: "Óscar de Marcos", pos: "AM", overall: 81 },
      { name: "Iker Muniain", pos: "RW", overall: 84 },
      { name: "Markel Susaeta", pos: "LW", overall: 82 },
      { name: "Fernando Llorente", pos: "ST", overall: 86 }
    ]
  },

  // ───────── 2012-13 ─────────
  {
    id: "el_chelsea_1213", name: "Chelsea", season: "2012-13", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "Petr Čech", pos: "GK", overall: 90 },
      { name: "Branislav Ivanović", pos: "RB", overall: 87 },
      { name: "Gary Cahill", pos: "CB", overall: 84 },
      { name: "David Luiz", pos: "CB", overall: 86 },
      { name: "Ashley Cole", pos: "LB", overall: 89 },
      { name: "John Obi Mikel", pos: "CM", overall: 81 },
      { name: "Ramires", pos: "CM", overall: 84 },
      { name: "Juan Mata", pos: "AM", overall: 89 },
      { name: "Eden Hazard", pos: "RW", overall: 90 },
      { name: "Victor Moses", pos: "LW", overall: 81 },
      { name: "Fernando Torres", pos: "ST", overall: 85 }
    ]
  },
  {
    id: "el_benfica_1213", name: "Benfica", season: "2012-13", country: "PT", flag: "🇵🇹",
    formation: "4-3-3",
    players: [
      { name: "Artur", pos: "GK", overall: 83 },
      { name: "Maxi Pereira", pos: "RB", overall: 82 },
      { name: "Luisão", pos: "CB", overall: 85 },
      { name: "Ezequiel Garay", pos: "CB", overall: 84 },
      { name: "Jardel", pos: "LB", overall: 81 },
      { name: "Enzo Pérez", pos: "CM", overall: 83 },
      { name: "Ljubomir Fejsa", pos: "CM", overall: 81 },
      { name: "Nico Gaitán", pos: "AM", overall: 85 },
      { name: "Rodrigo", pos: "RW", overall: 82 },
      { name: "Éderzito \"Éder\"", pos: "LW", overall: 79 },
      { name: "Óscar Cardozo", pos: "ST", overall: 85 }
    ]
  },

  // ───────── 2013-14 ─────────
  {
    id: "el_sevilla_1314", name: "Sevilla", season: "2013-14", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Beto", pos: "GK", overall: 83 },
      { name: "Coke", pos: "RB", overall: 81 },
      { name: "Federico Fazio", pos: "CB", overall: 83 },
      { name: "Stéphane M'Bia", pos: "CB", overall: 81 },
      { name: "Alberto Moreno", pos: "LB", overall: 83 },
      { name: "Ivan Rakitić", pos: "CM", overall: 88 },
      { name: "Gary Medel", pos: "CM", overall: 84 },
      { name: "Vitolo", pos: "AM", overall: 82 },
      { name: "José Antonio Reyes", pos: "RW", overall: 82 },
      { name: "Aleix Vidal", pos: "LW", overall: 81 },
      { name: "Carlos Bacca", pos: "ST", overall: 85 }
    ]
  },
  {
    id: "el_benfica_1314", name: "Benfica", season: "2013-14", country: "PT", flag: "🇵🇹",
    formation: "4-3-3",
    players: [
      { name: "Artur", pos: "GK", overall: 83 },
      { name: "André Almeida", pos: "RB", overall: 79 },
      { name: "Luisão", pos: "CB", overall: 84 },
      { name: "Jardel", pos: "CB", overall: 82 },
      { name: "Sílvio", pos: "LB", overall: 79 },
      { name: "Ljubomir Fejsa", pos: "CM", overall: 82 },
      { name: "Enzo Pérez", pos: "CM", overall: 83 },
      { name: "Nico Gaitán", pos: "AM", overall: 86 },
      { name: "Rodrigo", pos: "RW", overall: 83 },
      { name: "Éderzito \"Éder\"", pos: "LW", overall: 80 },
      { name: "Lima", pos: "ST", overall: 81 }
    ]
  },

  // ───────── 2014-15 ─────────
  {
    id: "el_sevilla_1415", name: "Sevilla", season: "2014-15", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Beto", pos: "GK", overall: 83 },
      { name: "Timothée Kolodziejczak", pos: "RB", overall: 79 },
      { name: "Daniel Carriço", pos: "CB", overall: 79 },
      { name: "Nicolás Pareja", pos: "CB", overall: 80 },
      { name: "Benoît Trémoulinas", pos: "LB", overall: 80 },
      { name: "Grzegorz Krychowiak", pos: "CM", overall: 84 },
      { name: "Éver Banega", pos: "CM", overall: 87 },
      { name: "Vitolo", pos: "AM", overall: 84 },
      { name: "Aleix Vidal", pos: "RW", overall: 83 },
      { name: "José Antonio Reyes", pos: "LW", overall: 82 },
      { name: "Carlos Bacca", pos: "ST", overall: 86 }
    ]
  },
  {
    id: "el_dnipro_1415", name: "Dnipro", season: "2014-15", country: "UA", flag: "🇺🇦",
    formation: "4-3-3",
    players: [
      { name: "Denys Boyko", pos: "GK", overall: 81 },
      { name: "Artem Fedetskiy", pos: "RB", overall: 78 },
      { name: "Yevhen Cheberyachko", pos: "CB", overall: 79 },
      { name: "Ivan Ordets", pos: "CB", overall: 79 },
      { name: "Yevhen Opanasenko", pos: "LB", overall: 77 },
      { name: "Ruslan Rotan", pos: "CM", overall: 81 },
      { name: "Jaba Kankava", pos: "CM", overall: 79 },
      { name: "Nikola Kalinić", pos: "AM", overall: 85 },
      { name: "Yevhen Konoplyanka", pos: "RW", overall: 85 },
      { name: "Valeriy Luchkevych", pos: "LW", overall: 77 },
      { name: "Roman Zozulya", pos: "ST", overall: 82 }
    ]
  },

// ───────── 2015-16 ─────────
  {
    id: "el_sevilla_1516", name: "Sevilla", season: "2015-16", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Sergio Rico", pos: "GK", overall: 81 },
      { name: "Coke", pos: "RB", overall: 81 },
      { name: "Daniel Carriço", pos: "CB", overall: 79 },
      { name: "Timothée Kolodziejczak", pos: "CB", overall: 79 },
      { name: "Benoît Trémoulinas", pos: "LB", overall: 80 },
      { name: "Grzegorz Krychowiak", pos: "CM", overall: 86 },
      { name: "Éver Banega", pos: "CM", overall: 87 },
      { name: "Samir Nasri", pos: "AM", overall: 82 },
      { name: "Vitolo", pos: "RW", overall: 85 },
      { name: "Yevhen Konoplyanka", pos: "LW", overall: 83 },
      { name: "Kevin Gameiro", pos: "ST", overall: 86 }
    ]
  },
  {
    id: "el_liverpool_1516", name: "Liverpool", season: "2015-16", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "Simon Mignolet", pos: "GK", overall: 81 },
      { name: "Nathaniel Clyne", pos: "RB", overall: 81 },
      { name: "Dejan Lovren", pos: "CB", overall: 81 },
      { name: "Mamadou Sakho", pos: "CB", overall: 82 },
      { name: "Alberto Moreno", pos: "LB", overall: 81 },
      { name: "Emre Can", pos: "CM", overall: 82 },
      { name: "James Milner", pos: "CM", overall: 81 },
      { name: "Philippe Coutinho", pos: "AM", overall: 88 },
      { name: "Adam Lallana", pos: "RW", overall: 82 },
      { name: "Roberto Firmino", pos: "LW", overall: 87 },
      { name: "Divock Origi", pos: "ST", overall: 80 }
    ]
  },

  // ───────── 2016-17 ─────────
  {
    id: "el_manutd_1617", name: "Manchester United", season: "2016-17", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "David de Gea", pos: "GK", overall: 92 },
      { name: "Antonio Valencia", pos: "RB", overall: 83 },
      { name: "Chris Smalling", pos: "CB", overall: 82 },
      { name: "Eric Bailly", pos: "CB", overall: 82 },
      { name: "Daley Blind", pos: "LB", overall: 81 },
      { name: "Paul Pogba", pos: "CM", overall: 90 },
      { name: "Ander Herrera", pos: "CM", overall: 83 },
      { name: "Juan Mata", pos: "AM", overall: 85 },
      { name: "Jesse Lingard", pos: "RW", overall: 79 },
      { name: "Henrikh Mkhitaryan", pos: "LW", overall: 85 },
      { name: "Zlatan Ibrahimović", pos: "ST", overall: 91 }
    ]
  },
  {
    id: "el_ajax_1617", name: "Ajax", season: "2016-17", country: "NL", flag: "🇳🇱",
    formation: "4-3-3",
    players: [
      { name: "André Onana", pos: "GK", overall: 79 },
      { name: "Kenny Tete", pos: "RB", overall: 79 },
      { name: "Davinson Sánchez", pos: "CB", overall: 82 },
      { name: "Matthijs de Ligt", pos: "CB", overall: 81 },
      { name: "Nick Viergever", pos: "LB", overall: 78 },
      { name: "Lasse Schöne", pos: "CM", overall: 82 },
      { name: "Davy Klaassen", pos: "CM", overall: 83 },
      { name: "Hakim Ziyech", pos: "AM", overall: 85 },
      { name: "Amin Younes", pos: "RW", overall: 79 },
      { name: "Bertrand Traoré", pos: "LW", overall: 81 },
      { name: "Kasper Dolberg", pos: "ST", overall: 82 }
    ]
  },

  // ───────── 2017-18 ─────────
  {
    id: "el_atleticomadrid_1718", name: "Atletico Madrid", season: "2017-18", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Jan Oblak", pos: "GK", overall: 93 },
      { name: "Šime Vrsaljko", pos: "RB", overall: 82 },
      { name: "Diego Godín", pos: "CB", overall: 90 },
      { name: "Stefan Savić", pos: "CB", overall: 84 },
      { name: "Filipe Luís", pos: "LB", overall: 85 },
      { name: "Saúl Ñíguez", pos: "CM", overall: 85 },
      { name: "Koke", pos: "CM", overall: 87 },
      { name: "Ángel Correa", pos: "AM", overall: 82 },
      { name: "Antoine Griezmann", pos: "RW", overall: 92 },
      { name: "Yannick Carrasco", pos: "LW", overall: 83 },
      { name: "Diego Costa", pos: "ST", overall: 88 }
    ]
  },
  {
    id: "el_marseille_1718", name: "Marseille", season: "2017-18", country: "FR", flag: "🇫🇷",
    formation: "4-3-3",
    players: [
      { name: "Yohann Pelé", pos: "GK", overall: 79 },
      { name: "Bouna Sarr", pos: "RB", overall: 79 },
      { name: "Adil Rami", pos: "CB", overall: 83 },
      { name: "Rolando", pos: "CB", overall: 81 },
      { name: "Jordan Amavi", pos: "LB", overall: 79 },
      { name: "Morgan Sanson", pos: "CM", overall: 81 },
      { name: "Kevin Strootman", pos: "CM", overall: 83 },
      { name: "Florian Thauvin", pos: "AM", overall: 85 },
      { name: "Dimitri Payet", pos: "RW", overall: 87 },
      { name: "Lucas Ocampos", pos: "LW", overall: 81 },
      { name: "Valère Germain", pos: "ST", overall: 81 }
    ]
  },

  // ───────── 2018-19 ─────────
  {
    id: "el_chelsea_1819", name: "Chelsea", season: "2018-19", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "Kepa Arrizabalaga", pos: "GK", overall: 83 },
      { name: "César Azpilicueta", pos: "RB", overall: 87 },
      { name: "Antonio Rüdiger", pos: "CB", overall: 85 },
      { name: "David Luiz", pos: "CB", overall: 85 },
      { name: "Marcos Alonso", pos: "LB", overall: 83 },
      { name: "Jorginho", pos: "CM", overall: 84 },
      { name: "N'Golo Kanté", pos: "CM", overall: 91 },
      { name: "Mateo Kovačić", pos: "AM", overall: 84 },
      { name: "Pedro", pos: "RW", overall: 84 },
      { name: "Eden Hazard", pos: "LW", overall: 94 },
      { name: "Olivier Giroud", pos: "ST", overall: 85 }
    ]
  },
  {
    id: "el_arsenal_1819", name: "Arsenal", season: "2018-19", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "Bernd Leno", pos: "GK", overall: 83 },
      { name: "Héctor Bellerín", pos: "RB", overall: 82 },
      { name: "Sokratis Papastathopoulos", pos: "CB", overall: 81 },
      { name: "Laurent Koscielny", pos: "CB", overall: 84 },
      { name: "Nacho Monreal", pos: "LB", overall: 81 },
      { name: "Granit Xhaka", pos: "CM", overall: 82 },
      { name: "Lucas Torreira", pos: "CM", overall: 82 },
      { name: "Mesut Özil", pos: "AM", overall: 88 },
      { name: "Alex Iwobi", pos: "RW", overall: 79 },
      { name: "Henrikh Mkhitaryan", pos: "LW", overall: 85 },
      { name: "Pierre-Emerick Aubameyang", pos: "ST", overall: 91 }
    ]
  },

  // ───────── 2019-20 ─────────
  {
    id: "el_sevilla_1920", name: "Sevilla", season: "2019-20", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Yassine Bounou", pos: "GK", overall: 85 },
      { name: "Jesús Navas", pos: "RB", overall: 85 },
      { name: "Diego Carlos", pos: "CB", overall: 85 },
      { name: "Jules Koundé", pos: "CB", overall: 85 },
      { name: "Marcos Acuña", pos: "LB", overall: 82 },
      { name: "Fernando", pos: "CM", overall: 83 },
      { name: "Joan Jordán", pos: "CM", overall: 81 },
      { name: "Éver Banega", pos: "AM", overall: 86 },
      { name: "Suso", pos: "RW", overall: 82 },
      { name: "Lucas Ocampos", pos: "LW", overall: 85 },
      { name: "Youssef En-Nesyri", pos: "ST", overall: 83 }
    ]
  },
  {
    id: "el_internazionale_1920", name: "Internazionale", season: "2019-20", country: "IT", flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Samir Handanović", pos: "GK", overall: 87 },
      { name: "Danilo D'Ambrosio", pos: "RB", overall: 81 },
      { name: "Milan Škriniar", pos: "CB", overall: 86 },
      { name: "Stefan de Vrij", pos: "CB", overall: 87 },
      { name: "Ashley Young", pos: "LB", overall: 81 },
      { name: "Marcelo Brozović", pos: "CM", overall: 87 },
      { name: "Nicolò Barella", pos: "CM", overall: 85 },
      { name: "Christian Eriksen", pos: "AM", overall: 88 },
      { name: "Ivan Perišić", pos: "RW", overall: 85 },
      { name: "Antonio Candreva", pos: "LW", overall: 81 },
      { name: "Romelu Lukaku", pos: "ST", overall: 90 }
    ]
  },

  // ───────── 2020-21 ─────────
  {
    id: "el_villarreal_2021", name: "Villarreal", season: "2020-21", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Gerónimo Rulli", pos: "GK", overall: 83 },
      { name: "Mario Gaspar", pos: "RB", overall: 79 },
      { name: "Pau Torres", pos: "CB", overall: 85 },
      { name: "Raúl Albiol", pos: "CB", overall: 84 },
      { name: "Alfonso Pedraza", pos: "LB", overall: 79 },
      { name: "Dani Parejo", pos: "CM", overall: 85 },
      { name: "Étienne Capoue", pos: "CM", overall: 81 },
      { name: "Manu Trigueros", pos: "AM", overall: 79 },
      { name: "Samu Chukwueze", pos: "RW", overall: 82 },
      { name: "Moi Gómez", pos: "LW", overall: 79 },
      { name: "Gerard Moreno", pos: "ST", overall: 87 }
    ]
  },
  {
    id: "el_manutd_2021", name: "Manchester United", season: "2020-21", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "David de Gea", pos: "GK", overall: 88 },
      { name: "Aaron Wan-Bissaka", pos: "RB", overall: 82 },
      { name: "Victor Lindelöf", pos: "CB", overall: 82 },
      { name: "Harry Maguire", pos: "CB", overall: 84 },
      { name: "Luke Shaw", pos: "LB", overall: 83 },
      { name: "Fred", pos: "CM", overall: 79 },
      { name: "Scott McTominay", pos: "CM", overall: 80 },
      { name: "Bruno Fernandes", pos: "AM", overall: 90 },
      { name: "Mason Greenwood", pos: "RW", overall: 81 },
      { name: "Marcus Rashford", pos: "LW", overall: 87 },
      { name: "Edinson Cavani", pos: "ST", overall: 86 }
    ]
  },

  // ───────── 2021-22 ─────────
  {
    id: "el_frankfurt_2122", name: "Frankfurt", season: "2021-22", country: "DE", flag: "🇩🇪",
    formation: "4-3-3",
    players: [
      { name: "Kevin Trapp", pos: "GK", overall: 85 },
      { name: "Danny da Costa", pos: "RB", overall: 79 },
      { name: "Martin Hinteregger", pos: "CB", overall: 82 },
      { name: "Evan N'Dicka", pos: "CB", overall: 81 },
      { name: "Almamy Touré", pos: "LB", overall: 78 },
      { name: "Sebastian Rode", pos: "CM", overall: 80 },
      { name: "Djibril Sow", pos: "CM", overall: 81 },
      { name: "Daichi Kamada", pos: "AM", overall: 83 },
      { name: "Ansgar Knauff", pos: "RW", overall: 77 },
      { name: "Filip Kostić", pos: "LW", overall: 87 },
      { name: "Rafael Borré", pos: "ST", overall: 82 }
    ]
  },
  {
    id: "el_rangers_2122", name: "Rangers", season: "2021-22", country: "SC", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    formation: "4-3-3",
    players: [
      { name: "Allan McGregor", pos: "GK", overall: 82 },
      { name: "James Tavernier", pos: "RB", overall: 85 },
      { name: "Connor Goldson", pos: "CB", overall: 82 },
      { name: "Calvin Bassey", pos: "CB", overall: 79 },
      { name: "Borna Barišić", pos: "LB", overall: 81 },
      { name: "Glen Kamara", pos: "CM", overall: 81 },
      { name: "John Lundstram", pos: "CM", overall: 79 },
      { name: "Ryan Kent", pos: "AM", overall: 81 },
      { name: "Joe Aribo", pos: "RW", overall: 80 },
      { name: "Scott Wright", pos: "LW", overall: 77 },
      { name: "Alfredo Morelos", pos: "ST", overall: 82 }
    ]
  },
  {
    id: "el_barcelona_2122", name: "Barcelona", season: "2021-22", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Marc-André ter Stegen", pos: "GK", overall: 90 },
      { name: "Sergiño Dest", pos: "RB", overall: 81 },
      { name: "Gerard Piqué", pos: "CB", overall: 85 },
      { name: "Ronald Araújo", pos: "CB", overall: 84 },
      { name: "Jordi Alba", pos: "LB", overall: 87 },
      { name: "Sergio Busquets", pos: "CM", overall: 87 },
      { name: "Frenkie de Jong", pos: "CM", overall: 88 },
      { name: "Pedri", pos: "AM", overall: 89 },
      { name: "Ousmane Dembélé", pos: "RW", overall: 85 },
      { name: "Ferran Torres", pos: "LW", overall: 82 },
      { name: "Pierre-Emerick Aubameyang", pos: "ST", overall: 85 }
    ]
  },

// ───────── 2022-23 ─────────
  {
    id: "el_sevilla_2223", name: "Sevilla", season: "2022-23", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Yassine Bounou", pos: "GK", overall: 87 },
      { name: "Jesús Navas", pos: "RB", overall: 84 },
      { name: "Loïc Badé", pos: "CB", overall: 81 },
      { name: "Nemanja Gudelj", pos: "CB", overall: 80 },
      { name: "Marcos Acuña", pos: "LB", overall: 83 },
      { name: "Fernando", pos: "CM", overall: 82 },
      { name: "Joan Jordán", pos: "CM", overall: 81 },
      { name: "Ivan Rakitić", pos: "AM", overall: 84 },
      { name: "Erik Lamela", pos: "RW", overall: 80 },
      { name: "Lucas Ocampos", pos: "LW", overall: 83 },
      { name: "Youssef En-Nesyri", pos: "ST", overall: 85 }
    ]
  },
  {
    id: "el_roma_2223", name: "Roma", season: "2022-23", country: "IT", flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Rui Patrício", pos: "GK", overall: 85 },
      { name: "Zeki Çelik", pos: "RB", overall: 79 },
      { name: "Chris Smalling", pos: "CB", overall: 82 },
      { name: "Gianluca Mancini", pos: "CB", overall: 81 },
      { name: "Leonardo Spinazzola", pos: "LB", overall: 81 },
      { name: "Bryan Cristante", pos: "CM", overall: 82 },
      { name: "Nemanja Matić", pos: "CM", overall: 81 },
      { name: "Lorenzo Pellegrini", pos: "AM", overall: 85 },
      { name: "Nicola Zalewski", pos: "RW", overall: 77 },
      { name: "Paulo Dybala", pos: "LW", overall: 90 },
      { name: "Tammy Abraham", pos: "ST", overall: 82 }
    ]
  },
  {
    id: "el_juventus_2223", name: "Juventus", season: "2022-23", country: "IT", flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Wojciech Szczęsny", pos: "GK", overall: 87 },
      { name: "Juan Cuadrado", pos: "RB", overall: 82 },
      { name: "Bremer", pos: "CB", overall: 85 },
      { name: "Danilo", pos: "CB", overall: 82 },
      { name: "Alex Sandro", pos: "LB", overall: 81 },
      { name: "Manuel Locatelli", pos: "CM", overall: 83 },
      { name: "Adrien Rabiot", pos: "CM", overall: 83 },
      { name: "Paul Pogba", pos: "AM", overall: 85 },
      { name: "Federico Chiesa", pos: "RW", overall: 87 },
      { name: "Ángel Di María", pos: "LW", overall: 87 },
      { name: "Dušan Vlahović", pos: "ST", overall: 87 }
    ]
  },

  // ───────── 2023-24 ─────────
  {
    id: "el_atalanta_2324", name: "Atalanta", season: "2023-24", country: "IT", flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Marco Carnesecchi", pos: "GK", overall: 82 },
      { name: "Matteo Ruggeri", pos: "RB", overall: 79 },
      { name: "Rafael Tolói", pos: "CB", overall: 82 },
      { name: "Berat Djimsiti", pos: "CB", overall: 81 },
      { name: "Sead Kolašinac", pos: "LB", overall: 79 },
      { name: "Marten de Roon", pos: "CM", overall: 82 },
      { name: "Éderson", pos: "CM", overall: 82 },
      { name: "Teun Koopmeiners", pos: "AM", overall: 85 },
      { name: "Ademola Lookman", pos: "RW", overall: 86 },
      { name: "Charles De Ketelaere", pos: "LW", overall: 82 },
      { name: "Gianluca Scamacca", pos: "ST", overall: 83 }
    ]
  },
  {
    id: "el_leverkusen_2324", name: "Bayer Leverkusen", season: "2023-24", country: "DE", flag: "🇩🇪",
    formation: "4-3-3",
    players: [
      { name: "Lukáš Hrádecký", pos: "GK", overall: 85 },
      { name: "Jeremie Frimpong", pos: "RB", overall: 85 },
      { name: "Jonathan Tah", pos: "CB", overall: 87 },
      { name: "Édmond Tapsoba", pos: "CB", overall: 84 },
      { name: "Alejandro Grimaldo", pos: "LB", overall: 87 },
      { name: "Granit Xhaka", pos: "CM", overall: 87 },
      { name: "Exequiel Palacios", pos: "CM", overall: 83 },
      { name: "Florian Wirtz", pos: "AM", overall: 91 },
      { name: "Amine Adli", pos: "RW", overall: 81 },
      { name: "Jonas Hofmann", pos: "LW", overall: 83 },
      { name: "Victor Boniface", pos: "ST", overall: 86 }
    ]
  },
  {
    id: "el_liverpool_2324", name: "Liverpool", season: "2023-24", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "Alisson Becker", pos: "GK", overall: 92 },
      { name: "Trent Alexander-Arnold", pos: "RB", overall: 91 },
      { name: "Virgil van Dijk", pos: "CB", overall: 92 },
      { name: "Ibrahima Konaté", pos: "CB", overall: 85 },
      { name: "Andrew Robertson", pos: "LB", overall: 88 },
      { name: "Alexis Mac Allister", pos: "CM", overall: 86 },
      { name: "Wataru Endo", pos: "CM", overall: 81 },
      { name: "Dominik Szoboszlai", pos: "AM", overall: 85 },
      { name: "Mohamed Salah", pos: "RW", overall: 93 },
      { name: "Luis Díaz", pos: "LW", overall: 86 },
      { name: "Darwin Núñez", pos: "ST", overall: 84 }
    ]
  },

  // ───────── 2024-25 ─────────
  {
    id: "el_tottenham_2425", name: "Tottenham", season: "2024-25", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "Guglielmo Vicario", pos: "GK", overall: 85 },
      { name: "Pedro Porro", pos: "RB", overall: 85 },
      { name: "Cristian Romero", pos: "CB", overall: 88 },
      { name: "Micky van de Ven", pos: "CB", overall: 85 },
      { name: "Destiny Udogie", pos: "LB", overall: 82 },
      { name: "Rodrigo Bentancur", pos: "CM", overall: 83 },
      { name: "Yves Bissouma", pos: "CM", overall: 82 },
      { name: "James Maddison", pos: "AM", overall: 86 },
      { name: "Brennan Johnson", pos: "RW", overall: 80 },
      { name: "Dejan Kulusevski", pos: "LW", overall: 85 },
      { name: "Dominic Solanke", pos: "ST", overall: 82 }
    ]
  },
  {
    id: "el_manutd_2425", name: "Manchester United", season: "2024-25", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "André Onana", pos: "GK", overall: 85 },
      { name: "Diogo Dalot", pos: "RB", overall: 81 },
      { name: "Lisandro Martínez", pos: "CB", overall: 85 },
      { name: "Matthijs de Ligt", pos: "CB", overall: 84 },
      { name: "Noussair Mazraoui", pos: "LB", overall: 81 },
      { name: "Kobbie Mainoo", pos: "CM", overall: 82 },
      { name: "Casemiro", pos: "CM", overall: 82 },
      { name: "Bruno Fernandes", pos: "AM", overall: 90 },
      { name: "Amad Diallo", pos: "RW", overall: 81 },
      { name: "Alejandro Garnacho", pos: "LW", overall: 82 },
      { name: "Rasmus Højlund", pos: "ST", overall: 81 }
    ]
  },
  {
    id: "el_bodoglimt_2425", name: "Bodo Glimt", season: "2024-25", country: "NO", flag: "🇳🇴",
    formation: "4-3-3",
    players: [
      { name: "Nikita Haikin", pos: "GK", overall: 79 },
      { name: "Brice Wembangomo", pos: "RB", overall: 77 },
      { name: "Odin Bjørtuft", pos: "CB", overall: 79 },
      { name: "Marius Lode", pos: "CB", overall: 78 },
      { name: "Fredrik Bjørkan", pos: "LB", overall: 79 },
      { name: "Patrick Berg", pos: "CM", overall: 80 },
      { name: "Isak Helstad Amundsen", pos: "CM", overall: 77 },
      { name: "Ulrik Saltnes", pos: "AM", overall: 79 },
      { name: "Runar Espejord", pos: "RW", overall: 78 },
      { name: "Amahl Pellegrino", pos: "LW", overall: 79 },
      { name: "Jens Petter Hauge", pos: "ST", overall: 82 }
    ]
  },
  {
    id: "el_athleticbilbao_2425", name: "Athletic Bilbao", season: "2024-25", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Unai Simón", pos: "GK", overall: 87 },
      { name: "Óscar de Marcos", pos: "RB", overall: 81 },
      { name: "Aitor Paredes", pos: "CB", overall: 81 },
      { name: "Dani Vivian", pos: "CB", overall: 83 },
      { name: "Yuri Berchiche", pos: "LB", overall: 81 },
      { name: "Mikel Vesga", pos: "CM", overall: 79 },
      { name: "Mikel Jauregizar", pos: "CM", overall: 79 },
      { name: "Oihan Sancet", pos: "AM", overall: 85 },
      { name: "Nico Williams", pos: "RW", overall: 89 },
      { name: "Alex Berenguer", pos: "LW", overall: 81 },
      { name: "Gorka Guruzeta", pos: "ST", overall: 82 }
    ]
  },

  // ───────── 2025-26 ─────────
  {
    id: "el_astonvilla_2526", name: "Aston Villa", season: "2025-26", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "Emiliano Martínez", pos: "GK", overall: 88 },
      { name: "Matty Cash", pos: "RB", overall: 82 },
      { name: "Pau Torres", pos: "CB", overall: 85 },
      { name: "Ezri Konsa", pos: "CB", overall: 82 },
      { name: "Lucas Digne", pos: "LB", overall: 81 },
      { name: "Boubacar Kamara", pos: "CM", overall: 84 },
      { name: "Youri Tielemans", pos: "CM", overall: 83 },
      { name: "John McGinn", pos: "AM", overall: 83 },
      { name: "Morgan Rogers", pos: "RW", overall: 83 },
      { name: "Leon Bailey", pos: "LW", overall: 81 },
      { name: "Ollie Watkins", pos: "ST", overall: 87 }
    ]
  },
  {
    id: "el_freiburg_2526", name: "Freiburg", season: "2025-26", country: "DE", flag: "🇩🇪",
    formation: "4-3-3",
    players: [
      { name: "Noah Atubolu", pos: "GK", overall: 81 },
      { name: "Kiliann Sildillia", pos: "RB", overall: 79 },
      { name: "Matthias Ginter", pos: "CB", overall: 82 },
      { name: "Philipp Lienhart", pos: "CB", overall: 81 },
      { name: "Max Rosenfelder", pos: "LB", overall: 77 },
      { name: "Merlin Röhl", pos: "CM", overall: 79 },
      { name: "Patrick Osterhage", pos: "CM", overall: 79 },
      { name: "Ritsu Dōan", pos: "AM", overall: 84 },
      { name: "Junior Adamu", pos: "RW", overall: 79 },
      { name: "Vincenzo Grifo", pos: "LW", overall: 83 },
      { name: "Michael Gregoritsch", pos: "ST", overall: 82 }
    ]
  },
  {
    id: "el_nottinghamforest_2526", name: "Nottingham Forest", season: "2025-26", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "Matz Sels", pos: "GK", overall: 83 },
      { name: "Neco Williams", pos: "RB", overall: 81 },
      { name: "Murillo", pos: "CB", overall: 83 },
      { name: "Nikola Milenković", pos: "CB", overall: 82 },
      { name: "Ola Aina", pos: "LB", overall: 80 },
      { name: "Elliot Anderson", pos: "CM", overall: 81 },
      { name: "Douglas Luiz", pos: "CM", overall: 80 },
      { name: "Morgan Gibbs-White", pos: "AM", overall: 85 },
      { name: "Anthony Elanga", pos: "RW", overall: 82 },
      { name: "Callum Hudson-Odoi", pos: "LW", overall: 79 },
      { name: "Chris Wood", pos: "ST", overall: 82 }
    ]
  },
  {
    id: "el_braga_2526", name: "Braga", season: "2025-26", country: "PT", flag: "🇵🇹",
    formation: "4-3-3",
    players: [
      { name: "Tiago Sá", pos: "GK", overall: 81 },
      { name: "Lawrence Ennin", pos: "RB", overall: 77 },
      { name: "Sikou Niakaté", pos: "CB", overall: 80 },
      { name: "Josip Šutalo", pos: "CB", overall: 79 },
      { name: "Nuno Sequeira", pos: "LB", overall: 79 },
      { name: "Al-Musrati", pos: "CM", overall: 81 },
      { name: "André Castro", pos: "CM", overall: 80 },
      { name: "Gabri Martínez", pos: "AM", overall: 82 },
      { name: "Roger Fernandes", pos: "RW", overall: 81 },
      { name: "Simon Banza", pos: "LW", overall: 81 },
      { name: "Vitinha", pos: "ST", overall: 83 }
    ]
  }

];
