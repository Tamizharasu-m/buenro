import React from 'react';

export default function Animation() {
  return (
    <div className='fixed w-full h-screen loader-container z-[999] hidden'>
        <div className='flex bg-black type-container gap-[.45rem] w-full h-full items-center justify-center'>

        </div>
        <div className='relative top-[-100%] left-[0] h-full w-full'>

        </div>
    </div>
  )
}
