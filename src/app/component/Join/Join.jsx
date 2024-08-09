"use client"
import React, { useEffect, useState, useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick/lib/slider';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Join.css'



// import required modules
import { Autoplay } from 'swiper/modules';



export default function Join() {

    const texts = [
        'Sync Plans',
        'Share Plans',
        'Create Circles',
        'Create Circles',
        'Book Homes',
        'Split Costs',
        'Make Friends',
        'Sync Plans'
    ];
    const settings = {
        vertical: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 300,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <>
            <div className='h-auto overflow-hidden'>
                <div className='flex flex-col gap-[.6rem] pt-[3.8rem] pb-[1.6rem] h-[calc(6rem+19vh)] justify-evenly mobile:pt-[8rem] mobile:h-auto'>
                    <div>
                        <div>
                            <div className='relative flex justify-center text-center cursor-pointer mobile:hidden'>
                                <div className='text-regular30 waitlist-cta w-[10rem] relative cursor-pointer flex justify-center items-center capitalize mobile:pb-[1rem] mobile:text-[.9rem] mobile:mx-auto'>
                                    <div className='relative flex flex-col cursor-pointer h-[1.2rem] overflow-hidden mobile:h-[1.4rem]'>
                                        <div class="cta-text">Join waitlist</div>
                                        <div class="cta-text">Join waitlist</div>
                                    </div>
                                    <img class="w-[.6rem] ml-[.2rem] arrow-right" width="24" height="23" src='./Buenro-7.svg' />
                                    <img class="absolute top-0 left-[50%] translate-x-[-50%] w-[6.8rem] z-[-1] mobile:w-[8rem] mobile:mt-[-.5rem] mobile:hidden" width="268" height="44" src="./Buenro-8.svg" />
                                    <img class="absolute hidden top-0 left-[50%] translate-x-[-50%] w-[6.8rem] z-[-1] mobile:w-[9rem] mobile:mt-[-.1rem] mobile:inline-block" width="197" height="40" src='./empty.svg' />
                                </div>
                                <div class="absolute top-[-10%] left-[-13%] right-[-13%] bottom-[-13%]"></div>
                            </div>
                            <div className='relative hidden cursor-pointer mobile:flex'>
                                <div className='text-regular30 waitlist-cta w-[10rem] relative cursor-pointer flex justify-center items-center capitalize mobile:pb-[1rem] mobile:text-[.9rem] mobile:mx-auto'>
                                    <div className='relative flex flex-col cursor-pointer h-[1.2rem] overflow-hidden mobile:h-[1.4rem]'>
                                        <div class="cta-text">Join waitlist</div>
                                        <div class="cta-text">Join waitlist</div>
                                    </div>
                                    <img class="w-[.6rem] ml-[.2rem] arrow-right" width="24" height="23" src='./Buenro-7.svg' />
                                    <img class="absolute top-0 left-[50%] translate-x-[-50%] w-[6.8rem] z-[-1] mobile:w-[8rem] mobile:mt-[-.5rem] mobile:hidden" width="268" height="44" src="./Buenro-8.svg" />
                                    <img class="absolute hidden top-0 left-[50%] translate-x-[-50%] w-[6.8rem] z-[-1] mobile:w-[9rem] mobile:mt-[-.1rem] mobile:inline-block" width="197" height="40" src='./empty.svg' />
                                </div>
                                <div class="absolute top-[-10%] left-[-13%] right-[-13%] bottom-[-13%]"></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center overflow-hidden text-center'>
                        <Slider {...settings} className='srow-text-contain'>
                            {texts.map((text, idx) => (
                                <p className="text-3xl lg:text-[67px] leading-[1.2] mobile:text-[2.2em]" key={idx}>
                                    {text}
                                </p>
                            ))}
                        </Slider>
                    </div>
                </div>
                {/* <div className='h-[calc(16rem+17vw)] mobile:w-[100vw] mobile:relative mobile:h-[28rem] mobile:overflow-hidden mobile:mt-[1rem]'>
                    <div className='absolute flex flex-row overflow-hidden srow-container w-[48rem] min-w-[100vw] left-[50%] translate-x-[-50%] mobile:w-[68rem]'>
                        <div className='flex flex-shrink-0 gap-[3vw] pl-[1.6rem] sync-row-contain md:gap-[1.6rem]'>
                            <img alt="" loading="lazy" width="644" height="1400" decoding="async" data-nimg="1" class="w-[7.8rem]  min-w-[16.66vw] opacity-[.3] h-auto bg-black rounded-[1.1rem] border-[.08rem] border-[#F2F2F2] mobile:w-[11.8rem] mobile:border-[.12rem] mobile:rounded-[1.6rem]" srcSet='./mobile/1.webp 1x, ./mobile/1.webp 2x' src='./mobile/1.webp' />
                            <img alt="" loading="lazy" width="644" height="1400" decoding="async" data-nimg="1" class="w-[7.8rem]  min-w-[16.66vw] opacity-[.3] h-auto bg-black rounded-[1.1rem] border-[.08rem] border-[#F2F2F2] mobile:w-[11.8rem] mobile:border-[.12rem] mobile:rounded-[1.6rem]" srcSet='./mobile/2.webp 1x, ./mobile/2.webp 2x' src='./mobile/2.webp' />
                            <img alt="" loading="lazy" width="644" height="1400" decoding="async" data-nimg="1" class="w-[7.8rem]  min-w-[16.66vw] opacity-[.3] h-auto bg-black rounded-[1.1rem] border-[.08rem] border-[#F2F2F2] mobile:w-[11.8rem] mobile:border-[.12rem] mobile:rounded-[1.6rem]" srcSet='./mobile/3.webp 1x, ./mobile/3.webp 2x' src='./mobile/3.webp' />
                            <img alt="" loading="lazy" width="644" height="1400" decoding="async" data-nimg="1" class="w-[7.8rem]  min-w-[16.66vw] opacity-[.3] h-auto bg-black rounded-[1.1rem] border-[.08rem] border-[#F2F2F2] mobile:w-[11.8rem] mobile:border-[.12rem] mobile:rounded-[1.6rem]" srcSet='./mobile/6.webp 1x, ./mobile/6.webp 2x' src='./mobile/6.webp' />
                            <img alt="" loading="lazy" width="644" height="1400" decoding="async" data-nimg="1" class="w-[7.8rem]  min-w-[16.66vw] opacity-[.3] h-auto bg-black rounded-[1.1rem] border-[.08rem] border-[#F2F2F2] mobile:w-[11.8rem] mobile:border-[.12rem] mobile:rounded-[1.6rem]" srcSet='./mobile/9.webp 1x, ./mobile/9.webp 2x' src='./mobile/9.webp' />
                            <img alt="" loading="lazy" width="644" height="1400" decoding="async" data-nimg="1" class="w-[7.8rem]  min-w-[16.66vw] opacity-[.3] h-auto bg-black rounded-[1.1rem] border-[.08rem] border-[#F2F2F2] mobile:w-[11.8rem] mobile:border-[.12rem] mobile:rounded-[1.6rem]" srcSet='./mobile/12.webp 1x, ./mobile/12.webp 2x' src='./mobile/12.webp' />
                            <img alt="" loading="lazy" width="644" height="1400" decoding="async" data-nimg="1" class="w-[7.8rem]  min-w-[16.66vw] opacity-[.3] h-auto bg-black rounded-[1.1rem] border-[.08rem] border-[#F2F2F2] mobile:w-[11.8rem] mobile:border-[.12rem] mobile:rounded-[1.6rem]" srcSet='./mobile/17.webp 1x, ./mobile/17.webp 2x' src='./mobile/17.webp' />
                        </div>
                        <div className='flex flex-shrink-0 gap-[3vw] pl-[1.6rem] sync-row-contain md:gap-[1.6rem]'>
                            <img alt="" loading="lazy" width="644" height="1400" decoding="async" data-nimg="1" class="w-[7.8rem] min-w-[16.66vw] opacity-[.3] h-auto bg-black rounded-[1.1rem] border-[.08rem] border-[#F2F2F2] mobile:w-[11.8rem] " srcSet='./mobile/1.webp 1x, ./mobile/1.webp 2x' src='./mobile/1.webp' />
                            <img alt="" loading="lazy" width="644" height="1400" decoding="async" data-nimg="1" class="w-[7.8rem] min-w-[16.66vw] opacity-[.3] h-auto bg-black rounded-[1.1rem] border-[.08rem] border-[#F2F2F2] mobile:w-[11.8rem] " srcSet='./mobile/2.webp 1x, ./mobile/2.webp 2x' src='./mobile/2.webp' />
                            <img alt="" loading="lazy" width="644" height="1400" decoding="async" data-nimg="1" class="w-[7.8rem] min-w-[16.66vw] opacity-[.3] h-auto bg-black rounded-[1.1rem] border-[.08rem] border-[#F2F2F2] mobile:w-[11.8rem] " srcSet='./mobile/3.webp 1x, ./mobile/3.webp 2x' src='./mobile/3.webp' />
                            <img alt="" loading="lazy" width="644" height="1400" decoding="async" data-nimg="1" class="w-[7.8rem] min-w-[16.66vw] opacity-[.3] h-auto bg-black rounded-[1.1rem] border-[.08rem] border-[#F2F2F2] mobile:w-[11.8rem] " srcSet='./mobile/6.webp 1x, ./mobile/6.webp 2x' src='./mobile/6.webp' />
                            <img alt="" loading="lazy" width="644" height="1400" decoding="async" data-nimg="1" class="w-[7.8rem] min-w-[16.66vw] opacity-[.3] h-auto bg-black rounded-[1.1rem] border-[.08rem] border-[#F2F2F2] mobile:w-[11.8rem] " srcSet='./mobile/9.webp 1x, ./mobile/9.webp 2x' src='./mobile/9.webp' />
                            <img alt="" loading="lazy" width="644" height="1400" decoding="async" data-nimg="1" class="w-[7.8rem] min-w-[16.66vw] opacity-[.3] h-auto bg-black rounded-[1.1rem] border-[.08rem] border-[#F2F2F2] mobile:w-[11.8rem] " srcSet='./mobile/12.webp 1x, ./mobile/12.webp 2x' src='./mobile/12.webp' />
                            <img alt="" loading="lazy" width="644" height="1400" decoding="async" data-nimg="1" class="w-[7.8rem] min-w-[16.66vw] opacity-[.3] h-auto bg-black rounded-[1.1rem] border-[.08rem] border-[#F2F2F2] mobile:w-[11.8rem] " srcSet='./mobile/17.webp 1x, ./mobile/17.webp 2x' src='./mobile/17.webp' />
                        </div>
                    </div>

                </div>

            </div> */}

                
                <div className=' bg-gray-50'>

                    <Swiper
                        
                        breakpoints={{
                            
        
                            0: {
        
                               
        
                                slidesPerView: 1,
        
                                centeredSlides: true,
                                spaceBetween : 2
                            },
        
                            575: {
        
                                slidesPerView: 1.2,
        
                                centeredSlides: true,
                                spaceBetween : 2
        
                            },
        
                            768: {
        
                                slidesPerView: 2,
        
                                centeredSlides: false,
        
                            },
        
                            992: {
        
                                slidesPerView: 3,
                                pagination: false,
                            },
        
                            1300: {
        
                                slidesPerView: 5,
                                pagination: false,
                            },
        
                            1440: {
        
                                slidesPerView: 5,
                                pagination: false,
                            },
                        }}
                    
                        spaceBetween={30}
                        slidesPerView={5}
                        pagination={{
                            dynamicBullets: false,
                        }}


                        // modules={[Pagination]} 
                        // className="mySwiper "

                        autoplay={{
                            delay: 1900
                        }}
                        loop
                        modules={[Autoplay]}
                        className="h-[450px] mySwiper"

                    >
                        <SwiperSlide className='w-[209px] h-[450px]'>
                            <img alt="" loading="lazy" width="644" height="1400" decoding="async" data-nimg="1" class="w-[7.8rem]  min-w-[16.66vw] opacity-[.3] h-auto bg-black rounded-[1.1rem] border-[.08rem] border-[#F2F2F2] lg:w-[11.8rem] " srcSet='./mobile/1.webp 1x, ./mobile/1.webp 2x' src='./mobile/1.webp' /></SwiperSlide>
                        <SwiperSlide className='w-[209px] h-[450px]'>
                            <img alt="" loading="lazy" width="644" height="1400" decoding="async" data-nimg="1" class="w-[7.8rem] min-w-[16.66vw] opacity-[.3] h-auto bg-black rounded-[1.1rem] border-[.08rem] border-[#F2F2F2] lg:w-[11.8rem] " srcSet='./mobile/2.webp 1x, ./mobile/2.webp 2x' src='./mobile/2.webp' /></SwiperSlide>
                        <SwiperSlide className='w-[209px] h-[450px]'>
                            <img alt="" loading="lazy" width="644" height="1400" decoding="async" data-nimg="1" class="w-[7.8rem] min-w-[16.66vw] opacity-[.3] h-auto bg-black rounded-[1.1rem] border-[.08rem] border-[#F2F2F2] lg:w-[11.8rem] " srcSet='./mobile/3.webp 1x, ./mobile/3.webp 2x' src='./mobile/3.webp' /></SwiperSlide>
                        <SwiperSlide className='w-[209px] h-[450px]'>
                            <img alt="" loading="lazy" width="644" height="1400" decoding="async" data-nimg="1" class="w-[7.8rem] min-w-[16.66vw] opacity-[.3] h-auto bg-black rounded-[1.1rem] border-[.08rem] border-[#F2F2F2] lg:w-[11.8rem] " srcSet='./mobile/6.webp 1x, ./mobile/6.webp 2x' src='./mobile/6.webp' /></SwiperSlide>
                        <SwiperSlide className='w-[209px] h-[450px]'>
                            <img alt="" loading="lazy" width="644" height="1400" decoding="async" data-nimg="1" class="w-[7.8rem] min-w-[16.66vw] opacity-[.3] h-auto bg-black rounded-[1.1rem] border-[.08rem] border-[#F2F2F2] lg:w-[11.8rem] " srcSet='./mobile/9.webp 1x, ./mobile/9.webp 2x' src='./mobile/9.webp' /></SwiperSlide>
                        <SwiperSlide className='w-[209px] h-[450px]'>
                            <img alt="" loading="lazy" width="644" height="1400" decoding="async" data-nimg="1" class="w-[7.8rem] min-w-[16.66vw] opacity-[.3] h-auto bg-black rounded-[1.1rem] border-[.08rem] border-[#F2F2F2] lg:w-[11.8rem] " srcSet='./mobile/12.webp 1x, ./mobile/12.webp 2x' src='./mobile/12.webp' /></SwiperSlide>
                        <SwiperSlide className='w-[209px] h-[450px]'>
                            <img alt="" loading="lazy" width="644" height="1400" decoding="async" data-nimg="1" class="w-[7.8rem] min-w-[16.66vw] opacity-[.3] h-auto bg-black rounded-[1.1rem] border-[.08rem] border-[#F2F2F2] lg:w-[11.8rem] " srcSet='./mobile/17.webp 1x, ./mobile/17.webp 2x' src='./mobile/17.webp' /></SwiperSlide>


                    </Swiper>
                </div>
            </div>


        </>
    )
}
