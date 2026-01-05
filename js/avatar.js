/* ========================================
   EYES TRACKING - FOR BOTH OLD & NEW AVATARS
======================================== */

document.addEventListener("mousemove", (e) => {
  // Track existing eyes (from your current code)
  document.querySelectorAll(".eye").forEach((eye) => {
    const rect = eye.getBoundingClientRect();
    const eyeX = rect.left + rect.width / 2;
    const eyeY = rect.top + rect.height / 2;

    const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);

    const x = Math.cos(angle) * 4;
    const y = Math.sin(angle) * 4;

    eye.style.transform = `translate(${x}px, ${y}px)`;
  });

  // Track footer avatar pupils (NEW - for Arun's style avatar)
  document.querySelectorAll(".footer-pupil").forEach((pupil) => {
    const pupilRect = pupil.getBoundingClientRect();
    const pupilX = pupilRect.left + pupilRect.width / 2;
    const pupilY = pupilRect.top + pupilRect.height / 2;

    const angle = Math.atan2(e.clientY - pupilY, e.clientX - pupilX);

    // Pupils move within their eye container (smaller range than eyes)
    const x = Math.cos(angle) * 6;
    const y = Math.sin(angle) * 6;

    pupil.style.transform = `translate(${x}px, ${y}px)`;
  });
});
