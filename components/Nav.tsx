import React from "react";
import Link from "next/link";

const Nav: React.FC = () => {
  return (
    <ul className="bg-white p-5 flex flex-wrap text-center">
      <li className="font-semibold text-xl flex-1 transition duration-500 text-gray-700 hover:text-blue-600 sm:w-1/2 md:w-1/3">
        <Link href="#about">about.</Link>
      </li>
      <li className="font-semibold text-xl flex-1 transition duration-500 text-gray-700 hover:text-blue-600 sm:w-1/2 md:w-1/3">
        <Link href="#hire">hire me.</Link>
      </li>
      <li className="font-semibold text-xl flex-1 transition duration-500 text-gray-700 hover:text-blue-600 sm:w-1/2 md:w-1/3">
        <Link href="#posts">posts.</Link>
      </li>
      <li className="font-semibold text-xl transition duration-500 text-gray-700 hover:text-blue-600 flex-1 sm:w-1/2 md:w-1/3">
        <Link href="#projects">projects.</Link>
      </li>
    </ul>
  );
};

export default Nav;
