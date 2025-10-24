import BookDetails from "@/screen/resources/bookDetails";
import { bookByID } from "@/utils/libs";

const MedicalDetailPage = async ({
  params,
}: {
  params: Promise<{ medicalId: string }>;
}) => {
  const { medicalId } = await params;
  const medical = bookByID(medicalId);
  if (!medical) {
    return <div>Medical not found</div>;
  }
  return <BookDetails {...medical} />;
};

export default MedicalDetailPage;
