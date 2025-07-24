import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:srivastavasatyam738@gmail.com">Email</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/satyam-srivastava-04248119a">LinkedIn</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/Satyam8542">Github</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("skills/instagram (2).png")} alt="Instagram icon" />
          <a href="https://www.instagram.com/_satyam_srivastava67?igsh=Y2MxMnNjY21ka2gy">Instagram</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("skills/telephone-symbol-button.png")} alt="Contact icon" />
          <a href="tel:+91 9919273276">Contact No.</a>
        </li>
      </ul>
    </footer>
  );
};