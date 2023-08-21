import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

const Testswiper = (props)=> {
    // console.log(props);
    const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);
    const [currentImgVid, setCurrentImgVid] = useState(null);

    // 스와이퍼가 넘어갈때 현재 슬라이드를 가져오는 함수
    const handleSlideChange = ()=>{
        const currentSlide = document.querySelector('.swiper-slide-active');
        const currentSlideInfo = currentSlide.innerHTML;
        setCurrentImgVid(currentSlideInfo);
    };

    // 원하는 슬라이드를 클릭했을때 해당 슬라이드를 가져오는 함수
    const getSlideIndex = (event)=>{
        const clickedSlide = event.target;
        const slideInfo = clickedSlide.innerHTML;
        setCurrentImgVid(slideInfo);
    };

    // console.log(props.imgs);
    const Imgvid = ()=>{
        return (
            <Swiper navigation={true} autoplay={{delay : 5000, disableOnInteraction : false}} loop={true} modules={[Navigation, Autoplay]}
            centeredSlides={true} slidesPerView={3} onSlideChange={handleSlideChange} className="mySwiper"
            style={{width : "100%", height : "99%"}}>
                {props?.imgs.map((img,index)=>(
                    <SwiperSlide key={index} onClick={()=> getSlideIndex()}>
                        <img src={img.path_thumbnail} alt='PUBG img/vid' />
                    </SwiperSlide>
                ))}
            </Swiper>
        )
        
    };
    // images();

    return (
        <>
            <div className='gameImgVid' style={{width : "690px", height : "70%", borderTop : "1px solid", borderRight : "1px solid", borderBottom : "1px solid"}}>
                {currentImgVid}
            </div>
            <div className='gameImgVidSwiper' style={{width : "690px", height : "20%", borderRight : "1px solid"}}>
                <Swiper navigation={true} autoplay={{delay : 5000, disableOnInteraction : false}} loop={true} modules={[Navigation, Autoplay]}
                centeredSlides={true} slidesPerView={3} onSlideChange={handleSlideChange} className="mySwiper"
                style={{width : "100%", height : "99%"}}>
                    <SwiperSlide onClick={getSlideIndex}>Slide 1</SwiperSlide>
                    <SwiperSlide onClick={getSlideIndex}>Slide 2</SwiperSlide>
                    <SwiperSlide onClick={getSlideIndex}>Slide 3</SwiperSlide>
                    <SwiperSlide onClick={getSlideIndex}>Slide 4</SwiperSlide>
                    <SwiperSlide onClick={getSlideIndex}>Slide 5</SwiperSlide>
                    <SwiperSlide onClick={getSlideIndex}>Slide 6</SwiperSlide>
                    <SwiperSlide onClick={getSlideIndex}>Slide 7</SwiperSlide>
                    <SwiperSlide onClick={getSlideIndex}>Slide 8</SwiperSlide>
                    <SwiperSlide onClick={getSlideIndex}>Slide 9</SwiperSlide>
                </Swiper>
            </div>    
        </>
  );
};

export default Testswiper;
