import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react"; // 🟡 Icon mũi tên

interface Props {
  total: number;
  onClear: () => void;
}

const CartSummary: React.FC<Props> = ({ total, onClear }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
      {/* 🧹 Nút xóa giỏ hàng */}
      <button
        onClick={onClear}
        className="px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-100 transition"
      >
        Clear All
      </button>

      {/* 💰 Tổng cộng + nút thanh toán */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="text-xl font-semibold">
          Total:{" "}
          <span className="text-[#A97132]">
            {total.toLocaleString("vi-VN")}₫
          </span>
        </div>

        {/* 💎 Nút Thanh toán ngay (Luxury gradient + animated arrow) */}
        <button
          onClick={() => navigate("/checkout")}
          className="group flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#A97132] to-[#D4AF37]
                     text-white font-semibold rounded-full shadow-md
                     hover:shadow-lg hover:scale-[1.04]
                     transition-all duration-300 ease-in-out"
        >
          Checkout
          {/* 🏹 Mũi tên có animation khi hover */}
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
