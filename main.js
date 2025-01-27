const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".header__content .socials", {
  ...scrollRevealOption,
  delay: 2500,
});
ScrollReveal().reveal(".header__bar", {
  ...scrollRevealOption,
  delay: 3000,
});

// Password visibility toggle
const passwordToggle = (inputId, eyeId) => {
  const input = document.getElementById(inputId);
  const eyeIcon = document.getElementById(eyeId);
  
  eyeIcon?.addEventListener('click', () => {
    // Toggle password visibility
    input.type = input.type === 'password' ? 'text' : 'password';
    
    // Toggle eye icon
    eyeIcon.classList.toggle('ri-eye-fill');
    eyeIcon.classList.toggle('ri-eye-off-fill');
  });
};

// Initialize password toggles
passwordToggle('password', 'loginPassword');
passwordToggle('passwordCreate', 'loginPasswordCreate');

// Login/Register form switching
const loginContainer = document.getElementById('loginAccessRegister');
const registerBtn = document.getElementById('loginButtonRegister');
const loginBtn = document.getElementById('loginButtonAccess');

registerBtn?.addEventListener('click', () => {
  loginContainer.classList.add('active');
});

loginBtn?.addEventListener('click', () => {
  loginContainer.classList.remove('active');
});

// ScrollReveal animations
const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".login__title", {
  ...scrollRevealOptions,
  delay: 100,
});

ScrollReveal().reveal(".login__box", {
  ...scrollRevealOptions,
  delay: 200,
  interval: 100,
});

ScrollReveal().reveal(".login__button", {
  ...scrollRevealOptions,
  delay: 400,
});

ScrollReveal().reveal(".login__social", {
  ...scrollRevealOptions,
  delay: 600,
});

ScrollReveal().reveal(".login__switch", {
  ...scrollRevealOptions,
  delay: 800,
});

//GS Button
const getStartedBtn = document.querySelector(".cta");

const hoverSound = new Audio("assets/hover-sound.mp3");

getStartedBtn.addEventListener("mouseenter", () => {
  hoverSound.currentTime = 0; // Restart sound on each hover
  hoverSound.play();
});

