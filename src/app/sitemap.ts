import type { MetadataRoute } from "next";
import { configuracion } from "@/lib/configuracion";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: configuracion.dominio, changeFrequency: "weekly", priority: 1 },
  ];
}
