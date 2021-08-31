import React from "react";
import "../App.css";
import weatherimg from "./layout/weather.png";
import clicksimg from "./layout/clicks.png";
import WorkCard from "./layout/WorkCard";


const Work = () => {
  return (
    <div className="main_work">
      <h1 style={{textAlign:"center",marginTop:"20px",textTransform:" uppercase",fontSize:"1rem"}}>check out some of my work</h1>
      <div className="workContainer">
      <WorkCard title="Weather 1.0" desc="a weather app" img={weatherimg} />
      <WorkCard title="Clicks" desc="an unsplash clone" img={clicksimg}/>
      
      </div>
    </div>
  );
};

export default Work;
