// src/components/SideIcons.tsx
import React from 'react';
import styles from './SideIcons.module.css';

const SideIcons: React.FC = () => {
    return (
        <div className={styles.sideIcons}>
            <div className={styles.iconContainer}>
            <a href="" download>
                <img src="/icons/guardar-article.svg" alt="Back to top" className={styles.icon} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
          </a>
            </div>
            <div className={styles.iconContainer}>
               
                <a href='https://x.com/web3citizenxyz?s=21' target='_blank'> 
                    <img src="/icons/descargar-article.svg" alt="Download PDF" className={styles.icon} />
                </a>
            </div>
        </div>
    );
};

export default SideIcons;
