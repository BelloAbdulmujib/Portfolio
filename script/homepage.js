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
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

/* Footer year auto update */
document.getElementById("year").textContent = new Date().getFullYear();


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