import ProductCards from "../components/seller/DashboardCards";
import Header from "../components/seller/header";
import ProductTable from "../components/seller/ProductTable";
import Sidebar from "../components/seller/sidebar";

export default function Dashboard(){
    const activeTab="/Dashboard";

    return(
        <div className="flex">
            <Sidebar activeTab={activeTab} onTabChange={() => {}}/>
               <div className="flex-1">
               <Header/>
               <div className="px-10 py-5 gap-5 flex flex-col">
                <h2 className="text-xl font-semibold text-primary-color">Account Overview</h2>
                <ProductCards/>
                <ProductTable/>



                

               </div>

               </div>

        </div>
    )
}