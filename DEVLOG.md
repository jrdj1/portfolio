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

## Fase 3 — Estilos base con Tailwind

_Pendiente._

## Fase 4 — Componentes pulidos

_Pendiente._

## Fase 5 — Interactividad y detalles avanzados

_Pendiente._

## Fase 6 — Rendimiento, accesibilidad y despliegue

_Pendiente._
