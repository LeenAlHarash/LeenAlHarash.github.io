// SCROLL BUTTON
const scrollBtn = document.getElementById("scrollToTopBtn");

// Show after scrolling 300px
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

// Smooth scroll to top when button is clicked
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// SKILL %%%
function showSkill(skill) {
  const skillLevels = {
    php: 40,
    c: 45,
    python: 50,
    angular: 65,
    laravel: 65,
    js: 70,
    sql: 75,
    oop: 75,
    linux: 75,
    css: 80,
    kotlin: 85,
    jfx: 85,
    springb: 85,
    html: 90
  };

  const percent = skillLevels[skill];

  const progressBar = document.getElementById("progressBar");
  progressBar.textContent = percent + "%";
  progressBar.style.width = percent + "%";
}
