// scroll animation

gsap.registerPlugin(ScrollTrigger);

// --- i18n Internationalization ---
function getInitialLanguage() {
  if (window.__initialLang) return window.__initialLang;
  try {
    const saved = localStorage.getItem("portfolio_lang");
    if (saved === "ru" || saved === "en") return saved;
    const navLang = (navigator.languages && navigator.languages[0]) || navigator.language || "";
    return navLang.toLowerCase().startsWith("ru") ? "ru" : "en";
  } catch (e) {
    return "ru";
  }
}

let currentLang = getInitialLanguage();

function getTranslation(path, lang = currentLang) {
  const dict = window.translations && window.translations[lang];
  if (!dict) return null;
  return path.split(".").reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : null), dict);
}

function updateSectionSplittingOpacity(selector) {
  const sec = document.querySelector(selector);
  if (!sec) return;
  const rect = sec.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    sec.querySelectorAll(".char, .word").forEach((el) => {
      el.style.opacity = "1";
    });
  }
}

function applyTranslations(lang, isDynamicChange = false) {
  document.documentElement.lang = lang;

  // Title & Meta tags
  const title = getTranslation("meta.title", lang);
  if (title) document.title = title;

  const metaDesc = document.querySelector('meta[name="description"]');
  const transDesc = getTranslation("meta.description", lang);
  if (metaDesc && transDesc) metaDesc.setAttribute("content", transDesc);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  const transOgTitle = getTranslation("meta.ogTitle", lang);
  if (ogTitle && transOgTitle) ogTitle.setAttribute("content", transOgTitle);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  const transOgDesc = getTranslation("meta.ogDesc", lang);
  if (ogDesc && transOgDesc) ogDesc.setAttribute("content", transOgDesc);

  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute("content", lang === "ru" ? "ru_RU" : "en_US");

  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  const transTwTitle = getTranslation("meta.twitterTitle", lang);
  if (twitterTitle && transTwTitle) twitterTitle.setAttribute("content", transTwTitle);

  const twitterDesc = document.querySelector('meta[name="twitter:description"]');
  const transTwDesc = getTranslation("meta.twitterDesc", lang);
  if (twitterDesc && transTwDesc) twitterDesc.setAttribute("content", transTwDesc);

  // Resume buttons links
  const anketaBtn = document.querySelector(".header__btn--anketa");
  if (anketaBtn) {
    anketaBtn.href = lang === "en" ? "https://lelyaler.github.io/cv/" : "https://lelyaler.github.io/anketa/";
  }
  const cvBtn = document.querySelector(".header__btn--cv");
  if (cvBtn) {
    cvBtn.href = lang === "en" ? "https://lelyaler.github.io/anketa/" : "https://lelyaler.github.io/cv/";
  }

  // Text content elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = getTranslation(key, lang);
    if (val !== null && typeof val === "string") {
      if (el.dataset.i18nHtml === "true") {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    }
  });

  // Attribute elements with data-i18n-attr
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const attrPairs = el.getAttribute("data-i18n-attr").split(",");
    attrPairs.forEach((pair) => {
      const [attr, key] = pair.split(":");
      if (attr && key) {
        const val = getTranslation(key.trim(), lang);
        if (val !== null && typeof val === "string") {
          el.setAttribute(attr.trim(), val);
        }
      }
    });
  });

  // Expandable sections button labels
  const aboutExpandBtn = document.getElementById("about-expand-btn");
  const aboutMore = document.getElementById("about-more");
  if (aboutExpandBtn && aboutMore) {
    const isOpen = aboutMore.classList.contains("is-open");
    const textEl = aboutExpandBtn.querySelector(".about__expand-btn-text");
    if (textEl) {
      textEl.textContent = isOpen
        ? getTranslation("about.expandOpen", lang)
        : getTranslation("about.expandClosed", lang);
    }
  }

  const projectsExpandBtn = document.getElementById("projects-expand-btn");
  const extraCards = document.querySelectorAll(".projects__card--extra");
  if (projectsExpandBtn && extraCards.length) {
    const isProjOpen = projectsExpandBtn.classList.contains("is-open");
    const textEl = projectsExpandBtn.querySelector(".projects__expand-btn-text");
    if (textEl) {
      const closedFn = getTranslation("projects.expandClosed", lang);
      textEl.textContent = isProjOpen
        ? getTranslation("projects.expandOpen", lang)
        : (typeof closedFn === "function" ? closedFn(extraCards.length) : `Показать все проекты (ещё ${extraCards.length})`);
    }
  }

  // Language switcher active states
  document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
    const btnLang = btn.getAttribute("data-lang");
    const isActive = btnLang === lang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  // Dynamic language switch updates Splitting & ScrollTrigger
  if (isDynamicChange && typeof Splitting !== "undefined") {
    Splitting();
    updateSectionSplittingOpacity(".about");
    updateSectionSplittingOpacity(".skills");
    updateSectionSplittingOpacity(".projects");
    updateSectionSplittingOpacity(".contacts");
    if (typeof ScrollTrigger !== "undefined") {
      setTimeout(() => ScrollTrigger.refresh(), 100);
    }
  }
}

