import { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "./InputField";

export default function ForgotPasswordForm() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        if (!email) {
            setError("Please enter your email.");
            return;
        }

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            setError("Email is invalid.");
            return;
        }

        // Xử lý logic gọi API gửi mail tại đây
        // await forgotPasswordAPI(email)...

        // Giả lập thành công
        setSuccess("The instruction has been sent to your email!");
        // setEmail(""); // Có thể clear input nếu muốn
    };

    return (
        <div className="flex justify-center items-center p-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md p-8 space-y-6 bg-white border border-gray-200 rounded-xl shadow-xl"
            >
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800">Forgot Password</h2>
                    <p className="mt-2 text-sm text-gray-500">
                        Enter your email address and we'll send you instructions to reset your password.
                    </p>
                </div>

                {error && (
                    <div className="p-3 text-sm text-red-700 bg-red-100 rounded-lg">
                        {error}
                    </div>
                )}

                {/* Hiển thị thông báo thành công */}
                {success && (
                    <div className="p-3 text-sm text-green-700 bg-green-100 rounded-lg">
                        {success}
                    </div>
                )}

                <InputField
                    label="Email Address"
                    required
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button
                    type="submit"
                    className="w-full py-2.5 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-150 shadow-md"
                >
                    Send instruction
                </button>

                <p className="text-center text-sm text-gray-600">
                    Remember your password?
                    <Link
                        to="/login"
                        className="ml-1 font-medium text-red-500 hover:text-red-600 transition duration-150"
                    >
                        Back to Login
                    </Link>
                </p>
            </form>
        </div>
    );
}