import React, { useEffect } from "react";
import Faq from "react-faq-component";
import Container from "@mui/material/Container";
import "./QA.scss";
import Banner from "../../components/Banner/Banner";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import { Helmet } from "react-helmet";
import { reveal } from "../../utils/reveal";

const QA = () => {
  const data = {
    title: "Frequently Asked Questions About Anesthesia",
    rows: [
      {
        title: "Will I wake up during the operation?",
        content:
          "This is a question that we hear quite frequently. The incidence of awareness under anesthesia is very rare, about 1-2/1000. Certain factors such as substance abuse, opioid use, severe trauma (i.e. unstable from an accident), may increase the risk. It is therefore important that you provide a full history to your anesthetist so that we can minimize any risk of awareness for you.",
      },
      {
        title: "Will I feel sick afterwards?",
        content:
          "Post-operative nausea and vomiting (PONV) are common after surgery, occurring about 30 - 40% of the time. There are a number of factors that increase the risk of PONV such as female, non-smokers and high narcotic use after surgery. Some anesthetic drugs may also contribute to PONV such as narcotics and nitrous oxide (laughing gas). If you are at an increased risk, we will administer medication(s) that can reduce the risk to between 5 - 10%.",
      },
      {
        title: "What are the risks of anesthesia?",
        content:
          "In the 1970’s the published mortality risk was 1/100,000 but modern technological advances over the past 30-40 years have dramatically reduced the risks of surgery and anesthesia to 1/200,000. Minor risks include sore throat, PONV, tooth damage, and nerve injury due to positioning. More significant issues are allergic reactions and awareness. Death under anesthesia is an extremely rare event. Several patient factors such as sleep apnea, morbid obesity, high blood pressure, heart/lung disease, excessive alcohol use, drug abuse, smoking, diabetes, liver/kidney disease, neuromuscular disorders may increase the risk. Routine use of alcohol, pain medications or sedatives can affect the amount of anesthesia you may need. Smoking damages the lungs –so please be honest with us about your current habits. Tell your anesthetist about any health issues you may have so that we can plan your anesthetic and keep you safe.",
      },
      {
        title: "Do you stay with me the whole time in the operating room?",
        content:
          "Absolutely. We monitor you while you sleep with state-of-the-art technology, but the best monitor available to you is your anesthetist.",
      },
      {
        title: "Will I have pain afterwards?",
        content:
          "Depending on the type of surgery you are having, you can expect some pain/discomfort ranging from “almost none” to moderate. You may be given some pain medicine before surgery and we may suggest a nerve block, if applicable, when we are expecting more significant post operative pain. We will keep a close eye on you in the recovery room to make sure your pain is manageable before you are discharged home.",
      },
    ],
  };

  const styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    rowContentTextSize: "15px",
    rowTitleTextSize: "22px",
  };

  const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };

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
          content="Department of Anesthesiology - Frequently asked questions."
        />
        <title>Southlake - Frequently Asked Questions</title>
      </Helmet>
      <div className="reveal fade-right">
        <Banner
          name="FAQ"
          icon={<PsychologyAltIcon fontSize="xl" className="svg_icons" />}
        />
        <Container maxWidth="lg" className="qa">
          <Faq data={data} styles={styles} config={config} />
        </Container>
      </div>
    </>
  );
};

export default QA;
