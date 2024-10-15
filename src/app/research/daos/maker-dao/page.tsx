"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './ArticleLayout.module.css';

const Article = () => {
  const [showWeekly, setShowWeekly] = useState(false);
  const [showMonthly, setShowMonthly] = useState(false);

  const toggleWeekly = () => setShowWeekly(!showWeekly);
  const toggleMonthly = () => setShowMonthly(!showMonthly);
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
  
  <p>Endgame will introduce two types of SubDAOs: FacilitatorDAOs and AllocatorDAOs. </p>
<ul>
  <li><strong>FacilitatorDAOs:</strong> Internal process executors in charge of the administrative side and organize MakerDAO, AllocatorDAOs, and MiniDAOs.</li>
  <p></p>
<li><strong>AllocatorDAOs:</strong> A DAO focused on product and growth. They can generate DAI, operate decentralized frontends, and incubate MiniDAOs - groups working on an innovative project or idea. SparkDAO is the most developed Maker Allocator subDAO, which owns and manages Spark protocol.</li>
</ul>
<p>So far Spark, Sakura, Qualitative and the Quantitative SubDAOs are in their final stages of establishment. In October 16 2023, the Spark subDAO began airdropping two billion SPK, the governance token for SparkDAO, to eligible holders of $DAI. You can learn more about Spark and how to get involved  <Link href="https://app.spark.fi/" target='_blank'>
      <span className={styles.link}  >here.</span>
        </Link></p>
        <Link href="https://docs.spark.fi/governance/sparkdao" target='_blank'>
      <p className={styles.link}  >All subDAOs are expected to launch around May 2024.</p>
        </Link>
  
  
  </div>
  <div id="section11" className={styles.section}>
  <p className={styles.titleBlack}>Aligned Voter Committee</p>
  <p>The voter committee is made up of a group of MKR holders who coordinate to analyze the best voting behavior following a particular strategy. They:</p>
  <ul>
    <li>Publicly coordinate political positioning with other Voter Committees and voting blocs to reach compromises.</li>
    <li>Ensure day-to-day rules align with the spirit of regulations.</li>
  </ul>
<p>AVCs are subject to specific requirements enforced by the Governance Scope and receive various benefits, resources, and support from the Support Scope.</p>
    </div>

    <div id="section12" className={styles.section}>
    <p className={styles.titleBlack}>Aligned Delegates</p>
    <p>Aligned Delegates use the Protocol Delegation System to represent MKR holders through their MKR voting power while earning Governance Participation Rewards. Delegates may be part of a AVC.</p>
    <p>The most essential task of ADs is to use their power to protect the spirit of the Atlas and maintain the Universal Alignment of the Maker Ecosystem.</p>
      </div>

      <div id="section13" className={styles.section}>
      <h2 className={styles.sectionSubtitle}>Governance Proposals</h2> 
      </div>
      <div id="section14" className={styles.section}>
    <p className={styles.titleBlack}>Endgame MIP</p>
    <p>MIPs regulate the behavior of Maker Governance and the Maker Protocol. As established in MIP0c2, all MIPs except Endgame MIPs were made obsolete.</p>
    <p>Endgame MIPs are designated explicitly in MIP0c2 to remain active after the Maker Constitution has come into effect. Endgame MIPs follow the same monthly governance process as regular MIPs.</p>
    <p><strong>MIPs phases</strong></p>  
    <ol>
      <li>Request For Comments submission.</li>
      <li>Inclusion and Governance Poll - week 2 and 3 are dedicated to polls and their reviews.</li>
      <li>Executive Vote - seven-day voting period.</li>
    </ol>
      </div>

      <div id="section15" className={styles.section}>
      <h2 className={styles.sectionSubtitle}>Governance Process and Mechanisms</h2>  
      <p>The monthly governance cycle framework allows for both active and less active token holders to participate. Active participants can engage in discussions at the proposal submission stage, while those who are less active can review the discussion after it closes at the end of the month.</p>
       <p>Token holders directly manage the system by:</p>
       
      <ul>
        <li><strong>Governance Polling:</strong> Governance Polls establish a soft consensus and measure community sentiment through time-based voting.</li>
       <p></p>
        <li><strong>Executive Voting</strong> enacts hard changes to the Protocol when passed through continuous approval voting.</li>
      </ul>

      <img src="/images/approved.png" alt="Approved Governance" className={styles.benefitsImage} /> 
        </div>
         
        <div id="section16" className={styles.section}>
        <p className={styles.titleBlack}>Voting Power</p>
        <p>Voting power 1 MKR token = 1 vote</p>
        <ul>
          <li>As delineated in MakerDAO's <Link href="https://makerdao.com/en/whitepaper/#abstract" target='_blank' className={styles.link} >white paper</Link>, MKR voting weight is proportional to the amount of MKR a voter stakes in the voting contract. In other words, the more MKR tokens locked in the contract, the greater the voter's decision-making power.</li>
         <p></p>
          <li>More than 300 addresses delegate 15.16% of MKR.</li>
         <p></p>
          <li><Link href="https://makerburn.com/#/expenses/core-units/DELEGATES" target='_blank' className={styles.link} >The current payout</Link> is about $120k per month in total.</li>
       
        </ul>
        <img src="/images/system-maker.png" alt="System Info" className={styles.benefitsImage} /> 

          </div>
         

         <div id="section17" className={styles.section}>
        <p className={styles.titleBlack}>Voting Process</p> 
        <p>Both weekly and monthly cycles are expected to still be in place after Endgame.</p>
        <div className={styles.cycleSection}>
        <p onClick={toggleWeekly} className={styles.toggleText}>
          {showWeekly ? "▼ Weekly Governance Cycle" : "▶ Weekly Governance Cycle"}
        </p>
        {showWeekly && (
          <img 
            src="/images/weekly.png" 
            alt="Weekly Governance Cycle" 
            className={styles.cycleImage} 
          />
        )}

        <p onClick={toggleMonthly} className={styles.toggleText}>
          {showMonthly ? "▼ Monthly Governance Cycle" : "▶ Monthly Governance Cycle"}
        </p>
        {showMonthly && (
          <img 
            src="/images/montly.png" 
            alt="Monthly Governance Cycle" 
            className={styles.cycleImage} 
          />
        )}
      </div> 
      </div>
        

      <div id="section18" className={styles.section}>
      <p className={styles.titleBlack}>Governance Participation</p>
      <p>The participation in $MKR has decreased from 198,842 in January 2023 to 166,810 MRK at present.</p>
      <img src="/images/participation-maker.png" alt="Governance participation" className={styles.benefitsImage} /> 
      <p>Learn the voting process and keep track of the current delegates here.</p>

      </div>
      <div id="section19" className={styles.section}>
      <h2 className={styles.titleBlack}>The future steps of Endgame via Rune Christensen</h2> 
      <p ><strong>Phase 1: Beta Launch (EOY)</strong></p>
      <p>A new unified brand will be established, together with a new stablecoin and governance token separate from DAI and MKR. This phase will lay the groundwork for the future growth of Maker.</p> 
      <p><strong>Phase 2: SubDAO Launch</strong></p>
      <p>Six Maker subDAOs will be established, each with its own governance tokens. 
      These subDAOs have been designed to operate autonomously from Maker. Their mission is linked to the protocol, but they will explore and focus on specific products or services. This aims to encourage participation through gamification.</p>
      <p ><strong>Phase 3: Governance AI tools launch</strong></p>
      <p>These open source tools will improve "Alignment Artifacts," guiding the governance experience and enhancing processes over time without needing a centralized leadership.
      AI tooling will enable making decisions quicker, and if things turn dire, subDAOs insulate impact from the rest of the governance framework.</p>
      <p ><strong>Phase 4: Governance participation incentive launch</strong></p>
      <p>Phase 4 addresses voter apathy by implementing voting incentives through the Sagittarius Lockstake Engine.
      Token holders can lock their tokens behind a high exit fee without a specific time frame. Lockstaking provides value to the user through token rewards and to Maker, generating long-term incentivized alignment. Lockstaking also requires delegating governance tokens, choosing a delegate and a strategy.</p>


        </div>


        <div id="section20" className={styles.section}>
        <p className={styles.titleBlack}>Endgame’s Tokenomics updates</p>
        <p>The Endgame Plan has several major tokenomics updates.</p>
        <ul>
          <li>It modifies the MKR burn mechanism. The protocol uses profits to purchase liquidity pool tokens, representing liquidity pools holding various combinations of MKR, Dai, and SubDAO governance tokens. These token purchases aim to ensure the alignment of interests between Maker Core and SubDAOs. The accumulated liquidity pool tokens are used to buy and burn MKR at suitable opportunities.</li>
          <li>Annual MKR minting will be used to incubate SubDAOs, fund AVCs, and incentivize the workforce. These emissions counteract the burn mechanism and reduce the likelihood of MKR becoming concentrated in the hands of large holders.</li>
          <li>Users may lock up their MKR in a new module but continue to use it to participate in governance. Such locked-up MKR is eligible for Dai and SubDAO token farming rewards. When users wish to unlock their MKR from this module, a percentage of their initial deposit is burned.</li>
        </ul>
        <p>With tokenomics updates, Maker Governance no longer guarantees that MKR will function as a backstop if Maker becomes insolvent. Governance may instead choose to adjust the Target Price of Dai, which would result in a loss in value for DAI holders.</p>
          </div>


          <div id="section21" className={styles.section}>
          <h2 className={styles.sectionSubtitle}>Contribution Pathways</h2>  
          <p>As Endgame continues to develop, the ways to be able to contribute to MakerDAO will be clarified.</p>
          <p>Once sub-DAOs are fully launched, governance bodies and representatives are established, and Governance AI tools are developed, Phase 4 will introduce compensation and voting incentives for token holders through Lockstaking.</p>
          <p>More details about these incentives are still developing.</p>
            </div>
         </div>
      </div>
  );
};


export default Article;