"use client";

import { ReactNode, useState, useEffect, useRef} from 'react';
import Head from 'next/head';
import './styles/globals.css'; 
import styles from './styles/Layout.module.css';
import Learn from './Learn';

type LayoutProps = {
  children: ReactNode;
};
export default function RootLayout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navDark, setNavDark] = useState(false);
 
  const communityRef = useRef<HTMLDivElement>(null);
  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setNavDark(true);
      } else {
        setNavDark(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setNavDark(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (communityRef.current) {
      observer.observe(communityRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (communityRef.current) {
        observer.unobserve(communityRef.current);
      }
    };
  }, [communityRef]);


  return (
    <html lang="en">
      <Head>
        <title>Web3 Citizen</title>
        <meta name="description" content="A blog built with Next.js" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Roboto+Mono:wght@300;400;700&display=swap" />
      </Head>
      <body>
        <div className={styles.container}>
        <header className={`${styles.header} ${navDark ? styles.navDark : ''}`}>
            <div className={styles.logo}>
              <img src={navDark ? "./images/iso-nav.svg" : "/icons/logo-blue.svg"} alt="Logo" />
            </div>
            <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
              <a href="#" className={styles.navItem}>RESEARCH <img src={navDark ? "/icons/flecha-nav.svg" : "/icons/flecha-nav-blue.svg"} alt="Arrow" className={styles.arrow} /></a>
              <a href="#" className={styles.navItem}>RESOURCES <img src={navDark ? "/icons/flecha-nav.svg" : "/icons/flecha-nav-blue.svg"} alt="Arrow" className={styles.arrow} /></a>
              <a href="#" className={styles.navItem}>NEWS <img src={navDark ? "/icons/flecha-nav.svg" : "/icons/flecha-nav-blue.svg"} alt="Arrow" className={styles.arrow} /></a>
              <a href="#" className={styles.navItem}>ABOUT</a>
              <a href="#" className={styles.navItem}>
                <img src={navDark ? "/icons/Search.svg" : "/icons/search-blue.svg"} alt="Search" className={styles.searchIcon} />
              </a>
            </nav>
            <div className={`${styles.menuToggle} ${navDark ? styles.whiteIcon : styles.darkIcon}`} onClick={toggleMenu}>
              {menuOpen ? (
                <img src="/icons/cierre.svg" alt="Close" className={`${styles.closeIcon} ${navDark ? styles.whiteIcon : styles.darkIcon}`} />
              ) : (
                <>
                  <div className={`${styles.bar} ${navDark ? styles.whiteBar : styles.darkBar}`}></div>
                  <div className={`${styles.bar} ${navDark ? styles.whiteBar : styles.darkBar}`}></div>
                  <div className={`${styles.bar} ${navDark ? styles.whiteBar : styles.darkBar}`}></div>
                </>
              )}
            </div>
          </header>
          <main className={styles.main}>
          <div ref={communityRef}>{children}</div>

          </main>
        </div>
      </body>
    </html>
  );
}
