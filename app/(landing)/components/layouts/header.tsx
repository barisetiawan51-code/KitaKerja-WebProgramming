"use client";

import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import CartPopup from "../ui/cart-popup";
import { useState } from "react";
import { useCartStore } from "@/app/hooks/use-cart-store";

const Header = () => {
  const { items } = useCartStore();
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);

  return (
    <header className="fixed w-full z-20 backdrop-blur-3xl bg-white/50">
      <div className="container flex justify-between gap-10 mx-auto py-7">
        <Link href="/" className="z-30">
          <Image
            src="/images/logo.svg"
            alt="sporton logo"
            width={127}
            height={30}
            className="hp:w-31.75 hp:h-7.5"
          />
        </Link>
        <nav className="flex gap-23 font-medium">
          <Link
            href="#"
            className="relative after:content-[''] after:block after:bg-primary after:rounded-full after:h-0.75 after:w-1/2 after:absolute after:left-1/2 after:-translate-x-1/2 after:translate-y-1"
          >
            Home
          </Link>
          <Link href="#">category</Link>
          <Link href="#">Explore Product</Link>
        </nav>
        <div className="relative flex gap-10">
          <FiSearch size={24} />
          <button
            className="relative cursor-pointer"
            onClick={() => setIsCartPopupOpen(!isCartPopupOpen)}
          >
            <FiShoppingBag size={24} />
            {items.length ? (
              <div className="bg-primary rounded-full w-3.5 h-3.5 absolute -top-1 -right-1 text-[10px] text-white text-center">
                {items.length}
              </div>
            ) : (
              <></>
            )}
          </button>
          {isCartPopupOpen && <CartPopup />}
        </div>
      </div>
    </header>
  );
};

export default Header;
