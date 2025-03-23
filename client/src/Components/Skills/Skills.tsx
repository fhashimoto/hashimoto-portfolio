import { useMemo } from "react";
import { IconType } from "react-icons";
import { skillList } from "./skill-list";
import "./Skills.scss";

export const Skills = () => {
  const sortedSkills = useMemo(() => {
    return [...skillList].sort((a, b) => b.level - a.level);
  }, [skillList]);

  return (
    <section id="skills">
      <h2>Skill List</h2>
      <div className="skill-list-container">
        {sortedSkills.map((item) => {
          const Icon: IconType = item.icon;
          const levelPoints = Array.from({ length: 5 }, (_, index) =>
            index < item.level ? "point" : ""
          );

          return (
            <div key={item.name} className="skill-container">
              <label>
                <Icon size="2em" />
                <p>{item.name}</p>
              </label>
              <div className="class-level">
                {levelPoints.map((pointClass, index) => (
                  <div key={index} className={pointClass} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
