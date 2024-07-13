"use client";
import React from 'react';
import styles from './DaoBasics.module.css';
import SideIcons from '@/components/SideIcons';
import BackToTop from '@/components/BackToTop';






export default function AleoBluePrint() {
  return (
    <div className={styles.articleContainer}>
  
      
      <section className={styles.section}>
        <h2>Aleo Launch Grants</h2>
      
        <p><strong>Timeframe: </strong> Rolling Basis</p>
        <p><strong>Amount:</strong> 10K-200K+</p>
<p> Launch Grants aims to provide funding for comprehensive, full-featured projects with multiple milestones built on the Aleo network.</p> 
<p>Launch Grants exist within Aleo’s more extensive Developer Grants Program. Across three categories, Aleo’s Developer Grants Program has awarded more than 15 developer projects with $1M+.</p>
  </section>

 
  <section className={styles.section}>
    
   <h1>Grant Scope</h1>   
  <p>All project ideas are welcome as long as they fulfill grant requirements and benefit the Aleo ecosystem. Aleo identifies high-value categories: gaming, Identity & Authentication, Zero-Knowledge Decentralized Finance (ZeFi), Zero-Knowledge Machine Learning, voting and governance, Social Finance, and Tooling & Infrastructure.</p>
  <p>In contrast to Blueprint Grants, for Launch Grants, ideation, milestone planning, and deliverables are defined and submitted by applicants. The milestones and funding amount for each milestone should depend on the project’s complexity.</p>   
   
</section>

<h1>Funding Specifics</h1>
<p>The funding amount is disbursed based on the deliverance of milestones and goals of the submitted solution.</p>
<p>The funding amount and payment currency vary for each Blueprint Grant depending on the complexity and characteristics of the component.</p>



<h1>Grant Requirements</h1>
<ul className={styles.list}>
<li>Developer projects must contain open-source elements that are built on the Aleo network.</li>
<li>Everyone, including individuals, teams, nonprofits, and companies, can apply for a grant.</li>
<li>Applicants must submit a project overview, their team’s background information, and a grant proposal.</li>

</ul>



<h1>Grant Process</h1>
<ul className={styles.list}>
  <p><strong>Application:</strong></p>
<li>1. Outline your proposal using the <a className={styles.a} href='https://docs.google.com/document/d/1x-9xSvPQgF_hmb_xd3e3_2czauwxrGDIXDSj_3x-JuE/edit'>.</a></li>
<li>2. Complete the <a className={styles.a} href='https://docs.google.com/forms/d/e/1FAIpQLSeFw2SuNvYxIItIShgiibKn1iUF7xn7g_xTESGIg4HcL3NA2g/viewform'>Launch Grant Application</a> and submit the proposal.</li>
<p><strong>Review</strong></p>

 <li>1. 1. Projects will be reviewed by the Grants Committee taking into consideration the selection criteria: team quality and experience (30%), project uniqueness or scope of work including well-defined applications, its features functionalities, milestone planning and feasibility (20%), and potential impact on the Aleo ecosystem (50%).</li>
 <li>2. Selected applicants must pass a KYC screening.</li>
 <li>3. After the selection process is complete, the chosen projects are contacted.</li>
 </ul> 





<h1>Resources</h1>
      <ul className={styles.list}>
      <li><a className={styles.a} href='https://aleo.org/post/aleo-grants-solve-meaningful-world-problems-with-zero-knowledge/'>Aleo grants - blog</a></li>
      <li><a className={styles.a} href='https://docs.google.com/document/d/1x-9xSvPQgF_hmb_xd3e3_2czauwxrGDIXDSj_3x-JuE/edit'>Launch Grant Template</a> </li>
      <li><a className={styles.a} href='https://docs.google.com/forms/d/e/1FAIpQLSeFw2SuNvYxIItIShgiibKn1iUF7xn7g_xTESGIg4HcL3NA2g/viewform'>Launch Grant Application Form</a> </li>
      <li><a className={styles.a} href='https://aleo.org/contributor-terms.pdf' >Ecosystem Contributor Program Terms of Service</a></li>
    </ul>


     <SideIcons />
     <BackToTop />
    </div>



  );
  }