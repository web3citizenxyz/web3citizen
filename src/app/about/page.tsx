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
          Welcome to Web3Citizen, your gateway to navigating the WEB3 universe. Our mission is to <span className={styles.highlight}>empower</span> our community through cutting-edge research and dedicated support for growth.
        </p>
        <p className={styles.headerText}>
          At Web3Citizen, we make complex WEB3 concepts accessible and easy to understand. Our research-driven approach simplifies the intricacies of WEB3 for everyone. We are a community-centered project, where we all <span className={styles.highlight}>contribute</span> to driving innovation and <span className={styles.highlight}>expanding</span> our collective knowledge.
        </p>
      </header>
    </div>
  );
}