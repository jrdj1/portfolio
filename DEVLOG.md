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

## Fase 6 — Rendimiento, accesibilidad y despliegue (2026-08-23)

**Qué se hizo**
- **Accesibilidad**: verificado programáticamente el contraste de la paleta (fórmula WCAG 2.1) — texto principal 16.59:1, texto secundario 6.55:1 (fondo) / 6.07:1 (tarjetas), acento cian 11.14:1; todos superan el mínimo AA (4.5:1) con holgura. Jerarquía de encabezados (`h1` único, `h2` por sección, `h3` para subgrupos) y landmarks (`header`/`nav`/`main`/`footer`/`section` etiquetadas) verificados en el DOM renderizado.
- **Rendimiento — fuentes**: `global.css` pasó de importar los paquetes completos de `@fontsource` (que incluyen cirílico/griego/vietnamita) a solo los subconjuntos `latin`/`latin-ext` necesarios para es/en. Los ficheros de fuente en `dist/_astro` bajaron de 29 a 12 y el peso total del build de ~4.9 MB a ~3.0 MB (el resto son los dos PDF de CV, que son el propio contenido a descargar).
- **Despliegue**: `astro.config.mjs` documenta con un comentario que `site` es un placeholder hasta el primer deploy; el README explica el paso de importar el repo en Vercel (preset "Astro", sin configuración adicional) y añade el paso posterior de actualizar `site` + `robots.txt` con la URL real una vez desplegado.
- Script `npm run generate:og` añadido para poder regenerar `public/og.png` sin recordar la ruta del script.

**Por qué**
- Los subconjuntos de idioma en las fuentes no cambian el rendimiento percibido por sí solos (el navegador solo pedía ya el subconjunto que necesitaba gracias a `unicode-range`), pero sí el peso del repositorio/build y el tiempo de instalación/deploy — limpieza razonable antes de dar el proyecto por "terminado".
- No se ejecuta una auditoría Lighthouse real en esta sesión (no hay Chrome/Lighthouse CLI disponible en el entorno); en su lugar se verifican de forma programática los aspectos que Lighthouse mediría (contraste, tamaño de assets, fuentes con `font-display: swap`, ausencia de JS bloqueante) y se deja anotado como posible mejora futura ejecutar Lighthouse una vez desplegado en Vercel.

**Verificación**
- `npx astro check` y `npm run build`: sin errores.
- Contraste de color calculado con la fórmula de luminancia relativa de WCAG 2.1 (ver detalle arriba).
- Confirmado en el navegador que las fuentes cargadas (`document.fonts`) corresponden a los subconjuntos `latin`, y que caracteres acentuados (í, ñ) se renderizan correctamente con ellos.

## Reenfoque: proyectos primero + blog (2026-08-24)

**Qué se hizo**
- **Hero rediseñado**: ya no lidera con "rol · nombre" como una tarjeta de CV. Ahora el `h1` es una declaración de lo que se hace ("Construyo software y documento el camino hasta llegar ahí" / "I build software, and document the way there"); nombre, rol y ubicación pasan a una línea secundaria en mono debajo.
- **Orden de secciones cambiado**: Hero → **Proyectos** → Habilidades → Experiencia → Educación → **Enfoque** (antes "Sobre mí") → Contacto. Los proyectos pasan a ser lo primero que se ve tras el hero, no lo último antes de la ficha técnica.
- **"Sobre mí" → "Enfoque"**: baja de posición y se recorta de un párrafo estilo perfil profesional de CV a una nota breve sobre cómo se trabaja ("plantear una pregunta técnica, probar, romper cosas, documentar"), explícitamente alejada de "rellenar un currículum".
- **Proyectos** gana una frase de introducción que enmarca la sección como una selección con proyectos terminados y otros en marcha, en vez de una lista de logros.
- **Blog**: entrada nueva en la navegación (`/blog`, `/en/blog`) con página placeholder ("todavía no hay entradas...") — deja hueco en la IA para cuando se implemente el sistema de posts, sin construirlo todavía.
- `Layout.astro` generaliza `canonical`/`hreflang` con un prop `path` (antes solo contemplaba la home) para que funcionen en cualquier ruta, blog incluido.

