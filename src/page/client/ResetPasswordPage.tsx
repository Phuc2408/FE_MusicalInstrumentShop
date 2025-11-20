import ResetPasswordForm from "../../component/Auth/ResetPasswordForm";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import Layout from "../../component/Layout";

export default function ResetPasswordPage() {
    return (
        <>
            <Header />
            <Layout>
            <ResetPasswordForm />
            </Layout>
            <Footer />
        </>
    );
}