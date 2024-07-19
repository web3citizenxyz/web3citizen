"use client";
import React from 'react';
import Link from 'next/link';
import styles from './ArticleLayout.module.css';

const Article = () => {
  return (
      <div className={styles.articleContainer}>
          <div className={styles.menuContainer}>
              <ul className={styles.menu}>
                  <li className={styles.menuItem}><a href="#section1" className={styles.menuLink}>Optimism</a></li>
                  <li className={styles.menuItem}><a href="#section2" className={styles.menuLink}>The Optimism Colective</a></li>
                  <li className={styles.menuItem}><a href="#section3" className={styles.menuLink}>Optimism Collective Governance</a></li>
                  <li className={styles.menuItem}><a href="#section4" className={styles.menuLink}>Governance Framework</a></li>
                  <li className={styles.menuItem}><a href="#section5" className={styles.menuLink}>The Token House</a></li>
                  <li className={styles.menuItem}><a href="#section6" className={styles.menuLink}>The Citizen House</a></li>
                  <li className={styles.menuItem}><a href="#section7" className={styles.menuLink}>Governance Proposals</a></li>
                  <li className={styles.menuItem}><a href="#section8" className={styles.menuLink}>Token House Governance Proposals</a></li>
                  <li className={styles.menuItem}><a href="#section9" className={styles.menuLink}>Governance Process and Mechanisms</a></li>
                  <li className={styles.menuItem}><a href="#section10" className={styles.menuLink}>Voting Power</a></li>
                  <li className={styles.menuItem}><a href="#section11" className={styles.menuLink}>Voting Process</a></li>
                  <li className={styles.menuItem}><a href="#section12" className={styles.menuLink}>The Token House Governance & Voting Process</a></li>
                  <li className={styles.menuItem}><a href="#section13" className={styles.menuLink}>The Citizen House Governance & Voting Process</a></li>
                  <li className={styles.menuItem}><a href="#section14" className={styles.menuLink}>Season 5</a></li>
                  <li className={styles.menuItem}><a href="#section15" className={styles.menuLink}>Intents</a></li>         
                  <li className={styles.menuItem}><a href="#section16" className={styles.menuLink}>Season 6</a></li> 
                  <li className={styles.menuItem}><a href="#section17" className={styles.menuLink}>Contributions Pathways</a></li>
                  <li className={styles.menuItem}><a href="#section18" className={styles.menuLink}>Delegation</a></li>
                  <li className={styles.menuItem}><a href="#section19" className={styles.menuLink}>Ambassadors programs and accessibility</a></li>
                  <li className={styles.menuItem}><a href="#section20" className={styles.menuLink}>Developers</a></li>
                  <li className={styles.menuItem}><a href="#section21" className={styles.menuLink}>Grants</a></li>
                  <li className={styles.menuItem}><a href="#section22" className={styles.menuLink}>NumbaNERDs</a></li>
              </ul>
          </div>

          <div className={styles.contentContainer}>
              <div id="section1" className={styles.section}>
                  <h2 className={styles.sectionTitle}>Optimism</h2>
                  <div className={styles.quoteContainer}>
        <p className={styles.quote}>
        <strong>Optimism</strong> is a Layer 2 blockchain protocol that uses optimistic rollups to scale Ethereum and achieve fast, secure, and low-cost transactions. Optimism has an explicit "public goods" vision for its Layer 2 solutions. It aims for continuing development and progressive decentralization through governance experiments.   </p>
      </div>
      <p>In early 2020, the Optimism team transitioned into a for-profit company to make Ethereum more scalable through optimistic rollups. Optimism hoped to find a way to fund the ongoing development of public goods in the Ethereum ecosystem and beyond.  </p>
   <p>In September 2020, Optimism released their EVM compatible testnet, followed several months later by their Alpha Mainnet. In October 2021, they released the <strong>EVM Mainnet</strong>, and in December of the same year, Optimism launched their <strong>Open Mainnet.</strong></p>
 
   </div>
   <div id="section2" className={styles.section}> 
   <p><strong>The Optimism Colective</strong></p>
   <p>In late April of 2022, Optimism announced the Optimism Collective, an experiment in governance consisting of two co-equal "houses" initiated by a series of token airdrops.</p>
   <p>This change in governance entailed the dissolution of Optimism PBC and the creation of:</p>
   <ul className={styles.orderedList}>
            <li className={styles.listItem}><strong>TheOptimism Foundation </strong> is a not-for-profit in charge of nourishing the <Link href="https://community.optimism.io/docs/governance/" target='_blank' className={styles.a}>Collective </Link> and guiding it toward decentralization. It handles all legal aspects of the Collective and controls the amount of OP in circulation. The Board of Directors consists of Abbey Titcomb, Ben Jones, Brian Avello, Eva Beylin, and Jing.</li>
            <li className={styles.listItem}>OP Labs, led by Liam Horne (CEO) and Floersch (CTO), will continue the development of the Optimism protocol.</li>
            </ul> 

  <p>The Optimism Collective's governance is being built through iteration and continuous experimentation of strategies to avoid plutocratic governance and increase community governance to prove that <Link href="https://www.optimism.io/vision" target='_blank' className={styles.a}>public goods can be profitable and drive the sustained growth of a decentralized ecosystem.</Link> The optimistic vision adheres to the principle that "positive impact to the collective should be rewarded with profit to the individual."</p>
  <p>Strategies are tried and tested through time-bound governance experiments known as "Seasons." </p>
  <p>Season 4 focused on laying the groundwork for more community involvement and ran until September 2023. It included experiments on:</p>

  <ul className={styles.orderedList}>
            <li className={styles.listItem}>Collective intents are a set of goals designed to align the Collective and its shared goals, with a budget allocated to bring it to developing each intent.</li>
            <li className={styles.listItem}><Link href="https://gov.optimism.io/t/token-house-missions/5881" target='_blank' className={styles.a}>Token House Missions</Link> to achieve an intent, either submitted by a community member or defined by the Foundation.</li>
           <li className={styles.listItem}>Alliances are teams or working groups working to achieve a mission.</li>
           <li className={styles.listItem}>Collective Trust Tiers: a system to set funding limits taking into account reputation and based on positive impact.</li>
           <li className={styles.listItem}>Attestations as a non-token-based reward for Grants Council Members and Co-grantors, as the basis of reputation in the Collective.</li>
           </ul> 

           <p>Season 4 ended on September 20th, and we are now in the reflection period before Season 5.</p>
            </div>


              <div id="section3" className={styles.section}>
            <h2 className={styles.sectionSubtitle}>Optimism Collective Governance</h2>
            <p className={styles.paragraph}>We will first review Optimism Collective's governance framework, proposals, and governance mechanism. Then, this section will outline key points of Season 5 and give an overview of what to expect in Season 6. </p>
            </div>

         
    
           <div id="section4" className={styles.section}> 
                  <p className={styles.titleBlack}>Governance Framework </p>
                  <p>Optimism launched a bi-cameral model governance model along with its token. Two houses function side-by-side and balance each other: the Token House and the Citizen House.</p>
                  <img src="/images/optimism-colective.jpg" alt="Op Colective" className={styles.benefitsImage} />
                  </div>
           <div id="section5" className={styles.section}> 
<p className={styles.titleBlack}>The Token House</p>
<p>All token holders are members of The Token House. Its responsibilities include:</p>
    <ul className={styles.orderedList}>
            <li className={styles.listItem}>protocol upgrades</li>
            <li className={styles.listItem}>its revenue-sourced Governance Fund and treasury,</li>
            <li className={styles.listItem}>guarding the rights of $OP token holders.</li> 
            </ul> 
           <p className={styles.paragraph}>The Token House works via delegates. In Q3 2022, it introduced non-binding committees to decentralize decision-making by topics and alleviate some of the workload on its representatives and other community leaders.</p>
         
           <p className={styles.paragraph}>Season 5 introduced 4 new structures within the Token House.</p>
           <ul className={styles.orderedList}>
                
                <li className={styles.listItem}>The Security Council is a group of community members responsible for executing protocol upgrades by governance.</li>  
                <li className={styles.listItem}>The Developer Advisory Board to aid governance with technical decisions.</li> 
                <li className={styles.listItem}>Season 5 will bring the creation of a Code of Conduct Council to handle conduct violations within the Token House and the Citizen’s House.</li>
                <li className={styles.listItem}>The Anticapture Commission to prevent capture of the Token House by any one stakeholder group.</li>
               
                </ul> 
 
                <p className={styles.paragraph}>Grants Counsil </p> 
                <p>The Grants Council was initiated to facilitate the Grant allocation process. The Council currently runs completely public through the Charmverse dashboard. You can find the dashboard and further information on the Council <Link href='https://app.charmverse.io/op-grants/page-701220845245208' target='_blank' className={styles.a}>here.</Link></p>
                  </div>

            <div id="section6" className={styles.section}> 
                  <p className={styles.titleBlack}>The Citizen House </p> 
                  <p >The Citizen House comprises <strong>Citizens</strong> who either were initially appointed by the Optimism Foundation or later elected by The Token House.</p>
                  <p>Citizens are "meant to represent individual human stakeholders of the Collective."</p>
                  <p>Their responsibilities include Optimism's <strong>Retroactive Public Goods Funding,</strong> which allocates grants to projects nominated and judged retroactively by Citizens for their ecosystem impact. Learn more about the third round that is currently underway <Link href='https://community.optimism.io/docs/governance/retropgf-3/#' target='_blank' className={styles.a}>here.</Link></p>
                  <p>Before, citizen badges used to be assigned based on the community members' reputation. Citizen selection criteria is currently based on community members' attestation reputation. But it is expected to be changed in the future. As such, voting in RetroPGF 3 <Link href="https://community.optimism.io/docs/governance/citizenship/#" target='_blank' className={styles.a}>"does not guarantee permanent participation in the Citizens' House and future iterations of RetroPGF."</Link></p>
            <p>Read more about Optimism's identity layer, AttestationStation here.</p>
           
            <img src="/images/op1.jpg" alt="Op" className={styles.benefitsImage} />
           
             </div>
        
        
        
        
            <div id="section7" className={styles.section}> 
            <h1 className={styles.sectionSubtitle}>Governance Proposals</h1>
            <p className={styles.titleBlack}>Token House Governance Proposals</p>
            <p>The Token Voting House accepts different proposal types following its various responsibilities:</p>
            <ul className={styles.orderedList}>
            <li className={styles.listItem}>Governance Funds</li>
            <li className={styles.listItem}>Protocol Upgrades</li>
            <li className={styles.listItem}>Inflation Adjustments</li>
            <li className={styles.listItem}>Director Removal</li>
            <li className={styles.listItem}>Treasury Appropriations</li>
            <li className={styles.listItem}>Rights Protections</li>
            <li className={styles.listItem}>Code of Conduct Violations</li>
            <li className={styles.listItem}>Grant Clawbacks</li>
            </ul>
     
           <p>A Token House governance proposal is <strong>approved</strong> if it satisfies:</p>

           <ul className={styles.orderedList}>
           <li className={styles.listItem}>Quorum, measured as a % of votes cast for a proposal of the existing <Link href="https://dune.com/optimismfnd/optimism-op-token-house" className={styles.a}>votable OP supply.</Link></li>
          <li className={styles.listItem}>Approval threshold is calculated as a % of votes cast to support the total number of votes for a specific proposal.</li>
           </ul>
        
          <p>Depending on the Proposal Type, exact quorum and approval threshold requirements may vary. For more information, refer to the proposal types below.</p>
          <img src="/images/op4.jpg" alt="Op" className={styles.benefitsImage} /> 
</div>





<div id="section7" className={styles.section}> 
<h2 className={styles.sectionSubtitle}>Governance Process and Mechanisms</h2> 
</div>
<div id="section8" className={styles.section}> 
<h2 className={styles.sectionSubtitle}>Voting Power</h2> 
<p>Optimism has one of the most active governance systems in the ecosystem, with <Link href="https://optimism.curiahub.xyz/participation" target='_blank' className={styles.a}>57% active delegates and a participation rate in proposals oscillating around 60% </Link> (percentage of votes cast in relation to total voter supply).</p>
<p>According to Curia’s insights on voting power distribution, the top 25 delegates hold about 69% of total voting power.</p>
<img src="/images/op5.png" alt="Op" className={styles.benefitsImage} /> 

</div>
<div id="section9" className={styles.section}> 
<h2 className={styles.sectionSubtitle}>Voting Process</h2> 
<p>The Token House Governance & Voting Process</p>
<p>The primary tools for Token House governance are:</p>

<ul className={styles.orderedList}>
            <li className={styles.listItem}><Link href="https://optimistic.etherscan.io/address/0xcdf27f107725988f2261ce2256bdfcde8b382b10" target='_blank' className={styles.a} >Token House Governance Contract:</Link> The on-chain voting contract is used to vote on all Token House-qualifying governance proposals. </li>
            <li className={styles.listItem}><Link href="https://vote.optimism.io/" target='_blank' className={styles.a} >Optimism Governance Portal:</Link> This front-end interface enables Token House members to delegate, and vote their on-chain.</li>
            <li className={styles.listItem}>To discuss, give feedback and vote: <Link href="http://gov.optimism.io/" target='_blank' className={styles.a}>The Optimism Forum,</Link> Discord, and Agora.</li>
            </ul>
<p>The full voting process of Season 4, from idea to implementation, is detailed in the <Link href="https://github.com/ethereum-optimism/OPerating-manual/blob/main/manual.md" className={styles.a}>Operating Manual.</Link> </p>
<img src="/images/op6.jpg" alt="OP-6" className={styles.benefitsImage} />

</div>
<div id="section10" className={styles.section}> 
<p className={styles.sectionSubtitle}>The Citizen House Governance & Voting Process</p> 
<p>RetroPGF rounds:</p>
<ul>
<li className={styles.listItem}>Scoping: This stage defines the amount of rewards to be allocated and the scope of impact.</li>
<li className={styles.listItem}>Profile creation: Projects are notified and invited to create a profile in the RetroPGF Application Manager.</li>
<li className={styles.listItem}>Voting: Votes are collected and tallied from Citizens with the requisite Attestation Station entries.</li>
<li className={styles.listItem}>Disbursement: The rewarded amount is distributed among winning projects based on the weighted average of Citizens' House votes.</li>
<li className={styles.listItem}>Compliance: The Foundation will collect information from projects.</li>
  </ul>

  <p><strong>Distribution GovFund Grants</strong> is already in Gov Season 3 and round 4, and you can find details about it <Link href='https://docs.google.com/spreadsheets/d/1Ul8iMTsOFUKUmqz6MK0zpgt8Ki8tFtoWKGlwXj-Op34/edit#gid=623066771' className={styles.a} target='_blank'>here.</Link></p>
  <img src="/images/op3.jpg" alt="OP-3" className={styles.benefitsImage} />
 
 </div>
 <div id="section11" className={styles.section}> 
 <p className={styles.listItem}>Season 5</p>
 <p>Optimism Governance continues to evolve towards a robust and sustainable system. Here is what you can expect on Season 5.</p>
</div>
<div id="section12" className={styles.section}> 
 <p className={styles.listItem}>Intents</p>
 <p>Season 5 will focus on four Intents:</p>
 <ol>
 <li className={styles.listItem}>Making progress toward technical decentralization</li>
 <li className={styles.listItem}>Growing the super chain</li> 
 <li className={styles.listItem}>Improving the consumer experience</li> 
 <li className={styles.listItem}>Improving governance accessibility</li> 
 </ol>

 <p>Below, you will find a non-exhaustive list of initiatives to further these intents.</p>
<p><strong>Progress towards decentralization</strong></p>
<p>To achieve this goal, two structures will be built:</p>
<ul>
<li className={styles.listItem}>The Security Council marks a significant milestone in protocol decentralization as it replaces the Optimism Foundation's <Link href="https://community.optimism.io/docs/security-model/" target='_blank' className={styles.a}>multisig wallet.</Link></li>
 <li className={styles.listItem}>The creation of an advisory board prioritizes making informed decisions and voting based on helpful information.</li>  
</ul>
<p>These structures evidence the growth of Optimism and a move further away from centralized decision-making.</p>
<p>To further this Intent, the Collective voted on a <Link href="https://vote.optimism.io/proposals/112047914448178129124907599845371359974256142096707624346739203514792263033877" className={styles.a}>Law of Chains</Link>, an open neutrality framework, and a core governing document of the Superchain. For more information on sequencer governance and its relationship to chain, user, and platform governance, please refer to these resources: <Link href="https://optimism.mirror.xyz/JfVOJ1Ng2l5H6JbIAtfOcYBKa4i9DyRTUJUuOqDpjIs" className={styles.a}>here </Link> and <Link href='https://gov.optimism.io/t/guide-to-season-5/6894#intent-1-progress-towards-technical-decentralization-4' className={styles.a}> here.</Link></p>

</div>


        </div>
      </div>
  );
};

export default Article;