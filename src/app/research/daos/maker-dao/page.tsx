"use client";
import React from 'react';
import Link from 'next/link';
import styles from './ArticleLayout.module.css';

const Article = () => {
  return (
      <div className={styles.articleContainer}>
          <div className={styles.menuContainer}>
              <ul className={styles.menu}>
                  <li className={styles.menuItem}><a href="#section1" className={styles.menuLink}>Maker</a></li>
                  <li className={styles.menuItem}><a href="#section2" className={styles.menuLink}>The Foundation</a></li>
                  <li className={styles.menuItem}><a href="#section3" className={styles.menuLink}>Challenges</a></li>
                  <li className={styles.menuItem}><a href="#section4" className={styles.menuLink}>EndGame</a></li>
                  <li className={styles.menuItem}><a href="#section5" className={styles.menuLink}>Governance</a></li>
                  <li className={styles.menuItem}><a href="#section6" className={styles.menuLink}>Governance Framework</a></li>
                  <li className={styles.menuItem}><a href="#section7" className={styles.menuLink}>Token Holders</a></li>
                  <li className={styles.menuItem}><a href="#section8" className={styles.menuLink}>Governance Facilitators</a></li>
                  <li className={styles.menuItem}><a href="#section9" className={styles.menuLink}>Endgame Governance Framework</a></li>
                  <li className={styles.menuItem}><a href="#section10" className={styles.menuLink}>SubDAOs</a></li>
                  <li className={styles.menuItem}><a href="#section11" className={styles.menuLink}>Aligned Voted Committee</a></li>
                  <li className={styles.menuItem}><a href="#section12" className={styles.menuLink}>Aligned Delegates</a></li>
                  <li className={styles.menuItem}><a href="#section13" className={styles.menuLink}>Scope Advisory Councils</a></li>
                  <li className={styles.menuItem}><a href="#section14" className={styles.menuLink}>Governance Proposals</a></li>
                  <li className={styles.menuItem}><a href="#section15" className={styles.menuLink}>Endgame MIP</a></li>
                  <li className={styles.menuItem}><a href="#section16" className={styles.menuLink}>Governance Process and Mechanisms</a></li>
                  <li className={styles.menuItem}><a href="#section17" className={styles.menuLink}>Voting Power</a></li>
                  <li className={styles.menuItem}><a href="#section18" className={styles.menuLink}>Voting Process</a></li>
                  <li className={styles.menuItem}><a href="#section19" className={styles.menuLink}>Governance Participation</a></li>
                  <li className={styles.menuItem}><a href="#section20" className={styles.menuLink}>The future steps of Endgame via Rune Christensen</a></li>
                  <li className={styles.menuItem}><a href="#section21" className={styles.menuLink}>Endgame's Tokenomics updates</a></li>
                  <li className={styles.menuItem}><a href="#section22" className={styles.menuLink}>Contribution Pathways</a></li>
             </ul>
          </div>




          <div className={styles.contentContainer}>
              <div id="section1" className={styles.section}>
                  <h2 className={styles.sectionTitle}>Maker</h2>
                  <div className={styles.quoteContainer}>
        <p className={styles.quote}>
        <strong>Maker DAO</strong>  remains one of the key players in DeFi. Its community governs Maker Protocol. 
        Maker Protocol's main components include: </p>
        <ul>
          <li><strong>DAI:</strong> A decentralized, collateral-backed currency that maintains a stable value relative to the US Dollar.</li>
          <li><strong>Vaults:</strong>  Smart contracts that lock collateral assets and issue DAI against them.</li>
          <li><strong>Stability fee:</strong> The interest rate Vault users pay to maintain their positions and stabilize the DAI peg.</li>
          
          </ul>
      </div>
      <p>
      Maker's governance structure, framework, and processes are significantly restructuring.
   </p>
   <p>We aim to provide a clear understanding of Maker DAO’s current governance, and Endgame's plan to restructure it. 
   </p>
   <p>This report reflects the state of the DAO until November 2023. Please note that this analysis may change in the following months.</p>
              </div>


              <div id="section2" className={styles.section}>
                  <p className={styles.titleBlack}>The Foundation</p>
                  <p className={styles.paragraph}>The Foundation was formed in 2015 by Rune Christensen. It built and launched the Maker Protocol.  </p>
                  <p className={styles.paragraph}>Its primary purpose was to provide funding and leadership to boost the development of the Protocol and promote its adoption before delegating complete control to the community in 2017.</p>
       
              </div>
           
              <div id="section3" className={styles.section}>
                  <p className={styles.titleBlack}>Challenges</p>
                <p>MakerDAO faced new and complex challenges during this bear market.</p>
              <ul className={styles.orderedList}>
             <li className={styles.listItem}> Governance Scalability: as the largest DAO large-scale alignment has become too complex.</li>
              <li className={styles.listItem}>the DAO has more expenses than revenue:</li>
              <p>- Headcount (115 associates)</p>
              <p>- Annual cash burn rate (43.6M)</p>
              <p>- MKR compensation in DAI terms is estimated at 17.3M</p>
              <p>- Makerburn stability fees: 51.4M</p>

              <p>It was operating at a 9.4M loss. The DAO was no longer profitable.</p>
               </ul> 
               </div>
                  <div id="section4" className={styles.section}> 
                  <p className={styles.titleBlack}>Endgame </p>
                  <p><strong>“The Endgame Plan aims to overhaul and improve the Maker Protocol, its governance, and its ecosystem so it can reach a self-sustainable equilibrium called an Endgame State.” - Rune via MakerDAO Forum.</strong></p>
                  <Link href="https://forum.makerdao.com/t/endgame-plan-v3-complete-overview/17427" target='_blank'>
          <p className={styles.link}>Rune via MakerDAO Forum.</p>
        </Link>  
                  <img src="/images/maker-endgame.png" alt="AIP-1" className={styles.benefitsImage} />
                  <p className={styles.paragraph}>
                  Endgame aims to simplify MakerDAO's focus by minimizing its scope and solely focusing Maker on supporting DAI. The main DAO will delegate other responsibilities to SubDAOs specializing in specific products.
    </p>
          <p>Endgame will develop over several stages:</p>
          <img src="/images/endgame-develop.png" alt="Develop" className={styles.benefitsImage} /> 


                  </div>

                  <div id="section5" className={styles.section}> 
                  <h2 className={styles.sectionSubtitle}>Governance</h2> 
                  <p>MakerDAO governance is facilitated through the MKR token, which allows holders to vote on proposals and influence the platform's future.</p>
                  <p id="section6" className={styles.titleBlack}>Governance Framework</p>
                  <div className={styles.quoteContainer}>
                  <p className={styles.quote}>Learn about pre- and Endgame governance structures and roles. </p> 
                  </div>
                  <p id="section7" className={styles.titleBlack}>Token holders</p>
                  <p>MKR Holders can approve Maker Protocol Stability fees, debt ceilings, or Collateral On and off-boarding changes. There is no other way to deploy changes to the protocol.</p>
                  <p id="section8" className={styles.titleBlack}>Governance Facilitators</p>
                  <p>These individuals are responsible for executing on-chain governance votes and implementing the decisions made by the community. They help facilitate the governance process.</p>
              </div>


              <div id="section9" className={styles.section}> 
              <h2 className={styles.sectionSubtitle}>Endgame Governance Framework</h2>
            <p>The new framework functions within The Scope Artifact, a designed mechanism to align actions and incentives of participants within a specific scope defined by the Atlas - a constitution-like foundational set of rules.</p>
           <p>Voting will be arranged by committees of voters, with delegates representing their interests, strategies, and Endgame's "universal alignment."</p>

</div>

<div id="section10" className={styles.section}>
  <p className={styles.titleBlack}>SubDAOs</p>
  <p>SubDAOs will enable to test new products and project insulated from the main DAO.</p>
  <p>As defined in MIP101, subDAOs create a "second layer of the ecosystem to foster fast-moving, risk-adjusted innovation, growth, and experimentation."</p>
  <p><strong>Only the members of these SubDAOs will have complete control over decision-making by using the subDAO-specific token.</strong></p>
  <p>Each DAO will have its own tokenomics, vault and will be in charge of its front end. Thus, MakerDAO will transition into a multi-token system. SubDAOs may pursue any objective they wish and hunt down profit-generating activity.</p>
  <img src="/images/subdaos-maker.jpg" alt="SubDAOs" className={styles.benefitsImage} /> 
   </div>
<p>Endgame will introduce two types of SubDAOs: FacilitatorDAOs and AllocatorDAOs. </p>



          </div>
      </div>
  );
};

export default Article;