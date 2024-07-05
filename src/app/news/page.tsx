"use client";
import React, { useState } from 'react';
import styles from './News.module.css';

const News = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([
    { title: 'OP Bulletin', href: 'https://paragraph.xyz/@web3citizenxyz/community/OP%20Bulletin', icon: '/icons/ade.svg', subtitle: 'Weekly news and insights on the Optimism Collective.' },
    { title: 'EigenLayer News', href: 'https://paragraph.xyz/@web3citizenxyz/community/EigenLayer%20News', icon: '/icons/ade.svg', subtitle:'Weekly summaries of the most significant events in the EigenLayer ecosystem.' },
    { title: 'Arbitrum DAO News', href: 'https://arbitrumdaonews.substack.com/', icon: '/icons/ade.svg', subtitle:'Weekly news and insights on the Optimism Collective.' },
  ]);

  const filteredResults = results.filter(result => result.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className={styles.newslettersSection}>
      <div className={styles.buttons}>
        <button onClick={subscribeSelected}>Subscribe Selected</button>
        <button onClick={selectAll}>Select All</button>
        <button onClick={deselectAll}>Deselect All</button>
      </div>
      <div className={styles.cardsContainer}>
        {filteredResults.map((result, index) => (
          <div key={index} className={styles.newsletterCard}>
            <div className={styles.header}>
              <input type="radio" className={`${styles.newsletterRadio} newsletter-radio`} name="newsletter" />
              <h3>{result.title}</h3>
            </div>
            <hr className={styles.separator} />
            <p>{result.subtitle}</p>
            <a href={result.href} className={styles.viewMore}><span className={styles.More}>+</span> View More</a>
          </div>
        ))}
      </div>
    </div>
  );

  function subscribeSelected() {
    const selected = document.querySelector('input[name="newsletter"]:checked') as HTMLInputElement;
    if (selected && selected.parentNode) {
      const selectedTitle = (selected.parentNode.querySelector('h3') as HTMLElement).textContent;
      alert(`Subscribed to ${selectedTitle}`);
    } else {
      alert('Please select a newsletter to subscribe.');
    }
  }

  function selectAll() {
    const radios = document.querySelectorAll('.newsletter-radio') as NodeListOf<HTMLInputElement>;
    radios.forEach(radio => (radio.checked = true));
  }

  function deselectAll() {
    const radios = document.querySelectorAll('.newsletter-radio') as NodeListOf<HTMLInputElement>;
    radios.forEach(radio => (radio.checked = false));
  }
};

export default News;
