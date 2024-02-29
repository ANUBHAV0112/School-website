import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Gallery.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Gallery() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="Asset/gallery/School 1.jpg" alt="pic1"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="Asset/gallery/School 2.jpg" alt="pic1"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="Asset/gallery/School 3.jpg" alt="pic1"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="Asset/gallery/School 4.jpg" alt="pic1"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="Asset/gallery/School 5.jpg" alt="pic1"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="Asset/gallery/School 6.jpg" alt="pic1"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="Asset/gallery/School 7.jpg" alt="pic1"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="Asset/gallery/School 8.jpg" alt="pic1"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="Asset/gallery/School 9.jpg" alt="pic1"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
