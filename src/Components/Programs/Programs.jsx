import React from "react";
import "./Programs.css";
import { programs } from "../../data/data";
import right from "../../assets/rigth.png";
const Programs = () => {
  return (
    <div className="programs" id="programs">
      <div className="progrmas-header">
        <span className="stroke-text">Expelor our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>
      <div className="programs-categories">
        {programs.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.title}</span>
            <span>{program.detail}</span>
            <div className="join-now">
              <span>Join now</span>
              <img src={right} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
