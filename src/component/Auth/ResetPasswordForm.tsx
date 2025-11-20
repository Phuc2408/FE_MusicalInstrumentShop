import { useState } from "react";
import InputField from "./InputField";

export default function ResetPasswordForm({ onSuccess }: { onSuccess?: () => void }) {
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!password || !confirm) {
            setError("Vui lòng nhập đầy đủ thông tin.");
            return;
        }

        if (password !== confirm) {
            setError("Mật khẩu không khớp.");
            return;
        }

        alert("Đặt lại mật khẩu thành công!");
        onSuccess && onSuccess();
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl p-8 space-y-4 bg-white border border-gray-200 rounded-xl shadow-xl"
        >
            <h2 className="text-2xl font-semibold text-center text-gray-800 pb-2">
                Đặt lại mật khẩu
            </h2>

            <InputField
                label="Mật khẩu mới"
                required
                type="password"
                placeholder="Nhập mật khẩu mới"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <InputField
                label="Xác nhận mật khẩu"
                required
                type="password"
                placeholder="Nhập lại mật khẩu"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                error={error ?? undefined}
            />

            <button
                type="submit"
                className="w-full py-2.5 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-150 shadow-md"
            >
                Xác nhận
            </button>
        </form>
    );
}
