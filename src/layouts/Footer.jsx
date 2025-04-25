export default function Footer() {
    return <>
        {/* <div>-Footer</div>; */}
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
    </>
}

/* 
 Desktop 
    # Footer
        - FooterRowFirst
        - FooterRowSecond
        - FooterRowThird
*/