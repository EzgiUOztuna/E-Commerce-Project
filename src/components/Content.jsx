import { useState } from 'react';
import { contentPageCarouselData } from '../assets/dataStore/contentPageCarouselData';

export default function Content() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = contentPageCarouselData.length;

    const handlePrev = () => {
        setCurrentIndex(prev => (prev - 1 + totalSlides) % totalSlides);
    };

    const handleNext = () => {
        setCurrentIndex(prev => (prev + 1) % totalSlides);
    };

    return <>
        {/*<div>-Content</div>;*/}
        {contentPageCarouselData.map((item, index) => (
            <div key={index}
                className={`${currentIndex === index ? 'block' : 'hidden'}
                            h-[753px] bg-cover bg-no-repeat
                            lg:h-[709px] 
                        `} style={{
                    backgroundImage: `url(${item.bgImage})`
                }}>
                <button className="w-6 h-[2.78rem] top-[20rem] left-8 relative bg-transparent border-none
                                   lg:top-[20rem] lg:left-[2%] lg:cursor-pointer" onClick={handlePrev}>
                    <img src='src/assets/icons/carousel-control-prev.svg'></img>
                </button>
                <div className='font-montserrat flex flex-col items-center gap-[2.18rem] pt-[8rem]
                                lg:w-[37.44rem] lg:h-[20.68rem] lg:items-start lg:gap-9 lg:pt-28 lg:pb-28 lg:ml-[12.5rem]'> {/*inner-container*/}
                    <h4 className='font-normal text-xl leading-[1.875rem] tracking-[0.2px] m-0 text-[#FFFFFF]
                                   '>{item.h4}</h4>
                    <h1 className='font-bold text-4xl leading-[3.125rem] tracking-[0.2px] lg:m-0 text-[#FFFFFF] w-[16.75rem] text-center
                                   lg:text-[3.625rem] lg:leading-[5rem] lg:w-[35.62rem] lg:text-left'>{item.h1}</h1>
                    <h4 className='w-[13rem] font-normal text-sm leading-[1.875rem] tracking-[0.2px] text-center text-[#FAFAFA] m-0
                                    lg:w-[23.5rem] lg:text-xl lg:leading-[1.875rem] lg:tracking-[0.0125rem]'>{item.h4}</h4>
                    <button className='w-[13.813rem] h-[3.875rem] gap-[0.625rem] bg-[#2DC071] prx-10 rounded-[0.3125rem] border-none
                                      lg:w-[14.25rem] lg:pt-[0.9375rem] lg:pb-[0.9375rem] lg:cursor-pointer'>
                        <h3 className='font-bold text-base leading-8 tracking-[0.00625rem] text-center m-0 text-white'>{item.h3}</h3>
                    </button>
                </div>
                <button className="absolute w-6 h-[2.78rem] top-[52rem] left-[22.5rem]
                                    lg:top-[27.5rem] lg:left-[94%] lg:border-none lg:bg-transparent lg:absolute lg:cursor-pointer " onClick={handleNext}> {/*control-next */}
                    <img src='src/assets/icons/carousel-control-next.svg'></img>
                </button>
            </div>
        ))}
    </>
}