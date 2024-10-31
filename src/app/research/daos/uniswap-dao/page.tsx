"use client";
import React from 'react';
import Link from 'next/link';
import styles from '../ArticleLayout.module.css';

const Article = () => {
  return (
      <div className={styles.articleContainer}>
          <div className={styles.menuContainer}>
              <ul className={styles.menu}>
                  <li className={styles.menuItem}><a href="#section1" className={styles.menuLink}>Uniswap</a></li>
                  <li className={styles.menuItem}><a href="#section2" className={styles.menuLink}>Uniswap Labs</a></li>
                  <li className={styles.menuItem}><a href="#section3" className={styles.menuLink}>Uniswap Foundation</a></li>
                  <li className={styles.menuItem}><a href="#section4" className={styles.menuLink}>Uniswap Governance</a></li>
                  <li className={styles.menuItem}><a href="#section5" className={styles.menuLink}>Governance Framework</a></li>
                  <li className={styles.menuItem}><a href="#section6" className={styles.menuLink}>Token-Holders</a></li>
                  <li className={styles.menuItem}><a href="#section7" className={styles.menuLink}>Governance Proposals</a></li>
                  <li className={styles.menuItem}><a href="#section8" className={styles.menuLink}>Governance Process</a></li>
                  <li className={styles.menuItem}><a href="#section9" className={styles.menuLink}>Voting Metrics and Insights</a></li>
                  <li className={styles.menuItem}><a href="#section10" className={styles.menuLink}>Voting Process</a></li>
                  <li className={styles.menuItem}><a href="#section11" className={styles.menuLink}>Contribution Pathways</a></li>
                  <li className={styles.menuItem}><a href="#section12" className={styles.menuLink}>Uniswap-Arbitrum Grant Program</a></li>
                  <li className={styles.menuItem}><a href="#section13" className={styles.menuLink}>Uniswap Grants</a></li>
                  <li className={styles.menuItem}><a href="#section14" className={styles.menuLink}>Build on Uniswap</a></li>
                  <li className={styles.menuItem}><a href="#section15" className={styles.menuLink}>Keep informed</a></li>


              </ul>
          </div>
          <div className={styles.contentContainer}>
              <div id="section1" className={styles.section}>
                  <h2 className={styles.sectionTitle}>Uniswap</h2>
                  <div className={styles.quoteContainer}>
        <p className={styles.quote}>
          The <strong>Uniswap Protocol</strong>is a decentralized exchange and public good owned and governed by UNI token holders through Uniswap DAO.
        </p>
      </div>
         </div>


         <div id="section2" className={styles.section}>
                  <p className={styles.titleBlack

                  }>Uniswap Labs</p>
             
             <p className={styles.paragraph}>Uniswap Labs initially developed the Uniswap Protocol and the Uniswap Interface. The Uniswap Protocol is an open-source protocol that provides liquidity and trading ERC20 tokens on Ethereum. The DEX is available on multiple blockchains.</p>
            <p className={styles.paragraph}>After delegating governance to the DAO, it now focuses on building products to support the Uniswap Ecosystem, such as <Link href="https://blog.uniswap.org/uniswapx-protocol" target='_blank' className={styles.link}>
            Uniswap X. </Link> </p>
           
         </div>
           
         <div id="section3" className={styles.section}>
                  <p className={styles.titleBlack}>Uniswap Foundation</p>
                  <p>The Uniswap Foundation is a non-profit organization established in 2022. Its primary objective is to promote the expansion, decentralization, and longevity of DeFi. The Uniswap community (DAO) granted funding for the Foundation after endorsing a community [governance proposal](https://app.uniswap.org/#/vote/2/24).
                  The Uniswap Foundation operates independently from other entities within the Uniswap ecosystem, including Uniswap Labs.</p>
         </div>

        <div id="section4" className={styles.section}> 
                  <h2 className={styles.sectionSubtitle}>Uniswap Governance </h2>
                  <p>The Uniswap DAO is responsible for managing the development of Uniswap and its ecosystem. Its governance is facilitated through the UNI token.</p>
                  <img src="/images/uniswap-dao.jpg" alt="Wniswap DAO" className={styles.benefitsImage} />
 
                  </div>

         <div id="section5" className={styles.section}> 
         <p className={styles.titleBlack}>Governance Framework</p> 
         <p>The DAO operates on a simple framework, where the token holders cast their votes on the proposals submitted to them. Token-holders are the only essential players in the governance structure.</p>
           </div>

       <div id="section6" className={styles.section}> 
       <p className={styles.titleBlack}>Token-Holders</p>
       <p>UNI holders ensure that governance decisions comply with applicable laws and regulations.</p>
       <p>They have ownership of:</p>
       <ul className={styles.orderedList}>
            <li className={styles.listItem}>Uniswap governance</li>
            <li className={styles.listItem}>UNI community treasury</li>
            <li className={styles.listItem}>The protocol fee switch</li>
            <li className={styles.listItem}>All subnames</li>
            <li className={styles.listItem}>Uniswap Default List (tokens.uniswap.eth)</li>
            <li className={styles.listItem}><Link href="https://twitter.com/Uniswap/status/1126506339075641344?s=20" target='_blank' className={styles.link}>SOCKS</Link> liquidity tokens</li> 
                   </ul>
       </div>


      <div id="section7" className={styles.section}> 
      <p className={styles.titleBlack}>Governance Proposals</p>
      <p>The Uniswap DAO executes decisions on-chain through a Compound Governor Bravo smart contract. Any addresses with over 2.5M UNI (0.25% of total supply) delegated to it may propose governance actions containing executable code</p>
      <p>Proposals within Uniswap DAO can include:</p>
      <ul>
  <li>Deployments of the Protocol onto new chains</li>
  <p></p>
  <li>Funding programs</li>
  <p></p>
  <li>Creating new governance bodies</li>
  <p></p>
  <li>Modifying governance mechanisms</li>
</ul>


<p>A proposal is approved if it obtains the following:</p>
<ul>
  <li>Simple Majority (i.e., more 'for' votes than 'against.')</li>
  <p></p>
  <li>Quorum, measured as a fixed amount of positive votes. In V3 governance, the quorum amount was increased to require proposals obtaining over 40M 'for' votes.</li>
</ul>


<p>Current proposals can be found on <Link href="https://www.tally.xyz/gov/uniswap" target='_blank' className={styles.link}>Tally </Link> and   <Link href="https://vote.uniswapfoundation.org/" target='_blank' className={styles.link}>Uniswap Agora.</Link></p>
</div>



<div id="section8" className={styles.section}> 
<p className={styles.titleBlack}>Governance Process</p>
<p><strong>Voting Metrics an Insights</strong></p>
<ul>
  <li>19% participation in on chain voting and a 97% on chain proposal passing rate. </li>
  <p></p>
  <li>The amount of voter participation on proposals has <Link href="https://dune.com/butterd/uniswap-governance-power-structurel" target='_blank' className={styles.link}> rarely surpassed 5K since April 2023.</Link></li>
  <p></p>
  <li>Voting power cast per proposal shows that <Link href="https://dune.com/butterd/uniswap-governance-power-structure" target='_blank' className={styles.link}>voting power participation per proposal is fairly consistent.</Link></li>
  <p></p>
  <li>Currently, <Link href="https://sybil.org/#/delegates/uniswap" target='_blank' className={styles.link}> 33 addresses</Link> hold enough voting power delegated to create governance proposals.</li>
</ul>

<p>To understand voting power distribution in Uniswap DAO, we can look at the share of total voting power geld by the top addresses. Currently, the top 5 and top 10 addresses hold 21% of total voting power respectively.</p>

<img src="/images/voting-uniswap.jpg" alt="Uniswap Voting" className={styles.benefitsImage} />
<p>Delegation platforms update delegate’s supported proposals so the community can choose who to delegate to.</p>
</div>



<div id="section9" className={styles.section}> 
<p className={styles.titleBlack}>Voting Process</p>
<ol>
<li><strong>Request for comment:</strong>  A quorum must be reached on the temperature check of at least 10M UNI ‘for’ votes to move onto Phase 3.</li>
<p></p>
<li><strong>Snapshot temperature check:</strong> A quorum must be reached on the temperature check of at least 10M UNI ‘for’ votes to move onto Phase 3.</li>
<p></p>
<li><strong>Governance proposal:</strong> Create the proposal through an interface (on Uniswap 93, Tally 21, or Boardroom 24) or through writing the calldata. Submit the proposal or get someone with the necessary submission threshold to submit it for you.</li>
<p></p>
<li><strong>Voting and execution: </strong> The proposal undergoes a two-day waiting period and then a seven-day voting period. If a proposal passes the final on chain vote it is queued in a timelock contract, where the proposed changes can be executed after a 2-day delay</li>
</ol>

<p>Read more about the current governance process <Link href="https://gov.uniswap.org/t/community-governance-process-update-jan-2023/19976" target='_blank' className={styles.link}> here.</Link></p>
<img src="/images/voting-process.jpg" alt="Voting Process" className={styles.benefitsImage} />
</div>

<div id="section10" className={styles.section}> 
<h2 className={styles.sectionSubtitle}>Contribution Pathways</h2>
<p>Uniswap conducts a series of grants through the Uniswap Foundation and partnerships with other ecosystems</p>
</div>


<div id="section11" className={styles.section}> 
  <p className={styles.titleBlack}>Uniswap-Arbitrum Grant Program</p>
  <p>This 6-month grant program aims to advance projects that build exclusively on the Uniswap-Arbitrum ecosystem. Learn more about the program and how to apply  <Link href="https://www.notion.so/Uniswap-Arbitrum-Grant-Program-UAGP-1c1e8b33bc60436993dd65e37d022f9d?pvs=4" target='_blank' className={styles.link}> here.</Link></p>
  </div>
  <div id="section12" className={styles.section}> 
  <p className={styles.titleBlack}>Uniswap Grants</p> 
  <p>Uniswap funds proposals through:</p>
  <ul>
    <li><strong>Grants RFPs</strong>, where the Foundation gathers pain points and funds submitted ideas and initiatives.</li>
    <li><strong>Grants Program</strong>, where the Foundation allocates funds to public goods from contributors on a rolling basis. Currently, Uniswap is exploring long-term grants and will be launching new funding initiatives in early 2024.</li>
  </ul>
  </div>


  <div id="section13" className={styles.section}> 
  <p className={styles.titleBlack}>Build on Uniswap</p> 
  <p>Learn through its <Link href="https://www.uniswapfoundation.org/hacker-home" target='_blank' className={styles.link}> various resources </Link> for hackers and start building on Uniswap.</p>
    </div>

    <div id="section14" className={styles.section}> 
  <p className={styles.titleBlack}>Keep informed</p> 
  <p>Read what’s new on Uniswap on<Link href="https://www.reddit.com/r/UniSwap/" target='_blank' className={styles.link}> Reddit </Link>,
  <Link href="https://gov.uniswap.org/" target='_blank' className={styles.link}> Forum</Link>,
  <Link href="https://discord.com/invite/FCfyBSbCU5" target='_blank' className={styles.link}> Discord</Link>,
  <Link href="https://twitter.com/UniswapFND" target='_blank' className={styles.link}> Twitter</Link>,
  <Link href="https://github.com/Uniswap" target='_blank' className={styles.link}> Github</Link>,
  <Link href="https://uniswapfoundation.mirror.xyz/" target='_blank' className={styles.link}> Uniswap Foundation’s blog. </Link></p>
    </div>
          </div>
      </div>
  );
};

export default Article;