**Por qué**
- El usuario pidió reenfocar el portfolio como "una experiencia, un proyecto científico" en vez de una página orientada a la autopromoción — reordenar para que los proyectos (el trabajo real) precedan al perfil personal, y recortar el "Sobre mí" a algo más honesto/breve, es la forma concreta de aplicar eso sin perder la sección de perfil profesional que sigue siendo necesaria.
- El placeholder de blog se añade ahora (solo la ruta + página vacía) para dejar sitio en la IA/nav sin comprometerse todavía a construir un sistema de contenido — se implementará más adelante.

**Verificación**
- `npx astro check` y `npm run build`: sin errores, 4 páginas generadas (`/`, `/en/`, `/blog/`, `/en/blog/`).
- Sitemap y `canonical`/`hreflang` verificados para la nueva ruta `/blog` en ambos idiomas.
- Revisado en el navegador: nuevo orden de secciones, nav con "Blog" y "Enfoque", página de blog en ES/EN, ancla `#about` con el nuevo título "Enfoque".

## De single-page a sitio multi-página (2026-08-24)

**Qué se hizo**
- El sitio pasa de ser una única página larga (con secciones ancladas) a un sitio real de varias páginas:
  - `/` — nueva landing: titular + 4 tarjetas de entrada (`EntryNav.astro`).
  - `/proyectos` (`/en/projects`) — página propia, antes una sección más de la home.
  - `/tecnologias-revolucionarias` (`/en/revolutionary-tech`) — placeholder nuevo, mismo patrón que Blog.
  - `/blog` (`/en/blog`) — sin cambios de contenido, solo de infraestructura de rutas.
  - `/sobre-mi` (`/en/about`) — hub: el bloque "Enfoque" (antes la sección "Sobre mí"/"About") + una sub-navegación (`AboutNav.astro`) a 4 páginas reales: `/sobre-mi/habilidades`, `/experiencia`, `/educacion`, `/contacto` (y sus equivalentes `/en/about/skills`, `/experience`, `/education`, `/contact`).
- **`src/i18n/routes.ts`**: nueva tabla central `{ clave: { es, en } }` con la URL de cada página. Sustituye el uso ad-hoc de `getRelativeLocaleUrl` allí donde el slug no es igual en los dos idiomas (p. ej. `proyectos` vs `projects`) — sin esto, `canonical`/`hreflang`/nav/selector de idioma habrían apuntado a rutas equivocadas en cuanto un slug se tradujo.
- `Layout.astro` pasa de un prop `path` (asumía la misma ruta en ambos idiomas) a un prop `route` (clave de `routes.ts`) para `canonical`/`hreflang`.
- `Header.astro` recibe también `route`, para que el selector de idioma lleve a la página **equivalente** en el otro idioma (antes siempre volvía al inicio) — comprobado en `/en/about/skills` → cambia a `/sobre-mi/habilidades`, no a `/`.
- Nav superior con 4 entradas (Proyectos, Tecnologías Revolucionarias, Blog, Sobre mí) + marca "JJV" enlazando al inicio (antes no había forma de "volver arriba" salvo scroll, porque todo era una sola página).

**Decisiones tomadas con el usuario**
- Proyectos es una entrada propia de primer nivel (no queda dentro de "Sobre mí"), manteniendo la filosofía "proyectos primero" del reenfoque anterior.
- Las sub-secciones de "Sobre mí" (Habilidades, Experiencia, Educación, Contacto) son páginas reales con URL propia, no anclas dentro de una única página.
- "Tecnologías Revolucionarias" se deja como placeholder — el contenido real (el recopilatorio del panorama tecnológico) se redacta en otra sesión.

**Por qué**
- Reutilización total de los componentes de sección ya existentes (`Projects`, `Skills`, `Experience`, `Education`, `Contact`, `About`) — cada página nueva es solo Layout + Header + Footer + el componente correspondiente; no hizo falta reescribir contenido, solo reubicarlo.
- Centralizar las rutas en una tabla (`routes.ts`) es la respuesta concreta a la pregunta de "arquitectura escalable para idiomas" del turno anterior: añadir un idioma nuevo ahora significa añadir una columna en `ui.ts`, `profile.ts` **y** `routes.ts` — tres tablas, no código de rutas disperso por los componentes.

**Verificación**
- `npx astro check` (37 ficheros, 0 errores) y `npm run build` (18 páginas generadas, sitemap con las 18 URLs).
- Navegado en el navegador: landing con las 4 tarjetas, hub "Sobre mí" con su sub-nav, página de Habilidades con el enlace "Volver a Sobre mí", selector de idioma desde una página profunda (`/en/about/skills` → `/sobre-mi/habilidades`), toggle de tema funcionando en una página nueva.

