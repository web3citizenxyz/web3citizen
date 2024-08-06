"use client";
import React from 'react';
import styles from '../DaoBasics.module.css';
import SideIcons from '@/components/SideIcons';
import BackToTop from '@/components/BackToTop';






export default function GraphAdvocates() {
  return (
    <div className={styles.articleContainer}>
  
      
      <section className={styles.section}>
        <h2>The Graph Advocates DAO Grants</h2>
      
        <p><strong>Timeline: </strong> Rolling Basis</p>
        <p><strong>Amount:</strong>Up to $20,000 in GRT</p>
<p> 
The Graph AdvocatesDAO is a decentralized organization consisting of advocates of The Graph that focus on growing the community, subgraph education and spreading awareness about web3.
</p> 
<p>Community Grants are focused on community-building efforts and are overseen and reviewed by the AdvocatesDAO. These grants are intended to be used within The Graph ecosystem.</p>
<p>The Graph AdvocatesDAO Grants focuses on fostering the development of The Graph community. Community building, as defined in The Graph Docs, means increasing the community's awareness, engagement, understanding, or participation in The Graph or web3 ecosystem.</p>
  </section>

 
    <section className={styles.section}>
    
<p>Potential community building projects include but are not limited to:</p>
   
<ul className={styles.list}>
      <li>Podcasts & Multimedia (e.g., GRTiQ Podcast)</li>
      <li>Hackathons and Blockchain Event Sponsorship</li>
      <li>Graph Communities (e.g., Graphtronauts)</li>
      <li>Educational Programs (e.g., Rabbithole)</li>
      <li>Community Tooling (e.g., delegator tools)</li>
      <li>Marketing & Branding</li>
    </ul> 
    
  <p>Any projects or proposals outside of this scope will be deferred to The Graph Council and The Graph Foundation's existing grant application process.</p>
   
   
   
    <h1>Funding Specifics</h1>
    <ul className={styles.list}>
      <li>The DAO sets a guideline of approving Community Grants up to $20,000 USD worth of GRT per individual grant proposal. The GRT conversion rate will be set with a 30-day time-weighted average price. </li>
      <li>The Graph Advocates DAO provides funding for grants in two tranches: 20% at the beginning and 80% upon completion of the grant. Therefore, a grantee must submit two funding proposals separate from one another for the specified percentage of the total grant. </li>
      <li>Grantees are required to follow all specified off-chain processes prior to submitting on-chain proposals in DAOHaus.</li>
      <li>The grant will be disbursed on the Gnosis Chain.</li>

    </ul> 
</section>

<h1>Grant Process</h1>
<ul className={styles.list}>
<li><strong>1. Form application:</strong> After submitting your proposal, it will be published in the AdvocatesDAO forum.</li>
<li><strong>2. Community Feedback on Grant Proposals</strong> Every community member is free to share their opinion or ask questions regarding any grant application in the AdvocatesDAO forum.</li>
 <li><strong>3. Community Voting decision:</strong>Community members vote on the application. A minimum of 10 "Yes" votes within 7-14 days is required to move on.</li>
<li><strong>4. Presenting to the Grant Committee:</strong>The presentation, review, and due diligence of the application is carried out during the public segment of the weekly Grant Committee meeting.</li>
<li><strong>5. Off-chain voting:</strong> The Grant Committee oversees the off-chain processes for community grant applications.</li> <li><strong>6. On-Chain Voting:</strong> The grant applicant creates a Funding Proposal in DAOHaus, adhering to the specified format. Upon approval of the proposal, the applicant receives the requested funding on-chain and proceeds with developing their project.</li> 
<li><strong>6. On-Chain Voting:</strong>The grant applicant creates a Funding Proposal in DAOHaus, adhering to the specified format. Upon approval of the proposal, the applicant receives the requested funding on-chain and proceeds with developing their project.</li>
<li><strong>7. Grant Agreement and Payments:</strong>The grant agreement and payments are done after the completion of the grant.</li>  
    </ul> 
    


<h1>Resources</h1>
      <ul className={styles.list}>
      <li><a className={styles.a} href='https://docs.graphadvocates.com/community-grants/applying-for-a-community-grant'>The Graph AdvocatesDAO Grants Hub</a></li>
      <li><a className={styles.a} href='https://forms.clickup.com/37437860/f/13pgd4-3987/1HEIW31922QZ1CRS64'>The Graph AdvocatesDAO Grants Form Application</a> </li>
      <li><a className={styles.a} href='https://docs.graphadvocates.com/community-grants/what-is-a-community-grant'>The Graph Docs - Community Grants</a> </li>
 
    </ul>


     <SideIcons />
     <BackToTop />
    </div>



  );
  }