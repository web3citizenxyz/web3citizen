"use client";
import React from 'react';
import styles from './DaoBasics.module.css';
import SideIcons from '@/components/SideIcons';
import BackToTop from '@/components/BackToTop';






export default function OpPartnerFound() {
  return (
    <div className={styles.articleContainer}>
  
      
      <section className={styles.section}>
        <h2>Retro Funding (RetroPGF)</h2>
      
        <p><strong>Next round: </strong> May 2024, focusing on Onchain Builders</p>
        <p><strong>Amount:</strong> Total amount for 2024: 850M OP. Amount per round to be announced</p>
<p>Each Season, RetroPGF identifies and rewards builders for the contributions they have made to the Optimism Collective. RetroPGF mechanism serves as an experiment towards achieving this goal of "impact = profit". By funding public goods in a sustainable manner, the Collective can foster a thriving ecosystem..</p> 
<p>Since October 2022, RetroPGF has distributed 41M OP tokens across three rounds.</p>
<img src="/images/image-retrof.png" alt="Retro" className={styles.benefitsImage} />


<p>During 2024, RetroPGF round 4 will focus on <a className={styles.a} href='https://gov.optimism.io/t/retro-funding-moving-from-broad-to-narrow-scoped-rounds/7759' target='_blank'> narrow scoped rounds.</a></p>
<ul className={styles.list}>
<li>Retro Funding 4 Onchain builders: May</li>
<li>Retro Funding 5 OP Stack: late July/August</li>
<li>Retro Funding 6 Governance: August</li>
<li>Retro Funding 7 Dev-tooling: October</li>
</ul>


<p><strong>Information below focuses on what is known for Retro Funding 4.
We’ll update as soon as new information becomes available.</strong></p>
  </section>

 
  <section className={styles.section}>
    
   <h1>Grant Scope</h1>   
  <p>Retro Funding rounds 4-7 will each award projects on a specific category:</p>

  <ul className={styles.list}>
<li><strong>#4 Onchain Builders</strong></li>
<p>For projects that drive the adoption of Optimism. Onchain builders introduce new users to Optimism, drive protocol usage and network effects.</p>

<li><strong>#5 OP Stack</strong></li>
<p>For projects that contributed to making the OP Stack more efficient, secure, resilient. This round is tied to Intent 1 of “Progress towards technical decentralization.”</p>

<li><strong>#6 Collective Governance</strong></li>
<p>For projects that benefit governance participants within the Optimism Collective, improve capture resistance and resource allocation of Optimism Governance. This round is tied to Intent 4 “Improving governance accessibility.”</p>

<li><strong>#7 Developer Tooling</strong></li>
<p>For developer tooling projects that improved the lives of developers building within the Optimism Collective. This round is tied to Intent 2 “Grow the Superchain.”</p>
</ul>
<p>Projects can apply under more than one category ie. If your project is a dev tool built on the OP stack you could apply for “Dev Tooling” and “OP Stack.”</p>

<h1>Who can apply?</h1>
<p>Builders, developers artists, creators, and all contributors who make a positive impact on Optimism or the Superchain Ecosystem are able to participate.</p>



   
</section>

<h1>Funding Specifics</h1>

<ul className={styles.list}>
<li>Funding relies on the amount of votes received by badgeholders.</li>
<li>There is no cap on the amount you can receive.</li>
<li>Funding is allocated in a one time direct-amount after results are presented.</li>

</ul>




<h1>Grant timeline</h1>
<p>This reflects the process designed up to RetroPGF3, will be updated if a new process is unveiled for Retro Funding 4.</p>
<img src="/images/retro-timeline.jpg" alt="Retro" className={styles.benefitsImage} />


<p><strong>1. Badgeholder Selection</strong></p>
<p>Badgeholders are selected based on their contributions.</p>

<p><strong>2. Aplications are open</strong></p>
<p>Applicants submit their projects through direct sign-up, showcasing their positive impact within the Optimism Collective. While not currently available, when applications are open you can build your Optimist Profile. In it you can provide impact details and metrics with references to external data sources to describe how the project has made a positive impact within the scope of this round.</p>
<p>You can see the application for Round 3 <a href='https://app.optimism.io/retropgf-signup' target='_blank' className={styles.a}>here.</a></p>


<p><strong>3. Voting Process</strong></p>
<p>A select group of badgeholders in the Citizens House is responsible for determining who receives retroactive funding. Badgeholders voting directs funds to those projects who have notably benefited Optimism.</p>
<p>Votes are cast in  accordance with each round’s Retro Funding ‘experiment’. Retro Funding for the Onchain Builder and Dev Tooling rounds will be judged according to metrics. OP Stack and Governance rounds will be judged by Impact Juries, groups of citizens which have a small amount of projects to review.</p>

<p><strong>4. Results and fund allocation</strong></p>
<p>Projects receive rewards based on their received OP allocation votes.</p>





<h1>Resources</h1>
      <ul className={styles.list}>
      <li><a className={styles.a} href='https://community.optimism.io/docs/governance/citizens-house/#how-retropgf-works'>How RetroPFG works</a></li>
      <li><a className={styles.a} href='https://gov.optimism.io/t/upcoming-retro-rounds-and-their-design/7861'>Upcoming round post</a> </li>
      <li><a className={styles.a} href='https://vote.optimism.io/retropgf/3/summary'>Round 3 - summary and results</a> </li>
      <li>Read the Project Manual for an overview and answers FAQs</li>
      <li><a className={styles.a} href='https://twitter.com/OptimismGrants' >X account</a></li>
    </ul>


     <SideIcons />
     <BackToTop />
    </div>



  );
  }