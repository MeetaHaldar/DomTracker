import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/DomTrackerLogo.png";
import menu from "../../assets/menu.jpg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="DomTracker Logo" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="Hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} offset={-250} duration={500}>
            Services
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={0} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <button className="btn">
            <Link to="contact" smooth={true} offset={0} duration={500}>
              Contact Us{" "}
            </Link>
          </button>
        </li>
      </ul>
      <img src={menu} className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
