import { SearchIcon } from "lucide-react";
import AddBook from "@/screen/resources/addBook";
import { MOCK_BOOKS_DATA } from "@/utils/libs";
import BookCard from "@/screen/resources/bookCard";

const ArtPage = () => {
  return (
    <div className="my-9 w-full">
      <h1 className="text-[2rem] font-bold font-jakarta text-center mb-8 text-[#8B2AFF]">
        Read Art From Your Best Selling Authors
      </h1>
      <h3 className="text-sm font-jakarta text-center mb-8 text-[#6b7280]">
        Art is a form of human expression that uses visual elements to
        communicate ideas, emotions, or stories. It can be created through
        various mediums such as painting, sculpture, photography, and digital
        art. Art is often used to express creativity, beauty, and cultural
        identity.
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
              href={`/resources/art/${book.id}`}
              key={book.id}
              {...book}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArtPage;
