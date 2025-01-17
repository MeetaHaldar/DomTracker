import React, { useRef } from "react";
import "./Testimonials.css";
import back from "../../assets/back.png";
import next from "../../assets/next.jpg";
const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackrward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next} className="next-btn" onClick={slideForward} />
      <img src={back} className="back-btn" onClick={slideBackrward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={back} />
                <div>
                  <h3>Name1</h3>
                  <span>laxmi nagar, Delhi </span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
                consequuntur voluptatibus dolorem sed quisquam dolor optio quo
                nulla in unde odio magni doloribus non, saepe cumque dolorum
                temporibus, nihil dolore.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={back} />
                <div>
                  <h3>Name2</h3>
                  <span>laxmi nagar, Delhi </span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
                consequuntur voluptatibus dolorem sed quisquam dolor optio quo
                nulla in unde odio magni doloribus non, saepe cumque dolorum
                temporibus, nihil dolore.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={back} />
                <div>
                  <h3>Name3</h3>
                  <span>laxmi nagar, Delhi </span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
                consequuntur voluptatibus dolorem sed quisquam dolor optio quo
                nulla in unde odio magni doloribus non, saepe cumque dolorum
                temporibus, nihil dolore.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={back} />
                <div>
                  <h3>Name4</h3>
                  <span>laxmi nagar, Delhi </span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
                consequuntur voluptatibus dolorem sed quisquam dolor optio quo
                nulla in unde odio magni doloribus non, saepe cumque dolorum
                temporibus, nihil dolore.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
