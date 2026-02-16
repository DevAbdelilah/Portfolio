import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setActiveSection } from "../../store/portfolioSlice";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { personalInfo, activeSection } = useAppSelector(
    (state) => state.portfolio
  );

  const handleNavClick = (section: string) => {
    dispatch(setActiveSection(section));

    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-teal-400">
            <h2>{personalInfo.name}</h2>
          </div>
          <ul className="hidden md:flex space-x-8">
            {[
              "home",
              "about",
              "experience",
              "skills",
              "projects",
              "contact",
            ].map((section) => (
              <li key={section}>
                <button
                  className={`capitalize transition-colors duration-300 hover:text-teal-400 ${
                    activeSection === section
                      ? "text-teal-400"
                      : "text-gray-300"
                  }`}
                  onClick={() => handleNavClick(section)}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
