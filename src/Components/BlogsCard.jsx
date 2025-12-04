import { Link } from "react-router";
import Loader from "./Loader";
import { MdDeleteForever } from "react-icons/md";

const BlogsCard = ({ blog, handleDeleteFromBookmark, deletable }) => {
  //   console.log(blog);
  const { id, cover_image, title, description, published_at } = blog;

  return (
    <div className="flex relative">
      {/* {isNavigating && <Loader />} */}
      <Link
        to={`${id}`}
        className="max-w-sm hover:scale-105 border border-gray-300 transition-all p-1.5 hover:border-[#F56FD0] mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src={cover_image}
        />
        <div className="p-6 space-y-2" bis_skin_checked="1">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs dark:text-gray-600">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>

      {deletable && (
        <span
          onClick={() => handleDeleteFromBookmark(blog)}
          className="absolute right-2 -top-4 cursor-pointer"
        >
          <MdDeleteForever
            color="#F56FD0"
            className="bg-[#5577FB] rounded-full"
            size={30}
          />
        </span>
      )}
    </div>
  );
};

export default BlogsCard;
