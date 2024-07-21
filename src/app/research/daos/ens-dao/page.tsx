"use client";
import React from 'react';
import Link from 'next/link';
import styles from './ArticleLayout.module.css';

const Article = () => {
  return (
      <div className={styles.articleContainer}>
          <div className={styles.menuContainer}>
              <ul className={styles.menu}>
                  <li className={styles.menuItem}><a href="#section1" className={styles.menuLink}>ENS</a></li>
                  <li className={styles.menuItem}><a href="#section2" className={styles.menuLink}></a>ENS Governance</li>
                  <li className={styles.menuItem}><a href="#section3" className={styles.menuLink}>Governance Framework</a></li>
                  <li className={styles.menuItem}><a href="#section4" className={styles.menuLink}>ENS Foundation</a></li>
                  <li className={styles.menuItem}><a href="#section5" className={styles.menuLink}>Working Groups</a></li>
                  <li className={styles.menuItem}><a href="#section6" className={styles.menuLink}>Stewards</a></li>
                  <li className={styles.menuItem}><a href="#section7" className={styles.menuLink}>Governance Proposals</a></li>
                  <li className={styles.menuItem}><a href="#section8" className={styles.menuLink}>Proposal Types</a></li>
                  <li className={styles.menuItem}><a href="#section9" className={styles.menuLink}>Request for Proposals "RFP"</a></li>
                  <li className={styles.menuItem}><a href="#section10" className={styles.menuLink}>Governance Process and Mechanisms</a></li>
                  <li className={styles.menuItem}><a href="#section11" className={styles.menuLink}>Voting Metrics and Insights</a></li>
                  <li className={styles.menuItem}><a href="#section12" className={styles.menuLink}>Voting Process</a></li>
                  <li className={styles.menuItem}><a href="#section14" className={styles.menuLink}>Quorum</a></li>
                  <li className={styles.menuItem}><a href="#section15" className={styles.menuLink}>Contribution Pathways</a></li>
                  <li className={styles.menuItem}><a href="#section16" className={styles.menuLink}>Grants</a></li>

                  <li className={styles.menuItem}><a href="#section13" className={styles.menuLink}>Bug Bounty</a></li>


              </ul>
          </div>
          <div className={styles.contentContainer}>
       <div id="section1" className={styles.section}>
                  <h2 className={styles.sectionTitle}>ENS</h2>
                  <div className={styles.quoteContainer}>
        <p className={styles.quote}>
        <strong>ENS</strong> stands for Ethereum Name Service, a decentralized alternative for domain name service (DNS) built on the Ethereum blockchain.</p>
      </div>
      <p>
      The Ethereum Naming System (ENS) is a blockchain-based naming system that enables you to create domains and link them to your wallet address, making it easier to remember and share. With ENS names, you can use a human-readable name as your digital identity across the internet, including as domain names, NFTs, and usernames. If you're interested in learning more about ENS use cases, you can find more information <Link href='https://basics.ensdao.org/about-ens' className={styles.a} target='_blank'>here</Link>.</p>
      <p>As of now, ENS has over 72,000 monthly active users and <Link href='https://lookerstudio.google.com/u/0/reporting/8785928a-71d5-4b17-9fea-fe1c937b064f/page/p_ovi4hg0opc?s=j1wlK90ZIbA' className={styles.a} target='_blank'>generated a revenue</Link> of 16.4 million in 2023.</p>
      <p>On November 8th, 2021, the <Link href='https://ens.mirror.xyz/5cGl-Y37aTxtokdWk21qlULmE1aSM_NuX9fstbOPoWU' className={styles.a} target='_blank'>$ENS token </Link> was launched by the ENS DAO, transferring governance power to its community. The ENS DAO currently oversees the ENS protocol.</p>
       </div>
      <div id="section2" className={styles.section}>
      <h2 className={styles.sectionSubtitle}>ENS Governance</h2>
    
      </div>
      <div id="section3" className={styles.section}>
      <p className={styles.titleBlack}>Governance Framework</p>
      </div>
      
      <div id="section4" className={styles.section}> 
      <p><strong>ENS Foundation</strong></p>
      <p>The ENS Foundation’s daily operations are overseen by three directors: Nick Johnson, Kevin Gaspar, and Alex Van de Sande. If you want to learn more about the Foundation's role and access their documents, you can find them<Link href='https://basics.ensdao.org/ens-foundation' className={styles.a} target='_blank'>here.</Link></p>
      <img src="/images/ensdao.jpg" alt="ENS dao" className={styles.benefitsImage} />
      </div> 
      <div id="section5" className={styles.section}> 
      <p><strong>Workings Groups</strong></p>
      <p>Each independent working group operates with its own budget and rules. These groups contribute to the growth of the DAO and can be created through the passing of a social proposal.</p>
      <p><Link href='https://basics.ensdao.org/working-groups' className={styles.a} target='_blank'>Three</Link> of the four<Link href='https://docs.ens.domains/v/governance/governance-proposals/term-0/ep4-social-proposal-creation-of-foundational-working-groups-and-working-group-rules' target='_blank' className={styles.a}>foundational working groups</Link> within the DAO:</p>
      <ol>
      <li className={styles.listItem}><strong>Meta-Governance:</strong> providing governance oversight and support of the management and operation of the ENS DAO and working groups.</li>  
      <li className={styles.listItem}><strong>ENS Ecosystem:</strong> continuing development and improvement of the ENS protocol and ecosystem, focusing on all technical matters related to ENS.</li>  
      <li className={styles.listItem}><strong>Public Goods:</strong> amplifying ENS as a public good and funding public goods within the ENS ecosystem, and, more broadly, within web3.</li>  
 
      </ol>
      </div>


     <div id="section6" className={styles.section}>
     <p><strong>Stewards</strong></p>
     <p>Three elected stewards manage each Working Group. They serve for a twelve-month period and manage operations within their Working Group. Individual members are eligible to nominate themselves as a Steward of a working group within the DAO. You can find more about the process of Steward elections <Link href='https://docs.ens.domains/v/governance/governance-proposals/term-0/ep4-social-proposal-creation-of-foundational-working-groups-and-working-group-rules ' target='_blank' className={styles.a}>here.</Link> </p>
     <p>Each working group must appoint a lead Steward within the first five days of a Term. At the start of each term, the Stewards of each working group must nominate an individual who will serve as the secretary of the DAO. You can find more about Lead Stewards and DAO secretaries <Link href='https://docs.ens.domains/v/governance/governance-proposals/term-1/ep12-working-group-rules' className={styles.a} target='_blank'>here.</Link></p>
      </div>

      <div id="section7" className={styles.section}>
     <p className={styles.titleBlack}>Governance Proposals</p>
     <p><strong>Proposal Types</strong></p>
     <p>There are three main types of governance proposals you can make:</p>
     <ul>
     <li className={styles.listItem}><strong>Executable Proposal:</strong> This proposal is for a series of smart contract operations to be executed by accounts that the DAO controls. It can replace the governance contract, transfer tokens from the community treasury, or perform an infinite range of other on-chain actions. These proposals will be kept in the "proposals" mapping in the Governor smart contract.</li>
     <li className={styles.listItem}><strong>Social Proposal:</strong> This proposal asks for the DAO's agreement on something that cannot be enforced on-chain. </li>
     <li className={styles.listItem}><strong>Constitutional Amendment:</strong> This proposal asks the DAO to amend the constitution according to the rules set within the constitution.</li>
     </ul>
     <p>Submission thresholds depend on the proposal type. Executable proposals can be submitted by anyone with over 100K ENS (0.1% of total supply), while social need 10K ENS (0.01% of total supply). If you don't meet this requirement, you can find a delegate with enough delegated ENS to propose on your behalf.</p>
     <img src="/images/ens-2.png" alt="ENS dao" className={styles.benefitsImage} />
     <p><Link href='https://basics.ensdao.org/proposals' target='_blank' className={styles.a}>Source: ENS DAO Basics</Link></p>
      </div>

      <div id="section8" className={styles.section}>
        <p><strong>Request for Proposals "RFP"</strong></p>
        <p>A "Requests for Proposal" (RFPs) is a request from the DAO for contributors to offer to work on its behalf, and receive compensation in return.</p>
        <p><strong>RFPs follow this process</strong></p>
        <ol>
        <li className={styles.listItem}>Write a draft RFP.</li>
        <li className={styles.listItem}>Incorporate feedback from the DAO. </li>
        <li className={styles.listItem}>If the stewards agree to adopt your RFP, they will decide whether it can be paid out of WG funds or needs a DAO-wide vote.</li>
        <li className={styles.listItem}>The submission period begins once the RFP is approved. The RFP author or a WG steward should create a post on the DAO forum for proposals</li>
        <li className={styles.listItem}>Once the submission period has concluded, the RFP manager selects a winning bid. Usually, the manager will be the steward of the working group who has adopted your RFP.</li>
        <li className={styles.listItem}>The winner of the proposal starts work and can request compensation from the RFP manager after meeting specific milestones outlined in their proposal. The manager then disburses the compensation from allocated funds.</li>

        </ol>
      </div>


     <div id="section9" className={styles.section}>
     <h2 className={styles.sectionSubtitle}>Governance Process and Mechanisms</h2>
     </div>
     <div id="section10" className={styles.section}> 
     <p className={styles.titleBlack}>Voting Metrics and Insights</p>
     
    <ul className={styles.orderedList}>
            <li className={styles.listItem}>As of late December 2023, 11 delegates currently hold more than 100K $ENS, making them eligible to submit on-chain proposals. You can refer to the current numbers available here.  </li>
            <li className={styles.listItem}>12K <Link href='https://lookerstudio.google.com/u/0/reporting/8785928a-71d5-4b17-9fea-fe1c937b064f/page/p_wn68062ppc?s=j1wlK90ZIbA' className={styles.a} target='_blank'>total delegates</Link> as of December 2023. </li>
            <li className={styles.listItem}>94% proposal passing rate and 35% average participation rate for on-chain voting.</li>
                </ul> 

                  </div>

     <div id="section11" className={styles.section}> 
     <p className={styles.titleBlack}>Voting Process</p>
     <p>Voting process occurs in different governance environments. Executable proposals are voted on-chain on Tally, while Social Proposals and Working Group elections are voted off-chain using Snapshot.</p>
     <ol className={styles.orderedList}>
            <li className={styles.listItem}><strong>Temperature check:</strong>Post to the workstream’s Temp Check category to get feedback on your idea before creating a formal proposal.</li>
            <li className={styles.listItem}><strong>Draft proposal:</strong> Create it by creating a new post and selecting the appropriate “Draft Proposals” subcategory. Submit it, and solicit feedback.</li>
            <li className={styles.listItem}><strong>Active Proposal:</strong>Ask a moderator to move your mature draft to the Active Proposals category and start a vote.</li>
     </ol>
    </div>
              <div id="section12" className={styles.section}> 
              <p className={styles.titleBlack}>Quorum</p>
              <p>For a vote to pass, a certain percentage of ENS tokens must vote to ensure adequate voter participation. The current quorum requirements are:</p>
              <ul className={styles.orderedList}>
            <li className={styles.listItem}>Executable and Social proposals have a quorum requirement of 1% and require a minimum approval of 50% to pass. </li>
            <li className={styles.listItem}>Constitutional Amendments <Link href='https://snapshot.org/#/ens.eth/proposal/0xd810c4cf2f09737a6f833f1ec51eaa5504cbc0afeeb883a21a7e1c91c8a597e4'className={styles.a} target='_blank'>require</Link> a quorum of 1% and a minimum approval of two thirds.</li>
            </ul>

</div>

<div id="section13" className={styles.section}> 
<h2 className={styles.sectionSubtitle}>Contribution Pathways</h2> 
<p>ENS holds two avalilable pathways to contribute: grants and the Bug Bounty program. Beyond them, you can get involved in events and discussions - more information on them in the DAO’s forum.</p>

</div>

<div id="section14" className={styles.section}> 
<p><strong>Grants</strong></p>
<p>The DAO funds initiatives through two types of grants: small and large grants.</p>
<p>Small grants are aimed at enhancing the ENS ecosystem and supporting public goods within the broader Ethereum or Web3 space. Voting takes place off-chain using Snapshot. The latest Small Grants Round ended on October 31, distributing 27 ETH among 20 projects. You can read more on this round of grants in the<Link href='https://discuss.ens.domains/t/ens-dao-newsletter-47-11-07-23/18099#community-updates-11' className={styles.a} target='_blank'>ENS newsletter</Link> and all previous rounds <Link href='https://ensgrants.xyz/rounds' className={styles.a} target='_blank'>here.</Link></p>
<p>The Public Goods Working Group funds public goods through the Large Grants program. This program aims to support projects with exceptional usefulness or a proven record of impact on the Web 3 space. Submissions should fall within the categories of infrastructure, tools, or education. Applicants can request a minimum of 12k and up to 50k USDC.
There are rolling deadlines for this grant, but the final submission date is November 30th. Check the submission requirements and deadlines <Link href='https://discuss.ens.domains/t/public-goods-large-grants-q4-2023/17989?u=coltron.eth' target='_blank' className={styles.a}> here.</Link></p>
</div>
<div id="section15" className={styles.section}> 
<p><strong>Bug Bounty</strong></p>
<p>Anyone can participate in the Bug Bounty program by actively searching and identifying vulnerabilities in all non-test smart contracts in <Link href='https://github.com/ensdomains/ens-contracts' target='_blank' className={styles.a}>ENS contracts.</Link></p>
<p>Rewards for bug discoveries are determined based on severity, taking into account the impact and likelihood of the issue. To qualify for a prize, your discovered bug must meet specific <Link href='https://docs.ens.domains/bug-bounty-program#rules-and-rewards ' target='_blank' className={styles.a}>criteria.</Link> Submit bugs via email or Keybase. Learn about the Bug Bounty program <Link href='https://docs.ens.domains/bug-bounty-program' className={styles.a} target='_blank'>here</Link>.</p>
<p>Get involved in ENS! Stay up to date on events, upcoming grant rounds, and all things ENS through the <Link href='https://discuss.ens.domains/c/dao-wide/newsletter/72'target='_blank' className={styles.a}>ENS Newsletter</Link>, <Link href='https://discuss.ens.domains/' className={styles.a} target='_blank'> Forum</Link>, <Link href='https://chat.ens.domains/' target='_blank' className={styles.a}>Discord</Link>, <Link href='https://twitter.com/ENS_DAO' target='_blank' className={styles.a}> ENS DAO twitter</Link>.</p>
</div>
          </div>
      </div>
  );
};

export default Article;