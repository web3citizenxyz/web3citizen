"use client";
import Link from 'next/link';
import React from 'react';
import styles from './Rollups.module.css';


export default function Rollups() {
    return (
        <div className={styles.resourcesSection}>
            <div className={styles.headerContainer}>
                <img src="/icons/arrow.svg" alt="Arrow Icon" className={styles.arrow} />
                <h1 className={styles.header}>Rollups<span className={styles.dot}>.</span></h1>
                <div className={styles.line}></div>
            </div>
            <div className={styles.cardsContainer}>
                <Link href="/research/rollups/based-rollups" className={styles.card}>
                    <div className={styles.cardHeader}>
                        <img src="/icons/ade.svg" alt="icon adelantare" className={styles.cardHubIcon} />
                        <h2 className={styles.cardTitle}>Based Rollups</h2>
                    </div>
                    <div className={styles.cardLine}></div>
                    <p className={styles.cardDescription}>Moving sequencing back to the L1.</p>
                    <img src="/icons/arrow-card.svg" alt="Arrow Icon" className={styles.arrowRightIcon} />
                </Link>
                <Link href="/research/rollups/native-rollups">
                    <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <img src="/icons/ade.svg" alt="icon adelantare" className={styles.cardHubIcon} />
                        <h2 className={styles.cardTitle}>Native Rollups</h2>
                    </div>
                    <div className={styles.cardLine}></div>
                    <p className={styles.cardDescription}>Moving execution back to the L1.</p>
                    <img src="/icons/arrow-card.svg" alt="Arrow Icon" className={styles.arrowRightIcon} />
                    </div>
                </Link>
            </div>
        </div>
    );
} 