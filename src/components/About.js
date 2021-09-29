import React from "react";
import "../App.css";
import Pic from "../assets/profile.png";
const About = () => {
  return (
    <div className="about_section">
      <div className="profile">
        <img className="abt_img" src={Pic} alt="images" />
      </div>
      <div className="inner_abt">
        <p className="abt_text">
          Hi! I am Tausif Arif.I am a fresher in web development. My Education
          qualification is BCA(Bachelor of Computer Application). I have diverse
          set of skills ranging from design to HTML + CSS + JAVASCRIPT, all the
          way to REACTJS and also idea about oracle.I am ready to handle
          multiple task on a daily basis and always eager to learn new skill so
          that i give my best to my organization.
        </p>
      </div>
    </div>
  );
};

export default About;
