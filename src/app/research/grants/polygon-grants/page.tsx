"use client";
import React from 'react';
import styles from './DaoBasics.module.css';
import SideIcons from '@/components/SideIcons';
import BackToTop from '@/components/BackToTop';






export default function DaoBasics() {
  return (
    <div className={styles.articleContainer}>
  
      
      <section className={styles.section}>
        <h2>Introduction</h2>
        <p>Since the inception of the first Decentralized Autonomous Organization, DAOs have transformed how we think about collective organization.</p>
        <p>By leveraging blockchain technology, digital assets, and tooling, DAOs offer a flexible framework to manage organizations collectively. Beyond this, DAOs have enabled communities to unite behind a common purpose and reach consensus through governance mechanisms set on smart contracts. DAO purposes vary and can include anything from raising funds to owning artwork to collectively governing a finance protocol.</p>
        <p>As of 2023, the number of active DAOs continues to rise, reaching a peak of 24K DAOs. DAO's total treasury represents more than $15B USD.</p>
        <p>Furthermore, as the DAO landscape diversifies, organizations try to avoid the same pitfalls in large-scale collaborative governance.</p>
      </section>

      <section className={styles.section}>
        <h1>DAO Challenges</h1>
        <p>The first challenge for a DAO emerged with Genesis DAO, or as it became known, The DAO. Within a month of its establishment, the first-ever DAO faced a security breach: a coding loophole in its contract enabled a hacker to drain The DAO's funds. The incident resulted in a significant loss of trust in The DAO's security and subsequent dissolution.</p>
        <p>DAO frameworks were created to solve this problem. By establishing trustworthy foundations for new organizations, DAO frameworks enabled a surge in the number of DAOs.</p>
        <p>This resulted in significant challenges that DAOs are still working to solve with design and governance.</p>
        <p className={styles.black}>Building gradual decentralization </p>
        <p>To move away from hierarchical structures and centralized decision-making, an organization should prioritize distributing power. However, rushing into decentralization can also hinder establishing a solid incentive design that enables the DAO to scale efficiently.</p>
        <p>Before decentralizing a project, it's crucial to ensure that there is a sizable amount of eligible community members who are interested, informed, and motivated enough to redeem their tokens. Additionally, appropriate incentives should be established to encourage participation. Otherwise, the DAO may struggle to establish a solid foundation of governance, similar to the current state of Safe DAO, which we'll discuss further in the DAO landscape.</p>
        <p className={styles.black}>Lack of participation and voter apathy</p>
      <p>Ideal participation involves a motivated community member with access to information, seeking to engage in discussion, voting, or contributing their skills. Even the most active DAOs struggle to create a sense of active ownership and compromise. As we will later see, in the best cases, DAOs achieve a maximum of 40% voter participation.</p>
      <p>Low participation raises concerns about the legitimacy of DAO decision-making and prompts us to consider how to build the right kind of participation incentives. DAOs approach participation differently: DAO Tooling facilitates access to information and discussion, designing small aligned decentralized structures, and introducing compensation.</p>

      <p className={styles.black}> Trust and transparency </p>
      <p>Members are not willing to remain in an organization they don't trust. </p>
      <p>Building trust requires transparent communication, easy access to information, and reasonable expectations at every step. Transparency also requires accountability over wrong-doings and reasonably disclosing information about plans and interests involved. This generates a positive feedback loop: when community members see an organization as trustworthy, they are more likely to participate in its development.</p>
       <p>From the beginning of July to November 2023, we have conducted extensive research on DAOs to assess the current DAO landscape and how its key players address governance. The results are organized in this document.</p>
       <div>
      <p>In this guide you will find:</p>
      <ul className={styles.list}>
        <li><strong>An overview of DAOs</strong>, including why they are being developed and the various types of DAOs based on their mission.</li>
        <li><strong>An introduction to current DAO governance</strong>, including governance principles, the differences between governance channels, governance roles, and the participation mechanisms, frameworks, and tooling currently used to promote an active DAO community.</li>
        <li><strong>A deep dive into the DAO landscape</strong>, including 12 established and emerging DAOs, their governance design, voting mechanisms an processes and emerging challenges.</li>
        <li><strong>In-depth exploration of contribution pathways</strong> available in these 12 DAOs, showcasing various ways to get involved in their initiatives.</li>
      </ul>
    </div>
    <p className={styles.black}> Key insights </p> 
    <ul className={styles.list}>
        <li>DAOs may form subgroups such as working groups or subDAOs as they expand to distribute governance focus and responsibilities effectively.</li>
        <li>Voting participation continues to challenge DAO governance. No matter the size or mission of the DAO, most organizations can only muster up to 30% of voting participation.</li>
        <li>Many organizations are exploring new models of compensation to better motivate contributions, as compensation mechanisms and distribution incentives are still in early stages of development in most DAOs.</li>
        <li>A significant number of DAOs are actively establishing funding mechanisms, such as grants, to support projects within their ecosystems.</li>
      </ul>      
      </section>
      <section className={styles.section}>
        <h2>An overview on DAOs</h2>
      <p>With participation and organizational challenges facing protocols and no one-size-fits-all solution, it prompts a couple of questions. </p>
      <p>Is it worth continuing to build DAOs? Why would organizations risk losing efficiency?</p>
      <p className={styles.black}>The case for DAOs</p>  
      <p>DAOs enable large-scale coordination between community members while giving ownership and voice to the many with one aim: reach a consensus on which actions align with a specific mission and are a worthwhile resource allocation.</p>
      <p>In the words of the <strong>Aragon Manifesto:</strong> </p>
      <div className={styles.quoteContainer}>
        <p className={styles.quote}>
          Decentralized organizations change our relationship with governance: from something that is imposed upon us by others, into something we choose to opt into. Where we are equally serving and served, rather than just serving.
        </p>
      </div>
      <p>DAOs continue to be built because the Web 3 communities value having a say in the rules that govern their organizations</p>
      <img src="/images/daos-grafico-1.avif" alt="Benefits of DAO frameworks" className={styles.benefitsImage} />
      <p>As a framework for decision-making, DAOs provide unique benefits:</p>
      <ul className={styles.list}>
        <li>Community self-selects into a DAO, bringing motivated members willing to invest time and effort.</li>
        <li>DAOs enable efficient capital distribution among members and contributors.</li>
        <li>Empower stakeholders with community and financial incentives. </li>
        <li>Protect against fraud by upholding transaction transparency and providing a framework to safeguard treasury funds against capture.</li>
      </ul>     
      <p>DAOs definitely would not be as attractive without the "autonomous" part. Smart contracts and tried and tested frameworks are central to why organizations keep choosing to decentralize into DAOs. After the initial case of The DAO, we have seen many financial, infrastructure and social communities implement decentralized structures safely and transparently using smart-contract-based governance frameworks to aggregate, achieve consensus, and execute decisions.</p>
      <p>Implementing appropriate structures and mechanisms for incentive alignment to reap benefits while avoiding DAO pitfalls is crucial. Planning and governance design should prioritize addressing the main challenges of DAOs.</p>
     
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