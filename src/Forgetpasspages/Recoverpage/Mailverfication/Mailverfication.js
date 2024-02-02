import React from 'react'
import ForgetB from '../../../Images/ForgetB.png'
import { VscMail } from "react-icons/vsc";
import '../Mailverfication/Mailverfication.css'
import { NavLink } from 'react-router-dom';
const Mailverfication = () => {
  return (
    <div>
         <div className="mailverfication">
            <img src={ForgetB} alt="" />
            <h1>Verify Email ! </h1>
            <p>Please enter the  6-digits code sent to sabeenatiq@gmail.com</p>
            <div className="inputs-Forget-otp">
            <div class="inputContainer">
   <input required="required" maxlength="1" type="text" class="otp-input" id="otp-input1" />
   <input required="required" maxlength="1" type="text" class="otp-input" id="otp-input2" />
   <input required="required" maxlength="1" type="text" class="otp-input" id="otp-input3" />
   <input required="required" maxlength="1" type="text" class="otp-input" id="otp-input4" /> 
   <input required="required" maxlength="1" type="text" class="otp-input" id="otp-input5" />
   <input required="required" maxlength="1" type="text" class="otp-input" id="otp-input6" /> 
   
  </div>
          </div>
          <p>Try using Mobile number?</p>
          <NavLink to='/Createnewpassword'><button>Verify</button></NavLink>
        </div>
    </div>
  )
}

export default Mailverfication