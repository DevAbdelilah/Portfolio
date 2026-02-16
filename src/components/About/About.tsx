import React from "react";
import { useAppSelector } from "../../hooks/redux";

const About: React.FC = () => {
  const { personalInfo } = useAppSelector((state) => state.portfolio);

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              I'm a passionate Frontend Developer from {personalInfo.location},
              with a Bachelor's Degree in Computer Science. I specialize in
              building modern, responsive web applications that deliver
              exceptional user experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-teal-400 mb-2">5+</h3>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-teal-400 mb-2">50K+</h3>
                <p className="text-gray-400">Users Served</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-teal-400 mb-2">103</h3>
                <p className="text-gray-400">GitHub Contributions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
