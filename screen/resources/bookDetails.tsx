import { Button } from "@/component/button";
import { Facebook, Instagram, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BookDetailsProps {
  title: string;
  author: string;
  image: string;
  published: string;
  pages: number;
  rating: number;
  description: string;
}

const BookDetails = ({
  title,
  author,
  image,
  published,
  pages,
  rating,
  description,
}: BookDetailsProps) => {
  return (
    <div className="my-9 w-full flex flex-col items-center md:items-start justify-center md:flex-row gap-4 md:gap-10 px-4">
      <div className=" flex md: flex-col gap-4">
        <div className=" w-full h-[266px] relative max-w-[200px] shadow-[0px_8px_10px_-2px_rgba(0,0,0,0.4)]">
          <Image
            src={image}
            alt={title}
            width={1000}
            height={1000}
            className=" object-cover w-full h-full"
          />
        </div>
        <div className=" flex flex-col">
          <span className="text-sm font-jakarta text-[#6b7280]">
            Published: {published}
          </span>
          <span className="text-sm font-jakarta text-[#6b7280]">
            Pages: {pages}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="font-jakarta font-bold text-sm">Share This</h5>
          <div className="flex gap-2">
            <Link href={``}>
              <div className="p-2 bg-blue-600 rounded-full">
                <Facebook className="w-4 h-4 text-white" />
              </div>
            </Link>
            <Link href={``}>
              <div className="p-2 bg-black rounded-full">
                <X className="w-4 h-4 text-white font-extrabold" />
              </div>
            </Link>
            <Link href={``}>
              <div className="p-2 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full">
                <Instagram className="w-4 h-4 text-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1 className=" text-2xl md:text-3xl lg:text-4xl font-extrabold font-jakarta">
            {title}
          </h1>
          <span className="text-sm text-[#6b7280] font-extrabold font-jakarta">
            By {author}
          </span>
          <span className="text-sm text-[#6b7280] font-extrabold font-jakarta">
            Ratings: {rating}
          </span>
        </div>
        <div className=" flex gap-4">
          <Button
            background="linear-gradient(90deg, #882aff, color-mix(in srgb, #a259ff 85%, #882aff) 50%, #882aff)"
            border="3px solid #d7b8ff"
            className=" px-2 md:px-4 py-2 whitespace-nowrap rounded-md"
          >
            <span className="text-sm text-[#fff] font-extrabold font-jakarta">
              Saved to Library
            </span>
          </Button>
          <Button
            background="linear-gradient(90deg, #882aff, color-mix(in srgb, #a259ff 85%, #882aff) 50%, #882aff)"
            border="3px solid #d7b8ff"
            className=" px-2 md:px-4 py-2 whitespace-nowrap rounded-md"
          >
            <span className="text-sm text-[#fff] font-extrabold font-jakarta">
              Read Now
            </span>
          </Button>
        </div>
        <p className="text-md text-[#6b7280] font-jakarta">{description}</p>
      </div>
    </div>
  );
};

export default BookDetails;
