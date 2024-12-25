import { FaGoogle, FaLinkedin, FaPhone } from "react-icons/fa";

export default function ContactUs(){
   const contact = [
          { icon: <FaGoogle />, info: "madeinuganda@gmail.com", link: "" },
          { icon: <FaPhone />, info: "+250 000 000 000", link: "" },
          { icon: <FaLinkedin />, info: "Made in Uganda Ltd", link: "" },
      ];
      const inputData = [
        {
            name: "Full Name",
            className: "h-10",
            type: "text",
        },
        {
            name: "Email",
            className: "h-10",
            type: "email",
        },
        {
            name: "Message",
            className: "h-[100px] text-start items-start",
            type: "textarea",
        },
    ];
  
    return(
        <div className="p-10 flex flex-col gap-5">
            <div className="flex items-center justify-between py-10">
                <div className="flex flex-col gap-10">
                <h1 className="text-2xl font-semibold text-gray-600">Want to Tell us anything</h1>
                <p className="text-xl font-medium text-gray-500 w-[750px]">Have you got any problem of how our company made in uganda works ? or you want to patner with our company and also you want to know many about our company </p>
                <ul className="flex  gap-10 text-primary-color">
                        {contact.map((item, index) => (
                            <li key={index} className="flex gap-2 items-center">
                                {item.icon}
                                <a href={item.link} className="hover:underline">{item.info}</a>
                            </li>
                        ))}
                    </ul>
                    <h1 className="text-xl font-semibold text-gray-600">Contact us</h1>
            <div className="flex flex-col justify-center bg-white p-2 shadow-md rounded-md  items-start gap-5  w-[520px]">
                        {inputData.map((field, index) =>
                            field.type === "textarea" ? (
                                <textarea
                                    key={index}
                                    placeholder={field.name}
                                    className={`w-full md:w-[500px] px-4 py-2 text-sm text-black placeholder:text-gray-500 focus:outline-none border border-gray-300 rounded-md shadow-sm focus:border-primary-color hover:bg-gray-50 ${field.className}`}
                                ></textarea>
                            ) : (
                                <input
                                    key={index}
                                    type={field.type}
                                    placeholder={field.name}
                                    className={`w-full md:w-[500px] px-4 py-2 text-sm text-black placeholder:text-gray-500 focus:outline-none border border-gray-300 rounded-md shadow-sm focus:border-primary-color hover:bg-gray-50 ${field.className}`}
                                />
                            )
                        )}
                        <button className="w-32 h-10 text-white font-semibold rounded-md bg-primary-color transition-all duration-300">
                            Submit
                        </button>
                    </div>




                </div>
                <img src="/call.webp" alt="" className="w-[600px]" />

            </div>
            
        </div>
    )
}