import { productCards2Data } from "../assets/dataStore/productCards2Data";

export default function ProductCards2() {
    return <>
        <div className="font-montserrat flex flex-col w-[20.5rem] py-20 gap-12 m-auto
                            lg:w-[70.25rem] lg:gap-20">

            <div className="flex justify-between items-center text-[#737373] lg:py-6 lg:gap-20">
                <h6 className="font-bold text-sm leading-6 tracking-[0.2px] ">Showing all 12 results</h6> {/* ⚠️ Buradaki 12'yi aşağıdaki ürün sayısına bağlanmalı. ⚠️ */}
                <div className="flex items-center px-[1px] gap-4">
                    <h6 className="font-bold text-sm leading-6 tracking-[0.2px]">Views: </h6>
                    <button><img src="src/assets/icons/menu-style.svg" /></button> {/* ⚠️ Görünüm değiştirecek tetikleme. ⚠️ */}
                    <button><img src="src/assets/icons/menu-style-2.svg" /></button> {/* ⚠️ Görünüm değiştirecek tetikleme. ⚠️ */}
                </div>
                <div className="flex item-center px-[1px] gap-4">
                    <select className="w-36 h-12 border border-[#DDDDDD] rounded-md px-4 py-3 appearance-none bg-[url('src/assets/icons/dropdown.svg')] bg-no-repeat bg-[right_1.5rem_center] bg-[length:.7rem] cursor-pointer">
                        <option value="popularity" className=""><p>Popularity</p></option>
                        <option value="list-entry-1">List Entry 1</option>
                        <option value="list-entry-2">List Entry 2</option>
                        <option value="list-entry-3">List Entry 3</option>
                        <option value="list-entry-4">List Entry 4</option>
                        <option value="list-entry-5">List Entry 5</option>
                    </select>
                    <button><h6>Filter</h6></button>
                </div>

            </div>

            <div className="flex flex-col gap-8
                                lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-8">
                {productCards2Data.map((item, index) => (
                    <div key={index} className="flex flex-col items-center lg:mb-4">
                        <img className="w-[21.75rem] h-[26.7rem] 
                                        lg:w-[15rem] lg:h-[18.75rem]" src={item.productImage}></img>
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