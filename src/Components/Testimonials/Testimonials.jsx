import React, { useState } from "react";
import "./Testimonials.css";
import { testimonials } from "../../data/dataTestimonial";
import arrowRight from "../../assets/arrowRight.png";
import arrowLeft from "../../assets/arrowLeft.png";

import { motion } from "framer-motion";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tlength = testimonials.length;
  const transition = { type: "spring", duration: 3 };

  return (
    <div className="testimonials" id="testimonials">
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
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>

        <motion.img
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
          src={testimonials[selected].img}
          alt=""
        />
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
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            transition={{ ...transition, duration: 2 }}
            whileInView={{ opacity: 1, x: 0 }}
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
