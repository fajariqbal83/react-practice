import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProducts from "./pages/product/AllProducts";
import Login from "./pages/auth/Login";
import Register from "./pages/user/Register";
import CartList from "./pages/cart/CartList";

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AllProducts/>}/>
      <Route path="/products" element={<AllProducts/>}/>
      <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
     <Route path="/cart" element={<CartList/>} />
    </Routes>
    </BrowserRouter>
      
    </div>
  )
}

export default App
