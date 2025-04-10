import '../CssFolders/NavBar.css';

export default function NavBar() {
    return <>
        <div className='navbar-container'>-NavBar
            <div className='navbar-dark'>
                <div className='navbar-col-left'>
                    <div className='navbar-phone'>
                        <img className='phone-img ' src="src/assets/phone.svg"></img>
                        <h6 className='phone-number'>(225) 555-0118</h6>
                    </div>
                    <div className='navbar-email'>
                        <img className='email-img ' src="src/assets/email.svg"></img>
                        <h6 className='email-address'>michelle.rivera@example.com</h6>
                    </div>
                </div>

                <div className='navbar-col-middle'>
                    <h6>Follow Us  and get a chance to win 80% off</h6>
                </div>

                <div className='navbar-col-right'>
                    <h6>Follow Us : </h6>
                    <div className='social-media'>
                        <a><img src='src/assets/instagram.svg'></img></a>
                        <a><img src='src/assets/youtube.svg'></img></a>
                        <a><img src='src/assets/facebook.svg'></img></a>
                        <a><img src='src/assets/twitter.svg'></img></a>
                    </div>
                </div>

            </div>

            <div className='navbar-light'>

            </div>

        </div>

    </>
}

/*
- NavBar
    - NavBar 1
    - NavBar 2 
*/