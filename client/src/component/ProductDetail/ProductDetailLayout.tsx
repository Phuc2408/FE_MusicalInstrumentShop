import React from "react";
import ProductGallery from "./ProductGallery";
import ProductTabs from "./ProductSpec";
import FAQSection from "./FAQSection";
import { ShoppingCart, Heart } from "lucide-react";
import { useCart } from "../../context/CartContext"; // ✅ import context
import type { SimpleProduct } from "../../sample/sample";

interface Props {
  product: SimpleProduct;
}

const ProductDetailMain: React.FC<Props> = ({ product }) => {
  const { addToCart } = useCart(); // ✅ lấy context

  // ✅ Lấy ảnh đầu tiên (nếu có)
  const firstImage =
    typeof product.image === "string"
      ? product.image
      : product.image?.[0] || "/default-image.png";

  return (
    <section className="w-full py-8">
      {/* Grid: Gallery + Info */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_0.9fr] gap-10 items-start">
        {/* Left: Gallery */}
        <ProductGallery images={product.image} />

        {/* Right: Info + Tabs */}
        <div className="flex flex-col gap-6">
          {/* Product Info */}
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-semibold leading-snug">
              {product.name}
            </h1>

            <p className="text-3xl font-bold text-gray-900">{product.price}</p>

            <p className="text-sm text-gray-500">
              {product.status === "Có hàng" ? "Còn hàng" : "Hết hàng"}
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-3 mt-3">
              {/* 🛒 Add to Cart */}
              <button
                onClick={() => {
                  console.log("🧩 Clicked Add to Cart");
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: firstImage,
                    quantity: 1,
                  });
                }}
                disabled={product.status === "Hết hàng"}
                className={`flex items-center gap-2 py-2 px-5 rounded-lg transition ${
                  product.status === "Hết hàng"
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                <ShoppingCart size={18} />
                {product.status === "Hết hàng" ? "Hết hàng" : "Add to cart"}
              </button>

              {/* ❤️ Wishlist */}
              <button className="flex items-center gap-2 border border-gray-300 py-2 px-5 rounded-lg hover:bg-gray-100 transition">
                <Heart size={18} />
                Wishlist
              </button>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="-mt-2">
            <ProductTabs description={product.description} />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-8">
        <FAQSection />
      </div>
    </section>
  );
};

export default ProductDetailMain;
