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
      Welcome to<span className={styles.highlight}> Web3 Citizen</span> – your trusted gateway to navigating the Web3 universe.
        </p>
        <p className={styles.headerText}>
        As a community-centered research collective, we gather around a shared mission: making complex concepts accessible. Through our reports and resources, our commitment is to expand collective knowledge by open sourcing our insights.
        </p>
        <p className={styles.headerText}>
        Join us in our exploration of Ethereum’s infinite garden.
        </p>
      </header>
    </div>
  );
}