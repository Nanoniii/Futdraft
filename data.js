const TEAMS = [
  {
    id: "real_madrid_1314",
    name: "Real Madrid",
    season: "2013-14",
    country: "ES",
    flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Casillas", pos: "GK", overall: 88 },
      { name: "Carvajal", pos: "RB", overall: 82 },
      { name: "Pepe", pos: "CB", overall: 85 },
      { name: "Ramos", pos: "CB", overall: 90 },
      { name: "Marcelo", pos: "LB", overall: 87 },
      { name: "Modric", pos: "CM", overall: 91 },
      { name: "Xabi Alonso", pos: "CM", overall: 89 },
      { name: "Di María", pos: "CM", overall: 88 },
      { name: "Bale", pos: "RW", overall: 88 },
      { name: "Benzema", pos: "ST", overall: 87 },
      { name: "Ronaldo", pos: "LW", overall: 97 }
    ]
  },
  {
    id: "real_madrid_1718",
    name: "Real Madrid",
    season: "2017-18",
    country: "ES",
    flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Navas", pos: "GK", overall: 87 },
      { name: "Carvajal", pos: "RB", overall: 84 },
      { name: "Varane", pos: "CB", overall: 88 },
      { name: "Ramos", pos: "CB", overall: 91 },
      { name: "Marcelo", pos: "LB", overall: 86 },
      { name: "Casemiro", pos: "CM", overall: 88 },
      { name: "Modric", pos: "CM", overall: 93 },
      { name: "Kroos", pos: "CM", overall: 91 },
      { name: "Isco", pos: "RW", overall: 85 },
      { name: "Benzema", pos: "ST", overall: 88 },
      { name: "Ronaldo", pos: "LW", overall: 99 }
    ]
  },
  {
    id: "real_madrid_0102",
    name: "Real Madrid",
    season: "2001-02",
    country: "ES",
    flag: "🇪🇸",
    formation: "4-4-2",
    players: [
      { name: "César", pos: "GK", overall: 80 },
      { name: "Salgado", pos: "RB", overall: 79 },
      { name: "Hierro", pos: "CB", overall: 86 },
      { name: "Helguera", pos: "CB", overall: 80 },
      { name: "Roberto Carlos", pos: "LB", overall: 90 },
      { name: "Figo", pos: "RM", overall: 92 },
      { name: "Makélélé", pos: "CM", overall: 88 },
      { name: "Zidane", pos: "CM", overall: 97 },
      { name: "McManaman", pos: "LM", overall: 79 },
      { name: "Raúl", pos: "ST", overall: 91 },
      { name: "Morientes", pos: "ST", overall: 83 }
    ]
  },
  {
    id: "barcelona_0809",
    name: "Barcelona",
    season: "2008-09",
    country: "ES",
    flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Valdés", pos: "GK", overall: 86 },
      { name: "Alves", pos: "RB", overall: 88 },
      { name: "Piqué", pos: "CB", overall: 87 },
      { name: "Puyol", pos: "CB", overall: 88 },
      { name: "Abidal", pos: "LB", overall: 84 },
      { name: "Busquets", pos: "CM", overall: 87 },
      { name: "Xavi", pos: "CM", overall: 95 },
      { name: "Iniesta", pos: "CM", overall: 94 },
      { name: "Henry", pos: "RW", overall: 85 },
      { name: "Eto'o", pos: "ST", overall: 90 },
      { name: "Messi", pos: "LW", overall: 99 }
    ]
  },
  {
    id: "barcelona_0506",
    name: "Barcelona",
    season: "2005-06",
    country: "ES",
    flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Valdés", pos: "GK", overall: 83 },
      { name: "Belletti", pos: "RB", overall: 77 },
      { name: "Puyol", pos: "CB", overall: 88 },
      { name: "Márquez", pos: "CB", overall: 82 },
      { name: "Van Bronckhorst", pos: "LB", overall: 80 },
      { name: "Van Bommel", pos: "CM", overall: 83 },
      { name: "Xavi", pos: "CM", overall: 90 },
      { name: "Deco", pos: "CM", overall: 88 },
      { name: "Giuly", pos: "RW", overall: 79 },
      { name: "Eto'o", pos: "ST", overall: 89 },
      { name: "Ronaldinho", pos: "LW", overall: 96 }
    ]
  },
  {
    id: "barcelona_1415",
    name: "Barcelona",
    season: "2014-15",
    country: "ES",
    flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Ter Stegen", pos: "GK", overall: 86 },
      { name: "Alves", pos: "RB", overall: 87 },
      { name: "Piqué", pos: "CB", overall: 88 },
      { name: "Mascherano", pos: "CB", overall: 85 },
      { name: "Alba", pos: "LB", overall: 86 },
      { name: "Busquets", pos: "CM", overall: 90 },
      { name: "Rakitic", pos: "CM", overall: 86 },
      { name: "Iniesta", pos: "CM", overall: 91 },
      { name: "Messi", pos: "RW", overall: 98 },
      { name: "Suárez", pos: "ST", overall: 92 },
      { name: "Neymar", pos: "LW", overall: 93 }
    ]
  },
  {
    id: "atletico_1516",
    name: "Atlético de Madrid",
    season: "2015-16",
    country: "ES",
    flag: "🇪🇸",
    formation: "4-4-2",
    players: [
      { name: "Oblak", pos: "GK", overall: 91 },
      { name: "Juanfran", pos: "RB", overall: 81 },
      { name: "Giménez", pos: "CB", overall: 83 },
      { name: "Godín", pos: "CB", overall: 90 },
      { name: "Filipe Luís", pos: "LB", overall: 84 },
      { name: "Koke", pos: "RM", overall: 84 },
      { name: "Gabi", pos: "CM", overall: 82 },
      { name: "Saúl", pos: "CM", overall: 80 },
      { name: "Carrasco", pos: "LM", overall: 80 },
      { name: "Griezmann", pos: "ST", overall: 90 },
      { name: "Torres", pos: "ST", overall: 77 }
    ]
  },
  {
    id: "valencia_0001",
    name: "Valencia",
    season: "2000-01",
    country: "ES",
    flag: "🇪🇸",
    formation: "4-4-2",
    players: [
      { name: "Cañizares", pos: "GK", overall: 86 },
      { name: "Angloma", pos: "RB", overall: 78 },
      { name: "Pellegrino", pos: "CB", overall: 80 },
      { name: "Carboni", pos: "CB", overall: 79 },
      { name: "Gerardo", pos: "LB", overall: 76 },
      { name: "Mendieta", pos: "RM", overall: 88 },
      { name: "Baraja", pos: "CM", overall: 81 },
      { name: "Albelda", pos: "CM", overall: 81 },
      { name: "Kily González", pos: "LM", overall: 79 },
      { name: "Carew", pos: "ST", overall: 78 },
      { name: "Claudio López", pos: "ST", overall: 79 }
    ]
  },
  {
    id: "lacoruna_0304",
    name: "La Coruña",
    season: "2003-04",
    country: "ES",
    flag: "🇪🇸",
    formation: "4-4-2",
    players: [
      { name: "Molina", pos: "GK", overall: 81 },
      { name: "Juanito", pos: "RB", overall: 77 },
      { name: "Romero", pos: "CB", overall: 78 },
      { name: "Andrade", pos: "CB", overall: 77 },
      { name: "Naybet", pos: "LB", overall: 79 },
      { name: "Sergio", pos: "RM", overall: 78 },
      { name: "Makaay", pos: "CM", overall: 83 },
      { name: "Valerón", pos: "CM", overall: 86 },
      { name: "Fran", pos: "LM", overall: 79 },
      { name: "Pandiani", pos: "ST", overall: 78 },
      { name: "Victor", pos: "ST", overall: 77 }
    ]
  },
  {
    id: "villarreal_2122",
    name: "Villarreal",
    season: "2021-22",
    country: "ES",
    flag: "🇪🇸",
    formation: "4-4-2",
    players: [
      { name: "Rulli", pos: "GK", overall: 80 },
      { name: "Foyth", pos: "RB", overall: 79 },
      { name: "Albiol", pos: "CB", overall: 83 },
      { name: "Pau Torres", pos: "CB", overall: 84 },
      { name: "Estupiñán", pos: "LB", overall: 81 },
      { name: "Capoue", pos: "CM", overall: 80 },
      { name: "Parejo", pos: "CM", overall: 84 },
      { name: "Coquelin", pos: "CM", overall: 78 },
      { name: "Lo Celso", pos: "AM", overall: 81 },
      { name: "Danjuma", pos: "LW", overall: 80 },
      { name: "Moreno", pos: "RW", overall: 82 }
    ]
  },
  {
    id: "liverpool_8384",
    name: "Liverpool",
    season: "1983-84",
    country: "EN",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-4-2",
    players: [
      { name: "Grobbelaar", pos: "GK", overall: 83 },
      { name: "Neal", pos: "RB", overall: 80 },
      { name: "Lawrenson", pos: "CB", overall: 84 },
      { name: "Hansen", pos: "CB", overall: 88 },
      { name: "Kennedy", pos: "LB", overall: 80 },
      { name: "Lee", pos: "RM", overall: 79 },
      { name: "Whelan", pos: "CM", overall: 79 },
      { name: "Johnston", pos: "CM", overall: 78 },
      { name: "Souness", pos: "LM", overall: 90 },
      { name: "Rush", pos: "ST", overall: 92 },
      { name: "Dalglish", pos: "ST", overall: 94 }
    ]
  },
  {
    id: "liverpool_1819",
    name: "Liverpool",
    season: "2018-19",
    country: "EN",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "Alisson", pos: "GK", overall: 90 },
      { name: "Alexander-Arnold", pos: "RB", overall: 87 },
      { name: "Matip", pos: "CB", overall: 83 },
      { name: "Van Dijk", pos: "CB", overall: 91 },
      { name: "Robertson", pos: "LB", overall: 87 },
      { name: "Henderson", pos: "CM", overall: 82 },
      { name: "Fabinho", pos: "CM", overall: 87 },
      { name: "Wijnaldum", pos: "CM", overall: 84 },
      { name: "Salah", pos: "RW", overall: 92 },
      { name: "Firmino", pos: "ST", overall: 86 },
      { name: "Mané", pos: "LW", overall: 90 }
    ]
  },
  {
    id: "tottenham_1819",
    name: "Tottenham",
    season: "2018-19",
    country: "EN",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-2-3-1",
    players: [
      { name: "Lloris", pos: "GK", overall: 87 },
      { name: "Trippier", pos: "RB", overall: 81 },
      { name: "Alderweireld", pos: "CB", overall: 85 },
      { name: "Vertonghen", pos: "CB", overall: 85 },
      { name: "Rose", pos: "LB", overall: 80 },
      { name: "Dier", pos: "CM", overall: 79 },
      { name: "Winks", pos: "CM", overall: 77 },
      { name: "Eriksen", pos: "AM", overall: 87 },
      { name: "Son", pos: "RW", overall: 87 },
      { name: "Alli", pos: "LW", overall: 82 },
      { name: "Kane", pos: "ST", overall: 91 }
    ]
  },
  {
    id: "manutd_9899",
    name: "Manchester United",
    season: "1998-99",
    country: "EN",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-4-2",
    players: [
      { name: "Schmeichel", pos: "GK", overall: 92 },
      { name: "G. Neville", pos: "RB", overall: 82 },
      { name: "Stam", pos: "CB", overall: 88 },
      { name: "Johnsen", pos: "CB", overall: 79 },
      { name: "Irwin", pos: "LB", overall: 83 },
      { name: "Beckham", pos: "RM", overall: 89 },
      { name: "Keane", pos: "CM", overall: 92 },
      { name: "Butt", pos: "CM", overall: 80 },
      { name: "Giggs", pos: "LM", overall: 91 },
      { name: "Yorke", pos: "ST", overall: 85 },
      { name: "Cole", pos: "ST", overall: 85 }
    ]
  },
  {
    id: "manutd_0708",
    name: "Manchester United",
    season: "2007-08",
    country: "EN",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-4-2",
    players: [
      { name: "Van der Sar", pos: "GK", overall: 88 },
      { name: "G. Neville", pos: "RB", overall: 79 },
      { name: "Ferdinand", pos: "CB", overall: 90 },
      { name: "Vidić", pos: "CB", overall: 90 },
      { name: "Evra", pos: "LB", overall: 84 },
      { name: "Hargreaves", pos: "CM", overall: 80 },
      { name: "Scholes", pos: "CM", overall: 90 },
      { name: "Anderson", pos: "CM", overall: 77 },
      { name: "Rooney", pos: "AM", overall: 91 },
      { name: "Tevez", pos: "ST", overall: 88 },
      { name: "Ronaldo", pos: "RW", overall: 96 }
    ]
  },
  {
    id: "chelsea_1112",
    name: "Chelsea",
    season: "2011-12",
    country: "EN",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "Cech", pos: "GK", overall: 90 },
      { name: "Bosingwa", pos: "RB", overall: 78 },
      { name: "Terry", pos: "CB", overall: 89 },
      { name: "Cahill", pos: "CB", overall: 83 },
      { name: "Cole", pos: "LB", overall: 88 },
      { name: "Ramires", pos: "CM", overall: 79 },
      { name: "Mikel", pos: "CM", overall: 77 },
      { name: "Lampard", pos: "CM", overall: 90 },
      { name: "Mata", pos: "RW", overall: 87 },
      { name: "Drogba", pos: "ST", overall: 91 },
      { name: "Kalou", pos: "LW", overall: 75 }
    ]
  },
  {
    id: "chelsea_2021",
    name: "Chelsea",
    season: "2020-21",
    country: "EN",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "3-4-3",
    players: [
      { name: "Mendy", pos: "GK", overall: 87 },
      { name: "Azpilicueta", pos: "CB", overall: 83 },
      { name: "Thiago Silva", pos: "CB", overall: 88 },
      { name: "Rüdiger", pos: "CB", overall: 84 },
      { name: "James", pos: "RWB", overall: 83 },
      { name: "Kanté", pos: "CM", overall: 90 },
      { name: "Jorginho", pos: "CM", overall: 84 },
      { name: "Chilwell", pos: "LWB", overall: 82 },
      { name: "Mount", pos: "AM", overall: 83 },
      { name: "Werner", pos: "ST", overall: 82 },
      { name: "Havertz", pos: "ST", overall: 84 }
    ]
  },
  {
    id: "arsenal_0506",
    name: "Arsenal",
    season: "2005-06",
    country: "EN",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-4-2",
    players: [
      { name: "Lehmann", pos: "GK", overall: 84 },
      { name: "Lauren", pos: "RB", overall: 79 },
      { name: "Touré", pos: "CB", overall: 84 },
      { name: "Campbell", pos: "CB", overall: 83 },
      { name: "Cole", pos: "LB", overall: 87 },
      { name: "Ljungberg", pos: "RM", overall: 83 },
      { name: "Fàbregas", pos: "CM", overall: 86 },
      { name: "Gilberto", pos: "CM", overall: 81 },
      { name: "Pires", pos: "LM", overall: 87 },
      { name: "Bergkamp", pos: "ST", overall: 89 },
      { name: "Henry", pos: "ST", overall: 95 }
    ]
  },
  {
    id: "arsenal_2526",
    name: "Arsenal",
    season: "2025-26",
    country: "EN",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "Raya", pos: "GK", overall: 86 },
      { name: "Ben White", pos: "RB", overall: 84 },
      { name: "Saliba", pos: "CB", overall: 89 },
      { name: "Gabriel", pos: "CB", overall: 87 },
      { name: "Zinchenko", pos: "LB", overall: 82 },
      { name: "Partey", pos: "CM", overall: 83 },
      { name: "Ødegaard", pos: "CM", overall: 90 },
      { name: "Rice", pos: "CM", overall: 89 },
      { name: "Saka", pos: "RW", overall: 91 },
      { name: "Jesus", pos: "ST", overall: 83 },
      { name: "Martinelli", pos: "LW", overall: 86 }
    ]
  },
  {
    id: "mancity_2223",
    name: "Manchester City",
    season: "2022-23",
    country: "EN",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "Ederson", pos: "GK", overall: 89 },
      { name: "Walker", pos: "RB", overall: 85 },
      { name: "Akanji", pos: "CB", overall: 83 },
      { name: "Rúben Dias", pos: "CB", overall: 89 },
      { name: "Gvardiol", pos: "LB", overall: 85 },
      { name: "Rodri", pos: "CM", overall: 93 },
      { name: "De Bruyne", pos: "CM", overall: 93 },
      { name: "Bernardo Silva", pos: "CM", overall: 88 },
      { name: "Mahrez", pos: "RW", overall: 86 },
      { name: "Haaland", pos: "ST", overall: 94 },
      { name: "Grealish", pos: "LW", overall: 83 }
    ]
  },
  {
    id: "mancity_2021",
    name: "Manchester City",
    season: "2020-21",
    country: "EN",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "Ederson", pos: "GK", overall: 88 },
      { name: "Walker", pos: "RB", overall: 85 },
      { name: "Stones", pos: "CB", overall: 83 },
      { name: "Rúben Dias", pos: "CB", overall: 88 },
      { name: "Cancelo", pos: "LB", overall: 86 },
      { name: "Gündoğan", pos: "CM", overall: 86 },
      { name: "Rodri", pos: "CM", overall: 88 },
      { name: "De Bruyne", pos: "CM", overall: 93 },
      { name: "Mahrez", pos: "RW", overall: 86 },
      { name: "Gabriel Jesus", pos: "ST", overall: 82 },
      { name: "Sterling", pos: "LW", overall: 85 }
    ]
  },
  {
    id: "nottingham_7980",
    name: "Nottingham Forest",
    season: "1979-80",
    country: "EN",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-4-2",
    players: [
      { name: "Shilton", pos: "GK", overall: 91 },
      { name: "Anderson", pos: "RB", overall: 80 },
      { name: "Lloyd", pos: "CB", overall: 83 },
      { name: "Burns", pos: "CB", overall: 82 },
      { name: "Gray", pos: "LB", overall: 78 },
      { name: "O'Neill", pos: "RM", overall: 81 },
      { name: "Bowyer", pos: "CM", overall: 83 },
      { name: "McGovern", pos: "CM", overall: 79 },
      { name: "Robertson", pos: "LM", overall: 85 },
      { name: "Francis", pos: "ST", overall: 83 },
      { name: "Birtles", pos: "ST", overall: 78 }
    ]
  },
  {
    id: "psg_2425",
    name: "PSG",
    season: "2024-25",
    country: "FR",
    flag: "🇫🇷",
    formation: "4-3-3",
    players: [
      { name: "Donnarumma", pos: "GK", overall: 89 },
      { name: "Hakimi", pos: "RB", overall: 88 },
      { name: "Marquinhos", pos: "CB", overall: 88 },
      { name: "Pacho", pos: "CB", overall: 82 },
      { name: "Mendes", pos: "LB", overall: 86 },
      { name: "Vitinha", pos: "CM", overall: 85 },
      { name: "Zaire-Emery", pos: "CM", overall: 83 },
      { name: "Ruiz", pos: "CM", overall: 82 },
      { name: "Dembélé", pos: "RW", overall: 88 },
      { name: "Kolo Muani", pos: "ST", overall: 83 },
      { name: "Barcola", pos: "LW", overall: 84 }
    ]
  },
  {
    id: "psg_1920",
    name: "PSG",
    season: "2019-20",
    country: "FR",
    flag: "🇫🇷",
    formation: "4-3-3",
    players: [
      { name: "Navas", pos: "GK", overall: 88 },
      { name: "Florenzi", pos: "RB", overall: 80 },
      { name: "Thiago Silva", pos: "CB", overall: 87 },
      { name: "Kimpembe", pos: "CB", overall: 83 },
      { name: "Bernat", pos: "LB", overall: 79 },
      { name: "Marquinhos", pos: "CM", overall: 86 },
      { name: "Verratti", pos: "CM", overall: 88 },
      { name: "Paredes", pos: "CM", overall: 81 },
      { name: "Di María", pos: "RW", overall: 86 },
      { name: "Mbappé", pos: "ST", overall: 94 },
      { name: "Neymar", pos: "LW", overall: 92 }
    ]
  },
  {
    id: "psg_2526",
    name: "PSG",
    season: "2025-26",
    country: "FR",
    flag: "🇫🇷",
    formation: "4-3-3",
    players: [
      { name: "Donnarumma", pos: "GK", overall: 89 },
      { name: "Hakimi", pos: "RB", overall: 87 },
      { name: "Marquinhos", pos: "CB", overall: 86 },
      { name: "Pacho", pos: "CB", overall: 84 },
      { name: "Mendes", pos: "LB", overall: 85 },
      { name: "Vitinha", pos: "CM", overall: 86 },
      { name: "Zaire-Emery", pos: "CM", overall: 85 },
      { name: "Ruiz", pos: "CM", overall: 83 },
      { name: "Dembélé", pos: "RW", overall: 89 },
      { name: "Ramos", pos: "ST", overall: 84 },
      { name: "Barcola", pos: "LW", overall: 86 }
    ]
  },
  {
    id: "marseille_9293",
    name: "Olympique Marseille",
    season: "1992-93",
    country: "FR",
    flag: "🇫🇷",
    formation: "4-4-2",
    players: [
      { name: "Barthez", pos: "GK", overall: 88 },
      { name: "Angloma", pos: "RB", overall: 79 },
      { name: "Desailly", pos: "CB", overall: 88 },
      { name: "Boli", pos: "CB", overall: 83 },
      { name: "Di Meco", pos: "LB", overall: 79 },
      { name: "Deschamps", pos: "CM", overall: 86 },
      { name: "Sauzée", pos: "CM", overall: 81 },
      { name: "Eydelie", pos: "CM", overall: 76 },
      { name: "Völler", pos: "RW", overall: 86 },
      { name: "Boksic", pos: "ST", overall: 84 },
      { name: "Cantona", pos: "LW", overall: 89 }
    ]
  },
  {
    id: "lyon_0910",
    name: "Olympique Lyonnais",
    season: "2009-10",
    country: "FR",
    flag: "🇫🇷",
    formation: "4-4-2",
    players: [
      { name: "Lloris", pos: "GK", overall: 86 },
      { name: "Réveillère", pos: "RB", overall: 78 },
      { name: "Cris", pos: "CB", overall: 82 },
      { name: "Boumsong", pos: "CB", overall: 79 },
      { name: "Cissokho", pos: "LB", overall: 77 },
      { name: "Källström", pos: "CM", overall: 80 },
      { name: "Gonalons", pos: "CM", overall: 78 },
      { name: "Makoun", pos: "CM", overall: 79 },
      { name: "Malouda", pos: "LW", overall: 83 },
      { name: "Lisandro", pos: "ST", overall: 80 },
      { name: "Benzema", pos: "ST", overall: 87 }
    ]
  },
  {
    id: "monaco_0304",
    name: "AS Monaco",
    season: "2003-04",
    country: "FR",
    flag: "🇫🇷",
    formation: "4-4-2",
    players: [
      { name: "Roma", pos: "GK", overall: 82 },
      { name: "Ibarra", pos: "RB", overall: 76 },
      { name: "Squillaci", pos: "CB", overall: 79 },
      { name: "Zikos", pos: "CB", overall: 77 },
      { name: "Évra", pos: "LB", overall: 82 },
      { name: "Givet", pos: "CM", overall: 76 },
      { name: "Bernardi", pos: "CM", overall: 78 },
      { name: "Rothen", pos: "LW", overall: 80 },
      { name: "Morientes", pos: "RW", overall: 82 },
      { name: "Nonda", pos: "ST", overall: 79 },
      { name: "Chevantón", pos: "ST", overall: 78 }
    ]
  },
  {
    id: "lille_2122",
    name: "Lille",
    season: "2021-22",
    country: "FR",
    flag: "🇫🇷",
    formation: "4-4-2",
    players: [
      { name: "Grbić", pos: "GK", overall: 79 },
      { name: "Çelik", pos: "RB", overall: 79 },
      { name: "Fonte", pos: "CB", overall: 80 },
      { name: "Botman", pos: "CB", overall: 80 },
      { name: "Gudmundsson", pos: "LB", overall: 76 },
      { name: "André", pos: "CM", overall: 79 },
      { name: "Renato Sanches", pos: "CM", overall: 81 },
      { name: "Ikoné", pos: "RM", overall: 79 },
      { name: "Bamba", pos: "LM", overall: 78 },
      { name: "David", pos: "ST", overall: 82 },
      { name: "Yilmaz", pos: "ST", overall: 80 }
    ]
  },
  {
    id: "bordeaux_8485",
    name: "Bordeaux",
    season: "1984-85",
    country: "FR",
    flag: "🇫🇷",
    formation: "4-4-2",
    players: [
      { name: "Dropsy", pos: "GK", overall: 78 },
      { name: "Battiston", pos: "RB", overall: 82 },
      { name: "Thouvenel", pos: "CB", overall: 77 },
      { name: "Marius Trésor", pos: "CB", overall: 83 },
      { name: "Lizarazu", pos: "LB", overall: 82 },
      { name: "Tigana", pos: "CM", overall: 88 },
      { name: "Girard", pos: "CM", overall: 78 },
      { name: "Lacombe", pos: "CM", overall: 79 },
      { name: "Zidane", pos: "AM", overall: 77 },
      { name: "Giresse", pos: "AM", overall: 86 },
      { name: "Rocheteau", pos: "ST", overall: 83 }
    ]
  },
  {
    id: "milan_8889",
    name: "AC Milan",
    season: "1988-89",
    country: "IT",
    flag: "🇮🇹",
    formation: "4-4-2",
    players: [
      { name: "G. Galli", pos: "GK", overall: 84 },
      { name: "Tassotti", pos: "RB", overall: 82 },
      { name: "Baresi", pos: "CB", overall: 96 },
      { name: "Costacurta", pos: "CB", overall: 88 },
      { name: "Maldini", pos: "LB", overall: 94 },
      { name: "Donadoni", pos: "RM", overall: 83 },
      { name: "Ancelotti", pos: "CM", overall: 84 },
      { name: "Evani", pos: "LM", overall: 80 },
      { name: "Gullit", pos: "AM", overall: 96 },
      { name: "Van Basten", pos: "ST", overall: 98 },
      { name: "Rijkaard", pos: "CM", overall: 91 }
    ]
  },
  {
    id: "milan_0607",
    name: "AC Milan",
    season: "2006-07",
    country: "IT",
    flag: "🇮🇹",
    formation: "4-4-2",
    players: [
      { name: "Dida", pos: "GK", overall: 86 },
      { name: "Oddo", pos: "RB", overall: 79 },
      { name: "Nesta", pos: "CB", overall: 91 },
      { name: "Maldini", pos: "CB", overall: 88 },
      { name: "Jankulovski", pos: "LB", overall: 80 },
      { name: "Gattuso", pos: "CM", overall: 84 },
      { name: "Pirlo", pos: "CM", overall: 92 },
      { name: "Seedorf", pos: "CM", overall: 86 },
      { name: "Kaká", pos: "AM", overall: 95 },
      { name: "Inzaghi", pos: "ST", overall: 83 },
      { name: "Gilardino", pos: "ST", overall: 80 }
    ]
  },
  {
    id: "inter_0910",
    name: "Inter Milan",
    season: "2009-10",
    country: "IT",
    flag: "🇮🇹",
    formation: "4-2-3-1",
    players: [
      { name: "Julio César", pos: "GK", overall: 88 },
      { name: "Maicon", pos: "RB", overall: 90 },
      { name: "Lucio", pos: "CB", overall: 86 },
      { name: "Samuel", pos: "CB", overall: 84 },
      { name: "Zanetti", pos: "LB", overall: 85 },
      { name: "Cambiasso", pos: "CM", overall: 87 },
      { name: "Stankovic", pos: "CM", overall: 82 },
      { name: "Eto'o", pos: "RW", overall: 88 },
      { name: "Sneijder", pos: "AM", overall: 90 },
      { name: "Pandev", pos: "LW", overall: 79 },
      { name: "Milito", pos: "ST", overall: 87 }
    ]
  },
  {
    id: "inter_6364",
    name: "Inter Milan",
    season: "1963-64",
    country: "IT",
    flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Sarti", pos: "GK", overall: 85 },
      { name: "Burgnich", pos: "RB", overall: 83 },
      { name: "Guarneri", pos: "CB", overall: 82 },
      { name: "Picchi", pos: "CB", overall: 84 },
      { name: "Facchetti", pos: "LB", overall: 90 },
      { name: "Bedin", pos: "CM", overall: 79 },
      { name: "Tagnin", pos: "CM", overall: 77 },
      { name: "Mazzola", pos: "AM", overall: 90 },
      { name: "Jair", pos: "RW", overall: 83 },
      { name: "Milani", pos: "ST", overall: 79 },
      { name: "Suárez Míguez", pos: "AM", overall: 88 }
    ]
  },
  {
    id: "juventus_9697",
    name: "Juventus",
    season: "1996-97",
    country: "IT",
    flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Peruzzi", pos: "GK", overall: 85 },
      { name: "Torricelli", pos: "RB", overall: 79 },
      { name: "Ferrara", pos: "CB", overall: 85 },
      { name: "Montero", pos: "CB", overall: 84 },
      { name: "Pessotto", pos: "LB", overall: 79 },
      { name: "Deschamps", pos: "CM", overall: 85 },
      { name: "Zidane", pos: "CM", overall: 93 },
      { name: "Di Livio", pos: "CM", overall: 79 },
      { name: "Del Piero", pos: "AM", overall: 92 },
      { name: "Vieri", pos: "ST", overall: 88 },
      { name: "Inzaghi", pos: "ST", overall: 84 }
    ]
  },
  {
    id: "roma_1718",
    name: "Roma",
    season: "2017-18",
    country: "IT",
    flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Alisson", pos: "GK", overall: 88 },
      { name: "Florenzi", pos: "RB", overall: 81 },
      { name: "Fazio", pos: "CB", overall: 80 },
      { name: "Manolas", pos: "CB", overall: 83 },
      { name: "Kolarov", pos: "LB", overall: 82 },
      { name: "De Rossi", pos: "CM", overall: 84 },
      { name: "Strootman", pos: "CM", overall: 81 },
      { name: "Nainggolan", pos: "CM", overall: 86 },
      { name: "Salah", pos: "RW", overall: 88 },
      { name: "Dzeko", pos: "ST", overall: 85 },
      { name: "El Shaarawy", pos: "LW", overall: 80 }
    ]
  },
  {
    id: "napoli_2223",
    name: "Napoli",
    season: "2022-23",
    country: "IT",
    flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Meret", pos: "GK", overall: 83 },
      { name: "Di Lorenzo", pos: "RB", overall: 86 },
      { name: "Rrahmani", pos: "CB", overall: 81 },
      { name: "Kim Min-jae", pos: "CB", overall: 85 },
      { name: "Mario Rui", pos: "LB", overall: 79 },
      { name: "Lobotka", pos: "CM", overall: 85 },
      { name: "Zielinski", pos: "CM", overall: 84 },
      { name: "Anguissa", pos: "CM", overall: 85 },
      { name: "Politano", pos: "RW", overall: 80 },
      { name: "Osimhen", pos: "ST", overall: 90 },
      { name: "Kvaratskhelia", pos: "LW", overall: 88 }
    ]
  },
  {
    id: "lazio_9900",
    name: "Lazio",
    season: "1999-2000",
    country: "IT",
    flag: "🇮🇹",
    formation: "4-4-2",
    players: [
      { name: "Marchegiani", pos: "GK", overall: 83 },
      { name: "Pancaro", pos: "RB", overall: 78 },
      { name: "Negro", pos: "CB", overall: 79 },
      { name: "Mihajlovic", pos: "CB", overall: 83 },
      { name: "Favalli", pos: "LB", overall: 79 },
      { name: "Almeyda", pos: "CM", overall: 80 },
      { name: "Nedved", pos: "CM", overall: 89 },
      { name: "Di Canio", pos: "LW", overall: 84 },
      { name: "Stankovic", pos: "RM", overall: 79 },
      { name: "Salas", pos: "ST", overall: 82 },
      { name: "Inzaghi", pos: "ST", overall: 85 }
    ]
  },
  {
    id: "fiorentina_5657",
    name: "Fiorentina",
    season: "1956-57",
    country: "IT",
    flag: "🇮🇹",
    formation: "4-4-2",
    players: [
      { name: "Sarti", pos: "GK", overall: 82 },
      { name: "Magnini", pos: "RB", overall: 76 },
      { name: "Cervato", pos: "CB", overall: 80 },
      { name: "Orzan", pos: "CB", overall: 78 },
      { name: "Gonfiantini", pos: "LB", overall: 75 },
      { name: "Gratton", pos: "CM", overall: 77 },
      { name: "Chiappella", pos: "CM", overall: 79 },
      { name: "Montuori", pos: "RM", overall: 80 },
      { name: "Virgili", pos: "LM", overall: 77 },
      { name: "Julinho", pos: "RW", overall: 87 },
      { name: "Hamrin", pos: "ST", overall: 88 }
    ]
  },
  {
    id: "bayern_7374",
    name: "Bayern München",
    season: "1973-74",
    country: "DE",
    flag: "🇩🇪",
    formation: "4-4-2",
    players: [
      { name: "Maier", pos: "GK", overall: 92 },
      { name: "Hansen", pos: "RB", overall: 80 },
      { name: "Beckenbauer", pos: "CB", overall: 97 },
      { name: "Schwarzenbeck", pos: "CB", overall: 83 },
      { name: "Breitner", pos: "LB", overall: 87 },
      { name: "Roth", pos: "CM", overall: 79 },
      { name: "Zobel", pos: "CM", overall: 78 },
      { name: "Hoeness", pos: "RM", overall: 84 },
      { name: "Kapellmann", pos: "LM", overall: 77 },
      { name: "Müller", pos: "ST", overall: 97 },
      { name: "Torstensson", pos: "ST", overall: 77 }
    ]
  },
  {
    id: "bayern_1920",
    name: "Bayern München",
    season: "2019-20",
    country: "DE",
    flag: "🇩🇪",
    formation: "4-2-3-1",
    players: [
      { name: "Neuer", pos: "GK", overall: 91 },
      { name: "Pavard", pos: "RB", overall: 83 },
      { name: "Boateng", pos: "CB", overall: 86 },
      { name: "Alaba", pos: "CB", overall: 87 },
      { name: "Davies", pos: "LB", overall: 87 },
      { name: "Kimmich", pos: "CM", overall: 91 },
      { name: "Goretzka", pos: "CM", overall: 87 },
      { name: "Gnabry", pos: "RW", overall: 86 },
      { name: "Müller", pos: "AM", overall: 88 },
      { name: "Coman", pos: "LW", overall: 85 },
      { name: "Lewandowski", pos: "ST", overall: 95 }
    ]
  },
  {
    id: "bayern_2526",
    name: "Bayern München",
    season: "2025-26",
    country: "DE",
    flag: "🇩🇪",
    formation: "4-2-3-1",
    players: [
      { name: "Neuer", pos: "GK", overall: 87 },
      { name: "Kimmich", pos: "RB", overall: 89 },
      { name: "Upamecano", pos: "CB", overall: 85 },
      { name: "Kim Min-jae", pos: "CB", overall: 86 },
      { name: "Davies", pos: "LB", overall: 88 },
      { name: "Goretzka", pos: "CM", overall: 85 },
      { name: "Pavlovic", pos: "CM", overall: 83 },
      { name: "Gnabry", pos: "RW", overall: 84 },
      { name: "Müller", pos: "AM", overall: 85 },
      { name: "Sané", pos: "LW", overall: 86 },
      { name: "Kane", pos: "ST", overall: 91 }
    ]
  },
  {
    id: "bayern_0001",
    name: "Bayern München",
    season: "2000-01",
    country: "DE",
    flag: "🇩🇪",
    formation: "3-5-2",
    players: [
      { name: "Kahn", pos: "GK", overall: 93 },
      { name: "Sagnol", pos: "CB", overall: 80 },
      { name: "Linke", pos: "CB", overall: 81 },
      { name: "Kuffour", pos: "CB", overall: 80 },
      { name: "Lizarazu", pos: "LWB", overall: 84 },
      { name: "Hargreaves", pos: "CM", overall: 79 },
      { name: "Jeremies", pos: "CM", overall: 81 },
      { name: "Effenberg", pos: "CM", overall: 89 },
      { name: "Pizarro", pos: "RWB", overall: 82 },
      { name: "Élber", pos: "ST", overall: 85 },
      { name: "Jancker", pos: "ST", overall: 78 }
    ]
  },
  {
    id: "dortmund_9697",
    name: "Borussia Dortmund",
    season: "1996-97",
    country: "DE",
    flag: "🇩🇪",
    formation: "3-5-2",
    players: [
      { name: "Klos", pos: "GK", overall: 82 },
      { name: "Reuter", pos: "CB", overall: 81 },
      { name: "Kohler", pos: "CB", overall: 84 },
      { name: "Sammer", pos: "CB", overall: 90 },
      { name: "Julio César", pos: "LWB", overall: 81 },
      { name: "Lambert", pos: "CM", overall: 77 },
      { name: "Zorc", pos: "CM", overall: 83 },
      { name: "Freund", pos: "CM", overall: 79 },
      { name: "Paulo Sousa", pos: "RWB", overall: 80 },
      { name: "Riedle", pos: "ST", overall: 82 },
      { name: "Herrlich", pos: "ST", overall: 80 }
    ]
  },
  {
    id: "dortmund_1213",
    name: "Borussia Dortmund",
    season: "2012-13",
    country: "DE",
    flag: "🇩🇪",
    formation: "4-2-3-1",
    players: [
      { name: "Weidenfeller", pos: "GK", overall: 83 },
      { name: "Piszczek", pos: "RB", overall: 83 },
      { name: "Subotic", pos: "CB", overall: 83 },
      { name: "Hummels", pos: "CB", overall: 88 },
      { name: "Schmelzer", pos: "LB", overall: 81 },
      { name: "Kehl", pos: "CM", overall: 79 },
      { name: "Bender", pos: "CM", overall: 80 },
      { name: "Götze", pos: "AM", overall: 88 },
      { name: "Lewandowski", pos: "ST", overall: 88 },
      { name: "Reus", pos: "LW", overall: 88 },
      { name: "Mkhitaryan", pos: "RW", overall: 83 }
    ]
  },
  {
    id: "dortmund_2324",
    name: "Borussia Dortmund",
    season: "2023-24",
    country: "DE",
    flag: "🇩🇪",
    formation: "4-2-3-1",
    players: [
      { name: "Kobel", pos: "GK", overall: 85 },
      { name: "Ryerson", pos: "RB", overall: 78 },
      { name: "Hummels", pos: "CB", overall: 83 },
      { name: "Schlotterbeck", pos: "CB", overall: 82 },
      { name: "Maatsen", pos: "LB", overall: 80 },
      { name: "Can", pos: "CM", overall: 82 },
      { name: "Sabitzer", pos: "CM", overall: 82 },
      { name: "Brandt", pos: "AM", overall: 82 },
      { name: "Sancho", pos: "RW", overall: 82 },
      { name: "Adeyemi", pos: "LW", overall: 81 },
      { name: "Füllkrug", pos: "ST", overall: 82 }
    ]
  },
  {
    id: "leverkusen_0102",
    name: "Bayer Leverkusen",
    season: "2001-02",
    country: "DE",
    flag: "🇩🇪",
    formation: "4-4-2",
    players: [
      { name: "Butt", pos: "GK", overall: 82 },
      { name: "Zivkovic", pos: "RB", overall: 78 },
      { name: "Nowotny", pos: "CB", overall: 81 },
      { name: "Lucio", pos: "CB", overall: 85 },
      { name: "Placente", pos: "LB", overall: 77 },
      { name: "Ramelow", pos: "CM", overall: 82 },
      { name: "Ballack", pos: "CM", overall: 91 },
      { name: "Schneider", pos: "CM", overall: 83 },
      { name: "Ze Roberto", pos: "LW", overall: 83 },
      { name: "Neuville", pos: "ST", overall: 79 },
      { name: "Berbatov", pos: "ST", overall: 82 }
    ]
  },
  {
    id: "hamburg_8283",
    name: "Hamburgo SV",
    season: "1982-83",
    country: "DE",
    flag: "🇩🇪",
    formation: "4-4-2",
    players: [
      { name: "Stein", pos: "GK", overall: 82 },
      { name: "Kaltz", pos: "RB", overall: 85 },
      { name: "Jakobs", pos: "CB", overall: 79 },
      { name: "Hieronymus", pos: "CB", overall: 77 },
      { name: "Groh", pos: "LB", overall: 76 },
      { name: "Rolff", pos: "CM", overall: 79 },
      { name: "Schröder", pos: "CM", overall: 78 },
      { name: "Milewski", pos: "RM", overall: 76 },
      { name: "Hrubesch", pos: "ST", overall: 84 },
      { name: "Magath", pos: "AM", overall: 86 },
      { name: "Bastrup", pos: "LW", overall: 77 }
    ]
  },
  {
    id: "ajax_7172",
    name: "Ajax",
    season: "1971-72",
    country: "NL",
    flag: "🇳🇱",
    formation: "4-3-3",
    players: [
      { name: "Stuy", pos: "GK", overall: 83 },
      { name: "Suurbier", pos: "RB", overall: 83 },
      { name: "Blankenburg", pos: "CB", overall: 81 },
      { name: "Hulshoff", pos: "CB", overall: 82 },
      { name: "Krol", pos: "LB", overall: 87 },
      { name: "Neeskens", pos: "CM", overall: 91 },
      { name: "Haan", pos: "CM", overall: 83 },
      { name: "Mühren", pos: "CM", overall: 83 },
      { name: "Swart", pos: "RW", overall: 81 },
      { name: "Cruyff", pos: "ST", overall: 98 },
      { name: "Keizer", pos: "LW", overall: 83 }
    ]
  },
  {
    id: "ajax_1819",
    name: "Ajax",
    season: "2018-19",
    country: "NL",
    flag: "🇳🇱",
    formation: "4-3-3",
    players: [
      { name: "Onana", pos: "GK", overall: 83 },
      { name: "Mazraoui", pos: "RB", overall: 80 },
      { name: "De Ligt", pos: "CB", overall: 85 },
      { name: "Blind", pos: "CB", overall: 81 },
      { name: "Tagliafico", pos: "LB", overall: 82 },
      { name: "Schöne", pos: "CM", overall: 79 },
      { name: "De Jong", pos: "CM", overall: 86 },
      { name: "Van de Beek", pos: "CM", overall: 82 },
      { name: "Ziyech", pos: "RW", overall: 83 },
      { name: "Tadic", pos: "ST", overall: 86 },
      { name: "Neres", pos: "LW", overall: 80 }
    ]
  },
  {
    id: "psv_8788",
    name: "PSV",
    season: "1987-88",
    country: "NL",
    flag: "🇳🇱",
    formation: "4-4-2",
    players: [
      { name: "Van Breukelen", pos: "GK", overall: 85 },
      { name: "Gerets", pos: "RB", overall: 82 },
      { name: "Koeman", pos: "CB", overall: 88 },
      { name: "Heintze", pos: "CB", overall: 78 },
      { name: "Van Aerle", pos: "LB", overall: 78 },
      { name: "Vanenburg", pos: "RM", overall: 80 },
      { name: "Lerby", pos: "CM", overall: 82 },
      { name: "Nielsen", pos: "CM", overall: 79 },
      { name: "Kieft", pos: "LM", overall: 79 },
      { name: "Gullit", pos: "AM", overall: 95 },
      { name: "Wijnstekers", pos: "ST", overall: 75 }
    ]
  },
  {
    id: "feyenoord_6970",
    name: "Feyenoord",
    season: "1969-70",
    country: "NL",
    flag: "🇳🇱",
    formation: "4-4-2",
    players: [
      { name: "Graafland", pos: "GK", overall: 82 },
      { name: "Romeijn", pos: "RB", overall: 76 },
      { name: "Laseroms", pos: "CB", overall: 79 },
      { name: "Boogerd", pos: "CB", overall: 78 },
      { name: "Van Duivenbode", pos: "LB", overall: 77 },
      { name: "Hasil", pos: "CM", overall: 79 },
      { name: "Jansen", pos: "CM", overall: 85 },
      { name: "Van Hanegem", pos: "AM", overall: 89 },
      { name: "Kindvall", pos: "ST", overall: 82 },
      { name: "Moulijn", pos: "LW", overall: 85 },
      { name: "Israel", pos: "RW", overall: 79 }
    ]
  },
  {
    id: "porto_0304",
    name: "Porto",
    season: "2003-04",
    country: "PT",
    flag: "🇵🇹",
    formation: "4-4-2",
    players: [
      { name: "Vítor Baía", pos: "GK", overall: 85 },
      { name: "Paulo Ferreira", pos: "RB", overall: 82 },
      { name: "Ricardo Costa", pos: "CB", overall: 78 },
      { name: "Jorge Costa", pos: "CB", overall: 79 },
      { name: "Nuno Valente", pos: "LB", overall: 81 },
      { name: "Costinha", pos: "CM", overall: 80 },
      { name: "Maniche", pos: "CM", overall: 85 },
      { name: "Derlei", pos: "RM", overall: 78 },
      { name: "Deco", pos: "AM", overall: 88 },
      { name: "Dmitri Alenichev", pos: "LM", overall: 80 },
      { name: "McCarthy", pos: "ST", overall: 79 }
    ]
  },
  {
    id: "benfica_6162",
    name: "Benfica",
    season: "1961-62",
    country: "PT",
    flag: "🇵🇹",
    formation: "4-4-2",
    players: [
      { name: "Costa Pereira", pos: "GK", overall: 83 },
      { name: "João", pos: "RB", overall: 77 },
      { name: "Germano", pos: "CB", overall: 82 },
      { name: "Raul", pos: "CB", overall: 78 },
      { name: "Cruz", pos: "LB", overall: 77 },
      { name: "Cavém", pos: "CM", overall: 78 },
      { name: "Augusto", pos: "CM", overall: 80 },
      { name: "Coluna", pos: "AM", overall: 88 },
      { name: "Simões", pos: "RW", overall: 81 },
      { name: "Águas", pos: "ST", overall: 85 },
      { name: "Eusébio", pos: "LW", overall: 96 }
    ]
  },
  {
    id: "celtic_6667",
    name: "Celtic",
    season: "1966-67",
    country: "SC",
    flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    formation: "4-4-2",
    players: [
      { name: "Simpson", pos: "GK", overall: 82 },
      { name: "Craig", pos: "RB", overall: 78 },
      { name: "McNeill", pos: "CB", overall: 85 },
      { name: "Gemmell", pos: "CB", overall: 80 },
      { name: "O'Neill", pos: "LB", overall: 79 },
      { name: "Murdoch", pos: "CM", overall: 82 },
      { name: "Auld", pos: "CM", overall: 80 },
      { name: "Johnstone", pos: "RW", overall: 87 },
      { name: "Wallace", pos: "ST", overall: 80 },
      { name: "Chalmers", pos: "ST", overall: 79 },
      { name: "Lennox", pos: "LW", overall: 79 }
    ]
  },
  {
    id: "aston_villa_8182",
    name: "Aston Villa",
    season: "1981-82",
    country: "EN",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-4-2",
    players: [
      { name: "Rimmer", pos: "GK", overall: 82 },
      { name: "Swain", pos: "RB", overall: 80 },
      { name: "McNaught", pos: "CB", overall: 83 },
      { name: "Evans", pos: "CB", overall: 80 },
      { name: "Gibson", pos: "LB", overall: 79 },
      { name: "Bremner", pos: "CM", overall: 81 },
      { name: "Mortimer", pos: "CM", overall: 83 },
      { name: "Cowans", pos: "CM", overall: 85 },
      { name: "Morley", pos: "RM", overall: 84 },
      { name: "Withe", pos: "ST", overall: 86 },
      { name: "Shaw", pos: "LM", overall: 82 }
    ]
  },
  {
    id: "steaua_8586",
    name: "Steaua Bucareste",
    season: "1985-86",
    country: "RO",
    flag: "🇷🇴",
    formation: "4-4-2",
    players: [
      { name: "Duckadam", pos: "GK", overall: 87 },
      { name: "Iovan", pos: "RB", overall: 82 },
      { name: "Bumbescu", pos: "CB", overall: 83 },
      { name: "Belodedici", pos: "CB", overall: 88 },
      { name: "Barbulescu", pos: "LB", overall: 81 },
      { name: "Boloni", pos: "CM", overall: 85 },
      { name: "Majearu", pos: "CM", overall: 82 },
      { name: "Stoica", pos: "CM", overall: 82 },
      { name: "Balint", pos: "RM", overall: 83 },
      { name: "Piturca", pos: "ST", overall: 88 },
      { name: "Lacatus", pos: "LM", overall: 87 }
    ]
  },
  {
    id: "crvena_zvezda_9091",
    name: "Crvena Zvezda",
    season: "1990-91",
    country: "RS",
    flag: "🇷🇸",
    formation: "4-3-3",
    players: [
      { name: "Stojanovic", pos: "GK", overall: 84 },
      { name: "Marovic", pos: "RB", overall: 82 },
      { name: "Najdoski", pos: "CB", overall: 83 },
      { name: "Belodedici", pos: "CB", overall: 90 },
      { name: "Sabanadzovic", pos: "LB", overall: 81 },
      { name: "Jugovic", pos: "CM", overall: 89 },
      { name: "Stosic", pos: "CM", overall: 82 },
      { name: "Prosinecki", pos: "CM", overall: 94 },
      { name: "Savicevic", pos: "RW", overall: 95 },
      { name: "Pancev", pos: "ST", overall: 92 },
      { name: "Binic", pos: "LW", overall: 83 }
    ]
  },
  {
    id: "dynamo_kyiv_9899",
    name: "Dynamo Kyiv",
    season: "1998-99",
    country: "UA",
    flag: "🇺🇦",
    formation: "4-4-2",
    players: [
      { name: "Shovkovskyi", pos: "GK", overall: 87 },
      { name: "Luzhny", pos: "RB", overall: 85 },
      { name: "Vashchuk", pos: "CB", overall: 84 },
      { name: "Holovko", pos: "CB", overall: 82 },
      { name: "Yeshchenko", pos: "LB", overall: 82 },
      { name: "Husyn", pos: "CM", overall: 83 },
      { name: "Kalitvintsev", pos: "CM", overall: 84 },
      { name: "Khatskevych", pos: "CM", overall: 83 },
      { name: "Rebrov", pos: "RW", overall: 93 },
      { name: "Shevchenko", pos: "ST", overall: 97 },
      { name: "Husin", pos: "LW", overall: 80 }
    ]
  },
  {
    id: "leeds_7475",
    name: "Leeds United",
    season: "1974-75",
    country: "EN",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-4-2",
    players: [
      { name: "Stewart", pos: "GK", overall: 82 },
      { name: "Reaney", pos: "RB", overall: 82 },
      { name: "Hunter", pos: "CB", overall: 85 },
      { name: "Madeley", pos: "CB", overall: 84 },
      { name: "Cherry", pos: "LB", overall: 81 },
      { name: "Bremner", pos: "CM", overall: 89 },
      { name: "Giles", pos: "CM", overall: 88 },
      { name: "McKenzie", pos: "CM", overall: 80 },
      { name: "Lorimer", pos: "RM", overall: 86 },
      { name: "Jordan", pos: "ST", overall: 84 },
      { name: "Clarke", pos: "LM", overall: 83 }
    ]
  },
  {
    id: "apoel_1112",
    name: "APOEL Nicosia",
    season: "2011-12",
    country: "CY",
    flag: "🇨🇾",
    formation: "4-2-3-1",
    players: [
      { name: "Waterman", pos: "GK", overall: 80 },
      { name: "Sabbagh", pos: "RB", overall: 78 },
      { name: "Vougrinas", pos: "CB", overall: 78 },
      { name: "Morais", pos: "CB", overall: 80 },
      { name: "Konstantinou", pos: "LB", overall: 77 },
      { name: "Garpozis", pos: "CM", overall: 78 },
      { name: "Aloneftis", pos: "CM", overall: 80 },
      { name: "Charalambidis", pos: "AM", overall: 79 },
      { name: "Efrem", pos: "RM", overall: 80 },
      { name: "De Camargo", pos: "ST", overall: 84 },
      { name: "Ailton", pos: "LM", overall: 79 }
    ]
  },
  {
    id: "saint_etienne_7576",
    name: "Saint-Etienne",
    season: "1975-76",
    country: "FR",
    flag: "🇫🇷",
    formation: "4-3-3",
    players: [
      { name: "Curkovic", pos: "GK", overall: 84 },
      { name: "Janvion", pos: "RB", overall: 82 },
      { name: "Lopez", pos: "CB", overall: 81 },
      { name: "Piazza", pos: "CB", overall: 85 },
      { name: "Repellini", pos: "LB", overall: 80 },
      { name: "Bathenay", pos: "CM", overall: 84 },
      { name: "Larque", pos: "CM", overall: 89 },
      { name: "Synaeghel", pos: "CM", overall: 79 },
      { name: "Santini", pos: "RW", overall: 80 },
      { name: "Rocheteau", pos: "ST", overall: 90 },
      { name: "Revelli", pos: "LW", overall: 84 }
    ]
  },
  {
    id: "maccabi_haifa_2223",
    name: "Maccabi Haifa",
    season: "2022-23",
    country: "IL",
    flag: "🇮🇱",
    formation: "4-2-3-1",
    players: [
      { name: "Cohen", pos: "GK", overall: 78 },
      { name: "Pierrot", pos: "RB", overall: 77 },
      { name: "Goldberg", pos: "CB", overall: 77 },
      { name: "Sapir Bashan", pos: "CB", overall: 77 },
      { name: "Seck", pos: "LB", overall: 77 },
      { name: "David Bohar", pos: "CM", overall: 78 },
      { name: "Cornud", pos: "CM", overall: 77 },
      { name: "Chery", pos: "AM", overall: 82 },
      { name: "Frantzdy Pierrot", pos: "RM", overall: 78 },
      { name: "Aiyegun Tosin", pos: "ST", overall: 79 },
      { name: "Shechter", pos: "LM", overall: 79 }
    ]
  },
  {
    id: "sheriff_tiraspol_2122",
    name: "Sheriff Tiraspol",
    season: "2021-22",
    country: "MD",
    flag: "🇲🇩",
    formation: "4-2-3-1",
    players: [
      { name: "Athanasiadis", pos: "GK", overall: 77 },
      { name: "Cojocaru", pos: "RB", overall: 76 },
      { name: "Gartig", pos: "CB", overall: 76 },
      { name: "Dulanto", pos: "CB", overall: 76 },
      { name: "Radeljic", pos: "LB", overall: 76 },
      { name: "Petrila", pos: "CM", overall: 76 },
      { name: "Castaneda", pos: "CM", overall: 76 },
      { name: "Kolovos", pos: "AM", overall: 77 },
      { name: "Yansane", pos: "RM", overall: 76 },
      { name: "Jakirovic", pos: "ST", overall: 78 },
      { name: "Thill", pos: "LM", overall: 79 }
    ]
  },
  {
    id: "rb_leipzig_1920",
    name: "RB Leipzig",
    season: "2019-20",
    country: "DE",
    flag: "🇩🇪",
    formation: "4-2-3-1",
    players: [
      { name: "Gulacsi", pos: "GK", overall: 87 },
      { name: "Klostermann", pos: "RB", overall: 85 },
      { name: "Upamecano", pos: "CB", overall: 87 },
      { name: "Konate", pos: "CB", overall: 88 },
      { name: "Angelino", pos: "LB", overall: 86 },
      { name: "Kampl", pos: "CM", overall: 85 },
      { name: "Laimer", pos: "CM", overall: 84 },
      { name: "Forsberg", pos: "AM", overall: 87 },
      { name: "Sabitzer", pos: "RM", overall: 87 },
      { name: "Werner", pos: "ST", overall: 92 },
      { name: "Poulsen", pos: "LM", overall: 83 }
    ]
  },
  {
    id: "leicester_1617",
    name: "Leicester City",
    season: "2016-17",
    country: "EN",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-4-2",
    players: [
      { name: "Schmeichel", pos: "GK", overall: 87 },
      { name: "Simpson", pos: "RB", overall: 82 },
      { name: "Morgan", pos: "CB", overall: 85 },
      { name: "Huth", pos: "CB", overall: 84 },
      { name: "Fuchs", pos: "LB", overall: 83 },
      { name: "Mahrez", pos: "RM", overall: 92 },
      { name: "Drinkwater", pos: "CM", overall: 84 },
      { name: "Kante", pos: "CM", overall: 91 },
      { name: "Albrighton", pos: "LM", overall: 81 },
      { name: "Vardy", pos: "ST", overall: 90 },
      { name: "Okazaki", pos: "ST", overall: 82 }
    ]
  },
  {
    id: "zenit_1516",
    name: "Zenit",
    season: "2015-16",
    country: "RU",
    flag: "🇷🇺",
    formation: "4-2-3-1",
    players: [
      { name: "Lodygin", pos: "GK", overall: 83 },
      { name: "Anyukov", pos: "RB", overall: 82 },
      { name: "Lovren", pos: "CB", overall: 85 },
      { name: "Criscito", pos: "CB", overall: 85 },
      { name: "Garay", pos: "LB", overall: 84 },
      { name: "Witsel", pos: "CM", overall: 87 },
      { name: "Tymoshchuk", pos: "CM", overall: 83 },
      { name: "Danny", pos: "AM", overall: 84 },
      { name: "Shatov", pos: "RM", overall: 82 },
      { name: "Hulk", pos: "ST", overall: 89 },
      { name: "Kerzhakov", pos: "LM", overall: 83 }
    ]
  },
  {
    id: "schalke_1011",
    name: "Schalke 04",
    season: "2010-11",
    country: "DE",
    flag: "🇩🇪",
    formation: "4-2-3-1",
    players: [
      { name: "Neuer", pos: "GK", overall: 92 },
      { name: "Uchida", pos: "RB", overall: 82 },
      { name: "Metzelder", pos: "CB", overall: 84 },
      { name: "Howedes", pos: "CB", overall: 84 },
      { name: "Schmitz", pos: "LB", overall: 80 },
      { name: "Jurado", pos: "CM", overall: 82 },
      { name: "Matip", pos: "CM", overall: 82 },
      { name: "Draxler", pos: "AM", overall: 85 },
      { name: "Farfan", pos: "RM", overall: 87 },
      { name: "Huntelaar", pos: "ST", overall: 89 },
      { name: "Edu", pos: "LM", overall: 80 }
    ]
  },
  {
    id: "cska_sofia_8182",
    name: "CSKA Sofia",
    season: "1981-82",
    country: "BG",
    flag: "🇧🇬",
    formation: "4-4-2",
    players: [
      { name: "Velinov", pos: "GK", overall: 79 },
      { name: "Aleksandrov", pos: "RB", overall: 77 },
      { name: "Dimitrov", pos: "CB", overall: 78 },
      { name: "Zdravkov", pos: "CB", overall: 78 },
      { name: "Petar Mihtarski", pos: "LB", overall: 77 },
      { name: "Kostadinov", pos: "CM", overall: 79 },
      { name: "Slavkov", pos: "CM", overall: 78 },
      { name: "Marashliev", pos: "CM", overall: 77 },
      { name: "Sirakov", pos: "RM", overall: 80 },
      { name: "Gospodinov", pos: "ST", overall: 81 },
      { name: "Mladenov", pos: "LM", overall: 78 }
    ]
  },
  {
    id: "widzew_lodz_8283",
    name: "Widzew Lodz",
    season: "1982-83",
    country: "PL",
    flag: "🇵🇱",
    formation: "4-4-2",
    players: [
      { name: "Mlynarczyk", pos: "GK", overall: 82 },
      { name: "Wojtalik", pos: "RB", overall: 78 },
      { name: "Wraga", pos: "CB", overall: 79 },
      { name: "Profic", pos: "CB", overall: 78 },
      { name: "Pawlowski", pos: "LB", overall: 77 },
      { name: "Tomaszewski", pos: "CM", overall: 79 },
      { name: "Wieczorek", pos: "CM", overall: 81 },
      { name: "Iwan", pos: "CM", overall: 80 },
      { name: "Wlodarczyk", pos: "RM", overall: 79 },
      { name: "Smolarek", pos: "ST", overall: 84 },
      { name: "Janas", pos: "LM", overall: 78 }
    ]
  },
  {
    id: "gladbach_7677",
    name: "Borussia Monchengladbach",
    season: "1976-77",
    country: "DE",
    flag: "🇩🇪",
    formation: "4-3-3",
    players: [
      { name: "Kneib", pos: "GK", overall: 83 },
      { name: "Vogts", pos: "RB", overall: 89 },
      { name: "Klinkhammer", pos: "CB", overall: 80 },
      { name: "Wittkamp", pos: "CB", overall: 81 },
      { name: "Schaefer", pos: "LB", overall: 81 },
      { name: "Bonhof", pos: "CM", overall: 88 },
      { name: "Wohlfahrt", pos: "CM", overall: 80 },
      { name: "Simonsen", pos: "RW", overall: 90 },
      { name: "Heynckes", pos: "ST", overall: 87 },
      { name: "Stielike", pos: "CM", overall: 86 },
      { name: "Danner", pos: "LW", overall: 80 }
    ]
  },
  {
    id: "tottenham_6162",
    name: "Tottenham Hotspur",
    season: "1961-62",
    country: "EN",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-4-2",
    players: [
      { name: "Brown", pos: "GK", overall: 83 },
      { name: "Baker", pos: "RB", overall: 82 },
      { name: "Norman", pos: "CB", overall: 84 },
      { name: "Mackay", pos: "CB", overall: 89 },
      { name: "Henry", pos: "LB", overall: 81 },
      { name: "Blanchflower", pos: "CM", overall: 88 },
      { name: "White", pos: "CM", overall: 86 },
      { name: "Medwin", pos: "RM", overall: 82 },
      { name: "Smith", pos: "ST", overall: 84 },
      { name: "Greaves", pos: "ST", overall: 93 },
      { name: "Jones", pos: "LM", overall: 81 }
    ]
  },
  {
    id: "spartak_moscou_9091",
    name: "Spartak Moscou",
    season: "1990-91",
    country: "RU",
    flag: "🇷🇺",
    formation: "4-4-2",
    players: [
      { name: "Cherchesov", pos: "GK", overall: 84 },
      { name: "Bazulev", pos: "RB", overall: 79 },
      { name: "Chernyshov", pos: "CB", overall: 80 },
      { name: "Kulkov", pos: "CB", overall: 81 },
      { name: "Khlestov", pos: "LB", overall: 80 },
      { name: "Shmarov", pos: "CM", overall: 84 },
      { name: "Rodionov", pos: "CM", overall: 82 },
      { name: "Mostovoi", pos: "RM", overall: 86 },
      { name: "Pisarev", pos: "ST", overall: 80 },
      { name: "Karpin", pos: "ST", overall: 83 },
      { name: "Shalimov", pos: "LM", overall: 85 }
    ]
  },
  {
    id: "sparta_praha_9091",
    name: "Sparta Praha",
    season: "1990-91",
    country: "CZ",
    flag: "🇨🇿",
    formation: "4-4-2",
    players: [
      { name: "Hruska", pos: "GK", overall: 82 },
      { name: "Lubos Kubik", pos: "RB", overall: 81 },
      { name: "Suchoparek", pos: "CB", overall: 79 },
      { name: "Krsko", pos: "CB", overall: 79 },
      { name: "Onofrej", pos: "LB", overall: 78 },
      { name: "Bilek", pos: "CM", overall: 85 },
      { name: "Frydek", pos: "CM", overall: 82 },
      { name: "Moravcik", pos: "RM", overall: 86 },
      { name: "Siegl", pos: "ST", overall: 81 },
      { name: "Kuka", pos: "ST", overall: 83 },
      { name: "Hapal", pos: "LM", overall: 79 }
    ]
  },
  {
    id: "panathinaikos_9596",
    name: "Panathinaikos",
    season: "1995-96",
    country: "GR",
    flag: "🇬🇷",
    formation: "4-4-2",
    players: [
      { name: "Atmatzidis", pos: "GK", overall: 81 },
      { name: "Apostolakis", pos: "RB", overall: 82 },
      { name: "Kalitzakis", pos: "CB", overall: 80 },
      { name: "Kofidis", pos: "CB", overall: 79 },
      { name: "Vryzas", pos: "LB", overall: 80 },
      { name: "Saravakos", pos: "CM", overall: 85 },
      { name: "Warzycha", pos: "CM", overall: 82 },
      { name: "Kolitsidakis", pos: "RM", overall: 79 },
      { name: "Heath", pos: "ST", overall: 83 },
      { name: "Anastopoulos", pos: "ST", overall: 82 },
      { name: "Donis", pos: "LM", overall: 80 }
    ]
  },
  {
    id: "nantes_9596",
    name: "Nantes",
    season: "1995-96",
    country: "FR",
    flag: "🇫🇷",
    formation: "4-3-3",
    players: [
      { name: "Landreau", pos: "GK", overall: 80 },
      { name: "N'Gotty", pos: "RB", overall: 82 },
      { name: "Decroix", pos: "CB", overall: 81 },
      { name: "Makelele", pos: "CB", overall: 86 },
      { name: "Ducrocq", pos: "LB", overall: 80 },
      { name: "Pedretti", pos: "CM", overall: 81 },
      { name: "Loko", pos: "CM", overall: 82 },
      { name: "Ouedec", pos: "RW", overall: 84 },
      { name: "Pedros", pos: "ST", overall: 83 },
      { name: "Vahirua", pos: "ST", overall: 82 },
      { name: "Da Rocha", pos: "LW", overall: 81 }
    ]
  },
  {
    id: "rangers_9293",
    name: "Rangers",
    season: "1992-93",
    country: "SC",
    flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    formation: "4-4-2",
    players: [
      { name: "Goram", pos: "GK", overall: 86 },
      { name: "Stevens", pos: "RB", overall: 83 },
      { name: "Gough", pos: "CB", overall: 87 },
      { name: "McPherson", pos: "CB", overall: 81 },
      { name: "Robertson", pos: "LB", overall: 80 },
      { name: "Ferguson", pos: "CM", overall: 83 },
      { name: "McCall", pos: "CM", overall: 82 },
      { name: "Durie", pos: "RM", overall: 82 },
      { name: "Hateley", pos: "ST", overall: 86 },
      { name: "McCoist", pos: "ST", overall: 89 },
      { name: "Huistra", pos: "LM", overall: 81 }
    ]
  },
  {
    id: "goteborg_9293",
    name: "Goteborg",
    season: "1992-93",
    country: "SE",
    flag: "🇸🇪",
    formation: "4-4-2",
    players: [
      { name: "Ravnel", pos: "GK", overall: 80 },
      { name: "Andersson", pos: "RB", overall: 78 },
      { name: "Bjorklund", pos: "CB", overall: 80 },
      { name: "Kamark", pos: "CB", overall: 79 },
      { name: "Liljebjorn", pos: "LB", overall: 77 },
      { name: "Pettersson", pos: "CM", overall: 80 },
      { name: "Ericsson", pos: "CM", overall: 79 },
      { name: "Ljung", pos: "RM", overall: 78 },
      { name: "Andersson Joachim", pos: "ST", overall: 81 },
      { name: "Stromberg", pos: "ST", overall: 80 },
      { name: "Rehn", pos: "LM", overall: 78 }
    ]
  },
  {
    id: "galatasaray_8889",
    name: "Galatasaray",
    season: "1988-89",
    country: "TR",
    flag: "🇹🇷",
    formation: "4-4-2",
    players: [
      { name: "Engin", pos: "GK", overall: 81 },
      { name: "Hayrettin", pos: "RB", overall: 79 },
      { name: "Bulent", pos: "CB", overall: 79 },
      { name: "Hakan", pos: "CB", overall: 79 },
      { name: "Recep", pos: "LB", overall: 78 },
      { name: "Tugay", pos: "CM", overall: 81 },
      { name: "Erhan", pos: "CM", overall: 80 },
      { name: "Cem", pos: "RM", overall: 79 },
      { name: "Tanju Colak", pos: "ST", overall: 87 },
      { name: "Kubilay", pos: "ST", overall: 80 },
      { name: "Ridvan", pos: "LM", overall: 79 }
    ]
  },
  {
    id: "real_madrid_5960",
    name: "Real Madrid",
    season: "1959-60",
    country: "ES",
    flag: "🇪🇸",
    formation: "4-2-4",
    players: [
      { name: "Dominguez", pos: "GK", overall: 86 },
      { name: "Marquitos", pos: "CB", overall: 87 },
      { name: "Santamaria", pos: "CB", overall: 89 },
      { name: "Pachin", pos: "RB", overall: 84 },
      { name: "Zarraga", pos: "CM", overall: 83 },
      { name: "Vidal", pos: "CM", overall: 82 },
      { name: "Canario", pos: "RW", overall: 87 },
      { name: "Del Sol", pos: "RW", overall: 88 },
      { name: "Di Stefano", pos: "ST", overall: 99 },
      { name: "Puskas", pos: "ST", overall: 98 },
      { name: "Gento", pos: "LW", overall: 95 }
    ]
  },
  {
    id: "frankfurt_5960",
    name: "Eintracht Frankfurt",
    season: "1959-60",
    country: "DE",
    flag: "🇩🇪",
    formation: "4-2-4",
    players: [
      { name: "Loy", pos: "GK", overall: 84 },
      { name: "Lutz", pos: "CB", overall: 80 },
      { name: "Hofer", pos: "CB", overall: 79 },
      { name: "Weilbacher", pos: "RB", overall: 79 },
      { name: "Eigenbrodt", pos: "CM", overall: 80 },
      { name: "Stinka", pos: "CM", overall: 79 },
      { name: "Kress", pos: "RW", overall: 84 },
      { name: "Meier", pos: "RW", overall: 82 },
      { name: "Stein", pos: "ST", overall: 88 },
      { name: "Lindner", pos: "ST", overall: 80 },
      { name: "Pfaff", pos: "LW", overall: 80 }
    ]
  },
  {
    id: "barcelona_9192",
    name: "Barcelona",
    season: "1991-92",
    country: "ES",
    flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Zubizarreta", pos: "GK", overall: 90 },
      { name: "Ferrer", pos: "RB", overall: 87 },
      { name: "Koeman", pos: "CB", overall: 92 },
      { name: "Nando", pos: "CB", overall: 83 },
      { name: "Juan Carlos", pos: "LB", overall: 82 },
      { name: "Guardiola", pos: "CM", overall: 90 },
      { name: "Bakero", pos: "CM", overall: 87 },
      { name: "Eusebio", pos: "RW", overall: 84 },
      { name: "Laudrup", pos: "ST", overall: 93 },
      { name: "Salinas", pos: "ST", overall: 86 },
      { name: "Begiristain", pos: "LW", overall: 85 }
    ]
  },
  {
    id: "sampdoria_9192",
    name: "Sampdoria",
    season: "1991-92",
    country: "IT",
    flag: "🇮🇹",
    formation: "4-4-2",
    players: [
      { name: "Pagliuca", pos: "GK", overall: 87 },
      { name: "Mannini", pos: "RB", overall: 82 },
      { name: "Vierchowod", pos: "CB", overall: 89 },
      { name: "Pari", pos: "CB", overall: 81 },
      { name: "Pellegrini", pos: "LB", overall: 82 },
      { name: "Lombardo", pos: "RM", overall: 86 },
      { name: "Cerezo", pos: "CM", overall: 88 },
      { name: "Katanec", pos: "CM", overall: 83 },
      { name: "Invernizzi", pos: "LM", overall: 80 },
      { name: "Vialli", pos: "ST", overall: 91 },
      { name: "Mancini", pos: "ST", overall: 89 }
    ]
  },
  {
    id: "ajax_9495",
    name: "Ajax",
    season: "1994-95",
    country: "NL",
    flag: "🇳🇱",
    formation: "4-3-3",
    players: [
      { name: "Van der Sar", pos: "GK", overall: 89 },
      { name: "Reiziger", pos: "RB", overall: 86 },
      { name: "Blind", pos: "CB", overall: 87 },
      { name: "F. de Boer", pos: "CB", overall: 91 },
      { name: "Silooy", pos: "LB", overall: 81 },
      { name: "Davids", pos: "CM", overall: 90 },
      { name: "R. de Boer", pos: "CM", overall: 89 },
      { name: "Litmanen", pos: "AM", overall: 93 },
      { name: "Overmars", pos: "RW", overall: 89 },
      { name: "Kluivert", pos: "ST", overall: 91 },
      { name: "Finidi George", pos: "LW", overall: 86 }
    ]
  },
  {
    id: "deportivo_0304",
    name: "Deportivo La Coruna",
    season: "2003-04",
    country: "ES",
    flag: "🇪🇸",
    formation: "4-4-2",
    players: [
      { name: "Molina", pos: "GK", overall: 85 },
      { name: "Manuel Pablo", pos: "RB", overall: 82 },
      { name: "Naybet", pos: "CB", overall: 87 },
      { name: "Pedro Duscher", pos: "CB", overall: 82 },
      { name: "Romero", pos: "LB", overall: 82 },
      { name: "Mauro Silva", pos: "CM", overall: 85 },
      { name: "Valeron", pos: "CM", overall: 91 },
      { name: "Luque", pos: "RM", overall: 82 },
      { name: "Sergio", pos: "ST", overall: 84 },
      { name: "Walter Pandiani", pos: "ST", overall: 85 },
      { name: "Victor", pos: "LM", overall: 82 }
    ]
  },
  {
    id: "anderlecht_8586",
    name: "Anderlecht",
    season: "1985-86",
    country: "BE",
    flag: "🇧🇪",
    formation: "4-4-2",
    players: [
      { name: "Munaron", pos: "GK", overall: 83 },
      { name: "Grun", pos: "RB", overall: 82 },
      { name: "De Greef", pos: "CB", overall: 80 },
      { name: "Olsen", pos: "CB", overall: 84 },
      { name: "Broos", pos: "LB", overall: 81 },
      { name: "Vercauteren", pos: "CM", overall: 86 },
      { name: "Brylle", pos: "CM", overall: 81 },
      { name: "Hofkens", pos: "RM", overall: 80 },
      { name: "Vandereycken", pos: "CM", overall: 84 },
      { name: "Czerniatynski", pos: "ST", overall: 84 },
      { name: "Voordeckers", pos: "LM", overall: 80 }
    ]
  },
  {
    id: "inter_2425",
    name: "Internazionale",
    season: "2024-25",
    country: "IT",
    flag: "🇮🇹",
    formation: "3-5-2",
    players: [
      { name: "Sommer", pos: "GK", overall: 89 },
      { name: "Bastoni", pos: "CB", overall: 91 },
      { name: "Acerbi", pos: "CB", overall: 86 },
      { name: "Pavard", pos: "CB", overall: 87 },
      { name: "Dumfries", pos: "RM", overall: 89 },
      { name: "Barella", pos: "CM", overall: 91 },
      { name: "Calhanoglu", pos: "CM", overall: 89 },
      { name: "Mkhitaryan", pos: "CM", overall: 85 },
      { name: "Dimarco", pos: "LM", overall: 89 },
      { name: "Lautaro Martinez", pos: "ST", overall: 93 },
      { name: "Thuram", pos: "ST", overall: 90 }
    ]
  },
  {
    id: "real_madrid_5556",
    name: "Real Madrid",
    season: "1955-56",
    country: "ES",
    flag: "🇪🇸",
    formation: "4-2-4",
    players: [
      { name: "Alonso", pos: "GK", overall: 84 },
      { name: "Atienza", pos: "CB", overall: 82 },
      { name: "Lesmes", pos: "CB", overall: 81 },
      { name: "Torres", pos: "RB", overall: 81 },
      { name: "Munoz", pos: "CM", overall: 84 },
      { name: "Zarraga", pos: "CM", overall: 81 },
      { name: "Joseito", pos: "RW", overall: 82 },
      { name: "Marquitos", pos: "CB", overall: 82 },
      { name: "Di Stefano", pos: "ST", overall: 98 },
      { name: "Rial", pos: "ST", overall: 89 },
      { name: "Gento", pos: "LW", overall: 90 }
    ]
  },
  {
    id: "reims_5556",
    name: "Stade de Reims",
    season: "1955-56",
    country: "FR",
    flag: "🇫🇷",
    formation: "4-2-4",
    players: [
      { name: "Colonna", pos: "GK", overall: 80 },
      { name: "Rouxel", pos: "CB", overall: 78 },
      { name: "Jonquet", pos: "CB", overall: 83 },
      { name: "Giraudo", pos: "RB", overall: 77 },
      { name: "Siatka", pos: "CM", overall: 79 },
      { name: "Leblond", pos: "CM", overall: 77 },
      { name: "Hidalgo", pos: "RW", overall: 82 },
      { name: "Templin", pos: "CB", overall: 77 },
      { name: "Kopa", pos: "ST", overall: 91 },
      { name: "Glovacki", pos: "ST", overall: 80 },
      { name: "Penverne", pos: "LW", overall: 78 }
    ]
  },
  {
    id: "real_madrid_5657",
    name: "Real Madrid",
    season: "1956-57",
    country: "ES",
    flag: "🇪🇸",
    formation: "4-2-4",
    players: [
      { name: "Alonso", pos: "GK", overall: 85 },
      { name: "Atienza", pos: "CB", overall: 82 },
      { name: "Lesmes", pos: "CB", overall: 81 },
      { name: "Torres", pos: "RB", overall: 81 },
      { name: "Munoz", pos: "CM", overall: 84 },
      { name: "Zarraga", pos: "CM", overall: 82 },
      { name: "Mateos", pos: "RW", overall: 82 },
      { name: "Marquitos", pos: "CB", overall: 82 },
      { name: "Di Stefano", pos: "ST", overall: 98 },
      { name: "Rial", pos: "ST", overall: 89 },
      { name: "Gento", pos: "LW", overall: 91 }
    ]
  },
  {
    id: "real_madrid_5758",
    name: "Real Madrid",
    season: "1957-58",
    country: "ES",
    flag: "🇪🇸",
    formation: "4-2-4",
    players: [
      { name: "Alonso", pos: "GK", overall: 85 },
      { name: "Atienza", pos: "CB", overall: 82 },
      { name: "Santamaria", pos: "CB", overall: 87 },
      { name: "Torres", pos: "RB", overall: 82 },
      { name: "Munoz", pos: "CM", overall: 84 },
      { name: "Zarraga", pos: "CM", overall: 82 },
      { name: "Kopa", pos: "RW", overall: 92 },
      { name: "Marquitos", pos: "CB", overall: 83 },
      { name: "Di Stefano", pos: "ST", overall: 99 },
      { name: "Mateos", pos: "ST", overall: 83 },
      { name: "Gento", pos: "LW", overall: 92 }
    ]
  },
  {
    id: "milan_5758",
    name: "Milan",
    season: "1957-58",
    country: "IT",
    flag: "🇮🇹",
    formation: "4-2-4",
    players: [
      { name: "Soldan", pos: "GK", overall: 81 },
      { name: "Fontana", pos: "RB", overall: 80 },
      { name: "Maldini", pos: "CB", overall: 87 },
      { name: "Zannier", pos: "CB", overall: 79 },
      { name: "Bergamaschi", pos: "CM", overall: 78 },
      { name: "Liedholm", pos: "CM", overall: 89 },
      { name: "Danova", pos: "RW", overall: 80 },
      { name: "Radice", pos: "CB", overall: 77 },
      { name: "Schiaffino", pos: "ST", overall: 90 },
      { name: "Grillo", pos: "ST", overall: 82 },
      { name: "Bean", pos: "LW", overall: 78 }
    ]
  },
  {
    id: "real_madrid_5859",
    name: "Real Madrid",
    season: "1958-59",
    country: "ES",
    flag: "🇪🇸",
    formation: "4-2-4",
    players: [
      { name: "Alonso", pos: "GK", overall: 85 },
      { name: "Atienza", pos: "CB", overall: 82 },
      { name: "Santamaria", pos: "CB", overall: 88 },
      { name: "Pachin", pos: "RB", overall: 82 },
      { name: "Zarraga", pos: "CM", overall: 83 },
      { name: "Vidal", pos: "CM", overall: 82 },
      { name: "Kopa", pos: "RW", overall: 92 },
      { name: "Marquitos", pos: "CB", overall: 83 },
      { name: "Di Stefano", pos: "ST", overall: 99 },
      { name: "Mateos", pos: "ST", overall: 83 },
      { name: "Gento", pos: "LW", overall: 93 }
    ]
  },
  {
    id: "reims_5859",
    name: "Stade de Reims",
    season: "1958-59",
    country: "FR",
    flag: "🇫🇷",
    formation: "4-2-4",
    players: [
      { name: "Colonna", pos: "GK", overall: 81 },
      { name: "Rouxel", pos: "CB", overall: 78 },
      { name: "Jonquet", pos: "CB", overall: 84 },
      { name: "Giraudo", pos: "RB", overall: 78 },
      { name: "Siatka", pos: "CM", overall: 79 },
      { name: "Leblond", pos: "CM", overall: 78 },
      { name: "Bliard", pos: "RW", overall: 80 },
      { name: "Lamartine", pos: "CB", overall: 77 },
      { name: "Fontaine", pos: "ST", overall: 91 },
      { name: "Piantoni", pos: "ST", overall: 84 },
      { name: "Vincent", pos: "LW", overall: 80 }
    ]
  },
  {
    id: "benfica_6061",
    name: "Benfica",
    season: "1960-61",
    country: "PT",
    flag: "🇵🇹",
    formation: "4-2-4",
    players: [
      { name: "Costa Pereira", pos: "GK", overall: 87 },
      { name: "Joao Luis", pos: "RB", overall: 80 },
      { name: "Germano", pos: "CB", overall: 84 },
      { name: "Angelo", pos: "CB", overall: 80 },
      { name: "Cruz", pos: "CM", overall: 82 },
      { name: "Santana", pos: "CM", overall: 80 },
      { name: "Cavem", pos: "RW", overall: 82 },
      { name: "Neto", pos: "CB", overall: 79 },
      { name: "Aguas", pos: "ST", overall: 89 },
      { name: "Coluna", pos: "CM", overall: 90 },
      { name: "Cruz Jose Augusto", pos: "LW", overall: 84 }
    ]
  },
  {
    id: "barcelona_6061",
    name: "Barcelona",
    season: "1960-61",
    country: "ES",
    flag: "🇪🇸",
    formation: "4-2-4",
    players: [
      { name: "Ramallets", pos: "GK", overall: 87 },
      { name: "Foncho", pos: "RB", overall: 79 },
      { name: "Gracia", pos: "CB", overall: 80 },
      { name: "Gensana", pos: "CB", overall: 79 },
      { name: "Vergés", pos: "CM", overall: 79 },
      { name: "Segarra", pos: "CM", overall: 79 },
      { name: "Kocsis", pos: "ST", overall: 90 },
      { name: "Czibor", pos: "RW", overall: 88 },
      { name: "Kubala", pos: "ST", overall: 89 },
      { name: "Evaristo", pos: "ST", overall: 84 },
      { name: "Villaverde", pos: "LW", overall: 78 }
    ]
  },
  {
    id: "milan_6263",
    name: "Milan",
    season: "1962-63",
    country: "IT",
    flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Ghezzi", pos: "GK", overall: 84 },
      { name: "David", pos: "RB", overall: 81 },
      { name: "Maldini", pos: "CB", overall: 88 },
      { name: "Trebbi", pos: "CB", overall: 78 },
      { name: "Benitez", pos: "CM", overall: 80 },
      { name: "Trapattoni", pos: "CM", overall: 85 },
      { name: "Pivatelli", pos: "RW", overall: 82 },
      { name: "Rivera", pos: "CM", overall: 90 },
      { name: "Altafini", pos: "ST", overall: 91 },
      { name: "Mora", pos: "ST", overall: 81 },
      { name: "Amarildo", pos: "LW", overall: 87 }
    ]
  },
  {
    id: "inter_6465",
    name: "Internazionale",
    season: "1964-65",
    country: "IT",
    flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Sarti", pos: "GK", overall: 88 },
      { name: "Burgnich", pos: "RB", overall: 89 },
      { name: "Guarneri", pos: "CB", overall: 85 },
      { name: "Picchi", pos: "CB", overall: 86 },
      { name: "Facchetti", pos: "LB", overall: 90 },
      { name: "Bedin", pos: "CM", overall: 80 },
      { name: "Suarez", pos: "CM", overall: 92 },
      { name: "Jair", pos: "RW", overall: 86 },
      { name: "Mazzola", pos: "ST", overall: 91 },
      { name: "Peiro", pos: "ST", overall: 82 },
      { name: "Corso", pos: "LW", overall: 87 }
    ]
  },
  {
    id: "man_united_6768",
    name: "Manchester United",
    season: "1967-68",
    country: "EN",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "Stepney", pos: "GK", overall: 85 },
      { name: "Brennan", pos: "RB", overall: 82 },
      { name: "Foulkes", pos: "CB", overall: 83 },
      { name: "Dunne", pos: "CB", overall: 82 },
      { name: "Stiles", pos: "CM", overall: 85 },
      { name: "Crerand", pos: "CM", overall: 84 },
      { name: "Sadler", pos: "CB", overall: 80 },
      { name: "Kidd", pos: "ST", overall: 82 },
      { name: "Charlton", pos: "CM", overall: 92 },
      { name: "Best", pos: "RW", overall: 96 },
      { name: "Aston", pos: "LW", overall: 81 }
    ]
  },
  {
    id: "ajax_7071",
    name: "Ajax",
    season: "1970-71",
    country: "NL",
    flag: "🇳🇱",
    formation: "4-3-3",
    players: [
      { name: "Stuy", pos: "GK", overall: 84 },
      { name: "Suurbier", pos: "RB", overall: 85 },
      { name: "Hulshoff", pos: "CB", overall: 84 },
      { name: "Vasovic", pos: "CB", overall: 83 },
      { name: "Krol", pos: "LB", overall: 87 },
      { name: "Neeskens", pos: "CM", overall: 88 },
      { name: "Haan", pos: "CM", overall: 87 },
      { name: "Muhren", pos: "RW", overall: 84 },
      { name: "Cruyff", pos: "ST", overall: 97 },
      { name: "Swart", pos: "ST", overall: 82 },
      { name: "Keizer", pos: "LW", overall: 85 }
    ]
  },
  {
    id: "ajax_7273",
    name: "Ajax",
    season: "1972-73",
    country: "NL",
    flag: "🇳🇱",
    formation: "4-3-3",
    players: [
      { name: "Stuy", pos: "GK", overall: 85 },
      { name: "Suurbier", pos: "RB", overall: 86 },
      { name: "Hulshoff", pos: "CB", overall: 84 },
      { name: "Blankenburg", pos: "CB", overall: 82 },
      { name: "Krol", pos: "LB", overall: 89 },
      { name: "Neeskens", pos: "CM", overall: 90 },
      { name: "Haan", pos: "CM", overall: 88 },
      { name: "Muhren", pos: "RW", overall: 85 },
      { name: "Cruyff", pos: "ST", overall: 99 },
      { name: "Rep", pos: "ST", overall: 86 },
      { name: "Keizer", pos: "LW", overall: 85 }
    ]
  },
  {
    id: "juventus_7273",
    name: "Juventus",
    season: "1972-73",
    country: "IT",
    flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Zoff", pos: "GK", overall: 91 },
      { name: "Spinosi", pos: "RB", overall: 81 },
      { name: "Morini", pos: "CB", overall: 83 },
      { name: "Salvadore", pos: "CB", overall: 82 },
      { name: "Marchetti", pos: "LB", overall: 81 },
      { name: "Furino", pos: "CM", overall: 82 },
      { name: "Causio", pos: "RW", overall: 84 },
      { name: "Capello", pos: "CM", overall: 86 },
      { name: "Anastasi", pos: "ST", overall: 87 },
      { name: "Bettega", pos: "ST", overall: 85 },
      { name: "Altafini", pos: "LW", overall: 82 }
    ]
  },
  {
    id: "atletico_7374",
    name: "Atletico de Madrid",
    season: "1973-74",
    country: "ES",
    flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Reina", pos: "GK", overall: 84 },
      { name: "Melo", pos: "RB", overall: 79 },
      { name: "Heredia", pos: "CB", overall: 81 },
      { name: "Eusebio", pos: "CB", overall: 82 },
      { name: "Capon", pos: "LB", overall: 80 },
      { name: "Benegas", pos: "CM", overall: 81 },
      { name: "Adelardo", pos: "CM", overall: 83 },
      { name: "Ufarte", pos: "RW", overall: 81 },
      { name: "Garate", pos: "ST", overall: 85 },
      { name: "Irureta", pos: "ST", overall: 80 },
      { name: "Luis Aragones", pos: "LW", overall: 84 }
    ]
  },
  {
    id: "bayern_7475",
    name: "Bayern de Munique",
    season: "1974-75",
    country: "DE",
    flag: "🇩🇪",
    formation: "4-3-3",
    players: [
      { name: "Maier", pos: "GK", overall: 93 },
      { name: "Hansen", pos: "RB", overall: 81 },
      { name: "Beckenbauer", pos: "CB", overall: 98 },
      { name: "Schwarzenbeck", pos: "CB", overall: 85 },
      { name: "Breitner", pos: "LB", overall: 91 },
      { name: "Roth", pos: "CM", overall: 86 },
      { name: "Zobel", pos: "CM", overall: 81 },
      { name: "Kapellmann", pos: "RW", overall: 82 },
      { name: "Muller", pos: "ST", overall: 97 },
      { name: "Hoeness", pos: "ST", overall: 89 },
      { name: "Torstensson", pos: "LW", overall: 81 }
    ]
  },
  {
    id: "bayern_7576",
    name: "Bayern de Munique",
    season: "1975-76",
    country: "DE",
    flag: "🇩🇪",
    formation: "4-3-3",
    players: [
      { name: "Maier", pos: "GK", overall: 93 },
      { name: "Hansen", pos: "RB", overall: 81 },
      { name: "Beckenbauer", pos: "CB", overall: 98 },
      { name: "Schwarzenbeck", pos: "CB", overall: 85 },
      { name: "Durnberger", pos: "LB", overall: 81 },
      { name: "Roth", pos: "CM", overall: 86 },
      { name: "Zobel", pos: "CM", overall: 82 },
      { name: "Kapellmann", pos: "RW", overall: 82 },
      { name: "Muller", pos: "ST", overall: 96 },
      { name: "Hoeness", pos: "ST", overall: 89 },
      { name: "Rummenigge", pos: "LW", overall: 89 }
    ]
  },
  {
    id: "liverpool_7677",
    name: "Liverpool",
    season: "1976-77",
    country: "EN",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-4-2",
    players: [
      { name: "Clemence", pos: "GK", overall: 88 },
      { name: "Neal", pos: "RB", overall: 83 },
      { name: "Smith", pos: "CB", overall: 82 },
      { name: "Hughes", pos: "CB", overall: 85 },
      { name: "Jones", pos: "LB", overall: 83 },
      { name: "Case", pos: "RM", overall: 82 },
      { name: "McDermott", pos: "CM", overall: 84 },
      { name: "Kennedy Ray", pos: "CM", overall: 84 },
      { name: "Callaghan", pos: "LM", overall: 82 },
      { name: "Keegan", pos: "ST", overall: 90 },
      { name: "Heighway", pos: "ST", overall: 82 }
    ]
  },
  {
    id: "liverpool_7778",
    name: "Liverpool",
    season: "1977-78",
    country: "EN",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-4-2",
    players: [
      { name: "Clemence", pos: "GK", overall: 89 },
      { name: "Neal", pos: "RB", overall: 83 },
      { name: "Thompson", pos: "CB", overall: 84 },
      { name: "Hansen", pos: "CB", overall: 86 },
      { name: "Smith", pos: "LB", overall: 81 },
      { name: "McDermott", pos: "CM", overall: 85 },
      { name: "Case", pos: "RM", overall: 82 },
      { name: "Souness", pos: "CM", overall: 90 },
      { name: "Heighway", pos: "LM", overall: 82 },
      { name: "Dalglish", pos: "ST", overall: 92 },
      { name: "Fairclough", pos: "ST", overall: 80 }
    ]
  },
  {
    id: "forest_7879",
    name: "Nottingham Forest",
    season: "1978-79",
    country: "EN",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-4-2",
    players: [
      { name: "Shilton", pos: "GK", overall: 90 },
      { name: "Anderson", pos: "RB", overall: 82 },
      { name: "Lloyd", pos: "CB", overall: 82 },
      { name: "Burns", pos: "CB", overall: 83 },
      { name: "Clark", pos: "LB", overall: 81 },
      { name: "Mills", pos: "RM", overall: 82 },
      { name: "Bowyer", pos: "CM", overall: 82 },
      { name: "McGovern", pos: "CM", overall: 82 },
      { name: "Robertson", pos: "LM", overall: 85 },
      { name: "Birtles", pos: "ST", overall: 82 },
      { name: "Woodcock", pos: "ST", overall: 84 }
    ]
  },
  {
    id: "forest_7980",
    name: "Nottingham Forest",
    season: "1979-80",
    country: "EN",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-4-2",
    players: [
      { name: "Shilton", pos: "GK", overall: 90 },
      { name: "Anderson", pos: "RB", overall: 82 },
      { name: "Lloyd", pos: "CB", overall: 82 },
      { name: "Burns", pos: "CB", overall: 83 },
      { name: "Clark", pos: "LB", overall: 81 },
      { name: "Mills", pos: "RM", overall: 82 },
      { name: "Bowyer", pos: "CM", overall: 82 },
      { name: "Gemmill", pos: "CM", overall: 84 },
      { name: "Robertson", pos: "LM", overall: 86 },
      { name: "Birtles", pos: "ST", overall: 82 },
      { name: "Francis", pos: "ST", overall: 85 }
    ]
  },
  {
    id: "hamburgo_7980",
    name: "Hamburgo",
    season: "1979-80",
    country: "DE",
    flag: "🇩🇪",
    formation: "4-4-2",
    players: [
      { name: "Stein", pos: "GK", overall: 82 },
      { name: "Kaltz", pos: "RB", overall: 87 },
      { name: "Hieronymus", pos: "CB", overall: 79 },
      { name: "Jakobs", pos: "CB", overall: 80 },
      { name: "Nogly", pos: "LB", overall: 78 },
      { name: "Hrubesch", pos: "ST", overall: 87 },
      { name: "Magath", pos: "CM", overall: 85 },
      { name: "Memering", pos: "CM", overall: 80 },
      { name: "Milewski", pos: "LM", overall: 79 },
      { name: "Keegan", pos: "RM", overall: 91 },
      { name: "Reimann", pos: "ST", overall: 80 }
    ]
  },
  {
    id: "liverpool_8081",
    name: "Liverpool",
    season: "1980-81",
    country: "EN",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-4-2",
    players: [
      { name: "Clemence", pos: "GK", overall: 89 },
      { name: "Neal", pos: "RB", overall: 83 },
      { name: "Thompson", pos: "CB", overall: 84 },
      { name: "Hansen", pos: "CB", overall: 87 },
      { name: "A. Kennedy", pos: "LB", overall: 84 },
      { name: "Lee", pos: "RM", overall: 82 },
      { name: "McDermott", pos: "CM", overall: 85 },
      { name: "Souness", pos: "CM", overall: 91 },
      { name: "R. Kennedy", pos: "LM", overall: 83 },
      { name: "Dalglish", pos: "ST", overall: 92 },
      { name: "Johnson", pos: "ST", overall: 82 }
    ]
  },
  {
    id: "hamburgo_8283",
    name: "Hamburgo",
    season: "1982-83",
    country: "DE",
    flag: "🇩🇪",
    formation: "4-4-2",
    players: [
      { name: "Stein", pos: "GK", overall: 84 },
      { name: "Kaltz", pos: "RB", overall: 88 },
      { name: "Jakobs", pos: "CB", overall: 82 },
      { name: "Hieronymus", pos: "CB", overall: 80 },
      { name: "Wehmeyer", pos: "LB", overall: 80 },
      { name: "Magath", pos: "CM", overall: 86 },
      { name: "Wuttke", pos: "CM", overall: 79 },
      { name: "von Heesen", pos: "RM", overall: 81 },
      { name: "Groh", pos: "LM", overall: 79 },
      { name: "Hrubesch", pos: "ST", overall: 88 },
      { name: "Bastrup", pos: "ST", overall: 82 }
    ]
  },
  {
    id: "juventus_8283",
    name: "Juventus",
    season: "1982-83",
    country: "IT",
    flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Zoff", pos: "GK", overall: 90 },
      { name: "Gentile", pos: "RB", overall: 87 },
      { name: "Scirea", pos: "CB", overall: 90 },
      { name: "Brio", pos: "CB", overall: 82 },
      { name: "Cabrini", pos: "LB", overall: 89 },
      { name: "Tardelli", pos: "CM", overall: 89 },
      { name: "Bonini", pos: "CM", overall: 82 },
      { name: "Boniek", pos: "RW", overall: 90 },
      { name: "Rossi", pos: "ST", overall: 89 },
      { name: "Platini", pos: "CM", overall: 95 },
      { name: "Virdis", pos: "LW", overall: 82 }
    ]
  },
  {
    id: "juventus_8485",
    name: "Juventus",
    season: "1984-85",
    country: "IT",
    flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Tacconi", pos: "GK", overall: 87 },
      { name: "Favero", pos: "RB", overall: 81 },
      { name: "Scirea", pos: "CB", overall: 90 },
      { name: "Brio", pos: "CB", overall: 83 },
      { name: "Cabrini", pos: "LB", overall: 89 },
      { name: "Tardelli", pos: "CM", overall: 89 },
      { name: "Bonini", pos: "CM", overall: 83 },
      { name: "Briaschi", pos: "RW", overall: 81 },
      { name: "Rossi", pos: "ST", overall: 87 },
      { name: "Platini", pos: "CM", overall: 96 },
      { name: "Vignola", pos: "LW", overall: 80 }
    ]
  },
  {
    id: "liverpool_8485",
    name: "Liverpool",
    season: "1984-85",
    country: "EN",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-4-2",
    players: [
      { name: "Grobbelaar", pos: "GK", overall: 86 },
      { name: "Neal", pos: "RB", overall: 82 },
      { name: "Lawrenson", pos: "CB", overall: 86 },
      { name: "Hansen", pos: "CB", overall: 88 },
      { name: "Beglin", pos: "LB", overall: 80 },
      { name: "Lee", pos: "RM", overall: 82 },
      { name: "Whelan", pos: "CM", overall: 83 },
      { name: "Wark", pos: "CM", overall: 83 },
      { name: "Robinson", pos: "LM", overall: 80 },
      { name: "Rush", pos: "ST", overall: 91 },
      { name: "Dalglish", pos: "ST", overall: 90 }
    ]
  },
  {
    id: "barcelona_8586",
    name: "Barcelona",
    season: "1985-86",
    country: "ES",
    flag: "🇪🇸",
    formation: "4-4-2",
    players: [
      { name: "Urruti", pos: "GK", overall: 85 },
      { name: "Julio Alberto", pos: "RB", overall: 82 },
      { name: "Migueli", pos: "CB", overall: 82 },
      { name: "Alexanko", pos: "CB", overall: 83 },
      { name: "Gerardo", pos: "LB", overall: 80 },
      { name: "Victor", pos: "CM", overall: 83 },
      { name: "Schuster", pos: "CM", overall: 91 },
      { name: "Marcos", pos: "RM", overall: 81 },
      { name: "Pichi Alonso", pos: "ST", overall: 84 },
      { name: "Archibald", pos: "ST", overall: 84 },
      { name: "Carrasco", pos: "LM", overall: 84 }
    ]
  },
  {
    id: "porto_8687",
    name: "Porto",
    season: "1986-87",
    country: "PT",
    flag: "🇵🇹",
    formation: "4-3-3",
    players: [
      { name: "Mlynarczyk", pos: "GK", overall: 84 },
      { name: "Joao Pinto", pos: "RB", overall: 83 },
      { name: "Lima Pereira", pos: "CB", overall: 82 },
      { name: "Eduardo Luis", pos: "CB", overall: 81 },
      { name: "Inacio", pos: "LB", overall: 82 },
      { name: "Sousa", pos: "CM", overall: 84 },
      { name: "Andre", pos: "CM", overall: 80 },
      { name: "Magalhaes", pos: "RW", overall: 80 },
      { name: "Futre", pos: "ST", overall: 91 },
      { name: "Madjer", pos: "ST", overall: 87 },
      { name: "Gomes", pos: "LW", overall: 82 }
    ]
  },
  {
    id: "milan_8990",
    name: "Milan",
    season: "1989-90",
    country: "IT",
    flag: "🇮🇹",
    formation: "4-4-2",
    players: [
      { name: "Galli", pos: "GK", overall: 88 },
      { name: "Tassotti", pos: "RB", overall: 87 },
      { name: "Costacurta", pos: "CB", overall: 86 },
      { name: "Baresi", pos: "CB", overall: 96 },
      { name: "Maldini", pos: "LB", overall: 93 },
      { name: "Colombo", pos: "RM", overall: 81 },
      { name: "Ancelotti", pos: "CM", overall: 87 },
      { name: "Rijkaard", pos: "CM", overall: 95 },
      { name: "Donadoni", pos: "LM", overall: 88 },
      { name: "Van Basten", pos: "ST", overall: 98 },
      { name: "Gullit", pos: "ST", overall: 95 }
    ]
  },
  {
    id: "benfica_8990",
    name: "Benfica",
    season: "1989-90",
    country: "PT",
    flag: "🇵🇹",
    formation: "4-4-2",
    players: [
      { name: "Silvino", pos: "GK", overall: 84 },
      { name: "Joao Pinto", pos: "RB", overall: 82 },
      { name: "Aldair", pos: "CB", overall: 87 },
      { name: "Veloso", pos: "CB", overall: 81 },
      { name: "Samuel", pos: "LB", overall: 80 },
      { name: "Hernani", pos: "CM", overall: 80 },
      { name: "Thern", pos: "CM", overall: 85 },
      { name: "Magnusson", pos: "RM", overall: 82 },
      { name: "Pacheco", pos: "ST", overall: 82 },
      { name: "Vata", pos: "ST", overall: 82 },
      { name: "Vitor Paneira", pos: "LM", overall: 82 }
    ]
  },
  {
    id: "marseille_9091",
    name: "Marseille",
    season: "1990-91",
    country: "FR",
    flag: "🇫🇷",
    formation: "4-4-2",
    players: [
      { name: "Olmeta", pos: "GK", overall: 85 },
      { name: "Mozer", pos: "CB", overall: 87 },
      { name: "Boli", pos: "CB", overall: 89 },
      { name: "Casoni", pos: "RB", overall: 80 },
      { name: "Fournier", pos: "LB", overall: 80 },
      { name: "Germain", pos: "CM", overall: 82 },
      { name: "Vata", pos: "CM", overall: 82 },
      { name: "Pele", pos: "RM", overall: 82 },
      { name: "Papin", pos: "ST", overall: 93 },
      { name: "Waddle", pos: "LM", overall: 89 },
      { name: "Stojkovic", pos: "AM", overall: 88 }
    ]
  },
  {
    id: "milan_9293",
    name: "Milan",
    season: "1992-93",
    country: "IT",
    flag: "🇮🇹",
    formation: "4-4-2",
    players: [
      { name: "Rossi", pos: "GK", overall: 84 },
      { name: "Tassotti", pos: "RB", overall: 88 },
      { name: "Costacurta", pos: "CB", overall: 88 },
      { name: "Baresi", pos: "CB", overall: 96 },
      { name: "Maldini", pos: "LB", overall: 95 },
      { name: "Albertini", pos: "CM", overall: 87 },
      { name: "Rijkaard", pos: "CM", overall: 93 },
      { name: "Donadoni", pos: "RM", overall: 87 },
      { name: "Van Basten", pos: "ST", overall: 96 },
      { name: "Massaro", pos: "ST", overall: 84 },
      { name: "Papin", pos: "LM", overall: 89 }
    ]
  },
  {
    id: "milan_9394",
    name: "Milan",
    season: "1993-94",
    country: "IT",
    flag: "🇮🇹",
    formation: "4-4-2",
    players: [
      { name: "Rossi", pos: "GK", overall: 85 },
      { name: "Tassotti", pos: "RB", overall: 88 },
      { name: "Costacurta", pos: "CB", overall: 89 },
      { name: "Baresi", pos: "CB", overall: 96 },
      { name: "Maldini", pos: "LB", overall: 96 },
      { name: "Albertini", pos: "CM", overall: 88 },
      { name: "Desailly", pos: "CM", overall: 91 },
      { name: "Donadoni", pos: "RM", overall: 87 },
      { name: "Massaro", pos: "ST", overall: 87 },
      { name: "Savicevic", pos: "AM", overall: 92 },
      { name: "Boban", pos: "LM", overall: 86 }
    ]
  },
  {
    id: "barcelona_9394",
    name: "Barcelona",
    season: "1993-94",
    country: "ES",
    flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Zubizarreta", pos: "GK", overall: 89 },
      { name: "Ferrer", pos: "RB", overall: 88 },
      { name: "R. Koeman", pos: "CB", overall: 92 },
      { name: "Nadal", pos: "CB", overall: 84 },
      { name: "Sergi", pos: "LB", overall: 84 },
      { name: "Guardiola", pos: "CM", overall: 91 },
      { name: "Bakero", pos: "CM", overall: 87 },
      { name: "Amor", pos: "CM", overall: 84 },
      { name: "Stoichkov", pos: "RW", overall: 93 },
      { name: "Romario", pos: "ST", overall: 96 },
      { name: "Beguiristain", pos: "LW", overall: 85 }
    ]
  },
  {
    id: "milan_9495",
    name: "Milan",
    season: "1994-95",
    country: "IT",
    flag: "🇮🇹",
    formation: "4-4-2",
    players: [
      { name: "Rossi", pos: "GK", overall: 85 },
      { name: "Tassotti", pos: "RB", overall: 88 },
      { name: "Costacurta", pos: "CB", overall: 89 },
      { name: "Baresi", pos: "CB", overall: 95 },
      { name: "Panucci", pos: "LB", overall: 85 },
      { name: "Albertini", pos: "CM", overall: 89 },
      { name: "Desailly", pos: "CM", overall: 91 },
      { name: "Donadoni", pos: "RM", overall: 86 },
      { name: "Massaro", pos: "ST", overall: 86 },
      { name: "Boban", pos: "AM", overall: 87 },
      { name: "Simone", pos: "LM", overall: 82 }
    ]
  },
  {
    id: "juventus_9596",
    name: "Juventus",
    season: "1995-96",
    country: "IT",
    flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Peruzzi", pos: "GK", overall: 89 },
      { name: "Torricelli", pos: "RB", overall: 82 },
      { name: "Ferrara", pos: "CB", overall: 85 },
      { name: "Jugovic", pos: "CM", overall: 88 },
      { name: "Pessotto", pos: "LB", overall: 82 },
      { name: "Deschamps", pos: "CM", overall: 90 },
      { name: "Conte", pos: "CM", overall: 84 },
      { name: "Padovano", pos: "RW", overall: 82 },
      { name: "Ravanelli", pos: "ST", overall: 89 },
      { name: "Vialli", pos: "ST", overall: 89 },
      { name: "Del Piero", pos: "LW", overall: 91 }
    ]
  },
  {
    id: "real_madrid_9798",
    name: "Real Madrid",
    season: "1997-98",
    country: "ES",
    flag: "🇪🇸",
    formation: "4-4-2",
    players: [
      { name: "Illgner", pos: "GK", overall: 86 },
      { name: "Chendo", pos: "RB", overall: 81 },
      { name: "Hierro", pos: "CB", overall: 92 },
      { name: "Sanchis", pos: "CB", overall: 85 },
      { name: "Panucci", pos: "LB", overall: 87 },
      { name: "Redondo", pos: "CM", overall: 92 },
      { name: "Seedorf", pos: "CM", overall: 88 },
      { name: "Raul", pos: "RW", overall: 90 },
      { name: "Mijatovic", pos: "ST", overall: 89 },
      { name: "Suker", pos: "ST", overall: 88 },
      { name: "Morientes", pos: "LM", overall: 85 }
    ]
  },
  {
    id: "juventus_9798",
    name: "Juventus",
    season: "1997-98",
    country: "IT",
    flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Peruzzi", pos: "GK", overall: 90 },
      { name: "Torricelli", pos: "RB", overall: 83 },
      { name: "Ferrara", pos: "CB", overall: 86 },
      { name: "Iuliano", pos: "CB", overall: 84 },
      { name: "Pessotto", pos: "LB", overall: 83 },
      { name: "Deschamps", pos: "CM", overall: 91 },
      { name: "Davids", pos: "CM", overall: 90 },
      { name: "Zidane", pos: "AM", overall: 95 },
      { name: "Inzaghi", pos: "ST", overall: 89 },
      { name: "Del Piero", pos: "ST", overall: 94 },
      { name: "Vieri", pos: "LW", overall: 90 }
    ]
  },
  {
    id: "man_united_9899",
    name: "Manchester United",
    season: "1998-99",
    country: "EN",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-4-2",
    players: [
      { name: "Schmeichel", pos: "GK", overall: 94 },
      { name: "G. Neville", pos: "RB", overall: 86 },
      { name: "Stam", pos: "CB", overall: 94 },
      { name: "Johnsen", pos: "CB", overall: 83 },
      { name: "Irwin", pos: "LB", overall: 85 },
      { name: "Beckham", pos: "RM", overall: 92 },
      { name: "Keane", pos: "CM", overall: 93 },
      { name: "Scholes", pos: "CM", overall: 90 },
      { name: "Giggs", pos: "LM", overall: 92 },
      { name: "Yorke", pos: "ST", overall: 90 },
      { name: "Cole", pos: "ST", overall: 89 }
    ]
  },
  {
    id: "bayern_9899",
    name: "Bayern de Munique",
    season: "1998-99",
    country: "DE",
    flag: "🇩🇪",
    formation: "4-4-2",
    players: [
      { name: "Kahn", pos: "GK", overall: 93 },
      { name: "Babbel", pos: "RB", overall: 85 },
      { name: "Matthaus", pos: "CB", overall: 89 },
      { name: "Linke", pos: "CB", overall: 83 },
      { name: "Tarnat", pos: "LB", overall: 83 },
      { name: "Effenberg", pos: "CM", overall: 91 },
      { name: "Jeremies", pos: "CM", overall: 83 },
      { name: "Basler", pos: "RM", overall: 87 },
      { name: "Jancker", pos: "ST", overall: 84 },
      { name: "Zickler", pos: "ST", overall: 82 },
      { name: "Salihamidzic", pos: "LM", overall: 84 }
    ]
  },
  {
    id: "real_madrid_9900",
    name: "Real Madrid",
    season: "1999-2000",
    country: "ES",
    flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Casillas", pos: "GK", overall: 87 },
      { name: "Salgado", pos: "RB", overall: 84 },
      { name: "Hierro", pos: "CB", overall: 91 },
      { name: "Karembeu", pos: "CB", overall: 82 },
      { name: "Roberto Carlos", pos: "LB", overall: 93 },
      { name: "Redondo", pos: "CM", overall: 92 },
      { name: "Helguera", pos: "CM", overall: 84 },
      { name: "Figo", pos: "RW", overall: 93 },
      { name: "Raul", pos: "ST", overall: 92 },
      { name: "Anelka", pos: "ST", overall: 87 },
      { name: "Morientes", pos: "LW", overall: 88 }
    ]
  },
  {
    id: "milan_0203",
    name: "Milan",
    season: "2002-03",
    country: "IT",
    flag: "🇮🇹",
    formation: "4-3-1-2",
    players: [
      { name: "Dida", pos: "GK", overall: 87 },
      { name: "Cafu", pos: "RB", overall: 90 },
      { name: "Nesta", pos: "CB", overall: 92 },
      { name: "Maldini", pos: "CB", overall: 92 },
      { name: "Costacurta", pos: "LB", overall: 82 },
      { name: "Gattuso", pos: "CM", overall: 87 },
      { name: "Pirlo", pos: "CM", overall: 90 },
      { name: "Seedorf", pos: "AM", overall: 90 },
      { name: "Rui Costa", pos: "AM", overall: 89 },
      { name: "Shevchenko", pos: "ST", overall: 95 },
      { name: "Inzaghi", pos: "ST", overall: 89 }
    ]
  },
  {
    id: "juventus_0203",
    name: "Juventus",
    season: "2002-03",
    country: "IT",
    flag: "🇮🇹",
    formation: "4-3-1-2",
    players: [
      { name: "Buffon", pos: "GK", overall: 94 },
      { name: "Birindelli", pos: "RB", overall: 80 },
      { name: "Thuram", pos: "CB", overall: 89 },
      { name: "Ferrara", pos: "CB", overall: 83 },
      { name: "Zambrotta", pos: "LB", overall: 88 },
      { name: "Tacchinardi", pos: "CM", overall: 82 },
      { name: "Davids", pos: "CM", overall: 89 },
      { name: "Zalayeta", pos: "AM", overall: 82 },
      { name: "Nedved", pos: "AM", overall: 93 },
      { name: "Del Piero", pos: "ST", overall: 92 },
      { name: "Trezeguet", pos: "ST", overall: 90 }
    ]
  },
  {
    id: "liverpool_0405",
    name: "Liverpool",
    season: "2004-05",
    country: "EN",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-4-2",
    players: [
      { name: "Dudek", pos: "GK", overall: 85 },
      { name: "Finnan", pos: "RB", overall: 82 },
      { name: "Carragher", pos: "CB", overall: 88 },
      { name: "Hyypia", pos: "CB", overall: 87 },
      { name: "Traore", pos: "LB", overall: 80 },
      { name: "Hamann", pos: "CM", overall: 83 },
      { name: "Gerrard", pos: "CM", overall: 93 },
      { name: "Alonso", pos: "CM", overall: 90 },
      { name: "Garcia", pos: "RW", overall: 82 },
      { name: "Baros", pos: "ST", overall: 83 },
      { name: "Kewell", pos: "LW", overall: 84 }
    ]
  },
  {
    id: "milan_0405",
    name: "Milan",
    season: "2004-05",
    country: "IT",
    flag: "🇮🇹",
    formation: "4-3-1-2",
    players: [
      { name: "Dida", pos: "GK", overall: 88 },
      { name: "Cafu", pos: "RB", overall: 89 },
      { name: "Nesta", pos: "CB", overall: 93 },
      { name: "Stam", pos: "CB", overall: 89 },
      { name: "Maldini", pos: "LB", overall: 90 },
      { name: "Gattuso", pos: "CM", overall: 88 },
      { name: "Pirlo", pos: "CM", overall: 92 },
      { name: "Kaka", pos: "AM", overall: 93 },
      { name: "Seedorf", pos: "AM", overall: 89 },
      { name: "Shevchenko", pos: "ST", overall: 96 },
      { name: "Crespo", pos: "ST", overall: 91 }
    ]
  },
  {
    id: "liverpool_0607",
    name: "Liverpool",
    season: "2006-07",
    country: "EN",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-4-2",
    players: [
      { name: "Reina", pos: "GK", overall: 87 },
      { name: "Finnan", pos: "RB", overall: 82 },
      { name: "Carragher", pos: "CB", overall: 89 },
      { name: "Agger", pos: "CB", overall: 84 },
      { name: "Riise", pos: "LB", overall: 84 },
      { name: "Sissoko", pos: "CM", overall: 84 },
      { name: "Gerrard", pos: "CM", overall: 94 },
      { name: "Alonso", pos: "CM", overall: 91 },
      { name: "Pennant", pos: "RM", overall: 80 },
      { name: "Kuyt", pos: "ST", overall: 85 },
      { name: "Bellamy", pos: "LM", overall: 83 }
    ]
  },
  {
    id: "man_united_0708",
    name: "Manchester United",
    season: "2007-08",
    country: "EN",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-4-2",
    players: [
      { name: "Van der Sar", pos: "GK", overall: 89 },
      { name: "Brown", pos: "RB", overall: 82 },
      { name: "Ferdinand", pos: "CB", overall: 89 },
      { name: "Vidic", pos: "CB", overall: 90 },
      { name: "Evra", pos: "LB", overall: 88 },
      { name: "Hargreaves", pos: "CM", overall: 84 },
      { name: "Scholes", pos: "CM", overall: 89 },
      { name: "Ronaldo", pos: "RW", overall: 97 },
      { name: "Carrick", pos: "CM", overall: 84 },
      { name: "Rooney", pos: "ST", overall: 92 },
      { name: "Tevez", pos: "LW", overall: 89 }
    ]
  },
  {
    id: "chelsea_0708",
    name: "Chelsea",
    season: "2007-08",
    country: "EN",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "Cech", pos: "GK", overall: 92 },
      { name: "Ferreira", pos: "RB", overall: 83 },
      { name: "Terry", pos: "CB", overall: 93 },
      { name: "Carvalho", pos: "CB", overall: 89 },
      { name: "A. Cole", pos: "LB", overall: 90 },
      { name: "Essien", pos: "CM", overall: 89 },
      { name: "Makelele", pos: "CM", overall: 87 },
      { name: "Lampard", pos: "RW", overall: 91 },
      { name: "J. Cole", pos: "AM", overall: 85 },
      { name: "Drogba", pos: "ST", overall: 92 },
      { name: "Anelka", pos: "LW", overall: 87 }
    ]
  },
  {
    id: "man_united_0809",
    name: "Manchester United",
    season: "2008-09",
    country: "EN",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-4-2",
    players: [
      { name: "Van der Sar", pos: "GK", overall: 90 },
      { name: "O'Shea", pos: "RB", overall: 82 },
      { name: "Ferdinand", pos: "CB", overall: 90 },
      { name: "Vidic", pos: "CB", overall: 91 },
      { name: "Evra", pos: "LB", overall: 89 },
      { name: "Carrick", pos: "CM", overall: 85 },
      { name: "Anderson", pos: "CM", overall: 81 },
      { name: "Ronaldo", pos: "RW", overall: 98 },
      { name: "Park", pos: "LM", overall: 82 },
      { name: "Rooney", pos: "ST", overall: 92 },
      { name: "Giggs", pos: "AM", overall: 84 }
    ]
  },
  {
    id: "bayern_0910",
    name: "Bayern de Munique",
    season: "2009-10",
    country: "DE",
    flag: "🇩🇪",
    formation: "4-2-3-1",
    players: [
      { name: "Butt", pos: "GK", overall: 87 },
      { name: "Lahm", pos: "RB", overall: 91 },
      { name: "Demichelis", pos: "CB", overall: 84 },
      { name: "Van Buyten", pos: "CB", overall: 85 },
      { name: "Badstuber", pos: "LB", overall: 82 },
      { name: "Van Bommel", pos: "CM", overall: 87 },
      { name: "Schweinsteiger", pos: "CM", overall: 90 },
      { name: "Robben", pos: "RW", overall: 92 },
      { name: "Muller", pos: "AM", overall: 87 },
      { name: "Gomez", pos: "ST", overall: 87 },
      { name: "Ribery", pos: "LW", overall: 92 }
    ]
  },
  {
    id: "barcelona_1011",
    name: "Barcelona",
    season: "2010-11",
    country: "ES",
    flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Valdes", pos: "GK", overall: 89 },
      { name: "Alves", pos: "RB", overall: 90 },
      { name: "Pique", pos: "CB", overall: 91 },
      { name: "Mascherano", pos: "CB", overall: 88 },
      { name: "Abidal", pos: "LB", overall: 85 },
      { name: "Busquets", pos: "CM", overall: 87 },
      { name: "Xavi", pos: "CM", overall: 96 },
      { name: "Iniesta", pos: "CM", overall: 95 },
      { name: "Pedro", pos: "RW", overall: 87 },
      { name: "Villa", pos: "ST", overall: 90 },
      { name: "Messi", pos: "LW", overall: 99 }
    ]
  },
  {
    id: "man_united_1011",
    name: "Manchester United",
    season: "2010-11",
    country: "EN",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-4-2",
    players: [
      { name: "Van der Sar", pos: "GK", overall: 89 },
      { name: "Fabio", pos: "RB", overall: 78 },
      { name: "Ferdinand", pos: "CB", overall: 87 },
      { name: "Vidic", pos: "CB", overall: 91 },
      { name: "Evra", pos: "LB", overall: 89 },
      { name: "Park", pos: "RM", overall: 82 },
      { name: "Carrick", pos: "CM", overall: 84 },
      { name: "Giggs", pos: "CM", overall: 84 },
      { name: "Valencia", pos: "LM", overall: 85 },
      { name: "Rooney", pos: "ST", overall: 91 },
      { name: "Hernandez", pos: "ST", overall: 84 }
    ]
  },
  {
    id: "bayern_1112",
    name: "Bayern de Munique",
    season: "2011-12",
    country: "DE",
    flag: "🇩🇪",
    formation: "4-2-3-1",
    players: [
      { name: "Neuer", pos: "GK", overall: 92 },
      { name: "Lahm", pos: "RB", overall: 93 },
      { name: "Boateng", pos: "CB", overall: 87 },
      { name: "Tymoshchuk", pos: "CB", overall: 83 },
      { name: "Contento", pos: "LB", overall: 79 },
      { name: "Schweinsteiger", pos: "CM", overall: 91 },
      { name: "Kroos", pos: "CM", overall: 90 },
      { name: "Robben", pos: "RW", overall: 93 },
      { name: "Muller", pos: "AM", overall: 89 },
      { name: "Gomez", pos: "ST", overall: 89 },
      { name: "Ribery", pos: "LW", overall: 93 }
    ]
  },
  {
    id: "bayern_1213",
    name: "Bayern de Munique",
    season: "2012-13",
    country: "DE",
    flag: "🇩🇪",
    formation: "4-2-3-1",
    players: [
      { name: "Neuer", pos: "GK", overall: 94 },
      { name: "Lahm", pos: "RB", overall: 93 },
      { name: "Dante", pos: "CB", overall: 87 },
      { name: "Boateng", pos: "CB", overall: 89 },
      { name: "Alaba", pos: "LB", overall: 88 },
      { name: "Schweinsteiger", pos: "CM", overall: 92 },
      { name: "Martinez", pos: "CM", overall: 87 },
      { name: "Robben", pos: "RW", overall: 94 },
      { name: "Muller", pos: "AM", overall: 91 },
      { name: "Mandzukic", pos: "ST", overall: 87 },
      { name: "Ribery", pos: "LW", overall: 95 }
    ]
  },
  {
    id: "juventus_1415",
    name: "Juventus",
    season: "2014-15",
    country: "IT",
    flag: "🇮🇹",
    formation: "3-5-2",
    players: [
      { name: "Buffon", pos: "GK", overall: 92 },
      { name: "Barzagli", pos: "CB", overall: 86 },
      { name: "Bonucci", pos: "CB", overall: 89 },
      { name: "Chiellini", pos: "CB", overall: 91 },
      { name: "Lichtsteiner", pos: "RM", overall: 85 },
      { name: "Pirlo", pos: "CM", overall: 89 },
      { name: "Vidal", pos: "CM", overall: 90 },
      { name: "Pogba", pos: "CM", overall: 89 },
      { name: "Evra", pos: "LM", overall: 85 },
      { name: "Tevez", pos: "ST", overall: 90 },
      { name: "Morata", pos: "ST", overall: 84 }
    ]
  },
  {
    id: "real_madrid_1516",
    name: "Real Madrid",
    season: "2015-16",
    country: "ES",
    flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Navas", pos: "GK", overall: 90 },
      { name: "Carvajal", pos: "RB", overall: 87 },
      { name: "Pepe", pos: "CB", overall: 88 },
      { name: "Ramos", pos: "CB", overall: 94 },
      { name: "Marcelo", pos: "LB", overall: 90 },
      { name: "Casemiro", pos: "CM", overall: 87 },
      { name: "Modric", pos: "CM", overall: 95 },
      { name: "Kroos", pos: "CM", overall: 93 },
      { name: "Isco", pos: "RW", overall: 87 },
      { name: "Benzema", pos: "ST", overall: 90 },
      { name: "Ronaldo", pos: "LW", overall: 98 }
    ]
  },
  {
    id: "real_madrid_1617",
    name: "Real Madrid",
    season: "2016-17",
    country: "ES",
    flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Navas", pos: "GK", overall: 90 },
      { name: "Carvajal", pos: "RB", overall: 88 },
      { name: "Ramos", pos: "CB", overall: 94 },
      { name: "Varane", pos: "CB", overall: 90 },
      { name: "Marcelo", pos: "LB", overall: 90 },
      { name: "Casemiro", pos: "CM", overall: 88 },
      { name: "Modric", pos: "CM", overall: 96 },
      { name: "Kroos", pos: "CM", overall: 94 },
      { name: "Isco", pos: "RW", overall: 88 },
      { name: "Benzema", pos: "ST", overall: 91 },
      { name: "Ronaldo", pos: "LW", overall: 99 }
    ]
  },
  {
    id: "juventus_1617",
    name: "Juventus",
    season: "2016-17",
    country: "IT",
    flag: "🇮🇹",
    formation: "3-5-2",
    players: [
      { name: "Buffon", pos: "GK", overall: 91 },
      { name: "Barzagli", pos: "CB", overall: 84 },
      { name: "Bonucci", pos: "CB", overall: 91 },
      { name: "Chiellini", pos: "CB", overall: 90 },
      { name: "Lichtsteiner", pos: "RM", overall: 83 },
      { name: "Khedira", pos: "CM", overall: 87 },
      { name: "Pjanic", pos: "CM", overall: 88 },
      { name: "Alex Sandro", pos: "LM", overall: 86 },
      { name: "Mandzukic", pos: "ST", overall: 87 },
      { name: "Higuain", pos: "ST", overall: 91 },
      { name: "Dybala", pos: "AM", overall: 89 }
    ]
  },
  {
    id: "man_city_2021",
    name: "Manchester City",
    season: "2020-21",
    country: "EN",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "Ederson", pos: "GK", overall: 87 },
      { name: "Walker", pos: "RB", overall: 84 },
      { name: "Dias", pos: "CB", overall: 87 },
      { name: "Stones", pos: "CB", overall: 81 },
      { name: "Zinchenko", pos: "LB", overall: 80 },
      { name: "Rodri", pos: "CM", overall: 85 },
      { name: "De Bruyne", pos: "CM", overall: 93 },
      { name: "Foden", pos: "RW", overall: 85 },
      { name: "Gundogan", pos: "AM", overall: 84 },
      { name: "Sterling", pos: "ST", overall: 85 },
      { name: "Mahrez", pos: "LW", overall: 83 }
    ]
  },
  {
    id: "real_madrid_2122",
    name: "Real Madrid",
    season: "2021-22",
    country: "ES",
    flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Courtois", pos: "GK", overall: 90 },
      { name: "Carvajal", pos: "RB", overall: 83 },
      { name: "Militao", pos: "CB", overall: 83 },
      { name: "Alaba", pos: "CB", overall: 86 },
      { name: "Mendy", pos: "LB", overall: 82 },
      { name: "Casemiro", pos: "CM", overall: 87 },
      { name: "Kroos", pos: "CM", overall: 87 },
      { name: "Modric", pos: "CM", overall: 89 },
      { name: "Vinicius Jr", pos: "LW", overall: 88 },
      { name: "Benzema", pos: "ST", overall: 93 },
      { name: "Rodrygo", pos: "RW", overall: 84 }
    ]
  },
  {
    id: "liverpool_2122",
    name: "Liverpool",
    season: "2021-22",
    country: "EN",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "Alisson", pos: "GK", overall: 89 },
      { name: "Alexander-Arnold", pos: "RB", overall: 86 },
      { name: "Van Dijk", pos: "CB", overall: 89 },
      { name: "Matip", pos: "CB", overall: 81 },
      { name: "Robertson", pos: "LB", overall: 86 },
      { name: "Fabinho", pos: "CM", overall: 85 },
      { name: "Henderson", pos: "CM", overall: 82 },
      { name: "Thiago", pos: "CM", overall: 84 },
      { name: "Salah", pos: "RW", overall: 92 },
      { name: "Mane", pos: "ST", overall: 88 },
      { name: "Diaz", pos: "LW", overall: 84 }
    ]
  },
  {
    id: "man_city_2223",
    name: "Manchester City",
    season: "2022-23",
    country: "EN",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "Ederson", pos: "GK", overall: 87 },
      { name: "Walker", pos: "RB", overall: 83 },
      { name: "Dias", pos: "CB", overall: 87 },
      { name: "Akanji", pos: "CB", overall: 82 },
      { name: "Ake", pos: "LB", overall: 81 },
      { name: "Rodri", pos: "CM", overall: 89 },
      { name: "De Bruyne", pos: "CM", overall: 93 },
      { name: "Bernardo Silva", pos: "RW", overall: 87 },
      { name: "Gundogan", pos: "AM", overall: 85 },
      { name: "Haaland", pos: "ST", overall: 92 },
      { name: "Grealish", pos: "LW", overall: 83 }
    ]
  },
  {
    id: "inter_2223",
    name: "Internazionale",
    season: "2022-23",
    country: "IT",
    flag: "🇮🇹",
    formation: "3-5-2",
    players: [
      { name: "Onana", pos: "GK", overall: 83 },
      { name: "Skriniar", pos: "CB", overall: 85 },
      { name: "Acerbi", pos: "CB", overall: 81 },
      { name: "Bastoni", pos: "CB", overall: 85 },
      { name: "Dumfries", pos: "RM", overall: 83 },
      { name: "Barella", pos: "CM", overall: 86 },
      { name: "Brozovic", pos: "CM", overall: 83 },
      { name: "Mkhitaryan", pos: "CM", overall: 82 },
      { name: "Dimarco", pos: "LM", overall: 82 },
      { name: "Lautaro Martinez", pos: "ST", overall: 87 },
      { name: "Lukaku", pos: "ST", overall: 83 }
    ]
  },
  {
    id: "real_madrid_2324",
    name: "Real Madrid",
    season: "2023-24",
    country: "ES",
    flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Lunin", pos: "GK", overall: 83 },
      { name: "Carvajal", pos: "RB", overall: 83 },
      { name: "Militao", pos: "CB", overall: 82 },
      { name: "Rudiger", pos: "CB", overall: 85 },
      { name: "Mendy", pos: "LB", overall: 81 },
      { name: "Tchouameni", pos: "CM", overall: 84 },
      { name: "Kroos", pos: "CM", overall: 85 },
      { name: "Bellingham", pos: "AM", overall: 91 },
      { name: "Vinicius Jr", pos: "LW", overall: 91 },
      { name: "Rodrygo", pos: "RW", overall: 85 },
      { name: "Joselu", pos: "ST", overall: 79 }
    ]
  }

];

