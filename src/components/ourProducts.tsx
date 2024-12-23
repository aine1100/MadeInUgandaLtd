export default function OurProducts() {
    const products=[
        {
            image:"/agr.webp",
            title:"Agricultural Products",
            desc:"We provide our clients different agriculture fresh products to use"
        },
        {
            image:"/uganda.jpg",
            title:"Handcrafted Products",
            desc:"We provide our clients different agriculture fresh products to use"
        }, {
            image:"/fashion.jpg",
            title:"Fashion and apparel",
            desc:"We provide our clients different agriculture fresh products to use"
        },
        {
            image:"/pro.jpg",
            title:"Professional Services",
            desc:"We provide our clients different agriculture fresh products to use"
        }
    ]
    return (
        <div className="flex items-center justify-center gap-10 flex-col   px-10 py-10 container mx-auto">
            <h1 className="text-2xl font-bold text-gray-600">Our Products</h1>
            <div className="flex gap-10 items-center justify-center">
            {products.map((item, index) => (
                        <div key={index} className="flex flex-col gap-5 w-[300px] h-[300px] shadow-sm shadow-gray-200 rounded-lg p-2">
                            <img src={item.image} alt="" className="w-full h-[170px] rounded-lg" />
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