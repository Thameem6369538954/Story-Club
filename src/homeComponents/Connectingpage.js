import React from 'react'
import '../css/Connectingpage.css'
import {NavLink} from 'react-router-dom'
import Navbar from '../homeComponents/Navbar.js'
import StorywriterA from '../Images/StorywriterA.png'
import StoryWriterB from '../Images/StoryWriterB.png'
import Timeline from './Timeline.js'

const Connectingpage = () => {
  return (
    <div className="time-line-header" id='connect'>


    <div className="st-tellbg">
      <Timeline />
    <div className='story-tell-main-full'>
        <Navbar />
       
        <div className="story-tell-main">
        <ul className='navbar-ul'>
                    <li>Connect With Community |  </li>
                    <li>Start Sharing your stories |  </li>
                    <li>Welcome the regcognition |  </li>
                    <li>As You growth, Join your fearture Profiles  </li>
                </ul>
            <h1>Connecting <br></br> Story Writers and Story Tellers !</h1>
            <p>Come join our Club</p>
            <div className="Connecting-btns">
            <NavLink to='/StFrstpage'><button>Im a Story Teller </button></NavLink>
            <NavLink to='/Swfirstpage'><button>Im a Story Writer  </button></NavLink> 
            
            </div>
            <div className="connect-images">
                <img src={StoryWriterB} alt="" />
                <img src={StorywriterA} alt="" />
            </div>
        </div>

    </div>
    </div>
    </div>
  )
}

export default Connectingpage