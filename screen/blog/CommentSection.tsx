import { Button } from "@/component/button";
import { CommentProps, PostProps } from "@/utils/types";
interface CommentsSectionProps {
  post: PostProps;
}

const CommentsItem = ({ comment }: { comment: CommentProps }) => {
  const formatDate = (dateString: Date) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="font-semibold text-blue-600 mb-1">{comment.author}</div>
      <div className="text-sm text-gray-500 mb-3">
        {formatDate(comment.date)}
      </div>
      <div className="text-gray-700 leading-relaxed">{comment.text}</div>
    </div>
  );
};
const CommentsSection = ({ post }: CommentsSectionProps) => {
  //   const [commentAuthor, setCommentAuthor] = useState("");
  //   const [commentText, setCommentText] = useState("");

  //   const handleSubmitComment = () => {
  //     if (!commentAuthor.trim() || !commentText.trim()) {
  //       alert("Please fill in both your name and comment.");
  //       return;
  //     }

  //     const comment = {
  //       id: Date.now(),
  //       author: commentAuthor,
  //       text: commentText,
  //       date: new Date().toISOString(),
  //     };

  //     onAddComment(post.id, comment);
  //     setCommentAuthor("");
  //     setCommentText("");
  //   };

  return (
    <div className="bg-white/95 backdrop-blur-sm p-5 lg:p-10">
      <div className="flex justify-between items-center border-b-2 border-gray-100 pb-4 mb-8">
        <h3 className="text-2xl font-bold text-gray-800">Comments</h3>
        <span className="text-gray-500">
          {post.comments.length} comment{post.comments.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Comment Form */}
      <div className="bg-gray-50 rounded-2xl mb-8">
        <textarea
          placeholder="Share your thoughts..."
          rows={4}
          className="w-full p-4 border-2 border-gray-200 rounded-xl mb-4 focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-vertical font-inherit resize-none"
        />

        {/* <Textarea /> */}

        <Button
          background="linear-gradient(90deg, #882aff, color-mix(in srgb, #a259ff 85%, #882aff) 50%, #882aff)"
          border="5px solid #d7b8ff"
          className=" px-2 md:px-4 py-2 font-jakarta text-sm md:text-base font-bold"
        >
          Post Comment
        </Button>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {post.comments
          .slice()
          .reverse()
          .map((comment) => (
            <CommentsItem key={comment.id} comment={comment} />
          ))}
      </div>
    </div>
  );
};

export default CommentsSection;
