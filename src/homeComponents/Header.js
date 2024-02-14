import React, { useRef, useEffect } from "react";
import "../css/Header.css";
import Navbar from "../homeComponents/Navbar.js";
import pickids from "../Images/pickids.png";
import { FaPlay } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Timeline from "./Timeline.js";
import { GoChevronRight } from "react-icons/go";
import { Link } from "react-scroll";
import LeftT from "../Images/LeftT.png";
import RightT from "../Images/RightT.png";
const Header = () => {
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
    <div className="time-line-header">
      <div className="header-main">
        <div className="nav-sani-headrer">
          <Navbar />
        </div>

        <div className="header">
          {/* <div className="three-btn">
           <NavLink to='/Hiring'><button className='btn'>More About Us</button></NavLink> 
            <FaPlay className='play-btn'/>
        </div> */}
          <ul className="navbar-ul-hdr">
            <li>Get your stories featured on Story Club in just Rs 49.</li>
          </ul>
          <div className="section2Content-a">
            <h1 className="animations" ref={h1Ref}>
              Real People . Real Stories
            </h1>
          </div>
          <p data-aos="fade-up" data-aos-easing="linear">
            Everybody has a Story to tell
          </p>
        </div>

        <div className="teacher-video">
          <img src={LeftT} alt="" />
          <div>
            <iframe
              title="Embedded Video"
              src="https://drive.google.com/file/d/1pjUV9cyiHr5VJFEdd-2cz2pZPlvsrL_f/preview"
              // width="100%"
              // height="400"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
          <img src={RightT} alt="" />
        </div>

        <Link to="connect">
          {" "}
          <button className="button">
            <div className="line-one">
              <h1>Slide to the Next page...</h1>
              <GoChevronRight />
              <GoChevronRight />
              <GoChevronRight />
              <GoChevronRight />
            </div>
            {/* <div class="line two">
  <GoChevronRight />

  </div>
  <div class="line three">
  <GoChevronRight />
  </div>
    <div class="line four">
    <GoChevronRight />
  </div>
    
    <div class="line five">
    <GoChevronRight />
  </div>
    
    <div class="line six">
    <GoChevronRight />
  </div>
    
    <div class="line seven">
    <GoChevronRight />
  </div> */}
          </button>
        </Link>
        {/* <div className="header-btns-for-redirect">
          <div className="btn-1">
            <NavLink to="/">
              <button>Audio Stories</button>
            </NavLink>
            <FaArrowRight className="icon-for-header" />
          </div>
          <div className="btn-1">
            <NavLink to="/">
              <button>video Stories</button>
            </NavLink>
            <FaArrowRight className="icon-for-header" />
          </div>
        </div> */}

        <div className="two-header-btns"></div>
      </div>
      
    </div>
  );
};

export default Header;
