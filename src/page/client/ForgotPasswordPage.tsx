import Layout from "../../component/Layout";
import ForgotEmailForm from "../../component/Auth/ForgotEmailForm";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

export default function ForgotPasswordPage() {
    return (
        <>
            <Header />
            <Layout>
                <ForgotEmailForm />
            </Layout>
            <Footer />
        </>
    );
}
