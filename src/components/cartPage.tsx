import { useState, useEffect } from "react";
import { FaX } from "react-icons/fa6";

interface Product {
    name: string;
    price: number;
    image: string;
    quantity: number; // Quantity for the cart
}

export default function CartPage() {
    const [cart, setCart] = useState<Product[]>([]);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState<"phone" | "card" | null>(null);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [pin, setPin] = useState("");
    const [cardInfo, setCardInfo] = useState({ cardNumber: "", expiry: "", cvv: "" });
    const [amount, setAmount] = useState("");

    // Fetch cart from localStorage on mount
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    // Remove product from cart
    const removeFromCart = (name: string) => {
        const updatedCart = cart.filter((item) => item.name !== name);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const calculateTotalPrice = () =>
        cart.reduce(
            (total, product) => total + product.price * (product.quantity || 1),
            0
        );

    const handleProceedToPayment = () => {
        setShowPaymentModal(true);
    };

    const handlePayment = () => {
        const totalPrice = calculateTotalPrice();

        if (paymentMethod === "phone") {
            if (Number(amount) !== totalPrice) {
                alert("The amount entered does not match the total price.");
                return;
            }
            alert(`Payment of $${totalPrice} made successfully via Phone.`);
        } else if (paymentMethod === "card") {
            alert(`Payment of $${totalPrice} made successfully via Card.`);
        }

        // Clear modal state after payment
        setShowPaymentModal(false);
        setPaymentMethod(null);
        setPhoneNumber("");
        setPin("");
        setAmount("");
        setCardInfo({ cardNumber: "", expiry: "", cvv: "" });
    };
    const baseURL = 'http://localhost:3000/uploads/';


    return (
        <div className="p-10 flex flex-col gap-10">
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold mb-5">Your Cart</h1>
                <a href="/products">
                    <FaX className="text-red-500 text-lg" />
                </a>
            </div>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {cart.map((product) => (
                        <div
                            key={product.name}
                            className="flex items-center justify-between border p-4 rounded-lg"
                        >
                            <div className="flex items-center gap-4">
                                <img src={`${baseURL}.${product.image}`} alt={product.name} className="h-20" />
                                <div>
                                    <h2 className="font-bold">{product.name}</h2>
                                    <p>$:{product.price}</p>
                                    <p>Quantity: {product.quantity}</p>
                                    <p>Total: ${product.price * product.quantity}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => removeFromCart(product.name)}
                                className="bg-red-500 text-white py-1 px-4 rounded"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
            <div className="p-10 h-[100px] flex items-center justify-between rounded-lg border-[1.5px] border-gray-100">
                <p className="text-xl font-semibold text-gray-600">
                    Total Price: <span className="text-primary-color">${calculateTotalPrice()}</span>
                </p>
                <button
                    onClick={handleProceedToPayment}
                    className="h-14 px-5 text-white font-semibold rounded-md bg-primary-color transition-all duration-300"
                >
                    Proceed to Payment
                </button>
            </div>

            {showPaymentModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-md w-[400px]">
                        <button
                            onClick={() => setShowPaymentModal(false)}
                            className="text-red-500 float-right"
                        >
                            <FaX />
                        </button>
                        <h2 className="text-lg font-bold mb-4">Choose Payment Method</h2>
                        {!paymentMethod && (
                            <div className="flex flex-col gap-4">
                                <button
                                    onClick={() => setPaymentMethod("phone")}
                                    className="bg-blue-500 text-white py-2 px-4 rounded"
                                >
                                    Pay by Phone
                                </button>
                                <button
                                    onClick={() => setPaymentMethod("card")}
                                    className="bg-primary-color text-white py-2 px-4 rounded"
                                >
                                    Pay by Card
                                </button>
                            </div>
                        )}
                        {paymentMethod === "phone" && (
                            <div className="flex flex-col gap-4">
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className="border p-2 rounded"
                                />
                                <input
                                    type="password"
                                    placeholder="PIN"
                                    value={pin}
                                    onChange={(e) => setPin(e.target.value)}
                                    className="border p-2 rounded"
                                />
                                <input
                                    type="number"
                                    placeholder="Amount"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="border p-2 rounded"
                                />
                                <button
                                    onClick={handlePayment}
                                    className="bg-primary-color text-white py-2 px-4 rounded"
                                >
                                    Confirm Payment
                                </button>
                            </div>
                        )}
                        {paymentMethod === "card" && (
                            <div className="flex flex-col gap-4">
                                <input
                                    type="text"
                                    placeholder="Card Number"
                                    value={cardInfo.cardNumber}
                                    onChange={(e) =>
                                        setCardInfo({ ...cardInfo, cardNumber: e.target.value })
                                    }
                                    className="border p-2 rounded"
                                />
                                <input
                                    type="text"
                                    placeholder="Expiry Date (MM/YY)"
                                    value={cardInfo.expiry}
                                    onChange={(e) =>
                                        setCardInfo({ ...cardInfo, expiry: e.target.value })
                                    }
                                    className="border p-2 rounded"
                                />
                                <input
                                    type="text"
                                    placeholder="CVV"
                                    value={cardInfo.cvv}
                                    onChange={(e) =>
                                        setCardInfo({ ...cardInfo, cvv: e.target.value })
                                    }
                                    className="border p-2 rounded"
                                />
                                <button
                                    onClick={handlePayment}
                                    className="bg-primary-color text-white py-2 px-4 rounded"
                                >
                                    Confirm Payment
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
