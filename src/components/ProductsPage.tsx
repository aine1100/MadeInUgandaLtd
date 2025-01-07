import axios from "axios";
import { useState, useEffect } from "react";

interface Product {
    name: string;
    price: number;
    image: string;
    quantity?: number; // Add quantity for cart management
}

type ProductCategories = {
    [key: string]: Product[];
};



import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import {  FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
export default function ProductPage() {
    const images = ["/agr.webp", "/market.webp", "/uganda.jpg"];
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [cart, setCart] = useState<Product[]>([]);
    const [product,setProducts]=useState<any[]>();
    
    //fetch displayed products from the backend 
    useEffect(()=>{
        const fetchProducts=async()=>{
            try{
                const response=await axios.get("http://localhost:3000/products/product",);
                setProducts(response.data)
                console.log(response.data)

            
            }catch(err){
                console.error('Failed to fetch products', err);
            }
            
;        }
        fetchProducts();

    },[])


    // Fetch cart from localStorage on mount
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            const parsedCart = JSON.parse(storedCart);

            // Ensure price remains a number for each product
            const validatedCart = parsedCart.map((item: Product) => ({
                ...item,
                price: Number(item.price), // Explicitly convert price to a number
            }));

            setCart(validatedCart);
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);



    // Automatically change images every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000); // Change image every 10 seconds
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [images.length]);

    // Define product categories and their products with types
    const products: ProductCategories = {
        "Fresh Products": [
            { name: "Fresh Mango", price: 10, image: "/mango.webp" },
            { name: "Fresh Banana", price: 5, image: "/banana.jpg" },
            { name: "Fresh Avocado", price: 7, image: "/avocado.jpeg" },
            { name: "Fresh Apple", price: 10, image: "/apple.jpg" },
            { name: "Fresh Sugarcane", price: 5, image: "/cane.jpg" },
            { name: "Fresh Berry", price: 7, image: "/bey.jpg" },
        ],
        "Non-Fresh Products": [
            { name: "Rice Bag", price: 20, image: "/rice.webp" },
            { name: "Canned Beans", price: 8, image: "/beans.jpg" },
        ],
        "HandCrafted Products": [
            { name: "Handcrafted Vase", price: 30, image: "/vase.jpg" },
            { name: "Handmade Basket", price: 25, image: "/basket.webp" },
        ],
        "Exports Products": [
            { name: "Coffee Beans", price: 15, image: "/coffee.jpg" },
            { name: "Cocoa Powder", price: 12, image: "/cocoa.jpg" },
        ],
    };

    // Active product type state
    const [activeProductType, setActiveProductType] = useState<string>("Fresh Products");
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

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Searching for: ${searchQuery}`);
    };

    const productTypes = [
        { title: "Fresh Products" },
        { title: "Non-Fresh Products" },
        { title: "HandCrafted Products" },
        { title: "Exports Products" },
    ];

    const icon = [<FaCartShopping />];



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
    const addToCart = (product: Product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.name === product.name);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.name === product.name ? { ...item, quantity: (item.quantity || 1) + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    // Update product quantity in the cart

    return (
        <div className="flex flex-col">

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
                                    className={`${activeLink === item.link
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
                <div className="flex bg-primary-color h-[60px] px-10  items-center justify-between fixed top-[103px]  left-0 w-full z-50 shadow-lg">
                    <div className="flex gap-5 text-white">
                        {productTypes.map((item, index) => (
                            <a
                                key={index}
                                href="#"
                                className="text-sm text-white hover:text-md"
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>

                    {/* Search Form */}
                    <form onSubmit={handleSearch} className="flex items-center">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search products..."
                            className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-[1.5px] focus:border-[#0086AD] w-[300px]"
                        />
                        <button
                            type="submit"
                            className="bg-white px-4 h-[41.2px] -mt-[0.1px] text-primary-color rounded-r-md hover:bg-primary-color hover:text-white transition-all"
                        >
                            <FaSearch />
                        </button>
                    </form>

                    <div className="flex gap-8">
                        {icon.map((icon, index) => (
                            <div className="flex  gap-2">
                                <a href="/cart" key={index} className="text-white text-[25px] "  >
                                    {icon}
                                    {cart.length > 0 && (
                                        <span className="absolute flex items-center justify-center top-1 right-6 bg-white text-primary-color text-xs w-5 h-5 rounded-full text-center">
                                            {cart.reduce(
                                                (total, item) => total + (item.quantity || 1),
                                                0
                                            )}
                                        </span>
                                    )}


                                </a>



                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div
                className="h-[600px] w-full bg-cover bg-center text-white flex items-center justify-center"
                style={{
                    backgroundImage: `url(${images[currentImageIndex]})`,
                }}
            >
                <div className="flex items-center justify-center flex-col gap-3 text-center px-10">
                    <h1 className="text-4xl font-bold">Explore Our Exclusive Products</h1>
                    <p className="text-lg">
                        Discover the best quality fresh, handcrafted, and export products for your needs.
                    </p>
                    <button className="bg-primary-color hover:bg-white w-[200px] hover:text-primary-color text-white font-semibold py-2 h-[50px] px-6 rounded-lg transition-all">
                        Shop Now
                    </button>
                </div>
            </div>
            <div className="flex flex-col p-10 gap-10">
                <h1 className="text-2xl font-bold text-gray-600">Our Products</h1>

                {/* Product Type Selection */}
                <div className="flex gap-5 ">
                    {Object.keys(products).map((productType) => (
                        <button
                            key={productType}
                            onClick={() => setActiveProductType(productType)}
                            className={`${activeProductType === productType
                                ? "text-primary-color font-semibold"
                                : "text-gray-600"
                                } hover:text-primary-color`}
                        >
                            {productType}
                        </button>
                    ))}
                </div>
                <div className="mt-16 p-4">
                    <h1 className="text-2xl font-bold mb-4">{activeProductType}</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products[activeProductType]?.map((product, index) => (
                            <div key={index} className="border p-4 rounded-lg">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-40 object-cover rounded-md"
                                />
                                <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
                                <p className="text-sm text-gray-600">${product.price}</p>
                                <button
                                    onClick={() => addToCart(product)}
                                    className="mt-4 bg-primary-color text-white px-4 py-2 rounded-md"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}