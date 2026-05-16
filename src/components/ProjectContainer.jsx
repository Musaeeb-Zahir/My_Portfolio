import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/data";
import { motion } from "motion/react";

function ProjectContainer() {
  return (
    <section
      className="flex flex-col items-center py-10 bg-primary w-full"
      id="project"
    >
      <motion.h2
        initial={{ y: -10, opacity: 0, scale: 0.8 }}
        whileInView={{
          y: 0,
          opacity: 1,
          scale: 1,
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
        viewport={{ once: true, amount: 0.3 }}
        className="font-nunito text-4xl align-baseline font-bold text-heading py-3 mb-6"
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4 items-stretch">
        {projects.map((pro) => (
          <ProjectCard project={pro} key={pro.id} />
        ))}
      </div>
    </section>
  );
}

export default ProjectContainer;