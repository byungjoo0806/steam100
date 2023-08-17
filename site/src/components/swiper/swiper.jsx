import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const swiper = () => {
    return (
        <Swiper>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
    )
}

export default swiper;