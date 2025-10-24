import Link from "next/link";

const ResourcesPage = () => {
  const resourceItems = [
    { label: "Art", href: "/resources/art" },
    { label: "Business", href: "/resources/business" },
    { label: "Engineering", href: "/resources/engineering" },
    { label: "Law", href: "/resources/law" },
    { label: "Medical", href: "/resources/medical" },
    { label: "Physical Science", href: "/resources/physical-science" },
    { label: "Social Science", href: "/resources/social-science" },
    // { label: "Other", href: "/resources/other" },
  ];
  return (
    <div
      className="relative min-h-screen bg-white 
      bg-[linear-gradient(to_right,rgba(229,231,235,0.3)_1.5px,transparent_1.5px),linear-gradient(to_bottom,rgba(229,231,235,0.3)_1.5px,transparent_1.5px)] 
      bg-[size:150px_150px]"
    >
      <section className=" mt-40">
        <h1 className="text-[2rem] font-bold font-jakarta text-center mb-8 text-[#8B2AFF]">
          Resources
        </h1>
      </section>

      <section className="flex flex-col gap-4 px-4">
        {resourceItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-md xl:text-lg font-extrabold font-jakarta text-[#6b7280] border border-[#e5e7eb] rounded-md p-4 hover:bg-[#f3f4f6] transition-all duration-300"
          >
            {item.label}
          </Link>
        ))}
      </section>
    </div>
  );
};

export default ResourcesPage;
