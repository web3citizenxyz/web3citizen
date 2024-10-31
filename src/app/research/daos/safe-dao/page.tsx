"use client";
import React from 'react';
import Link from 'next/link';
import styles from '../ArticleLayout.module.css';

const Article = () => {
  return (
      <div className={styles.articleContainer}>
          <div className={styles.menuContainer}>
              <ul className={styles.menu}>
                  <li className={styles.menuItem}><a href="#section1" className={styles.menuLink}>Safe </a></li>
                  <li className={styles.menuItem}><a href="#section2" className={styles.menuLink}>SafeDAO Governance</a></li>
                  <li className={styles.menuItem}><a href="#section3" className={styles.menuLink}>Safe Ecosystem Foundation</a></li>
                  <li className={styles.menuItem}><a href="#section4" className={styles.menuLink}>Governance Framework</a></li>
 
                  <li className={styles.menuItem}><a href="#section5" className={styles.menuLink}>Safe Guardians</a></li>
                  <li className={styles.menuItem}><a href="#section6" className={styles.menuLink}>Grants Council</a></li>
                  <li className={styles.menuItem}><a href="#section7" className={styles.menuLink}>Token Holders</a></li>
                  <li className={styles.menuItem}><a href="#section8" className={styles.menuLink}>Governance Proposals</a></li>
 
                  <li className={styles.menuItem}><a href="#section9" className={styles.menuLink}>Governance Process and Mechanisms</a></li>
                  <li className={styles.menuItem}><a href="#section10" className={styles.menuLink}>Voting Metrics and Insights</a></li>
                  <li className={styles.menuItem}><a href="#section11" className={styles.menuLink}>Addressing Participation Concerns</a></li>
                  <li className={styles.menuItem}><a href="#section12" className={styles.menuLink}>Voting Process</a></li>
 
                  <li className={styles.menuItem}><a href="#section13" className={styles.menuLink}>Contribution Pathways</a></li>
                  <li className={styles.menuItem}><a href="#section14" className={styles.menuLink}>The Safe Guardian Program</a></li>
                  <li className={styles.menuItem}><a href="#section15" className={styles.menuLink}>Safe Grants Program</a></li>
                  <li className={styles.menuItem}><a href="#section16" className={styles.menuLink}>Other Initiatives</a></li>

              </ul>
           </div>
           <div className={styles.contentContainer}>
           <div id="section1" className={styles.section}>
           <h2 className={styles.sectionTitle}>Safe</h2>      
           <p>SafeDAO is a decentralized collective of core contributors, GnosisDAO, and users organized around empowering new and existing projects integrating with the Safe Protocol or initiatives supporting the usage of Safe Protocol. Safe Protocol, previously known as Gnosis Safe, is a decentralized custody protocol and collective asset management platform on the Ethereum blockchain. </p>
            </div>


          <div id="section2" className={styles.section}>
                  <h2 className={styles.sectionSubtitle}>SafeDAO Governance</h2>
                  <p className={styles.paragraph}>SafeDAO has recently implemented SEP #7 and adopted a new dynamic governance framework since October 2023. The main objective of this framework is to improve and optimize the democratic processes within the DAO continuously. The new decision-making process is characterized by time-bound governance experiment cycles, divided into Seasons consisting of four sprints each.</p>
             
                  <ul className={styles.orderedList}>
            <li className={styles.listItem}>During Sprints 1-3, only proposals that are not related to governance or constitutional issues will be considered. During this “work period,” the DAO will work on new initiatives, and no new strategies can be proposed.</li>
            <li className={styles.listItem}>Sprint 4 is dedicated to governance review and governance proposals. During this “review period,” new strategies can be proposed.</li>
            </ul> 
            <p>We are currently on SafeDAO’s first Season. Read more on the scope of Safe governance <Link href='https://www.notion.so/Scope-of-governance-996b32148dab47c4a4994ff70bf7b8be?pvs=4' className={styles.a} target='_blank'>here.</Link></p>
           </div>
           
           <div id="section3" className={styles.section}>
                  <h2 className={styles.sectionSubtitle}>Governance Framework</h2>
                  </div>
           <div id="section4" className={styles.section}> 
                  <p className={styles.titleBlack}>Safe Ecosystem Foundation</p>
                  <p>The Foundation Council is comprised of three members Lukas Schor, Christoph Simmchen, Stefan George. The Foundation is based out of Switzerland and oversees the mission of SafeDAO and the development of Safe Protocol. </p>
                  <img src="/images/safe-da0.jpg" alt="Safe DAO" className={styles.benefitsImage} />
             </div>

           <div id="section5" className={styles.section}> 
           <p className={styles.titleBlack}>Safe Guardians</p>
           <p>The Safe Guardians oversee the Safe Ecosystem, which includes wallets, infrastructure, tools, and services. These guardians may be individuals, teams, or DAOs who have demonstrated their dedication to Safe's mission by actively participating and making positive contributions. Guardians can contribute to various categories and are rewarded through the Guardians programs.</p>
           <img src="/images/safe-guardians.png" alt="Safe guardians" className={styles.benefitsImage} />
           <p><Link href='https://forum.safe.global/t/guardians-gather/265' className={styles.a} target='_blank'></Link>Source: Safe Forum</p>
          
          <p>Guardians' <Link href='https://snapshot.org/#/safe.eth/proposal/0x71bf4469fc289bab2d8ce99ba41d5792c1c5d581defc12042d3cf1eb3e136323' className={styles.a}>responsibilities incluide</Link>:</p>
          <ul>
            <li className={styles.listItem}>Keeping up to date, giving feedback, and voting on Safe Ecosystem Proposals (SEPs).</li>
            <li className={styles.listItem}>Provide a reasoning on each of their votes.</li>
            <li className={styles.listItem}>Advocate for voting delegations - by boosting “responsibility by campaigning for other token holders to delegate.”</li>
          </ul>
          </div>
          <div id="section6" className={styles.section}> 
             <p className={styles.titleBlack}>Grants Council</p>
            <p>Comprised of 5 reviewers and a Grant Lead, this team runs the Safe Grant Proposals operations by reviewing, working with proposers to establish milestones, create a framework for the grants process, discuss and review proposals.</p>
          </div>
     
         <div id="section7" className={styles.section}> 
         <p><strong>Token-holders</strong></p> 
         <p>Token-holders responsibilities, as outlined by <Link href='https://snapshot.org/#/safe.eth/proposal/0x71bf4469fc289bab2d8ce99ba41d5792c1c5d581defc12042d3cf1eb3e136323' className={styles.a}>SEP #7</Link>, are as follows:</p>
         <ul>
          <li className={styles.listItem}>actively participate in decision-making processe</li>
          <li className={styles.listItem}>delegate their voting rights to trusted individuals or entities, if unable to actively participate</li>
          <li className={styles.listItem}>to fully understand the implications of their votes by doing their own research to ensure informed decisions. If they cannot commit to this due diligence, delegation to delegates is encouraged.</li>



         </ul>
        </div>

         <div id="section8" className={styles.section}> 
         <h2 className={styles.sectionSubtitle}>Governance Proposals</h2> 
         <p>There are four types of governance proposals.</p>
         <ul>
          <li className={styles.listItem}>SEP Governance Proposals: for changes to the governance framework and resource allocation framework. These proposals are voted offchain.</li>
          <li className={styles.listItem}>SEP Constitutional Proposals: Any constitutional changes to the constitution <Link href='https://forum.safe.global/t/sep-4-safedao-constitution/1749/1' className={styles.a} target='_blank'>require a two-thirds majority and double the usual Safe Ecosystem Proposal (“SEP”) quorum</Link>. As of January 2024, amendments have yet to be made to the <Link href='https://forum.safe.global/t/sep-4-safedao-constitution/1749' target='_blank' className={styles.a}>constitution</Link>. These proposals are voted offchain.</li>

          <li className={styles.listItem}>Other SEPs: other governance proposals. These proposals can be either voted on- or offchain.</li>

          <li className={styles.listItem}>Grants Council Nominations for the Safe Grants Program. These proposals are voted offchain.</li>

         </ul>
         <p>Submitting proposals requires the proposer to own or be delegated 20,000 SAFE. You can find the proposals here.</p>
         </div>

       <div id="section9" className={styles.section}> 
       <h2 className={styles.sectionSubtitle}>Governance Process and Mechanisms</h2> 

       <p className={styles.titleBlack}>Voting Metrics and Insights</p>
       <p>This preliminary vote gauges the community's interest in a proposal before it moves on to the next stage.</p>

       <img src="/images/safe-stats.png" alt="SAFE stats" className={styles.benefitsImage} />
       <p>Source: <Link href='https://flipsidecrypto.xyz/jkhuhnke11/safe-governance-stats-pQHQGV' target='_blank' className={styles.a}>jkhuhnke11 Safe Governance Dashboard</Link></p>
       <p>Token allocation raised transparency and voting-power-concentration concerns. By November 2022, less than 30 people held more than 90% of the voting power in the DAO, and five people owned 50% of available tokens. This token concentration contradicts initial comments by one of the Foundation Council members.</p>
       <p>SafeDAO has and continues to address this concerns.</p>
       </div>
       <div id="section10" className={styles.section}> 
      <p className={styles.titleBlack}>Addressing Participation Concerns </p>
      <p>Safe DAO has outlined in <Link href='https://www.notion.so/SEP-3-Milestones-before-voting-again-on-enabling-transferability-6e236a537e0848a898e358139a65dbd2?pvs=4' className={styles.a} target='_blank'>SEP #3</Link> a series of milestones to be reached to vote for token transferability again and move forward with the distribution of token shares and, therefore, voting power. These milestones include passing the initial claim period and ratifying a SEP on</p>

<ul>
  <li className={styles.orderedList}>constitution,</li>
  <li className={styles.orderedList}>a governance framework,</li>
  <li className={styles.orderedList}>a resource allocation framework, and</li>
  <li className={styles.orderedList}>token utility.</li>
</ul>
<p>A constitutional proposal (SEP #4) has been approved, SEP #7 addressed governance framework, governance processes, stakeholder mapping, and outlined interactions between them.</p>
<p><strong>OBRA (Outcomes- Based Resource Allocation)</strong></p>
<p><Link href='' className={styles.a} target='_blank'>SEP #10</Link> voted on resource allocation strategies, previously approved with <Link href='https://snapshot.org/#/safe.eth/proposal/0x0dc074ccf35bdac8fc84da3c0c089b3e947e23eeca362564cd729aa440e2a267' className={styles.a}>SEP #8</Link>. OBRA is a transparent and accountable resource allocation process, funding projects that boost the Safe Ecosystem.</p>
<p>OBRA will ensure that every allocation aligns with the DAO's mission, as outlined in the Constitution. This is achieved by disbursing resources exclusively to initiatives that adhere to predefined strategies and clear metrics for assessing success. All strategies must contribute to existing DAO goals, and all initiatives must align with established strategies.</p>
<p>The proposed process follows a structured timeline of SafeDAO's time-bound governance of 16-week seasons. The framework also includes voting thresholds to ensure active participation and engagement, emphasizing compliance with relevant regulations and KYC requirements. </p>
<p>Read more about OBRA <Link href='https://forum.safe.global/t/sep-x-outcomes-based-resource-allocation-framework-obra/4050/2' target='_blank' className={styles.a}>here</Link>.</p>
<p><strong>Other initiatives to improve governance</strong></p>
<p>SafeDAO approved 21 projects for Wave 1 Grants, which include funding proposals to improve governance.</p>
<p>SafeDAO has approved the <Link href='https://www.notion.so/Curia-Delegate-Platform-88241b4acfb3488fa7cb17ef32692736?pvs=4' className={styles.a} target='_blank'>Curia</Link> Team to work on the SafeDAO Governance Analytics Dashboard to improve accessibility to information, provide a history of each delegate, and offer insight into governance activities. This dashboard will deliver key governance metrics like participation, voter behavior, and power structures. The goal is to enhance trust, transparency, accessibility to information, and governance effectiveness.</p>
<p>SafeDAO has also approved a Wave 1 grant for StableLab to work on targeted solutions aimed at streamlining SafeDAO's governance process, increasing engagement, and creating new opportunities for community involvement. The proposed solutions include bi-weekly governance updates, monthly recaps, the development of a Recognized Delegate framework, and the creation of a SafeDAO Governance Handbook, among other resources.</p>
<p><Link href='https://www.notion.so/SEP-5-Redistribution-of-unredeemed-tokens-cd0968adb10646a2ad846c8ad357548b?pvs=4' className={styles.a} target='_blank'>SEP #5</Link>: Redistributing Unredeemed Tokens From User Airdrop Allocation is under implementation. This proposal aims to address the unintended imbalance in the distribution of voting power that arose due to 64.4% of the tokens from the user airdrop allocation not being redeemed. </p>
<p>The proposal redistributes half of those tokens proportionately to all those who previously redeemed SAFE tokens while separating 1/2 of the initial unclaimed tokens to explore other ideas for allocation in a later proposal. The redeeming period ended on October 27. This token distribution will hopefully invite existing token holder participation and extend tokens to other community members.</p>

       </div>
       <div id="section11" className={styles.section}> 
      <p className={styles.titleBlack}>Voting Process</p>
      <p>Since September 2022, SafeDAO follows this voting procedure, which has been updated to be inserted in the new time-bound governance framework. In each sprints, phase 0, 1 and 2 are conducted.</p>
      <img src="/images/safe-voting.png" alt="Safe Voting" className={styles.benefitsImage} /> 
       <p>Phase 0: Forum Discussion</p>
       <li>Anyone can submit a discussion on a new thread marked with [Discussion].</li>
       <p>Phase 1: Proposal and Feedback</p>
       <li>Anyone can create a SEP and post it on the Discourse Governance Forum marked with [Draft].</li>
       <li>Proposals posted must be consistent with the proposal template.</li>
       <li>Proposal will be addressed and voted on according to their type.</li>

       <p>Phase 2: Vote</p>
       <li><Link href='https://www.notion.so/Phase-2-Voting-process-7d253d8ea51e42c6ab5c754469f3ef9a?pvs=4' className={styles.a} target='_blank' >Submission threshold</Link>: SAFE holders with at least 20,000 SAFE can submit proposals on Snapshot. Governance participants who do not reach this threshold should find a proposal sponsor (such as a Safe Guardian) to launch a Snapshot vote.</li>
       <p>Voting requires a quorum of 10 million SAFE to vote on the DAO’s strategies, initiatives, review cycles and budget. Voting also follows a relative majority under a single-choice system for <Link href='https://forum.safe.global/t/how-to-safedao-governance-process/846' className={styles.a} target='_blank'>the SEP to be accepted.</Link></p></div>
        
       <div id="section12" className={styles.section}> 
       <h2 className={styles.sectionSubtitle}>Contribution Pathways</h2>
       </div>
     
       <div id="section13" className={styles.section}> 
       <p className={styles.titleBlack}>The Safe Guardian Program</p>
       <p>The Safe Guardian Program invites token holders to contribute and rewards them with SAFE tokens. </p>
       <p>So far, one retroactive award has been granted <Link href='https://forum.safe.global/t/safe-voting-power-and-circulating-supply/558' className={styles.a} target='_blank'>based on the Guardian's track record validated by the internal council. Foundation Council member Lukas Schor</Link> has outlined that, in order to reward key contributors and align them long-term:</p>
       <p><strong>40+ contributors have received 100 million tokens (10% of supply), and 50 million tokens (5% of supply) are reserved for future contributors. Tokens are vested over 4 years, and all 150 million tokens should be distributed by 2030.</strong></p>
       <p>Currently, there are no established proposals or guidelines to enforce the Safe Guardians Program</p>
       </div>

       <div id="section14" className={styles.section}>
        <p className={styles.titleBlack}>Safe Grants Program</p>
        <p>The Safe Grants Program (SGP) aims to foster a thriving community of contributors within the SafeDAO Ecosystem. </p>
        <p>Administered with financial support from the Safe Ecosystem Foundation, the SGP seeks to encourage development, adoption, research, and governance within the Safe Network. The program is structured into four grant categories, namely Safe (Build), Safe (Growth), Safe (Research), and Safe (Govern), each targeting specific objectives related to the growth and sustainability of Safe. </p>
        <p>SGP's initial wave will allocate $500,000 in funding from the Safe Ecosystem Foundation, with the potential for a second wave contingent on outcomes and community feedback. The SGP aligns with SafeDAO's commitment to building a diverse and extensive ecosystem, providing incentives for growing new initiatives.</p>
       
        </div>

        <div id="section15" className={styles.section}>
          <p className={styles.titleBlack}>Other initiatives</p>
          <li>Safe DAO conducts monthly hackathons with small prizes. Hackathons are announced on the forum.</li>
          <li>The Safe Core Team conducts community calls to boost community involvement and inform the community on protocol and governance updates.</li>
         <li>Developer documents are currently being refactored. It is expected documentation will be open for contributions from other developers or users.</li>
        
        <p>Stay informed on SafeDAO governance, strategy, and product discussions on the <Link href='https://forum.safe.global/' className={styles.a}>forum</Link>,<Link href='https://discord.com/invite/TwzFWhDSrW' className={styles.a}> Discord</Link>, and <Link href='https://twitter.com/safegovernance' className={styles.a}>Twitter</Link>.</p>
        
         </div>
          </div>
      </div>
  );
};

export default Article;