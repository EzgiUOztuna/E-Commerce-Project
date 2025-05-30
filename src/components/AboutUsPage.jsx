import FooterLight from "./FooterLight";
import Clients from "./Clients";
import InnerPageHeader from "./InnerPageHeader";
import { aboutUsData } from "../../public/dataStore/aboutUsData";
import { teamMembersData } from "../../public/dataStore/teamMembersData";
import { Link } from "react-router-dom";

export default function AboutUsPage() {
    return <>
        <div className='font-montserrat 
                        lg:bg-[url("/images/aboutUsImg/background-about-us.png")] lg:bg-no-repeat lg:h-[45.563rem]
                        xl:bg-cover'>
            <InnerPageHeader />

            {/* About Company... */}
            <div className='flex gap-8 py-8 
                            lg:items-start'>
                <div className='flex flex-col gap-10 mx-auto w-[27rem] py-20
                                lg:w-[37.5rem] lg:gap-9 lg:py-28'>
                    <h5 className='hidden font-bold text-base leading-6 tracking-[0.1px] text-[#252B42] text-center  mx-auto
                                   lg:block lg:text-left lg:w-[23.15rem]'>ABOUT COMPANY</h5>
                    <h1 className='font-bold text-[2.5rem] leading-[3.125rem] tracking-[0.2px] text-[#252B42] text-center w-[380px] mx-auto
                                   lg:text-left lg:w-[23.625rem] lg:text-[3.625rem] lg:leading-[5rem]'>ABOUT US</h1>


                    <h4 className='font-normal text-xl leading-8 tracking-[0.2px] text-[#737373] text-center w-[17rem] mx-auto
                                   lg:text-left lg:w-[23rem]'>We know how large objects will act, but things on a small scale</h4>
                    <button className="border border-[#23A6F0] bg-[#23A6F0] rounded-md w-52 h-12 py-45 px-10 mx-auto lg:ml-[7.25rem]">
                        <p className="font-bold  text-sm leading-6 tracking-[0.2px] text-center text-[#FFFFFF]">Get Quote Now</p></button> {/* ⚠️ */}
                    <img className='block lg:hidden' src='/images/aboutUsImg/bg-mobile-about-us.png' />
                </div>
                <div className='hidden lg:block lg:w-[31rem] xl:w-[45.5rem]'></div>
            </div>

            {/* Problems trying...*/}
            <div className="flex flex-col py-6 mx-auto items-center justify-center text-center gap-14 lg:flex-row lg:text-left">
                <div className="flex flex-col py-6 gap-6">
                    <p className="font-normal text-sm leading-5 tracking-[0.2px] text-[#E74040]">Problems trying</p>
                    <h3 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42] w-72 lg:w-[25rem]">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h3>
                </div>
                <p className="font-normal text-sm leading-5 tracking-[0.2px] text-[#737373] w-[19rem] lg:w-[33rem]">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
            </div>

            {/* Data infos...*/}
            <div>
                <div className="flex flex-col py-20  items-center justify-center gap-24 lg:flex-row lg:gap-12 ">
                    {aboutUsData.analyzeData.map((data, index) => (
                        <div key={index}
                            className="flex flex-col text-center font-bold px-4">
                            <h1 className="text-[3.625rem] leading-[5rem] tracking-[0.2px] text-[#252B42]">{data.number}</h1>
                            <h5 className="text-base leading-6 tracking-[0.1px] text-[#737373]">{data.def}</h5>
                        </div>
                    ))}


                </div>
            </div>

            {/* Video...*/}
            <div className="py-20">
                <iframe
                    className="border rounded-2xl mx-auto w-[19rem] h-[19.75rem] lg:w-[46.875rem] lg:h-[25rem]"
                    src="https://www.youtube.com/embed/es4x5R-rV9s"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            {/* Meet team...*/}
            <div className="flex flex-col items-center font-montserrat font-bold py-7
                            lg:py-28 lg:gap-28">
                <div className="flex flex-col items-center gap-2 text-center py-11">
                    <h2 className="text-[2.5rem] leading-[3.125rem] tracking-[0.2px] text-[#252B42] mx-auto  w-[19rem]
                           lg:w-[38rem] lg:py-0">Meet Our Team</h2>
                    <p className="font-normal text-sm leading-5 tracking-[0.2] w-[13rem] lg:w-[29rem]">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className="lg:grid grid-cols-3 lg:gap-7">
                    {teamMembersData.slice(0, 3).map((team, index) => (
                        <div key={index} className="flex flex-col items-center pb-8 lg:pb-4">
                            <img className="w-[19.75rem] h-[15rem]" src={team.picture} />
                            <div className="flex flex-col p-8 gap-4 lg:gap-7 ">
                                <h5 className="text-base leading-6 tracking-[0.1px] text-center text-[#252B42]">{team.username}</h5>
                                <h6 className="text-sm tracking-[0.2px] text-center text-[#737373]">{team.job}</h6>
                                <div className="flex gap-5">
                                    <Link to={team.facebookUrl}><img src={team.facebookIcon} /></Link> {/*⚠️*/}
                                    <Link to={team.instagramUrl}><img src={team.instagramIcon} /></Link> {/*⚠️*/}
                                    <Link to={team.twitterUrl}><img src={team.twitterIcon} /></Link> {/*⚠️*/}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Clients */}
            <div className="flex flex-col text-center bg-[#FAFAFA] pt-20 pb-8 tracking-[0.2px]">
                <div className="flex flex-col items-center gap-7 text-center">
                    <h2 className="font-bold text-[2.5rem] leading-[3.125rem] text-[#252B42] w-[18rem] lg:w-[33rem]">Big Companies Are Here</h2>
                    <p className="font-normal text-sm leading-5 w-[20rem] lg:w-[30rem]">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <Clients />
            </div>

            {/* Work with us... */}
            <div className="flex flex-col items-center bg-[#2A7CC7] text-[#FFFFFF] py-9 
                            lg:flex-row lg:py-28 lg:h-[40rem] lg:justify-between">



                <div className="flex items-center mx-auto 
                                lg:flex-row lg:justify-between">
                    <div className='flex flex-col gap-8  py-7 
                                    lg:w-[37.5rem] lg:py-28 lg:ml-[7.25rem]'>
                        <h5 className='font-bold text-base leading-6 tracking-[0.1px] text-center
                                       lg:text-left lg:w-[33rem]'>WORK WITH US </h5>


                        <h2 className='font-bold text-[2.5rem] leading-[3.125rem] tracking-[0.2px] text-center w-[20rem] mx-auto
                                   lg:text-left lg:w-[33rem] lg:text-[2.5rem] lg:leading-[5rem] lg:mx-0'>Now Let’s grow Yours</h2>


                        <h4 className='font-normal text-sm leading-8 tracking-[0.2px] text-center w-[17rem] mx-auto
                                       lg:text-left lg:w-[31rem] lg:mx-0'>The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </h4>


                        <button className="border border-[#FFFFFF] rounded-md w-32 h-12 py-45 px-10 mx-auto lg:mx-0">
                            <p className="font-bold  text-sm leading-6 tracking-[0.2px] text-center">Button</p></button> {/* ⚠️ */}
                    </div>
                </div>
                <img className='hidden lg:block lg:h-[40rem]' src='/images/aboutUsImg/about-us-work-w-us.png' />
            </div>

            <FooterLight />
        </div>


    </>;
}