import Input, { ImageInput } from "@/component/input";
import React, { useState } from "react";

import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import { Button } from "@/component/button";
// import ReactQuill from "react-quill-new";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const ScholarshipForm = () => {
  const [content, setContent] = useState("");
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input placeholder="Title" label="Title" name="title" />
      <Input placeholder="Description" label="Description" name="description" />
      <div>
        <label className="block text-sm font-bold font-jakarta text-gray-700 mb-1">
          Scholarship Content
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
      <ImageInput label="Image" />
      <Input placeholder="read time" label="read time" name="read_time" />
      <Input
        type="date"
        placeholder="Application Deadline"
        label="Application Deadline"
        name="application_deadline"
      />
      <Input
        placeholder="Application Link"
        label="Application Link"
        name="application_link"
      />

      <Button
        background="linear-gradient(90deg, #882aff, color-mix(in srgb, #a259ff 85%, #882aff) 50%, #882aff)"
        border="3px solid #d7b8ff"
        className=" px-2 md:px-4 py-2 whitespace-nowrap rounded-md w-full"
      >
        <span className=" text-[0.65rem] md:text-[0.85rem] font-[600] text-[#fff] tracking-wide leading-[1.7] font-jakarta">
          Publish Scholarship
        </span>
      </Button>
    </form>
  );
};

export default ScholarshipForm;
