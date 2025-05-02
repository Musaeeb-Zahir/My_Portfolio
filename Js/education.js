const edu_con = document.querySelector(".education-container");

const edu = [
  {
    img: "../Assets/img/fuuast.png",
    degree: "Bachelor in Computer Science",
    institute: "FUUAST",
    year: "2024-2027",
    desc: "A four-year undergraduate program in FUUAST that covers principles of computer science, programming, and systems analysis.",
  },
  {
    img: "../Assets/img/ps&cs.png",
    institute: "PS&CS",
    degree: "Intermediate in Computer Science",
    year: "2021-2023",
    desc: "A two-year program in PS&CS that provides a strong foundation in computer science, programming, and mathematics.",
  },
];

edu_con.innerHTML = edu
  .map(
    (element) => `
  <div class="education-box">
    <div class="edu-img">
      <img src="${element.img}" width="150px" alt="University Logo" />
    </div>
    <div class="about-edu">
      <h3>${element.degree}</h3>
      <p><strong>${element.institute}</strong> | ${element.year}</p>
      <p>${element.desc}</p>
    </div>
  </div>
`
  )
  .join("");
