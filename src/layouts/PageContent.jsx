import Blog from "../components/Blog";
//import Clients from "../components/Clients";
import Content from "../components/Content";
import FeaturedPosts from "../components/FeaturedPosts";
import Features from "../components/Features";
import ProductCards from "../components/ProductCards";
import ShopCards from "../components/ShopCards";

export default function PageContent() {
    return (
        <>
            {/* <div>PageContent</div> /> */}
            {/* <Clients /> */}
            <ShopCards />
            <ProductCards />
            <Content />
            <Features />
            <FeaturedPosts />
            {/*<Blog />*/}
            <br></br>
        </>
    )
}

/* 
 Desktop 
    # PageContent
        * Clients 𑑛
        * ShopCards ✅
        * ProductCards ✅
        * Content ✅
        * Features ✅
        * FeaturedPosts ✅
        * Blog 𑑛
*/