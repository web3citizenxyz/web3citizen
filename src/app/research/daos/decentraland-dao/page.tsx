"use client";
import React from 'react';
import Link from 'next/link';
import styles from '../ArticleLayout.module.css';

const Article = () => {
  return (
      <div className={styles.articleContainer}>
          <div className={styles.menuContainer}>
              <ul className={styles.menu}>
                  <li className={styles.menuItem}><a href="#section1" className={styles.menuLink}>Decentraland </a></li>
                  <li className={styles.menuItem}><a href="#section2" className={styles.menuLink}>Decentraland’s Governance</a></li>
                  <li className={styles.menuItem}><a href="#section3" className={styles.menuLink}>Governance Framework</a></li>
                  <li className={styles.menuItem}><a href="#section4" className={styles.menuLink}>DAO Committee</a></li>
                  <li className={styles.menuItem}><a href="#section5" className={styles.menuLink}>Security Advisory Board</a></li>
                  <li className={styles.menuItem}><a href="#section6" className={styles.menuLink}>SWearable Curation Committee</a></li>
                  <li className={styles.menuItem}><a href="#section7" className={styles.menuLink}>Revocation Committee</a></li>
                  <li className={styles.menuItem}><a href="#section8" className={styles.menuLink}>Governance Proposals</a></li>
                  <li className={styles.menuItem}><a href="#section9" className={styles.menuLink}>Governance Proposals</a></li>
                  <li className={styles.menuItem}><a href="#section10" className={styles.menuLink}>Governance Process</a></li>
                  <li className={styles.menuItem}><a href="#section11" className={styles.menuLink}>Voting Power</a></li>
                  <li className={styles.menuItem}><a href="#section12" className={styles.menuLink}>Voting Process</a></li>
                  <li className={styles.menuItem}><a href="#section13" className={styles.menuLink}>Governance Participation and VP</a></li>
                 <li className={styles.menuItem}><a href="#section14" className={styles.menuLink}>Contribution Pathways</a></li>
                 <li className={styles.menuItem}><a href="#section15" className={styles.menuLink}>Grants Program</a></li>
                 <li className={styles.menuItem}><a href="#section16" className={styles.menuLink}>Bidding & tendering</a></li>


              </ul>
          </div>
          <div className={styles.contentContainer}>
              <div id="section1" className={styles.section}>
              <h2 className={styles.sectionTitle}>Decentraland</h2>
              <div className={styles.quoteContainer}>
              <p className={styles.quote}>
              <strong>Decentraland</strong> is a 3D virtual decentralized world platform built by Metaverse Holdings LTD. Within the platform, users can buy and sell land, explore the world,<br></br> and interact with each other.
              </p>
              </div>
      <p>The Decentraland DAO and the Decentraland Foundation exist within the Decentraland Ecosystem.</p>
       <p>The Foundation executes the Decentraland protocol and advocates for its adoption and development. Meanwhile, the Decentraland DAO has control over the development of the Grants Program, the DAO’s smart contract, and the assets that make up its virtual world:</p>
       <ul>
        <li>the LAND Contract and the Estates Contract,  </li>
        <p></p>
        <li>Wearables,</li>
        <p></p>
        <li>Content Servers,</li>
        <p></p>
        <li>the Marketplace,</li>
       </ul>

      <p>Decentraland DAO also holds on to MANA, its native token. You can read about the smart contracts owned by the DAO <Link href='https://docs.decentraland.org/player/general/dao/overview/what-smart-contracts-does-the-dao-control/' className={styles.link} target='_blank'>here</Link> and the DAO Fund <Link href='https://docs.decentraland.org/player/general/dao/overview/the-dao-fund/' className={styles.link} target='_blank'>here</Link>.</p>
               </div>


         <div id="section2" className={styles.section}>
         <h2 className={styles.sectionSubtitle}>Decentraland's Governance</h2>
         </div>
           
         <div id="section3" className={styles.section}>
        <p className={styles.titleBlack}>Governance Framework</p>
        <p>The Decentraland DAO operates through various <Link href='https://governance.decentraland.org/transparency/' className={styles.link} target='_blank'>teams</Link>.</p>
        <img src="/images/decentraland-dao.jpg" alt="Decentraland DAO" className={styles.benefitsImage} />
         </div>
              
         <div id="section4" className={styles.section}> 
         <p className={styles.titleBlack}>DAO Committee </p>
         <p>This team comprises three members responsible for enacting any passed proposals with a binding action on-chain.</p>
         <p>Binding actions change Decentraland's smart contracts on the Ethereum network. These include adding or removing Points of Interest, awarding Grants, implementing governance proposals, and operations involving the DAO's smart contracts.</p>
         <p>Every on-chain transaction initiated by the DAO Committee has an automatic 24-hour delay before completion, allowing the SAB or the Committee to revoke the transaction.</p>        
                 
        </div>

         <div id="section5" className={styles.section}> 
         <p className={styles.titleBlack}>Security Advisory Board</p> 
        <p>The Board guarantees contract security by upgrading smart contracts and responding to bug reports. The Board comprises five expert entities or individuals initially chosen by the Decentraland team and later appointed by the community. All contract updates must be unanimous.</p>
         </div>


        <div id="section6" className={styles.section}> 
        <p className={styles.titleBlack}>Wearable Curation Committee</p>
       <p>Members oversee wearable submissions to ensure they comply with design guidelines, are glitch-free, and flag any IP infringement or violent content.</p>
      </div>


       <div id="section7" className={styles.section}> 
       <p className={styles.titleBlack}>Revocation Committee</p> 
       <p>Members review cases raised by the community regarding the Grants Program. They decide whether to revoke a grant and make recommendations for program improvements.</p>
       </div>
          
      <div id="section8" className={styles.section}> 
       <h2 className={styles.sectionSubtitle}>Governance Proposals</h2> 
       <p>The community will propose and vote on policy updates, future LAND auctions, allow listing of NFT contracts inside the World, Builder, and Marketplace, and whatever the community deems relevant.</p>
       </div>

       <div id="section9" className={styles.section}> 
       <p className={styles.titleBlack}>Governance Proposals</p> 
       <p>Governance proposals can:</p>
       <ul>
        <li>Change how Decentraland is governed, such as establishing voting power thresholds or establishing Decentraland's Code of Ethics</li>
        <p></p>
        <li>Can change off-chain initiatives, like creating new grant categories.</li>
         </ul>
        <p>Governance proposals must undergo a three-step process of community discussion and acceptance.</p>
     
      </div>

      <div id="section10" className={styles.section}>
      <p className={styles.titleBlack}> Governance Process</p>
      </div>

      <div id="section11" className={styles.section}>
      <p><strong>Voting Power</strong></p>
      <p>Voting power is calculated through MANA, L1 Wearables, Names, and LAND or ESTATE</p>
      <p>Voting power distribution is computed through both owned and delegated MANA, L1 Wearables, Names, and LAND or ESTATE. It also includes wrapped and unwrapped MANA in the final voting power distribution. Read more on Decentraland's voting power <Link href='https://docs.decentraland.org/player/general/dao/dao-userguide/#how-is-voting-power-calculated' className={styles.link} target='_blank'>here</Link>.</p>
      <p>There are over 4,300 members with voting power (VP) and an additional 380 delegates who can approve proposals reaching up to 6 million VP.</p>
      <img src="/images/voting-descentraland.jpg" alt="Decentraland Voting" className={styles.benefitsImage} />

    
    
      </div>
       

      <div id="section12" className={styles.section}>
      <p className={styles.titleBlack}>Voting Process</p>
      <p>The voting process applies to <strong>governance proposals</strong>. </p>
      <p>It consists of three stages: Pre-Proposal Poll, Draft Proposal, and Governance Proposal, each with submission and passage thresholds that increase progressively. </p>
      <p>Voting occurs on the Decentraland DAO's governance interface, powered by Aragon.</p>
      
      <p><strong>Stage 1: Pre-Proposal Poll</strong></p>
      <ul>
        <li>Submission Threshold: 100 Voting Power (i.e. equivalent to one name)</li>
        <p></p>
        <li>Passage Threshold: 500K Voting Power (VP)</li>
        <p></p>
        <li>Voting Period: 5 Days</li>

      </ul>
      <p>A poll that reaches at least 500K VP and does not garner a majority of participating voting power may still advance to the Draft Proposal stage - ensuring all issues with enough support have an initial pathway toward passage into policy.</p>
     
      <p><strong>Stage 2: Draft Proposal</strong></p>
      <p>Draft Proposals must comply with the passing threshold and achieve a simple majority (51%) of participating voting power to pass to the Binding Governance Proposal stage. A Draft Proposal that fails or does not reach this threshold can be amended and resubmitted.</p>
      <ul>
        <li>Submission Threshold: 1,000 VP (or delegated VP)</li>
        <p></p>
        <li>Passage Threshold: 1M VP</li>
        <p></p>
        <li>Voting Period: 1 Week</li>
      </ul>
  

      <p><strong>Stage 3: Binding Governance Proposal</strong></p>
      <p>Only established or recognized community members can submit Governance Proposals.</p>
      <p>To be executed, they must meet the acceptance criteria for their category. If the requirements have yet to be established, proposals must receive a simple majority (51%) of participating voting power and meet the passage threshold to be accepted.</p>
     
      <ul>
      <li>Submission Threshold: 2,500 VP (or delegated VP)</li>
      <li>Passage Threshold: 6M VP (or needed acceptance criteria for their category)</li>
      <li>Voting Period: 2 Weeks</li>
      </ul>
      </div>

      <div id="section13" className={styles.section}>
      <p className={styles.titleBlack}> Governance Participation and VP</p>
      <p>According to the Transparency Dashboards presented by Decentraland, Decentraland has a total of 4.5 thousand DAO members with 100.1 million Voting Power. Voting Power distribution suggests a high concentration of decision-making authority, given that 19 members hold more than 50 million VP.</p>
      <p>Overall Voting Power participation in proposals has grown in the last year. 
      However, this is still a rather small percentage of the 100.1 million Voting Power distribution that can participate in governance.</p>
      <img src="/images/graph-decentraland.jpg" alt="Decentraland Grafico" className={styles.benefitsImage} />

      <p>Votes cast per proposal remains relatively low: between 100 and 500 votes cast per proposal. Low participation can result in decisions being made by a small, unrepresentative group, or it can lead to stagnation in the governance process.</p>
      <img src="/images/graph-two-decentraland.jpg" alt="Decentraland Grafico Dos" className={styles.benefitsImage} />

      </div> 


      <div id="section14" className={styles.section}>
      <h2 className={styles.sectionSubtitle}>Contribution Pathways</h2>
      <p>Decentraland invites users to get involved with co-creating the Metaverse.</p>
      <ul>
        <li>3D content in Decentraland is made up of scenes. Get started learning how to build scenes <Link href='https://docs.decentraland.org/creator/' className={styles.link} target='_blank'>here</Link>.</li>
        <li>Learn about scenes, collections, land, and names in <Link href='https://builder.decentraland.org/' className={styles.link} target='_blank'>builder.decentraland.org</Link></li>
        <li>Make your first contribution to Decentraland's repository by tackling <Link href='https://github.com/decentraland/builder/contribute' target='_blank' className={styles.link}>Issues</Link>.</li>
      </ul>

     
      </div>

      <div id="section15" className={styles.section}>
      <p className={styles.titleBlack}> Grants Program</p>
      <p>To support the platform's growth, Decentraland has created a Mana Fund. The DAO funds community members' initiatives to build 3D content, run educational events, or foster community building.</p>
      <p>Grant categories include:</p>
      <ul>
        <li>Core Units for teams and initiatives that are vital in providing core infrastructure and operational support to the DAO.</li>
        <li>Social Media Content to produce engaging content on Social channels</li>
        <li>Platform (for tools and applications that extend Decentraland's platform,</li>
        <li>Documentation for initiatives that "focus on the creation of free educational content about how to contribute, build and play on Decentraland."</li>
        <li>In-world Content for initiatives to generate events and experiences in Decentraland.</li>
        <li>Sponsorships for initiatives or events outside of the Decentraland on or offline.</li>
        <li>Accelerator for companies or revenue-generating initiatives looking for Decentraland's support</li>

      </ul>
      <p>Read about each category's requirements <Link href='https://docs.decentraland.org/player/general/dao/overview/grants-program/#grant-categories-and-requirements' className={styles.link} target='_blank'>here</Link>.</p>
      
      </div>
      <div id="section16" className={styles.section}>
        <p className={styles.titleBlack}>Bidding & tendering</p>
        <p>Bidding and tendering, as outlined in its proposal, are structured processes within the Decentraland community for allocating resources and selecting service providers for strategic projects.</p>
        <p>Bidding involves inviting external parties to submit competitive proposals, including budgets and project details. Tendering formalizes project requirements and stakeholders, creating a framework for potential bidders. This approach promotes fairness, transparency, and community involvement in the DAO's resource allocation.</p>
        <p>The community's role in this process is to contribute by initiating projects through Pitch Proposals, building consensus on project objectives, and later participating in the selection process by voting on the most suitable bid. </p>
         <p>Read submitted pitches <Link href='https://governance.decentraland.org/proposals/?type=pitch' className={styles.link} target='_blank'>here</Link>.</p>
     
     <p>You can also read about projects receiving funding <Link href='https://governance.decentraland.org/projects/' className={styles.link} target='_blank'>here</Link>.</p>
     <p>Get involved! Read the <Link href='https://docs.decentraland.org/player/general/dao/dao-userguide/' className={styles.link} target='_blank'>DAO User Guide</Link>, and stay informed about Decentraland through the <Link href='https://forum.decentraland.org/' className={styles.link}>Forum</Link>, <Link href='https://decentraland.org/discord/' className={styles.link}>Discord</Link>, and <Link href='https://twitter.com/decentraland' className={styles.link}>Twitter</Link>.</p>
     
     
      </div>

          </div>
      </div>
  );
};

export default Article;