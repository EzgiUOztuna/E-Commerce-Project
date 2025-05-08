import FooterLight from '../components/FooterLight';
export default function ContactPage() {
    return <>
        <div className='flex flex-wrap px-6 font-montserrat items-center bg-[#F6F6F6]
                            lg:w-[73.5rem]  lg:flex lg:flex-nowrap lg:items-center lg:justify-between lg:mx-auto lg:pt-10 lg:bg-[#FFFFFF]'>
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
        <FooterLight />
    </>
};