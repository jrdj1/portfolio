import type { Locale } from './ui';

/**
 * Unica fuente de verdad para las URLs del sitio. Los slugs estan
 * traducidos por idioma (p.ej. "proyectos" / "projects"), asi que no se
 * pueden derivar con un simple prefijo de locale — de ahi esta tabla en
 * vez de construir rutas a mano en cada componente/pagina.
 */
export const routes = {
  home: { es: '/', en: '/en/' },
  projects: { es: '/proyectos/', en: '/en/projects/' },
  tech: { es: '/tecnologias-revolucionarias/', en: '/en/revolutionary-tech/' },
  blog: { es: '/blog/', en: '/en/blog/' },
  about: { es: '/sobre-mi/', en: '/en/about/' },
  aboutSkills: { es: '/sobre-mi/habilidades/', en: '/en/about/skills/' },
  aboutExperience: { es: '/sobre-mi/experiencia/', en: '/en/about/experience/' },
  aboutEducation: { es: '/sobre-mi/educacion/', en: '/en/about/education/' },
  aboutContact: { es: '/sobre-mi/contacto/', en: '/en/about/contact/' },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof routes;

export function routePath(lang: Locale, key: RouteKey): string {
  return routes[key][lang];
}
