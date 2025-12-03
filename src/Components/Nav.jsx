import React, { useEffect, useState } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { Link, NavLink } from "react-router";
import "./Nav.css";
const Nav = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  const handleToggle = () => {
    setTheme((prev) => (prev === "light" ? "synthwave" : "light"));
  };

  const isDark = theme === "synthwave";

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const savedFromLs = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", savedFromLs);
  }, [theme]);

  return (
    <nav className="navbar bg-base-100 shadow-lg fixed z-10 px-12">
      {/* logo */}
      <div className="flex-1 ">
        <Link
          to={"/"}
          className="btn gap-0 btn-ghost text-2xl font-bold text-pink-500"
        >
          Byte<span className="text-blue-900">Blaze</span>
        </Link>
      </div>
      {/* navigation link */}
      <div className="flex-none">
        <ul
          className={`flex items-center gap-6 px-1 cursor-pointer font-semibold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-red-600 font-bold" : "font-bold"
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                `${isActive ? "text-primary font-bold" : "font-bold"}
               ${isPending ? "loading-spinner" : ""}`.trim()
              }
              to={"/blogs"}
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "font-bold"
              }
              to={"/bookmarks"}
            >
              Bookmarks
            </NavLink>
          </li>
          <li>
            <span onClick={handleToggle}>
              {!isDark ? <BsToggleOff size={34} /> : <BsToggleOn size={34} />}
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
