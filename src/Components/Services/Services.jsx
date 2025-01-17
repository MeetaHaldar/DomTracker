import React from "react";
import "./Services.css";
import service1 from "../../assets/service1.jpg";
import icon1 from "../../assets/icon1.jpg";
const Services = () => {
  return (
    <div className="services container">
      <div className="service">
        <img src={service1} alt="" />
        <div className="caption">
          <img src={icon1} />
          <p>Resume Checker</p>
        </div>
      </div>
      <div className="service">
        <img src={service1} alt="" />
        <div className="caption">
          <img src={icon1} />
          <p>Resume Checker</p>
        </div>
      </div>
      <div className="service">
        <img src={service1} alt="" />

        <div className="caption">
          <img src={icon1} />
          <p>Resume Checker</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
