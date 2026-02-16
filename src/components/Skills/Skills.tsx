import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { Skill } from "../../types";

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

  const getSkillLevelColor = (level: string) => {
    switch (level) {
      case "expert":
        return "bg-green-500";
      case "intermediate":
        return "bg-yellow-500";
      default:
        return "bg-blue-500";
    }
  };

  const getSkillLevelWidth = (level: string) => {
    switch (level) {
      case "expert":
        return "w-full";
      case "intermediate":
        return "w-3/4";
      default:
        return "w-1/2";
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div
              key={category}
              className="bg-gray-900 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6 text-teal-400 text-center">
                {category}
              </h3>
              <div className="space-y-4">
                {categorySkills.map((skill) => (
                  <div key={skill.id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-400 capitalize">
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${getSkillLevelColor(
                          skill.level
                        )} ${getSkillLevelWidth(skill.level)}`}
                      ></div>
                    </div>
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
