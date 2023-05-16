import { Container, List, ListItem, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import { reveal } from "../../utils/reveal";
import ThreePIcon from "@mui/icons-material/ThreeP";
import Footer from "../../components/Footer/Footer";

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
      </Helmet>
      <Banner
        name="Your Anesthesiologist"
        icon={<ThreePIcon fontSize="xl" />}
      />
      <Container
        style={{ padding: "40px" }}
        maxWidth="md"
        className="container"
      ></Container>
      <Footer />
    </>
  );
};

export default YourAnesthesiologist;
