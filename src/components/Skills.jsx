import React, { useRef } from "react";
import { motion } from "motion/react";
function Skills() {
  return (
    <section
      className="flex flex-col items-center py-3 bg-primary w-full justify-start"
      
    >
      <motion.h2
        initial={{ y: -10, opacity: 0, scale: 0.8 }}
        whileInView={{
          y: 0,
          opacity: 1,
          scale: 1,
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
        viewport={{ once: "true", amount: 0.3 }}
        className="font-nunito text-4xl align-baseline font-bold text-heading pt-3 pb-1 "
      >
        Skills
      </motion.h2>
      <div className="grid grid-cols-6 gap-3 p-6 w-full rounded-xl place-items-center md:gap-5 md:w-max">
        <div
          className="col-span-2 col-start-2 group h-10 w-[100px] [perspective:1000px] cursor-pointer"
        >
          <div className="relative h-full w-full rounded-lg shadow-md transition-all duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0 flex items-center justify-center p-1 text-center rounded-lg bg-orange-500 text-white text-sm font-bold leading-tight [backface-visibility:hidden]">
              HTML | CSS
            </div>
            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-slate-800 text-white text-sm font-semibold [transform:rotateY(180deg)] [backface-visibility:hidden]">
              Expert
            </div>
          </div>
        </div>

        <div className="col-span-2 group h-10 w-[100px] [perspective:1000px] cursor-pointer">
          <div className="relative h-full w-full rounded-lg shadow-md transition-all duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0 flex items-center justify-center p-1 text-center rounded-lg bg-[#F7DF1E] text-black text-sm font-bold leading-tight [backface-visibility:hidden]">
              JavaScript
            </div>
            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-slate-800 text-[#F7DF1E] text-sm font-semibold  [transform:rotateY(180deg)] [backface-visibility:hidden]">
              Advanced
            </div>
          </div>
        </div>

        <div className="col-span-2 col-start-1 group h-10 w-[100px] [perspective:1000px] cursor-pointer">
          <div className="relative h-full w-full rounded-lg shadow-md transition-all duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0 flex items-center justify-center p-1 text-center rounded-lg bg-[#61DAFB] text-slate-900 text-sm font-bold leading-tight [backface-visibility:hidden]">
              React JS
            </div>
            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-slate-800 text-[#61DAFB] text-sm font-semibold [transform:rotateY(180deg)] [backface-visibility:hidden]">
              Intermediate
            </div>
          </div>
        </div>

        <div className="col-span-2 group h-10 w-[100px] [perspective:1000px] cursor-pointer">
          <div className="relative h-full w-full rounded-lg shadow-md transition-all duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0 flex items-center justify-center p-1 text-center rounded-lg bg-[#764ABC] text-white text-sm font-bold leading-tight [backface-visibility:hidden]">
              Redux
            </div>
            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-slate-800 text-[#764ABC] text-sm font-semibold [transform:rotateY(180deg)] [backface-visibility:hidden]">
              Intermediate
            </div>
          </div>
        </div>

        <div className="col-span-2 group h-10 w-[100px] [perspective:1000px] cursor-pointer">
          <div className="relative h-full w-full rounded-lg shadow-md transition-all duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0 flex items-center justify-center p-1 text-center rounded-lg bg-[#38B2AC] text-slate-900 text-sm font-bold leading-tight [backface-visibility:hidden]">
              Tailwind CSS
            </div>
            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-slate-800 text-[#38B2AC] text-sm font-semibold [transform:rotateY(180deg)] [backface-visibility:hidden]">
              Intermediate
            </div>
          </div>
        </div>

        <div className="col-span-2 col-start-2 group h-10 w-[100px] [perspective:1000px] cursor-pointer">
          <div className="relative h-full w-full rounded-lg shadow-md transition-all duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0 flex items-center justify-center p-1 text-center rounded-lg bg-[#22C55E] text-white text-sm font-bold leading-tight [backface-visibility:hidden]">
              Fetch API
            </div>
            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-slate-800 text-[#22C55E] text-sm font-semibold [transform:rotateY(180deg)] [backface-visibility:hidden]">
              Intermediate
            </div>
          </div>
        </div>

        <div className="col-span-2 group h-10 w-[100px] [perspective:1000px] cursor-pointer">
          <div className="relative h-full w-full rounded-lg shadow-md transition-all duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0 flex items-center justify-center p-1 text-center rounded-lg bg-[#333333] text-white text-sm font-bold leading-tight [backface-visibility:hidden]">
              Git/GitHub
            </div>
            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-slate-800 text-gray-300 text-sm font-semibold [transform:rotateY(180deg)] [backface-visibility:hidden]">
              Competent
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
