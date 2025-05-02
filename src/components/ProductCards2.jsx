import { productCards2Data } from "../assets/dataStore/productCards2Data";

export default function ProductCards2() {
    return <>
        <div className="font-montserrat flex flex-col w-[20.5rem] py-20 gap-12 m-auto
                            lg:w-[70.25rem] lg:gap-20">

            <div className=" ">

            </div>

            <div className="flex flex-col gap-8
                                lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-8">
                {productCards2Data.map((item, index) => (
                    <div key={index} className="flex flex-col items-center lg:mb-4">
                        <img src={item.productImage}></img>
                        <div className="flex flex-col items-center w-[21.75rem] font-bold text-center pt-6 pb-9 gap-[0.625rem]">
                            <h5 className="text-[#252B42] lg:text-base lg:leading-6 lg:tracking-[0.1px]">{item.productTitle}</h5>
                            <a className="text-sm text-[#737373] lg:leading-6 lg:tracking-[0.2px]" href="/product-link">{item.productSubtitle}</a>
                            <div className="flex font-bold text-base leading-6 tracking-[0.1px] text-center py-1 p-1 gap-2">
                                <h5 className="text-[#BDBDBD]">${item.originalPrice}  </h5>
                                <h5 className="text-[#23856D]">${item.originalPrice - (Number(item.originalPrice) - (Number(item.originalPrice) * (Number(item.discountRate) / 100))).toFixed(2)}</h5>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-4 h-4 border rounded-lg" style={{ color: item.colors.firstColor, backgroundColor: item.colors.firstColor }}></div>
                                <div className="w-4 h-4 border rounded-lg" style={{ color: item.colors.secondColor, backgroundColor: item.colors.secondColor }}></div>
                                <div className="w-4 h-4 border rounded-lg" style={{ color: item.colors.thirdColor, backgroundColor: item.colors.thirdColor }}></div>
                                <div className="w-4 h-4 border rounded-lg" style={{ color: item.colors.fourthColor, backgroundColor: item.colors.fourthColor }}></div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    </>
}