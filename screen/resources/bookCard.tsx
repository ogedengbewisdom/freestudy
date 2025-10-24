import Image from "next/image";
import Link from "next/link";

interface BookCardProps {
  title: string;
  author: string;
  image: string;
  price: string;
  href: string;
}

const BookCard = ({ title, author, image, price, href }: BookCardProps) => {
  return (
    <article className=" w-full">
      <Link href={href}>
        <div className=" w-full h-[266px] relative max-w-[200px] mx-auto shadow-[0px_8px_10px_-2px_rgba(0,0,0,0.4)]">
          <Image
            src={image}
            alt={title}
            width={1000}
            height={1000}
            className=" object-cover w-full h-full"
          />
        </div>
      </Link>
      <div className=" mt-4 mx-auto max-w-[200px]">
        <h2 className="text-lg font-bold font-jakarta whitespace-wrap line-clamp-1">
          {title}
        </h2>
        <p className="text-sm font-semibold text-gray-500 font-jakarta">
          @{author}
        </p>
        <span className="text-sm font-semibold text-gray-500 font-jakarta">
          {price}
        </span>
      </div>
    </article>
  );
};

export default BookCard;
