import React from "react";
import "../css/Login.css";
import STlogo from "../Images/STlogo.png";
import { VscMail } from "react-icons/vsc";
import { MdOutlineLock } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { LiaFacebookF } from "react-icons/lia";
import { NavLink } from "react-router-dom";


const Login = () => {
  return (
    <div>
      <div className="login-main">
        <img src={STlogo} alt="" />
        <h1>Login to your Account !</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
        <div className="login-inputs">
          <div className="inputs-login">
            <VscMail className="icons-for-signup" />
            <input type="text" placeholder="Email" />
          </div>
          <div className="inputs-login">
            <MdOutlineLock className="icons-for-signup" />
            <input type="text" placeholder="Password" />
          </div>
        </div>

        <div className="forget-text">
            <div><span><input type="checkbox" />Remember me</span></div>
            <NavLink to='/Recover'><p>Forgot password?</p></NavLink>
        </div>

       <p>or Sign in using </p>

       <div className="google-athen">
       <FcGoogle className='ggl' />
                <LiaFacebookF className='fb'/>
       </div>
       <button>Login</button>
       <div className="navigate-txt">

       <p>Don’t have an Account? <NavLink to='/Signup'><span>Sign up</span></NavLink></p>
       </div>
      </div>
    </div>
  );
};

export default Login;
