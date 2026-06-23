console.log("skills.js loaded");

const skillDescriptions = {
  "PYTHON": "Advanced\n\nUsed for machine learning, data analysis, backend development with Django, automation, and AI applications.",
  "JAVA": "Intermediate\n\nDeveloped object-oriented applications, software design patterns, and general-purpose software solutions.",
  "DJANGO": "Intermediate\n\nDeveloped full-stack web applications and AI-powered platforms using Django, authentication, REST APIs, and database integration.",
  "Power BI": "Intermediate\n\nBuilt interactive dashboards and business intelligence reports for data visualization and decision-making.",
  "R": "Intermediate\n\nApplied for statistical computing, data analysis, visual plots, and exploratory data modeling.",
  "EXCEL": "Intermediate\n\nHandled data cleaning, advanced formulas, pivot tables, and statistical calculations for analysis.",
  "MongoDB": "Intermediate\n\nUtilized document-based NoSQL database for flexible data schemas, storage, and fast queries.",
  "MYSQL": "Intermediate\n\nDesigned relational databases, wrote optimized queries, and managed structured schemas for applications.",
  "HTML": "Advanced\n\nCreated semantic structures, responsive layouts, and organized page contents for websites.",
  "CSS": "Advanced\n\nStyled modern, premium user interfaces with custom animations, transitions, and responsive layouts.",
  "JAVASCRIPT": "Advanced\n\nAdded interactive features, animated DOM interactions, dynamic page loading, and client-side logic.",
  "GITHUB": "Advanced\n\nManaged source code version control, branches, pull requests, and collaborative project workflows.",
  "VS": "Advanced\n\nConfigured extensions, debugging environments, and optimized coding setup in Visual Studio Code.",
  "POSTGRESQL": "Intermediate\n\nImplemented robust relational database features, index optimization, and structured storage for large systems.",
  "OLLAMA": "Intermediate\n\nRan local Large Language Models (LLMs) to build secure, private generative AI features.",
  "LLAVA": "Intermediate\n\nIntegrated vision-language multimodal models for image processing, classification, and text explanation.",
  "PROMPT ENGINEERING": "Advanced\n\nDesigned and refined prompts for LLMs to maximize accuracy, control outputs, and enhance user experience."
};

fetch("data/skills.json")
  .then(res => res.json())
  .then(skills => {
    const container = document.getElementById("skillsGrid");

    // Create single reusable popup element
    const popup = document.createElement("div");
    popup.className = "skill-popup";
    popup.id = "skillPopup";
    popup.innerHTML = `
      <button class="skill-popup-close" id="skillPopupClose" aria-label="Close popup">&times;</button>
      <div class="skill-popup-header">
          <img class="skill-popup-icon" id="skillPopupIcon" src="" alt="">
          <div>
              <h4 class="skill-popup-title" id="skillPopupTitle"></h4>
              <span class="skill-popup-level" id="skillPopupLevel"></span>
          </div>
      </div>
      <p class="skill-popup-desc" id="skillPopupDesc"></p>
    `;
    document.body.appendChild(popup);

    const popupClose = popup.querySelector("#skillPopupClose");
    const popupIcon = popup.querySelector("#skillPopupIcon");
    const popupTitle = popup.querySelector("#skillPopupTitle");
    const popupLevel = popup.querySelector("#skillPopupLevel");
    const popupDesc = popup.querySelector("#skillPopupDesc");

    const closePopup = () => {
      popup.classList.remove("show");
      document.querySelectorAll(".skill-card").forEach(c => c.classList.remove("active"));
    };

    popupClose.addEventListener("click", closePopup);

    // Position helper taking scrolling and viewport boundaries into account
    const positionPopup = (card) => {
      const cardRect = card.getBoundingClientRect();
      const popupRect = popup.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

      const popupHeight = popupRect.height;
      const popupWidth = popupRect.width;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const padding = 15;
      const headerHeight = 130; // Height of sticky navbar + safety margin

      // Mobile Centered Modal logic (handled primarily by CSS overrides, but we return early to avoid inline positioning conflicts)
      if (viewportWidth < 768) {
        popup.style.top = "";
        popup.style.left = "";
        return;
      }

      let top, left;

      // Try placing to the right of the card
      if (cardRect.right + 12 + popupWidth <= viewportWidth - padding) {
        left = scrollLeft + cardRect.right + 12;
        top = scrollTop + cardRect.top + (cardRect.height - popupHeight) / 2;
      }
      // Try placing to the left of the card
      else if (cardRect.left - 12 - popupWidth >= padding) {
        left = scrollLeft + cardRect.left - 12 - popupWidth;
        top = scrollTop + cardRect.top + (cardRect.height - popupHeight) / 2;
      }
      // Fallback: place above or below
      else {
        const horizontalCenterLeft = cardRect.left + (cardRect.width - popupWidth) / 2;
        left = scrollLeft + Math.max(padding, Math.min(horizontalCenterLeft, viewportWidth - popupWidth - padding));

        // Place above if there is space relative to the sticky header
        if (cardRect.top - popupHeight - 12 >= headerHeight) {
          top = scrollTop + cardRect.top - popupHeight - 12;
        } else {
          // Default below the card
          top = scrollTop + cardRect.bottom + 12;
        }
      }

      // Clamp vertical position to stay below sticky nav and above screen bottom
      const minTop = scrollTop + headerHeight;
      const maxTop = scrollTop + viewportHeight - popupHeight - padding;
      top = Math.max(minTop, Math.min(top, maxTop));

      popup.style.top = `${top}px`;
      popup.style.left = `${left}px`;
    };

    skills.forEach(skill => {
      const card = document.createElement("div");
      card.className = "skill-card";

      card.innerHTML = `
        <img src="${skill.icon}" alt="${skill.name}">
        <span class="skill-name">${skill.name}</span>
      `;

      card.addEventListener("click", (e) => {
        e.stopPropagation();

        // Update active class state
        document.querySelectorAll(".skill-card").forEach(c => c.classList.remove("active"));
        card.classList.add("active");

        const description = skillDescriptions[skill.name] || `Intermediate\n\nExperience with ${skill.name} technologies.`;
        const descParts = description.split("\n\n");
        const level = descParts[0] || "Intermediate";
        const textDesc = descParts[1] || description;

        popupIcon.src = skill.icon;
        popupIcon.alt = skill.name;
        popupTitle.textContent = skill.name;
        popupLevel.textContent = level;
        popupDesc.textContent = textDesc;

        popup.classList.add("show");
        
        // Position popup next to clicked card
        positionPopup(card);
      });

      container.appendChild(card);
    });

    // Close when clicking outside of the popup and the skill cards
    document.addEventListener("click", (e) => {
      if (!popup.contains(e.target) && !e.target.closest(".skill-card")) {
        closePopup();
      }
    });

    // Close when hitting Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closePopup();
      }
    });

    // Re-adjust position on window resize or scroll
    window.addEventListener("resize", () => {
      if (popup.classList.contains("show")) {
        const activeCard = document.querySelector(".skill-card.active");
        if (activeCard) positionPopup(activeCard);
      }
    });
  })
  .catch(err => console.error("Skills load error:", err));

