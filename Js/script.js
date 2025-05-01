const ham = document.querySelector(".hamberger");
const cross = document.querySelector(".cross");
const nav = document.querySelector(".nav");
const navlinks = document.querySelector(".nav-links");
ham.addEventListener("click", () => {
  ham.style.visibility = " hidden";
  cross.style.display = "block";
  navlinks.style.transform = "translateX(0)";
});

cross.addEventListener("click", () => {
  ham.style.visibility = "visible";
  cross.style.display = "none";
  navlinks.style.transform = "translateX(-100%)";
});