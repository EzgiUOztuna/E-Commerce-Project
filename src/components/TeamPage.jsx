import { Link } from "react-router-dom";
import FooterLight from "./FooterLight";
import InnerPageHeader from "./InnerPageHeader";

export default function TeamPage() {

    return <>
        <InnerPageHeader />

        <div className="flex flex-col font-montserrat font-bold mx-auto gap-4 py-[4rem]
                        lg:w-[55rem]">
            <h5 className="text-base leading-6 tracking-[0.1px] text-center text-[#737373]">WHAT WE DO</h5>
            <h2 className="text-[2.5rem] leading-[3rem] tracking-[0.2px] text-center text-[#252B42] mx-auto w-[20.2rem] 
                           lg:text-[3.625rem] lg:leading-[5rem] lg:w-[51rem]">Innovation tailored for you</h2>


            <div className='flex items-center gap-4 py-4 font-bold text-sm leading-6 tracking-[0.2px] text-center mx-auto'>
                <Link to='/home' className='text-[#252B42]'>Home</Link>
                <img src='/icons/arrow-right-icn.svg' />
                <h6 className='text-[#BDBDBD]'>Team</h6>
            </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-2
                        lg:flex-row lg:h-[31.56rem]">
            <img className="hidden lg:block lg:h-[33.125rem]" src="/images/teamPageImg/img1.png" />
            <div className="grid grid-cols-2 grid-rows-2 gap-[0.5rem] lg:h-[33.125rem]">
                <img className="hidden lg:block lg:h-[260px]" src="/images/teamPageImg/img2.png" />
                <img className="hidden lg:block lg:h-[260px]" src="/images/teamPageImg/img3.png" />
                <img className="hidden lg:block lg:h-[260px]" src="/images/teamPageImg/img4.png" />
                <img className="hidden lg:block lg:h-[260px]" src="/images/teamPageImg/img5.png" />
            </div>

            <img className="block lg:hidden lg:h-[33.125rem]" src="/images/teamPageImg/img1-mobile.png" />
            <div className="grid grid-cols-2 grid-rows-2 gap-[0.3rem] lg:h-[33.125rem]">
                <img className="block lg:hidden" src="/images/teamPageImg/img2-mobile.png" />
                <img className="block lg:hidden" src="/images/teamPageImg/img3-mobile.png" />
                <img className="block lg:hidden" src="/images/teamPageImg/img4-mobile.png" />
                <img className="block lg:hidden" src="/images/teamPageImg/img5-mobile.png" />
            </div>
        </div>

        <div className="flex items-center font-montserrat font-bold
                        lg:py-28 lg:gap-28">
            <h2 className="text-[2.5rem] leading-[3.125rem] tracking-[0.2px] text-[#252B42] mx-auto">Meet Our Team</h2>
            <div>

            </div>
        </div>

        <FooterLight />
    </>
}