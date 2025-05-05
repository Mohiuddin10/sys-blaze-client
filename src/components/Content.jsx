import { useLoaderData } from "react-router-dom";
import placeholderImage from "../assets/404.png";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
  const blog = useLoaderData();
  const { title, description, published_at, cover_image, tags, body_html } =
    blog;
  return (
    <div className="mx-auto group hover:no-underline border p-2 border-opacity-30 focus:no-underline">
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 dark:bg-gray-500 dark:bg-gray-500"
        src={cover_image || placeholderImage}
      />

      {/* tag start  */}
      {tags.map((t) => (
        <a
          key={t}
          rel="noopener noreferrer"
          href="#"
          className="px-3 py-1 rounded-sm hover:underline"
        >
          #{t}
        </a>
      ))}
      {/* tag end  */}
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
      </div>
    </div>
  );
};

export default Content;
