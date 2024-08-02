import React from 'react'

export default function Section12() {
    return (
        <div className='relative min-h-screen bg-white-100 px-global pt-[5.2rem] pb-[5rem] justify-between md:gap-[2rem] md:flex md:flex-row md:justify-start mobile:px-[clac(100vw/16)]'>
            <div>
                <h6 class="text-regular75 leading-[1.5] w-[9ch] mobile:text-[2.3rem] mobile:pr-[1.3rem]">Frequently Asked Questions</h6>
            </div>
            <div class="absolute w-full h-full top-[0] left-[0]"></div>
            <div>
                <div className='flex flex-col w-[calc(100vw/12*6)] relative z-[10] md:w-[100%]'>
                    <div className='pt-[.5rem] cursor-pointer pb-[1.05rem] border-b-[1px] border-white mb-[.5rem] faq-contain overflow-hidden mobile:pr-[1rem] mobile:pb-[1.4rem]'>
                        <div className='relative flex justify-between pointer-events-none'>
                            <h6 class="text-regular30  pointer-events-none mobile:text-[.92rem] mobile:pr-[1.3rem]">How can I be part of Buenro?</h6>
                            <div className='faq-plus w-[1.69rem] h-[1.69rem] rounded-full text-black absolute top-[50%] right-[0%] translate-y-[-50%] flex justify-center items-center mobile:right-[-5%]'>
                                <div class="plus-line rounded-full w-[.57rem] h-[.0676rem] bg-white-100" ></div>
                                <div class="plus-line ver-line rounded-full w-[.0676rem] h-[.57rem] absolute bg-white-100" ></div>
                            </div>
                        </div>
                        <div className='opacity-0 pointer-events-none p-wrapper h-[0]'>
                            <p class="text-[.634rem] pt-[.85rem] text-[#1f1f1f] leading-[1.55] pointer-events-none ">You can request access through our waiting list. Once we release our app, we’ll ask you to create a profile and tell us more about yourself.</p>
                        </div>
                    </div>
                    <div className='pt-[.5rem] cursor-pointer pb-[1.05rem] border-b-[1px] border-white mb-[.5rem] faq-contain overflow-hidden mobile:pr-[1rem] mobile:pb-[1.4rem]'>
                        <div className='relative flex justify-between pointer-events-none'>
                            <h6 class="text-regular30  pointer-events-none mobile:text-[.92rem] mobile:pr-[1.3rem]">Can anyone join Buenro?</h6>
                            <div className='faq-plus w-[1.69rem] h-[1.69rem] rounded-full text-black absolute top-[50%] right-[0%] translate-y-[-50%] flex justify-center items-center mobile:right-[-5%]'>
                                <div class="plus-line rounded-full w-[.57rem] h-[.0676rem] bg-white-100" ></div>
                                <div class="plus-line ver-line rounded-full w-[.0676rem] h-[.57rem] absolute bg-white-100" ></div>
                            </div>
                        </div>
                        <div className='opacity-0 pointer-events-none p-wrapper h-[0]'>
                            <p class="text-[.634rem] pt-[.85rem] text-[#1f1f1f] leading-[1.55] pointer-events-none ">Absolutey! Everyone is welcome to Buenro. However, we want to keep the magic and feeling of family within the community. For that reason, we have limited access to new members.</p>
                        </div>
                    </div>
                    <div className='pt-[.5rem] cursor-pointer pb-[1.05rem] border-b-[1px] border-white mb-[.5rem] faq-contain overflow-hidden mobile:pr-[1rem] mobile:pb-[1.4rem]'>
                        <div className='relative flex justify-between pointer-events-none'>
                            <h6 class="text-regular30  pointer-events-none mobile:text-[.92rem] mobile:pr-[1.3rem]">How long will I be the waitlist for?</h6>
                            <div className='faq-plus w-[1.69rem] h-[1.69rem] rounded-full text-black absolute top-[50%] right-[0%] translate-y-[-50%] flex justify-center items-center mobile:right-[-5%]'>
                                <div class="plus-line rounded-full w-[.57rem] h-[.0676rem] bg-white-100" ></div>
                                <div class="plus-line ver-line rounded-full w-[.0676rem] h-[.57rem] absolute bg-white-100" ></div>
                            </div>
                        </div>
                        <div className='opacity-0 pointer-events-none p-wrapper h-[0]'>
                            <p class="text-[.634rem] pt-[.85rem] text-[#1f1f1f] leading-[1.55] pointer-events-none ">At the moments, we are receiving a high volume of applications, so we ask for your patience. We are doing our best to grant you access as quickly as possible. If you know someone who is already inside, ask them to erfer you to skip the line ahead.</p>
                        </div>
                    </div>
                    <div className='pt-[.5rem] cursor-pointer pb-[1.05rem] border-b-[1px] border-white mb-[.5rem] faq-contain overflow-hidden mobile:pr-[1rem] mobile:pb-[1.4rem]'>
                        <div className='relative flex justify-between pointer-events-none'>
                            <h6 class="text-regular30  pointer-events-none mobile:text-[.92rem] mobile:pr-[1.3rem]">Do I need to be remote worker or entrepreneur?</h6>
                            <div className='faq-plus w-[1.69rem] h-[1.69rem] rounded-full text-black absolute top-[50%] right-[0%] translate-y-[-50%] flex justify-center items-center mobile:right-[-5%]'>
                                <div class="plus-line rounded-full w-[.57rem] h-[.0676rem] bg-white-100" ></div>
                                <div class="plus-line ver-line rounded-full w-[.0676rem] h-[.57rem] absolute bg-white-100" ></div>
                            </div>
                        </div>
                        <div className='opacity-0 pointer-events-none p-wrapper h-[0]'>
                            <p class="text-[.634rem] pt-[.85rem] text-[#1f1f1f] leading-[1.55] pointer-events-none ">No, we're not looking for a specific professional profile. While most of our members work remotely, no matter what your profession is, you have a place in our home.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
