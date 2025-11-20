import Layout from "../../component/Layout";
import SignupForm from "../../component/Auth/SignupForm"
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

export default function LoginPage() {
    return (
        <>
            <Header/>
            <Layout>
                <SignupForm/>
            </Layout>
            <Footer/>
        </>
    )
}