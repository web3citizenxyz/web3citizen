"use client";
import React from 'react';
import styles from './DaoTrends.module.css';
import SideIcons from '@/components/SideIcons';
import Link from 'next/link';





export default function DaoBasics() {
  return (
    <div className={styles.articleContainer}>
  
      
      <section className={styles.section}>
        <h2>DAO Trends 2024</h2>
<p>Published: November 2024</p>
<br></br>
<p>As part of our studies in governance, we explored 10 established and emerging DAOs to get a panoramic view on the state of decentralized governance and observe emerging trends in the DAO space.</p>
<p>To do so we first conducted quantitative research to explore public interest in DAOs and, mostly, qualitative research on the passed proposals until October 2024 of Arbitrum, ENS, Safe, The Graph, Lido, Optimism, Decentraland, Uniswap, Starknet and the newly established ZK Sync.</p> 
<p>You can explore our findings below.</p>
   
   
<br></br>
<br></br>

   <h1>5 Key Takeaways</h1>

   <ul>
    <li>DAOs have not lost relevance</li>
    <p></p>
    <li>DAOs continue restructuring:</li>
    <p></p>
    <ul>
      <li>Most of the studied DAOs either incorporated Security Councils or already had existing ones in the last year.</li>
      <li>Some are modifying their framework, or core structure.</li>
    </ul>
    <p></p>
    <li>Low participation remains an issue. No formula seems to emerge but delegate incentives appear in different forms.</li>
    <p></p>
    <li>DAOs are extending their token's utility.</li>
   </ul>
   <br></br>
    
   <img src="/images/imagen1.png" alt="DAO Trends" className={styles.benefitsImage} />

      </section>
<br></br>


      <section className={styles.section}>
        <h1 className={styles.subtitle}>Interest in DAOs</h1>
        <p>Interest in DAOs has been quite sustained since the beginning of 2023. During 2024, interest in DAOs have spiked up leading up to dates of major crypto conferences. Specifically around late June (EthCC) and late October (Devcon), and leading up to Devconnect 2023.</p>

        <img src="/images/imagen2.png" alt="Interest in DAOs" className={styles.benefitsImage} />
 

        <p>Interest in DAOs does not correlate at all with ETH prices. Interest and ETH Price hold a weak negative correlation (-0.21), meaning the effect is not dominant and interest in DAOs probably responds to other issues. Non-contributor interest in decentralized organizations probably follows many other factors, such as specific events or announcements, while contributor interest probably is sustained across seasonal trends.</p>

        <img src="/images/imagen3.png" alt="Interest in DAOs Graphic two" className={styles.benefitsImage} /> 
<br></br>

        <h1 className={styles.subtitle}>Building gradual decentralization </h1>
        <p>To move away from hierarchical structures and centralized decision-making, an organization should prioritize distributing power. However, rushing into decentralization can also hinder establishing a solid incentive design that enables the DAO to scale efficiently.</p>
        <p>Before decentralizing a project, it's crucial to ensure that there is a sizable amount of eligible community members who are interested, informed, and motivated enough to redeem their tokens.</p>
         <p>  Additionally, appropriate incentives should be established to encourage participation. Otherwise, the DAO may struggle to establish a solid foundation of governance, similar to the current state of Safe DAO, which we'll discuss further in the DAO landscape.</p>
     
     
     <br></br>
     
      </section>


      <section className={styles.section}>
        <h1 className={styles.subtitle}>DAOs Are Restructuring</h1>
       <p>DAOs continue iterating on their design and framework. Over the last year, this iterative design has shown up as expected with adding committees and councils. Many DAOs implemented Security Councils to oversee upgrades, enact emergency actions, and oversee decentralization initiatives. These include ENS, ZK Sync, Optimism's first iteration of a Security Council and Starknet's Builder's Committee.</p>

      <img src="/images/imagen4.png" alt=" DAOs Restructuring" className={styles.benefitsImage} />
      <br></br>
      
      <p>Some DAOs are taking further steps in restructuring the way they do governance.</p>
      <ul className={styles.list}>
        <li><strong>Predictability:</strong> Safe is changing their governance cadence, which begun implementing in late 2023.</li>
        <li><strong>Adding Stakeholders:</strong> Lido is implementing a Dual Governance model, to include stETH stakers -not just LDO holders- in governance.</li>
        <li><strong>Back to Basics:</strong> Decentraland is modifying and rethinking their core structure</li>
      </ul>  


     <br></br>

      <h1 className={styles.subtitle}>Participation Remains A Key Issue</h1> 
      <p>Addressing active and informed participation at a delegate and at a contributor level remains a challenge. At the delegate level, some DAOs are implementing lowering proposing thresholds and extending voting timelines to encourage active participation. An already established DAO began implementing delegation - Safe implementing complex delegation allowing for re-delegation</p>
      <h3><strong>Incentives, the chosen way to address continued participation</strong></h3>
      <p><strong>5 out of the 10 DAOs studied implement some form of incentives or rewards for participating.</strong></p>
     
      <p>These include Arbitrum's Delegate Incentive Program, Uniswap Rewards Incentives, Lido's Rewards Share Program, ENS vesting incentives, with Optimism even adopting a rewards framework to standardize rewards to its delegation.</p>
      <p>At the contributor level, rewards become difficult territory so as to not expose the DAO to gaming incentives or capture by non-mission aligned stakeholders. However, some experiments in this area include the Arbitrum DAO Onboarding Program</p>
      </section>
<br></br>

      <section className={styles.section}>
        <h1 className={styles.subtitle}>Governance Token Utility </h1>

      <img src="/images/imagen5.png" alt="Governance Token Utility" className={styles.benefitsImage} />
      <br></br>
      <p>While a less explored avenue, extending the governance token's utility has grown as a trend. In 2024, 4 out of the 10 DAOs studied began expanding their token utility. This comes at a time where staking and restaking became a central narrative in Ethereum</p>
      <ul>
        <li>Newly established Starknet approved its first proposal: Staking STRK.</li>
        <br></br>
        <li>Uniswap released Unichain, allowing UNI holders to stake for Unichain. Extending the utility Uniswap DAO's governance token.</li>
       <br></br>
        <li>Safe approved token utility expansion and opens the grounds to experimenting with SAFE utility beyond staking.</li>
       <br></br>
        <li>Arbitrum approved staking the ARB token and the implementation of stARB, a Liquid Staking Token via de Tally protocol.</li>
       <br></br>
        <li>The Graph retained its existing ability to stake GRT and secure the network</li>
      </ul>

         <p>It is worth noting that Lido DAO's liquid staking token stETH with Dual Governance will now hold a role in governance together with its existing governance token LDO.</p>

         <p>Thank you for reading DAO Trends 2024! To read more of our reports you can head to <Link href='https://www.web3citizen.xyz/research' className={styles.link}> Our Research</Link>.</p>

     
    
    
 </section>


  
  


     <SideIcons />
    </div>



  );
  }
