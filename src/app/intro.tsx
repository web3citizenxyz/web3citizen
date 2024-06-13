"use client";
import { useRef, useEffect } from 'react';
import styles from './styles/intro.module.css';

export default function Intro() {
    const introRef = useRef<HTMLDivElement>(null);
    const curtainRef = useRef<HTMLDivElement>(null);

  
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50 && introRef.current && curtainRef.current) {
            introRef.current.classList.add(styles.hideWelcome);
            curtainRef.current.classList.add(styles.showCurtain);
            
            setTimeout(() => {
              curtainRef.current.classList.add(styles.expandCurtainLine);
              setTimeout(() => {
                curtainRef.current.classList.add(styles.fadeOut);
                document.body.classList.remove(styles.introActive); 
              }, 500); 
            }, 500); 
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      return (
        <>
          <div className={styles.introSection} ref={introRef}>
            <div className={styles.logoContainer}>
              <img src="/path/to/logo.svg" alt="Logo" className={styles.logo} />
              <p>WELCOME</p>
              <div className={styles.line}></div>
            </div>
          </div>
          <div className={styles.curtainSection} ref={curtainRef}>
            <div className={styles.curtainLine}></div>
          </div>
        </>
      );
    }