"use client";

import { Upload } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";

interface InputProps {
  value?: string | number;
  onChange?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  placeholder: string;
  label: string;
  type?: string;
  name: string;
  as?: "input" | "textarea" | "select"; // 👈 add this to decide element
  options?: string[]; // only for select
}

const Input = ({
  value,
  onChange,
  placeholder,
  label,
  type = "text",
  name,
  as = "input",
  options,
}: InputProps) => {
  return (
    <div>
      <label className="block text-sm font-bold font-jakarta text-gray-700 mb-1">
        {label}
      </label>

      {as === "input" && (
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}

      {as === "textarea" && (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
      )}

      {as === "select" && (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Input;

export const ImageInput = ({ label }: { label: string }) => {
  const [image, setImage] = useState<string | null>(null);

  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const file = event.target.files?.[0];
    if (event.target.files && event.target.files?.length > 0) {
      const file = event.target.files[0];
      const validTypes = ["image/jpeg", "image/gif", "image/jpg", "image/png"];

      if (!validTypes.includes(file.type)) {
        event.target.value = "";
        return;
      }

      if (file.size > 20 * 1024 * 1024) {
        event.target.value = "";
        return;
      }

      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        const imageUrl = event.target?.result as string;

        // const imageData = {
        //   url: imageUrl,
        //   name: file.name,
        // };
        setImage(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <label className="block text-sm font-bold font-jakarta text-gray-700 mb-1">
        {label}
      </label>

      <input
        ref={imageInputRef}
        type="file"
        className="w-full hidden"
        onChange={handleImageChange}
      />
      <div className="w-full h-40 border-2 border-gray-200 rounded-xl overflow-hidden relative">
        {image && (
          <Image
            src={image}
            alt="image"
            width={1000}
            height={1000}
            className="object-cover w-full h-full"
          />
        )}
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-700 p-2 rounded-md cursor-pointer transition-colors">
          <button
            onClick={handleImageUpload}
            className="flex items-center justify-center cursor-pointer"
          >
            <Upload className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};
