import BlogDetail from "@/screen/blog/BlogDetail";
import { blogDetailFunction } from "@/utils/libs";

interface BlogDetailsPageProps {
  params: Promise<{
    blogId: string;
  }>;
}
const BlogDetailsPage = async ({ params }: BlogDetailsPageProps) => {
  const { blogId } = await params;
  const post = blogDetailFunction(blogId);

  if (!post) {
    return <div>Loading...</div>; // or <div>Post not found</div>
  }
  return <BlogDetail post={post} />;
};

export default BlogDetailsPage;
