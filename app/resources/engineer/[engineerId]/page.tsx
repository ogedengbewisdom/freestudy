import BookDetails from "@/screen/resources/bookDetails";
import { bookByID } from "@/utils/libs";

const EngineerDetailPage = async ({ params }: { params: Promise<{ engineerId: string }> }) => {
  const { engineerId } = await params;
  const engineer = bookByID(engineerId);
  if (!engineer) {
    return <div>Engineer not found</div>;
  }
  return <BookDetails {...engineer} />;
};

export default EngineerDetailPage;
