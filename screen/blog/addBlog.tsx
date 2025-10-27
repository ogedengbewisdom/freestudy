"use client";

import Modal from "@/component/modal";
import { User2 } from "lucide-react";
import { useState } from "react";
import BlogForm from "./form";

const AddBlog = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [content, setContent] = useState("");
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h1 className="text-xl font-bold font-jakarta text-center mb-4">
        Share something interesting
      </h1>
      <BlogForm />
    </Modal>
  );
};

const AddBlogButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className=" border border-[#e5e7eb] p-4 rounded-md flex gap-4">
      <div className=" rounded-full border border-[#e5e7eb] h-10 w-10 bg-gray-200 flex items-center justify-center">
        <User2 className="w-6 h-6 text-[#353a44]" />
      </div>
      <div
        className=" rounded-3xl bg-gray-200 p-2 w-full cursor-pointer"
        onClick={onOpen}
      >
        <p className="text-xs md:text-sm  font-jakarta font-medium leading-[1.7]">
          Share something interesting @your_username
        </p>
      </div>
      <AddBlog isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export { AddBlog, AddBlogButton };
