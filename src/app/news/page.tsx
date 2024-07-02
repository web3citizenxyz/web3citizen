"use client";
import React, { useState } from 'react';
import styles from './News.module.css';

const News = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([
    { title: 'OP Bulletin', href: '/resources/op', icon: '/icons/ade.svg', subtitle: 'Weekly news and insights on the Optimism Collective.' },
    { title: 'EigenLayer News', href: '/resources/eigen', icon: '/icons/ade.svg', subtitle:'Weekly summaries of the most significant events in the EigenLayer ecosystem.' },
    { title: 'Other newsletters', href: '/resources/other', icon: '/icons/ade.svg', subtitle:'Weekly news and insights on the Optimism Collective.' },
  ]);

  const filteredResults = results.filter(result => result.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className={styles.newslettersSection}>
         <div className={styles.cardsContainer}>
      {filteredResults.map((result, index) => (
        <div key={index} className={styles.newsletterCard}>
          <div className={styles.header}>
          <input type="radio" name={`newsletter-${index}`} className={styles.newsletterRadio} />
            <h3>{result.title}</h3>
          </div>
          <hr className={styles.separator} />
          <p>{result.subtitle}</p>
          <a href={result.href} className={styles.viewMore}><span className={styles.More}>+</span> View More</a>
        </div>
      ))}
      </div>
      <div className={styles.buttons}>
        <button onClick={subscribeSelected}>Subscribe Selected</button>
        <button onClick={selectAll}>Select All</button>
        <button onClick={deselectAll}>Deselect All</button>
      </div>
    </div>
  );

  function subscribeSelected() {
    const selected = document.querySelector('input[type="radio"]:checked');
    if (selected) {
      const selectedTitle = selected.parentNode.querySelector('h3').textContent;
      alert(`Subscribed to ${selectedTitle}`);
    } else {
      alert('Please select a newsletter to subscribe.');
    }
  }

  function selectAll() {
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.checked = true);
  }

  function deselectAll() {
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.checked = false);
  }
};

export default News;