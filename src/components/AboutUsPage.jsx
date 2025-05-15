import InnerPageHeader from "./InnerPageHeader";

export default function AboutUsPage() {
    return <>
        <div className='font-montserrat 
                        lg:bg-[url("/images/aboutUsImg/background-about-us.png")] lg:bg-no-repeat lg:h-[45.563rem]
                        xl:bg-cover'>
            <InnerPageHeader />
            <div className='flex gap-8 py-8 
                            lg:items-start'>
                <div className='flex flex-col gap-10 mx-auto w-[27rem]
                                lg:w-[37.5rem] lg:gap-9 lg:py-28'>
                    <h5 className='font-bold text-base leading-6 tracking-[0.1px] text-[#252B42] text-center  mx-auto
                                   lg:text-left lg:w-[23.125rem]'>ABOUT COMPANY</h5>
                    <h1 className='font-bold text-[2.5rem] leading-[3.125rem] tracking-[0.2px] text-[#252B42] text-center w-[380px] mx-auto
                                   lg:text-left lg:w-[23.625rem] lg:text-[3.625rem] lg:leading-[5rem]'>ABOUT US</h1>


                    <h4 className='font-normal text-xl leading-8 tracking-[0.2px] text-[#737373] text-center w-[17rem] mx-auto
                                   lg:text-left lg:w-[23rem]'>We know how large objects will act, but things on a small scale</h4>
                    <button className="border border-[#23A6F0] bg-[#23A6F0] rounded-md ml-[7.25rem]
                                       lg:w-52 lg:h-12 lg:py-45lg:px-10 ">
                        <p className="font-bold  text-sm leading-6 tracking-[0.2px] text-center text-[#FFFFFF]">Get Quote Now</p></button>
                    <img className='block lg:hidden' src='/images/aboutUsImg/bg-mobile-about-us.png' />
                </div>
                <div className='hidden lg:block lg:w-[31rem] xl:w-[45.5rem]'></div>
            </div>

        </div>

    </>;
}