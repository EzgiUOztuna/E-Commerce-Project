export default function ShopCards() {
    return <>
        {/* </><div>-ShopCards</div>; */}
        <div className="flex flex-col items-center py-16 gap-10 bg-[#FAFAFA]">
            <div className="w-[38rem] h-[3.87rem] flex flex-col gap-[0.625rem] items-center">
                <h3 className="font-montserrat font-bold text-base leading-8 tracking-[0.1px] text-[#252B42] 
                       lg:w-[11.68rem] lg:h-[2rem]">EDITOR’S PICK</h3>
                <p className="font-montserrat font-normal text-[0.875rem] leading-5 tracking-[0.2px] text-[#737373]">Problems trying to resolve the conflict between </p>
            </div>

            <div className="lg:flex lg:gap-[1.875rem]">
                <div className="lg:w-[31.87rem] lg:h-31.25rem" style={{ backgroundImage: "url(src/assets/images/men-bg-cover.svg)" }}>
                    <button className="bg-[#FFFFFF]
                                   lg:w-[10.62rem] lg:h-12 lg:mt-[27rem] lg:ml-5 ">
                        <h5 className="font-montserrat font-bold text-base leading-6 tracking-[0.1px] text-center text-[#252B42]">MEN</h5>
                    </button>
                </div >

                <div className="lg:w-60 lg:h-31.25rem" style={{ backgroundImage: "url(src/assets/images/women-bg-cover.svg)" }}>
                    <button className="bg-[#FFFFFF] 
                                   lg:w-[8.5rem] lg:h-12 lg:mt-[27rem] lg:ml-5 ">
                        <h5 className="font-montserrat font-bold text-base leading-6 tracking-[0.1px] text-center text-[#252B42]">WOMEN</h5>
                    </button>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="lg:w-60 lg:h-[15.12rem]" style={{ backgroundImage: "url(src/assets/images/accessories-bg-cover.svg)" }}>
                        <button className="bg-[#FFFFFF]
                                   lg:w-[10.62rem] lg:h-12 lg:mt-[10.5rem] lg:ml-5 ">
                            <h5 className="font-montserrat font-bold text-base leading-6 tracking-[0.1px] text-center text-[#252B42]">ACCESSORIES</h5>
                        </button>
                    </div >
                    <div className="lg:w-60 lg:h-[15.12rem]" style={{ backgroundImage: "url(src/assets/images/kids-bg-cover.svg)" }}>
                        <button className="bg-[#FFFFFF]
                                           lg:w-[10.62rem] lg:h-12 lg:mt-[11rem] lg:ml-5">
                            <h5 className="font-montserrat font-bold text-base leading-6 tracking-[0.1px] text-center text-[#252B42]">KIDS</h5>
                        </button>
                    </div >
                </div>

            </div>
        </div>

    </>
}
