document.addEventListener("DOMContentLoaded", () => {

  /* Typing Effect */
  const text = "I turn data into decisions.";
  const target = document.getElementById("typing-text");
  let i = 0;

  function typeEffect() {
    if (i < text.length) {
      target.innerHTML += text.charAt(i++);
      setTimeout(typeEffect, 80);
    }
  }

  if (target) typeEffect();

});
/* Scroll Reveal */
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // trigger on load

