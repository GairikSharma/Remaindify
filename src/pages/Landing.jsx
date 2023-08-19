import React, { useEffect } from "react";
import landing from "../assets/images/landing.jpg";
import bannerSmall from "../assets/images/bannerSmall.jpg"
import "../styles/landing.css";
import googlebtn from "../assets/images/googlebtn.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase";
import { BsListTask } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

function Landing() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const signIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="landing-container">
        <div className="landing-left" data-aos="fade-in">
          <img className="landing-page-image" src={landing} alt="" />
          <img src={bannerSmall} className="banner-for-small-screen" data-aos="fade-left" alt="" />
        </div>
        <div className="landing-right" data-aos="fade-left">
          <div className="logo-2">
            <BsListTask />
            Task Genius
          </div>
          <div className="landing-heading" data-aos="fade-left">
            Master Your Day with Effortless Task Management
          </div>
          <div className="intro">
            Elevate Your Productivity with TaskGenius: Effortlessly Plan,
            Organize, and Conquer Tasks. Say Goodbye to Chaos and Hello to
            Structured Success.
          </div>
          <div className="login-options" data-aos="fade-left">
            <button className="sign-up-btn" onClick={signIn}>
              <img className="btn-google-icon" src={googlebtn} alt="" />
              Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
