import About from "./pages/about";
import Home from "./pages/home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./pages/Service";
import Products from "./pages/Product";
import Contact from "./pages/contact";
export default function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Services/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/contact" element={<Contact/>}/>





      </Routes>
    </Router>
    </>
  )
}