import { Link } from "react-router-dom";
import type { IProduct } from "../types/product.type";


// 💡 SỬ DỤNG IProduct LÀM KIỂU PROP
interface ProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {

  // Lấy tên Brand từ IBrand
  const brandName = product.brand?.name || "Brand không rõ";

  // Lấy tên sản phẩm
  const productName = product.product_name || "Sản phẩm không tên";

  // Lấy giá hiển thị (đã có đơn vị tiền tệ)
  const productPrice = product.price_display || "Liên hệ";

  // Lấy ảnh đầu tiên từ mảng 'images' (giả định IProductImage có trường image_url)
  const firstImage = product.images?.[0]?.image_url || "/default-image.png";

  // Xác định trạng thái dựa trên stock_quantity
  const productStatus = product.stock_quantity > 0 ? "Có hàng" : "Hết hàng";

  return (
    <div className="group bg-white p-3 border border-gray-100 rounded-xl shadow-sm cursor-pointer h-full flex flex-col hover:shadow-md transition-all">
      <Link to={`/products/${product.slug}`} state={{ productData: product }} className="flex flex-col flex-grow">
        <div className="relative mb-3 aspect-square overflow-hidden flex items-center justify-center">
          <img
            src={firstImage}
            alt={productName}
            className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
          {productStatus === "Hết hàng" && (
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
              Hết hàng
            </span>
          )}
        </div>

        <div className="flex flex-col space-y-1.5 p-1 flex-grow">
          <p className="text-gray-500 text-xs">{brandName}</p>
          <h3 className="text-base font-semibold text-gray-800 line-clamp-2 leading-tight flex-grow">
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