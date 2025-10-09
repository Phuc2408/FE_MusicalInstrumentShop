import InputField from "./InputField"

export default function LoginForm() {
    return (
        <form className="w-[400px] space-y-4">
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
        </form>
    )
}