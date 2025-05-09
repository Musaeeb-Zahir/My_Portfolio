const skillContainer = document.querySelector(".skills-container");
const skillArr = [
  {
    name: "HTML & CSS",
    percent: 90,
    icon: "<i class='bx bxl-html5'></i>",
  },
  {
    name: "Tailwind CSS",
    percent: 75,
    icon: "<i class='bx bxl-css3'></i>",
  },
  {
    name: "JavaScript",
    percent: 80,
    icon: "<i class='bx bxl-javascript'></i>",
  },
  {
    name: "React",
    percent: 75,
    icon: "<i class='bx bxl-react'></i>",
  },
  {
    name: "Node.js",
    percent: 70,
    icon: "<i class='bx bxl-nodejs'></i>",
  },
];
skillArr.forEach((skill, index) => {
  skillContainer.innerHTML += `  <div class="skill" data-percent=${skill.percent}>
    <div class="circle-bg"><div class="circle-inner">
    <p>Percent</p>
    <div class="percent">${skill.percent}%</div>
    </div></div>
    <div class="label"><i class='bx bxl-nodejs'></i>${skill.name}</div>
    </div>`;
});
const skills = document.querySelectorAll(".skill");
skills.forEach((skill) => {
  const percent = skill.dataset.percent;
  const circle = skill.querySelector(".circle-bg");
  const text = skill.querySelector(".percent");

  let current = 0;
  const update = () => {
    if (current <= percent) {
      let deg = (current / 100) * 360;
      circle.style.background = `conic-gradient( rgba(195, 85, 191, 0.55), rgba(255, 133, 96, 0.90) ${deg}deg, #2b2b2b ${deg}deg)`;

      text.textContent = current + "%";
      current++;
      requestAnimationFrame(update);
    }
  };

  update();
});
