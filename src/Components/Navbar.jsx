import React, { useEffect, useState } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

const Navbar = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };
  const isDark = theme === "synthwave";

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const savedTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", savedTheme);
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
        <ul
          className={`flex text-black items-center gap-6 px-1 cursor-pointer font-semibold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
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
            <input
              onChange={handleToggle}
              type="checkbox"
              className="toggle toggle-secondary"
              checked={isDark}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
