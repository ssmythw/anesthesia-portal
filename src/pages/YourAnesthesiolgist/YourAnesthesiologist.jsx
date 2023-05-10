import { Container, List, ListItem, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import { reveal } from "../../utils/reveal";
import VaccinesIcon from "@mui/icons-material/Vaccines";

const YourAnesthesiologist = () => {
  useEffect(() => {
    reveal();
    window.addEventListener("scroll", reveal);
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Anesthesiologists are medical doctors (MD) who have completed four
          years of medical school followed by five years in residency training
          in all areas of anesthesia including adult, pediatric, obstetrics,
          heart and lung and acute/chronic pain management. They have spent
          3-6 months in various intensive care (ICU) areas - adult ICU,
          cardiac surgery ICU..."
        />
        <title>Southlake - Your Anesthesiologist</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Banner
        name="Your Anesthesiologist"
        icon={<VaccinesIcon fontSize="xl" />}
      />
      <Container style={{ padding: "40px" }} maxWidth="md" className="general">
        <div className="reveal fade-right">
          <div className="header">
            <hr
              style={{
                width: "50px",
                display: "inline-block",
              }}
            />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Typography variant="h4">Brief Synopsis</Typography>
            <br />
            <br />
            <br />
          </div>
          <Typography variant="p">
            Anesthesiologists are medical doctors (MD) who have completed four
            years of medical school followed by five years in residency training
            in all areas of anesthesia including adult, pediatric, obstetrics,
            heart and lung and acute/chronic pain management. They have spent
            3-6 months in various intensive care (ICU) areas - adult ICU,
            cardiac surgery ICU, pediatric/neonatal ICU, and the coronary care
            unit. All residents also spend 3-6 months in the departments of
            cardiology, respirology and nephrology. Anesthesiologists have the
            broadest knowledge of these medical, intensive care and
            resuscitation areas of any specialty. After their five years of
            residency, they complete their final examinations to become
            designated as a Fellow of the Royal College of Physicians (FRCP).
            Some then go on to complete a further year of training (fellowship
            year) in areas such as cardiac/pediatric/obstetrical anesthesia,
            chronic pain, regional anesthesia, or public health. During your
            surgery, your anesthesiologist will monitor your heart rate, blood
            pressure, oxygen levels, breathing, temperature, level of anesthesia
            and prepare to wake you up at the end of surgery as comfortable as
            possible.
          </Typography>
          <br />
        </div>
      </Container>
    </>
  );
};

export default YourAnesthesiologist;