## Contenido real de "Tecnologías Revolucionarias" (2026-08-24)

**Qué se hizo**
- `profile.ts` gana `techRadar: TechEntry[]` (título, categoría, cuerpo) con 5 entradas bilingües: agentes de IA para programar, WebGPU, streaming/arquitecturas basadas en eventos, herramientas de build reescritas en Rust, y bases de datos vectoriales/RAG.
- Nuevo componente `TechRadar.astro` (timeline con marcador, mismo patrón visual que Experiencia/Educación) sustituye el placeholder "todavía no hay contenido" en `/tecnologias-revolucionarias` y `/en/revolutionary-tech`.

**Por qué este enfoque de contenido**
- Se descartó una lista genérica de "tendencias del sector" en favor de una selección personal explícitamente subjetiva y parcial (lo dice el propio texto de intro) — coherente con el tono de "Enfoque" y con la idea de portfolio-como-bitácora, no como informe corporativo.
- Cada entrada se ancla, cuando es posible, en algo real del propio portfolio o de sus proyectos: WebGPU conecta con Meteor Madness (WebGL), streaming/eventos con EasyCab2 (Kafka), RAG/vectores con los fundamentos de ML (scikit-learn), y las herramientas de build en Rust con la propia stack de este sitio (Vite + Rolldown). La entrada sobre agentes de IA es, literalmente, cómo se ha construido este portfolio — un guiño honesto en vez de ocultarlo.

**Verificación**
- `npx astro check` (38 ficheros, 0 errores) y `npm run build` (18 páginas).
- Revisado en el navegador en ES y EN: contenido correcto, un único `h1` por página y jerarquía `h2` por entrada.

## "Tecnologías Revolucionarias" → "Tecnologías": página independiente (2026-08-24)

**Qué se hizo**
- Renombrada de "Tecnologías Revolucionarias" a **"Tecnologías"** (nav, título, ruta): `/tecnologias-revolucionarias` → `/tecnologias`, `/en/revolutionary-tech` → `/en/technology` (actualizado en `routes.ts`, carpetas de página movidas).
- Contenido reescrito por completo: ya no enlaza cada entrada con un proyecto propio (se quitaron las referencias a este portfolio, EasyCab2 y Meteor Madness) — ahora es una página independiente.
- Alcance ampliado: `profile.ts` pasa de `techRadar: TechEntry[]` (una lista plana) a `techLandscape: { general: TechEntry[], computing: TechEntry[] }`, con dos apartados:
  - **Panorama general** (6 entradas): IA generativa y agentes, energía (renovables/almacenamiento/fusión), biotecnología y medicina, espacio (lanzamiento reutilizable/megaconstelaciones), robótica y automatización, materiales y semiconductores — más allá de la informática.
  - **Informática** (5 entradas, contenido de la Fase anterior pero reescrito sin atarlo a proyectos propios): agentes de IA para programar, WebGPU, streaming/eventos, herramientas de build en Rust, bases de datos vectoriales/RAG.
- Componente `TechRadar.astro` sustituido por `TechLandscape.astro` (misma estética de timeline, ahora con dos bloques bajo sus propios `h2`).

**Por qué**
- El usuario pidió explícitamente que la página no hablara de sus propios proyectos — coherente con tratarla como una sección de contenido totalmente independiente del resto del portfolio, no como una prueba social más.
- Separar "panorama general" de "informática" en dos bloques con sus propios encabezados, en vez de mezclarlo todo, dado que ahora cubre ámbitos muy distintos (energía, biotecnología, espacio...) y conviene que el lector pueda distinguir "tecnología en general" de "lo que toca directamente a la programación".

**Verificación**
- `npx astro check` (38 ficheros, 0 errores) y `npm run build` (18 páginas, `/tecnologias/` y `/en/technology/` incluidas).
- Sitemap actualizado con las rutas nuevas; revisado en el navegador que el contenido no menciona ningún proyecto propio y que el selector de idioma sigue llevando a la página equivalente (`/en/technology/`).

## Diferenciación visual: índice, secciones y modo claro (2026-08-25)

