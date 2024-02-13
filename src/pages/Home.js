import React, { useEffect, useRef } from "react";
import Header from "../homeComponents/Header";
import Navbar from "../homeComponents/Navbar";
import Connectingpage from "../homeComponents/Connectingpage.js";
import Workshop from "../homeComponents/Workshop.js";
import "../css/Home.css";
import LocomotiveScroll from "locomotive-scroll";
import Landingpage1 from "../homeComponents/LandingPage1/LandingPage1/LandingPage1.jsx";

const Home = () => {
  return (
    <div>
      <div className="horizontal-scroll-container">
        <div className="horizontal-scroll-content">
          <Landingpage1 />
          <Connectingpage />
          {/* <Workshop /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
