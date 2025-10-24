import { Button } from "@/component/button";
import Header from "@/screen/home/header";
import googleIcon from "@/public/google.82c899b0.svg";
import whiteArrow from "@/public/white-arrow.dd1ae13e.svg";
import starsIcon from "@/public/stars.svg";
import avatar1 from "@/public/avatar-1.jpg";
import avatar2 from "@/public/avatar-2.jpg";
import avatar3 from "@/public/avatar-3.jpg";
import avatar4 from "@/public/avatar-4.jpg";
import Image from "next/image";
import Accordion from "@/component/accordion";
import { FAQS } from "@/utils/libs";
import { ArrowRightIcon } from "lucide-react";
import Footer from "@/component/footer";

const avatars = [avatar1, avatar2, avatar3, avatar4];

export default function Home() {
  return (
    <div
      className="relative min-h-screen bg-white 
      bg-[linear-gradient(to_right,rgba(229,231,235,0.3)_1.5px,transparent_1.5px),linear-gradient(to_bottom,rgba(229,231,235,0.3)_1.5px,transparent_1.5px)] 
      bg-[size:150px_150px]"
    >
      <div className=" fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -bottom-40 -right-40 w-[700px] h-[700px] 
        bg-[radial-gradient(circle,rgba(139,92,246,0.2)_0%,rgba(139,92,246,0.05)_50%,transparent_90%)] 
        opacity-60 rounded-full"
        />
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] 
        bg-[radial-gradient(circle,rgba(168,85,247,0.15)_0%,rgba(168,85,247,0.05)_40%,transparent_80%)] 
        opacity-70 rounded-full"
        />
      </div>
      <div className="relative">
        <header className="fixed top-4 inset-x-0 z-10">
          <div className="max-w-[1400px] mx-auto px-4 2xl:px-0">
            <Header />
          </div>
        </header>
        <main className="relative flex items-center justify-center min-h-screen pt-36 md:pt-48 lg:pt-56 pb-16 flex-col gap-y-10 px-4">
          <section className="mx-auto w-full max-w-[1200px] px-2">
            <h1 className="text-balance text-center font-jakarta text-[40px] md:text-[40px] font-bold leading-[1.2] tracking-[-1.2px] lg:text-[68px] lg:leading-[1.2]">
              Excel in Your Studies. Transform Your{" "}
              <span className="text-[#8B2AFF]">Academic Journey.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-[564px] text-[#363d4f] text-center tracking-[-0.32px] md:text-lg font-jakarta font-medium leading-[1.7]">
              Access curated study resources, connect with mentors, and build
              the habits that lead to academic success and personal growth.
            </p>
            <div className="mx-auto mt-9 w-full max-w-fit flex justify-center gap-3">
              <Button
                background="white"
                border="1px solid #e5e7eb"
                className="hidden md:flex py-4 px-7 hover:!bg-[#f3f4f6] transition-all duration-300"
              >
                <Image src={googleIcon} alt="" width={20} height={20} />
                <span className="text-[1.25rem] font-bold text-[#222] tracking-wide leading-[1.7] font-inter">
                  Join with Google
                </span>
              </Button>
              <Button
                background="linear-gradient(90deg, #882aff, color-mix(in srgb, #a259ff 85%, #882aff) 50%, #882aff)"
                border="5px solid #d7b8ff"
                className="py-4 px-7"
              >
                <span className="text-[1.25rem] font-[600] text-[#fff] tracking-wide leading-[1.7] font-jakarta">
                  Get Started for Free
                </span>
                <Image src={whiteArrow} alt="" />
              </Button>
            </div>
            <div className="mx-auto mt-9 flex w-full max-w-[290px]">
              <div className="flex gap-3">
                <div className="flex shrink-0 -space-x-3">
                  {avatars.map((avatar) => (
                    <div
                      className="size-10 overflow-hidden rounded-full border-[2px] border-white"
                      key={avatar.src}
                    >
                      <Image src={avatar} alt="avatar" />
                    </div>
                  ))}{" "}
                </div>
                <div className="">
                  <Image src={starsIcon} alt="stars" />
                  <p className=" text-[#363d4f] font-jakarta text-xs tracking-[-0.24px]">
                    4k+ Resources Created
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full">
            <div className="text-center mb-12 max-w-4xl mx-auto px-6">
              <h2 className="text-center font-jakarta text-[32px] font-bold leading-tight tracking-[-1.68px] lg:text-[56px] lg:leading-tight">
                Have Questions?
              </h2>
              <p className="mt-3 tracking-[0.32px] md:text-lg font-jakarta">
                If you can't find what you're looking for, feel free to reach
                out!
              </p>
            </div>

            <div className=" space-y-4 max-w-5xl mx-auto px-1 md:px-4 lg:px-6 w-full">
              {FAQS.map((faq) => (
                <Accordion key={faq.index} item={faq} />
              ))}

              <div className="text-center mt-12">
                <p className="text-gray-600 mb-4">
                  Still have questions? We're here to help!
                </p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Contact Support
                </button>
              </div>
            </div>
          </section>
          <section className="w-full max-w-6xl mx-auto rounded-2xl bg-violet-500 flex flex-col md:flex-row md:items-end p-8 gap-16 ">
            <div className="">
              <p
                className={
                  " font-jakarta mb-3 text-left text-xs font-semibold uppercase tracking-[1.44px] md:mb-8 !text-white"
                }
              >
                LET'S TRY!
              </p>
              <h2 className="text-left font-jakarta text-[32px] font-normal leading-tight tracking-[-1.8px] text-white lg:text-[60px] lg:leading-tight">
                Start creating magic today with a{" "}
                <span className="text-[#ffe600]">free trial!</span>
              </h2>
            </div>
            <div>
              <Button
                background="#FFF"
                border="5px solid #D7B8FF"
                className="py-3 px-4 text-center"
              >
                <span className=" text-[1.125rem] font-normal text-[#0d0d12] tracking-wide leading-[1.7] !font-jakarta whitespace-nowrap text-center">
                  Get Started for Free
                </span>
                <ArrowRightIcon className="w-6 h-6 text-[#222]" />
              </Button>
            </div>
          </section>
        </main>
        <footer className="mt-10 px-4 border-t border-[#e5e7eb]">
          <div className="max-w-[1400px] mx-auto">
            <Footer />
          </div>
        </footer>
      </div>
    </div>
  );
}
