import BlogDetail from "@/screen/blog/BlogDetail";
import { blogDetailFunction } from "@/utils/libs";

interface BlogDetailsPageProps {
  params: {
    blogId: string;
  };
}
const BlogDetailsPage = ({ params }: BlogDetailsPageProps) => {
  const { blogId } = params;
  const post = blogDetailFunction(blogId);

  if (!post) {
    return <div>Loading...</div>; // or <div>Post not found</div>
  }
  return <BlogDetail post={post} />;
};

export default BlogDetailsPage;
