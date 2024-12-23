import { FaGoogle, FaLinkedin, FaPhone } from "react-icons/fa";

export default function Footer() {
    const links = [
        { name: "Home", link: "" },
        { name: "About us", link: "" },
        { name: "Services", link: "" },
        { name: "Products", link: "" },
        { name: "Contact", link: "" },
    ];

    const contact = [
        { icon: <FaGoogle />, info: "madeinuganda@gmail.com", link: "" },
        { icon: <FaPhone />, info: "+250 000 000 000", link: "" },
        { icon: <FaLinkedin />, info: "Made in Uganda Ltd", link: "" },
    ];

    return (
        <div className="flex flex-col bg-primary-color">
            <div className="flex gap-20 items-start text-white justify-between py-10 px-10 h-auto">
                <div className="flex flex-col gap-5">
                    <h1 className="text-2xl font-semibold">Made In Uganda Ltd</h1>
                    <p className="text-md font-medium opacity-85 w-[400px]">
                        This is a leading e-commerce, e-marketing, and online agriculture store in Uganda, 
                        helping Ugandans sell their products easily and quickly to various customers.
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-xl font-semibold">Quick Links</h1>
                    <ul className="flex flex-col gap-2">
                        {links.map((item, index) => (
                            <a key={index} href={item.link} className="hover:underline">
                                {item.name}
                            </a>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-xl font-semibold">Contact Us</h1>
                    <ul className="flex flex-col gap-2">
                        {contact.map((item, index) => (
                            <li key={index} className="flex gap-2 items-center">
                                {item.icon}
                                <a href={item.link} className="hover:underline">{item.info}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* Horizontal Line */}
            <div className="flex justify-center my-4">
                <hr className="w-2/3 border-t-2 border-white opacity-80" />
            </div>
            <div className=" px-10  text-white flex justify-between items-center py-4">
                <p>Made in Uganda Online Ltd © 2024</p>
                <p>Developed and designed by D.Aine</p>
            </div>
        </div>
    );
}
