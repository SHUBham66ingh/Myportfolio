import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

export default function Skills() {
  const skills = [
    {
      name: "Web Development",
      icon: "🌐",
      desc: "Building responsive and modern web applications.",
    },
    {
      name: "Frontend",
      icon: "⚛️",
      desc: "Expertise in React, Tailwind, JavaScript, and UI design.",
    },
    {
      name: "Backend",
      icon: "🗄️",
      desc: "Node.js, Express, MongoDB, REST APIs, and authentication.",
    },
    {
      name: "Blockchain",
      icon: "🔗",
      desc: "Hands-on experience with Solana and smart contracts.",
    },
    {
      name: "Problem Solving",
      icon: "🧠",
      desc: "Strong foundation in DSA, coding contests, and algorithms.",
    },
    {
      name: "Database",
      icon: "💾",
      desc: "MySQL, MongoDB, and database schema design.",
    },
    {
      name: "SQL",
      icon: "📊",
      desc: "Proficient in writing queries, joins, and database optimization.",
    },
    {
      name: "Operating System",
      icon: "💻",
      desc: "Understanding of processes, threads, memory, and file systems.",
    },
    {
      name: "OOPs",
      icon: "📘",
      desc: "Strong grasp of Object-Oriented Programming concepts.",
    },
    {
      name: "Networking",
      icon: "🌐",
      desc: "Knowledge of TCP/IP, HTTP/HTTPS, DNS, and socket programming.",
    },
    {
      name: "Git & GitHub",
      icon: "🔧",
      desc: "Version control, branching, and collaboration with Git.",
    },
    {
      name: "Cloud Basics",
      icon: "☁️",
      desc: "Introduction to cloud computing concepts and deployment.",
    },
  ];

  return (
    <>
      <Header />
      <section className="min-h-screen py-20 px-6 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-gray-900 dark:text-white tracking-wide">
            <span className="text-blue-400">T</span>echnical Expertise
          </h2>

          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-12 text-center transform hover:scale-105 transition duration-300 min-h-[350px]"
              >
                <div className="text-8xl mb-6">{skill.icon}</div>
                <h3 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-100">
                  {skill.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg md:text-xl">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
