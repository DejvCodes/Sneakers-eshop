import "./App.css"
import SharedLayout from "./components/SharedLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AllProducts from "./pages/allProducts/AllProducts"
import ProductDetails from "./pages/productDetails/ProductDetails"
import ShoppingBag from "./pages/shoppingBag/ShoppingBag"
import Membership from "./pages/membership/Membership"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <SharedLayout /> }>
            <Route index element={ <AllProducts /> } />
            <Route path="/:slug" element={ <ProductDetails /> } />
            <Route path="/membership" element={ <Membership /> } />
            <Route path="/shopping-bag" element={ <ShoppingBag /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App