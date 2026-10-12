"use client";
import { useState } from "react";
import { configuracion, enlaceWhatsApp } from "@/lib/configuracion";
export function Cabecera() {
  const [abierto, setAbierto] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-brand-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-brand-dark border border-brand-gold/40 flex items-center justify-center shadow-sm group-hover:border-brand-gold transition">
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
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-brand-dark leading-none">
              {"Kinder"}
              <span className="text-brand-fuchsia">{"Cripto"}</span>
            </span>
            <span className="text-[9px] font-semibold text-brand-muted tracking-[0.16em] uppercase mt-1">
              {"Por Elsa Maneiro"}
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-700">
          <a
            href="#inicio"
            className="hover:text-brand-fuchsia transition py-1"
          >
            {"Inicio"}
          </a>
          <a
            href="#campanas"
            className="hover:text-brand-fuchsia transition py-1 relative"
          >
            {"\n          Campañas\n          "}
            <span className="absolute -top-1.5 -right-3 px-1.5 py-0.2 bg-brand-fuchsia-light text-brand-fuchsia text-[10px] font-bold rounded-full border border-brand-fuchsia/20">
              {"Catálogo"}
            </span>
          </a>
          <a
            href="#como-funciona"
            className="hover:text-brand-fuchsia transition py-1"
          >
            {"Cómo funciona"}
          </a>
          <a
            href="#sobre-elsa"
            className="hover:text-brand-fuchsia transition py-1"
          >
            {"Sobre Elsa"}
          </a>
          <a
            href="#mentoria"
            className="hover:text-brand-fuchsia transition py-1"
          >
            {"Mentoría"}
          </a>
          <a href="#faq" className="hover:text-brand-fuchsia transition py-1">
            {"Preguntas"}
          </a>
        </nav>

        <div className="hidden sm:flex items-center gap-3">
          <a
            target="_blank"
            className="relative group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-brand-fuchsia text-white text-sm font-bold shadow-glow-fuchsia hover:bg-brand-fuchsia-dark hover:shadow-lg transition-all duration-300"
            rel="noopener noreferrer"
            href={enlaceWhatsApp(
              "Hola%20Elsa,%20encontr%C3%A9%20KinderCripto%20y%20me%20gustar%C3%ADa%20recibir%20orientaci%C3%B3n%20sobre%20las%20campa%C3%B1as%20disponibles.",
            )}
          >
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-brand-gold rounded-full ring-2 ring-white animate-pulse"></span>
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.772.822 2.791.822 3.183 0 5.769-2.587 5.769-5.767.001-3.181-2.585-5.767-5.769-5.767zm0 10.428c-.887 0-1.637-.253-2.348-.68l-.168-.1-1.745.457.466-1.7-.11-.176c-.47-.747-.723-1.579-.723-2.463 0-2.568 2.09-4.657 4.658-4.657 2.569 0 4.659 2.089 4.659 4.658 0 2.569-2.09 4.661-4.632 4.661z"></path>
            </svg>
            <span className="">{"Hablar con Elsa"}</span>
            <span className="text-brand-gold-light font-extrabold text-xs ml-0.5">
              {"✦"}
            </span>
          </a>
        </div>

        <button
          id="mobileMenuBtn"
          className="md:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 focus:outline-none"
          aria-label="Abrir o cerrar navegación"
          aria-controls="mobileMenu"
          onClick={() => setAbierto(!abierto)}
          aria-expanded={abierto}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <div
        id="mobileMenu"
        className={
          "md:hidden bg-white border-b border-brand-border px-6 py-4 space-y-3" +
          (abierto ? "" : " hidden")
        }
        onClick={() => setAbierto(false)}
      >
        <a
          href="#inicio"
          className="block text-sm font-semibold text-gray-700 hover:text-brand-fuchsia"
        >
          {"Inicio"}
        </a>
        <a
          href="#campanas"
          className="block text-sm font-semibold text-gray-700 hover:text-brand-fuchsia"
        >
          {"Campañas Activas"}
        </a>
        <a
          href="#como-funciona"
          className="block text-sm font-semibold text-gray-700 hover:text-brand-fuchsia"
        >
          {"Cómo funciona"}
        </a>
        <a
          href="#sobre-elsa"
          className="block text-sm font-semibold text-gray-700 hover:text-brand-fuchsia"
        >
          {"Sobre Elsa"}
        </a>
        <a
          href="#mentoria"
          className="block text-sm font-semibold text-gray-700 hover:text-brand-fuchsia"
        >
          {"Mentoría"}
        </a>
        <a
          href="#faq"
          className="block text-sm font-semibold text-gray-700 hover:text-brand-fuchsia"
        >
          {"Preguntas Frecuentes"}
        </a>
        <div className="pt-2">
          <a
            target="_blank"
            className="w-full text-center inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-brand-fuchsia text-white text-sm font-bold shadow-glow-fuchsia"
            rel="noopener noreferrer"
            href={enlaceWhatsApp("Hola%20Elsa,%20encontr%C3%A9%20KinderCripto")}
          >
            {"\n          Hablar con Elsa "}
            <span className="text-brand-gold">{"✦"}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
