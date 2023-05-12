import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import classNames from "classnames";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Typography } from "@mui/material";

const DropdownMenu = ({ showDropdown }) => {
  const [arrow, setArrow] = useState({
    general: false,
    programs: false,
  });

  const handleResize = () => {
    if (window.innerWidth > 600) {
      setArrow({ general: false, programs: false });
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={classNames(
        "navbar__mobile-dropdown",
        showDropdown ? "navbar__mobile-dropdown_show" : ""
      )}
    >
      <ul className="dropdown__list">
        <li>Home</li>
        <li>Staff</li>
        <div>
          <li onClick={() => setArrow({ ...arrow, general: !arrow.general })}>
            General Info
            <Typography
              variant="span"
              style={{
                display: arrow.general ? "none" : "inline",
              }}
            >
              →
            </Typography>
            <Typography
              variant="span"
              style={{
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
            <li>General/Preop</li>
            <li>Your Anesthegiologist</li>
            <li>Types of Anesthesia</li>
          </ul>
        </div>
        <li className="">FAQ</li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
