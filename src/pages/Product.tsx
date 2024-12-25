import Footer from "../components/footer"
import ProductNavbar from "../components/productNavbar"
import ProductPage from "../components/ProductsPage"

export default function Products(){
    return(
        <div className="mx-auto container flex flex-col z-50 font-sans">
            <ProductNavbar/>
            <ProductPage/>
            <Footer/>
           

        </div>
    )
}