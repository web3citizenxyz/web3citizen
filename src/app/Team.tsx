"use client";

import React, { useEffect, useState } from 'react';
import styles from './styles/Team.module.css';

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { src: "/images/profile-1.jpg", twitter: "https://twitter.com/eugenia_0x" },
    { src: "/images/profile-2.png", twitter: "https://twitter.com/ocandocrypto" },
    { src: "/images/profile-3.jpeg", twitter: "https://twitter.com/0xpili_" },
 
    { src: "/images/perfil-4.jpg", twitter: "https://x.com/oxlumi" },
    { src: "/images/javi-profile.jpg", twitter: "https://x.com/Javibufon" },
 
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section className={styles.team}>
      <div className={styles.content}>
        <h1>Contributors</h1>
        <p>Share your knowledge with the community.</p>
        <p>We aim to create collaborative research, where anyone can share knowledge on different areas of the Ethereum ecosystem.</p>
        <button className={styles.btn}>
          <a href='https://github.com/web3citizenxyz/web3citizen' target='_blank'>Start Contributing</a>
        </button>
      </div>
      <div className={styles.teamsvg}>
        <div className={styles.carousel}>
          {items.map((item, index) => (
            <div
              key={index}
              className={`${styles.carouselItem} ${index === currentIndex ? styles.active : ''}`}
            >
            <a href={item.twitter} target="_blank" rel="noopener noreferrer">
              <img src={item.src} alt={`User ${index + 1}`} />
            </a>
          </div>
          ))}
        </div>
        <img src="/images/elipse-team.svg" alt="Semicircles" className={styles.elipseTeam} />
      </div>
    </section>
  );
}
