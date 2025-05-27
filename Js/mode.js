const modeBtn = document.querySelector(".light-dark-mode");
const root = document.documentElement;
function enableLightMode() {
  root.style.setProperty("--background-color", "#ffffff");
  root.style.setProperty("--heading-text-color", "#161513");
  root.style.setProperty("--header-background-color", "#bec1dd");
  root.style.setProperty("--experience-text-color", "#0d1037");
  const allElements = document.querySelectorAll("*");
  allElements.forEach((el) => {
    const style = window.getComputedStyle(el);
    if (style.color === "rgb(255, 255, 255)") {
      el.style.color = "black";
    }
  });
}
modeBtn.addEventListener("click", () => {
  enableLightMode();
});
