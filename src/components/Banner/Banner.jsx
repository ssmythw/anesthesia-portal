import React from "react";
import "./Banner.scss";

const Banner = ({ name, icon }) => {
  return (
    <div className="banner">
      {name}&nbsp;{icon}
    </div>
  );
};

export default Banner;
