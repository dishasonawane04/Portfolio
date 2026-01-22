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



// (your existing avatar / eye code above — keep it)

// ------------------ NEW CODE (ADD THIS) ------------------
// ------------------ NEW CODE (ADD THIS) ------------------
document.addEventListener("mousemove", (e) => {
  const pupils = document.querySelectorAll(".footer-pupil");

  pupils.forEach(pupil => {
    // get the eye element (parent of pupil)
    const eye = pupil.parentElement;
    const eyeRect = eye.getBoundingClientRect();

    // Eye center
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    // Mouse position relative to eye center
    const x = e.clientX - eyeCenterX;
    const y = e.clientY - eyeCenterY;

    // Angle
    const angle = Math.atan2(y, x);

    // Dynamic distance limit (radius of eye minus radius of pupil)
    // Eye width ~32px, pupil ~10px -> roughly 11px movement max
    const maxMove = Math.min((eyeRect.width - 10) / 2, Math.sqrt(x * x + y * y));
    const limitedMove = Math.min(maxMove, 6); // Hard limit to keep it subtle

    const pupilX = Math.cos(angle) * limitedMove;
    const pupilY = Math.sin(angle) * limitedMove;

    pupil.style.transform = `translate(${pupilX}px, ${pupilY}px) translate(-50%, -50%)`;
  });
});
