import { productCards2Data } from "../assets/dataStore/productCards2Data";

export default function ProductCards2() {

    return <>
        <div className="font-montserrat flex flex-col py-6 gap-20 justify-between items-center text-[#737373] mx-auto 
                        lg:flex-row lg:gap-20 lg:w-[69rem]">
            <h6 className="font-bold text-sm leading-6 tracking-[0.2px] ">Showing all {productCards2Data.length} results</h6>
            <div className="flex items-center px-[1px] gap-4">
                <h6 className="font-bold text-sm leading-6 tracking-[0.2px]">Views: </h6>
                <button className="border border-[#ECECEC] w-10 h-10 rounded-md">
                    <img className="mx-auto" src="src/assets/icons/menu-style.svg" />
                </button> {/* ⚠️ Görünüm değiştirecek tetikleme. ⚠️ */}
                <button className="border border-[#ECECEC] w-10 h-10 rounded-md">
                    <img className="mx-auto" src="src/assets/icons/menu-style-2.svg" />
                </button> {/* ⚠️ Görünüm değiştirecek tetikleme. ⚠️ */}
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
                <button className="py-3 px-5 bg-[#23A6F0] rounded-md 
                                       lg:w-24 lg:h-12">
                    <h6 className="font-bold text-sm leading-6 tracking-[0.2px] text-center text-[#FFFFFF]">Filter</h6> {/* ⚠️ Filtre tetikleme. ⚠️ */}
                </button>
            </div>
        </div>

        <div className="font-montserrat flex flex-col w-[20.5rem] py-20 gap-12 mx-auto
                            lg:w-[70.25rem] lg:gap-20">
            <div className="flex flex-col gap-8
                                lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-8">
                {productCards2Data.map((item, index) => (
                    <div key={index} className="flex flex-col items-center lg:mb-4">
                        <a href="/product-detail"> {/* ⚠️ "/product/:id" */}
                            <img className="w-[21.75rem] h-[26.7rem] 
                                        lg:w-[15rem] lg:h-[18.75rem]" src={item.productImage}></img></a>
                        <div className="flex flex-col items-center w-[21.75rem] font-bold text-center pt-6 pb-9 gap-[0.625rem]">
                            <a href="/product-detail">
                                <h5 className="text-[#252B42] lg:text-base lg:leading-6 lg:tracking-[0.1px]">{item.productTitle}</h5>
                                <p className="text-sm text-[#737373] lg:leading-6 lg:tracking-[0.2px]">{item.productSubtitle}</p> {/* ⚠️ "/product/:id" */}
                            </a>
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

            <div>
                <div className="flex justify-center items-center border border-[#BDBDBD] shadow-[0px_2px_4px_0px_#0000001A] mx-auto rounded-lg lg:w-80 lg:h-26"> {/* ⚠️ Sayfa değişimleri tetikleme. ⚠️ Aktif sayfada renklerin ayarlanması. ⚠️ */}
                    <button className="p-6 rounded-lg rounded-r-none text-[#BDBDBD]  font-bold text-sm leading-6 tracking-[0.2pxs] text-center
                                lg:w-24 lg:h-20">First</button>
                    <button className="py-6 px-5 border border-[#E9E9E9] text-[#23A6F0]  font-bold text-sm leading-6tracking-[0.2pxs] text-center
                                       lg:w-12 lg:h-20">1</button>
                    <button className="py-6 px-5 border border-[#23A6F0] text-[#FFFFFF] bg-[#23A6F0] font-bold text-sm leading-6tracking-[0.2pxs] text-center
                                       lg:w-12 lg:h-20">2</button>
                    <button className="py-6 px-5 border border-[#E9E9E9] text-[#23A6F0]  font-bold text-sm leading-6tracking-[0.2pxs] text-center
                                       lg:w-12 lg:h-20">3</button>
                    <button className="py-6 px-5 rounded-lg rounded-l-none  text-[#23A6F0]  font-bold text-sm leading-6tracking-[0.2pxs] text-center
                                       lg:w-20 lg:h-20">Next</button>
                </div>

            </div>
        </div>
    </>
}