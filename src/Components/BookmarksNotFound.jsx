import React from "react";
import { Link } from "react-router";

const BookmarksNotFound = () => {
  return (
    <>
      <h2>Bookmarks Not found</h2>
      <div>
        {" "}
        <Link
          to={"/blogs"}
          className="relative inline-block px-4 py-2 font-medium group "
        >
          <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#5577FB] group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span class="absolute inset-0 w-full h-full bg-white border-2 border-[#F56FD0] group-hover:bg-[#5577FB]"></span>
          <span class="relative text-black group-hover:text-white">
            Browse Blogs
          </span>
        </Link>
      </div>
    </>
  );
};

export default BookmarksNotFound;
