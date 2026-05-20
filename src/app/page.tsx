// // import banner from "@/assets/banner.jpg";
// import Product from "@/components/Products";
// import { Button } from "@/components/ui/button";
// // import Product from "@/components/Product";
// import { Skeleton } from "@/components/ui/skeleton";
// import { delay } from "@/lib/utils";
// import { getWixClient } from "@/lib/wix-client.base";
// import { getWixServerClient } from "@/lib/wix-client.server";
// import { getCollectionBySlug } from "@/wix-api/collections";
// import { queryProducts } from "@/wix-api/products";
// // import { getWixServerClient } from "@/lib/wix-client.server";
// // import { queryProducts } from "@/wix-api/products";
// import { ArrowRight } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { Suspense } from "react";

// export default function Home() {
//   return (
//     <main className="mx-auto max-w-7xl space-y-10 px-5 py-10">
//       <div className="flex items-center bg-secondary md:h-96">
//         <div className="space-y-7 p-10 text-center md:w-1/2">
//           <h1 className="text-3xl font-bold md:text-4xl">
//             Fill the void in your heart
//           </h1>
//           <p>
//             Tough day? Credit card maxed out? Buy some expensive stuff and
//             become happy again!
//           </p>
//           <Button asChild>
//             <Link href="/shop">
//               Shop Now <ArrowRight className="ml-2 size-5" />
//             </Link>
//           </Button>

//         </div>
//         <div className="relative hidden h-full w-1/2 md:block">
//           <Image
//             src="/banner.jpg"
//             alt="Flow Shop banner"
//             className="h-full object-cover"
//             width={800}
//             height={400}
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-secondary via-transparent to-transparent" />
//         </div>
//       </div>
//       <Suspense fallback={<LoadingSkeleton />}>
//         <FeaturedProducts />
//       </Suspense>
//     </main>
//   );
// }

// async function FeaturedProducts() {

//   const wixClient = getWixServerClient();



//   // (LATER)
//   const collection = await getCollectionBySlug(wixClient,"featured-products");


//   if (!collection?._id) {
//     return null;
//   }

//   // (LATER)
//   // const featuredProducts = await queryProducts(wixClient, {
//   //   collectionIds: collection._id,
//   // });

//   // if (!featuredProducts.items.length) {
//   //   return null;
//   // }
//   const featuredProducts = await queryProducts(wixClient, {
//     collectionIds: collection._id
//   })

//     if (!featuredProducts.items.length) {
//       return null;
// }


//   return (
//     <div className="space-y-5">
//       <h2 className="text-2xl font-bold">Featured Products</h2>
//       <div className="flex grid-cols-2 flex-col gap-5 sm:grid md:grid-cols-3 lg:grid-cols-4">
//         {featuredProducts.items.map((product) => (
//           <Product key={product._id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }

// function LoadingSkeleton() {
//   return (
//     <div className="flex grid-cols-2 flex-col gap-5 pt-12 sm:grid md:grid-cols-3 lg:grid-cols-4">
//       {Array.from({ length: 8 }).map((_, i) => (
//         <Skeleton key={i} className="h-[26rem] w-full" />
//       ))}
//     </div>
//   );
// }


// // import banner from "@/assets/banner.jpg";
// import Product from "@/components/Products";
// import { Button } from "@/components/ui/button";
// // import Product from "@/components/Product";
// import { Skeleton } from "@/components/ui/skeleton";
// import { delay } from "@/lib/utils";
// import { getWixClient } from "@/lib/wix-client.base";
// import { getWixServerClient } from "@/lib/wix-client.server";
// import { getCollectionBySlug } from "@/wix-api/collections";
// import { queryProducts } from "@/wix-api/products";
// // import { getWixServerClient } from "@/lib/wix-client.server";
// // import { queryProducts } from "@/wix-api/products";
// import { ArrowRight } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { Suspense } from "react";

// export default function Home() {
//   return (
//     <main className="mx-auto max-w-7xl space-y-10 px-5 py-10">
//       <div className="flex items-center bg-secondary md:h-96">
//         <div className="space-y-7 p-10 text-center md:w-1/2">
//           <h1 className="text-3xl font-bold md:text-4xl">
//             Fill the void in your heart
//           </h1>
//           <p>
//             Tough day? Credit card maxed out? Buy some expensive stuff and
//             become happy again!
//           </p>
//           <Button asChild>
//             <Link href="/shop">
//               Shop Now <ArrowRight className="ml-2 size-5" />
//             </Link>
//           </Button>

