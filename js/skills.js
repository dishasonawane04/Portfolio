console.log("skills.js loaded");

fetch("data/skills.json")
  .then(res => res.json())
  .then(skills => {
    const container = document.getElementById("skillsGrid");

    skills.forEach(skill => {
      const card = document.createElement("div");
      card.className = "skill-card";

      card.innerHTML = `
        <img src="${skill.icon}" alt="${skill.name}">
        <span class="skill-name">${skill.name}</span>
      `;

      card.addEventListener("click", () => {
        card.classList.toggle("active");
      });

      container.appendChild(card);
    });
  })
  .catch(err => console.error("Skills load error:", err));

  
