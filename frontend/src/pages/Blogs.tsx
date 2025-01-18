import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";

function getOrdinalSuffix(date: number) {
  const suffixes = ["th", "st", "nd", "rd"];
  const value = date % 100;
  return suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0];
}

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    // do something until state changes like skeletion loading
  }

  const todayDate = new Date();
  const formattedDate = `${todayDate.getDate()}${getOrdinalSuffix(
    todayDate.getDate()
  )} ${todayDate.toLocaleString("default", {
    month: "short",
  })} ${todayDate.getFullYear()}`;

  return (
    <div>
      {/* {we can use state management for this 'name' in Appbar to make it more dynamic}  */}
      <div className="bg-slate-500">
        <Appbar name="Shubhanshu Trivedi" />
      </div>

      {blogs.map((blog) => (
        <BlogCard
          authorName="Shubhanshu Trivedi"
          title="How an ugly single page make $5000 every month using affiliate marketing"
          content="This website makes $5000 every month using the simple affiliate technique. You can use this technique as well. But how ? Let's explore it together...."
          publishedDate={formattedDate}
        />
      ))}
    </div>
  );
};

// I am not going to render content dynamically for the above BlogCard
