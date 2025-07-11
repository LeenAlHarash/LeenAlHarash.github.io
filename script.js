// SKILL %%%

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
  angular: {
    percent: 65,
    svg: `ANGULAR`
  },
  laravel: {
    percent: 65,
    svg: `LARAVEL`
  },
  sql: {
    percent: 75,
    svg: `SQL`
  },
  oop: {
    percent: 75,
    svg: `OOP`
  },
  linux: {
    percent: 75,
    svg: `LINUX`
  },
  springB: {
    percent: 85,
    svg: `SPRING BOOT`
  },
  git: {
    percent: 80,
    svg: `GIT`
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