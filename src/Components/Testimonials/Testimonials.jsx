import React, { useState } from "react";
import "./Testimonials.css";
import { testimonials } from "../../data/dataTestimonial";
import arrowRight from "../../assets/arrowRight.png";
import arrowLeft from "../../assets/arrowLeft.png";
const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tlength = testimonials.length;
  return (
    <div className="Testimonials">
      <div className="left-t">
        <span>Tesimonials</span>
        <span className="stroke-text">what they say</span>
        <span>about us</span>
        <span>{testimonials[selected].review}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonials[selected].name}
          </span>{" "}
          - {testimonials[selected].status}
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonials[selected].img} alt="" />
        <div className="arrows">
          <img
            src={arrowRight}
            alt=""
            style={{ transform: "rotate(180deg)" }}
            onClick={() => {
              selected === 0
                ? setSelected(tlength - 1)
                : setSelected((prev) => prev - 1);
            }}
          />
          <img
            src={arrowRight}
            alt=""
            onClick={() => {
              selected === tlength - 1
                ? selected(0)
                : setSelected((prev) => prev + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
