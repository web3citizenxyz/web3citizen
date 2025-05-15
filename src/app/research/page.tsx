"use client";

import React from 'react';
import Link from 'next/link';
import styles from '../styles/Research.module.css';

const researchTopics = [
  {
    title: "DAOS",
    imgSrc: "/icons/category-1.svg",
    slug: "daos"
  },
  {
    title: "EigenLayer",
    imgSrc: "/icons/category-2.svg",
    slug: "eigenlayer",
  },
  {
    title: "ZK 101",
    imgSrc: "/icons/category-3.svg",
    slug: "zk/articles/zk-101",
   
  },
  {
    title: "Rollups",
    imgSrc: "/icons/category-4.svg",
    slug: "rollups",
  }
];


export default function Research() {
  return (
    <div className={styles.researchPage}>
      <header className={styles.header}>
        <h1>Reports & Articles</h1>
        <h2>Explore our selection of reports </h2>
        <p>
      Select a category and begin exploring.
        </p>
      </header>
      <div className={styles.cardsContainer}>
        {researchTopics.map((topic, index) => (
       
            <Link href={`/research/${topic.slug}`} key={index}>
              <div className={styles.card}>
                <h2>{topic.title}</h2>
                <img src={topic.imgSrc} alt={`${topic.title} graphic`} className="categoryIcon" />
                <img src="/icons/arrow-card.svg" alt="Arrow" className={styles.arrow}  />
              </div>
            </Link>
          
        ))}
      </div>
    </div>
  );
}
