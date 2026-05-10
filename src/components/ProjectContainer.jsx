import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/data";
function ProjectContainer() {
  return (
    <section
      className="flex flex-col items-center py-3 bg-primary"
      id="project"
    >
      <h2 className="font-nunito text-4xl align-baseline font-bold text-heading py-3 ">
        Projects
      </h2>
      <div className="flex gap-2 py-2 px-2  flex-col w-full md:flex-row md:justify-center md:gap-6">
        {projects.map((pro) => (
          <ProjectCard project={pro} key={pro.id} />
        ))}
      </div>
    </section>
  );
}

export default ProjectContainer;
