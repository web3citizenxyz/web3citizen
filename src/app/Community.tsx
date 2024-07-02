import styles from './styles/Home.module.css';




export default function Community () {
    return (

<div className={styles.main}>
<section className={styles.community}>
  <div className={styles.content}>
    <h1>Community</h1>
    <p>Keep up to date of the latest narratives in the ecosystem and the main projects and DAOs out there.</p>
    <a href='@web3citizenxyz' target='_blank' className={styles.btn}>Join Now</a>
  </div>
  <div className={styles.svgcommunity}>
        <img src="/images/community-elipse.svg" alt="Semicircles" className={styles.communityelipse}/>
      </div>
</section>
</div>

);
}
