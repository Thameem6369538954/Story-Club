import React, { useContext, useState } from "react";
import "../css/Hiring.css";
import Navbar from "./Navbar";
import { AiOutlineClose } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";
import { RiSmartphoneLine } from "react-icons/ri";
import { VscMail } from "react-icons/vsc";
import { MdOutlineLock } from "react-icons/md";
import { SlBriefcase } from "react-icons/sl";
import STlogo from "../Images/STlogo.png";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../homeComponents/Footer.js";
import emailjs from "emailjs-com";
import { AuthContext } from "../Context/AuthContext.jsx";

const Hiring = () => {
  const { setPosition } = useContext(AuthContext);
  const navigate = useNavigate();
  const [positionn, setPositionn] = useState("");
  // const [open, setOpen] = useState(false);
  // const toggleModel = (position) => {
  //   setOpen(!open);
  // };
  const [hiring, setHiring] = useState([
    {
      id: 1,
      position: "Story Teller",
      jd: " We are currently seeking a Storyteller to join our creative team. This individual will be the heart ofour narrative, weaving captivating stories to engage our audience. Your role involves craftingcompelling content for various platforms, evoking emotions, and conveying messages effectively.The ideal candidate will have a passion for storytelling, a vivid imagination, and the ability to bringstories to life. Experience in content creation, whether through writing, video, or other mediums, ishighly valued. Join us in creating and sharing stories that leave a lasting impact on our audience.",
      image: require("../Images/blogprev1.png"),
    },
    {
      id: 2,
      position: "Actor / Model",
      jd: "We are currently seeking an Actor/Model to become the face of our creative projects.This versatileindividual will play a pivotal role in bringing our stories and concepts to life through performanceand visual representation. Your responsibilities will include embodying characters, conveyingemotions, and participating in photoshoots or video productions. The ideal candidate will possessexceptional acting or modeling skills, a strong stage or on-camera presence, and a passion forstorytelling through performance. Join us in showcasing our vision through your talent and charisma,creating a lasting impact on our audience.",
      image: require("../Images/blogprev3.png"),
    },
    {
      id: 3,
      position: "Filmmaker",
      jd: "We are currently seeking a Filmmaker to join our creative team. This individual will be responsiblefor bringing our stories to life through the art of film. Your role involves concept development,scriptwriting, directing, and overseeing the production process. The ideal candidate will have astrong passion for filmmaking, a keen eye for visual storytelling, and experience in creatingcompelling cinematic content. Join us in producing films that captivate, entertain, and inspire ouraudience",
      image: require("../Images/blogprev5.png"),
    },
    {
      id: 4,
      position: "Anchor",
      jd: "Join Mentoons as an Anchor, where you'll connect with our audience through YouTube videos and social media Your role includes introducing new products and conducting insightful interviews with experts. We seek excellent communication skills, video hosting experience, and a passion for our mission. Familiarity with LinkedIn, Facebook, Instagram, and Pinterest is a plus. We embrace diversity and are proud to be an equal opportunity employer. Ready to make learning fun and easy? Apply now and let's explore potential together! ",
      image: require("../Images/blogprev4.png"),
    },
    // {
    //   id: 5,
    //   position: "Content Writer",
    //   jd: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    //   image: require("../Images/blogprev2.png"),
    // },
    {
      id: 6,
      position: "Backend Developer",
      jd: "We are currently seeking a Backend Developer to join our dynamic team. This individual will play avital role enabling the development of e-commerce, managing databases, assisting in podcas creation and supporting YouTube channel content. The ideal candidate will have an extensive experience of working with full Stack MERN and managing MongoDB databases",
      image: require("../Images/blogprev2.png"),
    },
  ]);
  return (
    <div className="full-hiring">
      <Navbar />

      <div className="hiring-main-container">
        <div className="board-yellow">
          <ul className="hiring-ul">
            <marquee>
              <div className="mrq">
                <p>Connect With Community | </p>
                <p>Start Sharing your stories | </p>
                <p>Welcome the regcognition | </p>
                <p>As You growth, Join your fearture Profiles </p>
              </div>
            </marquee>
          </ul>
        </div>

        <div className="hiring-haeading">
          <h2>Join StoryClub!</h2>
          <div>
            <iframe
              className="Hiring-video"
              title="Embedded Video"
              src="https://drive.google.com/file/d/1pjUV9cyiHr5VJFEdd-2cz2pZPlvsrL_f/preview"
              // width="100%"
              // height="400"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="flip-cart-container">
          {hiring.map((hir, inx) => {
            return (
              <div>
                <div
                  class="flip-card"
                  key={inx}
                  onClick={() => setPosition(hir.position)}
                >
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <p class="title">{hir.position}</p>
                      <span>{hir.jd}</span>
                      <img src={hir.image} alt="" />
                    </div>
                    <div class="flip-card-back">
                      <p class="title">{hir.position}</p>
                      <button onClick={() => navigate("/HiringForm")}>
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hiring;
