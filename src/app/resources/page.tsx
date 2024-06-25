"use client";
import React from 'react';
import styles from '../styles/Resources.module.css';

export default function Resources() {
  return (
      <div className={styles.resourcesSection}>
          <div className={styles.headerContainer}>
              <img src="/icons/arrow.svg" alt="Arrow Icon" className={styles.arrow} />
              <h1 className={styles.header}>Hubs<span className={styles.dot}>.</span></h1>
              <div className={styles.line}></div>
          </div>
          <div className={styles.cardsContainer}>
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <img src="/icons/op.svg" alt="OP Logo" className={styles.cardHubIcon} />
                        <h2 className={styles.cardTitle}>OP Hub</h2>
                    </div>
                    <div className={styles.cardLine}></div>
                    <p className={styles.cardDescription}>Your hub with essential resources and guides authored by Optimism, The Optimism Collective and the OP community.</p>
                 
                    <img src="/icons/arrow-card.svg" alt="Arrow Icon" className={styles.arrowRightIcon} />
                </div>
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <img src="/icons/arbitrum.svg" alt="Arbitrum Logo" className={styles.cardHubIcon} />
                        <h2 className={styles.cardTitle}>Arbitrum Hub</h2>
                    </div>
                    <div className={styles.cardLine}></div>
                    <p className={styles.cardDescription}>Your hub with essential resources and guides authored by the Arbitrum Foundation, ArbitrumDAO and the community.</p>
                  
                    <img src="/icons/arrow-card.svg" alt="Arrow Icon" className={styles.arrowRightIcon} />
                </div>
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <img src="/icons/eigen.png" alt="EigenLayer Logo" className={styles.cardHubIcon} />
                        <h2 className={styles.cardTitle}>EigenLayer Hub</h2>
                    </div>
                    <div className={styles.cardLine}></div>
                    <p className={styles.cardDescription}>Key resources, docs and guides on EigenLayer.</p>
                   
                    <img src="/icons/arrow-card.svg" alt="Arrow Icon" className={styles.arrowRightIcon} />
                </div>
            </div>
        </div>
    );
}