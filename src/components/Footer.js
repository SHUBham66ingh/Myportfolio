import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-0 mt-0 shadow-inner">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left side - Brand/Logo */}
        <h3 className="text-3xl font-extrabold text-white tracking-wide">
          MyPortfolio
        </h3>
        
        {/* Center - Rights */}
        <p className="text-lg font-semibold mt-4 md:mt-0">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>

        {/* Right side - Social Icons */}
        <div className="flex gap-6 mt-4 md:mt-0 text-2xl">
          <a 
            href="https://github.com/SHUBham66ingh" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition transform hover:scale-125"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.instagram.com/shubham66ingh/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-pink-500 transition transform hover:scale-125"
          >
            <FaInstagram />
          </a>
          <a 
            href="mailto:shubham1041singh@gmail.com" 
            className="hover:text-blue-400 transition transform hover:scale-125"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
