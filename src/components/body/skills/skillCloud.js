import React from "react";
import ReactWordcloud from "react-wordcloud";
import "./skills.css";

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

import words from "./skill-words";

const options = {
  colors: ["#4d1a7f", "#6c4094", "#8a64a9", "#a789be", "#c5afd4", "#e2d7e9"],
  enableTooltip: true,
  deterministic: false,
  fontFamily: "impact",
  fontSizes: [15, 60],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 1,
  rotations: 2,
  rotationAngles: [0, 90],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 1000
};

function SkillCloud() {
  return (
    <div>
      <div className="skill-cloud">
        <ReactWordcloud options={options} words={words} />
      </div>
    </div>
  );
}

export default SkillCloud;
