import styles from './styles/Team.module.css';




export default function Team () {
    return (


<section className={styles.team}>
  <div className={styles.content}>
    <h1>Contributors</h1>
    <p>Our content is completely open source. Our aim is to build a research collective where you can share your knowledge with other to explore the different areas of the Ethereum infinite garden.</p>
  
    <a href='https://github.com/web3citizenxyz/web3citizen' target='_blank' className={styles.btn}>Start Contributing</a>
  </div>
  <div className={styles.teamsvg}>
        <img src="/images/elipse-team.svg" alt="Semicircles" className={styles.elipseTeam}/>
      </div>
</section>


);
}
