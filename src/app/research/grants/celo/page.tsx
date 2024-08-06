"use client";
import React from 'react';
import styles from '../DaoBasics.module.css';
import SideIcons from '@/components/SideIcons';
import BackToTop from '@/components/BackToTop';






export default function DaoBasics() {
  return (
    <div className={styles.articleContainer}>
  
      
      <section className={styles.section}>
        <h2>Celo RetroPGF 0</h2>
        <p><strong>Timeframe: </strong> Application submissions from April 8th to April 30th</p>
        <p><strong>Amount: </strong>Over 250,000 CELO distributed, amount awarded depends on steward votes.</p>
        <p>Celo Public Goods introduces #CeloRPGF0, a pioneering Retroactive Public Goods Funding program, rewarding Celo ecosystem contributors for their historical impact. Emulating Optimism's innovative public goods funding, CeloRPGF0 focuses on supporting those who've significantly advanced the Celo environment since its 2020 mainnet launch</p>
      </section>

      <section className={styles.section}>
        <h1>Grant Scope</h1>

       <div>
      <p>CeloRPGF0 targets three main verticals:</p>
      <ul className={styles.list}>
        <li><strong>Celo ReFi:</strong>Projects enabling real-world impact and ecological benefits on Celo.</li>
        <li><strong>Celo dApps and Tooling:</strong>Tools and dApps enhancing user and stakeholder experiences.</li>
        <li><strong>Celo Community and Adoption: Celo Community and Adoption: </strong>Initiatives such as education and governance support, fostering community growth and adoption.</li>
      </ul>
    </div>
    <p className={styles.black}> Grant Requiriments </p> 
    <ul className={styles.list}>
        <li>Projects must demostrate a significant, verifiable impact on the Celo ecosystem over the past year.</li>
        <li>Eligibility extends to initiatives within the specified verticals, contributing to Celo's mission and public goods.</li>
      </ul>      
      </section>


      <section className={styles.section}>

      <p className={styles.black}>Funding Specifics</p>  
   
      <ul className={styles.list}>
        <li>CeloRetroPGF only awards projects based on past contributions.</li>
        <li>Projects must mint a Hypercart Mint, a digital claim about the positive impact you or your project contributed to the Celo ecosystem since the launch of its Blockchain. To mint it follow the <a className={styles.a} href="https://hub.celopg.eco/hypercert-minting-guide" target="_blank" rel="noopener noreferrer"> CeloPG Hypercert Minting Guide.</a>  </li>
        <li>Funding is a one-time direct grant post-results announcement </li>
        <li>Receivable amount allocated has no cap.</li>
      </ul>     



     
      <h1>Grant timeline</h1> 
   

      <img src="/images/celo-image.png" alt="Celo" className={styles.benefitsImage} />
     
   <p>Application (April 8th - April 30th)</p>
   <ul className={styles.list}>
    <li><strong>Interest Registration:</strong><a className={styles.a} href="https://tally.so/r/3EXBv2" target="_blank" rel="noopener noreferrer"> Open now </a>, including a form submission to join the CeloPG Community.</li>
    <li><strong>Hypercert Minting</strong><a className={styles.a} href="https://hub.celopg.eco/hypercert-minting-guide" target="_blank" rel="noopener noreferrer">  Mint a Hypercert </a> detailing your positive impact on Celo.</li>
    <li>Submit your formal applications via the EasyRPGF app.</li>
   </ul>
 

   <p>Review and results announcement (April 20th - May 24th)</p>
   <ul className={styles.list}>
    <li><strong>Steward Review (April 30th - May 13th): </strong> <a className={styles.a} href="https://hub.celopg.eco/cpg-stewards" target="_blank" rel="noopener noreferrer">Stewards</a> determine funding allocation to ensure they align with the purpose of funding based on application reviews.</li>
    <li><strong>Community voting (May 13th - May 20th):</strong> Community Stakeholders assess projects’ impact and vote based on their experience in the category they represent.</li>
    <li>Results Announcement (May 24th) at <a className={styles.a} href="https://www.celodao.eu/gather" target="_blank" rel="noopener noreferrer">Celo Gather </a>, followed by fund distribution.</li>
   </ul>
   <h1>Resources</h1> 
   <ul className={styles.list}>
    <li> <a className={styles.a} href="https://www.celopg.eco/" target="_blank" rel="noopener noreferrer">Celo Public Goods</a> </li>
 
    <li> <a className={styles.a} href="https://hub.celopg.eco/hypercert-minting-guide" target="_blank" rel="noopener noreferrer">Hypercert Minting Guide</a></li>
   </ul>


     </section> 

     <SideIcons />
     <BackToTop />
    </div>



  );
  }