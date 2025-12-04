import React, { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";

import { Link } from "react-router";

const Tab = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div
      className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800"
      bis_skin_checked="1"
    >
      <Link
        to=""
        onClick={() => setTabIndex(0)}
        className={`flex items-center flex-shrink-0 border-gray-200 px-5 py-3 space-x-2 ${
          tabIndex === 0
            ? "border border-b-0 border-gray-200 rounded-t-lg "
            : "border-b border-gray-200"
        } dark:border-gray-600 dark:text-gray-600`}
      >
        <span>
          <CiBookmark />
        </span>
        <span>Content</span>
      </Link>

      <Link
        to={`author`}
        onClick={() => setTabIndex(1)}
        className={`flex items-center flex-shrink-0 border-gray-200 px-5 py-3 space-x-2  ${
          tabIndex === 1
            ? "border border-b-0 border-gray-200 rounded-t-lg "
            : "border-b  border-gray-200"
        }rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
      >
        <span>
          <IoBookOutline />
        </span>
        <span>Author</span>
      </Link>
    </div>
  );
};

export default Tab;
