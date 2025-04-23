export default function Features() {
    return <>
        {/*<div>-Features</div>;*/}
        <div className="flex flex-col
                        lg:flex-row lg:items-center lg:gap-8 lg:justify-center lg:h-[682px]">
            <img className="order-2 lg:order-1" src="src/assets/images/FeaturesImg/features1.png" />
            <div className="font-montserrat flex flex-col items-center gap-8 order-1 
                            lg:order-2 lg:items-start">
                <h5 className="font-bold text-[#BDBDBD] text-base leading-6 tracking-[0.1px]">SUMMER 2020</h5>
                <h2 className="font-bold text-[#252B42] text-[2.5rem] text-center w-[303px] leading-[3.125rem] tracking-[0.2px] 
                               lg:text-left lg:w-[389px] ">Part of the Neural Universe</h2>
                <h4 className="font-normal text-[#737373] text-xl leading-8 tracking-[0.2px] text-center w-[262px]
                               lg:w-[376px] lg:text-left">We know how large objects will act, but things on a small scale.</h4>
                <div className="flex flex-col gap-6
                                lg:flex-row lg:gap-3 lg:h-[52px]">
                    <button className="rounded-[5px] border-solid bg-[#2DC071] px-10 py-4 lg:w-[155.6px]">
                        <p className="font-bold text-center text-[#FFFFFF] lg:text-sm lg:leading-6 lg:tracking-[0.2px]">BUY NOW</p>
                    </button>
                    <button className="rounded-[5px] border border-[#2DC071] px-10 py-4 lg:w-[174.7px]">
                        <p className="font-bold text-center text-[#2DC071] lg:text-sm lg:leading-6 lg:tracking-[0.2px]">READ MORE</p>
                    </button>
                </div>
            </div>
        </div>
    </>
}