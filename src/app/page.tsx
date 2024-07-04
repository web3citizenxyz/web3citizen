"use client";
import { useRef} from 'react';
import Head from 'next/head';
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
       <Head>
        <title>Web3 Citizen</title>


        <meta name="description" content="Your infinite garden guide" />
           {/* Open Graph tags */}
           <meta property="og:title" content="Web3 Citizen - Your infinite garden guide" />
        <meta property="og:description" content="Explore our curated resources and tutorials to understand the fundamentals of the decentralized web." />
        <meta property="og:image" content="/favicon.svg" />
        <meta property="og:url" content="https://www.web3citizen.xyz/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Web3 Citizen" />
     
      </Head>
          <div className={styles.welcomeSection}>
            <section className={styles.welcomeIntro}>
              <div className={styles.headerContainer}>
                <h1>Your infinite garden guide.</h1>
                <div className={styles.line}></div>
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
