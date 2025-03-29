const mobileNavToggle = document.querySelector(
  '[data-js="mobile-menu"]'
) as HTMLElement;

const handleMobileNavToggle = () => {
  document.body.setAttribute("data-mobile-nav-open", "true");
  mobileNavToggle.setAttribute("aria-expanded", "true");
  mobileNavToggle.setAttribute("aria-label", "Close menu");
};

mobileNavToggle.addEventListener("click", handleMobileNavToggle);
