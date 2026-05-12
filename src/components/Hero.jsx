import React, { useEffect, useRef } from "react";
import { FaArrowDown, FaWhatsapp } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import myLogo from "../assets/myLogo.png";
import { IoMdDownload } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import cv from "../assets/cv.pdf";
import { motion } from "motion/react";
function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    // Canvas size
    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function rnd(min, max) {
      return Math.random() * (max - min) + min;
    }

    const TYPES = ["rect", "circle", "poly"];

    // 60 shapes
    function makeShape() {
      return {
        type: TYPES[Math.floor(Math.random() * TYPES.length)],
        sides: Math.floor(rnd(5, 8)),
        size: rnd(20, 80),
        x: rnd(0, window.innerWidth),
        y: rnd(0, window.innerHeight),
        vx: rnd(-0.3, 0.3),
        vy: rnd(-0.3, 0.3),
        rot: rnd(0, Math.PI * 2),
        vr: rnd(-0.005, 0.005),
        alpha: rnd(0.04, 0.18),
        color: Math.random() > 0.7 ? "#1E1E1E" : "#2C3939",
      };
    }

    const shapes = Array.from({ length: 90 }, makeShape);

    // Polygon
    function drawPoly(cx, cy, sides, r, rot) {
      ctx.beginPath();
      for (let i = 0; i < sides; i++) {
        const a = rot + (i / sides) * Math.PI * 2;
        i === 0
          ? ctx.moveTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r)
          : ctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
      }
      ctx.closePath();
    }

    // Animation loop
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const s of shapes) {
        ctx.save();
        ctx.globalAlpha = s.alpha;
        ctx.fillStyle = s.color;
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rot);

        if (s.type === "rect") {
          ctx.fillRect(-s.size / 2, -s.size / 2, s.size, s.size);
        } else if (s.type === "circle") {
          ctx.beginPath();
          ctx.arc(0, 0, s.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          drawPoly(0, 0, s.sides, s.size / 2, 0);
          ctx.fill();
        }

        ctx.restore();

        // Position aur rotation update
        s.x += s.vx;
        s.y += s.vy;
        s.rot += s.vr;

        if (s.x < -100) s.x = canvas.width + 100;
        if (s.x > canvas.width + 100) s.x = -100;
        if (s.y < -100) s.y = canvas.height + 100;
        if (s.y > canvas.height + 100) s.y = -100;
      }

      animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main
      className="relative w-full h-screen flex flex-col justify-center items-center bg-deep gap-5 px-4 overflow-hidden md:justify-center md:flex-row"
      id="hero"
    >
      <a
        href="https://wa.me/+923554218434"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-10 right-4 z-50 group md:bottom-14 md:right-10"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-60" />
        <span className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-transform duration-300">
          <FaWhatsapp className="text-white text-3xl" />
        </span>

        <span className="absolute right-16 bottom-3 bg-white text-gray-600 text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 shadow-sm border border-gray-100">
          Chat with me
        </span>
      </a>
      {/* Canvas — background in background*/}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <img
        src={myLogo}
        alt="logo"
        style={{ width: "60px", height: "60px" }}
        className="absolute top-3 left-4 cursor-pointer"
      />
      <a href={cv} download>
        {" "}
        <button className="text-white font-semibold text-xm px-1 py-2 rounded absolute top-4 right-4 w-12 flex gap-1 justify-center items-center transition-transform duration-300 hover:scale-105 cursor-pointer">
          <IoMdDownload className="text-sm transition-transform duration-700 hover:translate-y-[2px] animate-bounce" />
          CV
        </button>
      </a>

      <div className="relative z-10 flex flex-col justify-center gap-5 pl-7">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "backOut" },
          }}
          viewport={{ once: "true" }}
          className="font-nunito font-black text-xl tracking-tight text-white tracking-wide md:text-5xl"
        >
          MUSAEEB ZAHIR
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 ,duration:0.4 }}
          className="text-sm text-white font-nunito italic md:text-[16px] "
        >
          Junior Web Developer React | JS | Tailwind | Redux
        </motion.p>
        <div className="flex gap-4">
          <a href="#about" className="">
            {" "}
            <button className="bg-btn-gradient text-white font-semibold px-4 py-2 rounded relative transition-transform duration-300 hover:scale-105 cursor-pointer">
              About Me
              <FaArrowRightLong className="absolute top-[25%] right-[-14px] text-2xl transition-transform duration-700 hover:translate-x-2 hidden md:block " />
            </button>
          </a>
        </div>
      </div>
      <motion.img
       animate={{ y:[0,-10,0] }} transition={{ repeat:Infinity, duration:2, 
        ease:"easeInOut" }}
        src={myLogo}
        alt="logo"
        style={{ width: "400px", height: "400px" }}
        className="hidden md:block"
      />
      <a href="#project" className="absolute bottom-8">
        <button className="bg-btn-gradient text-white font-semibold px-4 py-2 rounded transition-transform duration-300 hover:scale-105 cursor-pointer">
          Recent Project
          <FaArrowDown className="absolute top-[110%] right-[35%] text-2xl transition-transform duration-700 hover:translate-y-[2px] animate-bounce" />
        </button>
      </a>
      <aside className="flex flex-col gap-4 absolute right-2 top-[40%]">
        <a href="https:www.linkedin.com/in/musaeebzahir" target="_blank">
          <FaLinkedinIn className="text-xl text-gray-400 md:text-2xl hover:text-gray-300" />
        </a>
        <a href="https://www.facebook.com/musaeeb.mzahir" target="_blank">
          <FaFacebook className="text-xl text-gray-400 md:text-2xl hover:text-gray-300" />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&to=musaeebzahir@gmail.com">
          <IoMailOutline className="text-xl text-gray-400 md:text-2xl hover:text-gray-300" />
        </a>
        <a href="https://github.com/Musaeeb-Zahir/" target="_blank">
          <FaGithub className="text-xl text-gray-400 md:text-2xl hover:text-gray-300" />
        </a>
      </aside>
    </main>
  );
}

export default Hero;
