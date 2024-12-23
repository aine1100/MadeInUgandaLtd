import Footer from "../components/footer"
import Hero from "../components/hero"
import Navbar from "../components/navbar"
import OurProducts from "../components/ourProducts"
import PeopleNumber from "../components/statistics"
import Testimonials from "../components/testimonials"
import WhoWeAre from "../components/whoWeare"
export default function Home(){
    return(
        <div className="mx-auto container font-sans">
            <Navbar/>
            <Hero/>
            <WhoWeAre/>
            <OurProducts/>
            <PeopleNumber/>
            <Testimonials/>
            <Footer/>

        </div>
    )
}