"use client";
import React from 'react';
import styles from '../DaoBasics.module.css';
import SideIcons from '@/components/SideIcons';
import BackToTop from '@/components/BackToTop';






export default function OpPartnerFund() {
  return (
    <div className={styles.articleContainer}>
  
      
      <section className={styles.section}>
        <h2>Optimisim Partner Fund</h2>
      <br></br>
        <img src="/images/partner-grant.svg" alt="OP Partner" className={styles.benefitsImage} />

  </section>
  <br></br>
  <h1 className={styles.subtitle}>What is a Partner Fund grant?</h1>
<p>The Optimism Foundation awards Partner Fund grants to teams working to grow Optimism’s ecosystem for the benefit of the entire Collective. The Partner Fund is designed for strategic grants aimed at partners who have already found their product-market fit. Their scope is broader and amounts are negotiated on a case-by-case basis. </p>
 
 <br></br>

  <section className={styles.section}>
    
   <h1>Scope</h1>   
   <p>Most projects considered for the Partner Fund are live and looking at deploying and/or scaling on Optimism. Areas of work include </p>
   <ul className={styles.list}>
<li>Education and community tooling</li>
<li>DAOs and tooling to support Optimism’s governance system </li>
<li>Projects to drive large-scale usage growth for the ecosystem.</li>
<li>DeFi, NFTs, among other projects.</li>
</ul> 
</section>
<br></br>



<section className={styles.section}>
<h1>Funding</h1>

<p>Grants are structured in one of two days.</p>
<ul className={styles.list}>
<li>User incentives: Grants are directly distributed to users of the project on the Optimism ecosystem (e.g., liquidity mining, rewards, etc.)</li>
<li>Project Grant: These grants have a one-year token lockup, after which they may be used to support operational costs.</li>

</ul>


</section>
<br></br>
<section className={styles.section}>
<h1>Grant Process</h1>
<p>Apply <a href='https://forms.monday.com/forms/89675838770f70674de78da3e20b8155?r=use1' className={styles.a}>here.</a>  Partner Fund applications will be reviewed on a rolling basis. The Foundation may also choose to award a <a href='https://gov.optimism.io/t/introducing-backstop-grants/8031' className={styles.a}>backstop grant</a> instead.</p>


</section>

<h1>Resources</h1>
      <ul className={styles.list}>
      <li><a className={styles.a} href='https://gov.optimism.io/t/partner-fund-overview/5268'>Partner Fund overview</a></li>
      <li><a className={styles.a} href='https://calendar.google.com/calendar/u/0/r?cid=Y19mbm10Z3VoNm5vbzZxZ2JuaTJncGVyaWQ0a0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t'>Optimisim Governance Calendar</a> </li>
      <li><a className={styles.a} href='https://optimismgrants.io/'>Optimisim Grant Changelog</a> </li>
    </ul>


     <SideIcons />
     <BackToTop />
    </div>



  );
  }