import { Button } from "@/component/button";
import AddScholarship from "@/screen/scholarship/addScholarship";
import { SCHOLARSHIPS, TRUNCATEFUNCTION } from "@/utils/libs";
import { Clock, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ScholarshipPage = () => {
  return (
    <div className=" mt-3 mb-20">
      <h1 className="text-[2rem] font-bold font-jakarta text-center mb-8 text-[#8B2AFF]">
        Discover <span className=" text-[#8B2AFF]">Scholarships</span> &{" "}
        <span className=" text-[#8B2AFF]">Opportunities</span>
      </h1>

      <section className="flex items-center px-4 gap-2 mb-10">
        <div className=" relative w-full">
          <SearchIcon className="w-4 h-4 text-[#353a44] absolute top-1/2 left-2 -translate-y-1/2" />
          <input
            placeholder="Search"
            className="w-full pl-8 rounded-md border border-[#e5e7eb] py-2 px-4"
          />
        </div>
        <AddScholarship />
      </section>

      <section className="flex flex-col gap-10 px-2 xl:px-4">
        {SCHOLARSHIPS.map((scholarship) => {
          const truncatedDescription = TRUNCATEFUNCTION(
            scholarship.description,
            8
          );
          return (
            <Link href={`/scholarship/${scholarship.id}`} key={scholarship.id}>
              <article className=" border border-[#e5e7eb] rounded-md flex flex-col md:flex-row hover:scale-102 transition-all duration-300 cursor-pointer">
                <div className=" w-full h-[300px] relative">
                  <Image
                    src={scholarship.image}
                    alt="blog image"
                    width={1000}
                    height={1000}
                    className=" object-cover rounded-t-md md:rounded-tr-none md:rounded-bl-md md:rounded-tl-md w-full h-full"
                  />
                  <div className="absolute top-3 left-3 bg-black/50 px-2 rounded-md">
                    <span className=" font-jakarta text-[0.8rem] text-[#fff] font-bold">
                      {scholarship.readTime}
                    </span>
                  </div>
                </div>
                <div className="p-4 xl:p-10 w-full flex flex-col gap-5">
                  <h2 className=" text-lg md:text-xl font-bold font-jakarta text-[#222]">
                    {scholarship.title}
                  </h2>
                  <div className=" flex items-center gap-2">
                    <span>
                      <Clock className="w-4 h-4" />
                    </span>
                    <span className="text-[0.8rem] font-jakarta text-[#6b7280]">
                      {scholarship.datePosted}
                    </span>
                  </div>
                  <p className="text-[0.8rem] lg:text-[1rem] font-jakarta text-[#6b7280]">
                    {truncatedDescription}
                  </p>
                  <Button
                    background="linear-gradient(90deg, #882aff, color-mix(in srgb, #a259ff 85%, #882aff) 50%, #882aff)"
                    border="3px solid #d7b8ff"
                    className=" px-2 md:px-4 py-2 whitespace-nowrap rounded-md w-fit"
                  >
                    <span className=" text-[0.65rem] md:text-[0.85rem] font-[600] text-[#fff] tracking-wide leading-[1.7] font-jakarta">
                      Read more
                    </span>
                  </Button>
                </div>
              </article>
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default ScholarshipPage;
