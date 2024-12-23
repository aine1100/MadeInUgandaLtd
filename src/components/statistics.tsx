import { useState, useEffect } from "react";
interface numberProps{
    targetNumber: number;
}

export default function PeopleNumber() {
    const numbers = [
        {
            number: 10000, // Target number
            title: "Farmers",
        },
        {
            number: 8000, // Target number
            title: "Sellers",
        },
        {
            number: 100000, // Target number

            title: "Products",
        },
    ];

    // Function to handle the animation of numbers
    const AnimatedNumber = ({ targetNumber }) => {
        const [currentNumber, setCurrentNumber] = useState(0);

        useEffect(() => {
            let start = 0;
            const duration = 2000; // Animation duration in ms
            const increment = Math.ceil(targetNumber / (duration / 50)); // Increment step
            const timer = setInterval(() => {
                start += increment;
                if (start >= targetNumber) {
                    setCurrentNumber(targetNumber); // Ensure it doesn't overshoot
                    clearInterval(timer);
                } else {
                    setCurrentNumber(start);
                }
            }, 50); // Update every 50ms

            return () => clearInterval(timer); // Cleanup interval on unmount
        }, [targetNumber]);

        return <p className="text-[50px] font-bold">{currentNumber.toLocaleString()}</p>;
    };

    return (
        <div className="flex flex-col gap-10 items-center bg-primary-color px-10 py-10">
            <div className="flex items-center gap-20">
                {numbers.map((number, index) => (
                    <div key={index} className="flex items-center">
                        {/* Content */}
                        <div className="flex flex-col items-center gap-2 text-white">
                            <AnimatedNumber targetNumber={number.number} />
                            <p className="text-xl font-semibold">{number.title}</p>
                        </div>

                        {/* Vertical Line (except after the last item) */}
                        {index !== numbers.length - 1 && (
                            <div className="h-16 border-l border-white mx-20"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
