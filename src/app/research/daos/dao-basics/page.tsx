"use client";
import React from 'react';
import styles from './DaoBasics.module.css';
import SideIcons from '@/components/SideIcons';
import BackToTop from '@/components/BackToTop';






export default function DaoBasics() {
  return (
    <div className={styles.articleContainer}>
  
      
      <section className={styles.section}>
        <h2>DAO Basics</h2>
<p>Published: December 2023 (last edited: August 2024)</p>
<br></br>
<div className={styles.quoteContainer}>
        <p><strong>In this guide you will find: </strong></p>
        <ul>
          <li>An introduction to DAO challenges.</li>
          <li>An overview of DAOs, including why they are being developed and the various DAO types</li>
          <li>An introduction to current DAO governance, including governance principles, on chain and off chain governance channels, governance structures and tooling.</li>
          <li>A brief introduction to contribution pathways and incentives in DAOs</li>
        </ul>
      </div>
      <a href="/public/DAO-Basics-full-report.pdf" download className={styles.contactButton}>Download PDF</a>
<br></br>
<br></br>




        <h1>Introduction</h1>
        <p>Since the inception of the first Decentralized Autonomous Organization, DAOs have transformed how we think about collective organization.</p>
        <p>DAOs offer a flexible framework for communities to unite behind a common purpose. DAO purposes vary and can include anything from raising funds to owning artwork to collectively governing a finance protocol. DAOs reach consensus through governance mechanisms set on smart contracts.</p>
        <p><strong>The number of active DAOs continues to rise, reaching a peak of 24K DAOs in 2023. DAO's total treasury represents more than $15B USD.</strong></p>
      </section>
<br></br>


      <section className={styles.section}>
        <h2>DAO Challenges</h2>
        <p>The first challenge for a DAO emerged with Genesis DAO, or as it became known, The DAO.</p>
        <p>Within a month of its establishment, the first-ever DAO faced a security breach: a coding loophole in its contract enabled a hacker to drain The DAO's funds. The incident resulted in a significant loss of trust in The DAO's security and subsequent dissolution. </p>
        <p>DAO frameworks emerged as a way to establish trustworthy foundations for new organizations. Over time, new governance experiments emerge and governance design continues to improve, enabling a surge in DAO numbers. </p>
        <p>DAOs usually strive to address three main challenges. </p>


<br></br>

        <h1 className={styles.subtitle}>Building gradual decentralization </h1>
        <p>To move away from hierarchical structures and centralized decision-making, an organization should prioritize distributing power. However, rushing into decentralization can also hinder establishing a solid incentive design that enables the DAO to scale efficiently.</p>
        <p>Before decentralizing a project, it's crucial to ensure that there is a sizable amount of eligible community members who are interested, informed, and motivated enough to redeem their tokens.</p>
         <p>  Additionally, appropriate incentives should be established to encourage participation. Otherwise, the DAO may struggle to establish a solid foundation of governance, similar to the current state of Safe DAO, which we'll discuss further in the DAO landscape.</p>
     
     
     <br></br>
     
        <h1 className={styles.subtitle}>Lack of participation and voter apathy</h1>
      <p>Ideal participation involves a motivated community member with access to information, seeking to engage in discussion, voting, or contributing their skills.</p>
      <p> Even the most active DAOs struggle to create a sense of active ownership and compromise. As we will later see, in the best cases, DAOs achieve a maximum of 40% voter participation.</p>
      <p>Low participation raises concerns about the legitimacy of DAO decision-making and prompts us to consider how to build the right kind of participation incentives.</p> 
      <p>DAOs approach participation differently:</p>
        <ul>
        <li> DAO Tooling facilitates access to information and discussion,</li>
       <li> Designing small aligned decentralized structures,</li>
          <li>Introducing compensation.</li>
</ul>

<br></br>


      <h1 className={styles.subtitle}> Trust and transparency </h1>
      <p>Members are not willing to remain in an organization they don't trust. </p>
      <p>Building trust requires transparent communication, easy access to information, and reasonable expectations at every step. Transparency also requires accountability over wrong-doings and reasonably disclosing information about plans and interests involved. This generates a positive feedback loop: when community members see an organization as trustworthy, they are more likely to participate in its development.</p>
       <p>During 2023, we have conducted extensive research to assess the current DAO landscape and how its key players address governance. You can find the results in The State of DAOs 2023.</p>
       <div>
     
    </div>
       <br></br>
      </section>


      <section className={styles.section}>
        <h2>An overview on DAOs</h2>
      <p>With participation and organizational challenges and no one-size-fits-all solution: Is it worth continuing to build DAOs? Why would organizations risk losing efficiency?</p>
     <br></br>
      <h1 className={styles.subtitle}>The case for DAOs</h1>  
      <p>DAOs enable large-scale coordination while giving ownership and voice to the many with one aim: reach a consensus on which actions are worthwhile and align with a mission.</p>
      <p>In the words of the <strong>Aragon Manifesto:</strong> </p>
      <div className={styles.quoteContainer}>
        <p className={styles.quote}>
          Decentralized organizations change our relationship with governance: from something that is imposed upon us by others, into something we choose to opt into. Where we are equally serving and served, rather than just serving.
        </p>
      </div>
      <br></br>
      <p><strong>DAOs continue to be built because the Web 3 communities value having a say in the rules that govern their organizations</strong></p>
      <br></br>

      <img src="/images/benefits.svg" alt="Benefits of DAO frameworks" className={styles.benefitsImage} />
      <br></br>


      <p>As a framework for decision-making, DAOs provide unique benefits:</p>
      <ul className={styles.list}>
        <li>Community self-selects into a DAO, bringing motivated members willing to invest time and effort.</li>
        <li>DAOs enable efficient capital distribution among members and contributors.</li>
        <li>Empower stakeholders with community and financial incentives. </li>
        <li>Protect against fraud by upholding transaction transparency and providing a framework to safeguard treasury funds against capture.</li>
      </ul>  

      <p>DAOs definitely would not be as attractive without the "autonomous" part. Smart contracts and tried and tested frameworks are central to why organizations keep choosing to decentralize into DAOs. After the initial case of The DAO, we have seen many financial, infrastructure and social communities implement decentralized structures safely and transparently using smart-contract-based governance frameworks to aggregate, achieve consensus, and execute decisions.</p>
      <p>Implementing appropriate structures and mechanisms for incentive alignment is crucial. Governance design should prioritize addressing the main challenges of DAOs.
</p>
     <br></br>

      <h1 className={styles.subtitle}>DAO Types</h1> 
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
<br></br>

      <section className={styles.section}>
        <h2>Governance</h2>
        <p>Governance involves various systems and structures that enable decision-making in an organization. DAOs emerged as a new path to move away from centralized decision-making and into governance by and for those involved in a specific purpose.</p>
      <p>Effective governance in DAOs is complex and encompasses diverse aspects.</p>
      <p>DAOs decentralize decision-making by transferring power in tokens to individuals involved in advancing the organization's mission. Governance tokens allow DAOs to account for their interests through participation in governance. </p>
      <p>In any organization, unilateral decisions made by a person or group may be self-serving and not in the best interest of the collective mission. DAOs are no exception. DAOs revealed that self-interest decision-making can still be present, as members can influence others and vote following their own interests instead of the DAO's mission. Concentrated voting power on an individual or group can aggravate this, as whale token-holders can independently influence the organization's path by defining voting outcomes proposals.</p>
      <p>Effective governance also faces ongoing difficulties, such as providing members with a clear understanding of the topics and the decision-making process. Furthermore, it must build participation mechanisms and keep members engaged through appropriate incentives to foster community ownership and contribution.</p>
      <p>In this section, we provide an outline of how DAOs approach effective governance design.</p>
<br></br>
      <h1 className={styles.subtitle}>Governance Principles</h1>
      <p>Most DAOs strive to achieve effective governance by balancing three core principles. </p>
      <br></br>
      <img src="/images/governance-principles.svg" alt="Gobernance Principles" className={styles.benefitsImage} />
      <br></br>
      <br></br>

      <p>Ensuring accountability requires transparency and active member participation. Members should be able to voice their opinions on the DAO. This creates an avenue to raise concerns when there may be abuse of power or overspending. However, finding the right balance is key, as too much participation can lead to gridlock and bring all actions to a halt.</p>
      <p>Participation is key for a DAO to be governed "by and for" the community. It ensures that decisions are made considering the community's opinions instead of being determined by a small group. It also enhances the legitimacy of judgments by aggregating the community's thoughts, concerns, and ideas.</p>
      <p>Participation is key for a DAO to be governed "by and for" the community. It ensures that decisions are made considering the community's opinions instead of being determined by a small group of voters. It also enhances the legitimacy of judgments by aggregating the community's thoughts, concerns, and ideas. A Safe DAO member voiced this sentiment in a late 2022 forum post regarding the futility of participating in a community with highly concentrated voting power.</p>
      <p>Excessive participation can dilute the DAO's mission by diverting focus toward minor tasks instead of the primary purpose of the DAO. To better understand this, we can look at Maker DAO, where the proliferation of missions and the pursuit of new avenues led to the need of a restructuring plan for the entire DAO. “Endgame” aims to create new mission-specific subDAOs to better align their efforts with their core mission.</p>
      <p>Transparency is a crucial aspect that underlies both of the other principles. As we have covered in the introduction, it enables stakeholders to understand and trust the organization's mission, participate and contribute to it, and serve as a steward to "check" on its powers. There can be no form of meaningful participation when there is no clear vision of the DAO's operations.</p>
      <p>DAOs ensure transparency through various channels, such as community calls, forum discussions, newsletters, and more. Striking a balance between providing too much or too little information is key. Community members must feel valued and heard, else they may disengage from the DAO altogether.</p>
     
     <br></br>
     <br></br>
     
      <h1>Governance Channels</h1>
    
      <p>A DAO may use various on-chain and off-chain tools and applications to achieve its governance objectives.</p>
      <p>While transitioning all DAO activities to on-chain processes may enhance the security of voting records and proposal executions, off-chain tools facilitate operations that may require a different level of protection in a more cost-effective, flexible, and time-efficient manner.</p>
      <br></br>
      <img src="/images/onchain-gov.svg" alt="Gobernance Channels" className={styles.benefitsImage} />
       <br></br>
       <br></br>
       <br></br>


      <h1 className={styles.subtitle}>Governance model and frameworks</h1>
      <p>Frameworks provide a way for DAOs to manage key aspects of user participation on-chain, such as electing representatives, aggregate voting, in a safe and transparent manner. These can and should be complemented with DAO tooling to enhance other aspects of collaboration and decision-making.</p>
      
      <br></br>
      <br></br>
      
      
      <h1>DAO Tooling</h1>
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
          We also invite you to navigate Web 3 tooling resources: <a href='https://0xtangle.notion.site/' className={styles.a}>Community Tooling</a>
        </p>
      </div>
    </div>

    <br></br>
    <br></br>
   <h1>Decentralized Structures</h1>
   <p>Designing the proper structures and roles is critical when aiming to decentralize an organization.</p>
   <p>Building gradual decentralization should be done according to both the specific organization and the incentives you wish to create.</p>
   <p>Roles vary from DAO to DAO, but usually, you will be able to find the same stakeholders:</p>
   <ul className={styles.list}>
    <li><strong>Community</strong> the broader people who use, are present in the DAO's social channels or are in contact with the DAO's purpose (be it a protocol, a grant program, among others)</li>
    <li><strong>Governance token holders</strong> who either vote or delegate their voting power. Ideally, they also voice their opinions in the DAO's communication channels.</li>
    <li><strong>Delegates and other contributors:</strong> actively vote and build the DAO mission following its values.</li>
    <li><strong>Governance team:</strong> members lead decision-making processes, which include committee members, subDAO members, and others.</li>
    <li><strong>Leaders or founders:</strong> lead the DAO mission and are in charge of its development.</li>
   </ul>
   <br></br>
   <br></br>
   <img src="/images/roles-dao.svg" alt="Dao-roles" className={styles.benefitsImage} />
   <br></br>
   <br></br>
   
    <p>DAOs establish decentralized structures from the beginning and as they grow. These governance bodies perform various functions and may be involved in product development related to the DAO's mission or undertake specific tasks. These tasks can range from HR-related duties ensuring other governance bodies remain accountable.</p>
    <br></br>
    <p>Most DAOs use one of the following <strong>governance bodies:</strong></p>
    <ul className={styles.list}>
    <li><strong>Councils and Committees </strong>with representatives to act, vote, or perform a specific task on behalf of DAO members. Representatives can be either designated through a Foundation or elected by the community. Some councils, like The Graph Council, are in charge of various functions, like overseeing the Foundation's operations, protocol upgrades, and more. While other bodies like Uniswap's accountability committee manage one task: the operational development of deployments of Uniswap V3.</li>
    <li><strong>Working groups or Guilds</strong> according to skillset. In Gitcoin, for instance, contributors are set on workstreams according to tasks.</li>
    <li><strong>SubDAOs</strong> with granular permissions within the main DAO's ecosystem. These can be especially useful when the DAO has scaled:</li>
   </ul> 
   <div className={styles.quoteContainer}>
        <a className={styles.quote} href='https://coopahtroopa.mirror.xyz/7bfK9st2mvhxlla4XKotRjetq5-YhaiwqRwS8DhkD-o' target='_blank'>
        “Rather than trying to house all that activity under one roof, SubDAOs offer a medium for working groups to create their own foundation and ownership structure - all while tying value back to the originating entity.”
        </a>
      </div> 
      <br></br>  
    <p>DAOs that have implemented them include Radicle, The Graph, Nouns, and a post-Endgame Maker DAO.</p>
    <p>To prevent overwhelming responsibilities and ensure that each structure fulfills its role, DAOs should be structured based on their stage of development. Over the past two years, the number of scaling DAOs has increased significantly. With this growth, subDAOs and other decentralized structures within a main DAO have become more common. Nevertheless, some DAOs, like Gnosis or Compound, still operate using a simple design.</p>
    <p>The guiding rationale behind creating structures should always be to design an efficient and effective governance ecosystem that avoids an imbalance of the main governance principles. </p>
  <br></br>
  <br></br>
  
  
  
  
   <h1 className={styles.subtitle}>Contribution pathways and incentives</h1>
   <p className={styles.black}>In 99% of DAOs, less than 0.5% of token holders vote. </p>
   <p>DAOs have a key issue of lack of participation. Although DAOs have the unique ability to involve communities and transfer ownership, it can be challenging to maintain the community's active commitment over time.</p>
   <p>DAOs offer community members opportunities to contribute meaningfully to the organization's objectives. Participation can take many forms, including:</p>
   <ul className={styles.list}>
    <li><strong>building </strong>towards the DAO's mission through programs,</li>
    <li> <strong>voting</strong> on improvement proposals,</li>
    <li>becoming a <strong>delegate</strong> to represent other token holders' interests,</li>
    <li><strong>applying for grants</strong> for grants to develop initiatives</li>
    </ul>
    <br></br>


    <p><strong>We refer to these as contribution pathways.In other words, bridges built to and from the community that return value to the organization</strong></p>
    
    <p >DAOs create incentives to sustain contribution pathways in the long term. </p>
    <p>Organizations tend to use a token-based system, where a community member receives a reward as fungible tokens. These can include retroactive funding, airdrops, liquidity mining, and compensations for delegation or any specific task. Grant DAOs can also fund projects that provide value to the organization, thereby providing an incentive participate to the development of the ecosystem.</p>
    <p>A less explored way of designing incentives is reputation-based rewards. In which members receive a reward over participation that can not be sold. It usually takes the form of either a score or a badge.</p>
   <p>With this approach, DAOs hope to attract new members who share their mission and retain the participation of existing members.</p>
  <p>For more information on DAOs you can head to our <a href='https://www.web3citizen.xyz/research/daos' className={styles.a} target='_blank'>DAO Research</a>.</p>
     </section> 

     <SideIcons />
     <BackToTop />
    </div>



  );
  }