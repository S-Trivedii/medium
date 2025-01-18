import { Avatar } from "./Avatar";

interface BlogCardProps {
  authorName: string;
  publishedDate: string;
  title: string;
  content: string;
}

export const BlogCard = ({
  authorName,
  publishedDate,
  title,
  content,
}: BlogCardProps) => {
  return (
    <>
      <div className="max-w-xl mx-auto mt-4">
        <div className="flex items-center mb-2">
          <Avatar initial={authorName} />
          <div className="mx-2 font-light">{authorName}</div>
          <div className="mx-2 font-thin text-slate-400"> {publishedDate}</div>
        </div>
        <div className="mb-2">
          <div className="text-xl font-semibold">{title}</div>
          <div className="text-lg">{content}</div>
        </div>
        <div className="border-b border-gray-300 h-1 w-full"></div>
      </div>
    </>
  );
};
