import React from "react";
import { Outlet, useLoaderData } from "react-router";
import Tab from "../Components/Tab";

const Blog = () => {
  const blog = useLoaderData();
  //   console.log(blog);

  return (
    <div
      className="max-w-2xl px-6 py-16 mx-auto space-y-12"
      bis_skin_checked="1"
    >
      <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
        <div className="space-y-6" bis_skin_checked="1">
          <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
            {blog?.title}
          </h1>
          <div
            className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600"
            bis_skin_checked="1"
          >
            <div
              className="flex items-center md:space-x-2"
              bis_skin_checked="1"
            >
              <p className="text-sm">
                {blog.reading_time_minutes} min read •
                {new Date(blog.published_at).toLocaleDateString()}
              </p>
            </div>
            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
              {blog.comments_count} Comments • {blog.positive_reactions_count}{" "}
              Views
            </p>
          </div>
        </div>
        <div className="dark:text-gray-800" bis_skin_checked="1">
          <Tab />
        </div>
        <Outlet></Outlet>
      </article>
    </div>
  );
};

export default Blog;
