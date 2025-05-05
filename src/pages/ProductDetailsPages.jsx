import Clients from '../components/Clients';
import FooterLight from '../components/FooterLight';
import SiteHeader from '../components/SiteHeader';

export default function ProductDetailsPages() {

    return <>
        <SiteHeader />
        <div className='bg-[#FAFAFA] font-montserrat py-6'>
            <div className='flex flex-col
                            lg:w-[69rem] lg:mx-auto'>
                <div className='flex items-center gap-4 py-3 font-bold text-sm leading-6 tracking-[0.2px] text-center'>
                    <a href='/home' className='text-[#252B42]'>Home</a>
                    <img src='src/assets/icons/arrow-right-icn.svg' />
                    <h6 className='text-[#BDBDBD]'>Shop</h6>
                </div>
            </div>
        </div>
        <Clients />
        <FooterLight />
    </>
}