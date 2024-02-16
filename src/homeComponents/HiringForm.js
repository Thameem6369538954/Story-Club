import React, { useContext, useState } from "react";
import "../css/HiringForm.css";
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
import axios from "axios";
import { AuthContext } from "../Context/AuthContext.jsx";

const HiringForm = ({ data }) => {
  const { position } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  // const [position, setPosition] = useState("");
  const [pdf1Link, setPdf1Link] = useState("");
  const [pdf2Link, setPdf2Link] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data to be sent via EmailJS
    const emailParams = {
      toName: "Sir",
      name: name,
      email: email,
      mobileNumber: mobileNumber,
      position: position,
      pdf1: pdf1Link,
      pdf2: pdf2Link,
    };

    // Send email
    try {
      const response = await emailjs.send(
        "service_alph36b",
        "template_79qfb86",
        emailParams,
        "suPan_E9zNBGA0RdQ"
      );
      console.log("Email sent successfully:", response);
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Email send failed:", error);
      alert("Email send failed!");
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    category: "",
    resume: null,
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmitt = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("mobile", formData.mobile);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("resume", formData.resume);
    formDataToSend.append("cv", formData.cv);

    try {
      await axios.post(
        "http://localhost:8080/hire/upload-details",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      alert("Files uploaded and email sent successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Error uploading files, please check your mobile number.");
    }
  };

  return (
    <div>
      <div className="hiring-form">
        <form onSubmit={handleSubmit}>
          <div className="form-heading">
            <NavLink to="/">
              <img src={STlogo} alt="" />
            </NavLink>
            <p>Fill out the form to become a team member of StoryClub</p>
            <h5>Position Applied For : {position}</h5>
          </div>
          <div className="full-form">
            <div>
              <div className="input-box-hiring">
                <IoPerson className="icons-for-hiring" />
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="input-box-hiring">
                <VscMail className="icons-for-hiring" />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="input-box-hiring">
                <SlBriefcase className="icons-for-hiring" />
                <input name="position" type="text" value={position} />
              </div>
            </div>

            <div>
              <div className="input-box-hiring">
                <RiSmartphoneLine className="icons-for-hiring" />
                <input
                  onChange={(e) => setMobileNumber(e.target.value)}
                  type="text"
                  placeholder="Phone Number"
                />
              </div>
              <div className="input-box-hiring">
                Resume:
                <input
                  onChange={(e) => setPdf1Link(e.target.value)}
                  accept="application/pdf"
                  type="text"
                />
              </div>
              <div className="input-box-hiring">
                Cv:
                <input
                  onChange={(e) => setPdf2Link(e.target.value)}
                  accept="application/pdf"
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className="input-box-hiring-check">
            <input type="checkbox" />
            <p>
              By Submitting your details means you agree with Privacy Policy and
              Term & Conditions
            </p>
          </div>
          <div className="form-btns">
            <button type="cancel">Cancel</button>

            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HiringForm;
