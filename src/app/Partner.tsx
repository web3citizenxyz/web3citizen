import styles from './styles/Partner.module.css';

export default function Partner () {
  return (
    <section className={styles.partnerSection}>
      <div className={styles.content}>
        <h1>Support</h1>

        <p>Our progress is driven by collaborating with projects and making meaningful contributions together.</p>
        <a href="mailto:ops@web3citizen.xyz" target='_blank' className={styles.contactButton}>Contact us</a>
      </div>
      <div className={styles.svgContainer}>
        <img src="/icons/elipse-sup.svg" alt="Semicircles" className={styles.semicircles}/>
    
      </div>
    </section>
  );
}

