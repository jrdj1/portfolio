export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

export const ui = {
  es: {
    'site.title': 'Jorge Julián Vicedo — Portfolio',
    'site.description':
      'Proyectos académicos y profesionales de Jorge Julián Vicedo, Ingeniero de Software Júnior: sistemas distribuidos, aplicaciones full-stack y cómo se han construido.',
    'nav.projects': 'Proyectos',
    'nav.blog': 'Blog',
    'nav.skills': 'Habilidades',
    'nav.experience': 'Experiencia',
    'nav.education': 'Educación',
    'nav.about': 'Enfoque',
    'nav.contact': 'Contacto',
    'nav.langSwitch': 'English',
    'nav.themeToggle': 'Cambiar entre tema claro y oscuro',
    'hero.eyebrow': 'Bitácora de ingeniería',
    'hero.headline': 'Construyo software y documento el camino hasta llegar ahí.',
    'hero.name': 'Jorge Julián Vicedo',
    'hero.role': 'Ingeniero de Software Júnior',
    'hero.cta.projects': 'Ver proyectos',
    'hero.cta.contact': 'Contactar',
    'about.heading': 'Enfoque',
    'about.languagesHeading': 'Idiomas',
    'skills.heading': 'Habilidades',
    'projects.heading': 'Proyectos',
    'projects.intro':
      'Una selección de proyectos académicos y personales. Algunos están terminados, otros siguen en marcha — los dos estados quedan reflejados tal cual.',
    'projects.viewRepo': 'Ver repositorio',
    'projects.noRepo': 'Repositorio no disponible públicamente todavía',
    'experience.heading': 'Experiencia y logros',
    'education.heading': 'Educación',
    'contact.heading': 'Contacto',
    'contact.body': '¿Hablamos? Puedes escribirme por email o encontrarme en GitHub y LinkedIn.',
    'contact.cvEs': 'Descargar CV (ES)',
    'contact.cvEn': 'Descargar CV (EN)',
    'footer.rights': 'Todos los derechos reservados.',
    'blog.heading': 'Blog',
    'blog.comingSoon':
      'Todavía no hay entradas — aquí irán las notas más largas sobre cómo se construyen los proyectos de este portfolio: decisiones, callejones sin salida, cosas aprendidas.',
    'blog.back': 'Volver al inicio',
  },
  en: {
    'site.title': 'Jorge Julián Vicedo — Portfolio',
    'site.description':
      'Academic and professional projects by Jorge Julián Vicedo, Junior Software Engineer: distributed systems, full-stack applications, and how they were built.',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.about': 'Approach',
    'nav.contact': 'Contact',
    'nav.langSwitch': 'Español',
    'nav.themeToggle': 'Toggle light and dark theme',
    'hero.eyebrow': 'Engineering log',
    'hero.headline': 'I build software, and document the way there.',
    'hero.name': 'Jorge Julián Vicedo',
    'hero.role': 'Junior Software Engineer',
    'hero.cta.projects': 'View projects',
    'hero.cta.contact': 'Get in touch',
    'about.heading': 'Approach',
    'about.languagesHeading': 'Languages',
    'skills.heading': 'Skills',
    'projects.heading': 'Projects',
    'projects.intro':
      "A selection of academic and personal projects. Some are finished, others are still in progress — both states are shown as they are.",
    'projects.viewRepo': 'View repository',
    'projects.noRepo': 'Repository not publicly available yet',
    'experience.heading': 'Experience & achievements',
    'education.heading': 'Education',
    'contact.heading': 'Contact',
    'contact.body': "Let's talk — reach me by email or find me on GitHub and LinkedIn.",
    'contact.cvEs': 'Download CV (ES)',
    'contact.cvEn': 'Download CV (EN)',
    'footer.rights': 'All rights reserved.',
    'blog.heading': 'Blog',
    'blog.comingSoon':
      "No posts yet — this is where the longer write-ups will go: how the projects in this portfolio got built, decisions, dead ends, things learned along the way.",
    'blog.back': 'Back to home',
  },
} as const;

export type UiKey = keyof (typeof ui)['es'];
