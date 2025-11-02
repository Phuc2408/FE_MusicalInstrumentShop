import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export interface RawProductData {
  id: number;
  name: string;
  price: string;
  image: string[];
  status: "Có hàng" | "Hết hàng";
  brand?: string;
  description: string;
}

interface ProductCardProps {
  product: RawProductData;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const brandName = product.brand || "Brand không rõ";
  const productName = product.name || "Sản phẩm không tên";
  const productPrice = product.price || "Liên hệ";
  const firstImage = product.image[0] || "/default-image.png";

  // Parse price -> number (vì hiện tại đang là string)
  const parsedPrice =
    typeof product.price === "string"
      ? parseFloat(product.price.replace(/[^0-9.-]+/g, "")) || 0
      : product.price;

  return (
    <div className="group bg-white p-3 border border-gray-100 rounded-xl shadow-sm cursor-pointer h-full block hover:shadow-md transition-all">
      {/* Khu vực Link chuyển sang trang chi tiết */}
      <Link to={`/product/${product.id}`}>
        <div className="relative mb-3 aspect-square overflow-hidden flex items-center justify-center">
          <img
            src={firstImage}
            alt={productName}
            className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col space-y-1.5 p-1">
          <p className="text-gray-500 text-xs">{brandName}</p>
          <h3 className="text-base font-semibold text-gray-800 line-clamp-2 leading-tight">
            {productName}
          </h3>
          <div className="flex items-end pt-1">
            <p className="text-xl font-bold text-red-600">{productPrice}</p>
          </div>
        </div>
      </Link>      
    </div>
  );
}
