import { useEffect, useState } from "react";
import {
  getFromLocalStorage,
  handleDeleteFromLocalStorage,
} from "../utilities/localstorage";
import BlogsCard from "../Components/BlogsCard";
import BookmarksNotFound from "../Components/BookmarksNotFound";

const Bookmarks = () => {
  // const [bookmarks, setBookmarks] = useState(() => getFromLocalStorage() || []);
  const [bookmarks, setBookmarks] = useState([]);
  useEffect(() => {
    const stored = getFromLocalStorage() || [];
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBookmarks(stored);
  }, []);
  console.log(bookmarks);
  const handleDeleteFromBookmark = (blog) => {
    handleDeleteFromLocalStorage(blog);
    const stored = getFromLocalStorage();
    setBookmarks(stored);
  };

  return (
    <>
      {bookmarks.length === 0 && (
        <div className="min-h-[calc(100vh-116px)]">
          <BookmarksNotFound />
        </div>
      )}
      <div className="pt-8 min-h-[calc(100vh-64px-52px)]">
        <div
          className="grid justify-center  grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          bis_skin_checked="1"
        >
          {bookmarks.map((blog) => (
            <BlogsCard
              handleDeleteFromBookmark={handleDeleteFromBookmark}
              deletable={true}
              key={blog.id}
              blog={blog}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Bookmarks;
