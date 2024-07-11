"use client";
import React from 'react';
import styles from './DaoBasics.module.css';
import SideIcons from '@/components/SideIcons';
import BackToTop from '@/components/BackToTop';






export default function DaoBasics() {
  return (
    <div className={styles.articleContainer}>
  
      
      <section className={styles.section}>
        <h2>Lido Ecosystem Grants Program</h2>
        <p><strong>Timeframe: </strong>Rolling basis</p>
        <p><strong>Amount: </strong>Owith different tiers from up to up to 1,000 USD to 100,000 USD + depending on impact.</p>
        <p>ido DAO has its own grants program to fund individuals, projects and initiatives which benefit both Lido and the surrounding ecosystem.</p>
        <p>The Lido Ecosystem Grants Organization (LEGO) oversees Lido grants ensuring these further the development of Lido and align with the vision of the liquid staking protocol.LEGO receives grant proposals on a rolling basis.</p>
    <p>Lido has approved various grants, with over 1M+ disbursed in 40+ grants last year.</p>
      </section>

      <section className={styles.section}>
        <h1>Grant Scope</h1>

       <div>
      <p>The grant does not specify specific scope. However, past funded initiatives include:</p>
      <ul className={styles.list}>
        <li>stETH integrations and expansion of the Lido liquid staking ecosystem</li>
        <li>Development of analytical tools</li>
        <li>Bootstrapping communities within Lido</li>
        <li>Implementations of Bug bounty programs</li>
        <li>Decentralization support</li>
        <li>Research</li>
      </ul>
      <p>You can see past grantees <a className={styles.a} target='_blank'>here.</a></p>
    </div>


    <p className={styles.black}> Grant Funding Categories</p> 

      <p>Additionally, grants are classified into four categories according to the broadness of their scope.</p>
      <img src="/images/lido-uno.png" alt="Lido" className={styles.benefitsImage} /> 
      </section>


      <section className={styles.section}>

      <h1>Who can apply?</h1>  
   
     <p>Any blockchain developers, crypto enthusiasts or members of the Lido community can be a participant of this program.</p>


     
      <h1>Grant Process</h1> 
      <p className={styles.black}>Submission</p>
      <p className={styles.black}>1. Contact</p>
      <p>Make contact with the LEGO person responsible for your specific area of contribution on Telegram. Introduce your idea with a short pitch of the proposal.</p>

     <p>Suggested pitch by LEGO</p>
     <p className={styles.black}>2. Discuss grant terms</p>
     <p>Hash out the terms, timelines, and deliverables in communication with the relevant LEGO member. They will get approval or rejection according to the LEGO process.</p>
 
     <h1>Review</h1> 
<p>After discussion, the proposal is shared on research.lido.fi and amongst LEGO for review. Sandgrain and Pebble grants are reviewed by 1 and 2 LEGO committee members, respectively. Boulder grants require a LEGO Council vote, and Mountain grants require the vote and approval of Lido DAO</p>
<p>Upon approval, communication channels will be set up and nominees will receive funding.</p>


<h1>Present your work</h1> 
<p>Upon completion of deliverables, the creator is invited to introduce the grant work and showcase their developments to the LEGO committee.</p>

<h1>Resources</h1> 
   <ul className={styles.list}>
    <li> <a className={styles.a} href="https://lido.fi/lego" target="_blank" rel="noopener noreferrer">Grants website</a> </li>
 
    <li> <a className={styles.a} href="https://lego.lido.fi/successful-grants" target="_blank" rel="noopener noreferrer">Successful grants</a></li>
    <li> <a className={styles.a} href="https://t.me/lidofinance" target="_blank" rel="noopener noreferrer">Telegram group</a> </li>
  
  </ul>

     </section> 

     <SideIcons />
     <BackToTop />
    </div>



  );
  }