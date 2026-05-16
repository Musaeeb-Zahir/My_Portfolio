import React from "react";
import { LuArrowUpRight } from "react-icons/lu";
import {motion} from "motion/react"
const experiences = [
  {
    company: "DeveloperHub Corporation",
    role: "Frontend Developer Intern",
    type: "7 weeks · Internship",
    location: "Remote",
    duration: "Dec 2025 – Feb 2026",
    description:
      "Built a fully functional e-commerce store with product filtering by category, brand, and price. Implemented a live shopping cart that updates totals instantly and a save-for-later wishlist feature.",
    tags: ["React JS", "Tailwind CSS", "Fetch API", "Git / GitHub"],
    color: "#091841",
    status: "completed",
    codeLink: "https://github.com/Musaeeb-Zahir/FrontEnd_Project",
  },
  {
    company: "Saylani Mass IT Training",
    role: "MERN Stack Trainee",
    type: "In progress · Training",
    location: "Rawalpindi",
    duration: "Dec 2025 – Aug 2026",
    description:
      "Learning to build complete web applications using the MERN stack. Working on practical projects focused on performance, responsiveness, and real-world problem solving.",
    tags: ["MongoDB", "Express JS", "React JS", "Node JS"],
    color: "#0873B9",
    status: "progress",
    codeLink: "",
  },
];

export default function Experience() {
  return (
    <section className="w-full py-16 px-4 bg-primary">
      <div className="max-w-5xl mx-auto">
        
        <p className="text-xs tracking-widest uppercase text-gray-500 mb-1 font-nunito">
          Work History
        </p>
        <h2 className="font-nunito text-3xl md:text-4xl font-bold text-[#111111] mb-10">
          My <span style={{ color: "#0873B9" }}>Experience</span>
        </h2>

        <div className="relative pl-7">
          <div className="absolute left-[6px] top-2 bottom-2 w-[1.5px] bg-slate-700" />

          {experiences.map((item, index) => (
            <motion.article 
            initial={{ opacity:0, x:-60 }} whileInView={{ opacity:1, x:0 }} transition={{ staggerChildren:0.9 }}
            viewport={{once:"true"}}
            key={index} className="relative mb-10 last:mb-0">
              
              <div
                className="absolute -left-7 top-1.5 w-3.5 h-3.5 rounded-full bg-slate-50 border-2 flex items-center justify-center"
                style={{ borderColor: item.color }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
              </div>

              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1">
                <span
                  className="text-sm font-bold font-nunito tracking-wide"
                  style={{ color: item.color }}
                >
                  {item.company}
                </span>
                <span className="text-gray-400 text-xs">·</span>
                <span className="text-xs font-nunito text-gray-600 font-medium">
                  {item.location}
                </span>
                <span className="text-gray-400 text-xs">·</span>
                <span className="text-xs font-nunito text-gray-600 font-medium">
                  {item.duration}
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                <h3 className="font-nunito text-lg md:text-xl font-bold text-[#111111]">
                  {item.role}
                </h3>

                {item.codeLink && (
                  <a
                    href={item.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold text-[#111111] bg-white border border-gray-200 shadow-sm px-3 py-1.5 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <LuArrowUpRight />
                    Code
                  </a>
                )}
              </div>

              <span
                className="inline-flex items-center gap-1.5 text-[11px] font-nunito font-bold px-3 py-1 rounded-full mb-3 border"
                style={{
                  color: item.color,
                  borderColor: item.color + "40",
                  backgroundColor: item.color + "10",
                }}
              >
                {item.status === "progress" ? "⏳" : "✓"} {item.type}
              </span>

              <p className="text-sm font-nunito text-[#111111] leading-relaxed mb-4">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-nunito font-semibold px-3 py-1 rounded-full border text-[#111111] border-gray-300 bg-white shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {index < experiences.length - 1 && (
                <div className="mt-8 h-px bg-gray-200" />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}