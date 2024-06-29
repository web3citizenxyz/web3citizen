"use client";
import React, { useEffect } from 'react';
import styles from './Intro.module.css';

interface IntroProps {
  onFinish: () => void;
}

export default function Intro({ onFinish }: IntroProps) {

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const logoContainer = document.querySelector(`.${styles.logoContainer}`) as HTMLElement | null;
      const line = document.querySelector(`.${styles.line}`) as HTMLElement | null;

      if (logoContainer && line) {
        logoContainer.style.transform = `translateY(-${scrollY * 0.5}px)`;
        line.style.height = `${scrollY * 1.5}px`;

        if (scrollY >= window.innerHeight) {
          line.style.width = '2500px';
          setTimeout(() => {
            window.scrollTo(0, 0);
            localStorage.setItem('introFinished', 'true');
            onFinish();
          }, 1500);
        } else {
          line.style.width = '1px';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [onFinish]);

  return (
    <div className={styles.introContainer}>
      <div className={styles.logoContainer}>
        <img src="/icons/logo-intro.svg" alt="Logo" className={styles.logo} />
        <p>WELCOME</p>
        <div className={styles.line}></div>
      </div>
    </div>
  );
}

    
