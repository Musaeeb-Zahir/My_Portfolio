const ham = document.querySelector(".hamberger");
const cross = document.querySelector(".cross");
const nav = document.querySelector(".nav");
const navlinks = document.querySelector(".nav-links");
ham.addEventListener("click", () => {
  ham.style.display = " none !important";
  cross.style.display = "block";
  navList.style.transform = "translateX(0)";
});
