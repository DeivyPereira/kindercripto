import { configuracion, enlaceWhatsApp } from "@/lib/configuracion";
export function Mentoria() {
  return (
    <section
      id="mentoria"
      className="py-24 bg-brand-dark relative overflow-hidden text-white"
    >
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-fuchsia/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-gold/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-gold-light text-xs font-bold mb-4 border border-brand-gold/30">
          <span className="">{"✨"}</span>
          {" ASESORÍA INDIVIDUAL\n      "}
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-2xl mx-auto">
          {"\n        ¿Prefieres que te acompañe paso a paso?\n      "}
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-xl mx-auto font-light leading-relaxed">
          {
            "\n        Agenda una sesión con Elsa y recibe orientación personalizada para comenzar a explorar el mundo cripto con total tranquilidad.\n      "
          }
        </p>

        <div className="mt-12 bg-brand-dark-card border border-brand-gold/30 rounded-[32px] p-8 sm:p-12 shadow-2xl relative overflow-hidden max-w-2xl mx-auto">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-fuchsia via-brand-gold to-brand-fuchsia"></div>
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-gold to-brand-gold-light text-brand-dark flex items-center justify-center text-3xl mx-auto shadow-glow-gold mb-6">
            {"\n          📅\n        "}
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {"\n          Agenda tu sesión con Elsa\n        "}
          </h3>
          <p className="mt-3 text-sm text-gray-300 max-w-md mx-auto">
            {
              "\n          Elige el horario que mejor se adapte a ti. Resolveremos tus dudas en directo sobre plataformas, verificación de identidad y campañas vigentes.\n        "
            }
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              target="_blank"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-dark font-extrabold text-sm shadow-glow-gold hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition"
              rel="noopener noreferrer"
              href={configuracion.agenda || "#contacto-pendiente"}
            >
              {"\n            Agendar una llamada\n          "}
            </a>
            <a
              target="_blank"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition"
              rel="noopener noreferrer"
              href={enlaceWhatsApp(
                "Hola%20Elsa,%20quisiera%20agendar%20una%20sesi%C3%B3n%20de%20mentor%C3%ADa%20personalizada.",
              )}
            >
              {"\n            Escribir por WhatsApp\n          "}
            </a>
          </div>
          <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400">{"●"}</span>
              {" Integración con Calendly / Google Meet"}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-brand-gold">{"✦"}</span>
              {" Sesiones 1 a 1 en directo"}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-brand-fuchsia">{"♥"}</span>
              {" 100% enfocada en tus dudas"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
