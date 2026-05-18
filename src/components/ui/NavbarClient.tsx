"use client";

import { useEffect, Suspense } from "react";
import { useCart } from "@/hooks/cart";
import { useCartDrawer } from "@/components/ui/CartDrawerContext";
import Link from "next/link";
import Image from "next/image";
import MainNavigation from "@/app/MainNavigation";
import SearchField from "@/components/SearchFiend";
import MobileMenu from "@/app/MobileMenu";
import MobileBottomNav from "@/components/ui/MobileBottomNav";
import UserButton from "@/components/UserButton";
import ShoppingCartButton from "@/app/ShoppingCartButton";
import { GiftIcon } from "lucide-react";

export default function NavbarClient({
  initialCart,
  loggedInMember,
  collections,
}: any) {
  const { data: cartData } = useCart(initialCart);
  const { setCart } = useCartDrawer();

  // Sync cart from React Query to context
  useEffect(() => {
    if (cartData) setCart(cartData);
  }, [cartData, setCart]);

  return (
    <>
      <header className="sticky top-0 z-50 shadow-sm">
        {/* Top Row - Blue Background */}
        <div className="bg-[#1350a2] text-white">
          <div className="mx-auto max-w-7xl px-3 py-3 md:px-5 flex items-center justify-between gap-4">

            {/* Mobile Menu & Logo */}
            <div className="flex items-center gap-4">
              <Suspense>
                <div className="block md:hidden text-white [&>button]:text-white">
                  <MobileMenu
                    collections={collections}
                    loggedInMember={loggedInMember}
                  />
                </div>
              </Suspense>
              <Link href="/" className="flex items-center gap-2">
                <Image src="/logonew.svg" alt="Logo" width={30} height={30} className="w-[40px] md:w-[50px] h-auto object-contain" />
              </Link>
            </div>

            {/* Search Bar - Hidden on mobile, takes available space on desktop */}
            <div className="hidden md:block flex-1 max-w-2xl px-4">
              <SearchField />
            </div>

            {/* Right side items: Offers, Cart, Account */}
            <div className="flex items-center gap-4 md:gap-6">
              <Link href="/offers" className="hidden lg:flex items-center gap-2 hover:text-gray-200">
                <GiftIcon className="size-6" />
                <span className="text-sm font-medium">Offers</span>
              </Link>

              <div className="flex items-center gap-2 md:gap-5">
                <ShoppingCartButton initialData={cartData} />
                <UserButton
                  loggedInMember={loggedInMember}
                  className="inline-flex text-white hover:text-gray-200 hover:bg-white/10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row - White Background (Desktop Only) */}
        <div className="hidden md:block bg-white dark:bg-gray-900 border-b dark:border-gray-800">
          <div className="mx-auto max-w-7xl px-5">
            <MainNavigation collections={collections} />
          </div>
        </div>

        {/* Mobile Search - Visible only on mobile below the top bar */}
        <div className="block md:hidden bg-[#1350a2] px-3 pb-3">
          <SearchField />
        </div>

        {/* Mobile Bottom Nav */}
        <MobileBottomNav loggedInMember={loggedInMember} />
      </header>
    </>
  );
}

// "use client";

// import { useCart } from "@/hooks/cart";
// import { getWixServerClient } from "@/lib/wix-client.server";
// import { getCart } from "@/wix-api/cart";
// import Image from "next/image";
// import Link from "next/link";
// import ShoppingCartButton from "@/app/ShoppingCartButton";
// import UserButton from "@/components/UserButton";
// import { getLoggedInMember } from "@/wix-api/members";
// import { getCollections } from "@/wix-api/collections";
// import { Suspense } from "react";
// import MainNavigation from "@/app/MainNavigation";
// import SearchField from "@/components/SearchFiend";
// import MobileMenu from "@/app/MobileMenu";
// import MobileBottomNav from "@/components/ui/MobileBottomNav";

// export default function NavbarClient({
//   initialCart,
//   loggedInMember,
//   collections,
// }: any) {
//   const { data: cart } = useCart(initialCart);

//   return (
//     <>
//       <header className="bg-background shadow-sm">
//         <div className="mx-auto max-w-7xl p-5">
//           {/* Mobile Menu → only mobile */}
//           <Suspense>
//             <div className="block md:hidden">
//               <MobileMenu
//                 collections={collections}
//                 loggedInMember={loggedInMember}
//               />
//             </div>
//           </Suspense>

//           {/* Desktop header → only desktop */}
//           <div className="hidden items-center justify-between gap-5 md:flex">
//             <div className="flex">
//               <Link href="/" className="flex items-center gap-4">
//                 <Image
//                   src="/logo.png"
//                   alt="Flow Shop logo"
//                   width={40}
//                   height={40}
//                 />
//                 <span className="text-xl font-bold">Yuricart</span>
//               </Link>
//               <MainNavigation
//                 collections={collections}
//                 className="hidden md:flex"
//               />
//             </div>

//             {/* SEARCHBAR */}
//             <SearchField className="right-3 hidden max-w-96 md:inline" />

//             {/* USER & CART */}
//             <div className="flex items-center justify-center gap-5">
//               <UserButton
//                 loggedInMember={loggedInMember}
//                 className="hidden md:inline-flex"
//               />
//               <ShoppingCartButton
//                 initialData={cart}
//                 // className="hidden md:inline-flex"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Mobile Bottom Nav → only mobile */}
//         <MobileBottomNav loggedInMember={loggedInMember} cart={cart} />
//       </header>
//       {/* yahan tumhara desktop navbar ka code reh sakta hai (MainNavigation, SearchField etc.) */}

//       {/* Mobile Bottom Nav */}
//       {/* <MobileBottomNav loggedInMember={loggedInMember} cart={cart} /> */}
//     </>
//   );
// }
