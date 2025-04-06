'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from './carousel.module.css'
import PostCard from '../postCard'

const CarouselSection = ({ posts, carouselTitle }) => {
  return (
    <section className={styles.carouselSection}>
      <h2 className={styles.title}>{carouselTitle}</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={3}
        centeredSlides ={true}
        navigation = {{ clickable: true }}
        pagination={{ clickable: true }}
        className={styles.swiperContainer}
      >
        {posts.map((post) => (
          <SwiperSlide key={post.id}>
            <PostCard post={post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default CarouselSection
