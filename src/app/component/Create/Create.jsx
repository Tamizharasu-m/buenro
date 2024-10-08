"use client"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Create() {
   
    useEffect(() => {
        gsap.set('#left-create', { x: -600, duration: 1, opacity:1 }, 0)
        gsap.set('#right-create', { x: 600, duration: 1,opacity:1 }, 0)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.three-create',
                start: 'top 50%',
                end: 'bottom 40%',
                scrub: true,
                markers: true,
            }
        });

        tl.to('#left-create', { x: 450, duration: 1, opacity:0 }, 0)
            .to('#right-create', { x: -450, duration: 1,opacity:0  }, 0);

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
        };
    }, []);
    
   

    return (
        <div className='h-[300vh] md:h-auto relative '>
            <div className=' h-screen mt-[-50px] w-full sticky top-0 hidden md:flex '>
                <div className='absolute w-full h-screen overflow-hidden pin-text three-create'>
                    <p id='left-create' className='text-[calc(1.3rem+2.53vw)] md:text-[2rem] top-[7rem] absolute left-[calc(.5rem+14vw)] md:left-[calc(.3rem+10vw)]'>Create</p>
                    <p id='right-create' className='text-[calc(1.3rem+2.53vw)] md:text-[2rem] bottom-[9.3rem] absolute right-[calc(.55rem+15vw)] md:right-[calc(.35rem+10vw)]'>Events</p>
                </div>
                <div className='absolute w-full h-screen overflow-hidden pin-text'>
                    <p className='text-[calc(1.3rem+2.53vw)] md:text-[2rem] top-[7rem] absolute left-[4rem]'>Sync Trips</p>
                    <p className='text-[calc(1.3rem+2.53vw)] md:text-[2rem] bottom-[9.3rem] absolute right-[calc(2rem+7vw)]'>& Plans</p>
                </div>
                <div className='absolute w-full h-screen overflow-hidden pin-text'>
                    <p className='text-[calc(1.3rem+2.53vw)] md:text-[2rem] top-[7rem] absolute left-[calc(.5rem+14vw)] md:left-[calc(.3rem+10vw)]'>Book &</p>
                    <p className='text-[calc(1.3rem+2.53vw)] md:text-[2rem] bottom-[9.3rem] right-[calc(3.3rem+11.4vw)] absolute'>Share</p>
                </div>
            </div>
            <div className='relative flex items-center justify-center w-full h-screen pin-image z-[10] flex-col md:mb-[3rem] mobile:overflow-hidden mobile:min-h-[43rem]'>
                <div className='flex-col md:hidden  mb-[.4rem] md:mb-[1.2rem] pin-mobile-text'>
                    <p id='left-create' className='text-[1.6rem] text-center mb-[.3rem] mobile:text-[2.4rem]'>Create</p>
                    <p id='right-create' className='text-[1.6rem] text-center mb-[.3rem] mobile:text-[2.4rem]'>Events</p>
                </div>
                <img loading='lazy' width="644" height="1400" decoding='async' data-nimg="1" className=' object-cover border-[.1rem] border-black rounded-[1.25rem] md:w-[10.5rem] md:h-[22rem] w-[15.5rem] mobile:h-auto mobile:border-[.2rem] mobile:rounded-[1.9rem] ' srcSet='./design/7.webp 1x, ./design/7.webp 2x' src="./design/7.webp" alt="" />
            </div>
            <div className='relative flex items-center justify-center w-full h-screen pin-image z-[10] flex-col md:justify-center md:mb-[3rem] mobile:overflow-hidden mobile:min-h-[43rem]'>
                <div className='flex-col md:hidden mb-[.4rem] md:mb-[1.2rem] pin-mobile-text'>
                    <p className='text-[1.6rem] text-center mb-[.3rem] mobile:text-[2.4rem]'>Sync Trips</p>
                    <p className='text-[1.6rem] text-center mb-[.3rem] mobile:text-[2.4rem]'>& Plans</p>
                </div>
                <img loading='lazy' width="644" height="1400" decoding='async' data-nimg="1" className=' object-cover border-[.1rem] border-black rounded-[1.25rem] md:w-[10.5rem] md:h-[22rem] w-[15.5rem] mobile:h-auto mobile:border-[.2rem] mobile:rounded-[1.9rem]' srcSet='./design/13.webp 1x, ./design/13.webp 2x' src="./design/13.webp" alt="" />
            </div>
            <div className='relative flex items-center justify-center w-full h-screen pin-image z-[10] flex-col md:mb-[3rem] mobile:overflow-hidden mobile:min-h-[43rem]'>
            <div className='flex-col  md:hidden mb-[.4rem] md:mb-[1.2rem] pin-mobile-text'>
                    <p className='text-[1.6rem] text-center mb-[.3rem] mobile:text-[2.4rem]'>Book &</p>
                    <p className='text-[1.6rem] text-center mb-[.3rem] mobile:text-[2.4rem]'>Share</p>
                </div>
                <img loading='lazy' width="644" height="1400" decoding='async' data-nimg="1" className=' object-cover border-[.1rem] border-black rounded-[1.25rem] md:w-[10.5rem] md:h-[22rem] w-[15.5rem] mobile:h-auto mobile:border-[.2rem] mobile:rounded-[1.9rem]' srcSet='./design/17.webp 1x, ./design/17.webp 2x' src="./design/17.webp" alt="" />
            </div>
        </div>
    )
}
