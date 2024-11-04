"use client";
import React from 'react';
import Link from 'next/link';
import styles from '../ArticleLayout.module.css';

const Article = () => {
  return (
      <div className={styles.articleContainer}>
          <div className={styles.menuContainer}>
              <ul className={styles.menu}>
                  <li className={styles.menuItem}><a href="#section1" className={styles.menuLink}>Nouns</a></li>
                  <li className={styles.menuItem}><a href="#section2" className={styles.menuLink}>Nouns Foundation</a></li>
                  <li className={styles.menuItem}><a href="#section3" className={styles.menuLink}>Nouns DAO Governance</a></li>
                  <li className={styles.menuItem}><a href="#section4" className={styles.menuLink}>Governance Framework</a></li>
                  <li className={styles.menuItem}><a href="#section5" className={styles.menuLink}>Nouns Holders</a></li>
                  <li className={styles.menuItem}><a href="#section6" className={styles.menuLink}>Nouncil</a></li>
                  <li className={styles.menuItem}><a href="#section7" className={styles.menuLink}>Sub-DAOs </a></li>
                  <li className={styles.menuItem}><a href="#section8" className={styles.menuLink}>Props House</a></li>
                  <li className={styles.menuItem}><a href="#section9" className={styles.menuLink}>Nouns Fork</a></li>
                  <li className={styles.menuItem}><a href="#section10" className={styles.menuLink}>Governance Proposals</a></li>
                  <li className={styles.menuItem}><a href="#section11" className={styles.menuLink}>Governance Process and Mechanisms</a></li>
                  <li className={styles.menuItem}><a href="#section12" className={styles.menuLink}>Voting metrics and Insights</a></li>
                  <li className={styles.menuItem}><a href="#section13" className={styles.menuLink}>Voting Process</a></li>
                  <li className={styles.menuItem}><a href="#section14" className={styles.menuLink}>Overspending and trustworthiness concerns</a></li>
                  <li className={styles.menuItem}><a href="#section15" className={styles.menuLink}>Contribution Pathways</a></li>
                  <li className={styles.menuItem}><a href="#section16" className={styles.menuLink}>Garden Rounds</a></li>


              </ul>
          </div>
          <div className={styles.contentContainer}>
              <div id="section1" className={styles.section}>
                  <h2 className={styles.sectionTitle}>Nouns</h2>
                  <div className={styles.quoteContainer}>
        <p className={styles.quote}>
        Nouns DAO creates a colorful pixel character as a single NFT every day. The supply of Nouns is unlimited and will continue to be minted indefinitely.        </p>
        The Nouns are auctioned daily to the highest bidder, and all proceeds go to Nouns DAO
      </div>
      <p> During the project's first five years, every 10th Noun will be sent to the Nounder's multisig (5/10) and held in trust. Eventually, these Nouns will be distributed to individual <Link href='https://nouns.wtf/nounders' className={styles.link} target='_blank'>Nounders</Link>. After five years, each Nounder could receive up to 1% of the Noun supply.   </p>
       </div>
     
       <div id="section2" className={styles.section}>
       <p className={styles.titleBlack}>Nouns Foundation</p>
       <p>The Nouns Foundation aims to promote the growth and progress of the Nouns DAO and Nouns Protocol.</p>
       <p>The foundation directors are obligated to always act in the best interests of the foundation company and its goals. All funds received by the foundation will be used to enhance the ecosystem. It is worth mentioning that funds cannot be refunded to the DAO once they are transferred to the Nouns Foundation.</p> 
        </div>
           
       <div id="section3" className={styles.section}>
       <h2 className={styles.sectionSubtitle}>Nouns DAO Governance</h2>
       </div>
      
      <div id="section4" className={styles.section}> 
       <p className={styles.titleBlack}>Governance Framework </p>
       <img src="/images/nouns-dao.jpg" alt="Nouns DAO" className={styles.benefitsImage} />
       <p>Nouns DAO utilizes a fork of <Link href='https://compound.finance/governance' className={styles.link} target='_blank'>Compound Governance</Link> and is the main governing body of the Nouns ecosystem. However, Verbs members have begun discussing adopting a new governance model.</p>
       <p>The “Nouniverse” is comprised of token holders, Nounish DAOs, the Nouncil and Props House</p>
      </div>

      <div id="section5" className={styles.section}> 
       <p className={styles.titleBlack}>Nouns Holders</p> 
           
       <p>Each Noun holder is an irrevocable member of Nouns DAO and entitled to one vote in all governance matters. Noun votes are non-transferable but delegable. Currently, 20 delegates hold delegation over <Link href='https://www.tally.xyz/gov/nounsdao/delegates' className={styles.link} target='_blank'>more than 8 Nouns</Link>.</p>
       </div>

        <div id="section6" className={styles.section}> 
        <p className={styles.titleBlack}>Nouncil</p>
        <p>Noun members created a council of builders working within NounsDAO to proliferate CC0 and nounish culture. Any member can apply by demonstrating a track record of Nounish Building. To remain as a nouncilor, members must participate in voting consistently. If a member's vote participation falls below the minimum, they will be <Link href='https://docs.google.com/document/d/1NZXpxwJcTfjuafqRaSfl8TMJ8uQR2tX_JFSn5WO5nzg/edit' target='_blank' className={styles.link}>automatically removed</Link>from Nouncil.</p>
      </div>

      <div id="section7" className={styles.section}> 
      <p className={styles.titleBlack}>Sub-DAOs</p> 
    <p>Noun DAO members created <Link href='https://nouns.center/subdaos' className={styles.link} target='_blank'>SubDAOs</Link>and communities for group voting, funding missions, and creating art projects.</p>
    <ul>
      <li>Shark DAO</li>
      <li>Goop Troop</li>
      <li>Lil Nouns DAO</li>
      <li>Gnars DAO</li>
      <li>Foodnouns DAO</li>
      <li>SZNouns DAO</li>
      <li>nuNouns DAO</li>
      <li>Wizards DAO</li> 
    </ul>
    <Link href='https://x.com/GoodBeats/status/1645815596242591744'>
    <img src="/images/tw-nouns.png" alt="Nouns TW" className={styles.benefitsImageTwo} />
    </Link>
    <p><Link href='https://nouns.center/groups' target='_blank' className={styles.link}>Communities</Link> hold no voting power but can promote engagement, governance interest, and participation.</p>
      </div>

      <div id="section8" className={styles.section}> 
     <p className={styles.titleBlack}>Props House</p> 
     <p>Props House is an infrastructure and public goods that came about through an on-chain Noun proposal. Following the new iteration of Prop House, through funding rounds, communities auction and distribute a fixed amount of funds <Link href='https://nouns.center/funding/prophouse' className={styles.link} target='_blank'>to creators with "the best ideas."</Link> It is unnecessary for creators who submit their projects to be Noun holders.</p>
     <p>Twenty-four volunteers, "Gardeners," vote off-chain on PH's behalf in the funding rounds and decide which projects to allocate funds to. You can find the elected gardeners <Link href='https://prop.house/nouns/gardener-selection' className={styles.link} target='_blank'>here</Link>.</p>
     <p>This new iteration of the Prop House aims to avoid the waning participation and voter imbalance experienced earlier. As it was declared in its <Link href='https://www.nouns.camp/proposals/381' className={styles.link} target='_blank'>proposal:</Link></p>
     <p>"PH open rounds started to go largely unattended. What's worse, rounds increasingly ran the risk of being arbitrarily determined by whichever large voter decided to engage in a given round."</p>
      </div>

     <div id="section9" className={styles.section}> 
    <p className={styles.titleBlack}>Nouns Fork</p>
    <p>As of August 2023, Nouns DAO upgraded into V3, allowing Nouns Fork as a minority protection mechanism and a way to better align DAO members to the governance that governs them.</p>
    <p>Nouns fork allows token holders to create a new instance of the Nouns DAO and exit into a new one within the ecosystem.</p>
    <p>To create a new instance, at least 20% of the token supply must be escrowed into the fork. Once it is reached, anyone can execute the fork, create the new dao, and the "forking period" commences.</p>
    <p>During this seven-day period, the equivalent percentage of the tokens escrowed is transferred to the new DAO's treasury. New members can also choose to exit the new DAO during this period. Ids and NFTs corresponding to the members who decided to leave are also sent to the forked DAO. Here, you can find a summary of <Link href='https://twitter.com/eladmallel/status/1681687404011216896' className={styles.link} target='_blank'>how Nouns Fork works</Link>.</p>
   

    <p>So far, two forks have been executed:</p>
    <ul>
      <li>Fork #0 was conceived with the premise that Noun's early adopters were only partially aligned with Nounders. It was followed by some members speculating with Noun value given that by joining a fork, the Nouns that joined the executed new DAO took funds from the DAO equivalent to the book value of nouns taken (amount of nouns/treasury value). 472 Nouns joined this fork with a pro-rata share of the project’s <Link href='https://thedefiant.io/nouns-nft-holders-opt-to-rage-quit-through-new-fork' className={styles.link} target='_blank'> nearly $50M treasury</Link>.</li>
      <p></p>
      <li>Fork #1 benefited the DAO as 69 members decided to join the fork, one Nouner even declared his “complete loss of trust in Nounders”.</li>
    </ul>
    
    <p>After Fork 0 and Fork 1 the treasury has 541 Nouns.</p>
   
   <p>Read more about Nouns Fork <Link href='https://nouns.wtf/fork' className={styles.link}>here</Link>.</p>
   
     </div>


     <div id="section10" className={styles.section}> 
     <p className={styles.titleBlack}>Governance Proposals</p> 
     <p>Unlike Props House governance, governance proposals within Nouns DAO happen both off- and on-chain.</p>
     <p>Only Noun owners, 'nouners,' can submit official proposals to the DAO for funding. A minimum threshold of 1 Noun is required to submit proposals. But if a non-nouner community member would like to submit a proposal, he can ask the community to do so.</p>
     </div>
     <div id="section11" className={styles.section}> 
     <p className={styles.titleBlack}>Process and Mechanisms</p> 
     </div> 
     <div id="section12" className={styles.section}> 
     <p className={styles.titleBlack}>Voting metrics and Insights</p>
     <p>Before Nouns Fork implementation, 5 Nouners held <Link href='https://www.tally.xyz/gov/nounsdao' target='_blank' className={styles.link}>more than 60%</Link> of the voting power, raising concern about voter power concentration. Furthermore, 2 delegates had about 8% of all voting power; with their efforts combined and without any other, they could pass proposals by themselves.</p>

     </div>

     <div id="section13" className={styles.section}> 
     <p className={styles.titleBlack}>Voting Process</p>
     <p>Through proposal <Link href='https://nouns.wtf/vote/376' className={styles.link}>376</Link>, timelines in the voting process were modified. This was enacted to speed up governance process, given the drop in amount of voters after Nouns Fork.</p>
     <p>Voting occurs within the Compound Governor Framework</p>
     <ul>
      <li>Phase 1: Post On Discourse and take into account Community Feedback</li>
      <p></p>
      <li>Phase 2: The voting period begins after a 2.5 day editing period, followed by a 0.5 day voting delay period. </li>
      <p></p>
      <li>Phase 3: Voting is open for 4 days after which the end result is executed instantly.</li>
     </ul>
     <img src="/images/nouns-governance.jpg" alt="Nouns Governance" className={styles.benefitsImage} />
     <p>A proposal needs a simple majority to pass, and a minimum of 10% of total votes is reached (quorum).</p>
     <p>At 2023's ETH Denver, Nouns DAO developers <Link href='https://twitter.com/davidbrai' className={styles.link} target='_blank'>David Brailovsky</Link> and <Link href='https://twitter.com/eladmallel' className={styles.link} target='_blank'>Elad Mallel</Link> announced that the team plans to <Link href='https://www.youtube.com/watch?v=rw_GU6Gs81o' className={styles.link} target='_blank'>implement new features</Link>, such as private voting, to strengthen the Nouns ecosystem further. Examples include a dynamic quorum, a conditional objection period, and more.</p>
     </div> 

     <div id="section14" className={styles.section}> 
     <p className={styles.titleBlack}>Overspending and trustworthiness concerns</p> 
     <p>Noun DAO serves as an example where a high concentration of voting power and insufficient checks and balances can result in the abuse of power. In particular, this abuse is manifested in the form of misspending and exorbitant salaries. Notoriously:</p>
     <ul>
      <li><Link href='https://nouns.wtf/vote/111' className={styles.link} target='_blank'>Noun 22</Link>, who earns a vast 360 ETH salary a year from the DAO</li>
      <li>Toady Hawk earns ~148 ETH salary a year from the DAO.</li>
     </ul>
     <p>Both delegates hold over 40 Nouns in delegation and about 8% of the voting power. These salaries need voting approval. Members have raised <Link href='https://www.redlion.news/article/corruption-at-nouns-dao' className={styles.link} target='_blank'>concerns</Link>about their ability to approve their salaries single-handedly.</p>
    
     <p>High spending is also present in the nouncil, subDAOs, and hiring contractors.</p>
     <p>Nouncil member's compensation is currently at 10 ETH annually. In some instances,<Link href='https://docs.google.com/spreadsheets/d/1LNVP0DBLPdoxgRy6Cb0egU7TSaljkheJ0idT_JP6koY/edit#gid=1104529391' className={styles.link} target='_blank'>Nouncil members have received retroactive awards.</Link></p>
    
     <p>SubDAOs Contributor's salary varies drastically:</p>
     <ul>
      <li>The <Link href='https://nouns.wtf/vote/128' className={styles.link} target='_blank'>Nouns Square</Link>- ~72 ETH annually</li>
      <li><Link href='https://lilnouns.wtf/vote/68' className={styles.link} target='_blank'>Lil Nouns</Link>- 16 ETH annually</li>
      <li>NSFW - 14 ETH per year</li>
      <li>Prop House - 36 ETH annual salary to do a month of weekly Twitter spaces.</li>
     </ul>
     <p>The Noun DAO has other paid contributors, such as the <Link href='https://discourse.nouns.wtf/t/proposal-to-re-elect-brian-as-nouns-dao-engineer-resident/815/3' className={styles.link}>engineering resident</Link> elected by the DAO and received a compensation of 62.52 ETH over six months (10.42 ETH per month).</p>
     <p>The high level of spending is especially significant, given that the value of Nouns has decreased since its launch. As a result, many members lost trust in the DAOs and chose to leave when they were given the opportunity to vanilla rage quit and join forks.</p>
     </div> 
    
     <div id="section15" className={styles.section}> 
     <h2 className={styles.sectionSubtitle}>Contribution Pathways</h2> 
     </div> 

     <div id="section16" className={styles.section}> 
     <p className={styles.titleBlack}>Garden Rounds</p> 
     <p>Contribution pathways have changed over time in Nouns DAO as they chose to close Small Grants and focus on rebranding Prop House Rounds into the Nouns Garden initiative. Nouns Garden intends to revive participation in community-funded grants within the Noun Ecosystem and fund early to mid-stage ideas through Garden Rounds.</p>
     <p>Garden Rounds awards the two chosen initiatives with 5 ETH. Initiatives can be posted both by Noun and non-noun owners. Garden Round 1 ends on October 31st, and a second round is expected to begin on November 6th. See more on the <Link href='https://www.nouns.camp/proposals/381' className={styles.link} target='_blank'>Nouns Garden launch proposal</Link> and <Link href='https://prop.house/nouns' className={styles.link}>Garden Rounds</Link>.</p>
    
     <p></p>
     <p>Nouns DAO also encourages unfunded contributors to boost the noun meme through permissionless building, creating in the nouns ecosystem, and joining <Link href='https://nouns.center/subdaos' className={styles.link} target='_blank'>subDAOs</Link> and <Link href='https://nouns.center/groups' target='_blank' className={styles.link}>communities</Link>.</p>
    
    
     </div>      

          </div>
      </div>
  );
};

export default Article;