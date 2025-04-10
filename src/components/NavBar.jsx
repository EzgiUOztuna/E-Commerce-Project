import { useState } from 'react';
import '../CssFolders/NavBar.css';

export default function NavBar() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return <>
        <div className='navbar-container'>-NavBar
            <div className='navbar-dark'>
                <div className='navbar-col-left'>
                    <div className='navbar-phone'>
                        <img className='phone-img ' src="src/assets/phone.svg"></img>
                        <h6 className='phone-number'>(225) 555-0118</h6>
                    </div>
                    <div className='navbar-email'>
                        <img className='email-img' src="src/assets/email.svg"></img>
                        <h6 className='email-address'>michelle.rivera@example.com</h6>
                    </div>
                </div>

                <div className='navbar-col-middle'>
                    <h6>Follow Us  and get a chance to win 80% off</h6>
                </div>

                <div className='navbar-col-right'>
                    <h6>Follow Us : </h6>
                    <div className='social-media'>
                        <a href='#'><img src='src/assets/instagram.svg'></img></a>
                        <a href='#'><img src='src/assets/youtube.svg'></img></a>
                        <a href='#'><img src='src/assets/facebook.svg'></img></a>
                        <a href='#'><img src='src/assets/twitter.svg'></img></a>
                    </div>
                </div>
            </div>

            <div className='navbar-light'>
                <h3 className='navbar-brand'>Bandage</h3>

                <div className='navbar-nav-middle'>
                    <div className='middle-nav-links'>
                        <a className='link' href='#'>Home</a>
                        <a className='dropbtn' onClick={toggleDropdown}>Shop <img className='dropdown-icon' src="src/assets/dropdown.svg"></img></a>
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

                </div>


            </div>

        </div>

    </>
}

/*
- NavBar
    - NavBar 1
    - NavBar 2 
*/