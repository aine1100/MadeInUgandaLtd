import FAQSection from "./faq"

export default function AboutUs() {
    const aim=[
        {
            title:"Vision",
            desc:"To become the leading platform that connects Ugandan businesses and artisans to a global marketplace, empowering local talent and fostering sustainable growth while showcasing the rich heritage and quality of Ugandan products."
        },
        {
            title:"Mission",
            desc:"Our mission is to create an inclusive and innovative platform that supports Ugandan entrepreneurs by providing them with tools to market, sell, and grow their businesses. We aim to inspire trust, drive economic development, and promote the excellence of Ugandan products and services worldwide."
        }
    ]
    return (
        <div className="flex flex-col py-10 px-10">
            <div className="flex gap-44 items-center py-20">
               <div className="flex flex-col gap-5">
               <h1 className="text-2xl font-semibold text-gray-600">What we are?</h1>
                <p className="w-[700px] text-gray-500">Welcome to Made in Uganda Online Ltd, your trusted partner in promoting and celebrating locally crafted products and services. Our mission is to empower Ugandan entrepreneurs, artisans, and businesses by providing a platform to showcase their unique talents, innovative solutions, and high-quality goods to a global audience. We take pride in fostering economic growth, supporting sustainability, and bridging the gap between local creators and customers. At Made in Uganda Online Ltd, we believe in the potential of our people, the richness of our culture, and the power of collaboration to build a brighter future for Uganda.</p>

               </div>
               <img
                        src="/pro.jpg"
                        alt="Hero"
                        className="w-[580px] h-[350px] rounded-md transition-opacity duration-1000 ease-in-out"
                    />
            </div>
            <div className="flex flex-col items-center justify-center gap-10">
                <h1 className="text-gray-600 font-semibold text-2xl">What we aim at our company</h1>
                <div className="flex gap-20">
                    {
                        aim.map((item,index)=>(
                            <div className="bg-primary-color text-white flex-col rounded-lg px-5 py-3 flex items-center  w-[350px] gap-5 " key={index}>
                                <h1 className="text-2xl font-semibold ">{item.title}</h1>
                                <p className="w-[300px] font-medium text-md ">{item.desc}</p>

                            </div>
                        ))
                    }

                </div>

            </div>
            <div className="flex gap-44 py-10">
                <div className="flex flex-col gap-10 items-start">
                    <h1 className="text-gray-600 font-semibold text-2xl">Why Choosing Us</h1>
                    <img
                        src="/fashion.jpg"
                        alt="Hero"
                        className="w-[550px] h-[500px] rounded-md transition-opacity duration-1000 ease-in-out"
                    />

                </div>
                <FAQSection/>

            </div>

        </div>
    )
}