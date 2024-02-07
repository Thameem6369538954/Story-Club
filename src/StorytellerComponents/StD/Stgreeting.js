import React from 'react'
import '../StD/Stgreeting.css'
import Greeting from '../StD/Greeting.png'
import Timeline from '../../homeComponents/Timeline'
const Stgreeting = () => {
  return (
    <div className='greeting-main'>
      <Timeline />
      <img src={Greeting} alt="" />
      <h1>Congratulations!<br></br>
Your Story has been Succesfully Submitted</h1>
<p>Confirmation email has been sent to your registered email address<br></br>
sabeenatiq@gmail.com</p>

    </div>
  )
}

export default Stgreeting