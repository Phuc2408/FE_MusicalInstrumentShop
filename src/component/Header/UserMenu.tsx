import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, Heart, LogOut, Package, ShoppingCart, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import type { UserData } from "../../types/auth.type";
import { logoutAPI } from "../../services/client/auth.api";

const UserMenu: React.FC = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const cartItems = cart ?? [];
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Thêm state để kích hoạt animation khi cart thay đổi
  const [animateCart, setAnimateCart] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);

  // Cho dropdown menu
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user_data") || sessionStorage.getItem("user_data");

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setCurrentUser(parsedUser);
      } catch (error) {
        console.error("Lỗi khi đọc user_data:", error);
        // localStorage.removeItem("user_data");
      }
    }
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (totalItems > 0) {
      setAnimateCart(true);
      const timer = setTimeout(() => setAnimateCart(false), 600); // reset sau 0.6s
      return () => clearTimeout(timer);
    }
  }, [totalItems]);

  const handleLogout = async () => {
    try {
      await logoutAPI();
    } catch (error) {
      console.log("Logout error", error);
    }
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user_data");
    sessionStorage.clear();

    setCurrentUser(null);
    setIsOpen(false);
    navigate("/login");
    window.location.reload();
  };

  return (
    <div className="flex items-center text-sm text-black gap-3 mr-6">
      {/* ❤️ Wishlist */}
      <Heart className="cursor-pointer hover:text-[#A97132] transition" size={18} />

      {/* 🛒 Giỏ hàng */}
      <div className="relative">
        <Link
          to="/cart"
          className={`cursor-pointer transition-all ${animateCart ? "text-[#A97132] scale-110 rotate-3" : "hover:text-[#A97132]"
            }`}
        >
          <ShoppingCart size={20} />
        </Link>

        {/* 🟡 Badge hiển thị số lượng */}
        {totalItems > 0 && (
          <span
            className={`absolute -top-2 -right-2 bg-[#A97132] text-white text-[10px] font-semibold
                        w-4 h-4 flex items-center justify-center rounded-full shadow-sm
                        transition-all duration-300 ${animateCart ? "scale-125 animate-bounce" : "scale-100"
              }`}
          >
            {totalItems}
          </span>
        )}
      </div>

      {/* 👤 User info */}
      <div className="relative" ref={menuRef}>
        {currentUser ? (
          <>
            {/* Nút Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1 hover:text-[#A97132] transition font-medium focus:outline-none"
            >
              <User size={20} />
              <span className="max-w-[100px] truncate hidden sm:block">
                Hello, {currentUser.full_name.split(' ').pop()}
              </span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-white rounded-lg shadow-xl border border-gray-100 z-50 overflow-hidden animate-fade-in-up origin-top-right">

                {/* Header */}
                <div className="bg-[#fdfbf7] px-4 py-3 border-b border-gray-100 text-center">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Welcome Back</p>
                  <p className="font-bold text-[#bfa05a] truncate">{currentUser.full_name}</p>
                </div>

                <div className="py-1">
                  {/* 1. Account Details */}
                  <Link
                    to="/account"
                    className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#A97132] transition"
                    onClick={() => setIsOpen(false)}
                  >
                    <User size={16} className="mr-3" />
                    Account Details
                  </Link>

                  {/* 2. Your Orders */}
                  <Link
                    to="/orders"
                    className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#A97132] transition"
                    onClick={() => setIsOpen(false)}
                  >
                    <Package size={16} className="mr-3" />
                    Your Orders
                  </Link>

                  <div className="border-t border-gray-100 my-1"></div>

                  {/* 3. Log Out */}
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition text-left"
                  >
                    <LogOut size={16} className="mr-3" />
                    Log Out
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <Link to="/login" className="flex items-center gap-1 font-medium hover:text-[#A97132] transition cursor-pointer">
            <User size={20} />
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
