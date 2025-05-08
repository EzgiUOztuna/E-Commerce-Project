import FooterLight from '../components/FooterLight';
export default function ContactPage() {
    return <>
        <div className='font-montserrat lg:bg-[url("src/assets/images/contactPageImg/background.png")] lg:bg-no-repeat lg:h-[882px]
                        xl:bg-cover'>
            <div className='flex flex-wrap px-6 items-center bg-[#F6F6F6] h-[33.25rem]
                            lg:w-[73.5rem] lg:flex lg:flex-nowrap lg:items-center lg:h-[5rem] lg:justify-between lg:mx-auto lg:pt-4 lg:bg-[#FFFFFF]'>
                <h3 className='w-1/2 order-1 font-bold text-[1.5rem] leading-[2rem] tracking-[0.00625rem]text-[#252B42] m-0 flex items-center lg:oder-1 lg:w-[11.68rem]'>Bandage</h3>

                <div className='w-full order-3
                                lg:flex lg:flex-col lg:order-2 lg:items-center lg:w-[30rem]'>
                    <div className='flex flex-col gap-[1.875rem]
                                    lg:flex lg:flex-row lg:gap-[0.9375rem] lg:items-center'>
                        <a className='middle-nav-links
                                    lg:link-style' href='/home'>Home</a>
                        <a className='middle-nav-links
                                  lg:link-style' href='/products'>Product</a>
                        <a className='middle-nav-links
                                  lg:link-style' href='/price'>Pricing</a>
                        <a className='middle-nav-links
                                  lg:link-style' href='/contact'>Contact</a>
                    </div>
                </div>

                <div className='w-1/2 order-2 flex items-center justify-between
                                lg:text-[#23A6F0] lg:gap-11 lg:order-3 lg:w-80'>
                    <a href="/login" className='lg:navbar-actions'>
                        <p className='hidden
                                  lg:flex lg:text-center lg:text-[#23A6F0] lg:font-bold lg:text-[0.875rem] lg:leading-[1.5rem] lg:tracking-[0.0125rem] lg:w-10 lg:h-6'>Login</p>
                    </a>
                    <button className="hidden
                   lg:flex lg:w-56 lg:h-14 lg:items-center lg:justify-center
                   lg:border lg:border-[#23A6F0] lg:bg-[#23A6F0] lg:rounded">
                        <p className="text-white font-bold text-sm leading-6 tracking-[0.2px]">Become a member</p>
                        <img className="w-3 h-3 ml-2" src="src/assets/icons/arrow-right.svg" alt="Arrow Right" />
                    </button>


                    <div className="flex lg:hidden gap-4">
                        <a href='/search'><img className='w-6 h-6' src='src/assets/icons/search-mobile.svg' alt="Search" /></a>
                        <a href='/cart'><img className='w-6 h-6' src='src/assets/icons/cart-mobile.svg' alt="Cart" /></a>
                        <a href='/menu'><img className='w-6 h-6' src='src/assets/icons/hamburger.svg' alt="Menu" /></a>
                    </div>
                </div>
            </div>


            <div className='flex gap-8 py-8 lg:py-28 lg:items-start '>
                <div className='flex flex-col gap-10 mx-auto w-[27rem]
                                lg:w-[37.5rem] lg:gap-9'>
                    <h5 className='font-bold text-base leading-6 tracking-[0.1px] text-[#252B42] text-center  mx-auto
                                   lg:text-left lg:w-[23.125rem]'>CONTACT US</h5>
                    <h1 className='font-bold text-[2.5rem] leading-[3.125rem] tracking-[0.2px] text-[#252B42] text-center w-[380px] mx-auto
                                   lg:text-left lg:w-[23.625rem] lg:text-[3.625rem] lg:leading-[5rem]'>Get in touch today!</h1>
                    <h4 className='font-normal text-xl leading-8 tracking-[0.2px] text-[#737373] text-center w-[5rem] mx-auto
                                   lg:text-left lg:w-[23rem]'>We know how large objects will act, but things on a small scale</h4>
                    <div className='flex flex-col gap-4 font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42] text-center mx-auto
                                    lg:text-left lg:w-[23.125rem]'>
                        <h3>Phone ; +451 215 215</h3>
                        <h3>Fax : +451 215 215</h3>
                    </div>
                    <div className='flex items-center gap-8 mx-auto 
                                    lg:p-3 lg:w-[24.375rem]'>
                        <img src='src/assets/icons/logos_twitter.svg' />
                        <img src='src/assets/icons/logos_facebook.svg' />
                        <img src='src/assets/icons/logos_instagram.svg' />
                        <img src='src/assets/icons/logos_linkedin.svg' />
                    </div>
                    <img className='block lg:hidden' src='src/assets/images/contactPageImg/background-mobile.png' />
                </div>
                <div className='hidden lg:block lg:w-[31rem] xl:w-[45.5rem]'></div>
            </div>
        </div>


        <div className='flex flex-col font-montserrat font-bold mx-auto bg-[#FAFAFA] py-11 gap-14
                        lg:pt-28 lg:pb-16 lg:gap-20 lg:bg-[#FFFFFF] '>
            <div className='flex flex-col gap-2 text-[#252B42] mx-auto text-center lg:w-[40rem]'>
                <h6 className='text-sm leading-6 tracking-[0.2px]'>VISIT OUR OFFICE</h6>
                <h2 className='w-[19rem] text-[2.5rem] leading-[3.125rem] tracking-[0.2px] mx-auto lg:w-[33rem]'>We help small businesses with big ideas</h2>
            </div>
            <div className='flex flex-col text-center mx-auto gap-7
                            lg:flex-row lg:gap-0 '>
                <a href='/contact'
                    className='hover-contact-mobile-div 
                              lg:hover-contact-div'>
                    <img src='src/assets/icons/phone-icn-contact-page.svg' />
                    <div className='text-sm leading-6 tracking-[0.2px] '>
                        <h6>georgia.young@example.com</h6>
                        <h6>georgia.young@ple.com</h6>
                    </div>
                    <h5 className='text-base leading-6 tracking-[0.1px]'>Get Support</h5>
                    <button className='border border-[#23A6F0] py-4 px-9 flex gap-3 rounded-[2.313rem]
                                       lg:w-52 lg:h-14'>
                        <h6 className='text-sm leading-6 tracking-[0.2px] text-center text-[#23A6F0]'>Submit Request</h6></button> {/* ⚠️ */}
                </a>
                <a href='/location'
                    className='hover-contact-mobile-div 
                               lg:hover-contact-div'>
                    <img src='src/assets/icons/location-icn-contact-page.svg' />
                    <div className='text-sm leading-6 tracking-[0.2px] '>
                        <h6>georgia.young@example.com</h6>
                        <h6>georgia.young@ple.com</h6>
                    </div>
                    <h5 className='text-base leading-6 tracking-[0.1px]'>Get Support</h5>
                    <button className='border border-[#23A6F0] py-4 px-9 flex gap-3 rounded-[2.313rem]
                                       lg:w-52 lg:h-14'>
                        <h6 className='text-sm leading-6 tracking-[0.2px] text-center text-[#23A6F0]'>Submit Request</h6></button> {/* ⚠️ */}
                </a>
                <a href='/support'
                    className='hover-contact-mobile-div 
                              lg:hover-contact-div'>
                    <img src='src/assets/icons/mail-icn-contact-page.svg' />
                    <div className='text-sm leading-6 tracking-[0.2px] '>
                        <h6>georgia.young@example.com</h6>
                        <h6>georgia.young@ple.com</h6>
                    </div>
                    <h5 className='text-base leading-6 tracking-[0.1px]'>Get Support</h5>
                    <button className='border border-[#23A6F0] py-4 px-9 flex gap-3 rounded-[2.313rem]
                                       lg:w-52 lg:h-14'>
                        <h6 className='text-sm leading-6 tracking-[0.2px] text-center text-[#23A6F0]'>Submit Request</h6></button> {/* ⚠️ */}
                </a>
            </div>
        </div>


        <img className="mx-auto pt-8 pb-6 lg:pt-0" src='src/assets/icons/Arrow-curve.svg' />
        <div className='flex flex-col text-center font-bold items-center font-montserrat gap-9 pb-20
                            lg:gap-4'>
            <h6 className='text-base leading-6 tracking-[0.1px] text-[#252B42]'>WE Can't WAIT TO MEET YOU</h6>
            <h2 className='text-[3.625rem] leading-[5rem] tracking-[0.2px] text-[#252B42]'>Let’s Talk</h2>

            <button className='border rounded-md py-4 px-10 bg-[#23A6F0] mx-auto 
                                   lg:w-[12rem] lg:h-14'>
                <p className='text-sm leading-[1.375rem] text-[#FFFFFF] tracking-[0.2px] text-center'>Try it free now</p>
            </button> {/* ⚠️ */}
        </div>


        <FooterLight />
    </>
};