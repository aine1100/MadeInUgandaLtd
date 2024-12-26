import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("/"); // Default active link

  const icons = [
    { link: "#", icon: <FaFacebook /> },
    { link: "#", icon: <FaInstagram /> },
    { link: "#", icon: <FaWhatsapp /> },
    { link: "#", icon: <FaTwitter /> },
  ];

  const navbar = [
    { link: "/", name: "Home" },
    { link: "/about", name: "About" },
    { link: "/service", name: "Services" },
    { link: "/products", name: "Products" },
    { link: "/contact", name: "Contact" },
  ];

  const button = [
    {
      name: "Login",
      className:
        "bg-primary-color px-6 flex items-center justify-center py-2 rounded-md text-white ",
      link: "/login",
    },
    {
      name: "Register",
      className:
        "border-[1.5px] border-primary-color px-6 flex items-center justify-center py-2 rounded-md text-primary-color ",
      link: "/register",
    },
  ];

  // Synchronize active link with the current URL
  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  return (
    <div className="flex flex-col mx-auto container gap-0 sticky top-0">
      {/* Top bar */}
      <div className="bg-primary-color mx-auto container px-10 py-2 flex justify-between items-center text-white font-medium">
        <p>Call us for any help : +250 000 000 000</p>
        Made in Uganda Ltd
        <div className="flex justify-center items-center gap-5">
          {icons.map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-10">
              <a href={item.link}>{item.icon}</a>
            </div>
          ))}
        </div>
      </div>

      {/* Navbar */}
      <div className="bg-white shadow-sm h-16 flex justify-between items-center px-10">
        {/* Logo */}
        <div className="flex gap-2 items-center justify-center">
          <img
            src="/madeinug.jpg"
            alt="Logo"
            className="h-16 w-20 rounded-md"
          />
          <h1 className="font-bold text-gray-700">Made In Uganda Online Ltd</h1>
        </div>

        {/* Navbar Links */}
        <div className="flex gap-5 items-center justify-center">
          {navbar.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <a
                href={item.link}
                onClick={() => setActiveLink(item.link)}
                className={`${
                  activeLink === item.link
                    ? "text-green-600 font-bold"
                    : "text-gray-700"
                } hover:text-green-600`}
              >
                {item.name}
              </a>
            </div>
          ))}

          {/* Buttons */}
          {button.map((item, index) => (
            <div key={index}>
              <a href={item.link} className={item.className}>
                {item.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
