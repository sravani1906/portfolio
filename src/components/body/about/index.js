import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hi There 👋, I am <br />
          <span className="info-name">Sravani Gandla</span>.<br /> I enjoy
          Frontend development and <br />
          enthusiastic to learn new JS frameworks.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/image/coding.png").default}
            alt="Sravani Gandla"
            className="mainPicture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
