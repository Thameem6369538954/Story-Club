import React, { useState } from 'react'
import '../css/Footer.css'
import STlogo from '../Images/STlogo.png'
import { LiaFacebookF } from "react-icons/lia";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
const Footer = () => {


  return (
    <div className='footer-bg'>
      
        <div className="footer">
            <img src={STlogo} alt="" />
            <div>
              <ul className='footer-list'>
                <li>About us</li>
                <li>Contact us</li>
                <li>Workshops</li>
                <li>FAQ’s</li>
                <li>Membership</li>
              </ul>
              <div class="input-container">
    <input placeholder="Enter your mail" type="text" className="input-footer" />
    <span role='button'>Subscribe</span>
</div> 
            </div>
            <div>
          
            <div className="icons">
            <LiaFacebookF className='fbf'/>
            <AiFillInstagram  className='inst'/>
            <IoLogoLinkedin className='link' />
            <BsTwitterX className='x' />
            </div>

            </div>
            
        </div>
       <div className="footer-line">
        <div className="ftr-line">
        </div>
        <div className="copy-right">
        <h1>Copyright @ 2024   |   StoryClub</h1>
        <div className="policy">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>

        </div>

       </div>
    </div>
  )
}

export default Footer