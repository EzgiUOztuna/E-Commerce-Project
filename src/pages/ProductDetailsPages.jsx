import { useState } from 'react';
import { productDetailsData } from '../assets/dataStore/productDetailsData';
import Clients from '../components/Clients';
import FooterLight from '../components/FooterLight';
import SiteHeader from '../components/SiteHeader';

export default function ProductDetailsPages() {
    const product = productDetailsData[0];
    const [selectedImage, setSelectedImage] = useState(product.images[0]);
    {/* ⚠️ Prev ve Next butonları gelecek. */ }

    return <>
        <SiteHeader />
        <div className='bg-[#FAFAFA] font-montserrat flex flex-col'>
            <div className='py-6'>
                <div className='flex flex-col
                            lg:w-[69rem] lg:mx-auto'>
                    <div className='flex items-center gap-4 py-3 font-bold text-sm leading-6 tracking-[0.2px] text-center'>
                        <a href='/home' className='text-[#252B42]'>Home</a>
                        <img src='src/assets/icons/arrow-right-icn.svg' />
                        <h6 className='text-[#BDBDBD]'>Shop</h6>
                    </div>
                </div>
            </div>

            <div className='flex mx-auto lg:flex-row lg:pb-12 lg:gap-8'>
                <div className='flex flex-col gap-4 rounded-md'>
                    <img src={selectedImage}
                        className='lg:w-[31rem] lg:h-[28rem]' />

                    <div className='flex flex-col items-center
                                lg:flex-row lg:gap-4'>
                        {product.images.map((img, index) => (
                            <img className="lg:w-24 lg:h-20"
                                key={index}
                                src={img}
                                onClick={() => setSelectedImage(img)} />
                        ))}
                    </div>
                </div>

                <div className='flex lg:flex-col'>
                    {productDetailsData.map((item, index) => (
                        <div key={index}
                            className='flex flex-col lg:h-[27.8rem]'>
                            <h4 className='font-normal text-xl leading-8 tracking-[0.2px] text-[#252B42] pb-3'>{item.h4}</h4>
                            <div className='flex gap-3 items-center pb-3'>
                                <div className='flex gap-1'>
                                    <img src={item.rates.fullStar} />
                                    <img src={item.rates.fullStar} />
                                    <img src={item.rates.fullStar} />
                                    <img src={item.rates.fullStar} />
                                    <img src={item.rates.emptyStar} />
                                </div>
                                <h6 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>{item.rates.reviews} Reviews</h6>
                            </div>
                            <h3 className='font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42] pb-2'>${item.price}</h3>
                            <div className='flex gap-1 font-bold text-sm leading-6 tracking-[0.2px] pb-6'>
                                <h6 className='text-[#737373]'>Availability : </h6>
                                <h6 className='text-[#23A6F0]'>{item.availability}</h6>
                            </div>
                            <p className='font-normal text-sm leading-5 tracking-[0.2px] text-[#858585] py-6 lg:w-[26.5rem]'>{item.desc}</p>
                            <hr className='border text-[#BDBDBD] lg:w-[26rem]'></hr>
                            <div className="flex gap-3 pt-6 pb-16">
                                <div className="w-8 h-8 border rounded-full" style={{ color: item.colors.firstColor, backgroundColor: item.colors.firstColor }}></div>
                                <div className="w-8 h-8 border rounded-full" style={{ color: item.colors.secondColor, backgroundColor: item.colors.secondColor }}></div>
                                <div className="w-8 h-8 border rounded-full" style={{ color: item.colors.thirdColor, backgroundColor: item.colors.thirdColor }}></div>
                                <div className="w-8 h-8 border rounded-full" style={{ color: item.colors.fourthColor, backgroundColor: item.colors.fourthColor }}></div>
                            </div>
                            <div className='flex gap-3'>
                                <button className='rounded-md px-5 py-3 bg-[#23A6F0] gap-2 lg:w-36 lg:h-11'>
                                    <h6 className='font-bold text-sm leading-6 teacking-[0.2px] text-center text-[#FFFFFF]'>Select Option</h6>
                                </button> {/* ⚠️ */}
                                <button className='border border-[#E8E8E8] rounded-full lg:w-10 lg:h-10'>
                                    <img className="pl-2" src='src/assets/icons/heart-black.svg' />
                                </button> {/* ⚠️ */}
                                <button className='border border-[#E8E8E8] rounded-full lg:w-10 lg:h-10'>
                                    <img className="pl-2" src='src/assets/icons/cart-black.svg' />
                                </button> {/* ⚠️ */}
                                <button className='border border-[#E8E8E8] rounded-full lg:w-10 lg:h-10'>
                                    <img className="pl-2" src='src/assets/icons/eye-black.svg' />
                                </button> {/* ⚠️ */}
                            </div>


                        </div>
                    ))}
                </div>
            </div>




        </div>





        <Clients />
        <FooterLight />
    </>
}