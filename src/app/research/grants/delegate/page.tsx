"use client";
import React from 'react';
import styles from '../DaoBasics.module.css';
import SideIcons from '@/components/SideIcons';
import BackToTop from '@/components/BackToTop';
import { StyleRegistry } from 'styled-jsx';






export default function Delegates() {
  return (
    <div className={styles.articleContainer}>
  
      
      <section className={styles.section}>
        <h2 className={styles.op}>Optimism Delegates Missions</h2>
        <br></br>

        <img src="/images/foundation-missions.svg" alt="OP Foundation Missions" className={styles.benefitsImage} /> 
<br></br>
       <br></br>
         <h1 className={styles.subtitle}>What is a Delegate Mission?</h1>

        <p>Delegate Mission or Mission Requests are specified initiatives that can be completed start-to-finish within 12 months. A Mission Request must align with one of Season Collective Intents – a set of goals designed to align the Optimsm Collective and its mutual goals.
</p>
        <p>The Optimism Foundation and the Top 100 Token House Delegates issue Mission Requests, and once they are defined, and later ranked by the Token House, teams are able to apply to fulfill these pre-specified missions.</p>
        <p>Season 6 will have 6 cycles of Missions, where applicants can apply for approved missions.</p>
<br></br>
  

      </section>


      <section className={styles.section}>

      <h1>Funding</h1>  
   
  <p>All grant recipients are subject to the <a href='https://gov.optimism.io/t/collective-grant-policies/5833' className={styles.a} target='_blank'>Collective Grant Policies</a> and must KYC with the Foundation to receive rewards.</p>

 <br></br>
 </section>
 <br></br>


  <section className={styles.section}>


        <h1>Grant Process</h1>
       <div>
      <h1 className={styles.subtitle}>Application Period</h1>
      <ul className={styles.list}>
        <li>Find an approved mission on the <a href='https://app.charmverse.io/op-grants/mission-request-list-23238814302303523' className={styles.a} target='_blank'>Mission Request List</a></li>
        <li>Submit your application during a <a href='https://app.charmverse.io/op-grants/calendar-s6-5937971055166664' className={styles.a} target='_blank'>Submission</a> Period through Charmverse using the<a href='https://app.charmverse.io/op-grants/application-guide-4494195094676161' className={styles.a} target='_blank'>Application Templates.</a></li>
        <li>Fill in the template and send the application</li>
      </ul>

      <h1 className={styles.subtitle}>Review Period</h1>
      <ul className={styles.list}>
        <li>Preliminary review to assess the adequacy of proposals.</li>
        <li>A relevant reviewer will complete an assessment form for each proposal. If a proposal meets the cutoff criteria specified by the relevant Sub-Committee, the proposal will be placed on the Review List for a final review.</li>
      </ul>

      <h1 className={styles.subtitle}>Decision Period</h1>
      <ul className={styles.list}>
        <li>Reviewers select grantees from the finalists list.</li>
        <li>The Council posts the results to the Governance Forum. </li>
      </ul>
    </div>


      </section>

  <br></br>
   <section className={styles.section}>
    <h1>Resources</h1> 
   <ul className={styles.list}>
    <li> <a className={styles.a} href="https://gov.optimism.io/t/season-6-missions-v2-5/8106/2" target="_blank" rel="noopener noreferrer">Missions v2.5</a> </li>
 
    <li> <a className={styles.a} href="https://app.charmverse.io/op-grants/mission-request-list-23238814302303523" target="_blank" rel="noopener noreferrer">Missions Request List</a> </li>
    <li> <a className={styles.a} href="https://app.charmverse.io/op-grants/calendar-s6-5937971055166664" target="_blank" rel="noopener noreferrer">Missions Calendars S6</a> </li>
    <li> <a className={styles.a} href="https://app.charmverse.io/op-grants/application-guide-4494195094676161" target="_blank" rel="noopener noreferrer">Application Templates</a> </li>
    <li> <a className={styles.a} href="https://gov.optimism.io/t/collective-grant-policies/5833" target="_blank" rel="noopener noreferrer">Grant Policies</a> </li>
 


  </ul>

     </section> 

     <SideIcons />
     <BackToTop />
    </div>



  );
  }