import React from "react";
import { ShoppingCart, Heart } from "lucide-react";
import { useCart } from "../../context/CartContext"; 
import type { SimpleProduct } from "../../sample/sample";

interface Props {
  product: SimpleProduct;
}

const ProductInfo: React.FC<Props> = ({ product }) => {
  const { addToCart } = useCart(); 

  // Lấy ảnh đầu tiên (nếu có)
  const firstImage =
    typeof product.image === "string"
      ? product.image
      : product.image?.[0] || "/default-image.png";

  // Parse giá sang number nếu đang là string
  const parsedPrice =
    typeof product.price === "string"
      ? parseFloat(product.price.replace(/[^0-9.-]+/g, "")) || 0
      : product.price;

  return (
    <div className="flex flex-col gap-4">
      {/* Product Title */}
      <h1 className="text-2xl font-semibold leading-snug text-gray-900">
        {product.name}
      </h1>

      {/* Price */}
      <p className="text-3xl font-bold text-gray-900">{product.price}</p>

      {/* Availability */}
      <p className="text-sm text-gray-500">
        {product.status === "Có hàng" ? "Còn hàng" : "Hết hàng"}
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-3 mt-3">
        {/* 🛒 Nút Add to Cart */}
        <button
  onClick={() =>
    addToCart({
      id: product.id,
      name: product.name,
      price: typeof product.price === "string"
        ? parseFloat(product.price.replace(/[^0-9.-]+/g, "")) || 0
        : product.price,
      image:
        typeof product.image === "string"
          ? product.image
          : product.image?.[0] || "/default-image.png",
      quantity: 1,
    })
  }
  className="flex items-center gap-2 bg-black text-white py-2 px-5 rounded-lg hover:bg-gray-800 transition"
>
  <ShoppingCart size={18} />
  Add to Cart
</button>


        {/* ❤️ Wishlist */}
        <button className="flex items-center gap-2 border border-gray-300 py-2 px-5 rounded-lg hover:bg-gray-100 transition">
          <Heart size={18} />
          Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
