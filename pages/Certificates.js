import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

export default function Certificates() {
  const certificates = [
     {
  title: "Completed Nexus Course by Rohit Negi",
  desc: "Successfully completed the comprehensive Nexus web development course under the mentorship of Rohit Negi.",
  link: "https://generateinvoice.teachx.in/generatecertificate/certificate/rohitnegi_db/17556/12866/4", 
     },
    {
      title: "Solved more than 500 questions on all coding platforms",
      desc: "Showcasing strong problem-solving skills across multiple platforms.",
      link: "https://codolio.com/profile/shubham_sing18h",
    },
    {
      title: "Big Data Analytics with Hadoop and Apache Spark",
      desc: "Completed hands-on training and projects in Big Data technologies.",
      link: "https://ibb.co/vvCZxyCZ",
    },
    {
      title: "Database Foundations",
      desc: "Learned core database concepts including SQL, ER modeling, and normalization.",
      link: "https://i.ibb.co/PshFJpCF/Certificate-Of-Completion-Database-Foundations-Intro-to-Databases.jpg",
    },
    {
      title: "Operating System Basics",
      desc: "Completed training on Linux fundamentals, process management, and OS concepts.",
      link: "https://i.postimg.cc/1znqbhXc/Certificate-Of-Completion-Ubuntu-Linux-Operating-System-Basics.png",
    },
    {
      title: "Full-Stack Web Development",
      desc: "Training in React, Node.js, Express & MongoDB.",
      link: "https://i.postimg.cc/FsTG4vr2/Certificate-Of-Completion-Developing-for-Web-Performance.png",
    },
    {
      title: "MLSA Internship",
      desc: "Training in React, Node.js, Express & MongoDB.",
      link: "https://i.postimg.cc/FsTG4vr2/Certificate-Of-Completion-Developing-for-Web-Performance.png",
    },
    {
      title: "aws Cloud Academy",
      desc: "Training in React, Node.js, Express & MongoDB.",
      link: "https://i.postimg.cc/hPNgMkFq/Screenshot-2025-08-25-135532.png",
    },
  ];

  return (
    <>
      <Header />
      <section className="min-h-screen py-20 px-6 bg-gray-100 dark:bg-gray-900 flex justify-center items-start">
        <div className="max-w-4xl w-full">
          <h2 className="text-5xl font-extrabold text-center mb-8 text-gray-800 dark:text-gray-100">
            Certificates & Achievements
          </h2>

          {/* Scrollable Container */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 max-h-[600px] overflow-y-auto space-y-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="space-y-2 border-b border-gray-200 dark:border-gray-700 pb-4"
              >
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  {cert.desc}
                </p>
                {/* Individual Button */}
                <a
                  href={cert.link}
                  target="_blank"
                  className="inline-block px-6 py-2 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition duration-300 mt-2"
                >
                  View Certificate
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
