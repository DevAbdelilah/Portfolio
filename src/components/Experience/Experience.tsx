import React from "react";
import { useAppSelector } from "../../hooks/redux";
import "./Experience.css";

const Experience: React.FC = () => {
  const { experiences } = useAppSelector((state) => state.portfolio);

  return (
    <section id="experience" className="section bg-dark">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <p className="timeline-period">{exp.period}</p>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
