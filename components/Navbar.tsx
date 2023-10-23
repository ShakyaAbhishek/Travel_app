'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="flex justify-between mx-auto items-center w-[92%]">
      <div>
        <Link href="/">
          <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
        </Link>
      </div>
      <div
        className={`lg:static absolute z-50 bg-white lg:min-h-fit min-h-[60vh] left-0 top-[-100%] lg:w-auto w-full flex items-center px-5 transition-all ${
          showNav ? "top-16 lg:top-[0%] opacity-95 shadow-lg" : ""
        }`}
      >
        <ul className="flex lg:flex-row flex-col lg:items-center lg:gap-[4vw] gap-8 justify-center mx-auto">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
        <Image
          src={showNav ? "close_black.svg" : "menu.svg"}
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
          onClick={() => setShowNav(!showNav)}
        />
      </div>
    </nav>
  );
};

export default Navbar;

