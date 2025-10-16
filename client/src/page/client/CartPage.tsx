import React from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import Breadcrumb from "../../component/Breadcrumb";
import Layout from "../../component/Layout";
import CartContent from "../../component/Cart/CartContent";

const CartPage: React.FC = () => {
  return (
    <>
      <Header />

      <Breadcrumb />

      <Layout>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-[#A67C00] to-[#D4AF37] text-transparent bg-clip-text">
            Your Shopping Cart
          </h1>

        <CartContent />
      </Layout>

      <Footer />
    </>
  );
};

export default CartPage;
