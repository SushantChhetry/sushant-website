import React from "react";
import Image from "next/image";

const Project = () => {
  return (
    <>
      <div
        className="flex flex-wrap h-fit my-10
      "
      >
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center py-12">
          <h1 className="text-6xl font-extrabold my-5 transition duration-500 hover:text-blue-600">
            projects.
          </h1>
          <p className="md:text-xl text-center text-block m-4 md:m-9 md:p-14">
            Check out the cool stuff I&apos;ve been building - from coding
            experiments to passion projects
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 gap-x-5">
            {/* Project 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src="/1.png"
                alt="Project 1"
                className="h-64 w-full object-cover"
                width={250}
                height={250}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Project Title 1</h2>
                <p className="text-gray-600">Project description goes here.</p>
                {/* Add icons or additional information here */}
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src="/2.png"
                alt="Project 2"
                className="h-64 w-full object-cover"
                width={250}
                height={250}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Project Title 2</h2>
                <p className="text-gray-600">Project description goes here.</p>
                {/* Add icons or additional information here */}
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src="/3.png"
                alt="Project 3"
                className="h-64 w-full object-cover"
                width={250}
                height={250}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Project Title 3</h2>
                <p className="text-gray-600">Project description goes here.</p>
                {/* Add icons or additional information here */}
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src="/4.png"
                alt="Project 4"
                className="h-64 w-full object-cover"
                width={250}
                height={250}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Project Title 4</h2>
                <p className="text-gray-600">Project description goes here.</p>
                {/* Add icons or additional information here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
