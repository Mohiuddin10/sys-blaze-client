import { Link } from "react-router-dom";
import placeholderImage from "../assets/404.png";

const BlogCard = ({ blog }) => {
  const { title, description, published_at, cover_image, id } = blog;
  return (
    <Link
      to={`/blog/${id}`}
      className="max-w-sm mx-auto group hover:no-underline transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 focus:no-underline"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 dark:bg-gray-500 dark:bg-gray-500"
        src={cover_image || placeholderImage}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <span className="text-xs dark:text-gray-600 dark:text-gray-600">
          {new Date(published_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
