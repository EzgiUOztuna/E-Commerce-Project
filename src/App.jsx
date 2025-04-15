import HomePages from './pages/HomePages'
import InnerPages from './pages/InnerPages'
import ProductDetailsPages from './pages/ProductDetailsPages'
import ShopPages from './pages/ShopPages'

function App() {

  return (
    <>
      <HomePages />
      <ShopPages />
      <ProductDetailsPages />
      <InnerPages />
      <div className="!bg-blue-500 text-white p-4 rounded">
        Tailwind çalışıyor!
      </div>
    </>
  )
}

export default App
