"use client";
import React, { useState, useEffect } from 'react';
import styles from './Grants.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


const filters = ["All", "Active", "DApps & tooling", "Development", "Community", "Governance", "Other"];

const grantsData = [
  { title: <>Celo<br />RetroPGF</>, category: "Active" },
  { title:  <>Lido Ecosystem<br />Grants Program</>, category: "Governance" },
  { title: <>Optimism Foundation <br /> Missions (RFPs) </>, category: "Development" },
  { title: <>Optimism<br /> Retro Funding </>, category: "Community" },
  { title: <>Polygon<br /> zkBuilder Grants</>, category: "Community" },
  { title: <>Ecosystem<br /> Support Program</>, category: "Community" },
  { title: <>Arbitrum Fundation<br />Grant Program</>, category: "Community" },
  { title: <>Base<br /> Builder Grants</>, category: "Community" },
  { title: <>The Graph Fundation<br /> Grants Program</>, category: "Community" },
  { title: <>The Graph<br />Community Grants</>, category: "Community" },
  { title: <>Decentraland<br /> Grants Program</>, category: "Community" },
  { title: <>ENS<br />Small Grants</>, category: "Community" },
  { title: <>Aleo<br />Blueprint Grants</>, category: "Community" },
  { title: <>Aleo<br /> Launch Grants</>, category: "Community" },
  { title: <>Uniswap-Arbitrum<br /> Grants Program</>, category: "Community" },
  { title: <>Optimism<br /> Partner Fund</>,category: "Community" },
  { title: <>Polygon<br /> Village Grants</>, category: "Community" },
  { title: <>Polygon Village<br /> Build Ideas</>, category: "Community" },
];

export default function Grants() {
  const [activeFilter, setActiveFilter] = useState<string | null>("All");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Verificar el tamaño de la pantalla al cargar la página
    window.addEventListener('resize', handleResize); // Verificar el tamaño de la pantalla en el cambio de tamaño
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  const filteredGrants = activeFilter && activeFilter !== "All"
    ? grantsData.filter(grant => grant.category === activeFilter)
    : grantsData;


  return (
    <div className={styles.grantsSection}>
    <div className={styles.headerContainer}>
              <img src="/icons/arrow.svg" alt="Arrow Icon" className={styles.arrow} />
              <h1 className={styles.header}>Grants Pathfinder<span className={styles.dot}>.</span></h1>
              <div className={styles.line}></div>
      </div>
      <p className={styles.subtitle}>Find your next grant, learn how to apply</p>
      <div className={styles.filters}>
        {filters.map((filter, index) => (
          <button
            key={index}
            className={`${styles.filterButton} ${activeFilter === filter ? styles.active : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
 
{isMobile ? (
  <Swiper
  spaceBetween={0}
  slidesPerView={1}
  centeredSlides={true}
  loop={true}
  autoplay={{ delay: 2500, disableOnInteraction: false }}
  pagination={{ clickable: true }}
  modules={[ Autoplay]}
  className={styles.cardsContainer}
  >
    {filteredGrants.map((grant, index) => (
      <SwiperSlide key={index}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>{grant.title}</h2>
          <p className={styles.cardCategory}>{grant.category}</p>
          <img src="/icons/arrow-card.svg" alt="Arrow Icon" className={styles.arrowRightIcon} />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
) : (
  <div className={styles.cardsContainer}>
    
        {filteredGrants.map((grant, index) => (
      <div className={styles.card} key={index}>
      
        <h2 className={styles.cardTitle}>{grant.title}</h2>
        <p className={styles.cardCategory}>{grant.category}</p>
        <img src="/icons/arrow-card.svg" alt="Arrow Icon" className={styles.arrowRightIcon} />
             
              </div>
    ))}
  </div>
)}
</div>
);
}
