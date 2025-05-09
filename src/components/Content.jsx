import { useState } from 'react';
import { contentPageCarouselData } from '../../public/dataStore/contentPageCarouselData';

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
                            h-[76.875rem] bg-cover bg-no-repeat
                            lg:h-[44.313rem]
                            xl:h-[50rem]
                        `} style={{
                    backgroundImage: `url(${window.innerWidth >= 1024 ? item.bgImage : item.mobileImage})`
                }}>
                <button className="w-6 h-[2.78rem] top-[35rem] left-8 relative bg-transparent border-none
                                   lg:top-[22rem] lg:left-[2%] lg:cursor-pointer
                                   xl:top-[27rem]" onClick={handlePrev}>
                    <img src='public/icons/carousel-control-prev.svg'></img>
                </button>
                <div className='font-montserrat text-[#FFFFFF] flex flex-col items-center gap-[2.18rem] pt-[8rem]
                                lg:w-[37.44rem] lg:h-[20.68rem] lg:items-start lg:gap-9 lg:pt-28 lg:pb-28 lg:ml-[12.5rem]
                                xl:pt-[13rem] xl:ml-[15rem]'>
                    <h4 className='font-normal text-xl leading-[1.875rem] tracking-[0.2px] m-0 
                                   '>{item.h4}</h4>
                    <h1 className='font-bold text-[2.5rem] leading-[3.125rem] tracking-[0.2px] lg:m-0 w-[16.75rem] text-center
                                   lg:w-[35.62rem] lg:text-[3.625rem] lg:leading-[5rem] lg:text-left'>{item.h1}</h1>
                    <p className='w-[18rem] font-normal text-xl leading-[1.875rem] tracking-[0.2px] m-0 text-center
                                  lg:w-[23.5rem] lg:text-sm lg:leading-[1.25rem] lg:tracking-[0.0125rem] lg:text-left'>{item.text}</p>
                    <div className="flex flex-col gap-5 font-bold
                                    lg:gap-9 lg:flex-row lg:items-center">
                        <h3 className="text-2xl leading-8 tracking-[0.1px] text-center">${item.price}</h3>
                        <button className='w-[12.4rem] h-[3.4rem] gap-[0.625rem] bg-[#2DC071] px-10 py-[0.9375rem] rounded-[0.3125rem] border-none
                                           lg:h-[3.25rem] lg:cursor-pointer'>
                            <p className='font-bold text-sm leading-6 tracking-[0.2px] text-center m-0'>{item.h3}</p>
                        </button>
                    </div>
                </div>
                <button className="relative w-6 h-[2.78rem] top-[-3rem] left-[22.5rem] bg-transparent
                                    lg:top-[-2rem] lg:left-[96%] lg:border-none lg:relative lg:cursor-pointer
                                    xl:top-[3rem]" onClick={handleNext}>
                    <img src='public/icons/carousel-control-next.svg'></img>
                </button>
            </div>
        ))}
    </>
}