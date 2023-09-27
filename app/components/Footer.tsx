import React from "react";
import { FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white py-4">
      <div className="flex justify-center">
        <Link href="#" className="mr-4  hover:text-blue-600">
          <FaTwitter size={20} />
        </Link>
        <Link href="#" className="mr-4  hover:text-blue-600">
          <FaLinkedin size={20} />
        </Link>
        <Link href="#" className=" hover:text-blue-600">
          <FaEnvelope size={20} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
