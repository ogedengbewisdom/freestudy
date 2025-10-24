import Footer from "@/component/footer";
import Header from "@/screen/blog/header";
import SearchSidebar from "@/screen/blog/searchSidebar";
import React from "react";

import type { Metadata } from "next";
import Menu from "@/component/menu";
import { navItems } from "@/utils/libs";

export const metadata: Metadata = {
  title: "Freestudy - Blog post",
  description: "Share what is in your mind",
};

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex max-w-[1400px] mx-auto">
      <div className="hidden lg:block">
        <aside className="border-r border-[#e5e7eb] flex-shrink-0 sticky top-0 overflow-y-hidden h-screen">
          <Header />
        </aside>
      </div>
      <div className="lg:hidden">
        <aside className="fixed top-0 right-0 z-5 w-full bg-white">
          <div className=" bg-white w-full p-4 flex items-end justify-end">
            <div className="lg:hidden p-2 border border-[#e5e7eb] rounded-full">
              <Menu navItems={navItems} />
            </div>
          </div>
        </aside>
      </div>

      <div className="flex flex-col flex-grow">
        <main className="max-w-[1400px] py-4 mx-auto flex-grow">
          {children}
        </main>
        <footer className="px-[0.5rem] md:px-[1.5rem] border-t border-[#e5e7eb] flex-shrink-0">
          <div className="max-w-[1400px] mx-auto">
            <Footer />
          </div>
        </footer>
      </div>
      <aside className="hidden lg:flex border-l border-[#e5e7eb] right-0 flex-shrink-0 sticky top-0 overflow-y-hidden h-screen">
        <SearchSidebar />
      </aside>
    </div>
  );
};

export default BlogLayout;
