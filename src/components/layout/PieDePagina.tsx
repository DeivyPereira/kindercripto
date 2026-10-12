import { configuracion, enlaceWhatsApp } from "@/lib/configuracion";
export function PieDePagina() {
  return (
    <footer className="bg-brand-dark text-gray-400 py-16 border-t border-white/10 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-brand-gold/40 flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 40 40" fill="none">
                  <path
                    d="M14 10V30M14 20L26 10M20 16L30 30"
                    stroke="#E5007D"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <circle cx="30" cy="12" r="3" fill="#D4AF37"></circle>
                </svg>
              </div>
              <div>
                <span className="text-xl font-extrabold text-white">
                  {"Kinder"}
                  <span className="text-brand-fuchsia">{"Cripto"}</span>
                </span>
                <span className="text-[9px] font-semibold text-gray-400 tracking-[0.16em] uppercase block">
                  {"Por Elsa Maneiro"}
                </span>
              </div>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed text-xs">
              {
                "\n            Educación y acompañamiento cripto para principiantes. Descubre campañas oficiales de exchanges explicadas con cercanía, transparencia y rigor.\n          "
              }
            </p>
            <div className="text-[11px] text-gray-500">
              {"\n            Dominio oficial: "}
              <strong className="text-gray-300">{"kindercripto.com"}</strong>
            </div>
          </div>

          <div className="md:col-span-3 space-y-2">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">
              {"Navegación"}
            </h4>
            <ul className="space-y-2">
              <li className="">
                <a href="#inicio" className="hover:text-white transition">
                  {"Inicio"}
                </a>
              </li>
              <li className="">
                <a href="#campanas" className="hover:text-white transition">
                  {"Explorador de Campañas"}
                </a>
              </li>
              <li className="">
                <a
                  href="#como-funciona"
                  className="hover:text-white transition"
                >
                  {"Cómo funciona"}
                </a>
              </li>
              <li className="">
                <a href="#sobre-elsa" className="hover:text-white transition">
                  {"Sobre Elsa Maneiro"}
                </a>
              </li>
              <li className="">
                <a href="#mentoria" className="hover:text-white transition">
                  {"Agendar mentoría"}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-2">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">
              {"Comunidad & Linktree oficial"}
            </h4>
            <ul className="space-y-2">
              <li className="">
                <a
                  href="https://t.me/kindercripto"
                  target="_blank"
                  className="hover:text-brand-fuchsia transition flex items-center gap-1.5"
                  rel="noopener noreferrer"
                >
                  <span className="">
                    {"Canal General Kinder Cripto (Telegram)"}
                  </span>
                </a>
              </li>
              <li className="">
                <a
                  href="https://t.me/comunidadkindercripto"
                  target="_blank"
                  className="hover:text-brand-fuchsia transition flex items-center gap-1.5"
                  rel="noopener noreferrer"
                >
                  <span className="">
                    {"Comunidad Kinder Cripto (Telegram)"}
                  </span>
                </a>
              </li>
              <li className="">
                <a
                  href="https://instagram.com/kindercripto"
                  target="_blank"
                  className="hover:text-brand-fuchsia transition flex items-center gap-1.5"
                  rel="noopener noreferrer"
                >
                  <span className="">{"Instagram (@kindercripto)"}</span>
                </a>
              </li>
              <li className="">
                <a
                  href="https://linktr.ee/kindercriptomexc"
                  target="_blank"
                  className="hover:text-brand-gold transition flex items-center gap-1.5"
                  rel="noopener noreferrer"
                >
                  <span className="text-brand-gold">{"✦"}</span>
                  <span className="">{"Linktree oficial MEXC"}</span>
                </a>
              </li>
              <li className="">
                <a
                  target="_blank"
                  className="hover:text-emerald-400 transition flex items-center gap-1.5"
                  rel="noopener noreferrer"
                  href={enlaceWhatsApp("")}
                >
                  <span className="">{"WhatsApp oficial de Elsa"}</span>
                </a>
              </li>
              <li className="">
                <span>{"Aviso legal sobre riesgos financieros"}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-gray-500">
          <p className="">
            {
              "© 2026 KinderCripto — Elsa Maneiro. Todos los derechos reservados."
            }
          </p>
          <p className="max-w-2xl text-[11px] leading-relaxed">
            <strong>{"Aviso importante:"}</strong>
            {
              " KinderCripto es una plataforma educativa independiente. No garantiza recompensas ni resultados financieros. Las promociones pertenecen a sus respectivos organizadores y están sujetas a condiciones particulares de cada exchange.\n        "
            }
          </p>
        </div>
      </div>
    </footer>
  );
}
