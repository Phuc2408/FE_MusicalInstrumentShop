import React from "react";
import { Heart } from "lucide-react";
import type { SimpleProduct } from "../../sample/sample";

interface Props {
  product: SimpleProduct;
}

const ProductInfo: React.FC<Props> = ({ product }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl md:text-2xl font-semibold leading-snug">
        {product.name}
      </h1>

      <p className="text-3xl font-bold text-gray-900">{product.price}</p>

      <button className="bg-black text-white py-2 px-4 rounded-lg w-fit font-medium hover:bg-gray-800">
        Contact Us
      </button>

      <button className="flex items-center gap-2 text-gray-600 hover:text-black mt-1">
        <Heart size={18} /> Add to Wishlist
      </button>
    </div>
  );
};

export default ProductInfo;
