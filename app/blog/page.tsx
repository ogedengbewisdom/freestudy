import { AddBlogButton } from "@/screen/blog/addBlog";
import BlogCard from "@/screen/blog/blogCard";
import { initialBlogPosts } from "@/utils/libs";
import { SearchIcon } from "lucide-react";

const BlogPage = () => {
  return (
    <div>
      <section className=" sticky top-20 lg:top-10 bg-white z-3 px-2 xl:px-0">
        <AddBlogButton />
      </section>
      <section className="mt-24 lg:mt-15 px-2 xl:px-0">
        <div className=" relative w-full">
          <SearchIcon className="w-4 h-4 text-[#353a44] absolute top-1/2 left-2 -translate-y-1/2" />
          <input
            placeholder="Search post"
            className="w-full pl-8 rounded-md border border-[#e5e7eb] py-2 px-4"
          />
        </div>
      </section>
      <section className=" grid grid-cols-1 xl:grid-cols-2 gap-4 mx-auto mt-20 px-2 2xl:px-0 max-w-[800px]">
        {initialBlogPosts.map((post) => (
          <BlogCard
            key={post.id}
            post={post}
            onReadMore={() => {}}
            onLike={() => {}}
          />
        ))}
      </section>
    </div>
  );
};

export default BlogPage;
