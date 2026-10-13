import { createElement as h } from "react";
import { ImageResponse } from "next/og.js";
import { readFile, writeFile } from "node:fs/promises";

const foto = `data:image/png;base64,${(await readFile("public/elsa-maneiro.png")).toString("base64")}`;
const caja = (style, ...children) => h("div", { style: { display: "flex", ...style } }, ...children);
const imagen = new ImageResponse(
  caja({ width: 1200, height: 630, background: "#111018", color: "white", position: "relative", overflow: "hidden", padding: "58px 66px", fontFamily: "sans-serif" },
    caja({ position: "absolute", right: -140, top: -180, width: 670, height: 900, borderRadius: "50%", background: "#241321", transform: "rotate(25deg)" }),
    caja({ position: "absolute", bottom: 0, left: 0, width: "100%", height: 7, background: "linear-gradient(90deg, #E5007D, #D4AF37)" }),
    caja({ width: 715, flexDirection: "column", position: "relative" },
      caja({ alignItems: "center", gap: 14 },
        caja({ width: 46, height: 46, borderRadius: 12, border: "1px solid #D4AF37", alignItems: "center", justifyContent: "center", color: "#E5007D", fontSize: 34, fontWeight: 700 }, "K"),
        caja({ fontSize: 35, fontWeight: 700 }, "Kinder", h("span", { style: { color: "#E5007D" } }, "Cripto")),
      ),
      caja({ color: "#F5D76E", fontSize: 15, letterSpacing: 4, marginTop: 47 }, "APRENDE CRIPTO DESDE CERO"),
      caja({ flexDirection: "column", fontSize: 68, lineHeight: 1.08, fontWeight: 700, marginTop: 21 },
        caja({}, "Tu primer paso"),
        caja({ color: "#FF4FA9" }, "en el mundo cripto."),
      ),
      caja({ fontSize: 24, color: "#d7d3dc", marginTop: 25, maxWidth: 650, lineHeight: 1.5 }, "Campañas, educación y mentoría. Paso a paso, con Elsa Maneiro."),
      caja({ color: "#F5D76E", fontSize: 19, marginTop: "auto", paddingTop: 25 }, "kindercripto.com"),
    ),
    caja({ position: "absolute", right: 64, top: 160, flexDirection: "column", alignItems: "center" },
      caja({ padding: 7, borderRadius: "50%", background: "linear-gradient(135deg, #E5007D, #D4AF37)" },
        h("img", { src: foto, width: 280, height: 280, style: { borderRadius: "50%", objectFit: "cover", border: "6px solid #111018" } }),
      ),
      caja({ marginTop: 25, fontWeight: 700, fontSize: 26 }, "Elsa Maneiro"),
      caja({ marginTop: 9, color: "#F5D76E", fontSize: 17 }, "Tu mentora cripto"),
    ),
  ),
  { width: 1200, height: 630 },
);
await writeFile("public/og-image.png", Buffer.from(await imagen.arrayBuffer()));
console.log("Imagen social generada: public/og-image.png (1200 × 630)");
