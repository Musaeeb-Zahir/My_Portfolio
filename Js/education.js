const edu_con = document.querySelector(".education-container");

const edu = [
  {
    img: "path-to-image.jpg",
    edu_name: "Undergraduate in Computer Science",
    desc: "A four-year undergraduate program in FUUAST that covers principles of computer science, programming, and systems analysis."
  },
  {
    img: "path-to-image.jpg",
    edu_name: "Completed Intermediate in ICS",
    desc: "A program focusing on computer science fundamentals, including programming, databases, and networking."
  }
];

edu_con.innerHTML = edu.map(element => `
  <div class="education-box">
    <div class="edu-img">
      <img src="${element.img}" width="80px" alt="University Logo" />
    </div>
    <div class="about-edu">
      <h3>${element.edu_name}</h3>
      <p><strong>University Name</strong> | Graduation Year</p>
      <p>${element.desc}</p>
    </div>
  </div>
`).join('');