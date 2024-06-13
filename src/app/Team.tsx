import styles from './styles/Team.module.css';




export default function Team () {
    return (


<section className={styles.team}>
  <div className={styles.content}>
    <h1>Team</h1>
    <p>Team up, fuel web 3 innovation. Together, we create, collaborate, and shape the future.</p>
    <p>We are Web3 Citizen. We bring ideas to life.</p>
    <button>Join in</button>
  </div>
  <div className={styles.teamsvg}>
        <img src="/images/elipse-team.svg" alt="Semicircles" className={styles.elipseTeam}/>
      </div>
</section>


);
}
