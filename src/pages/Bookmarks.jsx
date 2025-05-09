import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { getBlogs, removeBookmark } from "../utils";
import EmptyState from "../components/EmptyState";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const blogs = getBlogs();
    setBlogs(blogs);
  }, []);

  const handleRemoveBookmark = (id) => {
    console.log(id);
    removeBookmark(id);
    const blogs = getBlogs();
    setBlogs(blogs);
  };
  if (blogs.length === 0) {
    return (
      <EmptyState
        messagge={"No Bookmarked Added"}
        address="/blogs"
        label="Go to Blogs"
      ></EmptyState>
    );
  }
  return (
    <div className="grid px-4 sm:px-8 lg:px-12 py-8 justify-center grid-cols-1 md:gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard
          handleRemoveBookmark={handleRemoveBookmark}
          deletable={true}
          key={blog.id}
          blog={blog}
        />
      ))}
    </div>
  );
};

export default Bookmarks;
