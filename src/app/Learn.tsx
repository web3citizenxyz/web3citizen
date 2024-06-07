
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import '/node_modules/swiper/swiper-bundle.min.css';
import 'swiper/css/autoplay';
import { Autoplay} from 'swiper/modules';
import styles from './styles/Learn.module.css';





export default function Learn () {
    return (
        <section className={styles.learnSection}>
               <div className={styles.background}></div>
        <div className={styles.leftSection}> 
        </div>
        <div className={styles.rightSection}>
          <div className={styles.contentWrapper}>
            <div className={styles.textContent}>
              <h1>Learn</h1>
              <p>Explore our curated resources and tutorials to understand the fundamentals of the decentralized web.</p>
              <p>Start your journey and expand your knowledge!</p>
            </div>
            <div className={styles.swiperContainer}>
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                },

                768: {
                 
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                300:
                {
                    slidesPerView: 1,
                    spaceBetween: 10,
                }
              }}
              modules={[Autoplay]}
             
            >
    <SwiperSlide className={styles.swiperSlide}>
    <a href="/link4" className={styles.card}>
        <h2>Topic</h2>
        <span className={styles.dash}></span>
        <p>Small explanation on the subject.</p>
      </a>
    </SwiperSlide>
    <SwiperSlide className={styles.swiperSlide}>
    <a href="/link4" className={styles.card}>
        <h2>Topic
        </h2>
        <span className={styles.dash}></span>
        <p>Small explanation on the subject.</p>
      </a>
    </SwiperSlide>
    <SwiperSlide className={styles.swiperSlide}>
    <a href="/link4" className={styles.card}>
        <h2>Topic</h2>
        <span className={styles.dash}></span> 
        <p>Small explanation on the subject.</p>
      </a>
    </SwiperSlide>
    <SwiperSlide className={styles.swiperSlide}>
    <a href="/link4" className={styles.card}>
        <h2>Topic</h2>
        <span className={styles.dash}></span>
        <p>Small explanation on the subject.</p>
      </a>
    </SwiperSlide> 
  </Swiper>
</div>
        </div>
        </div>

        <div className={styles.buttonWrapper}>
    <a href="#" className={styles.learnMore}>
      <span className={styles.arrows}>&gt;&gt;&gt;</span>
      CHECK OUT ALL
    </a>
  </div>
  
      </section>
      
    );
  }
  