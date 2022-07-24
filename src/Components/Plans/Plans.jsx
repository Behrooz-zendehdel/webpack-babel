import React from "react";
import "./Plans.css";
import tick from "../../assets/tick.png";
// imported data
import { plans } from "../../data/DataPlan";
const Plans = () => {
  return (
    <div className="plans-container">
      <div className="progrmas-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">RREADY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>
      {/* plans card  */}
      <div className="plans">
        {plans.map((plan) => (
          <div className="plan" key={plan.id}>
            <span>{plan.name}</span>
            <span> $ {plan.price}</span>
            <div className="features">
              {plan.features.map((feature) => (
                <div className="feature">
                  <img src={tick} alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span> see more benefits </span>
            </div>
            <button className="btn"> Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
