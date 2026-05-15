"use client";

import { useState, useMemo } from "react";
import ProductGridSlider from "./ProductGridSlider";

interface FeaturedProductsSliderProps {
  products: any[];
}

const TABS = [
  { id: "all", label: "All Products" },
  { id: "laptop", label: "Laptops" },
  { id: "tablet", label: "Tablets" },
  { id: "desktop", label: "Desktops" },
  { id: "mobile", label: "Mobiles" },
];

export default function FeaturedProductsSlider({ products }: FeaturedProductsSliderProps) {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProducts = useMemo(() => {
    if (activeTab === "all") return products;

    return products.filter((product: any) => {
      const name = product.name?.toLowerCase() || "";
      const desc = product.description?.toLowerCase() || "";
      const content = name + " " + desc;

      switch (activeTab) {
        case "laptop":
          return content.includes("laptop") || content.includes("notebook") || content.includes("macbook");
        case "tablet":
          return content.includes("tablet") || content.includes("ipad") || content.includes("modio m");
        case "desktop":
          return content.includes("desktop") || content.includes("workstation") || content.includes("sff") || content.includes("all-in-one");
        case "mobile":
          return content.includes("mobile") || content.includes("iphone") || content.includes("redmi") || content.includes("smartphone");
        default:
          return true;
      }
    });
  }, [activeTab, products]);

  return (
    <div className="space-y-6">
      {/* Tabs Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-100 pb-4">
        <h2 className="text-2xl font-bold text-black mb-4 md:mb-0">Featured Products</h2>
        
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200 scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Slider */}
      {filteredProducts.length > 0 ? (
        <ProductGridSlider products={filteredProducts} title="" hideTitle />
      ) : (
        <div className="py-20 text-center bg-gray-50 rounded-xl border border-dashed border-gray-200">
          <p className="text-gray-400">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}
