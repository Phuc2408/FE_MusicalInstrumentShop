import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface Props {
  description: string;
}

const ProductTabs: React.FC<Props> = ({ description }) => {
  const [openTab, setOpenTab] = useState<number | null>(null);

  const tabs = [
    {
      title: "Free Shipping & Collection",
      content:
        "Delivered in 3–5 days. Free collection available at select stores.",
    },
    {
      title: "About This Product",
      content: description,
    },
    {
      title: "Specifications",
      content: `
      Body Shape: ST Style
      Body Material: Poplar
      Body Colour: Dove Grey
      Body Finish: Gloss
      Fretboard Material: Laurel
      Fretboard Radius: 12"
      Scale Length: 25"
      No. of Frets: 22
      Fretboard Inlays: Dot
      Pickups: HSS
      Bridge: 6 Point Vintage Tremolo
      Strings: 09-42
      Tuning Machines: Dot
      Hardware Finish: Chrome
      Case: None
      `,
    },
  ];

  return (
    <div className="w-[560px] max-w-full">
      {tabs.map((tab, i) => {
        const isOpen = openTab === i;
        return (
          <div
            key={i}
            className={`transition-all duration-300 rounded-md border border-gray-200 mb-2 ${
              isOpen ? "bg-white" : "bg-[#F7F6F3]"
            }`}
          >
            {/* Header */}
            <button
              onClick={() => setOpenTab(isOpen ? null : i)}
              className="w-full flex justify-between items-center px-5 py-4 text-left hover:bg-gray-100 transition"
            >
              <span className="font-semibold text-[15px] text-gray-800">
                {tab.title}
              </span>

              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200">
                {isOpen ? (
                  <Minus size={14} className="text-gray-600" />
                ) : (
                  <Plus size={14} className="text-gray-600" />
                )}
              </span>
            </button>

            {/* Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 bg-white whitespace-pre-line">
                {tab.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductTabs;
