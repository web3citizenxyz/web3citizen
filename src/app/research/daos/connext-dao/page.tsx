"use client";
import React from 'react';
import Link from 'next/link';
import styles from '../ArticleLayout.module.css';

const Article = () => {
  return (
      <div className={styles.articleContainer}>
          <div className={styles.menuContainer}>
              <ul className={styles.menu}>
                  <li className={styles.menuItem}><a href="#section1" className={styles.menuLink}>Connext</a></li>
                  <li className={styles.menuItem}><a href="#section2" className={styles.menuLink}>Connext DAO Governance</a></li>
                  <li className={styles.menuItem}><a href="#section3" className={styles.menuLink}>Governance Framewor</a></li>
                  <li className={styles.menuItem}><a href="#section4" className={styles.menuLink}>Security Council</a></li>
                  <li className={styles.menuItem}><a href="#section5" className={styles.menuLink}>Delegates</a></li>
                  <li className={styles.menuItem}><a href="#section6" className={styles.menuLink}>Governance Proposals</a></li>
                  <li className={styles.menuItem}><a href="#section7" className={styles.menuLink}>Types of Proposals (pending approval)</a></li>
                  <li className={styles.menuItem}><a href="#section8" className={styles.menuLink}>Governance Process and Mechanisms</a></li>
                  <li className={styles.menuItem}><a href="#section9" className={styles.menuLink}>Voting Process (pending approval)</a></li>
                  <li className={styles.menuItem}><a href="#section10" className={styles.menuLink}>Contribution Pathways</a></li>
              </ul>
          </div>
          <div className={styles.contentContainer}>
           <div id="section1" className={styles.section}>
           <h2 className={styles.sectionTitle}>Connext</h2>
           <div className={styles.quoteContainer}>
           <p className={styles.quote}>
           <strong>Connext</strong> is a protocol that enables the secure transfer of funds and data between different chains. 
            Developers can leverage Connext to create cross-chain applications.
            </p>
            </div>
            <p>Connext is moving towards chain abstraction, aiming to facilitate UI and accessibility for Web3 users. Following this aim and the purpose of decentralization, Connext launched its DAO in September 2023 through a cross-chain airdrop. Selected users could claim NEXT (the Connext network xERC20 cross-chain native token) on Arbitrum, Optimism, Polygon, or Gnosis Chain <strong>on September 5.</strong>   </p>
            <p>Connext mantains a long-term goal of *ungovernance*, the final pursue of self-limitation of the organization by reducing human-made decisions and automating those processes after and through the establishment of aligned processes and incentive design.</p>
            </div>


           <div id="section2" className={styles.section}>
           <h2 className={styles.sectionSubtitle}>Connext DAO Governance</h2>
           </div>
           
           <div id="section3" className={styles.section}>
           <p className={styles.titleBlack}>Governance Framework</p>
           <p>Connext DAO’s framework is still being developed as its constitution and framework proposal (<Link href='https://forum.connext.network/t/cgp0-connext-dao-governance-framework/739' className={styles.link}>CGP-0 proposal</Link>) is still under review as of October 2023.</p>
           <img src="/images/connext-dao.jpg" alt="Connext DAO" className={styles.benefitsImage} />

             </div>
               
               
            <div id="section4" className={styles.section}> 
            <p className={styles.titleBlack}>Security Council</p>
           <p>The Connext Foundation will appoint the initial council. As it stands on the submitted constitution, members:</p>
           <p><strong>[The Security Council is] an operational multisig that can take critical actions on behalf of Connext, such as vetoing DAO votes, performing routine upgrades, and pausing the protocol in the event of an emergency, until such time as the Security Council is no longer needed.</strong></p>
           <p>Elected members will have to fulfill the following requirements:</p>
           <ul>
           <li>Support from at least 0.4% of the voting supply.</li>
           <li>Membership in the Connext DAO for at least three months before the election.</li>
           <li>Have up to 3 representatives from the same organization on the Council at a given time.</li>
           <li>Publicly disclose any potential conflicts of interest before campaigning for membership.</li>
           </ul>
           </div>

          <div id="section5" className={styles.section}> 
          <p className={styles.titleBlack}>Delegates</p> 
          <p>Connext closed its delegate call in early September 2023, and, as of October 2023, has <Link href='https://dune.com/defi_wonderland/next-governance' className={styles.link}>5902</Link> delegates of a total 14136 unique token holders.</p>
    
          </div>
         
         
         <div id="section6" className={styles.section}> 
          <h2 className={styles.sectionSubtitle}>Governance Proposals</h2>
          </div>


          <div id="section7" className={styles.section}> 
          <p className={styles.titleBlack}>Types of Proposals (pending approval)</p> 
          <p>There are three main types of governance proposals you can make:</p>
          <ol>
            <li><strong>Executable Proposal:</strong> This proposal involves executing smart contract actions using DAO-controlled accounts, including token transfers. A third-party auditor must review the code, and the Security Council should approve it. Proposals need 15 million tokens for a quorum and 50% approval to pass.</li>
            <li><strong>Social Proposal:</strong> The proposal needs agreement from DAO members but can't be enforced on-chain. They need 15m tokens for quorum and 50% approval to pass.</li>
            <li><strong>Constitutional Amendment:</strong> This proposal seeks to amend the constitution and should outline the exact changes to be made. A minimum approval of two-thirds and a quorum of 36M tokens are required to pass.</li>
          </ol>
          <p>Proposal thresholds is still under discussion.</p>
          </div>



         <div id="section8" className={styles.section}> 
<h2 className={styles.sectionSubtitle}>Voting Power</h2> 
<p>The Arbitrum DAO may be new, but it has already gained a large and active community. With over 633.43k token holders and 137.02k voters, members are dedicated to advancing the goals of the Arbitrum Mission and the Ethereum ecosystem.</p>
        </div>

       <div id="section9" className={styles.section}> 
<h2 className={styles.sectionSubtitle}>Governance Process and Mechanisms</h2> 


        </div>

        <div id="section10" className={styles.section}>
          <p className={styles.titleBlack}>Voting process (pending approval)</p>
         <ol>
          <li><strong>RFC</strong> submission on the forum.</li>
          <li><strong>Temperature check</strong> on Snapshot with an additional instance to get feedback from the community with a proposal threshold of 50,000 NEXT.</li>
          <li><strong>Cross-chain voting:</strong> Connext supports voting and delegation across multiple chains and cross-chain proposal execution.</li>
       
         </ol>
         <p>The duration of each phase is still under discussion.</p>
       </div>

       <div id="section11" className={styles.section}>
        <h2 className={styles.sectionSubtitle}>Contribution Pathways</h2>
        <p>Connext has outlined a plan to compensate the protocol’s core contributors in vested NEXT tokens either quarterly or semi-annually. </p>
        <p>Core contributors include individuals as well as for-profit companies:</p>
        <ul>
          <li>The Connext Foundation</li>
          <li>Proxima Labs</li>
          <li>Wonderlab</li>
          <li>P2P</li>
          <li>Coin Hippo</li>
          <li>Community Leaders</li>
          <li>Veil Capital</li>
          <li>Creed</li>
        </ul>

        <p>Stay current on Connext’s initiatives through <Link href='https://discord.com/invite/pm4TPr4w5g' className={styles.link}>Discord</Link>, <Link href='https://medium.com/connext?_gl=1*zskxnr*_ga*MjExMjI0MDg2NS4xNjk2MzQ0NTk3*_ga_MPYZEDRVQ0*MTcwMTc4NzYxMi44LjAuMTcwMTc4NzYxOC4wLjAuMA..' className={styles.link}>Medium</Link>, and join community calls on <Link href='https://twitter.com/ConnextNetwork' className={styles.menuLink}>Twitter.</Link> </p>
        </div>

          </div>
      </div>
  );
};

export default Article;