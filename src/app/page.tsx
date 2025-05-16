"use client";
import { useRef, useEffect } from 'react';

import useFadeInOnScroll from './hooks/useFadeInOnScroll';
import styles from './styles/Home.module.css';
import Learn from './Learn';
import Partner from './Partner';
import Community from './Community';
import Team from './Team';



export default function Home() {
 
  const learnRef = useRef<HTMLDivElement>(null);
  const partnerRef = useRef<HTMLDivElement>(null);
  const communityRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useFadeInOnScroll(learnRef);
  useFadeInOnScroll(partnerRef);
  useFadeInOnScroll(communityRef);
  useFadeInOnScroll(teamRef);

  useEffect(() => {
    const handleScroll = () => {
      if (lineRef.current) {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 50) {
          lineRef.current.classList.add(styles.slide);
        } else {
          lineRef.current.classList.remove(styles.slide);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 
  return (
    <>
   
          <div className={styles.welcomeSection}>
            <section className={styles.welcomeIntro}>
              <div className={styles.headerContainer}>
                <h1>Your infinite garden guide.</h1>
                <div className={styles.line} ref={lineRef}></div>
              </div>
              <a href='/about'>
              <p>/</p>
              <p>WE ARE</p>
              <p>WEB3CITIZEN</p>
              </a>
            </section>
          </div>
      
          <div className={styles.gradientLine}></div>
          <div ref={learnRef} className="fade-section">
            <Learn />
          </div>
          <div ref={partnerRef} className="fade-section">
          <Team />
          </div>
          <div ref={communityRef} className="fade-section">
            <Community />
          </div>
          <div ref={teamRef} className="fade-section">
       
            <Partner />
          </div>
      
      
    </>
  );
}
