import Image from "next/image";
import Link from "next/link";
import Icons from "@/public/freestudy.svg";
import { Button } from "@/component/button";
import googleIcon from "@/public/google.82c899b0.svg";
import whiteArrow from "@/public/white-arrow.dd1ae13e.svg";
import { ArrowRightIcon, MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <div className="flex flex-col bg-white items-start py-[14px] px-[0.5rem] md:px-[1.5rem] font-jakarta h-full justify-between">
      <div className="flex flex-col items-start gap-10">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <Image src={Icons} alt="logo" width={40} height={40} />
          <span className="font-[600] text-[0.85rem] text-[#222] leading-[1.7] tracking-wide">
            Freestudy
          </span>
        </Link>

        <nav className="flex flex-col">
          <Link
            href="/blog"
            className="py-2 px-4 rounded-md hover:bg-[#f3f4f6] transition-all duration-300 font-[600] text-[0.85rem] text-[#222] leading-[1.7] tracking-wide"
          >
            Blog Home
          </Link>
        </nav>
      </div>
      <div className="flex flex-col items-stretch gap-4 w-full">
        <Button
          background="white"
          border="1px solid #e5e7eb"
          className="flex py-3 hover:!bg-[#f3f4f6] transition-all duration-300 whitespace-nowrap"
        >
          <Image src={googleIcon} alt="" width={20} height={20} />
          <span className="text-[0.85rem] font-[600] text-[#222] tracking-wide leading-[1.7] font-jakarta">
            Join with Google
          </span>
        </Button>
        <Button
          background="linear-gradient(90deg, #882aff, color-mix(in srgb, #a259ff 85%, #882aff) 50%, #882aff)"
          border="5px solid #d7b8ff"
          className=" px-2 md:px-4 py-2 whitespace-nowrap"
        >
          <span className=" text-[0.65rem] md:text-[0.85rem] font-[600] text-[#fff] tracking-wide leading-[1.7] font-jakarta whitespace-nowrap">
            Start for Free
          </span>

          <ArrowRightIcon className=" md:w-6 md:h-6 w-4 h-4 text-[#fff]" />
        </Button>
      </div>
    </div>
  );
};

export default Header;
