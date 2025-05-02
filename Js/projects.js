const projects = [
  {
    id: 1,
    img: "../Assets/img/project1.png",
    name: "E-commerce Website",
    description:
      "An e-commerce website showcasing a collection of techwear clothing and accessories.",
    technologies: ["fa-html5", "fa-css3-alt", "fa-js"],
    link: "https://techwearcollection.netlify.app/",
  },
  {
    id: 2,
    img: "../Assets/img/project2.png",
    name: "Stock image website",
    description:
      "A stock image website that allows users to search and download high-quality images using Unsplash API.",
    technologies: ["fa-html5", "fa-css3-alt", "fa-js"],
    link: "https://pichubsite.netlify.app/",
  },
];
const projectContainer = document.querySelector(".projects-container");
projects.forEach((project) => {
  projectContainer.innerHTML += ` <div class="project-box">
        <div class="inner-box">
          <div class="project-image">
            <img src=${project.img} alt="Project Image" width="100%">
          </div>
        </div>
        <div class="project-name">
          <h3>${project.name}</h3>
        </div>
        <!-- Project Description -->
        <div class="project-description">
          <p>${project.description}</p>
        </div>
        <!-- Skills and Live Link -->
        <div class="project-skills">
          <div class="icon-box">
          <i class="fab ${project.technologies[0]}"></i>
          <i class="fab ${project.technologies[1]}"></i>
          <i class="fab ${project.technologies[2]}"></i></div>
          <div class="live-btn">
          <a href=${project.link} target="_blank" class="btn">
            <button class="live-link-btn">Check Live <img src="Assets/img/right-up.png" alt=""></button>
          </a>
        </div>
        </div>
      </div>`;
});
