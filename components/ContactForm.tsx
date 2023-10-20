"use client";

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const notifySuccess = () => toast("Email Sent");
  const notifyFail = () => toast("Email Send Failed: Try Again Later!");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      date: String(event.target.date.value),
      select: String(event.target.select.value),
      message: String(event.target.message.value),
    };

    const response = await fetch("api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      notifySuccess();
    }

    if (!response.ok) {
      notifyFail();
    }

    console.log(data);
  };

  return (
    <div>
      <form
        className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white "
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 gap-3">
          <label className="block">
            <span className="text-gray-700">Full name</span>
            <input
              id="name"
              type="text"
              className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
              autoComplete="off"
              placeholder=""
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Email address</span>
            <input
              id="email"
              type="email"
              autoComplete="off"
              className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
              placeholder="john@example.com"
            />
          </label>
          <br />
          <label className="block">
            <h1 className=" text-3xl font-semibold m-5">let&apos;s talk</h1>
            <span className="text-gray-700">When do you want to talk?</span>
            <input
              id="date"
              type="date"
              className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">
              What do you want to talk about?
            </span>
            <select
              id="select"
              className="block w-full mt-0 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
            >
              <option>Job Offer</option>
              <option>Freelance Project</option>
              <option>Blog</option>
              <option>Podcast</option>
              <option>Other</option>
            </select>
          </label>
          <label className="block">
            <span className="text-gray-700">Additional details</span>
            <textarea
              id="message"
              autoComplete="off"
              rows={4}
              className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
