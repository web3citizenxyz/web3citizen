"use client";

import styles from './styles/Home.module.css';
import Learn from './Learn';
import Partner from './Partner';

export default function Home() {
  return (
    <>
      <div className={styles.introSection}>
        <section className={styles.intro}>
        <div className={styles.headerContainer}>
          <h1>Your infinite garden guide.</h1>
          <div className={styles.line}></div>
          </div>
          <p>/</p>
          <p>WE ARE</p>
          <p>WEB3CITIZEN</p>
        </section>
      </div>
      <div className={styles.gradientLine}></div>
      <Learn />
      <Partner />
      <div className={styles.main}>
        <section className={styles.community}>
          <div className={styles.content}>
            <h1>Community</h1>
            <p>Imagine being part of a project that makes a real difference in the ecosystem.</p>
            <p>Let's create something amazing together.</p>
            <button>Join now</button>
          </div>
        </section>
      </div>
    </>
  );
}
