import { Routes, Route } from 'react-router-dom';
import HomePages from './pages/HomePages';
import InnerPages from './pages/InnerPages';
import ProductDetailsPages from './pages/ProductDetailsPages';
import ShopPages from './pages/ShopPages';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/shop" element={<ShopPages />} />
        <Route path="/product-detail" element={<ProductDetailsPages />} />
        {/* <Route path="/product/:id" element={<ProductDetailsPages />} /> */}
        <Route path="/inner" element={<InnerPages />} />
      </Routes>
    </>
  )
}

export default App;
