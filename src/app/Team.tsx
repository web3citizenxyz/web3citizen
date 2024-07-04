import styles from './styles/Team.module.css';




export default function Team () {
    return (


<section className={styles.team}>
  <div className={styles.content}>
    <h1>Contributors</h1>
    <p>Join Our Open Source Community</p>
    <p>All our content is open source. We aim to create a collaborative research environment where you can share knowledge and explore different areas of the Ethereum ecosystem.</p>
  
    <a href='https://github.com/web3citizenxyz/web3citizen' target='_blank' className={styles.btn}>Start Contributing</a>
  </div>
  <div className={styles.teamsvg}>
        <img src="/images/elipse-team.svg" alt="Semicircles" className={styles.elipseTeam}/>
      </div>
</section>


);
}
