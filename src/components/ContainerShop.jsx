import { useState } from 'react';
import ExampleCarouselImage from '../components/ExampleCarouselImage.jsx';
import { Carousel } from 'react-bootstrap';
import img1 from "../assets/carousel1.svg";
import img2 from "../assets/carousel1.svg";
import img3 from "../assets/carousel1.svg";

function ContainerShop() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
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
                <ExampleCarouselImage src={img1} text="Second slide" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage src={img1} text="Third slide" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ContainerShop;




/*import '../CssFolders/ContainerShop.css';

export default function ContainerShop() {
    return <>
        <div className="carousel">
            <button className="control-prev"><img src='src/assets/carousel-control-prev.svg'></img></button>
            <button className="control-next"><img src='src/assets/carousel-control-next.svg'></img></button>
            <div className='inner-container'>
                <h5>SUMMER 2020</h5>
                <h1>NEW COLLECTION</h1>
                <h4>We know how large objects will act,
                    but things on a small scale.</h4>
                <button><h3>SHOP NOW</h3></button>
            </div>
        </div>
    </>
}*/