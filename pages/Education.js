// src/components/Education.jsx
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

export default function Education() {
  const education = [
    {
      institute: "KIET Group of Institutions, Ghaziabad",
      degree: "B.Tech in Computer Science & Engineering",
      year: "2022 - 2026",
      desc: "Currently pursuing 3rd year with specialization in Web Development, Blockchain, and Problem Solving. Maintained strong academic performance with CGPA 8.0+.",
    },
    {
      institute: "Navy Children School",
      degree: "Class 12 (CBSE)",
      year: "2021 - 2022",
      desc: "Secured 96% in Class 12 with core subjects PCM (Physics, Chemistry, Mathematics). Awarded for academic excellence.",
    },
    {
      institute: "Navy Children School",
      degree: "Class 10 (CBSE)",
      year: "2019 - 2020",
      desc: "Achieved 96% in Class 10 with distinction in Mathematics and Science. Developed leadership and team skills through co-curricular activities.",
    },
  ];

  return (
    <>
      <Header />
      <section className="min-h-screen py-20 px-6 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          {/* Professional Heading */}
          <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-14 text-gray-900 dark:text-white tracking-wide">
   <span className="text-blue-400">E</span>ducation....
</h2>

          {/* Timeline Style Resume Boxes */}
          <div className="relative border-l-4 border-blue-600 dark:border-blue-400 ml-4">
            {education.map((edu, index) => (
              <div
                key={index}
                className="mb-12 ml-6 bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300"
              >
                {/* Timeline Circle */}
                <div className="absolute -left-4 w-8 h-8 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900"></div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                  {edu.institute}
                </p>
                <span className="inline-block mt-1 px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 text-sm font-semibold rounded">
                  {edu.year}
                </span>
                <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                  {edu.desc}
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
