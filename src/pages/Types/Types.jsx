import { Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import { reveal } from "../../utils/reveal";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import "./Types.scss";
import Footer from "../../components/Footer/Footer";

const Types = () => {
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
          content="Each anesthetic is planned for each patient on an individual basis
          considering the type of operation and your underlying health. This
          can be discussed with you at your preop visit..."
        />
        <title>Southlake - Types of Anesthesia</title>
      </Helmet>
      <Banner
        name="Types of Anesthesia"
        icon={<VaccinesIcon fontSize="xl" />}
      />
      <Container
        style={{ padding: "40px" }}
        maxWidth="md"
        className="container"
      >
        <div className="reveal fade-right">
          <div className="header">
            <hr
              style={{
                width: "50px",
                display: "inline-block",
              }}
              className="hr"
            />
            <span className="hr">&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Typography className="title" variant="h4">
              What type of anesthetic will I receive ?
            </Typography>
            <br />
            <br />
            <br />
          </div>
          <Typography variant="p">
            Each anesthetic is planned for each patient on an individual basis
            considering the type of operation and your underlying health. This
            can be discussed with you at your preop visit.
          </Typography>
          <br />
          <br />
          <Typography variant="span" style={{ fontWeight: "700" }}>
            Local Anesthesia -
          </Typography>
          <Typography variant="span">
            &nbsp;Many operations can be done easily with just some freezing
            (local anesthetic), for example surgery on a finger, toe or for
            removal of a skin lesion. We can also provide some light sedation
            which will keep you in a “twilight stage” during the surgery.
          </Typography>
          <br />
          <br />
          <Typography variant="span" style={{ fontWeight: "700" }}>
            Regional Anesthesia -
          </Typography>
          <Typography variant="span">
            &nbsp;In order to provide an extended period of pain relief, your
            anesthesiologist may suggest supplementing your anesthetic with a
            nerve block. These are usually done in addition to a general
            anesthetic. Nerve blocks are performed before you go to sleep and
            involves freezing a “region” of your body. For example, freezing a
            larger nerve that supplies your arm or leg. A small needle is
            directed toward the nerve supplying sensation to the surgical site.
            This is performed under ultrasound guidance to ensure the local
            anesthetic surrounds the nerve. By freezing the nerve, you may not
            require as deep of an anesthetic and it may also lessen the need for
            narcotics. It is a technique that is particularly suited for
            shoulder, knee or ankle surgery. You will find that when you wake
            up, your arm/leg is frozen so care must be taken when ambulating.
            There is minimal discomfort in performing these blocks and the
            potential benefit afterwards is considerable. Nerve blocks are
            especially suited to shoulder/arm and foot/ankle surgery.
          </Typography>
          <br />
          <br />
          <Typography variant="span" style={{ fontWeight: "700" }}>
            Neuraxial Anesthesia (spinal or epidural) -
          </Typography>
          <Typography variant="span">
            &nbsp;This involves putting the local anesthetic on to the spinal
            cord or the nerves branching from it. Epidurals are commonly used
            for labour & delivery but are also very effective for abdominal or
            chest surgery. This involves inserting a small catheter that can
            continually provide medication for patients staying in the hospital.
            Knee and hip replacements are commonly done under spinal anesthesia
            in conjunction with intravenous sedation.
          </Typography>
          <br />
          <br />
          <Typography variant="span" style={{ fontWeight: "700" }}>
            General Anesthesia -
          </Typography>
          <Typography variant="span">
            &nbsp;This means putting the whole body to sleep for the surgery. In
            some cases, it will require a breathing tube to be placed into your
            windpipe (trachea) to assist your breathing. It is placed after you
            are asleep and removed before you are awake. If you ever were told
            that it was difficult to insert a breathing tube during a previous
            operation, be sure to tell the physician anesthesiologist so that
            special airway equipment can be ready for you.
          </Typography>
          <br />
          <br />
          <Typography variant="span" style={{ fontWeight: "700" }}>
            Deep Sedation -
          </Typography>
          <Typography variant="span">
            &nbsp;This is commonly used for colonoscopies, gastroscopies, and
            cardioversions. You will be placed into a deep level of sleep for a
            short period of time without the need for a breathing tube.
          </Typography>
          <br />
          <br />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Types;
