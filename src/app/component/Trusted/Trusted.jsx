"use client"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Trusted() {

    useEffect(() => {
        gsap.set('#left-phone', { x: -200, duration: 1 }, 0)
        gsap.set('#right-phone', { x: 200, duration: 1 }, 0)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.three-slidesss',
                start: 'top 80%',
                end: 'bottom 100%',
                scrub: true,
                
            }
        });

        tl.to('#left-phone', { x: 0, duration: 1 }, 0)
            .to('#right-phone', { x: -0, duration: 1 }, 0);

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
        };
    }, []);

    useEffect(() => {
        gsap.set('#left-phone1', { x: -200, duration: 10 }, 0)
        gsap.set('#right-phone1', { x: 200, duration: 10 }, 0)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.three-slidesss',
                start: 'top 80%',
                end: 'bottom 100%',
                scrub: true,
                
            }
        });

        tl.to('#left-phone1', { x: 0, duration: 10 }, 0)
            .to('#right-phone1', { x: 0, duration: 10 }, 0);

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
        };
    }, []);

    
    return (
        <div className='relative text-center text-black bg-white-100 three-slidesss'>
            <div className='sticky top-0 justify-center hidden w-full h-screen md:flex '>
                <div className='absolute w-full h-full top-[0] overflow-hidden'>
                    <img id='left-phone' alt="" loading="lazy" width="645" height="1400" decoding="async" data-nimg="1" class="slides-Image left shadow-xxsm object-cover absolute top-[10%] left-[calc(.55rem+10vw)] w-[8.16rem] border-[.09rem] border-black h-[17.75rem] rounded-[1.2rem] rotate-[-10deg] " srcSet='./trust/18.jpg 1x, ./trust/18.jpg 2x' src='./trust/18.jpg' />
                    <img id="left-phone1" alt="" loading="lazy" width="644" height="1400" decoding="async" data-nimg="1" class="slides-Image left object-cover shadow-xxsm absolute top-[10%] left-[calc(.55rem+10vw)] w-[8.16rem] border-[.09rem] border-black h-[17.75rem] rounded-[1.2rem] rotate-[10deg] " srcSet='./trust/2.jpg 1x, ./trust/2.jpg 2x' src='./trust/2.jpg' />
                </div>
                <div className='absolute w-full h-full top-[0] overflow-hidden'>
                    <img id="right-phone" alt="" loading="lazy" width="633" height="1400" decoding="async" data-nimg="1" class="slides-Image right object-cover absolute top-[10%] right-[calc(.55rem+10vw)] w-[8.16rem] border-[.09rem] border-black h-[17.75rem] rounded-[1.2rem] rotate-[10deg]" srcSet='./trust/19.jpg 1x, ./trust/19.jpg 2x' src='./trust/19.jpg' />
                    <img id="right-phone1" alt="" loading="lazy" width="644" height="1400" decoding="async" data-nimg="1" class="slides-Image right object-cover absolute top-[10%] right-[calc(.55rem+10vw)] w-[8.16rem] border-[.09rem] border-black h-[17.75rem] rounded-[1.2rem] rotate-[-10deg]" srcSet='./trust/20.jpg 1x, ./trust/20.jpg 2x' src='./trust/20.jpg' />
                </div>
            </div>
            <div>
            <div className='md:absolute top-0 left-0 right-0 mx-auto slides-part w-[24ch] md:h-screen flex flex-col justify-center gap-[.9rem]  md:pb-[3.1rem] md:min-h-[13rem] md:mt-[0]  md:w-[52%] md:text-[1.1rem] mobile:w-[85%] mobile:gap-[2rem] mobile:text-[1.26rem] pt-[71px] md:pt-[0] '>
                <h5 class="text-[1.9em] leading-[1.5] mobile:text-[1.75rem]">Connect with <span class="text-[#999999]"><br></br>Trusted</span> Circles</h5>
                <p class="text-regular30 mobile:text-[.759em] mobile:text-[.87rem] mobile:max-w-[34ch] mobile:w-auto mobile:mx-auto">Transform how you connect with your<br></br> trusted social circles - from private<br></br> members clubs, to leadership networks,<br></br> conferences, and festivals.</p>
            </div>
            <div  className='flex w-full  overflow-hidden mobile-pinning-slides  flex-row justify-center gap-[1.4rem] px-[23px] py-[60px] md:py-[0] md:px-[0] mobile:justify-between mobile:w-full mobile:gap-[.3rem] md:hidden'>
                <img  alt="" loading="lazy" width="645" height="1400" decoding="async" data-nimg="1" class="slides-Image  shadow-xxsm object-cover top-[4.2rem] w-[8.16rem] border-[.09rem] border-black h-[17.75rem] rounded-[1.2rem] md:left-[1rem] mobile:min-h-[17rem] mobile:h-[auto] mobile:w-[47%]" srcSet='./trust/18.jpg 1x, ./trust/18.jpg 2x' src='./trust/18.jpg' />
                <img  alt="" loading="lazy" width="633" height="1400" decoding="async" data-nimg="1" class="slides-Image  object-cover top-[4.2rem] w-[8.16rem] border-[.09rem] border-black h-[17.75rem] rounded-[1.2rem] md:left-[1rem] mobile:min-h-[17rem] mobile:h-[auto] mobile:w-[47%]" srcSet='./trust/2.jpg 1x, ./trust/2.jpg 2x' src='./trust/2.jpg' />
            </div>
            <div className='mx-auto slides-part w-[25ch] md:h-[100vh] flex flex-col justify-center gap-[.9rem] md:pt-[2.9em] md:pb-[3.2em] md:min-h-[13rem]  md:w-[52%] md:text-[1.1rem] pb-[1.3rem] mobile:w-[85%] mobile:gap-[2rem] mobile:text-[1.26rem] pt-[71px] '>
                <h5 class="text-[1.9em] leading-[1.5] mobile:text-[1.75rem]">Join Exclusive <br></br> Trips <span class="text-[#999999]">&amp;</span> Events</h5>
                <p class="text-regular30 mobile:text-[.759em] mobile:text-[.87rem] mobile:max-w-[34ch] mobile:w-auto mobile:mx-auto"><span class="text-[#999999]">Whether it's a local gathering, an exciting<br></br> trip, or a stay at a unique property,</span> easily<br></br> find and become part of events and<br></br> groups that match your interests.</p>
            </div>
            <div className='flex w-full overflow-hidden mobile-pinning-slides md:hidden flex-row  justify-center  px-[23px] py-[60px] md:py-[0] md:px-[0] gap-[1.4rem] mobile:px-[1.2rem] mobile:justify-between mobile:w-full mobile:gap-[.3rem] mobile:pt-[3rem] '>
                <img alt="" loading="lazy" width="644" height="1400" decoding="async" data-nimg="1" class="slides-Image  shadow-xxsm object-cover top-[4.2rem] w-[8.16rem] border-[.09rem] border-black h-[17.75rem] rounded-[1.2rem] md:left-[1rem] mobile:w-[47%] mobile:min-h-[17rem] mobile:h-[auto]" srcSet='./trust/19.jpg 1x, ./trust/19.jpg 2x' src='./trust/19.jpg' />
                <img alt="" loading="lazy" width="644" height="1400" decoding="async" data-nimg="1" class="slides-Image  object-cover top-[4.2rem] w-[8.16rem] border-[.09rem] border-black h-[17.75rem] rounded-[1.2rem] md:left-[1rem] mobile:w-[47%] mobile:min-h-[17rem] mobile:h-[auto]" srcSet='./trust/20.jpg 1x, ./trust/20.jpg 2x' src='./trust/20.jpg' />
            </div>
            </div>
        </div>
    )
}
