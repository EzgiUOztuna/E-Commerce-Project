import { useState } from 'react';
import { carouselData } from '../assets/dataStore/carouselData';
import '../CssFolders/ContainerShop.css';
//import ExampleCarouselImage from './subcomponents/ExampleCarouselImage.jsx';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Carousel } from 'react-bootstrap';
//import img1 from "../assets/carousel1.svg";
//import img2 from "../assets/carousel1.svg";
//import img3 from "../assets/carousel1.svg";

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
                <button className="lg:w-6 lg:h-[2.78rem] lg:top-[20rem] lg:left-[2%] lg:border-none lg:bg-transparent lg:relative lg:cursor-pointer" onClick={handlePrev}> {/*control-prev */}
                    <img src='src/assets/icons/carousel-control-prev.svg'></img>
                </button>
                <div className='inner-container'>
                    <h5>{item.h5}</h5>
                    <h1>{item.h1}</h1>
                    <h4>{item.h4}</h4>
                    <button><h3>{item.h3}</h3></button>
                </div>
                <button className="lg:w-6 lg:h-[2.78rem] lg:top-[27.5rem] lg:left-[94%] lg:border-none lg:bg-transparent lg:absolute lg:cursor-pointer " onClick={handleNext}> {/*control-prev */}
                    <img src='src/assets/icons/carousel-control-next.svg'></img>
                </button>
            </div>
        ))}
    </>
}






/*
<Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <ExampleCarouselImage src={img1} text="First slide" />
                <Carousel.Caption>
                    <h5>SUMMER 2020</h5>
                    <h1>NEW COLLECTION</h1>
                    <h4>We know how large objects will act,
                        but things on a small scale.</h4>
                    <button><h3>SHOP NOW</h3></button>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <ExampleCarouselImage src={img2} text="Second slide" />
                <Carousel.Caption >
                    <h5>SUMMER 2020</h5>
                    <h1>NEW COLLECTION</h1>
                    <h4>We know how large objects will act,
                        but things on a small scale.</h4>
                    <button><h3>SHOP NOW</h3></button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage src={img3} text="Third slide" />
                <Carousel.Caption>
                    <h5>SUMMER 2020</h5>
                    <h1>NEW COLLECTION</h1>
                    <h4>We know how large objects will act,
                        but things on a small scale.</h4>
                    <button><h3>SHOP NOW</h3></button>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
*/