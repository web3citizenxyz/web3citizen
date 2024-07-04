import styles from './styles/Partner.module.css';

export default function Partner () {
  return (
    <section className={styles.partnerSection}>
      <div className={styles.content}>
        <h1>Supporters</h1>
        <p>Grow with Our Community</p>
        <p>Our progress is driven by the collaboration with projects and allies who help us grow and contribute meaningfully.</p>
        <a href="mailto:angela@web3citizen.xyz" target='_blank' className={styles.contactButton}>Reach Out to Support</a>
      </div>
      <div className={styles.svgContainer}>
        <img src="/icons/elipse-sup.svg" alt="Semicircles" className={styles.semicircles}/>
        <img src="/icons/arbitrum-group.svg" alt="Logos" className={styles.logos}/>
      </div>
    </section>
  );
}

