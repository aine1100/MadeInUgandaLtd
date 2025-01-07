import Header from "../components/seller/header";
import SalesChart from "../components/seller/salesChart";
import Sidebar from "../components/seller/sidebar";

export default function AnalyticsPage(){

    return(
        <div className="flex z-50">
            <Sidebar  onTabChange={() => {}}/>
               <div className="flex-1">
               <Header/>
               <div className="px-10 py-5 gap-5 flex flex-col">
                <h2 className="text-xl font-semibold text-primary-color">Analytic Page</h2>
                
                <SalesChart/>



                

               </div>

               </div>

        </div>
    )
}