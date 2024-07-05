"use client";
import React from 'react';
import styles from './Eigen.module.css';
import SideIcons from '@/components/SideIcons';
import BackToTop from '@/components/BackToTop';






export default function EigenLayer() {
  return (
    <div className={styles.articleContainer}>
  
      
      <section className={styles.section}>
     
        <h2>Understanding EigenLayer</h2>

        <p>
  Contributors: 
     <a href="https://twitter.com/eugelikeeugenia" target="_blank" rel="noopener noreferrer" className={styles.twitterLink}>@eugelikeeugenia</a> -
     <a href="https://twitter.com/lichuacu" target="_blank" rel="noopener noreferrer" className={styles.twitterLink}>@lichuacu</a>  
</p>

        <p> This report includes two main sections:</p>
        <ol className={styles.list}>
       
        <li><strong>Introduction to EigenLayer:</strong> an overview of restaking, and then diving into specifics of the protocol, its mechanisms and incentives.</li>
        
        <li><strong>EigenLayer Ecosystem</strong>:we zoom out into a more comprehensive view of use cases with EigenLayer and expand on some protocols developing.</li>

      </ol> 
      </section>

      <section className={styles.section}>
        <h1>Key Takeaways</h1>
       <div>
      <ul className={styles.list}>
        <li>EigenLayer is a set of smart contracts that enables an open marketplace, allowing stakers to opt-in to validating external software modules.</li>
        <li>Stakers can choose different staking paths, all of them include opting into additional slashing risks. Slashing is a key part in the mechanism design. It imposes economic penalties on dishonest or non-compliant participants, ensuring they behave as specified.</li>
        <li>EigenLayer provides incentives to all segments of the staking ecosystem. A major advantage is pooled security. Protocols in EigenLayer benefit from shared security, avoiding building in fragmented security</li>
        <li>EigenLayer risks are different from restaking risks, as they refer to risks that emerge from the protocol. We dive into this distinction, explain various risks involved and how they are being managed.</li>
        <li>Use cases range from data availability and rollup services to applied cryptography. Throughout the year the AVS landscape keeps evolving and growing, with multiple projects emerging. We dive into 3 projects building in EigenLayer: EigenDA, Lagrange, and Espresso.</li>
      </ul>
    </div>
 
      </section>
      <a href="/EigenLayer.pdf" download className={styles.contactButton}>Download the report</a>
      <div className={styles.pdfContainer}>
  <object data="/EigenLayer.pdf" type="application/pdf" className={styles.pdfIframe}>
    <embed src="/EigenLayer.pdf" type="application/pdf" />
    <p>This browser does not support PDFs. Please download the PDF to view it: <a href="/EigenLayer.pdf">Download PDF</a>.</p>
  </object>
</div>

     <SideIcons />
     <BackToTop />
    </div>



  );
  }