import { configuracion, enlaceWhatsApp } from "@/lib/configuracion";
export function ContactoFlotante() {
  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      <div className="absolute right-full bottom-1/2 translate-y-1/2 mr-3 px-3 py-1.5 rounded-xl bg-brand-dark text-white text-xs font-semibold shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
        {"\n      ¿Necesitas ayuda? Habla con Elsa\n      "}
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-brand-dark"></div>
      </div>

      <a
        target="_blank"
        aria-label="Hablar con Elsa por WhatsApp"
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-300"
        rel="noopener noreferrer"
        href={enlaceWhatsApp(
          "Hola%20Elsa,%20encontr%C3%A9%20KinderCripto%20y%20me%20gustar%C3%ADa%20recibir%20orientaci%C3%B3n%20sobre%20las%20campa%C3%B1as%20disponibles.",
        )}
      >
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-brand-gold rounded-full ring-2 ring-white"></span>
        <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.772.822 2.791.822 3.183 0 5.769-2.587 5.769-5.767.001-3.181-2.585-5.767-5.769-5.767zm0 10.428c-.887 0-1.637-.253-2.348-.68l-.168-.1-1.745.457.466-1.7-.11-.176c-.47-.747-.723-1.579-.723-2.463 0-2.568 2.09-4.657 4.658-4.657 2.569 0 4.659 2.089 4.659 4.658 0 2.569-2.09 4.661-4.632 4.661z"></path>
        </svg>
      </a>
    </div>
  );
}
