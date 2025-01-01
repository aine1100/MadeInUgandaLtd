export default function ProductCards(){
    const cards=[
        {
            title:"Total Products",
            amount:500
        },
        {
            title:"Total Sales",
            amount:500
        },
        {
            title:"Total Income",
            amount:500
        }
    ]
    return(
        <div className="flex gap-10 ">
            {
                cards.map((card,index)=>(
                    <div className="flex flex-col items-center gap-2 rounded-lg py-10  justify-center w-[350px]  border " key={index}>
                        <h1 className="text-md font-semibold text-gray-600">{card.title}</h1>
                        <h2 className="text-xl font-semibold text-gray-700">{card.amount}</h2>

                    </div>
                ))
            }


        </div>
    )
}