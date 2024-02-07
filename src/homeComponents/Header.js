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
        <div className="three-btn">
           <NavLink to='/Hiring'><button className='btn'>More About Us</button></NavLink> 
            <FaPlay className='play-btn'/>
        </div>
        <h1  data-aos="fade-down" data-aos-easing="linear"
     data-aos-duration="1000">Real People . Real Stories</h1>
            <p data-aos="fade-up" data-aos-easing="linear"
      >Everybody has a Story to tell</p>
        </div> 

      <div className='header-btns-for-redirect'>
      <div className="btn-1">
          <NavLink to='/Featured'><button>Audio Stories</button></NavLink>
          <FaArrowRight />
        
          </div>
          <div className="btn-1">
          <NavLink to='/Featured'><button>video Stories</button></NavLink>
          <FaArrowRight />
        
          </div>
      </div>
        <div className="two-header-btns">
         
        </div>
        </div>

    </div>
  )
}

export default Header