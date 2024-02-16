import React, { useRef, useEffect } from "react";
import "../css/Connectingpage.css";
import { NavLink } from "react-router-dom";
import Navbar from "../homeComponents/Navbar.js";
import StorywriterA from "../Images/StorywriterA.png";
import StoryWriterB from "../Images/StoryWriterB.png";
import Timeline from "./Timeline.js";

const Connectingpage = () => {
  const h1Ref = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    const spanText = (text) => {
      let string = text.innerText;
      let spanned = "";
      for (let i = 0; i < string.length; i++) {
        if (string.substring(i, i + 1) === " ")
          spanned += string.substring(i, i + 1);
        else spanned += "<span>" + string.substring(i, i + 1) + "</span>";
      }
      text.innerHTML = spanned;

      let animations = text.querySelectorAll("span");
      animations.forEach((letter, i) => {
        letter.style.animationDelay = i * 0.1 + "s";
      });
    };

    if (h1Ref.current) {
      spanText(h1Ref.current);
    }

    if (pRef.current) {
      spanText(pRef.current);
    }
  }, []);

  return (
    <>
      <div className="c-f">
        <div className="nav-sani">
          <Navbar />
        </div>

        <div className="story-tell-main">
          <ul className="navbar-ul">
            <marquee>
              {" "}
              <div className="mrq">
                {" "}
                <span>Connect With Community | </span>
                <span>Start sharing your stories | </span>
                <span>Welcome the recognition | </span>
                <span>As You growth, Join your featured profiles </span>
              </div>  
            </marquee>
          </ul>
          <div className="section2Content-a">
            <h1 className="animations" ref={h1Ref}>
              Connecting Story Writers  With Story Tellers !
            </h1>
            <p>Come join our Club</p>
          </div>
          <div className="Connecting-btns">
            <div className="cnct-btns">
              <NavLink to="/StFrstpage">
                <button className="btn-connect">Im a Story Teller </button>
              </NavLink>
              <NavLink to="/Swfirstpage">
                <button className="btn-connect">Im a Story Writer </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="connect-images">
          <img src={StoryWriterB} alt="" />
          <img src={StorywriterA} alt="" />
        </div>
      </div>
    </>
  );
};

export default Connectingpage;
