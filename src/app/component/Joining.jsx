import React from 'react'

export default function Joining() {
  return (
    <div className='flex flex-col members-container overflow-container gap-[.5rem] text-center bg-white-100 text-black pt-[2.5rem] mobile:pb-[3.5rem]'>
        <div>
            <h3 className='text-regular75 w-[20ch] mx-auto mobile:text-[]2.1rem mobile:w-full mobile:px-[1.2rem] mobile:leading-[1.5]'>See who else is joining</h3>
        </div>
        <div>
            <div className='pt-[.94rem] pb-[4.rem] flex flex-row justify-center members-cards mobile:pt-[3rem]'>
                <div className='shrick-0 will-change-transform sides'>
                    <img loading='lazy' width="1000" height="1000" decoding='async' data-nimg="1" className='w-[8.1rem] h-[8.1rem] mx-auto rounded-full mb-[.87rem] object-cover mobile:w-[8rem] mobile:h-[8rem]' sizes='(max-width: 1800px) 384px' srcSet='./member1.webp 16w, ./member1.webp 32w ./member1.webp 48w, ./member1.webp 64w, ./member1.webp 96w, ./member1.webp 128w, ./member1.webp 256w, ./member1.webp 384w, ./member1.webp 640w, ./member1.webp 750w, ./member1.webp 828w, ./member1.webp 1080w, ./member1.webp 1200w, ./member1.webp 1920w, ./member1.webp 2048w, ./member1.webp 3840w,' src="./member1.webp" alt="" />
                    <p className='text-regular30 mobile:mt-[1.8rem] mobile:text-[.9rem]'>"Sophie P." <img loading='lazy' width="160" height="160" decoding='async' data-nimg="1" className='w-[.7rem] inline-block mobile:w-[.9rem]' srcSet='./en.webp 1x, ./en.webp 2x' src="" alt="./en.webp" /></p>
                    <p className='text-[.556rem] text-gray-500 leading-[1.3] mobile:text-[.7rem]'>Digital Nomad</p>
                </div>
                <div className='z-10 shrink-0 will-change-transform'>
                    <img loading='lazy' width="650" height="650" decoding='async' data-nimg="1" className='w-[8.9rem] h-[8.9rem] mx-auto rounded-full mb-[.87rem] object-cover border-[.4rem] border-white  mobile:w-[9.8rem] mobile:h-[9.8rem] mobile:mt-[-.9rem]' sizes='(max-width: 1800px) 384px' srcSet='./new.webp 16w, ./new.webp 32w ./new.webp 48w, ./new.webp 64w, ./new.webp 96w, ./new.webp 128w, ./new.webp 256w, ./new.webp 384w, ./new.webp 640w, ./new.webp 750w, ./new.webp 828w, ./new.webp 1080w, ./new.webp 1200w, ./new.webp 1920w, ./new.webp 2048w, ./new.webp 3840w,' src="./new.webp" alt="" />
                    <p className='text-regular30 mobile:mt-[1.8rem] mobile:text-[.9rem]'>"Carlos M." <img loading='lazy' width="160" height="160" decoding='async' data-nimg="1" className='w-[.7rem] inline-block mobile:w-[.9rem]' srcSet='./us.webp 1x, ./us.webp 2x' src="" alt="./us.webp" /></p>
                    <p className='text-[.556rem] text-gray-500 leading-[1.3] mobile:text-[.7rem]'>Remote Designer</p>
                </div>
                <div className='shrink-0 will-change-transform sides'>
                <img loading='lazy' width="1500" height="1000" decoding='async' data-nimg="1" className='w-[8.1rem] h-[8.1rem] mx-auto rounded-full mb-[.87rem] object-cover mobile:w-[9.8rem] mobile:h-[9.8rem]' sizes='(max-width: 1800px) 384px' srcSet='./person1.webp 16w, ./person1.webp 32w ./person1.webp 48w, ./person1.webp 64w, ./person1.webp 96w, ./person1.webp 128w, ./person1.webp 256w, ./person1.webp 384w, ./person1.webp 640w, ./person1.webp 750w, ./person1.webp 828w, ./person1.webp 1080w, ./person1.webp 1200w, ./person1.webp 1920w, ./person1.webp 2048w, ./person1.webp 3840w,' src="./person1.webp" alt="" />
                    <p className='text-regular30 mobile:mt-[1.8rem] mobile:text-[.9rem]'>"Emily S." <img loading='lazy' width="160" height="160" decoding='async' data-nimg="1" className='w-[.7rem] inline-block mobile:w-[.9rem]' srcSet='./ca.webp 1x, ./ca.webp 2x' src="" alt="./ca.webp" /></p>
                    <p className='text-[.556rem] text-gray-500 leading-[1.3] mobile:text-[.7rem]'>Solo Traveler</p>
                </div>
            </div>
        </div>
    </div>
  )
}
