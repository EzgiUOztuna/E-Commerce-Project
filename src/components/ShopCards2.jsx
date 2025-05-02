import { shopCards2Data } from "../assets/dataStore/shopCards2Data";

export default function ShopCards2() {
    return <>
        <div className="flex flex-col bg-[#FAFAFA] mx-auto justify-center items-center font-montserrat text-[#FFFFFF] py-6 gap-4
                        lg:flex-row lg:pb-12 lg:pt-0 lg:w-[70rem]">
            {shopCards2Data.map((item, index) => (
                <div key={index}
                    className="flex flex-col justify-center items-center bg-cover w-[20.75rem] h-[18.75rem]
                               lg:w-[13rem] lg:h-[14rem]"
                    style={{ backgroundImage: `url(${item.bgImage})` }}>
                    <h6 className="font-bold text-base leading-6 tracking-[0.1px] text-center">{item.category}</h6>
                    <h6 className="font-normal text-sm leading-5 tracking-[0.2px]">{item.numberOfItems} Items</h6>
                </div>

            ))}
        </div>
    </>
}