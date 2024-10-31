"use client";
import React from 'react';
import styles from '../ArticleLayout.module.css';
import Link from 'next/link';
const Article = () => {
  return (
      <div className={styles.articleContainer}>
          <div className={styles.menuContainer}>
              <ul className={styles.menu}>
                  <li className={styles.menuItem}><a href="#section1" className={styles.menuLink}>The Graph</a></li>
                  <li className={styles.menuItem}><a href="#section2" className={styles.menuLink}>The Graph Ecosystem</a></li>
                  <li className={styles.menuItem}><a href="#section3" className={styles.menuLink}>Governance</a></li>
                  <li className={styles.menuItem}><a href="#section4" className={styles.menuLink}>Governance Framework</a></li>
                  <li className={styles.menuItem}><a href="#section5" className={styles.menuLink}>The Graph Council</a></li>
                  <li className={styles.menuItem}><a href="#section6" className={styles.menuLink}>The Graph Foundation</a></li>
                  <li className={styles.menuItem}><a href="#section7" className={styles.menuLink}>Technical Advisory Board</a></li>
                  <li className={styles.menuItem}><a href="#section8" className={styles.menuLink}>DAOs within The Graph</a></li>
                  <li className={styles.menuItem}><a href="#section9" className={styles.menuLink}>Advocates DAO</a></li>
                  <li className={styles.menuItem}><a href="#section10" className={styles.menuLink}>Builders DAO</a></li>
                  <li className={styles.menuItem}><a href="#section11" className={styles.menuLink}>Governance Proposals</a></li>
                  <li className={styles.menuItem}><a href="#section12" className={styles.menuLink}>The Graph Improvement Proposal (GIP)</a></li>
                  <li className={styles.menuItem}><a href="#section13" className={styles.menuLink}>Advocates DAO proposals</a></li>
                  <li className={styles.menuItem}><a href="#section14" className={styles.menuLink}>Governance Process and Mechanisms</a></li>
                  <li className={styles.menuItem}><a href="#section15" className={styles.menuLink}>Proposal Process for Protocol Upgrades</a></li>
                  <li className={styles.menuItem}><a href="#section16" className={styles.menuLink}>Advocates DAO proposals process</a></li>
                  <li className={styles.menuItem}><a href="#section17" className={styles.menuLink}>Contribution Pathways</a></li>
                  <li className={styles.menuItem}><a href="#section18" className={styles.menuLink}>Core Developers Teams</a></li>
                  <li className={styles.menuItem}><a href="#section19" className={styles.menuLink}>Network Participants</a></li>
                  <li className={styles.menuItem}><a href="#section20" className={styles.menuLink}>Community Grants</a></li>




            
            
             </ul>
          </div>
          <div className={styles.contentContainer}>
              <div id="section1" className={styles.section}>
                  <h2 className={styles.sectionTitle}>The Graph</h2>
                  <div className={styles.quoteContainer}>
        <p className={styles.quote}>
        <strong>The Graph</strong> is an indexing protocol for public networks and blockchain data. It can be used to build and publish open APIs (subgraphs) and power protocol interfaces.  
        </p>
      </div>
      <p>  <p>
        It's especially useful for Web 3 protocols, as it allows for easy and efficient querying large amounts of data without relying on a centralized service provider. Many protocols, including Aave and Uniswap, currently utilize subgraphs through The Graph.</p></p>
              </div>

              <div id="section2" className={styles.section}>
                  <h2 className={styles.sectionSubtitle}>The Graph Ecosystem</h2>
                  <p className={styles.paragraph}>There is no ‘central’ DAO, however there is an ecosystem that allows the protocol to operate in a decentralized manner. The ecosystem is made up by Network Participants, core developer teams, The Graph Council and includes two DAOs.</p>
                  <img src="/images/graph-ecosystem.avif" alt="The Graph" className={styles.benefitsImage} />
              </div>
           
              <div id="section3" className={styles.section}>
                  <h2 className={styles.sectionSubtitle}>Governance</h2>
                  </div>
                  <div id="section4" className={styles.section}> 
                  <p className={styles.titleBlack}>Governance Framework </p>
                  <img src="/images/ecosystem.avif" alt="The Graph" className={styles.benefitsImage} /> 
                  </div>
                  <div id="section5" className={styles.section}> 
                  <p className={styles.titleBlack}>The Graph Council</p>
                  <p>The Council is the <strong> primary governance body</strong> of The Graph Network. It comprises ten members representing the interests of the five stakeholder groups of The Graph Ecosystem.</p>
                  <p>The Graph Council oversees:</p>
                  <ol className={styles.orderedList}>
            <li className={styles.listItem}><strong>The Graph Foundation Operations</strong></li>
            <li className={styles.listItem}><strong>Grants and Ecosystem Funding</strong></li>
            <li className={styles.listItem}><strong>Protocol Upgrades</strong></li>
            <li className={styles.listItem}><strong>Protocol Parameterization</strong></li>
            <li className={styles.listItem}><strong>Emergency Protocol Operations</strong></li>
            </ol>
             <p>The Graph Council is responsible for managing the treasury, providing funds to The Graph Foundation, funding programs, and ensuring that proposals align with the protocol's vision and main contributors.</p>
            <p>The Council votes and makes decisions via a 6-of-10 multisig.</p>
              </div>
              <div id="section6" className={styles.section}> 
              <p className={styles.titleBlack}>The Graph Foundation</p>
              <p>The foundation focuses on uniting all the fundamentals that allow the ecosystem to continue to operate.</p>
              <p>Key responsibilities incluide:</p>
              <ul className={styles.orderedList}>
            <li className={styles.listItem}>Distributing grants and ecosystem funding.</li>
            <li className={styles.listItem}>Coordinating technical governance processes.</li>
            <li className={styles.listItem}>Educating members and participating in The Graph's community-building initiatives.</li>
           
            </ul> 
            <p>The Graph Foundation is financially accountable to The Graph Council.</p>
              </div>
              <div id="section7" className={styles.section}> 
              <p className={styles.titleBlack}>Technical Advisory Board</p>
              <p>The Graph Council has recently launched the Technical Advisory Board (TAB) to support core contributors in accelerating research and development efforts related to The Graph. The TAB is intended to enhance the review process for Governance Improvement Proposals (GIPs) and software upgrades, increasing community and council confidence in these proposals.</p>
              <p>Its primary responsibilities include:</p>
              <ul>
              <li className={styles.listItem}>Reviewing proposals and technical plans.</li>
            <li className={styles.listItem}>Supporting the Research & Development process.</li> 
            <li className={styles.listItem}>Answering technical inquiries.</li>
            <li className={styles.listItem}>Assessing and awarding grants together with the Foundation.</li>
            <li className={styles.listItem}>Ensuring the security and completion of transactions.</li>
       
              </ul>
              <p>The selection process of its five members is still ongoing.</p>

              </div>

              <div id="section8" className={styles.section}> 
              <h1 className={styles.sectionSubtitle}>DAOs within The Graph</h1>
              <p>The Graph has two DAOs within its ecosystem.</p>
              </div>
              <div id="section9" className={styles.section}> 
              <p className={styles.titleBlack}>Advocates DAO</p> 
              <p ><strong>This DAO oversees membership and contributions of the Advocates Program and Community Grants. Its mission is to drive greater participation in building a decentralized Web 3 and grow The Graph ecosystem.</strong></p>
              <p>Governance within the DAO uses DAO Haus which uses the open-source code of Moloch. It has 3 committees operating within it, diverse roles within them and DAO members who participate in the Advocates Program and the Community Grants.</p>
              <p><strong>The Ops Committee </strong></p>
              <p>The Committee oversees and enhances the efficiency of DAO operations. It's an opportunity for those interested in shaping and improving the Advocates DAO's operations, potentially setting standards for the wider Web 3 ecosystem.</p>
            
            
              <ul>
              <li className={styles.listItem}><strong>Advocates Program</strong></li>  
              </ul>
              <p>The Graph Advocates is a community-led and community-driven initiative where members can extend the Graph ecosystem by creating events, educational resources, and build The Graph’s community around the world.</p>
             <p>Once you pass the application process, advocates can fulfill the following roles: Event Evangelist, content creator, text translator, community care, technical teacher and Web 3 Welcomer. Each Advocate role contributes to the growth and success of The Graph by fulfilling specific responsibilities aligned with their interests and abilities.</p>
             <p><strong>Advocate Committee</strong></p>
             <p>The Committee consists of DAO members who oversee the Advocates Program end-to-end.</p>
         
              <ul>
              <li className={styles.listItem}><strong>Community Grants</strong></li>  
              </ul>
              <p>Community Grants are available for various initiatives to support growth and engagement within The Graph ecosystem. These grants are intended for participants in the network, such as Indexers, Delegators, Curators, Subgraph Developers, or subgraph users. Initiatives may include programs for education, podcasts, and community tooling.</p>
             <p><strong>The Grant Committee</strong></p>
             <p>Members oversee the review and due diligence process, and the off-chain voting process for community grant proposals.</p>
             <p>Learn more about Advocates DAO <Link href='https://thegraph.com/blog/graph-advocates/' target='_blank' className={styles.a} >here</Link>  and join their server <Link href='https://discord.gg/EhEQwj7H8f' target='_blank' className={styles.a}>here.</Link></p>
              </div>

            <div id="section10" className={styles.section}>
                <h1 className={styles.sectionSubtitle}>Builders DAO</h1>
                <p>Recently a group of developers re-launched the Builders DAO. Members have a proven track record of building subgraphs for various smart contracts.</p>
                <p><strong>The Graph BuildersDAO works with a Bounty System - this means that any member in our ecosystem has the chance to build and earn. All members are vetted on their skills and assigned unique tokens, which give them access to different levels of bounties.</strong></p>
                <p>Learn more <Link href='https://www.buildersdao.tech/' target='blank' className={styles.a}>here</Link> and join their server <Link href='https://discord.gg/gu4X3WkJ' className={styles.a} target='_blank'>here.</Link></p>
                <img src="/images/graph-builders.jpg" alt="The Graph Builders" className={styles.benefitsImage} />
          </div>
          <div id="section11" className={styles.section}>  
          <h1 className={styles.sectionSubtitle}>Governance Proposals</h1>
          </div>
          <div id="section12" className={styles.section}> 
          <p><strong>The Graph Improvement Proposal (GIP) </strong></p>
          <p>Not all GIPs need to move through the GIP process. GIPs labeled with a ‘Protocol Gov’ tag follow the structured Protocol Governance process because they enact changes to the protocol and smart contracts. GIPs without such a tag may be released by developers outside of the Governance process (changes to the Explorer UI, integrating with another blockchain, etc.).</p>
          </div>  
          <div id="section13" className={styles.section}> 
          <p><strong>Advocates DAO proposals</strong></p>
          <p>The Graph AdvocatesDAO uses the following on-chain proposals on the DAOHaus platform passing through simple majority.</p>
        <ul>
        <li className={styles.listItem}><strong>Funding Proposal:</strong> Anyone can create these type of proposals. They transfer funds from for various purposes, including community grants, minions funding for DAO functionality, and DAO-related expenses</li> 
        <li className={styles.listItem}><strong>Guild Kicks</strong> Proposals to remove a member from the Graph AdvocatesDAO for valid reasons, such as a violation of the Code of Conduct or extended absence.</li>  
        <li className={styles.listItem}><strong>DAO Membership Proposal</strong> Advocates can join the DAO by creating this type of proposal to get more involved.</li>  
        <li className={styles.listItem}><strong>Disperse Tokens</strong> This proposal disburses compensation for individual contributions to DAO committees, following established funding rules.</li>  
        <li className={styles.listItem}><strong>Voting Shares Request</strong> Allows DAO members to request additional voting shares during specified windows.</li>   
        <li className={styles.listItem}><strong>Signal Proposals:</strong> Used to share information or "signal" outcomes for non-financial proposals. Signal Proposals do not trigger on-chain events but provide a record of decisions.</li>  
        </ul>
          </div>

 .    <div id="section14" className={styles.section}> 
      <h1 className={styles.sectionSubtitle}>Governance Process and Mechanisms</h1> 
      </div>
      <div id="section15" className={styles.section}>  
      <p><strong>Proposal Process for Protocol Upgrades</strong></p>
      <p>The protocol upgrade process is divided into three components to best streamline community feedback and proposal specification:</p>
      <ol>
      <li className={styles.listItem}>Graph Improvement Proposals (GIP) - Describes improvements to the protocol rules, interfaces, software functionality, protocol charters, protocol parameters, and processes.</li>
      <li className={styles.listItem}>Graph Request for Proposals (GRP) - Formalizes a problem or opportunity for the protocol to address without putting forth a specific solution.</li>
      <li className={styles.listItem}>Graph Request for Comment (GRC) - Specifies an application-level community standard, a common way of designing subgraphs for specific use cases or to support better composability between applications.</li>
      </ol>

      <img src="/images/community.jpg" alt="Community Decisions" className={styles.benefitsImage} />

      <p>The GIP Process is the suggested workflow for improvements to The Graph protocol, subgraphs and application standards that The Graph Council can use to support decision making. The entire workflow is hosted on Radicle where each proposal is a repo that goes through each phase as it becomes more refined. GIP supporters should share ideas on The Graph Forum, discuss, and solicit feedback from the community and use tools like Snapshot Voting to gauge sentiment. </p>
      <img src="/images/process-gov.png" alt="Governance Process" className={styles.benefitsImage} /> 
      <p><Link href='https://thegraph.academy/ecosystem/voting-power-on-snapshot/' target='_blank' className={styles.a}>Community support </Link> is important and then once GIPs reach the candidate stage, The Graph Council may choose to vote on inclusion of the GIP into the protocol.</p>
     
      </div>
      <div id="section16" className={styles.section}>   
      <p><strong>Advocates DAO proposal process </strong></p> 
      <p>The DAO undergoes voting following a specific cadence. As described <Link href='https://drive.google.com/file/d/1CEO3hurmAhOIHvvGo9SAtiy31NyFW4n7/view' className={styles.a} target='_blank'>in the DAO’s Charter</Link>:</p>
      <img src="/images/tabla-the-graph.png" alt="Table" className={styles.benefitsImage} />
      <p>Voting follows a 10 days period and those proposals that obtained a simple majority are approved after a 4 day-period</p>
      </div>
    <div id="section17" className={styles.section}>    
    <h1 className={styles.sectionSubtitle}>Contribution Pathways</h1>  
    <p>The Graph has various ways to contribute within its ecosystem.</p>
   <p>These include contributing to Core Developer Teams on their specific missions, becoming a Network Participant, or applying for a Community Grant.</p>
    </div>

    <div id="section18" className={styles.section}>
      <p><strong>Core Developer Teams</strong></p>
      <p>These teams develop infrastructure, querying automation, GraphQL tooling, and more. Learn about each one <Link href='https://docs.thegraph.academy/the-graph-ecosystem/organizational-structure/core-developer-teams' className={styles.a} target='_blank'>here.</Link></p>
<ul>
<li className={styles.listItem}><strong>StreamingFast</strong> is a protocol infrastructure company. They specialize in cross-chain architecture for streaming blockchain data.</li>
<li className={styles.listItem}><strong>Semiotic Labs.</strong> This team contributes to The Graph core research by automating query negotiations through reinforcement learning, determining query costs with AI, and predicting query latency.</li>
<li className={styles.listItem}><strong>The Guild</strong> consists of open-source developers who focus on sustainable open-source development. Explore The Guild <Link href='https://the-guild.dev/' className={styles.a}>here</Link>.</li>
<li className={styles.listItem}><strong>Messari</strong> has awarded Messari a grant to become the first Core Subgraph Developer. Messari’s developers work on maintaining high-quality, accurate, complex, and standardized protocol subgraphs.</li>
<li className={styles.listItem}><strong>Edge & Node</strong> (Prev: Graph Protocol, Inc.): This team focuses on creating and supporting protocols and dApps that empower individuals and move humanity forward.</li>
<li className={styles.listItem}><strong>GraphOps</strong> focuses on developing open data standards and protocols to enable a new generation of institutions and applications. Learn about Graph Ops <Link href='https://graphops.xyz/' className={styles.a}>here.</Link></li>
<li className={styles.listItem}><strong>Pinax</strong> is a team of open-source collaborators who aim to build data streaming solutions.</li>
<li className={styles.listItem}><strong>Geo</strong> is a Web 3 browser built on Graph Protocol for creating, publishing, and voting on graph pages.</li>
</ul>
    </div>
    <div id="section19" className={styles.section}>
    <p><strong><Link href='https://thegraph.com/docs/en/tokenomics/'>Network Participants</Link></strong></p>
    <p>There are four primary network participants, and these roles vary in the amount of technical background required.</p>
    <ol>
    <li className={styles.listItem}>Delegators - They delegate GRT to existing Indexers to secure the network. As a delegator, you can earn a portion of query fees and indexing rewards in GRT depending on the performance of the chosen Indexer. </li>
    <li className={styles.listItem}>Curators - Subgraph developers, data consumers, or community members who find the best subgraphs for Indexers to dedicate their resources.</li>
    <li className={styles.listItem}>Developers - They build and pay fees to query subgraphs.</li>
    <li className={styles.listItem}>Indexers - Node operators that stake GRT to provide indexing and query processing services.</li>
    <p><Link href='https://www.bankless.com/how-to-make-bank-with-the-graph' className={styles.a} target='_blank'>Indexers are rewarded in GRT network Inflation and Query fees.</Link></p>
    </ol>
    <p><Link href='https://thegraph.com/blog/the-graph-grt-token-economics/' target='_blank' >→ “Rewards are collected by both Curators and Indexers in the form of GRT distributed proportional to Curator signal and allocated stake. Indexing rewards will start at 3% annually.”</Link></p>
    <img src="/images/curator.png" alt="Curator" className={styles.benefitsImage} /> 
    </div>



    <div id="section20" className={styles.section}>
    <h1 className={styles.sectionSubtitle}>Community Grants</h1>
    <p>The Advocates DAO awards <Link href='https://www.notion.so/The-Graph-b4ba7a4e7a7d48d8963c124953eec8a8?pvs=4' className={styles.a} target='_blank'>Community Grants</Link> with a maximum value of $20,000 GRT per individual grant proposal. Proposals aim to incentivize the development of Network Participant's projects and The Graph's initiatives, such as events and products. The Graph has awarded <Link href='https://forum.graphadvocates.com/tag/completed' className={styles.a} target='_blank'>19 grants</Link> since September 2022 and <Link href='https://forum.graphadvocates.com/' className={styles.a}>more grants</Link> are in process of evaluation and payment.</p>

    </div>


          </div>
      </div>
  );
};

export default Article;