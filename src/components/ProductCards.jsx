import { productCardsData } from "../assets/dataStore/productCardsData"

export default function ProductCards() {

    return <>
        {/*<div>-ProductCard</div>;*/}
        <div className="font-montserrat flex flex-col w-[20.5rem] py-20 gap-12 m-auto
                        lg:w-[70.25rem] lg:h-[103.25rem] lg:gap-20">

            <div className="flex flex-col items-center w-[17.43rem] gap-[10px] text-center mx-auto lg:w-[43.188rem]">
                <h4 className="font-normal text-xl leading-[1.875rem] tracking-[0.2px] text-center text-[#737373]">Featured Products</h4>
                <h3 className="font-bold text-2xl leading-8 tracking-[0.1px] text-center text-[#252B42]">BESTSELLER PRODUCTS</h3>
                <p className="font-normal text-sm leading-5 tracking-[0.2px] text-center text-[#737373] w-[16.313rem] lg:w-[21.688rem]">Problems trying to resolve the conflict between </p>
            </div>

            <div className="flex flex-col gap-8
                            lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-8">
                {productCardsData.map((item, index) => (
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