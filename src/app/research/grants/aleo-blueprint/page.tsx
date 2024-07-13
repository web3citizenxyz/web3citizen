"use client";
import React from 'react';
import styles from './DaoBasics.module.css';
import SideIcons from '@/components/SideIcons';
import BackToTop from '@/components/BackToTop';






export default function AleoBluePrint() {
  return (
    <div className={styles.articleContainer}>
  
      
      <section className={styles.section}>
        <h2>Aleo Blueprint Grants</h2>
      
        <p><strong>Timeframe: </strong> Rolling Basis</p>
        <p><strong>Amount:</strong> 10K-100K</p>
<p> 
Blueprint Grants are awarded to build pre-specified projects as identified by Aleo - also known as Requests for Proposals (RFPs). These grants aim to fund key components or products on the Aleo network.
</p> 
<p>Blueprint Grants exist within Aleo’s more extensive Developer Grants Program. Across three categories, Aleo’s Developer Grants Program has awarded more than 15 developer projects with $1M+.</p>
  </section>

 
  <section className={styles.section}>
    
   <h1>Grant Scope</h1>   
  <p>Blueprint Grants award prospective projects oriented explicitly towards developers and builders.</p>
  <p>The scope of Blueprint Grant varies according to specific needs in the ecosystem. Needs include but are not limited to designing bounty reward systems or developing projects in Zero-Knowledge Decentralized Finance (ZeFi).</p>
  <p>Explore all open <a className={styles.a} href='https://www.notion.so/Aleo-Blueprint-Grants-dba7966ddc95434ba8b90a2306485494?pvs=4'>Blueprint Grants.</a></p>
   
   
</section>

<h1>Funding Specifics</h1>
<p>The funding amount is disbursed based on the deliverance of milestones and goals of the submitted solution.</p>
<p>The funding amount and payment currency vary for each Blueprint Grant depending on the complexity and characteristics of the component.</p>



<h1>Requirements</h1>
<ul className={styles.list}>
<li>Each Blueprint Grant has its own identified need or problem, design specifications, milestones, deliverables, and requirements.</li>
<li>Everyone, including individuals, teams, nonprofits, and companies, can apply for a grant.</li>

</ul>



<h1>Grant Process</h1>
<ul className={styles.list}>
  <p><strong>Application:</strong></p>
<li>1. Read through the <a className={styles.a} href='https://www.notion.so/Aleo-Blueprint-Grants-dba7966ddc95434ba8b90a2306485494?pvs=4'>available grants.</a> Submit your <a href='https://airtable.com/appT1RrkReCRoTlP4/shrI5cYn5w3hkfUvY' className={styles.a}>application form</a> selecting the Blueprint for which you are applying.</li>
<p><strong>Review</strong></p>

 <li>1. Proposals are evaluated by a Grant Committee on a rolling basis according to their adherence to design specifications, their ability to satisfy the impact requirements, feasibility, innovation, and proposed solution.</li>
 <li>2. After the selection process is complete, the chosen projects are contacted.</li>
 </ul> 





<h1>Resources</h1>
      <ul className={styles.list}>
      <li><a className={styles.a} href='https://aleo.org/post/aleo-grants-solve-meaningful-world-problems-with-zero-knowledge/'>Aleo grants - blog</a></li>
      <li><a className={styles.a} href='https://www.notion.so/Aleo-Blueprint-Grants-dba7966ddc95434ba8b90a2306485494?pvs=4'>Blueprint Grants notion page</a> </li>
      <li><a className={styles.a} href='https://aleo.org/contributor-terms.pdf'>Ecosystem Contributor Program Terms of Service</a> </li>
 
    </ul>


     <SideIcons />
     <BackToTop />
    </div>



  );
  }