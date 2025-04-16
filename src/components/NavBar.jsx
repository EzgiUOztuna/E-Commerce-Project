import { useState } from 'react';
import '../CssFolders/NavBar.css';


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

            <div className='lg:w-full lg:h-[3.62rem] lg:flex lg:items-center lg:justify-between lg:px-[0.625rem]'>{/*navbar-light*/}
                <h3 className='navbar-brand'>Bandage</h3>

                <div className='navbar-nav-middle'>
                    <div className='middle-nav-links'>
                        <a className='link' href='#'>Home</a>
                        <a className='dropbtn' onClick={toggleDropdown}>Shop <img className='dropdown-icon' src="src/assets/icons/dropdown.svg"></img></a>
                        <a className='link' href='#'>About</a>
                        <a className='link' href='#'>Blog</a>
                        <a className='link' href='#'>Contact</a>
                        <a className='link' href='#'>Pages</a>
                    </div>

                    {isDropdownOpen && (
                        <div className='dropdown-content'>
                            <ul className='female'>
                                <p className='female-header'>Kadın</p>
                                <li><a href="#">Bags</a></li>
                                <li><a href="#">Belts</a></li>
                                <li><a href="#">Cosmetics</a></li>
                                <li><a href="#">Bags</a></li>
                                <li><a href="#">Hats</a></li>
                            </ul>
                            <ul className='male'>
                                <p className='female-header'>Erkek</p>
                                <li><a href="#">Bags</a></li>
                                <li><a href="#">Belts</a></li>
                                <li><a href="#">Cosmetics</a></li>
                                <li><a href="#">Bags</a></li>
                                <li><a href="#">Hats</a></li>
                            </ul>
                        </div>
                    )}
                </div>

                <div className='navbar-nav-right'>
                    <a href="/login" className='login-register'>
                        <img src='src/assets/icons/user.svg'></img>
                        <p>Login / Register</p>
                    </a>
                    <a href='/search'><img className='search' src='src/assets/icons/search.svg'></img></a>
                    <a href='/cart'><img className='cart' src='src/assets/icons/cart.svg'></img></a>
                    <a href='/favorites'><img className='heart' src='src/assets/icons/heart.svg'></img></a>

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