import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import PageContent from "../layouts/PageContent";

export default function HomePages() {
    return (
        <>
            <Header />
            <PageContent />
            <Footer />
        </>
    )
}


/*
 Desktop 1
    # Header ✅
        * NavBar ✅
            - NavBar 1 ~dosyada yapılacak, ayrı bir klasöre gerek yok.
            - NavBar 2 ~dosyada yapılacak, ayrı bir klasöre gerek yok.
        * ContainerShop ✅
    # PageContents ✅
        * Clients 𑑛
        * ShopCards ✅
        * ProductCards ✅
        * Content ✅
        * Features ✅
        * FeaturedPosts ✅
        * Blog 𑑛
    # Footer 
        * FooterRowFirst ~dosyada yapılacak, ayrı bir klasöre gerek yok. ✅
        * FooterRowSecond ~dosyada yapılacak, ayrı bir klasöre gerek yok.
        * FooterRowThird ~dosyada yapılacak, ayrı bir klasöre gerek yok.
*/