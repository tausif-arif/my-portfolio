import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import "../App.css";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Work from "./Work";
import Skill from "./Skill";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const navStyle = {
    textDecoration: "none",
    color: "#fff",
  };
  const bar = () => {
    console.log("clicked");
    const add_Nav = document.getElementById("navs");
    if (add_Nav.className === "navlist") {
      add_Nav.className ="resp_navbar";
    } else {
      add_Nav.className = "navlist";
    }
  };
  

  return (
    <>
      <div id="navs" className="navlist">
        <ul className="navbar" id="nav_ul">
          <li className="" >
            <NavLink className="navs" to="/" style={navStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navs" activeClassName="selected" style={navStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/skill" className="navs" style={navStyle}>
              Skill
            </NavLink>
          </li>
          <li>
            <NavLink className="navs" to="/work" style={navStyle}>
              Work
            </NavLink>
          </li>
          <li>
            <NavLink className="navs" to="/contact" style={navStyle}>
              Contact
            </NavLink>
          </li>
         
        </ul>
        <div className="bar">
            <a href="/#" onClick={bar}>
              <FaBars />
            </a>
          </div>
      </div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/skill" component={Skill}></Route>
        <Route path="/work" component={Work}></Route>
        <Route path="/contact" component={Contact}></Route>
      </Switch>
    </>
  );
};

export default Navbar;
