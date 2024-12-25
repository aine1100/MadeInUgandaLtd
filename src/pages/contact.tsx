import ContactUs from "../components/contact"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

export default function Contact(){
    return(
        <div className="mx-auto container font-sans">
            <Navbar/>
            <ContactUs/>
            <Footer/>
           

        </div>
    )
}