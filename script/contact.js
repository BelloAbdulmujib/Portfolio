const form = document.getElementById("contactForm");
const statusDiv = document.getElementById("formStatus");
const submitBtn = document.getElementById("submitBtn");

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  statusDiv.textContent = "";
  statusDiv.className = "status";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Client-side validation
  if (!name || !email || !subject || !message) {
    statusDiv.textContent = "All fields are required.";
    statusDiv.classList.add("error");
    return;
  }

  if (!isValidEmail(email)) {
    statusDiv.textContent = "Please enter a valid email address.";
    statusDiv.classList.add("error");
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, subject, message })
    });

    const result = await response.json();

    if (response.ok && result.success) {
      statusDiv.textContent = result.message;
      statusDiv.classList.add("success");
      form.reset();
    } else {
      statusDiv.textContent = result.error || "Something went wrong.";
      statusDiv.classList.add("error");
    }

  } catch (error) {
    statusDiv.textContent = "Network error. Please try again later.";
    statusDiv.classList.add("error");
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Send Message";
  }
});