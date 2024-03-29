import React, { useState } from "react";
import leftImg from "./Images/section1/leftImg.png";
import rightImg from "./Images/section1/rightImg.png";
import middleImg from "./Images/section1/middleImg.png";
import mahesh from "./Images/section2/mahesh.png";
import anam from "./Images/section2/anam.png";
import manideep from "./Images/section2/manideep.png";
import joice from "./Images/section2/joice.png";
import styles from "./AboutUs.module.css";
import { FaPlay } from "react-icons/fa";
import Footer from "../../Footer.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import SliderComponent from "./SliderComponent";
import { TbLogin2 } from "react-icons/tb";
import { LuSend } from "react-icons/lu";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GoMail } from "react-icons/go";
import { TfiLocationPin } from "react-icons/tfi";
import { IoPersonOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { RiContactsBookLine } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import Navbar from "../../Navbar";
const AboutUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const employees = [
    {
      id: 1,
      name: "Mahesh",
      position: "Founder of Story Club",
      image: mahesh,
    },
    {
      id: 2,
      name: "Anam Fatima",
      position: "Senior Content Writer",
      image: anam,
    },
    {
      id: 3,
      name: "Joice Lincey",
      position: "Digital Marketing specialist",
      image: joice,
    },
    {
      id: 4,
      name: "Dhinesh",
      position: "Graphic Designer",
      image: require("../../../Images/team-08.jpg"),
    },

    {
      id: 5,
      name: "Dhanasekar",
      position: "Sketch Artist",
      image: require("../../../Images/team-07.jpg"),
    },
    {
      id: 6,
      name: "Shanker",
      position: "Illustrator",
      image: require("../../../Images/team-05.jpg"),
    },
    {
      id: 7,
      name: "Ajay",
      position: "Video Editor",
      image: require("../../../Images/team-06.jpg"),
    },
    {
      id: 8,
      name: "Yashavantha",
      position: "FrontEnd Developer",
      image: require("../../../Images/yash.jpg"),
    },
    {
      id: 9,
      name: "Harris",
      position: "UI/UX Designer",
      image: require("../../../Images/harris.jpg"),
    },
    {
      id: 10,
      name: "Aleeshya",
      position: "Backend Developer",
      image: require("../../../Images/alisha.jpg"),
    },
  ];
  const NextArrow = ({ onClick }) => (
    <button
      className={`${styles.slickArrow} ${styles.slickNext}`}
      onClick={onClick}
    >
      <GrNext />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      className={`${styles.slickArrow} ${styles.slickPrev}`}
      onClick={onClick}
    >
      <GrPrevious />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    console.log(formData);
  };

  return (
    <div className="full-abut">
      <div className={styles.container}>
        <Navbar />
        {/* 1st section */}
        <div className={styles.section1}>
          <div className={styles.left}>
            <img src={leftImg} alt="leftImg" />
          </div>
          <div className={styles.middle}>
            <h1>Our Story Club</h1>
            <div
              style={{
                display: "flex",
                fontSize: "1.5rem",
                fontWeight: "bold",
                justifyContent: "center",
                marginTop: "-1rem",
              }}
            >
              <p style={{ color: "red" }}>-</p>
              <p>-----</p>
              <p style={{ color: "red" }}>-</p>
            </div>
            <img src={middleImg} alt="middleImg" />
            <button
              onClick={() => console.log("clicked")}
              className={styles.btn}
            >
              Or Listen To Story Club <FaPlay />
            </button>
          </div>
          <div className={styles.right}>
            <img src={rightImg} alt="rightImg" />
          </div>
        </div>

        {/* 2nd section */}
        <div className={styles.section2}>
          <h1>Inside Story CLub</h1>
          <div
            style={{
              display: "flex",
              fontSize: "1.5rem",
              fontWeight: "bold",
              justifyContent: "center",
              marginTop: "-1.2rem",
              marginBottom: "-1.2rem",
            }}
          >
            <p style={{ color: "white" }}>-</p>
            <p>-----</p>
            <p style={{ color: "white" }}>-</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempororis.
          </p>
          <Slider {...settings} className={styles.slider}>
            {employees.map((employee) => (
              <div key={employee.id} className={styles.sliderItem}>
                <img
                  src={employee.image}
                  alt={employee.name}
                  onClick={() => console.log(employee.name)}
                />
                <div>
                  <h3>{employee.name}</h3>
                  <p>{employee.position}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* 3rd section */}
        <div className={styles.section3}>
          <h1>Our Sucsess Stories</h1>
          <div
            style={{
              display: "flex",
              fontSize: "1.5rem",
              fontWeight: "bold",
              justifyContent: "center",
              marginTop: "-1.2rem",
              marginBottom: "-1.2rem",
            }}
          >
            <p style={{ color: "red" }}>-</p>
            <p>-----</p>
            <p style={{ color: "red" }}>-</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempororis.
          </p>
          <SliderComponent />
          <button onClick={() => console.log("clicked")} className={styles.btn}>
            For more testimonial click here
          </button>
        </div>

        {/* 4th section */}
        <div className={styles.section4}>
          <div className={styles.publish}>
            <LuSend />
            <p>Publish your stories to reach millions</p>
          </div>
          <div className={styles.publish}>
            <TbLogin2 />
            <p>
              Get access to our stories rs 49 <sub> / month*</sub>
            </p>
          </div>
        </div>

        {/* 5th section */}
        <div className={styles.section5}>
          <h1>Get in touch with us</h1>
          <div
            style={{
              display: "flex",
              fontSize: "1.5rem",
              fontWeight: "bold",
              justifyContent: "center",
              marginTop: "-1.2rem",
              marginBottom: "-1.2rem",
            }}
          >
            <p style={{ color: "red" }}>-</p>
            <p>-----</p>
            <p style={{ color: "red" }}>-</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempororis.
          </p>
          <div className={styles.contactDetails}>
            {/* card 1 */}
            <div className={styles.contact}>
              <div className={styles.contactIcon}>
                <BiSolidPhoneCall />
              </div>
              <p>Call StoryClub</p>
              <h3>+91 7892 858593</h3>
            </div>
            {/* card 2 */}
            <div className={styles.contact}>
              <div className={styles.contactIcon}>
                <GoMail />
              </div>
              <p>Email Story Club</p>
              <h3>info@storyclub.in</h3>
            </div>
            {/* card 3 */}
            <div className={styles.contact}>
              <div className={styles.contactIcon}>
                <TfiLocationPin />
              </div>
              <p>Locate StoryCLub</p>
              <h3>Domlur, Bangalore.</h3>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.form}>
            <div className={styles.formInputs}>
              <div className={styles.formInput}>
                <div className={styles.formInputIcon}>
                  <IoPersonOutline style={{ fontSize: "1.5rem" }} />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  value={formData.name}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className={styles.formInput}>
                <div className={styles.formInputIcon}>
                  <TfiEmail style={{ fontSize: "1.5rem" }} />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className={styles.formInput}>
                <div className={styles.formInputIcon}>
                  <RiContactsBookLine style={{ fontSize: "1.5rem" }} />
                </div>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter mobile"
                  value={formData.mobile}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className={styles.formTextArea}>
              <div className={styles.formInputIcon}>
                <AiOutlineMessage style={{ fontSize: "1.5rem" }} />
              </div>
              <textarea
                name="message"
                placeholder="Enter message"
                value={formData.message}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <button type="submit" className={styles.btn}>
              Send
            </button>
          </div>
        </form>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
