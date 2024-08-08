"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import SplitType from 'split-type';
import Link from 'next/link';


export default function Globally() {
    const horizontalScrollContainer = useRef(null);

    useEffect(() => {
    const sections = gsap.utils.toArray('.scroll-section');
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(sections, { width: '400px' });
    gsap.to(sections, {
        xPercent: -95 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
            trigger: horizontalScrollContainer.current,
            pin: true,
            scrub: 1,
            end: () => `+=${horizontalScrollContainer.current?.offsetWidth }`,
        },
    });
    // const texts = new SplitType('.headanimi3', { types: 'chars' });
    // var charsa = texts.chars;
    // gsap.set(".headanimi3", { perspective: 400 });
    // gsap.from(charsa, {
    //   duration: 0.5,
    //   scale: 0,
    //   y: 100,
    //   delay: 1,
    //   rotationX: 120,
    //   transformOrigin: "0% 30% -30",
    //   ease: "power4.out",
    //   stagger: 0.01,
    //   scrollTrigger: {
    //     trigger: ".headanimi3",
    //     scrub: 1,
    //     start: "top 100%",
    //     end: "+=500px",
    //   }
    // });

})


    return (
        <div ref={horizontalScrollContainer} className='  relative flex flex-col properties bg-white-100 h-[100vh] w-full items-center justify-start md:pt-[1rem] md:pb-[3rem] mobile:h-[200vh] '>
            <div className='px-mobile w-[100vw] overflow-hidden lg:px-0 lg:w-full h-[18rem] sticky top-[calc(100vh-18rem)/2] mobile:h-[auto] mobile:top-[calc(100vh-21rem)/2]'>
                <p class="text-[1.28rem] pl-[8.33vw] tablet:pl-0">Gather Globally in +50,000 Properties</p>
                <div className='hidden mt-2 overflow-x-auto snap-x snap-mandatory scrollbar-hide'>
                    <div className='flex-shrink-0 mr-2 scroll-section snap-center'>
                        <div className='w-[14.2rem] shrink-0 bg-[length:100%] bg-center bg-no-repeat relative rounded-[30px] mobile:w-[17.2rem] bg-image1'>
                            <div className='absolute top-0 left-0 m-[0.57rem]'>
                                <div className='flex py-[.23rem] px-[.5rem] rounded-full bg-[#00000078] backdrop:blur'>
                                    <span class="text-[11px] text-white-100 font-medium text-white lg:text-[0.45rem]">1 Spot left</span>
                                </div>
                            </div>
                            <div className='absolute top-0 left-0 m-[0.57rem]'>
                                <span className='flex items-center px-2 text-xs font-semibold text-white rounded lg:px-0-full backdrop:blur lg:text-[0.45rem]'>
                                    <div className='relative w-[28px] h-[28px] lg:w-[1.2rem] lg:h-[1.2rem]'>
                                        <img alt="heart icon" loading="lazy" decoding="async" data-nimg="fill" class=" " src="./Buenro-15.svg" />
                                    </div>
                                </span>
                            </div>
                            <div className='absolute bottom-[7px] left-[7px] right-[7px] lg:bottom-[0.3rem] lg:left-[0.3rem] lg:right-[0.3rem] p-4 lg:py-[0.6rem] lg:px-3 rounded-[25px] lg:rounded-8.75 flex justify-between lg:min-h-oneRow lg:items-center'>
                                <div class="absolute inset-0 rounded-[.9rem] lg:rounded-[.9rem] lg:min-h-oneRow mobile:rounded-[1.4rem]"></div>
                                <div className='flex flex-col gap-[.4rem] justify-between z-20'>
                                    <h4 class="text-white-100 z-20 lg:text-sm25 text-[.6rem] mobile:text-[.9rem]">Mykonos, Greece</h4>
                                    <div className='flex gap-[0.6rem] justify-start'>
                                        <div className='flex lg:items-center'>
                                            <div className='relative pb-[.1rem]'>
                                                <div className='relative mr-[-0.3rem] w-[.6rem] h-[.6rem] lg:h-[.55rem] lg:w-[.55rem]'>
                                                    <img alt="Avatar 1" loading="lazy" decoding="async" data-nimg="fill" class="rounded-full object-cover" sizes="100vw" srcSet='./profile/person1.webp 640w, ./profile/person1.webp 750w, ./profile/person1.webp 828w, ./profile/person1.webp 1080w, ./profile/person1.webp 1200w, ./profile/person1.webp 1920w, ./profile/person1.webp 2048w, ./profile/person1.webp 3840w' src='./profile/person1.webp' />
                                                </div>
                                            </div>
                                            <div className='relative pb-[.1rem]'>
                                                <div className='relative mr-[-0.3rem] w-[.6rem] h-[.6rem] lg:h-[.55rem] lg:w-[.55rem]'>
                                                    <img alt="Avatar 1" loading="lazy" decoding="async" data-nimg="fill" class="rounded-full object-cover" sizes="100vw" srcSet='./profile/person1.webp 640w, ./profile/person1.webp 750w, ./profile/person1.webp 828w, ./profile/person1.webp 1080w, ./profile/person1.webp 1200w, ./profile/person1.webp 1920w, ./profile/person1.webp 2048w, ./profile/person1.webp 3840w' src='./profile/person1.webp' />
                                                </div>
                                            </div>
                                            <div className='relative pb-[.1rem]'>
                                                <div className='relative mr-[-0.3rem] w-[.6rem] h-[.6rem] lg:h-[.55rem] lg:w-[.55rem]'>
                                                    <img alt="Avatar 1" loading="lazy" decoding="async" data-nimg="fill" class="rounded-full object-cover" sizes="100vw" srcSet='./profile/person1.webp 640w, ./profile/person1.webp 750w, ./profile/person1.webp 828w, ./profile/person1.webp 1080w, ./profile/person1.webp 1200w, ./profile/person1.webp 1920w, ./profile/person1.webp 2048w, ./profile/person1.webp 3840w' src='./profile/person1.webp' />
                                                </div>
                                            </div>
                                            <div className='relative pb-[.1rem]'>
                                                <div className='relative mr-[-0.3rem] w-[.6rem] h-[.6rem] lg:h-[.55rem] lg:w-[.55rem]'>
                                                    <img alt="Avatar 1" loading="lazy" decoding="async" data-nimg="fill" class="rounded-full object-cover" sizes="100vw" srcSet='./profile/person1.webp 640w, ./profile/person1.webp 750w, ./profile/person1.webp 828w, ./profile/person1.webp 1080w, ./profile/person1.webp 1200w, ./profile/person1.webp 1920w, ./profile/person1.webp 2048w, ./profile/person1.webp 3840w' src='./profile/person1.webp' />
                                                </div>
                                            </div>
                                        </div>
                                        <p class="text-white-100 text-xs z-20 lg:text-sm20 text-[.48rem] mobile:text-[.71rem]">Join 4 roomies</p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[.4rem] text-right justify-between z-20'>
                                    <h4 class="text-white-100 text-xs z-20  lg:text-sm20 text-[.48rem] mobile:text-[.71rem]">Aug 22-27</h4>
                                    <div className='flex gap-2'>
                                        <p class="text-white-100 md:text-[15px] z-20 lg:text-sm25 text-[.6rem] mobile:text-[.9rem]">$ 129 night</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-shrink-0 mr-2 scroll-section snap-center'>
                        <div className='w-[14.2rem] shrink-0 bg-[length:100%] bg-center bg-no-repeat relative rounded-[30px] mobile:w-[17.2rem] bg-image2'>
                            <div className='absolute top-0 left-0 m-[0.57rem]'>
                                <div className='flex py-[.23rem] px-[.5rem] rounded-full bg-[#00000078] backdrop:blur'>
                                    <span class="text-[11px] text-white-100 font-medium text-white lg:text-[0.45rem]">1 Spot left</span>
                                </div>
                            </div>
                            <div className='absolute top-0 left-0 m-[0.57rem]'>
                                <span className='flex items-center px-2 text-xs font-semibold text-white rounded lg:px-0-full backdrop:blur lg:text-[0.45rem]'>
                                    <div className='relative w-[28px] h-[28px] lg:w-[1.2rem] lg:h-[1.2rem]'>
                                        <img alt="heart icon" loading="lazy" decoding="async" data-nimg="fill" class=" " src="./Buenro-15.svg" />
                                    </div>
                                </span>
                            </div>
                            <div className='absolute bottom-[7px] left-[7px] right-[7px] lg:bottom-[0.3rem] lg:left-[0.3rem] lg:right-[0.3rem] p-4 lg:py-[0.6rem] lg:px-3 rounded-[25px] lg:rounded-8.75 flex justify-between lg:min-h-oneRow lg:items-center'>
                                <div class="absolute inset-0 rounded-[.9rem] lg:rounded-[.9rem] lg:min-h-oneRow mobile:rounded-[1.4rem]"></div>
                                <div className='flex flex-col gap-[.4rem] justify-between z-20'>
                                    <h4 class="text-white-100 z-20 lg:text-sm25 text-[.6rem] mobile:text-[.9rem]">Mykonos, Greece</h4>
                                    <div className='flex gap-[0.6rem] justify-start'>
                                        <div className='flex lg:items-center'>
                                            <div className='relative pb-[.1rem]'>
                                                <div className='relative mr-[-0.3rem] w-[.6rem] h-[.6rem] lg:h-[.55rem] lg:w-[.55rem]'>
                                                    <img alt="Avatar 1" loading="lazy" decoding="async" data-nimg="fill" class="rounded-full object-cover" sizes="100vw" srcSet='./profile/person1.webp 640w, ./profile/person1.webp 750w, ./profile/person1.webp 828w, ./profile/person1.webp 1080w, ./profile/person1.webp 1200w, ./profile/person1.webp 1920w, ./profile/person1.webp 2048w, ./profile/person1.webp 3840w' src='./profile/person1.webp' />
                                                </div>
                                            </div>
                                            <div className='relative pb-[.1rem]'>
                                                <div className='relative mr-[-0.3rem] w-[.6rem] h-[.6rem] lg:h-[.55rem] lg:w-[.55rem]'>
                                                    <img alt="Avatar 1" loading="lazy" decoding="async" data-nimg="fill" class="rounded-full object-cover" sizes="100vw" srcSet='./profile/person1.webp 640w, ./profile/person1.webp 750w, ./profile/person1.webp 828w, ./profile/person1.webp 1080w, ./profile/person1.webp 1200w, ./profile/person1.webp 1920w, ./profile/person1.webp 2048w, ./profile/person1.webp 3840w' src='./profile/person1.webp' />
                                                </div>
                                            </div>
                                            <div className='relative pb-[.1rem]'>
                                                <div className='relative mr-[-0.3rem] w-[.6rem] h-[.6rem] lg:h-[.55rem] lg:w-[.55rem]'>
                                                    <img alt="Avatar 1" loading="lazy" decoding="async" data-nimg="fill" class="rounded-full object-cover" sizes="100vw" srcSet='./profile/person1.webp 640w, ./profile/person1.webp 750w, ./profile/person1.webp 828w, ./profile/person1.webp 1080w, ./profile/person1.webp 1200w, ./profile/person1.webp 1920w, ./profile/person1.webp 2048w, ./profile/person1.webp 3840w' src='./profile/person1.webp' />
                                                </div>
                                            </div>
                                            <div className='relative pb-[.1rem]'>
                                                <div className='relative mr-[-0.3rem] w-[.6rem] h-[.6rem] lg:h-[.55rem] lg:w-[.55rem]'>
                                                    <img alt="Avatar 1" loading="lazy" decoding="async" data-nimg="fill" class="rounded-full object-cover" sizes="100vw" srcSet='./profile/person1.webp 640w, ./profile/person1.webp 750w, ./profile/person1.webp 828w, ./profile/person1.webp 1080w, ./profile/person1.webp 1200w, ./profile/person1.webp 1920w, ./profile/person1.webp 2048w, ./profile/person1.webp 3840w' src='./profile/person1.webp' />
                                                </div>
                                            </div>
                                        </div>
                                        <p class="text-white-100 text-xs z-20 lg:text-sm20 text-[.48rem] mobile:text-[.71rem]">Join 4 roomies</p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[.4rem] text-right justify-between z-20'>
                                    <h4 class="text-white-100 text-xs z-20  lg:text-sm20 text-[.48rem] mobile:text-[.71rem]">Aug 22-27</h4>
                                    <div className='flex gap-2'>
                                        <p class="text-white-100 md:text-[15px] z-20 lg:text-sm25 text-[.6rem] mobile:text-[.9rem]">$ 129 night</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-shrink-0 mr-2 scroll-section snap-center'>
                        <div className='w-[14.2rem] shrink-0 bg-[length:100%] bg-center bg-no-repeat relative rounded-[30px] mobile:w-[17.2rem] bg-image3'>
                            <div className='absolute top-0 left-0 m-[0.57rem]'>
                                <div className='flex py-[.23rem] px-[.5rem] rounded-full bg-[#00000078] backdrop:blur'>
                                    <span class="text-[11px] text-white-100 font-medium text-white lg:text-[0.45rem]">1 Spot left</span>
                                </div>
                            </div>
                            <div className='absolute top-0 left-0 m-[0.57rem]'>
                                <span className='flex items-center px-2 text-xs font-semibold text-white rounded lg:px-0-full backdrop:blur lg:text-[0.45rem]'>
                                    <div className='relative w-[28px] h-[28px] lg:w-[1.2rem] lg:h-[1.2rem]'>
                                        <img alt="heart icon" loading="lazy" decoding="async" data-nimg="fill" class=" " src="./Buenro-15.svg" />
                                    </div>
                                </span>
                            </div>
                            <div className='absolute bottom-[7px] left-[7px] right-[7px] lg:bottom-[0.3rem] lg:left-[0.3rem] lg:right-[0.3rem] p-4 lg:py-[0.6rem] lg:px-3 rounded-[25px] lg:rounded-8.75 flex justify-between lg:min-h-oneRow lg:items-center'>
                                <div class="absolute inset-0 rounded-[.9rem] lg:rounded-[.9rem] lg:min-h-oneRow mobile:rounded-[1.4rem]"></div>
                                <div className='flex flex-col gap-[.4rem] justify-between z-20'>
                                    <h4 class="text-white-100 z-20 lg:text-sm25 text-[.6rem] mobile:text-[.9rem]">Mykonos, Greece</h4>
                                    <div className='flex gap-[0.6rem] justify-start'>
                                        <div className='flex lg:items-center'>
                                            <div className='relative pb-[.1rem]'>
                                                <div className='relative mr-[-0.3rem] w-[.6rem] h-[.6rem] lg:h-[.55rem] lg:w-[.55rem]'>
                                                    <img alt="Avatar 1" loading="lazy" decoding="async" data-nimg="fill" class="rounded-full object-cover" sizes="100vw" srcSet='./profile/person1.webp 640w, ./profile/person1.webp 750w, ./profile/person1.webp 828w, ./profile/person1.webp 1080w, ./profile/person1.webp 1200w, ./profile/person1.webp 1920w, ./profile/person1.webp 2048w, ./profile/person1.webp 3840w' src='./profile/person1.webp' />
                                                </div>
                                            </div>
                                            <div className='relative pb-[.1rem]'>
                                                <div className='relative mr-[-0.3rem] w-[.6rem] h-[.6rem] lg:h-[.55rem] lg:w-[.55rem]'>
                                                    <img alt="Avatar 1" loading="lazy" decoding="async" data-nimg="fill" class="rounded-full object-cover" sizes="100vw" srcSet='./profile/person1.webp 640w, ./profile/person1.webp 750w, ./profile/person1.webp 828w, ./profile/person1.webp 1080w, ./profile/person1.webp 1200w, ./profile/person1.webp 1920w, ./profile/person1.webp 2048w, ./profile/person1.webp 3840w' src='./profile/person1.webp' />
                                                </div>
                                            </div>
                                            <div className='relative pb-[.1rem]'>
                                                <div className='relative mr-[-0.3rem] w-[.6rem] h-[.6rem] lg:h-[.55rem] lg:w-[.55rem]'>
                                                    <img alt="Avatar 1" loading="lazy" decoding="async" data-nimg="fill" class="rounded-full object-cover" sizes="100vw" srcSet='./profile/person1.webp 640w, ./profile/person1.webp 750w, ./profile/person1.webp 828w, ./profile/person1.webp 1080w, ./profile/person1.webp 1200w, ./profile/person1.webp 1920w, ./profile/person1.webp 2048w, ./profile/person1.webp 3840w' src='./profile/person1.webp' />
                                                </div>
                                            </div>
                                            <div className='relative pb-[.1rem]'>
                                                <div className='relative mr-[-0.3rem] w-[.6rem] h-[.6rem] lg:h-[.55rem] lg:w-[.55rem]'>
                                                    <img alt="Avatar 1" loading="lazy" decoding="async" data-nimg="fill" class="rounded-full object-cover" sizes="100vw" srcSet='./profile/person1.webp 640w, ./profile/person1.webp 750w, ./profile/person1.webp 828w, ./profile/person1.webp 1080w, ./profile/person1.webp 1200w, ./profile/person1.webp 1920w, ./profile/person1.webp 2048w, ./profile/person1.webp 3840w' src='./profile/person1.webp' />
                                                </div>
                                            </div>
                                        </div>
                                        <p class="text-white-100 text-xs z-20 lg:text-sm20 text-[.48rem] mobile:text-[.71rem]">Join 4 roomies</p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[.4rem] text-right justify-between z-20'>
                                    <h4 class="text-white-100 text-xs z-20  lg:text-sm20 text-[.48rem] mobile:text-[.71rem]">Aug 22-27</h4>
                                    <div className='flex gap-2'>
                                        <p class="text-white-100 md:text-[15px] z-20 lg:text-sm25 text-[.6rem] mobile:text-[.9rem]">$ 129 night</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-[14.2rem] shrink-0 bg-black rounded-[1rem]"></div>
                </div>
                <div class="hidden mobile:block relative w-full h-[22.2rem]"></div>
                <div className='absolute  cursor-pointer properties-row left-[100%] flex w-[100px] gap-[2rem] h-[14rem] mt-[1.45rem] mobile:h-[17.2rem] mobile:top-[4rem] '>
                    <div className='scroll-section w-[14.2rem] shrink-0 bg-[length:100%] bg-center bg-no-repeat relative rounded-[30px] mobile:w-[17.2rem] bg-image1'>
                        <div className='absolute top-0 left-0 m-[0.57rem]'>
                            <div className='flex py-[.23rem] px-[.5rem] rounded-full bg-[#00000078] backdrop:blur'>
                                <span class="text-[11px] text-white-100 font-medium text-white lg:text-[0.45rem]">1 Spot left</span>
                            </div>
                        </div>
                        <div className='absolute top-0 left-0 m-[0.57rem]'>
                            <span className='flex items-center px-2 text-xs font-semibold text-white rounded lg:px-0-full backdrop:blur lg:text-[0.45rem]'>
                                <div className='relative w-[28px] h-[28px] lg:w-[1.2rem] lg:h-[1.2rem]'>
                                    <img alt="heart icon" loading="lazy" decoding="async" data-nimg="fill" class=" " src="./Buenro-15.svg" />
                                </div>
                            </span>
                        </div>
                        <div className='absolute bottom-[7px] left-[7px] right-[7px] lg:bottom-[0.3rem] lg:left-[0.3rem] lg:right-[0.3rem] p-4 lg:py-[0.6rem] lg:px-3 rounded-[25px] lg:rounded-8.75 flex justify-between lg:min-h-oneRow lg:items-center'>
                            <div class="absolute inset-0 rounded-[.9rem] lg:rounded-[.9rem] lg:min-h-oneRow mobile:rounded-[1.4rem]"></div>
                            <div className='flex flex-col gap-[.4rem] justify-between z-20'>
                                <h4 class="text-white-100 z-20 lg:text-sm25 text-[.6rem] mobile:text-[.9rem]">Mykonos, Greece</h4>
                                <div className='flex gap-[0.6rem] justify-start'>
                                    <div className='flex lg:items-center'>
                                        <div className='relative pb-[.1rem]'>
                                            <div className='relative mr-[-0.3rem] w-[.6rem] h-[.6rem] lg:h-[.55rem] lg:w-[.55rem]'>
                                                <img alt="Avatar 1" loading="lazy" decoding="async" data-nimg="fill" class="rounded-full object-cover" sizes="100vw" srcSet='./profile/person1.webp 640w, ./profile/person1.webp 750w, ./profile/person1.webp 828w, ./profile/person1.webp 1080w, ./profile/person1.webp 1200w, ./profile/person1.webp 1920w, ./profile/person1.webp 2048w, ./profile/person1.webp 3840w' src='./profile/person1.webp' />
                                            </div>
                                        </div>
                                        <div className='relative pb-[.1rem]'>
                                            <div className='relative mr-[-0.3rem] w-[.6rem] h-[.6rem] lg:h-[.55rem] lg:w-[.55rem]'>
                                                <img alt="Avatar 1" loading="lazy" decoding="async" data-nimg="fill" class="rounded-full object-cover" sizes="100vw" srcSet='./profile/person1.webp 640w, ./profile/person1.webp 750w, ./profile/person1.webp 828w, ./profile/person1.webp 1080w, ./profile/person1.webp 1200w, ./profile/person1.webp 1920w, ./profile/person1.webp 2048w, ./profile/person1.webp 3840w' src='./profile/person1.webp' />
                                            </div>
                                        </div>
                                        <div className='relative pb-[.1rem]'>
                                            <div className='relative mr-[-0.3rem] w-[.6rem] h-[.6rem] lg:h-[.55rem] lg:w-[.55rem]'>
                                                <img alt="Avatar 1" loading="lazy" decoding="async" data-nimg="fill" class="rounded-full object-cover" sizes="100vw" srcSet='./profile/person1.webp 640w, ./profile/person1.webp 750w, ./profile/person1.webp 828w, ./profile/person1.webp 1080w, ./profile/person1.webp 1200w, ./profile/person1.webp 1920w, ./profile/person1.webp 2048w, ./profile/person1.webp 3840w' src='./profile/person1.webp' />
                                            </div>
                                        </div>
                                        <div className='relative pb-[.1rem]'>
                                            <div className='relative mr-[-0.3rem] w-[.6rem] h-[.6rem] lg:h-[.55rem] lg:w-[.55rem]'>
                                                <img alt="Avatar 1" loading="lazy" decoding="async" data-nimg="fill" class="rounded-full object-cover" sizes="100vw" srcSet='./profile/person1.webp 640w, ./profile/person1.webp 750w, ./profile/person1.webp 828w, ./profile/person1.webp 1080w, ./profile/person1.webp 1200w, ./profile/person1.webp 1920w, ./profile/person1.webp 2048w, ./profile/person1.webp 3840w' src='./profile/person1.webp' />
                                            </div>
                                        </div>
                                    </div>
                                    <p class="text-white-100 text-xs z-20 lg:text-sm20 text-[.48rem] mobile:text-[.71rem]">Join 4 roomies</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[.4rem] text-right justify-between z-20'>
                                <h4 class="text-white-100 text-xs z-20  lg:text-sm20 text-[.48rem] mobile:text-[.71rem]">Aug 22-27</h4>
                                <div className='flex gap-2'>
                                    <p class="text-white-100 md:text-[15px] z-20 lg:text-sm25 text-[.6rem] mobile:text-[.9rem]">$ 129 night</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='scroll-section w-[14.2rem] shrink-0 bg-[length:100%] bg-center bg-no-repeat relative rounded-[30px] mobile:w-[17.2rem] bg-image2'>
                        <div className='absolute top-0 left-0 m-[0.57rem]'>
                            <div className='flex py-[.23rem] px-[.5rem] rounded-full bg-[#00000078] backdrop:blur'>
                                <span class="text-[11px] text-white-100 font-medium text-white lg:text-[0.45rem]">1 Spot left</span>
                            </div>
                        </div>
                        <div className='absolute top-0 left-0 m-[0.57rem]'>
                            <span className='flex items-center px-2 text-xs font-semibold text-white rounded lg:px-0-full backdrop:blur lg:text-[0.45rem]'>
                                <div className='relative w-[28px] h-[28px] lg:w-[1.2rem] lg:h-[1.2rem]'>
                                    <img alt="heart icon" loading="lazy" decoding="async" data-nimg="fill" class=" " src="./Buenro-15.svg" />
                                </div>
                            </span>
                        </div>
                        <div className='absolute bottom-[7px] left-[7px] right-[7px] lg:bottom-[0.3rem] lg:left-[0.3rem] lg:right-[0.3rem] p-4 lg:py-[0.6rem] lg:px-3 rounded-[25px] lg:rounded-8.75 flex justify-between lg:min-h-oneRow lg:items-center'>
                            <div class="absolute inset-0 rounded-[.9rem] lg:rounded-[.9rem] lg:min-h-oneRow mobile:rounded-[1.4rem]"></div>
                            <div className='flex flex-col gap-[.4rem] justify-between z-20'>
                                <h4 class="text-white-100 z-20 lg:text-sm25 text-[.6rem] mobile:text-[.9rem]">Mykonos, Greece</h4>
                                <div className='flex gap-[0.6rem] justify-start'>
                                    <div className='flex lg:items-center'>
                                        <div className='relative pb-[.1rem]'>
                                            <div className='relative mr-[-0.3rem] w-[.6rem] h-[.6rem] lg:h-[.55rem] lg:w-[.55rem]'>
                                                <img alt="Avatar 1" loading="lazy" decoding="async" data-nimg="fill" class="rounded-full object-cover" sizes="100vw" srcSet='./profile/person1.webp 640w, ./profile/person1.webp 750w, ./profile/person1.webp 828w, ./profile/person1.webp 1080w, ./profile/person1.webp 1200w, ./profile/person1.webp 1920w, ./profile/person1.webp 2048w, ./profile/person1.webp 3840w' src='./profile/person1.webp' />
                                            </div>
                                        </div>
                                        <div className='relative pb-[.1rem]'>
                                            <div className='relative mr-[-0.3rem] w-[.6rem] h-[.6rem] lg:h-[.55rem] lg:w-[.55rem]'>
                                                <img alt="Avatar 1" loading="lazy" decoding="async" data-nimg="fill" class="rounded-full object-cover" sizes="100vw" srcSet='./profile/person1.webp 640w, ./profile/person1.webp 750w, ./profile/person1.webp 828w, ./profile/person1.webp 1080w, ./profile/person1.webp 1200w, ./profile/person1.webp 1920w, ./profile/person1.webp 2048w, ./profile/person1.webp 3840w' src='./profile/person1.webp' />
                                            </div>
                                        </div>
                                        <div className='relative pb-[.1rem]'>
                                            <div className='relative mr-[-0.3rem] w-[.6rem] h-[.6rem] lg:h-[.55rem] lg:w-[.55rem]'>
                                                <img alt="Avatar 1" loading="lazy" decoding="async" data-nimg="fill" class="rounded-full object-cover" sizes="100vw" srcSet='./profile/person1.webp 640w, ./profile/person1.webp 750w, ./profile/person1.webp 828w, ./profile/person1.webp 1080w, ./profile/person1.webp 1200w, ./profile/person1.webp 1920w, ./profile/person1.webp 2048w, ./profile/person1.webp 3840w' src='./profile/person1.webp' />
                                            </div>
                                        </div>
                                        <div className='relative pb-[.1rem]'>
                                            <div className='relative mr-[-0.3rem] w-[.6rem] h-[.6rem] lg:h-[.55rem] lg:w-[.55rem]'>
                                                <img alt="Avatar 1" loading="lazy" decoding="async" data-nimg="fill" class="rounded-full object-cover" sizes="100vw" srcSet='./profile/person1.webp 640w, ./profile/person1.webp 750w, ./profile/person1.webp 828w, ./profile/person1.webp 1080w, ./profile/person1.webp 1200w, ./profile/person1.webp 1920w, ./profile/person1.webp 2048w, ./profile/person1.webp 3840w' src='./profile/person1.webp' />
                                            </div>
                                        </div>
                                    </div>
                                    <p class="text-white-100 text-xs z-20 lg:text-sm20 text-[.48rem] mobile:text-[.71rem]">Join 4 roomies</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[.4rem] text-right justify-between z-20'>
                                <h4 class="text-white-100 text-xs z-20  lg:text-sm20 text-[.48rem] mobile:text-[.71rem]">Aug 22-27</h4>
                                <div className='flex gap-2'>
                                    <p class="text-white-100 md:text-[15px] z-20 lg:text-sm25 text-[.6rem] mobile:text-[.9rem]">$ 129 night</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='scroll-section w-[14.2rem] shrink-0 bg-[length:100%] bg-center bg-no-repeat relative rounded-[30px] mobile:w-[17.2rem] bg-image3'>
                        <div className='absolute top-0 left-0 m-[0.57rem]'>
                            <div className='flex py-[.23rem] px-[.5rem] rounded-full bg-[#00000078] backdrop:blur'>
                                <span class="text-[11px] text-white-100 font-medium text-white lg:text-[0.45rem]">1 Spot left</span>
                            </div>
                        </div>
                        <div className='absolute top-0 left-0 m-[0.57rem]'>
                            <span className='flex items-center px-2 text-xs font-semibold text-white rounded lg:px-0-full backdrop:blur lg:text-[0.45rem]'>
                                <div className='relative w-[28px] h-[28px] lg:w-[1.2rem] lg:h-[1.2rem]'>
                                    <img alt="heart icon" loading="lazy" decoding="async" data-nimg="fill" class=" " src="./Buenro-15.svg" />
                                </div>
                            </span>
                        </div>
                        <div className='absolute bottom-[7px] left-[7px] right-[7px] lg:bottom-[0.3rem] lg:left-[0.3rem] lg:right-[0.3rem] p-4 lg:py-[0.6rem] lg:px-3 rounded-[25px] lg:rounded-8.75 flex justify-between lg:min-h-oneRow lg:items-center'>
                            <div class="absolute inset-0 rounded-[.9rem] lg:rounded-[.9rem] lg:min-h-oneRow mobile:rounded-[1.4rem]"></div>
                            <div className='flex flex-col gap-[.4rem] justify-between z-20'>
                                <h4 class="text-white-100 z-20 lg:text-sm25 text-[.6rem] mobile:text-[.9rem]">Mykonos, Greece</h4>
                                <div className='flex gap-[0.6rem] justify-start'>
                                    <div className='flex lg:items-center'>
                                        <div className='relative pb-[.1rem]'>
                                            <div className='relative mr-[-0.3rem] w-[.6rem] h-[.6rem] lg:h-[.55rem] lg:w-[.55rem]'>
                                                <img alt="Avatar 1" loading="lazy" decoding="async" data-nimg="fill" class="rounded-full object-cover" sizes="100vw" srcSet='./profile/person1.webp 640w, ./profile/person1.webp 750w, ./profile/person1.webp 828w, ./profile/person1.webp 1080w, ./profile/person1.webp 1200w, ./profile/person1.webp 1920w, ./profile/person1.webp 2048w, ./profile/person1.webp 3840w' src='./profile/person1.webp' />
                                            </div>
                                        </div>
                                        <div className='relative pb-[.1rem]'>
                                            <div className='relative mr-[-0.3rem] w-[.6rem] h-[.6rem] lg:h-[.55rem] lg:w-[.55rem]'>
                                                <img alt="Avatar 1" loading="lazy" decoding="async" data-nimg="fill" class="rounded-full object-cover" sizes="100vw" srcSet='./profile/person1.webp 640w, ./profile/person1.webp 750w, ./profile/person1.webp 828w, ./profile/person1.webp 1080w, ./profile/person1.webp 1200w, ./profile/person1.webp 1920w, ./profile/person1.webp 2048w, ./profile/person1.webp 3840w' src='./profile/person1.webp' />
                                            </div>
                                        </div>
                                        <div className='relative pb-[.1rem]'>
                                            <div className='relative mr-[-0.3rem] w-[.6rem] h-[.6rem] lg:h-[.55rem] lg:w-[.55rem]'>
                                                <img alt="Avatar 1" loading="lazy" decoding="async" data-nimg="fill" class="rounded-full object-cover" sizes="100vw" srcSet='./profile/person1.webp 640w, ./profile/person1.webp 750w, ./profile/person1.webp 828w, ./profile/person1.webp 1080w, ./profile/person1.webp 1200w, ./profile/person1.webp 1920w, ./profile/person1.webp 2048w, ./profile/person1.webp 3840w' src='./profile/person1.webp' />
                                            </div>
                                        </div>
                                        <div className='relative pb-[.1rem]'>
                                            <div className='relative mr-[-0.3rem] w-[.6rem] h-[.6rem] lg:h-[.55rem] lg:w-[.55rem]'>
                                                <img alt="Avatar 1" loading="lazy" decoding="async" data-nimg="fill" class="rounded-full object-cover" sizes="100vw" srcSet='./profile/person1.webp 640w, ./profile/person1.webp 750w, ./profile/person1.webp 828w, ./profile/person1.webp 1080w, ./profile/person1.webp 1200w, ./profile/person1.webp 1920w, ./profile/person1.webp 2048w, ./profile/person1.webp 3840w' src='./profile/person1.webp' />
                                            </div>
                                        </div>
                                    </div>
                                    <p class="text-white-100 text-xs z-20 lg:text-sm20 text-[.48rem] mobile:text-[.71rem]">Join 4 roomies</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[.4rem] text-right justify-between z-20'>
                                <h4 class="text-white-100 text-xs z-20  lg:text-sm20 text-[.48rem] mobile:text-[.71rem]">Aug 22-27</h4>
                                <div className='flex gap-2'>
                                    <p class="text-white-100 md:text-[15px] z-20 lg:text-sm25 text-[.6rem] mobile:text-[.9rem]">$ 129 night</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='scroll-section w-[14.2rem] relative shrink-0 border-[#E6E6E6] border-[.06rem] bg-white-100 shadow-xxsm rounded-[1.2rem] px-[1.5rem] py-[1.65rem] mobile:w-[17.2rem]'>
                        <p class="text-3xl text-black">Early<span class="block">Access</span></p>
                        <div className='absolute bg-black rounded-full w-[3rem] h-[3rem] flex right-[.7rem] bottom-[.7rem] items-center justify-center'>
                            <img class="w-[1.05rem] h-auto" width="42" height="43" src='./Buenro-11.svg' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