//         </div>
//         <div className="relative hidden h-full w-1/2 md:block">
//           <Image
//             src="/banner.jpg"
//             alt="Flow Shop banner"
//             className="h-full object-cover"
//             width={800}
//             height={400}
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-secondary via-transparent to-transparent" />
//         </div>
//       </div>
//       <Suspense fallback={<LoadingSkeleton />}>
//         <FeaturedProducts />
//       </Suspense>
//     </main>
//   );
// }

// async function FeaturedProducts() {

//   const wixClient = getWixServerClient();



//   // (LATER)
//   const collection = await getCollectionBySlug(wixClient,"featured-products");


//   if (!collection?._id) {
//     return null;
//   }

//   // (LATER)
//   // const featuredProducts = await queryProducts(wixClient, {
//   //   collectionIds: collection._id,
//   // });

//   // if (!featuredProducts.items.length) {
//   //   return null;
//   // }
//   const featuredProducts = await queryProducts(wixClient, {
//     collectionIds: collection._id
//   })

//     if (!featuredProducts.items.length) {
//       return null;
// }


//   return (
//     <div className="space-y-5">
//       <h2 className="text-2xl font-bold">Featured Products</h2>
//       <div className="flex grid-cols-2 flex-col gap-5 sm:grid md:grid-cols-3 lg:grid-cols-4">
//         {featuredProducts.items.map((product) => (
//           <Product key={product._id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }

// function LoadingSkeleton() {
//   return (
//     <div className="flex grid-cols-2 flex-col gap-5 pt-12 sm:grid md:grid-cols-3 lg:grid-cols-4">
//       {Array.from({ length: 8 }).map((_, i) => (
//         <Skeleton key={i} className="h-[26rem] w-full" />
//       ))}
//     </div>
//   );
// }


// //////////////////////////////////////////////////////////////////////////////////////////

import Product from "@/components/Products";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import { getWixServerClient } from "@/lib/wix-client.server";
import { getCollectionBySlug, getCollections } from "@/wix-api/collections";
import { queryProducts } from "@/wix-api/products";
import HeroSlider from "@/components/SliderHero";
import PromotionGrid from "@/components/PromotionGrid";
import ProductCarousel from "@/components/ProductCarousel";
import MobileSection from "@/components/MobileSection";
import dynamic from "next/dynamic";
const FeaturedProductsSlider = dynamic(() => import("@/components/FeaturedProductsSlider"), { ssr: false });
import ProductGridSlider from "@/components/ProductGridSlider";
import LaptopSection from "@/components/LaptopSection";
import AccessoriesSection from "@/components/AccessoriesSection";

export default async function Home() {
  // Debug: Log all available collections
  const wixClient = getWixServerClient();
  const allCollections = await getCollections(wixClient);
  console.log("DEBUG: ALL AVAILABLE COLLECTIONS:", allCollections.map(c => ({ name: c.name, slug: c.slug, id: c._id })));

  return (
    <main className="mx-auto max-w-7xl">
      {/* Hero Slider - Minimal margin from header */}
      <div className="mb-2 md:mb-4">
        <HeroSlider />
      </div>

      {/* Promotion Grid - Fetches first 3 featured products */}
      <Suspense fallback={null}>
        <PromotionGridSection />
      </Suspense>

      {/* Product Carousel Section */}
      <Suspense fallback={null}>
        <ProductCarouselSection />
      </Suspense>

      {/* Mobile Section */}
      <MobileSection />

      {/* 5G Mobile Phones Section */}
      <Suspense fallback={null}>
        <MobileProductsSection />
      </Suspense>

      {/* Laptops Section */}
      <LaptopSection />
      <Suspense fallback={null}>
        <LaptopProductsSection />
      </Suspense>

      {/* Accessories Section */}
      <AccessoriesSection />
      <Suspense fallback={null}>
        <AccessoriesProductsSection />
      </Suspense>

      {/* Content Container */}
      <div className="px-4 py-2 md:px-5 md:py-4 space-y-10">
        {/* Featured Products */}
        <Suspense fallback={<LoadingSkeleton />}>
          <FeaturedProducts />
        </Suspense>
      </div>
    </main>
  );
}

function PromotionGridSection() {
  return <PromotionGrid />;
}

