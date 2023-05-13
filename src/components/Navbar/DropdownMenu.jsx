import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import classNames from "classnames";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const DropdownMenu = ({ showDropdown, setShowDropdown }) => {
  const [arrow, setArrow] = useState({
    general: false,
    programs: false,
  });

  const handleResize = () => {
    if (window.innerWidth > 600) {
      setArrow({ general: false, programs: false });
    }
  };

  const handleClick = () => {
    setShowDropdown(false);
    setTimeout(() => {
      setArrow({ ...arrow, general: false });
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id="dropdown"
      className={classNames(
        "navbar__mobile-dropdown",
        showDropdown ? "navbar__mobile-dropdown_show" : ""
      )}
    >
      <ul className="dropdown__list">
        <li>
          <Link onClick={handleClick} to="">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="staff">
            Staff
          </Link>
        </li>
        <div>
          <li onClick={() => setArrow({ ...arrow, general: !arrow.general })}>
            General Info
            <Typography
              variant="span"
              style={{
                marginLeft: "3px",
                display: arrow.general ? "none" : "inline",
              }}
            >
              →
            </Typography>
            <Typography
              variant="span"
              style={{
                marginLeft: "3px",
                display: arrow.general ? "inline" : "none",
              }}
            >
              ↓
            </Typography>
          </li>
          <ul
            className="dropdown__submenu"
            style={{
              display: arrow.general ? "block" : "none",
            }}
          >
            <li>
              <Link onClick={handleClick} to="general-and-preop">
                General/Preop
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} to="your-anesthesiologist">
                Your Anesthegiologist
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} to="types-of-anesthesia">
                Types of Anesthesia
              </Link>
            </li>
          </ul>
        </div>
        <li>
          <Link onClick={handleClick} to="questions-and-answers">
            FAQ
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="about">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
