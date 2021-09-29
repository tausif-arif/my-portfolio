import React from "react";
import "../App.css";
import weatherimg from "./layout/weather.png";
import clicksimg from "./layout/clicks.png";
import google_cloneimg from "./layout/google_clone.png"
import WorkCard from "./layout/WorkCard";


const Work = () => {
  const link={
    clicks:"https://clicks-gallery.herokuapp.com/",
    weather:"https://reactweatherinfoapp.herokuapp.com/",
    google_clone:"https://my-google-search.herokuapp.com/"
  }
  return (
    <div className="main_work">
      <h1 style={{textAlign:"center",marginTop:"20px",textTransform:" uppercase",fontSize:"1rem"}}>check out some of my work</h1>
      <div className="workContainer">
      <WorkCard title="Weather 1.0" desc="a weather app" img={weatherimg} url={link.weather}/>
      <WorkCard title="Clicks" desc="an unsplash clone" img={clicksimg} url={link.clicks}/>
      <WorkCard title="Google 2.0" desc="google search engine clone" img={google_cloneimg}  url={link.google_clone}/>
      
      </div>
    </div>
  );
};

export default Work;
