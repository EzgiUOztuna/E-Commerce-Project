export default function Features() {
    return <>
        {/*<div>-Features</div>;*/}
        <div className="flex items-center ">
            <img src="src/assets/images/FeaturesImg/features1.png" />
            <div className="font-montserrat flex flex-col">
                <h5 className="font-bold text-[#BDBDBD] lg:text-base lg:leading-6 lg:tracking-[0.1px]">SUMMER 2020</h5>
                <h2 className="font-bold text-[#252B42] lg:w-[389px] lg:text-[2.5rem] lg:leading-[3.125rem]">Part of the Neural Universe</h2>
                <h4 className="font-normal text-[#737373] lg:w-[376px] lg:text-xl lg:leading-8 lg:tracking-[0.2px]">We know how large objects will act, but things on a small scale.</h4>
                <div className="flex lg:h-[52px]">
                    <button className="lg:w-[151px]">BUY NOW</button>
                    <button>READ MORE</button>
                </div>
            </div>
        </div>
    </>
}