console.log("certifications.js loaded");

fetch("data/certifications.json")
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById("certificationsGrid");

        data.forEach(cert => {
            const card = document.createElement("div");
            card.className = "cert-card";

            card.innerHTML = `
                
                <h4>${cert.title}</h4>
                <p>${cert.provider}</p>
                <span class="cert-year">${cert.year}</span>

                <a href="${cert.certificate}" target="_blank" class="cert-btn">
                    View Certificate →
                </a>
            `;


            if (cert.link) {
                card.addEventListener("click", () => {
                    window.open(cert.link, "_blank");
                });
            }

            container.appendChild(card);
        });

        revealCertifications();
    })
    .catch(err => console.error("Certifications load error:", err));

/* Scroll Reveal */
function revealCertifications() {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal");
                }
            });
        },
        { threshold: 0.2 }
    );

    document.querySelectorAll(".cert-card").forEach(card => {
        observer.observe(card);
    });
}
