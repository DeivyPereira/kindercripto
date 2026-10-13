# KinderCripto

Diseño actualizado de Google Stitch convertido a Next.js, TypeScript y Tailwind CSS, con contenido en español y soporte para Cloudflare Workers mediante OpenNext.

## Desarrollo

Usa Node.js 22 (también indicado en `.nvmrc`).

```sh
npm ci
npm run dev
```

Abre http://localhost:3000.

## Organización

- `src/app`: página, layout global, estilos y SEO.
- `src/components/layout`: navegación móvil, cabecera, pie y contacto.
- `src/components/secciones`: portada, pasos, Elsa, mentoría, preguntas frecuentes y llamada a la acción.
- `src/components/campanas`: catálogo, tarjetas y diálogo accesible.
- `src/lib/campanas.ts`: catálogo y detalles de las siete campañas de MEXC.
- `src/lib/configuracion.ts`: nombre, dominio y canales de contacto.
- `stitch/code.html` y `stitch/screen.png`: referencia actualizada.

## SEO

Idioma español, títulos, descripción, URL canónica, Open Graph, Twitter, imagen social generada, favicon, sitemap, robots y datos estructurados WebSite/Person. La página se renderiza desde Next.js; filtros y navegación usan React. Mantén el dominio definitivo en `NEXT_PUBLIC_SITE_URL` para generar URLs correctas.

## Cloudflare Workers

El proyecto utiliza el adaptador OpenNext y Wrangler. `wrangler.jsonc` contiene únicamente configuración pública: nombre del Worker, rutas de compilación y compatibilidad. No incluye credenciales, identificadores de cuenta ni recursos privados. No requiere crear R2 ni bases de datos para esta versión de presentación.

```sh
npm run typecheck
npm run build:worker
npm run test:worker
npm run preview
```

Para desplegar desde tu equipo, autentícate con `npx wrangler login` y ejecuta `npm run deploy`. El proyecto no inicia sesión ni despliega automáticamente.

También puedes conectar este repositorio desde Workers Builds en Cloudflare:

- Instalación: `npm ci`.
- Compilación: `npm run build:worker`.
- Despliegue: `npm run deploy:worker`.
- Versión de Node.js: 22.

Si aparece `Could not find compiled Open Next config`, revisa el comando de compilación en Workers Builds: debe ser `npm run build:worker`. `npm run build` compila solo Next.js y no genera `.open-next/worker.js` ni la configuración compilada que requiere el despliegue. Guarda el cambio y vuelve a ejecutar la compilación en Cloudflare. `npm run deploy:worker` usa el resultado ya compilado; `npm run deploy` compila y despliega en un único paso desde tu equipo.

Configura `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_WHATSAPP` y `NEXT_PUBLIC_AGENDA_URL` en el entorno de compilación de Cloudflare. Son datos públicos incorporados al sitio; nunca uses variables `NEXT_PUBLIC_*` para secretos. Los futuros secretos de servidor deben guardarse en Cloudflare mediante su panel o `wrangler secret put`, nunca en el repositorio.

Para desarrollo puedes crear un `.env.local` privado con esos nombres. Todos los archivos `.env*`, `.dev.vars*`, credenciales, estados de Wrangler y resultados de compilación están excluidos por `.gitignore`, incluido cualquier archivo de ejemplo de entorno.

## Revisión del contenido

Las cifras promocionales, APR y fechas provienen del diseño de Stitch y deben confirmarse en los términos oficiales antes de publicar. Los detalles de las campañas muestran esta aclaración. El HTML original tenía identificadores de campañas desactualizados; la conversión vincula las siete tarjetas a sus propios detalles.

Configura los canales reales de Elsa para habilitar WhatsApp y la agenda. Los textos legales aún requieren el contenido definitivo del titular. Las fotografías se sirven localmente.

## Git

El remoto `origin` apunta a `https://github.com/DeivyPereira/kindercripto.git`. Añadir el remoto no publica archivos: revisa `git status` antes de crear commits o realizar un push.

## Compatibilidad del Worker

Next.js está fijado en `16.3.8`. Con Next.js `16.4.0` y OpenNext `1.20.10` se reprodujo una excepción al cargar `preview-props.json`, que produce HTTP 500 / error 1101 aunque la compilación termine bien. No amplíes el rango de Next.js sin ejecutar `npm run test:worker` después de `npm run build:worker`. Esta comprobación arranca el Worker local y verifica la página principal, robots, sitemap, imagen social y una imagen del catálogo con respuestas HTTP 200.

## Imagen para compartir

`public/og-image.png` es la imagen social de 1200 × 630 píxeles, con la marca, la fotografía de Elsa y textos en español. Open Graph y Twitter usan el mismo archivo estático para evitar ejecutar un generador de imágenes en el Worker. Puedes regenerarla con `npm run generate:og`.
