import About from "./pages/about";
import Home from "./pages/home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>


      </Routes>
    </Router>
    </>
  )
}