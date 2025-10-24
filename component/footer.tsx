import Link from "next/link";
import Image from "next/image";
import Icons from "@/public/freestudy.svg";

const Footer = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
  });
  return (
    <div className=" py-10">
      <Link href="/" className="flex items-center gap-2 cursor-pointer">
        <Image src={Icons} alt="logo" width={40} height={40} />
        <span className="font-[600] text-[0.85rem] text-[#222] leading-[1.7] tracking-wide">
          Freestudy
        </span>
      </Link>
      <p className="text-sm text-[#6b7280] text-center font-jakarta mt-4">
        © {currentDate} All rights reserved Freestudy
      </p>
    </div>
  );
};

export default Footer;
