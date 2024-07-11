"use client";
import React from 'react';
import styles from './DaoBasics.module.css';
import SideIcons from '@/components/SideIcons';
import BackToTop from '@/components/BackToTop';






export default function Decentraland() {
  return (
    <div className={styles.articleContainer}>
  
      
      <section className={styles.section}>
        <h2>Decentraland Grants Program</h2>
      
        <p><strong>Timeframe: </strong>Quarterly cohorts, active year-round.</p>
        <p><strong>Grant amount:</strong>$20,000 to $240,000 USD</p>
<p> The Decentraland grant program has funded over 200 projects in the ecosystem. The Decentraland DAO manages the grants program
</p> 
<p>Applicants can submit projects under seven categories: Core Unit, Platform, Documentation, In-world Content, Social Media Content, Sponsorship, and Accelerator.</p>
  </section>

 
    <section className={styles.section}>
   <h1>Grant Scope</h1> 
<p>The program’s scope covers seven areas of interest:</p>
   
<ul className={styles.list}>
      <li><strong>Core Unit:</strong> Projects that provide core infrastructure and operations for the DAO.</li>
      <li><strong>Platform:</strong> For tools and Apps that extend Decentraland’s Platform and ecosystem.</li>
      <li><strong>Documentation:</strong> For projects that build free educational content related to Decentraland’s dynamics.</li>
      <li><strong>In-World Content:</strong> Projects that develop experiences to improve user retention.</li>
      <li><strong>Social Media Content:</strong> Conducts marketing efforts to reach and keep new users engaged.</li>
      <li><strong>Sponsorship:</strong> Supports in-real-life initiatives targeting audiences relevant to Decentraland.</li>
      <li><strong>Accelerator:</strong> Provides financial support for private companies or for-profit initiatives aligned with Decentraland’s goals and in need of assistance.</li>

          </ul> 
    
   
   
   
    <h1>Funding Specifics</h1>
    <p>Projects may request grants within two possible tiers regardless of the grant category.</p>
    <ul className={styles.list}>
      <li>The lower tier allows up to $20,000, paid out in stablecoins or MANA using a Vesting Contract as a one-time payment (after 30 days) or with a vesting schedule. </li>
      <li>The higher tier allows grants from $20,000 to $240,000, paid out in stablecoins using a Vesting Contract.</li>

    </ul> 
    <p>The DAO community must approve grant proposals.</p>
</section>

<h1>Requirements</h1>
<p>Grantees are required to follow DAO rules and policies and submit monthly updates on the Governance dApp as per their proposed execution plan.</p>
<p>Projects are accepted on all stages of development. What matters is the level of detail in each part of the execution.</p>  


<p>Each grant category has different requirements and performance metrics:</p>
<p className={styles.black}>Core Unit</p>
      <ul className={styles.list}>
      <li>Projects must be built publicly, publishing open-source code and documentation.</li>
      <li>They should offer essential or strategic value to the DAO and establish clear, measurable performance metrics based on their goals. </li>
    </ul>
    <p className={styles.black}>Platform</p>
      <ul className={styles.list}>
      <li>Projects must be built publicly, publishing open-source code and documentation.</li>
      <li>Provide performance metrics, including the contributions made to the main code repository.</li>
      <li>Projects should also publish the tool or application to the production environment and provide usage metrics.</li>
    </ul>
    <p className={styles.black}>Documentation</p>
      <ul className={styles.list}>
      <li>Projects should provide unique contributions in English and specify the mediums of publication. For more information on requirements, click <a href='https://docs.decentraland.org/player/general/dao/overview/grants-program/#3--documentation' className={styles.a}>here.</a></li>
      <li>Projects should specify the number of past contributions to Decentraland Documentation and the Awesome Repository.</li>
    </ul>
    <p className={styles.black}>In-World Content</p>
      <ul className={styles.list}>
      <li>Projects should deploy content or host events in Decentraland.</li>
      <li>Provide metrics on newly populated land, active users, returning users, time spent on the scene, past events created, and the number of attendees.</li>
    </ul>
    <p className={styles.black}>Social Media Content</p>
      <ul className={styles.list}>
      <li>Grantees should include metrics on their audience size and project relevancy to Decentraland.</li>
      <li>Projects should provide indicators on the number of pieces produced and performance metrics on engagement, views, mentions, and interactions.</li>
    </ul>
    <p className={styles.black}>Sponsorships</p>
      <ul className={styles.list}>
      <li>Events must be held outside of Decentraland, whether online or in real life.</li>
      <li>Projects should ensure Decentraland brand awareness and level of brand awareness.</li>
      <li>Provide indicators for attendees, mentions in media outlets, and videos or other evidence of the event.</li>
    </ul>
    <p className={styles.black}>Accelerator</p>
      <ul className={styles.list}>
      <li>Applicants should include the ROI provided to the DAO and revenue share with the DAO or alternative value proposition.</li>
    
    </ul>
    <p>You can find more information on requirements <a href='https://docs.decentraland.org/player/general/dao/overview/grants-program/#grant-categories-and-requirements' className={styles.a}>here.</a></p>

     
<h1>Grant Process</h1>
<img src="/images/decentraland-timeline.jpg" alt="Decentraland Image 1" className={styles.benefitsImage} />
<p className={styles.black}>Application</p>
      <ul className={styles.list}>
      <li>To request a grant from the Decentraland DAO begin by navigating to <a href='https://decentraland.org/governance/submit/grant/'>decentraland.org/governance/submit/grant/</a> and connect your wallet.</li>
     <li>Fill out the Grant Proposal Form including category, desired funding, and general information. Here you can find an overview of the form.</li>
    </ul>

    <p className={styles.black}>Review</p>
      <ul className={styles.list}>
      <li>After submitting your proposal, a Forum thread will be generated automatically where the community can provide feedback or ask questions about your project.</li>
     <li>The DAO will select projects through a voting process. Grant requests remain for 14 days.</li>
     <li>If selected the project must comply with monthly reports and communicate openly with the community. For more information on actions after being selected to receive a grant and how grantees are expected to report navigate<a className={styles.a} href='https://docs.decentraland.org/player/general/dao/overview/receiving-grants/'> here </a></li>
    </ul>

    <h1>Review</h1>
      <ul className={styles.list}>
     <li><a className={styles.a} href='https://docs.decentraland.org/player/general/dao/overview/grants-faq/'>Decentraland Grants FAQ</a></li>
   <li><a className={styles.a} href='https://decentraland.org/governance/projects/?type=grants'>Approved Projects</a></li>
   
   </ul> 

     <SideIcons />
     <BackToTop />
    </div>



  );
  }