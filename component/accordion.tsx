"use client";
import { Minus, Plus } from "lucide-react";

import { useState } from "react";

const Accordion = ({
  item,
}: {
  item: { question: string; answer: string; index: number };
}) => {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setIsOpen(isOpen === index ? null : index);
  };
  return (
    <div className=" border border-gray-200 bg-white rounded-lg overflow-hidden w-full">
      <button
        onClick={() => toggleAccordion(item.index)}
        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50"
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-4">
          {item.question}
        </h3>
        <div className="flex-shrink-0">
          {isOpen === item.index ? (
            <Minus className="w-6 h-6 text-purple-600" />
          ) : (
            <Plus className="w-6 h-6 text-purple-600" />
          )}
        </div>
      </button>
      <div
        className={`px-6 transition-all duration-300 ease-in-out ${
          isOpen === item.index
            ? "py-4 max-h-96 opacity-100"
            : "py-0 max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
