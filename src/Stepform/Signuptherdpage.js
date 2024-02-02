import React from 'react'
import '../Stepform/Signupcss/sutherodpage.css'
const Signuptherdpage = () => {
  return (
    <div>
      <div className="therdpage-main">
        <h1>Choose the Plan!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>

        <div className="therd-select-btns">
        <div class="radio-inputs">
  <label class="radio" >
    <input type="radio" name="radio" />
    <span class="name">7 days</span>
  </label>
  <label class="radio">
    <input type="radio" name="radio" />
    <span class="name">15 Days</span>
  </label>
      
  <label class="radio">
    <input type="radio" name="radio" />
    <span class="name">Monthly</span>
  </label>
</div>
        </div>
            <div className="gird-box">
            <div class="nth-child1"></div>
  <div class="nth-child2"></div>
  <div class="nth-child3"></div>
  <div class="nth-child4"></div>
  <div class="nth-child5"></div>
            </div>

            <div className="plans">
              
            </div>
      </div>
    </div>
  )
}

export default Signuptherdpage