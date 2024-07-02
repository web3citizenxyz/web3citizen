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
              { text: "Intro to Arbitrum's governance", href: "https://docs.arbitrum.io/intro/", icon: "/icons/bullet.svg" },
              { text: "Arbitrum Docs", href: "https://docs.arbitrum.io/", icon: "/icons/bullet.svg" },
              { text: "DAO Constitution", href: "https://docs.arbitrum.foundation/dao-constitution", icon: "/icons/bullet.svg" },
            ],
          },
          {
            title: "Calendars and Calls",
            links: [
              { text: "Arbitrum Governance Calendar", href: "https://calendar.google.com/calendar/u/0/embed?src=c_4157985d2452dfd8a91b6a36bccab37deb9bffe9053a4b9bcc4e9fff9ef02924@group.calendar.google.com&ctz", icon: "/icons/calendar.svg" },
              { text: "L2Beat Calendar", href: "https://calendar.google.com/calendar/u/0?cid=Y18wNzQ1ODJiMWJkNWE2NTVjOGNkMmQ2YjNhYjliZDQ0NzcxY2U3MDgyYzI2Zjk0MmQ1MzM5ZWUxZDllN2M4YzA0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20", icon:"/icons/calendar.svg"  },
            ],
          },
          {
            title: "Reports",
            links: [
              { text: "Arbitrum Foundation 2023 Transparency Report (Jan. 2024)", href: "https://docs.arbitrum.foundation/assets/files/ArbitrumFoundationTransparencyReport2023-75b1b491667ad2fa1d9d574a2108f28b.pdf", icon: "/icons/connect.svg" },
              { text: "The State of ArbitrumDAO (Dec. 2023)", href: "https://web3citizen.xyz/web3-projects/arbitrum", icon: "/icons/connect.svg" },
            ],
          },
          {
            title: "Dashboards",
            links: [
              { text: "Arbitrum One - L2 Beat dashboard", href: "https://l2beat.com/scaling/projects/arbitrum", icon: "/icons/chart.svg" },
              { text: "Arbitrum Nova - L2 Beat dashboard", href: "https://l2beat.com/scaling/projects/nova", icon: "/icons/chart.svg" },
              { text: "DefiLlama dashboard", href: "https://defillama.com/chain/Arbitrum", icon: "/icons/chart.svg" },
              { text: "Arbitrum Delegates and Voting Power - Dune dashboard", href: "https://dune.com/pandajackson42/arbitrum-delegates-and-voting-power", icon: "/icons/chart.svg" },
            ],
          },
 
          {
            title: "Projects built on Arbitrum",
            links: [
              { text: "Arbitrum portal", href: "https://portal.arbitrum.io/projects", icon: "/icons/connect.svg" },
      
            ],
          },
    
          {
            title: "Where can I stay up to date?",
            subtitle:"Official and community accounts to follow",   
            links: [
              { text: "Forum", href: "https://forum.arbitrum.foundation/", icon: "/icons/connect.svg" },
              { text: "Discord", href: "https://discord.com/invite/arbitrum", icon: "/icons/connect.svg" },
              { text: "Arbitrum Delegate Announcements - Telegram Channel", href: "https://t.me/+6MN1NDnVBuw0YTVk", icon: "/icons/connect.svg" },
              { text: "Arbitrum Foundation", href: "https://twitter.com/arbitrum", icon: "/icons/connect.svg" },
              { text: "Arbitrum DAO(AnDAO)", href: "https://twitter.com/ArbitrumNewsDAO", icon: "/icons/connect.svg" },
              { text: "Arbitrum DAO (Unofficial account)", href: "https://twitter.com/DAO_Arbitrum", icon: "/icons/connect.svg" },
              { text: "Arbitrum Foundation", href: "https://arbitrumdaonews.substack.com/", icon: "/icons/connect.svg" },
            
            ],
          },

       
          {
            title: "Where do I vote?",
            links: [
              { text: "Snapshot - offchain", href: "https://snapshot.org/#/arbitrumfoundation.eth", icon: "/icons/phone.svg" },
              { text: "Tally - onchain", href: "https://www.tally.xyz/gov/arbitrum", icon: "/icons/phone.svg" },
            ],
          },
          {
            title: "Delegate 101",
            links: [
              { text: "How do I delegate?", href: "https://docs.arbitrum.foundation/how-tos/select-delegate-voting-power", icon:"/icons/bullet.svg" },
              { text: "How to submit a DAO proposal", href: "https://forum.arbitrum.foundation/t/how-to-submit-a-dao-proposal/13494", icon: "/icons/bullet.svg" },
              { text: "Karma Delegate dashboard", href: "https://arbitrum.karmahq.xyz/", icon:"/icons/chart.svg" },
            ],
          },
          {
            title: "How can I contribute?",
            links: [
              { text: "Become an ambassador", href: "https://arbitrum.foundation/ambassador", icon: "/icons/bullet.svg" },
            ],
          },
          {
            title: "Security Council",
            links: [
              { text: "Meet the Security Council Members", href: "https://docs.arbitrum.foundation/security-council-members", icon: "/icons/agora.svg" },
            ],
          },
          {
            title: "Working Groups and Committees",
         
            links: [
              { text: "Arbitrum Treasury and Sustainability", href: "https://forum.arbitrum.foundation/t/arbitrum-treasury-and-sustainability-working-group/18978", icon:"/icons/agora.svg" },
              { text: "Arbitrum Research & Development Collective", href: "https://forum.arbitrum.foundation/t/proposal-non-constitutional-establish-the-arbitrum-research-development-collective/19899", icon:"/icons/agora.svg"},
              { text: "ArbitrumDAO Procurement Committee", href: "https://forum.arbitrum.foundation/t/proposal-non-constitutional-establish-the-arbitrumdao-procurement-committee/20064", icon: "/icons/agora.svg"},
            ],
          },
          {
            title: "Grants",
            links: [
              { text: "Arbitrum Grants", href: "https://arbitrum.foundation/grants", icon: "/icons/bullet.svg"},
            ],
          },
          {
            title: "Programs",
         
            links: [
              { text: "Long Term Incentives Pilot Program", href: "https://forum.arbitrum.foundation/t/long-term-incentives-pilot-program/20223/41", icon: "/icons/bullet.svg" },
              { text: "Delegated Domain Allocation by Questbook", href: "https://forum.arbitrum.foundation/t/arbitrum-dao-grants-domain-allocator-nominations/15759/123", icon: "/icons/bullet.svg" },
              { text: "Delegate Incentive Program", href: "https://forum.arbitrum.foundation/t/proposal-experimental-incentive-system-for-active-arbitrumdao-delegates/19467/41", icon: "/icons/bullet.svg" },
              {
                text: "Thank ARB by Plurality Labs",
                href: "#",
                icon: "/icons/bullet.svg",
                sublinks: [
                  { text: "Milestone 1", href: "https://forum.arbitrum.foundation/t/aip-3-non-constitutional-fund-the-arbitrum-grants-framework-proposal-milestone-1/14976" },
                  { text: "Milestone 2", href: "https://forum.arbitrum.foundation/t/non-constitutional-thank-arb-by-plurality-labs-milestone-2-scaling-value-creation-in-the-dao/20534" },
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
                <span className={styles.linkIcon}>
                  {link.icon.startsWith('/') ? (
                    <img src={link.icon} alt="" className={styles.iconImage} />
                  ) : (
                    link.icon
                  )}
                </span>
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
                <span className={styles.linkIcon}>
                  {link.icon.startsWith('/') ? (
                    <img src={link.icon} alt="" className={styles.iconImage} />
                  ) : (
                    link.icon
                  )}
                </span>
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