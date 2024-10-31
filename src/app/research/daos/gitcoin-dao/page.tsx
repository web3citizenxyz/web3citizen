"use client";
import React from 'react';
import Link from 'next/link';
import styles from '../ArticleLayout.module.css';

const Article = () => {
  return (
      <div className={styles.articleContainer}>
          <div className={styles.menuContainer}>
              <ul className={styles.menu}>
                  <li className={styles.menuItem}><a href="#section1" className={styles.menuLink}>Gitcoin DAO</a></li>
                  <li className={styles.menuItem}><a href="#section2" className={styles.menuLink}>AIP-1</a></li>
                  <li className={styles.menuItem}><a href="#section3" className={styles.menuLink}>Arbitrum DAO Governance</a></li>
                  <li className={styles.menuItem}><a href="#section4" className={styles.menuLink}>Governance Framework</a></li>
                  <li className={styles.menuItem}><a href="#section5" className={styles.menuLink}>Gobvernance Proposals</a></li>
                  <li className={styles.menuItem}><a href="#section6" className={styles.menuLink}>Security Council Actions</a></li>
                  <li className={styles.menuItem}><a href="#section7" className={styles.menuLink}>Governance Process and Mechanisms</a></li>
                  <li className={styles.menuItem}><a href="#section8" className={styles.menuLink}>Voting Power</a></li>
                  <li className={styles.menuItem}><a href="#section9" className={styles.menuLink}>Voting Process</a></li>
                  <li className={styles.menuItem}><a href="#section10" className={styles.menuLink}>Delays and Waiting Periods</a></li>
                  <li className={styles.menuItem}><a href="#section11" className={styles.menuLink}>Contribution Pathways</a></li>
                  <li className={styles.menuItem}><a href="#section12" className={styles.menuLink}>Ambassadors Program</a></li>
                  <li className={styles.menuItem}><a href="#section13" className={styles.menuLink}>Grants</a></li>
              </ul>
          </div>
          <div className={styles.contentContainer}>
              <div id="section1" className={styles.section}>
                  <h2 className={styles.sectionTitle}>Gitcoin DAO</h2>
                  <div className={styles.quoteContainer}>
        <p className={styles.quote}>
        <strong>Offchain</strong>Labs is a New York-based company building <strong>Arbitrum, Arbitrum One, and Nova</strong>, Layer 2 scaling solutions for Ethereum. Arbitrum launched on Mainnet on August 31, 2021, and on August 31, 2022, Arbitrum One and Nova upgraded to Nitro tech stack.
        </p>
      </div>
      <p>
      In 2023, ArbitrumDAO was launched by airdropping $ARB, the ERC-20 governance token for Arbitrum Nova and Arbitrum One. The $ARB token allows holders to participate in the Arbitrum DAO's on-chain governance protocol by controlling protocol updates, funds and electing ArbitrumDAO’s Security Council.
   </p>
   <p>This transfer of power included:</p>
   <ul className={styles.orderedList}>
            <li className={styles.listItem}><strong>Control of the upgradeability and technical future of the chains</strong></li>
            <li className={styles.listItem}><strong>Control over the DAO treasury and net fee revenue - i.e., the net difference between fees collected by on-chain operations and L1 fees paid by the Sequencer</strong></li>
            <li className={styles.listItem}><strong>All Arbitrum social media platforms and accounts</strong></li>
        
            <li className={styles.listItem}><strong>Ability to elect and, if deemed appropriate, remove the Security Council and Directors</strong></li>
            </ul> 



              </div>


              <div id="section2" className={styles.section}>
                  <h2 className={styles.sectionSubtitle}>AIP-1</h2>
                  <p className={styles.paragraph}>The Arbitrum Foundation submitted the AIP-1 proposal to delineate ArbitrumDAO's structure and governance rules. The community raised several transparency, accountability, and decentralization concerns. </p>
                  <p className={styles.paragraph}>Most importantly:</p>
                  <ul className={styles.orderedList}>
            <li className={styles.listItem}><strong>The allocation of 1B dollars worth of tokens (7.5% of the total supply) to the Foundation's Administrative Budget Wallet. The Foundation needed to clarify who would sign for that wallet and how its money would be spent.</strong></li>
            <li className={styles.listItem}><strong>The Security Council establishment did not clarify any election process.</strong></li>
            </ul> 
             <p className={styles.paragraph}>The Foundation had begun selling $ARB tokens for stablecoins before its governance community of token holders had "ratified" the organization's nearly $1 billion budget.</p>
             <p className={styles.paragraph}>AIP-1 did not pass. After AIP-1’s communication received negative feedback, the Foundation rectified decisions through AIP-1.1 Lockup, Budget, Transparency, where they clarified their processes and the next steps in the governance journey to the community.</p>
            <p className={styles.paragraph}>ArbitrumDAO has quickly become one of the most engaged communities, with more than 633.43k token holders and 137.02k voters.</p>
           
              </div>
           
              <div id="section3" className={styles.section}>
                  <h2 className={styles.sectionSubtitle}>Arbitrum DAO Governance</h2>
                  </div>
                  <div id="section4" className={styles.section}> 
                  <p className={styles.titleBlack}>Governance Framework </p>
                  <img src="/images/gob-frame-arb.avif" alt="Benefits of DAO frameworks" className={styles.benefitsImage} />
                  <p className={styles.paragraph}>
        <Link href="https://docs.arbitrum.foundation/foundational-documents/transparency-report-initial-foundation-setup" target='_blank'>
          <p className={styles.link}>ArbitrumDAO's governance has three main bodies:</p>
        </Link> 
    </p>
    <ul className={styles.orderedList}>
            <li className={styles.listItem}><strong>The DAO</strong>is comprised of $ARB holders who vote to pass proposals.</li>
            <li className={styles.listItem}><strong>The Security Council</strong>  can take action in two ways:
            <ul className={styles.orderedList}>
                
            <li className={styles.listItem}>Emergency actions: 9 of 12 multisig enables fast action in an emergency.</li>  
            <li className={styles.listItem}>Non-emergency actions:  7 of 12 multisig enables action for routine upgrades that bypass the need for DAO member voting</li> 
            <li className={styles.listItem}>The Security Council has the power to cancel or block proposals.</li></ul> 
            </li>
            <li>Data Availability Committee: This committee stores data batches for transactions on the Arbitrum Nova chain on a specific server  <Link href="https://developer.arbitrum.io/das/daserver-instructions" target='_blank'>
          <p className={styles.link}>(Data Availability Server)</p>
        </Link> </li>
            </ul> 
           <p className={styles.paragraph}>Establishing the Arbitrum Foundation marked the initial phase of launching the DAO. Its primary objective is to serve the ArbitrumDAO community by guiding and facilitating the DAO’s decision-making. It also fosters the ecosystem development.</p>
           <p className={styles.paragraph}>Governance is responsible for the following assets:</p>
           <ul className={styles.orderedList}>
                
                <li className={styles.listItem}>Treasury - DAO holds and is responsible for a portion of $ARB tokens.</li>  
                <li className={styles.listItem}>Arb One Contracts and Arb Nova Contracts - Governance holds upgradability rights over these contracts on these contracts deployed on Ethereum Mainnet.</li> 
                <li className={styles.listItem}>Arb One and Arb Nova L2 parameters - All Arbitrum chains have a chain "owner" that can set specific parameters. Read more here. Governance has control over the chain owner.</li>
                <li className={styles.listItem}>Governance contracts - Governance can upgrade and modify itself.</li>
                <Link href="https://github.com/ArbitrumFoundation/governance/blob/main/docs/foundation-vesting-wallet.md" target='_blank'>
                <li className={styles.link}>Arbitrum Foundation Administrative Budget Wallet — See here for more info.</li>
             </Link>
                </ul> 
 
                <p className={styles.paragraph}>Governance specifications and details can be found in the
                <Link href="https://docs.arbitrum.foundation/dao-constitution" target='_blank'>
                <span className={styles.link}>   Constitution.</span>
                </Link>
                </p> 
                  </div>

                  <div id="section5" className={styles.section}> 
                  <h2 className={styles.sectionSubtitle}>Governance Proposals</h2> 
                  <p className={styles.titleBlack}>Arbitrum Improvement Proposals</p>
                  <p>An <strong> Arbitrum Improvement Proposal (AIP)</strong>is submitted by a member of the Arbitrum DAO to modify to the Arbitrum ecosystem</p>
                  <p>There are two types of AIPs:</p>
                  <ul className={styles.orderedList}>
            <li className={styles.listItem}><strong>Constitutional AIPs</strong> change the text or procedures of the Constitution or AIP-1, install or modify the software on any chain, or take any action that requires "chain owner" permission.</li>
            <li className={styles.listItem}><strong>Non-constitutional AIPs</strong> are all other AIPs, such as those that request funds/grants or provide general guidelines or information to the community.</li>
            </ul>
    
              </div>
              <div id="section6" className={styles.section}> 
              <p className={styles.titleBlack}>Security Council Actions</p>
            <p>The<strong> Security Council</strong> has the power to execute emergency actions and non-emergency actions. These differ from traditional AIPs because the Security Council can approve them without going through the above process</p>
</div>
<div id="section7" className={styles.section}> 
<h2 className={styles.sectionSubtitle}>Governance Process and Mechanisms</h2> 
</div>
<div id="section8" className={styles.section}> 
<h2 className={styles.sectionSubtitle}>Voting Power</h2> 
<p>The Arbitrum DAO may be new, but it has already gained a large and active community. With over 633.43k token holders and 137.02k voters, members are dedicated to advancing the goals of the Arbitrum Mission and the Ethereum ecosystem.</p>
</div>
<div id="section9" className={styles.section}> 
<h2 className={styles.sectionSubtitle}>Voting Process</h2> 
<p>For proposals not enacted by The Security Council:</p>
<p className={styles.titleBlack}>Step 1: Temperature check using Snapshot Poll</p>
<p>This preliminary vote gauges the community's interest in a proposal before it moves on to the next stage.</p>
<p className={styles.titleBlack}>Step 2: Submit your on-chain proposal using Tally</p>
<p>To submit a proposal you need to have an Ethereum Wallet Address representing at least 1,000,000 tokens. </p>
<p>Today, 19 delegates can submit on-chain proposals to the Arbitrum DAO ecosystem. </p>
<p>To be approved, more than 50% of tokens must have voted in favor of the proposal:</p>
<ul className={styles.orderedList}>
            <li className={styles.listItem}><strong>Constitutional AIPs</strong> must receive votes from at least 5% of all votable tokens; </li>
            <li className={styles.listItem}><strong>Non-constitutional</strong> AIPs must receive votes from at least 3% of all votable tokens.</li>
            </ul>
<p>The entire AIP voting process typically takes 34 days for Constitutional or 21 days for Non-Constitutional AIPs. </p>
<img src="/images/dao-vote.webp" alt="DAO vote" className={styles.benefitsImage} />

</div>


          </div>
      </div>
  );
};

export default Article;