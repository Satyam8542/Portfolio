import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import exp from "../../data/exp.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <ul className={styles.history}>
        {exp.map((expItem, id) => {
          return (
            <li key={id} className={styles.historyItem}>
              <img
                src={getImageUrl(expItem.imageSrc)}
                alt={`${expItem.organisation} Logo`}
              />
              <div className={styles.historyItemDetails}>
                <h3>
                  {expItem.role},{" "}
                  <a
                    href={expItem.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.companyLink}
                  >
                    {expItem.organisation}
                  </a>
                </h3>

                <ul>
                  {expItem.experiences.map((experience, id) => {
                    return <li key={id}>{experience}</li>;
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <h2 className={styles.title}>Certifications</h2>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>
                  {" "}
                  <a
                    href={historyItem.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.companyLink}
                  >
                    {historyItem.role}
                   
                  </a>

                  ,{historyItem.organisation}
                </h3>

                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};