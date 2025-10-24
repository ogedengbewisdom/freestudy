import BookDetails from "@/screen/resources/bookDetails";
import { bookByID } from "@/utils/libs";

const BusinessDetailPage = async ({ params }: { params: Promise<{ businessId: string }> }) => {
  const { businessId } = await params;
  const business = bookByID(businessId);
  if (!business) {
    return <div>Business not found</div>;
  }
  return <BookDetails {...business} />;
};

export default BusinessDetailPage;
