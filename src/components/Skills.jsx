import React, { useState } from "react";
import { motion } from "motion/react";

const skills = [
  {
    name: "HTML | CSS",
    bg: "bg-orange-500",
    text: "text-white",
    level: "Expert",
    levelColor: "text-white",
    colStart: "col-start-2",
  },
  {
    name: "JavaScript",
    bg: "bg-[#F7DF1E]",
    text: "text-black",
    level: "Advanced",
    levelColor: "text-[#F7DF1E]",
    colStart: "",
  },
  {
    name: "React JS",
    bg: "bg-[#61DAFB]",
    text: "text-slate-900",
    level: "Intermediate",
    levelColor: "text-[#61DAFB]",
    colStart: "col-start-1",
  },
  {
    name: "Redux",
    bg: "bg-[#764ABC]",
    text: "text-white",
    level: "Intermediate",
    levelColor: "text-[#764ABC]",
    colStart: "",
  },
  {
    name: "Tailwind CSS",
    bg: "bg-[#38B2AC]",
    text: "text-slate-900",
    level: "Intermediate",
    levelColor: "text-[#38B2AC]",
    colStart: "",
  },
  {
    name: "Fetch API",
    bg: "bg-[#22C55E]",
    text: "text-white",
    level: "Intermediate",
    levelColor: "text-[#22C55E]",
    colStart: "col-start-2",
  },
  {
    name: "Git/GitHub",
    bg: "bg-[#333333]",
    text: "text-white",
    level: "Competent",
    levelColor: "text-gray-300",
    colStart: "",
  },
];

const floatVariants = (index) => ({
  animate: {
    y: [0, index % 2 === 0 ? -8 : -12, 0],
    x: [0, index % 3 === 0 ? 4 : -4, 0],
    rotate: [0, index % 2 === 0 ? 2 : -2, 0],
    transition: {
      duration: 2 + index * 0.3,
      repeat: Infinity,
      ease: "easeInOut",
      delay: index * 0.2,
    },
  },
});

//  Device check 
const isTouchDevice = () => window.matchMedia("(hover: none)").matches;

function SkillCard({ skill, index }) {
  const [flipped, setFlipped] = useState(false);
  const isTouch = isTouchDevice();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      variants={floatVariants(index)}
      animate="animate"
      whileHover={{
        scale: 1.15,
        y: 0,
        x: 0,
        rotate: 0,
        transition: { duration: 0.2 },
      }}
      // Mobile
      onTap={() => {
        if (isTouch) {
          setFlipped(true); // flip karo
          setTimeout(() => setFlipped(false), 1200); // 2s baad wapas
        }
      }}
      
      onHoverStart={() => {
        if (!isTouch) setFlipped(true);
      }}
      onHoverEnd={() => {
        if (!isTouch) setFlipped(false);
      }}
      className={`col-span-2 ${skill.colStart} h-10 w-[100px] [perspective:1000px] cursor-pointer`}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative h-full w-full rounded-lg shadow-md"
      >
        {/* Front */}
        <div
          className={`absolute inset-0 flex items-center justify-center p-1 text-center rounded-lg ${skill.bg} ${skill.text} text-sm font-bold leading-tight`}
          style={{ backfaceVisibility: "hidden" }}
        >
          {skill.name}
        </div>
        {/* Back */}
        <div
          className={`absolute inset-0 flex items-center justify-center rounded-lg bg-slate-800 ${skill.levelColor} text-sm font-semibold`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {skill.level}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Skills() {
  return (
    <section className="flex flex-col items-center py-3 bg-primary w-full justify-start">
      <motion.h2
        initial={{ y: -10, opacity: 0, scale: 0.8 }}
        whileInView={{
          y: 0,
          opacity: 1,
          scale: 1,
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
        viewport={{ once: true, amount: 0.3 }}
        className="font-nunito text-4xl font-bold text-heading pt-3 pb-1"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-6 gap-3 p-6 w-full rounded-xl place-items-center md:gap-5 md:w-max">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
