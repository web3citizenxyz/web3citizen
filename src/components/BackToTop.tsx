// src/components/BackToTop.tsx
import React, { useState, useEffect } from 'react';
import styles from './BackToTop.module.css';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={styles.backToTop}>
      {isVisible && (
        <div onClick={scrollToTop} className={styles.button}>
          <img src="/icons/arrow-up.svg" alt="Back to top" className={styles.icon} />
        </div>
      )}
    </div>
  );
};

export default BackToTop;
