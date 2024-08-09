"use client";
import React from 'react';
import styles from '../DaoBasics.module.css';
import SideIcons from '@/components/SideIcons';
import BackToTop from '@/components/BackToTop';






export default function OpPartnerFound() {
  return (
    <div className={styles.articleContainer}>
  
      
      <section className={styles.section}>
        <h2>Retro Funding 5</h2>
   <br></br>
  <img src="/images/retro-grant.svg" alt="Retro" className={styles.benefitsImage} />
<br></br>
<br></br>
<h1 className={styles.subtitle}>What is Retro Funding?</h1> 
<p>RetroPGF or Retro Funding identifies and rewards builders for past contributions to the Optimism ecosystem. It aims to reward the goal of "impact = profit”.</p>

  </section>

 <br></br>
  <section className={styles.section}>
    
   <h1>Scope</h1>   
  <p>Since RetroPGF3, rounds have narrowed their scope.</p>
  <p>Retro Funding 5 rewards contributors to the OP Stack, across three main categories.
</p>
<h1 className={styles.subtitle}>Ethereum Core Contributions</h1>
<p>Contributions to Ethereum infrastructure that supports or is a dependency of the OP Stack. </p>

<ul>
  <li>Ethereum client implementations,</li>
  <li>Infrastructure to test and deploy chains,</li>
  <li>Research to inform development, </li>
  <li>Smart contract languages.</li>

</ul>

<h1 className={styles.subtitle}>OP Stack Research & Development</h1>
<p>Direct R&D contributions and contributions that support protocol upgrades.</p>
<ul>
  <li>Work on core components of the stack (client implementations, modules, modifications),</li>
  <li>Security audits on the OP Stack and its components,</li>
  <li>Research to include new features.</li>
</ul>
<h1 className={styles.subtitle}>OP Stack Tooling</h1>
<p>Tooling projects that support its accessibility and usability.</p>
<ul>
  <li>Tools that facilitate the deployment, operation, or testing of the OP Stack. This includes integration tools, load testing infrastructure, and scripts for node management. </li>
<li>Documentation and tutorials of the OP Stack’s components and its development.</li>
<li>Services for deploying and hosting an OP Chain.</li>
</ul>

<h1 className={styles.subtitle}>Out of Scope:</h1>
<ul>
  <li>Projects to develop or deploy contracts or apps. These may be rewarded in Retro Funding 7: Dev Tooling.</li>
  <li>Optimism Monorepo contributions.</li>
</ul>
<br></br>

   
</section>

<h1>Funding</h1>
<p>Retro Funding 5 will allocate 8M OP to reward the impact of OP Stack contributors.</p>

<ul className={styles.list}>
<li>Funding relies on the amount of votes received by badgeholders and guest voters.</li>
<li>Grants will be streamed to recipients over 100 days, following the announcement of results and approval of KYC.</li>
<li>Grantees must receive a minimum of 1,000 OP to be eligible for rewards.</li>

</ul>
<br></br>
<h1>Requirements</h1>
<p>This round rewards contributions generated between October 2023 - August 2024.
All builders and developers that meet the scope of this round may apply.
</p>

<br></br>
<h1>Grant Process</h1>
<h1 className={styles.subtitle}>Application</h1>
<p>Apply to the round from August 15th to August 29th on <a href='http://retrofunding.optimism.io' className={styles.a} target='_blank'>retrofunding.optimism.io</a></p>
<h1 className={styles.subtitle}>Review</h1>
<p>Applications will be reviewed from August 30th to September 13th.</p>
<p>Voting on approved applications will happen from September 14th to September 28th. Voters will include a random sampling of 90 badgeholders and 30 guest voters. Voters will be sorted into smaller voter groups according to expertise.</p>
<p>Results will be published on October 3rd.</p>






<h1>Resources</h1>
      <ul className={styles.list}>
      <li><a className={styles.a} href='http://retrofunding.optimism.io'>retrofunding.optimism.io</a></li>
      <li><a className={styles.a} href='https://gov.optimism.io/t/retro-funding-5-op-stack-round-details/8612'>Round details</a> </li>
      <li><a className={styles.a} href='https://gov.optimism.io/t/retro-funding-5-expert-voting-experiment/8613#voter-groups-3'>Voting group design</a> </li>

      <li><a className={styles.a} href='Announcing Guest Voter Participation' >Announcing Guest Voter Participation</a></li>
    </ul>


     <SideIcons />
     <BackToTop />
    </div>



  );
  }