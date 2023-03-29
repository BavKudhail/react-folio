import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaCloudDownloadAlt,
} from "react-icons/fa";

const ContactSideBar = () => {
  return (
    <div className="sidebar">
      <a
        href="https://www.linkedin.com/in/lola-kasimova-9533a794"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin
          size={40}
          style={{
            color: "blue",
          }}
        />
      </a>
      <a
        href="https://github.com/19Lola89"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={40} style={{ color: "black" }} />
      </a>
      <a className="envelope-logo" href="mailto:lolakasimova@icloud.com">
        <FaEnvelope size={40} style={{ color: "green" }} />
      </a>

      <a
        href="https://drive.google.com/file/d/1W3JSjQuansQLBGSO3qtTQmKwTvW-adbh/view?usp=sharing"
        download
      >
        <FaCloudDownloadAlt size={40} style={{ color: "pink" }} />
      </a>
    </div>
  );
};

export default ContactSideBar;
