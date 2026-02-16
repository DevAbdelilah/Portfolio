import React from "react";
import { useAppSelector } from "../../hooks/redux";
import "./About.css";

const About: React.FC = () => {
  const { personalInfo } = useAppSelector((state) => state.portfolio);

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Frontend Developer from {personalInfo.location},
              with a Bachelor's Degree in Computer Science. I specialize in
              building modern, responsive web applications that deliver
              exceptional user experiences.
            </p>
            <div className="stats">
              <div className="stat">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>50K+</h3>
                <p>Users Served</p>
              </div>
              <div className="stat">
                <h3>103</h3>
                <p>GitHub Contributions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
