import { spawn } from "node:child_process";
import { once } from "node:events";
import { setTimeout as esperar } from "node:timers/promises";
import { resolve } from "node:path";

const puerto = 8788;
const servidor = spawn(process.execPath, [
  resolve("node_modules/@opennextjs/cloudflare/dist/cli/index.js"),
  "preview", "--port", String(puerto),
], {
  detached: process.platform !== "win32",
  env: { ...process.env, WRANGLER_SEND_METRICS: "false" },
  stdio: ["ignore", "pipe", "pipe"],
});
let registro = "";
let listo = false;
for (const salida of [servidor.stdout, servidor.stderr]) {
  salida.on("data", (dato) => {
    registro = (registro + dato.toString()).slice(-16000);
    if (registro.includes("Ready on")) listo = true;
  });
}
try {
  for (let intento = 0; intento < 80 && !listo; intento++) {
    if (servidor.exitCode !== null) throw new Error("El Worker terminó antes de iniciar.");
    await esperar(500);
  }
  if (!listo) throw new Error("El Worker no inició en 40 segundos.");
  for (const [ruta, tipo, fragmento] of [
    ["/", "text/html", 'lang="es"'],
    ["/robots.txt", "text/plain", "Sitemap:"],
    ["/sitemap.xml", "xml", "<urlset"],
    ["/opengraph-image", "image/png", null],
    ["/campanas/mexc-100-gratis.png", "image/png", null],
  ]) {
    const respuesta = await fetch(`http://localhost:${puerto}${ruta}`, { signal: AbortSignal.timeout(20000) });
    if (respuesta.status !== 200) throw new Error(`${ruta}: HTTP ${respuesta.status}`);
    if (!respuesta.headers.get("content-type")?.includes(tipo)) throw new Error(`${ruta}: tipo de contenido inesperado`);
    if (fragmento && !(await respuesta.text()).includes(fragmento)) throw new Error(`${ruta}: contenido esperado ausente`);
    if (!fragmento) await respuesta.arrayBuffer();
    console.log(`OK ${ruta}: HTTP 200`);
  }
  console.log("Worker verificado en el entorno local de Cloudflare.");
} catch (error) {
  console.error(error.message);
  console.error(registro);
  process.exitCode = 1;
} finally {
  const salida = once(servidor, "exit");
  try {
    if (process.platform === "win32") servidor.kill("SIGTERM");
    else process.kill(-servidor.pid, "SIGTERM");
  } catch { /* El proceso ya terminó. */ }
  await Promise.race([salida, esperar(3000)]);
}