// Initial translation application
applyTranslations(currentLang, false);

// Language switcher clicks
document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const selectedLang = btn.getAttribute("data-lang");
    if (selectedLang && selectedLang !== currentLang) {
      currentLang = selectedLang;
      try {
        localStorage.setItem("portfolio_lang", currentLang);
      } catch (e) {}
      applyTranslations(currentLang, true);
    }
  });
});

Splitting();

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

let heroTl = gsap.timeline({
  default: {
    ease: "power2.inOut",
    // duration: 2,
  },
});

heroTl.pause();
heroTl.play();

heroTl.fromTo(
  ".header",
  {
    transform: "scale(0)",
  },
  {
    transform: "scale(1)",
    duration: 1.5,
  },
  "-=0.5"
);
heroTl.fromTo(
  ".information",
  {
    y: 100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1.5,
  },
  "-=0.5"
);

ScrollTrigger.create({
  trigger: ".about",
  start: "top bottom-=100",
  once: true,
  // markers: true,
  onEnter: () => {
    gsap.to(".about .title .char", {
      stagger: 0.03,
      opacity: 1,
      ease: "power2.inOut",
    }),
      heroTl.to(
        ".about .about__description .word",

        {
          stagger: 0.03,
          opacity: 1,
          ease: "power2.inOut",
          // duration: 0.05,
        }
      );
  },
});

ScrollTrigger.create({
  trigger: ".about",
  start: "top bottom-=150",
  once: true,
  // markers: true,
  onEnter: () => {
    gsap.to(".about__list li", {
      y: 0,
      // stagger: 0.03,
      opacity: 1,
      ease: "circ.out",
      duration: 0.8,
    });
  },
});

ScrollTrigger.create({
  trigger: ".skills",
  start: "top bottom-=150",
  once: true,
  // markers: true,
  onEnter: () => {
    gsap.to(".skills .skills__inner h2 .char", {
      stagger: 0.03,
      opacity: 1,
      ease: "power2.inOut",
    });
    gsap.to(".skills__list", {
      y: 0,
      // stagger: 0.03,
      opacity: 1,
      ease: "circ.out",
      duration: 0.8,
    });
  },
});

ScrollTrigger.create({
  trigger: ".projects",
  start: "top bottom-=150",
  once: true,
  // markers: true,
  onEnter: () => {
    gsap.to(".projects__card:not(.projects__card--hidden)", {
      y: 0,
      // stagger: 0.03,
      opacity: 1,
      ease: "circ.out",
      duration: 0.8,
    }),
      gsap.to(".projects h2 .char", {
        stagger: 0.03,
        opacity: 1,
        ease: "power2.inOut",
      });
  },
});

ScrollTrigger.create({
  trigger: ".contacts",
  start: "top bottom-=150",
  once: true,
  onEnter: () => {
    gsap.to(".contacts h2 .char", {
      stagger: 0.03,
      opacity: 1,
      ease: "power2.inOut",
    });
    gsap.to(".contacts__list li", {
      y: 0,
      opacity: 1,
      ease: "circ.out",
      duration: 0.8,
      stagger: 0.05,
    });
  },
});

// // scroll

const typeText = document.querySelector(".information__subtitle-text"),
  pipe = document.querySelector(".pipe"),
  phraseArray = [
    "Frontend Developer",
    "WordPress & PHP",
    "UI/UX & Web Performance",
  ];
let textInterval = null,
  counter = 0,
  symbolCounter = 0,
  pipeCheck = true,
  pipeInterval = null;

function getPipe() {
  if (pipeCheck) {
    pipeCheck = false;
    pipe.style.display = "none";
  } else {
    pipeCheck = true;
    pipe.style.display = "inline-block";
  }
}