async function ProductCarouselSection() {
  const wixClient = getWixServerClient();
  const collection = await getCollectionBySlug(wixClient, "featured-products");

  if (!collection?._id) return null;

  const featuredProducts = await queryProducts(wixClient, {
    collectionIds: collection._id,
  });

  if (!featuredProducts.items.length) return null;

  return <ProductCarousel products={featuredProducts.items} />;
}

async function MobileProductsSection() {
  const wixClient = getWixServerClient();
  const collection = await getCollectionBySlug(wixClient, "featured-products");

  if (!collection?._id) return null;

  const featuredProducts = await queryProducts(wixClient, {
    collectionIds: collection._id,
  });

  // Filter for mobile products (Redmi, Xiaomi, Modio, etc.)
  const mobileProducts = featuredProducts.items.filter(product => {
    const name = product.name?.toLowerCase() || "";
    const isMobileBrand = name.includes("redmi") ||
      name.includes("xiaomi") ||
      name.includes("modio") ||
      name.includes("oppo") ||
      name.includes("samsung");

    // Exclude specific Modio models requested by the user
    const isExcluded = name.includes("m36") ||
      name.includes("m37") ||
      name.includes("m38") ||
      name.includes("m91");

    return isMobileBrand && !isExcluded;
  });

  if (!mobileProducts.length) return null;

  return <ProductGridSlider products={mobileProducts} title="5G Mobile Phones & Tablets" />;
}

async function LaptopProductsSection() {
  const wixClient = getWixServerClient();
  const collection = await getCollectionBySlug(wixClient, "featured-products");

  if (!collection?._id) return null;

  const featuredProducts = await queryProducts(wixClient, {
    collectionIds: collection._id,
  });

  const laptopProducts = featuredProducts.items.filter(product => {
    const name = product.name?.toLowerCase() || "";
    const isLaptopBrand = name.includes("laptop") || 
                         name.includes("hp") || 
                         name.includes("dell") || 
                         name.includes("macbook") ||
                         name.includes("lenovo");
    
    // Exclude desktops and workstations
    const isDesktop = name.includes("desktop") || 
                      name.includes("workstation") || 
                      name.includes("sff") || 
                      name.includes("elite desk") || 
                      name.includes("pro desk") || 
                      name.includes("8200 elite") ||
                      name.includes("t1700");

    return isLaptopBrand && !isDesktop;
  });

  if (!laptopProducts.length) return null;

  return <ProductGridSlider products={laptopProducts} title="Featured Laptops" />;
}

async function AccessoriesProductsSection() {
  const wixClient = getWixServerClient();
  const collection = await getCollectionBySlug(wixClient, "featured-products");

  if (!collection?._id) return null;

  const featuredProducts = await queryProducts(wixClient, {
    collectionIds: collection._id,
  });

  const accessoryProducts = featuredProducts.items.filter(product => {
    const name = product.name?.toLowerCase() || "";
    const isAccessory = name.includes("accessory") || 
                       name.includes("watch") || 
                       name.includes("headphone") || 
                       name.includes("buds") ||
                       name.includes("charger") ||
                       name.includes("cable") ||
                       name.includes("mouse");
    
    // Include desktops, workstations, and gaming consoles here as requested
    const isSpecialCategory = name.includes("desktop") || 
                             name.includes("workstation") || 
                             name.includes("sff") || 
                             name.includes("elite desk") || 
                             name.includes("pro desk") || 
                             name.includes("8200 elite") ||
                             name.includes("t1700") ||
                             name.includes("playstation") ||
                             name.includes("ps5");

    return isAccessory || isSpecialCategory;
  });

  if (!accessoryProducts.length) return null;

  return <ProductGridSlider products={accessoryProducts} title="Desktops & Accessories" />;
}

async function FeaturedProducts() {
  const wixClient = getWixServerClient();
  const collection = await getCollectionBySlug(wixClient, "featured-products");

  if (!collection?._id) return null;

  const featuredProducts = await queryProducts(wixClient, {
    collectionIds: collection._id,
  });

  return <FeaturedProductsSlider products={featuredProducts.items} />;
}

function LoadingSkeleton() {
  return (
    <div className="flex grid-cols-2 flex-col gap-5 pt-12 sm:grid md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton key={i} className="h-[26rem] w-full" />
      ))}
    </div>
  );
}
