export default function Footer() {
    return <>
        {/* <div>-Footer</div>; */}
        <div className="flex flex-col font-montserrat">
            <div className="bg-[#FAFAFA] font-montserrat  
                        lg:h-36 ">
                <div className="flex flex-col mx-auto py-10 justify-between w-[20rem] gap-3 
                            lg:flex-row lg:items-center  lg:w-[70rem] lg:gap-[36.125rem]">
                    <h3 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42]">Bandage</h3>
                    <div className="flex items-center gap-5">
                        <a href="/facebook"><img className="text-black" src="src/assets/icons/facebook-blue.svg" /></a>
                        <a href="/facebook"><img className="text-black" src="src/assets/icons/instagram-blue.svg" /></a>
                        <a href="/facebook"><img className="text-black" src="src/assets/icons/twitter-blue.svg" /></a>
                    </div>
                </div>
            </div>

            <div className="py-[70px] lg:py-12">
                <div className="flex flex-col gap-8 justify-between mx-auto font-bold w-[20rem]
                                lg:flex-row lg:w-[70rem]">
                    <div className="flex flex-col gap-5">
                        <h5 className="text-feature-title">Company Info</h5>
                        <a className="link-feature" href="/about">About Us</a>
                        <a className="link-feature" href="/carrier">Carrier</a>
                        <a className="link-feature" href="/hiring">We are hiring</a>
                        <a className="link-feature" href="/blog">Blog</a>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h5 className="text-feature-title">Legal</h5>
                        <a className="link-feature" href="/about">About Us</a>
                        <a className="link-feature" href="/carrier">Carrier</a>
                        <a className="link-feature" href="/hiring">We are hiring</a>
                        <a className="link-feature" href="/blog">Blog</a>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h5 className="text-feature-title">Features</h5>
                        <a className="link-feature" href="/market">Business Marketing</a>
                        <a className="link-feature" href="/analytic">User Analytic</a>
                        <a className="link-feature" href="/chat">Live Chat</a>
                        <a className="link-feature" href="/support">Unlimited Support</a>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h5 className="text-feature-title">Resources</h5>
                        <a className="link-feature" href="/software">IOS & Android</a>
                        <a className="link-feature" href="/demo">Watch a Demo</a>
                        <a className="link-feature" href="/customer">Customers</a>
                        <a className="link-feature" href="/api">API</a>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h5 className="text-feature-title">Get In Touch</h5>
                        <form>
                            <input className="bg-[#F9F9F9] border border-[#E6E6E6] rounded-tl-md rounded-bl-md text-[#737373] font-normal pl-2 text-xs placeholder:text-sm placeholder:font-normal placeholder:pl-2 placeholder:leading-7 placeholder:tracking-[0.2px] placeholder:text-[#737373] h-[3.63rem] w-[195px]"
                                type="text"
                                placeholder="Your Email"
                                name="name" />
                            <input className="border border-[#23A6F0] bg-[#23A6F0] text-[#FFFFFF] rounded-tr-md rounded-br-md cursor-pointer font-normal text-sm leading-7 tracking-[0.2px] text-center w-[7.32rem] h-[3.63rem]"
                                type="submit"
                                value="Subscribe"></input>
                        </form>
                    </div>
                </div>

            </div>

            <div className="bg-[#FAFAFA] lg:h-20">
                <div className="mx-auto py-6 w-[12.5rem] lg:w-[70rem]">
                    <h6 className="text-center font-bold text-sm leading-6 tracking-[0.2px] text-[#737373] lg:text-left">Made With Love By Finland All Right Reserved </h6>
                </div>
            </div>
        </div>
    </>
}

/* 
 Desktop 
    # Footer
        - FooterRowFirst
        - FooterRowSecond
        - FooterRowThird
*/