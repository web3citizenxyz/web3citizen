"use client";
import React from 'react';
import styles from '../DaoBasics.module.css';
import SideIcons from '@/components/SideIcons';
import BackToTop from '@/components/BackToTop';






export default function Ecosystem() {
  return (
    <div className={styles.articleContainer}>
  
      
      <section className={styles.section}>
        <h2>Ecosystem Support Program</h2>
      
        <p><strong>Timeline: </strong>Rolling Basis</p>
        <p><strong>Grant Amount:</strong>up to $30k for Small Grants and no specific amount for Project Grants.</p>
    <p> The Ethereum Foundation has launched the Ecosystem Support Program (ESP) to encourage and facilitate the development of the Ethereum ecosystem.</p>
    <p>The ESP consists of two grants, one dedicated to smaller projects and another for larger projects, both aimed at promoting growth and innovation within the Ethereum community.</p>
    </section>

    <section className={styles.section}>
     <p className={styles.black}>Grant Scope</p>
     <p>The ESP focuses on work that “strengthens Ethereum's foundations and enables future builders, such as open source tooling, building blocks and libraries, research, community building, educational resources, open standards, infrastructure and protocol improvements.</p>


     <p>The Ecosystem Support Program seek to support the development of initiatives of:</p>

   <ul className={styles.list}>
     <li>Software and protocol developers</li>
     <li>Research</li>
     <li>Community initiatives, education and event sponsorship</li>
   <li>Builder Tools</li>
   <li>Infrastructure
   </li>
   <li>Other grant programs and public goods funding platforms</li>
   </ul>
   <p>Funding is generally directed to supporting builders rather than end users.</p>


        <h1>How to know which grant to apply for?</h1>

        <img src="/images/ecosystem-image.jpg" alt="Ecosystem Image 1" className={styles.benefitsImage} />
       <div>

        <p>Project Grants can have a longer execution timeline, or will require you to make new long-term hires. They also undergo an intensive process of review and often evolve significantly from the initial application in collaboration with the ESP team.</p>
        <p>You can get in contact with the ESP for further guidance on your application.</p>

      <p className={styles.black}>Funding Specifics</p>
      <p>The Ecosystem Support Program can provide payment in ETH, DAI, or fiat currency.</p>
      <p className={styles.black}>Grants requeriments</p> 
      <ul className={styles.list}>
        <li>If approved applicants must complete a KYC process along with the signing of a grant agreement.</li>
        <li>Projects at any point in the development process: just an idea, early stages, proof of concept, or with significant progress already made. However, the ESP does not fund past work.</li>
        <li>Make sure to meet the eligibility criteria for the grant you are applying to.</li>
      </ul>

<p className={styles.black}>Grant Process</p>
<p>The grant processes differ slightly depending on the grant.</p>
<p className={styles.black}>Small Grants</p>

<img src="/images/small-grants.jpg" alt="Ecosystem Image 2" className={styles.benefitsImage} />
    </div>
   
    
    <ol className={styles.list}>
      <li><strong>1. Application:</strong> Fill out the <a href='https://esp.ethereum.foundation/applicants/small-grants' className={styles.a} target='_blank'>form</a>. You will receive a confirmation email within two business days.</li>
      <li><strong>2. Evaluation</strong>The ESP team reviews the submission.</li>
      <li><strong>3. Decision:</strong>You can expect to receive an answer within two weeks after submission.</li>

   <li><strong>4. Activation:</strong>Sign the grant agreement, complete the KYC process, and receive upfront payment of the grant.</li>
   <li><strong>5. Completion</strong>Once you have achieved your goals, publicly share the project results in a report.</li>
    </ol>
      </section>
      <p className={styles.black}>Project Grants</p>
      <img src="/images/projects-grants.jpg" alt="Ecosystem Image 3" className={styles.benefitsImage} />
      <ol className={styles.list}>
      <li><strong>1. Application:</strong> Fill out the <a href='https://esp.ethereum.foundation/applicants/small-grants' className={styles.a} target='_blank'>form</a>. You will receive a confirmation email within two business days.</li>
      <li><strong>2. Evaluation on Refinament</strong>Review of the initiative, scope refinement or proposal adjustments if needed in collaboration with the ESP team.</li>
      <li><strong>3. Decision:</strong>Once the proposal is finalized with the advisors, you will receive a response from the ESP team.</li>

   <li><strong>4. Activation:</strong>Sign the grant agreement, complete the KYC process, and receive upfront payment of the grant. Continuous goal tracking will be conducted in collaboration with an ESP representative.</li>

    </ol>






<section className={styles.section}>
<h1>Resources</h1> 
   <ul className={styles.list}>
    <li> <a className={styles.a} href="https://esp.ethereum.foundation/applicants/office-hours" target="_blank" rel="noopener noreferrer">Office Hours ESP Request - receive feedback and gain a better understanding of the process and program</a> </li>
 <li><a className={styles.a} href="https://esp.ethereum.foundation/applicants/office-hours" target="_blank" rel="noopener noreferrer">ESP Hub</a></li>
</ul>
     </section> 

     <SideIcons />
     <BackToTop />
    </div>



  );
  }