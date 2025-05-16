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
        <a href="/" target="_blank" rel="noopener noreferrer">
          <img src="/icons/logo-completo.svg" alt="Logo" className={styles.logo} />
          </a>
        </div>
        <div className={styles.rightsReserved}>
          © {new Date().getFullYear()} — All Rights Reserved
        </div>
        <div className={styles.socialIcons}>
          <a href="https://x.com/web3citizenxyz?s=21" target="_blank" rel="noopener noreferrer">
            <img src="/icons/x-twitter.svg" alt="X" className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/company/web3citizenxyz/" target="_blank" rel="noopener noreferrer">
            <img src="/icons/in.svg" alt="LinkedIn" className={styles.icon} />
          </a>
          
          <a href="https://paragraph.xyz/@web3citizenxyz" target="_blank" rel="noopener noreferrer">
            <img src="/icons/paragraph.png" alt="Paragraph" className={styles.icon} />
          </a>
          
          
          <a href="https://github.com/web3citizenxyz/" target="_blank" rel="noopener noreferrer">
            <img src="/icons/github.svg" alt="Github" className={styles.icon} />
          </a>
          
          
                 </div>
        {/*
        <a href="#" className={styles.scrollToTop} onClick={() => window.scrollTo(0, 0)}>
          <img src="/icons/arrow-foot.svg" alt="Scroll to Top" className={styles.arrowIcon} />
        </a>
        */}
      </div>
    </footer>
  );
};

export default Footer;

