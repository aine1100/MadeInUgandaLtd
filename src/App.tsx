import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Services from "./pages/Service";
import Products from "./pages/Product";
import Contact from "./pages/contact";
import Register from "./pages/register";
import Login from "./pages/login";
import CartPage from "./components/cartPage";
import Dashboard from "./pages/dashboard";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />




      </Routes>
    </Router>
  );
};

export default App;
