const projects = [
  {
    id: 1,
    img: "../Assets/img/project1.png",
    name: "E-commerce Website",
    description:
      "An e-commerce website showcasing a collection of techwear clothing and accessories.",
    technologies: [
      '<i class="fa-brands fa-react" style="color: #74C0FC;"></i>',
      '<i class="fa-brands fa-js" style="color:rgb(217, 224, 32);"></i>',
      '<i class="fa-brands fa-bootstrap" style="color: #9a9ee9;"></i>',
      '<i class="fa-brands fa-css3-alt" style="color: #74C0FC;"></i>',
    ],
    link: "https://techwearcollection.netlify.app/",
  },
  {
    id: 2,
    img: "../Assets/img/project2.jpg",
    name: "Aksiify",
    description:
      "Built Aksify, an image discovery app using React and Redux Toolkit, integrated with the Unsplash API to enable photo searching, category filtering, and downloading. Designed aresponsive dark-themed UI with Tailwind CSS andimplemented user authentication with localStorage persistence.",
    technologies: [
      '<i class="fa-brands fa-react" style="color: #74C0FC;"></i>',
      '<i class="fa-brands fa-unsplash" style="color: #74C0FC;"></i>',
    ],
    link: "https://aksiify.netlify.app/",
  },
  {
    id: 3,
    img: "../Assets/img/project3.png",
    name: "Music Player",
    description:
      "  Built an intermediate-level player that loads all song data dynamically from a JSON file.Used JavaScript Audio API to create custom logic for play, pause, and real-time progress tracking     Designed responsive and optimized UI for all screen sizes",
    technologies: [
      '<i class="fa-brands fa-js" style="color: rgb(255, 255, 255);"></i>',
      '<i class="fa-brands fa-css3-alt" style="color: #74C0FC;"></i>',
    ],
    link: "https://bgplayer.vercel.app/",
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
          <p class="pro-para">${project.description}</p>
        </div>
        <!-- Skills and Live Link -->
        <div class="project-skills">
          <div class="icon-box">
          ${project.technologies.map((tec) => tec)}
          </div>
          <div class="live-btn">
          <a href=${project.link} target="_blank" class="btn">
            <button class="live-link-btn">Check Live <img src="Assets/img/right-up.png" alt=""></button>
          </a>
        </div>
        </div>
      </div>`;
});
