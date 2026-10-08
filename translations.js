const translations = {
  ru: {
    meta: {
      title: "Валерия Чернявская — Frontend Developer Portfolio",
      description: "Портфолио Frontend-разработчика Валерии Чернявской. Разработка интерактивных веб-приложений, интеграции на WordPress, PHP, анимации и веб-производительность.",
      ogTitle: "Валерия Чернявская — Frontend Developer Portfolio",
      ogDesc: "Портфолио Frontend-разработчика. Разработка интерактивных веб-приложений, интеграции на WordPress, PHP и анимации.",
      twitterTitle: "Валерия Чернявская — Frontend Developer Portfolio",
      twitterDesc: "Портфолио Frontend-разработчика. Разработка интерактивных веб-приложений, интеграции на WordPress, PHP и анимации."
    },
    nav: {
      about: "Обо мне",
      skills: "Навыки",
      projects: "Проекты",
      contacts: "Контакты",
      anketa: "Анкета",
      cv: "CV"
    },
    hero: {
      title: 'Привет, меня зовут Лера <span class="information__hand">👋</span>',
      subtitlePrefix: "Я —",
      projectsBtn: "Список работ",
      contactsBtn: "Контакты",
      imageAlt: "Валерия Чернявская"
    },
    about: {
      title: "Обо мне",
      p1: "Frontend-разработчик с 3 годами коммерческого опыта в веб-разработке. Создаю быстрые, интерактивные и адаптивные веб-приложения и интеграции на WordPress.",
      p2: "Работала в <strong>MaxBitSolution (iGaming, резидент ПВТ)</strong>: проектировала компонентную архитектуру, разрабатывала и кастомизировала темы и плагины WordPress. Писала кастомные темы на объектно-ориентированном PHP (WP_Query, $wpdb, Composer PSR-4) с разделением логики, данных и шаблонов. Создавала кастомные Gutenberg-блоки, интегрировала REST API и PHP-хуки. Системно оптимизировала производительность: Core Web Vitals 90+, семантическая разметка Schema.org (JSON-LD) и SEO-метатеги.",
      p3: "На фрилансе разрабатываю проекты «под ключ»: от интерактивных SPA до интернет-магазинов на WooCommerce. Создаю чистый поддерживаемый код с акцентом на безопасность (валидация, экранирование, защита от XSS и CSRF) и максимальную скорость загрузки.",
      comp1Title: "Frontend & Интерактив",
      comp1Desc: "React (хуки, роутинг, управление состоянием), TypeScript, современный ES6+, семантическая вёрстка по БЭМ, сложные анимации (GSAP, ScrollTrigger, CSS 3D), Pixel Perfect и Mobile First.",
      comp2Title: "WordPress & Backend",
      comp2Desc: "Разработка тем с нуля на ООП PHP, кастомные блоки Gutenberg, плагины, WP_Query, $wpdb, Rewrite API, WooCommerce, платёжные API и интеграции по REST API.",
      comp3Title: "Инструменты & DevOps",
      comp3Desc: "Изоляция окружений в Docker, автоматизация сборок и деплоя через GitLab CI, бандлеры Vite и Webpack, контроль версий в Git, оптимизация Core Web Vitals и веб-доступность.",
      expandOpen: "Свернуть",
      expandClosed: "Читать полностью"
    },
    skills: {
      title: "Навыки"
    },
    projects: {
      title: "Проекты",
      visitBtn: "Посетить сайт",
      githubBtn: "GitHub",
      expandOpen: "Свернуть архив проектов",
      expandClosed: (count) => `Показать все проекты (ещё ${count})`,
      cards: {
        spinpulse: {
          desc: "Премиальное игровое лобби слотов, краш-игр и live-столов на React 19 с демо-балансом, звуковым движком Web Audio API и быстрой мобильной загрузкой.",
          visitAria: "Посетить сайт проекта SpinPulse VIP",
          githubAria: "Исходный код проекта SpinPulse VIP на GitHub"
        },
        nova: {
          desc: "Финтех-сервис с плавной интерактивной 3D-анимацией на GSAP, современным адаптивным интерфейсом и высокой производительностью.",
          visitAria: "Посетить сайт проекта NOVA Pay",
          githubAria: "Исходный код проекта NOVA Pay на GitHub"
        },
        security: {
          desc: "Аналитический дашборд кибербезопасности на React 19 с интерактивной визуализацией сетевых метрик и инцидентов через Recharts.",
          visitAria: "Посетить сайт проекта Cybersecurity Operations Center",
          githubAria: "Исходный код проекта Cybersecurity Operations Center на GitHub"
        },
        gamevault: {
          desc: "Витрина и бэклог-трекер видеоигр в стилистике PS5 на React 19 и TypeScript со строгой типизацией, Gamepad API и Tailwind CSS.",
          visitAria: "Посетить сайт проекта GameVault",
          githubAria: "Исходный код проекта GameVault на GitHub"
        },
        techwear: {
          desc: "Концептуальный PWA веб-магазин тактической одежды с 3D-конфигуратором экипировки, Web Audio API синтезатором и Canvas-терминалом.",
          visitAria: "Посетить сайт проекта Techwear Store",
          githubAria: "Исходный код проекта Techwear Store на GitHub"
        },
        cyberpunk: {
          desc: "Атмосферный промо-лендинг в стиле Cyberpunk с динамическими интерактивными слайдерами Swiper и визуальными эффектами.",
          visitAria: "Посетить сайт проекта Cyberpunk Promo",
          githubAria: "Исходный код проекта Cyberpunk Promo на GitHub"
        },
        edufree: {
          desc: "Посадочная страница образовательной платформы курсов с адаптивной сеткой на Tailwind CSS и быстрой загрузкой.",
          visitAria: "Посетить сайт проекта Edufree EdTech Landing",
          githubAria: "Исходный код проекта Edufree EdTech Landing на GitHub"
        },
        sneakmax: {
          desc: "Каталог кроссовок с интерактивным подбором моделей, квизом, модальными окнами и адаптивной вёрсткой.",
          visitAria: "Посетить сайт проекта Sneakmax Sneaker Store",
          githubAria: "Исходный код проекта Sneakmax Sneaker Store на GitHub"
        },
        crypto: {
          desc: "Информационный крипто-лендинг со sticky-навигацией, интерактивными графическими блоками и адаптивным слайдером.",
          visitAria: "Посетить сайт проекта Crypto-sticky",
          githubAria: "Исходный код проекта Crypto-sticky на GitHub"
        },
        legal: {
          desc: "Корпоративный сайт юридической компании со строгой типографикой, отзывами клиентов и формами обратной связи.",
          visitAria: "Посетить сайт проекта Legal Services",
          githubAria: "Исходный код проекта Legal Services на GitHub"
        },
        animation: {
          desc: "Интерактивная галерея веб-анимаций на чистом CSS и JavaScript для демонстрации визуальных возможностей и микроинтеракций.",
          visitAria: "Посетить сайт проекта Creative Animation Showcase",
          githubAria: "Исходный код проекта Creative Animation Showcase на GitHub"
        }
      }
    },
    contacts: {
      title: "Контакты",
      subtitle: "Открыта к интересным предложениям о сотрудничестве, фронтенд-проектам и коммерческой разработке.",
      nameLabel: "Имя",
      nameValue: "Валерия Чернявская",
      emailLabel: "Почта",
      emailAria: "Написать на электронную почту",
      telegramLabel: "Телеграм",
      telegramAria: "Связаться в Telegram",
      phoneLabel: "Телефон",
      phoneAria: "Позвонить по телефону",
      instagramLabel: "Instagram",
      instagramAria: "Открыть профиль Instagram"
    },
    footer: {
      copy: "© 2026 Валерия Чернявская. Frontend Developer Portfolio."
    },
    ui: {
      scrollTop: "Наверх",
      langSwitchLabel: "Выбор языка"
    }
  },
  en: {
    meta: {
      title: "Valeriya Cherniavskaya — Frontend Developer Portfolio",
      description: "Frontend Developer Portfolio of Valeriya Cherniavskaya. Building interactive web applications, WordPress & PHP integrations, animations, and high web performance.",
      ogTitle: "Valeriya Cherniavskaya — Frontend Developer Portfolio",
      ogDesc: "Frontend Developer Portfolio. Interactive web applications, WordPress & PHP integrations, and animations.",
      twitterTitle: "Valeriya Cherniavskaya — Frontend Developer Portfolio",
      twitterDesc: "Frontend Developer Portfolio. Interactive web applications, WordPress & PHP integrations, and animations."
    },
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contacts: "Contacts",
      anketa: "CV (RU)",
      cv: "CV (EN)"
    },
    hero: {
      title: 'Hi, I\'m Valeria <span class="information__hand">👋</span>',
      subtitlePrefix: "I'm",
      projectsBtn: "View Projects",
      contactsBtn: "Contact Me",
      imageAlt: "Valeriya Cherniavskaya"
    },
    about: {
      title: "About Me",
      p1: "Frontend developer with 3 years of commercial experience in web development. I build fast, interactive, responsive web applications and WordPress integrations.",
      p2: "Worked at <strong>MaxBitSolution (iGaming, HTP resident)</strong>: engineered component architecture, developed and customized WordPress themes and plugins. Built custom themes in object-oriented PHP (WP_Query, $wpdb, Composer PSR-4) with clear separation of logic, data, and templates. Created custom Gutenberg blocks, integrated REST APIs and PHP hooks. Systematically optimized performance: Core Web Vitals 90+, Schema.org semantic markup (JSON-LD), and SEO meta tags.",
      p3: "As a freelancer, I deliver turnkey projects: from interactive SPAs to WooCommerce e-commerce stores. I write clean, maintainable code focused on security (validation, escaping, XSS & CSRF protection) and top load speeds.",
      comp1Title: "Frontend & Interactions",
      comp1Desc: "React (hooks, routing, state management), TypeScript, modern ES6+, semantic BEM layout, complex animations (GSAP, ScrollTrigger, CSS 3D), Pixel Perfect, and Mobile First.",
      comp2Title: "WordPress & Backend",
      comp2Desc: "Building themes from scratch with OOP PHP, custom Gutenberg blocks, plugins, WP_Query, $wpdb, Rewrite API, WooCommerce, payment gateways, and REST API integrations.",
      comp3Title: "Tools & DevOps",
      comp3Desc: "Environment isolation with Docker, automated build & deploy via GitLab CI, bundlers (Vite, Webpack), Git version control, Core Web Vitals optimization, and web accessibility.",
      expandOpen: "Show Less",
      expandClosed: "Read More"
    },
    skills: {
      title: "Skills"
    },
    projects: {
      title: "Projects",
      visitBtn: "Live Demo",
      githubBtn: "GitHub",
      expandOpen: "Collapse project archive",
      expandClosed: (count) => `Show all projects (${count} more)`,
      cards: {
        spinpulse: {
          desc: "High-end iGaming casino lobby simulator on React 19 featuring demo balance, Web Audio API sound effects, and fast mobile performance.",
          visitAria: "Visit SpinPulse VIP project website",
          githubAria: "Source code of SpinPulse VIP on GitHub"
        },
        nova: {
          desc: "Fintech service featuring smooth interactive 3D animation with GSAP, modern responsive UI, and high performance.",
          visitAria: "Visit NOVA Pay project website",
          githubAria: "Source code of NOVA Pay on GitHub"
        },
        security: {
          desc: "Cybersecurity analytics dashboard built with React 19, featuring interactive network metrics visualization and incident tracking via Recharts.",
          visitAria: "Visit Cybersecurity Operations Center website",
          githubAria: "Source code of Cybersecurity Operations Center on GitHub"
        },
        gamevault: {
          desc: "PS5-styled video game showcase and backlog tracker built with React 19 and TypeScript with strict typing, Gamepad API, and Tailwind CSS.",
          visitAria: "Visit GameVault project website",
          githubAria: "Source code of GameVault on GitHub"
        },
        techwear: {
          desc: "Conceptual PWA tactical apparel web store with a 3D gear configurator, Web Audio API synthesizer, and Canvas terminal.",
          visitAria: "Visit Techwear Store website",
          githubAria: "Source code of Techwear Store on GitHub"
        },
        cyberpunk: {
          desc: "Atmospheric Cyberpunk promo landing page featuring dynamic interactive Swiper sliders and visual effects.",
          visitAria: "Visit Cyberpunk Promo website",
          githubAria: "Source code of Cyberpunk Promo on GitHub"
        },
        edufree: {
          desc: "Landing page for an educational course platform featuring a responsive Tailwind CSS grid and ultra-fast loading.",
          visitAria: "Visit Edufree EdTech Landing website",
          githubAria: "Source code of Edufree EdTech Landing on GitHub"
        },
        sneakmax: {
          desc: "Sneaker catalog featuring interactive shoe quiz selector, modal windows, and responsive layout.",
          visitAria: "Visit Sneakmax Sneaker Store website",
          githubAria: "Source code of Sneakmax Sneaker Store on GitHub"
        },
        crypto: {
          desc: "Informational crypto landing page with sticky navigation, interactive graphical blocks, and responsive slider.",
          visitAria: "Visit Crypto-sticky website",
          githubAria: "Source code of Crypto-sticky on GitHub"
        },
        legal: {
          desc: "Corporate law firm website with elegant typography, client testimonials, and feedback forms.",
          visitAria: "Visit Legal Services website",
          githubAria: "Source code of Legal Services on GitHub"
        },
        animation: {
          desc: "Interactive web animation gallery built with pure CSS and JavaScript demonstrating visual effects and micro-interactions.",
          visitAria: "Visit Creative Animation Showcase website",
          githubAria: "Source code of Creative Animation Showcase on GitHub"
        }
      }
    },
    contacts: {
      title: "Contacts",
      subtitle: "Open to interesting collaboration offers, frontend projects, and commercial development.",
      nameLabel: "Name",
      nameValue: "Valeriya Cherniavskaya",
      emailLabel: "Email",
      emailAria: "Send email",
      telegramLabel: "Telegram",
      telegramAria: "Contact via Telegram",
      phoneLabel: "Phone",
      phoneAria: "Call by phone",
      instagramLabel: "Instagram",
      instagramAria: "Open Instagram profile"
    },
    footer: {
      copy: "© 2026 Valeriya Cherniavskaya. Frontend Developer Portfolio."
    },
    ui: {
      scrollTop: "Back to top",
      langSwitchLabel: "Language selection"
    }
  }
};

window.translations = translations;
