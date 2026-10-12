import { Inicio } from "@/components/secciones/Inicio";
import { ComoFunciona } from "@/components/secciones/ComoFunciona";
import { SobreElsa } from "@/components/secciones/SobreElsa";
import { Mentoria } from "@/components/secciones/Mentoria";
import { PreguntasFrecuentes } from "@/components/secciones/PreguntasFrecuentes";
import { LlamadaAccion } from "@/components/secciones/LlamadaAccion";
import { CatalogoCampanas } from "@/components/campanas/CatalogoCampanas";
import { configuracion } from "@/lib/configuracion";
export default function PaginaInicio() {
  const datos = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${configuracion.dominio}/#sitio`,
        name: configuracion.nombre,
        url: configuracion.dominio,
        inLanguage: "es",
        description: configuracion.descripcion,
      },
      {
        "@type": "Person",
        name: "Elsa Maneiro",
        url: `${configuracion.dominio}/#sobre-elsa`,
        jobTitle: "Mentora cripto para principiantes",
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(datos).replace(/</g, "\\u003c"),
        }}
      />
      <Inicio />
      <CatalogoCampanas />
      <ComoFunciona />
      <SobreElsa />
      <Mentoria />
      <PreguntasFrecuentes />
      <LlamadaAccion />
      {(!configuracion.whatsapp || !configuracion.agenda) && (
        <aside
          id="contacto-pendiente"
          className="p-6 text-center bg-brand-gold-subtle text-sm"
        >
          Los canales de contacto y la agenda estarán disponibles próximamente.
        </aside>
      )}
    </>
  );
}
