import React from 'react'
import '../css/Reviews.css'
import Profile from '../Images/Profile.jpg'
const Reviews = () => {
  return (
    <div className='rv'>
        <h1>Reviews</h1>
        <div className="reviews-main-box">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="review-boxes">
            <div className="review-box-conainer">
                <div className="review-box">
                    <img src={Profile} alt="Profile" />
                    <p>Jenny Ellise</p>
                    <div class="rating">
  <input value="5" name="rate" id="star5" type="radio" />
  <label title="text" for="star5"></label>
  <input value="4" name="rate" id="star4" type="radio" />
  <label title="text" for="star4"></label>
  <input value="3" name="rate" id="star3" type="radio" checked="" />
  <label title="text" for="star3"></label>
  <input value="2" name="rate" id="star2" type="radio" />
  <label title="text" for="star2"></label>
  <input value="1" name="rate" id="star1" type="radio" />
  <label title="text" for="star1"></label>
</div>
<br></br>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.</p>
                </div>
                <div className="review-box">
                <img src={Profile} alt="Profile" />
                    <p>Jenny Ellise</p>
                    <div class="rating">
  <input value="5" name="rate" id="star5" type="radio" />
  <label title="text" for="star5"></label>
  <input value="4" name="rate" id="star4" type="radio" />
  <label title="text" for="star4"></label>
  <input value="3" name="rate" id="star3" type="radio" checked="" />
  <label title="text" for="star3"></label>
  <input value="2" name="rate" id="star2" type="radio" />
  <label title="text" for="star2"></label>
  <input value="1" name="rate" id="star1" type="radio" />
  <label title="text" for="star1"></label>
    <br></br>
    <br></br>
  <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.</h6>
</div>
                </div>
                <div className="review-box">
                <img src={Profile} alt="Profile" />
                    <p>Jenny Ellise</p>
                    <div class="rating">
  <input value="5" name="rate" id="star5" type="radio" />
  <label title="text" for="star5"></label>
  <input value="4" name="rate" id="star4" type="radio" />
  <label title="text" for="star4"></label>
  <input value="3" name="rate" id="star3" type="radio" checked="" />
  <label title="text" for="star3"></label>
  <input value="2" name="rate" id="star2" type="radio" />
  <label title="text" for="star2"></label>
  <input value="1" name="rate" id="star1" type="radio" />
  <label title="text" for="star1"></label>
</div>
<br></br>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews