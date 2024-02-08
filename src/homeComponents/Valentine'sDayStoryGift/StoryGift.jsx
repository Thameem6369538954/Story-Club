import React from "react";
import styles from "./StoryGift.module.css";
import img1 from "./Images/Section1/img1.png";
import img2 from "./Images/Section1/img2.png";
import { FaPlay } from "react-icons/fa";
import leftImg from "./Images/Section4/leftImg.png";
import rightImg from "./Images/Section4/rightImg.png";
import s7leftImg from "./Images/Section7/s7leftImg.png";
import s7rightImg from "./Images/Section7/s7rightImg.png";

const StoryGift = () => {
  return (
    <div>
      {/* section 1 */}
      <div className={styles.section1}>
        <h1>Gift your loved one a Story this</h1>
        <img src={img1} alt="valentines" className={styles.section1Img1} />
        <img src={img2} alt="valentines" className={styles.section1Img2} />
      </div>

      {/* section 2 */}
      <div className={styles.section2}>
        <div className={styles.section2Content}>
          <h1>Story Gifting Ideas</h1>
          <div
            style={{
              display: "flex",
              fontSize: "2rem",
              fontWeight: "bold",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "white" }}>-</span>
            <span>-----</span>
            <span style={{ color: "white" }}>-</span>
          </div>
          <p>
            Break the mundane habit of giving chocolates, cakes, dresses and
            perfumes and Gift your friend a personalised story
          </p>
        </div>
      </div>

      {/* section 3 */}
      <div className={styles.section3}>
        <div className={styles.section3cards}>
          {/* card 1 */}
          <div className={styles.card}>
            <div className={styles.cardContent1}>
              <h1>Video</h1>
              <p>1min</p>
            </div>
            <div className={styles.cardContent2}>
              <p>Narrate your Story</p>
            </div>
            <div className={styles.cardPrice}>2499 ₹</div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className={styles.leftTriangle}></div>
              <div className={styles.rightTriangle}></div>
            </div>
          </div>
          {/* card 2 */}
          <div className={styles.card}>
            <div className={styles.cardContent1}>
              <h1>Audio</h1>
              <p>1min</p>
            </div>
            <div className={styles.cardContent2}>
              <p>Narrate your Story</p>
            </div>
            <div className={styles.cardPrice}>1999 ₹</div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className={styles.leftTriangle}></div>
              <div className={styles.rightTriangle}></div>
            </div>
          </div>
          {/* card 3 */}
          <div className={styles.card}>
            <div className={styles.cardContent1}>
              <h1>Comic</h1>
              <p>10 Slides</p>
            </div>
            <div className={styles.cardContent2}>
              <p>Narrate your Story</p>
            </div>
            <div className={styles.cardPrice}>1499 ₹</div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className={styles.leftTriangle}></div>
              <div className={styles.rightTriangle}></div>
            </div>
          </div>
        </div>
        <button className={styles.btn}>Personalize</button>
      </div>

      {/* section 4 */}
      <div className={styles.section4}>
        <div className={styles.left}>
          <img src={leftImg} alt="leftImg" />
        </div>
        <div className={styles.section4Content}>
          <h1>What it’s About?</h1>
          <div
            style={{
              display: "flex",
              fontSize: "2rem",
              fontWeight: "bold",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "red" }}>-</span>
            <span>-----</span>
            <span style={{ color: "red" }}>-</span>
          </div>
          <p>
            Imagine giving a gift that's not just another item, but a story –
            your story or the story of someone you care about. That's what we
            do! We take your memories, jokes, and special moments, turn them
            into a fun story, and add drawings of the people in it. It's a
            unique and thoughtful way to show you care.
          </p>
          <p>
            Our stories are a fun, unique, and touching way to show you care,
            perfect for almost any occasion. Let us turn your memories into a
            gift that'll be treasured forever!
          </p>
          <button
            onClick={() => console.log("clicked")}
            className={styles.btn}
            
          >
            What it’s About? <FaPlay />
          </button>
        </div>
        <div className={styles.right}>
          <img src={rightImg} alt="rightImg" />
        </div>
      </div>

      {/* section 5 */}
      <div className={styles.section2}>
        <div className={styles.section2Content}>
          <h1>How Does it work</h1>
          <div
            style={{
              display: "flex",
              fontSize: "2rem",
              fontWeight: "bold",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "white" }}>-</span>
            <span>-----</span>
            <span style={{ color: "white" }}>-</span>
          </div>
          <p>
            Break the mundane habit of giving chocolates, cakes, dresses and
            perfumes and Gift your friend a personalised story
          </p>
        </div>
      </div>

      {/* section 6 */}
      <div className={styles.section6}>
        {/* card1 */}
        <div className={styles.section6Card}>
          <div className={styles.section6CardStep}>
            <h1>Step 1</h1>
          </div>
          <div className={styles.section6CardTitle}>
            <h1>Tell Us Your Story</h1>
          </div>
          <div
            style={{
              width: "60%",
              borderTop: "1px solid gray",
              margin: "auto",
            }}
          ></div>
          <p>
            Share with us the story you want to tell. It could be about you, a
            friend, loved ones or anyone important to you
          </p>
        </div>
        {/* card2 */}
        <div className={styles.section6Card}>
          <div className={styles.section6CardStep}>
            <h1>Step 2</h1>
          </div>
          <div className={styles.section6CardTitle}>
            <h1>We Draw You</h1>
          </div>
          <div
            style={{
              width: "60%",
              borderTop: "1px solid gray",
              margin: "auto",
            }}
          ></div>
          <p>
            Our artists will make cartoon versions of the people in your story
            from your photos or descriptions
          </p>
        </div>
        {/* card3 */}
        <div className={styles.section6Card}>
          <div className={styles.section6CardStep}>
            <h1>Step 3</h1>
          </div>
          <div className={styles.section6CardTitle}>
            <h1>We Write Your Story</h1>
          </div>
          <div
            style={{
              width: "60%",
              borderTop: "1px solid gray",
              margin: "auto",
            }}
          ></div>
          <p>
            Our writers turn your memories and moments into a fun and
            heartwarming story.
          </p>
        </div>
        {/* card4 */}
        <div className={styles.section6Card}>
          <div className={styles.section6CardStep}>
            <h1>Step 4</h1>
          </div>
          <div className={styles.section6CardTitle}>
            <h1>You Get a Special Gif</h1>
          </div>
          <div
            style={{
              width: "60%",
              borderTop: "1px solid gray",
              margin: "auto",
            }}
          ></div>
          <p>
            You'll get this story in a printable format. You can make a cool
            comic book and it will be a gift that's as special as your story! 
          </p>
        </div>
      </div>

      {/* section 7 */}
      <div className={styles.section7}>
        <div className={styles.section7Left}>
          <img src={s7leftImg} alt="leftImg" />
        </div>
        <div className={styles.middle}>
          <button
            onClick={() => console.log("clicked")}
            className={styles.btn}
            
          >
            What it’s About? <FaPlay />
          </button>
        </div>
        <div className={styles.section7Right}>
          <img src={s7rightImg} alt="rightImg" />
        </div>
      </div>
    </div>
  );
};

export default StoryGift;
