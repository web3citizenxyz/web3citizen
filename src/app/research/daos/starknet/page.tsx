"use client";
import React from 'react';
import Link from 'next/link';
import styles from './ArticleLayout.module.css';

const Article = () => {
  return (
      <div className={styles.articleContainer}>
          <div className={styles.menuContainer}>
              <ul className={styles.menu}>
                  <li className={styles.menuItem}><a href="#section1" className={styles.menuLink}>Starknet</a></li>
                  <li className={styles.menuItem}><a href="#section2" className={styles.menuLink}>Phase 1 of Governance</a></li>
                  <li className={styles.menuItem}><a href="#section3" className={styles.menuLink}>Governance Framework</a></li>
                  <li className={styles.menuItem}><a href="#section4" className={styles.menuLink}>Starknet Foundation</a></li>
                  <li className={styles.menuItem}><a href="#section5" className={styles.menuLink}>Bouldiers Council</a></li>
                  <li className={styles.menuItem}><a href="#section6" className={styles.menuLink}>Governance Process and Mechanisms</a></li>
                  <li className={styles.menuItem}><a href="#section7" className={styles.menuLink}>Voting Power</a></li>
                  <li className={styles.menuItem}><a href="#section8" className={styles.menuLink}>Contribution Pathways</a></li>
                  <li className={styles.menuItem}><a href="#section9" className={styles.menuLink}>Early Community Member Program</a></li>
                  <li className={styles.menuItem}><a href="#section10" className={styles.menuLink}>Basecamp</a></li>
                  <li className={styles.menuItem}><a href="#section11" className={styles.menuLink}>Stay curren on Starknet</a></li>

              </ul>
          </div>
          <div className={styles.contentContainer}>
          <div id="section1" className={styles.section}>
                  <h2 className={styles.sectionTitle}>Starknet</h2>
                  <div className={styles.quoteContainer}>
        <p className={styles.quote}>
        <strong>Starknet</strong> is a permissionless decentralized Layer 2 (L2) validity rollup, built to support Ethereum scaling via STARKs.
        </p>
      </div>
      <p>
      To operate Starknet uses Starks, cryptographic protocols that require no trusted setup, are    <Link href="https://www.starknet.io/en/posts/governance/part-1-starknet-sovereignty-a-decentralization-proposal" target='_blank' className={styles.link}>post-quantum secure, and can be deployed succinctly at any scale.</Link> This technology enables the protocol to build a public, decentralized, and permissionless infrastructure accessible to all.
      </p>
           </div>

           <div id="section2" className={styles.section}>
           <p className={styles.titleBlack}>Phase 1 of Governance</p>
           <p className={styles.paragraph}>Starknet is taking <Link href="https://governance.starknet.io/learn/starknet's_journey_towards_decentralization" target='_blank' className={styles.link}>various initiatives</Link> to become a censorship-resistant network and attain the public good status. One of these measures is to decentralize its governance and transfer it to the community. This report reflects the status of Phase 1 until December 2023.</p>
            </div>
           
              <div id="section3" className={styles.section}>
                  <p className={styles.titleBlack}>Governance Framework</p>
                  <p>Starknet is still developing its governance framework. Although some structures are in place, more will be outlined shortly.</p>
                  <img src="/images/starknet-f.jpg" alt="Starknet" className={styles.benefitsImage} /> 
            
                  </div>
                  <div id="section4" className={styles.section}> 
                  <h2><strong>Starknet Foundation</strong> </h2>
                  <p className={styles.paragraph}>
                  <Link href="https://www.starknet.io/en/posts/governance/part-1-starknet-sovereignty-a-decentralization-proposal" target='_blank' className={styles.link}> 
                  "Decisions regarding the ongoing maintenance of Starknet will shift from StarkWare to the community. A Starknet Token and Foundation will be key elements of this effort."
                </Link>
                 </p>
                  <p>The Foundation's role includes:</p>
                    <ul>
                      <li>Foster research and development of the network.</li>
                      <p></p>
                      <li>Aid the development of the ecosystem.</li>
                      <p></p>
                      <li>Promote network adoption.</li>
                      <p></p>
                      <li>Boost community participation and decentralization.</li>
                    </ul>
                  </div>

                  <div id="section5" className={styles.section}> 
                  <p className={styles.titleBlack}>Builders Council</p> 
                 <p>The Builders Council is composed of <Link href="https://community.starknet.io/t/starknet-builders-council-mission-statement/4045/2" target='_blank' className={styles.link}> 
                 17 members </Link> chosen by the Starknet Foundation, taking into consideration Starkware and trusted community members' recommendations. The council is entrusted with considerable voting power (23%). The commission holds the following <Link href="https://www.starknet.io/en/posts/governance/starknet-builders-council-modus-operandi" target='_blank' className={styles.link}> 
                 responsibilities:</Link></p>
            

                  <ul className={styles.orderedList}>
            <li className={styles.listItem}>Informed decision-making and deliberation for each proposed action.</li>
            <li className={styles.listItem}>Represent the interests of the Starknet community members.</li>
            <li className={styles.listItem}>Ensures that decisions and activities are available for the wider community to access.</li>
            <li className={styles.listItem}>Ensure alignment with Starknet's vision and values.</li>

            </ul>
            <p>Currently, the Foundation is in the process of reviewing submissions for three new members. Announcements are expected in late December or early January.</p>
            <p>We expect more structures to emerge, as Starknet has outlined that the best approach to governance would include <Link href="https://www.starknet.io/en/posts/governance/part-2-a-decentralization-and-governance-proposal-for-starknet" target='_blank' className={styles.link}> "checks and balances between several structures that derive their authority from the community."</Link></p>            
              </div>
              <div id="section6" className={styles.section}> 
              <h1 ><strong>Governance proposals and mechanisms</strong></h1>
              <p>The governance process is still in its early stages.</p>
               <ol>
                <li>Proposals are discussed on Starknet's forum.</li>
                <p></p>
                <li>The Builder's Council discusses submissions and votes on them through Snapshot.</li>
                <p></p>
                <li>If a proposal obtains a simple majority, it is executed.</li>
               </ol>
              <p>We expect an outline of voting mechanisms to develop together with new governance structures during the following year.</p>
               </div>
               <div id="section7" className={styles.section}> 
               <p className={styles.titleBlack}>Voting Power</p>
               <ul>
                <li>Delegation is available through the Delegate Dashboard. However, governance by token-holders' votes has not launched yet.</li>
             <p></p>
             <li>There are more than 1K delegates.</li>
             <p></p>
             <li>No delegate holds more than 1% Voting Power.</li>
               </ul>
 
              <p>Voting power during Phase 1 has the following <Link href="https://governance.starknet.io/learn/voting_power" target='_blank' className={styles.link}> 
              distribution:</Link></p>
              <ul>
                <li>Early core contributors: 33.3%</li>
                <p></p>
                <li>Investors: 33.3%</li>
                <p></p>
                <li>The Foundation’s representatives: 33.3%:
                  <p>- The Builders Council: 23.3%</p>
                  <p>- Delegates voting on behalf of the Foundation: 10%</p>

                </li>
              </ul>
              <p>As we move on to a new governance phase next year we expect to see growth in voting power distribution</p>
              <img src="/images/voting-starknet.jpg" alt="Starknet" className={styles.benefitsImage} /> 
 
             
               </div>

               <div id="section8" className={styles.section}> 
                <h1><strong>Contribution Pathways</strong></h1>
                <p>Learn how to get involved with Starknet!</p>
                <p><strong>Devonomics Program</strong></p>
                <p>The Starknet Foundation, together with Starkware, launched a program intended to boost Starknet Dev's participation in decision-making. </p>
                <p></p>
                <p>The program uses token reward incentives obtained from Starknet usage fees. The total sum allocated to the program is up to 1600ETH, which is 10% of all Starknet fees until November 30th. Devonomics will reward developers for operating core network infrastructure, building new dApps, and, in the future, staking their STRK for different purposes.
                  <p></p>
                   In the first Pilot instance, the Foundation will allocate 8% of the fees towards dApp developers, and the remaining 2% will go towards core developers. The portion allocated toward dApp developers considers their contribution to user engagement, measured by an L1 and L2 fee estimation algorithm on the smart contracts developed. Core developer rewards will be designated through recommendations from dApp developers who receive incentives from this program.
                   <p></p>
                  Read more about the Devonomics Pilot Program <Link href="https://www.starknet.io/en/posts/developers/starknet-launches-the-devonomics-pilot-program" target='_blank' className={styles.link}> 
                 here.</Link></p>
                </div>
                <div id="section9" className={styles.section}> 
                <p className={styles.titleBlack}>Early Community Member Program</p>
                <p>The ECMP was launched on October 30th to recognize "the various pillars of our community that have contributed to Starknet to date." This program uses token incentives to reward contributors who engage in community support, share technical knowledge, have been listed as critical projects of the Starknet ecosystem, and organized events to raise awareness.</p>
                <p>The Onboarding Committee is currently reviewing submissions for Phase 1 of the program. Announcements of selected members are expected by late December.</p> 
                  
                  
                  </div>

                  <div id="section10" className={styles.section}> 
                    <p><strong>Basecamp</strong></p>
                    <p>Learn everything about Starknet, Starks, and Cairo through their online program sessions. Join the waitlist <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf2k9vjPpeymbUpJMRDuN3QqNcHtjWx8whX2wY4EbihF1EaPg/viewform" target='_blank' className={styles.link}> 
                    here.</Link></p>
                  </div>

                  <div id="section11" className={styles.section}> 
                    <p><strong>Stay current on Starknet</strong></p>
                    <p><Link href="https://twitter.com/Starknet" target='_blank' className={styles.link}> 
                    Starknet's Twitter</Link>, <Link href="https://community.starknet.io/" target='_blank' className={styles.link}>Forum</Link>, <Link href="https://github.com/starknet-io/builders-council" target='_blank' className={styles.link}> Builders Council's Github</Link>.</p>
                  </div>
          </div>
      </div>
  );
};

export default Article;