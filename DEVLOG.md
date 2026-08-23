# Bitácora de desarrollo

Registro fase a fase del desarrollo progresivo de este portfolio. Cada entrada corresponde a un commit (o grupo de commits) en el historial de Git.

## Fase 0 — Setup del proyecto (2026-08-23)

**Qué se hizo**
- Proyecto Astro creado con `create-astro` (plantilla `minimal`, TypeScript en modo `strict`).
- Integración de Tailwind CSS v4 vía `astro add tailwind` (plugin de Vite, sin `tailwind.config.mjs` — la configuración de tema se hará en `src/styles/global.css` con `@theme` cuando llegue la fase de estilos).
- i18n nativo de Astro configurado en `astro.config.mjs`: locales `es` (por defecto, sin prefijo) y `en` (con prefijo `/en`).
- `LICENSE` (MIT), `README.md` y este `DEVLOG.md`.
- Repositorio Git inicializado y publicado en GitHub como [`jrdj1/portfolio`](https://github.com/jrdj1/portfolio) (público).

**Por qué**
- Astro + salida estática porque el sitio no necesita SSR: es contenido personal que cambia poco y así el despliegue en Vercel es zero-config.
- Tailwind v4 (en vez de v3) porque es la versión que integra `astro add` en este momento y evita mantener un `tailwind.config.js` aparte.
- i18n nativo de Astro en vez de una librería externa: cubre lo necesario (rutas por idioma, `getRelativeLocaleUrl`) sin añadir dependencias.

**Decisiones pendientes / TODO**
- Enlaces reales a los repositorios de SmartFest Data, EasyCab2, BookHeaven y Meteor Madness (se añadirán en la Fase 2 cuando estén confirmados).
- URL definitiva de Vercel (placeholder en `astro.config.mjs` y en el README hasta el primer deploy).

## Fase 1 — Esqueleto con placeholders (2026-08-23)

**Qué se hizo**
- Diccionario de traducción `src/i18n/ui.ts` (claves `es`/`en`) y helpers `src/i18n/utils.ts` (`getLangFromUrl`, `useTranslations`).
- `Layout.astro` base (sin CSS todavía — a propósito, para que la Fase 3 muestre el salto visual de forma clara).
- `Header.astro` (nav a las secciones + selector de idioma con `getRelativeLocaleUrl`) y `Footer.astro` (enlaces a GitHub/LinkedIn/email).
- Siete secciones semánticas como componentes independientes y reutilizables entre idiomas (`Hero`, `About`, `Skills`, `Projects`, `Experience`, `Education`, `Contact`), cada una con `<section id="…" aria-labelledby="…">` y jerarquía de encabezados correcta (`h1` solo en el Hero, `h2` en el resto).
- Páginas `src/pages/index.astro` (es, sin prefijo) y `src/pages/en/index.astro` (en), ambas componiendo los mismos componentes con `lang` distinto — nada de HTML duplicado entre idiomas.
- Todo el texto es de relleno ("pendiente de añadir" / "to be added"); el contenido real del CV llega en la Fase 2.

**Por qué**
- Componentes de sección parametrizados por `lang` en vez de duplicar el JSX/markup por idioma: mantiene una única fuente de verdad para la estructura y evita que ES/EN diverjan por accidente.
- Sin Tailwind ni CSS todavía: el objetivo de esta fase es validar semántica, accesibilidad básica (landmarks, encabezados, `aria-label`) y el enrutado i18n antes de invertir en diseño visual.

**Verificación**
- `npx astro check`: 0 errores.
- `npm run build`: genera `/index.html` y `/en/index.html`.
- Revisión visual con el servidor de desarrollo: navegación por anclas y selector de idioma (`/` ↔ `/en/`) funcionando en ambas direcciones.

## Fase 2 — Contenido real (2026-08-23)

**Qué se hizo**
- `src/content/profile.ts`: contenido tipado y bilingüe (ES/EN) extraído del CV — perfil, habilidades por categoría, proyectos, experiencia, educación e idiomas hablados. Los componentes de sección ya no usan texto de relleno.
- Nueva subsección "Idiomas"/"Languages" dentro de `About`, con los idiomas hablados del CV (no confundir con el selector de idioma del sitio).
- Tarjetas de proyecto con badge de estado (p. ej. "En desarrollo", "NASA Space Apps Challenge 2025") y enlace al repositorio cuando existe.
- PDFs del CV (ES/EN) copiados a `public/cv/` y enlazados desde la sección de contacto.

**Enlaces de proyectos — decisiones tomadas con el usuario**
- **Meteor Madness** → [`jrdj1/NASA-2025-METEOR-MADNESS`](https://github.com/jrdj1/NASA-2025-METEOR-MADNESS).
- **EasyCab2** → [`jrdj1/EasyCab`](https://github.com/jrdj1/EasyCab) (confirmado por el usuario).
- **SmartFest Data** y **BookHeaven**: no tienen repositorio público todavía; la tarjeta lo indica ("Repositorio no disponible públicamente todavía" / "Repository not publicly available yet") en vez de enlazar a una URL inventada. **TODO:** añadir el enlace en cuanto exista.

**Por qué**
- Contenido tipado (`ProfileContent`) en vez de más claves sueltas en `ui.ts`: los datos de CV son estructurados (listas, grupos, items con metadatos) y modelarlos como tal evita duplicar lógica de renderizado entre ES/EN.
- No se publica el teléfono del CV (ver decisión en el plan de proyecto) — contacto vía email, descarga de CV, GitHub y LinkedIn (estos dos últimos ya en el `Footer` desde la Fase 1).

**Verificación**
- `npx astro check`: 0 errores.
- `npm run build`: OK.
- Revisión visual ES/EN en el servidor de desarrollo; `curl` confirma que `/cv/cv-es.pdf` y `/cv/cv-en.pdf` responden `200`.

## Fase 3 — Estilos base con Tailwind (2026-08-23)

**Qué se hizo**
- Tokens de diseño en `src/styles/global.css` vía `@theme` (Tailwind v4, sin `tailwind.config.mjs`): paleta oscura técnica (`--color-bg`, `--color-surface`, `--color-border`, `--color-text`, `--color-text-muted`, `--color-accent` cian) y tipografías autohospedadas con `@fontsource` (Inter Variable para texto, JetBrains Mono para etiquetas/eyebrows).
- `global.css` importado por fin en `Layout.astro` — a partir de aquí el sitio usa Tailwind.
- `Header` con nav sticky + blur, enlace "Skip to content" para accesibilidad de teclado, selector de idioma como botón con borde.
- Contenedor y espaciado consistentes en todas las secciones (`max-w-4xl`, `scroll-mt-24` para que el scroll a anclas no quede tapado por el header sticky, separadores `border-t`).
- Hero con jerarquía tipográfica y botones CTA (uno sólido con el acento, uno con borde).
- Tarjetas simples para `Projects` (borde + fondo `surface`) y borde lateral tipo "timeline" para `Experience`/`Education` — tratamiento mínimo, el pulido de componentes llega en la Fase 4.

**Por qué**
- Sin toggle claro/oscuro: el usuario eligió explícitamente un único tema oscuro técnico, así que no se añade la complejidad de un color-scheme conmutable.
- Elección de acento cian (`#22d3ee`) sobre fondo casi negro: contraste alto (AA) sobre `--color-bg`, encaja con la temática "developer/espacio" de proyectos como Meteor Madness sin depender de una marca personal predefinida.
- Tailwind v4 vía `@theme` en CSS (no `tailwind.config.mjs`): es el enfoque que integra `astro add tailwind` actualmente y evita mantener dos sistemas de configuración.

**Verificación**
- `npx astro check` y `npm run build`: sin errores.
- Sin acceso a captura visual del Browser pane en esta sesión; verificado por inspección programática (`getComputedStyle` sobre `body`/`h1`/CTA) que el tema, la tipografía y el color de acento se aplican, y que fuentes/CSS cargan con `200 OK` sin errores de consola.

## Fase 4 — Componentes pulidos (2026-08-23)

**Qué se hizo**
- Hero: fondo decorativo (glow radial difuminado en el color de acento, puramente CSS, `aria-hidden`) y micro-interacción en el CTA principal (`hover:-translate-y-0.5`).
- Skills / Idiomas: de texto plano a píldoras (`rounded-full`, borde + fondo `surface`), igual que las etiquetas de tecnología en las tarjetas de proyecto.
- Proyectos: hover con cambio de color en el borde y en el título (`group-hover`), tags de tecnología como píldoras más pequeñas.
- Experiencia / Educación: de un simple borde izquierdo a una timeline real con marcador circular (`::before`-style span posicionado) por cada entrada.

**Por qué**
- Las píldoras para skills/idiomas/tecnologías dan escaneabilidad visual inmediata (patrón muy reconocible en portfolios técnicos) sin añadir JS.
- El glow del Hero es puramente decorativo y `aria-hidden="true"`: no interfiere con lectores de pantalla ni añade peso (sin imágenes, solo `blur` + `opacity` de Tailwind).
- Se mantiene el nav del Header con `flex-wrap` en vez de un menú hamburguesa con JS: a este tamaño de sitio (6 enlaces) el wrap es igual de usable en móvil y evita añadir un componente interactivo/isla solo para eso; se revisará en la Fase 6 si la auditoría de accesibilidad/UX sugiere lo contrario.

**Verificación**
- `npx astro check` y `npm run build`: sin errores.
- `grep` sobre `dist/index.html` confirma que las clases nuevas (`rounded-full`, etc.) se generan en el build de producción.
- Sin captura visual disponible en esta sesión (ver nota en Fase 3); verificado por inspección de clases aplicadas y estructura del DOM.

## Fase 5 — Interactividad y detalles avanzados (2026-08-23)

**Qué se hizo**
- **View Transitions**: `<ClientRouter />` de Astro en `Layout.astro` — navegación (p. ej. el cambio de idioma) con transición suave en vez de recarga brusca.
- **Animaciones al hacer scroll**: `data-reveal` en el contenedor de cada sección (excepto el Hero, visible desde el primer render) + `IntersectionObserver` inline en `Layout.astro`. Respeta `prefers-reduced-motion` (si el usuario lo pide, todo se muestra sin animar) y se reengancha en `astro:page-load` para seguir funcionando tras una View Transition.
- **SEO**: `<meta name="description">`, Open Graph (`og:title`, `og:description`, `og:image`, `og:locale`) y Twitter Card por idioma; `canonical` + `hreflang` (`es`/`en`/`x-default`); JSON-LD `Person` con nombre, rol, email y enlaces a GitHub/LinkedIn.
- **Sitemap**: integración `@astrojs/sitemap` (`astro add sitemap`) — genera `sitemap-index.xml` con las dos rutas (`/` y `/en/`) automáticamente en cada build.
- **`robots.txt`**: permite todo el rastreo y apunta al sitemap.
- **Imagen Open Graph**: `public/og.png` (1200×630) generada con un script propio (`scripts/generate-og.mjs`, usa `sharp` para rasterizar un SVG con los mismos tokens de diseño del sitio) — no forma parte del build ni del runtime, se ejecuta manualmente cuando haga falta regenerarla.

**Decisión: sin formulario de contacto**
- Se valoró añadir un formulario (Formspree u otro servicio) pero requeriría una cuenta externa que el usuario aún no tiene configurada. En vez de dejar un formulario a medias o roto, se mantiene el contacto por `mailto:` + descarga directa del CV (ya implementado en la Fase 2), que es 100% funcional sin dependencias de terceros. **TODO** si el usuario quiere un formulario más adelante: crear cuenta en Formspree (u otro), pasar el endpoint, y se añade con validación cliente.

**Por qué**
- View Transitions + scroll reveal usando solo APIs nativas del navegador (sin librerías de animación) — coherente con el enfoque "progresivo" de ir añadiendo capas sin inflar el bundle.
- JSON-LD `Person` en vez de `WebSite`/`ProfilePage`: es el tipo que mejor describe a un portfolio personal para los rich results de buscadores.

**Verificación**
- `npx astro check` (0 errores/avisos tras añadir `is:inline` al script del JSON-LD) y `npm run build` (genera `sitemap-index.xml`/`sitemap-0.xml` con ambas URLs).
- Inspección en el navegador: meta description, OG tags, canonical/hreflang y JSON-LD correctos; tras hacer scroll, `6/6` secciones quedan marcadas `is-visible`.

## Fase 6 — Rendimiento, accesibilidad y despliegue

_Pendiente._
