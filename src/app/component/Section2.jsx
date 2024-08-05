import React from 'react'

export default function Section2() {
    return (
        <div className='relative w-[100%] z-[10] overflow-hidden mobile:mt-[-2rem]'>
            <div className='relative w-full'>
                <div className='overflow-hidden bg-contain pt-[1.2rem] left-[50%] translate-x-[-50%] h-screen w-[105%] absolute mobile:h-[39rem]'>
                    <div className='rounded bg-white-100 scaling-bg-[2rem] w-full h-full mobile:mt-[3rem]'></div>
                    <div className='absolute top-0 w-full svgs-container mask-container'>
                        <div className='absolute h-screen left-map w-[calc(100vw/12*4)] pt-[3.9rem] pb-[2rem] mobile:h-[62vh] mobile:w-[9rem] '>
                            <img loading='lazy' width="2151" height="1063" decoding='async' data-nimg="1" className='object-cover object-right h-full svgMapL' srcSet='./green-map.png 1x' src="./green-map.png" />
                        </div>
                        <div className='absolute h-screen right-map right-0 w-[calc(100vw/12*4)] pt-[3.92rem] pb-[1.95rem] mobile:h-[62vh] mobile:w-[9rem] '>
                            <img loading='lazy' width="2151" height="1063" decoding='async' data-nimg="1" className='object-cover object-left h-full svgMapR' srcSet='./green-map.png 1x' src="./green-map.png" alt="" />
                        </div>
                    </div>
                    <div className='white-vignette'></div>
                    <div className='hidden mask-container md:flex'>
                        <div className='left-pin w-[40vw] h-screen absolute top-0 '>
                            <div className='w-[5.31rem] absolute h-[5.31rem] top-[33.2%] left-[35.2%] rounded-full p-[.16rem] bg-white shadow-sm'>
                                <img loading='lazy' width="2000" height="2000" decoding='async' data-nimg="1" className='rounded-[100%] w-full h-full object-cover object-top' srcSet='./new-m10.jpg 1x, ./new-m10.jpg 2x' src="./new-m10.jpg" alt="" />
                            </div>
                            <div className='left-[45.3%] top-[calc(33.3%+5.31rem)] blue-pin'></div>
                        </div>
                        <div className='right-pin w-[40vw] h-screen absolute top-0 right-0'>
                            <div className='right-pin w-[40vw] h-screen absolute top-0 right-0'>
                                <div className='w-[5.31rem] absolute h-[5.31rem] right-[38.2%] top-[33.2%] rounded-full p-[.16rem] bg-white shadow-sm'>
                                    <img loading='lazy' width="2000" height="2000" decoding='async' data-nimg="1" className='rounded-[100%] w-full h-full object-cover object-top' srcSet='./new.jpg 1x, ./new.jpg 2x' src="./new.jpg" alt="" />
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
