export default function OurServices(){
    const services=[
        {
            image:"/e-comme.jpeg",
            title:"E-commerce Solutions",
            desc:"We provide a seamless platform for Ugandan businesses to showcase and sell their products online, connecting them to both local and international markets."
        },
        {
            image:"/mark.svg",
            title:"Marketing and Promotion",
            desc:"Through targeted campaigns and digital marketing strategies, we help businesses increase visibility and reach their ideal customers."
        }, {
            image:"/agr.webp",
            title:"Agriculture Support",
            desc:"Offering a specialized marketplace for farmers to sell their produce directly to consumers, fostering a sustainable agricultural ecosystem."
        },
        {
            image:"/cons.jpeg",
            title:"Business Consultancy",
            desc:"We guide small and medium-sized enterprises in Uganda by offering advice on how to grow, manage, and optimize their operations for better results."
        },
        {
            image:"/del.png",
            title:"Logistics and Delivery",
            desc:"Ensuring timely and efficient delivery of products from sellers to buyers, making the buying experience hassle-free."
        },
        {
            image:"/cust.png",
            title:"Customer Support",
            desc:"Our dedicated team is always available to assist both sellers and buyers with inquiries, orders, and issues, ensuring satisfaction and trust."
        }, {
            image:"/pro.jpg",
            title:"Training and Workshops",
            desc:"Empowering businesses with skills in digital marketing, e-commerce management, and customer relationship building through regular training sessions."
        },
    ]
    return(
        <div className="flex flex-col py-10 px-10">
            <div className="flex gap-28 items-center py-20">
               <div className="flex flex-col gap-5">
               <h1 className="text-2xl font-semibold text-gray-600">What we Offer?</h1>
               <p className="w-[700px] text-gray-600">At Made In Uganda Online Ltd, we offer a comprehensive range of services designed to empower businesses and individuals across Uganda. From providing a seamless e-commerce platform to facilitating direct sales of agricultural products, we connect sellers to buyers with ease and efficiency. Our marketing and promotion strategies ensure your products reach the right audience, while our reliable logistics and delivery services guarantee prompt and safe transportation of goods. We also provide expert business consultancy, customer support, and training to help entrepreneurs succeed in today’s competitive market. With us, you gain access to innovative solutions that drive growth, build trust, and create meaningful impact within your community.</p>

               </div>
               <img
                        src="/seller.jpg"
                        alt="Hero"
                        className="w-[650px] bg-white h-[400px] rounded-md transition-opacity duration-1000 ease-in-out"
                    />
            </div>
          <div className="flex flex-col gap-10 py-10 items-center justify-center">
          <h1 className="text-2xl font-semibold text-gray-600">Our Services</h1>
          <div className="flex flex-wrap gap-10 items-center justify-center">
            {services.map((item, index) => (
                        <div key={index} className="flex flex-col gap-5 w-[300px] h-[370px] shadow-sm shadow-gray-200 rounded-lg p-2">
                            <img src={item.image} alt="" className="w-full h-[170px] rounded-lg" />
                            <div className="flex flex-col gap-2  items-center justify-center">
                            <p className="text-gray-600 text-center font-semibold ">{item.title}</p>
                            <p className="text-gray-500 text-center w-[280px]">{item.desc}</p>


                            </div>
                        </div>
                    ))}

            </div>

          </div>
        </div>
    )
}