"use client";
import React from 'react';
import styles from './DaoBasics.module.css';
import SideIcons from '@/components/SideIcons';
import BackToTop from '@/components/BackToTop';






export default function PolygonZk() {
  return (
    <div className={styles.articleContainer}>
  
      
      <section className={styles.section}>
        <h2>Polygon zkBuilder Grants</h2>
       <p className={styles.black}>The zkBuilder Decentralized Grants Program</p>

        <p><strong>Time frame:</strong> Open</p>
        <p><strong>Grant Amount:</strong>up to 100K MATIC</p>
    <p>The zkBuilder Decentralized Grants Program is Polygon Village’s latest grants program designed to support and fund DeFi builders on Polygon zkEVM.</p>
      </section>

      <section className={styles.section}>
<p className={styles.black}>Scope</p>
<p>The program will select grantees that create unique products native to Polygon zkEVM. The program focuses on two types of projects: multi-chain deployments and new protocols/primitives.</p>





   <p className={styles.black}>Requirements</p>
   <ul className={styles.list}>
     <li>Projects can be submitted in different development stages (ideation, development, currently live on Polygon zkEVM, or live on another chain).</li>
     <li>Projects must be built on Polygon.</li>
     <li>As a team applying for the zkBuilder Decentralized Grants Program, you should be collaborative, improving on legacy mechanisms and product design, and excited about contributing to a DeFi-driven network.</li>
   
   </ul>


        <h1>Grant Process</h1>
       <div>
<p className={styles.black}>Pre-Grant Process</p>
      <ul className={styles.list}>
        <li>1 Complete the Intake form, including a proposed KPI Schedule, with proposed grant amounts and key performance indicators (“KPIs”) for your project.</li>
       
        <li>2 If the application has advanced in the process, the team will contact you to complete the KYC process. </li>
      </ul>

<p className={styles.name}>Review Process</p>
    </div>
   
    <p>The review process can take up to 30 business days. 
If needed, the Grants Council will contact candidates for follow up questions, additional information and adjustments to the KPI schedule. If your application has been approved, you will receive an email about next steps.</p>
    <h1>Funding Specifics</h1> 
    <ul className={styles.list}>
      <li>Funding relies on the amount of votes received by badgeholders.</li>
      <li>There is no cap on the amount you can receive.</li>
      <li>Funding is allocated in a one time direct-amount after results are presented.</li>
    </ul>
      </section>



<p className={styles.black}>Post-Grant Engagement</p>

<p className={styles.black}>1. Badgeholder Selection </p>
<ul>
 
  <li>Selected teams will have a chance to work closely with the Grants Council and ask for feedback on the project, ensuring that everything from mechanism design to go-to-market is as polished as possible. </li>
  <li>Polygon Village will facilitate fostering connections among selected team members to enhance ecosystem development. As specified in zkEVM Grants, grantees are expected to engage with the community.</li>
</ul>




<section className={styles.section}>
<h1>Resources</h1> 
   <ul className={styles.list}>
    <li> <a className={styles.a} href="https://polygon.technology/zkevm-grants" target="_blank" rel="noopener noreferrer">zkEVM Grants</a> </li>
 
</ul>
     </section> 

     <SideIcons />
     <BackToTop />
    </div>



  );
  }