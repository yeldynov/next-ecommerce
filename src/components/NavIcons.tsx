"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartModal from "./CartModal";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter();

  // TEMP
  const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }

    setIsProfileOpen((prev) => !prev);
  };

  return (
    <div className="relative flex items-center gap-4 xl:gap-6">
      <Image
        src="/profile.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute left-0 top-12 z-20 rounded-md p-4 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div
        className="cursor-pointer"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <Image src="/cart.png" alt="" width={22} height={22} />
        <div className="absolute -right-4 -top-4 flex h-6 w-6 items-center justify-center rounded-full bg-softRed text-sm text-white">
          2
        </div>
      </div>

      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavIcons;
