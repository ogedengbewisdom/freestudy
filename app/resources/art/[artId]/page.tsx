import { Button } from "@/component/button";
import BookDetails from "@/screen/resources/bookDetails";
import { bookByID } from "@/utils/libs";
import { Facebook, Instagram, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ArtDetailPage = async ({ params }: { params: { artId: string } }) => {
  const { artId } = await params;
  const art = bookByID(artId);
  if (!art) {
    return <div>Art not found</div>;
  }
  return <BookDetails {...art} />;
};

export default ArtDetailPage;
