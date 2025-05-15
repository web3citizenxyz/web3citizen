import styles from './styles/Home.module.css';




export default function Community () {
    return (

<div className={styles.main}>
<section className={styles.community}>
  <div className={styles.content}>
    <h1>Community</h1>
    <p>We want to build a web of knowledge.</p>
    <p>Stay informed about what we're working on and our latest projects.</p>
    
    <button className={styles.btn}>
        <a href='https://t.me/web3citizenxyznews' target='_blank'>Join Our Community</a>
        </button>
  </div>
  <div className={styles.svgcommunity}>
        <img src="/images/community-elipse.svg" alt="Semicircles" className={styles.communityelipse}/>
      </div>
</section>
</div>

);
}
