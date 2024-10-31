"use client";
import React from 'react';
import styles from '../ArticleLayout.module.css';
import Link from 'next/link';
const Article = () => {
  return (
      <div className={styles.articleContainer}>
          <div className={styles.menuContainer}>
              <ul className={styles.menu}>
                  <li className={styles.menuItem}><a href="#section1" className={styles.menuLink}>Gnosis Chain</a></li>
                  <li className={styles.menuItem}><a href="#section2" className={styles.menuLink}>Tokens</a></li>
                  <li className={styles.menuItem}><a href="#section3" className={styles.menuLink}>GnosisDAO Governance</a></li>
                  <li className={styles.menuItem}><a href="#section4" className={styles.menuLink}>Governance Framework</a></li>
                  <li className={styles.menuItem}><a href="#section5" className={styles.menuLink}>Core Team</a></li>
                  <li className={styles.menuItem}><a href="#section6" className={styles.menuLink}>Governance Proposals</a></li>
                  <li className={styles.menuItem}><a href="#section7" className={styles.menuLink}>Gnosis Improvement Proposals</a></li>
                  <li className={styles.menuItem}><a href="#section8" className={styles.menuLink}>Governance Process and Mechanisms</a></li>
                  <li className={styles.menuItem}><a href="#section9" className={styles.menuLink}>Voting Metrics and Insights</a></li>
                  <li className={styles.menuItem}><a href="#section10" className={styles.menuLink}>Voting Process</a></li>
                  <li className={styles.menuItem}><a href="#section11" className={styles.menuLink}>Participation Concerns</a></li>
                  <li className={styles.menuItem}><a href="#section12" className={styles.menuLink}>Contribution Pathways</a></li>
                  <li className={styles.menuItem}><a href="#section13" className={styles.menuLink}>Validators on Gnosis Chain</a></li>
                  <li className={styles.menuItem}><a href="#section14" className={styles.menuLink}>Gnosis Chain Bounties</a></li>
                  <li className={styles.menuItem}><a href="#section15" className={styles.menuLink}>Events and Hackathons</a></li>




            
            
             </ul>
          </div>
          <div className={styles.contentContainer}>
          <div id="section1" className={styles.section}>
                  <h2 className={styles.sectionTitle}>Gnosis Chain</h2>
                  <div className={styles.quoteContainer}>
        <p className={styles.quote}>
        <strong>Gnosis</strong> began as a decentralized prediction market on Ethereum but has evolved into an <Link href="https://decrypt.co/resources/what-is-gnosis-learn-article" target='_blank' className={styles.link}>open framework ecosystem </Link> that encompasses its own chain, providing a platform for developing and building dApps and products.  </p>
      </div>
        <p>Some of the products built within the Gnosis ecosystem include:</p>
        <ul>
          <li><strong>Safe:</strong> a decentralized custody protocol and collective asset management platform</li>
          <p></p>
          <li><strong>Zodiac:</strong> A set of composable DAO tools that integrate directly with the Safe interface. Developers can build their own Zodiac modules to enhance existing practices in the DAO ecosystem and help shape its future development.</li>
          <p></p>
          <li><strong><Link href="https://github.com/cowprotocol/cowswap" target='_blank' className={styles.link}>Cow Swap:</Link></strong> a trading interface built on top of CoW Protocol</li>
          <p></p>
          <li><strong>Gnosis chain:</strong> a credibility neutral public blockchain network.</li>

        </ul>
        
        <p>In late 2020, Gnosis announced plans to decentralize the governance of the Gnosis ecosystem into a DAO.</p>
        <p>In 2021, the xDai and GnosisDAO communities voted to combine their vibrant ecosystems to create the Gnosis Chain: a credibly neutral, open L1 network. In addition to being fully EVM-compatible, Gnosis Chain supports important Ethereum updates, such as EIP implementations, through its consensus-layer Gnosis Beacon Chain (GBC). Gnosis Chain merged with GBC on December 8, 2022.</p>
        <p>You can read more about the merger in <Link href='https://forum.gnosis.io/t/gip-16-gnosis-chain-xdai-gnosis-merge/1904' target='_blank' className={styles.link}>GIP #16.</Link></p>
          </div>

          <div id="section2" className={styles.section}>
                  <p className={styles.titleBlack}>Tokens</p>
                  <p className={styles.paragraph}>Both **$GNO and** $**xDai** are native tokens of the Gnosis Ecosystem.</p>
                  <p><Link href='https://docs.gnosischain.com/about/tokens/gno' target='_blank' className={styles.link}>$GNO is used:</Link></p>
                  <ul>
                    <li>To stake and validate blocks within the Gnosis Beacon Chain.</li>
                    <li>As the governance token for the GnosisDAO.</li>
                  </ul>
              <p>Apart from GNO, GnosisDAO holds 8.9% of the $SAFE Allocation and can vote in Safe Ecosystem Proposals with <Link href='https://forum.safe.global/t/discussion-about-safedao-voting-power/1872/4' target='_blank' className={styles.link}>considerable voting power.</Link></p>
          </div>
           
          <div id="section3" className={styles.section}>
                  <h2 className={styles.sectionSubtitle}> Gnosis Governance</h2>
          </div>
         <div id="section4" className={styles.section}> 
                  <p className={styles.titleBlack}>Governance Framework </p>
                  <p>Gnosis allows members to delegate their vote through Snapshot. However, its complex process and overall low participation of the community on voting led to discussions on implementing a new governance model based on delegates (read about it in GIP-77) and whether to compensate them. </p>
                  <p>Gnosis is currently in the final stages of developing GIP-77. Stay tuned with Gnosis to get the latest updates on the progress.</p>
                 
            
                  <img src="/images/gnosis-dao.jpg" alt="Gnosis DAO" className={styles.benefitsImage} /> 
         </div>

         <div id="section5" className={styles.section}> 
         <p><strong>Core Team</strong></p>
         <p>The Core Team of Gnosis consists of seven members.</p>
         <p>The team includes Martin Köppelmann, Stefan George, and Frederike Ernst. Their focus is now on developing the ecosystem around Gnosis Chain to make it a thriving network.</p>
         </div>

         <div id="section6" className={styles.section}> 
              <h2 className={styles.sectionSubtitle}>Governance Proposals</h2>
         </div>

        <div id="section7" className={styles.section}> 
        <p className={styles.titleBlack}>Gnosis Improvement Proposals</p>
        <p>Accounts holding more than 1 GNO can create proposals in the following types:</p>
         <ol>
         <li className={styles.listItem}>Meta: proposals aiming to change governance, administration, and treasury.</li>
         <li className={styles.listItem}> Funding proposals: new GIPs to require funding for reimbursements or reward programs.</li> 
         <li className={styles.listItem}> Service Agreements: funding proposals for maintenance work or other recurring services.
           Gnosis proposals on Snapshot can be found <Link href='https://snapshot.org/#/gnosis.eth' target='_blank' className={styles.link}>here</Link>.</li>
          </ol>
         </div>

         <div id="section8" className={styles.section}> 
        <h1 className={styles.sectionSubtitle}>Governance Process and Mechanisms</h1>
         </div>
             
         <div id="section9" className={styles.section}> 
         <p className={styles.titleBlack}>Voting Metrics and Insights</p> 
         <p><strong>34k Average GNO Committed to Voting</strong></p>
          <p>As of the approval of <Link href='https://messari.io/governor/proposal/28d53768-17b9-41d4-9ae2-cc1bd5cad453' target='_blank' className={styles.link}>GIP 44</Link>, GNO holders with invested, staked, or locked positions retain governance power in GnosisDAO votes.</p>
          </div>

         <div id="section10" className={styles.section}>
          <p className={styles.titleBlack}>Voting Process</p>
          <p>The governance process for GIPs follows this process:</p>
          <ol>
            <li><strong>Proposal Creation:</strong> Community members can create proposals to allocate funds, change governance structure, or make decisions about operations.</li>
            <p></p>
            <li><strong>Proposal Specification:</strong> Community members can discuss proposals in the forum and provide feedback.</li>
            <p></p>
            <li><strong>Voting:</strong>A poll is created to gauge community opinion after initial feedback. A weighted vote is conducted in the snapshot phase. A majority of 'yes' votes and 75k 'yes' votes are needed to pass. Skipping or failing the first temperature check can make it more likely to fail</li>
            <p></p>
            <li><strong>Proposal Execution:</strong> Any member can trigger the attached DAO transactions if the proposal passes.</li>
            <p></p>
            <li><strong>Follow-up:</strong>The teams responsible for the proposal must provide regular updates on its progress and impact.</li>
          </ol>

         <img src="/images/gnosis-voting.jpg" alt="Gnosis Votign Process" className={styles.benefitsImage} />
         <p>For proposals to be accepted in this final phase, there must be one outcome with a relative majority of GNO used for signaling on the GnosisDAO Snapshot poll accompanied by a ‘for’-voting quorum of a minimum of 4% of the circulating supply of GNO. If the relative majority of GNO used in signaling on the Snapshot poll indicates the result ‘Against’ or ‘Abstain’, the proposal will not be accepted and will be considered closed.</p>
         <img src="/images/gnosis-voting-2.jpg" alt="Gnosis Votign Process Two" className={styles.benefitsImage} />
         </div>
             
    
    <div id="section11" className={styles.section}>    
    <h1 className={styles.sectionSubtitle}>Contribution Pathways</h1>  
    <p>As seen in the Gnosis Guild Treasury Allocation to Gnosis Ltd. budget, their seven core team members and founding members receive compensation for their contributions to the Ecosystem. Beyond that, a key alliance for Gnosis has been the Karpatkey team. Karpatkey has provided treasury management services to the DAO since the <Link href='https://snapshot.org/#/gnosis.eth/proposal/0x86cb89a974a075451f8bfae1892d08136fae8c4321ada07025ff8b2b5edddadc' target='_blank' className={styles.link}>approval</Link> of <Link href='https://snapshot.org/#/gnosis.eth/proposal/0x86cb89a974a075451f8bfae1892d08136fae8c4321ada07025ff8b2b5edddadc' target='_blank' className={styles.link}>GIP #20 </Link> in 2022. They offer expertise in treasury management, risk analysis, and execution of DeFi strategies while promoting industry best practices, transparency, and reporting.</p>
    <p>Gnosis has various ways to contribute to the ecosystem, which include both one-time and ongoing opportunities.</p>
    <p>For example, in the past, BootNode team members have contributed to Gnosis by providing engineering services to the Gnosis ecosystem. After the <Link href='https://forum.gnosis.io/t/gip-61-shall-gnosisdao-fund-bootnode-as-a-core-contributor-team/5683/13' target='_blank' className={styles.link}>GIP-61</Link> approval, their request for funding for their previous contributions was successfully fulfilled.</p>
    </div>


    <div id="section12" className={styles.section}>
    <p className={styles.titleBlack}>Validators on Gnosis Chain</p>
    <p>According to Gnosis, "validators from underrepresented countries" are rewarded through the Gnosis Validator Incentive Program (Gnosis VIP).</p>
    <p>As of October 2023, the Gnosis Chain has 149,696 <Link href='https://www.d14n.info/' className={styles.link} target='_blank'>Active Validators</Link> obtaining rewards through staking GNO individually or through staking pools.</p>
    <p>You can learn more about staking in the <Link href='https://forum.gnosis.io/t/awesome-gnosis-chain-staking-resources/7392' target='_blank' className={styles.link}>Awesome Gnosis Chain Resources </Link>post created by @armog.</p>
    </div>
  
  <div id="section13" className={styles.section}>
  <p className={styles.titleBlack}>Gnosis Chain Bounties</p> 
  <p>Bounties are non-technical missions that invite community members to participate and create value by creating informative content about the Gnosis Chain</p>
  <p>Bounties are paid out in GNO through Praise, a reward system that lets other members recognize their peer contributions and reward them. Learn more here.</p>
  </div>

  <div id="section14" className={styles.section}>
  <p className={styles.titleBlack}>Events and Hackathons</p> 
  <p>Stay current on all events, updates, workshops, and resources through <Link href='https://gnosischain.ghost.io/' className={styles.link}>Gnosis Chain Weekly</Link>, <Link href='https://discord.com/invite/gnosischain' className={styles.link}>Discord</Link>, and <Link href='https://twitter.com/gnosischain' className={styles.link}>Twitter.</Link></p>
  </div>


          </div>
      </div>
  );
};

export default Article;