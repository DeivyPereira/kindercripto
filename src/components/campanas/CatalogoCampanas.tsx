"use client";
import { useState } from "react";
import { tarjetas } from "@/lib/campanas";
import { TarjetaCampana } from "./TarjetaCampana";
import { ModalCampana } from "./ModalCampana";
const iniciales = {
  exchange: "all",
  tipo: "all",
  nivel: "all",
  requisito: "all",
  estado: "all",
};
export function CatalogoCampanas() {
  const [busqueda, setBusqueda] = useState("");
  const [filtros, setFiltros] = useState(iniciales);
  const [seleccionada, setSeleccionada] = useState<string | null>(null);
  function coincide(c: Record<string, string>) {
    const q = busqueda.trim().toLocaleLowerCase("es");
    return (
      (!q ||
        `${c.title} ${c.desc} ${c.exchange}`
          .toLocaleLowerCase("es")
          .includes(q)) &&
      (filtros.exchange === "all" || filtros.exchange === c.exchange) &&
      (filtros.tipo === "all" || filtros.tipo === c.type) &&
      (filtros.nivel === "all" || filtros.nivel === c.level) &&
      (filtros.requisito === "all" || filtros.requisito === c.req) &&
      (filtros.estado === "all" || filtros.estado === c.status)
    );
  }
  const visibles = tarjetas.filter(coincide);
  function restablecer() {
    setBusqueda("");
    setFiltros(iniciales);
  }
  return (
    <>
      <section
        id="campanas"
        className="py-20 bg-white border-y border-brand-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-fuchsia-light text-brand-fuchsia text-xs font-bold mb-3 border border-brand-fuchsia/15">
              <span className="">{"CATÁLOGO DE CAMPAÑAS"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight">
              {"\n          Explora las campañas disponibles\n        "}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed">
              {
                "\n          Encuentra promociones de diferentes exchanges, revisa sus requisitos y descubre cuáles se adaptan a tu nivel y disponibilidad.\n        "
              }
            </p>
          </div>

          <div className="bg-[#FAF9FC] p-6 rounded-3xl border border-brand-border shadow-sm mb-10 space-y-5">
            <div className="relative">
              <input
                type="text"
                id="campaignSearch"
                placeholder="Buscar campaña o exchange (ej. MEXC, Binance, Trading, Bienvenida)..."
                className="w-full pl-12 pr-4 py-3.5 bg-white rounded-2xl border border-brand-border text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-fuchsia/30 focus:border-brand-fuchsia transition shadow-inner"
                aria-label="Buscar campañas"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
              <svg
                className="w-5 h-5 text-gray-400 absolute left-4 top-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>

            <div
              className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none"
              id="exchangeFilters"
            >
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider shrink-0 mr-1">
                {"Exchange:"}
              </span>
              <button
                data-filter="all"
                aria-pressed={filtros.exchange === "all"}
                onClick={() => setFiltros({ ...filtros, exchange: "all" })}
                className={
                  "px-4 py-2 rounded-xl text-xs font-bold border transition " +
                  (filtros.exchange === "all"
                    ? "bg-brand-dark text-white"
                    : "bg-white text-gray-700 border-brand-border")
                }
              >
                {"Todas"}
              </button>
              <button
                data-filter="mexc"
                aria-pressed={filtros.exchange === "mexc"}
                onClick={() => setFiltros({ ...filtros, exchange: "mexc" })}
                className={
                  "px-4 py-2 rounded-xl text-xs font-bold border transition " +
                  (filtros.exchange === "mexc"
                    ? "bg-brand-dark text-white"
                    : "bg-white text-gray-700 border-brand-border")
                }
              >
                {"MEXC"}
              </button>
              <button
                data-filter="binance"
                aria-pressed={filtros.exchange === "binance"}
                onClick={() => setFiltros({ ...filtros, exchange: "binance" })}
                className={
                  "px-4 py-2 rounded-xl text-xs font-bold border transition " +
                  (filtros.exchange === "binance"
                    ? "bg-brand-dark text-white"
                    : "bg-white text-gray-700 border-brand-border")
                }
              >
                {"Binance"}
              </button>
              <button
                data-filter="bitget"
                aria-pressed={filtros.exchange === "bitget"}
                onClick={() => setFiltros({ ...filtros, exchange: "bitget" })}
                className={
                  "px-4 py-2 rounded-xl text-xs font-bold border transition " +
                  (filtros.exchange === "bitget"
                    ? "bg-brand-dark text-white"
                    : "bg-white text-gray-700 border-brand-border")
                }
              >
                {"Bitget"}
              </button>
              <button
                data-filter="bybit"
                aria-pressed={filtros.exchange === "bybit"}
                onClick={() => setFiltros({ ...filtros, exchange: "bybit" })}
                className={
                  "px-4 py-2 rounded-xl text-xs font-bold border transition " +
                  (filtros.exchange === "bybit"
                    ? "bg-brand-dark text-white"
                    : "bg-white text-gray-700 border-brand-border")
                }
              >
                {"Bybit"}
              </button>
              <button
                data-filter="okx"
                aria-pressed={filtros.exchange === "okx"}
                onClick={() => setFiltros({ ...filtros, exchange: "okx" })}
                className={
                  "px-4 py-2 rounded-xl text-xs font-bold border transition " +
                  (filtros.exchange === "okx"
                    ? "bg-brand-dark text-white"
                    : "bg-white text-gray-700 border-brand-border")
                }
              >
                {"OKX"}
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-brand-border/60">
              <div>
                <label
                  htmlFor="typeFilter"
                  className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5"
                >
                  {"Tipo de campaña"}
                </label>
                <select
                  id="typeFilter"
                  className="w-full text-xs font-medium bg-white rounded-xl border border-brand-border px-3 py-2 text-brand-dark focus:border-brand-fuchsia focus:outline-none"
                  aria-label="tipo"
                  value={filtros.tipo}
                  onChange={(e) =>
                    setFiltros({ ...filtros, tipo: e.target.value })
                  }
                >
                  <option value="all">{"Todas las categorías"}</option>
                  <option value="bienvenida">{"Bienvenida"}</option>
                  <option value="referidos">{"Referidos"}</option>
                  <option value="trading">{"Trading"}</option>
                  <option value="depositos">{"Depósitos"}</option>
                  <option value="recompensas">{"Otras recompensas"}</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="levelFilter"
                  className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5"
                >
                  {"Nivel"}
                </label>
                <select
                  id="levelFilter"
                  className="w-full text-xs font-medium bg-white rounded-xl border border-brand-border px-3 py-2 text-brand-dark focus:border-brand-fuchsia focus:outline-none"
                  aria-label="nivel"
                  value={filtros.nivel}
                  onChange={(e) =>
                    setFiltros({ ...filtros, nivel: e.target.value })
                  }
                >
                  <option value="all">{"Todos los niveles"}</option>
                  <option value="principiante">{"Principiante (Fácil)"}</option>
                  <option value="intermedio">{"Intermedio"}</option>
                  <option value="avanzado">{"Avanzado"}</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="reqFilter"
                  className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5"
                >
                  {"Requisito"}
                </label>
                <select
                  id="reqFilter"
                  className="w-full text-xs font-medium bg-white rounded-xl border border-brand-border px-3 py-2 text-brand-dark focus:border-brand-fuchsia focus:outline-none"
                  aria-label="requisito"
                  value={filtros.requisito}
                  onChange={(e) =>
                    setFiltros({ ...filtros, requisito: e.target.value })
                  }
                >
                  <option value="all">{"Cualquier requisito"}</option>
                  <option value="sin-deposito">
                    {"Sin depósito requerido"}
                  </option>
                  <option value="con-deposito">{"Requiere depósito"}</option>
                  <option value="trading">{"Requiere trading"}</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="statusFilter"
                  className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5"
                >
                  {"Estado"}
                </label>
                <select
                  id="statusFilter"
                  className="w-full text-xs font-medium bg-white rounded-xl border border-brand-border px-3 py-2 text-brand-dark focus:border-brand-fuchsia focus:outline-none"
                  aria-label="estado"
                  value={filtros.estado}
                  onChange={(e) =>
                    setFiltros({ ...filtros, estado: e.target.value })
                  }
                >
                  <option value="all">{"Todos los estados"}</option>
                  <option value="activa">{"Activas ahora"}</option>
                  <option value="proximamente">{"Próximamente"}</option>
                  <option value="finalizada">{"Finalizadas"}</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6 px-1">
            <p className="text-xs font-semibold text-brand-muted">
              {"Mostrando "}
              <span
                id="campaignCount"
                className="text-brand-dark font-bold"
                aria-live="polite"
              >
                {visibles.length}
              </span>
              {" campañas disponibles"}
            </p>
            <span className="text-[11px] font-medium text-brand-gold bg-brand-gold/10 px-2.5 py-1 rounded-full border border-brand-gold/20">
              {"Consulta las condiciones oficiales"}
            </span>
          </div>

          <div
            id="campaignsGrid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {visibles.map((tarjeta) => (
              <TarjetaCampana
                key={tarjeta.id}
                id={tarjeta.id}
                abrir={setSeleccionada}
              />
            ))}
          </div>

          {visibles.length === 0 && (
            <div
              id="noCampaignsState"
              className="text-center py-16 px-4 bg-[#FAF9FC] rounded-3xl border border-dashed border-gray-300"
            >
              <div className="w-16 h-16 rounded-full bg-brand-fuchsia-light text-brand-fuchsia flex items-center justify-center mx-auto text-2xl mb-4">
                {"\n          🔍\n        "}
              </div>
              <h4 className="text-lg font-bold text-brand-dark">
                {"No se encontraron campañas con esos filtros"}
              </h4>
              <p className="text-sm text-brand-muted mt-1 max-w-md mx-auto">
                {
                  "Prueba a restablecer la búsqueda o escribir directamente a Elsa para consultar campañas fuera de catálogo."
                }
              </p>
              <button
                id="resetFiltersBtn"
                className="mt-4 px-6 py-2.5 bg-brand-fuchsia text-white rounded-full text-xs font-bold shadow-sm hover:bg-brand-fuchsia-dark transition"
                onClick={restablecer}
              >
                {"\n          Restablecer todos los filtros\n        "}
              </button>
            </div>
          )}
        </div>
      </section>
      {seleccionada && (
        <ModalCampana id={seleccionada} cerrar={() => setSeleccionada(null)} />
      )}
    </>
  );
}
