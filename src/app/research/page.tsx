"use client";
import React from 'react';
import styles from '../styles/Research.module.css';

const researchTopics = [
  {
    title: "Category",
    imgSrc: "/icons/category-1.svg",
  },
  {
    title: "Category",
    imgSrc: "/icons/category-2.svg",
  },
  {
    title: "Category",
    imgSrc: "/icons/category-3.svg",
  },
  {
    title: "Category",
    imgSrc: "/icons/category-4.svg",
  },
];


export default function Research() {
  return (
    <div className={styles.researchPage}>
      <header className={styles.header}>
        <h1>Keep updated with our Research Reports</h1>
        <p>
          Find our special curated selection of reports, select a category or
          choose your <br /> specific topic filters from the <a  className={styles.researchLink} > RESEARCH</a> menu on the navigation bar.
        </p>
      </header>

      <div className={styles.cardsContainer}>
        {researchTopics.map((topic, index) => (
          <div className={styles.card} key={index}>
            <h2>{topic.title}</h2>
            <img src={topic.imgSrc} alt={`${topic.title} graphic`} className="categoryIcon" />
            <img src="/icons/arrow-card.svg" alt="Arrow" className={styles.arrow}  />
          </div>
        ))}
      </div>
    </div>
  );
        }
