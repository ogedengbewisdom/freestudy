import Link from "next/link";
import Icons from "@/public/freestudy.svg";
import Image from "next/image";
import ResourceDropdown from "../home/resourcedropdown";
import { Button } from "@/component/button";
import { ArrowRightIcon } from "lucide-react";
import googleIcon from "@/public/google.82c899b0.svg";

const navItems = [
  { label: "Blog Home", href: "/blog" },
  { label: "Student", href: "/student" },
  { label: "Blog", href: "/blog" },
  { label: "Scholarship", href: "/scholarship" },
  { label: "Saved Books", href: "/resources/saved-books" },
];

const Navigation = () => {
  return (
    <div className="flex flex-col gap-4 items-start justify-between font-jakarta px-4 py-5 h-full">
      <div className=" flex flex-col gap-6">
        <Link href={"/"} className="flex items-center gap-2 px-3 py-2">
          <Image src={Icons} alt="logo" width={40} height={40} />
          <span className="font-[600] font-jakarta text-[0.85rem] text-[#222] leading-[1.7] tracking-wide">
            Freestudy
          </span>
        </Link>

        <nav className="">
          <ul className="flex flex-col items-start gap-2 font-[600] text-[0.85rem] text-[#222] leading-[1.7] tracking-wide">
            {/* <li className="py-2 px-4 rounded-md hover:bg-[#f3f4f6] transition-all duration-300 font-jakarta">
              <Link href={"/blog"} className="">
                Blog Home
              </Link>
            </li> */}

            {navItems.map((item) => {
              return (
                <li
                  key={item.label}
                  className="py-2 px-4 rounded-md hover:bg-[#f3f4f6] transition-all duration-300 font-jakarta"
                >
                  <Link href={item.href} className="">
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <ResourceDropdown />
          </ul>
        </nav>
      </div>
      <div className="flex flex-col items-start gap-4 lg:gap-2">
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
      </div>
    </div>
  );
};

export default Navigation;
