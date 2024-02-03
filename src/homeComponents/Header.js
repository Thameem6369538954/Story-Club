import React from 'react'
import '../css/Header.css'
import Navbar from '../homeComponents/Navbar.js'
import pickids from '../Images/pickids.png'
import { FaPlay } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <div className="header-main">
        <Navbar />
        <div className="header">
        <h1  data-aos="fade-down" data-aos-easing="linear"
     data-aos-duration="1000">Real People . Real Stories</h1>
            <p data-aos="fade-up" data-aos-easing="linear"
      >Everybody has a Story to tell</p>
        </div>
        <div className="three-btn">
            <button>More About Us</button>
            <FaPlay className='play-btn'/>
        </div>
        
        <div className="two-header-btns">
          <div className="btn-1">
          <NavLink to='/Featured'><p>Audio Stories</p></NavLink>
          <FaArrowRight />
        
          </div>
          <div className="btn-2">
          <NavLink to='/Featured'><p>video Stories</p></NavLink>
          <FaArrowRight />
          </div>
        </div>
        </div>


    </div>
  )
}

export default Header