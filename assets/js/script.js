document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  const menuToggle = document.querySelector(".menu-toggle");
  const siteMenu = document.querySelector(".desktop-nav");
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    siteMenu.classList.toggle("is-open", !isOpen);
  });

  siteMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
      siteMenu.classList.remove("is-open");
    });
  });

  document.querySelectorAll(".gallery-track").forEach((track) => {
    track.innerHTML += track.innerHTML;
  });

  const header = document.querySelector(".site-header");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 120 && currentScroll > lastScroll) {
      header.classList.add("is-scrolling");
    } else {
      header.classList.remove("is-scrolling");
    }
    lastScroll = currentScroll;
  }, { passive: true });
});
