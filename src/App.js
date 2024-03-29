import Home from "./pages/Home.js";
import Connectingpage from "./homeComponents/Connectingpage.js";
import Workshop from "./homeComponents/Workshop.js";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formgreeting from "./homeComponents/Formgreeting.js";
import HiringForm from "./homeComponents/HiringForm.js";
import StFrstpage from "./StorytellerComponents/StA/StFrstpage.js";
import Stsecondpage from "./StorytellerComponents/StB/Stsecondpage.js";
import StcTherdpage from "./StorytellerComponents/StC/StcTherdpage.js";
import Stgreeting from "./StorytellerComponents/StD/Stgreeting.js";
import Swsecondpage from "./StorywriterComponents/SwB/Swsecondpage.js";
import Swfirstpage from "./StorywriterComponents/SwA/Swfirstpage.js";
import SwTherdpage from "./StorywriterComponents/SwC/SwTherdpage.js";
import Swgreeting from "./StorywriterComponents/Swgreeting/Swgreeting.js";
import Signup from "./homeComponents/Signup.js";
import Login from "./homeComponents/Login.js";
import Recover from "./Forgetpasspages/Recoverpage/Recover.js";
import Mailverfication from "./Forgetpasspages/Recoverpage/Mailverfication/Mailverfication.js";
import Createnewpassword from "./Forgetpasspages/Recoverpage/CreaeteNewPassword/Createnewpassword.js";
import Featured from "./pages/Featured.js";
import Hiring from "./homeComponents/Hiring.js";
import StoryGift from "./homeComponents/Valentine'sDayStoryGift/StoryGift.jsx";
import Aboutus from "./homeComponents/AboutUs/AboutUs/AboutUs.jsx";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Formgreeting" element={<Formgreeting />} />
          <Route path="/HiringForm" element={<HiringForm />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/StoryGift" element={<StoryGift />} />
          <Route path="/Hiring" element={<Hiring />} />
          <Route path="/Featured" element={<Featured />} />
          <Route path="/Createnewpassword" element={<Createnewpassword />} />
          <Route path="/Mailverfication" element={<Mailverfication />} />
          <Route path="/Recover" element={<Recover />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Swgreeting" element={<Swgreeting />} />
          <Route path="/SwTherdpage" element={<SwTherdpage />} />
          <Route path="/Swsecondpage" element={<Swsecondpage />} />
          <Route path="/Swfirstpage" element={<Swfirstpage />} />
          <Route path="/Stgreeting" element={<Stgreeting />} />
          <Route path="/StcTherdpage" element={<StcTherdpage />} />
          <Route path="/StFrstpage" element={<StFrstpage />} />
          <Route path="/Stsecondpage" element={<Stsecondpage />} />
          <Route path="/Connectingpage" element={<Connectingpage />} />
          <Route path="/Workshop" element={<Workshop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
