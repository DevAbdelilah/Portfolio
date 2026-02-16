import React from "react";
import { useAppSelector } from "../../hooks/redux";

const Hero: React.FC = () => {
  const { personalInfo } = useAppSelector((state) => state.portfolio);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-white">
              Hi there 👋
            </h1>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              I'm <span className="text-teal-400">{personalInfo.name}</span>
            </h2>
            <p className="text-2xl text-gray-300 mb-4">{personalInfo.title}</p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl">
              {personalInfo.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Get In Touch
              </button>
              <a
                href={personalInfo.github}
                className="border border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-teal-400 shadow-2xl">
                <img
                  src="https://avatars.githubusercontent.com/DevAbdelilah"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback image if GitHub avatar fails
                    e.currentTarget.src =
                      "https://via.placeholder.com/320x320/00d4aa/ffffff?text=AC";
                  }}
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
