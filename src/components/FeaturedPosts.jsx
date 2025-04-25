import { featuredPostsData } from "../assets/dataStore/featuredPostsData";

export default function FeaturedPosts() {
    return <>
        {/*<div>-Featured Posts</div>*/}
        <div className="flex flex-col py-20 gap-20
                        lg:py-28">
            <div className="flex flex-col items-center font-montserrat gap-3">
                <h6 className="font-bold text-sm leading-6 tracking-[0.2px] text-center text-[#23A6F0]">Practice Advice</h6>
                <h2 className="font-bold text-[2.5rem] leading-[3.125rem] tracking-[0.2px] text-center text-[#252B42] w-[15rem] lg:w-[20rem]">Featured Posts</h2>
                <p className="font-normal text-sm leading-5 tracking-[0.2px] text-center text-[#737373] w-[17rem] lg:w-[30rem]">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
            </div>

            <div className="flex flex-col
                            lg:flex-row">
                {featuredPostsData.map((item, index) => (
                    <div key={index} className="flex flex-col">
                        <img src={item.image} />
                        <div className="flex">
                            <p>Google</p>
                            <p>Trending</p>
                            <p>New</p>
                        </div>
                        <h4>{item.h4}</h4>
                        <p>{item.def}</p>
                        <div className="flex">
                            <div className="flex">
                                <img src="src/assets/icons/clock.svg" />
                                <p>{item.date}</p>
                            </div>
                            <div className="flex">
                                <img src="src/assets/icons/content-card.svg" />
                                <p>{item.comments}</p>
                            </div>
                        </div>
                        <a className="flex gap-3" href="#">
                            <h6>Learn More</h6>
                            <img src="src/assets/icons/icon-arrow-next.svg" />
                        </a>
                    </div>
                ))}


            </div>
        </div>
    </>
}