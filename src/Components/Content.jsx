import React from "react";
import { useLoaderData } from "react-router";
import NoImage from "../assets/404.jpg";

import Markdown from "react-markdown";

const Content = () => {
  const blog = useLoaderData();
  // console.log(blog);
  const { cover_image, title, tags, body_markdown } = blog;

  return (
    <div className="" bis_skin_checked="1">
      <div className="max-w-full border p-2 border-gray-300 mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
        <img
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src={cover_image}
        />
        <div bis_skin_checked="1">
          <div
            className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600"
            bis_skin_checked="1"
          >
            {tags.map((tag, index) => (
              <a
                rel="noopener noreferrer"
                href="#"
                key={index}
                className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
              >
                #{tag}
              </a>
            ))}
          </div>
        </div>
        <div className="p-6 space-y-2" bis_skin_checked="1">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-lg dark:text-gray-600">{body_markdown}</span>
          {/* <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown> */}
        </div>
      </div>
    </div>
  );
};

export default Content;
