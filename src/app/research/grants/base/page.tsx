"use client";
import React from 'react';
import styles from '../DaoBasics.module.css';
import SideIcons from '@/components/SideIcons';






export default function Base() {
  return (
    <div className={styles.articleContainer}>
  

      
      <section className={styles.section}>
        <h2>Base Builder Grants</h2>
        <br></br>
        <img src="/images/base-grants.svg" alt="Base" className={styles.benefitsImage} />
<br></br>
<br></br>
        <h1> What are Blueprint Grants?</h1>
    <p>Builder Grants is Base's grant program that aims to boost meaningful and impactful contributions to Base. Since its launch in October 2023, Builders Grants has funded 20+ projects.</p>
    </section>
<br></br>

    <section className={styles.section}>
     <h1>Scope</h1>
<p>Builder Grants offers small grants to early initiatives or prototypes built on Base, contributions that develop its ecosystem, and initiatives that bring more users on-chain. </p>
<p>
The program rewards meaningful contributions without adhering to strict categories. Past grantees include community projects built on Base, gaming hubs, apps, and more.
</p>

</section>
<br></br>
<section className={styles.section}>
     <h1>Funding</h1>
       <div>

        <p>Builder Grants fund both prospective and retrospective projects and contributions.</p>
        <p>The funding amount is disbursed based on deliverance by the Grants Review team. After the grant process has concluded, a direct amount is awarded to selected projects.</p>


<br></br>
<h1>Requirements</h1>
      <ul className={styles.list}>
        <li>Early initiatives or prototypes built on Base that contribute to its development.</li>
        <li><a href='' className={styles.a}>Grant recipients</a> are required to complete W8/W9 forms for KYC, tax, compliance, and legal reasons.</li>  
      </ul>
</div>


</section>

<br></br>
 <section className={styles.section}>

<h1>Grant Process</h1>
<p className={styles.subtitle}><strong>Application</strong></p>

<p>Projects are either submitted by the community through a <a href='https://docs.google.com/forms/d/e/1FAIpQLSfXuEzmiAzRhie_z9raFCF1BXweXgVt18o-DvBuRRgyTygL2A/viewform' className={styles.a}> form</a> or identified by the Grant Review team through Twitter, Farcaster, or their past contributions..</p>
    
<br></br>
<p className={styles.subtitle}><strong>Review</strong></p>
<p>The high-level review process has been outlined on the website as follows:</p>
      <ol className={styles.list}>
      <p>1. The Grants Review team will identify and deliberate before selecting grantees.</p>
      <p>2. If selected, the team reaches out to the grantee, conducts a KYC process, and then issues the grant.</p>
      
    </ol>
<p>There is no specified timeline for the grant review process. However, several grants have been issued since the program's launch three months ago.</p>

</section>
     <SideIcons />
    </div>



  );
  }