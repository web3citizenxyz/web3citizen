import styles from './styles/Partner.module.css';

export default function Partner () {
  return (
    <section className={styles.partnerSection}>
      <div className={styles.content}>
        <h1>Supporter</h1>
        <p>As part of the Infinite Garden, we continue growing trough the help of projects,  allies and ecosystems that allow us to learn and add value</p>
        <p>Do you dream of an infinite garden full of more web3 citizens?</p>
        <a href="mailto:angela@web3citizen.xyz" target='_blank' className={styles.contactButton}>CONTACT US</a>
      </div>
      <div className={styles.svgContainer}>
        <img src="/images/partner-elipse.svg" alt="Semicircles" className={styles.semicircles}/>
      </div>
    </section>
  );
}

