"use client";
import React from 'react';
import styles from './Op.module.css';
import Link from 'next/link';


export default function OPHub() {

    const sections = [
        {
          title: 'Season 6',
          links: [
            { text: 'Guide to Season 6', href: '#', icon: '🔴' },
            { text: 'S6 Intents', href: '#', icon: '🔴' },
            { text: 'Learn about Missions', href: '#', icon: '🔴' },
            { text: 'Attestations', href: '#', icon: '🔴' }
          ]
        },
        {
          title: 'Season 5',
          links: [
            { text: 'Collective trust tiers', href: '#', icon: '🔴' },
            { text: 'Collective Values', href: '#', icon: '🔴' }
          ]
        },
        {
          title: 'Calendars and Calls',
          links: [
            { text: 'Governance calendar', href: '#', icon: '📅' },
            { text: 'Optimism Grants Calendar', href: '#', icon: '📅' },
            { text: 'Grants calendar - Grants Changelog', href: '#', icon: '📅' }
          ]
        },
        {
            title: 'How can I contribute?',
            links: [
              { text: 'How to contribute in Optimism', href: '#', icon: '🔴' },
              { text: 'Builder Ideas', href: '#', icon: '🔴' }
            ]
          },

          {
            title: 'What is the OP Stack?',
            links: [
              { text: 'Learn about the OP Stack', href: '#', icon: '🔴' }
            ]
          },
          {
            title: 'Rules and policies',
            links: [
              { text: 'OPerating Manual - GitHub', href: '#', icon: '🔴' },
              { text: 'Rules of Engagement 2.0', href: '#', icon: '🔴' },
              { text: 'Severe Code of Conduct Violations - Guide', href: '#', icon: '🔴' },
              { text: 'Collective Grant Policies', href: '#', icon: '🔴' },
              { text: 'Grants Council Charter', href: '#', icon: '🔴' },
              { text: 'Grant Misuse Reporting - Guide and Template', href: '#', icon: '🔴' }
            ]
          },
          {
            title: 'Metagovernance',
            links: [
              { text: 'The Collective DAO Archives', href: '#', icon: '🏛️' },
              { text: 'The Path to Metagovernance', href: '#', icon: '💬' }
            ]
          },

        {
          title: 'Useful Resources for delegates',
          links: [
            { text: 'Token House Hub', href: '#', icon: '🏛️' },
            { text: 'Karma Delegate dashboard', href: '#', icon: '📊' },
            { text: 'Community call recordings and recaps', href: '#', icon: '☎️' },
            { text: 'Give Praise to delegates and community', href: '#', icon: '🤝' }
          ]
        },
     
        {
          title: 'Where do I vote?',
          links: [
            { text: 'Agora', href: '#', icon: '🏛️' }
          ]
        },
        {
            title: 'Delegate 101',
            links: [
              { text: 'How to be a delegate?', href: '#', icon: '🔴' },
              { text: 'How to delegate OP tokens?', href: '#', icon: '🔴' },
              { text: 'Delegation FAQ', href: '#', icon: '🔴' },
              { text: 'OP governance 101 - Slides', href: '#', icon: '🔴' },
              { text: 'Governance Videos', href: '#', icon: '📽️' },
              { text: 'Delegate dashboard - Dune', href: '#', icon: '📊' }
            ]
          },
        {
          title: 'Citizen’s House',
          links: [
            { text: 'Learn more about Citizen’s House', href: '#', icon: '🏛️' }
          ]
        },
        {
            title: 'The Security Council',
            links: [
              { text: 'Learn About the Security Council', href: '#', icon: '🔴' },
              { text: 'Security Council Site', href: '#', icon: '🔴' },
              { text: 'Internal Operating Procedures', href: '#', icon: '🔴' },
              { text: 'The Security Council Charter', href: '#', icon: '🔴' }
            ]
          },
          {
            title: 'Grants',
            links: [
              { text: 'Grants Council Charmverse', href: '#', icon: '🔴' },
              { text: 'How to get a grant', href: '#', icon: '🔴' },
              { text: 'Get a Grant - OP docs', href: '#', icon: '🔴' },
              { text: 'Optimism Grants Changelog', href: '#', icon: '🔴' }
            ]
          },
       
          {
            title: 'Where can I stay up to date?',
            links: [
              { text: 'Forum', href: '#', icon: '💬' },
              { text: 'Discord', href: '#', icon: '💬' },
              { text: 'Mirror', href: '#', icon: '📄' },
              { text: 'OP Labs Blog', href: '#', icon: '📄' },
              {
                text: 'X accounts:',
                href: '#',
                icon: '✖️',
                sublinks: [
                  { text: 'Optimism', href: '#' },
                  { text: 'Optimism Governance', href: '#' },
                  { text: 'Optimism Grants', href: '#' },
                  { text: 'RetroPGF Community', href: '#' },
                  { text: 'Updates and announcements', href: '#' }
                ]
              }
            ]
          },
          {
            title: 'Mission Requests',
            links: [
              { text: 'Delegate and Foundation Mission Requests - Github', href: '#', icon: '🔴' }
            ]
          },
          {
            title: 'RetroPGF (Retro Funding)',
            links: [
              { text: 'Round 4', href: '#', icon: '🔴' },
              { text: 'Round details', href: '#', icon: '🔴' },
              { text: 'Application process', href: '#', icon: '🔴' },
              { text: 'Apply now', href: '#', icon: '🔴' },

            ]
        },
        {
            title: 'Round 4 and beyond',
            links: [
            
              { text: 'Retro Funding announcement', href: '#', icon: '💬' }
            ]
          }
        ];
      
        const moreResources = [
            {
              title: 'Newsletters, reports and podcasts',
              links: [
                { text: 'OP Bulletin', href: '#', icon: '📄' },
                { text: 'Optimism Resource Center', href: '#', icon: '📄' },
                { text: 'The State of Optimism (Dec. 2023)', href: '#', icon: '📄' },
                { text: 'ETH Daily - coverage on Optimism', href: '#', icon: '📄' },
                { text: 'The delegate corner', href: '#', icon: '🎧' },
                { text: 'OP Radio', href: '#', icon: '🎧' },
                { text: 'StablePod: Growing the Optimism Foundation (Dec. 2023)', href: '#', icon: '🎧' }
              ]
            },
            {
              title: 'Governance Tools and Dashboards',
              links: [
                { text: 'x23.ai - proposals and forum summaries', href: '#', icon: '🧠' },
                { text: 'Governance Dashboard - Curia', href: '#', icon: '📊' },
                { text: 'Optimism Data Dashboard - DeepDAO', href: '#', icon: '📊' },
                { text: 'Optimism Governance Dashboard - USC Blockchain Club', href: '#', icon: '📊' }
              ]
            }
          ];
        
      
    
      const half = Math.ceil(sections.length / 2);
      const firstHalf = sections.slice(0, half);
      const secondHalf = sections.slice(half);
    


  return (
      <div className={styles.opSection}>
          <div className={styles.headerContainer}>
              <img src="/icons/arrow.svg" alt="Arrow Icon" className={styles.arrow} />
              <h1 className={styles.header}>OP Hub<span className={styles.dot}>.</span></h1>
              <div className={styles.line}></div>
          </div>
          <div className={styles.columnsContainer}>
        <div className={styles.column}>
          {firstHalf.map((section, index) => (
            <div key={index} className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              <ul className={styles.linkList}>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className={styles.linkItem}>
                    <Link href={link.href}>
                      <span className={styles.linkIcon}>{link.icon}</span>
                      <span className={styles.linkText}>{link.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.column}>
          {secondHalf.map((section, index) => (
            <div key={index} className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              <ul className={styles.linkList}>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className={styles.linkItem}>
                    <Link href={link.href}>
                      <span className={styles.linkIcon}>{link.icon}</span>
                      <span className={styles.linkText}>{link.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>


      <div className={styles.moreResources}>
      <hr className={styles.divider} />
        <h2 className={styles.sectionTitle}>More useful resources</h2>
        <hr className={styles.divider} /> 
        <div className={styles.columnsContainer}>
          {moreResources.map((section, index) => (
            <div key={index} className={styles.column}>
              <h3 className={styles.sectionTitle}>{section.title}</h3>
              <ul className={styles.linkList}>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className={styles.linkItem}>
                    <Link href={link.href} className={styles.link}>
                      <span className={styles.linkIcon}>{link.icon}</span>
                      <span className={styles.linkText}>{link.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
   





  );
}