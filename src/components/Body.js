import { motion } from "framer-motion";

// import introImgDark from "../utils/images/img.png"; 

function Body() {
  return (
  
    <div className="min-h-[90vh] flex flex-col md:flex-row justify-start gap-16 px-8 md:px-20 pt-24 pb-0 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      
      {/* Profile Image */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative flex-shrink-0 flex flex-col items-center w-full md:w-1/2"
      >
        {/* Background Text */}
        <span className="absolute text-[6rem] md:text-[10rem] font-extrabold text-gray-800 opacity-20 select-none -z-10">
          Hello World
        </span>

        {/* Circular Profile Image */}
        <img 
          src="https://i.ibb.co/DHP8VBR9/immmmggg.jpg" 
          alt="Profile"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl relative z-10"
        />

        {/* Text Below Image */}

     <p className="mt-6 text-4xl md:text-5xl font-extrabold text-white tracking-wide drop-shadow-lg flex items-center gap-3">
  Hello All
  <span className="inline-block animate-wave">👋</span>
</p>




      </motion.div>

      {/* About Me Section */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-white">
          About Me
        </h2>
        <p className="text-xl md:text-2xl font-sans font-semibold leading-relaxed text-gray-100 mb-6">
          I’m <span className="font-bold">Shubham Singh</span>,  
          a dedicated <span className="font-bold">Web Developer</span> with expertise in modern web technologies.  
          I focus on creating <span className="font-bold">scalable, responsive, and high-performance applications</span>  
          using <span className="font-bold">React, Tailwind CSS, and Blockchain</span>.
        </p>

        <p className="text-xl md:text-2xl font-sans font-semibold leading-relaxed text-gray-100 mb-6">
          With a proven ability to solve complex challenges and deliver impactful projects,  
          I am passionate about transforming ideas into practical, user-focused digital solutions.  
          Outside of development, I bring the same discipline, teamwork, and strategic mindset I’ve learned  
          through sports like <span className="font-bold">football</span> and <span className="font-bold">cricket</span> —  
          driving both personal and professional growth. 
        </p>
      </motion.div>
  
    </div> 


  
  );
}

export default Body;


