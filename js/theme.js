document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggleBtn");
  const dropdown = document.getElementById("themeDropdown");
  if (!toggleBtn || !dropdown) return;

  const buttons = dropdown.querySelectorAll(".theme-dropdown-item");
  const currentTheme = localStorage.getItem("portfolio-theme") || "system";

  // Set active class on load
  const updateCheckmark = (theme) => {
    buttons.forEach(btn => {
      if (btn.getAttribute("data-theme") === theme) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  };

  updateCheckmark(currentTheme);

  const applyTheme = (theme) => {
    const isDarkSystem = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (theme === "light" || (theme === "system" && !isDarkSystem)) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  };

  // Smart dropdown positioning to prevent viewport/container clipping
  const adjustDropdownPosition = () => {
    const btnRect = toggleBtn.getBoundingClientRect();
    const dropdownHeight = 190; // approximate height of dropdown with padding & gap
    
    // Find the closest section container (e.g. hero section) to respect its boundary
    const parentSection = toggleBtn.closest("section");
    let spaceBelow = window.innerHeight - btnRect.bottom; // default fallback

    if (parentSection) {
      const sectionRect = parentSection.getBoundingClientRect();
      // Calculate remaining space within the parent section
      spaceBelow = sectionRect.bottom - btnRect.bottom;
    }

    if (spaceBelow < dropdownHeight && btnRect.top > dropdownHeight) {
      // Open above
      dropdown.style.top = "auto";
      dropdown.style.bottom = "calc(100% + 10px)";
      dropdown.style.transformOrigin = "bottom left";
    } else {
      // Open below
      dropdown.style.top = "calc(100% + 10px)";
      dropdown.style.bottom = "auto";
      dropdown.style.transformOrigin = "top left";
    }

    // Horizontal check to prevent off-screen overflow
    const dropdownWidth = 175;
    const windowWidth = window.innerWidth;
    const spaceRight = windowWidth - btnRect.left;

    if (spaceRight < dropdownWidth) {
      dropdown.style.left = "auto";
      dropdown.style.right = "0";
      // Adjust transform origin for right-aligned scaling
      if (dropdown.style.top === "auto") {
        dropdown.style.transformOrigin = "bottom right";
      } else {
        dropdown.style.transformOrigin = "top right";
      }
    } else {
      dropdown.style.left = "0";
      dropdown.style.right = "auto";
    }
  };

  const toggleDropdown = () => {
    const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
    toggleBtn.setAttribute("aria-expanded", !isExpanded);
    
    if (!isExpanded) {
      adjustDropdownPosition();
      dropdown.classList.add("show");
    } else {
      dropdown.classList.remove("show");
    }
  };

  const closeDropdown = () => {
    toggleBtn.setAttribute("aria-expanded", "false");
    dropdown.classList.remove("show");
  };

  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleDropdown();
  });

  // Listen to theme option clicks
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const theme = btn.getAttribute("data-theme");
      localStorage.setItem("portfolio-theme", theme);
      applyTheme(theme);
      updateCheckmark(theme);
      closeDropdown();
    });
  });

  // Close dropdown on click outside
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target) && e.target !== toggleBtn && !toggleBtn.contains(e.target)) {
      closeDropdown();
    }
  });

  // Close dropdown on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDropdown();
    }
  });

  // Re-adjust position on window resize or scroll if dropdown is open
  window.addEventListener("resize", () => {
    if (dropdown.classList.contains("show")) {
      adjustDropdownPosition();
    }
  });

  window.addEventListener("scroll", () => {
    if (dropdown.classList.contains("show")) {
      adjustDropdownPosition();
    }
  });

  // Listen to system theme change if system is active
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    const activeTheme = localStorage.getItem("portfolio-theme") || "system";
    if (activeTheme === "system") {
      applyTheme("system");
    }
  });
});
