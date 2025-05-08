const skills = document.querySelectorAll(".skill");

skills.forEach((skill) => {
  const percent = skill.dataset.percent;
  const circle = skill.querySelector(".circle-bg");
  const text = skill.querySelector(".percent");

  let current = 0;
  const update = () => {
    if (current <= percent) {
      let deg = (current / 100) * 360;
      circle.style.background = `conic-gradient( rgba(195, 85, 192, 1), rgba(255, 134, 96, 1) ${deg}deg, #2b2b2b ${deg}deg)`;

      text.textContent = current + "%";
      current++;
      requestAnimationFrame(update);
    }
  };

  update();
});
