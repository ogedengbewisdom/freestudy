import SearchSidebar from "@/screen/blog/searchSidebar";
import Header from "@/screen/home/header";
import Aside from "@/screen/scholarship/Aside";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Scholarships, Grants, Fellowships & Internships Worldwide | Freestudy",
  description:
    "Find and apply for scholarships, grants, fellowships, and internships to support your academic and career journey.",
};

const ScholarshipLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" relative">
      <header className="fixed top-4 inset-x-0 z-10">
        <div className="max-w-[1400px] mx-auto px-2 md:px-4 2xl:px-0">
          <Header />
        </div>
      </header>
      <div className=" mt-24 font-jakarta max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between relative">
        <main className="w-full">{children}</main>
        <aside className="border-l border-[#e5e7eb] mt-10 lg:mt-0">
          <div className="sticky top-28 overflow-y-auto">
            <Aside />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ScholarshipLayout;
