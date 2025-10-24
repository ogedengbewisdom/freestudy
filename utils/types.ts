export type CommentProps = {
  id: string;
  author: string;
  text: string;
  date: Date;
};

export type PostProps = {
  id: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string[];
  likes: number;
  image?: string;
  comments: CommentProps[];
};
