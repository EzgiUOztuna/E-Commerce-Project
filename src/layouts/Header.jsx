import ContainerShop from "../components/ContainerShop";
import NavBar from "../components/NavBar";

export default function Header() {
    return (
        <>
            {/*<div>Header</div>*/}
            <NavBar />
            <ContainerShop />
            <br></br>
        </>
    )
}

/*
 Desktop 
    # Header
        - NavBar ✅
            - NavBar 1
            - NavBar 2
        - ContainerShop ✅
 */