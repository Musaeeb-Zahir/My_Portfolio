import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/data";
import {motion} from "motion/react"
function ProjectContainer() {
  return (
    <section
      className="flex flex-col items-center py-3 bg-primary"
      id="project"
    >
      <motion.h2 
      initial={{y:-10,opacity:0,scale:0.8}}
      whileInView={{y:0,opacity:1,scale:1,transition:{duration:0.4,ease:"easeInOut"}}}
      viewport={{once:'true',amount:0.3}}  
      className="font-nunito text-4xl align-baseline font-bold text-heading py-3 ">
        Projects
      </motion.h2>
      <div className="flex gap-2 py-2 px-2  flex-col w-full md:flex-row md:justify-center md:gap-6">
        {projects.map((pro) => (
          <ProjectCard project={pro} key={pro.id} />
        ))}
      </div>
    </section>
  );
}

export default ProjectContainer;
