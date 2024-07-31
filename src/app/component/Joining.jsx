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
                    <img loading='lazy' width="1000" height="1000" decoding='async' data-nimg="1" className='w-[8.1rem] h-[8.1rem] mx-auto rounded-full mb-[.87rem] object-cover mobile:w-[8rem] mobile:h-[8rem]' sizes='(max-width: 1800px) 384px' srcSet='' src="" alt="" />
                </div>
                <div className='z-10 shrink-0 will-change-transform'></div>
                <div className='shrink-0 will-change-transform sides'></div>
            </div>
        </div>
    </div>
  )
}
