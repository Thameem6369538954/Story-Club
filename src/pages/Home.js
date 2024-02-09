import React, { useEffect, useRef } from 'react'
import Header from '../homeComponents/Header'
import Navbar from '../homeComponents/Navbar'
import Connectingpage from '../homeComponents/Connectingpage.js'
import Workshop from '../homeComponents/Workshop.js'
import '../css/Home.css'
import LocomotiveScroll from 'locomotive-scroll'

const Home = () => {
  
  return (
    <div>
       <div className="horizontal-scroll-container">
      <div className="horizontal-scroll-content">
        <Header  />
        <Connectingpage />
        {/* <Workshop /> */}
      </div>
    </div>
     

    </div>
  )
}

export default Home