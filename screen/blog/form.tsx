"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import Input from "@/component/input";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

export default function BlogForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [conclusion, setConclusion] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      title,
      content,
      conclusion,
    });

    // send this to your backend
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      ["clean"],
    ],
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-6"
    >
      {/* Title */}
      <div>
        <Input
          label="Title"
          name="title"
          as="input"
          //   value={""}
          //   onChange={() => {}}
          //   value={formData.title}
          //   onChange={handleChange}
          placeholder="Enter title"
        />
      </div>

      {/* Blog Content */}
      <div>
        <label className="block text-sm font-bold font-jakarta text-gray-700 mb-1">
          Blog Content
        </label>
        <div className="rounded-xl border border-gray-300 overflow-hidden">
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            modules={modules}
            placeholder="Write your blog content here..."
            className="custom-quill"
          />
        </div>
      </div>

      {/* Conclusion */}
      <div>
        <Input
          label="Conclusion"
          name="conclusion"
          as="textarea"
          //   value={conclusion}
          //   onChange={(e) => setConclusion(e.target.value)}
          placeholder="Write your conclusion..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
      >
        Publish Blog
      </button>
    </form>
  );
}
