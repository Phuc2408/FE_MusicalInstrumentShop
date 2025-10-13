import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import Breadcrumb from "../../component/Breadcrumb";
import ProductDetailMain from "../../component/ProductDetail/ProductDetailLayout";
import productData from "../../sample/sample";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = productData.sampleProducts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <>
        <Header />
        <div className="text-center py-20 text-gray-600">
          Product not found.
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Breadcrumb />
      <ProductDetailMain product={product} />
      
      <Footer />
    </>
  );
};

export default ProductDetailPage;
