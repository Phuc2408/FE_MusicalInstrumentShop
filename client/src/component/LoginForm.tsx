import InputField from "./InputField";
import { Link } from "react-router-dom"; 
import { useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc';

export default function LoginForm() {
    const handleGoogleLogin = async()=>{}
    return (
        <div className="flex justify-center items-center min-h-screen p-4"> 
            
            <form className="w-full max-w-md p-8 space-y-6 rounded-xl shadow-xl">
                
                <InputField
                    label="Email Address"
                    required
                    type="email"
                    placeholder="Enter Your Email"
                />

                <InputField
                    label="Password"
                    required
                    type="password"
                    placeholder="Enter Your Password"
                />

                <div className="flex justify-between items-center text-sm">
                    <label className="flex items-center space-x-2 text-gray-700">
                        <input 
                            type="checkbox" 
                            className="rounded border-gray-300 text-red-500 focus:ring-red-500 h-4 w-4" 
                        />
                        <span>Remember Me</span>
                    </label>

                    <Link 
                        to="/forgot-password" 
                        className="text-gray-500 hover:text-red-600 transition duration-150"
                    >
                        Forgot Password?
                    </Link>
                </div>

                <button
                    type="submit"
                    className="w-full py-2.5 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-150 shadow-md"
                >
                    Login
                </button>

                <p className=" text-center text-sm text-gray-600">
                    Don't have an account? 
                    <Link 
                        to="/signup" 
                        className="ml-1 font-medium text-red-500 hover:text-red-600 transition duration-150"
                    >
                        Signup?
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
            </form>
        </div>
    );
}