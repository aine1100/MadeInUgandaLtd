import Header from "../components/seller/header";
import ProductList from "../components/seller/productlist";
import Sidebar from "../components/seller/sidebar";

export default function ProductsPage(){
    const activeTab="/sellerProducts";

    return(
        <div className="flex z-50">
            <Sidebar activeTab={activeTab} onTabChange={() => {}}/>
               <div className="flex-1">
               <Header/>
               <div className="px-10 py-5 gap-5 flex flex-col">
                <h2 className="text-xl font-semibold text-primary-color">Your Products</h2>
                <ProductList/>



                

               </div>

               </div>

        </div>
    )
}