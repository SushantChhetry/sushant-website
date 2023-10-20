import React from "react";
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";

const Project = () => {
  return (
    <div className="flex flex-wrap min-h-screen">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center py-12">
        <h1 className="text-6xl font-extrabold my-5 transition duration-500 hover:text-blue-600">
          projects.
        </h1>
        <p className="md:text-xl text-center text-block m-4 md:m-9 md:p-14">
          Check out the cool stuff I&apos;ve been building - from coding
          experiments to passion projects.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="flex flex-col md:flex-row p-6">
          {/* Project 1 */}
          <Link href="https://med-blog-chhetry.vercel.app/" target="_blank">
            <ProjectCard
              title="Med Me"
              imageSrc="/1.png"
              description="Blogs from a pre-med student"
              icons={["react"]}
              altText="med me"
            />
          </Link>
          {/* Project 2 */}
          <Link
            href="https://alumni-weekend-react-app.vercel.app/"
            target="_blank"
          >
            <ProjectCard
              title="Alumni Event"
              imageSrc="/2.png"
              description="Website for an alumnus event"
              icons={["react"]}
              altText="med me"
            />
          </Link>
          {/* Project 3 */}
          <Link href="https://leet-gpt.vercel.app/" target="_blank">
            <ProjectCard
              title="Leet GPT"
              imageSrc="/3.png"
              description="ChatGPT interface for Leetcode hints"
              icons={["react"]}
              altText="med me"
            />
          </Link>
          {/* Project 4 */}
          {/* <Link href="https:/www.google.com" target="_blank">
            <ProjectCard
              title="Airwalker"
              imageSrc="/4.png"
              description="Website for a drone business."
              icons={["react"]}
              altText="med me"
            />
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Project;
