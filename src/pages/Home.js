import React, { useRef, useEffect } from "react";
import Header from "../homeComponents/Header";
import Navbar from "../homeComponents/Navbar";
import Connectingpage from "../homeComponents/Connectingpage.js";
import Workshop from "../homeComponents/Workshop.js";
// import "../css/Home.css";
import LocomotiveScroll from "locomotive-scroll";
import Landingpage1 from "../homeComponents/LandingPage1/LandingPage1/LandingPage1.jsx";
import Landingpage2 from "../homeComponents/LandingPage2/LandingPage2/LandingPage2.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../css/Home.model.css";
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
    // dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // vertical: false, // Set to false to enable horizontal sliding
    // verticalSwiping: false, // Set to false to enable horizontal swiping
  };

  return (
    <div>
      <div className="horizontal-scroll-container">
        <div className={styles.sliderWrapper}>
          <Slider ref={sliderRef} {...settings}>
            <div className={styles.slide}>
              <Landingpage1 />
            </div>
            <div className={styles.slide}>
              <Landingpage2 />
            </div>
          </Slider>
          {/* <Workshop /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
