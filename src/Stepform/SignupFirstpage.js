import React from 'react'
import { IoPerson } from "react-icons/io5";
import { RiSmartphoneLine } from "react-icons/ri";
import { VscMail } from "react-icons/vsc";
import { MdOutlineLock } from "react-icons/md";
import '../Stepform/Signupcss/sufirstpage.css'
import { FcGoogle } from "react-icons/fc";
import { LiaFacebookF } from "react-icons/lia";
import { NavLink } from 'react-router-dom';

const SignupFirstpage = () => {
  return (
    <div>

        <div className="Signup-continer">
            <h1>Become a member of Story Club!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
            <div className="input-box">
                <div>
                <div className="inputs">
            <IoPerson className='icons-for-signup'  />
                <input type='text' placeholder='Name' />
            </div>
            <div className="inputs" >
            <RiSmartphoneLine className='icons-for-signup' />
                <input type='text' placeholder='Phone no.' />
            </div>
                </div>
            <div>
            <div className="inputs">
            <VscMail className='icons-for-signup' /> 
                <input type='text' placeholder='Email' />
            </div>
            <div className="inputs">
            <MdOutlineLock className='icons-for-signup' />
                <input type='text' placeholder='Password' />
            </div>

            </div>

            </div>
                <p>or Sign up using </p>
                <div className="google-athentication">
                <FcGoogle className='ggl' />
                <LiaFacebookF className='fb'/>
                </div>
                    <div className="agree-box">
                  <input type='checkbox' />
                        <p>Creating an account means you agree with Privacy Policy and Term & Conditions</p>
                    </div>

                    <button>
                    Continue
                    </button>
                    <p>Already have an Account?<NavLink to='/Login'><span>Log in</span> </NavLink> </p>
        </div>
    </div>
  )
}

export default SignupFirstpage