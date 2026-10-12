export function PreguntasFrecuentes() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-fuchsia-light text-brand-fuchsia text-xs font-bold mb-3 border border-brand-fuchsia/20">
            <span className="">{"❓"}</span>
            {" DUDAS FRECUENTES\n        "}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            {"\n          Preguntas frecuentes\n        "}
          </h2>
          <p className="mt-3 text-base text-brand-muted">
            {
              "\n          Respuestas transparentes para que tomes decisiones con claridad y confianza.\n        "
            }
          </p>
        </div>

        <div className="space-y-4" id="faqAccordion">
          <details
            className="faq-item border border-brand-border rounded-2xl overflow-hidden bg-[#FAF9FC] transition"
            name="preguntas"
          >
            <summary className="faq-trigger w-full px-6 py-4 text-left flex items-center justify-between font-bold text-brand-dark hover:text-brand-fuchsia transition">
              <span className="text-base sm:text-lg">
                {"¿Qué es KinderCripto?"}
              </span>
              <span className="faq-icon text-brand-fuchsia text-xl transition-transform duration-300">
                {"+"}
              </span>
            </summary>
            <div className="faq-content px-6 pb-5 text-sm text-brand-muted leading-relaxed border-t border-brand-border/60 pt-3">
              {
                "\n            KinderCripto es una plataforma educativa y de mentoría personal creada por Elsa Maneiro. Su objetivo es ayudar a personas sin experiencia previa a comprender el mundo de las criptomonedas y aprovechar promociones y campañas oficiales de los principales exchanges con seguridad y comprensión.\n          "
              }
            </div>
          </details>

          <details
            className="faq-item border border-brand-border rounded-2xl overflow-hidden bg-[#FAF9FC] transition"
            name="preguntas"
          >
            <summary className="faq-trigger w-full px-6 py-4 text-left flex items-center justify-between font-bold text-brand-dark hover:text-brand-fuchsia transition">
              <span className="text-base sm:text-lg">
                {"¿Necesito experiencia previa para participar?"}
              </span>
              <span className="faq-icon text-brand-fuchsia text-xl transition-transform duration-300">
                {"+"}
              </span>
            </summary>
            <div className="faq-content px-6 pb-5 text-sm text-brand-muted leading-relaxed border-t border-brand-border/60 pt-3">
              {
                "\n            No, en absoluto. Todo el contenido y las explicaciones de Elsa están diseñados específicamente desde cero para personas principiantes, evitando jerga técnica incomprensible y guiándote en cada paso del proceso.\n          "
              }
            </div>
          </details>

          <details
            className="faq-item border border-brand-border rounded-2xl overflow-hidden bg-[#FAF9FC] transition"
            name="preguntas"
          >
            <summary className="faq-trigger w-full px-6 py-4 text-left flex items-center justify-between font-bold text-brand-dark hover:text-brand-fuchsia transition">
              <span className="text-base sm:text-lg">
                {"¿Qué son las campañas de los exchanges?"}
              </span>
              <span className="faq-icon text-brand-fuchsia text-xl transition-transform duration-300">
                {"+"}
              </span>
            </summary>
            <div className="faq-content px-6 pb-5 text-sm text-brand-muted leading-relaxed border-t border-brand-border/60 pt-3">
              {
                "\n            Son programas promocionales organizados directamente por plataformas como Binance, Bitget o MEXC para atraer nuevos usuarios o incentivar el uso de sus herramientas. Estas campañas pueden ofrecer bonos, descuentos en comisiones o recompensas por cumplir ciertas acciones.\n          "
              }
            </div>
          </details>

          <details
            className="faq-item border border-brand-border rounded-2xl overflow-hidden bg-[#FAF9FC] transition"
            name="preguntas"
          >
            <summary className="faq-trigger w-full px-6 py-4 text-left flex items-center justify-between font-bold text-brand-dark hover:text-brand-fuchsia transition">
              <span className="text-base sm:text-lg">
                {"¿Todas las campañas ofrecen dinero retirable?"}
              </span>
              <span className="faq-icon text-brand-fuchsia text-xl transition-transform duration-300">
                {"+"}
              </span>
            </summary>
            <div className="faq-content px-6 pb-5 text-sm text-brand-muted leading-relaxed border-t border-brand-border/60 pt-3">
              {
                "\n            No. Existen distintos tipos de recompensas: bonos promocionales para trading, cupones de descuento para comisiones y, en algunos casos específicos, recompensas en tokens. En KinderCripto siempre especificamos la naturaleza exacta del beneficio para evitar confusiones.\n          "
              }
            </div>
          </details>

          <details
            className="faq-item border border-brand-border rounded-2xl overflow-hidden bg-[#FAF9FC] transition"
            name="preguntas"
          >
            <summary className="faq-trigger w-full px-6 py-4 text-left flex items-center justify-between font-bold text-brand-dark hover:text-brand-fuchsia transition">
              <span className="text-base sm:text-lg">
                {"¿Necesito depositar dinero obligatoriamente?"}
              </span>
              <span className="faq-icon text-brand-fuchsia text-xl transition-transform duration-300">
                {"+"}
              </span>
            </summary>
            <div className="faq-content px-6 pb-5 text-sm text-brand-muted leading-relaxed border-t border-brand-border/60 pt-3">
              {
                '\n            Depende de la campaña. Existen campañas sin depósito (como programas de referidos o módulos educativos "Aprende y Gana") y otras que exigen un depósito o volumen mínimo de operaciones. Puedes usar nuestro filtro de requisitos para encontrar únicamente las que no exigen depósito.\n          '
              }
            </div>
          </details>

          <details
            className="faq-item border border-brand-border rounded-2xl overflow-hidden bg-[#FAF9FC] transition"
            name="preguntas"
          >
            <summary className="faq-trigger w-full px-6 py-4 text-left flex items-center justify-between font-bold text-brand-dark hover:text-brand-fuchsia transition">
              <span className="text-base sm:text-lg">
                {"¿Cómo puedo recibir ayuda directa de Elsa?"}
              </span>
              <span className="faq-icon text-brand-fuchsia text-xl transition-transform duration-300">
                {"+"}
              </span>
            </summary>
            <div className="faq-content px-6 pb-5 text-sm text-brand-muted leading-relaxed border-t border-brand-border/60 pt-3">
              {
                "\n            Puedes escribirle directamente a través del botón de WhatsApp en la esquina inferior de la web o agendar una llamada de mentoría individual en la sección de agendamiento.\n          "
              }
            </div>
          </details>

          <details
            className="faq-item border border-brand-border rounded-2xl overflow-hidden bg-[#FAF9FC] transition"
            name="preguntas"
          >
            <summary className="faq-trigger w-full px-6 py-4 text-left flex items-center justify-between font-bold text-brand-dark hover:text-brand-fuchsia transition">
              <span className="text-base sm:text-lg">
                {"¿Las recompensas están garantizadas?"}
              </span>
              <span className="faq-icon text-brand-fuchsia text-xl transition-transform duration-300">
                {"+"}
              </span>
            </summary>
            <div className="faq-content px-6 pb-5 text-sm text-brand-muted leading-relaxed border-t border-brand-border/60 pt-3">
              {
                "\n            No. Las recompensas dependen exclusivamente de los términos y condiciones del exchange emisor y de que el usuario cumpla los requisitos en tiempo y forma. KinderCripto es un facilitador educativo, no la entidad pagadora.\n          "
              }
            </div>
          </details>

          <details
            className="faq-item border border-brand-border rounded-2xl overflow-hidden bg-[#FAF9FC] transition"
            name="preguntas"
          >
            <summary className="faq-trigger w-full px-6 py-4 text-left flex items-center justify-between font-bold text-brand-dark hover:text-brand-fuchsia transition">
              <span className="text-base sm:text-lg">
                {"¿KinderCripto pertenece a Binance, Bitget o MEXC?"}
              </span>
              <span className="faq-icon text-brand-fuchsia text-xl transition-transform duration-300">
                {"+"}
              </span>
            </summary>
            <div className="faq-content px-6 pb-5 text-sm text-brand-muted leading-relaxed border-t border-brand-border/60 pt-3">
              {
                "\n            No. KinderCripto es una iniciativa educativa completamente independiente liderada por Elsa Maneiro. No somos propiedad de ningún exchange; actuamos como educadores y divulgadores independientes.\n          "
              }
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
