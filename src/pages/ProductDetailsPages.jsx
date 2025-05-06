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




        </div>





        <Clients />
        <FooterLight />
    </>
}