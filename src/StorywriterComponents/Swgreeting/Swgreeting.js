import React from 'react'
import Greeting from '../Swgreeting/Greeting.png'

const Swgreeting = () => {
  return (
    <div>
          <div className='greeting-main'>
      <img src={Greeting} alt="" />
      <h1>Congratulations!
Your Story has been Succesfully Submitted</h1>
<p>Confirmation email has been sent to your registered email address<br></br>
sabeenatiq@gmail.com</p>

    </div>
    </div>
  )
}

export default Swgreeting