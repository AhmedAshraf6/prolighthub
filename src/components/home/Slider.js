'use client';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from 'swiper';
import 'swiper/css/bundle';
import Image from 'next/image';
export default function Slider() {
  SwiperCore.use([Autoplay, Navigation, Pagination]);

  return (
    <>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ type: 'progressbar' }}
        effect='fade'
        modules={[EffectFade]}
      >
        <SwiperSlide className='w-100 h-100'>
          <Image
            src='/image-1.png'
            className='w-100 h-100'
            width='1000'
            height='1000'
          />

          <div className='relative'></div>
          <p className='text-white bg-primary rounded-pill py-1 px-3 absolute top-0 name-ad'>
            light
          </p>
          <p className='text-white bg-primary rounded-pill py-1 px-3 absolute top-0 left-[50%] price-ad'>
            30 Egp
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/image-2.png'
            alt=''
            className='w-100 h-100'
            width='1000'
            height='1000'
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
