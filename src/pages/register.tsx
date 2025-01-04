import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

interface FormField {
  name: string;
  key: keyof FormData;
  className: string;
  type: string;
}

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
}

export default function Register() {
  const inputData: FormField[] = [
    {
      name: "Full Name Or Company Name",
      key: "fullName",
      className: "h-10",
      type: "text",
    },
    {
      name: "Email",
      key: "email",
      className: "h-10",
      type: "email",
    },
    {
      name: "Phone Number",
      key: "phoneNumber",
      className: "h-10",
      type: "text",
    },
    {
      name: "Password",
      key: "password",
      className: "h-10",
      type: "password",
    },
  ];

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://madeinugandabackend-2.onrender.com", formData);
      toast.success(response.data.message || "User registered successfully");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to register");
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center justify-center">
      <div className="p-10 bg-white shadow-sm rounded-lg flex-col gap-5 flex w-[500px] h-[550px]">
        <h1 className="text-xl font-semibold text-gray-600 text-center">
          Welcome Create Your Account
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {inputData.map((field, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <label htmlFor={field.key} className="text-gray-700">
                {field.name}
              </label>
              <input
                id={field.key}
                name={field.key}
                type={field.type}
                placeholder={field.name}
                value={formData[field.key]}
                onChange={handleChange}
                className={`w-full md:w-[400px] px-4 py-2 text-sm text-black placeholder:text-gray-500 focus:outline-none border border-gray-300 rounded-md shadow-sm focus:border-primary-color`}
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-32 p-2 text-white font-semibold rounded-md bg-primary-color hover:bg-primary-dark transition-all duration-300"
          >
            Register
          </button>
        </form>
        <p className="text-gray-500 text-md">
          Already have an account?{" "}
          <a href="/login" className="text-primary-color hover:underline">
            Login
          </a>
        </p>
      </div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
    </div>
  );
}
