import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  const sentence = `I am an IT student specializing in full stack development. Proficient in HTML, CSS, JavaScript, Python, and C, excels in creating responsive interfaces and robust backend systems. An SQL expert, skillfully manages databases and uses Django and Flask to build scalable applications.`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          descriptionRef.current?.classList.add(styles.visible);
          buttonRef.current?.classList.add(styles.visible);
        }
      },
      { threshold: 0.6 }
    );

    if (descriptionRef.current) observer.observe(descriptionRef.current);

    return () => {
      if (descriptionRef.current) observer.unobserve(descriptionRef.current);
    };
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I'm <span className={styles.name}>Satyam Srivastava</span>
        </h1>

        <p ref={descriptionRef} className={styles.description}>
          {sentence.split(" ").map((word, i) => (
            <span
              key={i}
              className={styles.word}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {word}&nbsp;
            </span>
          ))}
        </p>

        <a
          ref={buttonRef}
          href="mailto:srivastavasatyam738@gmail.com"
          className={`${styles.contactBtn} ${styles.animatedBtn}`}
        >
          Contact Me
        </a>
      </div>

      <img
        src={getImageUrl("hero/self1.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
