"use client";
import React from 'react';
import styles from '../DaoBasics.module.css';
import SideIcons from '@/components/SideIcons';
import BackToTop from '@/components/BackToTop';






export default function Ens() {
  return (
    <div className={styles.articleContainer}>
  
      
      <section className={styles.section}>
        <h2>ENS Small Grants</h2>
        <p className={styles.black}>ENS Public Goods closed April 4th</p>

        <p>ENS Small Grants are ENS DAO’s grant program that allows the community to vote on projects to receive funding sponsored by the Public Goods and Ecosystem Working Groups.</p>
 <p>The program has awarded 130+ ETH to various projects across 11 rounds.</p>
 <p>Each round of ENS Small Grants awards 10 projects in two categories: public goods and ecosystem.</p>
  </section>

 
    <section className={styles.section}>
   <h1>Public Goods</h1> 
<p><strong>Grant amount:</strong> 10 projects receive funding. The total grant pool is 7.5 ETH:</p>
   
<ul className={styles.list}>
      <li>1. First Place: 3 ETH</li>
      <li>2. Second Place: 2 ETH</li>
      <li>3. Third Place: 1 ETH</li>
      <li>4. Fourth to Tenth Place: 0.25 ETH</li>

          </ul> 
    
   
   
   
    <h1>Scope</h1>
    <p>Projects may request grants within two possible tiers regardless of the grant category.</p>
    <ul className={styles.list}>
      <li>Projects eligible have a broader scope that benefits the entire Ethereum or Web3 space. </li>
      <li>Projects submitted should not be ENS-specific but may include ENS functionality.</li>

    </ul> 

</section>

<h1>Requirements</h1>
<p>The following apply to both, Ecosystem and Public Goods:</p>
<ul className={styles.list}>
      <li>Projects must meet the scope of their category. </li>
      <li>A project can be submitted in multiple rounds, but it cannot be submitted in two rounds that occur simultaneously.</li>

    </ul>


<h1>Grant process</h1>
<p className={styles.black}>Aplicattion</p>
<p>1. To submit your project, you need to connect your wallet to ensgrants.xyz. There is no specific proposal template that you need to follow.</p>
<p className={styles.black}>Review</p>
<ul className={styles.list}>
      <li>1. Submissions are signed and stored in an off-chain database and later uploaded to Arweave. </li>
      <li>2. Voting takes place on either <a href='https://snapshot.org/#/small-grants.eth' className={styles.a}>Snapshot</a> or ensgrants.xyz. To participate in voting, one must hold a <a href='https://opensea.io/assets/optimism/0xfb03372a30e173a8998f732ddfea0138144b468e/1' className={styles.a}>“Voter Card,”</a> an NFT non-transferable card. One card equals one vote. 
The round being conducted from March 29th to April 4th will use the ENS token as the mechanism. Voting Begins Friday, April 5th until Thursday, April 11th.</li>
<li>3. After the voting period ends, the top 10 projects with the most votes are selected, and funds are allocated.</li>
    </ul>
    
  
  

    <h1>Resources</h1>
      <ul className={styles.list}>
     <li><a className={styles.a} href='https://www.notion.so/ENS-Small-Grants-cba1973f36ef43c1b9d35f8f2db420a2?pvs=4'>ENS Small Grants Website</a></li>
   <li><a className={styles.a} href='https://ensgrants.xyz/faq'>Small Grant FAQ</a></li>
   <li><a className={styles.a} href='https://discuss.ens.domains/'>ENS Forum</a></li>
 
   </ul> 

     <SideIcons />
     <BackToTop />
    </div>



  );
  }