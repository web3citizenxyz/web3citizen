"use client";
import React from 'react';
import styles from '../DaoBasics.module.css';
import SideIcons from '@/components/SideIcons';
import BackToTop from '@/components/BackToTop';






export default function DaoBasics() {
  return (
    <div className={styles.articleContainer}>
  
      
      <section className={styles.section}>
        <h2>Foundation Missions (RFPs)</h2>
       
        <p>Foundation Missions are proposals for specific initiatives that achieve a Collective Intent.</p>
        <p>Foundation Missions act as requests for proposals (RFPs) that teams can apply for. Missions also typically come with specified grant amounts for their completion.</p>
    <p>The idea is simple: you craft what the Foundation has outlined and, in return, you are compensated based on the perceived effort it entails. It's an excellent opportunity, especially if you're keen to contribute but don't have a personal project in the pipeline.</p>
   <p>Grant scope varies! You can view the full list of Foundation Missions (RFPs) <a className={styles.a}> here.</a></p>
      </section>

      <section className={styles.section}>

      <h1>Grant Requirements</h1>  
   
   <ul className={styles.list}>
     <li>Make sure you qualify for the Trust Tier you are applying for. You can see this within each RFP. </li>
     <li>Make sure you meet the RFP requirements and critical milestones.</li>
 
   </ul>





        <h1>Grant Process</h1>
       <div>

      <ol className={styles.list}>
        <li> Find an open Foundation Mission that you’d like to work on.</li>
        <li>Submit your application by replying as a comment on the RFP’s Github Issue.</li>
        <li>Foundation Mission Requests will be evaluated and selected by the Optimism Foundation.</li>
    
      </ol>


    </div>


      </section>


      <section className={styles.section}>

  
     

<h1>Resources</h1> 
   <ul className={styles.list}>
    <li> <a className={styles.a} href="https://www.loom.com/share/c7f43e6ab8a44005969af46b7fd7a124" target="_blank" rel="noopener noreferrer">Loom tutorial</a> </li>
 
    <li> <a className={styles.a} href="https://github.com/ethereum-optimism/ecosystem-contributions/issues?q=is%3Aissue+is%3Aopen+label%3A%22Foundation+Mission+Request%22" target="_blank" rel="noopener noreferrer">Open Foundation Missions (RFPs)</a> </li>
  
  </ul>

     </section> 

     <SideIcons />
     <BackToTop />
    </div>



  );
  }