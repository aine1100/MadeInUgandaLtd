export default function Login(){
    const inputData = [
        
        
        {
            name: "Phone Number",
            className: "h-10",
            type: "text",
        },
        {
            name: "Password",
            className: "h-10",
            type: "password",
        },
        
    ];
    return(
        <div className="h-screen w-screen bg-gray-100 flex items-center justify-center">
            <div className="p-10  bg-white shadow-sm rounded-lg flex-col gap-5 flex  w-[500px] ">
                <h1 className="text-xl font-semibold text-gray-600 text-center">Login into Your account</h1>
               {
                inputData.map((field, index) =>
                        <div className="flex flex-col gap-2" key={index}>
                            <h1>{field.name}</h1>

                        <input
                            name={field.name}
                            type={field.type}
                            placeholder={field.name}
                            className={`w-full md:w-[400px] px-4 py-2 text-sm text-black placeholder:text-gray-500 focus:outline-none border border-gray-300 rounded-md shadow-sm focus:border-primary-color`}/>

                        </div>
                    )
               }
                <button className="w-32 p-2 text-white font-semibold rounded-md bg-primary-color transition-all duration-300">
                            Login
                        </button>
                        <p className="text-gray-500 text-md">Dont have an account <a href="/register" className="text-primary-color">Register</a></p>





            </div>

        </div>
    )

}