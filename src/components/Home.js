import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import resume from "../assets/resume.pdf";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
  FaLinkedin
} from "react-icons/fa";
const Home = () => {
  return (
    <>
      <div className="main">
        <div className="content_area">
        <div className="text1">
          <h3 >
            This is <span>Tausif Arif</span>
          </h3>
          </div>
          <h4 className="texts">
          <span className="text2"> I am a</span> <span className="span_text">Web Developer</span>
          </h4>
          <Link to="/about" className="btns btn_know_more">Know More</Link>
        

          <a href={resume} download="tausif-arif.pdf" className="btns btn_dwn_resume"> Download Resume </a>
          <div className="social_icons">
            <div className="icons"> 
            <a className="social_link" href="https://www.facebook.com/stausif1920" rel="noreferrer" target="_blank"> <FaFacebookSquare className="fb_icon" /></a> 
            </div>
            <div className="icons">
            <a  className="social_link" href="https://twitter.com/__tausif" rel="noreferrer" target="_blank"><FaTwitterSquare className="twitter_icon" /></a> 
            </div>
            <div className="icons">
             <a className="social_link" href="https://github.com/tausif-arif" rel="noreferrer" target="_blank"><FaGithubSquare className="github_icon" /></a> 
            </div>
            <div className="icons">
            <a className="social_link" href="https://www.linkedin.com/in/tausif-arif-a7434018a/" rel="noreferrer" target="_blank"><FaLinkedin className="github_icon" /></a> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