**Qué se hizo**
- **Índice (4 tarjetas de la home)**: cada entrada gana un icono SVG propio (capas para Proyectos, globo para Tecnologías, documento para Blog, persona para Sobre mí), y las tarjetas pasan a tener borde reforzado + sombra + elevación al hover (`hover:-translate-y-0.5`) en vez de depender solo del cambio de color de borde.
- **Sub-índice de "Sobre mí"** (`AboutNav`): mismo tratamiento — iconos (flecha de código, maletín, birrete, sobre) + tarjetas reforzadas.
- **Separación entre secciones**: `EntryNav` y `AboutNav` pasan a tener fondo `surface` a ancho completo (antes transparente), creando una franja diferenciada frente al bloque anterior (Hero / Enfoque). En Tecnologías, el bloque "Informática" se envuelve en un panel (`surface` + borde + sombra) para distinguirlo claramente de "Panorama general".
- **Nuevos tokens de diseño**: `--color-border-strong` (borde más marcado para elementos interactivos/tarjetas) y `--shadow-card` / `--shadow-card-hover` (sombra sutil — inexistente en oscuro, visible en claro). En oscuro casi no cambian nada (el contraste ya funcionaba); en claro son los que hacen que una tarjeta se lea como superficie separada en vez de "flotar" sobre un fondo casi idéntico.

**Bug encontrado y corregido: el toggle de tema no repintaba elementos con `transition-*`**
- Durante la verificación se descubrió que, en cualquier elemento con una clase `transition-colors`/`transition-all` de Tailwind, el color/borde/sombra basado en `var(--color-*)` se quedaba "congelado" con el valor del tema anterior al cambiar `data-theme` — aunque la propia variable CSS sí se actualizaba (confirmado con `getComputedStyle().getPropertyValue()`). Esto afectaba a elementos ya existentes desde la Fase de modo claro (p. ej. el botón de idioma del Header), no solo a los componentes nuevos de hoy — pasó inadvertido porque las primeras verificaciones solo comprobaron `body`/`h1` (sin `transition-*`) y no elementos interactivos con transición.
- **Fix**: al cambiar de tema, se añade una clase `.theme-switching` a `<html>` que desactiva todas las transiciones (`transition: none !important`) mientras se aplica el nuevo `data-theme`, forzando dos reflows (`void root.offsetHeight`) para asegurar que el navegador aplique cada paso antes de reactivar las transiciones 100 ms después. Es el patrón estándar para este tipo de problema de repintado con transiciones + custom properties.

**Por qué**
- Los tokens se separan del sistema de color base (`--color-border` sigue sirviendo para separadores finos entre bloques de texto) para no tener que subir el contraste de *todos* los bordes del sitio solo para reforzar los pocos que son realmente interactivos.
- El "congelamiento" de color en el toggle era un bug real de repintado (verificado con 4 toggles consecutivos, en dos elementos distintos, con y sin el fix) — no una cuestión de gusto de diseño, así que se prioriza sobre el resto de cambios visuales de este turno.

**Verificación**
- `npx astro check` (38 ficheros, 0 errores) y `npm run build` (18 páginas).
- 4 toggles de tema consecutivos verificados por `getComputedStyle` en el botón de idioma del Header y en una tarjeta de `EntryNav`: correctos en ambas direcciones tras el fix (antes, fallaban de forma intermitente).
- Panel "Informática" de Tecnologías verificado en modo claro: fondo, borde y sombra correctos.
- 4 iconos SVG de `EntryNav` confirmados en el DOM.

## Bordes de tarjeta más marcados (2026-08-25)

**Qué se hizo**
- El primer intento de `--color-border-strong` no bastaba para que se distinguiera con claridad dónde empieza y termina cada tarjeta del índice (feedback directo tras revisar `EntryNav`/`AboutNav`/Proyectos/panel de Tecnologías).
- Borde de `border` (1px) a `border-2` (2px) en todas las tarjetas/paneles interactivos.
- `--color-border-strong` recalculado para pasar de ~1.5-1.7:1 de contraste a **3.4-3.7:1** contra el fondo de la propia tarjeta y contra el de la sección — el mínimo que recomienda WCAG 1.4.11 para límites de componentes de interfaz (no es texto, pero conviene que se perciba igualmente): oscuro `#2a3450` → `#56698f`; claro `#c2c9d6` → `#7885a0`.
- Sombra (`--shadow-card`) ligeramente más presente en claro; separación entre tarjetas de `gap-4` a `gap-5`.
- Hover de `EntryNav`/`AboutNav` pasa de `border-accent-muted` a `border-accent` directamente (más contraste también en el estado interactivo).

