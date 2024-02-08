import React from 'react'
import Header from '../homeComponents/Header'
import Navbar from '../homeComponents/Navbar'
import Connectingpage from '../homeComponents/Connectingpage.js'
import Workshop from '../homeComponents/Workshop.js'
import '../css/Home.css'
const Home = () => {
  return (
    <div>
       <div className="horizontal-scroll-container">
      <div className="horizontal-scroll-content">
        <Header />
        <Connectingpage />
        {/* <Workshop /> */}
      </div>
    </div>
     

    </div>
  )
}

export default Home