"use client"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';

gsap.registerPlugin(ScrollTrigger);


export default function Connect() {

    useEffect(() => {
        gsap.set('#left-connect', { x: -0, duration: 1 }, 0)
        gsap.set('#right-connect', { x: 0, duration: 1 }, 0)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.three-slides',
                start: 'top 100%',
                end: 'bottom 80%',
                scrub: true,
                markers: false,
            }
        });

        tl.to('#left-connect', { x: 310, duration: 1 }, 0)
            .to('#right-connect', { x: -310, duration: 1 }, 0);

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
        };
    }, []);

  
    return (
        <div className='lg:h-[100vh] three-slides h-[80vh] container mx-auto overflow-hidden'>
            <div className='flex flex-col justify-center h-full lg:h-screen'>
                <p className='text-3xl text-center md:text-[2rem] capitalize sm:text-[2.35rem] md:w-[10ch] md:mx-auto md:leading-[1.5] lg:text-[68.0064px] lg:leading-[78.2125px] lg:w-[20ch]'>Connect in real life</p>
                <div className='relative mt-[1.1rem] h-[15rem] flex items-center justify-center w-full md:overflow-hidden lg:mt-[29.568px]'>
                <div id="left-connect" className=' w-[7rem] h-[7rem] absolute lg:w-[9.96rem] lg:h-[9.96rem] overflow-hidden rounded-[1.25rem] translate-x-[11.2rem] md:w-[8.46rem] md:h-[8.46rem]'>
                        
                        <img loading='lazy'  decoding='async' data-nimg="1" className='object-cover w-full h-full ' srcSet='./box/ev1.webp 1x, ./box/ev1.webp 2x' src="./box/ev1.webp" alt="" />
                    </div>
                    <div id="right-connect" className=' w-[7rem] h-[7rem] absolute lg:w-[9.96rem] lg:h-[9.96rem] overflow-hidden rounded-[1.25rem] translate-x-[-11.2rem] md:w-[8.46rem] md:h-[8.46rem] '>
                    <img   loading='lazy' decoding='async' data-nimg="1" className='object-cover w-full h-full ' srcSet='./box/ev2.webp 1x, ./box/ev2.webp 2x' src="./box/ev2.webp" alt="" />
                    </div>
                    <div className='bg-white-900 shadow-white absolute left-[50%] translate-x-[-50%] md:w-[14.75rem] md:h-[14.75rem] overflow-hidden border-[.2rem] border-white rounded-[1.65rem] w-[12.53rem] h-[12.53rem] lg:w-[396.475px] lg:h-[396.475px] xl:rounded-[43.68px]'>
                        <img loading='lazy' height="1000px" width="1000px" decoding='async' data-nimg="1" className='object-cover w-full h-full ' srcSet='./box/ev3.webp 1x, ./box/ev3.webp 2x' src="./box/ev3.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
