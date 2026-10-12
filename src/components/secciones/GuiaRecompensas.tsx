export function GuiaRecompensas() {
  return (
    <section
      id="guia-recompensas"
      aria-labelledby="titulo-guia-recompensas"
      className="relative overflow-hidden border-t border-brand-gold/20 bg-brand-gold-subtle py-16 sm:py-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="min-w-0">
          <div className="overflow-hidden rounded-[24px] border border-brand-gold/30 bg-brand-dark p-2 shadow-card-soft sm:p-3">
            <iframe
              src="https://www.youtube-nocookie.com/embed/hGdc1TxDt-k"
              title="Guía de Elsa Maneiro para aprovechar las recompensas de campañas de exchanges"
              className="aspect-video w-full rounded-2xl border-0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-1 text-xs text-brand-muted">
            <span>Una guía para empezar, a tu ritmo.</span>
            <a
              href="https://www.youtube.com/watch?v=hGdc1TxDt-k"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-fuchsia hover:underline"
            >
              Ver en YouTube ↗
            </a>
          </div>
        </div>

        <div className="min-w-0">
          <p className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-fuchsia">
            <span aria-hidden="true" className="h-px w-9 bg-brand-gold" />
            Aprende conmigo
          </p>
          <h2
            id="titulo-guia-recompensas"
            className="font-editorial text-4xl leading-[1.08] tracking-tight text-brand-dark sm:text-5xl lg:text-6xl"
          >
            Te explico cómo aprovechar las{" "}
            <span className="italic text-brand-fuchsia">recompensas cripto.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-muted sm:text-lg">
            Las campañas de los exchanges pueden parecer complicadas al
            principio. En este video te acompaño paso a paso para entender qué
            ofrecen, revisar sus requisitos y aprender cómo participar.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-brand-muted">
            Empieza por la guía y después explora el catálogo para encontrar las
            campañas que se adapten a ti. Cada recompensa depende de las
            condiciones y la disponibilidad de la plataforma.
          </p>
          <a
            href="#campanas"
            className="mt-7 inline-flex items-center gap-3 border-b border-brand-gold pb-2 text-sm font-bold text-brand-dark transition-colors hover:border-brand-fuchsia hover:text-brand-fuchsia"
          >
            Descubrir las campañas
            <span aria-hidden="true" className="text-brand-fuchsia">→</span>
          </a>
          <p className="font-editorial mt-7 text-2xl italic text-brand-muted">
            Con cariño, Elsa.
          </p>
        </div>
      </div>
    </section>
  );
}
