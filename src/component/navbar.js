import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Link as Link2 } from "react-router-dom";
import Logo from "../assets/images/Shiny-Sky-Wordmark.png";
import LogoWhite from "../assets/images/Shiny-Sky-Wordmark-white.png";
// g

export default function Navbar({ navdark }) {
  const [isOpen, setMenu] = useState(true);
  const [scrollTreshold, setScrollThreshold] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", windowScroll);
    window.scrollTo(0, 0);
    return () => {
      window.removeEventListener("scroll", windowScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenu(!isOpen);
  };

  function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      navbar.classList.add("is-sticky");
      setScrollThreshold(true);
    } else {
      navbar.classList.remove("is-sticky");
      setScrollThreshold(false);
    }
  }
  return (
    <>
      <nav className="navbar" id="navbar">
        <div className="container flex flex-wrap items-center justify-end">
          <Link2 className="navbar-brand" to="/">
            <span>
              <img
                src={scrollTreshold ? Logo : LogoWhite}
                className="inline-block w-[7rem] h-[7rem]  rounded-md"
                alt=""
              />
            </span>
          </Link2>

          <div className="nav-icons flex items-center lg_992:order-2 ms-auto">
            
            <button
              type="button"
              className="collapse-btn inline-flex items-center ms-3 text-dark dark:text-white lg_992:hidden"
              onClick={toggleMenu}
            >
              <span className="sr-only">Navigation Menu</span>
              <i className="mdi mdi-menu mdi-24px"></i>
            </button>
          </div>

          <div
            className={`${
              isOpen === true ? "hidden" : "block"
            } navigation lg_992:order-1 lg_992:flex`}
            id="menu-collapse"
          >
            <ul
              className={`navbar-nav ${navdark ? "" : "nav-light"}`}
              id="navbar-navlist"
            >
              <Link
                className="nav-item"
                to="home"
                activeclassname="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                <span className="nav-link font-bold">Home</span>
              </Link>
              <Link
                className="nav-item"
                activeclassname="active"
                spy={true}
                smooth={true}
                duration={500}
                to="about"
              >
                <span className="nav-link font-bold">About us</span>
              </Link>
              <Link
                className="nav-item"
                to="features"
                activeclassname="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                <span className="nav-link font-bold">Services</span>
              </Link>
              {/* <Link
                className="nav-item"
                to="portfolio"
                activeclassname="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                <span className="nav-link">Portfolio</span>
              </Link> */}
              <Link
                className="nav-item"
                to="testimonial"
                activeclassname="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                <span className="nav-link font-semibold">Review</span>
              </Link>

              <Link
                className="nav-item"
                to="contact"
                activeclassname="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                <span className="nav-link font-semibold">Contact us</span>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
