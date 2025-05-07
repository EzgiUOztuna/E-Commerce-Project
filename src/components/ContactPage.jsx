export default function ContactPage() {
    return <>
        <div className='flex flex-wrap h-[33rem] px-6 font-montserrat
                            lg:w-[77rem] lg:h-[3.62rem] lg:flex lg:flex-nowrap lg:items-center lg:justify-around lg:mx-auto'>
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

            <div className='w-1/2 order-2 flex items-center justify-between gap-[0.5rem]
                                lg:text-[#23A6F0] lg:gap-11 lg:order-3 lg:max-w-[19.06rem]'>
                <a href="/login" className='lg:navbar-actions'>
                    <p className='hidden
                                  lg:block lg:text-center lg:text-[#23A6F0] lg:font-bold lg:text-[0.875rem] lg:leading-[1.5rem] lg:tracking-[0.0125rem]'>Login</p>
                </a>
                <button className="hidden
                                   lg:flex lg:border lg:border-[#23A6F0] lg:bg-[#23A6F0] lg:w-56 lg:h-14 lg:py-4 lg:px-6 lg:gap-4 lg:items-center lg:rounded">
                    <p className="text-[#FFFFFF] font-bold text-sm leading-6 tracking-[0.2px]">Become a member</p>
                    <img className="w-3 h-3" src="src/assets/icons/arrow-right .icn-xs.svg" />
                </button>

                <a href='/search'><img className='hidden lg:navbar-actions' src='src/assets/icons/search.svg'></img></a>
                <a href='/search'><img className='block lg:hidden' src='src/assets/icons/search-mobile.svg'></img></a>

                <a href='/cart'><img className='hidden lg:navbar-actions' src='src/assets/icons/cart.svg'></img></a>
                <a href='/cart'><img className='block lg:hidden' src='src/assets/icons/cart-mobile.svg'></img></a>

                <a href='/favorites'><img className='hidden lg:navbar-actions' src='src/assets/icons/heart.svg'></img></a>
                <a href='/menu'><img className='block lg:hidden' src='src/assets/icons/hamburger.svg'></img></a>
            </div>
        </div>
    </>
};