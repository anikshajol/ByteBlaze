import React from "react";
import { Link, useLoaderData, useNavigation } from "react-router";
import brokenImage from "../assets/404.jpg";
import BlogsCard from "../Components/BlogsCard";
import Loader from "../Components/Loader";

const Blogs = () => {
  const blogs = useLoaderData();
  // console.log(blogs[0]);
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  // if (navigation.state === "loading") return <Loader />;

  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      {isNavigating && <Loader />}
      <div
        className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12"
        bis_skin_checked="1"
      >
        <Link className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
          <img
            src={blogs[0].cover_image || brokenImage}
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5" bis_skin_checked="1">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              {blogs[0].title}
            </h3>
            <span className="text-xs dark:text-gray-600">
              {new Date(blogs[0].published_at).toLocaleDateString()}
            </span>
            <p>{blogs[0].description}</p>
          </div>
        </Link>

        <div
          className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          bis_skin_checked="1"
        >
          {blogs.map((blog) => (
            <BlogsCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* <div className="flex justify-center" bis_skin_checked="1">
          <button
            type="button"
            className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600"
          >
            Load more posts...
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Blogs;
