import React from 'react';
import "./Header.css";

export default function Header() {
    return (
        <div className='container mx-auto pt-[23.889px] pb-[10px] px-[16.939px] flex justify-between items-center md:pt-[26px] md:px-[27px] xl:pt-[37.721px] xl:px-[115.133px] '>
            <div className='flex'>
                <img className='w-[45.562px] h-[30.865px] pr-[14.701px]' src="./Header/Buenro-3.svg" alt="image" />
                <img className='w-[46.2875px] h-[30.8625px]' src="./Header/Buenro-4.svg" alt="image" />
            </div>
            <div className='flex items-center  pr-[60px]'>
                <div className='hidden sm:flex '>
                    <button class="btn">
                        <span class="btn-text-one">Early Access</span>
                        <span class="btn-text-two">Early Access</span>
                    </button>
                </div>
                <div className='ml-[30px]'>
                    <img className='w-[25.625px]' src="./Header/Buenro-5.svg" alt="" />
                </div>
            </div>
        </div>
    )
}
