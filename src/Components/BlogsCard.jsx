import { Link } from "react-router";

const BlogsCard = ({ blog }) => {
  //   console.log(blog);
  const { id, cover_image, title, description, published_at } = blog;

  return (
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
  );
};

export default BlogsCard;
