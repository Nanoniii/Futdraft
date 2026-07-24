
// ═══════════════════════════════════════════════════════════════
// UEFA CONFERENCE LEAGUE — campeões, finalistas e semifinalistas 2021-2026
// (dados reais dos elencos de cada clube na temporada; para clubes menos
// conhecidos os 11 jogadores refletem o elenco daquele ano, não
// necessariamente a escalação titular exata de cada jogo)
// ═══════════════════════════════════════════════════════════════
const CONFERENCE_LEAGUE_TEAMS = [

  // ───────── 2021-22 ─────────
  {
    id: "conf_roma_2122", name: "Roma", season: "2021-22", country: "IT", flag: "🇮🇹",
    formation: "3-4-2-1",
    players: [
      { name: "Rui Patrício", pos: "GK", overall: 88 },
      { name: "Rick Karsdorp", pos: "RB", overall: 81 },
      { name: "Roger Ibañez", pos: "CB", overall: 83 },
      { name: "Chris Smalling", pos: "CB", overall: 84 },
      { name: "Matías Viña", pos: "LB", overall: 79 },
      { name: "Bryan Cristante", pos: "CM", overall: 84 },
      { name: "Jordan Veretout", pos: "CM", overall: 82 },
      { name: "Lorenzo Pellegrini", pos: "AM", overall: 87 },
      { name: "Nicolò Zaniolo", pos: "RW", overall: 83 },
      { name: "Stephan El Shaarawy", pos: "LW", overall: 82 },
      { name: "Tammy Abraham", pos: "ST", overall: 85 }
    ]
  },
  {
    id: "conf_feyenoord_2122", name: "Feyenoord", season: "2021-22", country: "NL", flag: "🇳🇱",
    formation: "4-3-3",
    players: [
      { name: "Justin Bijlow", pos: "GK", overall: 86 },
      { name: "Marcus Pedersen", pos: "RB", overall: 78 },
      { name: "Marcos Senesi", pos: "CB", overall: 83 },
      { name: "Lutsharel Geertruida", pos: "CB", overall: 82 },
      { name: "Tyrell Malacia", pos: "LB", overall: 82 },
      { name: "Orkun Kökçü", pos: "CM", overall: 84 },
      { name: "Fredrik Aursnes", pos: "CM", overall: 81 },
      { name: "Guus Til", pos: "AM", overall: 80 },
      { name: "Luis Sinisterra", pos: "RW", overall: 84 },
      { name: "Bryan Linssen", pos: "LW", overall: 80 },
      { name: "Cyriel Dessers", pos: "ST", overall: 80 }
    ]
  },
  {
    id: "conf_paok_2122", name: "PAOK", season: "2021-22", country: "GR", flag: "🇬🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Alexandros Paschalakis", pos: "GK", overall: 83 },
      { name: "Christos Giousis", pos: "RB", overall: 79 },
      { name: "Sverrir Ingi Ingason", pos: "CB", overall: 80 },
      { name: "Giorgos Kousas", pos: "CB", overall: 78 },
      { name: "Giannis Michailidis", pos: "LB", overall: 78 },
      { name: "Antonio Marin", pos: "CM", overall: 78 },
      { name: "Douglas Augusto", pos: "CM", overall: 78 },
      { name: "Amr Warda", pos: "AM", overall: 81 },
      { name: "Andrija Živković", pos: "RW", overall: 84 },
      { name: "El Fardou Ben Mohamed", pos: "LW", overall: 78 },
      { name: "Chuba Akpom", pos: "ST", overall: 82 }
    ]
  },
  {
    id: "conf_leicester_2122", name: "Leicester City", season: "2021-22", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-2-3-1",
    players: [
      { name: "Kasper Schmeichel", pos: "GK", overall: 88 },
      { name: "Ricardo Pereira", pos: "RB", overall: 84 },
      { name: "Çağlar Söyüncü", pos: "CB", overall: 83 },
      { name: "Wesley Fofana", pos: "CB", overall: 82 },
      { name: "Timothy Castagne", pos: "LB", overall: 82 },
      { name: "Wilfred Ndidi", pos: "CM", overall: 85 },
      { name: "Youri Tielemans", pos: "CM", overall: 86 },
      { name: "James Maddison", pos: "AM", overall: 87 },
      { name: "Ademola Lookman", pos: "RW", overall: 82 },
      { name: "Harvey Barnes", pos: "LW", overall: 83 },
      { name: "Jamie Vardy", pos: "ST", overall: 88 }
    ]
  },
  {
    id: "conf_mura_2122", name: "Mura", season: "2021-22", country: "SI", flag: "🇸🇮",
    formation: "4-2-3-1",
    players: [
      { name: "Marin Ljubić", pos: "GK", overall: 75 },
      { name: "Kai Cipot", pos: "RB", overall: 74 },
      { name: "Nemanja Vujačić", pos: "CB", overall: 73 },
      { name: "Dario Vizinger", pos: "CB", overall: 73 },
      { name: "Álex López", pos: "LB", overall: 73 },
      { name: "Aljoša Matko", pos: "CM", overall: 74 },
      { name: "Amir Karić", pos: "CM", overall: 73 },
      { name: "Rangelo Janga", pos: "AM", overall: 75 },
      { name: "Mihael Klepač", pos: "RW", overall: 74 },
      { name: "David Sencar", pos: "LW", overall: 73 },
      { name: "Ivan Firer", pos: "ST", overall: 74 }
    ]
  },
  {
    id: "conf_tottenham_2122", name: "Tottenham Hotspur", season: "2021-22", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-2-3-1",
    players: [
      { name: "Hugo Lloris", pos: "GK", overall: 90 },
      { name: "Emerson Royal", pos: "RB", overall: 83 },
      { name: "Cristian Romero", pos: "CB", overall: 87 },
      { name: "Eric Dier", pos: "CB", overall: 84 },
      { name: "Sergio Reguilón", pos: "LB", overall: 82 },
      { name: "Pierre-Emile Højbjerg", pos: "CM", overall: 86 },
      { name: "Oliver Skipp", pos: "CM", overall: 80 },
      { name: "Dele Alli", pos: "AM", overall: 82 },
      { name: "Son Heung-min", pos: "RW", overall: 90 },
      { name: "Lucas Moura", pos: "LW", overall: 83 },
      { name: "Harry Kane", pos: "ST", overall: 90 }
    ]
  },

  // ───────── 2022-23 ─────────
  {
    id: "conf_westham_2223", name: "West Ham United", season: "2022-23", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-2-3-1",
    players: [
      { name: "Łukasz Fabiański", pos: "GK", overall: 84 },
      { name: "Vladimír Coufal", pos: "RB", overall: 82 },
      { name: "Kurt Zouma", pos: "CB", overall: 84 },
      { name: "Angelo Ogbonna", pos: "CB", overall: 80 },
      { name: "Aaron Cresswell", pos: "LB", overall: 81 },
      { name: "Declan Rice", pos: "CM", overall: 89 },
      { name: "Tomáš Souček", pos: "CM", overall: 86 },
      { name: "Pablo Fornals", pos: "AM", overall: 82 },
      { name: "Jarrod Bowen", pos: "RW", overall: 86 },
      { name: "Said Benrahma", pos: "LW", overall: 82 },
      { name: "Michail Antonio", pos: "ST", overall: 82 }
    ]
  },
  {
    id: "conf_fiorentina_2223", name: "Fiorentina", season: "2022-23", country: "IT", flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Pietro Terracciano", pos: "GK", overall: 82 },
      { name: "Dodô", pos: "RB", overall: 83 },
      { name: "Nikola Milenković", pos: "CB", overall: 84 },
      { name: "Igor", pos: "CB", overall: 82 },
      { name: "Cristiano Biraghi", pos: "LB", overall: 81 },
      { name: "Sofyan Amrabat", pos: "CM", overall: 84 },
      { name: "Rolando Mandragora", pos: "CM", overall: 80 },
      { name: "Giacomo Bonaventura", pos: "AM", overall: 82 },
      { name: "Jonathan Ikoné", pos: "RW", overall: 80 },
      { name: "Nicolás González", pos: "LW", overall: 83 },
      { name: "Arthur Cabral", pos: "ST", overall: 80 }
    ]
  },
  {
    id: "conf_az_2223", name: "AZ Alkmaar", season: "2022-23", country: "NL", flag: "🇳🇱",
    formation: "4-3-3",
    players: [
      { name: "Peter Vindahl", pos: "GK", overall: 80 },
      { name: "Yukinari Sugawara", pos: "RB", overall: 79 },
      { name: "Bruno Martins Indi", pos: "CB", overall: 82 },
      { name: "Pantelis Hatzidiakos", pos: "CB", overall: 78 },
      { name: "Milos Kerkez", pos: "LB", overall: 80 },
      { name: "Jordy Clasie", pos: "CM", overall: 82 },
      { name: "Tijjani Reijnders", pos: "CM", overall: 83 },
      { name: "Vangelis Pavlidis", pos: "AM", overall: 81 },
      { name: "Mayckel Lahdo", pos: "RW", overall: 77 },
      { name: "Sven Mijnans", pos: "LW", overall: 77 },
      { name: "Jesper Karlsson", pos: "ST", overall: 82 }
    ]
  },
  {
    id: "conf_basel_2223", name: "Basel", season: "2022-23", country: "CH", flag: "🇨🇭",
    formation: "4-2-3-1",
    players: [
      { name: "Heinz Lindner", pos: "GK", overall: 80 },
      { name: "Michael Lang", pos: "RB", overall: 80 },
      { name: "Andy Pelmard", pos: "CB", overall: 80 },
      { name: "Fabian Frei", pos: "CB", overall: 81 },
      { name: "Raoul Petretta", pos: "LB", overall: 78 },
      { name: "Liam Millar", pos: "CM", overall: 79 },
      { name: "Wouter Burger", pos: "CM", overall: 78 },
      { name: "Zeki Amdouni", pos: "AM", overall: 83 },
      { name: "Dominik Schmid", pos: "RW", overall: 77 },
      { name: "Edon Zhegrova", pos: "LW", overall: 82 },
      { name: "Kevin Carlos", pos: "ST", overall: 77 }
    ]
  },

  // ───────── 2023-24 ─────────
  {
    id: "conf_olympiacos_2324", name: "Olympiacos", season: "2023-24", country: "GR", flag: "🇬🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Konstantinos Tzolakis", pos: "GK", overall: 82 },
      { name: "Rodinei", pos: "RB", overall: 80 },
      { name: "David Carmo", pos: "CB", overall: 81 },
      { name: "Panagiotis Retsos", pos: "CB", overall: 79 },
      { name: "Federico Mattiello", pos: "LB", overall: 78 },
      { name: "Mady Camara", pos: "CM", overall: 80 },
      { name: "Santiago Hezze", pos: "CM", overall: 78 },
      { name: "Kostas Fortounis", pos: "AM", overall: 85 },
      { name: "Giorgos Masouras", pos: "RW", overall: 81 },
      { name: "Chiquinho", pos: "LW", overall: 82 },
      { name: "Ayoub El Kaabi", pos: "ST", overall: 87 }
    ]
  },
  {
    id: "conf_fiorentina_2324", name: "Fiorentina", season: "2023-24", country: "IT", flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Pietro Terracciano", pos: "GK", overall: 82 },
      { name: "Dodô", pos: "RB", overall: 84 },
      { name: "Nikola Milenković", pos: "CB", overall: 85 },
      { name: "Luca Ranieri", pos: "CB", overall: 80 },
      { name: "Cristiano Biraghi", pos: "LB", overall: 81 },
      { name: "Arthur Melo", pos: "CM", overall: 82 },
      { name: "Rolando Mandragora", pos: "CM", overall: 81 },
      { name: "Giacomo Bonaventura", pos: "AM", overall: 82 },
      { name: "Jonathan Ikoné", pos: "RW", overall: 80 },
      { name: "Nicolás González", pos: "LW", overall: 83 },
      { name: "M'Bala Nzola", pos: "ST", overall: 81 }
    ]
  },
  {
    id: "conf_astonvilla_2324", name: "Aston Villa", season: "2023-24", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "Emiliano Martínez", pos: "GK", overall: 90 },
      { name: "Matty Cash", pos: "RB", overall: 82 },
      { name: "Ezri Konsa", pos: "CB", overall: 82 },
      { name: "Pau Torres", pos: "CB", overall: 84 },
      { name: "Lucas Digne", pos: "LB", overall: 82 },
      { name: "Boubacar Kamara", pos: "CM", overall: 82 },
      { name: "Douglas Luiz", pos: "CM", overall: 84 },
      { name: "John McGinn", pos: "AM", overall: 84 },
      { name: "Moussa Diaby", pos: "RW", overall: 85 },
      { name: "Leon Bailey", pos: "LW", overall: 83 },
      { name: "Ollie Watkins", pos: "ST", overall: 87 }
    ]
  },
  {
    id: "conf_clubbrugge_2324", name: "Club Brugge", season: "2023-24", country: "BE", flag: "🇧🇪",
    formation: "4-2-3-1",
    players: [
      { name: "Simon Mignolet", pos: "GK", overall: 84 },
      { name: "Denis Odoi", pos: "RB", overall: 78 },
      { name: "Brandon Mechele", pos: "CB", overall: 80 },
      { name: "Joel Ordóñez", pos: "CB", overall: 79 },
      { name: "Bjorn Meijer", pos: "LB", overall: 78 },
      { name: "Hans Vanaken", pos: "CM", overall: 86 },
      { name: "Raphael Onyedika", pos: "CM", overall: 80 },
      { name: "Antonio Nusa", pos: "AM", overall: 81 },
      { name: "Kamal Sowah", pos: "RW", overall: 78 },
      { name: "Andreas Skov Olsen", pos: "LW", overall: 82 },
      { name: "Ferran Jutglà", pos: "ST", overall: 79 }
    ]
  },

  // ───────── 2024-25 ─────────
  {
    id: "conf_chelsea_2425", name: "Chelsea", season: "2024-25", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-2-3-1",
    players: [
      { name: "Robert Sánchez", pos: "GK", overall: 85 },
      { name: "Reece James", pos: "RB", overall: 88 },
      { name: "Levi Colwill", pos: "CB", overall: 84 },
      { name: "Wesley Fofana", pos: "CB", overall: 85 },
      { name: "Marc Cucurella", pos: "LB", overall: 86 },
      { name: "Moisés Caicedo", pos: "CM", overall: 90 },
      { name: "Enzo Fernández", pos: "CM", overall: 90 },
      { name: "Cole Palmer", pos: "AM", overall: 90 },
      { name: "Pedro Neto", pos: "RW", overall: 86 },
      { name: "Noni Madueke", pos: "LW", overall: 84 },
      { name: "Nicolas Jackson", pos: "ST", overall: 84 }
    ]
  },
  {
    id: "conf_realbetis_2425", name: "Real Betis", season: "2024-25", country: "ES", flag: "🇪🇸",
    formation: "4-2-3-1",
    players: [
      { name: "Rui Silva", pos: "GK", overall: 84 },
      { name: "Héctor Bellerín", pos: "RB", overall: 82 },
      { name: "Natan", pos: "CB", overall: 81 },
      { name: "Marc Bartra", pos: "CB", overall: 82 },
      { name: "Ricardo Rodríguez", pos: "LB", overall: 80 },
      { name: "Guido Rodríguez", pos: "CM", overall: 83 },
      { name: "Johnny Cardoso", pos: "CM", overall: 80 },
      { name: "Isco", pos: "AM", overall: 85 },
      { name: "Ayoze Pérez", pos: "RW", overall: 82 },
      { name: "Antony", pos: "LW", overall: 83 },
      { name: "Chimy Ávila", pos: "ST", overall: 80 }
    ]
  },
  {
    id: "conf_djurgarden_2425", name: "Djurgården IF", season: "2024-25", country: "SE", flag: "🇸🇪",
    formation: "4-2-3-1",
    players: [
      { name: "Jacob Rinne", pos: "GK", overall: 78 },
      { name: "Nathaniel Adjei", pos: "RB", overall: 75 },
      { name: "Marcus Danielson", pos: "CB", overall: 79 },
      { name: "Pa Amat Dibba", pos: "CB", overall: 75 },
      { name: "Jacob Une Larsson", pos: "LB", overall: 78 },
      { name: "Aiham Ousou", pos: "CM", overall: 75 },
      { name: "Aleksa Ćorović", pos: "CM", overall: 75 },
      { name: "Erton Fejzullahu", pos: "AM", overall: 77 },
      { name: "Gustav Wikheim", pos: "RW", overall: 77 },
      { name: "Isak Jansson", pos: "LW", overall: 75 },
      { name: "Jonathan Norulla", pos: "ST", overall: 75 }
    ]
  },
  {
    id: "conf_fiorentina_2425", name: "Fiorentina", season: "2024-25", country: "IT", flag: "🇮🇹",
    formation: "4-2-3-1",
    players: [
      { name: "David De Gea", pos: "GK", overall: 88 },
      { name: "Dodô", pos: "RB", overall: 84 },
      { name: "Marin Pongračić", pos: "CB", overall: 80 },
      { name: "Luca Ranieri", pos: "CB", overall: 80 },
      { name: "Fabiano Parisi", pos: "LB", overall: 78 },
      { name: "Rolando Mandragora", pos: "CM", overall: 81 },
      { name: "Yacine Adli", pos: "CM", overall: 80 },
      { name: "Albert Guðmundsson", pos: "AM", overall: 82 },
      { name: "Riccardo Sottil", pos: "RW", overall: 79 },
      { name: "Moise Kean", pos: "LW", overall: 84 },
      { name: "Andrea Colpani", pos: "ST", overall: 79 }
    ]
  },
  {
    id: "conf_celje_2425", name: "Celje", season: "2024-25", country: "SI", flag: "🇸🇮",
    formation: "4-2-3-1",
    players: [
      { name: "Matevž Vidovšek", pos: "GK", overall: 77 },
      { name: "Nemanja Mišić", pos: "RB", overall: 74 },
      { name: "David Zec", pos: "CB", overall: 76 },
      { name: "Denis Popović", pos: "CB", overall: 75 },
      { name: "Amar Rahmanović", pos: "LB", overall: 74 },
      { name: "Mihael Klepač", pos: "CM", overall: 75 },
      { name: "Ivan Durdov", pos: "CM", overall: 74 },
      { name: "Rudi Požeg Vančaš", pos: "AM", overall: 80 },
      { name: "Mario Kvesić", pos: "RW", overall: 76 },
      { name: "Nemanja Motika", pos: "LW", overall: 78 },
      { name: "Denis Klemenčič", pos: "ST", overall: 76 }
    ]
  },
  {
    id: "conf_jagiellonia_2425", name: "Jagiellonia Białystok", season: "2024-25", country: "PL", flag: "🇵🇱",
    formation: "4-2-3-1",
    players: [
      { name: "Adrian Lis", pos: "GK", overall: 77 },
      { name: "Bartosz Rymaniak", pos: "RB", overall: 74 },
      { name: "Mateusz Skrzypczak", pos: "CB", overall: 75 },
      { name: "Steve Kapuadi", pos: "CB", overall: 75 },
      { name: "Bartosz Wdowik", pos: "LB", overall: 75 },
      { name: "Taras Romanczuk", pos: "CM", overall: 75 },
      { name: "Kristoffer Hansen", pos: "CM", overall: 76 },
      { name: "Jesus Imaz", pos: "AM", overall: 78 },
      { name: "Afimico Pululu", pos: "RW", overall: 78 },
      { name: "Alex Douglas", pos: "LW", overall: 75 },
      { name: "Patryk Kun", pos: "ST", overall: 75 }
    ]
  },

  // ───────── 2025-26 ─────────
  {
    id: "conf_crystalpalace_2526", name: "Crystal Palace", season: "2025-26", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-2-3-1",
    players: [
      { name: "Dean Henderson", pos: "GK", overall: 85 },
      { name: "Daniel Muñoz", pos: "RB", overall: 82 },
      { name: "Marc Guéhi", pos: "CB", overall: 86 },
      { name: "Maxence Lacroix", pos: "CB", overall: 82 },
      { name: "Tyrick Mitchell", pos: "LB", overall: 82 },
      { name: "Adam Wharton", pos: "CM", overall: 83 },
      { name: "Will Hughes", pos: "CM", overall: 78 },
      { name: "Eberechi Eze", pos: "AM", overall: 87 },
      { name: "Ismaïla Sarr", pos: "RW", overall: 82 },
      { name: "Yeremy Pino", pos: "LW", overall: 80 },
      { name: "Jean-Philippe Mateta", pos: "ST", overall: 84 }
    ]
  },
  {
    id: "conf_rayovallecano_2526", name: "Rayo Vallecano", season: "2025-26", country: "ES", flag: "🇪🇸",
    formation: "4-2-3-1",
    players: [
      { name: "Augusto Batalla", pos: "GK", overall: 80 },
      { name: "Andrei Rațiu", pos: "RB", overall: 80 },
      { name: "Florian Lejeune", pos: "CB", overall: 80 },
      { name: "Abdul Mumin", pos: "CB", overall: 79 },
      { name: "Pep Chavarría", pos: "LB", overall: 77 },
      { name: "Óscar Valentín", pos: "CM", overall: 79 },
      { name: "Unai López", pos: "CM", overall: 79 },
      { name: "Isi Palazón", pos: "AM", overall: 82 },
      { name: "Álvaro García", pos: "RW", overall: 80 },
      { name: "Randy Nteka", pos: "LW", overall: 79 },
      { name: "Raúl de Tomás", pos: "ST", overall: 80 }
    ]
  },
  {
    id: "conf_shakhtar_2526", name: "Shakhtar Donetsk", season: "2025-26", country: "UA", flag: "🇺🇦",
    formation: "4-2-3-1",
    players: [
      { name: "Dmytro Riznyk", pos: "GK", overall: 80 },
      { name: "Yukhym Konoplia", pos: "RB", overall: 81 },
      { name: "Valeriy Bondar", pos: "CB", overall: 82 },
      { name: "Mykola Matvienko", pos: "CB", overall: 82 },
      { name: "Mykola Ihnatenko", pos: "LB", overall: 77 },
      { name: "Heorhii Sudakov", pos: "CM", overall: 86 },
      { name: "Oleksandr Zubkov", pos: "CM", overall: 80 },
      { name: "Marian Shved", pos: "AM", overall: 81 },
      { name: "Newerton", pos: "RW", overall: 78 },
      { name: "Eguinaldo", pos: "LW", overall: 78 },
      { name: "Danylo Sikan", pos: "ST", overall: 82 }
    ]
  },
  {
    id: "conf_strasbourg_2526", name: "Strasbourg", season: "2025-26", country: "FR", flag: "🇫🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Djordje Petrović", pos: "GK", overall: 83 },
      { name: "Abakar Sylla", pos: "RB", overall: 78 },
      { name: "Guela Doué", pos: "CB", overall: 80 },
      { name: "Saïdou Sow", pos: "CB", overall: 78 },
      { name: "Caleb Wiley", pos: "LB", overall: 78 },
      { name: "Habib Diarra", pos: "CM", overall: 83 },
      { name: "Andrey Santos", pos: "CM", overall: 80 },
      { name: "Sebastian Nanasi", pos: "AM", overall: 81 },
      { name: "Félix Lemaréchal", pos: "RW", overall: 77 },
      { name: "Kader Meïté", pos: "LW", overall: 77 },
      { name: "Emanuel Emegha", pos: "ST", overall: 82 }
    ]
  }

];
