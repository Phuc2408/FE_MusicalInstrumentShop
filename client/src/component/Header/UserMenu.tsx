import React from "react";
import { Heart, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext"; // ✅ Thêm dòng này

const UserMenu: React.FC = () => {
  const { cart } = useCart(); // ✅ Lấy cart từ context
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); // ✅ Tổng quantity

  return (
    <div className="flex items-center text-sm text-black gap-3 mr-6">
      {/* ❤️ Wishlist */}
      <Heart className="cursor-pointer hover:text-[#A97132] transition" size={18} />

      {/* 🛒 Giỏ hàng */}
      <div className="relative">
        <Link
          to="/cart"
          className="cursor-pointer hover:text-[#A97132] transition"
        >
          <ShoppingCart size={20} />
        </Link>

        {/* 🟡 Badge hiển thị số lượng */}
        {totalItems > 0 && (
          <span
            className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-semibold
                       w-4 h-4 flex items-center justify-center rounded-full shadow-sm
                       transition-all duration-200 ease-in-out animate-bounce"
          >
            {totalItems}
          </span>
        )}
      </div>

      {/* 👤 User info */}
      <div className="flex items-center gap-1">
        <User className="cursor-pointer hover:text-[#A97132] transition" size={18} />
        <span className="font-medium">Hello, Phuc</span>
      </div>
    </div>
  );
};

export default UserMenu;
