import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "Who am I?", answer: "I’m Shubham Singh, a 4th-year CS student and full-stack web developer." },
  { question: "What technologies do I work with?", answer: "I work with React, Next.js, Tailwind, Node.js, Express, and MongoDB." },
  { question: "What projects have I built?", answer: "I’ve built projects like a Swiggy Clone, Weather App, Cricket Quiz, URL Shortener, TreeBio, and Enhanced Blockchain Video Calling (major project)." },
  { question: "Do I participate in hackathons?", answer: "Yes! I was selected in the top 25 teams in the SIH internal hackathon at my college." },
  { question: "What are my hobbies?", answer: "I love gymming, travelling, playing football and cricket" },
];




export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-12">
          <span className="text-pink-500"></span> Frequently Asked Questions
        </h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-700 pb-5 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">{faq.question}</h2>
                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-pink-500" : ""
                  }`}
                />
              </div>
              {openIndex === index && (
                <p className="mt-3 text-lg text-gray-300 leading-relaxed">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
