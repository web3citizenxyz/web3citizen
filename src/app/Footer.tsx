"use client"

import React from 'react';
import styles from './styles/Footer.module.css';


type FooterProps = {
  isBlack: boolean;
};



const Footer = ({ isBlack }: FooterProps) => {
  return (
    <footer className={`${styles.footer} ${isBlack ? styles.black : ''}`}>
      <div className={styles.footerContainer}>
        <div className={styles.logoContainer}>
          <img src="/icons/logo-completo.svg" alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.rightsReserved}>
          © 2024 — All Rights Reserved
        </div>
        <div className={styles.socialIcons}>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src="/icons/x-twitter.svg" alt="X" className={styles.icon} />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src="/icons/in.svg" alt="LinkedIn" className={styles.icon} />
          </a>
        </div>
        <a href="#" className={styles.scrollToTop} onClick={() => window.scrollTo(0, 0)}>
          <img src="/icons/arrow-foot.svg" alt="Scroll to Top" className={styles.arrowIcon} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

