"use client";
import { useRef} from 'react';
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

  useFadeInOnScroll(learnRef);
  useFadeInOnScroll(partnerRef);
  useFadeInOnScroll(communityRef);
  useFadeInOnScroll(teamRef);

 
  return (
    <>

          <div className={styles.welcomeSection}>
            <section className={styles.welcomeIntro}>
              <div className={styles.headerContainer}>
                <h1>Your infinite garden guide.</h1>
                <div className={styles.line}></div>
              </div>
              <p>/</p>
              <p>WE ARE</p>
              <p>WEB3CITIZEN</p>
            </section>
          </div>
      
          <div className={styles.gradientLine}></div>
          <div ref={learnRef} className="fade-section">
            <Learn />
          </div>
          <div ref={partnerRef} className="fade-section">
            <Partner />
          </div>
          <div ref={communityRef} className="fade-section">
            <Community />
          </div>
          <div ref={teamRef} className="fade-section">
            <Team />
          </div>
      
      
    </>
  );
}
