import React from "react";
import Image from "next/image";

const Creative = () => {
  const posts = [
    {
      title: "Navigating Challenges & Embracing",
      url: "https://dev.to/sushantchhetryy/navigating-challenges-and-embracing-growth-insights-from-a-software-engineers-journey-3mi0",
      desc: "Empowering junior developers to reach their full potential.",
      img: "",
    },
    {
      title: "Managing Imposter Syndrome",
      url: "https://dev.to/sushantchhetryy/managing-imposter-syndrome-overcoming-self-doubt-as-a-developer-4a3p",
      desc: "Strategies for overcoming imposter syndrome and building confidence.",
      img: "",
    },
    {
      title: "Rising Above Mediocrity",
      url: "https://dev.to/sushantchhetryy/rising-above-mediocrity-unleashing-the-potential-of-junior-developers-11gi",
      desc: "Exploring Strategies for Achieving Excellence.",
      img: "",
    },
  ];

  return (
    <div className="flex flex-wrap md:h-screen h-fit flex-col-reverse md:flex-row m-5">
      <div className="w-full md:w-1/2 flex justify-center items-center flex p-8 flex-col">
        <h1 className="text-4xl font-semibold mb-4">Recent Posts</h1>
        <div className="space-y-4">
          {posts.map((post, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg p-4 shadow-md transition transform hover:scale-105 hover:shadow-lg "
            >
              <div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600">{post.desc}</p>
                <a
                  href={post.url}
                  className="text-blue-600 hover:underline block mt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center py-12">
        <h1 className="text-6xl font-extrabold my-5 transition duration-500 hover:text-blue-600">
          posts.
        </h1>
        <p className="md:text-xl text-center text-block m-4 md:m-9 md:p-14">
          Explore my thoughts, insights, and experiences through a collection of
          informative and engaging blog posts
        </p>
      </div>
    </div>
  );
};

export default Creative;
