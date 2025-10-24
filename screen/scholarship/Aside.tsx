const Aside = () => {
  // Mock data - replace with your actual data

  const latestScholarships = [
    {
      id: 1,
      title: "University of Oxford 2026 Skoll Foundation Scholarship.",
      date: "September 11, 2025",
    },
    {
      id: 2,
      title: "Government of Ireland 2026 Scholarship.",
      date: "September 11, 2025",
    },
    {
      id: 3,
      title: "IAEA Marie Sklodowska-Curie Scholarship 2025.",
      date: "September 11, 2025",
    },
  ];

  return (
    <div className="flex flex-col bg-white py-[14px] px-2 md:px-4 font-jakarta h-full gap-6">
      {/* Recent Posts Section */}
      <div className="flex flex-col gap-3">
        <h3 className="font-[600] text-[0.9rem] text-[#222] leading-[1.7] tracking-wide font-jakarta">
          Latest Scholarship
        </h3>
        <div className="flex flex-col gap-3">
          {latestScholarships.map((scholarship) => (
            <div
              key={scholarship.id}
              className=" lg:p-3 rounded-md hover:bg-[#f9fafb] transition-all duration-300 cursor-pointer"
            >
              <h4 className="font-[500] text-[0.8rem] text-[#222] leading-[1.4] mb-1 font-jakarta">
                {scholarship.title}
              </h4>
              <p className="text-[0.7rem] text-[#6b7280] leading-[1.4] font-jakarta">
                {scholarship.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Aside;
