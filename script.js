// SKILL % FUNCTIONS

const skills = {
  html: {
    percent: 90,
    svg: `HTML`
  },
  css: {
    percent: 80,
    svg: `CSS`
  },
  js: {
    percent: 70,
    svg: `JS`
  },
  kotlin: {
    percent: 85,
    svg: `KOTLIN`
  },
  java: {
    percent: 85,
    svg: `JAVA`
  },
  jfx: {
    percent: 85,
    svg: `JFX`
  },
  php: {
    percent: 40,
    svg: `PHP`
  },
  cS: {
    percent: 45,
    svg: `C#`
  },
  python: {
    percent: 55,
    svg: `PYTHON`
  },
  git: {
    percent: 80,
    svg: `GIT`
  },
  oop: {
    percent: 75,
    svg: `OOP`
  },
  sql: {
    percent: 75,
    svg: `SQL`
  },
  linux: {
    percent: 75,
    svg: `LINUX`
  },
  typeScript: {
    percent: 65,
    svg: `TS`
  },
  springB: {
    percent: 85,
    svg: `SPRINGBOOT`
  },
  angular: {
    percent: 65,
    svg: `ANGULAR`
  },
};

const container = document.querySelector(".skills-grid");

for (let key in skills) {
  const { percent, svg } = skills[key];

  const skillDiv = document.createElement("div");
  skillDiv.className = "skill";
  skillDiv.innerHTML = `
      <div class="icon">${svg}</div>
      <div class="percent">${percent}%</div>
    `;

  container.appendChild(skillDiv);
}



// Updating the year of the portfolio automatically
document.getElementById('y').textContent = new Date().getFullYear();



// Carousel Function
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const projects = Array.from(track.children);

let currentIndex = 0;
let itemsPerView = getItemsPerView();

function getItemsPerView() {
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 900) return 2;
  return 3;
}

function updateCarousel() {
  itemsPerView = getItemsPerView();
  const cardWidth = projects[0].getBoundingClientRect().width + 16; // include margin !
  const offset = -(currentIndex * cardWidth);
  track.style.transform = `translateX(${offset}px)`;
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < projects.length - itemsPerView) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

window.addEventListener('resize', updateCarousel);
updateCarousel();



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
      showAlert('Message sent successfully!');
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
