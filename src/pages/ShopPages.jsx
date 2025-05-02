import { useState } from 'react';
import Footer from '../layouts/Footer';
import Clients from '../components/Clients';
import ShopCards2 from '../components/ShopCards2';

export default function ShopPages() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return <>
        <div className='w-full font-montserrat'>
            <div className='lg:bg-[#23856D] '>
                <div className='hidden
                                lg:flex lg:items-center lg:justify-between lg:py-0 lg:w-[70rem] lg:box-border lg:gap-3 lg:mx-auto lg:h-[3.62rem]'>
                    <div className='hidden
                                lg:flex lg:w-[25.94rem] lg:h-[2.875rem] lg:gap-[0.625rem]'>
                        <div className='lg:flex lg:w-[9.063rem] lg:h-11 lg:items-center lg:gap-[0.313rem] lg:p-[0.625rem] lg:rounded-[0.313rem]'>
                            <img className='lg:w-4 lg:h-4' src="src/assets/icons/phone.svg"></img>
                            <h6 className='!font-normal lg:heading-6'>(225) 555-0118</h6>
                        </div>
                        <div className='lg:w-[16.25rem] lg:h-[2.75rem] lg:flex lg:items-center lg:gap-[0.3125rem] lg:p-[0.625rem] lg:rounded-[0.3125rem]'>
                            <img className='lg:w-4 lg:h-4' src="src/assets/icons/email.svg"></img>
                            <h6 className='!font-normal lg:heading-6 lg:[13.68rem] lg:h-[1.5rem]'>michelle.rivera@example.com</h6>
                        </div>
                    </div>

                    <div className='lg:w-[20.75rem] lg:h-[2.75rem] lg:flex lg:items-center lg:gap-[0.625rem]'>
                        <h6 className='lg:heading-6'>Follow Us  and get a chance to win 80% off</h6>
                    </div>

                    <div className='lg:flex lg:gap-[0.625rem] lg:items-center lg:justify-center lg:p-3'>
                        <h6 className='lg:heading-6'>Follow Us : </h6>
                        <div className='lg:flex lg:items-center lg:gap-[0.625rem]'>
                            <a className='lg:p-[0.313rem]' href='/instagram'><img src='src/assets/icons/instagram.svg'></img></a>
                            <a className='lg:p-[0.313rem]' href='/youtube'><img src='src/assets/icons/youtube.svg'></img></a>
                            <a className='lg:p-[0.313rem]' href='/facebook'><img src='src/assets/icons/facebook.svg'></img></a>
                            <a className='lg:p-[0.313rem]' href='/twitter'><img src='src/assets/icons/twitter.svg'></img></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap h-[33rem] px-6
                            lg:w-[78rem] lg:h-[3.62rem] lg:flex lg:flex-nowrap lg:items-center lg:justify-around lg:mx-auto'>
                <h3 className='w-1/2 order-1 font-bold text-[1.5rem] leading-[2rem] tracking-[0.00625rem]text-[#252B42] m-0 flex items-center lg:oder-1 lg:w-[11.68rem]'>Bandage</h3>

                <div className='w-full order-3
                                lg:flex lg:flex-col lg:order-2 lg:items-center lg:w-[30rem]'>
                    <div className='flex flex-col gap-[1.875rem]
                                    lg:flex lg:flex-row lg:gap-[0.9375rem] lg:items-center'>
                        <a className='middle-nav-links
                                    lg:link-style' href='/home'>Home</a>
                        <a className='middle-nav-links
                                    lg:hidden' href='/products'>Product</a>
                        <a className='middle-nav-links
                                    lg:hidden' href='/price'>Pricing</a>
                        <a className='hidden
                                    lg:link-style lg:flex lg:gap-1' onClick={toggleDropdown}>Shop<img src="src/assets/icons/dropdown.svg"></img></a>
                        <a className='hidden
                                    lg:block lg:link-style' href='/about'>About</a>
                        <a className='hidden
                                    lg:block lg:link-style' href='/blog'>Blog</a>
                        <a className='middle-nav-links
                                    lg:link-style' href='/contact'>Contact</a>
                        <a className='hidden
                                    lg:block lg:link-style' href='/pages'>Pages</a>
                    </div>
                    {/* SHOP SEKMESİ ALTINDAKİ KUTUNUN AYARLANMASI ⚠️⚠️⚠️*/}
                    {isDropdownOpen && (
                        <div className='hidden
                                        lg:absolute lg:top-[7.18rem] lg:left-[32rem] lg:bg-white lg:flex lg:border lg:border-none lg:pl-7 lg:pt-4'>
                            <ul className='lg:list-none lg:w-[11.62rem]'>
                                <p className='lg:gender-header'>Kadın</p>
                                <li><a className='lg:link-style lg:flex lg:pt-2 lg:pb-4' href="#">Bags</a></li>
                                <li><a className='lg:link-style lg:flex lg:pt-2 lg:pb-4' href="#">Belts</a></li>
                                <li><a className='lg:link-style lg:flex lg:pt-2 lg:pb-4' href="#">Belts</a></li>
                                <li><a className='lg:link-style lg:flex lg:pt-2 lg:pb-4' href="#">Cosmetics</a></li>
                                <li><a className='lg:link-style lg:flex lg:pt-2 lg:pb-4' href="#">Bags</a></li>
                                <li><a className='lg:link-style lg:flex lg:pt-2 lg:pb-4' href="#">Hats</a></li>
                            </ul>
                            <ul className='lg:w-[11.62rem]'>
                                <p className='lg:gender-header'>Erkek</p>
                                <li><a className='lg:link-style lg:flex lg:pt-2 lg:pb-4' href="#">Bags</a></li>
                                <li><a className='lg:link-style lg:flex lg:pt-2 lg:pb-4' href="#">Belts</a></li>
                                <li><a className='lg:link-style lg:flex lg:pt-2 lg:pb-4' href="#">Cosmetics</a></li>
                                <li><a className='lg:link-style lg:flex lg:pt-2 lg:pb-4' href="#">Bags</a></li>
                                <li><a className='lg:link-style lg:flex lg:pt-2 lg:pb-4' href="#">Hats</a></li>
                            </ul>
                        </div>
                    )}
                </div>

                <div className='w-1/2 order-2 flex items-center gap-[0.5rem]
                                lg:text-[#23A6F0] lg:gap-0 lg:order-3 lg:max-w-[19.06rem]'>
                    <a href="/login" className='lg:navbar-actions'>
                        <img className='hidden lg:block' src='src/assets/icons/user.svg'></img>
                        <img className='block lg:hidden' src='src/assets/icons/user-mobile.svg'></img>
                        <p className='hidden
                                    lg:block lg:text-center lg:text-[#23A6F0] lg:font-bold lg:text-[0.875rem] lg:leading-[1.5rem] lg:tracking-[0.0125rem] lg:font-montserrat'>Login / Register</p>
                    </a>
                    <a href='/search'><img className='hidden lg:navbar-actions' src='src/assets/icons/search.svg'></img></a>
                    <a href='/search'><img className='block lg:hidden' src='src/assets/icons/search-mobile.svg'></img></a>

                    <a href='/cart'><img className='hidden lg:navbar-actions' src='src/assets/icons/cart.svg'></img></a>
                    <a href='/cart'><img className='block lg:hidden' src='src/assets/icons/cart-mobile.svg'></img></a>

                    <a href='/favorites'><img className='hidden lg:navbar-actions' src='src/assets/icons/heart.svg'></img></a>
                    <a href='/menu'><img className='block lg:hidden' src='src/assets/icons/hamburger.svg'></img></a>
                </div>
            </div>
        </div >
        <div className='bg-[#FAFAFA] font-montserrat lg:h-[5.75rem] lg:py-6'>
            <div className='lg:w-[70rem] lg:flex lg:items-center lg:justify-between lg:mx-auto lg:gap-8'>
                <h3 className='font-bold text-2xl leading-8 tracking-[0.1px] text-center text-[#252B42]'>Shop</h3>
                <div className='flex gap-4 py-3 font-bold text-sm leading-6 tracking-[0.2px] text-center'>
                    <a href='/home' className='text-[#252B42]'>Home</a>
                    <img src='src/assets/icons/arrow-right-icn.svg' />
                    <h6 className='text-[#BDBDBD]'>Shop</h6>
                </div>
            </div>
        </div>
        <ShopCards2 />
        <Clients />
        <Footer />

    </>
}