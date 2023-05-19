import { Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import GroupsIcon from "@mui/icons-material/Groups";
import "./About.scss";
import { reveal } from "../../utils/reveal";
import Footer from "../../components/Footer/Footer";

const About = () => {
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
        <title>Southlake - About</title>
      </Helmet>
      <Banner
        name="About Us"
        icon={<GroupsIcon fontSize="xl" className="svg_icons-about" />}
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
            />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Typography variant="h4">Our Department</Typography>
            <br />
            <br />
            <br />
          </div>
          <Typography variant="p">
            York County Hospital (now Southlake Regional Health Centre) was
            opened in 1977 and family doctors provided all anesthesia to
            patients. Over the years, our staff has grown from 8 (1992) to more
            than 30 today and all anesthetists have fellowship training (FRCP).
            In addition to our staff of anesthetists, we have a dedicated pain
            nurse assisting us with the in-patient care of those requiring more
            aggressive modalities to control post operative pain. This allows us
            to closely monitor their medication needs and minimize potential
            side effects. The department works closely with our anesthesia
            assistants in the operating room, the regional block room and in the
            cataract centre. They are invaluable in equipment preparation and
            assistance with airway management in the operating rooms.
          </Typography>
          <br />
          <br />
          <Typography sx={{ textDecoration: "underline" }} variant="h6">
            Developments
          </Typography>
          <br />
          <Typography variant="p">
            In the 1980s, the department was instrumental in developing advanced
            monitoring in the ICUs and the opening the pulmonary function
            testing lab. Over twenty years ago we started the blood conservation
            program that enabled patients to donate their own blood prior to
            surgery. We have also become a participant in the care of our
            palliative care patients who are struggling with pain control. The
            anesthesia and cardiac surgery departments worked together to open
            the cardiac surgery ICU in ____. A number of our staff have gained
            expertise in intraoperative assessment of heart function with
            transesophageal echocardiography (TEE) and we now have ___ staff who
            are fully certified in TEE. Over the past two years the department’s
            work has enabled patients to leave the hospital after knee
            replacement surgery with portable pain pumps that deliver freezing
            medicine around the joint thus minimizing narcotic use and providing
            better pain control. We have been able to reduce the length of stay
            for these patients, most of whom go home the same day after surgery.
          </Typography>
          <br />
          <br />
          <img className="about-toys" src="guy.jpg" alt="" />
          <Typography sx={{ textDecoration: "underline" }} variant="h6">
            Specialty Training
          </Typography>
          <br />
          <Typography variant="p">
            The department is fortunate to have attracted new staff members who
            have completed extra fellowship training in a variety of important
            areas. These include Intensive Care Medicine, Cardiac Anesthesia and
            TEE, Regional Anesthesia, Chronic Pain Management, Pediatric
            Anesthesia, and Public Health. With this level of advanced training,
            we have been able to expand programs and provide expertise not
            commonly available in the community hospital setting.
          </Typography>
          <br />
          <br />
          <Typography sx={{ textDecoration: "underline" }} variant="h6">
            Representation
          </Typography>
          <br />
          <Typography variant="p">
            Apart from their busy work at SRHC, several staff also contribute
            their time to various committees at the provincial and regulatory
            level. These include positions with the Ontario Medical Association,
            the College of Physicians and Surgeons and at the local level (ICU
            network). A number of staff also have academic appointments with the
            Departments of Anesthesia at the University of Toronto and McMaster
            University.
          </Typography>
          <br />
          <br />
          <Typography sx={{ textDecoration: "underline" }} variant="h6">
            Teaching
          </Typography>
          <br />
          <Typography variant="p">
            Although not considered a “teaching centre”, the Department has
            contributed to the teaching of medical students, medical and
            anesthesia residents, and paramedics. We are a popular destination
            for students because of the acuity and variety of our work and the
            friendly, welcoming atmosphere at SRHC.
          </Typography>
          <br />
          <br />
          <Typography sx={{ textDecoration: "underline" }} variant="h6">
            Awards
          </Typography>
          <br />
          <Typography variant="p">
            Our staff has been recognized for their commitment to patient care.
            Three of the anesthesiologists have received the SRHC award for
            leadership, one of SRHC's top awards. Individuals have also been
            recognized for their excellence in teaching by the University of
            Toronto and the Canadian Anesthesia Society's top award was given to
            one of our staff in recognition of his outstanding contribution to
            the field of anesthesiology at the national level.
          </Typography>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default About;
