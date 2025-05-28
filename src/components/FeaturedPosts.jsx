import { featuredPostsData } from "../../public/dataStore/featuredPostsData";

export default function FeaturedPosts() {
    return <>
        {/*<div>-Featured Posts</div>*/}
        <div className="flex flex-col py-20 gap-20 font-montserrat
                        lg:py-28">
            <div className="flex flex-col items-center gap-3">
                <h6 className="font-bold text-sm leading-6 tracking-[0.2px] text-center text-[#23A6F0]">Practice Advice</h6>
                <h2 className="font-bold text-[2.5rem] leading-[3.125rem] tracking-[0.2px] text-center text-[#252B42] w-[15rem] lg:w-[20rem]">Featured Posts</h2>
                <p className="font-normal text-sm leading-5 tracking-[0.2px] text-center text-[#737373] w-[17rem] lg:w-[30rem]">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-8
                            lg:flex-row">
                {featuredPostsData.map((item, index) => (
                    <div key={index} className="flex flex-col shadow-custom w-[20.5rem] lg:w-[22rem]">
                        <img src={item.image} />
                        <div className="absolute w-14 h-6 rounded-md border border-[#E74040] bg-[#E74040] px-3 mt-5 ml-5">
                            <h6 className="font-bold text-sm leading-6 tracking-[0.2px] text-center text-[#FFFFFF]">NEW</h6>
                        </div>
                        <div className="flex flex-col pt-6 pb-9 px-6 gap-3">
                            <div className="flex gap-4 font-normal text-xs leading-4 tracking-[0.2px]">
                                <p className="text-[#8EC2F2]">Google</p>
                                <p className="text-[#737373]">Trending</p>
                                <p className="text-[#737373]">New</p>
                            </div>
                            <h4 className="font-normal text-xl leading-8 tracking-[0.2px] text-[#252B42]">{item.h4}</h4>
                            <p className="font-normal text-sm leading-5 tracking-[0.2px] text-[#737373] w-[18rem]">{item.def}</p>
                            <div className="flex w-[18rem] py-4 justify-between font-normal text-xs leading-4 tracking-[0.2px] text-[#737373]">
                                <div className="flex gap-[0.313rem]">
                                    <img src="public/icons/clock.svg" />
                                    <p>{item.date}</p>
                                </div>
                                <div className="flex gap-[0.313rem]">
                                    <img src="public/icons/content-card.svg" />
                                    <p>{item.comments}</p>
                                </div>
                            </div>
                            <a className="flex items-center gap-[0.625rem]" href="#">
                                <h6 className="font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">Learn More</h6>
                                <img className="w-[0.6rem] h-4" src="public/icons/icon-arrow-next.svg" />
                            </a>
                        </div>

                    </div>
                ))}


            </div>
        </div>
    </>
}