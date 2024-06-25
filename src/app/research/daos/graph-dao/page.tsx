"use client";
import React from 'react';
import styles from './ArticleLayout.module.css';

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
                  <li className={styles.menuItem}><a href="#section16" className={styles.menuLink}>Advocates DAO proposals</a></li>
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
                  <p className={styles.paragraph}>Governance within The Graph is structured to ensure...</p>
                
              </div>
           
          </div>
      </div>
  );
};

export default Article;