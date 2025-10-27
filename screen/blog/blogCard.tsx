import { User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    author: string;
    date: string;
    excerpt: string;
    content: string[];
    likes: number;
    image?: string;
    comments: {
      id: string;
      author: string;
      text: string;
      date: Date;
    }[];
  };
  onReadMore: (id: string) => void;
  onLike: (id: string) => void;
}
const BlogCard = ({ post, onReadMore, onLike }: BlogCardProps) => {
  //   const [isAnimating, setIsAnimating] = useState(false);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleLike = () => {
    // e.preventDefault();
    // e.stopPropagation();
    // setIsAnimating(true);
    onLike(post.id);
    // setTimeout(() => setIsAnimating(false), 200);
  };

  const handleReadMore = () => {
    // e.preventDefault();
    onReadMore(post.id);
  };

  return (
    <Link
      href={`/blog/${post.id}`}
      className="group bg-white/95 p-4 md:p-8 border border-[#e5e7eb] rounded-md transition-all duration-200 hover:bg-[#f3f4f6] cursor-pointer relative overflow-hidden h-full"
    >
      <div className="flex flex-col gap-2 h-full justify-between">
        <div className="flex flex-col gap-2">
          <h2 className=" text-md md:text-xl font-bold text-gray-800 mb-4 leading-tight font-jakarta">
            {post.title}
          </h2>

          <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-2">
              <div className=" rounded-full border border-[#e5e7eb] h-10 w-10 bg-gray-200 flex items-center justify-center">
                <User2 className="w-6 h-6 text-[#353a44]" />
              </div>
              <span>{post.author}</span>
            </div>

            <span>{formatDate(post.date)}</span>
          </div>
        </div>

        {post.image ? (
          <div className=" w-full h-[300px] rounded-md">
            <Image
              src={post.image}
              alt="blog image"
              width={1000}
              height={1000}
              className=" object-cover rounded-md w-full h-full"
              loading="lazy"
              // priority
            />
          </div>
        ) : (
          <p className=" text-sm text-gray-600 leading-relaxed mb-5">
            {post.excerpt}
          </p>
        )}

        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div className="flex space-x-4">
            <button
              // onClick={handleLike}
              className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 text-gray-500 hover:text-red-500 hover:bg-red-50 `}
            >
              <span>❤️</span>
              <span>{post.likes}</span>
            </button>

            <div className="flex items-center space-x-2 text-gray-500 px-3 py-2">
              <span>💬</span>
              <span>{post.comments.length}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
