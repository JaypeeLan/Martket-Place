import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 800) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  // =============================================== //
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className={colorChange ? "navbar colorChange" : "navbar"}>
        <div className="navbar-container container">
          <div className="navbar-logo">
            <a to="/" onClick={closeMobileMenu}>
              MarketPlace
            </a>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                href="#about"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#services"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <button>Learn more</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
