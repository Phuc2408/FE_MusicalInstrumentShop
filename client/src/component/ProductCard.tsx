import React from 'react';

// 1. Định nghĩa Interface cho cấu trúc dữ liệu thô (gretschData)
// Các thuộc tính quan trọng phải khớp chính xác với keys trong JSON/Object thô
export interface RawProductData {
    "Category": string; 
    "Collection": string; 
    "Brand": string; // Dùng cho Brand Name
    "Product Name": string; // Dùng cho Tên sản phẩm
    "Price": string; // Dùng cho Giá
    "Description": string; 
    "Images": string[]; // Dùng cho Ảnh
    "stock_quantity": number;
    // ... và các thuộc tính khác
}

// Định nghĩa Props cho component
interface ProductCardProps {
    product: RawProductData;
}

// 2. Áp dụng kiểu dữ liệu và truy xuất thuộc tính
export default function ProductCard({ product }: ProductCardProps) {
    
    // Truy xuất thuộc tính bằng cú pháp dấu ngoặc vuông []
    const brandName = product["Brand"] || 'Brand không rõ';
    const productName = product["Product Name"] || 'Sản phẩm không tên';
    const productPrice = product["Price"] || 'Liên hệ';
    const firstImage = product["Images"]?.[0] || 'đường dẫn ảnh mặc định';
    
    return (
        // Khung card: Nền trắng, bo góc, padding
        <div className="group bg-white p-3 border border-gray-100 rounded-xl shadow-sm cursor-pointer h-full">
            
            {/* Khu vực ảnh */}
            <div className="relative mb-3 aspect-square overflow-hidden flex items-center justify-center">
                <img 
                    src={firstImage} 
                    alt={productName} 
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105" 
                />
            </div>
            
            {/* Thông tin sản phẩm */}
            <div className="flex flex-col space-y-1.5 p-1">
                
                {/* Brand Name */}
                <p className="text-gray-500 text-xs">{brandName}</p>
                
                {/* Tên sản phẩm */}
                <h3 className="text-base font-semibold text-gray-800 line-clamp-2 leading-tight">
                    {productName}
                </h3>

                {/* --- CHỈ HIỂN THỊ GIÁ GỐC (Price) --- */}
                <div className="flex items-end pt-1">
                    {/* Giá gốc */}
                    <p className="text-xl font-bold text-red-600">
                        {productPrice}
                    </p>
                </div>
                {/* --- END GIÁ --- */}
                
                {/* Nút Xem chi tiết (Tùy chọn) */}
                <button className="mt-2 w-full py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-200">
                    Xem chi tiết
                </button>
            </div>
        </div>
    );
}