// SKILL % FUNCTIONS
window.addEventListener('DOMContentLoaded', () => {

  const skillCategories = {
    frontend: {
      label: "Frontend",
      skills: {
        html: { percent: 90, svg: "HTML" },
        css: { percent: 80, svg: "CSS" },
        jfx: { percent: 85, svg: "JFX" },
        typeScript: { percent: 65, svg: "TS" },
        js: { percent: 75, svg: "JS" },
      }
    },

    backend: {
      label: "Backend",
      skills: {
        kotlin: { percent: 85, svg: "KOTLIN" },    
        sql: { percent: 75, svg: "SQL" },
        php: { percent: 40, svg: "PHP" },
        python: { percent: 70, svg: "PYTHON" },
        javaee: { percent: 80, svg: "JAVA-EE" },
        javase: { percent: 80, svg: "JAVA-SE" },
        cS: { percent: 45, svg: "C#" }        
      }
    },

    frameworks: {
      label: "Frameworks",
      skills: {
        angular: { percent: 65, svg: "ANGULAR" },
        springB: { percent: 85, svg: "SPRINGBOOT" },
        aspNetCore: { percent: 70, svg: "ASP.NET Core" }
      }
    },
    others: {
      label: "Others",
      skills: {
        oop: { percent: 75, svg: "OOP" },
        iot: { percent: 90, svg: "IoT" },
        unity: { percent: 90, svg: "UNITY" },
        git: { percent: 75, svg: "GIT" },
        docker: { percent: 75, svg: "DOCKER" },
        ciCD: { percent: 80, svg: "CI/CD PIPELINE" },
        linux: { percent: 75, svg: "LINUX" },
        apiInt: { percent: 80, svg: "API INTEGRATION" }
      }
    }
  };

  const skillsContainer = document.querySelector(".card .skills-grid");
  const categoryButtons = document.querySelectorAll(".skill-categories button");

  function renderSkills(categoryKey) {
    const category = skillCategories[categoryKey];
    if (!category) return;

    skillsContainer.innerHTML = "";

    Object.values(category.skills).forEach(skill => {
      const skillEl = document.createElement("div");
      skillEl.className = "skill-card";

      skillEl.innerHTML = `
        <div class="skill-svg">${skill.svg}</div>
        <div class="skill-hover">
          <span>${skill.percent}%</span>
        </div>
      `;

      skillsContainer.appendChild(skillEl);
    });
  }

  // Button click handling
  categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {

      categoryButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      renderSkills(btn.dataset.category);
    });
  });
});



// Updating the year of the portfolio automatically
document.getElementById('y').textContent = new Date().getFullYear();



// Carousel Function
new Swiper(".projects-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});



// Script for email and alert
emailjs.init('kMXGNMSE1YJZuFpfD');

function showAlert(message) {
  const alertBox = document.getElementById('alertBox');
  alertBox.textContent = message;
  alertBox.classList.add('show');
  setTimeout(() => {
    alertBox.classList.remove('show');
  }, 2000);
}

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  emailjs.sendForm('service_pmkqfwn', 'template_usgb4rm', this)
    .then(function () {
      showAlert('Message sent!');
      document.getElementById('contactForm').reset();
    }, function (error) {
      showAlert('Error: ' + error.text);
    });
});



// Script for the typewriter phrase switch
const textElement = document.getElementById('typewriter-text');
let sentences = [];
let sentenceIndex = 0;
let charIndex = 0;
let timeoutId;

function fetchSentences() {
  const keys = textElement.getAttribute('data-i18n-typewriter').split(',');
  return keys.map(key => translations[currentLang][key]);
}

function type() {
  sentences = fetchSentences();
  const currentSentence = sentences[sentenceIndex];
  if (charIndex < currentSentence.length) {
    textElement.textContent += currentSentence.charAt(charIndex);
    charIndex++;
    timeoutId = setTimeout(type, 70); // Speed typing 
  } else {
    timeoutId = setTimeout(erase, 850); // Pause before
  }
}

function erase() {
  const currentSentence = sentences[sentenceIndex];
  if (charIndex > 0) {
    textElement.textContent = currentSentence.substring(0, charIndex - 1);
    charIndex--;
    timeoutId = setTimeout(erase, 50); // Speed of erasing
  } else {
    sentenceIndex = (sentenceIndex + 1) % sentences.length;
    timeoutId = setTimeout(type, 50); // Delay before the next sentence
  }
}

function restartTypewriter() {
  clearTimeout(timeoutId);
  textElement.textContent = '';
  sentenceIndex = 0;
  charIndex = 0;
  type();
}

// Start the animation when the page loads
document.addEventListener('DOMContentLoaded', () => {
  restartTypewriter();
});




// Scroll up button
const mybutton = document.getElementById("scroll-to-top-btn");

  //show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function scrollToTop() {
  if ('scrollBehavior' in document.documentElement.style) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } else {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
