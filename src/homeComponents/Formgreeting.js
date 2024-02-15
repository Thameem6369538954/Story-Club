import React from "react";
import Navbar from "./Navbar";
import Greeting from "../Images/Greeting.png";
import { NavLink } from "react-router-dom";

const Formgreeting = () => {
  return (
    <div>
      <div className="greeting-main">
        <img src={Greeting} alt="" />
        <h1>Congratulations! Your Form has been Succesfully Submitted</h1>
        <p>
          Confirmation email has been sent to your registered email address
          <br></br>
          sabeenatiq@gmail.com
        </p>
        <NavLink to="/">
          <button class="button2">Go To Home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Formgreeting;
