import React from "react";
import Layout from "../components/Layout";
import ReqForm from "../components/ReqForm";
import ContactSideBar from "../components/ContactSideBar";
import backgroundImage from "../assets/pencil.png";

import "../pages/Contact.css";

const Contact = () => {
  const background = `url(${backgroundImage})`;
  return (
    <Layout>
      <div>
        <div
          className="contactContainer"
          style={{
            padding: "3em",
            display: "flex",
          }}
        >
          <div
            style={{
              backgroundImage: background,
              backgroundSize: "cover",

              flex: "2",
              display: "flex",
            }}
          >
            <ReqForm />
          </div>
          <div>
            <ContactSideBar />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
