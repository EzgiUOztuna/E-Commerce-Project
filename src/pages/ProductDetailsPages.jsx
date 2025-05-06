import { useState } from 'react';
import { productDetailsData } from '../assets/dataStore/productDetailsData';
import Clients from '../components/Clients';
import FooterLight from '../components/FooterLight';
import SiteHeader from '../components/SiteHeader';
import { useParams } from 'react-router-dom';

export default function ProductDetailsPages() {
    const { id } = useParams();
    const product = productDetailsData.find(p => p.id === Number(id));

    if (!product) {
        return <p>Ürün bulunamadı.</p>;
    }

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

            {/* Carousel */}
            <div className='flex flex-col lg:flex-row gap-4 lg:w-[69rem] lg:mx-auto'>
                {/* Büyük Resim */}
                <div className='flex-1'>
                    <img
                        src={selectedImage}
                        alt="Selected Product"
                        className='w-full h-auto object-cover rounded-lg'
                    />
                </div>

                {/* Thumbnail'lar */}
                <div className='flex gap-3 mt-4 lg:mt-0 lg:flex-col'>
                    {product.images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Thumbnail ${index}`}
                            onClick={() => setSelectedImage(img)}
                            className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${selectedImage === img ? "border-blue-500" : "border-transparent"
                                }`}
                        />
                    ))}
                </div>
            </div>



        </div>





        <Clients />
        <FooterLight />
    </>
}