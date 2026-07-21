
// ═══════════════════════════════════════════════════════════════
// EUROCOPA — seleções históricas de 1960 a 2024
// ═══════════════════════════════════════════════════════════════
const EUROCOPA_TEAMS = [

  // ───────── 1960 ─────────
  {
    id: "eu_su_1960", name: "URSS", season: "1960", country: "SU", flag: "🇷🇺",
    formation: "4-2-4",
    players: [
      { name: "Yashin", pos: "GK", overall: 92 },
      { name: "Chekheli", pos: "RB", overall: 76 },
      { name: "Krutikov", pos: "LB", overall: 78 },
      { name: "Maslyonkin", pos: "CB", overall: 77 },
      { name: "Voinov", pos: "CM", overall: 79 },
      { name: "Netto", pos: "CM", overall: 84 },
      { name: "Meshki", pos: "RW", overall: 78 },
      { name: "Ivanov", pos: "ST", overall: 82 },
      { name: "Ponedelnik", pos: "ST", overall: 83 },
      { name: "Bubukin", pos: "CM", overall: 77 },
      { name: "Kanevsky", pos: "LW", overall: 76 }
    ]
  },
  {
    id: "eu_yu_1960", name: "Iugoslávia", season: "1960", country: "YU", flag: "🇷🇸",
    formation: "4-2-4",
    players: [
      { name: "Vidinić", pos: "GK", overall: 79 },
      { name: "Đurković", pos: "RB", overall: 76 },
      { name: "Jusufi", pos: "LB", overall: 80 },
      { name: "Miladinović", pos: "CB", overall: 77 },
      { name: "Perušić", pos: "CM", overall: 78 },
      { name: "Žanetić", pos: "CM", overall: 76 },
      { name: "Šekularac", pos: "AM", overall: 85 },
      { name: "Galić", pos: "ST", overall: 82 },
      { name: "Jerković", pos: "ST", overall: 81 },
      { name: "Knez", pos: "LW", overall: 78 },
      { name: "Kostić", pos: "RW", overall: 77 }
    ]
  },
  {
    id: "eu_tch_1960", name: "Tchecoslováquia", season: "1960", country: "TCH", flag: "🇨🇿",
    formation: "4-2-4",
    players: [
      { name: "Schrojf", pos: "GK", overall: 80 },
      { name: "Tichý", pos: "RB", overall: 76 },
      { name: "Novák", pos: "LB", overall: 77 },
      { name: "Pluskal", pos: "CB", overall: 76 },
      { name: "Popluhár", pos: "CB", overall: 77 },
      { name: "Masopust", pos: "CM", overall: 87 },
      { name: "Pospíchal", pos: "CM", overall: 76 },
      { name: "Scherer", pos: "ST", overall: 79 },
      { name: "Kvašňák", pos: "ST", overall: 78 },
      { name: "Kadraba", pos: "RW", overall: 77 },
      { name: "Bubník", pos: "LW", overall: 75 }
    ]
  },
  {
    id: "eu_fr_1960", name: "França", season: "1960", country: "FR", flag: "🇫🇷",
    formation: "4-2-4",
    players: [
      { name: "Lamia", pos: "GK", overall: 77 },
      { name: "Rodzik", pos: "RB", overall: 75 },
      { name: "Chorda", pos: "LB", overall: 75 },
      { name: "Marcel", pos: "CB", overall: 76 },
      { name: "Ameller", pos: "CM", overall: 76 },
      { name: "Wendling", pos: "CB", overall: 77 },
      { name: "Douis", pos: "LW", overall: 79 },
      { name: "Piantoni", pos: "AM", overall: 83 },
      { name: "Vincent", pos: "ST", overall: 80 },
      { name: "Heutte", pos: "ST", overall: 78 },
      { name: "Wisnieski", pos: "RW", overall: 78 }
    ]
  },

  // ───────── 1964 ─────────
  {
    id: "eu_es_1964", name: "Espanha", season: "1964", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Iríbar", pos: "GK", overall: 83 },
      { name: "Rivilla", pos: "RB", overall: 78 },
      { name: "Calleja", pos: "LB", overall: 76 },
      { name: "Olivella", pos: "CB", overall: 78 },
      { name: "Zoco", pos: "CB", overall: 79 },
      { name: "Fusté", pos: "CM", overall: 79 },
      { name: "Suárez", pos: "AM", overall: 87 },
      { name: "Pereda", pos: "RW", overall: 79 },
      { name: "Amancio", pos: "RW", overall: 84 },
      { name: "Marcelino", pos: "ST", overall: 81 },
      { name: "Lapetra", pos: "LW", overall: 78 }
    ]
  },
  {
    id: "eu_su_1964", name: "URSS", season: "1964", country: "SU", flag: "🇷🇺",
    formation: "4-3-3",
    players: [
      { name: "Yashin", pos: "GK", overall: 93 },
      { name: "Shustikov", pos: "RB", overall: 77 },
      { name: "Ostrovsky", pos: "CB", overall: 77 },
      { name: "Shesternyov", pos: "CB", overall: 81 },
      { name: "Danilov", pos: "LB", overall: 77 },
      { name: "Voronin", pos: "CM", overall: 83 },
      { name: "Chislenko", pos: "RW", overall: 82 },
      { name: "Ivanov", pos: "ST", overall: 82 },
      { name: "Ponedelnik", pos: "ST", overall: 80 },
      { name: "Korneev", pos: "CM", overall: 76 },
      { name: "Khusainov", pos: "LW", overall: 78 }
    ]
  },
  {
    id: "eu_hu_1964", name: "Hungria", season: "1964", country: "HU", flag: "🇭🇺",
    formation: "4-2-4",
    players: [
      { name: "Szentmihályi", pos: "GK", overall: 79 },
      { name: "Novák", pos: "RB", overall: 76 },
      { name: "Ihász", pos: "LB", overall: 76 },
      { name: "Mátrai", pos: "CB", overall: 77 },
      { name: "Sóvári", pos: "CM", overall: 76 },
      { name: "Rákosi", pos: "CM", overall: 78 },
      { name: "Farkas", pos: "LW", overall: 79 },
      { name: "Bene", pos: "RW", overall: 83 },
      { name: "Albert", pos: "ST", overall: 88 },
      { name: "Komora", pos: "ST", overall: 77 },
      { name: "Solymosi", pos: "CM", overall: 76 }
    ]
  },
  {
    id: "eu_dk_1964", name: "Dinamarca", season: "1964", country: "DK", flag: "🇩🇰",
    formation: "4-2-4",
    players: [
      { name: "Jensen", pos: "GK", overall: 75 },
      { name: "Christensen", pos: "RB", overall: 74 },
      { name: "Nielsen", pos: "LB", overall: 74 },
      { name: "Andersen", pos: "CB", overall: 75 },
      { name: "Enoksen", pos: "CM", overall: 75 },
      { name: "Bertelsen", pos: "CM", overall: 74 },
      { name: "Hansen", pos: "RW", overall: 76 },
      { name: "Madsen", pos: "ST", overall: 77 },
      { name: "Petersen", pos: "ST", overall: 76 },
      { name: "Larsen", pos: "LW", overall: 75 },
      { name: "Bertelsen", pos: "CB", overall: 74 }
    ]
  },

  // ───────── 1968 ─────────
  {
    id: "eu_it_1968", name: "Itália", season: "1968", country: "IT", flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Zoff", pos: "GK", overall: 89 },
      { name: "Burgnich", pos: "RB", overall: 83 },
      { name: "Facchetti", pos: "LB", overall: 88 },
      { name: "Guarneri", pos: "CB", overall: 79 },
      { name: "Salvadore", pos: "CB", overall: 80 },
      { name: "Ferrini", pos: "CM", overall: 78 },
      { name: "Juliano", pos: "CM", overall: 79 },
      { name: "Domenghini", pos: "RW", overall: 82 },
      { name: "Mazzola", pos: "AM", overall: 86 },
      { name: "Riva", pos: "ST", overall: 89 },
      { name: "Prati", pos: "LW", overall: 81 }
    ]
  },
  {
    id: "eu_yu_1968", name: "Iugoslávia", season: "1968", country: "YU", flag: "🇷🇸",
    formation: "4-3-3",
    players: [
      { name: "Pantelić", pos: "GK", overall: 81 },
      { name: "Fazlagić", pos: "RB", overall: 77 },
      { name: "Damjanović", pos: "LB", overall: 76 },
      { name: "Paunović", pos: "CB", overall: 78 },
      { name: "Holcer", pos: "CB", overall: 79 },
      { name: "Trivić", pos: "CM", overall: 78 },
      { name: "Aćimović", pos: "AM", overall: 83 },
      { name: "Pavlović", pos: "RW", overall: 79 },
      { name: "Musemić", pos: "ST", overall: 80 },
      { name: "Džajić", pos: "LW", overall: 87 },
      { name: "Petković", pos: "CM", overall: 77 }
    ]
  },
  {
    id: "eu_eng_1968", name: "Inglaterra", season: "1968", country: "ENG", flag: "🏴",
    formation: "4-3-3",
    players: [
      { name: "Banks", pos: "GK", overall: 90 },
      { name: "Newton", pos: "RB", overall: 79 },
      { name: "Cooper", pos: "LB", overall: 79 },
      { name: "Moore", pos: "CB", overall: 90 },
      { name: "Labone", pos: "CB", overall: 79 },
      { name: "Mullery", pos: "CM", overall: 80 },
      { name: "Ball", pos: "CM", overall: 85 },
      { name: "Peters", pos: "RW", overall: 84 },
      { name: "Hurst", pos: "ST", overall: 88 },
      { name: "Hunt", pos: "ST", overall: 83 },
      { name: "Charlton", pos: "LW", overall: 89 }
    ]
  },
  {
    id: "eu_su_1968", name: "URSS", season: "1968", country: "SU", flag: "🇷🇺",
    formation: "4-3-3",
    players: [
      { name: "Kavazashvili", pos: "GK", overall: 80 },
      { name: "Istomin", pos: "RB", overall: 76 },
      { name: "Khurtsilava", pos: "CB", overall: 79 },
      { name: "Shesternyov", pos: "CB", overall: 82 },
      { name: "Afonin", pos: "LB", overall: 76 },
      { name: "Voronin", pos: "CM", overall: 83 },
      { name: "Muntyan", pos: "CM", overall: 78 },
      { name: "Bannishevski", pos: "RW", overall: 79 },
      { name: "Malofeev", pos: "ST", overall: 78 },
      { name: "Byshovets", pos: "ST", overall: 80 },
      { name: "Khmelnitski", pos: "LW", overall: 77 }
    ]
  },

  // ───────── 1972 ─────────
  {
    id: "eu_de_1972", name: "Alemanha Ocidental", season: "1972", country: "DE", flag: "🇩🇪",
    formation: "4-3-3",
    players: [
      { name: "Maier", pos: "GK", overall: 91 },
      { name: "Höttges", pos: "RB", overall: 79 },
      { name: "Breitner", pos: "LB", overall: 85 },
      { name: "Schwarzenbeck", pos: "CB", overall: 82 },
      { name: "Beckenbauer", pos: "CB", overall: 94 },
      { name: "Hoeness", pos: "CM", overall: 84 },
      { name: "Netzer", pos: "CM", overall: 88 },
      { name: "Grabowski", pos: "RW", overall: 82 },
      { name: "Müller", pos: "ST", overall: 93 },
      { name: "Heynckes", pos: "ST", overall: 83 },
      { name: "Kremers", pos: "LW", overall: 78 }
    ]
  },
  {
    id: "eu_su_1972", name: "URSS", season: "1972", country: "SU", flag: "🇷🇺",
    formation: "4-3-3",
    players: [
      { name: "Rudakov", pos: "GK", overall: 82 },
      { name: "Dzodzuashvili", pos: "RB", overall: 77 },
      { name: "Khurtsilava", pos: "CB", overall: 79 },
      { name: "Kaplichniy", pos: "CB", overall: 78 },
      { name: "Istomin", pos: "LB", overall: 77 },
      { name: "Kolotov", pos: "CM", overall: 81 },
      { name: "Muntyan", pos: "CM", overall: 78 },
      { name: "Konkov", pos: "RW", overall: 79 },
      { name: "Kolotov", pos: "ST", overall: 78 },
      { name: "Banishevski", pos: "ST", overall: 79 },
      { name: "Onishchenko", pos: "LW", overall: 80 }
    ]
  },
  {
    id: "eu_be_1972", name: "Bélgica", season: "1972", country: "BE", flag: "🇧🇪",
    formation: "4-3-3",
    players: [
      { name: "Piot", pos: "GK", overall: 80 },
      { name: "Heylens", pos: "RB", overall: 77 },
      { name: "Dockx", pos: "LB", overall: 76 },
      { name: "Dewalque", pos: "CB", overall: 79 },
      { name: "Jeck", pos: "CB", overall: 77 },
      { name: "Van Himst", pos: "AM", overall: 87 },
      { name: "Semmeling", pos: "CM", overall: 77 },
      { name: "Polleunis", pos: "RW", overall: 78 },
      { name: "Lambert", pos: "ST", overall: 81 },
      { name: "Devrindt", pos: "ST", overall: 78 },
      { name: "Van Moer", pos: "CM", overall: 82 }
    ]
  },
  {
    id: "eu_hu_1972", name: "Hungria", season: "1972", country: "HU", flag: "🇭🇺",
    formation: "4-3-3",
    players: [
      { name: "Rothermel", pos: "GK", overall: 77 },
      { name: "Pancsics", pos: "RB", overall: 77 },
      { name: "Páncsics", pos: "CB", overall: 76 },
      { name: "Novák", pos: "CB", overall: 77 },
      { name: "Fazekas", pos: "LB", overall: 76 },
      { name: "Kű", pos: "CM", overall: 78 },
      { name: "Szűcs", pos: "CM", overall: 76 },
      { name: "Vidáts", pos: "RW", overall: 77 },
      { name: "Branikovits", pos: "ST", overall: 79 },
      { name: "Kocsis", pos: "ST", overall: 78 },
      { name: "Juhász", pos: "LW", overall: 76 }
    ]
  },

  // ───────── 1976 ─────────
  {
    id: "eu_tch_1976", name: "Tchecoslováquia", season: "1976", country: "TCH", flag: "🇨🇿",
    formation: "4-4-2",
    players: [
      { name: "Viktor", pos: "GK", overall: 84 },
      { name: "Pivarník", pos: "RB", overall: 78 },
      { name: "Ondruš", pos: "CB", overall: 79 },
      { name: "Capkovič", pos: "CB", overall: 78 },
      { name: "Gögh", pos: "LB", overall: 77 },
      { name: "Moder", pos: "RM", overall: 78 },
      { name: "Panenka", pos: "CM", overall: 84 },
      { name: "Dobiaš", pos: "CM", overall: 78 },
      { name: "Ondruš", pos: "LM", overall: 76 },
      { name: "Nehoda", pos: "ST", overall: 82 },
      { name: "Masný", pos: "ST", overall: 80 }
    ]
  },
  {
    id: "eu_de_1976", name: "Alemanha Ocidental", season: "1976", country: "DE", flag: "🇩🇪",
    formation: "4-3-3",
    players: [
      { name: "Maier", pos: "GK", overall: 91 },
      { name: "Vogts", pos: "RB", overall: 83 },
      { name: "Breitner", pos: "LB", overall: 85 },
      { name: "Beckenbauer", pos: "CB", overall: 95 },
      { name: "Schwarzenbeck", pos: "CB", overall: 81 },
      { name: "Bonhof", pos: "CM", overall: 83 },
      { name: "Wimmer", pos: "CM", overall: 79 },
      { name: "Hölzenbein", pos: "LW", overall: 81 },
      { name: "Müller", pos: "ST", overall: 90 },
      { name: "Flohe", pos: "RW", overall: 78 },
      { name: "Bongartz", pos: "AM", overall: 78 }
    ]
  },
  {
    id: "eu_nl_1976", name: "Holanda", season: "1976", country: "NL", flag: "🇳🇱",
    formation: "4-3-3",
    players: [
      { name: "Jongbloed", pos: "GK", overall: 82 },
      { name: "Suurbier", pos: "RB", overall: 82 },
      { name: "Krol", pos: "LB", overall: 87 },
      { name: "Rijsbergen", pos: "CB", overall: 78 },
      { name: "Hanegem", pos: "CM", overall: 87 },
      { name: "Jansen", pos: "CM", overall: 80 },
      { name: "Neeskens", pos: "CM", overall: 89 },
      { name: "Rep", pos: "ST", overall: 86 },
      { name: "Cruyff", pos: "ST", overall: 96 },
      { name: "Rensenbrink", pos: "LW", overall: 87 },
      { name: "Geels", pos: "RW", overall: 78 }
    ]
  },
  {
    id: "eu_yu_1976", name: "Iugoslávia", season: "1976", country: "YU", flag: "🇷🇸",
    formation: "4-3-3",
    players: [
      { name: "Maric", pos: "GK", overall: 79 },
      { name: "Buljan", pos: "RB", overall: 78 },
      { name: "Katalinski", pos: "CB", overall: 80 },
      { name: "Muzinić", pos: "CB", overall: 78 },
      { name: "Nikolić", pos: "LB", overall: 77 },
      { name: "Oblak", pos: "CM", overall: 79 },
      { name: "Popivoda", pos: "CM", overall: 78 },
      { name: "Šurjak", pos: "RW", overall: 82 },
      { name: "Karasi", pos: "ST", overall: 83 },
      { name: "Džajić", pos: "LW", overall: 87 },
      { name: "Petković", pos: "CM", overall: 77 }
    ]
  },

  // ───────── 1980 ─────────
  {
    id: "eu_de_1980", name: "Alemanha Ocidental", season: "1980", country: "DE", flag: "🇩🇪",
    formation: "4-4-2",
    players: [
      { name: "Schumacher", pos: "GK", overall: 87 },
      { name: "Kaltz", pos: "RB", overall: 83 },
      { name: "Briegel", pos: "LB", overall: 84 },
      { name: "K.H. Förster", pos: "CB", overall: 82 },
      { name: "Stielike", pos: "CB", overall: 85 },
      { name: "Dietz", pos: "RM", overall: 78 },
      { name: "Schuster", pos: "CM", overall: 87 },
      { name: "H. Müller", pos: "CM", overall: 79 },
      { name: "Allofs", pos: "LM", overall: 82 },
      { name: "Rummenigge", pos: "ST", overall: 91 },
      { name: "Hrubesch", pos: "ST", overall: 84 }
    ]
  },
  {
    id: "eu_be_1980", name: "Bélgica", season: "1980", country: "BE", flag: "🇧🇪",
    formation: "4-4-2",
    players: [
      { name: "Pfaff", pos: "GK", overall: 86 },
      { name: "Gerets", pos: "RB", overall: 82 },
      { name: "Renquin", pos: "LB", overall: 77 },
      { name: "Millecamps", pos: "CB", overall: 77 },
      { name: "Meeuws", pos: "CB", overall: 78 },
      { name: "Cools", pos: "RM", overall: 79 },
      { name: "Van der Elst", pos: "CM", overall: 81 },
      { name: "Vandereycken", pos: "CM", overall: 82 },
      { name: "Ceulemans", pos: "LM", overall: 86 },
      { name: "Van der Eycken", pos: "ST", overall: 79 },
      { name: "Voordeckers", pos: "ST", overall: 78 }
    ]
  },
  {
    id: "eu_tch_1980", name: "Tchecoslováquia", season: "1980", country: "TCH", flag: "🇨🇿",
    formation: "4-4-2",
    players: [
      { name: "Hruška", pos: "GK", overall: 80 },
      { name: "Barmoš", pos: "RB", overall: 76 },
      { name: "Vojáček", pos: "LB", overall: 76 },
      { name: "Fiala", pos: "CB", overall: 78 },
      { name: "Ondruš", pos: "CB", overall: 79 },
      { name: "Kozák", pos: "RM", overall: 79 },
      { name: "Berger", pos: "CM", overall: 80 },
      { name: "Gajdůšek", pos: "CM", overall: 78 },
      { name: "Panenka", pos: "LM", overall: 84 },
      { name: "Jurkemik", pos: "ST", overall: 79 },
      { name: "Masný", pos: "ST", overall: 80 }
    ]
  },
  {
    id: "eu_it_1980", name: "Itália", season: "1980", country: "IT", flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Zoff", pos: "GK", overall: 90 },
      { name: "Bergomi", pos: "RB", overall: 80 },
      { name: "Cabrini", pos: "LB", overall: 86 },
      { name: "Collovati", pos: "CB", overall: 80 },
      { name: "Scirea", pos: "CB", overall: 88 },
      { name: "Tardelli", pos: "CM", overall: 85 },
      { name: "Antognoni", pos: "CM", overall: 87 },
      { name: "Causio", pos: "RW", overall: 82 },
      { name: "Graziani", pos: "ST", overall: 83 },
      { name: "Bettega", pos: "ST", overall: 84 },
      { name: "Franco Selvaggi", pos: "LW", overall: 78 }
    ]
  },

  // ───────── 1984 ─────────
  {
    id: "eu_fr_1984", name: "França", season: "1984", country: "FR", flag: "🇫🇷",
    formation: "4-4-2",
    players: [
      { name: "Bats", pos: "GK", overall: 82 },
      { name: "Battiston", pos: "RB", overall: 83 },
      { name: "Ayache", pos: "CB", overall: 79 },
      { name: "Le Roux", pos: "CB", overall: 79 },
      { name: "Domergue", pos: "LB", overall: 80 },
      { name: "Tigana", pos: "RM", overall: 88 },
      { name: "Giresse", pos: "CM", overall: 88 },
      { name: "Platini", pos: "AM", overall: 95 },
      { name: "Fernández", pos: "LM", overall: 85 },
      { name: "Lacombe", pos: "ST", overall: 80 },
      { name: "Bellone", pos: "ST", overall: 81 }
    ]
  },
  {
    id: "eu_es_1984", name: "Espanha", season: "1984", country: "ES", flag: "🇪🇸",
    formation: "4-4-2",
    players: [
      { name: "Arconada", pos: "GK", overall: 87 },
      { name: "Urquiaga", pos: "RB", overall: 78 },
      { name: "Camacho", pos: "LB", overall: 82 },
      { name: "Salva", pos: "CB", overall: 77 },
      { name: "Goikoetxea", pos: "CB", overall: 79 },
      { name: "Señor", pos: "RM", overall: 80 },
      { name: "Francisco", pos: "CM", overall: 79 },
      { name: "Víctor", pos: "CM", overall: 79 },
      { name: "Julio Alberto", pos: "LM", overall: 79 },
      { name: "Santillana", pos: "ST", overall: 82 },
      { name: "Carrasco", pos: "ST", overall: 83 }
    ]
  },
  {
    id: "eu_dk_1984", name: "Dinamarca", season: "1984", country: "DK", flag: "🇩🇰",
    formation: "3-5-2",
    players: [
      { name: "Qvist", pos: "GK", overall: 80 },
      { name: "Busk", pos: "CB", overall: 79 },
      { name: "Nielsen", pos: "CB", overall: 82 },
      { name: "Olsen", pos: "CB", overall: 80 },
      { name: "Berggreen", pos: "RM", overall: 78 },
      { name: "Lerby", pos: "CM", overall: 85 },
      { name: "Arnesen", pos: "CM", overall: 84 },
      { name: "Bertelsen", pos: "CM", overall: 76 },
      { name: "Elkjær", pos: "ST", overall: 87 },
      { name: "Michael Laudrup", pos: "ST", overall: 89 },
      { name: "Simonsen", pos: "LM", overall: 85 }
    ]
  },
  {
    id: "eu_pt_1984", name: "Portugal", season: "1984", country: "PT", flag: "🇵🇹",
    formation: "4-4-2",
    players: [
      { name: "Bento", pos: "GK", overall: 83 },
      { name: "João Pinto", pos: "RB", overall: 79 },
      { name: "Álvaro", pos: "LB", overall: 78 },
      { name: "Eurico", pos: "CB", overall: 78 },
      { name: "Frederico", pos: "CB", overall: 78 },
      { name: "Jaime Pacheco", pos: "RM", overall: 79 },
      { name: "Sousa", pos: "CM", overall: 78 },
      { name: "Chalana", pos: "LM", overall: 86 },
      { name: "Diamantino", pos: "ST", overall: 79 },
      { name: "Fernando Gomes", pos: "ST", overall: 83 },
      { name: "Jordão", pos: "ST", overall: 80 }
    ]
  },

  // ───────── 1988 ─────────
  {
    id: "eu_nl_1988", name: "Holanda", season: "1988", country: "NL", flag: "🇳🇱",
    formation: "3-5-2",
    players: [
      { name: "Van Breukelen", pos: "GK", overall: 85 },
      { name: "R. Koeman", pos: "CB", overall: 88 },
      { name: "Rijkaard", pos: "CB", overall: 90 },
      { name: "Van Tiggelen", pos: "CB", overall: 79 },
      { name: "Van Aerle", pos: "RM", overall: 78 },
      { name: "Wouters", pos: "CM", overall: 80 },
      { name: "Vanenburg", pos: "RM", overall: 82 },
      { name: "E. Koeman", pos: "LM", overall: 79 },
      { name: "Gullit", pos: "ST", overall: 93 },
      { name: "Van Basten", pos: "ST", overall: 95 },
      { name: "Muhren", pos: "CM", overall: 82 }
    ]
  },
  {
    id: "eu_su_1988", name: "URSS", season: "1988", country: "SU", flag: "🇷🇺",
    formation: "3-5-2",
    players: [
      { name: "Dasayev", pos: "GK", overall: 88 },
      { name: "Khidiatulin", pos: "CB", overall: 80 },
      { name: "Kuznetsov", pos: "CB", overall: 81 },
      { name: "Aleinikov", pos: "CB", overall: 79 },
      { name: "Rats", pos: "LM", overall: 80 },
      { name: "Zavarov", pos: "CM", overall: 85 },
      { name: "Mikhailichenko", pos: "CM", overall: 84 },
      { name: "Litovchenko", pos: "CM", overall: 79 },
      { name: "Belanov", pos: "ST", overall: 86 },
      { name: "Protasov", pos: "ST", overall: 82 },
      { name: "Demyanenko", pos: "RM", overall: 81 }
    ]
  },
  {
    id: "eu_de_1988", name: "Alemanha Ocidental", season: "1988", country: "DE", flag: "🇩🇪",
    formation: "3-5-2",
    players: [
      { name: "Immel", pos: "GK", overall: 82 },
      { name: "Kohler", pos: "CB", overall: 84 },
      { name: "Augenthaler", pos: "CB", overall: 83 },
      { name: "Buchwald", pos: "CB", overall: 82 },
      { name: "Brehme", pos: "LM", overall: 87 },
      { name: "Matthäus", pos: "CM", overall: 92 },
      { name: "Häßler", pos: "CM", overall: 84 },
      { name: "Thon", pos: "RM", overall: 80 },
      { name: "Völler", pos: "ST", overall: 88 },
      { name: "Klinsmann", pos: "ST", overall: 89 },
      { name: "Littbarski", pos: "RM", overall: 83 }
    ]
  },
  {
    id: "eu_it_1988", name: "Itália", season: "1988", country: "IT", flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Zenga", pos: "GK", overall: 85 },
      { name: "Bergomi", pos: "RB", overall: 83 },
      { name: "Maldini", pos: "LB", overall: 90 },
      { name: "Baresi", pos: "CB", overall: 91 },
      { name: "Ferri", pos: "CB", overall: 80 },
      { name: "Donadoni", pos: "RW", overall: 83 },
      { name: "De Napoli", pos: "CM", overall: 80 },
      { name: "Ancelotti", pos: "CM", overall: 84 },
      { name: "Vialli", pos: "ST", overall: 85 },
      { name: "Mancini", pos: "ST", overall: 84 },
      { name: "Giannini", pos: "AM", overall: 83 }
    ]
  },

  // ───────── 1992 ─────────
  {
    id: "eu_dk_1992", name: "Dinamarca", season: "1992", country: "DK", flag: "🇩🇰",
    formation: "3-5-2",
    players: [
      { name: "Schmeichel", pos: "GK", overall: 90 },
      { name: "Olsen", pos: "CB", overall: 81 },
      { name: "Nielsen", pos: "CB", overall: 82 },
      { name: "Sivebæk", pos: "CB", overall: 78 },
      { name: "Vilfort", pos: "LM", overall: 82 },
      { name: "Christofte", pos: "CM", overall: 78 },
      { name: "Jensen", pos: "CM", overall: 81 },
      { name: "Larsen", pos: "RM", overall: 80 },
      { name: "Brian Laudrup", pos: "ST", overall: 88 },
      { name: "Povlsen", pos: "ST", overall: 84 },
      { name: "Piechnik", pos: "CB", overall: 76 }
    ]
  },
  {
    id: "eu_de_1992", name: "Alemanha", season: "1992", country: "DE", flag: "🇩🇪",
    formation: "3-5-2",
    players: [
      { name: "Illgner", pos: "GK", overall: 86 },
      { name: "Kohler", pos: "CB", overall: 85 },
      { name: "Buchwald", pos: "CB", overall: 84 },
      { name: "Helmer", pos: "CB", overall: 81 },
      { name: "Brehme", pos: "LM", overall: 87 },
      { name: "Effenberg", pos: "CM", overall: 85 },
      { name: "Häßler", pos: "CM", overall: 85 },
      { name: "Sammer", pos: "RM", overall: 87 },
      { name: "Klinsmann", pos: "ST", overall: 90 },
      { name: "Riedle", pos: "ST", overall: 84 },
      { name: "Reuter", pos: "CB", overall: 80 }
    ]
  },
  {
    id: "eu_nl_1992", name: "Holanda", season: "1992", country: "NL", flag: "🇳🇱",
    formation: "3-5-2",
    players: [
      { name: "Van Breukelen", pos: "GK", overall: 84 },
      { name: "R. Koeman", pos: "CB", overall: 88 },
      { name: "Rijkaard", pos: "CB", overall: 90 },
      { name: "F. de Boer", pos: "CB", overall: 83 },
      { name: "Van Vossen", pos: "LM", overall: 78 },
      { name: "Wouters", pos: "CM", overall: 80 },
      { name: "Witschge", pos: "CM", overall: 80 },
      { name: "Overmars", pos: "RM", overall: 82 },
      { name: "Bergkamp", pos: "ST", overall: 89 },
      { name: "Van Basten", pos: "ST", overall: 94 },
      { name: "Roy", pos: "CM", overall: 78 }
    ]
  },
  {
    id: "eu_se_1992", name: "Suécia", season: "1992", country: "SE", flag: "🇸🇪",
    formation: "4-4-2",
    players: [
      { name: "Ravelli", pos: "GK", overall: 84 },
      { name: "Nilsson", pos: "RB", overall: 78 },
      { name: "Björklund", pos: "CB", overall: 79 },
      { name: "Ljung", pos: "CB", overall: 78 },
      { name: "Larsson", pos: "LB", overall: 79 },
      { name: "Ingesson", pos: "RM", overall: 80 },
      { name: "Andersson", pos: "CM", overall: 79 },
      { name: "Thern", pos: "CM", overall: 82 },
      { name: "Limpar", pos: "LM", overall: 81 },
      { name: "Dahlin", pos: "ST", overall: 80 },
      { name: "Brolin", pos: "ST", overall: 85 }
    ]
  },

  // ───────── 1996 ─────────
  {
    id: "eu_de_1996", name: "Alemanha", season: "1996", country: "DE", flag: "🇩🇪",
    formation: "3-5-2",
    players: [
      { name: "Köpke", pos: "GK", overall: 85 },
      { name: "Babbel", pos: "CB", overall: 82 },
      { name: "Sammer", pos: "CB", overall: 89 },
      { name: "Helmer", pos: "CB", overall: 82 },
      { name: "Strunz", pos: "LM", overall: 79 },
      { name: "Häßler", pos: "CM", overall: 84 },
      { name: "Eilts", pos: "CM", overall: 81 },
      { name: "Ziege", pos: "RM", overall: 82 },
      { name: "Klinsmann", pos: "ST", overall: 89 },
      { name: "Kuntz", pos: "ST", overall: 81 },
      { name: "Möller", pos: "AM", overall: 83 }
    ]
  },
  {
    id: "eu_cz_1996", name: "Chéquia", season: "1996", country: "CZ", flag: "🇨🇿",
    formation: "3-5-2",
    players: [
      { name: "Kouba", pos: "GK", overall: 81 },
      { name: "Hornák", pos: "CB", overall: 77 },
      { name: "Suchopárek", pos: "CB", overall: 77 },
      { name: "Kadlec", pos: "CB", overall: 78 },
      { name: "Kubík", pos: "LM", overall: 78 },
      { name: "Němec", pos: "CM", overall: 77 },
      { name: "Nĕmec", pos: "CM", overall: 77 },
      { name: "Poborský", pos: "RM", overall: 82 },
      { name: "Berger", pos: "ST", overall: 84 },
      { name: "Kuka", pos: "ST", overall: 81 },
      { name: "Bejbl", pos: "CM", overall: 78 }
    ]
  },
  {
    id: "eu_eng_1996", name: "Inglaterra", season: "1996", country: "ENG", flag: "🏴",
    formation: "4-4-2",
    players: [
      { name: "Seaman", pos: "GK", overall: 87 },
      { name: "G. Neville", pos: "RB", overall: 82 },
      { name: "Pearce", pos: "LB", overall: 82 },
      { name: "Adams", pos: "CB", overall: 86 },
      { name: "Southgate", pos: "CB", overall: 80 },
      { name: "Anderton", pos: "RM", overall: 82 },
      { name: "Ince", pos: "CM", overall: 83 },
      { name: "Gascoigne", pos: "CM", overall: 89 },
      { name: "McManaman", pos: "LM", overall: 82 },
      { name: "Shearer", pos: "ST", overall: 90 },
      { name: "Sheringham", pos: "ST", overall: 84 }
    ]
  },
  {
    id: "eu_fr_1996", name: "França", season: "1996", country: "FR", flag: "🇫🇷",
    formation: "4-4-2",
    players: [
      { name: "Lama", pos: "GK", overall: 83 },
      { name: "Lizarazu", pos: "LB", overall: 84 },
      { name: "Thuram", pos: "RB", overall: 84 },
      { name: "Blanc", pos: "CB", overall: 86 },
      { name: "Desailly", pos: "CB", overall: 87 },
      { name: "Deschamps", pos: "CM", overall: 85 },
      { name: "Zidane", pos: "CM", overall: 92 },
      { name: "Djorkaeff", pos: "AM", overall: 86 },
      { name: "Guérin", pos: "RM", overall: 78 },
      { name: "Loko", pos: "ST", overall: 78 },
      { name: "Dugarry", pos: "ST", overall: 80 }
    ]
  },

  // ───────── 2000 ─────────
  {
    id: "eu_fr_2000", name: "França", season: "2000", country: "FR", flag: "🇫🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Barthez", pos: "GK", overall: 88 },
      { name: "Thuram", pos: "RB", overall: 87 },
      { name: "Lizarazu", pos: "LB", overall: 86 },
      { name: "Blanc", pos: "CB", overall: 87 },
      { name: "Desailly", pos: "CB", overall: 89 },
      { name: "Deschamps", pos: "CM", overall: 86 },
      { name: "Vieira", pos: "CM", overall: 88 },
      { name: "Djorkaeff", pos: "AM", overall: 86 },
      { name: "Pires", pos: "LM", overall: 87 },
      { name: "Anelka", pos: "ST", overall: 84 },
      { name: "Zidane", pos: "AM", overall: 96 }
    ]
  },
  {
    id: "eu_it_2000", name: "Itália", season: "2000", country: "IT", flag: "🇮🇹",
    formation: "3-5-2",
    players: [
      { name: "Toldo", pos: "GK", overall: 86 },
      { name: "Cannavaro", pos: "CB", overall: 89 },
      { name: "Nesta", pos: "CB", overall: 90 },
      { name: "Iuliano", pos: "CB", overall: 82 },
      { name: "Zambrotta", pos: "RM", overall: 84 },
      { name: "Albertini", pos: "CM", overall: 85 },
      { name: "Di Biagio", pos: "CM", overall: 80 },
      { name: "Coco", pos: "LM", overall: 79 },
      { name: "Totti", pos: "AM", overall: 88 },
      { name: "Del Piero", pos: "ST", overall: 88 },
      { name: "Inzaghi", pos: "ST", overall: 85 }
    ]
  },
  {
    id: "eu_nl_2000", name: "Holanda", season: "2000", country: "NL", flag: "🇳🇱",
    formation: "4-3-3",
    players: [
      { name: "Van der Sar", pos: "GK", overall: 88 },
      { name: "Konterman", pos: "RB", overall: 79 },
      { name: "Numan", pos: "LB", overall: 79 },
      { name: "Stam", pos: "CB", overall: 91 },
      { name: "F. de Boer", pos: "CB", overall: 87 },
      { name: "Davids", pos: "CM", overall: 87 },
      { name: "Cocu", pos: "CM", overall: 84 },
      { name: "Overmars", pos: "RW", overall: 86 },
      { name: "Bergkamp", pos: "AM", overall: 90 },
      { name: "Kluivert", pos: "ST", overall: 87 },
      { name: "Zenden", pos: "LW", overall: 80 }
    ]
  },
  {
    id: "eu_pt_2000", name: "Portugal", season: "2000", country: "PT", flag: "🇵🇹",
    formation: "4-3-3",
    players: [
      { name: "Vítor Baía", pos: "GK", overall: 86 },
      { name: "Secretário", pos: "RB", overall: 78 },
      { name: "Dimas", pos: "LB", overall: 80 },
      { name: "Jorge Costa", pos: "CB", overall: 84 },
      { name: "Fernando Couto", pos: "CB", overall: 86 },
      { name: "João Vieira Pinto", pos: "CM", overall: 82 },
      { name: "Rui Costa", pos: "CM", overall: 89 },
      { name: "Figo", pos: "RW", overall: 92 },
      { name: "Conceição", pos: "AM", overall: 84 },
      { name: "Pauleta", pos: "ST", overall: 84 },
      { name: "Nuno Gomes", pos: "LW", overall: 84 }
    ]
  },

  // ───────── 2004 ─────────
  {
    id: "eu_gr_2004", name: "Grécia", season: "2004", country: "GR", flag: "🇬🇷",
    formation: "4-4-1-1",
    players: [
      { name: "Nikopolidis", pos: "GK", overall: 83 },
      { name: "Seitaridis", pos: "RB", overall: 80 },
      { name: "Fyssas", pos: "LB", overall: 78 },
      { name: "Dellas", pos: "CB", overall: 83 },
      { name: "Kyrgiakos", pos: "CB", overall: 80 },
      { name: "Basinas", pos: "CM", overall: 79 },
      { name: "Katsouranis", pos: "CM", overall: 80 },
      { name: "Zagorakis", pos: "RM", overall: 82 },
      { name: "Giannakopoulos", pos: "LM", overall: 78 },
      { name: "Charisteas", pos: "ST", overall: 82 },
      { name: "Vryzas", pos: "AM", overall: 78 }
    ]
  },
  {
    id: "eu_pt_2004", name: "Portugal", season: "2004", country: "PT", flag: "🇵🇹",
    formation: "4-3-3",
    players: [
      { name: "Ricardo", pos: "GK", overall: 85 },
      { name: "Miguel", pos: "RB", overall: 80 },
      { name: "Nuno Valente", pos: "LB", overall: 78 },
      { name: "Jorge Andrade", pos: "CB", overall: 81 },
      { name: "Ricardo Carvalho", pos: "CB", overall: 87 },
      { name: "Costinha", pos: "CM", overall: 82 },
      { name: "Maniche", pos: "CM", overall: 83 },
      { name: "Deco", pos: "AM", overall: 88 },
      { name: "Cristiano Ronaldo", pos: "RW", overall: 87 },
      { name: "Pauleta", pos: "ST", overall: 85 },
      { name: "Simão", pos: "LW", overall: 84 }
    ]
  },
  {
    id: "eu_cz_2004", name: "Chéquia", season: "2004", country: "CZ", flag: "🇨🇿",
    formation: "4-4-2",
    players: [
      { name: "Čech", pos: "GK", overall: 89 },
      { name: "Grygera", pos: "RB", overall: 81 },
      { name: "Ujfaluši", pos: "CB", overall: 81 },
      { name: "Jankulovski", pos: "LB", overall: 83 },
      { name: "Bolf", pos: "CB", overall: 78 },
      { name: "Poborský", pos: "RM", overall: 82 },
      { name: "Galásek", pos: "CM", overall: 80 },
      { name: "Rosický", pos: "CM", overall: 87 },
      { name: "Nedvěd", pos: "LM", overall: 91 },
      { name: "Baroš", pos: "ST", overall: 84 },
      { name: "Koller", pos: "ST", overall: 86 }
    ]
  },
  {
    id: "eu_nl_2004", name: "Holanda", season: "2004", country: "NL", flag: "🇳🇱",
    formation: "4-3-3",
    players: [
      { name: "Van der Sar", pos: "GK", overall: 89 },
      { name: "Emerton", pos: "RB", overall: 76 },
      { name: "Van Bronckhorst", pos: "LB", overall: 84 },
      { name: "Ooijer", pos: "CB", overall: 80 },
      { name: "Stam", pos: "CB", overall: 88 },
      { name: "Cocu", pos: "CM", overall: 83 },
      { name: "Davids", pos: "CM", overall: 85 },
      { name: "Van der Vaart", pos: "AM", overall: 85 },
      { name: "Robben", pos: "RW", overall: 86 },
      { name: "Van Nistelrooy", pos: "ST", overall: 89 },
      { name: "Makaay", pos: "LW", overall: 84 }
    ]
  },

  // ───────── 2008 ─────────
  {
    id: "eu_es_2008", name: "Espanha", season: "2008", country: "ES", flag: "🇪🇸",
    formation: "4-1-4-1",
    players: [
      { name: "Casillas", pos: "GK", overall: 90 },
      { name: "Sergio Ramos", pos: "RB", overall: 87 },
      { name: "Capdevila", pos: "LB", overall: 80 },
      { name: "Puyol", pos: "CB", overall: 88 },
      { name: "Marchena", pos: "CB", overall: 80 },
      { name: "Senna", pos: "CM", overall: 82 },
      { name: "Xavi", pos: "CM", overall: 92 },
      { name: "Iniesta", pos: "CM", overall: 91 },
      { name: "Silva", pos: "RM", overall: 87 },
      { name: "Torres", pos: "ST", overall: 89 },
      { name: "Villa", pos: "LM", overall: 89 }
    ]
  },
  {
    id: "eu_de_2008", name: "Alemanha", season: "2008", country: "DE", flag: "🇩🇪",
    formation: "4-4-2",
    players: [
      { name: "Lehmann", pos: "GK", overall: 84 },
      { name: "Lahm", pos: "LB", overall: 88 },
      { name: "Friedrich", pos: "RB", overall: 80 },
      { name: "Metzelder", pos: "CB", overall: 82 },
      { name: "Mertesacker", pos: "CB", overall: 83 },
      { name: "Frings", pos: "CM", overall: 82 },
      { name: "Hitzlsperger", pos: "CM", overall: 80 },
      { name: "Ballack", pos: "AM", overall: 89 },
      { name: "Schweinsteiger", pos: "RM", overall: 85 },
      { name: "Klose", pos: "ST", overall: 87 },
      { name: "Podolski", pos: "LM", overall: 84 }
    ]
  },
  {
    id: "eu_tr_2008", name: "Turquia", season: "2008", country: "TR", flag: "🇹🇷",
    formation: "4-3-3",
    players: [
      { name: "Rüştü", pos: "GK", overall: 84 },
      { name: "Emre Aşık", pos: "RB", overall: 76 },
      { name: "Servet", pos: "LB", overall: 76 },
      { name: "Aurélio", pos: "CB", overall: 79 },
      { name: "Hakan Balta", pos: "CB", overall: 78 },
      { name: "Emre Belözoğlu", pos: "CM", overall: 82 },
      { name: "Tümer", pos: "CM", overall: 77 },
      { name: "Arda Turan", pos: "RW", overall: 84 },
      { name: "Nihat", pos: "ST", overall: 82 },
      { name: "Semih Şentürk", pos: "ST", overall: 79 },
      { name: "Kazım", pos: "LW", overall: 78 }
    ]
  },
  {
    id: "eu_ru_2008", name: "Rússia", season: "2008", country: "RU", flag: "🇷🇺",
    formation: "4-3-3",
    players: [
      { name: "Akinfeev", pos: "GK", overall: 86 },
      { name: "Anyukov", pos: "RB", overall: 79 },
      { name: "V. Berezutski", pos: "CB", overall: 79 },
      { name: "Ignashevich", pos: "CB", overall: 81 },
      { name: "Zhirkov", pos: "LB", overall: 83 },
      { name: "Semshov", pos: "CM", overall: 79 },
      { name: "S. Zyryanov", pos: "CM", overall: 78 },
      { name: "Semak", pos: "RW", overall: 78 },
      { name: "Arshavin", pos: "AM", overall: 87 },
      { name: "Pavlyuchenko", pos: "ST", overall: 82 },
      { name: "Bilyaletdinov", pos: "LW", overall: 79 }
    ]
  },

  // ───────── 2012 ─────────
  {
    id: "eu_es_2012", name: "Espanha", season: "2012", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Casillas", pos: "GK", overall: 90 },
      { name: "Arbeloa", pos: "RB", overall: 81 },
      { name: "Jordi Alba", pos: "LB", overall: 85 },
      { name: "Piqué", pos: "CB", overall: 88 },
      { name: "Sergio Ramos", pos: "CB", overall: 90 },
      { name: "Busquets", pos: "CM", overall: 86 },
      { name: "Xavi", pos: "CM", overall: 91 },
      { name: "Iniesta", pos: "CM", overall: 93 },
      { name: "Silva", pos: "RW", overall: 88 },
      { name: "Fàbregas", pos: "ST", overall: 87 },
      { name: "Iniesta", pos: "LW", overall: 90 }
    ]
  },
  {
    id: "eu_it_2012", name: "Itália", season: "2012", country: "IT", flag: "🇮🇹",
    formation: "3-5-2",
    players: [
      { name: "Buffon", pos: "GK", overall: 90 },
      { name: "Chiellini", pos: "CB", overall: 87 },
      { name: "Barzagli", pos: "CB", overall: 84 },
      { name: "Bonucci", pos: "CB", overall: 85 },
      { name: "Abate", pos: "RM", overall: 80 },
      { name: "De Rossi", pos: "CM", overall: 86 },
      { name: "Pirlo", pos: "CM", overall: 90 },
      { name: "Marchisio", pos: "CM", overall: 83 },
      { name: "Giaccherini", pos: "LM", overall: 78 },
      { name: "Balotelli", pos: "ST", overall: 84 },
      { name: "Cassano", pos: "ST", overall: 82 }
    ]
  },
  {
    id: "eu_pt_2012", name: "Portugal", season: "2012", country: "PT", flag: "🇵🇹",
    formation: "4-3-3",
    players: [
      { name: "Rui Patrício", pos: "GK", overall: 82 },
      { name: "João Pereira", pos: "RB", overall: 78 },
      { name: "Fábio Coentrão", pos: "LB", overall: 82 },
      { name: "Pepe", pos: "CB", overall: 86 },
      { name: "Bruno Alves", pos: "CB", overall: 82 },
      { name: "Miguel Veloso", pos: "CM", overall: 80 },
      { name: "João Moutinho", pos: "CM", overall: 84 },
      { name: "Raul Meireles", pos: "CM", overall: 81 },
      { name: "Nani", pos: "RW", overall: 84 },
      { name: "Hélder Postiga", pos: "ST", overall: 78 },
      { name: "Cristiano Ronaldo", pos: "LW", overall: 95 }
    ]
  },
  {
    id: "eu_de_2012", name: "Alemanha", season: "2012", country: "DE", flag: "🇩🇪",
    formation: "4-2-3-1",
    players: [
      { name: "Neuer", pos: "GK", overall: 90 },
      { name: "Lahm", pos: "RB", overall: 89 },
      { name: "Badstuber", pos: "CB", overall: 81 },
      { name: "Hummels", pos: "CB", overall: 85 },
      { name: "Boateng", pos: "LB", overall: 82 },
      { name: "Khedira", pos: "CM", overall: 84 },
      { name: "Schweinsteiger", pos: "CM", overall: 87 },
      { name: "Özil", pos: "AM", overall: 89 },
      { name: "Podolski", pos: "LW", overall: 83 },
      { name: "Müller", pos: "RW", overall: 84 },
      { name: "Gómez", pos: "ST", overall: 83 }
    ]
  },

  // ───────── 2016 ─────────
  {
    id: "eu_pt_2016", name: "Portugal", season: "2016", country: "PT", flag: "🇵🇹",
    formation: "4-4-2",
    players: [
      { name: "Rui Patrício", pos: "GK", overall: 84 },
      { name: "Cédric", pos: "RB", overall: 78 },
      { name: "Raphaël Guerreiro", pos: "LB", overall: 82 },
      { name: "Pepe", pos: "CB", overall: 85 },
      { name: "José Fonte", pos: "CB", overall: 79 },
      { name: "William Carvalho", pos: "CM", overall: 82 },
      { name: "Adrien Silva", pos: "CM", overall: 79 },
      { name: "João Mário", pos: "RM", overall: 80 },
      { name: "Renato Sanches", pos: "LM", overall: 80 },
      { name: "Nani", pos: "ST", overall: 83 },
      { name: "Cristiano Ronaldo", pos: "ST", overall: 93 }
    ]
  },
  {
    id: "eu_fr_2016", name: "França", season: "2016", country: "FR", flag: "🇫🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Lloris", pos: "GK", overall: 88 },
      { name: "Sagna", pos: "RB", overall: 79 },
      { name: "Evra", pos: "LB", overall: 82 },
      { name: "Umtiti", pos: "CB", overall: 82 },
      { name: "Koscielny", pos: "CB", overall: 85 },
      { name: "Pogba", pos: "CM", overall: 87 },
      { name: "Matuidi", pos: "CM", overall: 84 },
      { name: "Payet", pos: "AM", overall: 85 },
      { name: "Griezmann", pos: "RW", overall: 89 },
      { name: "Giroud", pos: "ST", overall: 83 },
      { name: "Coman", pos: "LW", overall: 79 }
    ]
  },
  {
    id: "eu_wa_2016", name: "Gales", season: "2016", country: "WA", flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    formation: "3-4-3",
    players: [
      { name: "Hennessey", pos: "GK", overall: 80 },
      { name: "Chester", pos: "CB", overall: 78 },
      { name: "Ashley Williams", pos: "CB", overall: 82 },
      { name: "Davies", pos: "CB", overall: 78 },
      { name: "Gunter", pos: "RM", overall: 77 },
      { name: "Allen", pos: "CM", overall: 81 },
      { name: "Ledley", pos: "CM", overall: 79 },
      { name: "Neil Taylor", pos: "LM", overall: 77 },
      { name: "Ramsey", pos: "RW", overall: 86 },
      { name: "Bale", pos: "ST", overall: 90 },
      { name: "Robson-Kanu", pos: "LW", overall: 76 }
    ]
  },
  {
    id: "eu_de_2016", name: "Alemanha", season: "2016", country: "DE", flag: "🇩🇪",
    formation: "3-5-2",
    players: [
      { name: "Neuer", pos: "GK", overall: 91 },
      { name: "Boateng", pos: "CB", overall: 87 },
      { name: "Hummels", pos: "CB", overall: 88 },
      { name: "Höwedes", pos: "CB", overall: 80 },
      { name: "Kimmich", pos: "RM", overall: 83 },
      { name: "Khedira", pos: "CM", overall: 84 },
      { name: "Toni Kroos", pos: "CM", overall: 90 },
      { name: "Hector", pos: "LM", overall: 79 },
      { name: "Özil", pos: "AM", overall: 89 },
      { name: "Müller", pos: "ST", overall: 87 },
      { name: "Draxler", pos: "LW", overall: 82 }
    ]
  },
  {
    id: "eu_is_2016", name: "Islândia", season: "2016", country: "IS", flag: "🇮🇸",
    formation: "4-4-2",
    players: [
      { name: "Halldórsson", pos: "GK", overall: 78 },
      { name: "Sævarsson", pos: "RB", overall: 75 },
      { name: "Skúlason", pos: "LB", overall: 76 },
      { name: "Ragnar Sigurðsson", pos: "CB", overall: 78 },
      { name: "Kári Árnason", pos: "CB", overall: 77 },
      { name: "Gunnarsson", pos: "CM", overall: 78 },
      { name: "Bjarnason", pos: "CM", overall: 78 },
      { name: "Gylfi Sigurðsson", pos: "AM", overall: 84 },
      { name: "Jóhann Guðmundsson", pos: "RM", overall: 78 },
      { name: "Bödvarsson", pos: "ST", overall: 76 },
      { name: "Kolbeinn Sigþórsson", pos: "ST", overall: 78 }
    ]
  },

  // ───────── 2020 ─────────
  {
    id: "eu_it_2020", name: "Itália", season: "2020", country: "IT", flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Donnarumma", pos: "GK", overall: 88 },
      { name: "Di Lorenzo", pos: "RB", overall: 82 },
      { name: "Emerson", pos: "LB", overall: 80 },
      { name: "Bonucci", pos: "CB", overall: 86 },
      { name: "Chiellini", pos: "CB", overall: 86 },
      { name: "Jorginho", pos: "CM", overall: 86 },
      { name: "Verratti", pos: "CM", overall: 87 },
      { name: "Barella", pos: "CM", overall: 85 },
      { name: "Chiesa", pos: "RW", overall: 85 },
      { name: "Immobile", pos: "ST", overall: 85 },
      { name: "Insigne", pos: "LW", overall: 84 }
    ]
  },
  {
    id: "eu_eng_2020", name: "Inglaterra", season: "2020", country: "ENG", flag: "🏴",
    formation: "3-4-3",
    players: [
      { name: "Pickford", pos: "GK", overall: 84 },
      { name: "Walker", pos: "CB", overall: 84 },
      { name: "Stones", pos: "CB", overall: 82 },
      { name: "Maguire", pos: "CB", overall: 83 },
      { name: "Trippier", pos: "RM", overall: 82 },
      { name: "Rice", pos: "CM", overall: 82 },
      { name: "Kalvin Phillips", pos: "CM", overall: 81 },
      { name: "Shaw", pos: "LM", overall: 82 },
      { name: "Sterling", pos: "RW", overall: 87 },
      { name: "Kane", pos: "ST", overall: 90 },
      { name: "Saka", pos: "LW", overall: 82 }
    ]
  },
  {
    id: "eu_es_2020", name: "Espanha", season: "2020", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Unai Simón", pos: "GK", overall: 82 },
      { name: "Azpilicueta", pos: "RB", overall: 83 },
      { name: "Jordi Alba", pos: "LB", overall: 84 },
      { name: "Pau Torres", pos: "CB", overall: 81 },
      { name: "Laporte", pos: "CB", overall: 85 },
      { name: "Busquets", pos: "CM", overall: 85 },
      { name: "Koke", pos: "CM", overall: 83 },
      { name: "Pedri", pos: "CM", overall: 86 },
      { name: "Ferran Torres", pos: "RW", overall: 82 },
      { name: "Álvaro Morata", pos: "ST", overall: 82 },
      { name: "Dani Olmo", pos: "LW", overall: 82 }
    ]
  },
  {
    id: "eu_dk_2020", name: "Dinamarca", season: "2020", country: "DK", flag: "🇩🇰",
    formation: "3-4-3",
    players: [
      { name: "Schmeichel", pos: "GK", overall: 85 },
      { name: "Andreas Christensen", pos: "CB", overall: 83 },
      { name: "Kjær", pos: "CB", overall: 84 },
      { name: "Vestergaard", pos: "CB", overall: 79 },
      { name: "Stryger Larsen", pos: "RM", overall: 78 },
      { name: "Delaney", pos: "CM", overall: 81 },
      { name: "Højbjerg", pos: "CM", overall: 83 },
      { name: "Mæhle", pos: "LM", overall: 79 },
      { name: "Christian Eriksen", pos: "AM", overall: 87 },
      { name: "Poulsen", pos: "ST", overall: 78 },
      { name: "Braithwaite", pos: "ST", overall: 80 }
    ]
  },
  {
    id: "eu_ch_2020", name: "Suíça", season: "2020", country: "CH", flag: "🇨🇭",
    formation: "3-4-3",
    players: [
      { name: "Sommer", pos: "GK", overall: 85 },
      { name: "Akanji", pos: "CB", overall: 82 },
      { name: "Elvedi", pos: "CB", overall: 80 },
      { name: "Rodríguez", pos: "CB", overall: 81 },
      { name: "Widmer", pos: "RM", overall: 78 },
      { name: "Freuler", pos: "CM", overall: 81 },
      { name: "Xhaka", pos: "CM", overall: 83 },
      { name: "Rodríguez", pos: "LM", overall: 78 },
      { name: "Shaqiri", pos: "AM", overall: 84 },
      { name: "Embolo", pos: "ST", overall: 80 },
      { name: "Seferović", pos: "ST", overall: 80 }
    ]
  },

  // ───────── 2024 ─────────
  {
    id: "eu_es_2024", name: "Espanha", season: "2024", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Unai Simón", pos: "GK", overall: 84 },
      { name: "Dani Carvajal", pos: "RB", overall: 85 },
      { name: "Marc Cucurella", pos: "LB", overall: 81 },
      { name: "Aymeric Laporte", pos: "CB", overall: 84 },
      { name: "Robin Le Normand", pos: "CB", overall: 82 },
      { name: "Rodri", pos: "CM", overall: 91 },
      { name: "Fabián Ruiz", pos: "CM", overall: 84 },
      { name: "Pedri", pos: "CM", overall: 87 },
      { name: "Lamine Yamal", pos: "RW", overall: 86 },
      { name: "Álvaro Morata", pos: "ST", overall: 82 },
      { name: "Nico Williams", pos: "LW", overall: 84 }
    ]
  },
  {
    id: "eu_eng_2024", name: "Inglaterra", season: "2024", country: "ENG", flag: "🏴",
    formation: "4-2-3-1",
    players: [
      { name: "Pickford", pos: "GK", overall: 85 },
      { name: "Kyle Walker", pos: "RB", overall: 83 },
      { name: "Luke Shaw", pos: "LB", overall: 82 },
      { name: "Marc Guéhi", pos: "CB", overall: 80 },
      { name: "John Stones", pos: "CB", overall: 84 },
      { name: "Declan Rice", pos: "CM", overall: 87 },
      { name: "Kobbie Mainoo", pos: "CM", overall: 80 },
      { name: "Bukayo Saka", pos: "RW", overall: 87 },
      { name: "Phil Foden", pos: "AM", overall: 87 },
      { name: "Harry Kane", pos: "ST", overall: 89 },
      { name: "Cole Palmer", pos: "LW", overall: 84 }
    ]
  },
  {
    id: "eu_nl_2024", name: "Holanda", season: "2024", country: "NL", flag: "🇳🇱",
    formation: "4-3-3",
    players: [
      { name: "Verbruggen", pos: "GK", overall: 80 },
      { name: "Denzel Dumfries", pos: "RB", overall: 83 },
      { name: "Nathan Aké", pos: "LB", overall: 81 },
      { name: "Virgil van Dijk", pos: "CB", overall: 89 },
      { name: "Stefan de Vrij", pos: "CB", overall: 81 },
      { name: "Jerdy Schouten", pos: "CM", overall: 79 },
      { name: "Tijjani Reijnders", pos: "CM", overall: 82 },
      { name: "Frenkie de Jong", pos: "CM", overall: 87 },
      { name: "Xavi Simons", pos: "RW", overall: 84 },
      { name: "Cody Gakpo", pos: "ST", overall: 83 },
      { name: "Memphis Depay", pos: "LW", overall: 83 }
    ]
  },
  {
    id: "eu_fr_2024", name: "França", season: "2024", country: "FR", flag: "🇫🇷",
    formation: "4-3-3",
    players: [
      { name: "Mike Maignan", pos: "GK", overall: 87 },
      { name: "Jules Koundé", pos: "RB", overall: 85 },
      { name: "Theo Hernández", pos: "LB", overall: 84 },
      { name: "Dayot Upamecano", pos: "CB", overall: 83 },
      { name: "William Saliba", pos: "CB", overall: 85 },
      { name: "Aurélien Tchouaméni", pos: "CM", overall: 85 },
      { name: "N'Golo Kanté", pos: "CM", overall: 84 },
      { name: "Antoine Griezmann", pos: "AM", overall: 86 },
      { name: "Ousmane Dembélé", pos: "RW", overall: 84 },
      { name: "Kylian Mbappé", pos: "ST", overall: 94 },
      { name: "Kingsley Coman", pos: "LW", overall: 82 }
    ]
  },
  {
    id: "eu_ge_2024", name: "Geórgia", season: "2024", country: "GE", flag: "🇬🇪",
    formation: "4-2-3-1",
    players: [
      { name: "Mamardashvili", pos: "GK", overall: 82 },
      { name: "Kakabadze", pos: "RB", overall: 76 },
      { name: "Kashia", pos: "CB", overall: 77 },
      { name: "Gvelesiani", pos: "CB", overall: 76 },
      { name: "Dvali", pos: "LB", overall: 75 },
      { name: "Kvaratskhelia", pos: "LW", overall: 88 },
      { name: "Lochoshvili", pos: "CB", overall: 76 },
      { name: "Kiteishvili", pos: "AM", overall: 78 },
      { name: "Chakvetadze", pos: "CM", overall: 77 },
      { name: "Mikautadze", pos: "ST", overall: 81 },
      { name: "Kochorashvili", pos: "CM", overall: 77 }
    ]
  },
  {
    id: "eu_ch_2024", name: "Suíça", season: "2024", country: "CH", flag: "🇨🇭",
    formation: "3-4-3",
    players: [
      { name: "Sommer", pos: "GK", overall: 85 },
      { name: "Akanji", pos: "CB", overall: 84 },
      { name: "Elvedi", pos: "CB", overall: 80 },
      { name: "Manuel Akanji", pos: "CB", overall: 80 },
      { name: "Widmer", pos: "RM", overall: 78 },
      { name: "Xhaka", pos: "CM", overall: 84 },
      { name: "Freuler", pos: "CM", overall: 81 },
      { name: "Rieder", pos: "LM", overall: 78 },
      { name: "Vargas", pos: "RW", overall: 81 },
      { name: "Embolo", pos: "ST", overall: 80 },
      { name: "Ndoye", pos: "LW", overall: 79 }
    ]
  },
  {
    id: "eu_tr_2024", name: "Turquia", season: "2024", country: "TR", flag: "🇹🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Bayındır", pos: "GK", overall: 79 },
      { name: "Kadıoğlu", pos: "LB", overall: 80 },
      { name: "Çelik", pos: "RB", overall: 79 },
      { name: "Demiral", pos: "CB", overall: 81 },
      { name: "Akaydin", pos: "CB", overall: 76 },
      { name: "Ismail Yüksek", pos: "CM", overall: 77 },
      { name: "Özcan", pos: "CM", overall: 78 },
      { name: "Arda Güler", pos: "AM", overall: 82 },
      { name: "Kerem Aktürkoğlu", pos: "RW", overall: 79 },
      { name: "Yılmaz", pos: "ST", overall: 79 },
      { name: "Yıldız", pos: "LW", overall: 80 }
    ]
  }
];
