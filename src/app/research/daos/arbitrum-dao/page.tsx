"use client";
import React from 'react';
import Link from 'next/link';
import styles from '../ArticleLayout.module.css';
import { symlink } from 'fs';

const Article = () => {
  return (
      <div className={styles.articleContainer}>
          <div className={styles.menuContainer}>
              <ul className={styles.menu}>
                  <li className={styles.menuItem}><a href="#section1" className={styles.menuLink}>Arbitrum</a></li>
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
                  <h2 className={styles.sectionTitle}>Arbitrum</h2>
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
<p className={styles.titleBlack} id='section10'>Delays and Waiting Periods</p>
<ul className={styles.orderedList}>
            <li className={styles.listItem}>All proposals, except those done by a 9/12 Security Council, will be subject to a series of delays: L2 timelock, withdrawal delay, and L1 timelock.</li>
            <li className={styles.listItem}>Users can withdraw their assets from Arbitrum One or Nova before the execution of an accepted proposal. </li>
           <li className={styles.listItem}>Anyone can monitor the execution process.</li>
            </ul>
            <p>This process allows for thorough consideration and voting, ensuring everyone has a fair chance to voice their opinions and concerns.</p>
</div>
<div id='section11' className={styles.section}>
<h2 className={styles.sectionSubtitle}>Contribution Pathways</h2>
<p>Any member of the community can contribute to the Arbitrum Ecosystem.</p>
</div>
<div id='section12' className={styles.section}>
<p className={styles.titleBlack}>Ambassadors Program</p>
<p>You can become an ambassador for Arbitrum by joining “fleets” and representing Arbitrum in your local community, creating content, and leading meetups.</p>
<p>There will be two Phases to the Ambassador Program. Phase 1 is already in place and directed toward University-based Clubs and Students. Phase 2 will focus on contribution opportunities for users (Community Fleet) and developers (Technical Fleet). Phase 2 is expected before the end of the year.</p>
<p>Learn more <Link href="https://arbitrumfoundation.medium.com/introducing-the-arbitrum-ambassador-program-phase-1-cf89d51a4dd9" className={styles.a} target='_blank'>here,</Link> read on the <Link href="https://www.notion.so/0edd353d91b94216a43501b3a3f8294c?pvs=4" target='_blank' className={styles.a}>Ambassadors’ contributions </Link>and apply <Link href="https://docs.google.com/forms/d/e/1FAIpQLSc9wsi1vv4FQ3i_RnMrjkBguwp843l-g1FHrnwlQ8ig38UkGw/viewform" target='_blank' className={styles.a}>here.</Link></p>
</div>

<div id='section13' className={styles.section}>
  <p className={styles.sectionSubtitle}>Grants</p>
  <p>Different grant programs exist within the Arbitrum Ecosystem. The Arbitrum Foundation runs Foundation Grants, while Arbitrum Grants DAO runs its initiatives separately.</p>
<p>DAO Grants</p>
<p>A group of contributors submitted a proposal to run the Arbitrum Grants DAO through working stream domain allocators. The grant would allocate funds to teams building apps on top of Arbitrum. The grant budget will be $1M with $200k for each domain. The proposal remains pending execution. Read the submission <Link href="https://www.tally.xyz/gov/arbitrum/proposal/52789605232046584393223454610845077119190920888046802640362214067679574612119?chart=0" target='_blank' className={styles.a}>here</Link>.</p>
<p>Learn more about DAO grant proposals and ongoing discussions <Link href="https://forum.arbitrum.foundation/c/dao-grant-programs/16/none" className={styles.a}>here.</Link></p>

<p className={styles.sectionSubtitle}>Foundation Grants</p>
<p>Arbitrum Foundation launched a program to foster the Ecosystem’s growth and support DAO initiatives. Foundation Grants allocate funds to key Arbitrum initiatives. <Link href="https://www.notion.so/Current-Phase-Categories-a0108619966148b4a9189ecda1a59ef3?pvs=4" className={styles.a}>Current categories </Link> for this first phase of grants are dApps built across Arbitrum and Infrastructure and Tools. Learn more about Foundation Grants <Link href="https://www.notion.so/53ad99f665d946adb58bf92e82438fd5?pvs=4" target='_blank' className={styles.a}>here.</Link></p>

<p className={styles.sectionSubtitle}>Uniswap-Arbitrum Grant Program</p>
<p>This grant program <Link href="https://forum.arbitrum.foundation/t/official-launch-1m-arb-uniswap-arbitrum-grant-program-uagp/19433" className={styles.a}>launched in November 2023</Link>. Gitcoin's Grants Stack hosts the program as a direct grant and the program is managed by Uniswap DAO Working Group Zero.</p>
<p>The UAGP focuses on growing and advancing projects built exclusively within the Uniswap-Arbitrum ecosystem. Projects submitted must benefit both ecosystems. </p>
<p>5 categories are available</p>
<ol className={styles.orderedList}>
            <li className={styles.listItem}>Liquidity Management and Derivative Protocol</li>
            <li className={styles.listItem}>Arbitrum testnet with EIP-1153 enabled</li>
           <li className={styles.listItem}>Uniswap v4 Infrastructure Dev Tools</li>
           <li className={styles.listItem}>Uniswap on Arbitrum Ecosystem tools or products </li>
           <li className={styles.listItem}>Open Contribution, for applications not necessarily aligning with the previous four categories</li>
            </ol>

<p>The Questbook Arbitrum Grants program</p>
<p>This program is helpful for anyone developing domain-specific projects on top of Arbitrum. It includes four categories:</p>
<ul className={styles.orderedList}>
            <li className={styles.listItem}>Arbitrum Gaming</li>
            <li className={styles.listItem}>Arbitrum new Protocols and Ideas</li>
           <li className={styles.listItem}>Arbitrum Education, Community Growth, and Events</li>
           <li className={styles.listItem}>Arbitrum Dev Tooling on One and NOVA </li>
            </ul>
 <p>Through the program, you can receive milestone-based funding based on domain-specific needs outlined by the domain allocators elected by the community.</p>
<p>Learn more <Link href="https://www.questbook.app/" target='_blank' className={styles.a}>here</Link> </p>
<img src="/images/arbitrum-daos-grants.png" alt="Arbitrum-grants" className={styles.benefitsImage} />

  </div>
      </div>
      </div>
  );
};

export default Article;