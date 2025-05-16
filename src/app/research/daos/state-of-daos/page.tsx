// src/app/research/daos/state-of-daos.tsx
"use client";
import React from 'react';
import Link from 'next/link';
import styles from './StateOfDaos.module.css';
import SideIcons from '@/components/SideIcons';




const StateOfDaos = () => {
        const daos = [
            { title: "Arbitrum DAO", href: "/research/daos/arbitrum-dao", icon: "/icons/arbitrum.svg" },
            { title: "Optimism Collective", href: "/research/daos/op-dao", icon: "/icons/op.svg" },
            { title: "The Graph", href: "/research/daos/graph-dao", icon: "/icons/the-graph.svg" },
            { title: "ENS DAO", href: "/research/daos/ens-dao", icon: "/icons/ens.png" },
            { title: "Safe DAO", href: "/research/daos/safe-dao", icon: "/icons/safe.jpeg"},
            { title: "Polygon DAO", href: "/research/daos/polygon-dao", icon: "/icons/polygon-matic.svg" },
            { title: "Maker DAO", href: "/research/daos/maker-dao", icon: "/icons/maker-mkr-logo.svg" },
            { title: "Starknet", href: "/research/daos/starknet", icon: "/icons/starknet.svg" },
            { title: "Uniswap DAO", href: "/research/daos/uniswap-dao", icon: "/icons/uniswap.svg" },
            { title: "Gnosis DAO", href: "/research/daos/gnosis-dao", icon: "/icons/gnosis.svg" },
            { title: "Compound DAO", href: "/research/daos/compound-dao", icon: "/icons/compound.svg" },
            { title: "Connext DAO", href: "/research/daos/connext-dao", icon: "/icons/connext.jpeg" },
            { title: "Decentraland DAO", href: "/research/daos/decentraland-dao", icon: "/icons/decentraland.jpeg" },
            { title: "Gitcoin DAO", href: "/research/daos/gitcoin-dao", icon: "/icons/gitcoin-gtc-logo.svg" },
            { title: "Nouns DAO", href: "/research/daos/nouns-dao", icon: "/icons/nouns.jpeg" },
            { title: "Aave", href: "/research/daos/aave", icon: "/icons/aave-aave-logo.svg" },
       
        ];


    return (
        <div className={styles.articleContainer}>
        <div className={styles.section}>
            <h2>The State of DAOs</h2>
            <p>Our first guide focuses on DAO governance and the DAO Landscape.</p>
            <p>Take a deep dive into the current state of the DAO ecosystem:</p>

            <ul className={styles.list}>
                <li>Contribution pathways</li>
                <li>Governance frameworks</li>
                <li>Decentralized structures</li>
            </ul>

            <h2>Current DAO Landscape</h2>
            <p>We have analyzed the governance design and mechanisms of 16 organizations.</p>
            <p>Each DAO has its governance framework, governance bodies, contribution pathways, and methods of implementing governance proposals based on Ethereum's Improvement Proposals.</p>
            
            <div className={styles.quoteContainer}>
        <p className={styles.quote}>
        Open the project and explore our analysis on each DAO
        </p>
        </div>

        <div className={styles.cardsContainer}>
                {daos.map((dao, index) => (
                    <Link href={dao.href} key={index}>
                        <div className={styles.card}>
                            <div className={styles.cardHeader}>
                      {     /* <img src={dao.icon} alt={`${dao.title} icon`} className={styles.cardHubIcon} /> */}
                            </div>
                            <h2 className={styles.cardTitle}>{dao.title}</h2>
                            <div className={styles.cardLine}></div>
                            <img src="/icons/arrow-card.svg" alt="Arrow Icon" className={styles.arrowRightIcon} />
                        </div>
                    </Link>
                ))}
            </div>

  
            <SideIcons />
        </div>
     </div>
    );
}
export default StateOfDaos;