// ═══════════════════════════════════════════════════════════════
// TIMES HISTÓRICOS DO BRASIL — pool usado no modo COPA DO BRASIL
// Times reais do futebol brasileiro, agrupados por campanha de origem
// (Brasileirão, Copa do Brasil, Libertadores, Sul-Americana/Mundial/
// Estaduais) só pra facilitar a manutenção deste arquivo — o jogo NÃO
// usa nem mostra essa categoria, é só comentário de organização.
// ═══════════════════════════════════════════════════════════════
const BRAZIL_TEAMS = [

  // ───────── BRASILEIRÃO (campeões históricos) ─────────
  {
    id: "br_santos_1962", name: "Santos", season: "1962", country: "BR", flag: "🇧🇷",
    formation: "4-2-4",
    players: [
      { name: "Gilmar", pos: "GK", overall: 90 },
      { name: "Lima", pos: "RB", overall: 78 },
      { name: "Mauro Ramos", pos: "CB", overall: 85 },
      { name: "Ito", pos: "CB", overall: 79 },
      { name: "Calvet", pos: "LB", overall: 76 },
      { name: "Zito", pos: "CM", overall: 87 },
      { name: "Mengálvio", pos: "CM", overall: 84 },
      { name: "Dorval", pos: "RW", overall: 81 },
      { name: "Coutinho", pos: "AM", overall: 86 },
      { name: "Pepe", pos: "LW", overall: 88 },
      { name: "Pelé", pos: "CF", overall: 99 }
    ]
  },
  {
    id: "br_botafogo_1962", name: "Botafogo", season: "1962", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Manga", pos: "GK", overall: 85 },
      { name: "De Sordi", pos: "RB", overall: 79 },
      { name: "Altair", pos: "CB", overall: 77 },
      { name: "Zequinha", pos: "CB", overall: 75 },
      { name: "Nílton Santos", pos: "LB", overall: 91 },
      { name: "Didi", pos: "CM", overall: 92 },
      { name: "Zagallo", pos: "CM", overall: 83 },
      { name: "Amarildo", pos: "LM", overall: 84 },
      { name: "Garrincha", pos: "RW", overall: 96 },
      { name: "Quarentinha", pos: "ST", overall: 81 },
      { name: "Paulo Valentim", pos: "ST", overall: 80 }
    ]
  },
  {
    id: "br_cruzeiro_1966", name: "Cruzeiro", season: "1966", country: "BR", flag: "🇧🇷",
    formation: "4-2-4",
    players: [
      { name: "Espinosa", pos: "GK", overall: 82 },
      { name: "Procópio", pos: "RB", overall: 76 },
      { name: "Zé Carlos", pos: "CB", overall: 78 },
      { name: "Ditão", pos: "CB", overall: 77 },
      { name: "Natalino", pos: "LB", overall: 75 },
      { name: "Servílio", pos: "CM", overall: 80 },
      { name: "Evaldo", pos: "CM", overall: 77 },
      { name: "Dirceu Lopes", pos: "AM", overall: 86 },
      { name: "Natal", pos: "RW", overall: 78 },
      { name: "Palhinha", pos: "LW", overall: 81 },
      { name: "Tostão", pos: "CF", overall: 92 }
    ]
  },
  {
    id: "br_palmeiras_1973", name: "Palmeiras", season: "1973", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Leão", pos: "GK", overall: 85 },
      { name: "Zé Carlos", pos: "RB", overall: 76 },
      { name: "Luís Pereira", pos: "CB", overall: 85 },
      { name: "Sandoval", pos: "CB", overall: 76 },
      { name: "Marinho Peres", pos: "LB", overall: 80 },
      { name: "Dudu", pos: "CM", overall: 79 },
      { name: "César Maluco", pos: "CM", overall: 78 },
      { name: "Ademir da Guia", pos: "AM", overall: 91 },
      { name: "Leivinha", pos: "RW", overall: 86 },
      { name: "Edu", pos: "LW", overall: 79 },
      { name: "Toninho Guerreiro", pos: "ST", overall: 83 }
    ]
  },
  {
    id: "br_flamengo_1981", name: "Flamengo", season: "1981", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Raul Plassmann", pos: "GK", overall: 84 },
      { name: "Leandro", pos: "RB", overall: 87 },
      { name: "Marinho Peres", pos: "CB", overall: 84 },
      { name: "Mozer", pos: "CB", overall: 85 },
      { name: "Júnior", pos: "LB", overall: 89 },
      { name: "Andrade", pos: "CM", overall: 85 },
      { name: "Adílio", pos: "CM", overall: 83 },
      { name: "Zico", pos: "AM", overall: 97 },
      { name: "Tita", pos: "RW", overall: 83 },
      { name: "Lico", pos: "LW", overall: 78 },
      { name: "Nunes", pos: "ST", overall: 85 }
    ]
  },
  {
    id: "br_gremio_1981", name: "Grêmio", season: "1981", country: "BR", flag: "🇧🇷",
    formation: "4-4-2",
    players: [
      { name: "Élder", pos: "GK", overall: 78 },
      { name: "Vilson", pos: "RB", overall: 76 },
      { name: "Baidek", pos: "CB", overall: 80 },
      { name: "Beto", pos: "CB", overall: 78 },
      { name: "Da Silva", pos: "LB", overall: 76 },
      { name: "Mário Tilico", pos: "RM", overall: 76 },
      { name: "Vaguinho", pos: "CM", overall: 79 },
      { name: "Tarciso", pos: "CM", overall: 77 },
      { name: "Renato Gaúcho", pos: "LM", overall: 89 },
      { name: "Vaglio", pos: "ST", overall: 79 },
      { name: "Vágner", pos: "ST", overall: 78 }
    ]
  },
  {
    id: "br_saopaulo_1986", name: "São Paulo", season: "1986", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Carlos", pos: "GK", overall: 80 },
      { name: "Pita", pos: "RB", overall: 76 },
      { name: "Oscar", pos: "CB", overall: 82 },
      { name: "Ronaldo", pos: "CB", overall: 76 },
      { name: "Da Silva", pos: "LB", overall: 75 },
      { name: "Sidney", pos: "CM", overall: 79 },
      { name: "Wladimir", pos: "CM", overall: 78 },
      { name: "Wilson Mano", pos: "AM", overall: 76 },
      { name: "Müller", pos: "RW", overall: 84 },
      { name: "Vaguinho", pos: "LW", overall: 77 },
      { name: "Careca", pos: "CF", overall: 91 }
    ]
  },
  {
    id: "br_vasco_1989", name: "Vasco da Gama", season: "1989", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Acácio", pos: "GK", overall: 80 },
      { name: "Sávio", pos: "RB", overall: 77 },
      { name: "Ricardo Rocha", pos: "CB", overall: 83 },
      { name: "Ézio", pos: "CB", overall: 76 },
      { name: "André Luiz", pos: "LB", overall: 77 },
      { name: "Geraldão", pos: "CM", overall: 79 },
      { name: "Mauro Galvão", pos: "CM", overall: 82 },
      { name: "Andrade", pos: "AM", overall: 83 },
      { name: "Sorato", pos: "RW", overall: 78 },
      { name: "Bismarck", pos: "LW", overall: 84 },
      { name: "Vágner Mancini", pos: "ST", overall: 78 }
    ]
  },
  {
    id: "br_saopaulo_1993", name: "São Paulo", season: "1992-93", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Zetti", pos: "GK", overall: 85 },
      { name: "Cafu", pos: "RB", overall: 89 },
      { name: "Ronaldão", pos: "CB", overall: 82 },
      { name: "André Luiz", pos: "CB", overall: 80 },
      { name: "Pedrinho", pos: "LB", overall: 79 },
      { name: "Raí", pos: "AM", overall: 90 },
      { name: "Cerezo", pos: "CM", overall: 84 },
      { name: "Palhinha", pos: "CM", overall: 81 },
      { name: "Müller", pos: "RW", overall: 86 },
      { name: "Antony de Ávila", pos: "LW", overall: 82 },
      { name: "Sidiclei", pos: "ST", overall: 78 }
    ]
  },
  {
    id: "br_palmeiras_1994", name: "Palmeiras", season: "1993-94", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Velloso", pos: "GK", overall: 81 },
      { name: "Mazinho", pos: "RB", overall: 80 },
      { name: "Antônio Carlos", pos: "CB", overall: 81 },
      { name: "Cléber", pos: "CB", overall: 80 },
      { name: "Roberto Carlos", pos: "LB", overall: 88 },
      { name: "César Sampaio", pos: "CM", overall: 84 },
      { name: "Flávio Conceição", pos: "CM", overall: 82 },
      { name: "Zinho", pos: "AM", overall: 84 },
      { name: "Edílson", pos: "RW", overall: 82 },
      { name: "Edmundo", pos: "ST", overall: 90 },
      { name: "Évair", pos: "ST", overall: 81 }
    ]
  },
  {
    id: "br_corinthians_1999", name: "Corinthians", season: "1998-99", country: "BR", flag: "🇧🇷",
    formation: "4-4-2",
    players: [
      { name: "Dida", pos: "GK", overall: 86 },
      { name: "Índio", pos: "RB", overall: 78 },
      { name: "Gamarra", pos: "CB", overall: 81 },
      { name: "Batata", pos: "CB", overall: 78 },
      { name: "Sylvinho", pos: "LB", overall: 82 },
      { name: "Vampeta", pos: "CM", overall: 82 },
      { name: "Rincón", pos: "CM", overall: 84 },
      { name: "Marcelinho Carioca", pos: "RM", overall: 87 },
      { name: "Ricardinho", pos: "LM", overall: 81 },
      { name: "Luizão", pos: "ST", overall: 84 },
      { name: "Edílson", pos: "ST", overall: 85 }
    ]
  },
  {
    id: "br_santos_2002", name: "Santos", season: "2002", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Fábio Costa", pos: "GK", overall: 79 },
      { name: "Maurinho", pos: "RB", overall: 78 },
      { name: "Alex", pos: "CB", overall: 79 },
      { name: "André Luís", pos: "CB", overall: 78 },
      { name: "Léo", pos: "LB", overall: 80 },
      { name: "Paulo Almeida", pos: "CM", overall: 78 },
      { name: "Renato", pos: "CM", overall: 79 },
      { name: "Elano", pos: "AM", overall: 84 },
      { name: "Diego", pos: "RW", overall: 86 },
      { name: "Robinho", pos: "LW", overall: 90 },
      { name: "William", pos: "ST", overall: 79 }
    ]
  },
  {
    id: "br_cruzeiro_2003", name: "Cruzeiro", season: "2003", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Fábio", pos: "GK", overall: 83 },
      { name: "Marques", pos: "RB", overall: 78 },
      { name: "Cris", pos: "CB", overall: 84 },
      { name: "Anderson Lima", pos: "CB", overall: 78 },
      { name: "Reginaldo Araújo", pos: "LB", overall: 76 },
      { name: "Mozart", pos: "CM", overall: 80 },
      { name: "Marcelo Ramos", pos: "CM", overall: 78 },
      { name: "Alex", pos: "AM", overall: 88 },
      { name: "Marcinho", pos: "RW", overall: 79 },
      { name: "Wellington Paulista", pos: "ST", overall: 84 },
      { name: "Fabiano Eller", pos: "ST", overall: 80 }
    ]
  },
  {
    id: "br_saopaulo_2007", name: "São Paulo", season: "2007", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Rogério Ceni", pos: "GK", overall: 87 },
      { name: "André Dias", pos: "RB", overall: 79 },
      { name: "Miranda", pos: "CB", overall: 80 },
      { name: "Breno", pos: "CB", overall: 78 },
      { name: "Junior", pos: "LB", overall: 80 },
      { name: "Richarlyson", pos: "CM", overall: 78 },
      { name: "Hernanes", pos: "CM", overall: 85 },
      { name: "Jorge Wagner", pos: "AM", overall: 79 },
      { name: "Leandro", pos: "RW", overall: 78 },
      { name: "Aloísio", pos: "LW", overall: 79 },
      { name: "Dagoberto", pos: "ST", overall: 82 }
    ]
  },
  {
    id: "br_fluminense_2010", name: "Fluminense", season: "2010", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Ricardo Berna", pos: "GK", overall: 80 },
      { name: "Mariano", pos: "RB", overall: 78 },
      { name: "Gum", pos: "CB", overall: 79 },
      { name: "Leandro Euzébio", pos: "CB", overall: 78 },
      { name: "Carlinhos", pos: "LB", overall: 77 },
      { name: "Valencia", pos: "CM", overall: 78 },
      { name: "Diguinho", pos: "CM", overall: 78 },
      { name: "Conca", pos: "AM", overall: 87 },
      { name: "Júlio César", pos: "RW", overall: 79 },
      { name: "Emerson Sheik", pos: "LW", overall: 80 },
      { name: "Fred", pos: "ST", overall: 86 }
    ]
  },

  // ───────── BRASILEIRÃO (era recente) ─────────
  {
    id: "br_corinthians_2012", name: "Corinthians", season: "2011-12", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Cássio", pos: "GK", overall: 86 },
      { name: "Alessandro", pos: "RB", overall: 79 },
      { name: "Chicão", pos: "CB", overall: 80 },
      { name: "Leandro Castán", pos: "CB", overall: 82 },
      { name: "Fábio Santos", pos: "LB", overall: 79 },
      { name: "Ralf", pos: "CM", overall: 80 },
      { name: "Paulinho", pos: "CM", overall: 86 },
      { name: "Danilo", pos: "AM", overall: 80 },
      { name: "Jorge Henrique", pos: "RW", overall: 78 },
      { name: "Alex", pos: "LW", overall: 80 },
      { name: "Emerson Sheik", pos: "ST", overall: 81 }
    ]
  },
  {
    id: "br_cruzeiro_2014", name: "Cruzeiro", season: "2013-14", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Fábio", pos: "GK", overall: 87 },
      { name: "Mayke", pos: "RB", overall: 78 },
      { name: "Dedé", pos: "CB", overall: 85 },
      { name: "Manoel", pos: "CB", overall: 80 },
      { name: "Egídio", pos: "LB", overall: 78 },
      { name: "Lucas Silva", pos: "CM", overall: 81 },
      { name: "Henrique", pos: "CM", overall: 79 },
      { name: "Everton Ribeiro", pos: "AM", overall: 87 },
      { name: "Ricardo Goulart", pos: "RW", overall: 87 },
      { name: "Willian", pos: "LW", overall: 80 },
      { name: "Borges", pos: "ST", overall: 81 }
    ]
  },
  {
    id: "br_palmeiras_2018", name: "Palmeiras", season: "2018", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Weverton", pos: "GK", overall: 85 },
      { name: "Marcos Rocha", pos: "RB", overall: 80 },
      { name: "Antônio Carlos", pos: "CB", overall: 78 },
      { name: "Edu Dracena", pos: "CB", overall: 79 },
      { name: "Egídio", pos: "LB", overall: 78 },
      { name: "Felipe Melo", pos: "CM", overall: 83 },
      { name: "Bruno Henrique", pos: "CM", overall: 79 },
      { name: "Moisés", pos: "AM", overall: 80 },
      { name: "Dudu", pos: "RW", overall: 87 },
      { name: "Deyverson", pos: "LW", overall: 80 },
      { name: "Borja", pos: "ST", overall: 80 }
    ]
  },
  {
    id: "br_flamengo_2019", name: "Flamengo", season: "2019", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Diego Alves", pos: "GK", overall: 86 },
      { name: "Rafinha", pos: "RB", overall: 83 },
      { name: "Rodrigo Caio", pos: "CB", overall: 83 },
      { name: "Pablo Marí", pos: "CB", overall: 81 },
      { name: "Filipe Luís", pos: "LB", overall: 83 },
      { name: "Willian Arão", pos: "CM", overall: 81 },
      { name: "Diego Ribas", pos: "CM", overall: 85 },
      { name: "Giorgian de Arrascaeta", pos: "AM", overall: 88 },
      { name: "Bruno Henrique", pos: "RW", overall: 86 },
      { name: "Everton Ribeiro", pos: "LW", overall: 85 },
      { name: "Gabigol", pos: "ST", overall: 89 }
    ]
  },
  {
    id: "br_atletico_2021", name: "Atlético Mineiro", season: "2021", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Everson", pos: "GK", overall: 81 },
      { name: "Mariano", pos: "RB", overall: 79 },
      { name: "Réver", pos: "CB", overall: 82 },
      { name: "Junior Alonso", pos: "CB", overall: 81 },
      { name: "Guilherme Arana", pos: "LB", overall: 83 },
      { name: "Allan", pos: "CM", overall: 80 },
      { name: "Jair", pos: "CM", overall: 79 },
      { name: "Nacho Fernández", pos: "AM", overall: 84 },
      { name: "Vargas", pos: "RW", overall: 80 },
      { name: "Savarino", pos: "LW", overall: 80 },
      { name: "Hulk", pos: "ST", overall: 87 }
    ]
  },
  {
    id: "br_palmeiras_2023", name: "Palmeiras", season: "2022-23", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Weverton", pos: "GK", overall: 84 },
      { name: "Marcos Rocha", pos: "RB", overall: 79 },
      { name: "Gustavo Gómez", pos: "CB", overall: 86 },
      { name: "Murilo", pos: "CB", overall: 80 },
      { name: "Piquerez", pos: "LB", overall: 82 },
      { name: "Zé Rafael", pos: "CM", overall: 80 },
      { name: "Gabriel Menino", pos: "CM", overall: 80 },
      { name: "Raphael Veiga", pos: "AM", overall: 86 },
      { name: "Dudu", pos: "RW", overall: 84 },
      { name: "Rony", pos: "LW", overall: 82 },
      { name: "Endrick", pos: "ST", overall: 83 }
    ]
  },
  {
    id: "br_botafogo_2024", name: "Botafogo", season: "2024", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "John", pos: "GK", overall: 81 },
      { name: "Vitinho", pos: "RB", overall: 78 },
      { name: "Bastos", pos: "CB", overall: 80 },
      { name: "Adryelson", pos: "CB", overall: 79 },
      { name: "Alex Telles", pos: "LB", overall: 80 },
      { name: "Gregore", pos: "CM", overall: 82 },
      { name: "Marlon Freitas", pos: "CM", overall: 80 },
      { name: "Savarino", pos: "AM", overall: 82 },
      { name: "Luiz Henrique", pos: "RW", overall: 83 },
      { name: "Júnior Santos", pos: "LW", overall: 80 },
      { name: "Tiquinho Soares", pos: "ST", overall: 83 }
    ]
  },
  {
    id: "br_flamengo_2025", name: "Flamengo", season: "2025", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Rossi", pos: "GK", overall: 83 },
      { name: "Varela", pos: "RB", overall: 80 },
      { name: "Léo Pereira", pos: "CB", overall: 83 },
      { name: "Fabrício Bruno", pos: "CB", overall: 81 },
      { name: "Ayrton Lucas", pos: "LB", overall: 80 },
      { name: "Gerson", pos: "CM", overall: 83 },
      { name: "Allan", pos: "CM", overall: 80 },
      { name: "Giorgian de Arrascaeta", pos: "AM", overall: 87 },
      { name: "Plata", pos: "RW", overall: 80 },
      { name: "Bruno Henrique", pos: "LW", overall: 82 },
      { name: "Pedro", pos: "ST", overall: 86 }
    ]
  },

  // ───────── COPA DO BRASIL (campeões históricos) ─────────
  {
    id: "br_vasco_cdb_2025", name: "Vasco da Gama", season: "2025", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Léo Jardim", pos: "GK", overall: 79 },
      { name: "Paulo Henrique", pos: "RB", overall: 75 },
      { name: "Cuesta", pos: "CB", overall: 76 },
      { name: "Robert Renan", pos: "CB", overall: 76 },
      { name: "Puma Rodríguez", pos: "LB", overall: 75 },
      { name: "Cauan Barros", pos: "CM", overall: 76 },
      { name: "Thiago Mendes", pos: "CM", overall: 78 },
      { name: "Philippe Coutinho", pos: "AM", overall: 81 },
      { name: "Nuno Moreira", pos: "RM", overall: 76 },
      { name: "Andrés Gómez", pos: "LM", overall: 76 },
      { name: "Rayan", pos: "ST", overall: 76 }
    ]
  },
  {
    id: "br_corinthians_cdb_2025", name: "Corinthians", season: "2025", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Hugo Souza", pos: "GK", overall: 80 },
      { name: "Matheuzinho", pos: "RB", overall: 76 },
      { name: "André Ramalho", pos: "CB", overall: 77 },
      { name: "Gustavo Henrique", pos: "CB", overall: 77 },
      { name: "Matheus Bidu", pos: "LB", overall: 75 },
      { name: "Raniele", pos: "CM", overall: 77 },
      { name: "José Martínez", pos: "CM", overall: 78 },
      { name: "Rodrigo Garro", pos: "AM", overall: 80 },
      { name: "Breno Bidon", pos: "RM", overall: 77 },
      { name: "Memphis Depay", pos: "LW", overall: 83 },
      { name: "Yuri Alberto", pos: "ST", overall: 81 }
    ]
  },
  {
    id: "br_palmeiras_cdb_2015", name: "Palmeiras", season: "2015", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Fernando Prass", pos: "GK", overall: 80 },
      { name: "João Pedro", pos: "RB", overall: 76 },
      { name: "Vitor Hugo", pos: "CB", overall: 78 },
      { name: "Jackson", pos: "CB", overall: 77 },
      { name: "Zé Roberto", pos: "LB", overall: 79 },
      { name: "Matheus Sales", pos: "CM", overall: 76 },
      { name: "Arouca", pos: "CM", overall: 78 },
      { name: "Robinho", pos: "AM", overall: 80 },
      { name: "Dudu", pos: "RW", overall: 82 },
      { name: "Gabriel Jesus", pos: "LW", overall: 81 },
      { name: "Lucas Barrios", pos: "ST", overall: 79 }
    ]
  },
  {
    id: "br_palmeiras_cdb_2012", name: "Palmeiras", season: "2012", country: "BR", flag: "🇧🇷",
    formation: "4-4-2",
    players: [
      { name: "Bruno", pos: "GK", overall: 80 },
      { name: "Artur", pos: "RB", overall: 76 },
      { name: "Maurício Ramos", pos: "CB", overall: 76 },
      { name: "Thiago Heleno", pos: "CB", overall: 78 },
      { name: "Juninho", pos: "LB", overall: 77 },
      { name: "Henrique", pos: "RM", overall: 76 },
      { name: "Marcos Assunção", pos: "CM", overall: 79 },
      { name: "João Vitor", pos: "CM", overall: 76 },
      { name: "Daniel Carvalho", pos: "AM", overall: 78 },
      { name: "Mazinho", pos: "ST", overall: 77 },
      { name: "Betinho", pos: "ST", overall: 77 }
    ]
  },
  {
    id: "br_vitoria_cdb_2010", name: "Vitória", season: "2010", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Viáfara", pos: "GK", overall: 77 },
      { name: "Nino", pos: "RB", overall: 75 },
      { name: "Wallace", pos: "CB", overall: 76 },
      { name: "Anderson Martins", pos: "CB", overall: 77 },
      { name: "Egídio", pos: "LB", overall: 76 },
      { name: "Neto Coruja", pos: "CM", overall: 76 },
      { name: "Bida", pos: "CM", overall: 75 },
      { name: "Ramom", pos: "AM", overall: 76 },
      { name: "Elkeson", pos: "RW", overall: 78 },
      { name: "Schwenck", pos: "LW", overall: 75 },
      { name: "Júnior", pos: "ST", overall: 78 }
    ]
  },
  {
    id: "br_sport_cdb_2008", name: "Sport", season: "2008", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Magrão", pos: "GK", overall: 79 },
      { name: "Diogo", pos: "RB", overall: 76 },
      { name: "Igor", pos: "CB", overall: 76 },
      { name: "Durval", pos: "CB", overall: 78 },
      { name: "Dutra", pos: "LB", overall: 75 },
      { name: "Daniel Paulista", pos: "CM", overall: 76 },
      { name: "Sandro Goiano", pos: "CM", overall: 76 },
      { name: "Luciano Henrique", pos: "AM", overall: 78 },
      { name: "Carlinhos Bala", pos: "LW", overall: 79 },
      { name: "Leandro Machado", pos: "ST", overall: 78 },
      { name: "Enílton", pos: "ST", overall: 76 }
    ]
  },
  {
    id: "br_figueirense_cdb_2007", name: "Figueirense", season: "2007", country: "BR", flag: "🇧🇷",
    formation: "4-4-2",
    players: [
      { name: "Wilson", pos: "GK", overall: 77 },
      { name: "Anderson Luís", pos: "RB", overall: 75 },
      { name: "Felipe Santana", pos: "CB", overall: 77 },
      { name: "Chicão", pos: "CB", overall: 78 },
      { name: "Vinícius", pos: "LB", overall: 75 },
      { name: "Ruy", pos: "RM", overall: 75 },
      { name: "Diogo", pos: "CM", overall: 75 },
      { name: "Henrique", pos: "CM", overall: 76 },
      { name: "Cleiton Xavier", pos: "AM", overall: 80 },
      { name: "André Santos", pos: "LM", overall: 78 },
      { name: "Victor Simões", pos: "ST", overall: 77 }
    ]
  },
  {
    id: "br_paulistajundiai_cdb_2005", name: "Paulista de Jundiaí", season: "2005", country: "BR", flag: "🇧🇷",
    formation: "4-4-2",
    players: [
      { name: "Rafael", pos: "GK", overall: 78 },
      { name: "Lucas", pos: "RB", overall: 76 },
      { name: "Dema", pos: "CB", overall: 75 },
      { name: "Réver", pos: "CB", overall: 78 },
      { name: "Julinho", pos: "LB", overall: 75 },
      { name: "Juliano", pos: "RM", overall: 75 },
      { name: "Fábio Gomes", pos: "CM", overall: 75 },
      { name: "Cristian", pos: "CM", overall: 77 },
      { name: "Márcio Mossoró", pos: "AM", overall: 78 },
      { name: "André Leonel", pos: "ST", overall: 76 },
      { name: "Léo", pos: "ST", overall: 77 }
    ]
  },
  {
    id: "br_fluminense_cdb_2005", name: "Fluminense", season: "2005", country: "BR", flag: "🇧🇷",
    formation: "4-4-2",
    players: [
      { name: "Fernando Henrique", pos: "GK", overall: 79 },
      { name: "Marcão", pos: "RB", overall: 76 },
      { name: "Antônio Carlos", pos: "CB", overall: 76 },
      { name: "Fabiano Eller", pos: "CB", overall: 76 },
      { name: "Juan", pos: "LB", overall: 77 },
      { name: "Arouca", pos: "RM", overall: 77 },
      { name: "Petkovic", pos: "CM", overall: 78 },
      { name: "Diego Souza", pos: "CM", overall: 77 },
      { name: "Juninho", pos: "LM", overall: 76 },
      { name: "Leandro", pos: "ST", overall: 77 },
      { name: "Alex", pos: "ST", overall: 76 }
    ]
  },
  {
    id: "br_santoandre_cdb_2004", name: "Santo André", season: "2004", country: "BR", flag: "🇧🇷",
    formation: "3-5-2",
    players: [
      { name: "Júlio César", pos: "GK", overall: 78 },
      { name: "Dedimar", pos: "CB", overall: 76 },
      { name: "Gabriel", pos: "CB", overall: 76 },
      { name: "Alex", pos: "CB", overall: 76 },
      { name: "Nelsinho", pos: "RM", overall: 76 },
      { name: "Dirceu", pos: "CM", overall: 75 },
      { name: "Ramalho", pos: "CM", overall: 76 },
      { name: "Élvis", pos: "CM", overall: 77 },
      { name: "Romerito", pos: "LM", overall: 76 },
      { name: "Osmar", pos: "ST", overall: 77 },
      { name: "Sandro Gaúcho", pos: "ST", overall: 78 }
    ]
  },
  {
    id: "br_brasiliense_cdb_2002", name: "Brasiliense", season: "2002", country: "BR", flag: "🇧🇷",
    formation: "4-4-2",
    players: [
      { name: "Donizetti", pos: "GK", overall: 74 },
      { name: "Gil Baiano", pos: "RB", overall: 75 },
      { name: "Índio", pos: "CB", overall: 74 },
      { name: "Ciro", pos: "CB", overall: 74 },
      { name: "Xavier", pos: "LB", overall: 74 },
      { name: "Maurício", pos: "RM", overall: 75 },
      { name: "Patrick", pos: "CM", overall: 74 },
      { name: "Wellington Dias", pos: "AM", overall: 77 },
      { name: "Thiago", pos: "LM", overall: 74 },
      { name: "Allan Dellon", pos: "ST", overall: 75 },
      { name: "Agenor", pos: "ST", overall: 74 }
    ]
  },
  {
    id: "br_botafogo_cdb_1999", name: "Botafogo", season: "1999", country: "BR", flag: "🇧🇷",
    formation: "4-4-2",
    players: [
      { name: "Wágner", pos: "GK", overall: 79 },
      { name: "Jorge Luís", pos: "RB", overall: 76 },
      { name: "Edimar", pos: "CB", overall: 76 },
      { name: "Bandoch", pos: "CB", overall: 75 },
      { name: "Zé Carlos", pos: "LB", overall: 75 },
      { name: "Leandro", pos: "RM", overall: 78 },
      { name: "Sérgio Manoel", pos: "CM", overall: 76 },
      { name: "Fábio Augusto", pos: "CM", overall: 75 },
      { name: "Caio", pos: "LM", overall: 78 },
      { name: "Bebeto", pos: "ST", overall: 84 },
      { name: "Rodrigo", pos: "ST", overall: 78 }
    ]
  },
  {
    id: "br_juventude_cdb_1999", name: "Juventude", season: "1999", country: "BR", flag: "🇧🇷",
    formation: "4-4-2",
    players: [
      { name: "Émerson", pos: "GK", overall: 78 },
      { name: "Marcos Teixeira", pos: "RB", overall: 76 },
      { name: "Índio", pos: "CB", overall: 76 },
      { name: "Capone", pos: "CB", overall: 78 },
      { name: "Dênis", pos: "LB", overall: 75 },
      { name: "Roberto", pos: "RM", overall: 76 },
      { name: "Flávio Campos", pos: "CM", overall: 76 },
      { name: "Lauro", pos: "CM", overall: 76 },
      { name: "Mabília", pos: "LM", overall: 77 },
      { name: "Maurílio", pos: "ST", overall: 78 },
      { name: "Márcio Mixirica", pos: "ST", overall: 78 }
    ]
  },
  {
    id: "br_cruzeiro_cdb_1993", name: "Cruzeiro", season: "1993, 1996, 2000, 2017-18", country: "BR", flag: "🇧🇷",
    formation: "4-4-2",
    players: [
      { name: "Paulo César Borges", pos: "GK", overall: 78 },
      { name: "Paulo Roberto", pos: "RB", overall: 77 },
      { name: "Cleisson", pos: "CB", overall: 78 },
      { name: "Célio Lúcio", pos: "CB", overall: 77 },
      { name: "Nonato", pos: "LB", overall: 77 },
      { name: "Edenílson", pos: "RM", overall: 76 },
      { name: "Adílson", pos: "CM", overall: 77 },
      { name: "Roberto Gaúcho", pos: "AM", overall: 80 },
      { name: "Charles", pos: "LM", overall: 76 },
      { name: "Mário Tilico", pos: "ST", overall: 77 },
      { name: "Cléber", pos: "ST", overall: 76 }
    ]
  },
  {
    id: "br_corinthians_cdb_1995", name: "Corinthians", season: "1995", country: "BR", flag: "🇧🇷",
    formation: "4-4-2",
    players: [
      { name: "Ronaldo Giovanelli", pos: "GK", overall: 80 },
      { name: "André Santos", pos: "RB", overall: 77 },
      { name: "Célio Silva", pos: "CB", overall: 78 },
      { name: "Henrique", pos: "CB", overall: 77 },
      { name: "Sylvinho", pos: "LB", overall: 80 },
      { name: "Zé Elias", pos: "CM", overall: 79 },
      { name: "Bernardo", pos: "CM", overall: 77 },
      { name: "Marcelinho Carioca", pos: "AM", overall: 86 },
      { name: "Souza", pos: "LM", overall: 76 },
      { name: "Viola", pos: "ST", overall: 79 },
      { name: "Marques", pos: "ST", overall: 77 }
    ]
  },
  {
    id: "br_ceara_cdb_1994", name: "Ceará", season: "1994", country: "BR", flag: "🇧🇷",
    formation: "4-4-2",
    players: [
      { name: "Ivanoé", pos: "GK", overall: 77 },
      { name: "Vítor Hugo", pos: "RB", overall: 75 },
      { name: "Airton", pos: "CB", overall: 76 },
      { name: "Ivanildo", pos: "CB", overall: 75 },
      { name: "Mastrillo", pos: "LB", overall: 76 },
      { name: "Elói", pos: "RM", overall: 75 },
      { name: "Catatau", pos: "CM", overall: 76 },
      { name: "Gerônimo", pos: "CM", overall: 77 },
      { name: "Zé Ricardo", pos: "LM", overall: 75 },
      { name: "Ronaldo", pos: "ST", overall: 76 },
      { name: "Sérgio Alves", pos: "ST", overall: 78 }
    ]
  },
  {
    id: "br_criciuma_cdb_1991", name: "Criciúma", season: "1991", country: "BR", flag: "🇧🇷",
    formation: "4-4-2",
    players: [
      { name: "Alexandre", pos: "GK", overall: 77 },
      { name: "Sarandi", pos: "RB", overall: 75 },
      { name: "Vilmar", pos: "CB", overall: 77 },
      { name: "Altair", pos: "CB", overall: 75 },
      { name: "Itá", pos: "LB", overall: 75 },
      { name: "Roberto Cavalo", pos: "RM", overall: 75 },
      { name: "Gélson", pos: "CM", overall: 75 },
      { name: "Grizzo", pos: "CM", overall: 76 },
      { name: "Zé Roberto", pos: "LM", overall: 75 },
      { name: "Jairo Lenzi", pos: "ST", overall: 76 },
      { name: "Soares", pos: "ST", overall: 77 }
    ]
  },
  {
    id: "br_goias_cdb_1990", name: "Goiás", season: "1990", country: "BR", flag: "🇧🇷",
    formation: "4-4-2",
    players: [
      { name: "Eduardo", pos: "GK", overall: 76 },
      { name: "Wilson", pos: "RB", overall: 74 },
      { name: "Richard", pos: "CB", overall: 75 },
      { name: "Jorge Batata", pos: "CB", overall: 75 },
      { name: "Dalton", pos: "LB", overall: 74 },
      { name: "Wallace", pos: "RM", overall: 75 },
      { name: "Fagundes", pos: "CM", overall: 75 },
      { name: "Luvanor", pos: "CM", overall: 75 },
      { name: "Josué", pos: "LM", overall: 74 },
      { name: "Niltinho", pos: "ST", overall: 76 },
      { name: "Túlio", pos: "ST", overall: 78 }
    ]
  },
  {
    id: "br_gremio_cdb_1989", name: "Grêmio", season: "1989", country: "BR", flag: "🇧🇷",
    formation: "4-4-2",
    players: [
      { name: "Mazarópi", pos: "GK", overall: 79 },
      { name: "Alfinete", pos: "RB", overall: 76 },
      { name: "Luís Eduardo", pos: "CB", overall: 77 },
      { name: "Edinho", pos: "CB", overall: 78 },
      { name: "Hélcio", pos: "LB", overall: 76 },
      { name: "André", pos: "CM", overall: 76 },
      { name: "Lino", pos: "CM", overall: 76 },
      { name: "Cuca", pos: "RM", overall: 80 },
      { name: "Assis", pos: "LM", overall: 80 },
      { name: "Nando", pos: "ST", overall: 77 },
      { name: "Paulo Egídio", pos: "ST", overall: 78 }
    ]
  },
  {
    id: "br_cruzeiro_cdb_2018", name: "Cruzeiro", season: "2017-18", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Fábio", pos: "GK", overall: 85 },
      { name: "Edílson", pos: "RB", overall: 78 },
      { name: "Manoel", pos: "CB", overall: 79 },
      { name: "Léo", pos: "CB", overall: 78 },
      { name: "Egídio", pos: "LB", overall: 77 },
      { name: "Henrique", pos: "CM", overall: 78 },
      { name: "Ariel Cabral", pos: "CM", overall: 77 },
      { name: "Robinho", pos: "AM", overall: 82 },
      { name: "Thiago Neves", pos: "RW", overall: 82 },
      { name: "Rafael Sóbis", pos: "LW", overall: 78 },
      { name: "Sassá", pos: "ST", overall: 78 }
    ]
  },
  {
    id: "br_corinthians_cdb_2022", name: "Corinthians", season: "2022", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Cássio", pos: "GK", overall: 84 },
      { name: "Fagner", pos: "RB", overall: 79 },
      { name: "Gil", pos: "CB", overall: 79 },
      { name: "Balbuena", pos: "CB", overall: 79 },
      { name: "Fábio Santos", pos: "LB", overall: 77 },
      { name: "Fausto Vera", pos: "CM", overall: 79 },
      { name: "Renato Augusto", pos: "CM", overall: 82 },
      { name: "Giuliano", pos: "AM", overall: 80 },
      { name: "Adson", pos: "RW", overall: 77 },
      { name: "Róger Guedes", pos: "LW", overall: 82 },
      { name: "Yuri Alberto", pos: "ST", overall: 81 }
    ]
  },
  {
    id: "br_saopaulo_cdb_2023", name: "São Paulo", season: "2023", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Rafael", pos: "GK", overall: 82 },
      { name: "Rafinha", pos: "RB", overall: 80 },
      { name: "Arboleda", pos: "CB", overall: 80 },
      { name: "Diego Costa", pos: "CB", overall: 78 },
      { name: "Welington", pos: "LB", overall: 78 },
      { name: "Alisson", pos: "CM", overall: 79 },
      { name: "Pablo Maia", pos: "CM", overall: 79 },
      { name: "Lucas Moura", pos: "AM", overall: 83 },
      { name: "Wellington Rato", pos: "RW", overall: 78 },
      { name: "Luciano", pos: "LW", overall: 80 },
      { name: "Calleri", pos: "ST", overall: 82 }
    ]
  },

  // ───────── LIBERTADORES (campanhas históricas brasileiras) ─────────
  {
    id: "br_internacional_lib_2023", name: "Internacional", season: "2023", country: "BR", flag: "🇧🇷",
    formation: "4-3-1-2",
    players: [
      { name: "Rochet", pos: "GK", overall: 80 },
      { name: "Hugo Mallo", pos: "RB", overall: 77 },
      { name: "Vitão", pos: "CB", overall: 78 },
      { name: "Mercado", pos: "CB", overall: 78 },
      { name: "Renê", pos: "LB", overall: 77 },
      { name: "Johnny", pos: "CM", overall: 76 },
      { name: "Mauricio", pos: "CM", overall: 76 },
      { name: "Aránguiz", pos: "CM", overall: 79 },
      { name: "Alan Patrick", pos: "AM", overall: 82 },
      { name: "Wanderson", pos: "ST", overall: 77 },
      { name: "Valencia", pos: "ST", overall: 78 }
    ]
  },
  {
    id: "br_flamengo_lib_2022", name: "Flamengo", season: "2021, 2022, 2025", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Santos", pos: "GK", overall: 80 },
      { name: "Rodinei", pos: "RB", overall: 78 },
      { name: "David Luiz", pos: "CB", overall: 83 },
      { name: "Léo Pereira", pos: "CB", overall: 81 },
      { name: "Filipe Luís", pos: "LB", overall: 81 },
      { name: "Thiago Maia", pos: "CM", overall: 78 },
      { name: "João Gomes", pos: "CM", overall: 80 },
      { name: "Éverton Ribeiro", pos: "AM", overall: 81 },
      { name: "Arrascaeta", pos: "LM", overall: 85 },
      { name: "Pedro", pos: "ST", overall: 83 },
      { name: "Gabriel", pos: "ST", overall: 82 }
    ]
  },
  {
    id: "br_athletico_lib_2022", name: "Athletico Paranaense", season: "2022", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Bento", pos: "GK", overall: 80 },
      { name: "Khellven", pos: "RB", overall: 77 },
      { name: "Pedro Henrique", pos: "CB", overall: 77 },
      { name: "Thiago Heleno", pos: "CB", overall: 78 },
      { name: "Abner", pos: "LB", overall: 78 },
      { name: "Hugo Moura", pos: "CM", overall: 77 },
      { name: "Fernandinho", pos: "CM", overall: 80 },
      { name: "Alex Santana", pos: "AM", overall: 77 },
      { name: "Canobbio", pos: "RW", overall: 78 },
      { name: "Vitinho", pos: "LW", overall: 78 },
      { name: "Vitor Roque", pos: "ST", overall: 80 }
    ]
  },
  {
    id: "br_palmeiras_lib_2020", name: "Palmeiras", season: "2020-21 e 2025", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Weverton", pos: "GK", overall: 83 },
      { name: "Marcos Rocha", pos: "RB", overall: 79 },
      { name: "Gustavo Gómez", pos: "CB", overall: 83 },
      { name: "Luan", pos: "CB", overall: 78 },
      { name: "Matías Viña", pos: "LB", overall: 79 },
      { name: "Danilo", pos: "CM", overall: 80 },
      { name: "Zé Rafael", pos: "CM", overall: 79 },
      { name: "Raphael Veiga", pos: "AM", overall: 83 },
      { name: "Gabriel Menino", pos: "RM", overall: 79 },
      { name: "Rony", pos: "LW", overall: 80 },
      { name: "Luiz Adriano", pos: "ST", overall: 79 }
    ]
  },
  {
    id: "br_santos_lib_2020", name: "Santos", season: "2020", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "John", pos: "GK", overall: 78 },
      { name: "Pará", pos: "RB", overall: 77 },
      { name: "Lucas Veríssimo", pos: "CB", overall: 80 },
      { name: "Luan Peres", pos: "CB", overall: 79 },
      { name: "Felipe Jonatan", pos: "LB", overall: 77 },
      { name: "Alison", pos: "CM", overall: 76 },
      { name: "Diego Pituca", pos: "CM", overall: 79 },
      { name: "Sandry", pos: "AM", overall: 76 },
      { name: "Marinho", pos: "RW", overall: 81 },
      { name: "Soteldo", pos: "LW", overall: 82 },
      { name: "Kaio Jorge", pos: "ST", overall: 80 }
    ]
  },
  {
    id: "br_flamengo_lib_2019", name: "Flamengo", season: "2019", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Diego Alves", pos: "GK", overall: 85 },
      { name: "Rafinha", pos: "RB", overall: 79 },
      { name: "Rodrigo Caio", pos: "CB", overall: 81 },
      { name: "Pablo Marí", pos: "CB", overall: 79 },
      { name: "Filipe Luís", pos: "LB", overall: 82 },
      { name: "Willian Arão", pos: "CM", overall: 79 },
      { name: "Gerson", pos: "CM", overall: 81 },
      { name: "Éverton Ribeiro", pos: "AM", overall: 83 },
      { name: "Arrascaeta", pos: "LM", overall: 86 },
      { name: "Bruno Henrique", pos: "RW", overall: 84 },
      { name: "Gabigol", pos: "ST", overall: 87 }
    ]
  },
  {
    id: "br_gremio_lib_2017", name: "Grêmio", season: "2017", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Marcelo Grohe", pos: "GK", overall: 81 },
      { name: "Edílson", pos: "RB", overall: 77 },
      { name: "Geromel", pos: "CB", overall: 80 },
      { name: "Kannemann", pos: "CB", overall: 81 },
      { name: "Bruno Cortez", pos: "LB", overall: 78 },
      { name: "Jailson", pos: "CM", overall: 78 },
      { name: "Arthur", pos: "CM", overall: 81 },
      { name: "Ramiro", pos: "AM", overall: 78 },
      { name: "Luan", pos: "RW", overall: 83 },
      { name: "Fernandinho", pos: "LW", overall: 78 },
      { name: "Lucas Barrios", pos: "ST", overall: 80 }
    ]
  },
  {
    id: "br_saopaulo_lib_2016", name: "São Paulo", season: "2016", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Denis", pos: "GK", overall: 78 },
      { name: "Buffarini", pos: "RB", overall: 77 },
      { name: "Lyanco", pos: "CB", overall: 79 },
      { name: "Diego Lugano", pos: "CB", overall: 78 },
      { name: "Carlinhos", pos: "LB", overall: 76 },
      { name: "Hudson", pos: "CM", overall: 77 },
      { name: "Thiago Mendes", pos: "CM", overall: 80 },
      { name: "Cueva", pos: "AM", overall: 79 },
      { name: "Wesley", pos: "RW", overall: 76 },
      { name: "Luiz Araújo", pos: "LW", overall: 78 },
      { name: "Calleri", pos: "ST", overall: 82 }
    ]
  },
  {
    id: "br_internacional_lib_2010", name: "Internacional", season: "2010", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Renan", pos: "GK", overall: 80 },
      { name: "Nei", pos: "RB", overall: 77 },
      { name: "Bolívar", pos: "CB", overall: 79 },
      { name: "Índio", pos: "CB", overall: 79 },
      { name: "Kléber", pos: "LB", overall: 77 },
      { name: "Sandro", pos: "CM", overall: 79 },
      { name: "Guiñazu", pos: "CM", overall: 79 },
      { name: "D'Alessandro", pos: "AM", overall: 84 },
      { name: "Tinga", pos: "LM", overall: 80 },
      { name: "Taison", pos: "RW", overall: 80 },
      { name: "Rafael Sóbis", pos: "ST", overall: 79 }
    ]
  },
  {
    id: "br_cruzeiro_lib_2009", name: "Cruzeiro", season: "2009", country: "BR", flag: "🇧🇷",
    formation: "4-4-2",
    players: [
      { name: "Fábio", pos: "GK", overall: 82 },
      { name: "Jonathan", pos: "RB", overall: 78 },
      { name: "Thiago Heleno", pos: "CB", overall: 79 },
      { name: "Leonardo Silva", pos: "CB", overall: 80 },
      { name: "Gerson Magrão", pos: "LB", overall: 77 },
      { name: "Henrique", pos: "CM", overall: 80 },
      { name: "Marquinhos Paraná", pos: "CM", overall: 78 },
      { name: "Ramires", pos: "AM", overall: 81 },
      { name: "Wagner", pos: "LM", overall: 79 },
      { name: "Kléber", pos: "ST", overall: 79 },
      { name: "Wellington Paulista", pos: "ST", overall: 80 }
    ]
  },
  {
    id: "br_fluminense_lib_2008", name: "Fluminense", season: "2008", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Fernando Henrique", pos: "GK", overall: 81 },
      { name: "Gabriel", pos: "RB", overall: 78 },
      { name: "Thiago Silva", pos: "CB", overall: 86 },
      { name: "Luiz Alberto", pos: "CB", overall: 79 },
      { name: "Júnior César", pos: "LB", overall: 78 },
      { name: "Ygor", pos: "CM", overall: 77 },
      { name: "Arouca", pos: "CM", overall: 80 },
      { name: "Cícero", pos: "AM", overall: 78 },
      { name: "Conca", pos: "LM", overall: 84 },
      { name: "Thiago Neves", pos: "ST", overall: 84 },
      { name: "Washington", pos: "ST", overall: 84 }
    ]
  },
  {
    id: "br_santos_lib_2007", name: "Santos", season: "2007", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Fábio Costa", pos: "GK", overall: 79 },
      { name: "Maldonado", pos: "RB", overall: 76 },
      { name: "Domingos", pos: "CB", overall: 77 },
      { name: "Adaílton", pos: "CB", overall: 76 },
      { name: "Kléber", pos: "LB", overall: 76 },
      { name: "Rodrigo Souto", pos: "CM", overall: 76 },
      { name: "Pedrinho", pos: "CM", overall: 78 },
      { name: "Cléber Santana", pos: "AM", overall: 80 },
      { name: "Zé Roberto", pos: "LM", overall: 80 },
      { name: "Marcos Aurélio", pos: "ST", overall: 78 },
      { name: "Renatinho", pos: "ST", overall: 77 }
    ]
  },
  {
    id: "br_saopaulo_lib_2004", name: "São Paulo", season: "2004-2006", country: "BR", flag: "🇧🇷",
    formation: "3-5-2",
    players: [
      { name: "Rogério Ceni", pos: "GK", overall: 87 },
      { name: "Fabão", pos: "CB", overall: 79 },
      { name: "Lugano", pos: "CB", overall: 84 },
      { name: "Edcarlos", pos: "CB", overall: 78 },
      { name: "Cicinho", pos: "RM", overall: 80 },
      { name: "Mineiro", pos: "CM", overall: 80 },
      { name: "Josué", pos: "CM", overall: 80 },
      { name: "Danilo", pos: "AM", overall: 80 },
      { name: "Júnior", pos: "LM", overall: 79 },
      { name: "Amoroso", pos: "ST", overall: 82 },
      { name: "Aloísio", pos: "ST", overall: 79 }
    ]
  },
  {
    id: "br_santos_lib_2003", name: "Santos", season: "2003", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Fábio Costa", pos: "GK", overall: 80 },
      { name: "Wellington", pos: "RB", overall: 77 },
      { name: "Alex", pos: "CB", overall: 79 },
      { name: "André Luís", pos: "CB", overall: 78 },
      { name: "Léo", pos: "LB", overall: 80 },
      { name: "Paulo Almeida", pos: "CM", overall: 78 },
      { name: "Renato", pos: "CM", overall: 79 },
      { name: "Diego", pos: "AM", overall: 85 },
      { name: "Fabiano", pos: "RW", overall: 77 },
      { name: "Robinho", pos: "LW", overall: 90 },
      { name: "Ricardo Oliveira", pos: "ST", overall: 82 }
    ]
  },
  {
    id: "br_saocaetano_lib_2002", name: "São Caetano", season: "2002", country: "BR", flag: "🇧🇷",
    formation: "4-4-2",
    players: [
      { name: "Sílvio Luiz", pos: "GK", overall: 78 },
      { name: "Russo", pos: "RB", overall: 76 },
      { name: "Daniel", pos: "CB", overall: 77 },
      { name: "Dininho", pos: "CB", overall: 77 },
      { name: "Rubens Cardoso", pos: "LB", overall: 76 },
      { name: "Adãozinho", pos: "CM", overall: 76 },
      { name: "Marcos Senna", pos: "CM", overall: 80 },
      { name: "Anaílton", pos: "AM", overall: 76 },
      { name: "Esquerdinha", pos: "LM", overall: 76 },
      { name: "Aílton", pos: "ST", overall: 79 },
      { name: "Somália", pos: "ST", overall: 78 }
    ]
  },
  {
    id: "br_gremio_lib_1995", name: "Grêmio", season: "1995", country: "BR", flag: "🇧🇷",
    formation: "4-4-2",
    players: [
      { name: "Danrlei", pos: "GK", overall: 80 },
      { name: "Arce", pos: "RB", overall: 78 },
      { name: "Rivarola", pos: "CB", overall: 78 },
      { name: "Adílson", pos: "CB", overall: 81 },
      { name: "Roger", pos: "LB", overall: 78 },
      { name: "Dinho", pos: "CM", overall: 78 },
      { name: "Luís Carlos Goiano", pos: "CM", overall: 78 },
      { name: "Arílson", pos: "AM", overall: 78 },
      { name: "Carlos Miguel", pos: "LM", overall: 78 },
      { name: "Paulo Nunes", pos: "ST", overall: 81 },
      { name: "Jardel", pos: "ST", overall: 88 }
    ]
  },
  {
    id: "br_cruzeiro_lib_1997", name: "Cruzeiro", season: "1997", country: "BR", flag: "🇧🇷",
    formation: "4-4-2",
    players: [
      { name: "Dida", pos: "GK", overall: 84 },
      { name: "Vítor", pos: "RB", overall: 78 },
      { name: "Gélson Baresi", pos: "CB", overall: 78 },
      { name: "Wilson Gottardo", pos: "CB", overall: 79 },
      { name: "Nonato", pos: "LB", overall: 78 },
      { name: "Fabinho", pos: "CM", overall: 79 },
      { name: "Ricardinho", pos: "CM", overall: 80 },
      { name: "Donizete Oliveira", pos: "AM", overall: 78 },
      { name: "Palhinha", pos: "AM", overall: 81 },
      { name: "Marcelo Ramos", pos: "ST", overall: 81 },
      { name: "Elivélton", pos: "ST", overall: 80 }
    ]
  },
  {
    id: "br_palmeiras_lib_1999", name: "Palmeiras", season: "1999-2000", country: "BR", flag: "🇧🇷",
    formation: "4-4-2",
    players: [
      { name: "Marcos", pos: "GK", overall: 85 },
      { name: "Arce", pos: "RB", overall: 78 },
      { name: "Júnior Baiano", pos: "CB", overall: 80 },
      { name: "Roque Júnior", pos: "CB", overall: 83 },
      { name: "Júnior", pos: "LB", overall: 81 },
      { name: "César Sampaio", pos: "CM", overall: 84 },
      { name: "Rogério", pos: "CM", overall: 79 },
      { name: "Alex", pos: "AM", overall: 84 },
      { name: "Zinho", pos: "LM", overall: 81 },
      { name: "Paulo Nunes", pos: "ST", overall: 81 },
      { name: "Oséas", pos: "ST", overall: 80 }
    ]
  },
  {
    id: "br_saopaulo_lib_1992", name: "São Paulo", season: "1992-1994", country: "BR", flag: "🇧🇷",
    formation: "4-4-2",
    players: [
      { name: "Zetti", pos: "GK", overall: 83 },
      { name: "Cafu", pos: "RB", overall: 87 },
      { name: "Adílson", pos: "CB", overall: 79 },
      { name: "Ronaldão", pos: "CB", overall: 80 },
      { name: "Ronaldo Luís", pos: "LB", overall: 78 },
      { name: "Pintado", pos: "RM", overall: 78 },
      { name: "Toninho Cerezo", pos: "CM", overall: 84 },
      { name: "Raí", pos: "AM", overall: 90 },
      { name: "Dinho", pos: "LM", overall: 79 },
      { name: "Müller", pos: "ST", overall: 86 },
      { name: "Palhinha", pos: "ST", overall: 83 }
    ]
  },
  {
    id: "br_gremio_lib_1983", name: "Grêmio", season: "1983-84", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Mazarópi", pos: "GK", overall: 84 },
      { name: "Paulo Roberto", pos: "RB", overall: 78 },
      { name: "Baidek", pos: "CB", overall: 79 },
      { name: "Hugo De León", pos: "CB", overall: 82 },
      { name: "Casemiro", pos: "LB", overall: 78 },
      { name: "China", pos: "CM", overall: 79 },
      { name: "Osvaldo", pos: "CM", overall: 79 },
      { name: "Tita", pos: "AM", overall: 80 },
      { name: "Renato Gaúcho", pos: "RW", overall: 88 },
      { name: "Caio", pos: "LW", overall: 78 },
      { name: "Tarciso", pos: "ST", overall: 82 }
    ]
  },
  {
    id: "br_internacional_lib_1980", name: "Internacional", season: "1980", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Gasperin", pos: "GK", overall: 80 },
      { name: "Toninho", pos: "RB", overall: 78 },
      { name: "Mauro Pastor", pos: "CB", overall: 80 },
      { name: "Mauro Galvão", pos: "CB", overall: 81 },
      { name: "André Luiz", pos: "LB", overall: 78 },
      { name: "Falcão", pos: "CM", overall: 92 },
      { name: "Batista", pos: "CM", overall: 78 },
      { name: "Tonho", pos: "AM", overall: 78 },
      { name: "Jair", pos: "RW", overall: 82 },
      { name: "Mário Sérgio", pos: "LW", overall: 80 },
      { name: "Chico Spina", pos: "ST", overall: 79 }
    ]
  },
  {
    id: "br_cruzeiro_lib_1976", name: "Cruzeiro", season: "1976", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Raul Plassmann", pos: "GK", overall: 84 },
      { name: "Nelinho", pos: "RB", overall: 85 },
      { name: "Morais", pos: "CB", overall: 80 },
      { name: "Darci Menezes", pos: "CB", overall: 79 },
      { name: "Vanderlei", pos: "LB", overall: 78 },
      { name: "Piazza", pos: "CM", overall: 87 },
      { name: "Eduardo", pos: "CM", overall: 80 },
      { name: "Zé Carlos", pos: "AM", overall: 79 },
      { name: "Joãozinho", pos: "LW", overall: 85 },
      { name: "Palhinha", pos: "ST", overall: 89 },
      { name: "Ronaldo Drumond", pos: "ST", overall: 78 }
    ]
  },
  {
    id: "br_vasco_lib_1998", name: "Vasco da Gama", season: "1998", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Carlos Germano", pos: "GK", overall: 82 },
      { name: "Vagner", pos: "RB", overall: 77 },
      { name: "Odvan", pos: "CB", overall: 80 },
      { name: "Mauro Galvão", pos: "CB", overall: 81 },
      { name: "Felipe", pos: "LB", overall: 80 },
      { name: "Luisinho", pos: "CM", overall: 77 },
      { name: "Nasa", pos: "CM", overall: 77 },
      { name: "Juninho Pernambucano", pos: "AM", overall: 86 },
      { name: "Pedrinho", pos: "RW", overall: 79 },
      { name: "Donizete", pos: "ST", overall: 81 },
      { name: "Luizão", pos: "ST", overall: 84 }
    ]
  },
  {
    id: "br_internacional_lib_2006", name: "Internacional", season: "2006", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Clemer", pos: "GK", overall: 81 },
      { name: "Ceará", pos: "RB", overall: 78 },
      { name: "Índio", pos: "CB", overall: 79 },
      { name: "Fabiano Eller", pos: "CB", overall: 78 },
      { name: "Jorge Wagner", pos: "LB", overall: 78 },
      { name: "Edinho", pos: "CM", overall: 78 },
      { name: "Wellington Monteiro", pos: "CM", overall: 77 },
      { name: "Alex", pos: "AM", overall: 79 },
      { name: "Tinga", pos: "RW", overall: 80 },
      { name: "Iarley", pos: "LW", overall: 81 },
      { name: "Fernandão", pos: "ST", overall: 83 }
    ]
  },
  {
    id: "br_santos_lib_2011", name: "Santos", season: "2011", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Rafael", pos: "GK", overall: 81 },
      { name: "Danilo", pos: "RB", overall: 78 },
      { name: "Edu Dracena", pos: "CB", overall: 79 },
      { name: "Durval", pos: "CB", overall: 78 },
      { name: "Léo", pos: "LB", overall: 79 },
      { name: "Adriano", pos: "CM", overall: 78 },
      { name: "Arouca", pos: "CM", overall: 80 },
      { name: "Paulo Henrique Ganso", pos: "AM", overall: 86 },
      { name: "Elano", pos: "RW", overall: 82 },
      { name: "Zé Eduardo", pos: "LW", overall: 78 },
      { name: "Neymar", pos: "ST", overall: 92 }
    ]
  },
  {
    id: "br_atletico_lib_2013", name: "Atlético Mineiro", season: "2013", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Victor", pos: "GK", overall: 83 },
      { name: "Marcos Rocha", pos: "RB", overall: 79 },
      { name: "Réver", pos: "CB", overall: 81 },
      { name: "Leonardo Silva", pos: "CB", overall: 81 },
      { name: "Júnior César", pos: "LB", overall: 78 },
      { name: "Pierre", pos: "CM", overall: 78 },
      { name: "Josué", pos: "CM", overall: 78 },
      { name: "Ronaldinho", pos: "AM", overall: 89 },
      { name: "Bernard", pos: "RW", overall: 81 },
      { name: "Diego Tardelli", pos: "LW", overall: 81 },
      { name: "Jô", pos: "ST", overall: 81 }
    ]
  },
  {
    id: "br_fluminense_lib_2023", name: "Fluminense", season: "2023", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Fábio", pos: "GK", overall: 84 },
      { name: "Samuel Xavier", pos: "RB", overall: 78 },
      { name: "Felipe Melo", pos: "CB", overall: 80 },
      { name: "Manoel", pos: "CB", overall: 78 },
      { name: "Marcelo", pos: "LB", overall: 82 },
      { name: "André", pos: "CM", overall: 81 },
      { name: "Martinelli", pos: "CM", overall: 78 },
      { name: "Ganso", pos: "AM", overall: 84 },
      { name: "Keno", pos: "RW", overall: 78 },
      { name: "Jhon Arias", pos: "LW", overall: 80 },
      { name: "Germán Cano", pos: "ST", overall: 84 }
    ]
  },

  // ───────── SUL-AMERICANA / MUNDIAL / ESTADUAIS ─────────
  {
    id: "br_chapecoense_2016", name: "Chapecoense", season: "2016", country: "BR", flag: "🇧🇷",
    // homenagem eterna ao elenco da histórica campanha da Sul-Americana 2016
    formation: "4-2-3-1",
    players: [
      { name: "Danilo", pos: "GK", overall: 79 },
      { name: "Dener", pos: "RB", overall: 76 },
      { name: "Neto", pos: "CB", overall: 77 },
      { name: "William Thiego", pos: "CB", overall: 77 },
      { name: "Alan Ruschel", pos: "LB", overall: 77 },
      { name: "Sérgio Manoel", pos: "CM", overall: 76 },
      { name: "Josimar", pos: "CM", overall: 76 },
      { name: "Cléber Santana", pos: "AM", overall: 79 },
      { name: "Arthur Maia", pos: "RW", overall: 76 },
      { name: "Ananias", pos: "LW", overall: 77 },
      { name: "Bruno Rangel", pos: "ST", overall: 80 }
    ]
  },
  {
    id: "br_athletico_sula_2021", name: "Athletico Paranaense", season: "2021", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Santos", pos: "GK", overall: 79 },
      { name: "Pedro Henrique", pos: "RB", overall: 77 },
      { name: "Thiago Heleno", pos: "CB", overall: 78 },
      { name: "Nico Hernández", pos: "CB", overall: 77 },
      { name: "Abner", pos: "LB", overall: 78 },
      { name: "Marcinho", pos: "CM", overall: 77 },
      { name: "Léo Cittadini", pos: "CM", overall: 77 },
      { name: "David Terans", pos: "AM", overall: 80 },
      { name: "Nikão", pos: "RW", overall: 78 },
      { name: "Renato Kayzer", pos: "LW", overall: 77 },
      { name: "Pablo", pos: "ST", overall: 79 }
    ]
  },
  {
    id: "br_fortaleza_sula_2023", name: "Fortaleza", season: "2023", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "João Ricardo", pos: "GK", overall: 79 },
      { name: "Tinga", pos: "RB", overall: 76 },
      { name: "Brítez", pos: "CB", overall: 77 },
      { name: "Titi", pos: "CB", overall: 78 },
      { name: "Bruno Pacheco", pos: "LB", overall: 76 },
      { name: "Zé Welison", pos: "CM", overall: 76 },
      { name: "Caio Alexandre", pos: "CM", overall: 78 },
      { name: "Pochettino", pos: "AM", overall: 79 },
      { name: "Guilherme", pos: "RW", overall: 78 },
      { name: "Marinho", pos: "LW", overall: 79 },
      { name: "Lucero", pos: "ST", overall: 80 }
    ]
  },

  // ───────── LIBERTADORES (campanhas adicionais brasileiras) ─────────
  {
    id: "br_saopaulo_lib_1974", name: "São Paulo", season: "1974", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Valdir Peres", pos: "GK", overall: 80 },
      { name: "Nelsinho Baptista", pos: "RB", overall: 75 },
      { name: "Paranhos", pos: "CB", overall: 77 },
      { name: "Arlindo", pos: "CB", overall: 76 },
      { name: "Gilberto Sorriso", pos: "LB", overall: 76 },
      { name: "Chicão", pos: "CM", overall: 77 },
      { name: "Pedro Rocha", pos: "AM", overall: 84 },
      { name: "Terto", pos: "RW", overall: 78 },
      { name: "Zé Carlos", pos: "CM", overall: 76 },
      { name: "Mirandinha", pos: "LW", overall: 80 },
      { name: "Piau", pos: "ST", overall: 78 }
    ]
  },
  {
    id: "br_vasco_lib_2000", name: "Vasco da Gama", season: "2000", country: "BR", flag: "🇧🇷",
    formation: "4-4-2",
    players: [
      { name: "Hélton", pos: "GK", overall: 80 },
      { name: "Clébson", pos: "RB", overall: 76 },
      { name: "Odvan", pos: "CB", overall: 79 },
      { name: "Júnior Baiano", pos: "CB", overall: 80 },
      { name: "Jorginho Paulista", pos: "LB", overall: 76 },
      { name: "Jorginho", pos: "RM", overall: 78 },
      { name: "Nasa", pos: "CM", overall: 77 },
      { name: "Juninho Pernambucano", pos: "CM", overall: 86 },
      { name: "Juninho Paulista", pos: "LM", overall: 83 },
      { name: "Euller", pos: "ST", overall: 79 },
      { name: "Romário", pos: "ST", overall: 92 }
    ]
  },
  {
    id: "br_athletico_lib_2005", name: "Athletico Paranaense", season: "2005", country: "BR", flag: "🇧🇷",
    formation: "4-4-2",
    players: [
      { name: "Diego", pos: "GK", overall: 79 },
      { name: "Jancarlos", pos: "RB", overall: 76 },
      { name: "Danilo", pos: "CB", overall: 77 },
      { name: "Durvão", pos: "CB", overall: 76 },
      { name: "Marcão", pos: "LB", overall: 77 },
      { name: "André Rocha", pos: "RM", overall: 76 },
      { name: "Cocito", pos: "CM", overall: 76 },
      { name: "Evandro", pos: "CM", overall: 77 },
      { name: "Fabrício", pos: "LM", overall: 78 },
      { name: "Lima", pos: "ST", overall: 78 },
      { name: "Aloísio", pos: "ST", overall: 81 }
    ]
  },
  {
    id: "br_gremio_lib_2007", name: "Grêmio", season: "2007", country: "BR", flag: "🇧🇷",
    formation: "4-4-2",
    players: [
      { name: "Saja", pos: "GK", overall: 79 },
      { name: "Patrício", pos: "RB", overall: 77 },
      { name: "Teco", pos: "CB", overall: 77 },
      { name: "William", pos: "CB", overall: 76 },
      { name: "Lúcio", pos: "LB", overall: 79 },
      { name: "Sandro Goiano", pos: "RM", overall: 76 },
      { name: "Gavilán", pos: "CM", overall: 77 },
      { name: "Diego Souza", pos: "CM", overall: 81 },
      { name: "Tcheco", pos: "LM", overall: 80 },
      { name: "Carlos Eduardo", pos: "ST", overall: 80 },
      { name: "Tuta", pos: "ST", overall: 78 }
    ]
  }
];

