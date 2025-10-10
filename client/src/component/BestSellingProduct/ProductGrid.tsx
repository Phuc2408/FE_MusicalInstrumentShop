import React, { useRef } from 'react'; // Import useRef để điều khiển Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type SwiperCore from 'swiper'; // Import SwiperCore type

import ProductCard from "../ProductCard";

// 1. Định nghĩa Interface cho cấu trúc dữ liệu thô (RawProductData)
export interface RawProductData {
    "Category": string; 
    "Collection": string; 
    "Brand": string; 
    "Product Name": string; 
    "Price": string; 
    "Description": string; 
    "Images": string[]; 
    "stock_quantity": number;
}

// 2. Định nghĩa Props cho component
interface ProductGridProps {
    products: RawProductData[]; // Prop products là một mảng các RawProductData
}

// 3. Áp dụng kiểu dữ liệu và code TSX
export default function ProductGrid({ products }: ProductGridProps) {
    
    // Khai báo useRef với kiểu SwiperCore
    const swiperRef = useRef<SwiperCore | null>(null); 

    return (
        <div className="relative product-grid-swiper-container">
            
            {/* Sử dụng thẻ style để tùy chỉnh mũi tên (Dùng biến CSS của Swiper) */}
            <style jsx global>{`
                .product-grid-swiper-container .swiper-button-prev,
                .product-grid-swiper-container .swiper-button-next {
                    --swiper-navigation-size: 28px;
                    --swiper-navigation-color: #9CA3AF;
                    margin-top: 0;
                    top: 50%;
                    transform: translateY(-50%);
                }
                
                .product-grid-swiper-container .swiper-button-prev:after,
                .product-grid-swiper-container .swiper-button-next:after {
                    font-size: 1.5rem !important;
                }

                .product-grid-swiper-container .swiper-button-prev,
                .product-grid-swiper-container .swiper-button-next {
                    background-image: none !important;
                }
            `}</style>

            <Swiper
                // Khai báo module Navigation ở đây là không cần thiết nếu dùng nút custom
                // nhưng tôi vẫn giữ lại để tương thích với Swiper CSS variables
                modules={[Navigation]} 
                breakpoints={{
                    0: { slidesPerView: 1.2, spaceBetween: 16 },
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 4, spaceBetween: 24 },
                }}
                navigation // Kích hoạt Navigation để sử dụng CSS variables
                className="w-full product-grid-swiper h-full"
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {products.map((product, index) => (
                    // Cần dùng key ổn định hơn index, nhưng tạm dùng index
                    <SwiperSlide key={index}> 
                        {/* Truyền đối tượng product thô vào ProductCard */}
                        <ProductCard product={product} /> 
                    </SwiperSlide>
                ))}
            </Swiper>
            
            {/* ⬅️ Nút PREV (Bên trái) - Sử dụng Tailwind */}
            <button
                onClick={() => swiperRef.current?.slidePrev()} 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 
                           w-8 h-8 bg-white border border-gray-100 rounded-full shadow-md 
                           flex items-center justify-center cursor-pointer 
                           text-gray-500 hover:text-gray-700 hover:shadow-lg transition duration-150"
                aria-label="Previous slide"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </button>

            {/* ➡️ Nút NEXT (Bên phải) - Sử dụng Tailwind */}
            <button
                onClick={() => swiperRef.current?.slideNext()} 
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 
                           w-8 h-8 bg-white border border-gray-100 rounded-full shadow-md 
                           flex items-center justify-center cursor-pointer 
                           text-gray-500 hover:text-gray-700 hover:shadow-lg transition duration-150"
                aria-label="Next slide"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </button>
        </div>
    );
}