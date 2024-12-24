import Footer from "../components/footer"
import Navbar from "../components/navbar"
import ProductNavbar from "../components/productNavbar"
import ProductPage from "../components/ProductsPage"

export default function Products(){
    return(
        <div className="mx-auto container flex flex-col z-50 font-sans">
            <ProductNavbar/>
            <ProductPage/>
           

        </div>
    )
}