import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProducts from "./pages/product/AllProducts";

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AllProducts/>}/>
      <Route path="/products" element={<AllProducts/>}/>
    </Routes>
    </BrowserRouter>
      
    </div>
  )
}

export default App
