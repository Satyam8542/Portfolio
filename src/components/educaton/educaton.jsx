import React from "react";
import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";

export const Education = ({ educationList }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Education</h2>
      <ul className={styles.educationList}>
        {educationList.map((item, index) => (
          <li key={index} className={styles.educationItem}>
            <img
              src={getImageUrl(item.imageSrc)}
              alt={`${item.institution} Logo`}
              className={styles.logo}
            />
            <div className={styles.details}>
              <h3 className={styles.degree}>
                {item.degree &&
                  item.degree.split(" ").map((word, i) => (
                    <span
                      key={`deg-${i}`}
                      className={styles.word}
                      style={{ transitionDelay: `${i * 0.05}s` }}
                    >
                      {word}&nbsp;
                    </span>
                  ))}
                ,
                {item.institution && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.institution}
                  >
                    {item.institution.split(" ").map((word, i) => (
                      <span
                        key={`inst-${i}`}
                        className={styles.word}
                        style={{ transitionDelay: `${i * 0.05}s` }}
                      >
                        {word}&nbsp;
                      </span>
                    ))}
                  </a>
                )}
              </h3>

              {item.duration && (
                <p className={styles.duration}>
                  {item.duration.split(" ").map((word, i) => (
                    <span
                      key={`dur-${i}`}
                      className={styles.word}
                      style={{ transitionDelay: `${i * 0.05}s` }}
                    >
                      {word}&nbsp;
                    </span>
                  ))}
                </p>
              )}

              {item.description && (
                <p className={styles.description}>
                  {item.description.split(" ").map((word, i) => (
                    <span
                      key={`desc-${i}`}
                      className={styles.word}
                      style={{ transitionDelay: `${i * 0.05}s` }}
                    >
                      {word}&nbsp;
                    </span>
                  ))}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
