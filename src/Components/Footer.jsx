import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 shadow-2xl text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            ByteBlaze Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
