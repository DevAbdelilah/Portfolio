import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setActiveSection } from "../../store/portfolioSlice";
import "./Header.css";

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
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <h2>{personalInfo.name}</h2>
        </div>
        <ul className="nav-menu">
          <li>
            <button
              className={activeSection === "home" ? "active" : ""}
              onClick={() => handleNavClick("home")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className={activeSection === "about" ? "active" : ""}
              onClick={() => handleNavClick("about")}
            >
              About
            </button>
          </li>
          <li>
            <button
              className={activeSection === "experience" ? "active" : ""}
              onClick={() => handleNavClick("experience")}
            >
              Experience
            </button>
          </li>
          <li>
            <button
              className={activeSection === "skills" ? "active" : ""}
              onClick={() => handleNavClick("skills")}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              className={activeSection === "projects" ? "active" : ""}
              onClick={() => handleNavClick("projects")}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className={activeSection === "contact" ? "active" : ""}
              onClick={() => handleNavClick("contact")}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
