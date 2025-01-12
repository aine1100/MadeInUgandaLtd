export default function OurProducts() {
    const products=[
        {
            image:"/agr.webp",
            title:"Agricultural Products",
            desc:"we provide services to our suppliers and clients  a better platform to access and also to sell there produces locally and globally and with all market information"
        },
        {
            image:"/uganda.jpg",
            title:"Handcrafted Products",
            desc:"we provide our clients better platform to connect with there service providers  here locally and globally to international markets around the world"
        }, {
            image:"/fashion.jpg",
            title:"Fashion and apparel",
            desc:"we provide our clients better platform to connect with there service providers  here locally and globally to international markets around the world"
        },
        {
            image:"/pro.jpg",
            title:"Professional Services",
            desc:" we are e-commerce , e-marketing , and exporting company that provides  marketing, e-commerce and exporting solutions to farmers and entrepreneurs with small and medium enterprises locally and globally by connecting manufacturers and services providers to real consumers around the world"
        }
    ]
    return (
        <div className="flex  items-center justify-center gap-10 flex-col   px-10 py-10 container mx-auto">
            <h1 className="text-2xl font-bold text-gray-600">Our Products</h1>
            <div className="flex flex-wrap gap-10 items-center justify-center">
            {products.map((item, index) => (
                        <div key={index} className="flex flex-col gap-5 w-[300px] h-[450px] shadow-sm shadow-gray-200 rounded-lg p-2">
                            <img src={item.image} alt="" className="w-full h-[150px] rounded-lg" />
                            <div className="flex flex-col gap-2  items-center justify-center">
                            <p className="text-gray-600 text-center font-semibold ">{item.title}</p>
                            <p className="text-gray-500 text-center w-[280px]">{item.desc}</p>


                            </div>
                        </div>
                    ))}

            </div>



        </div>
    )

}
