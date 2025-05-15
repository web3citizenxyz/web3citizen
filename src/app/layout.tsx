"use client";
import { ReactNode, useState, useEffect, useRef} from 'react';
import Head from 'next/head';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

import './styles/globals.css'; 
import styles from './styles/Layout.module.css';
import Intro from './intro/Intro';
import SearchModal from '../components/SearchModal';
import Footer from './Footer';


type LayoutProps = {
  children: ReactNode;
};
export default function RootLayout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [navDark, setNavDark] = useState(false);
  const [introFinished, setIntroFinished] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);

  const pathname = usePathname();
  const isBlackFooter = pathname === '/about';

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
   
      if (pathname === '/' && window.scrollY > 0) {
        setNavScrolled(true);
        setNavDark(true); 
      } else if (pathname === '/') {
        setNavScrolled(false);
        setNavDark(false); 
      } else {
        
        setNavScrolled(window.scrollY > 0);
      }
    };
  

    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);
  
  useEffect(() => {
    if (pathname === '/') {
      setNavDark(false); // Estado inicial claro en el home
    } else {
      setNavDark(true); // Estado oscuro en todas las otras páginas
    }
  }, [pathname]);
  
  return (
  <html lang="en">
    <head>
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
          <meta property="og:title" content="Web3 Citizen - Your infinite garden guide" />
          <meta property="og:description" content="A community-centered research collective, making complex Web3 concepts accessible." />
          <meta property="og:image" content="https://www.web3citizen.xyz/images/0g.png" />
          <meta property="og:url" content="https://www.web3citizen.xyz/" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Web3 Citizen" />
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
</head>
      <body>
      {!introFinished && pathname === '/' && <Intro onFinish={() => setIntroFinished(true)} />}
      <div className={`${styles.container}`}>
      <header className={`${styles.header} ${navDark ? styles.navDark : styles.navLight} ${navScrolled ? styles.navScrolled : ''}`}>

            <div className={styles.logo}>
            <Link href="/">
              <img src={navDark ? "/images/iso-nav.svg" : "/icons/logo-blue.svg"} alt="Logo" />
              </Link>
            </div>

            <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
            <Link href="/research" className={styles.navItem} onClick={closeMenu}>
                RESEARCH 
              </Link>
              {/* Commented out the resources link
              <Link href="/resources" className={styles.navItem} onClick={closeMenu}> 
                RESOURCES 
              </Link>
              */}
              {/* Commented out the grants link
              <a href="/research/grants" className={styles.navItem} onClick={closeMenu}>
                GRANTS
              </a>
              */}

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
     
    <img src={"/icons/cierre.svg"} alt="Close" className={styles.closeIcon} />
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
        <Footer isBlack={isBlackFooter} />
      </body>

    </html>
  );
}
