import React from 'react'

export default function Circle() {
  return (
    <div className='w-full h-full overflow-hidden'>
      <section className='h-screen bg-white-100 relative md:mt-[1.7rem] mt-[8rem]'>
        <div className='flex items-center justify-center h-screen'>
          <p className='text-[2.78rem] w-[8ch] mx-auto text-center absolute'>Join Circles</p>
          <div className='absolute h-[calc(33vh+16rem)] w-[calc(33vh+16rem)] top-0 flex items-center justify-center circles-container mobile:w-full mobile:h-[115vw]'>
            <div className='absolute top emoji top-[2.5%] w-[5.47rem] h-[5.47rem] rounded-full bg-whit-100 border-[.05rem] border-white-900 shadow-xsm mobile:w-[4.8rem] mobile:h-[4.8rem]'>
              <img loading='lazy' width="868" height="864" decoding='async' data-nimg="1" className='rounded-full' srcSet='./face/1.webp 1x, ./face/1.webp 2x' src="./face/1.webp" alt="" />
            </div>
            <div className='absolute top-left emoji top-[30.5%] translate-y-[-50%] left-[0%] w-[5.47rem] h-[5.47rem] rounded-full bg-whit-100 border-[.05rem] border-white-900 shadow-xsm mobile:w-[4.8rem] mobile:h-[4.8rem]'>
              <img loading='lazy' width="868" height="864" decoding='async' data-nimg="1" className='rounded-full' srcSet='./face/2.webp 1x, ./face/2.webp 2x' src="./face/2.webp" alt="" />
            </div>
            <div className='absolute bottom-left emoji bottom-[30.5%] translate-y-[50%] left-[0%] w-[5.47rem] h-[5.47rem] rounded-full bg-whit-100 border-[.05rem] border-white-900 shadow-xsm mobile:w-[4.8rem] mobile:h-[4.8rem]'>
              <img loading='lazy' width="868" height="864" decoding='async' data-nimg="1" className='rounded-full' srcSet='./face/3.webp 1x, ./face/3.webp 2x' src="./face/3.webp" alt="" />
            </div>
            <div className='absolute bottom emoji bottom-[2.5%] w-[5.47rem] h-[5.47rem] rounded-full bg-whit-100 border-[.05rem] border-white-900 shadow-xsm mobile:w-[4.8rem] mobile:h-[4.8rem]'>
              <img loading='lazy' width="868" height="864" decoding='async' data-nimg="1" className='rounded-full' srcSet='./face/4.webp 1x, ./face/4.webp 2x' src="./face/4.webp" alt="" />
            </div>
            <div className='absolute bottom-right emoji bottom-[30.5%] right-[0%] translate-y-[50%] w-[5.47rem] h-[5.47rem] rounded-full bg-whit-100 border-[.05rem] border-white-900 shadow-xsm mobile:w-[4.8rem] mobile:h-[4.8rem]'>
              <img loading='lazy' width="868" height="864" decoding='async' data-nimg="1" className='rounded-full' srcSet='./face/5.webp 1x, ./face/5.webp 2x' src="./face/5.webp" alt="" />
            </div>
            <div className='absolute top-right emoji top-[30.5%] right-[0%] translate-y-[-50%] w-[5.47rem] h-[5.47rem] rounded-full bg-whit-100 border-[.05rem] border-white-900 shadow-xsm mobile:w-[4.8rem] mobile:h-[4.8rem]'>
              <img loading='lazy' width="868" height="864" decoding='async' data-nimg="1" className='rounded-full' srcSet='./face/6.webp 1x, ./face/6.webp 2x' src="./face/6.webp" alt="" />
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
