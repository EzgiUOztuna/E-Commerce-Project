import { useState } from 'react';

export default function NavBar() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return <>
        <div className='w-full'>{/*navbar-container*/}
            <div className='hidden
                            lg:flex lg:bg-[#252B42] lg:items-center lg:justify-between lg:py-0 lg:px-[0.625rem] lg:w-full lg:box-border lg:h-[3.62rem]'> {/*navbar-dark*/}
                <div className='hidden
                                lg:flex lg:w-[25.94rem] lg:h-[2.875rem] lg:gap-[0.625rem]'> {/*navbar-col-left*/}
                    <div className='lg:flex lg:w-[9.063rem] lg:h-11 lg:items-center lg:gap-[0.313rem] lg:p-[0.625rem] lg:rounded-[0.313rem]'>{/*navbar-phone*/}
                        <img className='lg:w-4 lg:h-4' src="src/assets/icons/phone.svg"></img>{/*phone-img*/}
                        <h6 className='lg:heading-6'>(225) 555-0118</h6>{/*phone-number*/}
                    </div>
                    <div className='lg:w-[16.25rem] lg:h-[2.75rem] lg:flex lg:items-center lg:gap-[0.3125rem] lg:p-[0.625rem] lg:rounded-[0.3125rem]'>{/*navbar-email*/}
                        <img className='lg:w-4 lg:h-4' src="src/assets/icons/email.svg"></img>{/*email-img*/}
                        <h6 className='lg:heading-6 lg:[13.68rem] lg:h-[1.5rem]'>michelle.rivera@example.com</h6>{/*email-address*/}
                    </div>
                </div>

                <div className='lg:w-[20.75rem] lg:h-[2.75rem] lg:flex lg:items-center lg:gap-[0.625rem]'>{/*navbar-col-middle*/}
                    <h6 className='lg:heading-6'>Follow Us  and get a chance to win 80% off</h6>
                </div>

                <div className='lg:flex lg:gap-[0.625rem] lg:items-center lg:justify-center'>{/*navbar-col-right*/}
                    <h6 className='lg:heading-6'>Follow Us : </h6>
                    <div className='lg:flex lg:items-center lg:gap-[0.625rem]'>{/*social-media*/}
                        <a className='lg:p-[0.313rem]' href='/instagram'><img src='src/assets/icons/instagram.svg'></img></a>
                        <a className='lg:p-[0.313rem]' href='/youtube'><img src='src/assets/icons/youtube.svg'></img></a>
                        <a className='lg:p-[0.313rem]' href='/facebook'><img src='src/assets/icons/facebook.svg'></img></a>
                        <a className='lg:p-[0.313rem]' href='/twitter'><img src='src/assets/icons/twitter.svg'></img></a>
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap h-[33rem] px-6
                            lg:w-full lg:h-[3.62rem] lg:flex lg:flex-nowrap lg:items-center lg:justify-between '>{/*navbar-light*/}
                <h3 className='w-1/2 order-1 font-montserrat font-bold text-[1.5rem] leading-[2rem] tracking-[0.00625rem]text-[#252B42] m-0 flex items-center lg:oder-1 lg:w-[11.68rem]'>Bandage</h3>{/*navbar-brand*/}

                <div className='w-full order-3
                                lg:flex lg:flex-col lg:order-2 items-center'>{/*navbar-nav-middle*/}
                    <div className='flex flex-col gap-[1.875rem]
                                    lg:flex lg:flex-row lg:gap-[0.9375rem] lg:items-center'>{/*middle-nav-links*/}
                        <a className='middle-nav-links
                                    lg:link-style' href='/home'>Home</a>{/*link*/}
                        <a className='middle-nav-links
                                    lg:hidden' href='/products'>Product</a>{/*link*/}
                        <a className='middle-nav-links
                                    lg:hidden' href='/price'>Pricing</a>{/*link*/}
                        <a className='hidden
                                    lg:link-style lg:flex lg:gap-1' onClick={toggleDropdown}>Shop<img src="src/assets/icons/dropdown.svg"></img></a>{/*dropbtn*/}
                        <a className='hidden
                                    lg:block lg:link-style' href='/about'>About</a>{/*link*/}
                        <a className='hidden
                                    lg:block lg:link-style' href='/blog'>Blog</a>{/*link*/}
                        <a className='middle-nav-links
                                    lg:link-style' href='/contact'>Contact</a>{/*link*/}
                        <a className='hidden
                                    lg:block lg:link-style' href='/pages'>Pages</a>{/*link*/}
                    </div>
                    {/* SHOP SEKMESİ ALTINDAKİ KUTUNUN AYARLANMASI ⚠️⚠️⚠️*/}
                    {isDropdownOpen && (
                        <div className='hidden
                                        lg:absolute lg:top-[7.18rem] lg:left-[32rem] lg:bg-white lg:flex lg:border lg:border-none lg:pl-7 lg:pt-4'>{/*dropdown-content*/}
                            <ul className='lg:list-none lg:w-[11.62rem]'>{/*female*/}
                                <p className='lg:gender-header'>Kadın</p>{/*female-header*/}
                                <li><a className='lg:link-style lg:flex lg:pt-2 lg:pb-4' href="#">Bags</a></li>
                                <li><a className='lg:link-style lg:flex lg:pt-2 lg:pb-4' href="#">Belts</a></li>
                                <li><a className='lg:link-style lg:flex lg:pt-2 lg:pb-4' href="#">Belts</a></li>
                                <li><a className='lg:link-style lg:flex lg:pt-2 lg:pb-4' href="#">Cosmetics</a></li>
                                <li><a className='lg:link-style lg:flex lg:pt-2 lg:pb-4' href="#">Bags</a></li>
                                <li><a className='lg:link-style lg:flex lg:pt-2 lg:pb-4' href="#">Hats</a></li>
                            </ul>
                            <ul className='lg:w-[11.62rem]'>{/*male*/}
                                <p className='lg:gender-header'>Erkek</p>{/*male-header*/}
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
                                lg:text-[#23A6F0] lg:gap-0 lg:order-3 lg:max-w-[19.06rem]'>{/*navbar-nav-right*/}
                    <a href="/login" className='lg:navbar-actions'>{/*login-register*/}
                        <img className='hidden lg:block' src='src/assets/icons/user.svg'></img>
                        <img className='block lg:hidden' src='src/assets/icons/user-mobile.svg'></img>
                        <p className='hidden
                                    lg:block lg:text-center lg:text-[#23A6F0] lg:font-bold lg:text-[0.875rem] lg:leading-[1.5rem] lg:tracking-[0.0125rem] lg:font-montserrat'>Login / Register</p>
                    </a>
                    <a href='/search'><img className='hidden lg:navbar-actions' src='src/assets/icons/search.svg'></img></a>{/*search*/}
                    <a href='/search'><img className='block lg:hidden' src='src/assets/icons/search-mobile.svg'></img></a>

                    <a href='/cart'><img className='hidden lg:navbar-actions' src='src/assets/icons/cart.svg'></img></a>{/*cart*/}
                    <a href='/cart'><img className='block lg:hidden' src='src/assets/icons/cart-mobile.svg'></img></a>

                    <a href='/favorites'><img className='hidden lg:navbar-actions' src='src/assets/icons/heart.svg'></img></a>{/*heart*/}
                    <a href='/menu'><img className='block lg:hidden' src='src/assets/icons/hamburger.svg'></img></a>{/*hamburger*/}
                </div>


            </div>

        </div >

    </>
}

/*
- NavBar
    - NavBar 1
    - NavBar 2 
*/