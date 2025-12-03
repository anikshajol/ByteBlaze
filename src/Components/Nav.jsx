import React, { useEffect, useState } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

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
        <a className="btn gap-0 btn-ghost text-2xl font-bold text-pink-500">
          Byte<span className="text-blue-900">Blaze</span>
        </a>
      </div>
      {/* navigation link */}
      <div className="flex-none">
        <ul className="flex items-center gap-6 px-1 cursor-pointer font-semibold">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Blogs</a>
          </li>
          <li>
            <a>Bookmarks</a>
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
