"use client"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Carlos() {

    useEffect(() => {
        gsap.set('#left-carlos', { x: -200, duration: 1 }, 0)
        gsap.set('#right-carlos', { x: 200, duration: 1 }, 0)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.three-slidess',
                start: 'top 100%',
                end: 'bottom 90%',
                scrub: true,
                markers: false,
            }
        });

        tl.to('#left-carlos', { x: 30, duration: 1 }, 0)
            .to('#right-carlos', { x: -30, duration: 1 }, 0);

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
        };
    }, []);

    
  return (
    <div className=' h-screen items-center justify-center flex flex-col  overflow-hidden gap-[.5rem] text-center bg-white-100 text-black pt-[2.5rem] pb-[3.5rem] md:pb-[0] '>
        <div>
            <h3 className='text-[1.9rem] md:w-[20ch] mx-auto  w-full px-[1.2rem] md:px-0 leading-[1.5] md:leading-[0]'>See who else is joining</h3>
        </div>
        <div className=''>
            <div className='three-slidess pb-[4rem] flex justify-center  pt-[3rem] md:pt-[2rem] text-center'>
                <div id='left-carlos' className='shrick-0 '>
                    <img loading='lazy' width="1000" height="1000" decoding='async' data-nimg="1" className='w-[8.1rem] h-[8.1rem] mx-auto rounded-full mb-[.87rem] object-cover md:w-[8rem] md:h-[8rem]'  srcSet='./member1.webp 16w, ./member1.webp 32w ./member1.webp 48w, ./member1.webp 64w, ./member1.webp 96w, ./member1.webp 128w, ./member1.webp 256w, ./member1.webp 384w, ./member1.webp 640w, ./member1.webp 750w, ./member1.webp 828w, ./member1.webp 1080w, ./member1.webp 1200w, ./member1.webp 1920w, ./member1.webp 2048w, ./member1.webp 3840w,' src="./member1.webp" alt="" />
                    <p className=' mt-[1.8rem] md:mt-[0] text-[.9rem]'>"Sophie P." <img loading='lazy' width="160" height="160" decoding='async' data-nimg="1" className='md:w-[.7rem] inline-block w-[.9rem]' srcSet='./en.webp 1x, ./en.webp 2x' src="" alt="./en.webp" /></p>
                    <p className='text-[.556rem] text-gray-500 leading-[1.3] '>Digital Nomad</p>
                </div>
                <div className='z-10 shrink-0 '>
                    <img loading='lazy' width="650" height="650" decoding='async' data-nimg="1" className='w-[8.9rem] h-[8.9rem] mx-auto rounded-full mb-[.87rem] object-cover border-[.4rem] border-white  md:w-[9.8rem] md:h-[9.8rem] mt-[-.9rem] md:mt-0'  srcSet='./new.jpg 16w, ./new.jpg 32w ./new.jpg 48w, ./new.jpg 64w, ./new.jpg 96w, ./new.jpg 128w, ./new.jpg 256w, ./new.jpg 384w, ./new.jpg 640w, ./new.jpg 750w, ./new.jpg 828w, ./new.jpg 1080w, ./new.jpg 1200w, ./new.jpg 1920w, ./new.jpg 2048w, ./new.jpg 3840w,' src="./new.jpg" alt="" />
                    <p className=' mt-[1.8rem] md:mt-[0] text-[.9rem]'>"Carlos M." <img loading='lazy' width="160" height="160" decoding='async' data-nimg="1" className='w-[.7rem] inline-block ' srcSet='./us.webp 1x, ./us.webp 2x' src="" alt="./us.webp" /></p>
                    <p className='text-[.556rem] text-gray-500 leading-[1.3] '>Remote Designer</p>
                </div>
                <div id='right-carlos' className='shrink-0 '>
                <img loading='lazy' width="1500" height="1000" decoding='async' data-nimg="1" className='w-[8.1rem] h-[8.1rem] mx-auto rounded-full mb-[.87rem] object-cover md:w-[8rem] md:h-[8rem]'  srcSet='./person1.webp 16w, ./person1.webp 32w ./person1.webp 48w, ./person1.webp 64w, ./person1.webp 96w, ./person1.webp 128w, ./person1.webp 256w, ./person1.webp 384w, ./person1.webp 640w, ./person1.webp 750w, ./person1.webp 828w, ./person1.webp 1080w, ./person1.webp 1200w, ./person1.webp 1920w, ./person1.webp 2048w, ./person1.webp 3840w,' src="./person1.webp" alt="" />
                    <p className='mt-[1.8rem] md:mt-[0] text-[.9rem]'>"Emily S." <img loading='lazy' width="160" height="160" decoding='async' data-nimg="1" className='w-[.7rem] inline-block ' srcSet='./ca.webp 1x, ./ca.webp 2x' src="" alt="./ca.webp" /></p>
                    <p className='text-[.556rem] text-gray-500 leading-[1.3] '>Solo Traveler</p>
                </div>
            </div>
        </div>
    </div>
  )
}
