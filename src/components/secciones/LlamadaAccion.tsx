import { configuracion, enlaceWhatsApp } from "@/lib/configuracion";
export function LlamadaAccion() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-fuchsia-dark via-brand-fuchsia to-[#9B0054] text-white relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-80 h-80 bg-brand-gold/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-brand-gold-light/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-brand-gold-light text-xs font-extrabold uppercase tracking-widest border border-white/20 mb-4">
          {"\n        ✦ DA EL SALTO CON SEGURIDAD\n      "}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          {"\n        Tu próximo paso en cripto comienza aquí.\n      "}
        </h2>
        <p className="mt-4 text-base sm:text-lg text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
          {
            "\n        Descubre campañas, aprende a participar y cuenta con la orientación cercana de Elsa Maneiro para avanzar con mayor confianza y tranquilidad.\n      "
          }
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#campanas"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-brand-fuchsia-dark font-extrabold text-sm shadow-xl hover:bg-brand-fuchsia-light transition"
          >
            {"\n          Explorar campañas\n        "}
          </a>
          <a
            target="_blank"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-dark/40 hover:bg-brand-dark border border-white/30 text-white font-bold text-sm transition"
            rel="noopener noreferrer"
            href={enlaceWhatsApp(
              "Hola%20Elsa,%20quiero%20empezar%20mi%20camino%20en%20KinderCripto.",
            )}
          >
            {"\n          Hablar con Elsa\n        "}
          </a>
        </div>
      </div>
    </section>
  );
}
