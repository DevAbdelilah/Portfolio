import React from "react";
import { useAppSelector } from "../../hooks/redux";

const Experience: React.FC = () => {
  const { experiences } = useAppSelector((state) => state.portfolio);

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Work Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-teal-400"></div>

            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative flex items-start mb-12">
                {/* Timeline marker */}
                <div className="absolute left-6 w-4 h-4 bg-teal-400 rounded-full border-4 border-gray-900"></div>

                {/* Content */}
                <div className="ml-16 bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-teal-400 font-medium mb-4">{exp.period}</p>
                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
