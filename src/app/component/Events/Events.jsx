"use client"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Events() {

    useEffect(() => {
        gsap.set('#top-slider', { y: 200, duration: 1 }, 0)
        gsap.set('#bottom-slider', { y: 200, duration: 1 }, 0)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.three-box',
                start: 'top 100%',
                end: 'bottom 80%',
                scrub: true,
                markers: false,
            }
        });

        tl.to('#top-slider', { y: -200, duration: 1 }, 0)
            .to('#bottom-slider', { y: 0, duration: 1 }, 0);

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
        };
    }, []);

    return (
        <div className='three-box  pb-[10%] md:flex w-full justify-center mt-[calc(1rem+15vh)] gap-[2rem] md:flex-row md:items-center mobile:px-[1.2rem] mobile:mt-[5rem] px-[22.464px]'>
            <div className='flex flex-col sc-col gap-[2rem]'>
                <div className='h-[23.6rem] overflow-hidden bg-yellow-grad px-[1.2rem] capitalize gap-[1rem] pt-[1.6rem] text-center w-[15.22rem] rounded-[1.3rem] items-center border-[.09rem] border-black flex flex-col mobile:w-full mobile:pt-[2.2rem] mobile:border-[.16rem] mobile:px-[1rem] mobile:gap-[1.4rem] mobile:rounded-[2.2rem] mobile:h-[38rem]'>
                    <p class="text-regular45 leading-[1.5] mb-[-.3rem] mobile:text-[1.75rem]">Gather in events</p>
                    <p class="text-sm20 mobile:text-[.91rem]">Share real-life plans <span class="text-[#808080]">anywhere you go.</span></p>
                    <img id='bottom-slider' alt="" loading="lazy" width="644" height="1400" decoding="async" data-nimg="1" class="w-[8.3em] rounded-[1rem] h-[auto] border-[.06em] border-black mobile:text-[1.5rem]" srcSet='./section11/8.webp 1x, ./section11/8.webp 2x' src='./section11/8.webp' />
                </div>
                <div className='h-[24.9rem] overflow-hidden bg-yellow-grad px-[1.2rem] capitalize gap-[1rem] pt-[1.6rem] text-center w-[15.22rem] rounded-[1.3rem] items-center border-[.09rem] border-black flex flex-col mobile:w-full mobile:pt-[2.2rem] mobile:border-[.16rem] mobile:px-[1rem] mobile:gap-[1.4rem] mobile:rounded-[2.2rem] mobile:h-[38rem]'>
                    <p class="text-regular45 leading-[1.5] mb-[-.3rem] mobile:text-[1.75rem]">Book rooms <span class="text-[#808080]"> in </span>Shared Homes</p>
                    <p class="text-sm20 mobile:text-[.91rem]"><span class="text-[#808080]">Pay only for your room &amp;</span> live with your people in luxury homes for a fraction of the cost.</p>
                    <img id='bottom-slider' alt="" loading="lazy" width="644" height="1400" decoding="async" data-nimg="1" class="w-[8.3em] rounded-[1em] h-[auto] border-[.06em] border-black mobile:text-[1.5rem]" srcSet='./section11/14.webp 1x, ./section11/14.webp 2x' src='./section11/14.webp' />
                </div>
            </div>
            <div id='top-slider' className='flex flex-col sc-col gap-[2rem] pt-[1.6rem] md:pt-0 mt-[100px] lg:mt-[0]'>
                <div className='h-[16rem] overflow-hidden bg-violet-grad px-[1.2rem] capitalize gap-[1rem] pt-[1.6rem] text-center w-[15.22rem] rounded-[1.3rem] items-center border-[.09rem] border-black flex flex-col mobile:w-full mobile:pt-[2.2rem] mobile:border-[.16rem] mobile:px-[1rem] mobile:gap-[1.4rem] mobile:rounded-[2.2rem] mobile:h-[23rem]'>
                <p class="text-regular45 leading-[1.5] mb-[-.3rem] mobile:text-[1.75rem]">Find <span class="text-[#808080]">your</span>People</p>
                <p class="text-sm20 mobile:text-[.91rem]">Meet new friends <span class="text-[#808080]">all over the world.</span></p>
                <img id='bottom-slider' alt="" loading="lazy" width="644" height="1400" decoding="async" data-nimg="1" class="w-[8.3em] rounded-[1em] h-[auto] border-[.06em] border-black mobile:text-[1.5rem]" srcSet='./section11/11.webp 1x, ./section11/11.webp 2x' src='./section11/11.webp' />
                </div>
                <div className='h-[16rem] overflow-hidden bg-violet-grad px-[1.2rem] capitalize gap-[1rem] pt-[1.6rem] text-center w-[15.22rem] rounded-[1.3rem] items-center border-[.09rem] border-black flex flex-col mobile:w-full mobile:pt-[2.2rem] mobile:border-[.16rem] mobile:px-[1rem] mobile:gap-[1.4rem] mobile:rounded-[2.2rem] mobile:h-[23rem]'>
                <p class="text-regular45 leading-[1.5] mb-[-.3rem] mobile:text-[1.75rem]">Split Costs<span class="text-[#808080]"> Effortlessly</span></p>
                <p class="text-sm20 mobile:text-[.91rem]">Stress-Free spending <span class="text-[#808080]">with friends.</span></p>
                <img id='bottom-slider' alt="" loading="lazy" width="644" height="1400" decoding="async" data-nimg="1" class="w-[8.3em] object-cover rounded-[1em] h-[auto] border-[.06em] border-black mobile:text-[1.5rem]" srcSet='./section11/10.webp 1x, ./section11/10.webp 2x' src='./section11/10.webp'/>
                </div>
                <div className='h-[16rem] overflow-hidden bg-violet-grad px-[1.2rem] capitalize gap-[1rem] pt-[1.6rem] text-center w-[15.22rem] rounded-[1.3rem] items-center border-[.09rem] border-black flex flex-col mobile:w-full mobile:pt-[2.2rem] mobile:border-[.16rem] mobile:px-[1rem] mobile:gap-[1.4rem] mobile:rounded-[2.2rem] mobile:h-[23rem]'>
                <p class="text-regular45 leading-[1.5] mb-[-.3rem]  mobile:text-[1.75rem]">Stay Connected <span class="text-[#808080]"></span></p>
                <p class="text-sm20 mobile:text-[.91rem]">Be the first to learn about your friends’ plans.</p>
                <img id='bottom-slider' alt="" loading="lazy" width="644" height="1400" decoding="async" data-nimg="1" class="w-[8.3em] rounded-[1em] h-[76%] object-cover object-top border-[.06em] border-black mobile:text-[1.5rem]" srcSet='./section11/21.webp 1x, ./section11/21.webp 2x' src='./section11/21.webp' />
                </div>
            </div>
        </div>
    )
}
