"use client"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Slider() {

    useEffect(() => {
        gsap.set('#left-slider', { x: 0, duration: 1 }, 0)
        gsap.set('#right-slider', { x: -500, duration: 1 }, 0)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.three-slide',
                start: 'top 100%',
                end: 'bottom 40%',
                scrub: true,
                markers: false,
            }
        });

        tl.to('#left-slider', { x: 500, duration: 1 }, 0)
            .to('#right-slider', { x: 0, duration: 1 }, 0);

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
        };
    }, []);


    return (
        <div className='h-screen md:h-[165vh] text-center mobile:mb-[-16rem] overflow-hidden three-slide'>
            <div id='right-slider' className='flex items-center h-full gap-[2.35rem] screens-showcase rotate-[-10deg]' >
                <img loading='lazy' width="644" height="1400" decoding='async' data-nimg='1' className="md:w-[8.16rem] md:h-[17.75rem] bg-black rounded-[1.1rem] border-[.09rem] border-black w-auto h-[25.75rem]" srcSet='./mobile/1.webp 1x ,./mobile/1.webp 2x ' src="./mobile/1.webp" alt="" />
                <img loading='lazy' width="644" height="1400" decoding='async' data-nimg='1' className="md:w-[8.16rem] md:h-[17.75rem] bg-black rounded-[1.1rem] border-[.09rem] border-black w-auto h-[25.75rem]" srcSet='./mobile/2.webp 1x ,./mobile/2.webp 2x ' src="./mobile/2.webp" alt="" />
                <img loading='lazy' width="644" height="1400" decoding='async' data-nimg='1' className="md:w-[8.16rem] md:h-[17.75rem] bg-black rounded-[1.1rem] border-[.09rem] border-black w-auto h-[25.75rem]" srcSet='./mobile/3.webp 1x ,./mobile/3.webp 2x ' src="./mobile/3.webp" alt="" />
                <img loading='lazy' width="644" height="1400" decoding='async' data-nimg='1' className="md:w-[8.16rem] md:h-[17.75rem] bg-black rounded-[1.1rem] border-[.09rem] border-black w-auto mobile:h-[25.75rem]" srcSet='./mobile/6.webp 1x ,./mobile/6.webp 2x ' src="./mobile/6.webp" alt="" />
                <img loading='lazy' width="644" height="1400" decoding='async' data-nimg='1' className="md:w-[8.16rem] md:h-[17.75rem] bg-black rounded-[1.1rem] border-[.09rem] border-black w-auto h-[25.75rem]" srcSet='./mobile/9.webp 1x ,./mobile/9.webp 2x ' src="./mobile/9.webp" alt="" />
                <img loading='lazy' width="644" height="1400" decoding='async' data-nimg='1' className="md:w-[8.16rem] md:h-[17.75rem] bg-black rounded-[1.1rem] border-[.09rem] border-black w-auto h-[25.75rem]" srcSet='./mobile/12.webp 1x ,./mobile/12.webp 2x ' src="./mobile/12.webp" alt="" />
                <img loading='lazy' width="644" height="1400" decoding='async' data-nimg='1' className="md:w-[8.16rem] md:h-[17.75rem] bg-black rounded-[1.1rem] border-[.09rem] border-black w-auto h-[25.75rem]" srcSet='./mobile/17.webp 1x ,./mobile/17.webp 2x ' src="./mobile/17.webp" alt="" />
            </div>
        </div>
    )
}
