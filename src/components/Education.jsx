import React from "react";
import fuuast from "../assets/education/fuuast.png";
import college from "../assets/education/ps&cs.png"; 
import {motion} from "motion/react"
function Education() {
  return (
    <section className="flex flex-col items-center py-3 bg-primary w-full justify-start h-auto">
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
        Education
      </motion.h2>
      <div className="md:flex md:flex-row gap-6 md:mt-5">
      <motion.div 
      initial={{ opacity:0, x:-50 }} whileInView={{ opacity:1, x:0 }}
      viewport={{once:'true'}}
      className="w-full h-32 shadow-2xs flex pt-3 items-center px-6 gap-2 tarnsform hover:translate-y-[-3px] transition-all duration-150">
        <div>
          <img src={fuuast} alt="" className="w-23"/>
        </div>
        <div>
          <h3 className="text-sm text-green-800 font-semibold">FUUAST Islamabad</h3>
          <p className="italic font-nunito flex gap-3">BSCS<span className="text-gray-500 text-sm m">2024-2028</span> </p>
        </div>
      </motion.div>
      <motion.div
      initial={{ opacity:0, x:-50 }} whileInView={{ opacity:1, x:0 }}
      viewport={{
        once:'true'
      }}
       className="w-full h-32 shadow-2xs flex pt-3 items-center px-6 gap-2  tarnsform hover:translate-y-[-3px]  transition-all duration-150">
        <div>
          <img src={college} alt="" className="w-23"/>
        </div>
        <div>
          <h3 className="text-sm text-blue-800 font-semibold">Public school & college Skardu</h3>
          <p className="italic font-nunito flex gap-3">ICS<span className="text-gray-500 text-sm m">2021-2023</span> </p>
        </div>
      </motion.div>
      </div>
    </section>
  );
}

export default Education;
