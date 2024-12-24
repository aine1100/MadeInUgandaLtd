import Footer from "../components/footer"
import Navbar from "../components/navbar"
import OurServices from "../components/ourServices"

export default function Services(){
    return(
        <div className="mx-auto container font-sans">
            <Navbar/>
            <OurServices/>
            <Footer/>
           

        </div>
    )
}