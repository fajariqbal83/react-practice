import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProducts from "./pages/product/AllProducts";
import Login from "./pages/auth/Login";
import Register from "./pages/user/Register";

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AllProducts/>}/>
      <Route path="/products" element={<AllProducts/>}/>
      <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    </Routes>
    </BrowserRouter>
      
    </div>
  )
}

export default App
