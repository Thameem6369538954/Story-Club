import React from 'react'
import '../Stepform/Signupcss/susecondpage.css'
import { FaEdit } from "react-icons/fa";

const Signupsecondpage = () => {
  return (
    <div>
      <div className="otp-verfication">
        <h1>Verify OTP</h1>
        <p>Please enter the 6-digits Verification code sent to your mobile no.
</p>
<span>+91 837 82278 82 <FaEdit /></span>

<div class="inputContainer">
   <input required="required" maxlength="1" type="text" class="otp-input" id="otp-input1" />
   <input required="required" maxlength="1" type="text" class="otp-input" id="otp-input2" />
   <input required="required" maxlength="1" type="text" class="otp-input" id="otp-input3" />
   <input required="required" maxlength="1" type="text" class="otp-input" id="otp-input4" /> 
   
   
  </div>
      </div>
      <p>Didn’t receive the code ?  <span>Resend</span></p>
    </div>
  )
}

export default Signupsecondpage