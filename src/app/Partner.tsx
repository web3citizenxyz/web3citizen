import styles from './styles/Partner.module.css';

export default function Partner () {
  return (
    <section className={styles.partnerSection}>
      <div className={styles.content}>
        <h1>Supporter</h1>
        <p>Grow with Our Community</p>
        <p>Our progress is driven by the collaboration with projects and allies who help us grow and contribute meaningfully.</p>
        <a href="mailto:angela@web3citizen.xyz" target='_blank' className={styles.contactButton}>Reach Out to Support</a>
      </div>
      <div className={styles.svgContainer}>
        <img src="/images/partner-elipse.svg" alt="Semicircles" className={styles.semicircles}/>
      </div>
    </section>
  );
}

