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
      <br></br>
        <img src="/images/Ens-grants.svg" alt="Ens" className={styles.benefitsImage} /> 

      <br></br>
      <br></br>
        <h1>What are Small Grants?</h1>
        <p>Small Grants are ENS DAO’s grant program that allows the ENS community to vote on projects to receive funding, sponsored by the Public Goods and Ecosystem Working Groups. Rounds are intended to run once per quarter.</p>
 <p>Projects can apply for two categories: public goods and ecosystem. Each category awards 10 projects. The program has awarded 130+ ETH to various projects across 10+ rounds.</p>
  </section>

 <br></br>


    <section className={styles.section}>
   <h1>Public Goods</h1> 
   <p>Public Goods rounds are focused on projects that benefit the entire Ethereum or Web3 space. Grant pool amount varies across rounds with 10 projects receiving funding each round. </p>
<p>For the latest round the total grant pool was 7.5 ETH:
</p>
   
<ul className={styles.list}>
      <p>1. First Place: 3 ETH</p>
      <p>2. Second Place: 2 ETH</p>
      <p>3. Third Place: 1 ETH</p>
      <p>4. Fourth to Tenth Place: 0.25 ETH</p>

          </ul> 
    
   </section>
 <br></br>
   <section className={styles.section}>
    <h1>Scope</h1>
    <ul className={styles.list}>
      <li>Projects must benefit Ethereum or Web3 space.</li>
      <li>Projects should not be ENS-specific but may include ENS functionality.</li>

    </ul> 

</section>

<br></br>

<section className={styles.section}>
<h1>Ecosystem</h1>
<p>Ecosystem rounds are focused on the ENS ecosystem. Grant pool amounts vary across rounds with 10 projects receiving funding each round.<a href='' target='_blank' className={styles.a}>Check rounds</a></p>
<br></br>
</section>


<section className={styles.section}>
<h1>Requirements</h1>

<ul className={styles.list}>
      <li>Projects must meet the scope of their category. </li>
      <li>A project can be submitted in multiple rounds, but it cannot be submitted in two rounds that occur simultaneously.</li>

    </ul>
</section>

<br></br>

<section className={styles.section}>
<h1>Grant process</h1>


<h1 className={styles.subtitle}>Application</h1>
<p>1. To submit your project, you need to connect your wallet to <a href='https://ensgrants.xyz/' target='_blank' className={styles.a}>ensgrants.xyz</a>. There is no specific proposal template that you need to follow.</p>


<h1 className={styles.subtitle}>Review</h1>
<ul className={styles.list}>
      <p>1. Submissions are signed and stored in an off-chain database and later uploaded to Arweave. </p>
      <p>2. Voting takes place on either <a href='https://snapshot.org/#/small-grants.eth' className={styles.a}>Snapshot</a> or ensgrants.xyz. To participate in voting, one must hold a <a href='https://opensea.io/assets/optimism/0xfb03372a30e173a8998f732ddfea0138144b468e/1' className={styles.a}>“Voter Card,”</a> an NFT non-transferable card. One card equals one vote. 
The round being conducted from March 29th to April 4th will use the ENS token as the mechanism. Voting Begins Friday, April 5th until Thursday, April 11th.</p>
<p>3. After the voting period ends, the top 10 projects with the most votes are selected, and funds are allocated.</p>
    </ul>
    
  
  </section>
<br></br>
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