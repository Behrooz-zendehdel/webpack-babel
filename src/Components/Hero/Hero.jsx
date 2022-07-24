import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import Heart from "../../assets/heaert.png";
import Heroimg from "../../assets/hero.png";
import Liner from "../../assets/liner.png";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitnes club in the town</span>
        </div>
        {/* hero Heading  */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              Everybody wants to be a bodybuilder but don’t nobody want to lift
              heavy ass weights
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>+987 </span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span> fitnes progrmas</span>
          </div>
        </div>
        {/* hero buttons  */}
        <div className="hero-buttons">
          <button className="btn ">Get Started</button>
          <button className="btn ">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn ">Join Now</button>
        <motion.div
          transition={transition}
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span> <span>116 BPM</span>
        </motion.div>
        {/* hero images */}
        <img src={Heroimg} alt="" className="hero-image" />
        <motion.img
          transition={transition}
          initial={{ right: "11rem" }}
          whileInView={{ right: "26rem" }}
          src={Liner}
          alt=""
          className="hero-image-back"
        />
        {/* calories  */}
        <div className="calories">
          <span>Calories burand</span>
          <span>220 KCal</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
