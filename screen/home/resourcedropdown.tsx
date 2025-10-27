"use client";

import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const resourceItems = [
  { label: "Art", href: "/resources/art" },
  { label: "Business", href: "/resources/business" },
  { label: "Engineering", href: "/resources/engineer" },
  { label: "Law", href: "/resources/law" },
  { label: "Medical", href: "/resources/medical" },
  { label: "Physical Science", href: "/resources/physical-science" },
  { label: "Social Science", href: "/resources/social-science" },
  // { label: "Other", href: "/resources/other" },
];

const ResourceDropdown = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="relative group"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <div
        className={twMerge(
          "py-2 px-4 rounded-md hover:bg-[#f3f4f6] transition-all duration-300 cursor-pointer flex items-center",
          className
        )}
      >
        <span className="text-[#222] whitespace-nowrap">Resources</span>
        <ChevronDownIcon
          className={`w-4 h-4 text-[#222] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-full left-0 mt-1 bg-white border border-[#e5e7eb] rounded-lg shadow-lg py-2 min-w-[160px] transition-all duration-300 z-50 ${
          isOpen ? "opacity-100 visible" : " opacity-0 invisible"
        }`}
      >
        {resourceItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={onClick}
            className="block px-4 py-2 text-[0.85rem] font-[500] text-[#222] hover:bg-[#f3f4f6] transition-all duration-200"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResourceDropdown;
