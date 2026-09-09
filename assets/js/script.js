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
    document.body.classList.toggle("menu-is-open", !isOpen);
  });

  siteMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
      siteMenu.classList.remove("is-open");
      document.body.classList.remove("menu-is-open");
    });
  });

  const revealItems = document.querySelectorAll(".intro-grid, .stat-row, .section-heading, .gallery-rows, .contact-heading, .footer-main");
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => {
    item.classList.add("reveal-on-scroll");
    revealObserver.observe(item);
  });

    document.querySelector(".brand").addEventListener("click", (event) => {
      event.preventDefault();
      window.history.replaceState(null, "", window.location.pathname);
      window.scrollTo({ top: 0, behavior: "smooth" });
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
