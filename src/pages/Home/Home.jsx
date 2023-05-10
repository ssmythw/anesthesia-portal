import React from "react";
import { Helmet } from "react-helmet";
import "./Home.scss";

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
        <h1 className="main__hero-title text-6xl">
          Department of Anesthesiology
        </h1>
        <h4 className="main__hero-title text-2xl">
          Southlake Regional Health Centre
        </h4>
        <br />
        <br />
        <i className="main__hero-title text-2xl">
          "We safeguard those who sleep"
        </i>
      </main>
    </>
  );
};

export default Home;
