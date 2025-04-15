import { useState } from 'react';
import { carouselData } from '../assets/data';
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
        <div className='carousels'>
            {carouselData.map((item, index) => (
                <div key={index}
                    className={`carousel-slide ${currentIndex === index ? 'active' : 'hidden'}`}
                    style={{
                        backgroundImage: `url(${item.bgImage})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }} >
                    <button className="control-prev" onClick={handlePrev}>
                        <img src='src/assets/carousel-control-prev.svg'></img>
                    </button>
                    <button className="control-next" onClick={handleNext}>
                        <img src='src/assets/carousel-control-next.svg'></img>
                    </button>
                    <div className='inner-container'>
                        <h5>{item.h5}</h5>
                        <h1>{item.h1}</h1>
                        <h4>{item.h4}</h4>
                        <button><h3>{item.h3}</h3></button>
                    </div>
                </div>
            ))}




        </div >
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