import React from 'react'
import '../CreaeteNewPassword/Createnewpassword.css'
import ForgetC from '../../../Images/ForgetC.png'
import { MdOutlineLock } from "react-icons/md";
const Createnewpassword = () => {
  return (
    <div>
        <div className="createnewpassword">
        <img src={ForgetC} alt="" />
            <h1>Create new Password</h1>
            <p>Your new password must be different from the previously used password</p>
            <div className="inputs-Forget-Newpass">
            <div className="inputs">
            <MdOutlineLock className='icons-for-signup' />
                <input type='text' placeholder='Password' />
            </div>
            <div className="inputs">
            <MdOutlineLock className='icons-for-signup' />
                <input type='text' placeholder='Retype Password' />
            </div>
          </div>
          {/* <p>Try using Mobile number?</p> */}
          <button>Save</button>
        </div>
    </div>
  )
}

export default Createnewpassword