import React from "react";
import Layout from "../components/Layout";
import "../pages/About.css";
import ContentCard from "../components/ContentCard";

const About = () => {
  return (
    <div>
      <Layout>
        <div className="aboutContainer">
          <div className="row pic">
            <img src={`${process.env.PUBLIC_URL}/lola.jpeg`} alt="Avatar" />
          </div>

          <div className="aboutContEl row">
            <ContentCard title="A little bit about me" />
            <p
              style={{ margin: "10px", fontFamily: "sofia", fontSize: "20px" }}
            >
              It is so nice to meet you ! I'm Lola Kasimova - an
              empathetic,highly sensitive and fun loving human who loves
              meaningful conversations, life changing ideas and artistic
              expression.<br></br>
              <br></br>Supporting others is the driving force behind the idea of
              my dream career. I strive to broaden the integration
              anthropological theory to tech world and make art out of it. I
              believe it is never too late to pursue your absolute biggest
              aspirations.<br></br>
              <br></br>
              Have an amazing day !
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default About;
