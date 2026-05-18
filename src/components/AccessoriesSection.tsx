import Image from "next/image";
import Link from "next/link";

export default function AccessoriesSection() {
  const banners = [
    { id: 1, src: "/images/banner5.png", href: "/shop?category=accessories" },
    { id: 2, src: "/images/banner1.png", href: "/shop?category=accessories" },
    { id: 3, src: "/images/banner2.png", href: "/shop?category=accessories" },
    { id: 4, src: "/images/banner3.png", href: "/shop?category=accessories" },
    { id: 5, src: "/images/banner4.png", href: "/shop?category=accessories" },
  ];

  return (
    <div className="px-3 md:px-5 mb-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="text-xl p-4 w-full font-bold text-black dark:text-white border-b dark:border-gray-700">
          <h1>Smart Gadgets & Accessories</h1>
        </div>
        
        <div className="p-2">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
            <div className="col-span-1 md:col-span-6">
              <div className="grid grid-cols-2 gap-2 h-full">
                <div className="flex flex-col gap-2">
                  <BannerLink banner={banners[1]} />
                  <BannerLink banner={banners[2]} />
                </div>
                <div className="flex flex-col gap-2">
                  <BannerLink banner={banners[3]} />
                  <BannerLink banner={banners[4]} />
                </div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-6">
              <BannerLink banner={banners[0]} isLarge />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BannerLink({ banner, isLarge = false }: { banner: any; isLarge?: boolean }) {
  const width = isLarge ? 628 : 310;
  const height = isLarge ? 365 : 179;

  return (
    <Link
      href={banner.href}
      className="flex flex-col relative rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group h-full w-full"
    >
      <div className="relative w-full h-full">
        <Image
          src={banner.src}
          alt="Accessories Promotion"
          width={width}
          height={height}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
        />
      </div>
    </Link>
  );
}
