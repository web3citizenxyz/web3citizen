"use client";
import React from 'react';
import styles from './Op.module.css';
import Link from 'next/link';


export default function OPHub() {

    const sections = [
        {
          title: 'Season 6',
          links: [
            { text: 'Guide to Season 6', href: 'https://gov.optimism.io/t/season-6-guide-to-season-6/8113', icon: '/icons/bullet.svg' },
            { text: 'S6 Intents', href: 'https://gov.optimism.io/t/season-6-intents-ratification/8104', icon: '/icons/bullet.svg' },
            { text: 'Learn about Missions', href: ' https://gov.optimism.io/t/season-6-missions-v2-5/8106', icon: '/icons/bullet.svg' },
            { text: 'Attestations', href: 'https://docs.optimism.io/chain/identity/about-attestations', icon: '/icons/bullet.svg' }
          ]
        },
        {
          title: 'Season 5',
          links: [
            { text: 'Collective trust tiers', href: 'https://gov.optimism.io/t/collective-trust-tiers/5877', icon: '/icons/bullet.svg' },
            { text: 'Collective Values', href: 'https://gov.optimism.io/t/collective-values/6985', icon:'/icons/bullet.svg' }
          ]
        },
        {
          title: 'Calendars and Calls',
          links: [
            { text: 'Governance calendar', href: 'https://calendar.google.com/calendar/u/0/embed?src=c_fnmtguh6noo6qgbni2gperid4k@group.calendar.google.com&ctz=Europe/Berlin', icon: '/icons/calendar.svg' },
            { text: 'Optimism Grants Calendar', href: 'https://app.charmverse.io/op-grants/calendar-s5-7007074567860654', icon: '/icons/calendar.svg' },
            { text: 'Grants calendar - Grants Changelog', href: 'https://optimismgrants.io/calendar', icon: '/icons/calendar.svg' }
          ]
        },
        {
            title: 'How can I contribute?',
            links: [
              { text: 'How to contribute in Optimism', href: 'https://community.optimism.io/docs/contribute/#', icon:'/icons/bullet.svg'},
              { text: 'Builder Ideas', href: 'https://contribute.optimism.io/', icon: '/icons/bullet.svg'}
            ]
          },

          {
            title: 'What is the OP Stack?',
            links: [
              { text: 'Learn about the OP Stack', href: 'https://docs.optimism.io/stack/getting-started', icon: '/icons/bullet.svg'}
            ]
          },
          {
            title: 'Rules and policies',
            links: [
              { text: 'OPerating Manual - GitHub', href: 'https://github.com/ethereum-optimism/OPerating-manual/blob/main/README.md', icon: '/icons/bullet.svg' },
              { text: 'Rules of Engagement 2.0', href: 'https://gov.optimism.io/t/rules-of-engagement-2-0/5728', icon: '/icons/bullet.svg' },
              { text: 'Severe Code of Conduct Violations - Guide', href: 'https://gov.optimism.io/t/guidance-on-severe-code-of-conduct-violations/5729', icon: '/icons/bullet.svg' },
              { text: 'Collective Grant Policies', href: 'https://gov.optimism.io/t/collective-grant-policies/5833', icon: '/icons/bullet.svg' },
              { text: 'Grants Council Charter', href: 'https://github.com/ethereum-optimism/OPerating-manual/blob/main/Grants%20Council%20Charter%20v0.1.md', icon: '/icons/bullet.svg' },
              { text: 'Grant Misuse Reporting - Guide and Template', href: 'https://gov.optimism.io/t/grant-misuse-reporting-process/7346', icon: '/icons/bullet.svg' }
            ]
          },
          {
            title: 'Metagovernance',
            links: [
              { text: 'The Collective DAO Archives', href: 'https://www.notion.so/The-Collective-DAO-Archives-dc3659bbebf248ffa56190c0394b7540?pvs=4', icon: '/icons/agora.svg' },
              { text: 'The Path to Metagovernance', href: 'https://gov.optimism.io/t/the-path-to-open-metagovernance/7728', icon: '/icons/connect.svg' }
            ]
          },

        {
          title: 'Useful Resources for delegates',
          links: [
            { text: 'Token House Hub', href: 'https://www.notion.so/Token-House-Governance-Hub-decae75a0fa248e38f969abe8edef565?pvs=4', icon: '/icons/agora.svg' },
            { text: 'Karma Delegate dashboard', href: 'https://optimism.karmahq.xyz/', icon: '/icons/chart.svg' },
            { text: 'Community call recordings and recaps', href: 'https://gov.optimism.io/t/optimism-community-token-house-call-recaps-recordings-thread/6937', icon: '/icons/phone.svg' },
            { text: 'Give Praise to delegates and community', href: 'https://gov.optimism.io/t/optimism-community-token-house-call-recaps-recordings-thread/6937', icon: '/icons/connect.svg' }
          ]
        },
     
        {
          title: 'Where do I vote?',
          links: [
            { text: 'Agora', href: 'https://vote.optimism.io/', icon: '/icons/agora.svg' }
          ]
        },
        {
            title: 'Delegate 101',
            links: [
              { text: 'How to be a delegate?', href: 'https://community.optimism.io/docs/governance/delegate/', icon: '/icons/bullet.svg' },
              { text: 'How to delegate OP tokens?', href: 'https://community.optimism.io/docs/governance/howto-delegate/', icon: '/icons/bullet.svg' },
              { text: 'Delegation FAQ', href: 'https://www.notion.so/Optimism-Agora-FAQ-3922ac9c66e54a21b5de16be9e0cf79c?pvs=4', icon: '/icons/bullet.svg' },
              { text: 'OP governance 101 - Slides', href: 'https://drive.google.com/file/d/1fPOEElNTQWFbCkdC1airWj-E73fqx5qY/view', icon: '/icons/bullet.svg' },
              { text: 'Governance Videos', href: 'https://community.optimism.io/docs/governance/media/#kelvin-interviews-ethdenver', icon: '/icons/phone.svg' },
              { text: 'Delegate dashboard - Dune', href: 'https://dune.com/optimismfnd/optimism-op-token-house', icon: '/icons/chart.svg' }
            ]
          },
        {
          title: 'Citizen’s House',
          links: [
            { text: ' Citizen’s House Governance Hub', href: 'https://www.notion.so/Citizens-House-Governance-Hub-5328e29f3adc4b6db22eda5036543885?pvs=4', icon: '/icons/agora.svg' },
            { text: 'Citizen House Onboarding - Slides', href: 'https://drive.google.com/file/d/1PuVpNqpeGf0BBIkLNBvbTuPdA6NNMPve/view', icon: '/icons/agora.svg' }
          ]
        },
        {
            title: 'The Security Council',
            links: [
              { text: 'Learn About the Security Council', href: 'https://gov.optimism.io/t/intro-to-optimisms-security-council/6885', icon: '/icons/bullet.svg' },
              { text: 'Security Council Site', href: 'https://gov.optimism.io/t/intro-to-optimisms-security-council/6885', icon: '/icons/bullet.svg' },
              { text: 'Internal Operating Procedures', href: 'https://gov.optimism.io/t/security-council-internal-operating-procedures-phase-0/7340/5', icon: '/icons/bullet.svg' },
              { text: 'The Security Council Charter', href: 'https://github.com/ethereum-optimism/OPerating-manual/blob/main/Security%20Council%20Charter%20v0.1.md', icon: '/icons/bullet.svg'}
            ]
          },
          {
            title: 'Grants',
            links: [
              { text: 'Grants Council Charmverse', href: 'https://app.charmverse.io/op-grants/optimism-grants-council-8323028890716944', icon: '/icons/bullet.svg' },
              { text: 'How to get a grant', href: 'https://gov.optimism.io/t/how-to-navigate-the-forum/6120', icon: '/icons/bullet.svg' },
              { text: 'Get a Grant - OP docs', href: 'https://community.optimism.io/docs/governance/get-a-grant/', icon: '/icons/bullet.svg' },
              { text: 'Optimism Grants Changelog', href: 'https://optimismgrants.io/', icon: '/icons/bullet.svg' }
            ]
          },
       
          {
            title: 'Where can I stay up to date?',
            links: [
              { text: 'Forum', href: 'https://gov.optimism.io/', icon: '/icons/connect.svg' },
              { text: 'Discord', href: 'https://discord.com/invite/optimism', icon: '/icons/connect.svg' },
              { text: 'Mirror', href: 'https://optimism.mirror.xyz/', icon: '/icons/bullet.svg' },
              { text: 'OP Labs Blog', href: 'https://blog.oplabs.co/', icon: '/icons/bullet.svg' },
              
            ]
          },

            {
                  title: '𝕏 accounts:', 
                   links: [
                  { text: 'Optimism', href: 'https://twitter.com/Optimism', icon: '/icons/connect.svg' },
                  { text: 'Optimism Governance', href: 'https://twitter.com/OptimismGov', icon: '/icons/connect.svg'  },
                  { text: 'Optimism Grants', href: 'https://twitter.com/OptimismGrants', icon: '/icons/connect.svg'  },
                  { text: 'RetroPGF Community', href: 'https://twitter.com/retropgf', icon: '/icons/connect.svg'  },
                  { text: 'Updates and announcements', href: 'https://gov.optimism.io/c/updates-and-announcements/48', icon: '/icons/bullet.svg'  },
             
            ]
          },


          {
            title: 'Mission Requests',
            links: [
              { text: 'Delegate and Foundation Mission Requests - Github', href: '#', icon: '/icons/bullet.svg' }
            ]
          },
          {
            title: 'RetroPGF (Retro Funding)',
            links: [
           
              { text: 'Round details', href: 'https://gov.optimism.io/t/retro-funding-4-onchain-builders-round-details/7988', icon: '/icons/bullet.svg'},
              { text: 'Application process', href: 'https://gov.optimism.io/t/retro-funding-4-application-process/8013', icon: '/icons/bullet.svg' },
              { text: 'Apply now', href: 'https://retrofunding.optimism.io/', icon: '/icons/bullet.svg' },

            ]
        },
        {
            title: 'Round 4 and beyond',
            links: [
            
              { text: 'Retro Funding announcement', href: 'https://gov.optimism.io/t/upcoming-retro-rounds-and-their-design/7861', icon: '/icons/connect.svg' }
            ]
          }
        ];
      
        const moreResources = [
            {
              title: 'Newsletters, reports and podcasts',
              links: [
                { text: 'OP Bulletin', href: 'https://opbulletin.substack.com/', icon: '/icons/bullet.svg' },
                { text: 'Optimism Resource Center', href: 'https://optimism.help/Getting+Started/Home', icon: '/icons/bullet.svg' },
                { text: 'The State of Optimism (Dec. 2023)', href: 'https://web3citizen.xyz/web3-projects/optimism', icon: '/icons/bullet.svg' },
                { text: 'ETH Daily - coverage on Optimism', href: 'https://ethdaily.io/tag/optimism/', icon:'/icons/bullet.svg' },
                { text: 'The delegate corner', href: 'https://open.spotify.com/show/1PGwPixap9Xah7pI7Ufqlg?si=e707ae2a524e4145', icon: '/icons/connect.svg' },
                { text: 'OP Radio', href: 'https://open.spotify.com/show/3H61hM7v9huX9VgrfBw26D?si=2b15fdc1de0347c0', icon: '/icons/connect.svg' },
                { text: 'StablePod: Growing the Optimism Foundation (Dec. 2023)', href: 'https://open.spotify.com/episode/5Y0d1A22I5UMtpj6mGP0an?si=lBVpwe92Q_itJnGI5YG3JA', icon: '/icons/connect.svg' }
              ]
            },
            {
              title: 'Governance Tools and Dashboards',
              links: [
                { text: 'x23.ai - proposals and forum summaries', href: 'https://app.x23.ai/optimism', icon: '/icons/connect.svg' },
                { text: 'Governance Dashboard - Curia', href: 'https://optimism.curiahub.xyz/', icon: '/icons/chart.svg' },
                { text: 'Optimism Data Dashboard - DeepDAO', href: 'https://deepdao.io/organization/10edb97a-9dba-448a-88b1-ca263a7c75ad/organization_data/finance', icon: '/icons/chart.svg' },
                { text: 'Optimism Governance Dashboard - USC Blockchain Club', href: 'https://deepdao.io/organization/10edb97a-9dba-448a-88b1-ca263a7c75ad/organization_data/finance', icon: '/icons/chart.svg' }
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
                <span className={styles.linkIcon}>
                  {link.icon.startsWith('/') ? (
                    <img src={link.icon} alt="" className={styles.iconImage} />
                  ) : (
                    link.icon
                  )}
                </span>
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
                <span className={styles.linkIcon}>
                  {link.icon.startsWith('/') ? (
                    <img src={link.icon} alt="" className={styles.iconImage} />
                  ) : (
                    link.icon
                  )}
                </span>
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
                     <Link href={link.href}>
                <span className={styles.linkIcon}>
                  {link.icon.startsWith('/') ? (
                    <img src={link.icon} alt="" className={styles.iconImage} />
                  ) : (
                    link.icon
                  )}
                </span>
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