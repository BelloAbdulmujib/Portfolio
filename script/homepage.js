/* "use strict"; */
/** project card view/hide details script */
const buttons = document.querySelectorAll(".view-details-btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".project-card");
    card.classList.toggle("active");

    button.textContent = card.classList.contains("active")
      ? "Hide details"
      : "View details";
  });
});

/* nav menu toggle script */
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");      // show/hide dropdown
    menuToggle.classList.toggle("active");   // animate hamburger
});

/*scrollup botton script */
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/* Contact form*/
(function () {
    emailjs.init("X_4lVJxApBsagXDEo");
})();

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
const button = document.getElementById("submitBtn");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    button.textContent = "Sending...";
    button.disabled = true;

    emailjs
        .sendForm(
            "service_fdvx4qf",
            "template_r1lblhu",
            this
        )
        .then(
            () => {
                status.textContent = "✅ Message sent successfully!";
                status.style.color = "limegreen";
                form.reset();
            },
            () => {
                status.textContent = "❌ Something went wrong. Please try again.";
                status.style.color = "red";
            }
        )
        .finally(() => {
            button.textContent = "Send Message";
            button.disabled = false;
        });
});

/* Footer year auto update */
document.getElementById("year").textContent = new Date().getFullYear();