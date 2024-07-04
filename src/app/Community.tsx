import styles from './styles/Home.module.css';




export default function Community () {
    return (

<div className={styles.main}>
<section className={styles.community}>
  <div className={styles.content}>
    <h1>Community</h1>
    <p>Stay Updated with the Latest Trends</p>
    <p>Stay informed about the latest projects and DAOs in the Ethereum ecosystem.</p>
    <a href='@web3citizenxyz' target='_blank' className={styles.btn}>Join Our Community</a>
  </div>
  <div className={styles.svgcommunity}>
        <img src="/images/community-elipse.svg" alt="Semicircles" className={styles.communityelipse}/>
      </div>
</section>
</div>

);
}
