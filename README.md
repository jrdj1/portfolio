# Portfolio — Jorge Rafael de Julián Vicedo

Portfolio web personal de [Jorge Rafael de Julián Vicedo](https://github.com/jrdj1), estudiante de Ingeniería Informática (Universidad de Alicante) e Ingeniero de Software Júnior. Construido con [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com), en español e inglés.

🔗 Demo en vivo: _pendiente de desplegar en Vercel (se añadirá el enlace en cuanto exista)_

## Estrategia de desarrollo

Este proyecto se construye de forma **progresiva y documentada**: cada fase parte de una versión más simple (HTML sin estilos, contenido de relleno) y añade una capa de complejidad sobre la anterior (contenido real, estilos, componentes, interactividad, rendimiento). El objetivo es que tanto el resultado final como el propio historial de commits sirvan como muestra de habilidades técnicas.

El detalle de cada fase —qué se hizo, por qué y qué decisiones se tomaron— está en [`DEVLOG.md`](./DEVLOG.md).

## Stack técnico

- [Astro](https://astro.build) — framework web, TypeScript en modo `strict`
- [Tailwind CSS v4](https://tailwindcss.com) (vía `@tailwindcss/vite`)
- i18n nativo de Astro (`es` / `en`)
- Salida estática, pensada para desplegarse en [Vercel](https://vercel.com) sin configuración adicional
- Control de versiones: GitHub ([`jrdj1/portfolio`](https://github.com/jrdj1/portfolio))

## Estructura del proyecto

```text
portfolio/
├── public/            # Assets estáticos (favicon, CV en PDF, imágenes)
├── src/
│   ├── components/    # Componentes de Astro reutilizables
│   ├── i18n/           # Diccionarios de traducción (es / en) y utilidades
│   ├── layouts/        # Layouts base de página
│   ├── pages/          # Rutas del sitio
│   └── styles/         # CSS global (entrada de Tailwind)
├── astro.config.mjs
├── DEVLOG.md           # Bitácora de desarrollo, fase a fase
└── README.md
```

## Desarrollo local

Requiere Node.js 18.20.8+ / 20.3.0+ / 22.0.0+.

```bash
npm install
npm run dev       # http://localhost:4321
```

### Scripts disponibles

| Comando             | Acción                                              |
| :------------------- | :--------------------------------------------------- |
| `npm run dev`         | Arranca el servidor de desarrollo                     |
| `npm run build`       | Compila el sitio de producción en `./dist/`           |
| `npm run preview`      | Sirve localmente el build de producción                |
| `npm run astro check` | Comprueba tipos y errores de Astro/TypeScript          |
| `npm run generate:og` | Regenera `public/og.png` (imagen de Open Graph)         |

## Despliegue

El sitio es 100% estático y compatible con el preset "Astro" de Vercel sin necesidad de adapter ni variables de entorno:

1. Importar el repositorio `jrdj1/portfolio` desde el dashboard de [Vercel](https://vercel.com/new).
2. Framework preset: **Astro** (autodetectado).
3. Build command / output directory: los que detecta Vercel por defecto (`npm run build` / `dist`).
4. Deploy.
5. **Tras el primer deploy**: actualizar la URL real del sitio en dos sitios y volver a hacer commit/push (Vercel redepliega solo):
   - `site` en [`astro.config.mjs`](./astro.config.mjs) (usada para `canonical`, Open Graph, JSON-LD y el sitemap).
   - La línea `Sitemap:` en [`public/robots.txt`](./public/robots.txt).

## Licencia

[MIT](./LICENSE)
