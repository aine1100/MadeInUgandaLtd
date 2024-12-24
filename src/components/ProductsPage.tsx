import { useState, useEffect } from "react";

interface Product {
    name: string;
    price: string;
    image: string;
}

type ProductCategories = {
    [key: string]: Product[];
};

export default function ProductPage() {
    const images = ["/agr.webp", "/market.webp", "/uganda.jpg"];
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

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
            { name: "Fresh Mango", price: "$10", image: "/mango.webp" },
            { name: "Fresh Banana", price: "$5", image: "/banana.jpg" },
            { name: "Fresh Avocado", price: "$7", image: "/avocado.jpeg" },
            { name: "Fresh Apple", price: "$10", image: "/apple.jpg" },
            { name: "Fresh Sugarcane", price: "$5", image: "/cane.jpg" },
            { name: "Fresh Berry", price: "$7", image: "/bey.jpg" },
        ],
        "Non-Fresh Products": [
            { name: "Rice Bag", price: "$20", image: "/rice.webp" },
            { name: "Canned Beans", price: "$8", image: "/beans.jpg" },
        ],
        "HandCrafted Products": [
            { name: "Handcrafted Vase", price: "$30", image: "/vase.jpg" },
            { name: "Handmade Basket", price: "$25", image: "/basket.webp" },
        ],
        "Exports Products": [
            { name: "Coffee Beans", price: "$15", image: "/coffee.jpg" },
            { name: "Cocoa Powder", price: "$12", image: "/cocoa.jpg" },
        ],
    };

    // Active product type state
    const [activeProductType, setActiveProductType] = useState<string>("Fresh Products");

    return (
        <div className="flex flex-col">
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
                            className={`${
                                activeProductType === productType
                                    ? "text-primary-color font-semibold"
                                    : "text-gray-600"
                            } hover:text-primary-color`}
                        >
                            {productType}
                        </button>
                    ))}
                </div>

                {/* Display products based on the active product type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {products[activeProductType]?.map((product, index) => (
                        <div key={index} className="border p-4 rounded-lg">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-[200px] object-cover rounded-md"
                            />
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col">
                                    <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
                                    <p className="text-lg text-gray-600">{product.price}</p>
                                </div>
                                <button className="bg-primary-color hover:bg-white w-[150px] hover:text-primary-color text-white hover:border-[1.5px] hover:border-primary-color font-medium py-2 h-[50px] px-6 rounded-lg transition-all">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
