import React from "react";
import { FaLinkedinIn, FaFacebook, FaGithub } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import logo from "../assets/myLogo.png"
export default function Footer() {
  return (
    <footer className="w-full py-8 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-1">

        <p className="text-gray-500 text-sm font-nunito font-medium">
          Musaeeb Zahir © 2026
        </p>

        <a 
          href="#hero" 
          className="group flex flex-col items-center justify-center p-2"
          aria-label="Scroll to top"
        >
          <div className="text-4xl font-extrabold text-[#0873B9] group-hover:-translate-y-1 transition-transform duration-300">
            <img src={logo} alt="" className="w-23"/>
          </div>
        </a>

        <div className="flex items-center gap-6 mt-2">
          <a 
            href="https://www.linkedin.com/in/musaeebzahir" 
            target="_blank" 
            rel="noreferrer" 
            className="text-gray-400 hover:text-[#0873B9] transition-colors duration-300"
          >
            <FaLinkedinIn className="text-xl md:text-2xl text-heading" />
          </a>
          
          <a 
            href="https://www.facebook.com/musaeeb.mzahir" 
            target="_blank" 
            rel="noreferrer" 
            className="text-gray-400 hover:text-[#0873B9] transition-colors duration-300"
          >
            <FaFacebook className="text-xl md:text-2xl text-heading" />
          </a>
          
          <a 
            href="https://mail.google.com/mail/?view=cm&to=musaeebzahir@gmail.com" 
            target="_blank" 
            rel="noreferrer" 
            className="text-gray-400 hover:text-[#0873B9] transition-colors duration-300"
          >
            <IoMailOutline className="text-xl md:text-2xl text-heading" />
          </a>
          
          <a 
            href="https://github.com/Musaeeb-Zahir/" 
            target="_blank" 
            rel="noreferrer" 
            className="text-gray-400 hover:text-[#111111] transition-colors duration-300"
          >
            <FaGithub className="text-xl md:text-2xl text-heading" />
          </a>
        </div>

      </div>
    </footer>
  );
}