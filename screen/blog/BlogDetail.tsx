// import { PostProps } from '@/utils/types';
import { PostProps } from "@/utils/types";
import { ArrowLeft } from "lucide-react";
import CommentsSection from "./CommentSection";
import { BackButton } from "@/component/button";
import Image from "next/image";

interface BlogDetailProps {
  post: PostProps;
}

const BlogDetail = ({ post }: BlogDetailProps) => {
  //   const [isLiked, setIsLiked] = useState(false);
  //   const [isAnimating, setIsAnimating] = useState(false);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  //   const handleLike = () => {
  //     setIsLiked(!isLiked);
  //     setIsAnimating(true);
  //     onLike(post.id);
  //     setTimeout(() => setIsAnimating(false), 200);
  //   };

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500 mt-10 lg:mt-0">
      {/* Blog Detail */}
      <div className="bg-white/95 py-8 px-4 xl:px-10 mb-8">
        <BackButton>Back to All Posts</BackButton>
        {post.image && (
          <div className=" w-full h-[400px] rounded-md mt-10">
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
        )}
        <h1 className=" text-2xl md:text-3xl xl:text-4xl font-bold text-gray-800 mt-6">
          {post.title}
        </h1>

        <div className="flex justify-between items-center text-gray-500 mb-8">
          <div className="flex space-x-6">
            <span className="text-[12px] font-jakarta">By {post.author}</span>
            <span className="text-[12px] font-jakarta">
              {formatDate(post.date)}
            </span>
          </div>

          <div className="flex space-x-4">
            <button
              //   onClick={handleLike}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 text-gray-500 hover:text-red-500 hover:bg-red-50 
              }`}
            >
              <span>❤️</span>
              <span>{post.likes}</span>
            </button>

            <div className="flex items-center space-x-2 text-gray-500 px-4 py-2">
              <span>💬</span>
              <span>{post.comments.length}</span>
            </div>
          </div>
        </div>

        <div className="text-gray-700 leading-relaxed text-md lg:text-lg space-y-5 font-jakarta">
          {post.content.map((paragraph, index) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Comments Section */}
      <CommentsSection post={post} />
    </div>
  );
};

export default BlogDetail;
