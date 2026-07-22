
// ═══════════════════════════════════════════════════════════════
// MUNDIAL DE CLUBES — campeões e finalistas de 1960 a 2025
// (Copa Intercontinental 1960-2004 + Copa Mundial de Clubes FIFA 2005+)
// ═══════════════════════════════════════════════════════════════
const MUNDIAL_TEAMS = [

  // ───────── 1960 ─────────
  {
    id: "mun_realmadrid_1960", name: "Real Madrid", season: "1960", country: "ES", flag: "🇪🇸",
    formation: "4-2-4",
    players: [
      { name: "Domínguez", pos: "GK", overall: 83 },
      { name: "Marquitos", pos: "RB", overall: 76 },
      { name: "Santamaría", pos: "CB", overall: 86 },
      { name: "Pachín", pos: "LB", overall: 78 },
      { name: "Zárraga", pos: "CM", overall: 76 },
      { name: "Vidal", pos: "CM", overall: 76 },
      { name: "Di Stéfano", pos: "AM", overall: 96 },
      { name: "Puskás", pos: "ST", overall: 95 },
      { name: "Del Sol", pos: "CM", overall: 85 },
      { name: "Canário", pos: "RW", overall: 81 },
      { name: "Gento", pos: "LW", overall: 89 }
    ]
  },
  {
    id: "mun_penarol_1960", name: "Peñarol", season: "1960", country: "UY", flag: "🇺🇾",
    formation: "4-2-4",
    players: [
      { name: "Máspoli", pos: "GK", overall: 84 },
      { name: "Martínez", pos: "RB", overall: 77 },
      { name: "Matosas", pos: "CB", overall: 79 },
      { name: "Zapirain", pos: "CB", overall: 76 },
      { name: "Manicera", pos: "LB", overall: 75 },
      { name: "Cantera", pos: "CM", overall: 77 },
      { name: "Rodríguez Andrade", pos: "CM", overall: 78 },
      { name: "Cubilla", pos: "RW", overall: 80 },
      { name: "Sasía", pos: "CM", overall: 76 },
      { name: "Spencer", pos: "ST", overall: 87 },
      { name: "Joya", pos: "LW", overall: 79 }
    ]
  },

  // ───────── 1961 ─────────
  {
    id: "mun_penarol_1961", name: "Peñarol", season: "1961", country: "UY", flag: "🇺🇾",
    formation: "4-2-4",
    players: [
      { name: "Máspoli", pos: "GK", overall: 84 },
      { name: "Martínez", pos: "RB", overall: 77 },
      { name: "Matosas", pos: "CB", overall: 80 },
      { name: "Zapirain", pos: "CB", overall: 77 },
      { name: "Manicera", pos: "LB", overall: 76 },
      { name: "Cantera", pos: "CM", overall: 78 },
      { name: "Rodríguez Andrade", pos: "CM", overall: 79 },
      { name: "Cubilla", pos: "RW", overall: 82 },
      { name: "Sasía", pos: "CM", overall: 77 },
      { name: "Spencer", pos: "ST", overall: 88 },
      { name: "Joya", pos: "LW", overall: 80 }
    ]
  },
  {
    id: "mun_benfica_1961", name: "Benfica", season: "1961", country: "PT", flag: "🇵🇹",
    formation: "4-2-4",
    players: [
      { name: "Costa Pereira", pos: "GK", overall: 84 },
      { name: "Ângelo", pos: "RB", overall: 76 },
      { name: "Germano", pos: "CB", overall: 82 },
      { name: "Cavém", pos: "CB", overall: 77 },
      { name: "Fernando Cruz", pos: "LB", overall: 76 },
      { name: "Coluna", pos: "CM", overall: 88 },
      { name: "Neto", pos: "CM", overall: 78 },
      { name: "José Augusto", pos: "RW", overall: 82 },
      { name: "José Águas", pos: "ST", overall: 85 },
      { name: "Eusébio", pos: "ST", overall: 87 },
      { name: "António Simões", pos: "LW", overall: 80 }
    ]
  },

  // ───────── 1962 ─────────
  {
    id: "mun_santos_1962", name: "Santos", season: "1962", country: "BR", flag: "🇧🇷",
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
    id: "mun_benfica_1962", name: "Benfica", season: "1962", country: "PT", flag: "🇵🇹",
    formation: "4-2-4",
    players: [
      { name: "Costa Pereira", pos: "GK", overall: 85 },
      { name: "João Cruz", pos: "RB", overall: 77 },
      { name: "Germano", pos: "CB", overall: 83 },
      { name: "Raúl", pos: "CB", overall: 78 },
      { name: "Fernando Cruz", pos: "LB", overall: 77 },
      { name: "Coluna", pos: "CM", overall: 89 },
      { name: "Cavém", pos: "CM", overall: 78 },
      { name: "José Augusto", pos: "RW", overall: 82 },
      { name: "José Águas", pos: "ST", overall: 84 },
      { name: "Eusébio", pos: "ST", overall: 91 },
      { name: "António Simões", pos: "LW", overall: 82 }
    ]
  },

  // ───────── 1963 ─────────
  {
    id: "mun_santos_1963", name: "Santos", season: "1963", country: "BR", flag: "🇧🇷",
    formation: "4-2-4",
    players: [
      { name: "Gilmar", pos: "GK", overall: 90 },
      { name: "Lima", pos: "RB", overall: 78 },
      { name: "Mauro Ramos", pos: "CB", overall: 85 },
      { name: "Ito", pos: "CB", overall: 79 },
      { name: "Calvet", pos: "LB", overall: 76 },
      { name: "Zito", pos: "CM", overall: 88 },
      { name: "Mengálvio", pos: "CM", overall: 84 },
      { name: "Dorval", pos: "RW", overall: 81 },
      { name: "Coutinho", pos: "AM", overall: 86 },
      { name: "Pepe", pos: "LW", overall: 88 },
      { name: "Pelé", pos: "CF", overall: 99 }
    ]
  },
  {
    id: "mun_milan_1963", name: "Milan", season: "1963", country: "IT", flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Ghezzi", pos: "GK", overall: 82 },
      { name: "David", pos: "RB", overall: 76 },
      { name: "Cesare Maldini", pos: "CB", overall: 83 },
      { name: "Trebbi", pos: "CB", overall: 75 },
      { name: "Pelagalli", pos: "LB", overall: 75 },
      { name: "Trapattoni", pos: "CM", overall: 84 },
      { name: "Benítez", pos: "CM", overall: 76 },
      { name: "Rivera", pos: "AM", overall: 87 },
      { name: "Mora", pos: "RW", overall: 79 },
      { name: "Altafini", pos: "ST", overall: 88 },
      { name: "Amarildo", pos: "LW", overall: 82 }
    ]
  },

  // ───────── 1964 ─────────
  {
    id: "mun_inter_1964", name: "Internazionale", season: "1964", country: "IT", flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Sarti", pos: "GK", overall: 87 },
      { name: "Burgnich", pos: "RB", overall: 85 },
      { name: "Guarneri", pos: "CB", overall: 82 },
      { name: "Picchi", pos: "CB", overall: 84 },
      { name: "Facchetti", pos: "LB", overall: 88 },
      { name: "Bedin", pos: "CM", overall: 78 },
      { name: "Suárez", pos: "CM", overall: 88 },
      { name: "Jair", pos: "RW", overall: 82 },
      { name: "Mazzola", pos: "ST", overall: 89 },
      { name: "Peiró", pos: "ST", overall: 80 },
      { name: "Corso", pos: "LW", overall: 85 }
    ]
  },
  {
    id: "mun_independiente_1964", name: "Independiente", season: "1964", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Santoro", pos: "GK", overall: 78 },
      { name: "Prado", pos: "RB", overall: 75 },
      { name: "Roberto Ferreiro", pos: "CB", overall: 77 },
      { name: "Marcelo Pagani", pos: "CB", overall: 75 },
      { name: "Rodolfo Fischer", pos: "LB", overall: 75 },
      { name: "Raúl Bernao", pos: "CM", overall: 77 },
      { name: "Rodolfo Rodríguez", pos: "CM", overall: 75 },
      { name: "Oscar Mas", pos: "RW", overall: 80 },
      { name: "Raúl Savoy", pos: "ST", overall: 80 },
      { name: "Miguel Ángel Rendo", pos: "ST", overall: 76 },
      { name: "Ricardo Pavoni", pos: "LW", overall: 75 }
    ]
  },

  // ───────── 1965 ─────────
  {
    id: "mun_inter_1965", name: "Internazionale", season: "1965", country: "IT", flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Sarti", pos: "GK", overall: 87 },
      { name: "Burgnich", pos: "RB", overall: 86 },
      { name: "Guarneri", pos: "CB", overall: 82 },
      { name: "Picchi", pos: "CB", overall: 85 },
      { name: "Facchetti", pos: "LB", overall: 89 },
      { name: "Bedin", pos: "CM", overall: 78 },
      { name: "Suárez", pos: "CM", overall: 89 },
      { name: "Jair", pos: "RW", overall: 82 },
      { name: "Mazzola", pos: "ST", overall: 90 },
      { name: "Peiró", pos: "ST", overall: 80 },
      { name: "Corso", pos: "LW", overall: 86 }
    ]
  },
  {
    id: "mun_independiente_1965", name: "Independiente", season: "1965", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Santoro", pos: "GK", overall: 79 },
      { name: "Prado", pos: "RB", overall: 76 },
      { name: "Roberto Ferreiro", pos: "CB", overall: 77 },
      { name: "Marcelo Pagani", pos: "CB", overall: 76 },
      { name: "Rodolfo Fischer", pos: "LB", overall: 76 },
      { name: "Raúl Bernao", pos: "CM", overall: 78 },
      { name: "Rodolfo Rodríguez", pos: "CM", overall: 76 },
      { name: "Oscar Mas", pos: "RW", overall: 81 },
      { name: "Raúl Savoy", pos: "ST", overall: 80 },
      { name: "Miguel Ángel Rendo", pos: "ST", overall: 77 },
      { name: "Ricardo Pavoni", pos: "LW", overall: 76 }
    ]
  },

  // ───────── 1966 ─────────
  {
    id: "mun_penarol_1966", name: "Peñarol", season: "1966", country: "UY", flag: "🇺🇾",
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
    id: "mun_realmadrid_1966", name: "Real Madrid", season: "1966", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Betancort", pos: "GK", overall: 82 },
      { name: "Pachín", pos: "RB", overall: 80 },
      { name: "Zoco", pos: "CB", overall: 80 },
      { name: "Sanchís", pos: "CB", overall: 82 },
      { name: "De Felipe", pos: "LB", overall: 78 },
      { name: "Pirri", pos: "CM", overall: 85 },
      { name: "Serena", pos: "CM", overall: 76 },
      { name: "Amancio", pos: "RW", overall: 87 },
      { name: "Grosso", pos: "AM", overall: 81 },
      { name: "Velázquez", pos: "ST", overall: 82 },
      { name: "Gento", pos: "LW", overall: 87 }
    ]
  },

  // ───────── 1967 ─────────
  {
    id: "mun_racing_1967", name: "Racing", season: "1967", country: "AR", flag: "🇦🇷",
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
    id: "mun_celtic_1967", name: "Celtic", season: "1967", country: "SC", flag: "🏴",
    formation: "4-2-4",
    players: [
      { name: "Ronnie Simpson", pos: "GK", overall: 84 },
      { name: "Jim Craig", pos: "RB", overall: 79 },
      { name: "Billy McNeill", pos: "CB", overall: 86 },
      { name: "John Clark", pos: "CB", overall: 78 },
      { name: "Tommy Gemmell", pos: "LB", overall: 84 },
      { name: "Bobby Murdoch", pos: "CM", overall: 86 },
      { name: "Bertie Auld", pos: "CM", overall: 83 },
      { name: "Jimmy Johnstone", pos: "RW", overall: 87 },
      { name: "Willie Wallace", pos: "ST", overall: 82 },
      { name: "Steve Chalmers", pos: "ST", overall: 81 },
      { name: "Bobby Lennox", pos: "LW", overall: 83 }
    ]
  },

  // ───────── 1968 ─────────
  {
    id: "mun_estudiantes_1968", name: "Estudiantes", season: "1968", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Poletti", pos: "GK", overall: 80 },
      { name: "Togneri", pos: "RB", overall: 76 },
      { name: "Aguirre Suárez", pos: "CB", overall: 82 },
      { name: "Medina", pos: "CB", overall: 76 },
      { name: "Eduardo Manera", pos: "LB", overall: 77 },
      { name: "Bilardo", pos: "CM", overall: 79 },
      { name: "Pachamé", pos: "CM", overall: 80 },
      { name: "Malbernat", pos: "CM", overall: 78 },
      { name: "Juan Ramón Verón", pos: "RW", overall: 85 },
      { name: "Conigliaro", pos: "ST", overall: 82 },
      { name: "Domingo Bagnulo", pos: "LW", overall: 76 }
    ]
  },
  {
    id: "mun_manutd_1968", name: "Manchester United", season: "1968", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "Alex Stepney", pos: "GK", overall: 83 },
      { name: "Shay Brennan", pos: "RB", overall: 78 },
      { name: "Bill Foulkes", pos: "CB", overall: 79 },
      { name: "David Sadler", pos: "CB", overall: 80 },
      { name: "Tony Dunne", pos: "LB", overall: 79 },
      { name: "Nobby Stiles", pos: "CM", overall: 82 },
      { name: "Paddy Crerand", pos: "CM", overall: 82 },
      { name: "George Best", pos: "RW", overall: 92 },
      { name: "Bobby Charlton", pos: "AM", overall: 91 },
      { name: "Brian Kidd", pos: "ST", overall: 80 },
      { name: "John Aston", pos: "LW", overall: 78 }
    ]
  },

  // ───────── 1969 ─────────
  {
    id: "mun_milan_1969", name: "Milan", season: "1969", country: "IT", flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Fabio Cudicini", pos: "GK", overall: 84 },
      { name: "Anquilletti", pos: "RB", overall: 77 },
      { name: "Roberto Rosato", pos: "CB", overall: 82 },
      { name: "Schnellinger", pos: "CB", overall: 83 },
      { name: "Malatrasi", pos: "LB", overall: 76 },
      { name: "Trapattoni", pos: "CM", overall: 84 },
      { name: "Lodetti", pos: "CM", overall: 76 },
      { name: "Rivera", pos: "AM", overall: 90 },
      { name: "Hamrin", pos: "RW", overall: 83 },
      { name: "Prati", pos: "ST", overall: 85 },
      { name: "Sormani", pos: "LW", overall: 80 }
    ]
  },
  {
    id: "mun_estudiantes_1969", name: "Estudiantes", season: "1969", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Poletti", pos: "GK", overall: 80 },
      { name: "Togneri", pos: "RB", overall: 77 },
      { name: "Aguirre Suárez", pos: "CB", overall: 83 },
      { name: "Medina", pos: "CB", overall: 76 },
      { name: "Eduardo Manera", pos: "LB", overall: 77 },
      { name: "Bilardo", pos: "CM", overall: 79 },
      { name: "Pachamé", pos: "CM", overall: 80 },
      { name: "Malbernat", pos: "CM", overall: 78 },
      { name: "Juan Ramón Verón", pos: "RW", overall: 86 },
      { name: "Conigliaro", pos: "ST", overall: 82 },
      { name: "Oscar Flores", pos: "LW", overall: 77 }
    ]
  },

  // ───────── 1970 ─────────
  {
    id: "mun_feyenoord_1970", name: "Feyenoord", season: "1970", country: "NL", flag: "🇳🇱",
    formation: "4-3-3",
    players: [
      { name: "Treytel", pos: "GK", overall: 83 },
      { name: "Romeijn", pos: "RB", overall: 76 },
      { name: "Israël", pos: "CB", overall: 83 },
      { name: "Laseroms", pos: "CB", overall: 77 },
      { name: "Jansen", pos: "LB", overall: 80 },
      { name: "Hasil", pos: "CM", overall: 78 },
      { name: "van Hanegem", pos: "CM", overall: 88 },
      { name: "Sanders", pos: "CM", overall: 75 },
      { name: "Wery", pos: "RW", overall: 79 },
      { name: "Kindvall", pos: "ST", overall: 84 },
      { name: "Moulijn", pos: "LW", overall: 83 }
    ]
  },
  {
    id: "mun_estudiantes_1970", name: "Estudiantes", season: "1970", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Poletti", pos: "GK", overall: 80 },
      { name: "Togneri", pos: "RB", overall: 77 },
      { name: "Aguirre Suárez", pos: "CB", overall: 83 },
      { name: "Medina", pos: "CB", overall: 76 },
      { name: "Eduardo Manera", pos: "LB", overall: 77 },
      { name: "Bilardo", pos: "CM", overall: 79 },
      { name: "Pachamé", pos: "CM", overall: 80 },
      { name: "Malbernat", pos: "CM", overall: 78 },
      { name: "Juan Ramón Verón", pos: "RW", overall: 86 },
      { name: "Conigliaro", pos: "ST", overall: 82 },
      { name: "Oscar Flores", pos: "LW", overall: 77 }
    ]
  },

  // ───────── 1971 ─────────
  {
    id: "mun_nacional_uy_1971", name: "Nacional-URU", season: "1971", country: "UY", flag: "🇺🇾",
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
    id: "mun_panathinaikos_1971", name: "Panathinaikos", season: "1971", country: "GR", flag: "🇬🇷",
    formation: "4-3-3",
    players: [
      { name: "Ikonomopoulos", pos: "GK", overall: 80 },
      { name: "Kapsis", pos: "RB", overall: 74 },
      { name: "Eleftherakis", pos: "CB", overall: 76 },
      { name: "Sourpis", pos: "CB", overall: 74 },
      { name: "Vlachos", pos: "LB", overall: 74 },
      { name: "Domazos", pos: "CM", overall: 82 },
      { name: "Kamaras", pos: "CM", overall: 75 },
      { name: "Sotiropoulos", pos: "RW", overall: 75 },
      { name: "Antoniadis", pos: "ST", overall: 83 },
      { name: "Grammos", pos: "ST", overall: 74 },
      { name: "Filakouris", pos: "LW", overall: 74 }
    ]
  },

  // ───────── 1972 ─────────
  {
    id: "mun_ajax_1972", name: "Ajax", season: "1972", country: "NL", flag: "🇳🇱",
    formation: "4-3-3",
    players: [
      { name: "Stuy", pos: "GK", overall: 84 },
      { name: "Suurbier", pos: "RB", overall: 82 },
      { name: "Blankenburg", pos: "CB", overall: 80 },
      { name: "Hulshoff", pos: "CB", overall: 81 },
      { name: "Krol", pos: "LB", overall: 85 },
      { name: "Neeskens", pos: "CM", overall: 90 },
      { name: "Haan", pos: "CM", overall: 84 },
      { name: "Muhren", pos: "CM", overall: 80 },
      { name: "Rep", pos: "RW", overall: 84 },
      { name: "Cruyff", pos: "ST", overall: 96 },
      { name: "Keizer", pos: "LW", overall: 83 }
    ]
  },
  {
    id: "mun_independiente_1972", name: "Independiente", season: "1972", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Santoro", pos: "GK", overall: 79 },
      { name: "Pavoni", pos: "RB", overall: 76 },
      { name: "Roberto Ferreiro", pos: "CB", overall: 78 },
      { name: "Pagani", pos: "CB", overall: 76 },
      { name: "Fischer", pos: "LB", overall: 76 },
      { name: "Bernao", pos: "CM", overall: 78 },
      { name: "Rodolfo Rodríguez", pos: "CM", overall: 76 },
      { name: "Mas", pos: "RW", overall: 81 },
      { name: "Bochini", pos: "AM", overall: 84 },
      { name: "Savoy", pos: "ST", overall: 80 },
      { name: "Infante", pos: "LW", overall: 76 }
    ]
  },

  // ───────── 1973 ─────────
  {
    id: "mun_independiente_1973", name: "Independiente", season: "1973", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Santoro", pos: "GK", overall: 79 },
      { name: "Pavoni", pos: "RB", overall: 76 },
      { name: "Roberto Ferreiro", pos: "CB", overall: 78 },
      { name: "Pagani", pos: "CB", overall: 76 },
      { name: "Fischer", pos: "LB", overall: 76 },
      { name: "Bernao", pos: "CM", overall: 78 },
      { name: "Rodolfo Rodríguez", pos: "CM", overall: 76 },
      { name: "Mas", pos: "RW", overall: 81 },
      { name: "Bochini", pos: "AM", overall: 85 },
      { name: "Savoy", pos: "ST", overall: 80 },
      { name: "Infante", pos: "LW", overall: 76 }
    ]
  },
  {
    id: "mun_juventus_1973", name: "Juventus", season: "1973", country: "IT", flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Zoff", pos: "GK", overall: 88 },
      { name: "Longobucco", pos: "RB", overall: 76 },
      { name: "Morini", pos: "CB", overall: 78 },
      { name: "Marchetti", pos: "CB", overall: 78 },
      { name: "Spinosi", pos: "LB", overall: 78 },
      { name: "Furino", pos: "CM", overall: 79 },
      { name: "Capello", pos: "CM", overall: 82 },
      { name: "Causio", pos: "RW", overall: 83 },
      { name: "Anastasi", pos: "ST", overall: 83 },
      { name: "Altafini", pos: "ST", overall: 82 },
      { name: "Bettega", pos: "LW", overall: 84 }
    ]
  },

  // ───────── 1974 ─────────
  {
    id: "mun_atleticomadrid_1974", name: "Atletico de Madrid", season: "1974", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Miguel Reina", pos: "GK", overall: 82 },
      { name: "Melo", pos: "RB", overall: 76 },
      { name: "Heredia", pos: "CB", overall: 78 },
      { name: "Ovejero", pos: "CB", overall: 76 },
      { name: "Eusebio Ríos", pos: "LB", overall: 78 },
      { name: "Adelardo", pos: "CM", overall: 80 },
      { name: "Irureta", pos: "CM", overall: 78 },
      { name: "Rubén Ayala", pos: "RW", overall: 82 },
      { name: "Luis Aragonés", pos: "ST", overall: 83 },
      { name: "Salcedo", pos: "ST", overall: 77 },
      { name: "Alberto Quique", pos: "LW", overall: 75 }
    ]
  },
  {
    id: "mun_independiente_1974", name: "Independiente", season: "1974", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Santoro", pos: "GK", overall: 79 },
      { name: "Pavoni", pos: "RB", overall: 76 },
      { name: "Roberto Ferreiro", pos: "CB", overall: 78 },
      { name: "Pagani", pos: "CB", overall: 76 },
      { name: "Fischer", pos: "LB", overall: 76 },
      { name: "Bernao", pos: "CM", overall: 78 },
      { name: "Rodolfo Rodríguez", pos: "CM", overall: 76 },
      { name: "Mas", pos: "RW", overall: 81 },
      { name: "Bochini", pos: "AM", overall: 86 },
      { name: "Savoy", pos: "ST", overall: 80 },
      { name: "Infante", pos: "LW", overall: 76 }
    ]
  },

  // ───────── 1976 ─────────
  {
    id: "mun_bayernmunchen_1976", name: "Bayern Munchen", season: "1976", country: "DE", flag: "🇩🇪",
    formation: "4-3-3",
    players: [
      { name: "Maier", pos: "GK", overall: 87 },
      { name: "Andersson", pos: "RB", overall: 76 },
      { name: "Beckenbauer", pos: "CB", overall: 93 },
      { name: "Schwarzenbeck", pos: "CB", overall: 82 },
      { name: "Zobel", pos: "LB", overall: 76 },
      { name: "Hoeneß", pos: "CM", overall: 84 },
      { name: "Roth", pos: "CM", overall: 78 },
      { name: "Kapellmann", pos: "CM", overall: 78 },
      { name: "Rummenigge", pos: "RW", overall: 85 },
      { name: "Müller", pos: "ST", overall: 92 },
      { name: "Torstensson", pos: "LW", overall: 78 }
    ]
  },
  {
    id: "mun_cruzeiro_1976", name: "Cruzeiro", season: "1976", country: "BR", flag: "🇧🇷",
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

  // ───────── 1977 ─────────
  {
    id: "mun_bocajuniors_1977", name: "Boca Juniors", season: "1977", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Gatti", pos: "GK", overall: 85 },
      { name: "Mouzo", pos: "RB", overall: 78 },
      { name: "Tesare", pos: "CB", overall: 79 },
      { name: "Pernía", pos: "CB", overall: 78 },
      { name: "Tarantini", pos: "LB", overall: 82 },
      { name: "Benítez", pos: "CM", overall: 78 },
      { name: "Suñé", pos: "CM", overall: 80 },
      { name: "Zanabria", pos: "CM", overall: 76 },
      { name: "Mastrángelo", pos: "RW", overall: 78 },
      { name: "Veglio", pos: "ST", overall: 79 },
      { name: "Felman", pos: "LW", overall: 77 }
    ]
  },
  {
    id: "mun_borussiamonchengladbach_1977", name: "Borussia Monchengladbach", season: "1977", country: "DE", flag: "🇩🇪",
    formation: "4-3-3",
    players: [
      { name: "Kneib", pos: "GK", overall: 84 },
      { name: "Vogts", pos: "RB", overall: 87 },
      { name: "Hannes", pos: "CB", overall: 78 },
      { name: "Klinkhammer", pos: "CB", overall: 78 },
      { name: "Offermanns", pos: "LB", overall: 77 },
      { name: "Bonhof", pos: "CM", overall: 85 },
      { name: "Wimmer", pos: "CM", overall: 82 },
      { name: "Ringels", pos: "RW", overall: 76 },
      { name: "Simonsen", pos: "LW", overall: 88 },
      { name: "Wohlers", pos: "ST", overall: 79 },
      { name: "Danner", pos: "ST", overall: 76 }
    ]
  },

  // ───────── 1979 ─────────
  {
    id: "mun_olimpia_1979", name: "Olimpia", season: "1979", country: "PY", flag: "🇵🇾",
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
    id: "mun_malmo_1979", name: "Malmo", season: "1979", country: "SE", flag: "🇸🇪",
    formation: "4-3-3",
    players: [
      { name: "Möller", pos: "GK", overall: 79 },
      { name: "Roland Andersson", pos: "RB", overall: 76 },
      { name: "Erlandsson", pos: "CB", overall: 77 },
      { name: "Roy Andersson", pos: "CB", overall: 79 },
      { name: "Magnus Andersson", pos: "LB", overall: 75 },
      { name: "Tapper", pos: "CM", overall: 78 },
      { name: "Jönsson", pos: "CM", overall: 75 },
      { name: "Ljungberg", pos: "RW", overall: 76 },
      { name: "Prytz", pos: "AM", overall: 78 },
      { name: "Hansson", pos: "ST", overall: 77 },
      { name: "Cervin", pos: "LW", overall: 76 }
    ]
  },

  // ───────── 1980 ─────────
  {
    id: "mun_nacional_1980", name: "Nacional", season: "1980", country: "UY", flag: "🇺🇾",
    formation: "4-3-3",
    players: [
      { name: "Rodolfo Rodríguez", pos: "GK", overall: 85 },
      { name: "Bica", pos: "RB", overall: 78 },
      { name: "Victorino", pos: "CB", overall: 78 },
      { name: "Losada", pos: "CB", overall: 77 },
      { name: "Denis Milar", pos: "LB", overall: 76 },
      { name: "Julio Morales", pos: "CM", overall: 79 },
      { name: "Bossio", pos: "CM", overall: 76 },
      { name: "Waldemar Victorino", pos: "RW", overall: 82 },
      { name: "Ramos", pos: "ST", overall: 78 },
      { name: " Striker", pos: "ST", overall: 77 },
      { name: "Zeoli", pos: "LW", overall: 76 }
    ]
  },
  {
    id: "mun_nottinghamforest_1980", name: "Nottingham Forest", season: "1980", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-4-2",
    players: [
      { name: "Peter Shilton", pos: "GK", overall: 88 },
      { name: "Viv Anderson", pos: "RB", overall: 82 },
      { name: "Kenny Burns", pos: "CB", overall: 82 },
      { name: "Larry Lloyd", pos: "CB", overall: 80 },
      { name: "Frank Clark", pos: "LB", overall: 78 },
      { name: "John Robertson", pos: "RW", overall: 85 },
      { name: "John McGovern", pos: "CM", overall: 78 },
      { name: "Ian Bowyer", pos: "CM", overall: 77 },
      { name: "Martin O'Neill", pos: "LW", overall: 79 },
      { name: "Trevor Francis", pos: "ST", overall: 84 },
      { name: "Garry Birtles", pos: "ST", overall: 78 }
    ]
  },

  // ───────── 1981 ─────────
  {
    id: "mun_flamengo_1981", name: "Flamengo", season: "1981", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Raul", pos: "GK", overall: 84 },
      { name: "Leandro", pos: "RB", overall: 86 },
      { name: "Marinho Peres", pos: "CB", overall: 79 },
      { name: "Mozer", pos: "CB", overall: 82 },
      { name: "Júnior", pos: "LB", overall: 88 },
      { name: "Andrade", pos: "CM", overall: 82 },
      { name: "Cerezo", pos: "CM", overall: 86 },
      { name: "Zico", pos: "AM", overall: 96 },
      { name: "Adílio", pos: "RW", overall: 82 },
      { name: "Nunes", pos: "ST", overall: 83 },
      { name: "Tita", pos: "LW", overall: 80 }
    ]
  },
  {
    id: "mun_liverpool_1981", name: "Liverpool", season: "1981", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-4-2",
    players: [
      { name: "Ray Clemence", pos: "GK", overall: 87 },
      { name: "Phil Neal", pos: "RB", overall: 82 },
      { name: "Alan Hansen", pos: "CB", overall: 87 },
      { name: "Phil Thompson", pos: "CB", overall: 81 },
      { name: "Alan Kennedy", pos: "LB", overall: 79 },
      { name: "Sammy Lee", pos: "RM", overall: 78 },
      { name: "Graeme Souness", pos: "CM", overall: 89 },
      { name: "Ray Kennedy", pos: "CM", overall: 81 },
      { name: "Terry McDermott", pos: "LM", overall: 82 },
      { name: "Kenny Dalglish", pos: "ST", overall: 91 },
      { name: "David Johnson", pos: "ST", overall: 79 }
    ]
  },

  // ───────── 1982 ─────────
  {
    id: "mun_penarol_1982", name: "Peñarol", season: "1982", country: "UY", flag: "🇺🇾",
    formation: "4-3-3",
    players: [
      { name: "Álvarez", pos: "GK", overall: 80 },
      { name: "Barrios", pos: "RB", overall: 77 },
      { name: "Morena", pos: "CB", overall: 78 },
      { name: "Bengoechea", pos: "CB", overall: 76 },
      { name: "Herrera", pos: "LB", overall: 76 },
      { name: "Aguerre", pos: "CM", overall: 78 },
      { name: "Bareño", pos: "CM", overall: 76 },
      { name: "Da Silva", pos: "RW", overall: 79 },
      { name: "Techera", pos: "ST", overall: 80 },
      { name: "Ostolaza", pos: "ST", overall: 77 },
      { name: "Barrios II", pos: "LW", overall: 76 }
    ]
  },
  {
    id: "mun_astonvilla_1982", name: "Aston Villa", season: "1982", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-4-2",
    players: [
      { name: "Nigel Spink", pos: "GK", overall: 80 },
      { name: "Kenny Swain", pos: "RB", overall: 77 },
      { name: "Ken McNaught", pos: "CB", overall: 79 },
      { name: "Allan Evans", pos: "CB", overall: 80 },
      { name: "Colin Gibson", pos: "LB", overall: 77 },
      { name: "Des Bremner", pos: "RM", overall: 76 },
      { name: "Dennis Mortimer", pos: "CM", overall: 79 },
      { name: "Gordon Cowans", pos: "CM", overall: 82 },
      { name: "Tony Morley", pos: "LM", overall: 81 },
      { name: "Peter Withe", pos: "ST", overall: 81 },
      { name: "Gary Shaw", pos: "ST", overall: 79 }
    ]
  },

  // ───────── 1983 ─────────
  {
    id: "mun_gremio_1983", name: "Gremio", season: "1983", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Mazaropi", pos: "GK", overall: 82 },
      { name: "Mário Sérgio", pos: "RB", overall: 78 },
      { name: "Hilário", pos: "CB", overall: 79 },
      { name: "Baidek", pos: "CB", overall: 77 },
      { name: "Vantuir", pos: "LB", overall: 77 },
      { name: "Paulo César", pos: "CM", overall: 78 },
      { name: "Tarciso", pos: "CM", overall: 77 },
      { name: "Renato Gaúcho", pos: "RW", overall: 83 },
      { name: "Cláudio Duda", pos: "ST", overall: 79 },
      { name: "Índio", pos: "ST", overall: 78 },
      { name: "Adãozinho", pos: "LW", overall: 79 }
    ]
  },
  {
    id: "mun_hamburgo_1983", name: "Hamburgo", season: "1983", country: "DE", flag: "🇩🇪",
    formation: "4-4-2",
    players: [
      { name: "Uli Stein", pos: "GK", overall: 82 },
      { name: "Manfred Kaltz", pos: "RB", overall: 85 },
      { name: "Ditmar Jakobs", pos: "CB", overall: 80 },
      { name: "Holger Hieronymus", pos: "CB", overall: 78 },
      { name: "Jürgen Groh", pos: "LB", overall: 77 },
      { name: "Thomas von Heesen", pos: "RM", overall: 80 },
      { name: "Felix Magath", pos: "CM", overall: 83 },
      { name: "Wolfgang Rolff", pos: "CM", overall: 78 },
      { name: "Lars Bastrup", pos: "LM", overall: 79 },
      { name: "Horst Hrubesch", pos: "ST", overall: 86 },
      { name: "Jürgen Milewski", pos: "ST", overall: 78 }
    ]
  },

  // ───────── 1984 ─────────
  {
    id: "mun_independiente_1984", name: "Independiente", season: "1984", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Navarro Montoya", pos: "GK", overall: 80 },
      { name: "Pavoni", pos: "RB", overall: 76 },
      { name: "Marangoni", pos: "CB", overall: 77 },
      { name: "Percudani", pos: "CB", overall: 76 },
      { name: "Reynoso", pos: "LB", overall: 76 },
      { name: "Bochini", pos: "AM", overall: 87 },
      { name: "Barrios", pos: "CM", overall: 77 },
      { name: "Klimovicz", pos: "RW", overall: 78 },
      { name: "Percudani II", pos: "ST", overall: 76 },
      { name: "Chumpitaz", pos: "ST", overall: 76 },
      { name: "Sá", pos: "LW", overall: 76 }
    ]
  },
  {
    id: "mun_liverpool_1984", name: "Liverpool", season: "1984", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-4-2",
    players: [
      { name: "Bruce Grobbelaar", pos: "GK", overall: 84 },
      { name: "Phil Neal", pos: "RB", overall: 82 },
      { name: "Mark Lawrenson", pos: "CB", overall: 84 },
      { name: "Alan Hansen", pos: "CB", overall: 87 },
      { name: "Alan Kennedy", pos: "LB", overall: 78 },
      { name: "Ronnie Whelan", pos: "RM", overall: 82 },
      { name: "Graeme Souness", pos: "CM", overall: 89 },
      { name: "Craig Johnston", pos: "CM", overall: 79 },
      { name: "Kenny Dalglish", pos: "LM", overall: 90 },
      { name: "Ian Rush", pos: "ST", overall: 90 },
      { name: "Michael Robinson", pos: "ST", overall: 77 }
    ]
  },

  // ───────── 1985 ─────────
  {
    id: "mun_juventus_1985", name: "Juventus", season: "1985", country: "IT", flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Stefano Tacconi", pos: "GK", overall: 83 },
      { name: "Luciano Favero", pos: "RB", overall: 78 },
      { name: "Sergio Brio", pos: "CB", overall: 80 },
      { name: "Gaetano Scirea", pos: "CB", overall: 90 },
      { name: "Antonio Cabrini", pos: "LB", overall: 85 },
      { name: "Massimo Bonini", pos: "CM", overall: 79 },
      { name: "Marco Tardelli", pos: "CM", overall: 85 },
      { name: "Zbigniew Boniek", pos: "RW", overall: 87 },
      { name: "Michel Platini", pos: "AM", overall: 94 },
      { name: "Paolo Rossi", pos: "ST", overall: 85 },
      { name: "Beniamino Vignola", pos: "LW", overall: 77 }
    ]
  },
  {
    id: "mun_argentinosjuniors_1985", name: "Argentinos Juniors", season: "1985", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Enrique Vidallé", pos: "GK", overall: 80 },
      { name: "José Castro", pos: "RB", overall: 77 },
      { name: "Jorge Olguín", pos: "CB", overall: 79 },
      { name: "Enzo Trossero", pos: "CB", overall: 79 },
      { name: "Sergio Almirón", pos: "LB", overall: 78 },
      { name: "Carlos Ereros", pos: "CM", overall: 77 },
      { name: "Gerardo Otero", pos: "CM", overall: 77 },
      { name: "Ricardo Giusti", pos: "RW", overall: 78 },
      { name: "Claudio Borghi", pos: "AM", overall: 82 },
      { name: "Daniel Passarella", pos: "CB", overall: 88 },
      { name: "Roberto Saporiti", pos: "LW", overall: 76 }
    ]
  },

  // ───────── 1986 ─────────
  {
    id: "mun_riverplate_1986", name: "River Plate", season: "1986", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Alberto Fanego", pos: "GK", overall: 80 },
      { name: "Julio Falcioni", pos: "GK", overall: 79 },
      { name: "Oscar Ruggeri", pos: "CB", overall: 88 },
      { name: "Néstor Gorosito", pos: "CB", overall: 78 },
      { name: "Néstor Fabbri", pos: "LB", overall: 78 },
      { name: "Gabriel Loeschbor", pos: "RB", overall: 77 },
      { name: "Alejandro Montenegro", pos: "CM", overall: 78 },
      { name: "Norberto Alonso", pos: "AM", overall: 84 },
      { name: "Antonio Alzamendi", pos: "ST", overall: 82 },
      { name: "Juan Gilberto Funes", pos: "ST", overall: 82 },
      { name: "Ramón Díaz", pos: "ST", overall: 86 }
    ]
  },
  {
    id: "mun_steauabucaresti_1986", name: "Steaua Bucaresti", season: "1986", country: "RO", flag: "🇷🇴",
    formation: "4-4-2",
    players: [
      { name: "Helmuth Duckadam", pos: "GK", overall: 83 },
      { name: "Ștefan Iovan", pos: "RB", overall: 78 },
      { name: "Miodrag Belodedici", pos: "CB", overall: 84 },
      { name: "Adrian Bumbescu", pos: "CB", overall: 78 },
      { name: "Ilie Bărbulescu", pos: "LB", overall: 77 },
      { name: "Marius Lăcătuș", pos: "RM", overall: 83 },
      { name: "Mihail Majearu", pos: "CM", overall: 77 },
      { name: "Ludovic Năstase", pos: "CM", overall: 77 },
      { name: "Tudorel Stoica", pos: "LM", overall: 79 },
      { name: "Victor Pițurcă", pos: "ST", overall: 81 },
      { name: "Gavril Balint", pos: "ST", overall: 78 }
    ]
  },

  // ───────── 1987 ─────────
  {
    id: "mun_porto_1987", name: "Porto", season: "1987", country: "PT", flag: "🇵🇹",
    formation: "4-3-3",
    players: [
      { name: "Mário Silva", pos: "GK", overall: 79 },
      { name: "João Pinto", pos: "RB", overall: 78 },
      { name: "Eduardo Luís", pos: "CB", overall: 78 },
      { name: "Lima Pereira", pos: "CB", overall: 78 },
      { name: "Inácio", pos: "LB", overall: 80 },
      { name: "André", pos: "CM", overall: 78 },
      { name: "Frasco", pos: "CM", overall: 77 },
      { name: "Sousa", pos: "RW", overall: 78 },
      { name: "Rabah Madjer", pos: "ST", overall: 84 },
      { name: "Fernando Gomes", pos: "ST", overall: 85 },
      { name: "Juary", pos: "LW", overall: 80 }
    ]
  },
  {
    id: "mun_penarol_1987", name: "Peñarol", season: "1987", country: "UY", flag: "🇺🇾",
    formation: "4-3-3",
    players: [
      { name: "Fernando Álvez", pos: "GK", overall: 82 },
      { name: "Barrios", pos: "RB", overall: 77 },
      { name: "Gutiérrez", pos: "CB", overall: 77 },
      { name: "Herrera", pos: "CB", overall: 76 },
      { name: "Larrosa", pos: "LB", overall: 76 },
      { name: "Perdomo", pos: "CM", overall: 77 },
      { name: "Aguerre", pos: "CM", overall: 77 },
      { name: "Da Silva", pos: "RW", overall: 78 },
      { name: "Diego Aguirre", pos: "ST", overall: 79 },
      { name: "Ostolaza", pos: "ST", overall: 77 },
      { name: "Pintos Saldanha", pos: "LW", overall: 76 }
    ]
  },

  // ───────── 1988 ─────────
  {
    id: "mun_nacional_1988", name: "Nacional", season: "1988", country: "UY", flag: "🇺🇾",
    formation: "4-3-3",
    players: [
      { name: "Fernando Álvez", pos: "GK", overall: 81 },
      { name: "Fabián Carini Sr.", pos: "RB", overall: 76 },
      { name: "Diego Aguirre", pos: "CB", overall: 78 },
      { name: "Perdomo", pos: "CB", overall: 76 },
      { name: "Herrera", pos: "LB", overall: 76 },
      { name: "Ostolaza", pos: "CM", overall: 78 },
      { name: "Bengoechea", pos: "CM", overall: 77 },
      { name: "Da Silva", pos: "RW", overall: 78 },
      { name: "Ramos", pos: "ST", overall: 79 },
      { name: "Zeoli", pos: "ST", overall: 77 },
      { name: "Techera", pos: "LW", overall: 78 }
    ]
  },
  {
    id: "mun_psv_1988", name: "PSV", season: "1988", country: "NL", flag: "🇳🇱",
    formation: "4-4-2",
    players: [
      { name: "Hans van Breukelen", pos: "GK", overall: 85 },
      { name: "Berry van Aerle", pos: "RB", overall: 79 },
      { name: "Ronald Koeman", pos: "CB", overall: 89 },
      { name: "Barry van Aerle", pos: "CB", overall: 76 },
      { name: "Jan Heintze", pos: "LB", overall: 79 },
      { name: "Ivan Nielsen", pos: "CB", overall: 78 },
      { name: "Eric Gerets", pos: "RM", overall: 82 },
      { name: "Søren Lerby", pos: "CM", overall: 84 },
      { name: "Wim Kieft", pos: "ST", overall: 84 },
      { name: "Gerald Vanenburg", pos: "LM", overall: 83 },
      { name: "Hans Gillhaus", pos: "ST", overall: 80 }
    ]
  },

  // ───────── 1989 ─────────
  {
    id: "mun_milan_1989", name: "Milan", season: "1989", country: "IT", flag: "🇮🇹",
    formation: "4-4-2",
    players: [
      { name: "Giovanni Galli", pos: "GK", overall: 84 },
      { name: "Mauro Tassotti", pos: "RB", overall: 85 },
      { name: "Alessandro Costacurta", pos: "CB", overall: 87 },
      { name: "Franco Baresi", pos: "CB", overall: 93 },
      { name: "Paolo Maldini", pos: "LB", overall: 91 },
      { name: "Angelo Colombo", pos: "RM", overall: 78 },
      { name: "Carlo Ancelotti", pos: "CM", overall: 85 },
      { name: "Frank Rijkaard", pos: "CM", overall: 89 },
      { name: "Ruud Gullit", pos: "LM", overall: 92 },
      { name: "Marco van Basten", pos: "ST", overall: 94 },
      { name: "Pietro Paolo Virdis", pos: "ST", overall: 79 }
    ]
  },
  {
    id: "mun_atleticonacional_1989", name: "Atletico Nacional", season: "1989", country: "CO", flag: "🇨🇴",
    formation: "4-3-3",
    players: [
      { name: "René Higuita", pos: "GK", overall: 84 },
      { name: "Luis Fernando Herrera", pos: "RB", overall: 77 },
      { name: "Alexis García", pos: "CB", overall: 79 },
      { name: "Jorge Bermúdez", pos: "CB", overall: 78 },
      { name: "Léser", pos: "LB", overall: 76 },
      { name: "Alexis Mendoza", pos: "CM", overall: 78 },
      { name: "Willington Ortiz", pos: "CM", overall: 82 },
      { name: "León Villa", pos: "RW", overall: 77 },
      { name: "Albeiro Usuriaga", pos: "ST", overall: 79 },
      { name: "John Jaime Trellez", pos: "ST", overall: 78 },
      { name: "Andrés Escobar", pos: "LW", overall: 82 }
    ]
  },

  // ───────── 1990 ─────────
  {
    id: "mun_milan_1990", name: "Milan", season: "1990", country: "IT", flag: "🇮🇹",
    formation: "4-4-2",
    players: [
      { name: "Giovanni Galli", pos: "GK", overall: 84 },
      { name: "Mauro Tassotti", pos: "RB", overall: 85 },
      { name: "Alessandro Costacurta", pos: "CB", overall: 87 },
      { name: "Franco Baresi", pos: "CB", overall: 94 },
      { name: "Paolo Maldini", pos: "LB", overall: 92 },
      { name: "Angelo Colombo", pos: "RM", overall: 78 },
      { name: "Carlo Ancelotti", pos: "CM", overall: 85 },
      { name: "Frank Rijkaard", pos: "CM", overall: 90 },
      { name: "Ruud Gullit", pos: "LM", overall: 91 },
      { name: "Marco van Basten", pos: "ST", overall: 95 },
      { name: "Alberigo Evani", pos: "ST", overall: 78 }
    ]
  },
  {
    id: "mun_olimpia_1990", name: "Olimpia", season: "1990", country: "PY", flag: "🇵🇾",
    formation: "4-3-3",
    players: [
      { name: "Roberto Fernández", pos: "GK", overall: 79 },
      { name: "Adán Amarilla", pos: "RB", overall: 76 },
      { name: "Celso Ayala", pos: "CB", overall: 78 },
      { name: "Miguel Sanabria", pos: "CB", overall: 76 },
      { name: "Rogelio Delgado", pos: "LB", overall: 76 },
      { name: "Ever Hugo Almeida", pos: "CM", overall: 76 },
      { name: "Adriano Samaniego", pos: "CM", overall: 77 },
      { name: "Julio César Yegros", pos: "RW", overall: 78 },
      { name: "Raúl Vicente Amarilla", pos: "ST", overall: 82 },
      { name: "Feliciano Ojeda", pos: "ST", overall: 77 },
      { name: "Francisco Arce", pos: "LW", overall: 78 }
    ]
  },

  // ───────── 1991 ─────────
  {
    id: "mun_estrelavermelha_1991", name: "Estrela Vermelha", season: "1991", country: "RS", flag: "🇷🇸",
    formation: "4-3-3",
    players: [
      { name: "Stevan Stojanović", pos: "GK", overall: 82 },
      { name: "Ljubinko Drulović", pos: "RB", overall: 78 },
      { name: "Miodrag Belodedici", pos: "CB", overall: 85 },
      { name: "Refik Šabanadžović", pos: "CB", overall: 78 },
      { name: "Goran Vasilijević", pos: "LB", overall: 76 },
      { name: "Robert Prosinečki", pos: "AM", overall: 87 },
      { name: "Vladimir Jugović", pos: "CM", overall: 84 },
      { name: "Siniša Mihajlović", pos: "CM", overall: 85 },
      { name: "Dragan Stojković", pos: "RW", overall: 87 },
      { name: "Darko Pančev", pos: "ST", overall: 85 },
      { name: "Dejan Savićević", pos: "LW", overall: 88 }
    ]
  },
  {
    id: "mun_colocolo_1991", name: "Colo-Colo", season: "1991", country: "CL", flag: "🇨🇱",
    formation: "4-3-3",
    players: [
      { name: "Adán Godoy", pos: "GK", overall: 80 },
      { name: "Rubén Espinoza", pos: "RB", overall: 76 },
      { name: "Javier Margas", pos: "CB", overall: 79 },
      { name: "Alejandro Zúñiga", pos: "CB", overall: 76 },
      { name: "Ronald Fuentes", pos: "LB", overall: 77 },
      { name: "Marcelo Barticciotto", pos: "CM", overall: 79 },
      { name: "Miguel Ramírez", pos: "CM", overall: 77 },
      { name: "Leonel Herrera", pos: "RW", overall: 78 },
      { name: "Hugo Rubio", pos: "ST", overall: 81 },
      { name: "Esteban Valencia", pos: "ST", overall: 77 },
      { name: "Rubén Martínez", pos: "LW", overall: 76 }
    ]
  },

  // ───────── 1992 ─────────
  {
    id: "mun_saopaulo_1992", name: "São Paulo", season: "1992", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Zetti", pos: "GK", overall: 83 },
      { name: "Jorginho", pos: "RB", overall: 79 },
      { name: "Ronaldão", pos: "CB", overall: 79 },
      { name: "Antônio Carlos", pos: "CB", overall: 78 },
      { name: "Cafu", pos: "LB", overall: 84 },
      { name: "César Sampaio", pos: "CM", overall: 82 },
      { name: "Raí", pos: "AM", overall: 87 },
      { name: "Palhinha", pos: "CM", overall: 79 },
      { name: "Müller", pos: "RW", overall: 83 },
      { name: "Rogério", pos: "ST", overall: 78 },
      { name: "Silas", pos: "LW", overall: 79 }
    ]
  },
  {
    id: "mun_barcelona_1992", name: "Barcelona", season: "1992", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Andoni Zubizarreta", pos: "GK", overall: 87 },
      { name: "Albert Ferrer", pos: "RB", overall: 81 },
      { name: "Ronald Koeman", pos: "CB", overall: 90 },
      { name: "Miguel Ángel Nadal", pos: "CB", overall: 82 },
      { name: "Juan Carlos", pos: "LB", overall: 78 },
      { name: "Pep Guardiola", pos: "CM", overall: 85 },
      { name: "José Mari Bakero", pos: "CM", overall: 83 },
      { name: "Michael Laudrup", pos: "AM", overall: 89 },
      { name: "Txiki Begiristain", pos: "RW", overall: 82 },
      { name: "Julio Salinas", pos: "ST", overall: 81 },
      { name: "Hristo Stoichkov", pos: "LW", overall: 90 }
    ]
  },

  // ───────── 1993 ─────────
  {
    id: "mun_saopaulo_1993", name: "São Paulo", season: "1993", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Zetti", pos: "GK", overall: 83 },
      { name: "Jorginho", pos: "RB", overall: 79 },
      { name: "Ronaldão", pos: "CB", overall: 79 },
      { name: "Adilson Batista", pos: "CB", overall: 77 },
      { name: "Cafu", pos: "LB", overall: 85 },
      { name: "César Sampaio", pos: "CM", overall: 83 },
      { name: "Raí", pos: "AM", overall: 88 },
      { name: "Palhinha", pos: "CM", overall: 79 },
      { name: "Müller", pos: "RW", overall: 84 },
      { name: "Vampeta", pos: "CM", overall: 78 },
      { name: "Toninho Cerezo", pos: "CM", overall: 80 }
    ]
  },
  {
    id: "mun_milan_1993", name: "Milan", season: "1993", country: "IT", flag: "🇮🇹",
    formation: "4-4-2",
    players: [
      { name: "Sebastiano Rossi", pos: "GK", overall: 83 },
      { name: "Mauro Tassotti", pos: "RB", overall: 84 },
      { name: "Alessandro Costacurta", pos: "CB", overall: 87 },
      { name: "Franco Baresi", pos: "CB", overall: 92 },
      { name: "Paolo Maldini", pos: "LB", overall: 92 },
      { name: "Demetrio Albertini", pos: "CM", overall: 85 },
      { name: "Marcel Desailly", pos: "CM", overall: 88 },
      { name: "Zvonimir Boban", pos: "AM", overall: 85 },
      { name: "Brian Laudrup", pos: "RW", overall: 84 },
      { name: "Jean-Pierre Papin", pos: "ST", overall: 87 },
      { name: "Dejan Savićević", pos: "LW", overall: 87 }
    ]
  },

  // ───────── 1994 ─────────
  {
    id: "mun_velezsarsfield_1994", name: "Velez Sarsfield", season: "1994", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "José Luis Chilavert", pos: "GK", overall: 88 },
      { name: "Cristian Díaz", pos: "RB", overall: 78 },
      { name: "Gustavo Zapata", pos: "CB", overall: 78 },
      { name: "Alejandro Domínguez", pos: "CB", overall: 77 },
      { name: "Carlos Bossio", pos: "LB", overall: 76 },
      { name: "Roberto Trotta", pos: "CM", overall: 78 },
      { name: "Omar Asad", pos: "CM", overall: 78 },
      { name: "José Basualdo", pos: "CM", overall: 81 },
      { name: "Julio César Falcioni", pos: "RW", overall: 76 },
      { name: "Gabriel Rodríguez", pos: "ST", overall: 79 },
      { name: "Ricardo Gareca", pos: "LW", overall: 79 }
    ]
  },
  {
    id: "mun_milan_1994b", name: "Milan", season: "1994", country: "IT", flag: "🇮🇹",
    formation: "4-4-2",
    players: [
      { name: "Sebastiano Rossi", pos: "GK", overall: 83 },
      { name: "Mauro Tassotti", pos: "RB", overall: 84 },
      { name: "Alessandro Costacurta", pos: "CB", overall: 87 },
      { name: "Franco Baresi", pos: "CB", overall: 91 },
      { name: "Paolo Maldini", pos: "LB", overall: 93 },
      { name: "Demetrio Albertini", pos: "CM", overall: 86 },
      { name: "Marcel Desailly", pos: "CM", overall: 89 },
      { name: "Zvonimir Boban", pos: "AM", overall: 86 },
      { name: "Dejan Savićević", pos: "RW", overall: 87 },
      { name: "Daniele Massaro", pos: "ST", overall: 80 },
      { name: "Marco Simone", pos: "LW", overall: 79 }
    ]
  },

  // ───────── 1995 ─────────
  {
    id: "mun_ajax_1995", name: "Ajax", season: "1995", country: "NL", flag: "🇳🇱",
    formation: "4-3-3",
    players: [
      { name: "Edwin van der Sar", pos: "GK", overall: 88 },
      { name: "Michael Reiziger", pos: "RB", overall: 82 },
      { name: "Danny Blind", pos: "CB", overall: 82 },
      { name: "Frank de Boer", pos: "CB", overall: 87 },
      { name: "Winston Bogarde", pos: "LB", overall: 79 },
      { name: "Edgar Davids", pos: "CM", overall: 85 },
      { name: "Ronald de Boer", pos: "CM", overall: 84 },
      { name: "Clarence Seedorf", pos: "AM", overall: 85 },
      { name: "Finidi George", pos: "RW", overall: 82 },
      { name: "Patrick Kluivert", pos: "ST", overall: 86 },
      { name: "Marc Overmars", pos: "LW", overall: 85 }
    ]
  },
  {
    id: "mun_gremio_1995", name: "Gremio", season: "1995", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Danrley", pos: "GK", overall: 79 },
      { name: "Paulo Nunes", pos: "RB", overall: 79 },
      { name: "Cléber", pos: "CB", overall: 77 },
      { name: "Adilson Batista", pos: "CB", overall: 77 },
      { name: "Sávio", pos: "LB", overall: 78 },
      { name: "Élton", pos: "CM", overall: 78 },
      { name: "Ávalos", pos: "CM", overall: 77 },
      { name: "Carlos Miguel", pos: "RW", overall: 78 },
      { name: "Índio", pos: "ST", overall: 78 },
      { name: "Paulo Nunes II", pos: "ST", overall: 79 },
      { name: "Roberto Cavalo", pos: "LW", overall: 77 }
    ]
  },

  // ───────── 1996 ─────────
  {
    id: "mun_juventus_1996", name: "Juventus", season: "1996", country: "IT", flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Angelo Peruzzi", pos: "GK", overall: 85 },
      { name: "Moreno Torricelli", pos: "RB", overall: 79 },
      { name: "Ciro Ferrara", pos: "CB", overall: 84 },
      { name: "Sergio Porrini", pos: "CB", overall: 78 },
      { name: "Gianluca Pessotto", pos: "LB", overall: 79 },
      { name: "Didier Deschamps", pos: "CM", overall: 87 },
      { name: "Antonio Conte", pos: "CM", overall: 84 },
      { name: "Zinedine Zidane", pos: "AM", overall: 92 },
      { name: "Alessandro Del Piero", pos: "RW", overall: 89 },
      { name: "Fabrizio Ravanelli", pos: "ST", overall: 84 },
      { name: "Vladimir Jugović", pos: "LW", overall: 82 }
    ]
  },
  {
    id: "mun_riverplate_1996", name: "River Plate", season: "1996", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Germán Burgos", pos: "GK", overall: 82 },
      { name: "Roberto Ayala", pos: "CB", overall: 87 },
      { name: "Matías Almeyda", pos: "CM", overall: 82 },
      { name: "Nelson Vivas", pos: "RB", overall: 80 },
      { name: "Francescoli Jr", pos: "LB", overall: 77 },
      { name: "Leonardo Astrada", pos: "CM", overall: 79 },
      { name: "Enzo Francescoli", pos: "AM", overall: 88 },
      { name: "Ariel Ortega", pos: "RW", overall: 87 },
      { name: "Marcelo Salas", pos: "ST", overall: 87 },
      { name: "Hernán Crespo", pos: "ST", overall: 84 },
      { name: "Juan Pablo Sorín", pos: "LW", overall: 82 }
    ]
  },

  // ───────── 1997 ─────────
  {
    id: "mun_borussiadortmund_1997", name: "Borussia Dortmund", season: "1997", country: "DE", flag: "🇩🇪",
    formation: "4-4-2",
    players: [
      { name: "Stefan Klos", pos: "GK", overall: 82 },
      { name: "Jürgen Kohler", pos: "CB", overall: 85 },
      { name: "Julio César", pos: "CB", overall: 79 },
      { name: "Stefan Reuter", pos: "RB", overall: 81 },
      { name: "Dedê", pos: "LB", overall: 80 },
      { name: "Paul Lambert", pos: "CM", overall: 81 },
      { name: "Matthias Sammer", pos: "CM", overall: 88 },
      { name: "Andreas Möller", pos: "RM", overall: 84 },
      { name: "Karl-Heinz Riedle", pos: "ST", overall: 82 },
      { name: "Stéphane Chapuisat", pos: "ST", overall: 82 },
      { name: "Lars Ricken", pos: "LM", overall: 80 }
    ]
  },
  {
    id: "mun_cruzeiro_1997", name: "Cruzeiro", season: "1997", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Dida", pos: "GK", overall: 83 },
      { name: "Cafu", pos: "RB", overall: 85 },
      { name: "Vampeta", pos: "CM", overall: 79 },
      { name: "Ronaldo Guiaro", pos: "CB", overall: 77 },
      { name: "Léo", pos: "LB", overall: 77 },
      { name: "Marques", pos: "CM", overall: 77 },
      { name: "Alex", pos: "AM", overall: 83 },
      { name: "Ricardinho", pos: "RW", overall: 82 },
      { name: "Robson", pos: "ST", overall: 79 },
      { name: "Edmundo", pos: "ST", overall: 85 },
      { name: "Ronaldão", pos: "LW", overall: 79 }
    ]
  },

  // ───────── 1998 ─────────
  {
    id: "mun_realmadrid_1998", name: "Real Madrid", season: "1998", country: "ES", flag: "🇪🇸",
    formation: "4-4-2",
    players: [
      { name: "Bodo Illgner", pos: "GK", overall: 84 },
      { name: "Christian Panucci", pos: "RB", overall: 83 },
      { name: "Fernando Hierro", pos: "CB", overall: 89 },
      { name: "Manuel Sanchís", pos: "CB", overall: 82 },
      { name: "Roberto Carlos", pos: "LB", overall: 89 },
      { name: "Fernando Redondo", pos: "CM", overall: 88 },
      { name: "Clarence Seedorf", pos: "CM", overall: 86 },
      { name: "Raúl", pos: "RW", overall: 90 },
      { name: "Predrag Mijatović", pos: "ST", overall: 85 },
      { name: "Davor Šuker", pos: "ST", overall: 86 },
      { name: "Guti", pos: "LW", overall: 82 }
    ]
  },
  {
    id: "mun_vascodagama_1998", name: "Vasco da Gama", season: "1998", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Carlos Germano", pos: "GK", overall: 79 },
      { name: "Odvan", pos: "RB", overall: 79 },
      { name: "Silvio Luís", pos: "CB", overall: 78 },
      { name: "Marcelo Vitto", pos: "CB", overall: 78 },
      { name: "Wagner", pos: "LB", overall: 77 },
      { name: "Juninho Pernambucano", pos: "CM", overall: 84 },
      { name: "Ramon", pos: "CM", overall: 79 },
      { name: "Donizete", pos: "RW", overall: 80 },
      { name: "Edmundo", pos: "ST", overall: 86 },
      { name: "Romário", pos: "ST", overall: 92 },
      { name: "Viola", pos: "LW", overall: 79 }
    ]
  },

  // ───────── 1999 ─────────
  {
    id: "mun_manchesterunited_1999", name: "Manchester United", season: "1999", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-4-2",
    players: [
      { name: "Peter Schmeichel", pos: "GK", overall: 90 },
      { name: "Gary Neville", pos: "RB", overall: 84 },
      { name: "Jaap Stam", pos: "CB", overall: 88 },
      { name: "Ronny Johnsen", pos: "CB", overall: 81 },
      { name: "Denis Irwin", pos: "LB", overall: 82 },
      { name: "David Beckham", pos: "RM", overall: 89 },
      { name: "Roy Keane", pos: "CM", overall: 89 },
      { name: "Paul Scholes", pos: "CM", overall: 87 },
      { name: "Ryan Giggs", pos: "LM", overall: 88 },
      { name: "Dwight Yorke", pos: "ST", overall: 86 },
      { name: "Andy Cole", pos: "ST", overall: 85 }
    ]
  },
  {
    id: "mun_palmeiras_1999", name: "Palmeiras", season: "1999", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Marcos", pos: "GK", overall: 87 },
      { name: "Arce", pos: "RB", overall: 79 },
      { name: "Júnior", pos: "CB", overall: 78 },
      { name: "Galeano", pos: "CB", overall: 78 },
      { name: "Cléber", pos: "LB", overall: 78 },
      { name: "Zinho", pos: "CM", overall: 82 },
      { name: "César Sampaio", pos: "CM", overall: 82 },
      { name: "Alex", pos: "AM", overall: 84 },
      { name: "Euller", pos: "RW", overall: 80 },
      { name: "Oséas", pos: "ST", overall: 78 },
      { name: "Rincón", pos: "CM", overall: 82 }
    ]
  },

  // ───────── 2000 ─────────
  {
    id: "mun_bocajuniors_2000", name: "Boca Juniors", season: "2000", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Óscar Córdoba", pos: "GK", overall: 84 },
      { name: "José Basualdo", pos: "CM", overall: 79 },
      { name: "Rolando Schiavi", pos: "CB", overall: 80 },
      { name: "Nicolás Burdisso", pos: "CB", overall: 80 },
      { name: "Sebastián Battaglia", pos: "CM", overall: 79 },
      { name: "Antonio Barijho", pos: "ST", overall: 79 },
      { name: "Marcelo Delgado", pos: "RW", overall: 79 },
      { name: "Juan Román Riquelme", pos: "AM", overall: 89 },
      { name: "Guillermo Barros Schelotto", pos: "RW", overall: 82 },
      { name: "Martín Palermo", pos: "ST", overall: 84 },
      { name: "Walter Samuel", pos: "CB", overall: 85 }
    ]
  },
  {
    id: "mun_realmadrid_2000", name: "Real Madrid", season: "2000", country: "ES", flag: "🇪🇸",
    formation: "4-4-2",
    players: [
      { name: "Iker Casillas", pos: "GK", overall: 88 },
      { name: "Míchel Salgado", pos: "RB", overall: 83 },
      { name: "Fernando Hierro", pos: "CB", overall: 88 },
      { name: "Iván Campo", pos: "CB", overall: 80 },
      { name: "Roberto Carlos", pos: "LB", overall: 89 },
      { name: "Steve McManaman", pos: "RM", overall: 83 },
      { name: "Redondo", pos: "CM", overall: 86 },
      { name: "Sávio", pos: "LM", overall: 82 },
      { name: "Raúl", pos: "ST", overall: 91 },
      { name: "Fernando Morientes", pos: "ST", overall: 86 },
      { name: "Guti", pos: "AM", overall: 84 }
    ]
  },
  {
    id: "mun_necaxa_2000", name: "Necaxa", season: "2000", country: "MX", flag: "🇲🇽",
    formation: "4-4-2",
    players: [
      { name: "Óscar Pérez", pos: "GK", overall: 82 },
      { name: "Duilio Davino", pos: "RB", overall: 77 },
      { name: "Mario Méndez", pos: "CB", overall: 76 },
      { name: "Ricardo Peláez", pos: "CB", overall: 76 },
      { name: "Ricardo Osorio", pos: "LB", overall: 78 },
      { name: "Sergio Bueno", pos: "CM", overall: 76 },
      { name: "Alfredo Tena Jr.", pos: "CM", overall: 76 },
      { name: "Ariel Graziani", pos: "RW", overall: 78 },
      { name: "Cuauhtémoc Blanco", pos: "AM", overall: 84 },
      { name: "Marcelino Bernal", pos: "ST", overall: 77 },
      { name: "Jaime Ordiales", pos: "LW", overall: 76 }
    ]
  },
  {
    id: "mun_corinthians_2000", name: "Corinthians", season: "2000", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Dida", pos: "GK", overall: 85 },
      { name: "Fábio Luciano", pos: "RB", overall: 78 },
      { name: "Rogério", pos: "CB", overall: 78 },
      { name: "Índio", pos: "CB", overall: 77 },
      { name: "Cristian", pos: "LB", overall: 78 },
      { name: "Vampeta", pos: "CM", overall: 81 },
      { name: "Fábio Bilica", pos: "CM", overall: 77 },
      { name: "Kléberson", pos: "RW", overall: 81 },
      { name: "Marcelinho Carioca", pos: "AM", overall: 84 },
      { name: "Edilson", pos: "ST", overall: 80 },
      { name: "Luizão", pos: "ST", overall: 81 }
    ]
  },
  {
    id: "mun_vascodagama_2000", name: "Vasco da Gama", season: "2000", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Helton", pos: "GK", overall: 81 },
      { name: "Zé Maria", pos: "RB", overall: 78 },
      { name: "Gonçalves", pos: "CB", overall: 78 },
      { name: "Odvan", pos: "CB", overall: 79 },
      { name: "André Luiz", pos: "LB", overall: 78 },
      { name: "Juninho Pernambucano", pos: "CM", overall: 86 },
      { name: "Pedrinho", pos: "CM", overall: 78 },
      { name: "Ramon", pos: "RW", overall: 80 },
      { name: "Edmundo", pos: "AM", overall: 86 },
      { name: "Romário", pos: "ST", overall: 90 },
      { name: "Viola", pos: "LW", overall: 79 }
    ]
  },

  // ───────── 2001 ─────────
  {
    id: "mun_bayerndemunique_2001", name: "Bayern de Munique", season: "2001", country: "DE", flag: "🇩🇪",
    formation: "4-4-2",
    players: [
      { name: "Oliver Kahn", pos: "GK", overall: 91 },
      { name: "Willy Sagnol", pos: "RB", overall: 81 },
      { name: "Samuel Kuffour", pos: "CB", overall: 81 },
      { name: "Thomas Linke", pos: "CB", overall: 79 },
      { name: "Bixente Lizarazu", pos: "LB", overall: 84 },
      { name: "Mehmet Scholl", pos: "RM", overall: 83 },
      { name: "Stefan Effenberg", pos: "CM", overall: 86 },
      { name: "Jens Jeremies", pos: "CM", overall: 79 },
      { name: "Hasan Salihamidžić", pos: "LM", overall: 81 },
      { name: "Giovane Élber", pos: "ST", overall: 85 },
      { name: "Carsten Jancker", pos: "ST", overall: 80 }
    ]
  },
  {
    id: "mun_bocajuniors_2001", name: "Boca Juniors", season: "2001", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Óscar Córdoba", pos: "GK", overall: 84 },
      { name: "Miguel Ibarra", pos: "RB", overall: 77 },
      { name: "Rolando Schiavi", pos: "CB", overall: 80 },
      { name: "Nicolás Burdisso", pos: "CB", overall: 81 },
      { name: "César La Paglia", pos: "LB", overall: 77 },
      { name: "Cristian Traverso", pos: "CM", overall: 78 },
      { name: "Sebastián Battaglia", pos: "CM", overall: 79 },
      { name: "Juan Román Riquelme", pos: "AM", overall: 90 },
      { name: "Guillermo Barros Schelotto", pos: "RW", overall: 83 },
      { name: "Martín Palermo", pos: "ST", overall: 84 },
      { name: "Marcelo Delgado", pos: "LW", overall: 80 }
    ]
  },

  // ───────── 2002 ─────────
  {
    id: "mun_realmadrid_2002", name: "Real Madrid", season: "2002", country: "ES", flag: "🇪🇸",
    formation: "4-4-2",
    players: [
      { name: "Iker Casillas", pos: "GK", overall: 89 },
      { name: "Míchel Salgado", pos: "RB", overall: 83 },
      { name: "Fernando Hierro", pos: "CB", overall: 87 },
      { name: "Iván Helguera", pos: "CB", overall: 82 },
      { name: "Roberto Carlos", pos: "LB", overall: 89 },
      { name: "Luís Figo", pos: "RM", overall: 91 },
      { name: "Claude Makélélé", pos: "CM", overall: 86 },
      { name: "Zinedine Zidane", pos: "LM", overall: 94 },
      { name: "Raúl", pos: "ST", overall: 91 },
      { name: "Fernando Morientes", pos: "ST", overall: 86 },
      { name: "Guti", pos: "AM", overall: 84 }
    ]
  },
  {
    id: "mun_olimpia_2002", name: "Olimpia", season: "2002", country: "PY", flag: "🇵🇾",
    formation: "4-3-3",
    players: [
      { name: "Justo Villar", pos: "GK", overall: 83 },
      { name: "Julio Manzur", pos: "RB", overall: 77 },
      { name: "Celso Ayala", pos: "CB", overall: 80 },
      { name: "Denis Caniza", pos: "LB", overall: 79 },
      { name: "Carlos Gamarra", pos: "CB", overall: 82 },
      { name: "Aldo Bobadilla", pos: "CM", overall: 77 },
      { name: "Sergio Aquino", pos: "CM", overall: 78 },
      { name: "Robert Acuña", pos: "RW", overall: 78 },
      { name: "José Cardozo", pos: "ST", overall: 84 },
      { name: "Jorge Campos", pos: "ST", overall: 77 },
      { name: "Julio dos Santos", pos: "LW", overall: 79 }
    ]
  },

  // ───────── 2003 ─────────
  {
    id: "mun_bocajuniors_2003", name: "Boca Juniors", season: "2003", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Roberto Abbondanzieri", pos: "GK", overall: 85 },
      { name: "Rolando Schiavi", pos: "CB", overall: 81 },
      { name: "Nicolás Burdisso", pos: "CB", overall: 82 },
      { name: "Cristian Cellay", pos: "LB", overall: 77 },
      { name: "Diego Cagna", pos: "RB", overall: 78 },
      { name: "Cristian Traverso", pos: "CM", overall: 78 },
      { name: "Fabián Vargas", pos: "CM", overall: 78 },
      { name: "Juan Román Riquelme", pos: "AM", overall: 90 },
      { name: "Guillermo Barros Schelotto", pos: "RW", overall: 83 },
      { name: "Carlos Tevez", pos: "ST", overall: 86 },
      { name: "Marcelo Delgado", pos: "LW", overall: 80 }
    ]
  },
  {
    id: "mun_milan_2003", name: "Milan", season: "2003", country: "IT", flag: "🇮🇹",
    formation: "4-4-2",
    players: [
      { name: "Dida", pos: "GK", overall: 87 },
      { name: "Cafu", pos: "RB", overall: 85 },
      { name: "Alessandro Nesta", pos: "CB", overall: 90 },
      { name: "Paolo Maldini", pos: "CB", overall: 89 },
      { name: "Kakhaber Kaladze", pos: "LB", overall: 81 },
      { name: "Gennaro Gattuso", pos: "CM", overall: 84 },
      { name: "Andrea Pirlo", pos: "CM", overall: 89 },
      { name: "Clarence Seedorf", pos: "RM", overall: 87 },
      { name: "Rui Costa", pos: "LM", overall: 85 },
      { name: "Andriy Shevchenko", pos: "ST", overall: 90 },
      { name: "Filippo Inzaghi", pos: "ST", overall: 85 }
    ]
  },

  // ───────── 2004 ─────────
  {
    id: "mun_porto_2004", name: "Porto", season: "2004", country: "PT", flag: "🇵🇹",
    formation: "4-3-3",
    players: [
      { name: "Vítor Baía", pos: "GK", overall: 86 },
      { name: "Paulo Ferreira", pos: "RB", overall: 82 },
      { name: "Ricardo Carvalho", pos: "CB", overall: 85 },
      { name: "Jorge Costa", pos: "CB", overall: 82 },
      { name: "Nuno Valente", pos: "LB", overall: 79 },
      { name: "Costinha", pos: "CM", overall: 82 },
      { name: "Maniche", pos: "CM", overall: 83 },
      { name: "Deco", pos: "AM", overall: 88 },
      { name: "Dmitri Alenichev", pos: "RW", overall: 80 },
      { name: "Derlei", pos: "ST", overall: 80 },
      { name: "Benni McCarthy", pos: "LW", overall: 81 }
    ]
  },
  {
    id: "mun_oncecaldas_2004", name: "Once Caldas", season: "2004", country: "CO", flag: "🇨🇴",
    formation: "4-3-3",
    players: [
      { name: "Gerardo Bedoya", pos: "CM", overall: 77 },
      { name: "Miguel Calero", pos: "GK", overall: 82 },
      { name: "Diego Genes", pos: "RB", overall: 76 },
      { name: "Elkin Soto", pos: "CB", overall: 76 },
      { name: "Fabián Vargas", pos: "CB", overall: 78 },
      { name: "Aldo Bobadilla", pos: "LB", overall: 76 },
      { name: "John Vélez", pos: "CM", overall: 77 },
      { name: "Dayro Moreno", pos: "ST", overall: 79 },
      { name: "Nery Castillo", pos: "RW", overall: 78 },
      { name: "Édison Restrepo", pos: "ST", overall: 78 },
      { name: "Anibal Chalá", pos: "LW", overall: 76 }
    ]
  },

  // ───────── 2005 ─────────
  {
    id: "mun_saopaulo_2005", name: "São Paulo", season: "2005", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Rogério Ceni", pos: "GK", overall: 87 },
      { name: "Cicinho", pos: "RB", overall: 81 },
      { name: "Fabão", pos: "CB", overall: 78 },
      { name: "Alex", pos: "CB", overall: 80 },
      { name: "Gabriel Paulista Sr.", pos: "LB", overall: 77 },
      { name: "Josué", pos: "CM", overall: 78 },
      { name: "Mineiro", pos: "CM", overall: 79 },
      { name: "Hernanes", pos: "AM", overall: 80 },
      { name: "Danilo", pos: "RW", overall: 78 },
      { name: "Grafite", pos: "ST", overall: 80 },
      { name: "Amoroso", pos: "LW", overall: 82 }
    ]
  },
  {
    id: "mun_liverpool_2005", name: "Liverpool", season: "2005", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-4-2",
    players: [
      { name: "Jerzy Dudek", pos: "GK", overall: 82 },
      { name: "Steve Finnan", pos: "RB", overall: 79 },
      { name: "Jamie Carragher", pos: "CB", overall: 85 },
      { name: "Sami Hyypiä", pos: "CB", overall: 83 },
      { name: "Djimi Traoré", pos: "LB", overall: 76 },
      { name: "Steven Gerrard", pos: "RM", overall: 90 },
      { name: "Xabi Alonso", pos: "CM", overall: 87 },
      { name: "Didi Hamann", pos: "CM", overall: 81 },
      { name: "Luis García", pos: "LM", overall: 80 },
      { name: "Milan Baroš", pos: "ST", overall: 79 },
      { name: "Djibril Cissé", pos: "ST", overall: 79 }
    ]
  },
  {
    id: "mun_saprissa_2005", name: "Saprissa", season: "2005", country: "CR", flag: "🇨🇷",
    formation: "4-4-2",
    players: [
      { name: "José Porras", pos: "GK", overall: 78 },
      { name: "Luis Marín", pos: "RB", overall: 76 },
      { name: "Roy Myrie", pos: "CB", overall: 76 },
      { name: "Michael Umaña", pos: "CB", overall: 78 },
      { name: "Harold Wallace", pos: "LB", overall: 76 },
      { name: "Alonso Solís", pos: "CM", overall: 76 },
      { name: "Wálter Centeno", pos: "AM", overall: 80 },
      { name: "Steven Bryce", pos: "RW", overall: 76 },
      { name: "Kurt Bernard", pos: "ST", overall: 77 },
      { name: "Rónald Gómez", pos: "ST", overall: 77 },
      { name: "Douglas Sequeira", pos: "LW", overall: 76 }
    ]
  },
  {
    id: "mun_alittihad_2005", name: "Al Ittihad", season: "2005", country: "SA", flag: "🇸🇦",
    formation: "4-4-2",
    players: [
      { name: "Mabrouk Zaid", pos: "GK", overall: 76 },
      { name: "Naif Hazazi", pos: "RB", overall: 75 },
      { name: "Redha Tukar", pos: "CB", overall: 76 },
      { name: "Hamad Al Montashari", pos: "CB", overall: 78 },
      { name: "Ahmed Dokhi", pos: "LB", overall: 75 },
      { name: "Mohammed Noor", pos: "CM", overall: 76 },
      { name: "Bandar Mohammed", pos: "CM", overall: 75 },
      { name: "Mohannad Asiri", pos: "RW", overall: 77 },
      { name: "Hamzah Idris", pos: "ST", overall: 78 },
      { name: "Mohamed Al Shalhoub", pos: "AM", overall: 78 },
      { name: "Fahad Al Ghesheyan", pos: "LW", overall: 76 }
    ]
  },

  // ───────── 2006 ─────────
  {
    id: "mun_internacional_2006", name: "Internacional", season: "2006", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Clemer", pos: "GK", overall: 80 },
      { name: "Ceará", pos: "RB", overall: 78 },
      { name: "Índio", pos: "CB", overall: 79 },
      { name: "Wagner Diniz", pos: "CB", overall: 77 },
      { name: "Fabiano Eller", pos: "LB", overall: 78 },
      { name: "Wellington Monteiro", pos: "CM", overall: 78 },
      { name: "Alex Alves", pos: "CM", overall: 77 },
      { name: "Iarley", pos: "RW", overall: 79 },
      { name: "Fernandão", pos: "ST", overall: 81 },
      { name: "Alecsandro", pos: "ST", overall: 77 },
      { name: "Edinho", pos: "LW", overall: 77 }
    ]
  },
  {
    id: "mun_barcelona_2006", name: "Barcelona", season: "2006", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Víctor Valdés", pos: "GK", overall: 84 },
      { name: "Oleguer", pos: "RB", overall: 78 },
      { name: "Rafael Márquez", pos: "CB", overall: 85 },
      { name: "Carles Puyol", pos: "CB", overall: 88 },
      { name: "Giovanni van Bronckhorst", pos: "LB", overall: 83 },
      { name: "Deco", pos: "CM", overall: 88 },
      { name: "Xavi", pos: "CM", overall: 89 },
      { name: "Andrés Iniesta", pos: "AM", overall: 86 },
      { name: "Ludovic Giuly", pos: "RW", overall: 82 },
      { name: "Samuel Eto'o", pos: "ST", overall: 90 },
      { name: "Ronaldinho", pos: "LW", overall: 95 }
    ]
  },
  {
    id: "mun_alahly_2006", name: "Al Ahly", season: "2006", country: "EG", flag: "🇪🇬",
    formation: "4-3-3",
    players: [
      { name: "Essam El Hadary", pos: "GK", overall: 84 },
      { name: "Wael Gomaa", pos: "CB", overall: 81 },
      { name: "Ibrahim Said", pos: "CB", overall: 77 },
      { name: "Ahmed Fathy", pos: "RB", overall: 78 },
      { name: "Mohamed Barakat", pos: "LW", overall: 80 },
      { name: "Abdel Zaher El Saqqa", pos: "CM", overall: 79 },
      { name: "Hossam Ashour", pos: "CM", overall: 78 },
      { name: "Mohamed Aboutrika", pos: "AM", overall: 86 },
      { name: "Emad Moteab", pos: "ST", overall: 79 },
      { name: "Mohamed Shawky", pos: "CM", overall: 77 },
      { name: "Flávio", pos: "LW", overall: 77 }
    ]
  },
  {
    id: "mun_americamex_2006", name: "América-MEX", season: "2006", country: "MX", flag: "🇲🇽",
    formation: "4-4-2",
    players: [
      { name: "Guillermo Ochoa", pos: "GK", overall: 82 },
      { name: "Duilio Davino", pos: "RB", overall: 78 },
      { name: "Aarón Galindo", pos: "CB", overall: 78 },
      { name: "Pável Pardo", pos: "CM", overall: 81 },
      { name: "Israel López", pos: "LB", overall: 76 },
      { name: "Antonio Naelson", pos: "RM", overall: 79 },
      { name: "Salvador Cabañas", pos: "ST", overall: 80 },
      { name: "Cuauhtémoc Blanco", pos: "AM", overall: 83 },
      { name: "Daniel Montenegro", pos: "LM", overall: 78 },
      { name: "Ricardo Rojas", pos: "ST", overall: 77 },
      { name: "Andrés Chitiva", pos: "CB", overall: 76 }
    ]
  },

  // ───────── 2007 ─────────
  {
    id: "mun_milan_2007", name: "Milan", season: "2007", country: "IT", flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Dida", pos: "GK", overall: 86 },
      { name: "Massimo Oddo", pos: "RB", overall: 80 },
      { name: "Alessandro Nesta", pos: "CB", overall: 88 },
      { name: "Paolo Maldini", pos: "CB", overall: 86 },
      { name: "Marek Jankulovski", pos: "LB", overall: 80 },
      { name: "Gennaro Gattuso", pos: "CM", overall: 85 },
      { name: "Andrea Pirlo", pos: "CM", overall: 90 },
      { name: "Clarence Seedorf", pos: "AM", overall: 85 },
      { name: "Kaká", pos: "RW", overall: 92 },
      { name: "Filippo Inzaghi", pos: "ST", overall: 84 },
      { name: "Alberto Gilardino", pos: "LW", overall: 82 }
    ]
  },
  {
    id: "mun_bocajuniors_2007", name: "Boca Juniors", season: "2007", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Mauricio Caranta", pos: "GK", overall: 78 },
      { name: "Clemente Rodríguez", pos: "LB", overall: 78 },
      { name: "Fabián Vargas", pos: "CB", overall: 79 },
      { name: "Daniel Díaz", pos: "CB", overall: 78 },
      { name: "Hugo Ibarra", pos: "RB", overall: 79 },
      { name: "Pablo Ledesma", pos: "CM", overall: 78 },
      { name: "Sebastián Battaglia", pos: "CM", overall: 79 },
      { name: "Juan Román Riquelme", pos: "AM", overall: 89 },
      { name: "Rodrigo Palacio", pos: "RW", overall: 82 },
      { name: "Ernesto Farías", pos: "ST", overall: 78 },
      { name: "Neri Cardozo", pos: "LW", overall: 78 }
    ]
  },
  {
    id: "mun_urawaredddiamonds_2007", name: "Urawa Red Diamonds", season: "2007", country: "JP", flag: "🇯🇵",
    formation: "4-4-2",
    players: [
      { name: "Norihiro Yamagishi", pos: "GK", overall: 78 },
      { name: "Keisuke Tsuboi", pos: "RB", overall: 76 },
      { name: "Nobuhisa Yamada", pos: "CB", overall: 77 },
      { name: "Tatsuya Tanaka", pos: "CB", overall: 76 },
      { name: "Yuichiro Nagai", pos: "LB", overall: 76 },
      { name: "Keita Suzuki", pos: "RM", overall: 78 },
      { name: "Mitsuo Ogasawara", pos: "CM", overall: 79 },
      { name: "Yuki Abe", pos: "CM", overall: 79 },
      { name: "Robson Ponte", pos: "LM", overall: 80 },
      { name: "Washington", pos: "ST", overall: 80 },
      { name: "Naohiro Takahara", pos: "ST", overall: 79 }
    ]
  },
  {
    id: "mun_etoiledusahel_2007", name: "Étoile du Sahel", season: "2007", country: "TN", flag: "🇹🇳",
    formation: "4-4-2",
    players: [
      { name: "Aymen Mathlouthi", pos: "GK", overall: 78 },
      { name: "Karim Essediri", pos: "RB", overall: 75 },
      { name: "Anis Boujelbene", pos: "CB", overall: 75 },
      { name: "Sabeur Beltaifa", pos: "CB", overall: 75 },
      { name: "Wajdi Bouazzi", pos: "LB", overall: 75 },
      { name: "Karim Haggui", pos: "CM", overall: 78 },
      { name: "Khaled Mkacher", pos: "CM", overall: 75 },
      { name: "Mihoub Mihoubi", pos: "RW", overall: 76 },
      { name: "Issam Jomaa", pos: "ST", overall: 79 },
      { name: "Amine Chermiti", pos: "ST", overall: 77 },
      { name: "Yassine Chikhaoui", pos: "LW", overall: 78 }
    ]
  },

  // ───────── 2008 ─────────
  {
    id: "mun_manchesterunited_2008", name: "Manchester United", season: "2008", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "Edwin van der Sar", pos: "GK", overall: 87 },
      { name: "Wes Brown", pos: "RB", overall: 79 },
      { name: "Rio Ferdinand", pos: "CB", overall: 88 },
      { name: "Nemanja Vidić", pos: "CB", overall: 88 },
      { name: "Patrice Evra", pos: "LB", overall: 84 },
      { name: "Michael Carrick", pos: "CM", overall: 82 },
      { name: "Paul Scholes", pos: "CM", overall: 85 },
      { name: "Cristiano Ronaldo", pos: "RW", overall: 93 },
      { name: "Wayne Rooney", pos: "ST", overall: 88 },
      { name: "Carlos Tevez", pos: "ST", overall: 85 },
      { name: "Ryan Giggs", pos: "LW", overall: 85 }
    ]
  },
  {
    id: "mun_lduquito_2008", name: "LDU Quito", season: "2008", country: "EC", flag: "🇪🇨",
    formation: "4-4-2",
    players: [
      { name: "José Francisco Cevallos", pos: "GK", overall: 80 },
      { name: "Norberto Araujo", pos: "CB", overall: 77 },
      { name: "Neicer Reasco", pos: "LB", overall: 78 },
      { name: "Paúl Ambrosi", pos: "RB", overall: 76 },
      { name: "Patricio Urrutia", pos: "CB", overall: 76 },
      { name: "Édison Méndez", pos: "CM", overall: 80 },
      { name: "Norberto Araujo II", pos: "CM", overall: 75 },
      { name: "Joffre Guerrón", pos: "RW", overall: 78 },
      { name: "Claudio Bieler", pos: "ST", overall: 79 },
      { name: "Peter Larrea", pos: "ST", overall: 76 },
      { name: "Luis Bolaños", pos: "LW", overall: 77 }
    ]
  },
  {
    id: "mun_gambaosaka_2008", name: "Gamba Osaka", season: "2008", country: "JP", flag: "🇯🇵",
    formation: "4-4-2",
    players: [
      { name: "Norihiro Yamagishi", pos: "GK", overall: 78 },
      { name: "Satoshi Yamaguchi", pos: "RB", overall: 77 },
      { name: "Akira Kaji", pos: "CB", overall: 76 },
      { name: "Kim Jung-Woo", pos: "CB", overall: 76 },
      { name: "Yasuhito Endo", pos: "CM", overall: 82 },
      { name: "Hideo Hashimoto", pos: "CM", overall: 76 },
      { name: "Yasuyuki Konno", pos: "LB", overall: 78 },
      { name: "Takahiro Futagawa", pos: "RW", overall: 76 },
      { name: "Lucas Severino", pos: "ST", overall: 79 },
      { name: "Ryōichi Maeda", pos: "ST", overall: 79 },
      { name: "Yasuhito Endo II", pos: "LW", overall: 76 }
    ]
  },
  {
    id: "mun_pachuca_2008", name: "Pachuca", season: "2008", country: "MX", flag: "🇲🇽",
    formation: "4-4-2",
    players: [
      { name: "Miguel Calero", pos: "GK", overall: 81 },
      { name: "Aquivaldo Mosquera", pos: "CB", overall: 78 },
      { name: "Gerardo Rodríguez", pos: "LB", overall: 76 },
      { name: "Rafael García", pos: "CB", overall: 76 },
      { name: "Jaime Correa", pos: "RB", overall: 75 },
      { name: "Christian Giménez", pos: "AM", overall: 82 },
      { name: "Damián Álvarez", pos: "CM", overall: 76 },
      { name: "Gonzalo Pineda", pos: "CM", overall: 78 },
      { name: "Bryan Beckeles", pos: "RW", overall: 75 },
      { name: "Édgar Benítez", pos: "ST", overall: 78 },
      { name: "José Francisco Torres", pos: "LW", overall: 76 }
    ]
  },

  // ───────── 2009 ─────────
  {
    id: "mun_barcelona_2009", name: "Barcelona", season: "2009", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Víctor Valdés", pos: "GK", overall: 86 },
      { name: "Dani Alves", pos: "RB", overall: 87 },
      { name: "Gerard Piqué", pos: "CB", overall: 86 },
      { name: "Carles Puyol", pos: "CB", overall: 88 },
      { name: "Éric Abidal", pos: "LB", overall: 83 },
      { name: "Sergio Busquets", pos: "CM", overall: 82 },
      { name: "Xavi", pos: "CM", overall: 91 },
      { name: "Andrés Iniesta", pos: "AM", overall: 90 },
      { name: "Lionel Messi", pos: "RW", overall: 96 },
      { name: "Samuel Eto'o", pos: "ST", overall: 89 },
      { name: "Thierry Henry", pos: "LW", overall: 87 }
    ]
  },
  {
    id: "mun_estudiantes_2009", name: "Estudiantes", season: "2009", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Sebastián Sosa", pos: "GK", overall: 80 },
      { name: "Cristian Cellay", pos: "RB", overall: 77 },
      { name: "Leandro Grimi", pos: "LB", overall: 77 },
      { name: "José Sosa", pos: "CB", overall: 78 },
      { name: "Gastón Fernández", pos: "AM", overall: 79 },
      { name: "Enzo Pérez", pos: "CM", overall: 79 },
      { name: "Rodrigo Braña", pos: "CM", overall: 77 },
      { name: "Juan Sebastián Verón", pos: "AM", overall: 85 },
      { name: "Mauro Boselli", pos: "ST", overall: 79 },
      { name: "Pablo Piatti", pos: "RW", overall: 80 },
      { name: "Guillermo Barros Schelotto", pos: "LW", overall: 79 }
    ]
  },
  {
    id: "mun_pohangsteelers_2009", name: "Pohang Steelers", season: "2009", country: "KR", flag: "🇰🇷",
    formation: "4-4-2",
    players: [
      { name: "Shin Hwa-yong", pos: "GK", overall: 78 },
      { name: "Park Won-jae", pos: "RB", overall: 76 },
      { name: "Hwang Jae-won", pos: "CB", overall: 76 },
      { name: "Kim Kyung-joong", pos: "CB", overall: 75 },
      { name: "Kim Hyung-il", pos: "LB", overall: 76 },
      { name: "Kim Jae-sung", pos: "CM", overall: 76 },
      { name: "Kim Jong-min", pos: "CM", overall: 76 },
      { name: "Denilson", pos: "RW", overall: 78 },
      { name: "Rah Dae-jong", pos: "ST", overall: 77 },
      { name: "No Byung-jun", pos: "ST", overall: 77 },
      { name: "Mauricio Molina", pos: "LW", overall: 78 }
    ]
  },
  {
    id: "mun_atlante_2009", name: "Atlante", season: "2009", country: "MX", flag: "🇲🇽",
    formation: "4-4-2",
    players: [
      { name: "Adrián Chávez", pos: "GK", overall: 78 },
      { name: "Francisco Rodríguez", pos: "CB", overall: 78 },
      { name: "Vicente Sánchez", pos: "AM", overall: 80 },
      { name: "Miguel Sabah", pos: "ST", overall: 79 },
      { name: "Sergio Bernal", pos: "RB", overall: 75 },
      { name: "Rafael García", pos: "CB", overall: 76 },
      { name: "Fausto Pinto", pos: "LB", overall: 75 },
      { name: "Christian Bermúdez", pos: "CM", overall: 76 },
      { name: "Andrés Chitiva", pos: "CM", overall: 76 },
      { name: "Edwin Santibáñez", pos: "RW", overall: 75 },
      { name: "Ariel Nahuelpán", pos: "LW", overall: 76 }
    ]
  },

  // ───────── 2010 ─────────
  {
    id: "mun_inter_2010", name: "Internazionale", season: "2010", country: "IT", flag: "🇮🇹",
    formation: "4-3-3",
    players: [
      { name: "Júlio César", pos: "GK", overall: 87 },
      { name: "Maicon", pos: "RB", overall: 86 },
      { name: "Lúcio", pos: "CB", overall: 87 },
      { name: "Walter Samuel", pos: "CB", overall: 85 },
      { name: "Cristian Chivu", pos: "LB", overall: 80 },
      { name: "Esteban Cambiasso", pos: "CM", overall: 84 },
      { name: "Thiago Motta", pos: "CM", overall: 82 },
      { name: "Wesley Sneijder", pos: "AM", overall: 88 },
      { name: "Goran Pandev", pos: "RW", overall: 81 },
      { name: "Diego Milito", pos: "ST", overall: 86 },
      { name: "Samuel Eto'o", pos: "LW", overall: 88 }
    ]
  },
  {
    id: "mun_mazembe_2010", name: "Mazembe", season: "2010", country: "CD", flag: "🇨🇩",
    formation: "4-4-2",
    players: [
      { name: "Muteba Kidiaba", pos: "GK", overall: 78 },
      { name: "Guy Bukasa", pos: "CB", overall: 76 },
      { name: "Alain Kaluyituka", pos: "CB", overall: 75 },
      { name: "Fabrice Ngoma", pos: "RB", overall: 75 },
      { name: "Joseph Ilunga", pos: "LB", overall: 75 },
      { name: "Dioko Kaluyituka", pos: "CM", overall: 76 },
      { name: "Trésor Mputu", pos: "AM", overall: 80 },
      { name: "Jean Kasusula", pos: "CM", overall: 75 },
      { name: "Mulota Kabangu", pos: "RW", overall: 76 },
      { name: "Dioko Kaluyituka II", pos: "ST", overall: 77 },
      { name: "Bandu Mubiayi", pos: "LW", overall: 75 }
    ]
  },
  {
    id: "mun_internacional_2010", name: "Internacional", season: "2010", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Muriel", pos: "GK", overall: 82 },
      { name: "Kléber", pos: "RB", overall: 78 },
      { name: "Índio", pos: "CB", overall: 79 },
      { name: "Bolívar", pos: "CB", overall: 78 },
      { name: "Fabiano Eller", pos: "LB", overall: 78 },
      { name: "Andrezinho", pos: "CM", overall: 78 },
      { name: "Guiñazú", pos: "CM", overall: 79 },
      { name: "Andrés D'Alessandro", pos: "AM", overall: 85 },
      { name: "Taison", pos: "RW", overall: 79 },
      { name: "Alecsandro", pos: "ST", overall: 78 },
      { name: "Giuliano", pos: "LW", overall: 79 }
    ]
  },
  {
    id: "mun_seongnamilhwa_2010", name: "Seongnam Ilhwa", season: "2010", country: "KR", flag: "🇰🇷",
    formation: "4-4-2",
    players: [
      { name: "Jung Sung-ryong", pos: "GK", overall: 79 },
      { name: "Choi Hyo-jin", pos: "RB", overall: 76 },
      { name: "Yun Yeong-seon", pos: "CB", overall: 76 },
      { name: "Cho Sung-hwan", pos: "CB", overall: 75 },
      { name: "Park Won-jae", pos: "LB", overall: 76 },
      { name: "Kim Doo-hyun", pos: "CM", overall: 76 },
      { name: "Lee Chang-hoon", pos: "CM", overall: 75 },
      { name: "Molina", pos: "RW", overall: 78 },
      { name: "Kim Eun-jung", pos: "ST", overall: 78 },
      { name: "Denilson", pos: "ST", overall: 78 },
      { name: "Kim Doo-hyun II", pos: "LW", overall: 75 }
    ]
  },

  // ───────── 2011 ─────────
  {
    id: "mun_barcelona_2011", name: "Barcelona", season: "2011", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Víctor Valdés", pos: "GK", overall: 87 },
      { name: "Dani Alves", pos: "RB", overall: 88 },
      { name: "Gerard Piqué", pos: "CB", overall: 87 },
      { name: "Carles Puyol", pos: "CB", overall: 87 },
      { name: "Éric Abidal", pos: "LB", overall: 82 },
      { name: "Sergio Busquets", pos: "CM", overall: 85 },
      { name: "Xavi", pos: "CM", overall: 92 },
      { name: "Andrés Iniesta", pos: "AM", overall: 92 },
      { name: "Pedro", pos: "RW", overall: 84 },
      { name: "Lionel Messi", pos: "ST", overall: 97 },
      { name: "David Villa", pos: "LW", overall: 87 }
    ]
  },
  {
    id: "mun_santos_2011", name: "Santos", season: "2011", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Rafael", pos: "GK", overall: 79 },
      { name: "Léo", pos: "RB", overall: 78 },
      { name: "Edu Dracena", pos: "CB", overall: 80 },
      { name: "Durval", pos: "CB", overall: 78 },
      { name: "Danilo", pos: "LB", overall: 79 },
      { name: "Arouca", pos: "CM", overall: 80 },
      { name: "Elano", pos: "AM", overall: 82 },
      { name: "Ganso", pos: "AM", overall: 83 },
      { name: "Neymar", pos: "RW", overall: 89 },
      { name: "Borges", pos: "ST", overall: 79 },
      { name: "Zé Eduardo", pos: "LW", overall: 77 }
    ]
  },
  {
    id: "mun_alsadd_2011", name: "Al Sadd", season: "2011", country: "QA", flag: "🇶🇦",
    formation: "4-4-2",
    players: [
      { name: "Qasem Burhan", pos: "GK", overall: 77 },
      { name: "Ibrahim Majid", pos: "RB", overall: 75 },
      { name: "Bilal Rajab", pos: "CB", overall: 75 },
      { name: "Abdulkarim Hassan", pos: "LB", overall: 75 },
      { name: "Fábio César", pos: "CM", overall: 78 },
      { name: "Khalfan Ibrahim", pos: "RW", overall: 79 },
      { name: "Mamadou Niang", pos: "ST", overall: 80 },
      { name: "Nadir Belhadj", pos: "LB", overall: 77 },
      { name: "Ibrahim Al Fadhala", pos: "CM", overall: 75 },
      { name: "Fahad Khalfan", pos: "ST", overall: 77 },
      { name: "Yusuf Ahmed", pos: "CB", overall: 75 }
    ]
  },
  {
    id: "mun_kashiwareysol_2011", name: "Kashiwa Reysol", season: "2011", country: "JP", flag: "🇯🇵",
    formation: "4-4-2",
    players: [
      { name: "Takanori Sugeno", pos: "GK", overall: 77 },
      { name: "Daisuke Nasu", pos: "RB", overall: 76 },
      { name: "Naoya Kondo", pos: "CB", overall: 76 },
      { name: "Michihiro Yasuda", pos: "CB", overall: 76 },
      { name: "Yuta Nakayama Sr.", pos: "LB", overall: 75 },
      { name: "Hidekazu Otani", pos: "CM", overall: 76 },
      { name: "Hiroki Sakai", pos: "RM", overall: 77 },
      { name: "Junya Tanaka", pos: "ST", overall: 78 },
      { name: "Masato Kudo", pos: "ST", overall: 77 },
      { name: "Leandro Domingues", pos: "AM", overall: 79 },
      { name: "Cleber", pos: "LW", overall: 76 }
    ]
  },

  // ───────── 2012 ─────────
  {
    id: "mun_corinthians_2012", name: "Corinthians", season: "2012", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Cássio", pos: "GK", overall: 82 },
      { name: "Alessandro", pos: "RB", overall: 78 },
      { name: "Chicão", pos: "CB", overall: 78 },
      { name: "Léo Silva", pos: "CB", overall: 77 },
      { name: "Fábio Santos", pos: "LB", overall: 79 },
      { name: "Ralf", pos: "CM", overall: 78 },
      { name: "Paulinho", pos: "CM", overall: 82 },
      { name: "Danilo", pos: "RW", overall: 78 },
      { name: "Jorge Henrique", pos: "AM", overall: 78 },
      { name: "Emerson Sheik", pos: "ST", overall: 79 },
      { name: "Guerrero", pos: "LW", overall: 82 }
    ]
  },
  {
    id: "mun_chelsea_2012", name: "Chelsea", season: "2012", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "Petr Čech", pos: "GK", overall: 88 },
      { name: "Branislav Ivanović", pos: "RB", overall: 84 },
      { name: "Gary Cahill", pos: "CB", overall: 82 },
      { name: "David Luiz", pos: "CB", overall: 83 },
      { name: "Ashley Cole", pos: "LB", overall: 87 },
      { name: "Ramires", pos: "CM", overall: 82 },
      { name: "Frank Lampard", pos: "CM", overall: 87 },
      { name: "Juan Mata", pos: "AM", overall: 86 },
      { name: "Eden Hazard", pos: "RW", overall: 87 },
      { name: "Fernando Torres", pos: "ST", overall: 82 },
      { name: "Oscar", pos: "LW", overall: 82 }
    ]
  },
  {
    id: "mun_monterrey_2012", name: "Monterrey", season: "2012", country: "MX", flag: "🇲🇽",
    formation: "4-4-2",
    players: [
      { name: "Jonathan Orozco", pos: "GK", overall: 79 },
      { name: "Severo Meza", pos: "RB", overall: 77 },
      { name: "José María Basanta", pos: "CB", overall: 78 },
      { name: "Jesús Zavala", pos: "CM", overall: 76 },
      { name: "Israel Jiménez", pos: "LB", overall: 76 },
      { name: "Neri Cardozo", pos: "CM", overall: 78 },
      { name: "Aldo de Nigris", pos: "ST", overall: 78 },
      { name: "Humberto Suazo", pos: "ST", overall: 81 },
      { name: "César Delgado", pos: "AM", overall: 79 },
      { name: "Jonny Magallón", pos: "CB", overall: 77 },
      { name: "Cristian Bernárdez", pos: "CM", overall: 76 }
    ]
  },
  {
    id: "mun_alahly_2012", name: "Al Ahly", season: "2012", country: "EG", flag: "🇪🇬",
    formation: "4-3-3",
    players: [
      { name: "Sherif Ekramy", pos: "GK", overall: 82 },
      { name: "Ahmed Fathy", pos: "RB", overall: 79 },
      { name: "Wael Gomaa", pos: "CB", overall: 80 },
      { name: "Ali Maher", pos: "CB", overall: 76 },
      { name: "Saad Samir", pos: "LB", overall: 78 },
      { name: "Mohamed Naguib", pos: "CM", overall: 76 },
      { name: "Hossam Ghaly", pos: "CM", overall: 79 },
      { name: "Mohamed Aboutrika", pos: "AM", overall: 85 },
      { name: "Mohamed Barakat", pos: "RW", overall: 79 },
      { name: "Emad Moteab", pos: "ST", overall: 78 },
      { name: "Geraldo Alves", pos: "CB", overall: 77 }
    ]
  },

  // ───────── 2013 ─────────
  {
    id: "mun_bayerndemunique_2013", name: "Bayern de Munique", season: "2013", country: "DE", flag: "🇩🇪",
    formation: "4-3-3",
    players: [
      { name: "Manuel Neuer", pos: "GK", overall: 90 },
      { name: "Philipp Lahm", pos: "RB", overall: 90 },
      { name: "Dante", pos: "CB", overall: 84 },
      { name: "Jérôme Boateng", pos: "CB", overall: 86 },
      { name: "David Alaba", pos: "LB", overall: 86 },
      { name: "Bastian Schweinsteiger", pos: "CM", overall: 87 },
      { name: "Javi Martínez", pos: "CM", overall: 86 },
      { name: "Thomas Müller", pos: "RW", overall: 87 },
      { name: "Mario Götze", pos: "AM", overall: 85 },
      { name: "Mario Mandžukić", pos: "ST", overall: 83 },
      { name: "Franck Ribéry", pos: "LW", overall: 90 }
    ]
  },
  {
    id: "mun_rajacasablanca_2013", name: "Raja Casablanca", season: "2013", country: "MA", flag: "🇲🇦",
    formation: "4-4-2",
    players: [
      { name: "Khalid Askri", pos: "GK", overall: 78 },
      { name: "Zouhair Laaroubi", pos: "RB", overall: 76 },
      { name: "Nabil Dirar", pos: "LW", overall: 80 },
      { name: "Abdelilah Hafidi", pos: "AM", overall: 78 },
      { name: "Mouhcine Iajour", pos: "ST", overall: 77 },
      { name: "Fouad Nadir", pos: "CB", overall: 75 },
      { name: "Youssef El Motie", pos: "CM", overall: 75 },
      { name: "Mbark Boussoufa", pos: "AM", overall: 80 },
      { name: "Abdelaali El Anouri", pos: "CB", overall: 76 },
      { name: "Ahmed Rachidi", pos: "LB", overall: 75 },
      { name: "Zakaria Labyad", pos: "RW", overall: 77 }
    ]
  },
  {
    id: "mun_atleticomineiro_2013", name: "Atlético Mineiro", season: "2013", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Victor", pos: "GK", overall: 83 },
      { name: "Marcos Rocha", pos: "RB", overall: 78 },
      { name: "Réver", pos: "CB", overall: 80 },
      { name: "Leonardo Silva", pos: "CB", overall: 78 },
      { name: "Bruno Cortez", pos: "LB", overall: 76 },
      { name: "Josué", pos: "CM", overall: 78 },
      { name: "Leandro Donizete", pos: "CM", overall: 78 },
      { name: "Bernard", pos: "RW", overall: 82 },
      { name: "Jô", pos: "ST", overall: 79 },
      { name: "Ronaldinho", pos: "AM", overall: 84 },
      { name: "Guilherme", pos: "LW", overall: 77 }
    ]
  },
  {
    id: "mun_guangzhouevergrande_2013", name: "Guangzhou Evergrande", season: "2013", country: "CN", flag: "🇨🇳",
    formation: "4-3-3",
    players: [
      { name: "Zeng Cheng", pos: "GK", overall: 78 },
      { name: "Sun Xiang", pos: "RB", overall: 76 },
      { name: "Feng Xiaoting", pos: "CB", overall: 78 },
      { name: "Zhang Linpeng", pos: "CB", overall: 78 },
      { name: "Li Xuepeng", pos: "LB", overall: 76 },
      { name: "Zheng Zhi", pos: "CM", overall: 80 },
      { name: "Huang Bowen", pos: "CM", overall: 78 },
      { name: "Muriqui", pos: "RW", overall: 79 },
      { name: "Elkeson", pos: "ST", overall: 80 },
      { name: "Gao Lin", pos: "ST", overall: 78 },
      { name: "Chen Zhizhao", pos: "LW", overall: 75 }
    ]
  },

  // ───────── 2014 ─────────
  {
    id: "mun_realmadrid_2014", name: "Real Madrid", season: "2014", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Iker Casillas", pos: "GK", overall: 87 },
      { name: "Dani Carvajal", pos: "RB", overall: 82 },
      { name: "Sergio Ramos", pos: "CB", overall: 89 },
      { name: "Pepe", pos: "CB", overall: 85 },
      { name: "Marcelo", pos: "LB", overall: 87 },
      { name: "Luka Modrić", pos: "CM", overall: 87 },
      { name: "Toni Kroos", pos: "CM", overall: 88 },
      { name: "Ángel Di María", pos: "AM", overall: 87 },
      { name: "Gareth Bale", pos: "RW", overall: 89 },
      { name: "Karim Benzema", pos: "ST", overall: 88 },
      { name: "Cristiano Ronaldo", pos: "LW", overall: 94 }
    ]
  },
  {
    id: "mun_sanlorenzo_2014", name: "San Lorenzo", season: "2014", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Sebastián Torrico", pos: "GK", overall: 78 },
      { name: "Gino Peruzzi", pos: "RB", overall: 77 },
      { name: "Gastón Díaz", pos: "CB", overall: 76 },
      { name: "Ezequiel Cerutti", pos: "RW", overall: 77 },
      { name: "Néstor Ortigoza", pos: "CM", overall: 79 },
      { name: "Fernando Belluschi", pos: "AM", overall: 79 },
      { name: "Emanuel Mammana", pos: "CB", overall: 78 },
      { name: "Mauro Matos", pos: "CM", overall: 76 },
      { name: "Ángel Correa", pos: "LW", overall: 78 },
      { name: "Nicolás Blandi", pos: "ST", overall: 78 },
      { name: "Emiliano Papa", pos: "LB", overall: 75 }
    ]
  },
  {
    id: "mun_aucklandcity_2014", name: "Auckland City", season: "2014", country: "NZ", flag: "🇳🇿",
    formation: "4-4-2",
    players: [
      { name: "Danny Robinson", pos: "GK", overall: 74 },
      { name: "Ivan Vicelich", pos: "CM", overall: 77 },
      { name: "Ryan De Vries", pos: "RB", overall: 74 },
      { name: "Adam Mitchell", pos: "CB", overall: 74 },
      { name: "Andrew Blake", pos: "CB", overall: 74 },
      { name: "Angel Berlanga", pos: "LB", overall: 74 },
      { name: "Emiliano Tade", pos: "ST", overall: 78 },
      { name: "Mario Ilich", pos: "CM", overall: 75 },
      { name: "Albert Riera", pos: "AM", overall: 77 },
      { name: "Takuya Iwata", pos: "RW", overall: 74 },
      { name: "Ryan De Vries II", pos: "LW", overall: 74 }
    ]
  },
  {
    id: "mun_cruzazul_2014", name: "Cruz Azul", season: "2014", country: "MX", flag: "🇲🇽",
    formation: "4-4-2",
    players: [
      { name: "Jesús Corona", pos: "GK", overall: 81 },
      { name: "Francisco Javier Rodríguez", pos: "RB", overall: 79 },
      { name: "Gerardo Flores", pos: "CB", overall: 76 },
      { name: "Julio Domínguez", pos: "CB", overall: 77 },
      { name: "Joel Huiqui", pos: "LB", overall: 76 },
      { name: "Gerardo Torrado", pos: "CM", overall: 78 },
      { name: "Javier Cortés", pos: "RW", overall: 77 },
      { name: "Mauro Formica", pos: "AM", overall: 79 },
      { name: "Enzo Roco", pos: "CB", overall: 77 },
      { name: "Christian Giménez", pos: "ST", overall: 80 },
      { name: "Fausto Pinto", pos: "LW", overall: 76 }
    ]
  },

  // ───────── 2015 ─────────
  {
    id: "mun_barcelona_2015", name: "Barcelona", season: "2015", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Marc-André ter Stegen", pos: "GK", overall: 85 },
      { name: "Dani Alves", pos: "RB", overall: 87 },
      { name: "Gerard Piqué", pos: "CB", overall: 87 },
      { name: "Javier Mascherano", pos: "CB", overall: 85 },
      { name: "Jordi Alba", pos: "LB", overall: 84 },
      { name: "Sergio Busquets", pos: "CM", overall: 87 },
      { name: "Ivan Rakitić", pos: "CM", overall: 85 },
      { name: "Andrés Iniesta", pos: "AM", overall: 89 },
      { name: "Neymar", pos: "RW", overall: 91 },
      { name: "Luis Suárez", pos: "ST", overall: 91 },
      { name: "Lionel Messi", pos: "LW", overall: 97 }
    ]
  },
  {
    id: "mun_riverplate_2015", name: "River Plate", season: "2015", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Marcelo Barovero", pos: "GK", overall: 82 },
      { name: "Germán Pezzella", pos: "CB", overall: 79 },
      { name: "Jonatan Maidana", pos: "CB", overall: 79 },
      { name: "Gabriel Mercado", pos: "RB", overall: 79 },
      { name: "Leonardo Ponzio", pos: "CM", overall: 78 },
      { name: "Carlos Sánchez", pos: "CM", overall: 77 },
      { name: "Manuel Lanzini", pos: "AM", overall: 82 },
      { name: "Sebastián Driussi", pos: "RW", overall: 80 },
      { name: "Rodrigo Mora", pos: "LW", overall: 79 },
      { name: "Lucas Alario", pos: "ST", overall: 79 },
      { name: "Milton Casco", pos: "LB", overall: 77 }
    ]
  },
  {
    id: "mun_sanfrecce_2015", name: "Sanfrecce Hiroshima", season: "2015", country: "JP", flag: "🇯🇵",
    formation: "4-4-2",
    players: [
      { name: "Takuto Hayashi", pos: "GK", overall: 77 },
      { name: "Hiroki Mizumoto", pos: "RB", overall: 76 },
      { name: "Kazuyuki Morisaki", pos: "CB", overall: 76 },
      { name: "Sho Sasaki", pos: "CM", overall: 77 },
      { name: "Toshihiro Aoyama", pos: "CM", overall: 78 },
      { name: "Hisato Sato", pos: "ST", overall: 80 },
      { name: "Tsukasa Shiotani", pos: "CB", overall: 76 },
      { name: "Yoshifumi Kashiwa", pos: "RW", overall: 77 },
      { name: "Sho Ito", pos: "LB", overall: 75 },
      { name: "Naoki Ishihara", pos: "LW", overall: 76 },
      { name: "Patric", pos: "ST", overall: 78 }
    ]
  },
  {
    id: "mun_guangzhouevergrande_2015", name: "Guangzhou Evergrande", season: "2015", country: "CN", flag: "🇨🇳",
    formation: "4-3-3",
    players: [
      { name: "Zeng Cheng", pos: "GK", overall: 79 },
      { name: "Sun Xiang", pos: "RB", overall: 77 },
      { name: "Feng Xiaoting", pos: "CB", overall: 79 },
      { name: "Zhang Linpeng", pos: "CB", overall: 79 },
      { name: "Li Xuepeng", pos: "LB", overall: 77 },
      { name: "Zheng Zhi", pos: "CM", overall: 80 },
      { name: "Huang Bowen", pos: "CM", overall: 78 },
      { name: "Ricardo Goulart", pos: "RW", overall: 82 },
      { name: "Alan", pos: "ST", overall: 80 },
      { name: "Gao Lin", pos: "ST", overall: 78 },
      { name: "Paulinho", pos: "CM", overall: 80 }
    ]
  },

  // ───────── 2016 ─────────
  {
    id: "mun_realmadrid_2016", name: "Real Madrid", season: "2016", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Keylor Navas", pos: "GK", overall: 87 },
      { name: "Dani Carvajal", pos: "RB", overall: 84 },
      { name: "Sergio Ramos", pos: "CB", overall: 90 },
      { name: "Pepe", pos: "CB", overall: 84 },
      { name: "Marcelo", pos: "LB", overall: 87 },
      { name: "Casemiro", pos: "CM", overall: 84 },
      { name: "Toni Kroos", pos: "CM", overall: 88 },
      { name: "Luka Modrić", pos: "AM", overall: 88 },
      { name: "Gareth Bale", pos: "RW", overall: 88 },
      { name: "Karim Benzema", pos: "ST", overall: 87 },
      { name: "Cristiano Ronaldo", pos: "LW", overall: 94 }
    ]
  },
  {
    id: "mun_kashimaantlers_2016", name: "Kashima Antlers", season: "2016", country: "JP", flag: "🇯🇵",
    formation: "4-4-2",
    players: [
      { name: "Kwoon Sun-tae", pos: "GK", overall: 79 },
      { name: "Gen Shoji", pos: "CB", overall: 78 },
      { name: "Naomichi Ueda", pos: "CB", overall: 78 },
      { name: "Daigo Nishi", pos: "RB", overall: 76 },
      { name: "Yasushi Endo", pos: "CM", overall: 79 },
      { name: "Ryota Nagaki", pos: "CM", overall: 76 },
      { name: "Gaku Shibasaki", pos: "AM", overall: 80 },
      { name: "Shoma Doi", pos: "RW", overall: 78 },
      { name: "Yuma Suzuki", pos: "ST", overall: 78 },
      { name: "Mu Kanazaki", pos: "ST", overall: 78 },
      { name: "Kento Misao", pos: "LB", overall: 75 }
    ]
  },
  {
    id: "mun_atleticonacional_2016", name: "Atlético Nacional", season: "2016", country: "CO", flag: "🇨🇴",
    formation: "4-3-3",
    players: [
      { name: "Franco Armani", pos: "GK", overall: 83 },
      { name: "Daniel Bocanegra", pos: "RB", overall: 76 },
      { name: "Andrés Andrade", pos: "CB", overall: 76 },
      { name: "Alexander Mejía", pos: "CM", overall: 77 },
      { name: "Diego Arias", pos: "LB", overall: 76 },
      { name: "Sherman Cárdenas", pos: "CM", overall: 76 },
      { name: "Alejandro Guerra", pos: "AM", overall: 79 },
      { name: "Miguel Borja", pos: "ST", overall: 80 },
      { name: "Dayro Moreno", pos: "ST", overall: 78 },
      { name: "Vladimir Marín", pos: "RW", overall: 76 },
      { name: "Jarlan Barrera", pos: "LW", overall: 76 }
    ]
  },
  {
    id: "mun_clubamerica_2016", name: "Club América", season: "2016", country: "MX", flag: "🇲🇽",
    formation: "4-4-2",
    players: [
      { name: "Agustín Marchesín", pos: "GK", overall: 82 },
      { name: "Paul Aguilar", pos: "RB", overall: 79 },
      { name: "Bruno Valdez", pos: "CB", overall: 77 },
      { name: "Pablo Aguilar", pos: "CB", overall: 78 },
      { name: "Miguel Layún", pos: "LB", overall: 80 },
      { name: "Rubens Sambueza", pos: "AM", overall: 80 },
      { name: "Javier Güémez", pos: "CM", overall: 76 },
      { name: "Michael Arroyo", pos: "RW", overall: 78 },
      { name: "Oribe Peralta", pos: "ST", overall: 80 },
      { name: "Silvio Romero", pos: "ST", overall: 78 },
      { name: "Darwin Quintero", pos: "LW", overall: 79 }
    ]
  },

  // ───────── 2017 ─────────
  {
    id: "mun_realmadrid_2017", name: "Real Madrid", season: "2017", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Keylor Navas", pos: "GK", overall: 87 },
      { name: "Dani Carvajal", pos: "RB", overall: 85 },
      { name: "Sergio Ramos", pos: "CB", overall: 90 },
      { name: "Raphaël Varane", pos: "CB", overall: 86 },
      { name: "Marcelo", pos: "LB", overall: 87 },
      { name: "Casemiro", pos: "CM", overall: 85 },
      { name: "Toni Kroos", pos: "CM", overall: 88 },
      { name: "Luka Modrić", pos: "AM", overall: 89 },
      { name: "Isco", pos: "RW", overall: 85 },
      { name: "Karim Benzema", pos: "ST", overall: 87 },
      { name: "Cristiano Ronaldo", pos: "LW", overall: 94 }
    ]
  },
  {
    id: "mun_gremio_2017", name: "Gremio", season: "2017", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Marcelo Grohe", pos: "GK", overall: 82 },
      { name: "Edilson", pos: "RB", overall: 77 },
      { name: "Bruno Cortez", pos: "LB", overall: 78 },
      { name: "Pedro Geromel", pos: "CB", overall: 80 },
      { name: "Walter Kannemann", pos: "CB", overall: 79 },
      { name: "Arthur", pos: "CM", overall: 82 },
      { name: "Maicon", pos: "CM", overall: 77 },
      { name: "Everton", pos: "RW", overall: 81 },
      { name: "Luan", pos: "AM", overall: 80 },
      { name: "Lucas Barrios", pos: "ST", overall: 78 },
      { name: "Fernandinho", pos: "LW", overall: 77 }
    ]
  },
  {
    id: "mun_pachuca_2017", name: "Pachuca", season: "2017", country: "MX", flag: "🇲🇽",
    formation: "4-4-2",
    players: [
      { name: "Óscar Pérez", pos: "GK", overall: 79 },
      { name: "Óscar Murillo", pos: "CB", overall: 76 },
      { name: "Raúl López", pos: "RB", overall: 76 },
      { name: "Miguel Ángel Ponce", pos: "LB", overall: 76 },
      { name: "Franco Jara", pos: "ST", overall: 78 },
      { name: "Erick Aguirre", pos: "CM", overall: 76 },
      { name: "Rodolfo Pizarro", pos: "AM", overall: 80 },
      { name: "Víctor Guzmán", pos: "CM", overall: 76 },
      { name: "Ismael Sosa", pos: "RW", overall: 77 },
      { name: "Jonathan Urretaviscaya", pos: "LW", overall: 77 },
      { name: "Nicolás Ibáñez", pos: "ST", overall: 76 }
    ]
  },
  {
    id: "mun_aljazira_2017", name: "Al-Jazira", season: "2017", country: "AE", flag: "🇦🇪",
    formation: "4-4-2",
    players: [
      { name: "Ali Khaseif", pos: "GK", overall: 80 },
      { name: "Yousif Jaber", pos: "RB", overall: 75 },
      { name: "Mohamed Fawzi", pos: "CB", overall: 75 },
      { name: "Ismail Ahmed", pos: "CB", overall: 75 },
      { name: "Bandar Al Ahbabi", pos: "LB", overall: 75 },
      { name: "Mohamed Al Attas", pos: "CM", overall: 75 },
      { name: "Ali Mabkhout", pos: "ST", overall: 80 },
      { name: "Romarinho", pos: "RW", overall: 78 },
      { name: "Rashed Eisa", pos: "CM", overall: 75 },
      { name: "Douglas", pos: "LW", overall: 76 },
      { name: "Mirel Rădoi", pos: "CM", overall: 76 }
    ]
  },

  // ───────── 2018 ─────────
  {
    id: "mun_realmadrid_2018", name: "Real Madrid", season: "2018", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Thibaut Courtois", pos: "GK", overall: 89 },
      { name: "Dani Carvajal", pos: "RB", overall: 84 },
      { name: "Sergio Ramos", pos: "CB", overall: 89 },
      { name: "Raphaël Varane", pos: "CB", overall: 87 },
      { name: "Marcelo", pos: "LB", overall: 86 },
      { name: "Casemiro", pos: "CM", overall: 86 },
      { name: "Toni Kroos", pos: "CM", overall: 88 },
      { name: "Luka Modrić", pos: "AM", overall: 90 },
      { name: "Gareth Bale", pos: "RW", overall: 85 },
      { name: "Karim Benzema", pos: "ST", overall: 85 },
      { name: "Marco Asensio", pos: "LW", overall: 83 }
    ]
  },
  {
    id: "mun_alain_2018", name: "Al Ain", season: "2018", country: "AE", flag: "🇦🇪",
    formation: "4-4-2",
    players: [
      { name: "Khalid Eisa", pos: "GK", overall: 79 },
      { name: "Mohammed Barghash", pos: "RB", overall: 75 },
      { name: "Ismail Matar", pos: "AM", overall: 79 },
      { name: "Mohanad Salem", pos: "CM", overall: 76 },
      { name: "Yahia Nader", pos: "CB", overall: 75 },
      { name: "Tsukasa Shiotani", pos: "CB", overall: 76 },
      { name: "Caio Lucas", pos: "RW", overall: 77 },
      { name: "Marcus Berg", pos: "ST", overall: 80 },
      { name: "Hussein El Shahat", pos: "LW", overall: 77 },
      { name: "Kwon Kyung-won", pos: "LB", overall: 75 },
      { name: "Ahmed Barman", pos: "CM", overall: 75 }
    ]
  },
  {
    id: "mun_riverplate_2018", name: "River Plate", season: "2018", country: "AR", flag: "🇦🇷",
    formation: "4-3-3",
    players: [
      { name: "Franco Armani", pos: "GK", overall: 84 },
      { name: "Gonzalo Montiel", pos: "RB", overall: 78 },
      { name: "Jonatan Maidana", pos: "CB", overall: 79 },
      { name: "Javier Pinola", pos: "CB", overall: 79 },
      { name: "Milton Casco", pos: "LB", overall: 77 },
      { name: "Leonardo Ponzio", pos: "CM", overall: 78 },
      { name: "Exequiel Palacios", pos: "CM", overall: 79 },
      { name: "Gonzalo Martínez", pos: "AM", overall: 81 },
      { name: "Ignacio Scocco", pos: "ST", overall: 79 },
      { name: "Lucas Pratto", pos: "ST", overall: 79 },
      { name: "Rafael Santos Borré", pos: "LW", overall: 79 }
    ]
  },
  {
    id: "mun_kashimaantlers_2018", name: "Kashima Antlers", season: "2018", country: "JP", flag: "🇯🇵",
    formation: "4-4-2",
    players: [
      { name: "Kwoon Sun-tae", pos: "GK", overall: 79 },
      { name: "Gen Shoji", pos: "CB", overall: 79 },
      { name: "Naomichi Ueda", pos: "CB", overall: 79 },
      { name: "Daigo Nishi", pos: "RB", overall: 76 },
      { name: "Ryota Nagaki", pos: "CM", overall: 77 },
      { name: "Gaku Shibasaki", pos: "AM", overall: 80 },
      { name: "Shoma Doi", pos: "RW", overall: 79 },
      { name: "Yuma Suzuki", pos: "ST", overall: 79 },
      { name: "Serginho", pos: "ST", overall: 78 },
      { name: "Kento Misao", pos: "LB", overall: 76 },
      { name: "Leo Silva", pos: "CM", overall: 77 }
    ]
  },

  // ───────── 2019 ─────────
  {
    id: "mun_liverpool_2019", name: "Liverpool", season: "2019", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "Alisson", pos: "GK", overall: 89 },
      { name: "Trent Alexander-Arnold", pos: "RB", overall: 84 },
      { name: "Virgil van Dijk", pos: "CB", overall: 90 },
      { name: "Joe Gomez", pos: "CB", overall: 81 },
      { name: "Andrew Robertson", pos: "LB", overall: 85 },
      { name: "Fabinho", pos: "CM", overall: 85 },
      { name: "Jordan Henderson", pos: "CM", overall: 83 },
      { name: "Georginio Wijnaldum", pos: "CM", overall: 83 },
      { name: "Mohamed Salah", pos: "RW", overall: 89 },
      { name: "Roberto Firmino", pos: "ST", overall: 86 },
      { name: "Sadio Mané", pos: "LW", overall: 88 }
    ]
  },
  {
    id: "mun_flamengo_2019", name: "Flamengo", season: "2019", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Diego Alves", pos: "GK", overall: 82 },
      { name: "Rafinha", pos: "RB", overall: 78 },
      { name: "Rodrigo Caio", pos: "CB", overall: 79 },
      { name: "Pablo Marí", pos: "CB", overall: 78 },
      { name: "Filipe Luís", pos: "LB", overall: 81 },
      { name: "Willian Arão", pos: "CM", overall: 78 },
      { name: "Gerson", pos: "CM", overall: 80 },
      { name: "Everton Ribeiro", pos: "AM", overall: 82 },
      { name: "Bruno Henrique", pos: "RW", overall: 81 },
      { name: "Gabriel Barbosa", pos: "ST", overall: 83 },
      { name: "Arrascaeta", pos: "LW", overall: 82 }
    ]
  },
  {
    id: "mun_monterrey_2019", name: "Monterrey", season: "2019", country: "MX", flag: "🇲🇽",
    formation: "4-4-2",
    players: [
      { name: "Marcelo Barovero", pos: "GK", overall: 81 },
      { name: "Nicolás Sánchez", pos: "RB", overall: 77 },
      { name: "César Montes", pos: "CB", overall: 78 },
      { name: "Jesús Gallardo", pos: "LB", overall: 78 },
      { name: "Carlos Rodríguez", pos: "CM", overall: 77 },
      { name: "Celso Ortiz", pos: "CM", overall: 76 },
      { name: "Rogelio Funes Mori", pos: "ST", overall: 80 },
      { name: "Aviléz Zamora", pos: "CB", overall: 76 },
      { name: "Vincent Janssen", pos: "ST", overall: 78 },
      { name: "Maxi Meza", pos: "RW", overall: 79 },
      { name: "Jonathan González", pos: "LW", overall: 76 }
    ]
  },
  {
    id: "mun_alhilal_2019", name: "Al Hilal", season: "2019", country: "SA", flag: "🇸🇦",
    formation: "4-4-2",
    players: [
      { name: "Abdullah Al Mayouf", pos: "GK", overall: 80 },
      { name: "Yasser Al Shahrani", pos: "LB", overall: 78 },
      { name: "Ali Al Bulayhi", pos: "CB", overall: 78 },
      { name: "Jang Hyun-soo", pos: "CB", overall: 77 },
      { name: "Mohammed Al Breik", pos: "RB", overall: 76 },
      { name: "Salem Al-Dawsari", pos: "RW", overall: 79 },
      { name: "Sebastián Giovinco", pos: "AM", overall: 81 },
      { name: "André Carrillo", pos: "LW", overall: 79 },
      { name: "Bafétimbi Gomis", pos: "ST", overall: 80 },
      { name: "Yasir Al Shahrani", pos: "CM", overall: 76 },
      { name: "Mohammed Kanno", pos: "CM", overall: 77 }
    ]
  },

  // ───────── 2020 ─────────
  {
    id: "mun_bayernmunchen_2020", name: "Bayern Munchen", season: "2020", country: "DE", flag: "🇩🇪",
    formation: "4-2-3-1",
    players: [
      { name: "Manuel Neuer", pos: "GK", overall: 90 },
      { name: "Joshua Kimmich", pos: "RB", overall: 88 },
      { name: "Jérôme Boateng", pos: "CB", overall: 84 },
      { name: "David Alaba", pos: "CB", overall: 86 },
      { name: "Alphonso Davies", pos: "LB", overall: 84 },
      { name: "Leon Goretzka", pos: "CM", overall: 86 },
      { name: "Thiago Alcântara", pos: "CM", overall: 87 },
      { name: "Thomas Müller", pos: "AM", overall: 87 },
      { name: "Serge Gnabry", pos: "RW", overall: 85 },
      { name: "Robert Lewandowski", pos: "ST", overall: 95 },
      { name: "Kingsley Coman", pos: "LW", overall: 84 }
    ]
  },
  {
    id: "mun_tigres_2020", name: "Tigres", season: "2020", country: "MX", flag: "🇲🇽",
    formation: "4-4-2",
    players: [
      { name: "Nahuel Guzmán", pos: "GK", overall: 83 },
      { name: "Luis Rodríguez", pos: "RB", overall: 77 },
      { name: "Carlos Salcedo", pos: "CB", overall: 79 },
      { name: "Hugo Ayala", pos: "CB", overall: 78 },
      { name: "Javier Aquino", pos: "LW", overall: 79 },
      { name: "Guido Pizarro", pos: "CM", overall: 79 },
      { name: "Jürgen Damm", pos: "RW", overall: 77 },
      { name: "André-Pierre Gignac", pos: "ST", overall: 84 },
      { name: "Florian Thauvin", pos: "AM", overall: 82 },
      { name: "Diego Reyes", pos: "CB", overall: 78 },
      { name: "Rafael de Souza", pos: "LB", overall: 76 }
    ]
  },
  {
    id: "mun_palmeiras_2020", name: "Palmeiras", season: "2020", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Weverton", pos: "GK", overall: 82 },
      { name: "Marcos Rocha", pos: "RB", overall: 78 },
      { name: "Luan", pos: "CB", overall: 77 },
      { name: "Gustavo Gómez", pos: "CB", overall: 82 },
      { name: "Vitor Hugo", pos: "CB", overall: 77 },
      { name: "Felipe Melo", pos: "CM", overall: 79 },
      { name: "Danilo", pos: "CM", overall: 78 },
      { name: "Gabriel Menino", pos: "RW", overall: 77 },
      { name: "Rony", pos: "LW", overall: 78 },
      { name: "Luiz Adriano", pos: "ST", overall: 79 },
      { name: "Raphael Veiga", pos: "AM", overall: 80 }
    ]
  },
  {
    id: "mun_alduhail_2020", name: "Al-Duhail", season: "2020", country: "QA", flag: "🇶🇦",
    formation: "4-4-2",
    players: [
      { name: "Saad Al Sheeb", pos: "GK", overall: 79 },
      { name: "Bassam Al Rawi", pos: "RB", overall: 76 },
      { name: "Boualem Khoukhi", pos: "CB", overall: 77 },
      { name: "Ró-Ró", pos: "CM", overall: 78 },
      { name: "Karim Boudiaf", pos: "CM", overall: 78 },
      { name: "Michael Olunga", pos: "ST", overall: 80 },
      { name: "Edmilson Junior", pos: "RW", overall: 78 },
      { name: "Tarek Salman", pos: "CB", overall: 76 },
      { name: "Almoez Ali", pos: "ST", overall: 80 },
      { name: "Musaab Khidir", pos: "LB", overall: 75 },
      { name: "Bilal Rajab", pos: "LW", overall: 76 }
    ]
  },

  // ───────── 2021 ─────────
  {
    id: "mun_chelsea_2021", name: "Chelsea", season: "2021", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "3-4-3",
    players: [
      { name: "Édouard Mendy", pos: "GK", overall: 84 },
      { name: "Reece James", pos: "RB", overall: 83 },
      { name: "Thiago Silva", pos: "CB", overall: 85 },
      { name: "Antonio Rüdiger", pos: "CB", overall: 85 },
      { name: "Ben Chilwell", pos: "LB", overall: 82 },
      { name: "N'Golo Kanté", pos: "CM", overall: 89 },
      { name: "Jorginho", pos: "CM", overall: 84 },
      { name: "Mason Mount", pos: "AM", overall: 84 },
      { name: "Kai Havertz", pos: "ST", overall: 83 },
      { name: "Timo Werner", pos: "RW", overall: 82 },
      { name: "Christian Pulisic", pos: "LW", overall: 82 }
    ]
  },
  {
    id: "mun_palmeiras_2021", name: "Palmeiras", season: "2021", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Weverton", pos: "GK", overall: 83 },
      { name: "Marcos Rocha", pos: "RB", overall: 78 },
      { name: "Luan", pos: "CB", overall: 71 },
      { name: "Gustavo Gómez", pos: "CB", overall: 83 },
      { name: "Renan", pos: "LB", overall: 77 },
      { name: "Danilo", pos: "CM", overall: 79 },
      { name: "Zé Rafael", pos: "CM", overall: 78 },
      { name: "Raphael Veiga", pos: "AM", overall: 81 },
      { name: "Rony", pos: "LW", overall: 79 },
      { name: "Deyverson", pos: "ST", overall: 77 },
      { name: "Wesley", pos: "RW", overall: 77 }
    ]
  },
  {
    id: "mun_alahly_2021", name: "Al Ahly", season: "2021", country: "EG", flag: "🇪🇬",
    formation: "4-3-3",
    players: [
      { name: "Mohamed El Shenawy", pos: "GK", overall: 83 },
      { name: "Yasser Ibrahim", pos: "CB", overall: 79 },
      { name: "Ali Maher", pos: "CB", overall: 77 },
      { name: "Mohamed Hany", pos: "RB", overall: 76 },
      { name: "Aliou Dieng", pos: "LB", overall: 76 },
      { name: "Aliou Badji", pos: "CM", overall: 76 },
      { name: "Amr El Sulya", pos: "CM", overall: 76 },
      { name: "Percy Tau", pos: "RW", overall: 80 },
      { name: "Mohamed Sherif", pos: "ST", overall: 78 },
      { name: "Hussein El Shahat", pos: "LW", overall: 78 },
      { name: "Aliou Dieng II", pos: "CM", overall: 76 }
    ]
  },
  {
    id: "mun_alhilal_2021", name: "Al Hilal", season: "2021", country: "SA", flag: "🇸🇦",
    formation: "4-4-2",
    players: [
      { name: "Abdullah Al Mayouf", pos: "GK", overall: 80 },
      { name: "Yasser Al Shahrani", pos: "LB", overall: 79 },
      { name: "Ali Al Bulayhi", pos: "CB", overall: 79 },
      { name: "Jang Hyun-soo", pos: "CB", overall: 78 },
      { name: "Mohammed Al Breik", pos: "RB", overall: 77 },
      { name: "Salem Al-Dawsari", pos: "RW", overall: 81 },
      { name: "Sebastián Giovinco", pos: "AM", overall: 80 },
      { name: "Moussa Marega", pos: "ST", overall: 80 },
      { name: "André Carrillo", pos: "LW", overall: 79 },
      { name: "Mohammed Kanno", pos: "CM", overall: 78 },
      { name: "Luciano Vietto", pos: "CM", overall: 78 }
    ]
  },

  // ───────── 2022 ─────────
  {
    id: "mun_realmadrid_2022", name: "Real Madrid", season: "2022", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Thibaut Courtois", pos: "GK", overall: 90 },
      { name: "Dani Carvajal", pos: "RB", overall: 84 },
      { name: "Éder Militão", pos: "CB", overall: 85 },
      { name: "David Alaba", pos: "CB", overall: 86 },
      { name: "Ferland Mendy", pos: "LB", overall: 83 },
      { name: "Casemiro", pos: "CM", overall: 88 },
      { name: "Toni Kroos", pos: "CM", overall: 87 },
      { name: "Luka Modrić", pos: "AM", overall: 87 },
      { name: "Vinícius Júnior", pos: "LW", overall: 87 },
      { name: "Karim Benzema", pos: "ST", overall: 91 },
      { name: "Federico Valverde", pos: "RW", overall: 84 }
    ]
  },
  {
    id: "mun_alhilal_2022", name: "Al Hilal", season: "2022", country: "SA", flag: "🇸🇦",
    formation: "4-4-2",
    players: [
      { name: "Al Mayouf", pos: "GK", overall: 81 },
      { name: "Ali Al Bulayhi", pos: "CB", overall: 79 },
      { name: "H. Jang", pos: "CB", overall: 80 },
      { name: "Carrillo", pos: "RB", overall: 76 },
      { name: "Yasser Al Shahrani", pos: "LB", overall: 79 },
      { name: "Rúben Neves", pos: "CM", overall: 84 },
      { name: "Mohammed Kanno", pos: "CM", overall: 79 },
      { name: "Salem Al-Dawsari", pos: "RW", overall: 81 },
      { name: "Marega", pos: "LW", overall: 81 },
      { name: "Ighalo", pos: "ST", overall: 84 },
      { name: "Gustavo Leonardo", pos: "AM", overall: 80 }
    ]
  },
  {
    id: "mun_flamengo_2022", name: "Flamengo", season: "2022", country: "BR", flag: "🇧🇷",
    formation: "4-3-3",
    players: [
      { name: "Santos", pos: "GK", overall: 81 },
      { name: "Rafinha", pos: "RB", overall: 78 },
      { name: "David Luiz", pos: "CB", overall: 81 },
      { name: "Léo Pereira", pos: "CB", overall: 79 },
      { name: "Ayrton Lucas", pos: "LB", overall: 78 },
      { name: "João Gomes", pos: "CM", overall: 80 },
      { name: "Thiago Maia", pos: "CM", overall: 77 },
      { name: "Arrascaeta", pos: "AM", overall: 83 },
      { name: "Everton Cebolinha", pos: "RW", overall: 80 },
      { name: "Pedro", pos: "ST", overall: 81 },
      { name: "Gabriel Barbosa", pos: "LW", overall: 82 }
    ]
  },
  {
    id: "mun_wydadcasablanca_2022", name: "Wydad Casablanca", season: "2022", country: "MA", flag: "🇲🇦",
    formation: "4-4-2",
    players: [
      { name: "Ahmed Reda Tagnaouti", pos: "GK", overall: 80 },
      { name: "Achraf Dari", pos: "CB", overall: 78 },
      { name: "Mohcine Iajour", pos: "ST", overall: 77 },
      { name: "Yahya Jabrane", pos: "CM", overall: 78 },
      { name: "Zouhair El Moutaraji", pos: "RW", overall: 77 },
      { name: "Ismail El Haddad", pos: "CB", overall: 76 },
      { name: "Anas Zniti", pos: "GK", overall: 77 },
      { name: "Abdelilah Hafidi", pos: "LW", overall: 77 },
      { name: "Guy Mbenza", pos: "ST", overall: 78 },
      { name: "Ayoub El Kaabi", pos: "ST", overall: 80 },
      { name: "Mohamed Ounajem", pos: "AM", overall: 78 }
    ]
  },

  // ───────── 2023 ─────────
  {
    id: "mun_mancity_2023", name: "Manchester City", season: "2023", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-3-3",
    players: [
      { name: "Ederson", pos: "GK", overall: 88 },
      { name: "Kyle Walker", pos: "RB", overall: 85 },
      { name: "Rúben Dias", pos: "CB", overall: 88 },
      { name: "John Stones", pos: "CB", overall: 84 },
      { name: "Nathan Aké", pos: "LB", overall: 82 },
      { name: "Rodri", pos: "CM", overall: 89 },
      { name: "Kevin De Bruyne", pos: "CM", overall: 91 },
      { name: "Bernardo Silva", pos: "AM", overall: 87 },
      { name: "Riyad Mahrez", pos: "RW", overall: 85 },
      { name: "Erling Haaland", pos: "ST", overall: 91 },
      { name: "Jack Grealish", pos: "LW", overall: 84 }
    ]
  },
  {
    id: "mun_fluminense_2023", name: "Fluminense", season: "2023", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Fábio", pos: "GK", overall: 80 },
      { name: "Samuel Xavier", pos: "RB", overall: 77 },
      { name: "Nino", pos: "CB", overall: 79 },
      { name: "Manoel", pos: "CB", overall: 77 },
      { name: "Marcelo", pos: "LB", overall: 79 },
      { name: "André", pos: "CM", overall: 80 },
      { name: "Martinelli", pos: "CM", overall: 77 },
      { name: "Ganso", pos: "AM", overall: 81 },
      { name: "Arias", pos: "RW", overall: 80 },
      { name: "Germán Cano", pos: "ST", overall: 82 },
      { name: "Keno", pos: "LW", overall: 77 }
    ]
  },
  {
    id: "mun_alahly_2023", name: "Al Ahly", season: "2023", country: "EG", flag: "🇪🇬",
    formation: "4-3-3",
    players: [
      { name: "Mohamed El Shenawy", pos: "GK", overall: 84 },
      { name: "Yasser Ibrahim", pos: "CB", overall: 80 },
      { name: "Rami Rabia", pos: "CB", overall: 78 },
      { name: "Ahmed Fatouh", pos: "LB", overall: 77 },
      { name: "Mohamed Hany", pos: "RB", overall: 77 },
      { name: "Aliou Dieng", pos: "CM", overall: 77 },
      { name: "Aliou Badji", pos: "CM", overall: 77 },
      { name: "Mohamed Magdy", pos: "AM", overall: 78 },
      { name: "Percy Tau", pos: "RW", overall: 81 },
      { name: "Hussein El Shahat", pos: "LW", overall: 78 },
      { name: "Ali Maaloul", pos: "LB", overall: 78 }
    ]
  },
  {
    id: "mun_urawaredddiamonds_2023", name: "Urawa Red Diamonds", season: "2023", country: "JP", flag: "🇯🇵",
    formation: "4-4-2",
    players: [
      { name: "Shusaku Nishikawa", pos: "GK", overall: 79 },
      { name: "Hiroki Abe", pos: "RB", overall: 76 },
      { name: "Marius Hoibraten", pos: "CB", overall: 78 },
      { name: "Ataru Esaka", pos: "CB", overall: 76 },
      { name: "Alex Scholz", pos: "LB", overall: 76 },
      { name: "Takuya Ogiwara", pos: "CM", overall: 76 },
      { name: "Shinzo Koroki", pos: "ST", overall: 79 },
      { name: "Yusuke Matsuo", pos: "RW", overall: 76 },
      { name: "Thomas Deng", pos: "CB", overall: 76 },
      { name: "Kasper Junker", pos: "ST", overall: 78 },
      { name: "Daigo Nishi", pos: "LW", overall: 75 }
    ]
  },

  // ───────── 2024 ─────────
  {
    id: "mun_botafogo_2024", name: "Botafogo", season: "2024", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "John", pos: "GK", overall: 81 },
      { name: "Mateo Ponte", pos: "RB", overall: 76 },
      { name: "Bastos", pos: "CB", overall: 78 },
      { name: "Adryelson", pos: "CB", overall: 77 },
      { name: "Alex Telles", pos: "LB", overall: 80 },
      { name: "Marlon Freitas", pos: "CM", overall: 78 },
      { name: "Danilo Barbosa", pos: "CM", overall: 78 },
      { name: "Luiz Henrique", pos: "AM", overall: 80 },
      { name: "Savarino", pos: "RW", overall: 80 },
      { name: "Tiquinho Soares", pos: "ST", overall: 79 },
      { name: "Igor Jesus", pos: "LW", overall: 78 }
    ]
  },
  {
    id: "mun_pachuca_2024", name: "Pachuca", season: "2024", country: "MX", flag: "🇲🇽",
    formation: "4-4-2",
    players: [
      { name: "Carlos Moreno", pos: "GK", overall: 78 },
      { name: "Gustavo Cabral", pos: "CB", overall: 77 },
      { name: "Óscar Murillo", pos: "CB", overall: 77 },
      { name: "Rodrigo Huescas", pos: "RB", overall: 76 },
      { name: "Kevin Álvarez", pos: "LB", overall: 76 },
      { name: "Israel Reyes", pos: "CM", overall: 76 },
      { name: "Nickolas Mari", pos: "CM", overall: 76 },
      { name: "Idrissi Rodríguez", pos: "RW", overall: 77 },
      { name: "Salomón Rondón", pos: "ST", overall: 79 },
      { name: "Erik Sánchez", pos: "LW", overall: 77 },
      { name: "Brian García", pos: "AM", overall: 76 }
    ]
  },
  {
    id: "mun_alahly_2024", name: "Al Ahly", season: "2024", country: "EG", flag: "🇪🇬",
    formation: "4-3-3",
    players: [
      { name: "Mohamed El Shenawy", pos: "GK", overall: 84 },
      { name: "Yasser Ibrahim", pos: "CB", overall: 80 },
      { name: "Rami Rabia", pos: "CB", overall: 79 },
      { name: "Ahmed Fatouh", pos: "LB", overall: 78 },
      { name: "Mohamed Hany", pos: "RB", overall: 77 },
      { name: "Aliou Dieng", pos: "CM", overall: 77 },
      { name: "Emam Ashour", pos: "CM", overall: 78 },
      { name: "Mohamed Magdy", pos: "AM", overall: 78 },
      { name: "Percy Tau", pos: "RW", overall: 81 },
      { name: "Hussein El Shahat", pos: "LW", overall: 78 },
      { name: "Achraf Bencharki", pos: "ST", overall: 79 }
    ]
  },
  {
    id: "mun_realmadrid_2024", name: "Real Madrid", season: "2024", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Andriy Lunin", pos: "GK", overall: 84 },
      { name: "Dani Carvajal", pos: "RB", overall: 83 },
      { name: "Éder Militão", pos: "CB", overall: 84 },
      { name: "Antonio Rüdiger", pos: "CB", overall: 87 },
      { name: "Fran García", pos: "LB", overall: 79 },
      { name: "Aurélien Tchouaméni", pos: "CM", overall: 86 },
      { name: "Federico Valverde", pos: "CM", overall: 87 },
      { name: "Jude Bellingham", pos: "AM", overall: 89 },
      { name: "Vinícius Júnior", pos: "LW", overall: 90 },
      { name: "Rodrygo", pos: "RW", overall: 85 },
      { name: "Joselu", pos: "ST", overall: 78 }
    ]
  },

  // ───────── 2025 ─────────
  {
    id: "mun_flamengo_2025", name: "Flamengo", season: "2025", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Rossi", pos: "GK", overall: 82 },
      { name: "Wesley", pos: "RB", overall: 79 },
      { name: "Léo Ortiz", pos: "CB", overall: 80 },
      { name: "Danilo", pos: "CB", overall: 79 },
      { name: "Ayrton Lucas", pos: "LB", overall: 79 },
      { name: "Erick Pulgar", pos: "CM", overall: 79 },
      { name: "Jorginho", pos: "CM", overall: 80 },
      { name: "Arrascaeta", pos: "AM", overall: 83 },
      { name: "Everton Cebolinha", pos: "RW", overall: 79 },
      { name: "Pedro", pos: "ST", overall: 81 },
      { name: "Luiz Araújo", pos: "LW", overall: 79 }
    ]
  },
  {
    id: "mun_pyramids_2025", name: "Pyramids", season: "2025", country: "EG", flag: "🇪🇬",
    formation: "4-3-3",
    players: [
      { name: "Mohamed El Shenawy", pos: "GK", overall: 82 },
      { name: "Ahmed Ayman", pos: "RB", overall: 76 },
      { name: "Ibrahima Ndiaye", pos: "CB", overall: 77 },
      { name: "Mohamed Abdelmonem", pos: "CB", overall: 78 },
      { name: "Ahmed Fatouh", pos: "LB", overall: 77 },
      { name: "Ali Fathallah", pos: "CM", overall: 77 },
      { name: "Zizo", pos: "RW", overall: 80 },
      { name: "Ahmed Refaat", pos: "CM", overall: 77 },
      { name: "Slavoljub Srnic", pos: "ST", overall: 78 },
      { name: "Achraf Bencharki", pos: "LW", overall: 79 },
      { name: "Fiston Mayele", pos: "ST", overall: 79 }
    ]
  },
  {
    id: "mun_psg_2025", name: "PSG", season: "2025", country: "FR", flag: "🇫🇷",
    formation: "4-3-3",
    players: [
      { name: "Gianluigi Donnarumma", pos: "GK", overall: 89 },
      { name: "Achraf Hakimi", pos: "RB", overall: 90 },
      { name: "Marquinhos", pos: "CB", overall: 90 },
      { name: "Willian Pacho", pos: "CB", overall: 85 },
      { name: "Nuno Mendes", pos: "LB", overall: 87 },
      { name: "Vitinha", pos: "CM", overall: 91 },
      { name: "João Neves", pos: "CM", overall: 87 },
      { name: "Fabián Ruiz", pos: "AM", overall: 86 },
      { name: "Ousmane Dembélé", pos: "RW", overall: 92 },
      { name: "Bradley Barcola", pos: "LW", overall: 85 },
      { name: "Khvicha Kvaratskhelia", pos: "ST", overall: 90 }
    ]
  },
  {
    id: "mun_chelsea_2025", name: "Chelsea", season: "2025", country: "EN", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    formation: "4-2-3-1",
    players: [
      { name: "Robert Sánchez", pos: "GK", overall: 81 },
      { name: "Reece James", pos: "RB", overall: 84 },
      { name: "Levi Colwill", pos: "CB", overall: 80 },
      { name: "Wesley Fofana", pos: "CB", overall: 81 },
      { name: "Marc Cucurella", pos: "LB", overall: 82 },
      { name: "Moisés Caicedo", pos: "CM", overall: 86 },
      { name: "Enzo Fernández", pos: "CM", overall: 86 },
      { name: "Cole Palmer", pos: "AM", overall: 92 },
      { name: "Pedro Neto", pos: "RW", overall: 82 },
      { name: "Nicolas Jackson", pos: "ST", overall: 80 },
      { name: "Noni Madueke", pos: "LW", overall: 80 }
    ]
  },
  {
    id: "mun_realmadrid_2025", name: "Real Madrid", season: "2025", country: "ES", flag: "🇪🇸",
    formation: "4-3-3",
    players: [
      { name: "Thibaut Courtois", pos: "GK", overall: 89 },
      { name: "Dani Carvajal", pos: "RB", overall: 82 },
      { name: "Éder Militão", pos: "CB", overall: 84 },
      { name: "Antonio Rüdiger", pos: "CB", overall: 86 },
      { name: "Ferland Mendy", pos: "LB", overall: 81 },
      { name: "Aurélien Tchouaméni", pos: "CM", overall: 86 },
      { name: "Federico Valverde", pos: "CM", overall: 87 },
      { name: "Jude Bellingham", pos: "AM", overall: 90 },
      { name: "Vinícius Júnior", pos: "LW", overall: 90 },
      { name: "Kylian Mbappé", pos: "ST", overall: 92 },
      { name: "Rodrygo", pos: "RW", overall: 85 }
    ]
  },
  {
    id: "mun_alhilal_2025", name: "Al Hilal", season: "2025", country: "SA", flag: "🇸🇦",
    formation: "4-3-3",
    players: [
      { name: "Yassine Bounou", pos: "GK", overall: 85 },
      { name: "Ali Al Bulayhi", pos: "CB", overall: 79 },
      { name: "Kalidou Koulibaly", pos: "CB", overall: 85 },
      { name: "Sultan Al Ghannam", pos: "RB", overall: 77 },
      { name: "Yasser Al Shahrani", pos: "LB", overall: 79 },
      { name: "Rúben Neves", pos: "CM", overall: 84 },
      { name: "Mohammed Kanno", pos: "CM", overall: 79 },
      { name: "Salem Al-Dawsari", pos: "RW", overall: 81 },
      { name: "Malcom", pos: "LW", overall: 81 },
      { name: "Aleksandar Mitrović", pos: "ST", overall: 83 },
      { name: "Marcos Leonardo", pos: "AM", overall: 79 }
    ]
  },
  {
    id: "mun_fluminense_2025", name: "Fluminense", season: "2025", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Fábio", pos: "GK", overall: 84 },
      { name: "Samuel Xavier", pos: "RB", overall: 77 },
      { name: "Thiago Santos", pos: "CB", overall: 78 },
      { name: "Ignácio", pos: "CB", overall: 76 },
      { name: "Renê", pos: "LB", overall: 77 },
      { name: "Martinelli", pos: "CM", overall: 78 },
      { name: "Lima", pos: "CM", overall: 77 },
      { name: "Jhon Arias", pos: "AM", overall: 81 },
      { name: "Everaldo", pos: "RW", overall: 76 },
      { name: "Germán Cano", pos: "ST", overall: 80 },
      { name: "Serna", pos: "LW", overall: 76 }
    ]
  },
  {
    id: "mun_palmeiras_2025", name: "Palmeiras", season: "2025", country: "BR", flag: "🇧🇷",
    formation: "4-2-3-1",
    players: [
      { name: "Weverton", pos: "GK", overall: 82 },
      { name: "Marcos Rocha", pos: "RB", overall: 76 },
      { name: "Gustavo Gómez", pos: "CB", overall: 83 },
      { name: "Murilo", pos: "CB", overall: 78 },
      { name: "Piquerez", pos: "LB", overall: 78 },
      { name: "Richard Ríos", pos: "CM", overall: 80 },
      { name: "Zé Rafael", pos: "CM", overall: 78 },
      { name: "Raphael Veiga", pos: "AM", overall: 80 },
      { name: "Estêvão", pos: "RW", overall: 82 },
      { name: "Flaco López", pos: "ST", overall: 78 },
      { name: "Vitor Roque", pos: "LW", overall: 79 }
    ]
  },
  {
    id: "mun_borussiadortmund_2025", name: "Borussia Dortmund", season: "2025", country: "DE", flag: "🇩🇪",
    formation: "4-2-3-1",
    players: [
      { name: "Gregor Kobel", pos: "GK", overall: 85 },
      { name: "Julian Ryerson", pos: "RB", overall: 78 },
      { name: "Nico Schlotterbeck", pos: "CB", overall: 83 },
      { name: "Waldemar Anton", pos: "CB", overall: 79 },
      { name: "Ramy Bensebaini", pos: "LB", overall: 80 },
      { name: "Emre Can", pos: "CM", overall: 81 },
      { name: "Felix Nmecha", pos: "CM", overall: 80 },
      { name: "Julian Brandt", pos: "AM", overall: 83 },
      { name: "Karim Adeyemi", pos: "RW", overall: 81 },
      { name: "Serhou Guirassy", pos: "ST", overall: 83 },
      { name: "Maximilian Beier", pos: "LW", overall: 78 }
    ]
  },
  {
    id: "mun_bayernmunchen_2025", name: "Bayern Munchen", season: "2025", country: "DE", flag: "🇩🇪",
    formation: "4-2-3-1",
    players: [
      { name: "Manuel Neuer", pos: "GK", overall: 86 },
      { name: "Josip Stanišić", pos: "RB", overall: 78 },
      { name: "Dayot Upamecano", pos: "CB", overall: 84 },
      { name: "Min-jae Kim", pos: "CB", overall: 83 },
      { name: "Alphonso Davies", pos: "LB", overall: 85 },
      { name: "Joshua Kimmich", pos: "CM", overall: 88 },
      { name: "Aleksandar Pavlović", pos: "CM", overall: 80 },
      { name: "Jamal Musiala", pos: "AM", overall: 88 },
      { name: "Michael Olise", pos: "RW", overall: 84 },
      { name: "Harry Kane", pos: "ST", overall: 91 },
      { name: "Leroy Sané", pos: "LW", overall: 82 }
    ]
  },
  {
    id: "mun_monterrey_2025", name: "Monterrey", season: "2025", country: "MX", flag: "🇲🇽",
    formation: "4-4-2",
    players: [
      { name: "Esteban Andrada", pos: "GK", overall: 80 },
      { name: "Stefan Medina", pos: "RB", overall: 77 },
      { name: "Sergio Ramos", pos: "CB", overall: 80 },
      { name: "Víctor Guzmán", pos: "CB", overall: 77 },
      { name: "Gerardo Arteaga", pos: "LB", overall: 79 },
      { name: "Sergio Canales", pos: "AM", overall: 82 },
      { name: "Jorge Rodríguez", pos: "CM", overall: 76 },
      { name: "Jesús Corona", pos: "RW", overall: 79 },
      { name: "German Berterame", pos: "ST", overall: 78 },
      { name: "Brandon Vázquez", pos: "ST", overall: 78 },
      { name: "Óliver Torres", pos: "LW", overall: 78 }
    ]
  }

];
