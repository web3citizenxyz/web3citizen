"use client";
import React from 'react';
import Link from 'next/link';
import styles from '../ArticleLayout.module.css';

const Article = () => {
  return (
      <div className={styles.articleContainer}>
          <div className={styles.menuContainer}>
              <ul className={styles.menu}>
                  <li className={styles.menuItem}><a href="#section1" className={styles.menuLink}>Gitcoin</a></li>
                  <li className={styles.menuItem}><a href="#section2" className={styles.menuLink}>Gitcoin DAO Governance</a></li>
                  <li className={styles.menuItem}><a href="#section3" className={styles.menuLink}>Governance Framework</a></li>
                  <li className={styles.menuItem}><a href="#section4" className={styles.menuLink}>Stewards</a></li>
                  <li className={styles.menuItem}><a href="#section5" className={styles.menuLink}>Stewards Council</a></li>
                  <li className={styles.menuItem}><a href="#section6" className={styles.menuLink}>Workstreams</a></li>
                  <li className={styles.menuItem}><a href="#section7" className={styles.menuLink}>Cross Stream DAO Ops</a></li>
                  <li className={styles.menuItem}><a href="#section8" className={styles.menuLink}>Governance Proposals</a></li>
                  <li className={styles.menuItem}><a href="#section9" className={styles.menuLink}>Governance Mechanisms</a></li>
                  <li className={styles.menuItem}><a href="#section10" className={styles.menuLink}>Voting Metrics and Insights</a></li>
                  <li className={styles.menuItem}><a href="#section11" className={styles.menuLink}>Governance Process</a></li>
                  <li className={styles.menuItem}><a href="#section12" className={styles.menuLink}>Participation concerns and Bravo upgrade</a></li>
                  <li className={styles.menuItem}><a href="#section13" className={styles.menuLink}>Anddressing DAO sustainability and longevity</a></li>
                  <li className={styles.menuItem}><a href="#section14" className={styles.menuLink}>Contributions Pathways</a></li>
                  <li className={styles.menuItem}><a href="#section15" className={styles.menuLink}>Gitcoin Grants</a></li>
                  <li className={styles.menuItem}><a href="#section16" className={styles.menuLink}>Become a DAO citizen</a></li>
                  <li className={styles.menuItem}><a href="#section17" className={styles.menuLink}>Hackathons</a></li>
                  <li className={styles.menuItem}><a href="#section18" className={styles.menuLink}>Stay Informed About Gitcoin</a></li>           </ul>
          </div>



          <div className={styles.contentContainer}>
        <div id="section1" className={styles.section}>
         <h2 className={styles.sectionTitle}>Gitcoin</h2>
         <div className={styles.quoteContainer}>
        <p className={styles.quote}>Gitcoin is a platform to aid communities in building protocols and funding projects.</p>
        <p>Gitcoin is most known for Gitcoin Grants. Gitcoin Grants is a quarterly program that boosts funding for Web 3 projects through individual donations. Gitcoin has raised funds for over 3,715 projects.</p>
      </div>
    
      <p>Some of the products within the Gitcoin ecosystem include:</p>
   <ul className={styles.orderedList}>
            <li className={styles.listItem}><Link href='https://www.gitcoin.co/passport' className={styles.link} target='_blank'>Gitcoin Passport</Link>: an aggregator of decentralized credentials to protect your project from bots and Sybil attackers. The passport re-launched in 2023 and by October has grown to <Link href='https://gov.gitcoin.co/t/update-gitcoin-s-ratified-essential-intents-2023-2024-and-a-recap-of-our-successes/16818' target='_blank' className={styles.link}>700,000+ wallets</Link>.</li>
            <li className={styles.listItem}>Gitcoin Grants Stack is a decentralized and smart contract-powered tool that enables community-driven funding programs using Quadratic Funding.</li>
            <li className={styles.listItem}>Allo Protocol is a modular protocol originating from the initial design for smart contracts behind Gitcoin Grants. Allo supports various fund allocation mechanisms and distribution, enabling grant managers to select the best fit for their program.</li>
        
            </ul> 

    <p>Gitcoin stepped towards decentralizing its decision-making with the GTC token launch in May 2021. GTC serves as a coordination tool for the Gitcoin DAO, facilitating voting and allocation of resources via Gitcoin Grants.</p>

         </div>


         <div id="section2" className={styles.section}>
         <h2 className={styles.sectionSubtitle}>Gitcoin DAO Governance</h2>
         </div>
           
        <div id="section3" className={styles.section}>
       <p className={styles.titleBlack}>Governance Framework</p>
       <img src="/images/gitcoin-dao.jpg" alt="Gitcoin DAO" className={styles.benefitsImage} />
        </div>
                
        <div id="section4" className={styles.section}> 
        <p className={styles.titleBlack}>Stewards </p>
        <p>Stewards are trusted community leaders with delegated or self-delegated tokens. They hold the responsibility of making decisions on behalf of the Gitcoin community.</p>
        <p>Gitcoin launched an initiative to increase transparency through an open-access dashboard that displays Stewards’ Engagement Scorecards. These scorecards include metrics such as voting, Workstream participation, and active engagement with DAO operations.</p>
        <p>This aims to ensure that those entrusted with votes are actively involved in the community and to provide transparent metrics on representatives.</p>
        </div>
        
        <div id="section5" className={styles.section}> 
         <p className={styles.titleBlack}>Stewards Council</p> 
                  <p className={styles.titleBlack}>Arbitrum Improvement Proposals</p>
                  <p>In 2021, the DAO established a Steward Council to ensure sustainable delegate involvement.</p>
        <p>Eight members are elected, two per Workstream, based on nominee submissions via the Gitcoin Forum. Members are selected using a token-weighted quadratic vote system via Gitcoin Passport to enhance Sybil resistance.</p>
    
        <p>Members have the following responsibilities:</p> 
        <ul>
          <li>Keeping a ‘docket’ of ongoing proposals / their current status</li>
          <li>Ensuring proposals follow guidelines and creating any necessary adjustments to templates</li>
          <li>Bi-weekly calls to align DAO strategy</li>
        </ul>
          </div>
      
       <div id="section6" className={styles.section}> 
       <p className={styles.titleBlack}>Workstreams</p>
       <p>The DAO has different core team units with contributors actively working on tasks that align with Gitcoin's purpose and essential intents. Read more on Gitcoin’s 2023-2024 Intents <Link href='https://gov.gitcoin.co/t/update-gitcoin-s-ratified-essential-intents-2023-2024-and-a-recap-of-our-successes/16818' className={styles.link} target='_blank'>here. </Link></p>

       <p>What to know on Gitcoin’s Workstreams:</p>
       <ul>
        <li>Any member is free to initiate a Workstream, but it is regarded as "informal" until a formal proposal for a budget is presented. </li>
        <li>Contributors and Stewards can be part of multiple workstreams. </li>
        <li><Link href='https://gov.gitcoin.co/t/gitcoin-dao-governance-process-v2-updated/7860/19' target='_blank' className={styles.link}>Workstreams are not funded by default and can have other forms of funding besides the Gitcoin DAO.</Link></li>
       </ul>
      <p>See the current active Workstreams <Link href='https://manual.gitcoin.co/governance-processes/workstreams' target='_blank' className={styles.link}>here</Link>.</p>
      <img src="/images/gitcoin-work.jpg" alt="Gitcoin Workstreams" className={styles.benefitsImage} /> 
       </div>


       <div id="section7" className={styles.section}> 
       <p className={styles.titleBlack}>Cross Stream DAO Ops</p> 
       <p>The CSDO comprises official Workstream representatives (two members per Workstream) and a member of the Gitcoin Foundation. Its mission is to review and ratify the DAO's initiatives while boosting DAO-wide coordination.</p>
       <p>It used to include a member of Gitcoin Holdings but since co-founder of Gitcoin Kevin Owocki stepped down, Gitcoin Holdings (now Buidlbox) no longer participates in CSDO or leadership in the DAO. </p>
    
      </div>


     <div id="section8" className={styles.section}> 
     <h3 className={styles.sectionSubtitle}>Governance Proposals</h3> 
    <p>GTC allows submit and vote on different proposals. </p>
    <p>These include:</p>
    <ul>
    <li><strong>Ratification proposals:</strong> the community or a Workstream seeks approval for a desired action, such as granting matching funds to Gitcoin Grantees.</li>
    <li><strong>Governance proposals:</strong> Proposals can ask for endorsements, suggest building a specific initative or propose changes to DAO policies or procedures.</li>
   </ul>

   <p>Furthermore, another type of proposal (funding proposals) allows a Workstream to request funding from the DAO's treasury</p>
    </div>


     <div id="section9" className={styles.section}> 
<h3 className={styles.sectionSubtitle}>Governance Mechanisms</h3> 
</div>

<div id="section10" className={styles.section}> 
<p className={styles.titleBlack}>Voting Metrics and Insights</p>
<p><strong>79.54K Token Holders</strong></p>
<p><strong>93% off chain proposal passing rate</strong></p>
<ul>
  <li>Voting power is directly proportional to the amount of GTC a user holds or has delegated to them.</li>
  <li>As of November 2023, voting weight is relatively dispersed among Gitcoin's 134 Stewards: no delegates holds above 4% voting weight. Stewards’ scorecard and voting weight information is available <Link href='https://delegate.gitcoin.co/?sortby=delegatedVotes' className={styles.link} target='_blank'>here</Link>.</li>
</ul>

</div>

<div id="section11" className={styles.section}> 
<h3 className={styles.sectionSubtitle}>Governance Process</h3> 
<p>Gitcoin has a <Link href='https://manual.gitcoin.co/' target='_blank' className={styles.link}> governance manual </Link> to inform the community on the governance process. This post by the current executive director also outlines the governance process.</p>
<ol>
  <li>Proposal discussion: Proposals must be submitted on Gitcoin’s Forum for review and comment for at least five days and receive input from at least five stewards not connected to or working with the proposal.</li>
  <li>Off-chain voting on Snapshot during a five-day voting period. Off-chain voting must also meet a quorum of 2.5M GTC.</li>
  <li>On-chain voting is conducted through Tally as a way to ratify off-chain results. This is done in order to eliminate gas fees for Stewards.</li>
</ol>
</div>

<div id="section12" className={styles.section}>
<p className={styles.titleBlack}>Participation concerns and Bravo upgrade</p>
<p>Gitcoin governance found some limitations with implementing Governor Alpha (Compound's initial governance framework). Specifically, they found the need to modify the proposal threshold, vote delay, introduce Flexibility voting, and an additional option to vote 'for' and 'against', ‘abstain’. <Link href='https://gov.gitcoin.co/t/gcp-009-upgrading-gitcoin-s-governance-contracts/14010/52' className={styles.link}>GCP-009 </Link> upgraded the system from Alpha to Compound Bravo in July - August 2023 to resolve this issue.</p>

</div>

<div id="section13" className={styles.section}>
<p className={styles.titleBlack}>Addressing DAO sustainability and longevity</p>
<p>Gitcoin's compensation works independently across workstreams. Workstream Leads have the ability to make budget adjustments to satisfy their goals.</p>
<p>Several threads in the forum have advocated for increasing intra-DAO salary transparency, open discussions on the DAO's salary spending and address salary concerns. As far as we know, compensation model or framework has yet to be developed to align Workstream compensation. However, Gitcoin has ratified its intent to ensure the DAO’s financial longevity. Read Gitcoins season 23-24 intents here.</p>
</div>


<div id="section13" className={styles.section}>

  <h2 className={styles.sectionSubtitle}>Contribution Pathways</h2>
  </div>

  <div id="section14" className={styles.section}>

<p className={styles.titleBlack}>Gitcoin Grants</p>
<p>Following the "Funding What Matters" guideline, Gitcoin has raised funds for over 3,715 projects.

Gitcoin invites people to participate in Grants by submitting initiatives in the available grant categories or supporting other projects. Rounds focus on diverse topics, including infrastructure, gaming, governance, and initiatives related to charitable causes.

Explore Gitcoin Rounds available <Link href='https://explorer.gitcoin.co/#/rounds?orderBy=matchAmount&orderDirection=desc&status=active%2Ctaking_applications' className={styles.link}>here</Link>.</p>

</div>

<div id="section15" className={styles.section}>
<p className={styles.titleBlack}>Hackathons</p>
<p>Start by joining the Gitcoin <Link href='https://discord.com/invite/gitcoin' className={styles.link} target='_blank'>Discord</Link> and participating in weekly DAO calls, where you can spark discussions about your interests.</p>
</div>

<div id="section16" className={styles.section}>
<p className={styles.titleBlack}>Become a DAO Citizen</p>
<p>Gitcoin bounties and hackathons existed in the DAO and Gitcoin Holdings' scope until their <Link href='https://www.linkedin.com/pulse/buidlbox-our-story-buidlbox-ejntc/?trk=public_post_main-feed-card_feed-article-content' className={styles.link} target='_blank'>disaffiliation</Link>. Hackathons and bounties products are now part of Buidlbox, a platform to launch and participate in hackathons. Learn about Buidlbox's virtual, in-person, or hybrid hackathons.</p>
</div>

<div id="section17" className={styles.section}>
<p className={styles.titleBlack}>Stay Informed About Gitcoin</p>
<p>Gitcoin provides various publications to keep the community informed, such as <Link href='https://gov.gitcoin.co/search?q=gitcoindao%20digest%20order%3Alatest' className={styles.link}>DAO Digest </Link>(bi-weekly update), <Link href='https://open.spotify.com/show/4kuQqoQGE69LlrgwLo0gLK?si=45aa4ab8f9d1411f' className={styles.link} target='_blank'>Gitcoin Pulse</Link> (weekly podcast),<Link href='https://discord.com/invite/gitcoin' className={styles.link} target='_blank'>Discord</Link>, <Link href='https://gov.gitcoin.co/' className={styles.link}>Forum </Link>, and  <Link href='https://twitter.com/gitcoin' className={styles.link} target='_blank'>Twitter</Link>.</p>
</div>
          </div>
      </div>
  );
};

export default Article;