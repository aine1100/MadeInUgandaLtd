import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type InputField = {
  name: string;
  className: string;
  type: string;
  key: keyof FormData;
};

type FormData = {
  phoneNumber: string;
  password: string;
};

export default function Login() {
  const inputData: InputField[] = [
    {
      name: "Phone Number",
      className: "h-10",
      type: "text",
      key: "phoneNumber", // Match this key with `formData` key
    },
    {
      name: "Password",
      className: "h-10",
      type: "password",
      key: "password", // Match this key with `formData` key
    },
  ];

  const [formData, setFormData] = useState<FormData>({
    phoneNumber: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/auth/login", formData);
      toast.success(response.data.message || "Login successful!");
      setTimeout(() => {
        navigate("/Dashboard");
      }, 2000); // 2-second delay before navigating to the dashboard
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Failed to login. Please try again.");
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center justify-center">
      <div className="p-10 bg-white shadow-sm rounded-lg flex-col gap-5 flex w-[500px]">
        <h1 className="text-xl font-semibold text-gray-600 text-center">
          Login to Your Account
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {inputData.map((field, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <label htmlFor={field.key} className="text-gray-700">
                {field.name}
              </label>
              <input
                id={field.key}
                name={field.key} // Ensure the name matches the `formData` keys
                type={field.type}
                placeholder={field.name}
                value={formData[field.key]} // Bind `value` correctly
                onChange={handleChange}
                className="w-full px-4 py-2 text-sm text-black placeholder:text-gray-500 focus:outline-none border border-gray-300 rounded-md shadow-sm focus:border-primary-color"
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full p-2 text-white font-semibold rounded-md bg-primary-color hover:bg-primary-dark transition-all duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-gray-500 text-md text-center mt-2">
          Don’t have an account?{" "}
          <a href="/register" className="text-primary-color hover:underline">
            Register
          </a>
        </p>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
}
