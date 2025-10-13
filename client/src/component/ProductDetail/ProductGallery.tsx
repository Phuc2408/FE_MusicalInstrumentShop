import React, { useState } from "react";

interface Props {
  images: string[];
}

const ProductGallery: React.FC<Props> = ({ images }) => {
  const [selected, setSelected] = useState(images[0]);

  return (
    <div className="flex flex-col items-center">
      <img
        src={selected}
        alt="Product"
        className="object-contain max-h-[500px] p-6 rounded-lg border border-gray-200 shadow-sm object-contain"
      />
      <div className="flex mt-4 gap-2 justify-center flex-wrap">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className={`w-16 h-16 border rounded-md cursor-pointer object-contain ${
              img === selected ? "border-gray-800" : "border-gray-300"
            }`}
            onClick={() => setSelected(img)}
          />
        ))}
      </div>
      <p className="text-xs text-gray-400 mt-2">Hover over image to zoom in</p>
    </div>
  );
};

export default ProductGallery;
