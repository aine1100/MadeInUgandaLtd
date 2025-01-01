import { FaUser } from "react-icons/fa";

export default function Header(){
    return(
        <div className="w-full flex justify-between  bg-white shadow-sm px-10  py-4 h-[60px]">
            <p className="text-gray-600 font-semibold text-md">Welcome Aine </p>
            <div className=" flex gap-5 items-center justify-center">
                <a href=""><FaUser className="text-gray-600 text-xl"/></a>
                <p className="text-gray-500 text-md">Profile</p>

            </div>

        </div>

    )
}