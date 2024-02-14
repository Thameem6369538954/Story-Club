import React, { useRef, useEffect } from "react";
import Header from "../homeComponents/Header";
import Navbar from "../homeComponents/Navbar";
import Connectingpage from "../homeComponents/Connectingpage.js";
import Workshop from "../homeComponents/Workshop.js";
import "../css/Home.css";
import LocomotiveScroll from "locomotive-scroll";
import Landingpage1 from "../homeComponents/LandingPage1/LandingPage1/LandingPage1.jsx";
import Landingpage2 from "../homeComponents/LandingPage2/LandingPage2/LandingPage2.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import styles from "../css/Home.model.css";
const Home = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-200vh",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "100 top",
          end: "top top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);
  return (
    <div>
      <div className="scroll-container" ref={triggerRef}>
        <div className="scroll-content" ref={sectionRef}>
          <Header />
          <Connectingpage />
        </div>
      </div>
    </div>
  );
};

export default Home;
