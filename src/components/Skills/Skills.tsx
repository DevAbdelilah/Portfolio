import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { Skill } from "../../types";
import "./Skills.css";

const Skills: React.FC = () => {
  const { skills } = useAppSelector((state) => state.portfolio);

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const getSkillLevelClass = (level: string) => {
    switch (level) {
      case "expert":
        return "expert";
      case "intermediate":
        return "intermediate";
      default:
        return "beginner";
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <div className="skills-list">
                {categorySkills.map((skill) => (
                  <div
                    key={skill.id}
                    className={`skill-item ${getSkillLevelClass(skill.level)}`}
                  >
                    <span>{skill.name}</span>
                    <div className="skill-level"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
