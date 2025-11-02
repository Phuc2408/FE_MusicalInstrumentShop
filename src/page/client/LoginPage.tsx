import Layout from "../../component/Layout";
import LoginForm from "../../component/LoginForm";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

export default function LoginPage() {
    return (
        <>
            <Header/>
            <Layout>
                <LoginForm/>
            </Layout>
            <Footer/>
        </>
    )
}