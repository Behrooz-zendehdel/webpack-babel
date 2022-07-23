import React from "react";
import "./Reasons.css";
import vili from "../../assets/vili.jpg";
import titi from "../../assets/titi.jpg";
import andrea from "../../assets/anderea.jpg";
import son from "../../assets/son.jpg";
import tick from "../../assets/tick.png";
const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={vili} alt="" />
        <img src={titi} alt="" />
        <img src={andrea} alt="" />
        <img src={son} alt="" />
      </div>
      <div className="right-r">
        <span>some Reasons</span>
        <div>
          <span className="stroke-text">why</span>
          <span>choose us!</span>
        </div>
        <div className="detail-r">
          <div>
            <img src={tick} alt="" />
            <span>over 140+ expert coachs</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>train smarter and faster than befouse</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 free program for new member</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>reeliable parteners</span>
          </div>
          <div>
            <span style={{ color: "var(--gary)", fontWeight: "normal" }}>
              our partners
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
