"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { jakarta } from "./font";

export const Button = ({
  children,
  background,
  border,
  className,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  background: string;
  border: string;
  onClick?: () => void;
}) => {
  return (
    <button
      style={{
        background: background,
        border: border,
      }}
      className={twMerge(
        "bg-blue-500 text-white px-4 py-2 flex items-center justify-center gap-2 rounded-4xl cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// export const GoogleButton = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <button className="bg-white text-black px-4 py-2 flex items-center justify-center gap-2 border-5 border-[#d7b8ff] rounded-4xl cursor-pointer hover:opacity-[0.8] transition-opacity duration-300">
//       {children}
//     </button>
//   );
// };

export const BackButton = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const onBack = () => {
    router.back();
  };
  return (
    // <button
    //   onClick={onBack}
    //   className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 mb-8"
    // >
    //   <ArrowLeft className="w-4 h-4" />
    //   <span>{children}</span>
    // </button>

    <Button
      background="linear-gradient(90deg, #882aff, color-mix(in srgb, #a259ff 85%, #882aff) 50%, #882aff)"
      border="5px solid #d7b8ff"
      className=" px-2 md:px-4 py-2"
      onClick={onBack}
    >
      <ArrowLeft className="w-4 h-4" />
      <span
        className={` text-[0.65rem] md:text-[0.85rem] font-[600] text-[#fff] tracking-wide leading-[1.7] ${jakarta.className}`}
      >
        {children}
      </span>

      {/* <ArrowRightIcon className=" md:w-6 md:h-6 w-4 h-4 text-[#fff]" /> */}
    </Button>
  );
};
