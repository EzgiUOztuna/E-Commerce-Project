import { useState } from 'react';
import { carouselData } from '../assets/dataStore/carouselData';

export default function ContainerShop() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = carouselData.length;

    const handlePrev = () => {
        setCurrentIndex(prev => (prev - 1 + totalSlides) % totalSlides);
    };

    const handleNext = () => {
        setCurrentIndex(prev => (prev + 1) % totalSlides);
    };


    return <>
        {carouselData.map((item, index) => (
            <div key={index}
                className={`${currentIndex === index ? 'block' : 'hidden'}
                            lg:bg-cover lg:bg-no-repeat lg:h-[44.75rem]
                        `} style={{ backgroundImage: `url(${item.bgImage})` }}>
                <button className="lg:w-6 lg:h-[2.78rem] lg:top-[20rem] lg:left-[2%] lg:border-none lg:bg-transparent lg:relative lg:cursor-pointer" onClick={handlePrev}> {/*control-prev*/}
                    <img src='src/assets/icons/carousel-control-prev.svg'></img>
                </button>
                <div className='lg:w-[37.44rem] lg:h-[20.68rem] lg:flex lg:flex-col lg:gap-9 lg:pt-28 lg:pb-28 lg:ml-[12.5rem]'> {/*inner-container*/}
                    <h5 className='lg:font-montserrat lg:font-bold lg:text-base lg:leading-6 lg:tracking-[0.1px] lg:m-0 lg:text-[#FFFFFF]'>{item.h5}</h5>
                    <h1 className='lg:font-montserrat lg:font-bold lg:text-[3.625rem] lg:leading-[5rem] lg:tracking-[0.2px] lg:m-0 lg:text-[#FFFFFF]'>{item.h1}</h1>
                    <h4 className='lg:w-[23.5rem] lg:font-montserrat lg:font-normal lg:text-xl lg:leading-[1.875rem] lg:tracking-[0.0125rem] lg:text-[#FAFAFA] lg:m-0'>{item.h4}</h4>
                    <button className='lg:w-[14.25rem] lg:h-[3.875rem] lg:gap-[0.625rem] lg:pt-[0.9375rem] lg:pr-10 lg:pb-[0.9375rem] lg:pl-10 lg:rounded-[0.3125rem] lg:bg-[#2DC071] lg:border-none lg:cursor-pointer'>
                        <h3 className='lg:font-montserrat lg:font-bold lg:text-base lg:leading-8 lg:tracking-[0.00625rem] lg:text-center lg:m-0 lg:text-white'>{item.h3}</h3>
                    </button>
                </div>
                <button className="lg:w-6 lg:h-[2.78rem] lg:top-[27.5rem] lg:left-[94%] lg:border-none lg:bg-transparent lg:absolute lg:cursor-pointer " onClick={handleNext}> {/*control-prev */}
                    <img src='src/assets/icons/carousel-control-next.svg'></img>
                </button>
            </div>
        ))}
    </>
}