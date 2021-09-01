import React from "react";
import "./workcard.css";

const WorkCard = (props) => {
  return (
    <div className="container">
    <div className="card">
            <div className="img">
               <img src={props.img} alt={props.title}/>
            </div>
            <div className="top-text">
               <div className="name">
                 { props.title}
               </div>
               <p>
                  {props.desc}
               </p>
            </div>
            <div className="bottom-text">
               <div className="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quaerat iusto adipisci reprehenderit quasi cum perspiciatis, minima reiciendis magni quam!
               </div>
               <div className="btn">
                  <a href={props.url} target="_blank" rel="noreferrer"  >Know more</a>
               </div>
            </div>
         </div>
       
    </div>
  );
};

export default WorkCard;
