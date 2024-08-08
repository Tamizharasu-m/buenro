import React from 'react';

export default function Footer() {
    return (
        // <div id="footer" className='footer'>
        // <div class="relative h-[101vh] w-full z-[-1]"></div>
        //     <section className=' h-[100vh]  z-[0]'>
        //         <div className='flex flex-col justify-center h-screen text-white-100 bg-black footer-content  w-full z-[-2] items-center pb-[5.9rem]  '>
        //             <p className='text-3xl pb-[1.6rem] capitalize'>you belong</p>
        //             <div className='waitlist-btn z-[5] bg-green-550 w-[15.rem] h-[2.65rem] rounded-full border-[.11rem] border-black relative overflow-hidden mobile:w-[89%] mobile:h-[3.3rem] mobile:bg-white-100 mobile:mb-[.5rem]'>
        //                 <div className='absolute ripple-white w-[110%] h-full left-[-2rem] bg-white-100 rounded-full opacity-[.33]'></div>
        //                 <div className='absolute ripple-white w-[110%] h-full left-[-2rem] bg-white-100 rounded-full opacity-[.5]'></div>
        //                 <div className='absolute ripple-white w-[110%] h-full left-[-2rem] bg-white-100 rounded-full'></div>
        //                 <input placeholder='Enter email ...' className='absolute bg-[#d8ffe600] placeholder:text-black top-[50%] w-[9rem] translate-y-[-50%] text-[.5rem] pl-[1.2rem] text-black outline-none focus:outline-none focus:ring-0 mobile:text-[.8rem] mobile:pl-[1.8rem] mobile:w-full mobile:h-full' value fdprocessedid="0d5y7" type="text" />
        //                 <button className='text-[.44rem] w-[auto] px-[.8rem] py-[.3rem] h-[84%] cursor-pointer bg-white-100 border-[.06rem] border-black text-black rounded-full absolute top-[50%] right-[.22rem] translate-y-[-50%] flex items-center justify-center hover:opacity-90 sm:hidden'>Join Waitlist</button>
        //             </div>
        //             <div className=' w-full h-full z-[2]'></div>
        //             <button className='hidden mobile:block text-[.8rem] z-[10] px-[.8rem] bg-black border-green-550 border-black text-white-100 rounded-full right-[.4rem] text-left lg:flex w-[89%] hover:opacity-90' fdprocessedid="l8xgw7">Join Waitlist</button>
        //             <div className='text-[6rem] bottom-footer flex absolute bottom-[-.4rem] leading-[.8] lg:text-[11rem] md:bottom-0'>
        //                 <img className='w-[83.6%] h-[auto] mx-auto' src='./Buenro-14.svg' width="1617" height="335" viewBox='0 0 1617 335' fill='none'></img> 
        //                 <div className='absolute w-full h-full gradient bg-footer mobile:h-[115%]'></div>
        //             </div>
        //         </div>
        //     </section>
        //     </div>
        <div className='flex flex-col items-center justify-center h-screen bg-black '>
            <div className=''>
                <p className='text-[49px] text-white pb-[30px] flex justify-center lg:text-[69px]'>You Belong</p>
                <div className='flex justify-center'>
                    <input className='w-[304px] h-[48px] lg:w-[435px] lg:h-[72px] bg-green-400 rounded-full pl-[30px] text-black outline-none placeholder:text-black text-[16px]' type="text" placeholder='Enter email...' />
                </div>
                <div className='mt-[10px] flex justify-center'>
                    <input className='w-[380px] h-[64px] border-green-400 rounded-full text-white placeholder:text-white bg-black border-[.2rem] py-[5.842px] pl-[33.102px] pr-[15.578px] text-[16px] cursor-pointer lg:w-[119px] lg:h-[57px] lg:border-[1.6px] lg:text-[12px] lg:px-[22px] lg:py-[8.263px] lg:border-black lg:bg-white lg:placeholder:text-black lg:relative lg:top-[-75px] lg:left-[150px]' type="text" placeholder='Join Waitlist' />
                </div>
            </div>
            <div className='relative top-[200px] flex justify-center lg:top-[95px]'>
                <img className='w-[83%] h-auto'  src="./logo.svg" alt="logo" />
            </div>
        </div>
    )
}
