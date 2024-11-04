"use client";
import React from 'react';
import Link from 'next/link';
import styles from '../ArticleLayout.module.css';

const Article = () => {
  return (
      <div className={styles.articleContainer}>
          <div className={styles.menuContainer}>
              <ul className={styles.menu}>
                  <li className={styles.menuItem}><a href="#section1" className={styles.menuLink}>Aave</a></li>
                  <li className={styles.menuItem}><a href="#section2" className={styles.menuLink}>Aave DAO Governance</a></li>
                  <li className={styles.menuItem}><a href="#section3" className={styles.menuLink}>Governance Framework</a></li>
                  <li className={styles.menuItem}><a href="#section4" className={styles.menuLink}>Aave DAO and Aave Grants DAO</a></li>
                  <li className={styles.menuItem}><a href="#section5" className={styles.menuLink}>Token holders</a></li>
                  <li className={styles.menuItem}><a href="#section6" className={styles.menuLink}>Guardians</a></li>
                  <li className={styles.menuItem}><a href="#section7" className={styles.menuLink}>Governance Proposals</a></li>
                  <li className={styles.menuItem}><a href="#section8" className={styles.menuLink}>Aave Improvement Proposals</a></li>
                  <li className={styles.menuItem}><a href="#section9" className={styles.menuLink}>Proposal Thresholds</a></li>
                  <li className={styles.menuItem}><a href="#section10" className={styles.menuLink}>Governance Process and Mechanisms</a></li>
                  <li className={styles.menuItem}><a href="#section11" className={styles.menuLink}>Voting Metrics and Insights</a></li>
                  <li className={styles.menuItem}><a href="#section12" className={styles.menuLink}>Voting Process</a></li>
                  <li className={styles.menuItem}><a href="#section13" className={styles.menuLink}>Contribution Pathways</a></li>
                  <li className={styles.menuItem}><a href="#section14" className={styles.menuLink}>Aave Grants</a></li>

 

              </ul>
          </div>
          <div className={styles.contentContainer}>
              <div id="section1" className={styles.section}>
                  <h2 className={styles.sectionTitle}>Aave</h2>
                  <div className={styles.quoteContainer}>
        <p className={styles.quote}><strong>Aave</strong> is a decentralized, non-custodial, open-source liquidity market protocol where users can participate as depositors or borrowers. It serves dozens of listed collateral assets, various yield integrations, and a grants program. </p>
      </div>
      <p>Aave was first known as ETHLend, but later, in 2018, it rebranded to Aave under the overview of Aave Companies (now Avara). The protocol launched its first token, AAVE, in October 2020, which also serves as the governance token of Aave DAO. </p>
      <p>In March 2022, it launched Aave V3 and Portal within it, allowing Aave assets to be used seamlessly across blockchains. In July 2022, the Aave community unanimously supported Aave Companies’ proposal to issue $GHO - a native decentralized, collateral-backed stablecoin pegged to USD. </p>
       </div>


        <div id="section2" className={styles.section}>
        <h2 className={styles.sectionSubtitle}>Aave DAO Governance</h2>
        <p>Aave governance consists of the proposition and decision-making process for the different risk parameter changes, improvements and incentives that constitute the protocol policies, together with upgrades to governance itself</p>
        <p>All decisions governing the protocol are enacted by specific mechanisms and through the collaboration of various actors.</p>
           
        </div>
    
       <div id="section3" className={styles.section}> 
       <p className={styles.titleBlack}>Governance Framework </p>
         <img src="/images/aave-framework.jpg" alt="Aave frameworks" className={styles.benefitsImage} />
  
          </div>

       <div id="section4" className={styles.section}> 
      <p className={styles.titleBlack}>Aave DAO and Aave Grants DAO</p> 
      <p>Both DAOs function simultaneously within the ecosystem. Aave DAO oversees the community and its governance, while Aave Grants DAO is a community-led grants program, focused on growing a thriving ecosystem of contributors within the protocol’s ecosystem. Aave Grants DAO boost contributions by funding ideas, projects and events, such as hackathons, rAAVEs, and more.</p>
        </div>
             
       <div id="section5" className={styles.section}> 
       <p className={styles.titleBlack}>Token holders</p>
       <p>The AAVE token empowers holders to collectively act as governors of the protocol by enabling to create new proposals and vote on them. <Link href='https://docs.aave.com/governance/' className={styles.link} target='_blank'>“Any user can choose to delegate one or both of the governance powers associated with a token,”</Link> either through Aave’s governance portal or programmatically.</p> 
        </div>


    <div id="section6" className={styles.section}> 
    <p className={styles.titleBlack}>Guardians</p> 
    <p>Aave has a community team, the "Aave Guardians," that arranges itself through councils. It is a group of community-elected individuals or entities who are part of a 6/10 multisig with specific roles delegated by the Aave community. Get to know Aave Guardians <Link href='https://docs.aave.com/governance/aave-guardians' className={styles.link} target='_blank'>here</Link>.</p>
     <p>Guardians currently fulfill the following responsibilities:</p>
     <ul>
      <li>Protect the Aave Protocol against potential governance takeovers by to "vetoing" an AIP if it is deemed malicious.</li>
      <li>Temporarily holds keys to new deployments of the Aave Protocol on L2 while the Aave finishes the technical implementations for Aave Governance. Currently, only the V3 Avalanche Market is held by the Guardians, as all other markets now use the cross-chain governance module.</li>
      <li>Act as a failsafe emergency actor to pause Aave markets.</li>
     </ul>
    </div>
   
  <div id="section7" className={styles.section}> 
  <h3 className={styles.titleBlack}>Governance Proposals</h3>
  <p className={styles.titleBlack}>Aave Improvement Proposals</p>
  <p>There are two proposal types:</p>
  <ul>
    <li>Long time lock proposals: These proposals affect governance consensus require more voting time and a higher vote differential. Voting time is 10 days.</li>
    <li>Short term lock proposals: These affect only protocol parameters require less voting time and can be quickly implemented. Voting time is 3 days.</li>
  </ul>

   </div>

   <div id="section8" className={styles.section}> 
       <p className={styles.titleBlack}>Proposal Thresholds</p>
       <p>Quorum and voting differentials needed for passing the proposal vary according to proposal types.</p> 
       <img src="/images/voting-thresholds.jpg" alt="Voting" className={styles.benefitsImage} />
       <p>Without quorum, the proposal will not be considered an official proposal, even if the proposal achieves a majority. It is the responsibility of the proposal author to motivate the community to engage in voting in order to reach a quorum. Any changes to the quorum requirements must be amended by the community through an AIP.</p>

        </div>


  <div id="section9" className={styles.section}> 
       <h2 className={styles.sectionSubtitle}>Governance Process and Mechanisms </h2>
    </div>

    <div id="section10" className={styles.section}> 
       <p className={styles.titleBlack}>Voting Metrics and Insights </p>
       <ul>
        <li><Link href='https://etherscan.io/token/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9' className={styles.link}>164</Link>K token holders</li>
        <li><Link href='https://messari.io/project/aave/governance/on-chain' className={styles.link} target='_blank'>93% proposal passing rate with a 2.4% participation rate in on-chain voting</Link></li>
        <li>Voting power depends directly on the amount of tokens delegated to members.</li>
       </ul>
    </div> 
    <div id="section11" className={styles.section}> 
       <p className={styles.titleBlack}>Voting Process </p>
       <ol>
        <li>Aave Request for Comments (ARCs) are submitted in the <Link href='https://governance.aave.com/' className={styles.link} target='_blank'>Governance Forum</Link>. Once a proposal has integrated suggestions and received enough feedback, the proposal can move forward to the voting stages.</li>
        <p></p>
        <li>A <Link href='https://snapshot.org/#/aave.eth' className={styles.link} target='_blank'>Snapshot</Link> poll is made to reach rough consensus off chain. This vote is used to gauge the sentiment for ARC’s before moving forward to an on-chain vote (if necessary).</li>
        <p></p>
        <li>On-chain voting is required on any Aave Improvement Proposal. An AIP number will be assigned by an AIP reviewer, after making necessary improvements, it is posted on Github. Aave on-chain votes will occur through the <Link href='https://app.aave.com/governance/' className={styles.link} target='_blank'> Aave Governance Portal</Link>. The voting period must last for a minimum period of 5 days.</li>
         <p></p>
         <li>4. A community member with enough proposition power submits the AIP. More specifications about the AIPs submitting process can be found <Link href='https://docs.aave.com/governance/aips' className={styles.link} target='_blank'>here</Link>.</li>
       </ol>
    </div> 

    <div id="section12" className={styles.section}> 
        <h2 className={styles.sectionSubtitle}>Contribution Pathways</h2>
    </div>
    <div id="section13" className={styles.section}> 
        <p className={styles.titleBlack}>Aave Grants</p>
        <p>Aave grants are funding initiatives conducted by the Aave Grants DAO (AGD) with the aim of boosting the Aave ecosystem. All functions of the AGD is overseen by a committee of <Link href='https://governance.aave.com/t/aave-grants-dao-update-renewal/11118' className={styles.link} target='_blank'>eleven full-time contributors</Link>.</p>
        <p>Applications are accepted on a rolling bases for 2 grant initiatives: Rapid Grants (for fast grants allocating a smaller and bigger amount) and Grants Above (allocating amounts above $80K).</p>
   
   
   <p>The following areas are eligible for grant funding:</p>
   <ul>
    <li>Protocol development</li>
    <li>Applications and integrations</li>
    <li>Developer tooling</li>
    <li>Code audits</li>
    <li>Committees, sub-committees, and DAOs that serve the Aave ecosystem</li>
    <li>Community (marketing and educational)</li>
    <li>Events & hackathons</li>
   </ul>
    <p>Aave Grants DAO also conducts Request For Grants, an initiative to better direct builders to apply for grants in high impact areas that are highly beneficial to Aave. Learn about RFG <Link href='https://aavegrants.org/request-for-grants-rfgs' className={styles.link} target='_blank'>here</Link>.</p>
    </div>

    <div id="section14" className={styles.section}> 
        <p className={styles.titleBlack}>Stay up to date on Aave</p>
        <p><Link href='https://governance.aave.com/' className={styles.link}>Forum</Link>, <Link href='https://twitter.com/aave' className={styles.link} target='_blank'>Aave Labs Twitter</Link> and <Link href='https://twitter.com/GHOAave' className={styles.link} target='_blank'>GHO Twitter</Link>.</p>
    </div>

          </div>
      </div>
  );
};

export default Article;