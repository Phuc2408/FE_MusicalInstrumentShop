import { useNavigate } from "react-router-dom";
import ResetPasswordForm from "../../component/Auth/ResetPasswordForm"

export default function ResetPasswordPage() {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center p-4">
            <div>
                <ResetPasswordForm onSuccess={() => navigate("/login")} />

                <p className="pt-4 text-center text-sm text-gray-600">
                    <span 
                        onClick={() => navigate("/login")}
                        className="text-red-500 font-medium hover:text-red-600 transition cursor-pointer"
                    >
                        Quay lại đăng nhập
                    </span>
                </p>
            </div>
        </div>
    );
}
