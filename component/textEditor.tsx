"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

export default function FancyEditor() {
  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <div className="rounded-xl border border-gray-300 shadow-lg bg-white overflow-hidden">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        placeholder="Write something amazing..."
        className="custom-quill"
      />
    </div>
  );
}
