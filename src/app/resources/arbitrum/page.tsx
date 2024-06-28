"use client";
import React from 'react';
import styles from './Arbitrum.module.css';
import Link from 'next/link';







export default function ArbitrumHub() {

    const sections = [
        {
            title: "ArbitrumDAO basics",
            subtitle: "Start here",
            links: [
              { text: "Intro to Arbitrum's governance", href: "#", icon: "💙" },
              { text: "Arbitrum Docs", href: "#", icon: "💙" },
              { text: "DAO Constitution", href: "#", icon: "💙" },
            ],
          },
          {
            title: "Calendars and Calls",
            links: [
              { text: "Arbitrum Governance Calendar", href: "#", icon: "🗓️" },
              { text: "L2Beat Calendar", href: "#", icon: "🗓️" },
            ],
          },
          {
            title: "Reports",
            links: [
              { text: "Arbitrum Foundation 2023 Transparency Report (Jan. 2024)", href: "#", icon: "📄" },
              { text: "The State of ArbitrumDAO (Dec. 2023)", href: "#", icon: "📄" },
            ],
          },
          {
            title: "Dashboards",
            links: [
              { text: "Arbitrum One - L2 Beat dashboard", href: "#", icon: "📊" },
              { text: "Arbitrum Nova - L2 Beat dashboard", href: "#", icon: "📊" },
              { text: "DefiLlama dashboard", href: "#", icon: "📊" },
              { text: "Arbitrum Delegates and Voting Power - Dune dashboard", href: "#", icon: "📊" },
            ],
          },
 
          {
            title: "Projects built on Arbitrum",
            links: [
              { text: "Arbitrum portal", href: "#", icon: "🌐" },
      
            ],
          },
    
          {
            title: "Where can I stay up to date?",
            subtitle:"Official and community accounts to follow",   
            links: [
              { text: "Arbitrum One - L2 Beat dashboard", href: "#", icon: "📊" },
              { text: "Arbitrum Nova - L2 Beat dashboard", href: "#", icon: "📊" },
              { text: "DefiLlama dashboard", href: "#", icon: "📊" },
              { text: "Arbitrum Delegates and Voting Power - Dune dashboard", href: "#", icon: "📊" },
            ],
          },

       
          {
            title: "Where do I vote?",
            links: [
              { text: "Snapshot - offchain", href: "#", icon: "🗳️" },
              { text: "Tally - onchain", href: "#", icon: "🗳️" },
            ],
          },
          {
            title: "Delegate 101",
            links: [
              { text: "How do I delegate?", href: "#", icon: "🧡" },
              { text: "How to submit a DAO proposal", href: "#", icon: "🧡" },
              { text: "Karma Delegate dashboard", href: "#", icon: "📊" },
            ],
          },
          {
            title: "How can I contribute?",
            links: [
              { text: "Become an ambassador", href: "#", icon: "💙" },
            ],
          },
          {
            title: "Security Council",
            links: [
              { text: "Meet the Security Council Members", href: "#", icon: "🏛️" },
            ],
          },
          {
            title: "Working Groups and Committees",
         
            links: [
              { text: "Arbitrum Treasury and Sustainability", href: "#", icon: "🏛️" },
              { text: "Arbitrum Research & Development Collective", href: "#", icon: "🏛️" },
              { text: "ArbitrumDAO Procurement Committee", href: "#", icon: "🏛️" },
            ],
          },
          {
            title: "Grants",
            links: [
              { text: "Become an ambassador", href: "#", icon: "🧡" },
            ],
          },
          {
            title: "Programs",
         
            links: [
              { text: "Long Term Incentives Pilot Program", href: "#", icon: "💙" },
              { text: "Delegated Domain Allocation by Questbook", href: "#", icon: "💙" },
              { text: "Delegate Incentive Program", href: "#", icon: "💙" },
              {
                text: "Thank ARB by Plurality Labs",
                href: "#",
                icon: "💙",
                sublinks: [
                  { text: "Milestone 1", href: "#milestone1" },
                  { text: "Milestone 2", href: "#milestone2" },
                ],
              },
            ],
          },

 


        ];
    
      const half = Math.ceil(sections.length / 2);
      const firstHalf = sections.slice(0, half);
      const secondHalf = sections.slice(half);
    


  return (
      <div className={styles.arbitrumSection}>
          <div className={styles.headerContainer}>
              <img src="/icons/arrow.svg" alt="Arrow Icon" className={styles.arrow} />
              <h1 className={styles.header}>Arbitrum Hub<span className={styles.dot}>.</span></h1>
              <div className={styles.line}></div>
          </div>
          <div className={styles.columnsContainer}>
        <div className={styles.column}>
          {firstHalf.map((section, index) => (
            <div key={index} className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              <p className={styles.sectionSubtitle}>{section.subtitle}</p>
              <ul className={styles.linkList}>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className={styles.linkItem}>
                    <Link href={link.href}>
                      <span className={styles.linkIcon}>{link.icon}</span>
                      <span className={styles.linkText}>{link.text}</span>
                    </Link>
                    </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.column}>
          {secondHalf.map((section, index) => (
            <div key={index} className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              <p className={styles.sectionSubtitle}>{section.subtitle}</p>
              <ul className={styles.linkList}>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className={styles.linkItem}>
                    <Link href={link.href}>
                      <span className={styles.linkIcon}>{link.icon}</span>
                      <span className={styles.linkText}>{link.text}</span>
                    </Link>
                    
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>


   
    </div>
   





  );
}