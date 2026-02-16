import React from "react";
import { useAppSelector } from "../../hooks/redux";

const Contact: React.FC = () => {
  const { personalInfo } = useAppSelector((state) => state.portfolio);

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Get In Touch
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl text-gray-300 mb-8">
              I'm always open to discussing new opportunities and interesting
              projects. Feel free to reach out if you'd like to work together!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-envelope text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-teal-400 hover:text-teal-300 transition-colors duration-300"
              >
                {personalInfo.email}
              </a>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-phone text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-teal-400 hover:text-teal-300 transition-colors duration-300"
              >
                {personalInfo.phone}
              </a>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-map-marker-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Location
              </h3>
              <span className="text-gray-300">{personalInfo.location}</span>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors duration-300 group"
            >
              <i className="fab fa-github text-gray-300 group-hover:text-white text-xl"></i>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-12 h-12 bg-gray-800 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors duration-300 group"
            >
              <i className="fas fa-envelope text-gray-300 group-hover:text-white text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
