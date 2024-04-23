// scroll animation

gsap.registerPlugin(ScrollTrigger);
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
    gsap.to(".projects__card", {
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

// // scroll

const typeText = document.querySelector(".information__subtitle-text"),
  pipe = document.querySelector(".pipe"),
  phraseArray = [
    "Web Developer (pagemaker) freelancer",
    "css-master",
    "html-genius",
    "js-lover",
    "todo-builder",
    "a cute person",
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
