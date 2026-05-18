import Image from "next/image";
import Link from "next/link";

export default function MobileSection() {
  const banners = [
    {
      id: 1,
      src: "/images/mobile_section/1.svg",
      href: "/shop?q=iphone",
      span: "md:col-span-3",
    },
    {
      id: 2,
      src: "/images/mobile_section/2.svg",
      href: "/shop?q=galaxy",
      span: "md:col-span-3",
    },
    {
      id: 3,
      src: "/images/mobile_section/5.svg",
      href: "/shop?q=iphone+17",
      span: "md:col-span-6",
      isLarge: true,
    },
    {
      id: 4,
      src: "/images/mobile_section/3.svg",
      href: "/shop?category=mobiles",
      span: "md:col-span-3",
    },
    {
      id: 5,
      src: "/images/mobile_section/4.svg",
      href: "/shop?category=accessories",
      span: "md:col-span-3",
    },
  ];

  return (
    <div className="px-3 md:px-5 mb-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border dark:border-gray-700">
        <div className="text-xl p-4 w-full font-bold text-black dark:text-white border-b dark:border-gray-700">
          <h1>Mobiles & Accessories</h1>
        </div>

        <div className="p-2">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
            {/* Left 2x2 Grid Section */}
            <div className="col-span-1 md:col-span-6">
              <div className="grid grid-cols-2 gap-2 h-full">
                {/* Column 1 */}
                <div className="flex flex-col gap-2">
                  <BannerLink banner={banners[0]} />
                  <BannerLink banner={banners[3]} />
                </div>
                {/* Column 2 */}
                <div className="flex flex-col gap-2">
                  <BannerLink banner={banners[1]} />
                  <BannerLink banner={banners[4]} />
                </div>
              </div>
            </div>

            {/* Right Featured Banner Section */}
            <div className="col-span-1 md:col-span-6">
              <BannerLink banner={banners[2]} isLarge />
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
      className={`flex flex-col relative rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group ${isLarge ? "h-full w-full" : "h-full w-full"
        }`}
    >
      <div className="relative w-full h-full">
        <Image
          src={banner.src}
          alt="Promotion"
          width={width}
          height={height}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
        />
      </div>
    </Link>
  );
}