**Por qué**
- El contraste de *fondo* entre tarjeta y sección es deliberadamente sutil en esta paleta (es una elección de diseño, no un error) — así que la definición del borde tenía que cargar con todo el peso de marcar el límite, y el valor anterior no era lo bastante fuerte para eso.

**Verificación**
- `npx astro check` y `npm run build`: sin errores.
- Contraste recalculado con la fórmula WCAG 2.1: 3.39-3.71:1 en las cuatro combinaciones borde/fondo relevantes (oscuro y claro, tarjeta y sección).
- Confirmado en el navegador que `border-2` (2px) y el nuevo color se aplican, y que el toggle de tema los actualiza correctamente en ambas direcciones.

## Estado del proyecto

Las seis fases planificadas están completas y publicadas en [`jrdj1/portfolio`](https://github.com/jrdj1/portfolio). TODOs de contenido abiertos: enlaces de repositorio para SmartFest Data y BookHeaven cuando estén disponibles públicamente, y valorar un formulario de contacto si se quiere ampliar más allá de `mailto:`.

## Post-lanzamiento — dominio y flujo de ramas (2026-08-24)

- **Desplegado en Vercel** desde `jrdj1/portfolio` (rama `main`). Dominio de producción: **[jorgejulianvicedo.vercel.app](https://jorgejulianvicedo.vercel.app)** (subdominio `.vercel.app` gratuito con el nombre del usuario, elegido desde Vercel → Settings → Domains; el dominio autogenerado por defecto llevaba un sufijo aleatorio porque `portfolio`/`portfolio-jrdj1` ya estaban en uso por otra cuenta).
- `site` en `astro.config.mjs` y `Sitemap:` en `public/robots.txt` actualizados con la URL definitiva; afecta a `canonical`, Open Graph, JSON-LD y sitemap.
- **Flujo de ramas a partir de ahora**: `main` es la rama de producción (deploy automático en Vercel en cada push); el desarrollo nuevo se hace en `devel` y se integra en `main` cuando esté listo para producción.

## Modo claro (2026-08-24)

**Qué se hizo**
- Segunda paleta de color (`--color-bg`, `--color-surface`, `--color-border`, `--color-text`, `--color-text-muted`, `--color-accent`, `--color-accent-muted`) definida en `global.css`, activada por `:root[data-theme="light"]` o por `@media (prefers-color-scheme: light)` cuando el usuario no ha elegido explícitamente. Como todos los componentes ya usaban `var(--color-*)` en vez de clases de color de Tailwind fijas, no hizo falta tocar ningún componente aparte del `Header` (botón) — el resto se adapta solo.
- Script `is:inline data-astro-rerun` al principio del `<head>` de `Layout.astro`: decide el tema antes del primer pintado (localStorage → si no hay, preferencia del sistema) para evitar parpadeo, y se re-ejecuta tras cada View Transition (`data-astro-rerun` es el mecanismo de Astro para eso).
- Botón de toggle en `Header` (icono sol/luna en SVG inline, sin librería de iconos) — el click se gestiona por delegación de eventos en `document` desde `Layout.astro`, así que sigue funcionando sin volver a engancharse tras cada cambio de página.
- Colores del modo claro elegidos y verificados con la misma fórmula de contraste WCAG 2.1 que en la Fase 6: acento `#0e7490` (cyan-700, más oscuro que el `#22d3ee` del tema oscuro para mantener 5:1+ de contraste sobre fondo claro).

**Por qué**
- `data-theme` en `<html>` + variables CSS en vez de clases `dark:`/`light:` de Tailwind por componente: con el sistema de tokens ya montado, cambiar de tema es cambiar el valor de la variable, no volver a escribir cada componente.
- Delegación de eventos en vez de re-enganchar un listener por página: más simple y robusto frente a las View Transitions, que reemplazan el DOM del `Header` en cada navegación.

**Verificación**
- `npx astro check` y `npm run build`: sin errores.
- En el navegador: tema inicial oscuro (sin preferencia guardada), toggle cambia colores/iconos e persiste en `localStorage`, se mantiene tras recargar y tras una View Transition (cambio de idioma).
