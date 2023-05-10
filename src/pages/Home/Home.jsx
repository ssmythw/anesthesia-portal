import React from "react";
import { Helmet } from "react-helmet";
import "./Home.scss";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Department of Anesthesiology - Southlake Regional Health Centre."
        />
        <title>Southlake - Department of Anesthesiology</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <main className="main">
        <Typography variant="h2" className="main__hero-title ">
          Department of Anesthesiology
        </Typography>
        <Typography className="main__hero-title" variant="h5">
          Southlake Regional Health Centre
        </Typography>
        <br />
        <br />
        <Typography className="main__hero-title" variant="h6" fontSize="lg">
          "We safeguard those who sleep"
        </Typography>
      </main>
    </>
  );
};

export default Home;
