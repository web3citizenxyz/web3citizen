"use client";

import React from 'react';
import styles from './styles/Team.module.css';

export default function Team() {
  return (

<section className={styles.team}>
  <div className={styles.content}>
    <h1>Contributors</h1>
    <p>Join Our Open Source Community</p>
    <p>All our content is open source. We aim to create a collaborative research environment where you can share knowledge and explore different areas of the Ethereum ecosystem.</p>
<button className={styles.btn}>
    <a href='https://github.com/web3citizenxyz/web3citizen' target='_blank'>Start Contributing</a>
    </button>
  </div>
  <div className={styles.teamsvg}>
        <img src="/images/elipse-team.svg" alt="Semicircles" className={styles.elipseTeam}/>
      </div>
</section>


);
}
  {/*
        <div className={styles.carouselWrapper}>
          <div className={`${styles.slide} ${styles.first}`}>
            <img src="/images/profile-2.png" alt="Contributor 1" className={styles.contributorImage} />
          </div>
          <div className={`${styles.slide} ${styles.active}`}>
            <img src="/images/profile-1.jpg" alt="Contributor 2" className={styles.contributorImage} />
          </div>
          <div className={`${styles.slide} ${styles.third}`}>
            <img src="/images/profile-3.jpeg" alt="Contributor 3" className={styles.contributorImage} />
          </div> 
  </div> */}