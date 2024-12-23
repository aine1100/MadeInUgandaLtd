export default function WhoWeAre() {
    const videos = [
        {
            video: "https://www.youtube.com/embed/jh6QS2jmuJI",
            name: "Who are Made in uganda?",
            desc:"what we do at made in uganda online ltd which helped farmers to become millionaires"
        },
        {
            video: "https://www.youtube.com/embed/jh6QS2jmuJI",
            name: "What does made in uganda do?",
            desc:"what we do at made in uganda online ltd which helped farmers to become millionaires"

        },
        {
            video: "https://www.youtube.com/embed/jh6QS2jmuJI",
            name: "What do they impact to community?",
            desc:"what we do at made in uganda online ltd which helped farmers to become millionaires"

        },
    ];

    return (
        <div className="flex flex-col mx-auto px-10 py-10">
            <div className="flex flex-col items-center justify-center gap-5">
                <h1 className="text-2xl font-bold text-gray-600">What We Do</h1>
                <p className="text-gray-500 w-[750px] text-center">
                    At Made in Uganda Online Ltd, we are dedicated to showcasing the beauty of Ugandan craftsmanship while empowering local artisans and businesses. Our platform connects Ugandan-made products to the world, driving economic growth and sustainability.
                </p>
                <div className="flex items-center justify-between gap-10">
                    {videos.map((item, index) => (
                        <div key={index} className="flex flex-col gap-5 w-[300px] h-[300px] shadow-sm shadow-gray-200 rounded-lg p-2">
                            <iframe
                                src={item.video}
                                title={item.name}
                                className="w-full h-[200px] rounded-lg"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <div className="flex flex-col gap-2  items-center justify-center">
                            <p className="text-gray-600 text-center font-semibold ">{item.name}</p>
                            <p className="text-gray-500 text-center w-[280px]">{item.desc}</p>


                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
