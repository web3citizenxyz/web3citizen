"use client";
import React from 'react';
import styles from '../DaoBasics.module.css';
import SideIcons from '@/components/SideIcons';
import BackToTop from '@/components/BackToTop';






export default function DaoBasics() {
  return (
    <div className={styles.articleContainer}>
  
      
      <section className={styles.section}>
        <h2>Uniswap Arbitrum Grants Program</h2>
        <p><strong>Timeline: </strong>Rolling basis. Applications open until May 7th.</p>
        <p><strong>Amount: </strong>$50-250k ARB per project</p>
        <p>The Uniswap-Arbitrum Grant Program (UAGP) is currently in its first iteration and will run for a total of 6 months.</p>
        <p>The aim of this program is to support the growth of high-impact projects that are exclusively built within the Uniswap and Arbitrum ecosystems.</p>
    <p>Applications for the UAGP have been open on a rolling basis since November 2023, and interested projects can still apply during the duration of the program.</p>
      </section>

      <section className={styles.section}>
        <h1>Grant Scope</h1>

       <div>
      <p>Projects can apply following the suggested RFPs or as inbound open applications. RFPs for this grant program were selected taking into account feedback from delegates, the Uniswap Foundation, and active community members.</p>
      <p>The UAGP covers the following categories:</p>
      <ul className={styles.list}>
        <li>Liquidity Management and Derivative Protocols</li>
        <li>Arbitrum testnet with EIP-1153 enabled</li>
        <li>Uniswap on Arbitrum Ecosystem tools or products</li>
        <li>Uniswap v4 Infrastructure Dev Tools</li>
        <li>Open Contribution: initiatives and applications, not necessarily aligning with the previous four categories</li>
    
      </ul>
    
    </div>


    <p className={styles.black}> Grant Requirements</p> 

    <ul className={styles.list}>
        <li>UAGP aims to fund High-Impact Projects, as such grants are allocated to projects that demonstrate the potential for substantial positive impact on both ecosystems.</li>
        <li>Projects must meet the specified scope and strengthen the Uniswap and Arbitrum Ecosystems</li>
        <li>Grant applications should include relevant KPIs, milestones, and deliverables. Learn more about how to outline successful KPIs <a href='https://www.notion.so/Learn-KPIs-Milestones-cab6e634338d4cefbb2ba7b345d7d879?pvs=4' className={styles.a}>here.</a></li>
       
    
      </ul>

<h1>Grant Process</h1>
      <img src="/images/uniswap-grants.jpg" alt="Lido" className={styles.benefitsImage} /> 
      </section>


      <section className={styles.section}>

  <p className={styles.black}>Application process</p>
  <p>1. Create a project by connecting your wallet to the Gitcoin Builder Explorer and then selecting “Create a Project”.</p>
  <p>2. Apply to the UAGP round. Once you have completed the application process, you can view the status of your application in Builder, and you will receive an email from Gitcoin Stack.</p>

<p>You can find a detailed overview on the registration process<a href='https://www.notion.so/How-to-Apply-98f0daa71c6047fe8ed3e05d82001814?pvs=4' className={styles.a}> here.</a></p>
     
<p className={styles.black}>Review and Selection Process</p>

<p>1. <strong>Initial Screening </strong> of applications.</p>
<p>2. <strong>In-Depth Review & Feedback:</strong> The UAGP Reviewer Committee, including interviews, references and constructive feedback.</p>
<p>3. <strong>Award & Monitoring:</strong> Once approved, projects receive funding and kick off their work, with periodic check-ins and a concluding evaluation to measure impact and success.</p>


<h1>Resources</h1> 
   <ul className={styles.list}>
    <li> <a className={styles.a} href="https://vote.uniswapfoundation.org/proposals/47" target="_blank" rel="noopener noreferrer">UAGP Governance Proposal</a> </li>
 
    <li> <a className={styles.a} href="https://www.notion.so/Uniswap-Arbitrum-Grant-Program-UAGP-1c1e8b33bc60436993dd65e37d022f9d?pvs=4" target="_blank" rel="noopener noreferrer">Uniswap Arbitrum Grants Program Notion Hub</a></li>
    <li> <a className={styles.a} href="https://www.notion.so/Example-of-Proposal-ab96cd9390714e579ed8d05531d159ae?pvs=4" target="_blank" rel="noopener noreferrer">Grant Proposal Example DRAFT</a> </li>
    <li> <a className={styles.a} href="https://explorer.gitcoin.co/#/round/42161/0x6142eedc06d80f3b362ce43b4ac52fad679dc850" target="_blank" rel="noopener noreferrer">UAGP Gitcoin Round</a> </li>
 
  
  </ul>

     </section> 

     <SideIcons />
     <BackToTop />
    </div>



  );
  }