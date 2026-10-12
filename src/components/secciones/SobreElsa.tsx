import { configuracion, enlaceWhatsApp } from "@/lib/configuracion";
export function SobreElsa() {
  return (
    <section
      id="sobre-elsa"
      className="py-20 bg-white border-b border-brand-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-3 -left-3 w-full h-full rounded-[30px] border-2 border-brand-gold/40 pointer-events-none"></div>
              <div className="relative rounded-[28px] overflow-hidden bg-brand-dark shadow-xl">
                <img
                  src="/elsa-maneiro.png"
                  width={512}
                  height={512}
                  alt="Elsa Maneiro - Mentora Cripto"
                  className="w-full h-auto object-cover object-top max-h-[500px]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-sm">
                  <p className="text-xs font-bold text-brand-dark">
                    {'"El mundo cripto no tiene por qué ser abrumador."'}
                  </p>
                  <p className="text-[11px] text-brand-muted mt-0.5">
                    {"— Elsa Maneiro, Mentora Cripto"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-fuchsia-light text-brand-fuchsia text-xs font-bold border border-brand-fuchsia/20">
              <span className="">{"★"}</span>
              {" TU MENTORA CRIPTO\n          "}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight">
              {"\n            Hola, soy Elsa Maneiro.\n          "}
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-brand-muted leading-relaxed font-normal">
              <p className="">
                {
                  "\n              Mi propósito es ayudarte a dar tus primeros pasos en el mundo cripto de forma sencilla, acompañada y con información clara.\n            "
                }
              </p>
              <p className="">
                {"\n              En "}
                <strong className="text-brand-dark font-semibold">
                  {"KinderCripto"}
                </strong>
                {
                  " encontrarás campañas, recursos y orientación para aprender a utilizar plataformas de criptomonedas y comprender tanto las oportunidades como los riesgos de cada promoción.\n            "
                }
              </p>
              <p className="text-sm text-gray-500 italic">
                {
                  "\n              Sin tecnicismos innecesarios, sin falsas promesas de dinero rápido y con la cercanía humana que necesitas cuando estás comenzando.\n            "
                }
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-[#FAF9FC] border border-brand-border">
                <div className="w-8 h-8 rounded-lg bg-brand-fuchsia/10 text-brand-fuchsia flex items-center justify-center font-bold text-sm mb-2">
                  {"\n                📖\n              "}
                </div>
                <h4 className="text-sm font-bold text-brand-dark">
                  {"Educación clara"}
                </h4>
                <p className="text-xs text-brand-muted mt-1">
                  {
                    "Conceptos complejos explicados en lenguaje accesible para todos."
                  }
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF9FC] border border-brand-border">
                <div className="w-8 h-8 rounded-lg bg-brand-gold/20 text-brand-gold flex items-center justify-center font-bold text-sm mb-2">
                  {"\n                🤝\n              "}
                </div>
                <h4 className="text-sm font-bold text-brand-dark">
                  {"Acompañamiento"}
                </h4>
                <p className="text-xs text-brand-muted mt-1">
                  {
                    "Cercanía y respuestas a tus dudas durante todo tu recorrido."
                  }
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF9FC] border border-brand-border">
                <div className="w-8 h-8 rounded-lg bg-brand-fuchsia/10 text-brand-fuchsia flex items-center justify-center font-bold text-sm mb-2">
                  {"\n                ⚖️\n              "}
                </div>
                <h4 className="text-sm font-bold text-brand-dark">
                  {"Transparencia"}
                </h4>
                <p className="text-xs text-brand-muted mt-1">
                  {
                    "Cero humo: siempre diferenciando bonos, riesgos y condiciones reales."
                  }
                </p>
              </div>
            </div>
            <div className="pt-2">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://t.me/kindercripto"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-fuchsia text-white font-bold text-xs hover:bg-brand-fuchsia-dark transition shadow-md"
                  rel="noopener noreferrer"
                >
                  <span className="">{"Canal General Telegram"}</span>
                  <span className="">{"↗"}</span>
                </a>
                <a
                  href="https://t.me/comunidadkindercripto"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#229ED9] text-white font-bold text-xs hover:opacity-90 transition shadow-md"
                  rel="noopener noreferrer"
                >
                  <span className="">{"Comunidad Kinder Cripto"}</span>
                  <span className="">{"↗"}</span>
                </a>
                <a
                  href="https://instagram.com/kindercripto"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-brand-border text-brand-dark font-bold text-xs hover:border-brand-fuchsia hover:text-brand-fuchsia transition"
                  rel="noopener noreferrer"
                >
                  <span className="">{"Instagram @kindercripto"}</span>
                  <span className="">{"↗"}</span>
                </a>
                <a
                  href="https://linktr.ee/kindercriptomexc"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-dark text-brand-gold-light font-bold text-xs hover:bg-brand-dark/80 transition"
                  rel="noopener noreferrer"
                >
                  <span className="">{"Linktree oficial"}</span>
                  <span className="">{"✦"}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
