import React from "react";
import "./Banner.scss";
import { Typography } from "@mui/material";

const Banner = ({ name, icon }) => {
  return (
    <div className="banner">
      <Typography className="banner-title" variant="h1">
        {name}&nbsp;
      </Typography>
    </div>
  );
};

export default Banner;
