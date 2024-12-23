import { useState, useEffect } from "react";

export default function Hero() {
    const button = [
        {
            name: "Shop Now",
            className:
                "bg-primary-color px-10 flex items-center justify-center py-2 rounded-md text-white ",
            link: "#",
        },
        {
            name: "Join as a seller",
            className:
                "border-[1.5px] border-primary-color px-10 flex items-center justify-center py-2 rounded-md text-primary-color ",
            link: "#",
        },
    ];

    // Array of image sources
    const images = ["/agr.webp", "/market.webp", "/uganda.jpg"];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Automatically change images after 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [images.length]);

    return (
        <div className="flex items-center justify-start py-16 px-10">
            <div className="flex items-center gap-44 justify-between">
                {/* Text Section */}
                <div className="flex flex-col gap-5 py-10">
                    <h1 className="text-gray-700 font-bold text-3xl w-[650px]">
                        Empowering Ugandan Craftsmanship, Connecting the World
                    </h1>
                    <p className="text-gray-600 font-medium text-xl w-[650px]">
                        Discover authentic Ugandan products and services, crafted with passion
                        and delivered with purpose. Your gateway to local innovation and global
                        opportunities
                    </p>
                    <div className="flex gap-5 py-5">
                        {button.map((item, index) => (
                            <div key={index}>
                                <a href={item.link} className={item.className}>
                                    {item.name}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex flex-col gap-5">
                    {/* Main Image */}
                    <img
                        src={images[currentImageIndex]}
                        alt="Hero"
                        className="w-[580px] h-[350px] rounded-md transition-opacity duration-1000 ease-in-out"
                    />
                    {/* Image Thumbnails */}
                    <div className="flex gap-5">
                        {images.map((item, index) => (
                            <img
                                key={index}
                                src={item}
                                alt={`Thumbnail ${index + 1}`}
                                className={`w-[180px] h-[100px] rounded-md transition-all duration-500 ${
                                    index === currentImageIndex
                                        ? "border-[1.86px] p-2 border-green-500"
                                        : "border-[1.5px] p-1 border-gray-300"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
