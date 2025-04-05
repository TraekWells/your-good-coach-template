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

  const menuItems = mobileNav.querySelectorAll("li");

  if (isOpen) {
    mobileNav.setAttribute("aria-expanded", "false");
    mobileNavToggle.setAttribute("data-js-state", "closed");
    animate(mobileNav, { opacity: [1, 0] }, { duration: 0.3 });
    animate(hamburgerIcon.children[1], { rotate: [0, 0] }, { duration: 0.3 });
    animate(hamburgerIcon.children[0], { opacity: [0, 1] }, { duration: 0.3 });
    animate(hamburgerIcon.children[2], { rotate: [0, 0] }, { duration: 0.3 });
  } else {
    mobileNav.setAttribute("aria-expanded", "true");
    mobileNavToggle.setAttribute("data-js-state", "open");
    animate(mobileNav, { opacity: [0, 1] }, { duration: 0.3 });
    animate(
      menuItems,
      { opacity: [0, 1], transform: ["translateY(-3px)", "translateY(0)"] },
      { delay: stagger(0.1, { startDelay: 0.3 }) }
    );
    animate(hamburgerIcon.children[0], { opacity: 0 }, { duration: 0.3 });
    animate(hamburgerIcon.children[1], { rotate: [0, 45] }, { duration: 0.3 });
    animate(hamburgerIcon.children[2], { rotate: [0, -45] }, { duration: 0.3 });
  }
};

mobileNavToggle.addEventListener("click", handleMobileNavToggle);
