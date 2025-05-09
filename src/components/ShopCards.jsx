import { shopCardsData } from "../../public/dataStore/shopCardsData";

export default function ShopCards() {
    return <>
        {/* </><div>-ShopCards</div>; */}
        <div className="bg-[#FAFAFA] h-[115rem] py-16 gap-12 flex flex-col items-center
                        lg:flex lg:flex-col lg:items-center lg:gap-10 lg:h-[48.12rem] ">
            <div className="flex flex-col gap-[0.625rem] items-center
                            lg:w-[38rem] ">
                <h3 className="font-montserrat font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42] text-center 
                               lg:w-[11.68rem] lg:h-[2rem]">EDITOR’S PICK</h3>
                <p className="w-[193px] font-montserrat font-normal text-[0.875rem] leading-5 tracking-[0.2px] text-[#737373] text-center lg:w-[342px]">Problems trying to resolve the conflict between </p>
            </div>

            <div className="gap-[1.875rem] flex flex-col
                            lg:flex lg:flex-row">
                {shopCardsData.slice(0, 2).map((item, index) => (
                    <div key={index}
                        className="w-[324px] h-[500px] bg-cover bg-no-repeat
                    lg:w-[31.87rem] lg:h-31.25rem "
                        style={{
                            width: window.innerWidth >= 1024 ? item.styleDesktop.width : item.styleMobile.width,
                            backgroundImage: `url(${window.innerWidth >= 1024 ? item.desktopImage : item.mobileImage})`
                        }}>
                        <button className="bg-[#FFFFFF] w-[10.62rem] h-12 mt-[27rem] ml-5
                           lg:mt-[27rem] lg:ml-5 ">
                            <h5 className="font-montserrat font-bold text-base leading-6 tracking-[0.1px] text-center text-[#252B42]">{item.category}</h5>
                        </button>
                    </div >
                ))}

                <div className="flex flex-col gap-4">
                    {shopCardsData.slice(-2).map((item, index) => (
                        <div key={index}
                            className="bg-cover bg-no-repeat h-[240px]
                                       lg:w-60 lg:h-[15.12rem]"
                            style={{
                                backgroundImage: `url(${window.innerWidth >= 1024 ? item.desktopImage : item.mobileImage})`
                            }}>
                            <button className="bg-[#FFFFFF] mt-[11rem] ml-5 h-12
                                               lg:w-[10.62rem] lg:h-12 lg:mt-[10.6rem]"
                                style={{ width: item.category === "KIDS" ? "120px" : "170px" }}>
                                <h5 className="font-montserrat font-bold text-base leading-6 tracking-[0.1px] text-center text-[#252B42]">
                                    {item.category}
                                </h5>
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </div>

    </>
}
