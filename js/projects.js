fetch("projects.json")
  .then(response => response.json())
  .then(projects => {
    const container = document.getElementById("projectsContainer");

    projects.forEach(project => {
      const card = document.createElement("div");
      card.className = `project-card ${project.reverse ? "reverse" : ""}`;

      card.innerHTML = `
        <div class="project-content">
          <div class="project-badge">${project.icon}</div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <span class="project-tech">${project.tech}</span>
        </div>

        <div class="project-image">
          <img src="${project.image}" alt="${project.title}">
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => console.error("Error loading projects:", error));

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2
  }
);

document.addEventListener("DOMContentLoaded", () => {
  const checkProjectsLoaded = setInterval(() => {
    const cards = document.querySelectorAll(".project-card");

    if (cards.length > 0) {
      cards.forEach(card => observer.observe(card));
      clearInterval(checkProjectsLoaded);
    }
  }, 100);
});
