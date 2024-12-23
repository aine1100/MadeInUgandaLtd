import { FaStar } from 'react-icons/fa'; // Import React Icon for stars

export default function Testimonials() {
    const videos = [
        {
            test: "This is the best Online shop that I have ever used in Uganda. Simple to use for everyone.",
            name: "Alex Karake",
            desc: "CEO of FarmerCooperative",
            rating: 5,
        },
        {
            test: "This is the best Online shop that I have ever used in Uganda. Simple to use for everyone.",
            name: "Sarah Niyigena",
            desc: "Founder of ArtisanCrafts",
            rating: 4,
        },
        {
            test: "This is the best Online shop that I have ever used in Uganda. Simple to use for everyone.",
            name: "Jean Baptiste",
            desc: "Director of Local Farmers Union",
            rating: 4,
        },
    ];

    return (
        <div className="flex flex-col mx-auto px-10 py-10">
            <div className="flex flex-col items-center gap-10">
                <h1 className="text-2xl font-bold text-gray-600">People's Testimonials</h1>

                <div className="flex gap-10">
                    {videos.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-5 w-[350px] h-[auto] shadow-sm shadow-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="flex justify-center mb-4">
                                <img
                                    src="/person.jpeg"
                                    alt="testimonial image"
                                    className="w-[80px] h-[80px] rounded-full"
                                />
                            </div>
                            <p className="text-left text-gray-600">{item.test}</p>
                            <div className="flex items-center gap-2">
                                {/* Render Star Ratings */}
                                {[...Array(5)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className={`${i < item.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                                    />
                                ))}
                            </div>
                            <div className="flex justify-between flex-col items-start">
                                <p className="text-gray-600 text-left font-semibold">{item.name}</p>
                                <p className="text-gray-500 text-right font-light">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
