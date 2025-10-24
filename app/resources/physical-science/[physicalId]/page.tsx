import BookDetails from "@/screen/resources/bookDetails";
import { bookByID } from "@/utils/libs";

const PhysicalScienceDetailPage = async ({
  params,
}: {
  params: Promise<{ physicalId: string }>;
}) => {
  const { physicalId } = await params;
  const physical = bookByID(physicalId);
  if (!physical) {
    return <div>Physical Science not found</div>;
  }
  return <BookDetails {...physical} />;
};

export default PhysicalScienceDetailPage;
