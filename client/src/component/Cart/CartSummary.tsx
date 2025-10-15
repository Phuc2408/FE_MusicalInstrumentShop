import React from "react";

interface Props {
  total: number;
  onClear: () => void;
}

const CartSummary: React.FC<Props> = ({ total, onClear }) => (
  <div className="flex justify-between items-center mt-6">
    <button
      onClick={onClear}
      className="px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-100"
    >
      Clear Cart
    </button>
    <div className="text-xl font-semibold">
      Total: <span className="text-[#A97132]">${total.toFixed(2)}</span>
    </div>
  </div>
);

export default CartSummary;
