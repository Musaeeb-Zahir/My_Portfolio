import { useState } from "react";
import developerHub from "../assets/certifications/1.jpg";
import smit from "../assets/certifications/2.jpg";
import {motion} from "motion/react"
function Certifications() {
    const [activeIndex, setActiveIndex] = useState(null);
  const certifications = [
    {
      company: "DeveloperHub Corporation",
      title: "Frontend Developer Intern",
      description:
        "Built an online store where users can easily filter products by category, brand, and price. Created a live shopping cart that updates totals instantly and a save for later wishlist.",
      duration: "Dec 2025 – Feb 2026",
      img: developerHub,
      themeColor: "#091841",
    },
    {
      company: "Saylani Mass IT Training",
      title: "MERN Stack",
      description:
        "Learning to build complete websites from start to finish using the MERN stack. Working on practical projects to make fast, responsive, and user-friendly web applications.",
      duration: "Dec 2025 – Aug 2026",
      img: smit,
      themeColor: "#0873B9",
    },
  ];
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col items-center py-10 w-full bg-primary relative">

        <motion.h2
        initial={{ y: -10, opacity: 0, scale: 0.8 }}
        whileInView={{
          y: 0,
          opacity: 1,
          scale: 1,
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
        viewport={{ once: "true", amount: 0.3 }}
        className="font-nunito text-4xl align-baseline font-bold text-heading pt-3 pb-1 mb-8"
      >
        Certifications
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-6 px-4 z-10">

        {certifications.map((item, index) => {
          const isActive = activeIndex === index;
        return  <motion.article
           initial={{ opacity:0, scale:0.8 }} whileInView={{ opacity:1, scale:1 ,transition:{type:'spring',duration:0.4}}}
           viewport={{once:"true"}}
            key={index}
            className="w-[90vw] md:w-90 md:h-90 relative group overflow-hidden rounded-xl shadow-md cursor-pointer"
             onClick={() => handleToggle(index)}
          >
            <div className="w-full h-[70%] overflow-hidden">
              <img
                src={item.img}
                alt={`${item.company} certificate`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div
              className={`absolute w-full h-full flex flex-col justify-center
                            gap-1 px-4 py-3 transition-all duration-500 ease-in-out
                            ${isActive ? "top-0" : "top-[65%]"}
                            md:group-hover:top-0 md:top-[65%] `}
              style={{ backgroundColor: item.themeColor }}
            >
              <div className={`absolute top-0 left-0 px-4 flex flex-col justify-center ${isActive ?"opacity-0":"opacity-100"} md:group-hover:opacity-0 transition-opacity duration-500 w-[100%] h-[35%]`} style={{backgroundColor:item.themeColor}}>
              <h3 className="font-nunito font-bold text-white text-base md:text-lg leading-tight ">
                {item.company}
              </h3>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 ">
                <h4 className="font-nunito text-sm font-semibold text-white/90">
                  {item.title}
                </h4>
                <span className="text-xs text-white/60 font-nunito">
                  {item.duration}
                </span>
              </div>
              </div>
              <h3 className="font-nunito font-bold text-white text-base md:text-lg leading-tight group-hover:opacity-100 transition-opacity duration-800 mt-3">
                {item.company}
              </h3>

              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <h4 className="font-nunito text-sm font-semibold text-white/90">
                  {item.title}
                </h4>
                <span className="text-xs text-white/60 font-nunito">
                  {item.duration}
                </span>
              </div>

              <p className="text-xs md:text-sm text-white/75 font-nunito italic leading-snug line-clamp-4">
                {item.description}
              </p>
            </div>
            {!isActive && (
                <div className="absolute top-2 right-3 md:hidden">
                  <span className="text-[10px] text-white/80 bg-black/30 px-2 py-0.5 rounded-full">
                    Tap to view
                  </span>
                </div>
              )}
          </motion.article>}
        )}
      </div>
    </section>
  );
}

export default Certifications;
