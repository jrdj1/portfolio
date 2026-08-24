export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

export const ui = {
  es: {
    'site.title': 'Jorge Julián Vicedo — Portfolio',
    'site.description':
      'Proyectos académicos y profesionales de Jorge Julián Vicedo, Ingeniero de Software Júnior: sistemas distribuidos, aplicaciones full-stack y cómo se han construido.',
    'nav.projects': 'Proyectos',
    'nav.tech': 'Tecnologías Revolucionarias',
    'nav.blog': 'Blog',
    'nav.about': 'Sobre mí',
    'nav.langSwitch': 'English',
    'nav.themeToggle': 'Cambiar entre tema claro y oscuro',
    'nav.back': '← Volver al inicio',

    'hero.eyebrow': 'Bitácora de ingeniería',
    'hero.headline': 'Construyo software y documento el camino hasta llegar ahí.',
    'hero.name': 'Jorge Julián Vicedo',
    'hero.role': 'Ingeniero de Software Júnior',

    'entry.projects.title': 'Proyectos',
    'entry.projects.desc': 'Académicos y personales, terminados o en marcha.',
    'entry.tech.title': 'Tecnologías Revolucionarias',
    'entry.tech.desc': 'Un recopilatorio del panorama tecnológico actual.',
    'entry.blog.title': 'Blog',
    'entry.blog.desc': 'Notas largas sobre cómo se construyen las cosas.',
    'entry.about.title': 'Sobre mí',
    'entry.about.desc': 'Enfoque, habilidades, experiencia y educación.',

    'about.heading': 'Enfoque',
    'about.languagesHeading': 'Idiomas',
    'about.exploreHeading': 'Explorar',
    'about.skills.title': 'Habilidades',
    'about.skills.desc': 'Lenguajes, frameworks, bases de datos y herramientas.',
    'about.experience.title': 'Experiencia',
    'about.experience.desc': 'Hackathons, competiciones y logros.',
    'about.education.title': 'Educación',
    'about.education.desc': 'Formación académica.',
    'about.contact.title': 'Contacto',
    'about.contact.desc': 'Email, CV descargable, GitHub y LinkedIn.',
    'about.back': '← Volver a Sobre mí',

    'skills.heading': 'Habilidades',

    'projects.heading': 'Proyectos',
    'projects.intro':
      'Una selección de proyectos académicos y personales. Algunos están terminados, otros siguen en marcha — los dos estados quedan reflejados tal cual.',
    'projects.viewRepo': 'Ver repositorio',
    'projects.noRepo': 'Repositorio no disponible públicamente todavía',

    'tech.heading': 'Tecnologías Revolucionarias',
    'tech.intro':
      'Esto no es un informe del sector ni una lista exhaustiva: es una selección personal y parcial de lo que sigo de cerca ahora mismo, por qué me parece importante, y cómo se cruza (o no) con lo que construyo. Se actualiza de vez en cuando, sin calendario fijo.',

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
  },
  en: {
    'site.title': 'Jorge Julián Vicedo — Portfolio',
    'site.description':
      'Academic and professional projects by Jorge Julián Vicedo, Junior Software Engineer: distributed systems, full-stack applications, and how they were built.',
    'nav.projects': 'Projects',
    'nav.tech': 'Revolutionary Tech',
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'nav.langSwitch': 'Español',
    'nav.themeToggle': 'Toggle light and dark theme',
    'nav.back': '← Back to home',

    'hero.eyebrow': 'Engineering log',
    'hero.headline': 'I build software, and document the way there.',
    'hero.name': 'Jorge Julián Vicedo',
    'hero.role': 'Junior Software Engineer',

    'entry.projects.title': 'Projects',
    'entry.projects.desc': 'Academic and personal, finished or in progress.',
    'entry.tech.title': 'Revolutionary Tech',
    'entry.tech.desc': 'A roundup of the current tech landscape.',
    'entry.blog.title': 'Blog',
    'entry.blog.desc': 'Longer notes on how things get built.',
    'entry.about.title': 'About',
    'entry.about.desc': 'Approach, skills, experience and education.',

    'about.heading': 'Approach',
    'about.languagesHeading': 'Languages',
    'about.exploreHeading': 'Explore',
    'about.skills.title': 'Skills',
    'about.skills.desc': 'Languages, frameworks, databases and tools.',
    'about.experience.title': 'Experience',
    'about.experience.desc': 'Hackathons, competitions and achievements.',
    'about.education.title': 'Education',
    'about.education.desc': 'Academic background.',
    'about.contact.title': 'Contact',
    'about.contact.desc': 'Email, downloadable CV, GitHub and LinkedIn.',
    'about.back': '← Back to About',

    'skills.heading': 'Skills',

    'projects.heading': 'Projects',
    'projects.intro':
      "A selection of academic and personal projects. Some are finished, others are still in progress — both states are shown as they are.",
    'projects.viewRepo': 'View repository',
    'projects.noRepo': 'Repository not publicly available yet',

    'tech.heading': 'Revolutionary Technologies',
    'tech.intro':
      "This isn't an industry report or an exhaustive list: it's a personal, partial selection of what I'm following closely right now, why it seems worth it, and how it does (or doesn't) connect to what I build. Updated now and then, no fixed schedule.",

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
  },
} as const;

export type UiKey = keyof (typeof ui)['es'];
