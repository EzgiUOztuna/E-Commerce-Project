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
                        <a className='lg:p-[0.313rem]' href='#'><img src='src/assets/icons/instagram.svg'></img></a>
                        <a className='lg:p-[0.313rem]' href='#'><img src='src/assets/icons/youtube.svg'></img></a>
                        <a className='lg:p-[0.313rem]' href='#'><img src='src/assets/icons/facebook.svg'></img></a>
                        <a className='lg:p-[0.313rem]' href='#'><img src='src/assets/icons/twitter.svg'></img></a>
                    </div>
                </div>
            </div>
            {/* RESPONSIVE - MOBİL ⚠️⚠️⚠️*/}
            <div className='lg:w-full lg:h-[3.62rem] lg:flex lg:items-center lg:justify-between lg:px-[0.625rem]'>{/*navbar-light*/}
                <h3 className='lg:font-montserrat lg:font-bold lg:text-[1.5rem] lg:leading-[2rem] lg:tracking-[0.00625rem] lg:text-[#252B42] lg:m-0'>Bandage</h3>{/*navbar-brand*/}

                <div className='lg:flex lg:flex-col'>{/*navbar-nav-middle*/}
                    <div className='lg:flex lg:gap-[0.9375rem] lg:items-center'>{/*middle-nav-links*/}
                        <a className='lg:link-style' href='#'>Home</a>{/*link*/}
                        <a className='lg:link-style lg:flex lg:gap-1' onClick={toggleDropdown}>Shop<img src="src/assets/icons/dropdown.svg"></img></a>{/*dropbtn*/}
                        <a className='lg:link-style' href='#'>About</a>{/*link*/}
                        <a className='lg:link-style' href='#'>Blog</a>{/*link*/}
                        <a className='lg:link-style' href='#'>Contact</a>{/*link*/}
                        <a className='lg:link-style' href='#'>Pages</a>{/*link*/}
                    </div>
                    {/* SHOP SEKMESİ ALTINDAKİ KUTUNUN AYARLANMASI ⚠️⚠️⚠️*/}
                    {isDropdownOpen && (
                        <div className='lg:absolute lg:top-[7.18rem] lg:left-[30rem] lg:bg-white lg:flex lg:border lg:border-[#ccc] lg:pl-7'>{/*dropdown-content*/}
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

                <div className='lg:text-[#23A6F0] lg:flex lg:items-center'>{/*navbar-nav-right*/}
                    <a href="/login" className='lg:navbar-actions'>{/*login-register*/}
                        <img src='src/assets/icons/user.svg'></img>
                        <p className='lg:text-center lg:text-[#23A6F0] lg:font-bold lg:text-[0.875rem] lg:leading-[1.5rem] lg:tracking-[0.0125rem] lg:font-montserrat'>Login / Register</p>
                    </a>
                    <a href='/search'><img className='lg:navbar-actions' src='src/assets/icons/search.svg'></img></a>{/*search*/}
                    <a href='/cart'><img className='lg:navbar-actions' src='src/assets/icons/cart.svg'></img></a>{/*cart*/}
                    <a href='/favorites'><img className='lg:navbar-actions' src='src/assets/icons/heart.svg'></img></a>{/*heart*/}

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