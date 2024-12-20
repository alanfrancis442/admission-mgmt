

"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="relative z-10 bg-white bg-opacity-[7%] shadow max-w-[90%] w-full h-[60px] mt-10 mx-4 rounded-3xl flex items-center justify-between px-6">
        <div className="flex items-center">
        <Link href="/" passHref>
          <Image
            src="/muthoot_logo.png"
            alt="Muthoot Logo"
            width={40}
            height={40}
            className="mr-4 rounded-xl cursor-pointer"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 flex justify-center">
        <div className="flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 items-center">
          <Link href="/register" className="headerButton !text-muthootRed">
            Register
          </Link>
          <Link href="/login" className="headerButton">
            Login
          </Link>
          <Link href="/contact" className="headerButton hidden sm:block">
            Contact
          </Link>
          <Link href="/about" className="headerButton hidden sm:block">
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;