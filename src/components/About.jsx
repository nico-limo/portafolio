import React from "react";
//CSS
import "../styles/About.css";
//Local
import logo from "../images/profile.jpg";
//Icon
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <div className="about" id="aboutId">
      <div className="about__title">
        <div className="about__profilePic">
          <img src={logo} alt="" />
        </div>
        <div className="about__profileText">
          <h1>NICOLAS LIMONOFF</h1>
          <p>FullStack Developer especializado en *insertar variable</p>
          <a href="" className="button">
          Download CV
        </a>
        </div>
        
      </div>
      <a className="about__down" href="">
        <FontAwesomeIcon icon={faArrowCircleDown} />
      </a>
    </div>
  );
};

export default About;
