import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { getBlogs } from "../utils";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const blogs = getBlogs();
    setBlogs(blogs);
  }, []);
  return (
    <div className="grid px-4 sm:px-8 lg:px-12 py-8 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard deletable={true} key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Bookmarks;
