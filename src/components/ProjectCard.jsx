import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
function ProjectCard({ project }) {
  return (
    <article className="flex flex-col px-2 py-4 items-start h-full bg-[#D7D6D2] gap-3 rounded-xl relative shadow-xl md:shadow-xl md:w-[25%] md:h-[600px] md:justify-start cursor-pointer transition-all duration-150 hover:shadow-2xl hover:shadow-gray-400 hover:scale-101">
      <img src={project?.img} alt="" className="w-[100%] rounded-2xl z-10 hover:scale-101 transition-all duration-150"/>
      <div className="flex flex-col px-2 gap-2">
        <h3
          className="font-nunito font-black text-2xl tracking-wide"
          style={{ color: project.themeColor }}
        >
          {project.title}
        </h3>
        <p className="text-sm font-nunito italic md:text-[16px]">
          {project.discription}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              className="border-[0.5px] border-gray-500 px-2 py-1 text-sm rounded-2xl "
              key={tool}
            >
              {tool}
            </span>
          ))}
        </div>
        <div className="flex gap-1.5 mx-1 flex items-center my-1 py-2 md:absolute bottom-3 left-4">
          <strong className="font-nunito font-semibold">View Project</strong>
          <div>
            <a href={project.link} target="_blank">
              <FaArrowUpRightFromSquare className="text-sm" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
