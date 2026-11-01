
/* =========================================
   MOBILE MENU
   Works on GitHub Pages and closes after navigation.
========================================= */
(function () {
  "use strict";

  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");

  if (!menuBtn || !mobileNav) return;

  function setMenuOpen(isOpen) {
    mobileNav.classList.toggle("show", isOpen);
    menuBtn.textContent = isOpen ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  }

  menuBtn.addEventListener("click", function () {
    const isOpen = menuBtn.getAttribute("aria-expanded") !== "true";
    setMenuOpen(isOpen);
  });

  mobileNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setMenuOpen(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setMenuOpen(false);
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 900) setMenuOpen(false);
  });

  setMenuOpen(false);
})();
