"use client";

import React from 'react';
import Link from 'next/link';
import styles from '../styles/Research.module.css';

const governanceTopics = [
  {
    title: "Arbitrum",
    imgSrc: "/icons/category-1.svg",
    url: "https://www.tally.xyz/gov/arbitrum/delegate/ocandocrypto.eth"
  },
  {
    title: "Scroll",
    imgSrc: "/icons/category-2.svg",
    url: "https://gov.scroll.io/delegates/web3citizenxyz.eth"
  }
];

export default function Governance() {
  return (
    <div className={styles.researchPage}>
      <header className={styles.header}>
        <h1>Governance</h1>
        <h2>We're contributing to decentralized governance in web3.</h2>
        <p>
          Delegate to us and help shape the future of rollups.
        </p>
      </header>
      <div className={styles.cardsContainer}>
        {governanceTopics.map((topic, index) => (
          <a href={topic.url} key={index} target="_blank" rel="noopener noreferrer">
            <div className={styles.card}>
              <h2>{topic.title}</h2>
              <img src={topic.imgSrc} alt={`${topic.title} graphic`} className="categoryIcon" />
              <img src="/icons/arrow-card.svg" alt="Arrow" className={styles.arrow}  />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
} 