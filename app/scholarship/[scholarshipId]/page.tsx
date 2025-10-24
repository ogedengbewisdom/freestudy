import { Button } from "@/component/button";
import { scholarshipByID } from "@/utils/libs";
import { Clock } from "lucide-react";

interface ScholarshipProps {
  params: {
    scholarshipId: string;
  };
}

const ScholarshipDetailPage = async ({ params }: ScholarshipProps) => {
  const { scholarshipId } = await params;

  const scholarship = scholarshipByID(scholarshipId);

  if (!scholarship) {
    return <div>Scholarship not found</div>;
  }

  return (
    <div className="mt-3 mb-0 lg:mb-10 px-2 md:px-4">
      <section className="bg-[#F5F5F5] rounded-sm p-4 lg:p-8 xl:p-10">
        <div className="flex items-center gap-2 flex-wrap mb-4">
          {scholarship.category.map((category) => (
            <div className=" bg-purple-600 px-2 rounded-md" key={category}>
              <span className=" font-jakarta text-[0.8rem] text-[#fff] font-bold">
                {category}
              </span>
            </div>
          ))}
        </div>
        <h1 className="font-bold text-xl md:text-2xl font-jakarta">
          {scholarship.title}
        </h1>
        <div className="flex items-center gap-2 mt-2">
          <span>
            <Clock className="w-4 h-4" />
          </span>
          <span className="text-[0.8rem] font-jakarta text-[#6b7280]">
            {scholarship.datePosted}
          </span>
        </div>
        <p className="text-[1.1rem] leading-relaxed text-[#4A4A4A] mt-7 font-jakarta">
          {scholarship.description}
        </p>
        <div className="mt-5">
          <div
            className="scholarship-content font-jakarta text-gray-700 leading-7"
            dangerouslySetInnerHTML={{ __html: scholarship.content }}
          />
        </div>

        <div className="mt-5">
          <Button
            background="linear-gradient(90deg, #882aff, color-mix(in srgb, #a259ff 85%, #882aff) 50%, #882aff)"
            border="3px solid #d7b8ff"
            className="px-2 md:px-4 py-2 whitespace-nowrap rounded-md w-fit"
          >
            <span className="text-[0.65rem] md:text-[0.85rem] font-[600] text-[#fff] tracking-wide leading-[1.7] font-jakarta">
              Apply Now
            </span>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ScholarshipDetailPage;
