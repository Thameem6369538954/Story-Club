import React from 'react'
import { TiTick } from "react-icons/ti";
import { NavLink } from 'react-router-dom';
import Navbar from '../../homeComponents/Navbar'
const Swfirstpage = () => {
  return (
    <div>
         <div>
        <div className="headeing">
           <Navbar />
           <div className="sta-full-cantainer">
            <div className="st-txt-leftbox" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-duration="2000">
                    <h2>Have a Story to Share?</h2>
                <p>Share your story and get a chance to win 499 Rs</p>
                <input type='text' placeholder='Stories about social media ' />
                <div className="cout">
                <span>01/03</span>
                <TiTick className='tick'/>

                </div>
               <NavLink to='/Stsecondpage'><button>Next</button></NavLink> 
            </div>
                <div className="st-txt-rightbox">
                        <div className="sta-tragentropp-box"  data-aos="fade-up"
     data-aos-duration="2000">
                            <div className="box" >
                                
                                <p>Stories about social media </p>
                                <div className="bga"></div>
                                </div>
                                <br></br><br></br>
                            <div className="box">
                            <div className="bga"></div>
                                <p>Teenagers stories</p>
                                
                                </div>
                            <div className="box"><p>College stories</p> </div>
                            <br></br><br></br>
                            <div className="box">
                                <p>Breakup Stores</p>
                            </div>
                            <div className="box">
                                <p>Dating Stories</p>
                            </div>
                            <div className="box">
                                <p>Gaming Stories</p>
                            </div>
                            <div className="box">
                                <p>Sports Stories</p>
                            </div>
                            <div className="box">
                                <p>School Stories</p>
                            </div>
                            <div className="box">
                                <p>Artificial intelligence Stories</p>
                            </div>
                        </div>
                </div>
           </div>
        </div>
    </div>
    </div>
  )
}

export default Swfirstpage