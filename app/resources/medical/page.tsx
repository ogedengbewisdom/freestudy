import AddBook from "@/screen/resources/addBook";
import BookCard from "@/screen/resources/bookCard";
import { MOCK_BOOKS_DATA } from "@/utils/libs";
import { SearchIcon } from "lucide-react";

const MedicalPage = () => {
  return (
    <div className="my-9 w-full">
      <h1 className="text-[2rem] font-bold font-jakarta text-center mb-8 text-[#8B2AFF]">
        Read Medical From Your Best Selling Authors
      </h1>
      <h3 className="text-sm font-jakarta text-center mb-8 text-[#6b7280]">
        Medical is a field of study that deals with the diagnosis, treatment,
        and prevention of disease. It includes the study of anatomy, physiology,
        and pharmacology. Medical is often used to describe the activities of a
        doctor or nurse.
      </h3>
      <section className="flex items-center px-4 gap-2 mb-10 w-full">
        <div className=" relative w-full">
          <SearchIcon className="w-4 h-4 text-[#353a44] absolute top-1/2 left-2 -translate-y-1/2" />
          <input
            placeholder="Search"
            className="w-full pl-8 rounded-md border border-[#e5e7eb] py-2 px-4"
          />
        </div>
        <AddBook />
      </section>

      <section className=" w-full">
        <div className=" w-full px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-center gap-4">
          {MOCK_BOOKS_DATA.map((book) => (
            <BookCard
              href={`/resources/medical/${book.id}`}
              key={book.id}
              {...book}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MedicalPage;
