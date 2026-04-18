const phoneNumber = "919840563526";
const whatsappMessage = "Hi Ebinezar, I need a website or WhatsApp automation for my business.";

function openWhatsApp() {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    document.body.classList.toggle("menu-open", isOpen);
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open menu");
      document.body.classList.remove("menu-open");
    });
  });
}

document.querySelectorAll("[data-whatsapp]").forEach((button) => {
  button.addEventListener("click", openWhatsApp);
});
