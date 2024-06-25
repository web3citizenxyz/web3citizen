import styles from './styles/Partner.module.css';

export default function Partner () {
  return (
    <section className={styles.partnerSection}>
      <div className={styles.content}>
        <h1>Supporter</h1>
        <p>Imagine being part of a project that makes a real difference in the ecosystem.</p>
        <p>Join us, and together we'll create something amazing.</p>
        <a href="#contact" className={styles.contactButton}>CONTACT US</a>
      </div>
      <div className={styles.svgContainer}>
        <img src="/images/partner-elipse.svg" alt="Semicircles" className={styles.semicircles}/>
      </div>
    </section>
  );
}

