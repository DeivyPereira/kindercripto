import { ImageResponse } from "next/og";
export const alt = "KinderCripto — Aprende cripto con Elsa Maneiro";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function ImagenSocial() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 90,
        background: "#111018",
        color: "white",
      }}
    >
      <div style={{ display: "flex", fontSize: 76, fontWeight: 800 }}>
        Kinder<span style={{ color: "#E5007D" }}>Cripto</span>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 46,
          marginTop: 36,
          color: "#F5D76E",
        }}
      >
        Tu primer paso en el mundo cripto.
      </div>
      <div style={{ display: "flex", fontSize: 30, marginTop: 32 }}>
        Educación y mentoría con Elsa Maneiro
      </div>
    </div>,
    size,
  );
}
