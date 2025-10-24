"use client";

import { Button } from "@/component/button";
import Modal from "@/component/modal";
import { Plus } from "lucide-react";
import ScholarshipForm from "./scholarshipForm";
import { useState } from "react";

const AddScholarship = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Button
        background="linear-gradient(90deg, #882aff, color-mix(in srgb, #a259ff 85%, #882aff) 50%, #882aff)"
        border="3px solid #d7b8ff"
        className=" px-2 md:px-4 py-2 whitespace-nowrap rounded-md"
        onClick={onOpen}
      >
        <Plus className=" md:w-6 md:h-6 w-4 h-4 text-[#fff]" />
        <span className=" text-[0.65rem] md:text-[0.85rem] font-[600] text-[#fff] tracking-wide leading-[1.7] font-jakarta">
          Add Scholarship
        </span>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ScholarshipForm />
      </Modal>
    </div>
  );
};

export default AddScholarship;
