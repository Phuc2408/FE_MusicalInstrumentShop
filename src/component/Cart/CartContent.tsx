import React from "react";
import { useCart } from "../../context/CartContext";
import CartTable from "./CartTable";
import CartSummary from "./CartSummary";

/**
 * CartContent
 * - Quản lý toàn bộ logic giỏ hàng: tăng/giảm số lượng, xóa, tính tổng
 * - Dùng lại được ở nhiều nơi (CartPage, MiniCart, Checkout)
 */
const CartContent: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  // Tính tổng tiền (vì price là chuỗi kiểu "16.830.000₫")
  const total = cart.reduce((sum, item) => {
    const numericPrice = parseFloat(item.price.replace(/[^\d]/g, "")) || 0;
    return sum + numericPrice * item.quantity;
  }, 0);

  // Nếu giỏ hàng trống
  if (cart.length === 0) {
    return (
      <p className="text-gray-500 text-center mt-10 text-lg">
        Your cart is empty
      </p>
    );
  }

  // Nếu có sản phẩm
  return (
    <div className="space-y-6">
      {/* Bảng danh sách sản phẩm */}
      <CartTable
        items={cart}
        onIncrease={(id) =>
          updateQuantity(
            id,
            cart.find((i) => i.id === id)!.quantity + 1
          )
        }
        onDecrease={(id) =>
          updateQuantity(
            id,
            cart.find((i) => i.id === id)!.quantity - 1
          )
        }
        onRemove={removeFromCart}
      />

      {/* Tổng cộng */}
      <CartSummary total={total} onClear={clearCart} />
    </div>
  );
};

export default CartContent;
