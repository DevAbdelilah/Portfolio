import React from "react";
import { useAppSelector } from "../../hooks/redux";
import "./Hero.css";

const Hero: React.FC = () => {
  const { personalInfo } = useAppSelector((state) => state.portfolio);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi there 👋</h1>
          <h2>
            I'm <span className="highlight">{personalInfo.name}</span>
          </h2>
          <p className="hero-subtitle">{personalInfo.title}</p>
          <p className="hero-description">{personalInfo.description}</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a
              href={personalInfo.github}
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-image">
            <img
              src="https://avatars.githubusercontent.com/u/DevAbdellah"
              alt={personalInfo.name}
              onError={(e) => {
                // Fallback image if GitHub avatar fails
                e.currentTarget.src =
                  "https://via.placeholder.com/250x250/00d4aa/ffffff?text=AC";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
