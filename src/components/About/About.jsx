import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/front-end (1).png")} alt="Cursor icon" className={styles.logoabout}/>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I specialize in building responsive, accessible, and performance-optimized websites. I bring UI designs to life with clean HTML, CSS, JavaScript, and React — ensuring seamless experiences across devices and browsers.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/backend.png")} alt="Server icon" className={styles.logoabout}/>
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Skilled in crafting fast, scalable backend systems and APIs. I focus on writing efficient server-side logic that powers robust applications, with attention to security, performance, and integration.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("skills/retro (2).png")} alt="UI icon" className={styles.logoabout}/>
            <div className={styles.aboutItemText}>
              <h3>Team Player with Agile Exposure</h3>
              <p>
                Comfortable working in collaborative environments, version control (Git), and agile-based development cycles.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("skills/growth.png")} alt="UI icon" className={styles.logoabout}/>
            <div className={styles.aboutItemText}>
              <h3>Curious & Growth-Oriented</h3>
              <p>
                Passionate about learning, especially in full-stack development and emerging areas like machine learning.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};