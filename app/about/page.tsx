import React from "react";
import Image from "next/image";

function About() {
  return (
    <>
      <div className="flex flex-wrap h-screen">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src="/profile pic.jpg"
            width={300}
            height={300}
            alt="display pic"
            className="rounded-full shadow-lg my-13  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center py-12">
          <h1 className="text-6xl	 font-extrabold my-5 transition duration-500 hover:text-blue-600">
            about.
          </h1>
          <p className="md:text-xl text-center text-block m-4 md:m-9 md:p-14">
            I&apos;m a creative engineer who builds delightful web experiences.
            I can advise your company about <strong>web platform</strong>,
            performance, creative user interactions, and usable machine
            learning.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
