import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const handleResize = () => {
    if (window.innerWidth > 600) {
      setShowDropdown(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="staff">Staff</Link>
        </li>
        <div className="navbar__list-dropdown">
          <li className="navbar__list_show">General Info</li>
          <div className="navbar__list-dropdown-menu">
            <ul>
              <li>
                <Link
                  to="general-and-preop"
                  className="hover-underline-animation"
                >
                  General/Preop
                </Link>
              </li>
              <li>
                <Link
                  className="hover-underline-animation"
                  to="your-anesthesiologist"
                >
                  Your Anesthesiologist
                </Link>
              </li>
              <li>
                <Link
                  className="hover-underline-animation"
                  to="types-of-anesthesia"
                >
                  Types of Anesthesia
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <li>
          <Link to="/questions-and-answers">FAQ</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <MenuIcon className="navbar__hamburger" onClick={toggleDropdown} />
      <DropdownMenu showDropdown={showDropdown} />
    </nav>
  );
};

export default Navbar;
