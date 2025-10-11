import InputField from "./InputField";
import { Link } from "react-router-dom"; 
import { useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc';

export default function SignupForm() {
    const handleGoogleLogin = async()=>{}
    return (
        <div className="flex justify-center items-center p-4"> 
            <form className="w-full max-w-xl p-8 space-y-4 bg-white border border-gray-200 rounded-xl shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField label="First Name" required type="text" placeholder="Enter Your First Name" />
                    <InputField label="Last Name" required type="text" placeholder="Enter Your Last Name" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField label="Email" required type="email" placeholder="Enter Your email" />
                    <InputField label="Phone Number" required type="tel" placeholder="Enter Your phone number" />
                </div>

                <InputField label="Address" required type="text" placeholder="Address" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField label="Country" required type="text" placeholder="Country" inputClassName="bg-gray-100" />
                    <InputField label="Region State" required type="text" placeholder="Region/State" inputClassName="bg-gray-100" />
                </div>
                <div>
                    <button
                            type="submit"
                            className="w-full py-2.5 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-150 shadow-md"
                        >
                            Signup
                        </button>

                        <p className="pt-4 text-center text-sm text-gray-600">
                            Have an account? 
                            <Link 
                                to="/login" 
                                className="ml-1 font-medium text-red-500 hover:text-red-600 transition duration-150"
                            >
                                Login
                            </Link>
                    </p>
                                    <div className="mt-4 space-y-4">
                <button
                    onClick={() => handleGoogleLogin()}
                    className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                    <FcGoogle className="w-6 h-6 mr-3" />
                    <span className="font-semibold text-gray-700">Đăng nhập với Google</span>
                </button>
            </div>
                </div>
            </form>
        </div>
    )
}