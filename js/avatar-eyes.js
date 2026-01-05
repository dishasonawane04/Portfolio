// Eye tracking function
const eyes = document.querySelectorAll('.eye');

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  eyes.forEach(eye => {
    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
    const distance = 8; // How far the pupil moves

    const pupilX = Math.cos(angle) * distance;
    const pupilY = Math.sin(angle) * distance;

    eye.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
  });
});
