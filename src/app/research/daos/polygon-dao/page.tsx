"use client";
import React from 'react';
import Link from 'next/link';
import styles from './ArticleLayout.module.css';

const Article = () => {
  return (
      <div className={styles.articleContainer}>
          <div className={styles.menuContainer}>
              <ul className={styles.menu}>
                  <li className={styles.menuItem}><a href="#section1" className={styles.menuLink}>Polygon 2.0</a></li>
                  <li className={styles.menuItem}><a href="#section2" className={styles.menuLink}>Polygon 2.0 Governance</a></li>
                  <li className={styles.menuItem}><a href="#section3" className={styles.menuLink}>Governance Framework</a></li>
                  <li className={styles.menuItem}><a href="#section4" className={styles.menuLink}>I Protocol Governance</a></li>
                  <li className={styles.menuItem}><a href="#section5" className={styles.menuLink}>II System Smart Contracts Governance</a></li>
                  <li className={styles.menuItem}><a href="#section6" className={styles.menuLink}>III Community Treasury Governance</a></li>
                  <li className={styles.menuItem}><a href="#section7" className={styles.menuLink}>Governance Proposals</a></li>
                  <li className={styles.menuItem}><a href="#section8" className={styles.menuLink}>Governance Process and Mechanisms</a></li>
                  <li className={styles.menuItem}><a href="#section9" className={styles.menuLink}>Delays and Waiting Periods</a></li>
                  <li className={styles.menuItem}><a href="#section10" className={styles.menuLink}>Contribution Pathways</a></li>
              
              </ul>
          </div>
          <div className={styles.contentContainer}>
          <div id="section1" className={styles.section}>
                  <h2 className={styles.sectionTitle}>Polygon 2.0</h2>
                  <div className={styles.quoteContainer}>
        <p className={styles.quote}>
        Polygon is one of the largest players in the web3 ecosystem. Known initially as Matic, Polygon built the Matic Network and later expanded to scaling and infrastructure solutions
        </p>
      </div>
      <p>
      Polygon's governance system is <Link href='https://polygon.technology/blog/polygon-bolsters-validator-governance-with-snapshot-voting' className={styles.a} target='_blank'>centralized</Link> but is building a gradual roadmap into decentralization in line with the upgrade to Polygon 2.0.
   </p>
   <p>Polygon 2.0 is a series of proposed upgrades to modify Polygon's design, unifying all protocols with ZK technology into continuous, unbounded blockspace. With Polygon 2.0, the POS chain will convert into Validium, where the consensus layer settles into Ethereum, and the data layer settles elsewhere. This new phase will unify liquidity and include new tokenomics and a change in governance.</p>
   <p>Since January 2023 Polygon has continued to develop its governance design with two entities:</p>
   <ul className={styles.orderedList}>
            <li className={styles.listItem}><strong>Polygon Fundation</strong>The founders of Polygon created the foundation to support the platform, focusing on research, development, and education.</li>
            <li className={styles.listItem}><strong>Polygon Labs</strong>Polygon remains the name of the protocol, while Polygon Labs is a company that participates in the development and growth of Polygon.</li>
    </ul> 
  <p>Implementation of the next phase is expected by <Link href='https://open.spotify.com/episode/5sColPbkm0kw5gwh10RItx?si=19951db596484218' target='_blank' className={styles.a}>the end of the year</Link>.</p>


         </div>


              <div id="section2" className={styles.section}>
                  <h2 className={styles.sectionSubtitle}>Governance Framework 2.0 </h2>
          
             <p className={styles.paragraph}>Polygon's new governance, facilitating community ownership, will take form over the coming months.</p>
             <p className={styles.paragraph}>Polygon's new token is expected to support many utilities in the multi-chain era. MATIC will upgrade into the POL token and have further functions. As of October 25, 2023, the POL token upgrade is live on Ethereum Mainnet.<Link href='https://twitter.com/0xPolygonLabs/status/1717134336104038580' className={styles.a} target='_blank'>According to the Protocol</Link>, POL holders can validate multiple chains and perform multiple on-chain roles, opening many pathways to contribution.</p  >
             <p>Polygon's governance design will be developed with <Link href='https://polygon.technology/governance-pillars' target='_blank' className={styles.a}>three key pillars</Link>in mind:</p>
              </div>
           
              <div id="section3" className={styles.section}>
                  <p className={styles.titleBlack}>I. Protocol Governance</p>
              <p>This pillar facilitates decentralized maintenance and development of the Polygon tech stack.
                  Protocol Governance follows the Polygon Improvement Proposal (PIP) framework and provides an open platform for proposing protocol upgrades. The framework, already operational on the PoS chain, will expand to cover the entire permissionless stack, allowing the community to participate in research and propose upgrades.</p>
               </div>

              <div id="section4" className={styles.section}> 
                  <p className={styles.titleBlack}>II. System Smart Contracts Governance</p>
                  <p className={styles.paragraph}>Upgrading protocol components implemented as smart contracts requires an additional governance layer.   </p>
                  <p>The Polygon team has proposed the establishment of the Ecosystem Council - a 12-member governance body responsible for upgrading system smart contracts. This council will consist of members from diverse backgrounds, ensuring balanced discussions and efficient decision-making.</p>
                  <p>To promote transparency and accountability, the team is also working on <Link href='https://forum.polygon.technology/t/the-second-pillar-system-smart-contracts-governance/12151' className={styles.a} target='_blank'>launching a transparency dashboard</Link> that will provide a record of every on-chain action taken by the Ecosystem Council.</p>
            </div>

            <div id="section5" className={styles.section}> 
            <p className={styles.titleBlack}>III. Community Treasury Governance</p>
            <p>This pillar aims to create a self-sustaining Community Treasury to provide financial support for the development of the ecosystem and funding public goods. The Treasury will provide funding for programs that support ecosystem projects.</p>
            <p>A Community Treasury Board will oversee the support provided to the ecosystem and fund various projects that drive growth. Initially, the Ecosystem Council will manage the on-chain fund distribution, with a long-term goal of transitioning to community-led decision-making and innovative governance models.</p>
             </div>


           <div id="section6" className={styles.section}> 
           <p className={styles.titleBlack}>Governance Proposals</p>
           <p>A Polygon Improvement Proposal (PIP) proves information to the Polygon community, or describes a new feature for Polygon or its processes or environment. </p>
           <p>PIPs can be proposed by anyone on four types.</p>
           <ul>
            <li><strong>Core:</strong> Improvements or relevant changes to the core components of the network, such as Heimdall and Bor.</li>
            <li><strong>Contracts:</strong> Improvements on core L1 contracts that are deployed on Ethereum.</li>
            <li><strong>Interface:</strong> Improvements around client API/RPC specifications and standards, and also certain language-level standards. An interface PIP doesn’t require on-chain consensus</li>
            <li><strong>Informational:</strong> Recommendations or thoughts on an issue presented to the community.</li>
           </ul>

           </div>
          <div id="section7" className={styles.section}> 
<p className={styles.titleBlack}>Governance Process and Mechanisms</p> 
<p>Polygon PIPs will undergo the following process:</p>
<img src="/images/polygon-process.png" alt="Polygon Process" className={styles.benefitsImage} /> 
<p>It is not yet clear how the governance process will apply for each of the governance framework’s pillars. However, with $POL and its new tokenomics, more decision-making power is expected to be delegated to token holders in the ecosystem </p>
</div>
<div id="section8" className={styles.section}> 
<p className={styles.titleBlack}>Contribution Pathways</p>
<p>Polygon Village contributed to and initiated Polygon DAO's decision-making and community and ecosystem growth (grants, etc). With the ongoing development of Polygon 2.0, how incentives will work is still being determined.</p> 
<p>However, new ways to contribute will stem from Polygon 2.0.:</p>
<ul>
  <li>Validators can validate multiple chains, i.e., as many chains as they want. Every chain can offer various roles (and corresponding rewards) to validators.</li>
  <li>Local data availability provider.</li>
  <li>Provers can stake POL tokens.</li>
  <li>Community is going to be the token ownership and governance.</li>

</ul>
<p>Community members can participate in <Link href='https://forum.polygon.technology/t/nominations-for-the-community-treasury-board/12545' className={styles.a} target='_blank'>nominations</Link> for the Community Treasury Board, contribute to Polygon's Wiki, provide feedback on the <Link href='https://forum.polygon.technology/t/the-second-pillar-system-smart-contracts-governance/12151' target='_blank' className={styles.a}>proposed voting escrow system</Link>, and discuss in the <Link href='https://forum.polygon.technology/' className={styles.a} target='_blank'>Governance Forum</Link>.</p>
</div>
          </div>
      </div>
  );
};

export default Article;