document.addEventListener("mousemove", (e) => {
  const eyes = document.querySelectorAll(".eye");

  eyes.forEach((eye) => {
    const rect = eye.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const radian = Math.atan2(e.clientY - y, e.clientX - x);

    const moveX = Math.cos(radian) * 4;
    const moveY = Math.sin(radian) * 4;

    eye.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});
