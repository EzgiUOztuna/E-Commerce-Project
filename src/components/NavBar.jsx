import { useState } from 'react';
import '../CssFolders/NavBar.css';

export default function NavBar() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return <>
        <div className='w-full'>{/*navbar-container*/}
            <div className='navbar-dark'> {/*navbar-dark*/}
                <div className='hidden
                                lg:flex lg:w-[25.94rem] lg:h-[2.875rem] lg:gap-[0.625rem]
                                xl:flex xl:w-[25.94rem] xl:h-[2.875rem] xl:gap-[0.625rem]'> {/*navbar-col-left*/}
                    <div className='hidden
                                    lg:flex lg:w-[9.063rem] lg:h-11 items-center gap-[0.313rem] p-[0.625rem] rounded-[0.313rem]'>{/*navbar-phone*/}
                        <img className='phone-img ' src="src/assets/icons/phone.svg"></img>
                        <h6 className='phone-number'>(225) 555-0118</h6>
                    </div>
                    <div className='navbar-email'>
                        <img className='email-img' src="src/assets/icons/email.svg"></img>
                        <h6 className='email-address'>michelle.rivera@example.com</h6>
                    </div>
                </div>

                <div className='navbar-col-middle'>
                    <h6>Follow Us  and get a chance to win 80% off</h6>
                </div>

                <div className='navbar-col-right'>
                    <h6>Follow Us : </h6>
                    <div className='social-media'>
                        <a href='#'><img src='src/assets/icons/instagram.svg'></img></a>
                        <a href='#'><img src='src/assets/icons/youtube.svg'></img></a>
                        <a href='#'><img src='src/assets/icons/facebook.svg'></img></a>
                        <a href='#'><img src='src/assets/icons/twitter.svg'></img></a>
                    </div>
                </div>
            </div>

            <div className='navbar-light'>
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