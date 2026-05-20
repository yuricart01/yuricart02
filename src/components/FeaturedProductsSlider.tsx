"use client";

import { useState, useEffect } from "react";
import ProductGridSlider from "./ProductGridSlider";
import { wixBrowserClient } from "@/lib/wix-client.browser";
import { queryProducts } from "@/wix-api/products";
import { Skeleton } from "@/components/ui/skeleton";

interface FeaturedProductsSliderProps {
  products: any[];
}

const TABS = [
  { id: "all", label: "All Products", slug: null },
  { id: "laptop", label: "Laptops", slug: "laptops" },
  { id: "tablet", label: "Tablets", slug: "tablets" },
  { id: "desktop", label: "Desktops", slug: "desktops" },
  { id: "mobile", label: "Mobiles", slug: "phones" },
  { id: "accessories", label: "Accessories", slug: "accessories" },
];

// TODO: Update these slugs to match your actual Wix collection slugs
// You can find your collection slugs in your Wix store dashboard or by visiting /collections/[slug] pages
// Common formats: "laptops", "laptops-collection", "laptops-page", etc.

export default function FeaturedProductsSlider({ products }: FeaturedProductsSliderProps) {
  const [activeTab, setActiveTab] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState<any[]>(products);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProductsByCollection = async () => {
      const activeTabConfig = TABS.find(tab => tab.id === activeTab);

      if (!activeTabConfig) return;

      // If "All Products" tab, show all products
      if (activeTab === "all") {
        setFilteredProducts(products);
        return;
      }

      // Fetch products from the respective collection
      setIsLoading(true);
      try {
        const { collection } = await wixBrowserClient.collections.getCollectionBySlug(activeTabConfig.slug!);

        if (collection?._id) {
          const collectionProducts = await queryProducts(wixBrowserClient, {
            collectionIds: collection._id,
            limit: 20,
          });
          setFilteredProducts(collectionProducts.items);
        } else {
          // If collection not found, filter the main products array by name as fallback
          const filtered = products.filter(product => {
            const name = product.name?.toLowerCase() || "";
            if (activeTab === "laptop") {
              const isLaptopBrand = name.includes("laptop") || 
                                   name.includes("hp") || 
                                   name.includes("dell") || 
                                   name.includes("macbook") ||
                                   name.includes("lenovo");
              const isDesktop = name.includes("desktop") || 
                                name.includes("workstation") || 
                                name.includes("sff") || 
                                name.includes("elite desk") || 
                                name.includes("pro desk") || 
                                name.includes("8200 elite") ||
                                name.includes("t1700");
              return isLaptopBrand && !isDesktop;
            }
            if (activeTab === "mobile") {
              const isMobileBrand = name.includes("redmi") ||
                                    name.includes("xiaomi") ||
                                    name.includes("modio") ||
                                    name.includes("oppo") ||
                                    name.includes("samsung");
              const isExcluded = name.includes("m36") ||
                                 name.includes("m37") ||
                                 name.includes("m38") ||
                                 name.includes("m91");
              return isMobileBrand && !isExcluded;
            }
            return true;
          });
          setFilteredProducts(filtered);
        }
      } catch (error) {
        console.error(`Error fetching products for ${activeTabConfig.slug}:`, error);
        // If collection not found, filter the main products array by name as fallback
        const filtered = products.filter(product => {
          const name = product.name?.toLowerCase() || "";
          if (activeTab === "laptop") {
            const isLaptopBrand = name.includes("laptop") || 
                                 name.includes("hp") || 
                                 name.includes("dell") || 
                                 name.includes("macbook") ||
                                 name.includes("lenovo");
            const isDesktop = name.includes("desktop") || 
                              name.includes("workstation") || 
                              name.includes("sff") || 
                              name.includes("elite desk") || 
                              name.includes("pro desk") || 
                              name.includes("8200 elite") ||
                              name.includes("t1700");
            return isLaptopBrand && !isDesktop;
          }
          if (activeTab === "mobile") {
            const isMobileBrand = name.includes("redmi") ||
                                  name.includes("xiaomi") ||
                                  name.includes("modio") ||
                                  name.includes("oppo") ||
                                  name.includes("samsung");
            const isExcluded = name.includes("m36") ||
                               name.includes("m37") ||
                               name.includes("m38") ||
                               name.includes("m91");
            return isMobileBrand && !isExcluded;
          }
          return true;
        });
        setFilteredProducts(filtered);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductsByCollection();
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
      {isLoading ? (
        <div className="flex grid-cols-2 flex-col gap-5 sm:grid md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-[26rem] w-full" />
          ))}
        </div>
      ) : filteredProducts.length > 0 ? (
        <ProductGridSlider products={filteredProducts} title="" hideTitle />
      ) : (
        <div className="py-20 text-center bg-gray-50 dark:bg-gray-800 rounded-xl border border-dashed border-gray-200 dark:border-gray-700">
          <p className="text-gray-400">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}
