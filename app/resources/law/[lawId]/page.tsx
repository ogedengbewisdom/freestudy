import BookDetails from "@/screen/resources/bookDetails";
import { bookByID } from "@/utils/libs";

const LawDetailPage = async ({ params }: { params: { lawId: string } }) => {
  const { lawId } = await params;
  const law = bookByID(lawId);
  if (!law) {
    return <div>Law not found</div>;
  }
  return <BookDetails {...law} />;
};

export default LawDetailPage;
