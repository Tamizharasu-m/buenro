"use client"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Buenro() {

    useEffect(() => {
        gsap.set('#left-buenro', { x: -300, duration: 1 }, 0)
        gsap.set('#right-buenro', { x: 300, duration: 1 }, 0)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.three-slides',
                start: 'top 200%',
                end: 'bottom 200%',
                scrub: true,
                markers: false,
            }
        });

        tl.to('#left-buenro', { x: 0, duration: 1 }, 0)
            .to('#right-buenro', { x: 0, duration: 1 }, 0);

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
        };
    }, []);

    useEffect(() => {
        gsap.set('#left-buenro1', { x: -400, duration: 1 }, 0)
        gsap.set('#right-buenro1', { x: 400, duration: 1 }, 0)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.three-slides',
                start: 'top 200%',
                end: 'bottom 190%',
                scrub: true,
                markers: false,
            }
        });

        tl.to('#left-buenro1', { x: 0, duration: 1 }, 0)
            .to('#right-buenro1', { x: 0, duration: 1 }, 0);

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
        };
    }, []);
    
    return (
        <div className='relative w-[100%] z-[10] overflow-hidden mobile:mt-[-2rem]'>
            <div className='relative w-full'>
                <div className='overflow-hidden bg-contain pt-[1.2rem] left-[50%] translate-x-[-50%] h-screen w-[105%] absolute mobile:h-[39rem]'>
                    <div className='rounded bg-white-100 scaling-bg-[2rem] w-full h-full mobile:mt-[3rem]'></div>
                    <div className='absolute top-0 w-full svgs-container mask-container'>
                        <div  id='left-buenro' className='absolute h-screen left-map w-[calc(100vw/12*4)] pt-[3.9rem] pb-[2rem] mobile:h-[62vh] mobile:w-[9rem] '>
                            {/* <img loading='lazy' width="2151" height="1063" decoding='async' data-nimg="1" className='' srcSet=' ' src="" /> */}
                            <img
                                src={'/green-map.png'}
                                width={2151}
                                height={1063}
                                className='object-cover object-right h-full svgMapL'
                            />
                        </div>
                        <div id='right-buenro' className='absolute h-screen right-map right-0 w-[calc(100vw/12*4)] pt-[3.92rem] pb-[1.95rem] mobile:h-[62vh] mobile:w-[9rem] '>
                            {/* <img loading='lazy' width="2151" height="1063" decoding='async' data-nimg="1" className='object-cover object-left h-full svgMapR' srcSet='./green-map.png 1x' src="./green-map.png" alt="" /> */}
                            <img
                                src={'/green-map.png'}
                                width={2151}
                                height={1063}
                                className='object-cover object-left h-full svgMapR'
                            />
                        </div>
                    </div>
                    <div className='white-vignette'></div>
                    <div className='hidden mask-container md:flex'>
                        <div  id='left-buenro1' className='left-pin w-[40vw] h-screen absolute top-0 '>
                            <div className='w-[5.31rem] absolute h-[5.31rem] top-[33.2%] left-[35.2%] rounded-full p-[.16rem] bg-white shadow-sm'>
                                {/* <img loading='lazy' width="2000" height="2000" decoding='async' data-nimg="1" className='rounded-[100%] w-full h-full object-cover object-top' srcSet='./new-m10.jpg 1x, ./new-m10.jpg 2x' src="./new-m10.jpg" alt="" /> */}
                                <img
                                    src={'/new-m10.jpg'}
                                    width={2000}
                                    height={2000}
                                    className='rounded-[100%] w-full h-full object-cover object-top'
                                />
                            </div>
                            <div className='left-[45.3%] top-[calc(33.3%+5.31rem)] blue-pin'></div>
                        </div>
                        <div className='right-pin w-[40vw] h-screen absolute top-0 right-0'>
                            <div  id='right-buenro1' className='right-pin w-[40vw] h-screen absolute top-0 right-0'>
                                <div className='w-[5.31rem] absolute h-[5.31rem] right-[38.2%] top-[33.2%] rounded-full p-[.16rem] bg-white shadow-sm'>
                                    {/* <img loading='lazy' width="2000" height="2000" decoding='async' data-nimg="1" className='rounded-[100%] w-full h-full object-cover object-top' srcSet='./new.jpg 1x, ./new.jpg 2x' src="./new.jpg" alt="" /> */}
                                    <img
                                    src={'/new.jpg'}
                                    width={2000}
                                    height={2000}
                                    className='rounded-[100%] w-full h-full object-cover object-top'
                                />
                                </div>
                                <div className='left-[45.3%] top-[calc(33.3%+5.31rem)] blue-pin'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative text-black tilt-text w-[23rem] text-center flex flex-col justify-center mx-auto min-h-screen tablet:w-[12rem] tablet:pt-[6rem] mobile:w-[12rem] mobile:pt-[0] mobile:min-h-[39rem] mobile:pt-[6rem] gap-[.3rem]'>
                    <h2 className='text-[2.40rem] font-medium capitalize leading-[1.25] pb-[1rem] mobile:text-[3rem] mobile:pb-[1.6rem] '>Buenro</h2>
                    <div className='w-full tablet:mt-[12%] mobile:mt-[0] '>
                        <p className='handwritten-text text-[38px] lg:text-[49x]'>Mean "good vibes" in Spanish</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
