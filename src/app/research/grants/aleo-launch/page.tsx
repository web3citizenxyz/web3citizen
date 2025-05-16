"use client";
import React from 'react';
import styles from '../DaoBasics.module.css';
import SideIcons from '@/components/SideIcons';






export default function AleoLaunch() {
  return (
    <div className={styles.articleContainer}>
  
      
      <section className={styles.section}>
        <h2>Aleo Launch Grants</h2>
      <br></br>
        <img src="/images/aleo-launch.svg" alt="Aleo" className={styles.benefitsImage} />
<br></br>
<br></br>
<h1>What are Launch Grants?</h1>
<p>
Launch Grants provide funding for comprehensive, full-featured projects with multiple milestones built on the Aleo network.
</p> 
<p>Launch Grants exist within Aleo's more extensive Developer Grants Program. Across three categories, Aleo's Developer Grants Program has awarded developer projects with $1M+.</p>
  </section>

 <br></br>


  <section className={styles.section}>
    
   <h1>Scope</h1>   
  <p>All project ideas are welcome as long as they fulfill grant requirements and benefit the Aleo ecosystem. Aleo identifies high-value categories: </p>
  <ul className={styles.list}>
    <li>Gaming</li>
    <li>Identity & Authentication</li>
    <li>Zero-Knowledge Decentralized Finance (ZeFi)</li>
    <li>Zero-Knowledge Machine Learning (zkML)</li>
    <li>Voting and governance</li>
    <li>Social Finance</li>
    <li>Tooling & Infrastructure</li>

  </ul>
  <p>In contrast to Blueprint Grants, for Launch Grants, ideation, milestone planning, and deliverables are defined and submitted by applicants. The milestones and funding amount for each milestone should depend on the project's complexity.</p>   
   
</section>

<br></br>

<section className={styles.section}>
<h1>Funding</h1>
<p>The funding amount is disbursed based on the deliverance of milestones and goals of the submitted solution. The funding amount my vary for each Grant depending on the complexity.</p>

</section>
<br></br>


<section className={styles.section}>
<h1>Grant Requirements</h1>
<ul className={styles.list}>
<li>Developer projects must contain open-source elements that are built on the Aleo network.</li>
<li>Everyone, including individuals, teams, nonprofits, and companies, can apply for a grant.</li>
<li>Applicants must submit a project overview, their team's background information, and a grant proposal.</li>

</ul>
</section>
<br></br>



<section className={styles.section}>


<h1>Grant Process</h1>
<ul className={styles.list}>

<p className={styles.subtitle}><strong>Application:</strong></p>
<p>1. Outline your proposal using the <a className={styles.a} href='https://docs.google.com/document/d/1x-9xSvPQgF_hmb_xd3e3_2czauwxrGDIXDSj_3x-JuE/edit'>Launch Grants Template.</a></p>
<p>2. Complete the Launch Grant Application and submit the proposal.</p>


<p className={styles.subtitle}><strong>Review</strong></p>

 <p>1. Projects will be reviewed by the Grants Committee taking into consideration the selection criteria: team quality and experience (30%), project uniqueness or scope of work including well-defined applications, its features functionalities, milestone planning and feasibility (20%), and potential impact on the Aleo ecosystem (50%).</p>
 <p>2. Selected applicants must pass a KYC screening.</p>
 <p>3. After the selection process is complete, the chosen projects are contacted.</p>
 </ul> 
</section>
<br></br>



<h1>Resources</h1>
      <ul className={styles.list}>
      <li><a className={styles.a} href='https://aleo.org/post/aleo-grants-solve-meaningful-world-problems-with-zero-knowledge/'>Aleo grants - blog</a></li>
      <li><a className={styles.a} href='https://docs.google.com/document/d/1x-9xSvPQgF_hmb_xd3e3_2czauwxrGDIXDSj_3x-JuE/edit'>Launch Grant Template</a> </li>
      <li><a className={styles.a} href='https://docs.google.com/forms/d/e/1FAIpQLSeFw2SuNvYxIItIShgiibKn1iUF7xn7g_xTESGIg4HcL3NA2g/viewform'>Launch Grant Application Form</a> </li>
      <li><a className={styles.a} href='https://aleo.org/contributor-terms.pdf' >Ecosystem Contributor Program Terms of Service</a></li>
    </ul>


     <SideIcons />
    </div>



  );
  }