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
  { id: "accessories", label: "Accessories" },
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
        case "accessories":
          return content.includes("accessory") || content.includes("watch") || content.includes("headphone") || content.includes("buds") || content.includes("charger") || content.includes("cable") || content.includes("mouse") || content.includes("keyboard") || content.includes("speaker");
        default:
          return true;
      }
    });
  }, [activeTab, products]);

  return (
    <div className="space-y-6">
      {/* Tabs Header */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-5">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4 xl:mb-0 px-1">Featured Products</h2>
        
        <div className="flex flex-wrap items-center gap-2 w-full xl:w-auto">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20 md:scale-105"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30"
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
        <div className="py-20 text-center bg-gray-50 dark:bg-gray-800 rounded-xl border border-dashed border-gray-200 dark:border-gray-700">
          <p className="text-gray-400">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}
