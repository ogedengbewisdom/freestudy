"use client";

import { useState } from "react";

const SearchSidebar = () => {
  // Mock data - replace with your actual data

  const recentPosts = [
    { id: 1, title: "Getting Started with Next.js", date: "2024-01-15" },
    { id: 2, title: "Modern CSS Techniques", date: "2024-01-12" },
    { id: 3, title: "JavaScript Best Practices", date: "2024-01-10" },
  ];

  return (
    <div className="flex flex-col bg-white py-[14px] px-[1rem] font-jakarta h-full gap-6">
      {/* Recent Posts Section */}
      <div className="flex flex-col gap-3">
        <h3 className="font-[600] text-[0.9rem] text-[#222] leading-[1.7] tracking-wide">
          Recent Posts
        </h3>
        <div className="flex flex-col gap-3">
          {recentPosts.map((post) => (
            <div
              key={post.id}
              className="p-3 rounded-md hover:bg-[#f9fafb] transition-all duration-300 cursor-pointer"
            >
              <h4 className="font-[500] text-[0.8rem] text-[#222] leading-[1.4] mb-1">
                {post.title}
              </h4>
              <p className="text-[0.7rem] text-[#6b7280] leading-[1.4]">
                {new Date(post.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSidebar;
