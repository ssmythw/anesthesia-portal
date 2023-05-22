import React, { useEffect } from "react";
import "./General.scss";
import Banner from "../../components/Banner/Banner";
import { Container, Grid, List, ListItem, Typography } from "@mui/material";
import { reveal } from "../../utils/reveal";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer/Footer";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";

const General = () => {
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
          content="The Department of Anesthesiology at Southlake has ____ members who
            provide comprehensive anesthetic care throughout the hospital. In
            addition to working in the 14 main operating rooms, staff also look
            after patients on the labour & delivery floor, endoscopy, the
            Anesthesia Assessment Clinic..."
        />
        <title>Southlake - General Information</title>
      </Helmet>
      <Banner name="General & Preoperative Information" />
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
            <Typography style={{ display: "inline-block" }} variant="h4">
              General Information
            </Typography>
            <br />
            <br />
            <br />
          </div>
          <Typography variant="p">
            The Department of Anesthesiology at Southlake has more than 30
            physicians who provide comprehensive anesthetic care throughout the
            hospital. In addition to working in the 14 main operating rooms,
            staff also look after patients on the labour & delivery floor,
            endoscopy, the Anesthesia Assessment Clinic (preop clinic),
            cardiology-electrophysiology department, the post cardiac surgery
            intensive care unit, cardiac surgery echo service, cataract surgery
            and the acute pain service. In the main operating rooms staff look
            after patients for all surgical specialties including:
          </Typography>
          <List>
            <div className="grid">
              <ListItem className="list-item">General Surgery</ListItem>
              <ListItem className="list-item">Orthopedic Surgery</ListItem>
              <ListItem className="list-item">Otolaryngology Surgery</ListItem>
              <ListItem className="list-item">Urology</ListItem>
              <ListItem className="list-item">Gynecology</ListItem>
              <ListItem className="list-item">Plastic Surgery</ListItem>
              <ListItem className="list-item">Thoracic Surgery</ListItem>
              <ListItem className="list-item">Cardiac Surgery</ListItem>
              <ListItem className="list-item">Vascular Surgery</ListItem>
            </div>
          </List>

          <br />
        </div>
        <hr className="section-hr" />
        <div className="reveal fade-right">
          <div className="header">
            <hr
              style={{
                width: "50px",
                display: "inline-block",
              }}
            />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Typography variant="h4">Our Training</Typography>
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
            unit. After their five years of residency, they complete their final
            examinations to become designated as a Fellow of the Royal College
            of Physicians (FRCP). Some then go on to complete a further year of
            training (fellowship year) in areas such as
            cardiac/pediatric/obstetrical anesthesia, chronic pain, regional
            anesthesia, or public health.
          </Typography>
          <br />
          <br />
          <Typography variant="p">
            During your surgery, your anesthesiologist will monitor your heart
            rate, blood pressure, oxygen levels, breathing, temperature, and
            level of anesthesia. He/she will administer medications based on the
            type of surgery, your body weight and underlying health and then
            prepare to wake you up at the end of surgery as comfortable as
            possible.
          </Typography>
          <br />
          <br />
        </div>
        <hr className="section-hr" />
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
            <Typography variant="h4">Preoperative Information</Typography>
          </div>
          <br />
          <br />
          <Grid container>
            <Grid sm={12} md={6} style={{ padding: "0px 15px" }}>
              <LabelImportantIcon className="general-icon"></LabelImportantIcon>
              <Typography sx={{ display: "inline" }} variant="h6">
                Preop Clinic
              </Typography>
              <br />
              <Typography variant="p">
                Your surgeon may ask you to be seen by an anesthesiologist prior
                to surgery to evaluate your medications and whether any
                underlying health issue needs to be optimized before surgery.
                Your anesthesiologist in the Anesthesia Assessment Clinic is
                well trained to address any concerns and answer any questions
                you may have. We want to ensure you are prepared mentally and
                physically for your surgery.
              </Typography>
            </Grid>
            <Grid md={6}>
              <img
                className="preop__img preop__img_hide"
                src="consult.jpg"
                alt=""
              />
            </Grid>
          </Grid>
          <br />
          <Grid container>
            <Grid item md={6}>
              <img
                className="preop__img preop__img_hide"
                src="puzzled.avif"
                alt=""
              />
            </Grid>
            <Grid item sm={12} md={6} style={{ padding: "0px 15px" }}>
              <LabelImportantIcon className="general-icon"></LabelImportantIcon>

              <Typography sx={{ display: "inline" }} variant="h6">
                Should I Take My Medications?
              </Typography>
              <br />
              <Typography variant="p">
                Many medications can be taken as usual the morning before
                surgery. There are, however, several medications that need to be
                carefully managed before surgery. These include blood thinners,
                high blood pressure medications and diabetic drugs. You will
                need to discuss this with the anesthesiologist and pharmacist in
                the Anesthesia Assessment Clinic. Please bring all your
                medications with you to your appointment. Instructions will be
                given to you regarding your medications.
              </Typography>
            </Grid>
          </Grid>
          <br />
          <Grid container>
            <Grid item sm={12} md={6} style={{ padding: "0px 15px" }}>
              <LabelImportantIcon className="general-icon"></LabelImportantIcon>

              <Typography sx={{ display: "inline" }} variant="h6">
                Can I Eat Before Surgery?
              </Typography>
              <br />
              <Typography variant="p">
                Solid foods are not to be taken the morning of your operation.
                Your last solid foods should be the evening before your
                operation. This is to minimize the risk of you vomiting and then
                inhaling food into your lungs after you go to sleep. If you
                forget and have breakfast/lunch, your surgery will likely be
                cancelled. You are permitted to have clear liquids (water,
                ginger ale, apple juice, Gatorade) up to two hours before the
                procedure. Tea or coffee are also included in this list BUT no
                milk or cream.
              </Typography>
            </Grid>
            <Grid item md={6}>
              <img
                className="preop__img preop__img_hide"
                src="eating.jpg"
                alt=""
              />
            </Grid>
          </Grid>
          <br />
          <Grid container>
            <Grid item md={6}>
              <img
                className="preop__img preop__img_hide"
                src="meds.jpg"
                alt=""
              />
            </Grid>
            <Grid item sm={12} md={6} style={{ padding: "0px 15px" }}>
              <LabelImportantIcon className="general-icon"></LabelImportantIcon>

              <Typography sx={{ display: "inline" }} variant="h6">
                Preop Medication
              </Typography>
              <br />
              <Typography variant="p">
                Depending on the type of surgery, you may be given a mild pain
                reliever (i.e. Tylenol/Celebrex) after you check in. Many
                patients may experience some anxiety before surgery. This is
                completely understandable. On occasion your anesthesiologist may
                order a mild sedative pill for you. This should be discussed
                with the anesthesiologist in the Preop Clinic.
              </Typography>
            </Grid>
          </Grid>
          <br />
          <Grid container>
            <Grid item sm={12} md={6} style={{ padding: "0px 15px" }}>
              <LabelImportantIcon className="general-icon"></LabelImportantIcon>

              <Typography sx={{ display: "inline" }} variant="h6">
                Can I Drive Home?
              </Typography>
              <br />
              <Typography variant="p">
                No. After your procedure you will be required to have someone
                drive you home and stay with you for the next 24 hours. This is
                because anesthetics take up to 24 hours to leave the body.
                Therefore, no driving or operating dangerous machinery, no major
                potentially life altering decisions and avoid alcohol for 24
                hours since it will interact with the anesthetics that are still
                in your system.
              </Typography>
            </Grid>
            <Grid item>
              <img
                className="preop__img preop__img_hide"
                src="car.jpg"
                alt=""
              />
            </Grid>
          </Grid>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default General;
