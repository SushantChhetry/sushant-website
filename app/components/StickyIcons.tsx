import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const StickyIcons = () => {
  return (
    <div className="fixed top-0 right-0 h-screen flex flex-col justify-center items-center space-y-4 mx-4">
      <div className="bg-white p-4 rounded-full shadow-md">
        <Link href="https://www.facebook.com">
          <FaFacebook size={24} color="#1877F2" />
        </Link>
      </div>
      <div className="bg-white p-4 rounded-full shadow-md">
        <Link href="https://www.twitter.com">
          <FaTwitter size={24} color="#1DA1F2" />
        </Link>
      </div>
      <div className="bg-white p-4 rounded-full shadow-md">
        <Link href="https://www.instagram.com">
          <FaInstagram size={24} color="#E1306C" />
        </Link>
      </div>
    </div>
  );
};

export default StickyIcons;
