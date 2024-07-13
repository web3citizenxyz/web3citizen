"use client";
import React from 'react';
import styles from './DaoBasics.module.css';
import SideIcons from '@/components/SideIcons';
import BackToTop from '@/components/BackToTop';






export default function OpPartnerFund() {
  return (
    <div className={styles.articleContainer}>
  
      
      <section className={styles.section}>
        <h2>Optimisim Partner Fund</h2>
      
        <p><strong>Time frame: </strong> Rolling Basis</p>
        <p><strong>Amount:</strong>Negotiated on a case-by-case basis</p>
<p>The Partner Fund’s mission is to grow Optimism’s ecosystem for the benefit of the entire Collective.</p> 
  </section>

 
  <section className={styles.section}>
    
   <h1>Grant Scope</h1>   
   <p>Most projects considered for the Partner Fund are live and looking at deploying and/or scaling on Optimism. The Partner Fund is designed for strategic grants aimed at partners who have already found their product-market fit</p>
   <p>Partner Fund grants are negotiated on a case-by-case basis and support the overarching goal to build a thriving ecosystem for developers. Areas of work include DeFi, NFTs, DAOs, as well as large-scale usage growth for the ecosystem..</p>
   <p><a href='' className={styles.a}>“The Partner Fund may make grants used to provide tooling to the Optimism community, bring applications to OP Mainnet, promote education, experiment with liquidity mining programs, drive consumer usage, and/or support Optimism’s governance system.”</a></p>
 
</section>

<h1>Funding Specifics</h1>

<p>Grants are structured in one of two days.</p>
<ul className={styles.list}>
<li>User incentives: Grants are directly distributed to users of the project on the Optimism ecosystem (e.g., liquidity mining, rewards, etc.)</li>
<li>Project Grant: These grants have a one-year token lockup, after which they may be used to support operational costs.</li>

</ul>




<h1>Grant Process</h1>
<p>Apply <a href='https://forms.monday.com/forms/89675838770f70674de78da3e20b8155?r=use1' className={styles.a}>here.</a>  Partner Fund applications will be reviewed on a rolling basis.</p>




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