import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useMotionValueEvent, animate, useInView } from "framer-motion"; 

function CountUp({ target, suffix }) {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true }); 

  useMotionValueEvent(count, "change", (latest) => {
    setDisplay(Math.round(latest));
  });

  useEffect(() => {
    if (inView) {
      animate(count, target, { duration: 2, ease: "easeOut" });
    }
  }, [inView, count, target]);

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
}

export default function About() {
  const stats = [
    { target: 500, suffix: "+", label: "LinkedIn Connections" },
    { target: 3, suffix: "+", label: "Projects Built" },
    { target: 2, suffix: "+", label: "Certifications" },
  ];

  const traits = [
    "Clean Code",
    "Responsive Design",
    "Problem Solver",
    "Fast Learner",
  ];

  return (
    <section className="w-full py-16 px-4 bg-[#FFFFFF]" id="about">
      <motion.div
       initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
       className="max-w-4xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-gray-500 font-bold mb-1 font-nunito">
          Get To Know Me
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-6">
          <div className="flex flex-col justify-center">
            <h2 className="font-nunito text-3xl md:text-4xl font-extrabold text-[#111111] mb-6 leading-tight">
              Passionate about{" "}
              <span style={{ color: "#0873B9" }}>building</span>{" "}
              for the web.
            </h2>

            <p className="font-nunito text-sm md:text-base text-gray-800 leading-relaxed mb-4">
              I'm a{" "}
              <span className="text-[#111111] font-bold">BSCS student</span>{" "}
              focused on modern frontend development.
              I enjoy turning ideas into clean, responsive interfaces that
              actually feel good to use.
            </p>

            <p className="font-nunito text-sm md:text-base text-gray-800 leading-relaxed mb-8">
              Right now I'm deepening my skills in{" "}
              <span className="text-[#111111] font-bold">
                React, JavaScript
              </span>
              and the{" "}
              <span className="text-[#111111] font-bold">MERN stack</span>
              — building real projects along the way to grow as a developer.
            </p>

            <div className="flex flex-wrap gap-2">
              {traits.map((t, i) => (
                <span
                  key={i}
                  className="font-nunito text-xs font-bold px-4 py-1.5 rounded-full border text-[#111111] border-gray-300 bg-white shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="border-l-4 pl-5" style={{ borderColor: "#0873B9" }}>
              <p className="font-nunito text-base md:text-lg italic text-gray-700 font-medium leading-relaxed">
                "Every expert was once a beginner — I'm committed to the
                journey."
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-2">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <motion.span className="font-nunito text-3xl font-extrabold text-[#111111]">
                    <CountUp target={s.target} suffix={s.suffix} />
                  </motion.span>
                  
                  <span className="font-nunito text-xs text-gray-600 font-bold leading-tight">
                    {s.label}
                  </span>
                  <div className="mt-1 h-[3px] w-8 rounded-full" style={{ backgroundColor: "#0873B9" }} />
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-start gap-4 py-4 border-t border-gray-200">
              <div className="mt-0.5 w-2.5 h-2.5 rounded-full animate-pulse flex-shrink-0" style={{ backgroundColor: "#0873B9" }} />
              <div>
                <p className="font-nunito text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">
                  Currently Learning
                </p>
                <p className="font-nunito text-sm font-bold text-[#111111]">
                  MERN Stack — Node JS, Express JS, MongoDB
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 py-4 border-t border-gray-200">
              <div className="mt-0.5 w-2.5 h-2.5 rounded-full animate-pulse flex-shrink-0" style={{ backgroundColor: "#091841" }} />
              <div>
                <p className="font-nunito text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">
                  Status
                </p>
                <p className="font-nunito text-sm font-bold text-[#111111]">
                  Open to Junior Frontend Developer roles
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}