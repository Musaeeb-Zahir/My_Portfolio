const modeBtn = document.querySelector(".light-dark-mode");
const labelClr = document.querySelectorAll(".label");
const heroPara = document.querySelector(".hero-para");
const proPara = document.querySelectorAll(".pro-para");
const aboutExpTxt = document.querySelectorAll(".about");
const root = document.documentElement;
function enableLightMode() {
  console.log("click ho gia");

  root.style.setProperty("--background-color", "#ffffff");
  root.style.setProperty("--heading-text-color", "#161513");
  // root.style.setProperty("--experience-text-color", "#0d1037");
  heroPara.style.color = "rgb(103 101 101)";
  proPara.forEach((para) => {
    para.style.color = "rgb(103 101 101)";
  });
  labelClr.forEach((label) => {
    label.style.color = "rgb(103 101 101)";
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
