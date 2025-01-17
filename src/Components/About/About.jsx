import React from "react";
import "./About.css";
import play from "../../assets/play.jpg";
import about from "../../assets/about.jpg";
const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about} className="about-img" />
        <img src={play} className="play-icon" />
      </div>
      <div className="about-right">
        <h3>About DomTracker</h3>
        <h2> An IT service Website</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          inventore deserunt provident saepe voluptatem maiores minima tenetur
          in, sequi ipsum. Doloribus, sunt sequi debitis ipsa dolores dolore
          consequuntur aspernatur reprehenderit eius quod nulla consectetur
          perspiciatis optio, doloremque laudantium! Et, aut!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
          voluptas in? Earum illum ex fuga ad suscipit dicta officiis quidem,
          excepturi deserunt repellat, illo nisi.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit in, recusandae vero, modi sed optio minima veritatis
          animi nihil molestias, repellat obcaecati porro.
        </p>
      </div>
    </div>
  );
};

export default About;
