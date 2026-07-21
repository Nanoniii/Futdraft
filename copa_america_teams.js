
// ═══════════════════════════════════════════════════════════════
// COPA AMÉRICA — seleções históricas de 1916 a 2024
// ═══════════════════════════════════════════════════════════════
const COPA_AMERICA_TEAMS = [

  // ───────── 1916 ─────────
  {
    id: "ca_uy_1916", name: "Uruguai", season: "1916", country: "UY", flag: "🇺🇾",
    formation: "4-2-4",
    players: [
      { name: "Foglino", pos: "GK", overall: 78 },
      { name: "Céspedes", pos: "RB", overall: 75 },
      { name: "Gradín", pos: "RW", overall: 84 },
      { name: "Piendibene", pos: "ST", overall: 87 },
      { name: "Scarone", pos: "ST", overall: 83 },
      { name: "Somma", pos: "CB", overall: 76 },
      { name: "Bagnulo", pos: "CM", overall: 75 },
      { name: "Naveiro", pos: "LB", overall: 74 },
      { name: "Foglino Jr.", pos: "CM", overall: 74 },
      { name: "Fernández", pos: "LW", overall: 76 },
      { name: "Vanzino", pos: "CM", overall: 74 }
    ]
  },
  {
    id: "ca_ar_1916", name: "Argentina", season: "1916", country: "AR", flag: "🇦🇷",
    formation: "4-2-4",
    players: [
      { name: "Bidoglio", pos: "GK", overall: 77 },
      { name: "Olazar", pos: "RB", overall: 74 },
      { name: "Marcovecchio", pos: "CB", overall: 75 },
      { name: "Laurita", pos: "LB", overall: 74 },
      { name: "Chiappe", pos: "CM", overall: 75 },
      { name: "Ohaco", pos: "ST", overall: 81 },
      { name: "Perinetti", pos: "ST", overall: 78 },
      { name: "Erico", pos: "RW", overall: 77 },
      { name: "Frontera", pos: "LW", overall: 76 },
      { name: "Bartolucci", pos: "CM", overall: 74 },
      { name: "Diaz", pos: "CB", overall: 74 }
    ]
  },

  // ───────── 1919 ─────────
  {
    id: "ca_br_1919", name: "Brasil", season: "1919", country: "BR", flag: "🇧🇷",
    formation: "4-2-4",
    players: [
      { name: "Marcos Carneiro", pos: "GK", overall: 79 },
      { name: "Rubens Salles", pos: "RB", overall: 75 },
      { name: "Neco", pos: "LB", overall: 75 },
      { name: "Amílcar", pos: "CB", overall: 76 },
      { name: "Formiga", pos: "CM", overall: 75 },
      { name: "Millon", pos: "CM", overall: 75 },
      { name: "Arthur Friedenreich", pos: "ST", overall: 88 },
      { name: "Neco II", pos: "ST", overall: 78 },
      { name: "Haroldo", pos: "RW", overall: 77 },
      { name: "Osman", pos: "LW", overall: 76 },
      { name: "Sinhozinho", pos: "CM", overall: 76 }
    ]
  },
  {
    id: "ca_uy_1919", name: "Uruguai", season: "1919", country: "UY", flag: "🇺🇾",
    formation: "4-2-4",
    players: [
      { name: "Foglino", pos: "GK", overall: 78 },
      { name: "Céspedes", pos: "RB", overall: 76 },
      { name: "Ghierra", pos: "CB", overall: 76 },
      { name: "Naveiro", pos: "LB", overall: 75 },
      { name: "Bagnulo", pos: "CM", overall: 76 },
      { name: "Gradín", pos: "RW", overall: 85 },
      { name: "Piendibene", pos: "ST", overall: 87 },
      { name: "Scarone", pos: "ST", overall: 84 },
      { name: "Romano", pos: "CM", overall: 75 },
      { name: "Cea", pos: "LW", overall: 78 },
      { name: "Vanzino", pos: "CM", overall: 75 }
    ]
  },

  // ───────── 1921 ─────────
  {
    id: "ca_ar_1921", name: "Argentina", season: "1921", country: "AR", flag: "🇦🇷",
    formation: "4-2-4",
    players: [
      { name: "Tarasconi", pos: "GK", overall: 79 },
      { name: "Olazar", pos: "RB", overall: 75 },
      { name: "Rega", pos: "CB", overall: 76 },
      { name: "Bidoglio", pos: "LB", overall: 75 },
      { name: "Chiappe", pos: "CM", overall: 76 },
      { name: "Onzari", pos: "ST", overall: 82 },
      { name: "Libonatti", pos: "ST", overall: 83 },
      { name: "Gonzalez", pos: "RW", overall: 77 },
      { name: "Perinetti", pos: "LW", overall: 78 },
      { name: "Medici", pos: "CM", overall: 75 },
      { name: "Cerroti", pos: "CB", overall: 75 }
    ]
  },

  // ───────── 1922 ─────────
  {
    id: "ca_br_1922", name: "Brasil", season: "1922", country: "BR", flag: "🇧🇷",
    formation: "4-2-4",
    players: [
      { name: "Marcos Carneiro", pos: "GK", overall: 79 },
      { name: "Formiga", pos: "RB", overall: 76 },
      { name: "Amílcar", pos: "CB", overall: 77 },
      { name: "Fortes", pos: "LB", overall: 75 },
      { name: "Millon", pos: "CM", overall: 76 },
      { name: "Nélson", pos: "CM", overall: 75 },
      { name: "Arthur Friedenreich", pos: "ST", overall: 89 },
      { name: "Neco", pos: "ST", overall: 79 },
      { name: "Haroldo", pos: "RW", overall: 78 },
      { name: "Formiga II", pos: "LW", overall: 76 },
      { name: "Heitor", pos: "CM", overall: 75 }
    ]
  },
  {
    id: "ca_py_1922", name: "Paraguai", season: "1922", country: "PY", flag: "🇵🇾",
    formation: "4-2-4",
    players: [
      { name: "Fernández", pos: "GK", overall: 74 },
      { name: "Ávalos", pos: "RB", overall: 73 },
      { name: "Torres", pos: "CB", overall: 73 },
      { name: "González", pos: "LB", overall: 72 },
      { name: "Insfrán", pos: "CM", overall: 73 },
      { name: "Benítez", pos: "CM", overall: 72 },
      { name: "Ortíz", pos: "ST", overall: 75 },
      { name: "Recalde", pos: "ST", overall: 74 },
      { name: "Franco", pos: "RW", overall: 73 },
      { name: "Cáceres", pos: "LW", overall: 73 },
      { name: "Ayala", pos: "CM", overall: 72 }
    ]
  },

  // ───────── 1924 ─────────
  {
    id: "ca_uy_1924", name: "Uruguai", season: "1924", country: "UY", flag: "🇺🇾",
    formation: "4-2-4",
    players: [
      { name: "Mazali", pos: "GK", overall: 82 },
      { name: "Nasazzi", pos: "RB", overall: 85 },
      { name: "Arispe", pos: "LB", overall: 78 },
      { name: "Andrade", pos: "CM", overall: 87 },
      { name: "Vidal", pos: "CB", overall: 77 },
      { name: "Ghierra", pos: "CM", overall: 76 },
      { name: "Petrone", pos: "ST", overall: 87 },
      { name: "Scarone", pos: "ST", overall: 86 },
      { name: "Cea", pos: "RW", overall: 82 },
      { name: "Romano", pos: "LW", overall: 78 },
      { name: "Zibechi", pos: "CM", overall: 76 }
    ]
  },

  // ───────── 1935 ─────────
  {
    id: "ca_uy_1935", name: "Uruguai", season: "1935", country: "UY", flag: "🇺🇾",
    formation: "4-2-4",
    players: [
      { name: "Mazzitelli", pos: "GK", overall: 79 },
      { name: "Nasazzi", pos: "RB", overall: 84 },
      { name: "Arispe", pos: "LB", overall: 78 },
      { name: "Gestido", pos: "CM", overall: 79 },
      { name: "Andrade", pos: "CB", overall: 84 },
      { name: "Fernández", pos: "CM", overall: 78 },
      { name: "Anselmo", pos: "ST", overall: 83 },
      { name: "Castro", pos: "ST", overall: 84 },
      { name: "Sasía", pos: "RW", overall: 79 },
      { name: "Chiazzaro", pos: "LW", overall: 78 },
      { name: "Piriz", pos: "CM", overall: 76 }
    ]
  },
  {
    id: "ca_ar_1935", name: "Argentina", season: "1935", country: "AR", flag: "🇦🇷",
    formation: "4-2-4",
    players: [
      { name: "Bossio", pos: "GK", overall: 78 },
      { name: "De la Mata", pos: "RB", overall: 76 },
      { name: "Marante", pos: "LB", overall: 76 },
      { name: "Bidoglio", pos: "CM", overall: 76 },
      { name: "Suárez", pos: "CB", overall: 77 },
      { name: "Perducca", pos: "CM", overall: 77 },
      { name: "Peucelle", pos: "RW", overall: 80 },
      { name: "Zozaya", pos: "ST", overall: 81 },
      { name: "García", pos: "ST", overall: 78 },
      { name: "Rúa", pos: "LW", overall: 77 },
      { name: "Minella", pos: "CM", overall: 75 }
    ]
  },

  // ───────── 1939 ─────────
  {
    id: "ca_pe_1939", name: "Peru", season: "1939", country: "PE", flag: "🇵🇪",
    formation: "4-2-4",
    players: [
      { name: "Ibáñez", pos: "GK", overall: 78 },
      { name: "Astengo", pos: "RB", overall: 76 },
      { name: "Denegri", pos: "LB", overall: 75 },
      { name: "Fernández", pos: "CM", overall: 76 },
      { name: "Villanueva", pos: "CB", overall: 76 },
      { name: "Alcalde", pos: "CM", overall: 76 },
      { name: "Lolo Fernández", pos: "ST", overall: 87 },
      { name: "Sánchez", pos: "ST", overall: 79 },
      { name: "Souza", pos: "RW", overall: 78 },
      { name: "Farfán", pos: "LW", overall: 77 },
      { name: "Gonzáles", pos: "CM", overall: 75 }
    ]
  },

  // ───────── 1945 ─────────
  {
    id: "ca_ar_1945", name: "Argentina", season: "1945", country: "AR", flag: "🇦🇷",
    formation: "4-2-4",
    players: [
      { name: "Blázquez", pos: "GK", overall: 80 },
      { name: "Salomón", pos: "RB", overall: 77 },
      { name: "Marante", pos: "LB", overall: 77 },
      { name: "Pedernera", pos: "CM", overall: 89 },
      { name: "Sosa", pos: "CB", overall: 78 },
      { name: "Muñoz", pos: "CM", overall: 78 },
      { name: "Martino", pos: "RW", overall: 82 },
      { name: "Labruna", pos: "ST", overall: 87 },
      { name: "Loustau", pos: "ST", overall: 80 },
      { name: "Méndez", pos: "LW", overall: 79 },
      { name: "Ferreira", pos: "CM", overall: 77 }
    ]
  },
  {
    id: "ca_br_1945", name: "Brasil", season: "1945", country: "BR", flag: "🇧🇷",
    formation: "4-2-4",
    players: [
      { name: "Batatais", pos: "GK", overall: 79 },
      { name: "Augusto", pos: "RB", overall: 76 },
      { name: "Domingos da Guia", pos: "CB", overall: 87 },
      { name: "Jurandir", pos: "LB", overall: 78 },
      { name: "Zezé Procópio", pos: "CM", overall: 78 },
      { name: "Alfredinho", pos: "CM", overall: 76 },
      { name: "Zizinho", pos: "ST", overall: 89 },
      { name: "Heleno de Freitas", pos: "ST", overall: 88 },
      { name: "Jair", pos: "RW", overall: 81 },
      { name: "Ademir", pos: "LW", overall: 84 },
      { name: "Rodrigues", pos: "CM", overall: 77 }
    ]
  },

  // ───────── 1949 ─────────
  {
    id: "ca_br_1949", name: "Brasil", season: "1949", country: "BR", flag: "🇧🇷",
    formation: "4-2-4",
    players: [
      { name: "Oberdan", pos: "GK", overall: 80 },
      { name: "Augusto", pos: "RB", overall: 78 },
      { name: "Danilo Alvim", pos: "CB", overall: 80 },
      { name: "Bauer", pos: "CM", overall: 82 },
      { name: "Noronha", pos: "CB", overall: 78 },
      { name: "Rui", pos: "CM", overall: 78 },
      { name: "Jair", pos: "RW", overall: 83 },
      { name: "Ademir", pos: "ST", overall: 88 },
      { name: "Zizinho", pos: "ST", overall: 91 },
      { name: "Chico", pos: "LW", overall: 79 },
      { name: "Friaça", pos: "CM", overall: 79 }
    ]
  },
  {
    id: "ca_py_1949", name: "Paraguai", season: "1949", country: "PY", flag: "🇵🇾",
    formation: "4-2-4",
    players: [
      { name: "Osorio", pos: "GK", overall: 78 },
      { name: "Gonzáles", pos: "RB", overall: 76 },
      { name: "Achucarro", pos: "LB", overall: 76 },
      { name: "López Fretes", pos: "CM", overall: 78 },
      { name: "Guerreño", pos: "CB", overall: 77 },
      { name: "Villalba", pos: "CM", overall: 77 },
      { name: "Gavilán", pos: "ST", overall: 83 },
      { name: "Parodi", pos: "ST", overall: 81 },
      { name: "Isasi", pos: "RW", overall: 79 },
      { name: "Jara", pos: "LW", overall: 78 },
      { name: "Fernández", pos: "CM", overall: 76 }
    ]
  },

  // ───────── 1953 ─────────
  {
    id: "ca_py_1953", name: "Paraguai", season: "1953", country: "PY", flag: "🇵🇾",
    formation: "4-2-4",
    players: [
      { name: "Osorio", pos: "GK", overall: 79 },
      { name: "Achucarro", pos: "RB", overall: 77 },
      { name: "Gonzáles", pos: "LB", overall: 77 },
      { name: "López Fretes", pos: "CM", overall: 79 },
      { name: "Guerreño", pos: "CB", overall: 77 },
      { name: "Villalba", pos: "CM", overall: 78 },
      { name: "Gavilán", pos: "ST", overall: 84 },
      { name: "Parodi", pos: "ST", overall: 81 },
      { name: "Isasi", pos: "RW", overall: 79 },
      { name: "Cañete", pos: "LW", overall: 79 },
      { name: "Fernández", pos: "CM", overall: 77 }
    ]
  },

  // ───────── 1955 ─────────
  {
    id: "ca_cl_1955", name: "Chile", season: "1955", country: "CL", flag: "🇨🇱",
    formation: "4-2-4",
    players: [
      { name: "Livingstone", pos: "GK", overall: 79 },
      { name: "Farías", pos: "RB", overall: 76 },
      { name: "Robledo", pos: "CB", overall: 82 },
      { name: "Contreras", pos: "LB", overall: 76 },
      { name: "Cremaschi", pos: "CM", overall: 78 },
      { name: "Ibáñez", pos: "CM", overall: 77 },
      { name: "Hormazábal", pos: "RW", overall: 80 },
      { name: "Muñoz", pos: "ST", overall: 79 },
      { name: "Prieto", pos: "ST", overall: 79 },
      { name: "Sepúlveda", pos: "LW", overall: 78 },
      { name: "Fouilloux", pos: "CM", overall: 76 }
    ]
  },

  // ───────── 1959 ─────────
  {
    id: "ca_ar_1959", name: "Argentina", season: "1959", country: "AR", flag: "🇦🇷",
    formation: "4-2-4",
    players: [
      { name: "Carrizo", pos: "GK", overall: 84 },
      { name: "Dellacha", pos: "RB", overall: 78 },
      { name: "Vairo", pos: "LB", overall: 79 },
      { name: "Navarro", pos: "CM", overall: 78 },
      { name: "Marzolini", pos: "CB", overall: 80 },
      { name: "Corbatta", pos: "RW", overall: 84 },
      { name: "Cruz", pos: "ST", overall: 80 },
      { name: "Sanfilippo", pos: "ST", overall: 84 },
      { name: "Belén", pos: "CM", overall: 78 },
      { name: "Menéndez", pos: "LW", overall: 78 },
      { name: "Rossi", pos: "CM", overall: 77 }
    ]
  },
  {
    id: "ca_br_1959", name: "Brasil", season: "1959", country: "BR", flag: "🇧🇷",
    formation: "4-2-4",
    players: [
      { name: "Gilmar", pos: "GK", overall: 87 },
      { name: "Djalma Santos", pos: "RB", overall: 89 },
      { name: "Nilton Santos", pos: "LB", overall: 88 },
      { name: "Bellini", pos: "CB", overall: 83 },
      { name: "Orlando", pos: "CB", overall: 80 },
      { name: "Zito", pos: "CM", overall: 82 },
      { name: "Garrincha", pos: "RW", overall: 93 },
      { name: "Pelé", pos: "ST", overall: 97 },
      { name: "Vavá", pos: "ST", overall: 85 },
      { name: "Zagallo", pos: "LW", overall: 84 },
      { name: "Didi", pos: "CM", overall: 88 }
    ]
  },
  {
    id: "ca_uy_1959", name: "Uruguai", season: "1959", country: "UY", flag: "🇺🇾",
    formation: "4-2-4",
    players: [
      { name: "Sosa", pos: "GK", overall: 80 },
      { name: "Santamaría", pos: "CB", overall: 85 },
      { name: "Martínez", pos: "LB", overall: 78 },
      { name: "Cardoso", pos: "CM", overall: 78 },
      { name: "Ambrois", pos: "CB", overall: 77 },
      { name: "Souto", pos: "CM", overall: 77 },
      { name: "Cubilla", pos: "RW", overall: 82 },
      { name: "Sasía", pos: "ST", overall: 80 },
      { name: "Rocha", pos: "ST", overall: 81 },
      { name: "Borges", pos: "LW", overall: 78 },
      { name: "Cabrera", pos: "CM", overall: 76 }
    ]
  },

  // ───────── 1963 ─────────
  {
    id: "ca_bo_1963", name: "Bolívia", season: "1963", country: "BO", flag: "🇧🇴",
    formation: "4-2-4",
    players: [
      { name: "Mustafá", pos: "GK", overall: 79 },
      { name: "Martínez", pos: "RB", overall: 77 },
      { name: "Alcócer", pos: "LB", overall: 76 },
      { name: "Wágner", pos: "CM", overall: 77 },
      { name: "Rada", pos: "CB", overall: 77 },
      { name: "Camacho", pos: "CM", overall: 77 },
      { name: "Alcócer II", pos: "RW", overall: 79 },
      { name: "Ramallo", pos: "ST", overall: 82 },
      { name: "Aragonés", pos: "ST", overall: 80 },
      { name: "Basáñez", pos: "LW", overall: 78 },
      { name: "Mena", pos: "CM", overall: 76 }
    ]
  },

  // ───────── 1967 ─────────
  {
    id: "ca_uy_1967", name: "Uruguai", season: "1967", country: "UY", flag: "🇺🇾",
    formation: "4-4-2",
    players: [
      { name: "Mazurkiewicz", pos: "GK", overall: 84 },
      { name: "Ubiña", pos: "RB", overall: 78 },
      { name: "Matosas", pos: "LB", overall: 77 },
      { name: "Manicera", pos: "CB", overall: 78 },
      { name: "Ancheta", pos: "CB", overall: 77 },
      { name: "Cortés", pos: "RM", overall: 78 },
      { name: "Cubilla", pos: "CM", overall: 82 },
      { name: "Rocha", pos: "CM", overall: 82 },
      { name: "Silva", pos: "LM", overall: 78 },
      { name: "Espárrago", pos: "ST", overall: 81 },
      { name: "Zubía", pos: "ST", overall: 78 }
    ]
  },

  // ───────── 1975 ─────────
  {
    id: "ca_pe_1975", name: "Peru", season: "1975", country: "PE", flag: "🇵🇪",
    formation: "4-3-3",
    players: [
      { name: "Quiroga", pos: "GK", overall: 83 },
      { name: "Duarte", pos: "RB", overall: 79 },
      { name: "Chumpitaz", pos: "CB", overall: 84 },
      { name: "Rojas", pos: "LB", overall: 78 },
      { name: "Velásquez", pos: "CM", overall: 82 },
      { name: "Rodríguez Vildoso", pos: "CM", overall: 78 },
      { name: "Sotil", pos: "RW", overall: 85 },
      { name: "Cubillas", pos: "AM", overall: 88 },
      { name: "Muñante", pos: "LW", overall: 79 },
      { name: "La Rosa", pos: "ST", overall: 79 },
      { name: "Oblitas", pos: "CM", overall: 79 }
    ]
  },
  {
    id: "ca_co_1975", name: "Colômbia", season: "1975", country: "CO", flag: "🇨🇴",
    formation: "4-3-3",
    players: [
      { name: "Sánchez", pos: "GK", overall: 79 },
      { name: "Bermúdez", pos: "RB", overall: 77 },
      { name: "Delgado", pos: "CB", overall: 78 },
      { name: "González", pos: "LB", overall: 77 },
      { name: "Zape", pos: "CM", overall: 78 },
      { name: "Ussa", pos: "CM", overall: 77 },
      { name: "Coll", pos: "RW", overall: 78 },
      { name: "Klinger", pos: "ST", overall: 80 },
      { name: "Valencia", pos: "LW", overall: 78 },
      { name: "Diaz Granados", pos: "ST", overall: 78 },
      { name: "Ochoa", pos: "CM", overall: 76 }
    ]
  },

  // ───────── 1979 ─────────
  {
    id: "ca_py_1979", name: "Paraguai", season: "1979", country: "PY", flag: "🇵🇾",
    formation: "4-3-3",
    players: [
      { name: "Fernández", pos: "GK", overall: 80 },
      { name: "Torales", pos: "RB", overall: 77 },
      { name: "Zabala", pos: "CB", overall: 78 },
      { name: "Mendoza", pos: "LB", overall: 77 },
      { name: "Ferreira", pos: "CM", overall: 78 },
      { name: "Torres", pos: "CM", overall: 77 },
      { name: "Romero", pos: "RW", overall: 79 },
      { name: "Zarate", pos: "ST", overall: 81 },
      { name: "Cabañas", pos: "LW", overall: 79 },
      { name: "Espínola", pos: "ST", overall: 79 },
      { name: "Aquino", pos: "CM", overall: 77 }
    ]
  },
  {
    id: "ca_cl_1979", name: "Chile", season: "1979", country: "CL", flag: "🇨🇱",
    formation: "4-3-3",
    players: [
      { name: "Osbén", pos: "GK", overall: 80 },
      { name: "Figueroa", pos: "CB", overall: 85 },
      { name: "Quintano", pos: "CB", overall: 79 },
      { name: "Bonvallet", pos: "LB", overall: 77 },
      { name: "Rubio", pos: "RB", overall: 76 },
      { name: "Ahumada", pos: "CM", overall: 78 },
      { name: "Osorio", pos: "CM", overall: 77 },
      { name: "Véliz", pos: "RW", overall: 79 },
      { name: "Caszely", pos: "ST", overall: 84 },
      { name: "Rivas", pos: "LW", overall: 78 },
      { name: "Moscoso", pos: "CM", overall: 76 }
    ]
  },

  // ───────── 1983 ─────────
  {
    id: "ca_uy_1983", name: "Uruguai", season: "1983", country: "UY", flag: "🇺🇾",
    formation: "4-4-2",
    players: [
      { name: "Álvez", pos: "GK", overall: 82 },
      { name: "Gutiérrez", pos: "RB", overall: 78 },
      { name: "Bossio", pos: "LB", overall: 77 },
      { name: "Diogo", pos: "CB", overall: 80 },
      { name: "Herrera", pos: "CB", overall: 78 },
      { name: "Barrios", pos: "RM", overall: 79 },
      { name: "Francescoli", pos: "CM", overall: 89 },
      { name: "Da Silva", pos: "CM", overall: 79 },
      { name: "Bengoechea", pos: "LM", overall: 79 },
      { name: "Aguilera", pos: "ST", overall: 79 },
      { name: "Acevedo", pos: "ST", overall: 80 }
    ]
  },
  {
    id: "ca_br_1983", name: "Brasil", season: "1983", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Carlos", pos: "GK", overall: 81 },
      { name: "Leandro", pos: "RB", overall: 82 },
      { name: "Júnior", pos: "LB", overall: 85 },
      { name: "Oscar", pos: "CB", overall: 82 },
      { name: "Luizinho", pos: "CB", overall: 79 },
      { name: "Falcão", pos: "CM", overall: 88 },
      { name: "Toninho Cerezo", pos: "CM", overall: 84 },
      { name: "Éder", pos: "LW", overall: 84 },
      { name: "Zico", pos: "AM", overall: 92 },
      { name: "Careca", pos: "ST", overall: 87 },
      { name: "Sócrates", pos: "AM", overall: 89 }
    ]
  },

  // ───────── 1987 ─────────
  {
    id: "ca_uy_1987", name: "Uruguai", season: "1987", country: "UY", flag: "🇺🇾",
    formation: "4-4-2",
    players: [
      { name: "Álvez", pos: "GK", overall: 82 },
      { name: "Gutiérrez", pos: "RB", overall: 78 },
      { name: "Herrera", pos: "CB", overall: 79 },
      { name: "Diogo", pos: "CB", overall: 79 },
      { name: "Rivas", pos: "LB", overall: 77 },
      { name: "Paz", pos: "RM", overall: 78 },
      { name: "Francescoli", pos: "CM", overall: 90 },
      { name: "Da Silva", pos: "CM", overall: 79 },
      { name: "Bengoechea", pos: "LM", overall: 80 },
      { name: "Aguilera", pos: "ST", overall: 80 },
      { name: "Ostolaza", pos: "ST", overall: 78 }
    ]
  },

  // ───────── 1989 ─────────
  {
    id: "ca_br_1989", name: "Brasil", season: "1989", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Taffarel", pos: "GK", overall: 87 },
      { name: "Jorginho", pos: "RB", overall: 82 },
      { name: "Ricardo Gomes", pos: "CB", overall: 84 },
      { name: "Aldair", pos: "CB", overall: 85 },
      { name: "Branco", pos: "LB", overall: 84 },
      { name: "Dunga", pos: "CM", overall: 84 },
      { name: "Alemão", pos: "CM", overall: 82 },
      { name: "Bebeto", pos: "LW", overall: 87 },
      { name: "Careca", pos: "ST", overall: 88 },
      { name: "Romário", pos: "ST", overall: 90 },
      { name: "Valdo", pos: "AM", overall: 83 }
    ]
  },

  // ───────── 1991 ─────────
  {
    id: "ca_ar_1991", name: "Argentina", season: "1991", country: "AR", flag: "🇦🇷",
    formation: "3-5-2",
    players: [
      { name: "Goycochea", pos: "GK", overall: 85 },
      { name: "Ruggeri", pos: "CB", overall: 84 },
      { name: "Serrizuela", pos: "CB", overall: 78 },
      { name: "Basualdo", pos: "CB", overall: 80 },
      { name: "Simeone", pos: "CM", overall: 84 },
      { name: "Sensini", pos: "RM", overall: 79 },
      { name: "Fernando Redondo", pos: "CM", overall: 87 },
      { name: "Ortega", pos: "LM", overall: 82 },
      { name: "Batistuta", pos: "ST", overall: 89 },
      { name: "Balbo", pos: "ST", overall: 80 },
      { name: "Caniggia", pos: "CM", overall: 85 }
    ]
  },

  // ───────── 1997 ─────────
  {
    id: "ca_br_1997", name: "Brasil", season: "1997", country: "BR", flag: "🇧🇷",
    formation: "4-4-2",
    players: [
      { name: "Dida", pos: "GK", overall: 83 },
      { name: "Cafu", pos: "RB", overall: 88 },
      { name: "Júnior Baiano", pos: "CB", overall: 80 },
      { name: "Aldair", pos: "CB", overall: 85 },
      { name: "Roberto Carlos", pos: "LB", overall: 89 },
      { name: "César Sampaio", pos: "CM", overall: 82 },
      { name: "Leonardo", pos: "LM", overall: 84 },
      { name: "Denilson", pos: "RM", overall: 83 },
      { name: "Edmundo", pos: "ST", overall: 87 },
      { name: "Ronaldo", pos: "ST", overall: 95 },
      { name: "Zamorano", pos: "AM", overall: 80 }
    ]
  },
  {
    id: "ca_bo_1997", name: "Bolívia", season: "1997", country: "BO", flag: "🇧🇴",
    formation: "4-4-2",
    players: [
      { name: "Trucco", pos: "GK", overall: 79 },
      { name: "Peña", pos: "RB", overall: 76 },
      { name: "Sandy", pos: "CB", overall: 77 },
      { name: "Tobar", pos: "CB", overall: 76 },
      { name: "Cristaldo", pos: "LB", overall: 76 },
      { name: "Ramallo", pos: "RM", overall: 77 },
      { name: "Melgar", pos: "CM", overall: 77 },
      { name: "Sánchez", pos: "LM", overall: 77 },
      { name: "Etcheverry", pos: "AM", overall: 85 },
      { name: "Baldivieso", pos: "ST", overall: 79 },
      { name: "Ramírez", pos: "ST", overall: 78 }
    ]
  },
  {
    id: "ca_mx_1997", name: "México", season: "1997", country: "MX", flag: "🇲🇽",
    formation: "4-4-2",
    players: [
      { name: "Campos", pos: "GK", overall: 85 },
      { name: "Suárez", pos: "RB", overall: 78 },
      { name: "Pardo", pos: "CB", overall: 80 },
      { name: "Rodríguez", pos: "CB", overall: 77 },
      { name: "Ambriz", pos: "LB", overall: 77 },
      { name: "García Aspe", pos: "CM", overall: 83 },
      { name: "Rincón", pos: "CM", overall: 78 },
      { name: "Hermosillo", pos: "RM", overall: 80 },
      { name: "Peláez", pos: "AM", overall: 79 },
      { name: "Luis Roberto Alves", pos: "ST", overall: 82 },
      { name: "Blanco", pos: "LM", overall: 84 }
    ]
  },

  // ───────── 1999 ─────────
  {
    id: "ca_br_1999", name: "Brasil", season: "1999", country: "BR", flag: "🇧🇷",
    formation: "4-4-2",
    players: [
      { name: "Dida", pos: "GK", overall: 84 },
      { name: "Cafu", pos: "RB", overall: 88 },
      { name: "Aldair", pos: "CB", overall: 85 },
      { name: "Antônio Carlos", pos: "CB", overall: 78 },
      { name: "Roberto Carlos", pos: "LB", overall: 90 },
      { name: "César Sampaio", pos: "CM", overall: 82 },
      { name: "Emerson", pos: "CM", overall: 83 },
      { name: "Zé Roberto", pos: "LM", overall: 82 },
      { name: "Ronaldinho", pos: "RM", overall: 87 },
      { name: "Rivaldo", pos: "AM", overall: 90 },
      { name: "Ronaldo", pos: "ST", overall: 94 }
    ]
  },
  {
    id: "ca_uy_1999", name: "Uruguai", season: "1999", country: "UY", flag: "🇺🇾",
    formation: "4-4-2",
    players: [
      { name: "Carini", pos: "GK", overall: 79 },
      { name: "Rodríguez", pos: "RB", overall: 77 },
      { name: "Lembo", pos: "CB", overall: 77 },
      { name: "Bengoechea", pos: "CB", overall: 78 },
      { name: "Sosa", pos: "LB", overall: 77 },
      { name: "Romero", pos: "RM", overall: 78 },
      { name: "De los Santos", pos: "CM", overall: 79 },
      { name: "Rivero", pos: "LM", overall: 78 },
      { name: "Recoba", pos: "AM", overall: 86 },
      { name: "Fonseca", pos: "ST", overall: 82 },
      { name: "Magallanes", pos: "ST", overall: 78 }
    ]
  },

  // ───────── 2001 ─────────
  {
    id: "ca_co_2001", name: "Colômbia", season: "2001", country: "CO", flag: "🇨🇴",
    formation: "4-4-2",
    players: [
      { name: "Óscar Córdoba", pos: "GK", overall: 84 },
      { name: "Yepes", pos: "CB", overall: 82 },
      { name: "Bolaño", pos: "CM", overall: 80 },
      { name: "Colorado", pos: "CB", overall: 77 },
      { name: "Moreno", pos: "LB", overall: 78 },
      { name: "Grisales", pos: "RB", overall: 77 },
      { name: "Estrada", pos: "CM", overall: 78 },
      { name: "Valencia", pos: "RM", overall: 80 },
      { name: "Rincón", pos: "LM", overall: 80 },
      { name: "Angel", pos: "ST", overall: 82 },
      { name: "Aristizábal", pos: "ST", overall: 82 }
    ]
  },
  {
    id: "ca_mx_2001", name: "México", season: "2001", country: "MX", flag: "🇲🇽",
    formation: "4-4-2",
    players: [
      { name: "Ochoa Sánchez", pos: "GK", overall: 79 },
      { name: "Salcido", pos: "LB", overall: 78 },
      { name: "Rodríguez", pos: "CB", overall: 78 },
      { name: "Cirilo", pos: "CB", overall: 77 },
      { name: "Torrado", pos: "RB", overall: 78 },
      { name: "Pardo", pos: "CM", overall: 81 },
      { name: "Rincón", pos: "CM", overall: 79 },
      { name: "Cardozo", pos: "RM", overall: 79 },
      { name: "Blanco", pos: "AM", overall: 84 },
      { name: "Borgetti", pos: "ST", overall: 82 },
      { name: "Luna", pos: "LM", overall: 78 }
    ]
  },
  {
    id: "ca_hn_2001", name: "Honduras", season: "2001", country: "HN", flag: "🇭🇳",
    formation: "4-4-2",
    players: [
      { name: "Bernárdez", pos: "GK", overall: 77 },
      { name: "Sabillón", pos: "RB", overall: 75 },
      { name: "Turcios", pos: "CB", overall: 76 },
      { name: "Guevara", pos: "CB", overall: 76 },
      { name: "Bernárdez II", pos: "LB", overall: 75 },
      { name: "Suazo", pos: "RM", overall: 79 },
      { name: "Pavón", pos: "CM", overall: 78 },
      { name: "Martínez", pos: "LM", overall: 76 },
      { name: "Güity", pos: "AM", overall: 78 },
      { name: "Bulnes", pos: "ST", overall: 79 },
      { name: "Costly", pos: "ST", overall: 79 }
    ]
  },
  {
    id: "ca_uy_2001", name: "Uruguai", season: "2001", country: "UY", flag: "🇺🇾",
    formation: "4-4-2",
    players: [
      { name: "Carini", pos: "GK", overall: 80 },
      { name: "Rodríguez", pos: "RB", overall: 78 },
      { name: "Lembo", pos: "CB", overall: 78 },
      { name: "Montero", pos: "CB", overall: 78 },
      { name: "Sosa", pos: "LB", overall: 77 },
      { name: "De los Santos", pos: "CM", overall: 80 },
      { name: "Romero", pos: "CM", overall: 79 },
      { name: "Rivero", pos: "LM", overall: 78 },
      { name: "Recoba", pos: "RM", overall: 87 },
      { name: "Fonseca", pos: "ST", overall: 83 },
      { name: "Forlán", pos: "ST", overall: 81 }
    ]
  },
  {
    id: "ca_br_2001", name: "Brasil", season: "2001", country: "BR", flag: "🇧🇷",
    formation: "4-4-2",
    players: [
      { name: "Dida", pos: "GK", overall: 85 },
      { name: "Cafu", pos: "RB", overall: 88 },
      { name: "Lúcio", pos: "CB", overall: 84 },
      { name: "Roque Júnior", pos: "CB", overall: 78 },
      { name: "Júnior", pos: "LB", overall: 79 },
      { name: "Vampeta", pos: "CM", overall: 79 },
      { name: "Juninho Paulista", pos: "CM", overall: 84 },
      { name: "Denílson", pos: "RM", overall: 82 },
      { name: "Kléberson", pos: "LM", overall: 79 },
      { name: "Euller", pos: "ST", overall: 78 },
      { name: "Amoroso", pos: "ST", overall: 83 }
    ]
  },

  // ───────── 2004 ─────────
  {
    id: "ca_br_2004", name: "Brasil", season: "2004", country: "BR", flag: "🇧🇷",
    formation: "4-4-2",
    players: [
      { name: "Rogério Ceni", pos: "GK", overall: 84 },
      { name: "Cicinho", pos: "RB", overall: 80 },
      { name: "Lúcio", pos: "CB", overall: 87 },
      { name: "Juan", pos: "CB", overall: 82 },
      { name: "Gilberto", pos: "LB", overall: 82 },
      { name: "Kaká", pos: "AM", overall: 89 },
      { name: "Zé Roberto", pos: "CM", overall: 82 },
      { name: "Alex", pos: "RM", overall: 80 },
      { name: "Diego", pos: "LM", overall: 81 },
      { name: "Adriano", pos: "ST", overall: 90 },
      { name: "Ronaldinho", pos: "ST", overall: 92 }
    ]
  },
  {
    id: "ca_ar_2004", name: "Argentina", season: "2004", country: "AR", flag: "🇦🇷",
    formation: "4-4-2",
    players: [
      { name: "Abbondanzieri", pos: "GK", overall: 83 },
      { name: "Zanetti", pos: "RB", overall: 86 },
      { name: "Samuel", pos: "CB", overall: 87 },
      { name: "Coloccini", pos: "CB", overall: 80 },
      { name: "Cambiasso", pos: "LB", overall: 84 },
      { name: "Riquelme", pos: "AM", overall: 89 },
      { name: "Mascherano", pos: "CM", overall: 85 },
      { name: "Aimar", pos: "RM", overall: 84 },
      { name: "D'Alessandro", pos: "LM", overall: 80 },
      { name: "Crespo", pos: "ST", overall: 87 },
      { name: "Saviola", pos: "ST", overall: 84 }
    ]
  },

  // ───────── 2007 ─────────
  {
    id: "ca_br_2007", name: "Brasil", season: "2007", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Doni", pos: "GK", overall: 81 },
      { name: "Maicon", pos: "RB", overall: 85 },
      { name: "Juan", pos: "CB", overall: 82 },
      { name: "Alex", pos: "CB", overall: 80 },
      { name: "Gilberto", pos: "LB", overall: 80 },
      { name: "Gilberto Silva", pos: "CM", overall: 83 },
      { name: "Mineiro", pos: "CM", overall: 77 },
      { name: "Elano", pos: "AM", overall: 82 },
      { name: "Robinho", pos: "RW", overall: 85 },
      { name: "Vágner Love", pos: "ST", overall: 82 },
      { name: "Daniel Alves", pos: "LW", overall: 83 }
    ]
  },
  {
    id: "ca_ar_2007", name: "Argentina", season: "2007", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Abbondanzieri", pos: "GK", overall: 83 },
      { name: "Zanetti", pos: "RB", overall: 85 },
      { name: "Ayala", pos: "CB", overall: 82 },
      { name: "Heinze", pos: "CB", overall: 81 },
      { name: "Coloccini", pos: "LB", overall: 79 },
      { name: "Mascherano", pos: "CM", overall: 86 },
      { name: "Verón", pos: "CM", overall: 85 },
      { name: "Riquelme", pos: "AM", overall: 89 },
      { name: "Messi", pos: "RW", overall: 92 },
      { name: "Crespo", pos: "ST", overall: 85 },
      { name: "Tevez", pos: "LW", overall: 85 }
    ]
  },
  {
    id: "ca_mx_2007", name: "México", season: "2007", country: "MX", flag: "🇲🇽",
    formation: "4-4-2",
    players: [
      { name: "Sánchez", pos: "GK", overall: 82 },
      { name: "Salcido", pos: "LB", overall: 80 },
      { name: "Rodríguez", pos: "CB", overall: 78 },
      { name: "Osorio", pos: "CB", overall: 78 },
      { name: "Torrado", pos: "RB", overall: 79 },
      { name: "Pardo", pos: "CM", overall: 80 },
      { name: "Guardado", pos: "CM", overall: 81 },
      { name: "Fonseca", pos: "RM", overall: 82 },
      { name: "Vela", pos: "AM", overall: 81 },
      { name: "Borgetti", pos: "ST", overall: 81 },
      { name: "Franco", pos: "LM", overall: 77 }
    ]
  },

  // ───────── 2011 ─────────
  {
    id: "ca_uy_2011", name: "Uruguai", season: "2011", country: "UY", flag: "🇺🇾",
    formation: "4-4-2",
    players: [
      { name: "Muslera", pos: "GK", overall: 85 },
      { name: "Maxi Pereira", pos: "RB", overall: 82 },
      { name: "Diego Lugano", pos: "CB", overall: 83 },
      { name: "Godín", pos: "CB", overall: 85 },
      { name: "Álvaro Pereira", pos: "LB", overall: 81 },
      { name: "Egídio Arévalo Ríos", pos: "CM", overall: 80 },
      { name: "Diego Pérez", pos: "CM", overall: 79 },
      { name: "Cavani", pos: "RW", overall: 87 },
      { name: "Forlán", pos: "AM", overall: 87 },
      { name: "Suárez", pos: "ST", overall: 89 },
      { name: "Álvaro González", pos: "LW", overall: 78 }
    ]
  },
  {
    id: "ca_py_2011", name: "Paraguai", season: "2011", country: "PY", flag: "🇵🇾",
    formation: "4-4-2",
    players: [
      { name: "Villar", pos: "GK", overall: 81 },
      { name: "Da Silva", pos: "RB", overall: 78 },
      { name: "Alcaraz", pos: "CB", overall: 79 },
      { name: "Bonet", pos: "CB", overall: 78 },
      { name: "Verón", pos: "LB", overall: 78 },
      { name: "Riveros", pos: "CM", overall: 79 },
      { name: "Vera", pos: "CM", overall: 78 },
      { name: "Valdez", pos: "RM", overall: 79 },
      { name: "Barreto", pos: "LM", overall: 79 },
      { name: "Santa Cruz", pos: "ST", overall: 82 },
      { name: "Cardozo", pos: "ST", overall: 84 }
    ]
  },
  {
    id: "ca_pe_2011", name: "Peru", season: "2011", country: "PE", flag: "🇵🇪",
    formation: "4-4-2",
    players: [
      { name: "Fernández", pos: "GK", overall: 79 },
      { name: "Zambrano", pos: "CB", overall: 79 },
      { name: "Rodríguez", pos: "CB", overall: 78 },
      { name: "Rebosio", pos: "LB", overall: 76 },
      { name: "Ramos", pos: "RB", overall: 77 },
      { name: "Vargas", pos: "RM", overall: 82 },
      { name: "Rodríguez Vílchez", pos: "CM", overall: 78 },
      { name: "Pizarro", pos: "AM", overall: 84 },
      { name: "Farfán", pos: "LM", overall: 83 },
      { name: "Guerrero", pos: "ST", overall: 85 },
      { name: "Pizarro Zambrano", pos: "ST", overall: 78 }
    ]
  },
  {
    id: "ca_ve_2011", name: "Venezuela", season: "2011", country: "VE", flag: "🇻🇪",
    formation: "4-4-2",
    players: [
      { name: "Vizcarrondo", pos: "CB", overall: 79 },
      { name: "Dani Hernández", pos: "GK", overall: 78 },
      { name: "Amorebieta", pos: "CB", overall: 80 },
      { name: "González", pos: "RB", overall: 77 },
      { name: "Rey", pos: "LB", overall: 77 },
      { name: "Feltscher", pos: "CM", overall: 77 },
      { name: "Arango", pos: "AM", overall: 83 },
      { name: "Guerra", pos: "CM", overall: 78 },
      { name: "Otero", pos: "RM", overall: 78 },
      { name: "Rondón", pos: "ST", overall: 83 },
      { name: "Maldonado", pos: "LM", overall: 78 }
    ]
  },

  // ───────── 2015 ─────────
  {
    id: "ca_cl_2015", name: "Chile", season: "2015", country: "CL", flag: "🇨🇱",
    formation: "4-3-3",
    players: [
      { name: "Bravo", pos: "GK", overall: 87 },
      { name: "Isla", pos: "RB", overall: 83 },
      { name: "Jara", pos: "CB", overall: 80 },
      { name: "Medel", pos: "CB", overall: 83 },
      { name: "Mena", pos: "LB", overall: 80 },
      { name: "Díaz", pos: "CM", overall: 82 },
      { name: "Aránguiz", pos: "CM", overall: 83 },
      { name: "Vidal", pos: "RM", overall: 88 },
      { name: "Sánchez", pos: "LW", overall: 89 },
      { name: "Vargas", pos: "ST", overall: 85 },
      { name: "Valdivia", pos: "AM", overall: 83 }
    ]
  },
  {
    id: "ca_ar_2015", name: "Argentina", season: "2015", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Romero", pos: "GK", overall: 84 },
      { name: "Zabaleta", pos: "RB", overall: 83 },
      { name: "Otamendi", pos: "CB", overall: 83 },
      { name: "Garay", pos: "CB", overall: 83 },
      { name: "Rojo", pos: "LB", overall: 81 },
      { name: "Mascherano", pos: "CM", overall: 86 },
      { name: "Banega", pos: "CM", overall: 83 },
      { name: "Di María", pos: "RW", overall: 88 },
      { name: "Messi", pos: "AM", overall: 94 },
      { name: "Agüero", pos: "ST", overall: 89 },
      { name: "Higuaín", pos: "LW", overall: 86 }
    ]
  },
  {
    id: "ca_pe_2015", name: "Peru", season: "2015", country: "PE", flag: "🇵🇪",
    formation: "4-4-2",
    players: [
      { name: "Gallese", pos: "GK", overall: 81 },
      { name: "Advíncula", pos: "RB", overall: 79 },
      { name: "Rodríguez", pos: "CB", overall: 80 },
      { name: "Ramos", pos: "CB", overall: 79 },
      { name: "Trauco", pos: "LB", overall: 78 },
      { name: "Yotún", pos: "CM", overall: 79 },
      { name: "Cueva", pos: "AM", overall: 82 },
      { name: "Farfán", pos: "RM", overall: 83 },
      { name: "Carrillo", pos: "LM", overall: 80 },
      { name: "Guerrero", pos: "ST", overall: 86 },
      { name: "Pizarro", pos: "ST", overall: 79 }
    ]
  },
  {
    id: "ca_py_2015", name: "Paraguai", season: "2015", country: "PY", flag: "🇵🇾",
    formation: "4-4-2",
    players: [
      { name: "Villar", pos: "GK", overall: 80 },
      { name: "Da Silva", pos: "RB", overall: 78 },
      { name: "Bonet", pos: "CB", overall: 78 },
      { name: "Balbuena", pos: "CB", overall: 78 },
      { name: "Ortíz", pos: "LB", overall: 77 },
      { name: "Vera", pos: "CM", overall: 78 },
      { name: "Riveros", pos: "CM", overall: 78 },
      { name: "Barrios", pos: "RM", overall: 78 },
      { name: "Rojas", pos: "LM", overall: 78 },
      { name: "Santa Cruz", pos: "ST", overall: 80 },
      { name: "Ortigoza", pos: "AM", overall: 77 }
    ]
  },

  // ───────── 2016 ─────────
  {
    id: "ca_cl_2016", name: "Chile", season: "2016", country: "CL", flag: "🇨🇱",
    formation: "4-3-3",
    players: [
      { name: "Bravo", pos: "GK", overall: 87 },
      { name: "Isla", pos: "RB", overall: 83 },
      { name: "Jara", pos: "CB", overall: 80 },
      { name: "Medel", pos: "CB", overall: 83 },
      { name: "Mena", pos: "LB", overall: 80 },
      { name: "Díaz", pos: "CM", overall: 82 },
      { name: "Aránguiz", pos: "CM", overall: 83 },
      { name: "Vidal", pos: "RM", overall: 88 },
      { name: "Sánchez", pos: "LW", overall: 90 },
      { name: "Vargas", pos: "ST", overall: 85 },
      { name: "Valdivia", pos: "AM", overall: 83 }
    ]
  },
  {
    id: "ca_ar_2016", name: "Argentina", season: "2016", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Romero", pos: "GK", overall: 84 },
      { name: "Ansaldi", pos: "RB", overall: 79 },
      { name: "Otamendi", pos: "CB", overall: 84 },
      { name: "Fazio", pos: "CB", overall: 79 },
      { name: "Rojo", pos: "LB", overall: 81 },
      { name: "Mascherano", pos: "CM", overall: 86 },
      { name: "Banega", pos: "CM", overall: 84 },
      { name: "Di María", pos: "RW", overall: 88 },
      { name: "Messi", pos: "AM", overall: 94 },
      { name: "Higuaín", pos: "ST", overall: 87 },
      { name: "Lavezzi", pos: "LW", overall: 82 }
    ]
  },
  {
    id: "ca_co_2016", name: "Colômbia", season: "2016", country: "CO", flag: "🇨🇴",
    formation: "4-2-3-1",
    players: [
      { name: "Ospina", pos: "GK", overall: 83 },
      { name: "Arias", pos: "RB", overall: 78 },
      { name: "Mina", pos: "CB", overall: 81 },
      { name: "Murillo", pos: "CB", overall: 78 },
      { name: "Zúñiga", pos: "LB", overall: 79 },
      { name: "Aguilar", pos: "CM", overall: 79 },
      { name: "Sánchez", pos: "CM", overall: 78 },
      { name: "Cuadrado", pos: "RW", overall: 85 },
      { name: "James Rodríguez", pos: "AM", overall: 89 },
      { name: "Bacca", pos: "ST", overall: 84 },
      { name: "Quintero", pos: "LW", overall: 81 }
    ]
  },
  {
    id: "ca_us_2016", name: "EUA", season: "2016", country: "US", flag: "🇺🇸",
    formation: "4-4-2",
    players: [
      { name: "Guzán", pos: "GK", overall: 79 },
      { name: "DeAndre Yedlin", pos: "RB", overall: 79 },
      { name: "Cameron", pos: "CB", overall: 79 },
      { name: "Besler", pos: "CB", overall: 77 },
      { name: "Fabian Johnson", pos: "LB", overall: 79 },
      { name: "Bradley", pos: "CM", overall: 81 },
      { name: "Jermaine Jones", pos: "CM", overall: 78 },
      { name: "Bedoya", pos: "RM", overall: 78 },
      { name: "Pulisic", pos: "LM", overall: 81 },
      { name: "Dempsey", pos: "ST", overall: 82 },
      { name: "Wood", pos: "ST", overall: 79 }
    ]
  },

  // ───────── 2019 ─────────
  {
    id: "ca_br_2019", name: "Brasil", season: "2019", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Alisson", pos: "GK", overall: 89 },
      { name: "Daniel Alves", pos: "RB", overall: 83 },
      { name: "Thiago Silva", pos: "CB", overall: 87 },
      { name: "Marquinhos", pos: "CB", overall: 85 },
      { name: "Filipe Luís", pos: "LB", overall: 81 },
      { name: "Casemiro", pos: "CM", overall: 88 },
      { name: "Arthur", pos: "CM", overall: 82 },
      { name: "Everton Ribeiro", pos: "RW", overall: 81 },
      { name: "Coutinho", pos: "AM", overall: 85 },
      { name: "Gabriel Jesus", pos: "ST", overall: 84 },
      { name: "Roberto Firmino", pos: "LW", overall: 86 }
    ]
  },
  {
    id: "ca_pe_2019", name: "Peru", season: "2019", country: "PE", flag: "🇵🇪",
    formation: "4-2-3-1",
    players: [
      { name: "Gallese", pos: "GK", overall: 82 },
      { name: "Advíncula", pos: "RB", overall: 80 },
      { name: "Ramos", pos: "CB", overall: 80 },
      { name: "Abram", pos: "CB", overall: 79 },
      { name: "Trauco", pos: "LB", overall: 79 },
      { name: "Tapia", pos: "CM", overall: 81 },
      { name: "Yotún", pos: "CM", overall: 80 },
      { name: "Carrillo", pos: "RW", overall: 81 },
      { name: "Cueva", pos: "AM", overall: 82 },
      { name: "Guerrero", pos: "ST", overall: 84 },
      { name: "Farfán", pos: "LW", overall: 81 }
    ]
  },
  {
    id: "ca_ar_2019", name: "Argentina", season: "2019", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Armani", pos: "GK", overall: 84 },
      { name: "Foyth", pos: "RB", overall: 79 },
      { name: "Otamendi", pos: "CB", overall: 83 },
      { name: "Pezzella", pos: "CB", overall: 79 },
      { name: "Tagliafico", pos: "LB", overall: 81 },
      { name: "De Paul", pos: "CM", overall: 84 },
      { name: "Paredes", pos: "CM", overall: 81 },
      { name: "Lo Celso", pos: "RW", overall: 82 },
      { name: "Messi", pos: "AM", overall: 93 },
      { name: "Agüero", pos: "ST", overall: 87 },
      { name: "Di María", pos: "LW", overall: 85 }
    ]
  },
  {
    id: "ca_cl_2019", name: "Chile", season: "2019", country: "CL", flag: "🇨🇱",
    formation: "4-3-3",
    players: [
      { name: "Arias", pos: "GK", overall: 82 },
      { name: "Isla", pos: "RB", overall: 81 },
      { name: "Maripán", pos: "CB", overall: 79 },
      { name: "Medel", pos: "CB", overall: 82 },
      { name: "Beausejour", pos: "LB", overall: 78 },
      { name: "Fuenzalida", pos: "CM", overall: 78 },
      { name: "Aránguiz", pos: "CM", overall: 82 },
      { name: "Vidal", pos: "RM", overall: 87 },
      { name: "Sánchez", pos: "LW", overall: 88 },
      { name: "Vargas", pos: "ST", overall: 83 },
      { name: "Pulgar", pos: "AM", overall: 79 }
    ]
  },

  // ───────── 2021 ─────────
  {
    id: "ca_ar_2021", name: "Argentina", season: "2021", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Emiliano Martínez", pos: "GK", overall: 85 },
      { name: "Molina", pos: "RB", overall: 80 },
      { name: "Romero", pos: "CB", overall: 82 },
      { name: "Otamendi", pos: "CB", overall: 82 },
      { name: "Acuña", pos: "LB", overall: 81 },
      { name: "De Paul", pos: "CM", overall: 85 },
      { name: "Rodrigo De Paul", pos: "CM", overall: 83 },
      { name: "Di María", pos: "RW", overall: 85 },
      { name: "Messi", pos: "AM", overall: 93 },
      { name: "Lautaro Martínez", pos: "ST", overall: 84 },
      { name: "Ángel Correa", pos: "LW", overall: 81 }
    ]
  },
  {
    id: "ca_br_2021", name: "Brasil", season: "2021", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Ederson", pos: "GK", overall: 87 },
      { name: "Danilo", pos: "RB", overall: 80 },
      { name: "Thiago Silva", pos: "CB", overall: 86 },
      { name: "Marquinhos", pos: "CB", overall: 86 },
      { name: "Renan Lodi", pos: "LB", overall: 79 },
      { name: "Casemiro", pos: "CM", overall: 88 },
      { name: "Fred", pos: "CM", overall: 79 },
      { name: "Everton Ribeiro", pos: "RW", overall: 81 },
      { name: "Neymar", pos: "AM", overall: 91 },
      { name: "Gabriel Barbosa", pos: "ST", overall: 80 },
      { name: "Richarlison", pos: "LW", overall: 83 }
    ]
  },
  {
    id: "ca_co_2021", name: "Colômbia", season: "2021", country: "CO", flag: "🇨🇴",
    formation: "4-2-3-1",
    players: [
      { name: "Ospina", pos: "GK", overall: 83 },
      { name: "Muñoz", pos: "RB", overall: 79 },
      { name: "Dávinson Sánchez", pos: "CB", overall: 80 },
      { name: "Cuesta", pos: "CB", overall: 77 },
      { name: "Mojica", pos: "LB", overall: 78 },
      { name: "Uribe", pos: "CM", overall: 79 },
      { name: "Wilmar Barrios", pos: "CM", overall: 79 },
      { name: "Cuadrado", pos: "RW", overall: 83 },
      { name: "James Rodríguez", pos: "AM", overall: 86 },
      { name: "Falcao", pos: "ST", overall: 82 },
      { name: "Borré", pos: "LW", overall: 80 }
    ]
  },
  {
    id: "ca_pe_2021", name: "Peru", season: "2021", country: "PE", flag: "🇵🇪",
    formation: "4-2-3-1",
    players: [
      { name: "Gallese", pos: "GK", overall: 82 },
      { name: "Advíncula", pos: "RB", overall: 80 },
      { name: "Zambrano", pos: "CB", overall: 78 },
      { name: "Abram", pos: "CB", overall: 78 },
      { name: "Trauco", pos: "LB", overall: 78 },
      { name: "Tapia", pos: "CM", overall: 80 },
      { name: "Yotún", pos: "CM", overall: 79 },
      { name: "Carrillo", pos: "RW", overall: 80 },
      { name: "Cueva", pos: "AM", overall: 81 },
      { name: "Lapadula", pos: "ST", overall: 81 },
      { name: "Peña", pos: "LW", overall: 76 }
    ]
  },

  // ───────── 2024 ─────────
  {
    id: "ca_ar_2024", name: "Argentina", season: "2024", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Emiliano Martínez", pos: "GK", overall: 87 },
      { name: "Molina", pos: "RB", overall: 81 },
      { name: "Cristian Romero", pos: "CB", overall: 85 },
      { name: "Otamendi", pos: "CB", overall: 82 },
      { name: "Nicolás Tagliafico", pos: "LB", overall: 81 },
      { name: "Enzo Fernández", pos: "CM", overall: 85 },
      { name: "Rodrigo De Paul", pos: "CM", overall: 84 },
      { name: "Julián Álvarez", pos: "RW", overall: 86 },
      { name: "Messi", pos: "AM", overall: 90 },
      { name: "Lautaro Martínez", pos: "ST", overall: 88 },
      { name: "Ángel Di María", pos: "LW", overall: 82 }
    ]
  },
  {
    id: "ca_co_2024", name: "Colômbia", season: "2024", country: "CO", flag: "🇨🇴",
    formation: "4-3-3",
    players: [
      { name: "Vargas", pos: "GK", overall: 82 },
      { name: "Daniel Muñoz", pos: "RB", overall: 81 },
      { name: "Dávinson Sánchez", pos: "CB", overall: 80 },
      { name: "Cuesta", pos: "CB", overall: 78 },
      { name: "Johan Mojica", pos: "LB", overall: 78 },
      { name: "Ríos", pos: "CM", overall: 80 },
      { name: "Kevin Castaño", pos: "CM", overall: 78 },
      { name: "Cuadrado", pos: "RW", overall: 81 },
      { name: "James Rodríguez", pos: "AM", overall: 87 },
      { name: "Jhon Córdoba", pos: "ST", overall: 80 },
      { name: "Luis Díaz", pos: "LW", overall: 87 }
    ]
  },
  {
    id: "ca_uy_2024", name: "Uruguai", season: "2024", country: "UY", flag: "🇺🇾",
    formation: "4-3-3",
    players: [
      { name: "Rochet", pos: "GK", overall: 82 },
      { name: "Nández", pos: "RB", overall: 80 },
      { name: "Ronald Araújo", pos: "CB", overall: 85 },
      { name: "José María Giménez", pos: "CB", overall: 83 },
      { name: "Mathías Olivera", pos: "LB", overall: 80 },
      { name: "Federico Valverde", pos: "CM", overall: 88 },
      { name: "Manuel Ugarte", pos: "CM", overall: 82 },
      { name: "Facundo Pellistri", pos: "RW", overall: 79 },
      { name: "Giorgian de Arrascaeta", pos: "AM", overall: 84 },
      { name: "Darwin Núñez", pos: "ST", overall: 84 },
      { name: "Cavani", pos: "LW", overall: 80 }
    ]
  },
  {
    id: "ca_ca_2024", name: "Canadá", season: "2024", country: "CA", flag: "🇨🇦",
    formation: "4-3-3",
    players: [
      { name: "Borjan", pos: "GK", overall: 79 },
      { name: "Alistair Johnston", pos: "RB", overall: 79 },
      { name: "Kamal Miller", pos: "CB", overall: 77 },
      { name: "Moise Bombito", pos: "CB", overall: 77 },
      { name: "Sam Adekugbe", pos: "LB", overall: 77 },
      { name: "Stephen Eustáquio", pos: "CM", overall: 80 },
      { name: "Ismaël Koné", pos: "CM", overall: 78 },
      { name: "Tajon Buchanan", pos: "RW", overall: 79 },
      { name: "Jonathan David", pos: "AM", overall: 83 },
      { name: "Cyle Larin", pos: "ST", overall: 78 },
      { name: "Junior Hoilett", pos: "LW", overall: 76 }
    ]
  }
];
