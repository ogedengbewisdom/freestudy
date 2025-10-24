"use client";

import { Bold, Underline, Italic } from "lucide-react";
import { useRef } from "react";

const Textarea = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInpuHeight = () => {
    const text = textareaRef.current;
    if (text) {
      text.style.height = "auto";
      text.style.height = `${text.scrollHeight}px`;
    }
  };
  return (
    <div className="w-full border-2 border-gray-200 rounded-xl overflow-hidden">
      {/* Textarea */}
      <textarea
        placeholder="Share your thoughts..."
        rows={1}
        className="w-full p-4 focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none font-inherit border-none"
        ref={textareaRef}
        onInput={handleInpuHeight}
      />

      {/* Toolbar */}
      <div className="flex justify-end gap-2 px-3 py-2 bg-gray-50">
        <button className="p-2 rounded-lg hover:bg-gray-200 transition">
          <Bold size={18} />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-200 transition">
          <Italic size={18} />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-200 transition">
          <Underline size={18} />
        </button>
      </div>
    </div>
  );
};

export default Textarea;
