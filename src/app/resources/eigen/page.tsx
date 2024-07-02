"use client";
import React from 'react';
import styles from './Eigen.module.css';
import Link from 'next/link';







export default function EigenHub() {

    const sections = [
        {
            title: "EigenLayer 101",
        
            links: [
              { text: "Whitepaper 1.0", href: "https://2039955362-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FPy2Kmkwju3mPSo9jrKKt%2Fuploads%2F2dCfPgItRfQbX25KriQv%2Fwhitepaper.pdf?alt=media&token=d4d94480-3f01-4e63-bc92-a0658ea37aab", icon: "/icons/bullet.svg" },
              { text: "Docs", href: "https://docs.eigenlayer.xyz/eigenlayer/overview", icon: "/icons/bullet.svg" },
              { text: "The latest on EigenLayer", href: "https://www.eigenlayer.xyz/learn", icon: "/icons/chart.svg" },
              { text: "Programmable trust and EigenLayer Roadmap (Restaking Summit 2023) ", href: "https://www.youtube.com/watch?v=-aK6VrmK0yk", icon: "/icons/bullet.svg" },
              { text: "EigenLayer Dashboard ", href: "https://app.eigenlayer.xyz/", icon: "/icons/chart.svg" }, 

            ],
          },
          {
            title: "Restakers",
            links: [
                { text: "Restaking User Guides - Docs", href: "https://docs.eigenlayer.xyz/eigenlayer/restaking-guides/restaking-user-guide/", icon: "/icons/bullet.svg" },
                { text: "Restaking Points - Docs", href: "https://docs.eigenlayer.xyz/eigenlayer/restaking-guides/restaking-user-guide/restaked-points", icon: "/icons/bullet.svg" },
            ],
          },


          {
            title: "Risks",
            links: [
              { text: "Risks FAQs", href: "https://docs.eigenlayer.xyz/eigenlayer/risk/risk-faq", icon: "/icons/bullet.svg" },
          
            ],
          },

          {
            title: "Where can I stay up to date?",
            subtitle:"Socials and official channels",
            links: [
              { text: "eigenlayer.com", href: "#https://www.eigenlayer.com/", icon: "/icons/connect.svg" },
              { text: "Github", href: "https://github.com/Layr-Labs", icon: "/icons/connect.svg" },
              { text: "@eigenlayer", href: "https://twitter.com/eigenlayer", icon: "/icons/connect.svg" },
              { text: "@eigen_da ", href: "https://twitter.com/eigen_da", icon: "/icons/connect.svg" },
              { text: "EigenLayer blog", href: "https://www.blog.eigenlayer.xyz/", icon: "/icons/connect.svg" },
              { text: "Discourse Forum", href: "https://forum.eigenlayer.xyz/", icon: "/icons/connect.svg" },
              { text: "Discord", href: "https://discord.com/invite/eigenlayer", icon: "/icons/connect.svg" },
              { text: "Youtube", href: "https://www.youtube.com/@EigenLayer", icon: "/icons/connect.svg" },
              { text: "LinkedIn", href: "https://www.linkedin.com/company/eigenl/", icon: "/icons/connect.svg" },
            ],
          },
 
    
          {
            title: "Ecosystem",
            subtitle:"AVSs 101",
           
            links: [
              { text: "Awesome AVS", href: "https://docs.eigenlayer.xyz/eigenlayer/avs-guides/avs-developer-guide", icon: "/icons/bullet.svg" },
              { text: "AVSs in EigenLayer", href: "https://www.eigenlayer.xyz/ecosystem?category=AVS", icon: "/icons/bullet.svg" },
              { text: "AVS guides - docs", href: "https://docs.eigenlayer.xyz/eigenlayer/avs-guides/avs-developer-guide", icon: "/icons/bullet.svg" },
         
            ],
          },


          {
            subtitle: "EigenDA",
         
            links: [
              { text: "EigenDA Docs", href: "https://docs.eigenlayer.xyz/eigenda/overview/", icon: "/icons/bullet.svg" },
              { text: "igenDA operator Guide", href: "https://docs.eigenlayer.xyz/eigenda/operator-guides/overview#eigenda-churn-approver", icon: "/icons/bullet.svg" },
              { text: "Intro to EigenDA - EigenLayer blog (2023)", href: "https://www.blog.eigenlayer.xyz/intro-to-eigenda-hyperscale-data-availability-for-rollups/", icon: "/icons/bullet.svg" },
              { text: "> Rollup services", href: "#", icon: "" },
              { text: "> Interoperability", href: "#", icon: "" },
              { text: "> Coprocessors", href: "#", icon: "" },
              { text: "> DePIN coordination", href: "#", icon: "" },
              { text: "> Proofs", href: "#", icon: "" },
              { text: "> Security", href: "#", icon: "" },
              { text: "> Oracle", href: "#", icon: "" },
              { text: "> Cross-rollup liquidity", href: "#", icon: "" },
              { text: "> More AVSs", href: "#", icon: "" },
            ],
          },
          {
            title: "Rollups",
            links: [
              { text: "Meet the rollups in EigenLayer", href: "https://www.eigenlayer.xyz/ecosystem?category=Rollup", icon: "/icons/connect.svg" },
            ],
          },
        
          {
            title: "Nodes",
            links: [
              { text: "Meet the operators in EigenLayer", href: "https://www.eigenlayer.xyz/ecosystem?category=Operator", icon: "/icons/connect.svg" },
            ],
          },
          {
            title: "Operators",
            links: [
              { text: "Get to know operators - forum", href: "https://forum.eigenlayer.xyz/t/operators-mainnet-campaign/12828", icon: "/icons/connect.svg" },
            ],
          }, 


        ];
    


        const moreResources = [
            {
              title: 'Understand EigenLayer',
              subtitle: 'Beginners start here',
              links: [
                { text: 'EigenLayer in (very) simple terms - @0xNairolf', href: 'https://twitter.com/0xNairolf/status/1753070722107478131?s=20', icon: '/icons/bullet.svg' },
                { text: 'You could’ve invented EigenLayer - EigenLayer blog (2023) | ETHDenver 2024', href: 'https://www.blog.eigenlayer.xyz/ycie/', icon: '/icons/bullet.svg' },
                { text: 'EigenLayer: a beginners guide - @0xCygaar', href: 'https://twitter.com/0xCygaar/status/1753174480732787046?s=20', icon: '/icons/bullet.svg' },
                { text: 'Whitepaper TL;DR tweet thread - @middlecurver', href: 'https://twitter.com/middlecurver/status/1628457524029706240', icon:'/icons/bullet.svg' },

              ]
            },
            {
              subtitle: 'Deep Dive',
              links: [
                { text: 'EigenLayer: what is it good for? - @sreeramkannan', href: 'https://twitter.com/sreeramkannan/status/1595863276101177344', icon: '/icons/bullet.svg' },
                { text: 'EigenLayer Ecosystem players explained - @13yearoldv', href: 'https://twitter.com/13yearoldvc/status/1761445994410209443', icon: '/icons/bullet.svg' },
                { text: 'igenLayer & restaking guide -Jarrod Watts', href: 'https://www.youtube.com/watch?v=dT74h_d6Y0E', icon: '/icons/bullet.svg' },
                { text: 'The three pillars of programmable trust - EigenLayer blog (2023)', href: 'https://www.blog.eigenlayer.xyz/the-three-dimensions-of-programmable-trust/', icon: '/icons/bullet.svg' },
                { text: 'EigenLayer in 2024 - Bankless (2023)', href: 'https://www.youtube.com/watch?v=ms94dx9HvL0&t=1s', icon:'/icons/bullet.svg'},
                { text: 'Unchained interview with Sreeram and Olaf Carlson-Wee (2024)', href: 'https://www.youtube.com/watch?v=16p7YG8S3ec', icon: '/icons/bullet.svg' },
                { text: 'How EigenLayer supercharges ETH - 0xResearch (2023)', href: 'https://youtu.be/O-uzBSevklk?si=HdCBWQLlu1MPQ16I&t=1156', icon: '/icons/bullet.svg' },
            
            
            ]
        },
        {
            title: 'EigenLayer enables builders ',
            links: [
              { text: 'How EigenLayer enables a builder ecosystem - Nader Dabit Substack (2024)', href: 'https://nader.substack.com/p/beyond-restaking-eigenlayer-for-developers', icon: '/icons/bullet.svg' },
              { text: '15 unicorn ideas - EigenLayer blog (2023)', href: 'https://www.blog.eigenlayer.xyz/eigenlayer-universe-15-unicorn-ideas/', icon: '/icons/bullet.svg'}       
          ]
        },
        {
            title: 'Dual Staking',
            links: [
              { text: 'https://www.blog.eigenlayer.xyz/dual-staking/', href: 'https://www.blog.eigenlayer.xyz/dual-staking/', icon: '/icons/bullet.svg' },
           
          ]
          },
          {
            title: 'Risks and security',
            links: [
              { text: 'EigenLayer: a shared cryptoeconomic security - @sreeramkannan', href: 'https://twitter.com/sreeramkannan/status/1742949397523304600', icon: '/icons/bullet.svg' },
              { text: 'EigenLayer eyes new security model - DeFi Llama (2024)', href: 'https://www.dlnews.com/articles/defi/eigenlayer-pooled-security-model-is-under-development/?ref=bankless.ghost.io', icon: '/icons/bullet.svg' }, 
              { text: 'The endgame coordination layer: shared security design (2023) - 0xResearch', href: 'https://youtu.be/o9y_pZUr0Nc?si=PAJTeu_YbIbUDIlI&t=2305', icon: '/icons/bullet.svg' },
       
            ]
          },
          {
            title: 'Q&As',
            links: [
              { text: '@sreeramkannan Q&A thread', href: 'https://twitter.com/sreeramkannan/status/1629717370620231680?t=419N-3B42RuTU4WdUOp-PQ&s=19', icon: '/icons/bullet.svg' },
              { text: 'Bankless Q&A with Sreeram (2024)', href: 'https://www.youtube.com/live/fgnJqEGjdz8?si=j0CD1gWI-rJ0GFY1&t=16', icon: '/icons/bullet.svg' }, 
              
       
            ]
          },

          ];
        
      
      const half = Math.ceil(sections.length / 2);
      const firstHalf = sections.slice(0, half);
      const secondHalf = sections.slice(half);
    


  return (
      <div className={styles.eigenSection}>
          <div className={styles.headerContainer}>
              <img src="/icons/arrow.svg" alt="Arrow Icon" className={styles.arrow} />
              <h1 className={styles.header}>EigenLayer Hub<span className={styles.dot}>.</span></h1>
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

      <div className={styles.moreResources}>
      <hr className={styles.divider} />
        <h2 className={styles.sectionTitle}>Learn EigenLayer</h2>
        <h3 className={styles.sectionSubtitle}>Learn more about EigenLayer through 📀 interviews, 📑 posts, 𝕏 threads and 📎 other resources   </h3>
        <hr className={styles.divider} /> 
        <div className={styles.columnsbisContainer}>
          {moreResources.map((section, index) => (
            <div key={index} className={styles.column}>
              <h3 className={styles.sectionTitle}>{section.title}</h3>
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