const exp_container = document.querySelector(".experience-container");
const exp_arr = [
  {
    exp_img: "../Assets/img/exp1.png",
    title: "Web Development Projects",
    exp_desc:
      "Designed and developed 2 to 3 fully functional projects using HTML, CSS, JavaScript, and React. Implemented responsive designs, component-based structures, and interactive UI elements.",
  },
  {
    exp_img: "../Assets/img/exp2.png",
    title: "Database Design in Oracle",
    exp_desc:
      "Created and managed databases using Oracle in university projects. Designed ER diagrams, implemented tables with constraints, and wrote SQL queries for data manipulation and retrieval.",
  },
  {
    exp_img: "../Assets/img/exp4.png",
    title: "Version Control & Collaboration",
    exp_desc:
      "Used Git and GitHub for version control in all my personal and academic projects. Managed repositories, created branches, pushed code regularly, and collaborated via pull requests.",
  },
  {
    exp_img: "../Assets/img/exp3.png",
    title: "Self-Learning & Problem Solving",
    exp_desc:
      "Consistently enhanced my skills by exploring new technologies, debugging code independently, and solving real-world problems through personal projects.",
  },
];
exp_arr.forEach((element) => {
  exp_container.innerHTML += ` <div class="experience-box">
        <div class="exp-img">
          <img src=${element.exp_img} width="80px" height="" alt="" />
        </div>
        <div class="about-exp">
        <h3>${element.title}</h3>
        <p>${element.exp_desc}</p>
        </div>
      </div>`;
});
