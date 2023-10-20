import React from "react";
import { FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white py-4">
      <div className="flex justify-center">
        <Link href="https://x.com/SushantChhetryy" className="mr-4  hover:text-blue-600">
          <FaTwitter size={20} />
        </Link>
        <Link href="https://www.linkedin.com/in/sushantchhetry" className="mr-4  hover:text-blue-600">
          <FaLinkedin size={20} />
        </Link>
        <Link href="sushantchhetrywork@gmail.com" className=" hover:text-blue-600">
          <FaEnvelope size={20} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
