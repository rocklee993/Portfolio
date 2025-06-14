import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

const FooterRPG = () => {
  return (
    <footer className="bg-[#1C1C1C] border-t-4 border-gray-700 text-white font-pixel py-10">
      <div className="flex flex-col items-center justify-center space-y-6">

        {/* Footer Title */}
        <h4 className="text-xl text-yellow-300 drop-shadow-[0_0_3px_rgba(255,255,0,0.7)]">Connect With Me</h4>

        {/* Links */}
        <div className="flex space-x-8 text-2xl">
          <a
            href="https://github.com/rocklee993"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-300 transition duration-300 ease-in-out"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/lyes-guebghid/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-300 transition duration-300 ease-in-out"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:guebghidlyes@yahoo.com.com"
            className="text-gray-400 hover:text-yellow-300 transition duration-300 ease-in-out"
          >
            <FaEnvelope />
          </a>

          <a
            href="/GUEBGHID.pdf" // Make sure this path matches your actual CV file
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-300 transition duration-300 ease-in-out"
          >
            <FaFileAlt />
          </a>
        </div>

        {/* Bottom Text */}
        <p className="text-sm text-gray-500 mt-4">© 2025 Lyes Guebghid. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterRPG;
