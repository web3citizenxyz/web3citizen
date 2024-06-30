"use client"
import Link from 'next/link';
import { ReactNode, useState, useEffect, useRef} from 'react';
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import './styles/globals.css'; 
import styles from './styles/Layout.module.css';
import Intro from './intro/Intro';
import SearchModal from '../components/SearchModal';

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [navDark, setNavDark] = useState(false);
  const [introFinished, setIntroFinished] = useState(false);
  

  const pathname = usePathname();
   


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const toggleSubmenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setSubmenuOpen(!submenuOpen);
  };


  useEffect(() => {
    const handleScroll = () => {
      if (pathname === '/' && window.scrollY < window.innerHeight) {
        setNavDark(false);
      } else {
        setNavDark(true);
      }
    };

    window.addEventListener('scroll', handleScroll);



    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setNavDark(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const observerLight = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setNavDark(false);
          }
        });
      },
      { threshold: 0.5 }
    );
    

    return () => {
      window.removeEventListener('scroll', handleScroll);

    };
  }, [pathname]);

  useEffect(() => {
    if (pathname === '/') {
      setNavDark(false);
    } else {
      setNavDark(true);
    }
  }, [pathname]);



  return (
    <html lang="en">
      <Head>
        <title>Web3 Citizen</title>
        <meta name="description" content="Your infinite garden guide" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Roboto+Mono:wght@300;400;700&display=swap" />
      </Head>
      <body>
      {!introFinished && pathname === '/' && <Intro onFinish={() => setIntroFinished(true)} />}
      <div className={`${styles.container}`}>
        <header className={`${styles.header} ${navDark ? styles.navDark : styles.navLight}`}>
            <div className={styles.logo}>
            <Link href="/">
              <img src={navDark ? "/images/iso-nav.svg" : "/icons/logo-blue.svg"} alt="Logo" />
              </Link>
            </div>

            <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
            <Link href="/research" className={styles.navItem} onClick={closeMenu}>
                RESEARCH 
                  {/*
                <img src={navDark ? "/icons/flecha-nav.svg" : "/icons/flecha-nav-blue.svg"} 
                  alt="Arrow" 
                  className={`${styles.arrow} ${submenuOpen ? styles.active : ''}`} 
                  onClick={toggleSubmenu}
                />
  */}
              </Link>
              <Link href="/resources" className={styles.navItem} onClick={closeMenu}> RESOURCES 
                {/*
              <img src={navDark ? "/icons/flecha-nav.svg" : "/icons/flecha-nav-blue.svg"} alt="Arrow" className={styles.arrow} />
  */}
              </Link>
              <a href="#" className={styles.navItem} onClick={closeMenu}>NEWS 

               {/*
              <img src={navDark ? "/icons/flecha-nav.svg" : "/icons/flecha-nav-blue.svg"} alt="Arrow" className={styles.arrow} />
*/}
              </a>

              <Link href="/about">

             <div className={styles.navItem} onClick={closeMenu}>ABOUT</div>
             </Link>
              <a href="#" className={styles.navItem}onClick={toggleSearch}>
 
                <img src={navDark ? "/icons/Search.svg" : "/icons/search-blue.svg"} alt="Search" className={styles.searchIcon} />
  
              </a>
              {submenuOpen && (
                <div className={styles.submenu}>
                  <div className={styles.submenuItem}>
                    <input type="checkbox" id="filter1" />
                    <label htmlFor="filter1">FILTER 1</label>
                  </div>
                  <div className={styles.submenuItem}>
                    <input type="checkbox" id="filter2" />
                    <label htmlFor="filter2">FILTER 2</label>
                  </div>
                  <div className={styles.submenuItem}>
                    <input type="checkbox" id="filter3" />
                    <label htmlFor="filter3">FILTER 3</label>
                  </div>
                  <div className={styles.submenuItem}>
                    <input type="checkbox" id="filter4" />
                    <label htmlFor="filter4">FILTER 4</label>
                  </div>
                  <div className={styles.submenuItem}>
                    <input type="checkbox" id="filter5" />
                    <label htmlFor="filter5">FILTER 5</label>
                  </div>
                </div>
              )}
                {menuOpen && (
                <a href="#" className={styles.navItem} onClick={toggleSearch}>
                  SEARCH
                </a>
              )}
            </nav>
            <div className={`${styles.menuToggle}`} onClick={toggleMenu}>
  {menuOpen ? (
    <img src={navDark ? "/icons/cierre.svg" : "/icons/cruz-azul.svg"} alt="Close" className={styles.closeIcon} />
  ) : (
    <img src={navDark ? "/icons/mobile-blanco.svg" : "/icons/mobile-azul.svg"} alt="Menu" className={styles.menuIcon} />
  )}
</div>
          </header>
          <main className={styles.main}>
            {children}
          </main>
        </div>
        <SearchModal isOpen={searchOpen} onClose={toggleSearch} />



        <footer className={styles.footer}>
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
      </body>
    </html>
  );
}
