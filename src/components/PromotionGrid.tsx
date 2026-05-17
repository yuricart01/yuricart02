import Image from "next/image";
import Link from "next/link";

const PROMOTION_BANNERS = [
  {
    id: "iphone",
    image: "/images/promotions/iphone_banner.png",
    alt: "iPhone 17 Series",
    href: "/shop?q=iphone",
  },
  {
    id: "laptop",
    image: "/images/promotions/laptop_banner.png",
    alt: "Premium Laptops",
    href: "/shop?q=laptop",
  },
  {
    id: "samsung",
    image: "/images/promotions/samsung_banner.png",
    alt: "Galaxy Z Fold Series",
    href: "/shop?q=samsung",
  },
];

interface PromotionGridProps {
  products?: any[]; // Keep prop for compatibility, though we use static banners now
}

export default function PromotionGrid({ products }: PromotionGridProps) {
  return (
    <div className="px-3 md:px-5 mb-4">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
        <div className="p-2">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {PROMOTION_BANNERS.map((banner, index) => (
              <Link
                key={banner.id}
                href={banner.href}
                className={`flex flex-col relative rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group ${
                  index === 0 ? "col-span-2 md:col-span-1" : "col-span-1"
                }`}
              >
                <div className={`relative w-full ${
                  index === 0 ? "h-[180px] md:h-[220px]" : "h-[160px] md:h-[220px]"
                }`}>
                  <Image
                    src={banner.image}
                    alt={banner.alt}
                    width={index === 0 ? 800 : 400}
                    height={index === 0 ? 400 : 400}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
