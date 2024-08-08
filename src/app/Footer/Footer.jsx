"use client"

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {


    const textRef = useRef(null);
    

    useEffect(() => {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 90%',
              end: 'bottom 10%',
              scrub: true,
            },
          }
        );
      }, []);


      
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
                <div className='flex justify-center cursor-pointer'>
                    <input className='w-[304px] h-[48px] lg:w-[435px] cursor-pointer lg:h-[72px] bg-green-400 rounded-full pl-[30px] text-black outline-none placeholder:text-black text-[16px]' type="text" placeholder='Enter email...' />
                </div>
                <div className='mt-[10px] flex justify-center cursor-pointer'>
                    <input className='w-[360px] h-[64px] border-green-400 cursor-pointer rounded-full text-white placeholder:text-white bg-black border-[.2rem] py-[5.842px] pl-[33.102px] pr-[15.578px] text-[16px]  lg:w-[119px] lg:h-[57px] lg:border-[1.6px] lg:text-[12px] lg:px-[22px] lg:py-[8.263px] lg:border-black lg:bg-white lg:placeholder:text-black lg:relative lg:top-[-75px] lg:left-[150px]' type="text" placeholder='Join Waitlist' />
                </div>
            </div>
            <div className='relative top-[200px] flex justify-center lg:top-[95px]'>
                <svg  class="w-[83.6%] h-auto mx-auto" xmlns="http://www.w3.org/2000/svg" width="1617" height="335" viewBox="0 0 1617 335" fill="none">
                <path class="letter" d="M155.104 159.608C173.669 163.07 189.402 172.51 202.304 187.928C215.205 203.347 221.656 221.283 221.656 241.736C221.656 258.414 217.408 273.518 208.912 287.048C200.73 300.264 188.616 310.806 172.568 318.672C156.52 326.224 137.325 330 114.984 330H0.759766V0.0722656H111.68C145.034 0.0722656 170.365 7.7816 187.672 23.2003C205.293 38.619 214.104 58.6003 214.104 83.1443C214.104 103.598 208.597 120.275 197.584 133.176C186.57 145.763 172.41 154.574 155.104 159.608ZM33.7998 145.92H110.736C133.077 145.92 150.226 140.728 162.184 130.344C174.456 119.646 180.592 105.014 180.592 86.4483C180.592 68.1976 174.456 53.8803 162.184 43.4963C150.226 33.1123 132.605 27.9203 109.32 27.9203H33.7998V145.92ZM112.624 302.152C136.538 302.152 155.104 296.488 168.32 285.16C181.85 273.832 188.616 258.256 188.616 238.432C188.616 218.608 181.536 202.875 167.376 191.232C153.53 179.275 134.808 173.296 111.208 173.296H33.7998V302.152H112.624Z" fill="white"  data-svg-origin="0.7597660422325134 0.0722656100988388" transform="matrix(1,0,0,1,0,0)"></path>
                <path class="letter" d="M514.016 72.2871V329.999H480.976V284.687C473.424 300.735 461.782 313.007 446.048 321.503C430.315 329.999 412.694 334.247 393.184 334.247C362.347 334.247 337.174 324.807 317.664 305.927C298.155 286.732 288.4 259.042 288.4 222.855V72.2871H320.968V219.079C320.968 247.084 327.891 268.482 341.736 283.271C355.896 298.06 375.091 305.455 399.32 305.455C424.179 305.455 444.003 297.588 458.792 281.855C473.582 266.122 480.976 242.994 480.976 212.471V72.2871H514.016Z" fill="white"  data-svg-origin="288.3999938964844 72.28710174560547" transform="matrix(1,0,0,1,0,0)"></path>
                <path class="letter" d="M825.928 187.928C825.928 199.256 825.614 207.909 824.984 213.888H611.168C612.112 233.397 616.832 250.074 625.328 263.92C633.824 277.765 644.995 288.306 658.84 295.544C672.686 302.466 687.79 305.928 704.152 305.928C725.55 305.928 743.486 300.736 757.96 290.352C772.75 279.968 782.504 265.965 787.224 248.344H822.152C815.859 273.517 802.328 294.128 781.56 310.176C761.107 325.909 735.304 333.776 704.152 333.776C679.923 333.776 658.211 328.426 639.016 317.728C619.822 306.714 604.718 291.296 593.704 271.472C583.006 251.333 577.656 227.89 577.656 201.144C577.656 174.397 583.006 150.954 593.704 130.816C604.403 110.677 619.35 95.2584 638.544 84.5597C657.739 73.861 679.608 68.5117 704.152 68.5117C728.696 68.5117 750.094 73.861 768.344 84.5597C786.91 95.2584 801.07 109.733 810.824 127.984C820.894 145.92 825.928 165.901 825.928 187.928ZM792.416 186.984C792.731 167.789 788.798 151.426 780.616 137.896C772.75 124.365 761.894 114.138 748.048 107.216C734.203 100.293 719.099 96.8317 702.736 96.8317C678.192 96.8317 657.267 104.698 639.96 120.432C622.654 136.165 613.056 158.349 611.168 186.984H792.416Z" fill="white"  data-svg-origin="577.656005859375 68.51170349121094" transform="matrix(1,0,0,1,0,0)"></path>
                <path class="letter" d="M1015.59 67.5684C1046.43 67.5684 1071.6 77.1657 1091.11 96.3604C1110.62 115.24 1120.38 142.774 1120.38 178.96V330H1087.81V182.736C1087.81 154.731 1080.73 133.334 1066.57 118.544C1052.72 103.755 1033.69 96.3604 1009.46 96.3604C984.597 96.3604 964.773 104.227 949.984 119.96C935.194 135.694 927.8 158.822 927.8 189.344V330H894.76V72.2884H927.8V116.184C935.981 100.451 947.781 88.4937 963.2 80.3124C978.618 71.8164 996.082 67.5684 1015.59 67.5684Z" fill="white"  data-svg-origin="894.760009765625 67.56839752197266" transform="matrix(1,0,0,1,0,0)"></path>
                <path class="letter" d="M1229.8 118.072C1237.04 102.024 1248.05 89.5951 1262.84 80.7844C1277.94 71.9737 1296.35 67.5684 1318.06 67.5684V102.024H1309.1C1285.18 102.024 1265.99 108.475 1251.51 121.376C1237.04 134.278 1229.8 155.832 1229.8 186.04V330H1196.76V72.2884H1229.8V118.072Z" fill="white" data-svg-origin="1196.760009765625 67.56839752197266" transform="matrix(1,0,0,1,0,0)"></path>
                <path class="letter" d="M1486.57 333.776C1462.34 333.776 1440.47 328.426 1420.96 317.728C1401.77 306.714 1386.5 291.296 1375.18 271.472C1364.16 251.333 1358.66 227.89 1358.66 201.144C1358.66 174.397 1364.32 151.112 1375.65 131.288C1386.98 111.149 1402.39 95.7304 1421.9 85.0317C1441.41 74.0184 1463.28 68.5117 1487.51 68.5117C1511.74 68.5117 1533.61 74.0184 1553.12 85.0317C1572.94 95.7304 1588.36 111.149 1599.38 131.288C1610.7 151.112 1616.37 174.397 1616.37 201.144C1616.37 227.576 1610.7 250.861 1599.38 271C1588.05 291.138 1572.47 306.714 1552.65 317.728C1532.82 328.426 1510.8 333.776 1486.57 333.776ZM1486.57 304.984C1503.56 304.984 1519.29 301.208 1533.77 293.656C1548.24 285.789 1559.89 274.146 1568.7 258.728C1577.82 242.994 1582.38 223.8 1582.38 201.144C1582.38 178.488 1577.98 159.45 1569.17 144.032C1560.36 128.298 1548.71 116.656 1534.24 109.104C1519.77 101.237 1504.03 97.3037 1487.04 97.3037C1470.05 97.3037 1454.31 101.237 1439.84 109.104C1425.37 116.656 1413.72 128.298 1404.91 144.032C1396.42 159.45 1392.17 178.488 1392.17 201.144C1392.17 223.8 1396.42 242.994 1404.91 258.728C1413.72 274.146 1425.21 285.789 1439.37 293.656C1453.84 301.208 1469.58 304.984 1486.57 304.984Z" fill="white"  data-svg-origin="1358.6600341796875 68.51170349121094" transform="matrix(1,0,0,1,0,0)"></path>
                </svg>
                <div class="gradient bg-footer absolute w-full h-full mobile:h-[115%]"></div>
            </div>
        </div>
    )
}
