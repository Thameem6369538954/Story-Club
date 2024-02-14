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
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleScroll = (e) => {
      const slider = sliderRef.current;
      if (!slider) return;

      if (e.deltaY > 0) {
        slider.slickNext();
      } else if (e.deltaY < 0) {
        slider.slickPrev();
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    verticalSwiping: false,
  };

  return (
    <div>
      <div className="sliderWrapper">
        <Slider ref={sliderRef} {...settings}>
          <div className="slide">
            <Header />
          </div>
          <div className="slide">
            <Connectingpage />
          </div>
          {/* <div className="slide">
          <LandingPage1 />
        </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
