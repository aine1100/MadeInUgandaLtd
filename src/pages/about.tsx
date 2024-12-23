import AboutUs from "../components/aboutus"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

export default function About(){
    return(
        <div className="mx-auto container font-sans">
            <Navbar/>
            <AboutUs/>
            <Footer/>
           

        </div>
    )
}