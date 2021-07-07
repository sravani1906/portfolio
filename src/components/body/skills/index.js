import React from "react";
import "./skills.css";
//import { SkillsData } from "../../../data/skills";
//import SkillCard from "./skill-card";
import Separator from "../../common/separator";
import SkillCloud from "./skillCloud"
function Skills() {
  //const data = SkillsData;
  return (
    <div>
      <Separator />
      <label className="section-title">Skills</label>
      <div className="skills-top">
        <div className="skills-info">
          My main area of my expertise is Front-end development and it all started with ReactJS which I self taught.<br/> 
          I am currently focusing on backend development in my masters program at Arizona State University.
        </div>
        <div className="skill-cloud">
        <SkillCloud/>
        </div>
      </div>
    {/*
      <div className="skills-container">
        {data.map((item, idx) => {
          return (
            <div key={'skilltype'+idx} className="skills-section">
              <label className="skills-section-title">{item.type}</label>
              <div className="skills-list">
                {item.list.map((skill,idx) => {
                  return <SkillCard key={'skill'+idx} skill={skill} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
      */}
    </div>
  );
}

export default Skills;
