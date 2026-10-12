import { configuracion, enlaceWhatsApp } from "@/lib/configuracion";
export function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-20 bg-[#FAF9FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/15 text-brand-dark text-xs font-bold mb-3 border border-brand-gold/30">
            <span className="text-brand-gold">{"★"}</span>
            {" METODOLOGÍA TRANSPARENTE\n        "}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight">
            {"\n          Tu camino cripto, paso a paso\n        "}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed">
            {
              "\n          No necesitas saberlo todo para comenzar. Lo verdaderamente importante es entender cada paso antes de interactuar con cualquier plataforma.\n        "
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-brand-fuchsia/40 via-brand-gold to-brand-fuchsia/40 -translate-y-12 z-0"></div>

          <div className="relative bg-white rounded-3xl p-6 border border-brand-border shadow-card-soft hover:shadow-card-hover transition-all z-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-fuchsia/10 text-brand-fuchsia flex items-center justify-center font-black text-xl">
                  {"\n                01\n              "}
                </div>
                <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">
                  {"Inicio"}
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-brand-dark mb-2">
                {"Explora"}
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                {
                  "\n              Encuentra campañas activas disponibles en diferentes exchanges centralizados, todas catalogadas y organizadas en un único lugar.\n            "
                }
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-brand-border/60 flex items-center gap-2 text-xs font-semibold text-brand-fuchsia">
              <span className="">{"Filtros interactivos"}</span>
              <span className="">{"→"}</span>
            </div>
          </div>

          <div className="relative bg-white rounded-3xl p-6 border border-brand-border shadow-card-soft hover:shadow-card-hover transition-all z-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-gold/15 text-brand-gold flex items-center justify-center font-black text-xl">
                  {"\n                02\n              "}
                </div>
                <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">
                  {"Criterio"}
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-brand-dark mb-2">
                {"Descubre"}
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                {
                  "\n              Conoce los requisitos reales, beneficios específicos, fechas límite y condiciones de elegibilidad antes de comprometer tiempo o fondos.\n            "
                }
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-brand-border/60 flex items-center gap-2 text-xs font-semibold text-brand-gold">
              <span className="">{"Fichas transparentes"}</span>
              <span className="">{"→"}</span>
            </div>
          </div>

          <div className="relative bg-white rounded-3xl p-6 border-2 border-brand-fuchsia/30 shadow-card-hover transition-all z-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-fuchsia text-white flex items-center justify-center font-black text-xl shadow-glow-fuchsia">
                  {"\n                03\n              "}
                </div>
                <span className="text-xs font-bold text-brand-fuchsia uppercase tracking-wider">
                  {"Acompañamiento"}
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-brand-dark mb-2">
                {"Aprende con Elsa"}
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                {
                  "\n              Recibe orientación cercana para comprender cómo funciona el proceso, resolver dudas y evitar errores comunes de principiantes.\n            "
                }
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-brand-border/60 flex items-center gap-2 text-xs font-semibold text-brand-fuchsia">
              <span className="">{"WhatsApp & Mentoría"}</span>
              <span className="">{"★"}</span>
            </div>
          </div>

          <div className="relative bg-white rounded-3xl p-6 border border-brand-border shadow-card-soft hover:shadow-card-hover transition-all z-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-dark text-brand-gold-light flex items-center justify-center font-black text-xl">
                  {"\n                04\n              "}
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  {"Ejecución"}
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-brand-dark mb-2">
                {"Participa"}
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                {
                  "\n              Completa las tareas correspondientes de forma autónoma y consulta con tranquilidad el estado de tus recompensas en el exchange oficial.\n            "
                }
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-brand-border/60 flex items-center gap-2 text-xs font-semibold text-gray-700">
              <span className="">{"Campaña oficial"}</span>
              <span className="">{"✓"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
