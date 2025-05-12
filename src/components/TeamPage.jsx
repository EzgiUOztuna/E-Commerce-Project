import { Link } from "react-router-dom";
import FooterLight from "./FooterLight";
import InnerPageHeader from "./InnerPageHeader";
import { teamMembersData } from "../../public/dataStore/teamMembersData";

export default function TeamPage() {

    return <>
        <InnerPageHeader />

        {/* Innovation...*/}
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

        {/* Meet team...*/}
        <div className="flex flex-col items-center font-montserrat font-bold py-7
                        lg:py-28 lg:gap-28">
            <h2 className="text-[2.5rem] leading-[3.125rem] tracking-[0.2px] text-[#252B42] mx-auto py-11  text-center w-[19rem]
                           lg:w-[38rem] lg:py-0">Meet Our Team</h2>
            <div className="lg:grid grid-cols-3 lg:gap-7">
                {teamMembersData.map((team, index) => (
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

        {/* Free trial...*/}
        <div className="flex flex-col items-center font-montserrat text-center tracking-[0.2px] py-24 gap-9
                        lg:py-20 ">
            <h2 className="font-bold leading-[3.125rem] text-[#252B42] text-[2.5rem] w-[22rem]
                           lg:w-[36rem]">Start your 14 days free trial</h2>
            <h6 className="font-normal text-sm leading-5 text-[#737373] mx-auto w-[22rem] lg:w-[26rem]">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.</h6>
            <button className="rounded-md border border-[#23A6F0] bg-[#23A6F0] w-44 h-14 mx-auto py-4 px-8">
                <p className="font-bold text-sm leading-5 text-[#FFFFFF]">Try it free now</p></button> {/*⚠️*/}
            <div className="flex items-center p-2 gap-8">
                <Link to="/twitter"><img src="/icons/twitter-team.svg" /></Link> {/*⚠️*/}
                <Link to="/facebook"><img src="/icons/facebook-team.svg" /></Link> {/*⚠️*/}
                <Link to="/instagram"><img src="/icons/insta-team.svg" /></Link> {/*⚠️*/}
                <Link to="/linkedin"><img src="/icons/linkedin-team.svg" /></Link> {/*⚠️*/}
            </div>
        </div>

        <FooterLight />
    </>
}