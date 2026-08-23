export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

/**
 * Fase 1: textos de relleno para validar la estructura y el enrutado
 * bilingue antes de volcar el contenido real del CV (Fase 2).
 */
export const ui = {
  es: {
    'site.title': 'Jorge de Julián Vicedo — Portfolio',
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.education': 'Educación',
    'nav.contact': 'Contacto',
    'nav.langSwitch': 'English',
    'hero.eyebrow': 'Ingeniero de Software Júnior',
    'hero.name': 'Jorge Rafael de Julián Vicedo',
    'hero.cta.projects': 'Ver proyectos',
    'hero.cta.contact': 'Contactar',
    'about.heading': 'Sobre mí',
    'about.languagesHeading': 'Idiomas',
    'skills.heading': 'Habilidades',
    'projects.heading': 'Proyectos',
    'projects.viewRepo': 'Ver repositorio',
    'projects.noRepo': 'Repositorio no disponible públicamente todavía',
    'experience.heading': 'Experiencia y logros',
    'education.heading': 'Educación',
    'contact.heading': 'Contacto',
    'contact.body': '¿Hablamos? Puedes escribirme por email o encontrarme en GitHub y LinkedIn.',
    'contact.cvEs': 'Descargar CV (ES)',
    'contact.cvEn': 'Descargar CV (EN)',
    'footer.rights': 'Todos los derechos reservados.',
  },
  en: {
    'site.title': 'Jorge de Julián Vicedo — Portfolio',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'nav.langSwitch': 'Español',
    'hero.eyebrow': 'Junior Software Engineer',
    'hero.name': 'Jorge Rafael de Julián Vicedo',
    'hero.cta.projects': 'View projects',
    'hero.cta.contact': 'Get in touch',
    'about.heading': 'About',
    'about.languagesHeading': 'Languages',
    'skills.heading': 'Skills',
    'projects.heading': 'Projects',
    'projects.viewRepo': 'View repository',
    'projects.noRepo': 'Repository not publicly available yet',
    'experience.heading': 'Experience & achievements',
    'education.heading': 'Education',
    'contact.heading': 'Contact',
    'contact.body': "Let's talk — reach me by email or find me on GitHub and LinkedIn.",
    'contact.cvEs': 'Download CV (ES)',
    'contact.cvEn': 'Download CV (EN)',
    'footer.rights': 'All rights reserved.',
  },
} as const;

export type UiKey = keyof (typeof ui)['es'];
