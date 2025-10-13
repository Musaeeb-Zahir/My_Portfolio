const modeBtn = document.querySelector(".light-dark-mode");
const labelClr = document.querySelectorAll(".label");
const aboutExpTxt = document.querySelectorAll(".about");
const root = document.documentElement;
function enableLightMode() {
  console.log("click ho gia");

  root.style.setProperty("--background-color", "#ffffff");
  root.style.setProperty("--heading-text-color", "#161513");
  // root.style.setProperty("--experience-text-color", "#0d1037");
  labelClr.forEach((label) => {
    label.style.color = "#000";
  });
  aboutExpTxt.forEach((txt) => {
    txt.style.color = "#bec1dd";
  });
  const allElements = document.querySelectorAll("*");
  //   allElements.forEach((el) => {
  //     const style = window.getComputedStyle(el);
  //     if (style.color === "rgb(255, 255, 255)") {
  //       el.style.color = "black";
  //     }
  //   });
}
modeBtn.addEventListener("click", () => {
  enableLightMode();
});
