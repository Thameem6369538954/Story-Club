import React from 'react'
import '../css/Workshop.css'
import Navbar from '../homeComponents/Navbar.js'
import { FaArrowRight } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import workshop from '../Images/workshop.png'
const Workshop = () => {
  return (
    <div>
           <div className="workshop-main">
            <h1>Join Our Workshop to..........</h1>
            <div className="workshop-container">
                <div className="workshop-arrow-text">
                <div className="two-workshop-btns">
                    
          <div className="workshop-btn-1">
          <div className="Workshop-btn">
            <button><FaPlay/></button>
        </div>
          <p>Become a Story Presenter</p>
          <FaArrowRight />
        
          </div>
          <div className="workshop-btn-1">
          <div className="Workshop-btn">
            <button><FaPlay/></button>
        </div>
          <p>Become a Story Teller</p>
          <FaArrowRight />
        
          </div>
          <div className="workshop-btn-1">
          <div className="Workshop-btn">
            <button><FaPlay/></button>
        </div>
          <p>Start your own Talkshow</p>
          <FaArrowRight />
        
          </div>
          <div className="workshop-btn-1">
          <div className="Workshop-btn">
            <button><FaPlay/></button>
        </div>
          <p>Become a  Business Story Writer</p>
          <FaArrowRight />
        
          </div>
        </div>
                </div>


                <div className="workshop-side-caro">
                    <img src={workshop} alt="" />
                </div>



            </div>
           </div>

    </div>
  )
}

export default Workshop