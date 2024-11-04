"use client";
import React from 'react';
import Link from 'next/link';
import styles from '../ArticleLayout.module.css';

const Article = () => {
  return (
      <div className={styles.articleContainer}>
          <div className={styles.menuContainer}>
              <ul className={styles.menu}>
                  <li className={styles.menuItem}><a href="#section1" className={styles.menuLink}>Compound</a></li>
                  <li className={styles.menuItem}><a href="#section2" className={styles.menuLink}>2021: COMP Bug and accountability</a></li>
                  <li className={styles.menuItem}><a href="#section3" className={styles.menuLink}>Compound DAO Governance</a></li>
                  <li className={styles.menuItem}><a href="#section4" className={styles.menuLink}>Governance Framework</a></li>
                  <li className={styles.menuItem}><a href="#section5" className={styles.menuLink}>Gobvernance Proposals</a></li>
                  <li className={styles.menuItem}><a href="#section6" className={styles.menuLink}>Compound Governor Proposals Process</a></li>
                  <li className={styles.menuItem}><a href="#section7" className={styles.menuLink}>Compound Improvement Proposals</a></li>
                  <li className={styles.menuItem}><a href="#section8" className={styles.menuLink}>Compound Autonomous Proposals (CAPs)</a></li>
                  <li className={styles.menuItem}><a href="#section9" className={styles.menuLink}>Governance Process and Mechanisms</a></li>
                  <li className={styles.menuItem}><a href="#section10" className={styles.menuLink}>Voting Power</a></li>
                  <li className={styles.menuItem}><a href="#section11" className={styles.menuLink}>Voting Process</a></li>
                  <li className={styles.menuItem}><a href="#section12" className={styles.menuLink}>Governance Participation & Growth in Compound</a></li>
                  <li className={styles.menuItem}><a href="#section13" className={styles.menuLink}>Contribution Pathways</a></li>
              </ul>
          </div>
          <div className={styles.contentContainer}>
         <div id="section1" className={styles.section}>
                  <h2 className={styles.sectionTitle}>Compound</h2>
                  <div className={styles.quoteContainer}>
        <p className={styles.quote}>
        <strong>Compound</strong> is a lending protocol based on liquidity pools governed by token stakers. It is an open-source protocol for algorithmic, efficient Money Markets on the Ethereum blockchain.
        </p>
         </div>
          <p>
          In 2017, Compound Labs was founded by Robert Leshner and Geoff Hayes. Compound Labs is one of many community contributors to the Compound Protocol, which continues to operate at <Link href='https://compound.finance/' className={styles.link} target='_blank'>Compound Finance</Link>.   </p>
         <p>This transfer of power included:</p>
         <p>In June 2020, Compound introduced its native governance token, COMP, which allowed users to participate in the protocol's decision-making processes. The COMP distribution method notably boosted the platform's growth and pioneered the "yield farming" phenomenon in DeFi.</p>
         <p>Compound is a critical player in the DeFi space and has developed a DAO governance framework, Compound Governor, that various protocols use. The platform has received significant backing from venture capital firms, including well-known VCs such as Andreessen Horowitz, Polychain Capital, and Coinbase Ventures. These VCs are now the largest owners of Compound's governance token ($COMP) and, therefore, exert significant influence over voting and the overall direction of the protocol.</p>
          </div>


         <div id="section2" className={styles.section}>
         <p className={styles.titleBlack}>2021: COMP Bug and accountability</p>
         <p>In September 2021, a bug in the Compound protocol mistakenly awarded its users a combined $90 million worth of $COMP. Leshner took to <Link href='https://twitter.com/rleshner/status/1443730726751506432' target='_blank' className={styles.link}>Twitter</Link>to beg users to return any erroneous additions to their accounts.</p>
         <img src="/images/compound-img.png" alt="Compound Tw" className={styles.benefitsImage} />
         <p>The DeFi community quickly blasted Leshner's comment, prompting even Blockstream Chief Strategy Officer Samson Mow to tweet: "Code is law. Unless we fuck up. Then we call the IRS on you", highlighting the irony in Leshner's sentiment. It also raised ethical concerns over Compound's willingness to expose users. Leshner quickly took accountability and apologized for his "bone-headed" statement: "I appreciate your ridicule and support."</p>
         <p><Link href='https://compound.finance/governance/proposals/64' className={styles.link} target='_blank'>Compound </Link> passed Proposal 064 to repair the bug. The proposal resolves accrual issues but does not facilitate the safe return of the lost funds. As per protocol, the funds can only be reclaimed on an individual basis, leaving the decision to each user's moral discretion.</p>
         <p></p>
         <p>Compound has since announced several updates, including making the platform open-source: "Community members can improve, modify and fork the front-end. We'll assist the community with maintaining this repo as new assets and features are added." Compound announced.</p>
        </div>
           
        <div id="section3" className={styles.section}>
        <h2 className={styles.sectionSubtitle}>Compound DAO Governance</h2>
         <p>Compound’s DAO design follows the principle of increasing decentralization. It hones in on a simple governance model, without decentralized governance bodies. Users can participate in DAO governance by voting on proposals or delegating their voting power to others.</p>
        </div>
                
        <div id="section4" className={styles.section}> 
         <p className={styles.titleBlack}>Governance Framework </p>
           <img src="/images/compound-dao.jpg" alt="Compound DAO" className={styles.benefitsImage} />
          <p>There are three critical roles in Compound Governance:</p>
          <ul>
            <li><strong>Delegators:</strong> community members who hold $COMP but have entrusted their voting power to another holder.</li>
            <p></p>
            <li><strong>Delegates:</strong> received voting power from other community members or through self-delegation</li>
            <p></p>
            <li><strong>Contributors:</strong> build on top of the Compound Protocol or build for the DAO via grants or partnerships, while working towards completing shared goals.</li>
          </ul>

          <p>Governance participants have a <Link href='https://www.karmahq.xyz/dao/delegates/compound' target='_blank' className={styles.link}>leaderboard</Link> showcasing Karma reputation scores according to their activity within the protocol. Scores is “calculated by aggregating metrics of contributor activity such as on-chain voting stats, off-chain voting stats, forum activity and assigning weights to each metric in collaboration with the community.”</p>
          <p>You can see Compound members’ top 100 delegate addresses ranked by <Link href='https://www.tally.xyz/gov/compound/delegates' className={styles.link} target='_blank'>voting weight</Link>. Leading the ranking are Polychain capital with 15.6% voting weight, a16z with 12%, and Geoffrey Hayes with approximately 5%. More than 5K voting addresses can be part of the voting process</p>
          <img src="/images/governance-overview-compound.png" alt="GovernanceOverview" className={styles.benefitsImage} />
 
      
         </div>

        <div id="section5" className={styles.section}> 
        <h2 className={styles.sectionSubtitle}>Governance Proposals</h2> 
        <p>Members with over 1% of $COMP can propose a governance action. 1% of COMP represents approximately 100,000 COMP, equivalent to over 10 million USD as of September 2023. About 6 delegates meet such criteria.</p>
        <p>You can request another contributor to post a proposal on your behalf if you do not hold enough $COMP. The Compound multisig can also white-list proposers for a set amount of time.</p>
        <p><strong>There are two types of proposals:</strong></p>  
        <ul>
          <li><strong>Compound Governor Proposals:</strong> authorize smart contract executions, such as Risk parameters, COMP distribution Parameters, primary modular contracts, and administrative functions (reduce reserves, ERC-20 transfer).</li>
          <li><strong>Compound Improvement Proposals (CIPs)</strong> outline standards, processes, and enhancements to improve the governance protocol. Their primary purpose is to strengthen off-chain and on-chain governance.</li>
        </ul>
             
        </div>
      
        <div id="section6" className={styles.section}> 
        <p className={styles.titleBlack}>Compound Governor Proposals Process</p>
       <p><strong>Stage one (Idea):</strong> Post your proposal to the Compound Forum with enough information about how your potential proposal would impact Compound.</p>
       <p><strong>Stage two (Community Feedback):</strong> Use community feedback to make any necessary changes to your proposal.</p>
       <p><strong>Stage three (Compound Governor):</strong> Once the community has approved your proposal and you believe it has a high chance of success, move it to an on-chain vote.</p>
        </div>

       <div id="section7" className={styles.section}> 
       <p className={styles.titleBlack}>Compound Improvement Proposals</p> 
       <p>There are three types of CIPs, each with different pathways:</p>
       <ol>
        <li><strong>Meta Process:</strong> Any process that better coordinates Compounds governance, development, or community efforts.</li>
        <li><strong>Protocol Enhancement</strong> involves any changes to smart contracts in the Compound Protocol and Governor Protocol.</li>
        <li><strong>Tooling & Support:</strong> This concerns any modifications to off-chain infrastructure, tooling, documentation, or other components that support the usage of Compound Protocol.</li>
       </ol>

       <p>Approval Process:</p>
       <ol>
        <li>CIP Authors request peer reviews by linking them in the Compound Discord or filing them as issues on GitHub</li>
        <li>The proposal moves through an approval process with the Compound Working Group, where CIP Editors will provide feedback. Any objections raised in its first meeting must addressed before requesting another review.</li>
        <li>In a CIP's second meeting, the proposal will be approved if there are no objections OR a majority of Editors are in favor.</li>
        <li>It remains in the Last Call stage for 14 days, where community members can make further comments before implementation.</li>
       </ol>

       <img src="/images/compound-approval.png" alt="Compound Approval" className={styles.benefitsImage} />

      </div>

        <div id="section8" className={styles.section}>
    <p className={styles.titleBlack}>Compound Autonomous Proposals (CAPs)</p>
    <p>Due to the high threshold required to create a proposal, CAPs were introduced. CAPs allow anyone with 100 COMP to submit a proposition. If it receives at least 100,000 votes, it can be added as a regular proposal. You can see CAPs <Link href='https://compound.finance/governance/proposals' className={styles.link} target='_blank'>here</Link>.</p>
      </div>

      <div id="section9" className={styles.section}>
      <h2 className={styles.sectionSubtitle}>Governance Process and Mechanisms</h2>
      <p>Compound has a decentralized <Link href='https://wiki.tally.xyz/docs/compound-governor' className={styles.link}>governance mechanism</Link> in place.</p>
       </div> 
      

       <div id="section10" className={styles.section}>
        <p className={styles.titleBlack}>Voting Power</p>
        <p>Vote counts follow the rule: 1 $COMP = 1 Vote.</p>
        <p> </p>
        <p>Voting power is based on the number of tokens delegated to an address. Users must submit a delegation transaction for their tokens to count in governance votes. </p>
       </div>

       <div id="section11" className={styles.section}>
        <p className={styles.titleBlack}>Voting Process</p>
        <p>Compound DAO enacts all protocol changes through Compound Governor. Proposals are executable code, not suggestions for the team or foundation to implement.</p>
        <p>After a proposal has been created, it undergoes a 3-day voting period. It will only be approved if it achieves a minimum quorum of 400,000 votes and a majority. Once the proposal is passed, it is automatically queued in the timelock and implemented in two days. </p>
     
        <img src="/images/voting-compound.png" alt="Compound Voting" className={styles.benefitsImage} />
        <p>A CIP's implementation process will depend on its type:</p>
        <ul>
          <li>Meta Process CIPs and Protocol Enhancements are approved through a majority Signal Vote with no quorum</li>
          <li>Other CIPs are left to the community to implement, including funding approval by a Grant Committee</li>
        </ul>
        <img src="/images/implementation-process-compound.png" alt="Compound Implementation" className={styles.benefitsImage} /> 
       </div>

       <div id="section12" className={styles.section}>
       <p className={styles.titleBlack}>Governance Participation & Growth in Compound</p>
       <p><Link href='https://deepdao.io/organization/52bf381b-79a8-4498-8504-41961beda494/organization_data/governance' className={styles.link} target='_blank'>Voting and proposal activity has decreased</Link> during the current bear market. Some members even highlight how Compound has <Link href='https://www.comp.xyz/t/alastor-w3s-compound-strategy-growth-proposal/4569' className={styles.link}>slowed its overall growth</Link>. Furthermore, this is somewhat expected given the high-concentration of voting power and small number of avenues to participate in the Protocol. </p>
       <p>However, the protocol is still being upgraded to increase revenue and attract users amidst competition from other DeFi lending protocols.</p>
    
       <img src="/images/participation-compound.png" alt="Compound Participation" className={styles.benefitsImage} />

    
      </div>

      <div id="section13" className={styles.section}>
        <h2 className={styles.sectionSubtitle}>Contribution Pathways</h2>
        <p>There are no official Working Groups in Compound DAO nor a template to enable this. However, any community member can contribute to the Compound Ecosystem by submitting CAPs and requesting funds to build on initiatives aligned with the Compound Ecosystem.</p>
       <p><strong>Compound Grants Program</strong></p>
       <p>Questbook runs a Grants Program within the Compound Ecosystem. The CGP 2.0 program has recently finished. It worked in four domains: protocol ideas and DApps, security tooling, multichain strategy, and Dev tooling. This model aimed to fund areas that align with Compound's priorities, directly adding value to the DAO. Together, the second round of the program held a total budget of $300k, with committee compensation for the four Domain Allocators and the Program Manager. <Link href='https://www.comp.xyz/t/cgp-2-0-updates-and-renewal/4518' className={styles.link} target='_blank'>According to Questbook</Link>, CGP 2.0 has accepted 46 proposals and disbursed $252,000 from more than 100 proposals submitted.</p>
       <p>An initial proposal was drafted to renew the program for a third round. Amid concerns over overlapping or redundancy of funded programs during CGP 2.0 and <Link href='https://www.comp.xyz/t/cgp-2-0-updates-and-renewal/4518/25' className={styles.link} target='_blank'>more feedback</Link> on the program's design and incentives, the team working on CGP renewal took down the proposal to work on <Link href='https://www.comp.xyz/t/cgp-2-0-updates-and-renewal/4518/44' className={styles.link} target='_blank'>an updated proposal for the program's renewal.</Link></p>
       <img src="/images/grants-compound.png" alt="Compound Grants" className={styles.benefitsImage} />

       </div>


          </div>
      </div>
  );
};

export default Article;