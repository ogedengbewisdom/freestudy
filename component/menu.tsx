"use client";

import { ArrowRightIcon, MenuIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { jakarta } from "./font";
import Link from "next/link";
import ResourceDropdown from "@/screen/home/resourcedropdown";
import { Button } from "./button";
import Image from "next/image";
import googleIcon from "@/public/google.82c899b0.svg";

type NavItem = {
  label: string;
  href: string;
};

interface NavItemsProps {
  navItems: NavItem[];
}

const Menu = ({ navItems }: NavItemsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    console.log("onClose");
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={` fixed inset-0 bg-black/30 backdrop-blur-sm z-50 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      >
        <div
          className={` fixed top-0 left-0 w-64 bg-white h-screen transform transition-transform duration-200 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className=" absolute top-0 right-0 p-4">
            <button
              onClick={onClose}
              className="lg:hidden p-2 border border-[#e5e7eb] rounded-full"
            >
              <XIcon className="w-6 h-6 text-[#171717] font-semibold" />
            </button>
          </div>
          <div className="flex flex-col p-4 items-start justify-between h-full">
            <ul className=" space-y-4">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className={`${jakarta.className} font-semibold text-sm`}
                >
                  <Link href={item.href}> {item.label}</Link>
                </li>
              ))}
              <li>
                <ResourceDropdown className="px-0" onClick={onClose} />
              </li>
            </ul>
            <div className="flex flex-col items-start gap-5 w-full">
              <Button
                background="white"
                border="1px solid #e5e7eb"
                className="py-3 w-full hover:!bg-[#f3f4f6] transition-all duration-300"
              >
                <Image src={googleIcon} alt="" width={20} height={20} />
                <span className="text-[0.85rem] font-[600] text-[#171717] tracking-wide leading-[1.7] font-jakarta whitespace-nowrap">
                  Join with Google
                </span>
              </Button>
              <Button
                background="linear-gradient(90deg, #882aff, color-mix(in srgb, #a259ff 85%, #882aff) 50%, #882aff)"
                border="5px solid #d7b8ff"
                className="px-2 md:px-4 py-2 w-full"
              >
                <span className="text-[0.65rem] md:text-[0.85rem] font-[600] text-[#fff] tracking-wide leading-[1.7] font-jakarta whitespace-nowrap">
                  Start for Free
                </span>
                <ArrowRightIcon className="md:w-6 md:h-6 w-4 h-4 text-[#fff]" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center border-none outline-none lg:hidden"
      >
        <MenuIcon className="w-5 h-5 text-[#171717] font-semibold" />
      </button>
    </>
  );
};

export default Menu;
