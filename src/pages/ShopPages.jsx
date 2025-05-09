import Clients from '../components/Clients';
import ShopCards2 from '../components/ShopCards2';
import ProductCards2 from '../components/ProductCards2';
import FooterLight from '../components/FooterLight';
import SiteHeader from '../components/SiteHeader';

export default function ShopPages() {

    return <>
        <SiteHeader />
        <div className='bg-[#FAFAFA] font-montserrat py-6'>
            <div className='flex flex-col items-center gap-8
                            lg:w-[69rem] lg:flex-row lg:justify-between lg:mx-auto'>
                <h3 className='font-bold text-2xl leading-8 tracking-[0.1px] text-center text-[#252B42] py-6'>Shop</h3>
                <div className='flex items-center gap-4 py-3 font-bold text-sm leading-6 tracking-[0.2px] text-center'>
                    <a href='/home' className='text-[#252B42]'>Home</a>
                    <img src='public/icons/arrow-right-icn.svg' />
                    <h6 className='text-[#BDBDBD]'>Shop</h6>
                </div>
            </div>
        </div>
        <ShopCards2 />
        <ProductCards2 />
        <Clients />
        <FooterLight />
    </>
}