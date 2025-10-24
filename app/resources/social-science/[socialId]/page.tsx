import BookDetails from "@/screen/resources/bookDetails";
import { bookByID } from "@/utils/libs";

const SocialScienceDetailPage = async ({
  params,
}: {
  params: { socialId: string };
}) => {
  const { socialId } = await params;
  const social = bookByID(socialId);
  if (!social) {
    return <div>Social Science not found</div>;
  }
  return <BookDetails {...social} />;
};

export default SocialScienceDetailPage;
