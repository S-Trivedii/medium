import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

export const Appbar = ({ name }: { name: string }) => {
  const fisrtWord = name.slice(0, 1);
  return (
    <div className="flex justify-between items-center max-w-5xl mx-auto py-4 mb-10">
      <div className="font-bold text-3xl cursor-pointer">
        <Link to="/blogs">Medium</Link>
      </div>
      <div>
        <Avatar initial={fisrtWord} />
      </div>
    </div>
  );
};
