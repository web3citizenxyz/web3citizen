
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '/node_modules/swiper/swiper-bundle.min.css';
import 'swiper/css/autoplay';
import { Autoplay} from 'swiper/modules';
import styles from './styles/Learn.module.css';





export default function Learn () {
    return (
        <section className={styles.learnSection}>
               <div className={styles.background}>
               <img src="/images/learn-elipse.svg" alt="Semicircles" className={styles.learnelipse}/>
  
                </div>
        <div className={styles.leftSection}> 
        </div>
        <div className={styles.rightSection}>
          <div className={styles.contentWrapper}>
            <div className={styles.textContent}>
              <h1>Learn</h1>
              <p>Explore Curated Guides.</p>
              <p>Access aggregated resources and information about the Ethereum ecosystem.</p>
            </div>
            <div className={styles.swiperContainer}>
            <Swiper
              spaceBetween={10}
              slidesPerView={3}
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                },

                820: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 1, 
                  spaceBetween: 1,
                },
                300:
                {
                    slidesPerView: 1,
                    spaceBetween: 10,
                }
              }}
            
             
            >

    <SwiperSlide className={styles.swiperSlide}>
    <a href="/research/zk/articles/zk-101" className={styles.card}>
        <h2>ZK 101
        </h2>
        <span className={styles.dash}></span>
        <p>Your initial guide<br></br> to Zero Knowledge<br></br> Proofs</p>
      </a>
    </SwiperSlide>
    <SwiperSlide className={styles.swiperSlide}>
    <a href="/research/eigenlayer"  className={styles.card}>
        <h2>EigenLayer</h2>
        <span className={styles.dash}></span> 
        <p>Understand EigenLayer’s importance in blockchain performance</p>
      </a>
    </SwiperSlide>
   
    <SwiperSlide className={styles.swiperSlide}>
    <a href="/research/daos" className={styles.card}>
        <h2>DAOs</h2>
        <span className={styles.dash}></span>
        <p>Learn about DAOs and their role in blockchain governance.</p>
      </a>
    </SwiperSlide>
       <SwiperSlide className={styles.swiperSlide}>
    <a href="/research/eigenlayer"  className={styles.card}>
        <h2>EigenLayer</h2>
        <span className={styles.dash}></span> 
        <p>Understand EigenLayer’s importance in blockchain performance</p>
      </a>
    </SwiperSlide>
   
    <SwiperSlide className={styles.swiperSlide}>
    <a href="/research/zk/articles/zk-101"className={styles.card}>
        <h2>ZK 101
        </h2>
        <span className={styles.dash}></span>
        <p>Your initial guide<br></br> to Zero Knowledge<br></br> Proofs</p>
      </a>
    </SwiperSlide>
 
    <SwiperSlide className={styles.swiperSlide}>
    <a href="/research/daos" className={styles.card}>
        <h2>DAOs</h2>
        <span className={styles.dash}></span>
        <p>Learn about DAOs and their role in blockchain governance.</p>
      </a>
    </SwiperSlide> 
    
  </Swiper>
</div>
<div className={styles.buttonWrapper}>
    <a href="/research" className={styles.learnMore}>
      <span className={styles.arrows}>&gt;&gt;&gt;</span>
      EXPLORE MORE
    </a>
  </div>
        </div>
        </div>


  
      </section>
      
    );
  }
  