import { Github, Linkedin, Mail, Globe, Code, FileText, Instagram } from "lucide-react";

function Profiles() {
  const profiles = [
    {
      name: "GitHub",
      icon: <Github className="w-10 h-10 text-white" />,
      link: "https://github.com/SHUBham66ingh",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-10 h-10 text-white" />,
      link: "https://www.linkedin.com/in/shubham66ingh/",
    },
    {
      name: "LeetCode",
      icon: <Code className="w-10 h-10 text-white" />,
      link: "https://leetcode.com/u/Shubham11_Singh/",
    },
    {
      name: "Portfolio",
      icon: <Globe className="w-10 h-10 text-white" />,
      link: "https://myportfolio-fn7l.vercel.app/",
    },
    {
      name: "Resume",
      icon: <FileText className="w-10 h-10 text-white" />,
      link: "https://drive.google.com/file/d/1rReXOBVhALC4uCqYTXFdzfC-DPaG0WmD/view?usp=sharing", // <-- place resume in public folder
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-10 h-10 text-white" />,
      link: "https://www.instagram.com/shubham66ingh/",
    },
    {
      name: "Email",
      icon: <Mail className="w-10 h-10 text-white" />,
      link: "https://mail.google.com/mail/u/0/#inbox",
    },
    {
      name : "Projects",
      icon : <Mail className="w-10 h-10 text-white" />,
       link: "https://swiggyshu.netlify.app/",

    }
  ];

  return (
    <section className=" min-h-[70vh] py-16 px-8 md:px-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-white">
        My Profiles
      </h2>
      
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {profiles.map((profile, index) => (
          <a
            key={index}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 
                       transform hover:scale-105 transition-transform duration-300 flex flex-col items-center"
          >
            {profile.icon}
            <h3 className="mt-4 text-xl font-bold text-white">{profile.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Profiles;
