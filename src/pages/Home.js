import React from 'react'
import Header from '../homeComponents/Header'
import Navbar from '../homeComponents/Navbar'
import Connectingpage from '../homeComponents/Connectingpage.js'
import Workshop from '../homeComponents/Workshop.js'

const Home = () => {
  return (
    <div>
        <Header />
        <Connectingpage />
        <Workshop />
    </div>
  )
}

export default Home