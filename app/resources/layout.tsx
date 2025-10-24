import { jakarta } from "@/component/font";
import Menu from "@/component/menu";
import Navigation from "@/screen/resources/Navigation";
import { navItems } from "@/utils/libs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description: "Get the best books for your studies",
};

const ResourcesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" relative flex max-w-[1400px] mx-auto min-h-screen">
      <div className="lg:hidden">
        <aside className="fixed top-0 right-0 z-5 w-full bg-white">
          <div className=" bg-white w-full p-4 flex items-end justify-end">
            <div className="lg:hidden p-2 border border-[#e5e7eb] rounded-full">
              <Menu navItems={navItems} />
            </div>
          </div>
        </aside>
      </div>
      <aside className="hidden lg:block ">
        <div className="sticky inset-0 overflow-y-auto h-screen">
          <Navigation />
        </div>
      </aside>

      <main className={`${jakarta.className} w-full mt-24 lg:mt-0`}>
        {children}
      </main>
    </div>
  );
};

export default ResourcesLayout;
