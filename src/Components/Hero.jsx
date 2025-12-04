import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="hero -mt-16">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text animate-gradient">
              ByteBlaze
            </span>
          </h1>
          <p className="py-6">
            ByteBlaze is the bridge between the complex world of technology and
            the curious minds eager to understand it
          </p>

          {/* button */}
          <div className="flex gap-2 justify-center">
            <Link
              to={"/blogs"}
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#5577FB] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span class="absolute inset-0 w-full h-full bg-white border-2 border-[#F56FD0] group-hover:bg-[#5577FB]"></span>
              <span class="relative text-black group-hover:text-white">
                Read Blogs
              </span>
            </Link>{" "}
            <Link
              to={"/bookmarks"}
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#5577FB] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span class="absolute inset-0 w-full h-full bg-white border-2 border-[#f56fd0] group-hover:bg-[#5577FB]"></span>
              <span class="relative text-black group-hover:text-white">
                Bookmarks
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
