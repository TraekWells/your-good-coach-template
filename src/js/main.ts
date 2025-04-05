import { animate, stagger } from "motion";

const mobileNavToggle = document.querySelector(
  '[data-js="mobile-menu-trigger"]'
) as HTMLElement;

const handleMobileNavToggle = () => {
  const mobileNav = document.querySelector(".navbar__menu") as HTMLElement;
  const isOpen = mobileNavToggle.getAttribute("data-js-state") === "open";
  const hamburgerIcon = mobileNavToggle.querySelector(
    '[data-js="hamburger-icon"]'
  ) as HTMLElement;
  const firstLine = hamburgerIcon.querySelector(
    "[data-js='hamburger-line-1'"
  ) as HTMLElement;
  const secondLine = hamburgerIcon.querySelector(
    "[data-js='hamburger-line-2'"
  ) as HTMLElement;
  const thirdLine = hamburgerIcon.querySelector(
    "[data-js='hamburger-line-3'"
  ) as HTMLElement;

  const menuItems = mobileNav.querySelectorAll("li");

  if (isOpen) {
    mobileNav.setAttribute("aria-expanded", "false");
    mobileNavToggle.setAttribute("data-js-state", "closed");
    animate(mobileNav, { opacity: [1, 0] }, { duration: 0.3 });
    animate(firstLine, { rotate: [45, 0], y: [5, 0] }, { duration: 0.3 });
    animate(secondLine, { opacity: [0, 1] }, { duration: 0.3 });
    animate(thirdLine, { rotate: [-45, 0], y: [-7, 0] }, { duration: 0.3 });
  } else {
    mobileNav.setAttribute("aria-expanded", "true");
    mobileNavToggle.setAttribute("data-js-state", "open");
    animate(mobileNav, { opacity: [0, 1] }, { duration: 0.3 });
    animate(
      menuItems,
      { opacity: [0, 1], transform: ["translateY(-3px)", "translateY(0)"] },
      { delay: stagger(0.1, { startDelay: 0.3 }) }
    );

    animate(firstLine, { rotate: [0, 45], y: [0, 5] }, { duration: 0.3 });
    animate(secondLine, { opacity: [1, 0] }, { duration: 0.3 });
    animate(thirdLine, { rotate: [0, -45], y: [0, -7] }, { duration: 0.3 });
  }
};

mobileNavToggle.addEventListener("click", handleMobileNavToggle);