// ═══════════════════════════════════════════════════════════════
// TIMES HISTÓRICOS DA LIBERTADORES — pool usado no modo LIBERTADORES
// Times sul-americanos (e mexicanos) não-brasileiros, agrupados por país.
// O modo Libertadores também reaproveita os times brasileiros de campanhas
// continentais que já existem em BRAZIL_TEAMS (ver getTeamPool em game.js).
// ═══════════════════════════════════════════════════════════════
const LIBERTADORES_TEAMS = [

  // ───────── URUGUAIOS ─────────
  {
    id: "lib_penarol_1960", name: "Peñarol", season: "1960-61", country: "UY", flag: "🇺🇾",
    formation: "4-2-4",
    players: [
      { name: "Maidana", pos: "GK", overall: 83 },
      { name: "Martínez", pos: "RB", overall: 79 },
      { name: "Cano", pos: "CB", overall: 78 },
      { name: "González", pos: "CB", overall: 79 },
      { name: "Aguerre", pos: "LB", overall: 77 },
      { name: "Cubilla", pos: "CM", overall: 84 },
      { name: "Matosas", pos: "CM", overall: 78 },
      { name: "Ledesma", pos: "RW", overall: 79 },
      { name: "Sasía", pos: "AM", overall: 83 },
      { name: "Spencer", pos: "ST", overall: 90 },
      { name: "Joya", pos: "LW", overall: 82 }
    ]
  },
  {
    id: "lib_penarol_1966", name: "Peñarol", season: "1966", country: "UY", flag: "🇺🇾",
    formation: "4-2-4",
    players: [
      { name: "Mazurkiewicz", pos: "GK", overall: 85 },
      { name: "Ancheta", pos: "RB", overall: 77 },
      { name: "Aguerre", pos: "CB", overall: 78 },
      { name: "Matosas", pos: "CB", overall: 80 },
      { name: "Manicera", pos: "LB", overall: 76 },
      { name: "Goncálvez", pos: "CM", overall: 82 },
      { name: "Cortés", pos: "CM", overall: 76 },
      { name: "Cubilla", pos: "RW", overall: 84 },
      { name: "Rocha", pos: "AM", overall: 85 },
      { name: "Spencer", pos: "ST", overall: 89 },
      { name: "Joya", pos: "LW", overall: 80 }
    ]
  },
  {
    id: "lib_nacional_uy_1971", name: "Nacional-URU", season: "1971", country: "UY", flag: "🇺🇾",
    formation: "4-3-3",
    players: [
      { name: "Mazurkiewicz", pos: "GK", overall: 86 },
      { name: "Martínez", pos: "RB", overall: 77 },
      { name: "Ubiña", pos: "CB", overall: 78 },
      { name: "Castillo", pos: "CB", overall: 78 },
      { name: "Forlán", pos: "LB", overall: 79 },
      { name: "Esparrago", pos: "RM", overall: 80 },
      { name: "Bareño", pos: "CM", overall: 77 },
      { name: "Mujica", pos: "CM", overall: 77 },
      { name: "Artime", pos: "ST", overall: 86 },
      { name: "Morales", pos: "LW", overall: 78 },
      { name: "Viera", pos: "RW", overall: 78 }
    ]
  },
  {
    id: "lib_penarol_1982", name: "Peñarol", season: "1982", country: "UY", flag: "🇺🇾",
    formation: "4-3-3",
    players: [
      { name: "Álvez", pos: "GK", overall: 82 },
      { name: "Bossio", pos: "RB", overall: 76 },
      { name: "Bengoechea", pos: "CB", overall: 77 },
      { name: "Santos", pos: "CB", overall: 76 },
      { name: "Herrera", pos: "LB", overall: 76 },
      { name: "Barrios", pos: "CM", overall: 78 },
      { name: "Bica", pos: "CM", overall: 77 },
      { name: "Acevedo", pos: "AM", overall: 79 },
      { name: "Jair", pos: "RW", overall: 78 },
      { name: "Morena", pos: "ST", overall: 81 },
      { name: "Aguerre", pos: "LW", overall: 77 }
    ]
  },
  {
    id: "lib_penarol_1987", name: "Peñarol", season: "1987", country: "UY", flag: "🇺🇾",
    formation: "4-4-2",
    players: [
      { name: "Pereira", pos: "GK", overall: 80 },
      { name: "Herrera", pos: "RB", overall: 76 },
      { name: "Saralegui", pos: "CB", overall: 77 },
      { name: "Hernández", pos: "CB", overall: 76 },
      { name: "Olivera", pos: "LB", overall: 76 },
      { name: "Paz", pos: "RM", overall: 78 },
      { name: "Aguirregaray", pos: "CM", overall: 78 },
      { name: "Da Silva", pos: "CM", overall: 77 },
      { name: "Ostolaza", pos: "LM", overall: 77 },
      { name: "Santana", pos: "ST", overall: 79 },
      { name: "Martínez", pos: "ST", overall: 80 }
    ]
  },
  {
    id: "lib_penarol_2011", name: "Peñarol", season: "2011", country: "UY", flag: "🇺🇾",
    formation: "4-2-3-1",
    players: [
      { name: "Carini", pos: "GK", overall: 78 },
      { name: "Lodeiro", pos: "RB", overall: 75 },
      { name: "Lima", pos: "CB", overall: 76 },
      { name: "González", pos: "CB", overall: 76 },
      { name: "Rivero", pos: "LB", overall: 75 },
      { name: "Pacheco", pos: "CM", overall: 76 },
      { name: "Estoyanoff", pos: "CM", overall: 77 },
      { name: "Lodeiro", pos: "AM", overall: 83 },
      { name: "Pereyra", pos: "RW", overall: 78 },
      { name: "Carlos Rodríguez", pos: "LW", overall: 77 },
      { name: "Stuani", pos: "ST", overall: 82 }
    ]
  },

  // ───────── ARGENTINOS — Peñarol / Independiente / Estudiantes / Racing ─────────
  {
    id: "lib_independiente_1964", name: "Independiente", season: "1964-65", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Santoro", pos: "GK", overall: 84 },
      { name: "Pavoni", pos: "RB", overall: 79 },
      { name: "Sá", pos: "CB", overall: 79 },
      { name: "López", pos: "CB", overall: 77 },
      { name: "Commisso", pos: "LB", overall: 76 },
      { name: "Pastoriza", pos: "CM", overall: 80 },
      { name: "Raimondo", pos: "CM", overall: 77 },
      { name: "Semenewicz", pos: "RM", overall: 76 },
      { name: "Balbuena", pos: "RW", overall: 79 },
      { name: "Mura", pos: "ST", overall: 78 },
      { name: "Rodríguez Varela", pos: "LW", overall: 78 }
    ]
  },
  {
    id: "lib_independiente_1972", name: "Independiente", season: "1972-73-74-75", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Santoro", pos: "GK", overall: 85 },
      { name: "Pavoni", pos: "RB", overall: 80 },
      { name: "Sá", pos: "CB", overall: 80 },
      { name: "López", pos: "CB", overall: 78 },
      { name: "Commisso", pos: "LB", overall: 77 },
      { name: "Pastoriza", pos: "CM", overall: 80 },
      { name: "Bochini", pos: "AM", overall: 88 },
      { name: "Galván", pos: "CM", overall: 77 },
      { name: "Balbuena", pos: "RW", overall: 80 },
      { name: "Maglioni", pos: "ST", overall: 81 },
      { name: "Bertoni", pos: "LW", overall: 84 }
    ]
  },
  {
    id: "lib_estudiantes_1968", name: "Estudiantes", season: "1968-69-70", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Poletti", pos: "GK", overall: 83 },
      { name: "Madero", pos: "RB", overall: 77 },
      { name: "Malbernat", pos: "CB", overall: 78 },
      { name: "Aguirre Suárez", pos: "CB", overall: 79 },
      { name: "Medina", pos: "LB", overall: 76 },
      { name: "Pachamé", pos: "CM", overall: 79 },
      { name: "Bilardo", pos: "CM", overall: 80 },
      { name: "Togneri", pos: "CM", overall: 77 },
      { name: "Ribaudo", pos: "RW", overall: 79 },
      { name: "Conigliaro", pos: "ST", overall: 78 },
      { name: "Verón", pos: "LW", overall: 88 }
    ]
  },
  {
    id: "lib_racing_1967", name: "Racing", season: "1967", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Cejas", pos: "GK", overall: 84 },
      { name: "Martín", pos: "RB", overall: 78 },
      { name: "Perfumo", pos: "CB", overall: 87 },
      { name: "Mori", pos: "CB", overall: 77 },
      { name: "Díaz", pos: "LB", overall: 77 },
      { name: "Basile", pos: "CM", overall: 80 },
      { name: "Rulli", pos: "CM", overall: 78 },
      { name: "Cárdenas", pos: "AM", overall: 82 },
      { name: "Cardoso", pos: "RW", overall: 78 },
      { name: "Raffo", pos: "ST", overall: 82 },
      { name: "Maschio", pos: "LW", overall: 81 }
    ]
  },
  {
    id: "lib_boca_1977", name: "Boca Juniors", season: "1977-78", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Gatti", pos: "GK", overall: 85 },
      { name: "Mouzo", pos: "RB", overall: 79 },
      { name: "Tarantini", pos: "CB", overall: 80 },
      { name: "Pernía", pos: "CB", overall: 77 },
      { name: "Suñé", pos: "LB", overall: 76 },
      { name: "Pernía", pos: "CM", overall: 76 },
      { name: "Salinas", pos: "CM", overall: 76 },
      { name: "Benítez", pos: "AM", overall: 78 },
      { name: "Mastrángelo", pos: "RW", overall: 77 },
      { name: "Mas", pos: "ST", overall: 79 },
      { name: "Rubén Suñé", pos: "LW", overall: 77 }
    ]
  },
  {
    id: "lib_independiente_1984", name: "Independiente", season: "1984", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Goycochea", pos: "GK", overall: 83 },
      { name: "Olguín", pos: "RB", overall: 78 },
      { name: "Marangoni", pos: "CB", overall: 77 },
      { name: "Bochini", pos: "AM", overall: 87 },
      { name: "Bértoli", pos: "LB", overall: 76 },
      { name: "Percudani", pos: "CM", overall: 76 },
      { name: "Pastoriza", pos: "CM", overall: 76 },
      { name: "Burruchaga", pos: "RW", overall: 84 },
      { name: "Marcico", pos: "ST", overall: 78 },
      { name: "Pasculli", pos: "LW", overall: 81 },
      { name: "Garré", pos: "CM", overall: 76 }
    ]
  },
  {
    id: "lib_velez_1994", name: "Velez Sarsfield", season: "1994", country: "AR", flag: "🇦🇷",
    formation: "3-5-2",
    players: [
      { name: "Cáceres", pos: "GK", overall: 82 },
      { name: "Basualdo", pos: "CB", overall: 83 },
      { name: "Sotomayor", pos: "CB", overall: 77 },
      { name: "Cardozo", pos: "CB", overall: 76 },
      { name: "Chamot", pos: "RM", overall: 79 },
      { name: "Asad", pos: "CM", overall: 77 },
      { name: "Trotta", pos: "CM", overall: 76 },
      { name: "Flores", pos: "LM", overall: 76 },
      { name: "Bianchi", pos: "ST", overall: 78 },
      { name: "Almeyda", pos: "CM", overall: 80 },
      { name: "González", pos: "ST", overall: 79 }
    ]
  },
  {
    id: "lib_boca_2000_01", name: "Boca Juniors", season: "2000-01", country: "AR", flag: "🇦🇷",
    formation: "4-4-2",
    players: [
      { name: "Córdoba", pos: "GK", overall: 84 },
      { name: "Ibarra", pos: "RB", overall: 80 },
      { name: "Bermúdez", pos: "CB", overall: 80 },
      { name: "Samuel", pos: "CB", overall: 84 },
      { name: "Arruabarrena", pos: "LB", overall: 79 },
      { name: "Traverso", pos: "RM", overall: 78 },
      { name: "Battaglia", pos: "CM", overall: 79 },
      { name: "Basualdo", pos: "CM", overall: 80 },
      { name: "Riquelme", pos: "AM", overall: 91 },
      { name: "Palermo", pos: "ST", overall: 86 },
      { name: "Guillermo Barros Schelotto", pos: "RW", overall: 81 }
    ]
  },
  {
    id: "lib_boca_2003", name: "Boca Juniors", season: "2003", country: "AR", flag: "🇦🇷",
    formation: "4-4-2",
    players: [
      { name: "Abbondanzieri", pos: "GK", overall: 84 },
      { name: "Ibarra", pos: "RB", overall: 80 },
      { name: "Samuel", pos: "CB", overall: 85 },
      { name: "Cagna", pos: "CB", overall: 78 },
      { name: "Schiavi", pos: "LB", overall: 79 },
      { name: "Traverso", pos: "RM", overall: 78 },
      { name: "Cristaldo", pos: "CM", overall: 78 },
      { name: "Bianchi Arce", pos: "CM", overall: 76 },
      { name: "Delgado", pos: "AM", overall: 80 },
      { name: "Palermo", pos: "ST", overall: 86 },
      { name: "Guillermo Barros Schelotto", pos: "RW", overall: 81 }
    ]
  },
  {
    id: "lib_estudiantes_2009", name: "Estudiantes", season: "2009", country: "AR", flag: "🇦🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Bossio", pos: "GK", overall: 80 },
      { name: "Pérez", pos: "RB", overall: 77 },
      { name: "Desábato", pos: "CB", overall: 79 },
      { name: "Schiavi", pos: "CB", overall: 80 },
      { name: "Otondo", pos: "LB", overall: 77 },
      { name: "Pellerano", pos: "CM", overall: 77 },
      { name: "Mussis", pos: "CM", overall: 76 },
      { name: "Verón", pos: "AM", overall: 85 },
      { name: "Boselli", pos: "RW", overall: 79 },
      { name: "Rodrigo Braña", pos: "LW", overall: 76 },
      { name: "Cellay", pos: "ST", overall: 78 }
    ]
  },
  {
    id: "lib_argentinosjr_1985", name: "Argentinos Jr", season: "1985", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Fillol", pos: "GK", overall: 86 },
      { name: "Castro", pos: "RB", overall: 76 },
      { name: "Batista", pos: "CB", overall: 78 },
      { name: "Olarticoechea", pos: "CB", overall: 79 },
      { name: "Salas", pos: "LB", overall: 75 },
      { name: "Giusti", pos: "CM", overall: 78 },
      { name: "Trobbiani", pos: "CM", overall: 78 },
      { name: "Sá", pos: "AM", overall: 76 },
      { name: "Ereros", pos: "RW", overall: 77 },
      { name: "Castro", pos: "ST", overall: 78 },
      { name: "Eduardo Cabrera", pos: "LW", overall: 76 }
    ]
  },
  {
    id: "lib_riverplate_1986", name: "River Plate", season: "1986", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Islas", pos: "GK", overall: 80 },
      { name: "Berti", pos: "RB", overall: 76 },
      { name: "Carrizo", pos: "CB", overall: 76 },
      { name: "Alzamendi", pos: "CB", overall: 76 },
      { name: "Ruggeri", pos: "LB", overall: 82 },
      { name: "Alonso", pos: "CM", overall: 78 },
      { name: "Gareca", pos: "CM", overall: 79 },
      { name: "Funes", pos: "AM", overall: 77 },
      { name: "Alzamendi", pos: "RW", overall: 80 },
      { name: "Francescoli", pos: "ST", overall: 87 },
      { name: "Gabriel Calderón", pos: "LW", overall: 78 }
    ]
  },
  {
    id: "lib_riverplate_2015", name: "River Plate", season: "2015", country: "AR", flag: "🇦🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Barovero", pos: "GK", overall: 80 },
      { name: "Mercado", pos: "RB", overall: 79 },
      { name: "Maidana", pos: "CB", overall: 79 },
      { name: "Pinola", pos: "CB", overall: 79 },
      { name: "Vangioni", pos: "LB", overall: 77 },
      { name: "Kranevitter", pos: "CM", overall: 79 },
      { name: "Pérez", pos: "CM", overall: 77 },
      { name: "Driussi", pos: "AM", overall: 79 },
      { name: "Mora", pos: "RW", overall: 78 },
      { name: "Lucho González", pos: "LW", overall: 79 },
      { name: "Alario", pos: "ST", overall: 82 }
    ]
  },
  {
    id: "lib_sanlorenzo_2014", name: "San Lorenzo", season: "2014", country: "AR", flag: "🇦🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Torrico", pos: "GK", overall: 80 },
      { name: "Mercier", pos: "RB", overall: 76 },
      { name: "Insaurralde", pos: "CB", overall: 78 },
      { name: "Bustos", pos: "CB", overall: 77 },
      { name: "Escobar", pos: "LB", overall: 76 },
      { name: "Cubas", pos: "CM", overall: 78 },
      { name: "Correa", pos: "CM", overall: 77 },
      { name: "Cauteruccio", pos: "AM", overall: 79 },
      { name: "Mas", pos: "RW", overall: 77 },
      { name: "Buffarini", pos: "LW", overall: 76 },
      { name: "Barrientos", pos: "ST", overall: 78 }
    ]
  },
  {
    id: "lib_lanus_2017", name: "Lanús", season: "2017", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Muslera", pos: "GK", overall: 79 },
      { name: "Aguirre", pos: "RB", overall: 75 },
      { name: "Pérez", pos: "CB", overall: 76 },
      { name: "Velázquez", pos: "CB", overall: 76 },
      { name: "Frías", pos: "LB", overall: 75 },
      { name: "Acevedo", pos: "CM", overall: 76 },
      { name: "Bouzat", pos: "CM", overall: 76 },
      { name: "Acuña", pos: "AM", overall: 80 },
      { name: "Sand", pos: "ST", overall: 79 },
      { name: "Orsini", pos: "LW", overall: 77 },
      { name: "Lautaro Acosta", pos: "RW", overall: 78 }
    ]
  },
  {
    id: "lib_newells_1992", name: "Newell's Old Boys", season: "1988-92", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Islas", pos: "GK", overall: 79 },
      { name: "Berizzo", pos: "RB", overall: 76 },
      { name: "Vivas", pos: "CB", overall: 76 },
      { name: "Comas", pos: "CB", overall: 76 },
      { name: "Alfaro", pos: "LB", overall: 75 },
      { name: "Berizzo", pos: "CM", overall: 75 },
      { name: "Acosta", pos: "CM", overall: 77 },
      { name: "Gamboa", pos: "AM", overall: 77 },
      { name: "Zamora", pos: "RW", overall: 76 },
      { name: "Husaín", pos: "ST", overall: 78 },
      { name: "Gabriel Batistuta", pos: "LW", overall: 84 }
    ]
  },
  {
    id: "lib_boca_2004", name: "Boca Juniors", season: "2004", country: "AR", flag: "🇦🇷",
    formation: "4-4-2",
    players: [
      { name: "Abbondanzieri", pos: "GK", overall: 84 },
      { name: "Ibarra", pos: "RB", overall: 79 },
      { name: "Schiavi", pos: "CB", overall: 79 },
      { name: "Sandoval", pos: "CB", overall: 77 },
      { name: "Calvo", pos: "LB", overall: 76 },
      { name: "Riquelme", pos: "RM", overall: 89 },
      { name: "Cristaldo", pos: "CM", overall: 78 },
      { name: "Krupoviesa", pos: "CM", overall: 75 },
      { name: "Vargas", pos: "AM", overall: 78 },
      { name: "Carlos Tévez", pos: "ST", overall: 86 },
      { name: "Marcelo Delgado", pos: "LW", overall: 79 }
    ]
  },
  {
    id: "lib_boca_2012", name: "Boca Juniors", season: "2012", country: "AR", flag: "🇦🇷",
    formation: "4-4-2",
    players: [
      { name: "Orión", pos: "GK", overall: 78 },
      { name: "Insaurralde", pos: "RB", overall: 76 },
      { name: "Erbes", pos: "CB", overall: 75 },
      { name: "Pérez García", pos: "CB", overall: 75 },
      { name: "Silvio", pos: "LB", overall: 75 },
      { name: "Riquelme", pos: "RM", overall: 87 },
      { name: "Pérez", pos: "CM", overall: 76 },
      { name: "Cvitanich", pos: "CM", overall: 76 },
      { name: "Lodeiro", pos: "AM", overall: 79 },
      { name: "Santiago Silva", pos: "ST", overall: 78 },
      { name: "Lucas Viatri", pos: "LW", overall: 76 }
    ]
  },
  {
    id: "lib_boca_2023", name: "Boca Juniors", season: "2018-23", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Romero", pos: "GK", overall: 80 },
      { name: "Advíncula", pos: "RB", overall: 78 },
      { name: "Figal", pos: "CB", overall: 77 },
      { name: "Valentini", pos: "CB", overall: 78 },
      { name: "Marcos Rojo", pos: "LB", overall: 78 },
      { name: "Pol Fernández", pos: "CM", overall: 76 },
      { name: "Medina", pos: "CM", overall: 78 },
      { name: "Óscar Romero", pos: "AM", overall: 76 },
      { name: "Janson", pos: "RW", overall: 75 },
      { name: "Merentiel", pos: "ST", overall: 79 },
      { name: "Varela", pos: "LW", overall: 78 }
    ]
  },
  {
    id: "lib_boca_1963", name: "Boca Juniors", season: "1963", country: "AR", flag: "🇦🇷",
    formation: "4-2-4",
    players: [
      { name: "Cejas", pos: "GK", overall: 79 },
      { name: "Simeone", pos: "RB", overall: 75 },
      { name: "Pérez", pos: "CB", overall: 75 },
      { name: "Navarro", pos: "CB", overall: 75 },
      { name: "Marzolini", pos: "LB", overall: 80 },
      { name: "Rattín", pos: "CM", overall: 80 },
      { name: "Pizzuti", pos: "CM", overall: 76 },
      { name: "Sanfilippo", pos: "RW", overall: 81 },
      { name: "Boggio", pos: "ST", overall: 76 },
      { name: "Rojas", pos: "LW", overall: 76 },
      { name: "Belén", pos: "AM", overall: 75 }
    ]
  },

  // ───────── MEXICANOS ─────────
  {
    id: "lib_cruzazul_2001", name: "Cruz Azul", season: "2001", country: "MX", flag: "🇲🇽",
    formation: "4-4-2",
    players: [
      { name: "Óscar Pérez", pos: "GK", overall: 82 },
      { name: "Norberto Ángeles", pos: "RB", overall: 76 },
      { name: "Almaguer", pos: "CB", overall: 76 },
      { name: "Brown", pos: "CB", overall: 75 },
      { name: "José Hernández", pos: "LB", overall: 76 },
      { name: "Galdames", pos: "RM", overall: 76 },
      { name: "Gutiérrez", pos: "CM", overall: 76 },
      { name: "Pinheiro", pos: "CM", overall: 76 },
      { name: "Morales", pos: "LM", overall: 76 },
      { name: "Cardozo", pos: "ST", overall: 80 },
      { name: "Francisco Palencia", pos: "ST", overall: 81 }
    ]
  },
  {
    id: "lib_chivas_2010", name: "Chivas Guadalaraja", season: "2010", country: "MX", flag: "🇲🇽",
    formation: "4-3-3",
    players: [
      { name: "Michel", pos: "GK", overall: 78 },
      { name: "Reyna", pos: "RB", overall: 76 },
      { name: "Mendoza", pos: "CB", overall: 75 },
      { name: "Arce", pos: "CB", overall: 75 },
      { name: "Cárdenas", pos: "LB", overall: 75 },
      { name: "Fonseca", pos: "CM", overall: 76 },
      { name: "Flores", pos: "CM", overall: 76 },
      { name: "Pavel Pardo", pos: "AM", overall: 78 },
      { name: "Bautista", pos: "RW", overall: 77 },
      { name: "Omar Bravo", pos: "ST", overall: 80 },
      { name: "Sánchez", pos: "LW", overall: 77 }
    ]
  },
  {
    id: "lib_tigres_2015", name: "Tigres UANL", season: "2015", country: "MX", flag: "🇲🇽",
    formation: "4-2-3-1",
    players: [
      { name: "Nahuel Guzmán", pos: "GK", overall: 81 },
      { name: "Juninho", pos: "RB", overall: 77 },
      { name: "Salcido", pos: "CB", overall: 78 },
      { name: "Juan Pablo Vigón", pos: "CB", overall: 75 },
      { name: "Damián Álvarez", pos: "LB", overall: 76 },
      { name: "Pizarro", pos: "CM", overall: 78 },
      { name: "Torres Nilo", pos: "CM", overall: 75 },
      { name: "Ánderson Herrera", pos: "AM", overall: 76 },
      { name: "Hernández", pos: "RW", overall: 77 },
      { name: "Gignac", pos: "ST", overall: 84 },
      { name: "Lucas Lobos", pos: "LW", overall: 76 }
    ]
  },

  // ───────── CHILENOS ─────────
  {
    id: "lib_cobreloa_1981", name: "Cobreloa", season: "1981-82", country: "CL", flag: "🇨🇱",
    formation: "4-3-3",
    players: [
      { name: "Wirth", pos: "GK", overall: 79 },
      { name: "Mondaca", pos: "RB", overall: 75 },
      { name: "Bigorra", pos: "CB", overall: 76 },
      { name: "Ahumada", pos: "CB", overall: 76 },
      { name: "Pinto", pos: "LB", overall: 75 },
      { name: "Hodge", pos: "CM", overall: 76 },
      { name: "Soto", pos: "CM", overall: 76 },
      { name: "Salah", pos: "AM", overall: 77 },
      { name: "Letelier", pos: "RW", overall: 78 },
      { name: "Castec", pos: "ST", overall: 79 },
      { name: "Mario Soto", pos: "LW", overall: 76 }
    ]
  },
  {
    id: "lib_colocolo_1973", name: "Colo-Colo", season: "1973", country: "CL", flag: "🇨🇱",
    formation: "4-3-3",
    players: [
      { name: "Olivares", pos: "GK", overall: 79 },
      { name: "Hodge", pos: "RB", overall: 76 },
      { name: "Quintano", pos: "CB", overall: 77 },
      { name: "Herrera", pos: "CB", overall: 78 },
      { name: "Valdés", pos: "LB", overall: 75 },
      { name: "Páez", pos: "CM", overall: 76 },
      { name: "Messen", pos: "CM", overall: 75 },
      { name: "Ahumada", pos: "AM", overall: 77 },
      { name: "Caszely", pos: "ST", overall: 84 },
      { name: "Lara", pos: "LW", overall: 77 },
      { name: "Vásconez", pos: "RW", overall: 76 }
    ]
  },
  {
    id: "lib_unionespanola_1975", name: "Unión Española", season: "1975", country: "CL", flag: "🇨🇱",
    formation: "4-3-3",
    players: [
      { name: "Vallejos", pos: "GK", overall: 79 },
      { name: "Machuca", pos: "RB", overall: 75 },
      { name: "Pacheco", pos: "CB", overall: 75 },
      { name: "Spedaletti", pos: "CB", overall: 76 },
      { name: "Espinoza", pos: "LB", overall: 75 },
      { name: "Ahumada", pos: "CM", overall: 76 },
      { name: "Olivares", pos: "CM", overall: 75 },
      { name: "Veliz", pos: "AM", overall: 77 },
      { name: "Rivas", pos: "RW", overall: 76 },
      { name: "Reinaldo Veliz", pos: "ST", overall: 78 },
      { name: "Yávar", pos: "LW", overall: 75 }
    ]
  },
  {
    id: "lib_universidadcatolica_1993", name: "Universidad Católica", season: "1993", country: "CL", flag: "🇨🇱",
    formation: "4-4-2",
    players: [
      { name: "Tapia", pos: "GK", overall: 78 },
      { name: "Pérez", pos: "RB", overall: 75 },
      { name: "Carlos Rojas", pos: "CB", overall: 76 },
      { name: "Vásquez", pos: "CB", overall: 75 },
      { name: "Acuña", pos: "LB", overall: 75 },
      { name: "Sierra", pos: "RM", overall: 76 },
      { name: "Tarodo", pos: "CM", overall: 76 },
      { name: "Basay", pos: "CM", overall: 76 },
      { name: "Bastías", pos: "LM", overall: 76 },
      { name: "Sergio Salgado", pos: "ST", overall: 78 },
      { name: "Vergara", pos: "ST", overall: 77 }
    ]
  },
  {
    id: "lib_colocolo_1991", name: "Colo-Colo", season: "1991", country: "CL", flag: "🇨🇱",
    formation: "4-4-2",
    players: [
      { name: "Morón", pos: "GK", overall: 81 },
      { name: "Garrido", pos: "RB", overall: 77 },
      { name: "Miguel Ramírez", pos: "CB", overall: 78 },
      { name: "Margas", pos: "CB", overall: 79 },
      { name: "Mendoza", pos: "LB", overall: 76 },
      { name: "Vilches", pos: "RM", overall: 77 },
      { name: "Espinoza", pos: "CM", overall: 77 },
      { name: "Pizarro", pos: "CM", overall: 79 },
      { name: "Peralta", pos: "LM", overall: 77 },
      { name: "Barticciotto", pos: "ST", overall: 80 },
      { name: "Luis Pérez", pos: "ST", overall: 79 }
    ]
  },

  // ───────── COLOMBIANOS ─────────
  {
    id: "lib_oncecaldas_2004", name: "Once Caldas", season: "2004", country: "CO", flag: "🇨🇴",
    formation: "4-4-2",
    players: [
      { name: "Marrugo", pos: "GK", overall: 78 },
      { name: "Pinzón", pos: "RB", overall: 75 },
      { name: "Sandoval", pos: "CB", overall: 76 },
      { name: "Mosquera", pos: "CB", overall: 75 },
      { name: "Bedoya", pos: "LB", overall: 75 },
      { name: "Cuadrado", pos: "RM", overall: 76 },
      { name: "Castrillón", pos: "CM", overall: 76 },
      { name: "Estrada", pos: "CM", overall: 76 },
      { name: "Viáfara", pos: "LM", overall: 76 },
      { name: "Aldana", pos: "ST", overall: 78 },
      { name: "Hugo Rodallega", pos: "ST", overall: 78 }
    ]
  },
  {
    id: "lib_nacionalcol_2016", name: "Atlético Nacional", season: "2016", country: "CO", flag: "🇨🇴",
    formation: "4-2-3-1",
    players: [
      { name: "Armani", pos: "GK", overall: 84 },
      { name: "Bernardo Cuesta", pos: "RB", overall: 75 },
      { name: "Macnelly Torres", pos: "CB", overall: 78 },
      { name: "Mina", pos: "CB", overall: 81 },
      { name: "Arias", pos: "LB", overall: 76 },
      { name: "Guerra", pos: "CM", overall: 77 },
      { name: "Andrés Ibargüen", pos: "CM", overall: 77 },
      { name: "Macnelly", pos: "AM", overall: 78 },
      { name: "Ibarbo", pos: "RW", overall: 78 },
      { name: "Miguel Borja", pos: "ST", overall: 80 },
      { name: "Berrío", pos: "LW", overall: 77 }
    ]
  },
  {
    id: "lib_nacionalcol_1989", name: "Atlético Nacional", season: "1989", country: "CO", flag: "🇨🇴",
    formation: "4-4-2",
    players: [
      { name: "Higuita", pos: "GK", overall: 84 },
      { name: "Carmona", pos: "RB", overall: 76 },
      { name: "Perea", pos: "CB", overall: 78 },
      { name: "Andrés Escobar", pos: "CB", overall: 80 },
      { name: "Gómez", pos: "LB", overall: 76 },
      { name: "Pérez", pos: "RM", overall: 76 },
      { name: "Alvarez", pos: "CM", overall: 78 },
      { name: "Alexis García", pos: "CM", overall: 78 },
      { name: "Arango", pos: "LM", overall: 76 },
      { name: "Usuriaga", pos: "ST", overall: 79 },
      { name: "Tréllez", pos: "ST", overall: 79 }
    ]
  },
  {
    id: "lib_deportivocali_1999", name: "Deportivo Cali", season: "1999", country: "CO", flag: "🇨🇴",
    formation: "4-4-2",
    players: [
      { name: "Mondragón", pos: "GK", overall: 84 },
      { name: "Yepes", pos: "RB", overall: 79 },
      { name: "Bermúdez", pos: "CB", overall: 80 },
      { name: "Galeano", pos: "CB", overall: 76 },
      { name: "Reasco", pos: "LB", overall: 75 },
      { name: "Pisano", pos: "RM", overall: 76 },
      { name: "Estrada", pos: "CM", overall: 77 },
      { name: "Bonilla", pos: "CM", overall: 76 },
      { name: "Vásquez", pos: "LM", overall: 76 },
      { name: "Aristizábal", pos: "ST", overall: 80 },
      { name: "Klinger", pos: "ST", overall: 76 }
    ]
  },
  {
    id: "lib_nacionalcol_1995", name: "Atletico Nacional", season: "1995", country: "CO", flag: "🇨🇴",
    formation: "4-3-3",
    players: [
      { name: "Mondragón", pos: "GK", overall: 81 },
      { name: "Pérez", pos: "RB", overall: 76 },
      { name: "Bermúdez", pos: "CB", overall: 78 },
      { name: "Galeano", pos: "CB", overall: 76 },
      { name: "Restrepo", pos: "LB", overall: 75 },
      { name: "García", pos: "CM", overall: 77 },
      { name: "Vélez", pos: "CM", overall: 76 },
      { name: "León", pos: "AM", overall: 76 },
      { name: "Mosquera", pos: "RW", overall: 76 },
      { name: "Valenciano", pos: "ST", overall: 78 },
      { name: "Aristizábal", pos: "LW", overall: 79 }
    ]
  },

  // ───────── EQUATORIANOS ─────────
  {
    id: "lib_lduquito_2008", name: "LDU Quito", season: "2008", country: "EC", flag: "🇪🇨",
    formation: "3-4-3",
    players: [
      { name: "Cevallos", pos: "GK", overall: 81 },
      { name: "Norberto Araujo", pos: "CB", overall: 76 },
      { name: "Renán Calle", pos: "CB", overall: 75 },
      { name: "Jairo Campos", pos: "CB", overall: 75 },
      { name: "Ambrosi", pos: "LM", overall: 76 },
      { name: "Patricio Urrutia", pos: "CM", overall: 80 },
      { name: "Enrique Vera", pos: "CM", overall: 76 },
      { name: "Joffre Guerrón", pos: "RM", overall: 78 },
      { name: "Luis Bolaños", pos: "RW", overall: 78 },
      { name: "Damián Manso", pos: "LW", overall: 78 },
      { name: "Claudio Bieler", pos: "ST", overall: 80 }
    ]
  },
  {
    id: "lib_barcelonasc_1998", name: "Barcelona de Guayaquil", season: "1998", country: "EC", flag: "🇪🇨",
    formation: "4-4-2",
    players: [
      { name: "Cevallos", pos: "GK", overall: 80 },
      { name: "Capurro", pos: "RB", overall: 75 },
      { name: "Reasco", pos: "CB", overall: 76 },
      { name: "Hurtado", pos: "CB", overall: 79 },
      { name: "Burbano", pos: "LB", overall: 75 },
      { name: "Cevallos", pos: "RM", overall: 75 },
      { name: "Verduga", pos: "CM", overall: 75 },
      { name: "Espinoza", pos: "CM", overall: 75 },
      { name: "Spencer", pos: "LM", overall: 76 },
      { name: "Iván Kaviedes", pos: "ST", overall: 78 },
      { name: "Delgado", pos: "ST", overall: 79 }
    ]
  },
  {
    id: "lib_idv_2016", name: "Independiente del Valle", season: "2016", country: "EC", flag: "🇪🇨",
    formation: "4-2-3-1",
    players: [
      { name: "Galíndez", pos: "GK", overall: 77 },
      { name: "Quintero", pos: "RB", overall: 75 },
      { name: "Mera", pos: "CB", overall: 76 },
      { name: "Cortez", pos: "CB", overall: 75 },
      { name: "Caicedo", pos: "LB", overall: 75 },
      { name: "Lara", pos: "CM", overall: 76 },
      { name: "Gruezo", pos: "CM", overall: 78 },
      { name: "Cazares", pos: "AM", overall: 78 },
      { name: "Quiñónez", pos: "RW", overall: 76 },
      { name: "Beder Caicedo", pos: "LW", overall: 76 },
      { name: "Jhojan Julio", pos: "ST", overall: 77 }
    ]
  },
  {
    id: "lib_barcelonasc_1990", name: "Barcelona de Guayaquil", season: "1990", country: "EC", flag: "🇪🇨",
    formation: "4-4-2",
    players: [
      { name: "Cevallos", pos: "GK", overall: 80 },
      { name: "Burbano", pos: "RB", overall: 75 },
      { name: "Hurtado", pos: "CB", overall: 78 },
      { name: "Reasco", pos: "CB", overall: 76 },
      { name: "Capurro", pos: "LB", overall: 75 },
      { name: "Espinoza", pos: "RM", overall: 75 },
      { name: "Verduga", pos: "CM", overall: 76 },
      { name: "Cevallos", pos: "CM", overall: 75 },
      { name: "Spencer", pos: "LM", overall: 76 },
      { name: "Cuggiani", pos: "ST", overall: 77 },
      { name: "Hugo Pio", pos: "ST", overall: 76 }
    ]
  },

  // ───────── PARAGUAIOS ─────────
  {
    id: "lib_olimpia_1979", name: "Olimpia", season: "1979", country: "PY", flag: "🇵🇾",
    formation: "4-3-3",
    players: [
      { name: "Ever Almeida", pos: "GK", overall: 82 },
      { name: "Solalinde", pos: "RB", overall: 77 },
      { name: "Paredes", pos: "CB", overall: 77 },
      { name: "Sosa", pos: "CB", overall: 76 },
      { name: "Piazza", pos: "LB", overall: 75 },
      { name: "Torres", pos: "CM", overall: 76 },
      { name: "Delgado", pos: "CM", overall: 76 },
      { name: "Kiese", pos: "AM", overall: 77 },
      { name: "Isasi", pos: "RW", overall: 78 },
      { name: "Talavera", pos: "ST", overall: 79 },
      { name: "Villalba", pos: "LW", overall: 76 }
    ]
  },
  {
    id: "lib_olimpia_1990", name: "Olimpia", season: "1990", country: "PY", flag: "🇵🇾",
    formation: "4-4-2",
    players: [
      { name: "Almeida", pos: "GK", overall: 81 },
      { name: "Cáceres", pos: "RB", overall: 76 },
      { name: "Castro", pos: "CB", overall: 76 },
      { name: "Fernández", pos: "CB", overall: 76 },
      { name: "Suárez", pos: "LB", overall: 75 },
      { name: "Balbuena", pos: "RM", overall: 77 },
      { name: "Guasch", pos: "CM", overall: 76 },
      { name: "Monzón", pos: "CM", overall: 77 },
      { name: "González", pos: "LM", overall: 76 },
      { name: "Samaniego", pos: "ST", overall: 78 },
      { name: "Amarilla", pos: "ST", overall: 80 }
    ]
  },
  {
    id: "lib_olimpia_2002", name: "Olimpia", season: "2002", country: "PY", flag: "🇵🇾",
    formation: "4-4-2",
    players: [
      { name: "Tavarelli", pos: "GK", overall: 79 },
      { name: "Cáceres", pos: "RB", overall: 75 },
      { name: "Córdoba", pos: "CB", overall: 76 },
      { name: "Caniza", pos: "CB", overall: 78 },
      { name: "Paredes", pos: "LB", overall: 75 },
      { name: "Órteman", pos: "RM", overall: 76 },
      { name: "Isasi", pos: "CM", overall: 77 },
      { name: "Da Silva", pos: "CM", overall: 76 },
      { name: "Vázquez", pos: "LM", overall: 75 },
      { name: "Santa Cruz", pos: "ST", overall: 79 },
      { name: "Cardozo", pos: "ST", overall: 78 }
    ]
  },
  {
    id: "lib_nacionalpar_2014", name: "Nacional-PAR", season: "2014", country: "PY", flag: "🇵🇾",
    formation: "4-4-2",
    players: [
      { name: "Fernández", pos: "GK", overall: 76 },
      { name: "Bobadilla", pos: "RB", overall: 74 },
      { name: "Ortiz", pos: "CB", overall: 75 },
      { name: "Servín", pos: "CB", overall: 74 },
      { name: "Rojas", pos: "LB", overall: 74 },
      { name: "Riveros", pos: "RM", overall: 75 },
      { name: "Bareiro", pos: "CM", overall: 75 },
      { name: "Cardozo", pos: "CM", overall: 75 },
      { name: "Núñez", pos: "LM", overall: 75 },
      { name: "Walter Gaona", pos: "ST", overall: 76 },
      { name: "Ramírez", pos: "ST", overall: 76 }
    ]
  },

  // ───────── PERUANOS ─────────
  {
    id: "lib_universitario_1972", name: "Universitario", season: "1972", country: "PE", flag: "🇵🇪",
    formation: "4-4-2",
    players: [
      { name: "Soria", pos: "GK", overall: 78 },
      { name: "Cuéllar", pos: "RB", overall: 75 },
      { name: "Luna", pos: "CB", overall: 75 },
      { name: "Castañeda", pos: "CB", overall: 75 },
      { name: "Chumpitaz", pos: "LB", overall: 81 },
      { name: "Muñante", pos: "RM", overall: 78 },
      { name: "Rojas", pos: "CM", overall: 77 },
      { name: "Techera", pos: "CM", overall: 76 },
      { name: "Cruzado", pos: "LM", overall: 76 },
      { name: "Ramírez", pos: "ST", overall: 78 },
      { name: "Casaretto", pos: "ST", overall: 76 }
    ]
  },
  {
    id: "lib_sportingcristal_1997", name: "Sporting Cristal", season: "1997", country: "PE", flag: "🇵🇪",
    formation: "4-4-2",
    players: [
      { name: "Ibáñez", pos: "GK", overall: 80 },
      { name: "Rebosio", pos: "RB", overall: 75 },
      { name: "Pajuelo", pos: "CB", overall: 76 },
      { name: "Rebosio", pos: "CB", overall: 75 },
      { name: "Olivares", pos: "LB", overall: 75 },
      { name: "Carranza", pos: "RM", overall: 76 },
      { name: "Pizarro", pos: "CM", overall: 77 },
      { name: "Jayo", pos: "CM", overall: 76 },
      { name: "Balta", pos: "LM", overall: 76 },
      { name: "Mosquera", pos: "ST", overall: 78 },
      { name: "Hirano", pos: "ST", overall: 77 }
    ]
  },

  // ───────── VENEZUELANOS ─────────
  {
    id: "lib_portuguesafc_1977", name: "Portuguesa FC", season: "1977", country: "VE", flag: "🇻🇪",
    formation: "4-4-2",
    players: [
      { name: "Pinto", pos: "GK", overall: 75 },
      { name: "Sanmartín", pos: "RB", overall: 73 },
      { name: "Páez", pos: "CB", overall: 74 },
      { name: "Echezuria", pos: "CB", overall: 73 },
      { name: "Sandoval", pos: "LB", overall: 73 },
      { name: "Solórzano", pos: "RM", overall: 74 },
      { name: "Amaro Navarro", pos: "CM", overall: 74 },
      { name: "Vidal", pos: "CM", overall: 73 },
      { name: "Lameda", pos: "LM", overall: 73 },
      { name: "Casale", pos: "ST", overall: 75 },
      { name: "Bonomo", pos: "ST", overall: 75 }
    ]
  },
  {
    id: "lib_deportivotachira_2004", name: "Deportivo Táchira", season: "2004", country: "VE", flag: "🇻🇪",
    formation: "4-4-2",
    players: [
      { name: "Gutiérrez", pos: "GK", overall: 76 },
      { name: "Fernández", pos: "RB", overall: 73 },
      { name: "Lameda", pos: "CB", overall: 74 },
      { name: "Vizcarrondo", pos: "CB", overall: 77 },
      { name: "Maldonado", pos: "LB", overall: 73 },
      { name: "Vielma", pos: "RM", overall: 74 },
      { name: "González", pos: "CM", overall: 74 },
      { name: "Cichero", pos: "CM", overall: 73 },
      { name: "Rondón", pos: "LM", overall: 74 },
      { name: "Maldonado", pos: "ST", overall: 76 },
      { name: "Arango", pos: "ST", overall: 75 }
    ]
  }
];

// Position label mapping
const POS_LABELS = {
  GK: "GOL", RB: "LD", LB: "LE", CB: "ZAG",
  CM: "MC", AM: "MEI", RM: "MD", LM: "ME",
  RW: "PD", LW: "PE", ST: "CA", CF: "CA",
  RWB: "LD", LWB: "LE"
};

// Rounds in the Champions League
const ROUNDS = ["Grupos", "Oitavas", "Quartas", "Semi", "Final"];
