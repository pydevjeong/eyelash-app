import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="container mx-auto flex flex-row justify-between">
      <div className="flex">
        <Link href="/">
          <Image src="/images/Seo.png" alt="logo" width={120} height={120} />
        </Link>
      </div>
      <div className="flex items-center">
          <ul className="flex list-none space-x-20">
            <li className="underline">
              <Link href="/">Home</Link>
            </li>
            <li className="">
              <Link href="/gallery">Gallery</Link>
            </li>
            <li className="">
              <Link href="/before-after">Before & After</Link>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default Navbar;
       {/* Mobile Button */}
        {/* <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div> */}

        {/* Mobile Menu */}
        {/* <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/gallery">Gallery</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/before-after">Before & After</Link>
            </li>
          </ul>
        </div> */}