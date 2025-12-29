document.addEventListener("mousemove", (e) => {
  document.querySelectorAll(".eye").forEach((eye) => {
    const rect = eye.getBoundingClientRect();
    const eyeX = rect.left + rect.width / 2;
    const eyeY = rect.top + rect.height / 2;

    const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);

    const x = Math.cos(angle) * 4;
    const y = Math.sin(angle) * 4;

    eye.style.transform = `translate(${x}px, ${y}px)`;
  });
});
