import { Grid, Typography } from "@mui/material";
import React from "react";
import BusinessIcon from "@mui/icons-material/Business";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-item">
        <Typography variant="h6">Contact</Typography>
        <div className="address">
          <BusinessIcon></BusinessIcon>
          <div>
            <Typography variant="p">
              Southlake Regional Health Centre
            </Typography>
            <br />
            <Typography variant="p">
              596 Davis Drive, Newmarket, Ontario L3Y 2P9
            </Typography>
          </div>
        </div>
        <div className="address">
          <LocalPhoneIcon></LocalPhoneIcon>
          <div>
            <Typography variant="p">905-895-4521</Typography>
            <br />
          </div>
        </div>
      </div>
      <div className="footer-item">
        <Typography variant="h6">Further Information</Typography>
        <Typography variant="p">
          Canadian Anesthesia Society -{" "}
          <a
            style={{ color: "white", textDecoration: "underline" }}
            href="http://cas.ca"
          >
            cas.ca
          </a>
        </Typography>
        <br />
        <Typography variant="p">
          Risk Calculator -{" "}
          <a
            style={{ color: "white", textDecoration: "underline" }}
            href="http://riskcalculator.facs.org"
          >
            riskcalculator.facs.org
          </a>
        </Typography>
      </div>
      <div className="footer-item">
        <Typography variant="h6">Our Mission</Typography>
        <Typography variant="p">
          Providing comprehensive anesthesia care in a safe and state of the art
          environment.
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
