// NIQO frontend interaktivligi: tungi/kunduzgi rejim va forma xabari.
const themeToggle = document.querySelector("#themeToggle");
const registerForm = document.querySelector("#registerForm");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  themeToggle.textContent = document.body.classList.contains("light-mode") ? "☾" : "☼";
});

document.querySelector(".button-gold[href='#register']").addEventListener("click", () => {
  document.querySelector("#welcome-message").textContent =
    "Ajoyib! Ro‘yxatdan o‘tish formasiga o‘tishingiz mumkin.";
});

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const userName = document.querySelector("#fullName").value.trim();
  document.querySelector("#form-message").textContent =
    `Rahmat, ${userName}! Forma namunaviy tarzda qabul qilindi.`;
  registerForm.reset();
});
