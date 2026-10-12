import type { MetadataRoute } from "next";
import { configuracion } from "@/lib/configuracion";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${configuracion.dominio}/sitemap.xml`,
  };
}
