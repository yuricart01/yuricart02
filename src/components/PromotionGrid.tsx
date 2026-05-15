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
      <div className="bg-white overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {PROMOTION_BANNERS.map((banner) => (
            <Link
              key={banner.id}
              href={banner.href}
              className="flex flex-col relative overflow-hidden rounded-xl hover:shadow-md transition-shadow group"
            >
              <div className="relative overflow-hidden bg-gray-100 h-[200px] rounded-xl">
                <Image
                  src={banner.image}
                  alt={banner.alt}
                  width={600}
                  height={300}
                  className="hover:scale-[1.05] transition-all duration-500 w-full h-full object-cover p-0"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
