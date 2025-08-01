'use strict';


/** =========================
 * NAVBAR TOGGLE
 * ========================= */
const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/** Toggle navbar when any nav link is clicked */
const navbarLinks = document.querySelectorAll("[data-nav-link]");

navbarLinks.forEach(link => {
  link.addEventListener("click", () => {
    header.classList.remove("nav-active");
    navToggleBtn.classList.remove("active");
  });
});

/** =========================
 * SCROLL EFFECTS: HEADER + BACK TO TOP
 * ========================= */
const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/** =========================
 * EMAILJS CONTACT FORM
 * ========================= */
// script.js
emailjs.init("Pwcr03TLnOEQIZRZp"); // Your public key

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const statusMsg = document.getElementById("status-message");

  emailjs.sendForm("service_4986blu", "template_6djf3l2", this)
    .then(() => {
      statusMsg.textContent = "✅ Message sent successfully!";
      statusMsg.className = "status-message success";
      this.reset();
    })
    .catch((error) => {
      console.error("Email sending failed:", error);
      statusMsg.textContent = "❌ Failed to send message. Please try again.";
      statusMsg.className = "status-message error";
    });
});

/** =========================
 * STATUS MESSAGE DISPLAY FUNCTION WITH ANIMATION
 * ========================= */
function showStatus(message, type) {
  const statusMsg = document.getElementById("status-message");
  statusMsg.textContent = message;
  statusMsg.className = `status-message ${type}`;

  // Add fade-in animation
  statusMsg.style.opacity = "1";
  statusMsg.style.transition = "opacity 0.5s ease-in-out";

  setTimeout(() => {
    statusMsg.style.opacity = "0";
    statusMsg.textContent = "";
  }, 4000);
}
