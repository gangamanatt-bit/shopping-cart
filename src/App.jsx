import { BrowserRouter, Routes, Route } from "react-router-dom"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import Wishlist from "./pages/Wishlist"
import View from "./pages/View"
import PageNotFound from "./pages/PageNotFound"
import Footer from './components/Footer'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
         <Route path="/products/:id" element={<View />} />
          <Route path="/*" element={<PageNotFound />} />
      </Routes>
       <Footer />
    </BrowserRouter>
    
  )
}

export default App