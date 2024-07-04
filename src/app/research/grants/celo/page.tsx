"use client";
import React from 'react';
import styles from './DaoBasics.module.css';
import SideIcons from '@/components/SideIcons';
import BackToTop from '@/components/BackToTop';






export default function DaoBasics() {
  return (
    <div className={styles.articleContainer}>
  
      
      <section className={styles.section}>
        <h2>Celo RetroPGF 0</h2>
        <p><strong>Timeframe: </strong> Application submissions from April 8th to April 30th</p>
        <p><strong>Amount: </strong>Over 250,000 CELO distributed, amount awarded depends on steward votes.</p>
        <p>Celo Public Goods introduces #CeloRPGF0, a pioneering Retroactive Public Goods Funding program, rewarding Celo ecosystem contributors for their historical impact. Emulating Optimism's innovative public goods funding, CeloRPGF0 focuses on supporting those who've significantly advanced the Celo environment since its 2020 mainnet launch</p>
      </section>

      <section className={styles.section}>
        <h1>Grant Scope</h1>

       <div>
      <p>CeloRPGF0 targets three main verticals:</p>
      <ul className={styles.list}>
        <li><strong>Celo ReFi:</strong>Projects enabling real-world impact and ecological benefits on Celo.</li>
        <li><strong>Celo dApps and Tooling:</strong>Tools and dApps enhancing user and stakeholder experiences.</li>
        <li><strong>Celo Community and Adoption: Celo Community and Adoption: </strong>Initiatives such as education and governance support, fostering community growth and adoption.</li>
      </ul>
    </div>
    <p className={styles.black}> Grant Requiriments </p> 
    <ul className={styles.list}>
        <li>Projects must demostrate a significant, verifiable impact on the Celo ecosystem over the past year.</li>
        <li>Eligibility extends to initiatives within the specified verticals, contributing to Celo's mission and public goods.</li>
      </ul>      
      </section>


      <section className={styles.section}>

      <p className={styles.black}>Funding Specifics</p>  
   
      <ul className={styles.list}>
        <li>CeloRetroPGF only awards projects based on past contributions.</li>
        <li>Projects must mint a Hypercart Mint, a digital claim about the positive impact you or your project contributed to the Celo ecosystem since the launch of its Blockchain. To mint it follow the CeloPG Hypercert Minting Guide.</li>
        <li>Funding is a one-time direct grant post-results announcement </li>
        <li>Receivable amount allocated has no cap.</li>
      </ul>     



     
      <h1>DAO Types</h1> 
      <p>A DAO can be classified through what it aims to achieve, its core mission.</p>
      <ul className={styles.list}>
        <li><strong>Protocol DAOs</strong>govern and manage a decentralized protocol or dApp.</li>
        <li><strong>Investment DAOs</strong> aim to pool funds and invest for the development of a specific app.</li>
        <li> <strong>Social DAOs</strong>focus on social capital. Their missions and purpose vary form community to community, but their value usually lies with collaboration towards a unifying purpose (for example, building a free internet) or exclusivity (for example, NFT clubs).</li>
        <li><strong>Grants DAOs</strong>provide a way for the community to vote upon fund allocation towards projects within the community or those that boost the DAOs mission.</li>
        <li><strong> Impact DAOs</strong>are focused on creating positive externalities and improving specific causes by fundraising and allocating resources to them.</li>
        <li><strong>Service DAOs</strong>work similarly to agencies or consulting organizations by providing specific services to other protocols, foundations or DAOs. These include services, such as design, management, talent recruitment or legal services.</li>
        <li><strong>Media DAOs</strong>provide a way to organize around producing and distributing news and information.</li>

      </ul> 
     <p>A DAO's mission can change throughout its lifetime, and DAO types are not exclusionary between each other. While a DAO may add some types, its primary mission tends to remain. The most common "added" DAO type is grants. As protocols develop, many choose to establish governance structures and roles to allocate funds toward projects that might forward the protocol's ecosystem. This is the case of Compound, Arbitrum, and Aave, among others.</p>
      </section>


      <section className={styles.section}>
        <h2>Governance</h2>
        <p>Governance involves various systems and structures that enable decision-making in an organization. DAOs emerged as a new path to move away from centralized decision-making and into governance by and for those involved in a specific purpose</p>
      <p>Effective governance in DAOs is complex and encompasses diverse aspects.</p>
      <p>DAOs decentralized decision-making by transferring power in tokens to individuals involved and interested in advancing the organization's mission. Governance tokens allow DAOs to account for their interests through participation in governance. In any organization, unilateral decisions made by a person or group may be self-serving and not in the best interest of the collective mission. DAOs are no exception.</p>
      <p>Upon execution, DAOs revealed that self-interest decision-making can still be present, as members can influence others and vote following their own interests instead of the DAO's mission. Concentrated voting power on an individual or group can aggravate this, as whale token-holders can independently influence the organization's path by defining voting outcomes proposals.</p>
      <p>Effective governance also faces ongoing difficulties, such as providing members with a clear understanding of the topics and the decision-making process. Furthermore, it must build participation mechanisms and keep members engaged through appropriate incentives to foster community ownership and contribution.</p>
      <p>In this section, we provide an outline of how DAOs approach effective governance design.</p>

      <h1>Main Governance Principles</h1>
      <p>Most DAOs strive to achieve effective governance by balancing three core principles. </p>
      <p>Continuous pursuit of balance across governance principles can prevent DAO challenges and ensure the stability of governance within a DAO.</p>
      <img src="/images/gobernance-image.avif" alt="Gobernance Principles" className={styles.benefitsImage} />
      <p>Ensuring accountability necessitates transparency and giving members a chance to participate. Members should be able to participate in forums to voice their opinions on the organization's actions. This creates an avenue for members to raise concerns when there may be abuse of power or overspending of funds. </p>
      <p>Nouns DAO has been the subject of discussion on this matter. Members are reporting diversion of funds, high spending, and abuse of power by two founding members, Toady Hawk and Noun 22. </p>
      <p>However, finding the right balance is key, as too much participation can lead to gridlock and bring all actions to a halt.</p>
      <p>Participation is key for a DAO to be governed "by and for" the community. It ensures that decisions are made considering the community's opinions instead of being determined by a small group of voters. It also enhances the legitimacy of judgments by aggregating the community's thoughts, concerns, and ideas. A Safe DAO member voiced this sentiment in a late 2022 forum post regarding the futility of participating in a community with highly concentrated voting power.</p>
      <p>However, excessive participation can dilute the DAO's mission by diverting focus toward minor tasks instead of the primary purpose of the DAO. To better understand this, we can look at Maker DAO, where the proliferation of missions and the pursuit of new avenues led to the need of a restructuring plan for the entire DAO. Endgame aims to create new mission-specific subDAOs and better align their efforts with their core mission.</p>
      <p>Transparency is a crucial aspect that underlies both of the other principles. As we have covered in the introduction, it enables stakeholders to understand and trust the organization's mission, participate and contribute to it, and serve as a steward to "check" on its powers. There can be no form of meaningful participation or checks and balances when there is no clear vision of the DAO's operations.</p>
      <p>DAOs ensure transparency through various channels, such as community calls, forum discussions, newsletters, and more. Striking a balance between providing too much or too little information is key. Community members must feel valued and heard, else they may disengage from the DAO altogether.
      </p>
      <h1>Governance Design</h1>
      <p className={styles.black}>Gobernance channels</p>
      <p>A DAO may use various on-chain and off-chain tools and applications to achieve its governance objectives.</p>
      <p>While transitioning all DAO activities to on-chain processes may enhance the security of voting records and proposal executions, off-chain tools facilitate operations that may require a different level of protection in a more cost-effective, flexible, and time-efficient manner.</p>
      <img src="/images/gobernance-channels.avif" alt="Gobernance Channels" className={styles.benefitsImage} />

      <p className={styles.black}>Governance model and  frameworks</p>
      <p>Frameworks provide a way for DAOs to manage key aspects of user participation on-chain, such as electing representatives, aggregate voting, in a safe and transparent manner. </p>
      <p>These can and should be complemented with DAO tooling to enhance other aspects of collaboration and decision-making.</p>
      <img src="/images/gobernance-frameworks.avif" alt="Gobernance Frameworks" className={styles.benefitsImage} />
      <h1>DAO & Governance Tools</h1>
      <p>DAO Tooling is a cornerstone for governance.</p>
      <p>Appropriate governance needs to aggregate and manage large-scale discussions, voting, operations, and granular permissions both on and off-chain. Tooling can provide a DAO the flexibility to pick and choose how they want the community to be designed</p>
      <p>This can range from choosing communication channels that may add additional steps in the governance process, encouraging community feedback, and platforms that simplify resource distribution or managing contributor compensation.</p>
      <p>Not leveraging the proper tooling to encourage participation, transparency, and efficiency can lead a DAO into an imbalance of the main governance principles.</p>  
     
      <div className={styles.toolsSection}>
      <div className={styles.toolCard}>
        <p className={styles.toolTitle}>📜 Snapshot - Decentralized voting tool</p>
        <p className={styles.toolDescription}>
          It provides flexibility on how voting power is calculated. Creating proposals and voting on Snapshot does not cost gas as the process is performed off-chain.
        </p>
      </div>
      <div className={styles.toolCard}>
        <p className={styles.toolTitle}>💼 Charmverse - Management & workspace tool</p>
        <p className={styles.toolDescription}>
          Helps DAOs manage their entire workflow, from token-gated workspaces to governance proposals to bounty payments.
        </p>
      </div>
      <div className={styles.toolCard}>
        <p className={styles.toolTitle}>🤝 Coordinape - Resource distribution tool</p>
        <p className={styles.toolDescription}>
          A platform for DAOs to easily distribute resources to contributors. Community grants, internal salaries and special projects can be rewarded through Coordinape.
        </p>
      </div>
      <div className={styles.toolCard}>
        <p className={styles.toolTitle}>💬 Discourse - Communication Tool</p>
        <p className={styles.toolDescription}>
          An open source discussion platform. DAOs can run and manage their forums and mailing lists with this tool.
        </p>
      </div>
      <div className={styles.toolCard}>
        <p className={styles.toolDescription}>
          We also invite you to navigate Web 3 tooling resources: <a href="/community-tooling" className={styles.toolLink}>Community Tooling</a>
        </p>
      </div>
    </div>
   <h1>Decentralized Structures</h1>
   <p>Designing the proper structures and roles is critical when aiming to decentralize an organization.</p>
   <p>Building gradual decentralization should be done according to both the specific organization and the incentives you wish to create.</p>
   <p>Roles vary from DAO to DAO, but usually, you will be able to find the same stakeholders in any DAO:</p>
   <ul className={styles.list}>
    <li><strong>Community</strong> the broader people who use, are present in the DAO's social channels or are in contact with the DAO's purpose (be it a protocol, a grant program, among others)</li>
    <li><strong>Governance token holders</strong> who either vote or delegate their voting power. Ideally, they also voice their opinions in the DAO's communication channels.</li>
    <li><strong>Delegates and other contributors:</strong> actively vote and build the DAO mission following its values.</li>
    <li><strong>Governance team:</strong>members lead decision-making processes, which include committee members, subDAO members, and others.</li>
    <li><strong>Leaders or founders:</strong> lead the DAO mission and are in charge of its development.</li>
   </ul>
   <img src="/images/dao-roles.avif" alt="Dao-roles" className={styles.benefitsImage} />
    <p>Certain DAOs opt to establish decentralized structures either from the beginning or as they grow. These governance bodies perform various functions and may be involved in product development related to the DAO's mission or undertake specific tasks. These tasks can range from HR-related duties to becoming a check on other governance bodies.</p>
    
    <p>Most DAOs use one of the following <strong>governance bodies:</strong></p>
    <ul className={styles.list}>
    <li><strong>Councils and Committees </strong>with representatives to act, vote, or perform a specific task on behalf of DAO members. Representatives can be either designated through a Foundation or elected by the community. Some councils, like The Graph Council, are in charge of various functions, like overseeing the Foundation's operations, protocol upgrades, and more. While other bodies like Uniswap's accountability committee manage one task: the operational development of deployments of Uniswap V3.</li>
    <li>Arranging into <strong>working groups or guilds</strong> according to skillset. This is the case of Gitcoin, whose contributors are set on workstreams according to tasks.</li>
    <li>Creating <strong>subDAOs</strong> with granular permissions within the main DAO's ecosystem. These can be especially useful when the DAO has scaled:</li>
   </ul> 
   <div className={styles.quoteContainer}>
        <a className={styles.quote} href='https://coopahtroopa.mirror.xyz/7bfK9st2mvhxlla4XKotRjetq5-YhaiwqRwS8DhkD-o' target='_blank'>
        “Rather than trying to house all that activity under one roof, SubDAOs offer a medium for working groups to create their own foundation and ownership structure - all while tying value back to the originating entity.”
        </a>
      </div>   
    <p>DAOs that have implemented them include Radicle, The Graph, Nouns, and a post-Endgame Maker DAO.</p>
    <p>To prevent overwhelming responsibilities and ensure that each structure fulfills its role, DAOs should be structured based on their stage of development. Over the past two years, the number of scaling DAOs has increased significantly. With this growth, subDAOs and other decentralized structures within a main DAO have become more common. Nevertheless, some DAOs, like Gnosis or Compound, still operate using a simple design.</p>
    <p>The guiding rationale behind creating structures should always be to design an efficient and effective governance ecosystem that avoids an imbalance of the main governance principles. </p>
   <h1>Contribution pathways and incentives</h1>
   <p className={styles.black}>In 99% of DAOs, less than 0.5% of token holders vote. </p>
   <p>DAOs have a key issue of lack of participation. Although DAOs have the unique ability to involve communities and transfer ownership, it can be challenging to maintain the community's active commitment over time.</p>
   <p>DAOs offer community members opportunities to contribute meaningfully to the organization's objectives. Participation can take many forms, including:</p>
   <ul className={styles.list}>
    <li><strong>building </strong>towards the DAO's mission through programs,</li>
    <li> <strong>voting</strong> on improvement proposals,</li>
    <li>becoming a <strong>delegate</strong>to represent other token holders' interests,</li>
    <li><strong>applying for grants</strong>to fund development initiatives.</li>
    </ul>
    <p>We refer to these as contribution pathways.In other words, bridges built to and from the community that return value to the organization</p>
    <p className={styles.black}>DAOs create incentives to sustain contribution pathways in the long term. </p>
    <p>In most cases, organizations use a token-based system, where a community member receives a reward as fungible tokens. These can include retroactive funding, airdrops, liquidity mining, and compensations for delegation or any specific task. Grant DAOs can also distribute funds towards a particular project that provides value to the organization, thereby providing an incentive to participate and contribute to the development of the ecosystem.</p>
    <p>A less explored way of designing incentives is reputation-based rewards. In which members receive a reward over participation that can not be sold. It usually takes the form of either a score or a badge.</p>
   <p>With this approach, DAOs hope to attract new members who share their mission and retain the participation of existing members.</p>
     </section> 

     <SideIcons />
     <BackToTop />
    </div>



  );
  }