import { useState } from 'react';
import { productDetailsData } from '../assets/dataStore/productDetailsData';
import Clients from '../components/Clients';
import FooterLight from '../components/FooterLight';
import SiteHeader from '../components/SiteHeader';

export default function ProductDetailsPages() {
    const product = productDetailsData[0];
    const [selectedImage, setSelectedImage] = useState(product.images[0]);

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


            <div className='flex lg:flex-row'>
                <div className='flex flex-col'>
                    <img src={selectedImage}
                        className='lg:w-[31rem] lg:h-[28rem]' />

                    <div className='flex flex-col 
                                lg:flex-row'>
                        {product.images.map((img, index) => (
                            <img className={`lg:w-24 lg:h-20
                            ${selectedImage === img ? "" : "border-transparent"}`}
                                key={index}
                                src={img}
                                onClick={() => setSelectedImage(img)} />
                        ))}
                    </div>
                </div>

                <div className='flex lg:flex-col'>

                    {productDetailsData.map((item, index) => (
                        <div key={index}
                            className='flex flex-col'>
                            <h4 className='font-normal text-xl leading-8 tracking-[0.2px] text-[#252B42]'>{item.h4}</h4>
                            <div className='flex gap-3 items-center'>
                                <div className='flex gap-1'>
                                    <img src={item.rates.fullStar} />
                                    <img src={item.rates.fullStar} />
                                    <img src={item.rates.fullStar} />
                                    <img src={item.rates.fullStar} />
                                    <img src={item.rates.emptyStar} />
                                </div>
                                <h6 className='font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]'>{item.rates.reviews} Reviews</h6>
                            </div>
                            <h3 className='font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42]'>${item.price}</h3>
                            <div className='flex gap-1 font-bold text-sm leading-6 tracking-[0.2px]'>
                                <h6 className='text-[#737373]'>Availability : </h6>
                                <h6 className='text-[#23A6F0]'>{item.availability}</h6>
                            </div>
                            <p className='font-normal text-sm leading-5 tracking-[0.2px] text-[#858585] lg:w-[26.5rem]'>{item.desc}</p>



                        </div>
                    ))}
                </div>
            </div>




        </div>





        <Clients />
        <FooterLight />
    </>
}