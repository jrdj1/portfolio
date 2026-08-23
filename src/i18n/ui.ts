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
    'hero.tagline': 'Texto de relleno: presentación breve pendiente de redactar.',
    'hero.cta.projects': 'Ver proyectos',
    'hero.cta.contact': 'Contactar',
    'about.heading': 'Sobre mí',
    'about.body': 'Texto de relleno: perfil profesional pendiente de redactar.',
    'skills.heading': 'Habilidades',
    'skills.placeholder': 'Lista de habilidades técnicas pendiente de añadir.',
    'projects.heading': 'Proyectos',
    'projects.placeholder': 'Tarjetas de proyectos pendientes de añadir.',
    'experience.heading': 'Experiencia',
    'experience.placeholder': 'Historial de experiencia pendiente de añadir.',
    'education.heading': 'Educación',
    'education.placeholder': 'Historial académico pendiente de añadir.',
    'contact.heading': 'Contacto',
    'contact.body': 'Texto de relleno: formas de contacto pendientes de añadir.',
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
    'hero.tagline': 'Placeholder text: short introduction to be written.',
    'hero.cta.projects': 'View projects',
    'hero.cta.contact': 'Get in touch',
    'about.heading': 'About',
    'about.body': 'Placeholder text: professional profile to be written.',
    'skills.heading': 'Skills',
    'skills.placeholder': 'List of technical skills to be added.',
    'projects.heading': 'Projects',
    'projects.placeholder': 'Project cards to be added.',
    'experience.heading': 'Experience',
    'experience.placeholder': 'Experience history to be added.',
    'education.heading': 'Education',
    'education.placeholder': 'Academic history to be added.',
    'contact.heading': 'Contact',
    'contact.body': 'Placeholder text: contact methods to be added.',
    'footer.rights': 'All rights reserved.',
  },
} as const;

export type UiKey = keyof (typeof ui)['es'];
