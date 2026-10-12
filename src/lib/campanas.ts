export const tarjetas = [
  {
    exchange: "mexc",
    type: "bienvenida",
    level: "principiante",
    req: "sin-deposito",
    status: "activa",
    title: "Promo MEXC: Ganar Más De 100$ GRATIS",
    desc: "Guía completa y tutorial de Elsa paso a paso para nuevos registros: cómo reclamar tu bono de bienvenida y recompensas exclusivas sin complicaciones.",
    benefit: "Bono de bienvenida + Airdrop verificado (+100$)",
    deadline: "Campaña Activa",
    id: "mexc-100-gratis",
  },
  {
    exchange: "mexc",
    type: "trading",
    level: "intermedio",
    req: "trading",
    status: "activa",
    title: "Mega Cash Reward 7.0: disponible (finanzas tradicionales)",
    desc: "Participa en la edición 7.0 de Mega Cash Reward para operar pares TradFi en MEXC y acceder a recompensas en efectivo de mayor escala.",
    benefit: "Mayores recompensas promocionales en USDT",
    deadline: "31 Mar 2026",
    id: "mexc-tradfi",
  },
  {
    exchange: "mexc",
    type: "depositos",
    level: "principiante",
    req: "con-deposito",
    status: "activa",
    title: "Deposita USD y Gana Hasta 520 USDT",
    desc: "Evento especial de depósito fiat/USD en MEXC: 20 USDT Airdrop garantizado en tu primer depósito + bonificaciones acumulables hasta 500 USDT.",
    benefit: "20 USDT Airdrop primer depósito + hasta 500 USDT",
    deadline: "Cupos mensuales",
    id: "mexc-deposit-520",
  },
  {
    exchange: "mexc",
    type: "trading",
    level: "avanzado",
    req: "trading",
    status: "activa",
    title: "MEXC VVIP Futures Loss Protection",
    desc: "Protección escalonada contra pérdidas en contratos de futuros MEXC diseñada para proteger el balance de traders participantes.",
    benefit: "Tiered Loss Rebates (Reembolso de pérdidas)",
    deadline: "Vigente",
    id: "mexc-loss-protection",
  },
  {
    exchange: "mexc",
    type: "recompensas",
    level: "intermedio",
    req: "trading",
    status: "activa",
    title: "Evento Futures M-Day",
    desc: "Participa en la ronda periódica de M-Day de Futuros MEXC: gana un bono de bienvenida de 20$ y boletos para los sorteos diarios.",
    benefit: "$20 Welcome Bonus + Lucky Draws",
    deadline: "Rondas Periódicas",
    id: "mexc-mday",
  },
  {
    exchange: "mexc",
    type: "recompensas",
    level: "principiante",
    req: "con-deposito",
    status: "activa",
    title: "Festival de lanzamiento Earn Plus: 800 % anualizado",
    desc: "Festival debut de Earn Plus en MEXC con rendimiento temporal de hasta 800% APR promocional para staking de activos estables.",
    benefit:
      "Rendimientos promocionales por participación en USDT (hasta 800% APR)",
    deadline: "Temporada Especial",
    id: "mexc-earn-plus",
  },
  {
    exchange: "mexc",
    type: "referidos",
    level: "intermedio",
    req: "sin-deposito",
    status: "activa",
    title: "Evento Embajadores de octubre",
    desc: "Concurso oficial Outreach Captain con bolsa de 10,000 USDT en premios y multiplicadores de 1.5x por recomendación comunitaria.",
    benefit: "Bolsa de 10.000 USDT y multiplicador de 1,5×",
    deadline: "Edición Outreach",
    id: "mexc-outreach",
  },
];
export const campanas: Record<
  string,
  {
    exchange: string;
    exchangeBadge: string;
    badgeBg: string;
    title: string;
    status: string;
    statusClass: string;
    summary: string;
    benefit: string;
    reqs: string[];
    officialUrl: string;
  }
