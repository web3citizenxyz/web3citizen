"use client";
import React, { useState, useEffect } from 'react';
import styles from './Grants.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const filters = ["All", "Active", "DApps & tooling", "Development", "Community", "Other"];

const grantsData = [
 /* { title: <>Celo<br />RetroPGF</>, href: "/research/grants/celo", category: "Active" },*/
 { title: <>Aleo<br />Blueprint Grants</>, href: "/research/grants/aleo-blueprint", category: ["Active", "Other"] },
 { title: <>Aleo<br /> Launch Grants</>, href: "/research/grants/aleo-launch", category: ["Active", "Development", "Other", "DApps & tooling"] },
 { title: <>Arbitrum<br />Questbook Grants</>, href: "/research/grants/arbitrum", category: ["Active", "Other", "DApps & tooling"] },

{ title: <>Base<br /> Builder Grants</>, href: "/research/grants/base", category:["Active", "DApps & tooling"]  },
 { title: <>Decentraland<br /> Grants Program</>, href: "/research/grants/decentraland", category: ["Active", "Development", "Other", "Community"]  },
 { title: <>Ecosystem<br /> Support Program</>, href: "/research/grants/ecosystem", category:["Active", "Development", "Other", "DApps & tooling", "Community"] },
 { title: <>ENS<br />Small Grants</>,  href: "/research/grants/ens",  category: [ "Development", "Other", "Community"] },
 { title: <>Lido's LEGO</>, href: "/research/grants/lido", category:["Active", "Development", "Other", "DApps & tooling" ]},

 { title: <>Optimism Foundation <br /> Missions (RFPs) </>, href: "/research/grants/op", category:["Active", "Other"]},
  { title: <>Optimism<br /> Partner Fund</>, href: "/research/grants/op-partner", category: ["Active", "Development"]},
  { title: <>Optimism<br /> Delegate Missions</>, href: "/research/grants/delegate", category: ["Active", "Development"]},
 /* { title: <>Polygon<br /> zkBuilder Grants</>, href: "/research/grants/polygon", category: ["Active", "Development", "Dapps & tooling"]},*/
  { title: <>Retro<br />Funding 5</>, href: "/research/grants/opfund", category:["Active", "Dapps & tooling" ]},
  
  /*{ title: <>Arbitrum Fundation<br />Grant Program</>, href: "/research/grants/arbitrum", category: "Community" },*/
  { title: <>The Graph Fundation<br /> Grants Program</>, href: "/research/grants/thegraph-fund", category: ["Active", "Development", "Other", "DApps & tooling", "Community"]},
/*  { title: <>The Graph<br />Community Grants</>, href: "/research/grants/the-graph", category: "Community" },*/

 /* { title: <>Uniswap-Arbitrum<br /> Grants Program</>, href: "/research/grants/uniswap", category: "Community" },*/

 /* { title: <>Polygon<br /> Village Grants</>, href: "/research/grants/polygon-grants", category: "Community" },*/
 /* { title: <>Polygon Village<br /> Build Ideas</>, href: "/research/grants/polygon-build", category: "Community" },*/
];

export default function Grants() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleFilter = (filter: string) => {
    if (filter === "All") {
      setActiveFilters([]);
    } else {
      setActiveFilters(prevFilters => {
        if (prevFilters.includes(filter)) {
          return prevFilters.filter(f => f !== filter);
        } else {
          return [...prevFilters, filter];
        }
      });
    }
  };

  const filteredGrants = activeFilters.length === 0
    ? grantsData
    : grantsData.filter(grant =>
        activeFilters.some(filter => grant.category.includes(filter))
      );

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
            className={`${styles.filterButton} ${activeFilters.includes(filter) || (filter === "All" && activeFilters.length === 0) ? styles.active : ''}`}
            onClick={() => toggleFilter(filter)}
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
          modules={[Autoplay]}
          className={styles.cardsContainer}
        >
           {filteredGrants.map((grant, index) => (
            <SwiperSlide key={index}>
              <div className={styles.card}>
                <h2 className={styles.cardTitle}>{grant.title}</h2>
                <p className={styles.cardCategory}>{grant.category.join(", ")}</p>
                <img src="/icons/arrow-card.svg" alt="Arrow Icon" className={styles.arrowRightIcon} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className={styles.cardsContainer}>
          {filteredGrants.map((grant, index) => (
            <Link href={grant.href || "#"} key={index}>
              <div className={styles.card}>
                <h2 className={styles.cardTitle}>{grant.title}</h2>
                <p className={styles.cardCategory}>{grant.category.join(", ")}</p>
                <img src="/icons/arrow-card.svg" alt="Arrow Icon" className={styles.arrowRightIcon} />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}