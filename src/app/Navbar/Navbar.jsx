import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (

            <div className='fixed top-0 z-50 flex items-center justify-between bg-transparent lg:px-global px-[19px] pt-[24px] lg:px-[128px] lg:pt-[34.351px] pb-[10px] w-full mobile:text-[1.6rem] transition-colors duration-300 text-white container mx-auto'>
                <a className='relative pb-[0.1rem] flex flex-row' href="/">
                    <img width="42" height="42" className='h-[1.05rem] w-auto logo pr-[.5rem]' src="./Header/Buenro-3.svg" alt="" />
                    <img width="45" height="30" className='w-auto logo-type h-[1.05rem]' src="./Header/Buenro-4.svg" alt="" />
                </a>
                <div className='relative flex z-[10]'>
                    <div className='hidden md:flex'>
                        <div>
                            <div className='relative top-[-8%] left-[-2%] right-[-13%] bottom-[-8%] cursor-pointer px-[.8rem] py-[8px] text-[.5rem] items-center'>
                                
                                    <button class="btn">
                                        <span class="btn-text-one">Early Access</span>
                                        <span class="btn-text-two">Early Access</span>
                                    </button>
                                
                                <div className=''></div>
                            </div>
                            {/* <div className='relative hidden cursor-pointer '>
                                <div className='flex items-center bg-black rounded-full text-white-100 early-access mobile:hidden-[10rem] px-[.8rem] py-[.45rem] text-[.5rem] mr-[.8rem] cursor-pointer'>
                                    <div className='relative flex flex-col cursor-pointer h-[.75rem] overflow-hidden'>
                                        <p>Early Access</p>
                                        <p>Early Access</p>
                                    </div>
                                </div>
                                <div className='absolute top-[-10%] left-[-13%] right-[-13%] bottom-[-13%]'></div>
                            </div> */}
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='relative cursor-pointer mobile:hidden'>
                                <div className='relative min-w-[1.85rem] min-h-[1.85rem] flex items-center justify-center '>
                                    <div className='absolute w-full h-full border-[.07rem] border-white-100 rounded-full shadow-sm burger-bg bg-white-100'>
                                    </div>
                                    <div className='flex flex-col items-center justify-center rounded-full burger-lines gap-[.18rem] w-[1.8em] h-[1.85em] cursor-pointer '>
                                        {/* <img className='relative z-[100] w-[.72em] h-full' src="./Header/Buenro-5.svg" alt="" /> */}
                                        <img className='absolute h-[.55rem] mobile:h-[.8rem]' src="./Header/Buenro-5.svg" alt="" />
                                    </div>
                                </div>
                                <div className='absolute top-[-10%] left-[-13%] right-[-13%] bottom-[-13%]'>
                                </div>
                            </div>
                            <div className='relative hidden cursor-pointer mobile:flex'>
    
                            </div>
                        </div>
                    </div>
                </div>
                <div className='fixed top-0 left-0 w-full h-screen drawer-menu z-1'>
    
                </div>
            </div>
        
    
  )
}

export default Navbar