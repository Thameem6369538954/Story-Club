import React from 'react'
import '../Recoverpage/Recover.css'
import ForgetA from '../../Images/ForgetA.png'
import { VscMail } from "react-icons/vsc";
import { NavLink } from 'react-router-dom';
const Recover = () => {
  return (
    <div>
        <div className="recover">
            <img src={ForgetA} alt="" />
            <h1>Recover Password !</h1>
            <p>Please enter your email address to recover your password</p>
            <div className="inputs-ForgetRecover">
            <VscMail className="icons-for-signup" />
            <input type="text" placeholder="Email" />
          </div>
          <p>Try using Mobile number?</p>
          <NavLink to='/Mailverfication '><button>Send</button></NavLink>
        </div>
    </div>
  )
}

export default Recover