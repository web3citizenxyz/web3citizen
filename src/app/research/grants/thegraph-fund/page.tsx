"use client";
import React from 'react';
import styles from '../DaoBasics.module.css';
import SideIcons from '@/components/SideIcons';
import BackToTop from '@/components/BackToTop';






export default function GraphFundation() {
  return (
    <div className={styles.articleContainer}>
  
      
      <section className={styles.section}>
        <h2>The Graph Grants Program</h2>
        <br></br>
        <img src="/images/graph-grants.svg" alt="Graph" className={styles.benefitsImage} />
        <br></br>
<h1 className={styles.subtitle}>What is the The Graph Grants Program?</h1>
<p>The Graph Foundation Grants Program fosters the development and adoption of The Graph protocol, while also incentivizing contributions that leave a lasting impact.</p> 
<p>Over the last three years, The Graph Foundation has successfully approved 140+ grants distributing more than $9 million across different waves. Grants are approved in waves, but applications are accepted and reviewed on a rolling basis.</p>
  </section>
<br></br>

 <section className={styles.section}>
 <h1>Scope</h1>
<p>The Foundation Grants Program focuses on the following four categories:</p>
   
<ul className={styles.list}>
      <li><strong>Protocol infrastructure:</strong> For projects that improve the quality of service and advance The Graph Network with R&D efforts on smart contracts, infrastructure development and components, network operations, and other core developments.</li>
      <li><strong>Tooling:</strong> Projects falling under this category focus on developing tools that streamline participation in the protocol and facilitate building on The Graph Network. This includes tools that enhance developer experience, expand features, assist users in engaging with the network, and simplify network operations.</li>
      <li><strong>Data Services</strong> Projects that create and use subgraphs and Substreams to build new data services, apps, and dashboards that contribute to the network of open source data.</li>
      <li><strong>Community Building:</strong> Projects in this category aim to foster growth within The Graph community and promote web3 knowledge through education, content creation, events, developer support, and more.</li>
    </ul> 
    
    
<br></br>
<h1>Funding</h1>
<p>Funding amount, timing and the size of funding varies on a case-by-case basis. It will depend on the project’s scope, deliverables, milestones and overall priority.</p>

<br></br>
    <h1>Who can apply?</h1>
    <p>Developers, project teams, non-profit organizations, researchers, community builders, designers, writers and academics are all encouraged to apply.
    </p>
</section>



<p className={styles.black}>Grant Process</p>

<p>To apply for a Foundation Grant you must fill out the<a href='https://thegraph.typeform.com/applynow' className={styles.a}> Application Form</a></p>
    


<p>The high-level review process has been outlined on the website as follows:</p>
      <ul className={styles.list}>
      <li>#foundation-grants on <a className={styles.a} href='https://discord.com/invite/graphprotocol'>The Graph Discord Channel</a> </li>
      
    </ul>


     <SideIcons />
     <BackToTop />
    </div>



  );
  }