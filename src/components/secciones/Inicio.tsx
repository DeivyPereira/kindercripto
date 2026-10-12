import { configuracion, enlaceWhatsApp } from "@/lib/configuracion";
export function Inicio() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-[#FFF5F9] via-[#FAF9FC] to-[#FAF9FC]"
    >
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-brand-fuchsia/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute top-32 right-10 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-fuchsia/20 shadow-sm badge-shimmer">
              <span className="text-xs">{"✨"}</span>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-dark">
                {"TU PRIMER PASO EN EL MUNDO CRIPTO"}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight leading-[1.12]">
              {"\n            Descubre "}
              <span className="gradient-text-hero">
                {"oportunidades cripto"}
              </span>
              {". Aprende a aprovecharlas.\n          "}
            </h1>

            <p className="text-lg sm:text-xl text-brand-muted leading-relaxed max-w-2xl font-normal">
              {
                "\n            Explora campañas de exchanges, conoce sus recompensas y aprende paso a paso con "
              }
              <strong className="text-brand-dark font-semibold">
                {"Elsa Maneiro"}
              </strong>
              {", tu mentora cripto para principiantes.\n          "}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#campanas"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-brand-fuchsia text-white font-bold text-base shadow-glow-fuchsia hover:bg-brand-fuchsia-dark hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span className="">{"Explorar campañas"}</span>
                <svg
                  className="w-5 h-5 text-brand-gold-light"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </a>
              <a
                target="_blank"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white border-2 border-brand-border text-brand-dark font-bold text-base hover:border-brand-fuchsia/40 hover:bg-brand-fuchsia-light/50 transition-all"
                rel="noopener noreferrer"
                href={enlaceWhatsApp(
                  "Hola%20Elsa,%20quiero%20hablar%20contigo%20acerca%20de%20KinderCripto.",
                )}
              >
                <span className="">{"Quiero hablar con Elsa"}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-brand-border/80">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-fuchsia/10 text-brand-fuchsia flex items-center justify-center font-bold text-sm shrink-0">
                  {"\n                ✓\n              "}
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-dark">
                    {"Paso a paso"}
                  </p>
                  <p className="text-xs text-brand-muted">
                    {"Explicaciones claras y sin tecnicismos."}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-gold/20 text-brand-gold flex items-center justify-center font-bold text-sm shrink-0">
                  {"\n                ✦\n              "}
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-dark">
                    {"Multiexchange"}
                  </p>
                  <p className="text-xs text-brand-muted">
                    {"Binance, MEXC, Bitget y más en un solo lugar."}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-fuchsia/10 text-brand-fuchsia flex items-center justify-center font-bold text-sm shrink-0">
                  {"\n                ♥\n              "}
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-dark">
                    {"Acompañamiento"}
                  </p>
                  <p className="text-xs text-brand-muted">
                    {"Orientación humana y personalizada."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md flex flex-col items-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-fuchsia/30 via-brand-gold/20 to-brand-fuchsia/20 rounded-full blur-2xl transform scale-95 pointer-events-none"></div>
              <div className="relative p-2 rounded-full bg-gradient-to-tr from-brand-fuchsia via-brand-gold to-brand-fuchsia shadow-2xl shadow-glow-fuchsia">
                <div className="relative rounded-full overflow-hidden w-72 h-72 sm:w-80 sm:h-80 border-4 border-white shadow-inner bg-brand-dark flex items-center justify-center">
                  <img
                    src="/elsa-maneiro.png"
                    width={512}
                    height={512}
                    alt="Elsa Maneiro - Mentora KinderCripto"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                </div>
                <div className="absolute -bottom-3 inset-x-0 flex justify-center">
                  <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-dark/90 backdrop-blur-md border border-brand-gold/40 text-white shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-brand-fuchsia animate-pulse"></span>
                    <span className="text-xs font-extrabold tracking-wide">
                      {"Elsa Maneiro"}
                    </span>
                    <span className="text-brand-gold text-[10px] font-semibold uppercase tracking-wider">
                      {"✦ Mentora"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-brand-gold/40 shadow-card-hover flex items-center gap-2.5 floating-card-anim z-10">
                <div className="w-8 h-8 rounded-xl bg-brand-gold/20 text-brand-gold flex items-center justify-center text-base">
                  {"✨"}
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-dark">
                    {"Campañas Verificadas"}
                  </p>
                  <p className="text-[10px] text-brand-muted">
                    {"Linktree oficial"}
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-brand-fuchsia/30 shadow-card-hover flex items-center gap-2.5 floating-card-anim-delayed z-10">
                <div className="w-8 h-8 rounded-xl bg-brand-fuchsia/15 text-brand-fuchsia flex items-center justify-center text-base">
                  {"🚀"}
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-dark">
                    {"Más de 100$ GRATIS"}
                  </p>
                  <p className="text-[10px] text-brand-muted">
                    {"Paso a paso con Elsa"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
