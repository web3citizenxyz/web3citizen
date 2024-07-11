"use client";
import React from 'react';
import styles from './DaoBasics.module.css';
import SideIcons from '@/components/SideIcons';
import BackToTop from '@/components/BackToTop';






export default function GraphFundation() {
  return (
    <div className={styles.articleContainer}>
  
      
      <section className={styles.section}>
        <h2>The Graph Foundation Grants</h2>
      
        <p><strong>Timeline: </strong> rolling basis</p>
        <p><strong>Amount:</strong> Varying amounts in GRT</p>
<p>The Graph Foundation Grants Program is dedicated to enhancing the development and adoption of graph protocols, while also incentivizing contributions that leave a lasting impact.

The program prioritizes funding initiatives in four key areas: protocol infrastructure, tooling, dApps and subgraphs, and community building efforts. Over the last three years, The Graph Foundation has successfully approved 140+ grants across 7 waves, disbursing more than $9 million on the grants program.
</p> 
<p>The program operates in waves, which denote the timing of announcements, as applications are accepted and reviewed on a rolling basis.</p>
<p>The Graph Foundation is now welcoming applications for Wave 8.</p>
  </section>

 
    <section className={styles.section}>
     <p className={styles.black}>Grant Scope</p>
<p>The Foundation Grants Program focuses on the following four categories:</p>
   
<ul className={styles.list}>
      <li><strong>Protocol infrastructure:</strong> For projects that improve the quality of service and advance The Graph Network with R&D efforts on smart contracts, infrastructure development and components, network operations, and other core developments.</li>
      <li><strong>Tooling:</strong> Projects falling under this category focus on developing tools that streamline participation in the protocol and facilitate building on The Graph Network. This includes tools that enhance developer experience, expand features, assist users in engaging with the network, and simplify network operations.</li>
      <li><strong>Dapps and Subgraphs:</strong> This category supports projects that create and utilize subgraphs to develop dapps, dashboards, and contribute to the network of open-source APIs serving high-quality data.</li>
      <li><strong>Community Building:</strong> Projects in this category aim to foster growth within The Graph community and promote web3 knowledge through education, content creation, events, developer support, and more.</li>
    </ul> 
    
    
    <h1>Who can apply?</h1>
    <p>Developers, project teams, non-profit organizations, researchers, community builders, designers, writers and academics are all encouraged to apply.
    </p>
     <h1>Funding Specifics</h1>
     <p>Funding amount, timing and the size of funding varies on a case by case basis. It will depend on the project’s scope, deliverables, milestones and overall priority.</p>
</section>

<p className={styles.black}>Grant Process</p>

<p>To apply for a Foundation Grant you must fill out the<a href='https://thegraph.typeform.com/applynow' className={styles.a}>Application Form</a>. The grants will be reviewed and decisions will be communicated.</p>
    


<p>The high-level review process has been outlined on the website as follows:</p>
      <ul className={styles.list}>
      <li><a className={styles.a} href='https://www.notion.so/The-Graph-Foundation-Grants-445138b51ce144689495cb5e37be0ef7?pvs=4'></a>The Graph Foundation Notion Hub</li>
      <li>#foundation-grants on <a className={styles.a} href='https://discord.com/invite/graphprotocol'>The Graph Discord Channel</a> </li>
      
    </ul>


     <SideIcons />
     <BackToTop />
    </div>



  );
  }