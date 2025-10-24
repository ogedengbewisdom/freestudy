import BookDetails from "@/screen/resources/bookDetails";
import { bookByID } from "@/utils/libs";

const ArtDetailPage = async ({ params }: { params: Promise<{ artId: string }> }) => {
  const { artId } = await params;
  const art = bookByID(artId);
  if (!art) {
    return <div>Art not found</div>;
  }
  return <BookDetails {...art} />;
};

export default ArtDetailPage;
