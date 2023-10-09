import React from "react";

const Contact = () => {
  return (
    <>
      <div className="flex md:flex-wrap h-screen justify-center items-center flex-col">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <div className="flex-1 justify-center items-center">
            <div className="grid grid-cols-1 gap-3">
              <label className="block">
                <span className="text-gray-700">Full name</span>
                <input
                  type="text"
                  className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                  placeholder=""
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Email address</span>
                <input
                  type="email"
                  className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                  placeholder="john@example.com"
                />
              </label>
              <br />
              <label className="block">
                <h1 className=" text-3xl font-semibold m-5">let&apos;s talk</h1>
                <span className="text-gray-700">When do you want to talk?</span>
                <input
                  type="date"
                  className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">
                  What do you want to talk about?
                </span>
                <select className="block w-full mt-0 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black">
                  <option>Job Offer</option>
                  <option>Freelance Project</option>
                  <option>Blog</option>
                  <option>Podcast</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="block">
                <span className="text-gray-700">Additional details</span>
                <textarea className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"></textarea>
              </label>
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 max-w-md text-center">
          <h1 className="text-6xl font-extrabold my-5 transition duration-500 hover:text-blue-600">
            hire me.
          </h1>
          <p className="md:text-xl text-center text-block m-4 md:m-9 md:p-14">
            Ready to collaborate? Let&apos;s chat about how I can bring my
            skills to your team or project
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