function changeTypeText() {
  if (counter >= phraseArray.length) counter = 0;
  if (symbolCounter === 0) {
    pipeCheck = true;
    setTimeout(() => {
      textInterval = setInterval(printText, 200, 1);
      clearInterval(pipeInterval);
    }, 1001);
  }
  if (symbolCounter > 0) {
    pipeCheck = true;
    pipe.style.display = "inline-block";
    pipeInterval = setInterval(getPipe, 500);
    setTimeout(() => {
      textInterval = setInterval(printText, 80, -1);
    }, 1001);
  }
  function typeTextAnimation(phrase) {
    if (symbolCounter >= phrase.length + 1) {
      clearInterval(textInterval);
      changeTypeText();
    }
    if (symbolCounter < 0) {
      counter++;
      symbolCounter = 0;
      clearInterval(textInterval);
      changeTypeText();
    }
  }
  function printText(num) {
    typeText.innerHTML = `${phraseArray[counter].slice(0, symbolCounter)}`;
    symbolCounter += num;
    typeTextAnimation(phraseArray[counter]);
  }
}

changeTypeText();

document.querySelectorAll(".header__nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
document.querySelectorAll(".link-btn").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
const skillsArr = document.querySelectorAll(".skills__list-item-inner");
skillsArr.forEach((skill) => {
  skill.addEventListener("mouseover", (e) => {
    e.preventDefault();
    skill.classList.add("animated-skill");
    setTimeout(() => {
      skill.classList.remove("animated-skill");
    }, 1500);
  });
});

const expandBtn = document.getElementById("about-expand-btn");
const aboutMore = document.getElementById("about-more");
if (expandBtn && aboutMore) {
  expandBtn.addEventListener("click", () => {
    const isOpen = aboutMore.classList.toggle("is-open");
    expandBtn.classList.toggle("is-open", isOpen);
    const btnText = expandBtn.querySelector(".about__expand-btn-text");
    if (btnText) {
      btnText.textContent = isOpen
        ? getTranslation("about.expandOpen")
        : getTranslation("about.expandClosed");
    }
    if (typeof ScrollTrigger !== "undefined") {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 400);
    }
  });
}

const scrollTopBtn = document.getElementById("scroll-top-btn");
if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 450) {
      scrollTopBtn.classList.add("is-visible");
    } else {
      scrollTopBtn.classList.remove("is-visible");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    if (typeof lenis !== "undefined" && lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
}

const projectsExpandBtn = document.getElementById("projects-expand-btn");
const extraProjectCards = document.querySelectorAll(".projects__card--extra");

if (projectsExpandBtn && extraProjectCards.length) {
  let isProjectsOpen = false;
  projectsExpandBtn.addEventListener("click", () => {
    isProjectsOpen = !isProjectsOpen;
    projectsExpandBtn.classList.toggle("is-open", isProjectsOpen);
    const btnText = projectsExpandBtn.querySelector(".projects__expand-btn-text");
    if (btnText) {
      const closedFn = getTranslation("projects.expandClosed");
      btnText.textContent = isProjectsOpen
        ? getTranslation("projects.expandOpen")
        : (typeof closedFn === "function" ? closedFn(extraProjectCards.length) : `Показать все проекты (ещё ${extraProjectCards.length})`);
    }

    extraProjectCards.forEach((card, index) => {
      if (isProjectsOpen) {
        card.classList.remove("projects__card--hidden");
        gsap.fromTo(
          card,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: index * 0.04,
            ease: "circ.out",
          }
        );
      } else {
        gsap.to(card, {
          y: 20,
          opacity: 0,
          duration: 0.25,
          onComplete: () => {
            card.classList.add("projects__card--hidden");
          },
        });
      }
    });

    if (typeof ScrollTrigger !== "undefined") {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 350);
    }
  });
}

const navItems = document.querySelectorAll(".header__nav-item");
const navSections = document.querySelectorAll("main section[id]");

if (navItems.length && navSections.length) {
  const updateScrollSpy = () => {
    const scrollPosition = window.scrollY + 250;
    let currentId = "";

    navSections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentId = section.getAttribute("id");
      }
    });

    navItems.forEach((item) => {
      const link = item.querySelector(".header__nav-link");
      if (link && link.getAttribute("href") === `#${currentId}`) {
        item.classList.add("is-active");
      } else {
        item.classList.remove("is-active");
      }
    });
  };

  window.addEventListener("scroll", updateScrollSpy, { passive: true });
  updateScrollSpy();
}


