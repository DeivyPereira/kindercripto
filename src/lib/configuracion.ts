export const configuracion = {
  nombre: "KinderCripto",
  dominio: process.env.NEXT_PUBLIC_SITE_URL || "https://kindercripto.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "",
  agenda: process.env.NEXT_PUBLIC_AGENDA_URL || "",
  descripcion:
    "Aprende sobre criptomonedas desde cero con Elsa Maneiro. Explora campañas de exchanges, comprende sus requisitos y recibe mentoría personalizada en español.",
};
export function enlaceWhatsApp(mensajeCodificado = "") {
  if (!configuracion.whatsapp) return "#contacto-pendiente";
  return `https://wa.me/${configuracion.whatsapp.replace(/\D/g, "")}${mensajeCodificado ? `?text=${mensajeCodificado}` : ""}`;
}
