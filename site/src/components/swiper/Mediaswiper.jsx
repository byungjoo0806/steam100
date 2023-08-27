import React, { useState, useRef, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import DOMPurify from 'dompurify';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation, Autoplay, Scrollbar } from 'swiper/modules';
import { Imgvidviewer, Swiperbox } from './Mediaswiper.styled';

const Testswiper = (props)=> {
    const swiperRef = useRef(null);
    
    const [bigImgVid, setBigImgVid] = useState(null);

    // 스와이퍼 자동 넘기기 관리
    const handleStartSwiperAutoplay = ()=>{
        swiperRef.current.swiper.autoplay.start();
    };
    const handleStopSwiperAutoplay = ()=>{
        swiperRef.current.swiper.autoplay.stop();
    };
    

    // 스와이퍼가 넘어갈때 현재 슬라이드를 가져오는 함수
    const currentSlide = document.querySelector('.swiper-slide-active');
    const handleSlideChange = ()=>{
        if(currentSlide?.classList.contains('image-slides')){
            const currentSlideInfo = currentSlide?.innerHTML;
            // console.log(currentSlideInfo);
            const sanitizedHtml = DOMPurify.sanitize(currentSlideInfo);
            // console.log(sanitizedHtml);
            setBigImgVid(sanitizedHtml);
        }else if(currentSlide?.classList.contains('video-slides')){
            const currentSlideInfo = currentSlide?.innerHTML;
            // console.log(currentSlideInfo);
            const parser = new DOMParser();
            const imgHtml = parser.parseFromString(currentSlideInfo, 'text/html');
            // console.log(imgHtml);
            const imgTag = imgHtml.querySelector('img');
            // console.log(imgTag);
            const vidLink = imgTag.getAttribute('vidsrc');
            // console.log(vidLink);
            setBigImgVid(vidLink);
        }
    };

    // 원하는 이미지 슬라이드를 클릭했을때 해당 슬라이드를 가져오는 함수
    const getImgSlide = (event)=>{
        const clickedSlide = event.target;
        // console.log(clickedSlide);
        const sanitizedHtml = DOMPurify.sanitize(clickedSlide);
        // console.log(sanitizedHtml);
        setBigImgVid(sanitizedHtml);
    };

    // 원하는 영상 슬라이드를 클릭했을때 해당 슬라이드를 가져오는 함수
    const getVidSlide = (event)=>{
        const clickedSlide = event.target;
        // console.log(clickedSlide);
        const vidLink = clickedSlide.getAttribute('vidsrc');
        // console.log(vidLink);
        setBigImgVid(vidLink);
    };

    // html 형식으로 들어온 값들을 그 형식 그대로 보여주기 위한 함수/컴포넌트
    const HtmlImgVidContent = ()=>{
        if(bigImgVid?.includes('<img')){
            return (
                <div style={{width : "100%", height : "100%"}} 
                dangerouslySetInnerHTML={{__html : bigImgVid}} className='posterImgVid'
                ></div>
            )
        }else{
            return (
                <div style={{width : "100%", height : "100%"}}>
                    <video autoPlay controls width="100%" height="100%"
                    onPlay={handleStopSwiperAutoplay} onPause={handleStopSwiperAutoplay} onEnded={handleStartSwiperAutoplay}>
                        <source src={bigImgVid} type='video/mp4' />
                    </video>
                </div>
            )
        }
    };

    return (
        <>
            <Imgvidviewer className='gameImgVid'>
                {bigImgVid ? <HtmlImgVidContent /> : 
                <div style={{width : "100%", height : "100%"}} className='posterImgVid'>
                    <img src={props.imgs[0].path_thumbnail} alt='Initial Image' />    
                </div>}
            </Imgvidviewer>
            <Swiperbox className='gameImgVidSwiper'>
                <Swiper 
                ref={swiperRef} 
                navigation={true} 
                // autoplay={{delay : 5000, disableOnInteraction : false}} 
                loop={true} 
                modules={[Navigation, Autoplay, Scrollbar]} 
                slidesPerView={4} 
                centeredSlides={false}
                onSlideChange={handleSlideChange} 
                spaceBetween={5}
                className="mySwiper" 
                scrollbar={{draggable : true}}
                style={{width : "100%", height : "99%"}} >
                    {props?.imgs?.map((img,index)=>(
                        <SwiperSlide key={index} onClick={getImgSlide} className='image-slides'>
                            <img src={img.path_thumbnail} alt='img thumbnail' />
                        </SwiperSlide>
                    ))}
                    {props?.vids?.map((vid,index)=>(
                        <SwiperSlide key={index} onClick={getVidSlide} className='video-slides'>
                            <img src={vid.thumbnail} alt='vid thumbnail' vidsrc={vid.mp4.max} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Swiperbox> 
        </>
  );
};

export default Testswiper;
