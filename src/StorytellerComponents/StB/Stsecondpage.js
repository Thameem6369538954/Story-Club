import React from 'react'
import '../StB/Stsecondpage.css'
import Navbar from '../../homeComponents/Navbar.js'
import { TiTick } from "react-icons/ti";
import { NavLink } from 'react-router-dom';
import Thinkimg from '../StB/Thinkimg.png'
const Stsecondpage = () => {
  return (
    <div className='second-st-main'>
   <Navbar />
   <div className="stsecond-main-conatainer">
        <div className="left-side-secondst" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
     data-aos-duration="1000">
        <h2>Have a Story to tell?</h2>
        <h5>In 100 - 500 words !</h5>
                <p>Add Title to your Story!</p>
                
                <input type='text' placeholder='15 ways to Success ' />
                <div className="couta">
                <span>02/03</span>
                <TiTick className='tick'/>

                </div>
                <div className="st-two-btns">
               <NavLink to='/StFrstpage'><button>Go Back</button></NavLink> 
               <NavLink to='/StcTherdpage'><button>Next</button></NavLink> 

                </div>
        </div>
        <img src={Thinkimg} alt="" data-aos="zoom-in-left" />

   </div>
    </div>
  )
}

export default Stsecondpage