"use client";
import React from 'react';
import styles from './DaoBasics.module.css';
import SideIcons from '@/components/SideIcons';
import BackToTop from '@/components/BackToTop';






export default function DaoBasics() {
  return (
    <div className={styles.articleContainer}>
  
      
      <section className={styles.section}>
        <h2>Celo RetroPGF 0</h2>
        <p><strong>Timeframe: </strong> Application submissions from April 8th to April 30th</p>
        <p><strong>Amount: </strong>Over 250,000 CELO distributed, amount awarded depends on steward votes.</p>
        <p>Celo Public Goods introduces #CeloRPGF0, a pioneering Retroactive Public Goods Funding program, rewarding Celo ecosystem contributors for their historical impact. Emulating Optimism's innovative public goods funding, CeloRPGF0 focuses on supporting those who've significantly advanced the Celo environment since its 2020 mainnet launch</p>
      </section>

      <section className={styles.section}>
        <h1>Grant Scope</h1>

       <div>
      <p>CeloRPGF0 targets three main verticals:</p>
      <ul className={styles.list}>
        <li><strong>Celo ReFi:</strong>Projects enabling real-world impact and ecological benefits on Celo.</li>
        <li><strong>Celo dApps and Tooling:</strong>Tools and dApps enhancing user and stakeholder experiences.</li>
        <li><strong>Celo Community and Adoption: Celo Community and Adoption: </strong>Initiatives such as education and governance support, fostering community growth and adoption.</li>
      </ul>
    </div>
    <p className={styles.black}> Grant Requiriments </p> 
    <ul className={styles.list}>
        <li>Projects must demostrate a significant, verifiable impact on the Celo ecosystem over the past year.</li>
        <li>Eligibility extends to initiatives within the specified verticals, contributing to Celo's mission and public goods.</li>
      </ul>      
      </section>


      <section className={styles.section}>

      <p className={styles.black}>Funding Specifics</p>  
   
      <ul className={styles.list}>
        <li>CeloRetroPGF only awards projects based on past contributions.</li>
        <li>Projects must mint a Hypercart Mint, a digital claim about the positive impact you or your project contributed to the Celo ecosystem since the launch of its Blockchain. To mint it follow the CeloPG Hypercert Minting Guide.</li>
        <li>Funding is a one-time direct grant post-results announcement </li>
        <li>Receivable amount allocated has no cap.</li>
      </ul>     



     
      <h1>Grant timeline</h1> 
   

      <img src="/images/celo-image.png" alt="Celo" className={styles.benefitsImage} />
     
   <p>Application (April 8th - April 30th)</p>
   <ul className={styles.list}>
    <li><strong>Interest Registration:</strong> the broader people who use, are present in the DAO's social channels or are in contact with the DAO's purpose (be it a protocol, a grant program, among others)</li>
    <li><strong>Hypercert Minting</strong> </li>
    <li>Submit your formal applications via the EasyRPGF app.</li>

  
   </ul>
   <img src="/images/dao-roles.avif" alt="Dao-roles" className={styles.benefitsImage} />
    <p>Certain DAOs opt to establish decentralized structures either from the beginning or as they grow. These governance bodies perform various functions and may be involved in product development related to the DAO's mission or undertake specific tasks. These tasks can range from HR-related duties to becoming a check on other governance bodies.</p>
    
    <p>Most DAOs use one of the following <strong>governance bodies:</strong></p>
    <ul className={styles.list}>
    <li><strong>Councils and Committees </strong>with representatives to act, vote, or perform a specific task on behalf of DAO members. Representatives can be either designated through a Foundation or elected by the community. Some councils, like The Graph Council, are in charge of various functions, like overseeing the Foundation's operations, protocol upgrades, and more. While other bodies like Uniswap's accountability committee manage one task: the operational development of deployments of Uniswap V3.</li>
    <li>Arranging into <strong>working groups or guilds</strong> according to skillset. This is the case of Gitcoin, whose contributors are set on workstreams according to tasks.</li>
    <li>Creating <strong>subDAOs</strong> with granular permissions within the main DAO's ecosystem. These can be especially useful when the DAO has scaled:</li>
   </ul> 
   <div className={styles.quoteContainer}>
        <a className={styles.quote} href='https://coopahtroopa.mirror.xyz/7bfK9st2mvhxlla4XKotRjetq5-YhaiwqRwS8DhkD-o' target='_blank'>
        “Rather than trying to house all that activity under one roof, SubDAOs offer a medium for working groups to create their own foundation and ownership structure - all while tying value back to the originating entity.”
        </a>
      </div>   
    <p>To prevent overwhelming responsibilities and ensure that each structure fulfills its role, DAOs should be structured based on their stage of development. Over the past two years, the number of scaling DAOs has increased significantly. With this growth, subDAOs and other decentralized structures within a main DAO have become more common. Nevertheless, some DAOs, like Gnosis or Compound, still operate using a simple design.</p>
    <p>The guiding rationale behind creating structures should always be to design an efficient and effective governance ecosystem that avoids an imbalance of the main governance principles. </p>
   <h1>Contribution pathways and incentives</h1>
   <p className={styles.black}>In 99% of DAOs, less than 0.5% of token holders vote. </p>
   <p>DAOs have a key issue of lack of participation. Although DAOs have the unique ability to involve communities and transfer ownership, it can be challenging to maintain the community's active commitment over time.</p>
   <p>DAOs offer community members opportunities to contribute meaningfully to the organization's objectives. Participation can take many forms, including:</p>
   <ul className={styles.list}>
    <li><strong>building </strong>towards the DAO's mission through programs,</li>
    <li> <strong>voting</strong> on improvement proposals,</li>
    <li>becoming a <strong>delegate</strong>to represent other token holders' interests,</li>
    <li><strong>applying for grants</strong>to fund development initiatives.</li>
    </ul>
     </section> 

     <SideIcons />
     <BackToTop />
    </div>



  );
  }