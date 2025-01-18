export const Avatar = ({ initial }: { initial: string }) => {
  const initialLetter = initial.slice(0, 1);
  return (
    <div className="pr-2 relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {initialLetter}
      </span>
    </div>
  );
};
