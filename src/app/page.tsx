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
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        {/* Fonts */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Roboto+Mono:wght@300;400;700&display=swap" />

        {/* Open Graph tags */}
        <meta property="og:title" content="Web3 Citizen - Your infinite garden guide" />
        <meta property="og:description" content="Explore our curated resources and tutorials to understand the fundamentals of the decentralized web." />
        <meta property="og:image" content="https://www.web3citizen.xyz/images/0g.png" />
        <meta property="og:url" content="https://www.web3citizen.xyz/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Web3 Citizen" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2XB363WRVJ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2XB363WRVJ');
            `,
          }}
        />
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
