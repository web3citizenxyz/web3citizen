"use client";
import React from 'react';
import styles from '../DaoBasics.module.css';
import SideIcons from '@/components/SideIcons';
import BackToTop from '@/components/BackToTop';






export default function Arbitrum() {
  return (
    <div className={styles.articleContainer}>
  
      
      <section className={styles.section}>
        <h2>Arbitrum Foundation Grants</h2>
      
        <p><strong>Timeline: </strong>Rolling Basis</p>
        <p><strong>Grant Amount:</strong>Growth Grant receive up to $50k and Advanced Growth Grant up to $150k in ARB tokens.</p>
    <p>The Foundation Grants Program is aimed at projects working in, assisting with, or supporting the Arbitrum ecosystem.</p>
    <p>All grants issued aid in improving the adoption of Arbitrum chains, creating more robust technical structures, and building sustainable communities in the Arbitrum ecosystem.</p>
    </section>

    <section className={styles.section}>
     <p className={styles.black}>Grant Scope</p>
     <p>The program progresses through phases, dedicated to specific areas of interest. The <a href='https://www.notion.so/Current-Phase-Categories-a0108619966148b4a9189ecda1a59ef3?pvs=4' className={styles.a}>current phase</a> is receiving applications from dApps (and Appchains).</p>

   <ul className={styles.list}>
     <li>Stylus: Projects must integrate this new programming paradigm to build on Arbitrum from traditional programming languages such as Rust, C++, among others. Examples such as math-heavy finance algorithms, on-chain generative art, and complex cryptography classify under this category.</li>

   <li>dApps: Applications from Gaming, DePin, Social, and NFTs are welcome to apply under this category, but any innovative idea that adds value to the Arbitrum ecosystem is also encouraged.
   </li>

   </ul>
   
     <h1>Funding Specifics</h1>
       <div>

        <p>The Arbitrum Foundation grants program offers milestone-based funding for projects in development.</p>
        <p>Projects looking to launch on Arbitrum can apply for two types of grants:</p>


      <ul className={styles.list}>
        <li><strong>Growth Grant (up to $50k):</strong> For small and medium teams with proven experience in writing smart contracts and building Web3 products.</li>
        <li><strong>Advanced Growth Grant (up to $150k):</strong> For large teams with experience and previous success in building Web2 or Web3 products.</li>  
      </ul>
      <p>Learn more about the <a href='https://www.notion.so/Grant-Tracks-b8d304453e804deba3a9abd058ed6daf?pvs=4' className={styles.a}>Grant Types.</a></p>
</div>
<p className={styles.black}>Grant Requirements</p>

    <ol className={styles.list}>
      <li>Phase two only considers submissions building out decentralized applications using the Arbitrum stack.</li>
      <li>Projects applying for growth grants must include up to 2 milestones, while advanced growth grants must include 3 to 5. Refer to milestone guidance here.</li>
      <li>Make sure to comply with the Submission Guidelines.</li>
     <li>KYC is required to receive milestone payments.</li>
     </ol>
     </section>


      <p className={styles.black}>Grant Process</p>
    
      <ol className={styles.list}>
      <li>1. Navigate to the Foundation Grants Notion Page and <a href='https://esp.ethereum.foundation/applicants/small-grants' className={styles.a} target='_blank'>apply here.</a></li>
      <li>2. Applications are reviewed on a rolling basis.</li>
      <li>3. If the submission is approved, the team will contact the project to conduct a KYC process.</li>
    </ol>

<section className={styles.section}>
<h1>Resources</h1> 
   <ul className={styles.list}>
    <li> <a className={styles.a} href="https://www.notion.so/53ad99f665d946adb58bf92e82438fd5?pvs=4" target="_blank" rel="noopener noreferrer">Arbitrum Foundation Grants Notion Hub</a> </li>
</ul>
     </section> 

     <SideIcons />
     <BackToTop />
    </div>



  );
  }