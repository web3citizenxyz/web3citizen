"use client";
import React from 'react';
import styles from '../DaoBasics.module.css';
import SideIcons from '@/components/SideIcons';
import BackToTop from '@/components/BackToTop';






export default function Base() {
  return (
    <div className={styles.articleContainer}>
  
      
      <section className={styles.section}>
        <h2>Base Builder Grants</h2>
      
        <p><strong>Time frame: </strong>accepted on a rolling basis</p>
        <p><strong>Grant Amount:</strong> 1 to 5 ETH</p>
    <p>Builder Grants is Base’s grant program that aims to boost meaningful and impactful contributions to Base. Since its launch in October 2023, Builders Grants has funded 20+ projects.</p>
    </section>

    <section className={styles.section}>
     <p className={styles.black}>Grant Scope</p>
     <p>The program progresses through phases, dedicated to specific areas of interest. The <a href='https://www.notion.so/Current-Phase-Categories-a0108619966148b4a9189ecda1a59ef3?pvs=4' className={styles.a}>current phase</a> is receiving applications from dApps (and Appchains).</p>
     <p>Builder Grants offers small grants to early initiatives or prototypes built on Base, contributions that develop its ecosystem, and initiatives that bring more users on-chain.</p>
   <p>The program rewards meaningful contributions without adhering to strict categories. Past grantees include community projects built on Base, gaming hubs, apps, <a href='https://twitter.com/base/status/1738279733979136144' className={styles.a}> and more.</a></p>

   
     <h1>Funding Specifics</h1>
       <div>

        <p>Builder Grants fund both prospective and retrospective projects and contributions.</p>
        <p>The funding amount is disbursed based on deliverance by the Grants Review team. After the grant process has concluded, a direct amount is awarded to selected projects.</p>

<p className={styles.black}>Requirements</p>
      <ul className={styles.list}>
        <li>Early initiatives or prototypes built on Base that contribute to its development.</li>
        <li><a href='' className={styles.a}>Grant recipients</a> are required to complete W8/W9 forms for KYC, tax, compliance, and legal reasons.</li>  
      </ul>
</div>
</section>
<p className={styles.black}>Grant Process</p>
<p>Aplicattion</p>
<p>Projects are either submitted by the community through a form or identified by the Grant Review team through <a href='https://x.com/base/status/1737585444122956086?s=20' className={styles.a}>Twitter </a>, Farcaster, or their, <a href='https://twitter.com/base/status/1738279733979136144' className={styles.a}> past contributions. </a></p>
    

<p>Review</p>
<p>The high-level review process has been outlined on the website as follows:</p>
      <ol className={styles.list}>
      <li>1. The Grants Review team will identify and deliberate before selecting grantees.</li>
      <li>2. f selected, the team reaches out to the grantee, conducts a KYC process, and then issues the grant.</li>
      
    </ol>
<p>There is no specified timeline for the grant review process. However, several grants have been issued since the program’s launch three months ago.</p>


     <SideIcons />
     <BackToTop />
    </div>



  );
  }