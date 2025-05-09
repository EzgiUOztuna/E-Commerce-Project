import { Link } from 'react-router-dom';
import FooterLight from '../components/FooterLight';
import InnerPageHeader from './InnerPageHeader';
export default function ContactPage() {
    return <>
        <div className='font-montserrat lg:bg-[url("public/images/contactPageImg/background.png")] lg:bg-no-repeat lg:h-[882px]
                        xl:bg-cover'>
            <InnerPageHeader />
            <div className='flex gap-8 py-8 lg:py-28 lg:items-start '>
                <div className='flex flex-col gap-10 mx-auto w-[27rem]
                                lg:w-[37.5rem] lg:gap-9'>
                    <h5 className='font-bold text-base leading-6 tracking-[0.1px] text-[#252B42] text-center  mx-auto
                                   lg:text-left lg:w-[23.125rem]'>CONTACT US</h5>
                    <h1 className='font-bold text-[2.5rem] leading-[3.125rem] tracking-[0.2px] text-[#252B42] text-center w-[380px] mx-auto
                                   lg:text-left lg:w-[23.625rem] lg:text-[3.625rem] lg:leading-[5rem]'>Get in touch today!</h1>


                    <h4 className='font-normal text-xl leading-8 tracking-[0.2px] text-[#737373] text-center w-[17rem] mx-auto
                                   lg:text-left lg:w-[23rem]'>We know how large objects will act, but things on a small scale</h4>


                    <div className='flex flex-col gap-4 font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42] text-center mx-auto
                                    lg:text-left lg:w-[23.125rem]'>
                        <h3>Phone : +451 215 215</h3>
                        <h3>Fax : +451 215 215</h3>
                    </div>
                    <div className='flex items-center gap-8 mx-auto p-3
                                    lg:w-[24.375rem]'>
                        <img src='public/icons/logos_twitter.svg' />
                        <img src='public/icons/logos_facebook.svg' />
                        <img src='public/icons/logos_instagram.svg' />
                        <img src='public/icons/logos_linkedin.svg' />
                    </div>
                    <img className='block lg:hidden' src='public/images/contactPageImg/background-mobile.png' />
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
                <Link to="/contact"
                    className='hover-contact-mobile-div 
                              lg:hover-contact-div'>
                    <img src='public/icons/phone-icn-contact-page.svg' />
                    <div className='text-sm leading-6 tracking-[0.2px] '>
                        <h6>georgia.young@example.com</h6>
                        <h6>georgia.young@ple.com</h6>
                    </div>
                    <h5 className='text-base leading-6 tracking-[0.1px]'>Get Support</h5>
                    <button className='border border-[#23A6F0] py-4 px-9 flex gap-3 rounded-[2.313rem]
                                       lg:w-52 lg:h-14'>
                        <h6 className='text-sm leading-6 tracking-[0.2px] text-center text-[#23A6F0]'>Submit Request</h6></button> {/* ⚠️ */}
                </Link>
                <Link to='/location'
                    className='hover-contact-mobile-div 
                               lg:hover-contact-div'>
                    <img src='public/icons/location-icn-contact-page.svg' />
                    <div className='text-sm leading-6 tracking-[0.2px] '>
                        <h6>georgia.young@example.com</h6>
                        <h6>georgia.young@ple.com</h6>
                    </div>
                    <h5 className='text-base leading-6 tracking-[0.1px]'>Get Support</h5>
                    <button className='border border-[#23A6F0] py-4 px-9 flex gap-3 rounded-[2.313rem]
                                       lg:w-52 lg:h-14'>
                        <h6 className='text-sm leading-6 tracking-[0.2px] text-center text-[#23A6F0]'>Submit Request</h6></button> {/* ⚠️ */}
                </Link>
                <Link to='/support'
                    className='hover-contact-mobile-div 
                              lg:hover-contact-div'>
                    <img src='public/icons/mail-icn-contact-page.svg' />
                    <div className='text-sm leading-6 tracking-[0.2px] '>
                        <h6>georgia.young@example.com</h6>
                        <h6>georgia.young@ple.com</h6>
                    </div>
                    <h5 className='text-base leading-6 tracking-[0.1px]'>Get Support</h5>
                    <button className='border border-[#23A6F0] py-4 px-9 flex gap-3 rounded-[2.313rem]
                                       lg:w-52 lg:h-14'>
                        <h6 className='text-sm leading-6 tracking-[0.2px] text-center text-[#23A6F0]'>Submit Request</h6></button> {/* ⚠️ */}
                </Link>
            </div>
        </div>


        <img className="mx-auto pt-8 pb-6 lg:pt-0" src='public/icons/Arrow-curve.svg' />
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