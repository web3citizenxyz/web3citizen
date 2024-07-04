"use client";
import React from 'react';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.aboutPage}>
         <div className={styles.logo}>
        <img src="/icons/logo-about.svg" alt="Logo" />
      </div>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>About</h1>
        <p className={styles.headerText}>
          Welcome to Web3Citizen, your gateway to navigating the WEB3 universe. Our mission is to <span className={styles.highlight}>empower</span> our community by making complex concepts accessible.Through our research and aggregated resources, we break down the intricacies of crypto narratives, so you don't have to.
        </p>
        <p className={styles.headerText}>
        As a community-centered project, where we all <span className={styles.highlight}>contribute</span> to fostering innovation and <span className={styles.highlight}>expanding</span> our collective knowledge.
        </p>
      </header>
    </div>
  );
}