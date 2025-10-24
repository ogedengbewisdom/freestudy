import Image from "next/image";
import Link from "next/link";
import Icons from "@/public/freestudy.svg";
import { Button } from "@/component/button";
import googleIcon from "@/public/google.82c899b0.svg";
import { ArrowRightIcon } from "lucide-react";
import ResourceDropdown from "./resourcedropdown";
import Menu from "@/component/menu";
import { navItems } from '@/utils/libs';


const Header = () => {
  return (
    <div className="flex bg-white items-center justify-between py-[14px] px-2 md:px-[1.5rem] border border-[#e5e7eb] rounded-lg md:rounded-4xl font-jakarta relative">
      <Link href="/" className="flex items-center gap-2 cursor-pointer">
        <Image src={Icons} alt="logo" width={40} height={40} />
        <span className="font-[600] text-[0.85rem] text-[#222] leading-[1.7] tracking-wide">
          Freestudy
        </span>
      </Link>

      <nav className="hidden lg:block">
        <ul className="flex items-center justify-between xl:gap-10 font-[600] text-[0.85rem] text-[#222] leading-[1.7] tracking-wide">
          {navItems.map((link) => {
            return (
              <Link
                key={link.label}
                href={link.href}
                className="py-2 px-4 rounded-md hover:bg-[#f3f4f6] transition-all duration-300"
              >
                <li>{link.label}</li>
              </Link>
            );
          })}

          <ResourceDropdown />
        </ul>
      </nav>

      <div className="flex items-center justify-center gap-4 lg:gap-2">
        <Button
          background="white"
          border="1px solid #e5e7eb"
          className="hidden lg:flex py-3 hover:!bg-[#f3f4f6] transition-all duration-300"
        >
          <Image src={googleIcon} alt="" width={20} height={20} />
          <span className="text-[0.85rem] font-[600] text-[#171717] tracking-wide leading-[1.7] font-jakarta whitespace-nowrap">
            Join with Google
          </span>
        </Button>
        <Button
          background="linear-gradient(90deg, #882aff, color-mix(in srgb, #a259ff 85%, #882aff) 50%, #882aff)"
          border="5px solid #d7b8ff"
          className="px-2 md:px-4 py-2"
        >
          <span className="text-[0.65rem] md:text-[0.85rem] font-[600] text-[#fff] tracking-wide leading-[1.7] font-jakarta whitespace-nowrap">
            Start for Free
          </span>
          <ArrowRightIcon className="md:w-6 md:h-6 w-4 h-4 text-[#fff]" />
        </Button>
        <Menu navItems={navItems} />
      </div>
    </div>
  );
};

export default Header;
