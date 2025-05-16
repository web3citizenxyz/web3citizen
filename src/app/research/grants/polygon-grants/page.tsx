"use client";
import React from 'react';
import styles from '../DaoBasics.module.css';
import SideIcons from '@/components/SideIcons';






export default function PolygonVillageGrants() {
  return (
    <div className={styles.articleContainer}>
  
      
      <section className={styles.section}>
        <h2>Polygon Village Grants</h2>
       
        <p><strong>Time frame:</strong> waiting for the next iteration of Village Grants</p>
        <p><strong>Campaigns duration aprox. 8 weeks:</strong></p>
        <ul className={styles.list}>
     <li>8 weeks (BUIDL on Polygon #1);</li>
     <li>8-10 weeks (Infra on Polygon) from application to deployment.</li>
   </ul>
        

        
      <p>Village Grants provides support to founders in the Polygon ecosystem. Village Community Grants (VCG) is a grant program that provides funding to projects through either quadratic funding or direct grants. The program partners with Gitcoin or Giveth to power funding rounds for quadratic funding.</p>
      <p>So far, two grants are currently under implementation, focusing on builders and developing infrastructure on Polygon. Matching pools for each grant vary, but both have disbursed more than 100K MATIC.</p>
      <p>The information below refers to the past iteration.
       Additional grants are expected to be available in early 2024.</p>
      </section>

      <section className={styles.section}>
        <h1>Grant Scope</h1>
       <p>Village Community Grants funds ecosystem-centered projects focusing on specific categories.</p>

      </section>
<h1>Funding Specifics</h1>


<p className={styles.black}>Village Community Grants provides prospective grants.</p>


<p>Depending on the grant type,<a href='' className={styles.a}>VCG will provide funding through either direct or quadratic funding grants.</a></p>

<ul className={styles.list}>
     <li>Direct grants are mainly intended for later-stage projects and the funding amount can be up to two million MATIC per grant. They are offered through the Polygon Foundation.</li>
     <li>Quadratic funding grants, on the other hand, are primarily intended for early-stage projects and the funding amount is smaller.</li>
   </ul>

  <p className={styles.black}>Requirements.</p>   

  <ul className={styles.list}>
     <li>Subject to round rules, grants are open to anyone building in the Polygon ecosystem.</li>
     <li>Follow the guidelines and specifications of the campaign you wish to participate in.</li>
     <li>Accept the Terms & Conditions of the campaign and, if selected, complete the KYC/KYB review process to become a candidate.</li>
   </ul>

<h1>Grant Process for QF rounds</h1>
<p className={styles.black}>Application</p>   

<ul className={styles.list}>
  <p>1. Application and Screening</p>
     <li>Teams and individuals submit their applications, including their wallet addresses, to become a candidate in the funding round.</li>
     <li>2. Polygon Labs conducts verification of KYC/KYB review of selected projects. Once verified, participants move on to the next phase.</li>
  
   </ul>
   <p className={styles.black}>Voting & Review</p>   
   <ul className={styles.list}>
  <p>1. Community Contest</p>
     <li>In collaboration with Jokerace, candidates compete for votes from the community. Top projects will move on to the next phase, where they will onboard their projects to Giveth.</li>
    <p>2. Grant Phase</p>
      <li>Powered by Giveth, candidates will receive donations from community members over two weeks.</li>
  <p>3. Funding</p>
  <li>Once donations are verified, donated amounts and Quadratic Funding (QF) matching funds are distributed to participants.</li>

   </ul>

<section className={styles.section}>
<h1>Resources</h1> 
   <ul className={styles.list}>
    <li> <a className={styles.a} href="https://polygon.technology/village/grants" target="_blank" rel="noopener noreferrer">Village Grants Website</a> </li>
 
    <li> <a className={styles.a} href="https://polygon.technology/blog/introducing-polygon-village-2-0-championing-founders-with-more-than-110-million-in-matic-grants-mentoring-ecosystem-support-and-more?utm_source=twitter&utm_medium=social&utm_content=village-relaunch-blog" target="_blank" rel="noopener noreferrer">Introducing Polygon Village 2.0</a> </li>
    <li> <a className={styles.a} href="https://vote.optimism.io/retropgf/3/summary" target="_blank" rel="noopener noreferrer">Round 3 - summary and results</a> </li>
    <li><a className={styles.a} href='https://polygon.technology/village/grants'>FAQs</a> </li>
    <li><a className={styles.a} href='https://polygon.technology/village/builder-houses'>Builder Houses & Co-working</a> </li>
</ul>
     </section> 

     <SideIcons />
    </div>



  );
  }