> = {
  "mexc-100-gratis": {
    exchange: "MEXC",
    exchangeBadge: "MEXC",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    title: "Promo MEXC: Ganar Más De 100$ GRATIS",
    status: "activa",
    statusClass: "bg-emerald-100 text-emerald-800",
    summary:
      "Guía completa y tutorial de Elsa paso a paso para nuevos registros: cómo reclamar tu bono de bienvenida y recompensas exclusivas sin complicaciones.",
    benefit: "Bono de bienvenida + Airdrop verificado (+100$)",
    reqs: [
      "Nivel: principiante",
      "Requisito: sin-deposito",
      "Plazo indicado en el diseño: Campaña Activa",
      "Consultar vigencia, elegibilidad y condiciones en la plataforma oficial.",
    ],
    officialUrl: "https://www.mexc.com",
  },
  "mexc-tradfi": {
    exchange: "MEXC",
    exchangeBadge: "MEXC",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    title: "Mega Cash Reward 7.0 (TradFi)",
    status: "activa",
    statusClass: "bg-emerald-100 text-emerald-800",
    summary:
      "Participa en la edición 7.0 de Mega Cash Reward para operar pares TradFi en MEXC y acceder a recompensas en efectivo de mayor escala.",
    benefit: "Mayores recompensas promocionales en USDT",
    reqs: [
      "Nivel: intermedio",
      "Requisito: trading",
      "Plazo indicado en el diseño: 31 Mar 2026",
      "Consultar vigencia, elegibilidad y condiciones en la plataforma oficial.",
    ],
    officialUrl: "https://www.mexc.com",
  },
  "mexc-deposit-520": {
    exchange: "MEXC",
    exchangeBadge: "MEXC",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    title: "Deposita USD y Gana Hasta 520 USDT",
    status: "activa",
    statusClass: "bg-emerald-100 text-emerald-800",
    summary:
      "Evento especial de depósito fiat/USD en MEXC: 20 USDT Airdrop garantizado en tu primer depósito + bonificaciones acumulables hasta 500 USDT.",
    benefit: "20 USDT Airdrop primer depósito + hasta 500 USDT",
    reqs: [
      "Nivel: principiante",
      "Requisito: con-deposito",
      "Plazo indicado en el diseño: Cupos mensuales",
      "Consultar vigencia, elegibilidad y condiciones en la plataforma oficial.",
    ],
    officialUrl: "https://www.mexc.com",
  },
  "mexc-loss-protection": {
    exchange: "MEXC",
    exchangeBadge: "MEXC",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    title: "VVIP Futures Loss Protection",
    status: "activa",
    statusClass: "bg-emerald-100 text-emerald-800",
    summary:
      "Protección escalonada contra pérdidas en contratos de futuros MEXC diseñada para proteger el balance de traders participantes.",
    benefit: "Tiered Loss Rebates (Reembolso de pérdidas)",
    reqs: [
      "Nivel: avanzado",
      "Requisito: trading",
      "Plazo indicado en el diseño: Vigente",
      "Consultar vigencia, elegibilidad y condiciones en la plataforma oficial.",
    ],
    officialUrl: "https://www.mexc.com",
  },
  "mexc-mday": {
    exchange: "MEXC",
    exchangeBadge: "MEXC",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    title: "Evento Futures M-Day",
    status: "activa",
    statusClass: "bg-emerald-100 text-emerald-800",
    summary:
      "Participa en la ronda periódica de M-Day de Futuros MEXC: gana un bono de bienvenida de 20$ y boletos para los sorteos diarios.",
    benefit: "$20 Welcome Bonus + Lucky Draws",
    reqs: [
      "Nivel: intermedio",
      "Requisito: trading",
      "Plazo indicado en el diseño: Rondas Periódicas",
      "Consultar vigencia, elegibilidad y condiciones en la plataforma oficial.",
    ],
    officialUrl: "https://www.mexc.com",
  },
  "mexc-earn-plus": {
    exchange: "MEXC",
    exchangeBadge: "MEXC",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    title: "Festival de lanzamiento Earn Plus: 800 % anualizado",
    status: "activa",
    statusClass: "bg-emerald-100 text-emerald-800",
    summary:
      "Festival debut de Earn Plus en MEXC con rendimiento temporal de hasta 800% APR promocional para staking de activos estables.",
    benefit:
      "Rendimientos promocionales por participación en USDT (hasta 800% APR)",
    reqs: [
      "Nivel: principiante",
      "Requisito: con-deposito",
      "Plazo indicado en el diseño: Temporada Especial",
      "Consultar vigencia, elegibilidad y condiciones en la plataforma oficial.",
    ],
    officialUrl: "https://www.mexc.com",
  },
  "mexc-outreach": {
    exchange: "MEXC",
    exchangeBadge: "MEXC",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    title: "Evento Embajadores de octubre",
    status: "activa",
    statusClass: "bg-emerald-100 text-emerald-800",
    summary:
      "Concurso oficial Outreach Captain con bolsa de 10,000 USDT en premios y multiplicadores de 1.5x por recomendación comunitaria.",
    benefit: "Bolsa de 10.000 USDT y multiplicador de 1,5×",
    reqs: [
      "Nivel: intermedio",
      "Requisito: sin-deposito",
      "Plazo indicado en el diseño: Edición Outreach",
      "Consultar vigencia, elegibilidad y condiciones en la plataforma oficial.",
    ],
    officialUrl: "https://www.mexc.com",
  },
};
