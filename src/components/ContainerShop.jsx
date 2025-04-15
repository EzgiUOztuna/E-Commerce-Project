import '../CssFolders/ContainerShop.css';

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
}