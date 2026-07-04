/* ==========================================================================
   DISHA AI - PORTFOLIO CHATBOT LOGIC
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Knowledge base containing only verified details from Disha's portfolio
  const knowledgeBase = {
    greetings: 
      "Hi! I’m Disha AI. Ask me about Disha’s skills, education, experience, projects, certifications, or contact details.",
    
    skills: 
      "Disha’s technical skills include:\n" +
      "• **Programming**: Python, Java, R, SQL, HTML, CSS, JavaScript\n" +
      "• **Data Science & ML**: Scikit-learn, TensorFlow, Keras, PyTorch, Reinforcement Learning (DQN), NLP, NLTK, Prompt Engineering\n" +
      "• **Generative AI**: Ollama, LLaVA\n" +
      "• **Frameworks & Libraries**: Django, Bootstrap, REST APIs\n" +
      "• **Databases**: MongoDB, MySQL, PostgreSQL\n" +
      "• **Tools & Platforms**: Power BI, Excel, Git, GitHub, VS Code, Jupyter, Hadoop, Hive\n\n" +
      "Feel free to ask about any specific skill to know more!",

    projects: 
      "Here are Disha's major projects:\n\n" +
      "1. **LearnBridge – AI Assisted Course Platform**: Full-stack platform built with Python, Django, Ollama, and LLaVA. Supports quiz generation, flashcards, summaries, AI tutoring, and PDF/image/text processing. [GitHub](https://github.com/dishasonawane04/Learnbridg)\n" +
      "2. **Reinforcement Learning Game Environment**: Custom Grid-World environment trained using Deep Q-Networks (DQN). [GitHub](https://github.com/dishasonawane04/RL-Chess-Endgame)\n" +
      "3. **Emotion Detection using Hybrid CNN–LSTM**: End-to-end emotion classification pipeline using NLP and TensorFlow/Keras. [GitHub](https://github.com/dishasonawane04/Emotion-Detection-Using-Hybrid-CNN--LSTM)\n" +
      "4. **Emotion-Based Music Recommendation System**: Web-based Django application recommending music based on user emotions. [GitHub](https://github.com/dishasonawane04/emotion-music-recommender)\n" +
      "5. **Sales Performance Dashboard**: Power BI interactive dashboard generated using DAX and Power Query. [GitHub](https://github.com/dishasonawane04/Sales-Perfomance-Dashboard)\n\n" +
      "You can ask about any specific project (e.g. 'tell me about LearnBridge') to see details!",

    learnbridge: 
      "🌉 **LearnBridge – AI Assisted Course Platform**\n" +
      "Developed a full-stack AI-powered learning platform that generates quizzes, flashcards, summaries, and explanations from uploaded academic documents.\n" +
      "• **Key Features**: AI Tutor (local Ollama + LLaVA), PDF/text/image processing, Django backend.\n" +
      "• **Tech Stack**: Python, Django, Ollama, LLaVA, HTML, CSS, Bootstrap, Generative AI, Machine Learning, NLP.\n" +
      "• [GitHub Repository](https://github.com/dishasonawane04/Learnbridg)",

    rl_project: 
      "🧠 **Reinforcement Learning Game Environment**\n" +
      "Designed a custom Grid-World environment and trained a reinforcement learning agent using Deep Q-Networks (DQN). Implemented experience replay, target networks, and epsilon-greedy exploration to achieve stable learning.\n" +
      "• **Tech Stack**: Python, PyTorch, TensorFlow, OpenAI Gym.\n" +
      "• [GitHub Repository](https://github.com/dishasonawane04/RL-Chess-Endgame)",

    emotion_project: 
      "😊 **Emotion Detection using Hybrid CNN–LSTM**\n" +
      "Built an end-to-end emotion classification pipeline using NLP techniques. Designed a hybrid CNN–LSTM model to capture local patterns and long-term dependencies.\n" +
      "• **Tech Stack**: Python, TensorFlow, Keras, NLP.\n" +
      "• [GitHub Repository](https://github.com/dishasonawane04/Emotion-Detection-Using-Hybrid-CNN--LSTM)",

    music_project: 
      "🎵 **Emotion-Based Music Recommendation System**\n" +
      "Developed a web-based application that recommends music based on detected user emotions. Integrated ML models with Django backend and Spotify-style UI.\n" +
      "• **Tech Stack**: Python, ML, Django, HTML, CSS, Bootstrap.\n" +
      "• [GitHub Repository](https://github.com/dishasonawane04/emotion-music-recommender)",

    sales_project: 
      "📊 **Sales Performance Dashboard**\n" +
      "Created an interactive Power BI dashboard to track KPIs, sales trends, and product performance. Used DAX and Power Query to generate calculated measures.\n" +
      "• **Tech Stack**: Power BI, DAX, Power Query.\n" +
      "• [GitHub Repository](https://github.com/dishasonawane04/Sales-Perfomance-Dashboard)",

    experience: 
      "💼 **Experience**\n" +
      "• **AI/ML Intern** at Christ Infotech, Pune (Jan 2026 – May 2026):\n" +
      "  - Built a Generative AI system for quiz generation, flashcards, and document summarization.\n" +
      "  - Developed an AI Tutor using LLM integration and prompt engineering.\n" +
      "  - Designed scalable Django backend APIs for AI features.\n" +
      "  - Integrated PDF, image, and text document processing.\n" +
      "  - Worked with Python, Django, Ollama, LLaVA, HTML, CSS, and Machine Learning.\n" +
      "  - [View Certificate](https://drive.google.com/file/d/1DO6RY4Qn1M04ff7-jHfAtcC8de0j_ZdQ/view?usp=sharing)",

    education: 
      "🎓 **Education**\n" +
      "• **Master of Science in Data Science** (2024 – 2026)\n" +
      "  Christ (Deemed To Be University), Pune Lavasa\n" +
      "  CGPA: 7.75 / 10\n" +
      "  [Visit Website](https://lavasa.christuniversity.in/)\n" +
      "• **Bachelor of Science in Statistics** (2019 – 2024)\n" +
      "  HPT Arts & RYK Science College, Nashik\n" +
      "  CGPA: 8.41 / 10\n" +
      "  [Visit Website](https://hptrykcollege.com/)",

    contact: 
      "✉️ **Contact Details**\n" +
      "You can reach out to Disha via:\n" +
      "• 📧 **Email**: [disha.sonawane18@gmail.com](mailto:disha.sonawane18@gmail.com)\n" +
      "• 💼 **LinkedIn**: [Disha Sonawane](https://www.linkedin.com/in/disha-sonawane-04093b2a2)\n" +
      "• 💻 **GitHub**: [dishasonawane04](https://github.com/dishasonawane04)\n\n" +
      "She is always open to learning & opportunities! ✨",

    certifications: 
      "📜 **Certifications**\n" +
      "• **Generative AI for Data Scientists** (IBM · Coursera, 2026) [View](https://drive.google.com/file/d/1_O1-nrO7HVQTgbXw6t3l1C3tdHp9gdoy/view?usp=drive_link)\n" +
      "• **Google Cybersecurity Professional Certificate** (Google · Coursera, 2026) [View](https://drive.google.com/file/d/1UINN37VG5Ru1Cy302p805_94AgKXUKSM/view?usp=sharing)\n" +
      "• **Data Analysis and Visualization with Power BI** (Microsoft · Coursera, 2024) [View](https://drive.google.com/file/d/1_-vEWu7VmUTqkf7Q1Gx7apY3gefTRb_9/view?usp=sharing)\n" +
      "• **Introduction to MongoDB** (MongoDB University, 2024) [View](https://drive.google.com/file/d/1I6x-iffvKopoClZkoSwE4zHYKOt377LK/view?usp=sharing)",

    about:
      "Disha Sonawane is a Data Science postgraduate with a Statistics background.\n\n" +
      "• **MSc in Data Science** (2024 – 2026) from Christ (Deemed To Be University), Pune Lavasa (CGPA: 7.75/10)\n" +
      "• **BSc in Statistics** (2019 – 2024) from HPT Arts & RYK Science College, Nashik (CGPA: 8.41/10)\n\n" +
      "She specializes in data analysis, machine learning, and statistical modeling. Feel free to ask about her skills, experience, or projects!",

    fallback: 
      "I can help with information about Disha’s portfolio, skills, projects, education, experience, and contact details."
  };

  // DOM Elements (will be created in index.html)
  const container = document.getElementById("disha-ai-container");
  if (!container) return;

  const toggleBtn = container.querySelector(".disha-ai-toggle-btn");
  const popup = container.querySelector(".disha-ai-popup");
  const closeBtn = container.querySelector(".disha-ai-close-btn");
  const chatForm = container.querySelector(".disha-ai-form");
  const chatInput = container.querySelector(".disha-ai-input");
  const messagesContainer = container.querySelector(".disha-ai-messages");
  const chipsContainer = container.querySelector(".disha-ai-chips-container");

  // Speech Synthesis Welcome Feature
  function speakWelcome() {
    if (!window.speechSynthesis) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance("Hi, I am Disha’s AI. How can I help you?");
    utterance.volume = 1.0;
    utterance.pitch = 1.0;
    utterance.rate = 0.95;

    if (window.speechSynthesis.getVoices) {
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(voice =>
        voice.lang.startsWith("en-") &&
        (voice.name.toLowerCase().includes("google") ||
         voice.name.toLowerCase().includes("natural") ||
         voice.name.toLowerCase().includes("zira") ||
         voice.name.toLowerCase().includes("samantha"))
      ) || voices.find(voice => voice.lang.startsWith("en"));

      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }
    }

    window.speechSynthesis.speak(utterance);
  }

  if (window.speechSynthesis && window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = () => {
      if (window.speechSynthesis.getVoices) {
        window.speechSynthesis.getVoices();
      }
    };
  }

  // Keep chat history in memory, load from sessionStorage if available
  let chatHistory = [];

  // Initialize Chat Session
  function initChat() {
    const savedHistory = sessionStorage.getItem("disha-ai-history");
    if (savedHistory) {
      try {
        chatHistory = JSON.parse(savedHistory);
        chatHistory.forEach(msg => appendMessageBubble(msg.text, msg.sender));
      } catch (e) {
        sessionStorage.removeItem("disha-ai-history");
        loadWelcomeMessage();
      }
    } else {
      loadWelcomeMessage();
    }
  }

  function loadWelcomeMessage() {
    appendMessage(knowledgeBase.greetings, "bot");
  }

  // Toggle Popup open/close
  function openChat() {
    popup.classList.add("disha-ai-show");
    toggleBtn.classList.add("disha-ai-active");
    toggleBtn.setAttribute("aria-expanded", "true");
    chatInput.focus();
    scrollToBottom();
    speakWelcome();
  }

  function closeChat() {
    popup.classList.remove("disha-ai-show");
    toggleBtn.classList.remove("disha-ai-active");
    toggleBtn.setAttribute("aria-expanded", "false");
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }

  function toggleChat() {
    if (popup.classList.contains("disha-ai-show")) {
      closeChat();
    } else {
      openChat();
    }
  }

  // Event Listeners for Open/Close
  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleChat();
  });

  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeChat();
  });

  // Close when clicking outside container
  document.addEventListener("click", (e) => {
    if (!container.contains(e.target) && popup.classList.contains("disha-ai-show")) {
      closeChat();
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && popup.classList.contains("disha-ai-show")) {
      closeChat();
      toggleBtn.focus();
    }
  });

  // Scroll to bottom helper
  function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Format response helper: replaces Markdown-style bold and links with HTML tags
  function formatResponse(text) {
    // 1. Escaping basic HTML to prevent injection
    let formatted = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // 2. Format bold markdown **text** to <strong>text</strong>
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    // 3. Format link markdown [label](url) to <a href="url" target="_blank">label</a>
    formatted = formatted.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>');

    // 4. Line breaks to HTML line breaks
    formatted = formatted.replace(/\n/g, "<br>");

    return formatted;
  }

  // Append bubble to DOM and scroll
  function appendMessageBubble(text, sender) {
    const bubble = document.createElement("div");
    bubble.className = `disha-ai-message disha-ai-${sender}`;
    bubble.innerHTML = sender === "bot" ? formatResponse(text) : text;
    messagesContainer.appendChild(bubble);
    scrollToBottom();
  }

  // Store in memory & session, and append bubble
  function appendMessage(text, sender) {
    chatHistory.push({ text, sender });
    sessionStorage.setItem("disha-ai-history", JSON.stringify(chatHistory));
    appendMessageBubble(text, sender);
  }

  // Keyword Matching Logic
  function matchResponse(userMessage) {
    const text = userMessage.toLowerCase().trim();

    // Specific Projects check
    if (text.includes("learnbridge") || text.includes("course platform")) {
      return knowledgeBase.learnbridge;
    }
    if (text.includes("reinforcement") || text.includes("dqn") || text.includes("grid-world") || text.includes("openai gym") || text.includes("gym environment")) {
      return knowledgeBase.rl_project;
    }
    if (text.includes("emotion detection") || text.includes("lstm") || text.includes("cnn-lstm")) {
      return knowledgeBase.emotion_project;
    }
    if (text.includes("music") || text.includes("recommender") || text.includes("spotify")) {
      return knowledgeBase.music_project;
    }
    if (text.includes("sales") || text.includes("power bi") || text.includes("dashboard") || text.includes("dax") || text.includes("power query")) {
      return knowledgeBase.sales_project;
    }

    // Category checks
    if (text.includes("project") || text.includes("portfolio")) {
      return knowledgeBase.projects;
    }
    if (text.includes("experience") || text.includes("intern") || text.includes("christ infotech") || text.includes("job") || text.includes("work")) {
      return knowledgeBase.experience;
    }
    if (text.includes("education") || text.includes("university") || text.includes("college") || text.includes("bsc") || text.includes("msc") || text.includes("statistics") || text.includes("school") || text.includes("degree")) {
      return knowledgeBase.education;
    }
    if (text.includes("contact") || text.includes("email") || text.includes("linkedin") || text.includes("github") || text.includes("connect") || text.includes("hire") || text.includes("mail")) {
      return knowledgeBase.contact;
    }
    if (
      text.includes("skill") || 
      text.includes("python") || 
      text.includes("java") || 
      text.includes("django") || 
      text.includes("html") || 
      text.includes("css") || 
      text.includes("javascript") || 
      text.includes("r lang") || 
      text.includes("mongodb") || 
      text.includes("mysql") || 
      text.includes("postgresql") || 
      text.includes("excel") || 
      text.includes("ollama") || 
      text.includes("llava") || 
      text.includes("prompt") ||
      text.includes("keras") ||
      text.includes("pytorch") ||
      text.includes("tensorflow") ||
      text.includes("nlp") ||
      text.includes("scikit") ||
      text.includes("bootstrap") ||
      text.includes("git") ||
      text.includes("hadoop") ||
      text.includes("hive")
    ) {
      return knowledgeBase.skills;
    }
    if (text.includes("certification") || text.includes("certificate") || text.includes("credentials")) {
      return knowledgeBase.certifications;
    }
    if (
      text.includes("who is disha") ||
      text.includes("about disha") ||
      text.includes("who is she") ||
      text.includes("tell me about disha") ||
      text.includes("disha sonawane") ||
      text.includes("background")
    ) {
      return knowledgeBase.about;
    }
    if (
      text.includes("hi") || 
      text.includes("hello") || 
      text.includes("hey") || 
      text.includes("welcome") || 
      text.includes("who are you") || 
      text.includes("what is your name")
    ) {
      return knowledgeBase.greetings;
    }

    // Default Fallback
    return knowledgeBase.fallback;
  }

  // Handle Form Submission
  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = chatInput.value.trim();
    if (!query) return;

    // Display User query
    appendMessage(query, "user");
    chatInput.value = "";

    // Generate and display AI response with a tiny human-like delay
    setTimeout(() => {
      const reply = matchResponse(query);
      appendMessage(reply, "bot");
    }, 300);
  });

  // Handle Quick Reply Clicks (simulating user send)
  chipsContainer.addEventListener("click", (e) => {
    const chip = e.target.closest(".disha-ai-chip");
    if (!chip) return;

    const query = chip.textContent.trim();
    
    // Simulate user message
    appendMessage(query, "user");

    setTimeout(() => {
      const reply = matchResponse(query);
      appendMessage(reply, "bot");
    }, 250);
  });

  // Setup accessible focus states for chips
  chipsContainer.querySelectorAll(".disha-ai-chip").forEach(chip => {
    chip.setAttribute("tabindex", "0");
    chip.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        chip.click();
      }
    });
  });

  // Initialize
  initChat();
});
