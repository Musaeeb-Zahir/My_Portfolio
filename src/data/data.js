import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";

export const projects = [
  {
    id: 1,
    title: "Aksify",
    img: project1,
    discription:
      "Built a responsive image discovery app using React, Redux, and Tailwind. Integrated Unsplash API for photo search and downloads, with localStorage authentication.",
    tools: [
      "#react",
      "#tailwind",
      "#redux",
      "#vite",
      "#react-router",
      "#unsplashAPI",
    ],
    link: "https://aksiify.netlify.app",
    themeColor: "#845FD7",
  },
  {
    id: 2,
    title: "Ecommerse Store",
    img: project2,
    discription:
      "  Built a fast and modern ecommerce store using React and Vite from scratch.Created dynamic features like a product gallery and a working shopping cart for users. ",
    tools: [
      "#react",
      "#tailwind",
      "#redux",
      "#vite",
      "#react-router",
      "#html",
      "#css",
    ],
    link: "https://techwearcollection.netlify.app/",
    themeColor: "#C0895E",
  },
  {
    id: 3,
    title: "Music Player",
    img: project3,
    discription:
      "Built a responsive music player that loads song data dynamically from a JSON file. Used JavaScript Audio API for custom play, pause, and real-time progress tracking",
    tools: ["#html", "#css", "#javascript"],
    link: "https://bgplayer.vercel.app/",
    themeColor: "#271843",
  },
];
