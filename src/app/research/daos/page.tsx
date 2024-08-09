"use client";
import Link from 'next/link';
import React from 'react';
import styles from './Daos.module.css';




export default function DAOS() {
  return (
      <div className={styles.resourcesSection}>
          <div className={styles.headerContainer}>
              <img src="/icons/arrow.svg" alt="Arrow Icon" className={styles.arrow} />
              <h1 className={styles.header}>DAOS<span className={styles.dot}>.</span></h1>
              <div className={styles.line}></div>
          </div>
          <div className={styles.cardsContainer}>
          <Link href="/research/daos/dao-basics">
                    <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <img src="/icons/ade.svg" alt="icon adelantare" className={styles.cardHubIcon} />
                        <h2 className={styles.cardTitle}>DAO Basics</h2>
                    </div>
                    <div className={styles.cardLine}></div>
                    <p className={styles.cardDescription}>An introduction to DAOs, their purpose, and how they operate.</p>
                 
                    <img src="/icons/arrow-card.svg" alt="Arrow Icon" className={styles.arrowRightIcon} />
                </div>
                </Link>
                <Link href="/research/daos/state-of-daos">
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <img src="/icons/ade.svg" alt="icon adelantar" className={styles.cardHubIcon} />
                        <h2 className={styles.cardTitle}>The State Of DAOs 2023</h2>
                    </div>
                    <div className={styles.cardLine}></div>
                    <p className={styles.cardDescription}>Understand the 2023 DAO landscape and how to contribute.</p>
                  
                    <img src="/icons/arrow-card.svg" alt="Arrow Icon" className={styles.arrowRightIcon} />
                </div>
             </Link>
            </div>
        </div>
    );
}